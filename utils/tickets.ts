import { EntriesForTicketQuery, TicketQuery } from './graphqlSdk'
import { LocalDate } from '@js-joda/core'
import _ from 'lodash'

type SingleTicket = TicketQuery['tickets_by_pk']
type Entries = EntriesForTicketQuery['entries']

export type EntryValidationReasons =
  | 'FIRST_ENTRY'
  | 'REENTRY'
  | 'NOT_PAID'
  | 'ALREADY_INSIDE'
  | 'NOT_VALID_FOR_THIS_FACILITY'
  | 'USED'

type EntryValidationResultType = {
  valid: boolean
  reason: EntryValidationReasons
  lastEntry: boolean
}

// TODO this will be the fun part
export const isTicketValidForEntry = (
  ticket: SingleTicket,
  ticketEntries: Entries,
  facility: string
) => {
  if (!ticket.was_paid) {
    return {
      valid: false,
      reason: 'NOT_PAID',
      lastEntry: null,
    }
  }

  const orderedEntries = _.orderBy(
    ticketEntries,
    ['entry_date', 'updated_at'],
    ['desc', 'desc']
  )
  const lastEntry = orderedEntries[0]

  // if paid & no entry exist, ticket is definitely valid
  if (!lastEntry) {
    return {
      valid: true,
      reason: 'FIRST_ENTRY',
      lastEntry: null,
    }
  }

  const lastEntryToday = lastEntry.entry_date === LocalDate.now().toString()

  if (lastEntryToday) {
    // if we aren't already inside we should be let in on the same day
    if (lastEntry.left) {
      if (lastEntry.facility === facility) {
        // for non-season pass, we can reenter only the same facility
        return {
          valid: true,
          reason: 'REENTRY',
          lastEntry,
        }
      } else if (ticket.ticket_type === '2021') {
        // for season pass, we can enter wherever (TODO fix for 2022 :-))
        return {
          valid: true,
          reason: 'FIRST_ENTRY',
          lastEntry,
        }
      } else {
        return {
          valid: false,
          reason: 'NOT_VALID_FOR_THIS_FACILITY',
          lastEntry,
        }
      }
    } else {
      return {
        valid: false,
        reason: 'ALREADY_INSIDE',
        lastEntry,
      }
    }
  }

  // at this point, we either have season pass or an invalid day pass
  // TODO add multi-day passes somewhere in here, fix for 2022
  if (ticket.ticket_type === '2021') {
    return {
      valid: true,
      reason: 'FIRST_ENTRY',
      lastEntry,
    }
  } else {
    return {
      valid: false,
      reason: 'USED',
      lastEntry,
    }
  }
}
