import { ERROR_MESSAGES } from '@models/consts/errorMessages'
import { mixed, object, string } from 'yup'

const contactSchema = object({
  email: string().email(ERROR_MESSAGES.email).required(ERROR_MESSAGES.required),

  description: string()
    .required(ERROR_MESSAGES.required)
    .min(10, ERROR_MESSAGES.descriptionSize)
})

export default contactSchema
