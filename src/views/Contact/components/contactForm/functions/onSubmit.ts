import type {
  IContactError,
  IValidation
} from '@models/interfaces/contactError'
import type { FieldValues } from 'react-hook-form'
import contactSchema from '../schema/contactSchema'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import type { Dispatch, SetStateAction } from 'react'
import fileConvertToString from './fileConvertToString'

const onSubmit = async (
  data: FieldValues,
  setErrors: Dispatch<IContactError>,
  setFileName: Dispatch<SetStateAction<never[]>>,
  reset: any,
  files: File[],
  setSending: Dispatch<SetStateAction<boolean>>,
  languaje: string
) => {
  setSending(true)
  try {
    // Clean errors
    setErrors({ email: '', description: '' })

    // Validate data with the contactSchema
    await contactSchema(languaje).validate(data, { abortEarly: false })

    // Try to the file to an url
    const urls = await fileConvertToString(files)

    // Try to send the email to the server
    const urlsString = urls ? urls.join('\n \n') : 'No hay archivos adjuntos'
    await emailjs.send(
      import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
      import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
      {
        email: data.email,
        description: data.description,
        fileAttachment: urlsString,
        fileTotal: urls?.length ? urls?.length : 0
      },
      import.meta.env.PUBLIC_EMAILJS_USER_ID
    )

    // Show success message
    toast.success(
      languaje === 'english'
        ? 'Email sent successfully!'
        : 'Correo enviado exitosamente!'
    )

    // Reset the form
    setFileName([])
    setErrors({ email: '', description: '' })
    reset()
    setSending(false)
  } catch (error: any) {
    setSending(false)
    //reset the errors
    let errorState: IContactError = { email: '', description: '' }

    // Check if the error is not from the yup validation
    if (error.inner === undefined)
      return toast.error(
        languaje === 'english'
          ? "Oops! We couldn't send the email."
          : 'Ups! No pudimos enviar el correo.'
      )

    // Set the errors in the errorState with the yup validation
    error.inner.map((err: IValidation) => {
      if (errorState[err.path] === '') {
        errorState[err.path] = err.message
      }
    })

    // Show the error on the inputs
    setErrors(errorState)
  }
}

export default onSubmit
