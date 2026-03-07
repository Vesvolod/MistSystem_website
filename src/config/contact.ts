export const WA_NUMBER = '6285190291717'
export const WA_URL = `https://wa.me/${WA_NUMBER}`

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message)
  return `${WA_URL}?text=${encoded}`
}

