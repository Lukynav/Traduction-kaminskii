import { ERROR_MESSAGES } from '@models/consts/errorMessages'
import { object, string } from 'yup'

const contactSchema = (languaje: string) =>
  object({
    email: string()
      .email(
        languaje === 'english'
          ? ERROR_MESSAGES.emailEnglish
          : ERROR_MESSAGES.email
      )
      .required(
        languaje === 'english'
          ? ERROR_MESSAGES.requiredEnglish
          : ERROR_MESSAGES.required
      ),

    description: string()
      .required(
        languaje === 'english'
          ? ERROR_MESSAGES.requiredEnglish
          : ERROR_MESSAGES.required
      )
      .min(
        10,
        languaje === 'english'
          ? ERROR_MESSAGES.descriptionSizeEnglish
          : ERROR_MESSAGES.descriptionSize
      )
  })

export default contactSchema
