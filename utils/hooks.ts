import { useRouter } from 'next/router'
import { useCallback } from 'react'

export const useSubmitTicket = (endpoint) => {
  const router = useRouter()
  const submit = useCallback(
    async (values) => {
      try {
        const result = await fetch(`/api/${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: await JSON.stringify(values),
        })
        if (!result.ok) {
          throw new Error(result.statusText)
        }
        const json = await result.json()
        if (!json?.ticket?.id) {
          console.error(json)
          throw new Error('Incorrect format returned')
        }
        router.push(`/payment/${json.ticket.id}`)
      } catch (e) {
        console.error(e)
        alert('Nastala chyba - prosim skuste znova')
      }

      return true
    },
    [router]
  )
  return submit
}
