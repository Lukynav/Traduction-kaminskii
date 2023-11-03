import type { ICommunicationChannel } from '../interfaces/communicationChannel'

const PHONE = '(+54) 11 9 3360-8407'
export const PHONE_CHANNEL: ICommunicationChannel = {
  nameSpanish: PHONE,
  nameEnglish: PHONE,
  icon: 'phone',
  url: 'tel:' + PHONE
}

const EMAIL = 'traductora.skaminskii@gmail.com'
export const EMAIL_CHANNEL: ICommunicationChannel = {
  nameSpanish: EMAIL,
  nameEnglish: EMAIL,
  icon: 'email',
  url: 'mailto:' + EMAIL
}

const WHATSAPP_URL = '5411933608407'
const WHATSAPP = '(+54) 11 9 3360-8407'
export const WHATSAPP_CHANNEL: ICommunicationChannel = {
  nameSpanish: WHATSAPP,
  nameEnglish: WHATSAPP,
  icon: 'whatsapp',
  url: 'https://api.whatsapp.com/send?phone=' + WHATSAPP_URL
}
