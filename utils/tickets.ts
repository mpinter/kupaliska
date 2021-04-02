import { TicketQuery } from './graphqlSdk'

type SingleTicket = TicketQuery['tickets_by_pk']

// TODO this will be the fun part
export const isTicketValidForEntry = (ticket: SingleTicket) => {
  console.log(ticket)
  return true
}
