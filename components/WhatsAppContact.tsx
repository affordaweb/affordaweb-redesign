import { whatsappUrl } from '@/lib/whatsapp'

export default function WhatsAppContact() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with AffordaWeb on WhatsApp"
      className="whatsapp-bubble"
    >
      <span className="whatsapp-bubble__label">Chat on WhatsApp</span>
      <svg aria-hidden="true" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16.01 3C8.83 3 3 8.83 3 16.01c0 2.3.6 4.54 1.74 6.51L3 29l6.67-1.7A12.94 12.94 0 0 0 16.01 29C23.18 29 29 23.18 29 16.01 29 8.83 23.18 3 16.01 3Zm0 23.83a10.7 10.7 0 0 1-5.46-1.5l-.39-.23-3.96 1.01 1.06-3.86-.26-.4a10.77 10.77 0 1 1 9.01 4.98Zm5.91-8.08c-.32-.16-1.89-.93-2.18-1.04-.29-.1-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.34-.49-2.56-1.56a9.6 9.6 0 0 1-1.77-2.2c-.18-.32-.02-.5.14-.66.14-.14.32-.37.48-.56.16-.18.21-.31.32-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.98-2.34-.26-.62-.53-.54-.71-.55h-.61c-.21 0-.55.08-.84.4-.29.31-1.11 1.08-1.11 2.63 0 1.55 1.14 3.05 1.29 3.26.16.21 2.24 3.42 5.42 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.16-1.51.26-.74.26-1.38.18-1.51-.08-.13-.29-.21-.61-.37Z" />
      </svg>
      <span className="sr-only">Open WhatsApp chat</span>
    </a>
  )
}
