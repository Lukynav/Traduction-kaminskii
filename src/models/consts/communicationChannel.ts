import type { ICommunicationChannel } from '../interfaces/communicationChannel'

const PHONE = '(+54) 11 0000-0000'
export const PHONE_CHANNEL: ICommunicationChannel = {
  nameSpanish: PHONE,
  nameEnglish: PHONE,
  icon: 'phone',
  url: 'tel:' + PHONE
}

const EMAIL = 'correoelctronico@mail.com'
export const EMAIL_CHANNEL: ICommunicationChannel = {
  nameSpanish: EMAIL,
  nameEnglish: EMAIL,
  icon: 'email',
  url: 'tel:+1-555-555-5555'
}

const WHATSAPP = '+1-555-555-5555'
export const WHATSAPP_CHANNEL: ICommunicationChannel = {
  nameSpanish: WHATSAPP,
  nameEnglish: WHATSAPP,
  icon: 'whatsapp',
  url: 'tel:' + WHATSAPP
}
