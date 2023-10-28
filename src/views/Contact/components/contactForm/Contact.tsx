import { useForm, type FieldValues } from 'react-hook-form'
import contactSchema from './schema/contactSchema'
import { useState } from 'react'

const ContactForm = () => {
  const { register, handleSubmit } = useForm()
  const [errors, setErrors] = useState({ email: '', description: '' })
  const [files, setFiles] = useState([])

  const onSubmit = async (data: FieldValues) => {
    try {
      await contactSchema.validate(data, { abortEarly: false })
    } catch (error: any) {
      let errorState = { email: '', description: '' }
      error.inner.map((err: any) => {
        if (errorState[err.path] === '') {
          errorState[err.path] = err.message
        }
      })

      setErrors(errorState)
    }
  }

  const onUploadFile = () => {}

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl m-auto -mt-8 grid gap-2 p-4"
    >
      <label
        className={
          errors.description
            ? 'flex flex-col text-red-800 mt-4'
            : 'flex flex-col text-slate-500 mt-4 gap-2'
        }
      >
        Correo electrónico
        <input
          className={
            errors.email
              ? 'bg-red-50 w-full border-b-0 border-2 border-red-800 rounded-t-lg p-2 text-black resize-none mt-2'
              : 'bg-white w-full border-2 border-slate-300 rounded-lg p-2 text-black resize-none focus:border-none'
          }
          type="text"
          {...register('email')}
        />
        {errors.email !== '' && (
          <p className="flex gap-2 items-center text-white p-2 font-light bg-red-800 border-2 border-red-800 rounded-b-lg border-t-0 -mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
            {errors.email}
          </p>
        )}
      </label>

      <label
        className={
          errors.description
            ? 'flex flex-col text-red-800 mt-4'
            : 'flex flex-col text-slate-500 mt-4 gap-2'
        }
      >
        Cuéntame. ¿Cómo podemos ayudarte?
        <textarea
          className={
            errors.description
              ? 'bg-red-50 w-full border-b-0 border-2 border-red-800 rounded-t-lg p-2 text-black h-44 resize-none mt-2'
              : 'bg-white w-full border-2 border-slate-300 rounded-lg p-2 text-black h-44 resize-none'
          }
          {...register('description')}
        />
        {errors.description !== '' && (
          <p className="flex gap-2 items-center text-white p-2 font-light bg-red-800 border-2 border-red-800 rounded-b-lg border-t-0 -mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
            {errors.description}
          </p>
        )}
      </label>

      {/* <ul className="flex gap-2">
                <li className="bg-slate-200 p-2 rounded-xl">Archivo1.js</li>
                <li className="bg-slate-200 p-2 rounded-xl">Archivo1.js</li>
                <li className="bg-slate-200 p-2 rounded-xl">Archivo1.js</li>
            </ul> */}

      <footer className="mt-5 flex justify-end gap-6">
        <button
          type="button"
          className="flex gap-2 md:gap-4 text-md md:text-lg items-center py-2 md:py-4 px-2 md:px-6 hover:bg-slate-50 rounded-xl"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5976 2.79362C12.7099 2.0102 11.2691 2.0102 10.3814 2.79362L3.68708 8.70141C2.15539 10.0531 2.15539 12.2429 3.68708 13.5946C5.21878 14.9463 7.70005 14.9463 9.23174 13.5946L14.7618 8.71426C15.1584 8.36428 15.806 8.36428 16.2026 8.71426C16.5991 9.06423 16.5991 9.63574 16.2026 9.98571L10.6725 14.8661C8.34401 16.9209 4.57481 16.9209 2.24635 14.8661C-0.0821159 12.8112 -0.0821159 9.48484 2.24635 7.42995L8.94068 1.52216C10.6252 0.0355815 13.3538 0.0355815 15.0383 1.52216C16.7228 3.00874 16.7228 5.41681 15.0383 6.90339L8.63507 12.5543C7.59454 13.4726 5.9064 13.4726 4.86587 12.5543C3.82534 11.636 3.82534 10.1463 4.86587 9.22798L10.1049 4.60449C10.5015 4.25451 11.1491 4.25451 11.5456 4.60449C11.9422 4.95446 11.9422 5.52597 11.5456 5.87595L6.30661 10.4994C6.06285 10.7146 6.06285 11.0677 6.30661 11.2829C6.55037 11.498 6.95057 11.498 7.19433 11.2829L13.5976 5.63193C14.4853 4.8485 14.4853 3.57705 13.5976 2.79362Z"
              fill="black"
            />
          </svg>
          Adjuntar archivo
        </button>

        <button
          type="submit"
          className="flex gap-4 text-lg items-center bg-sky-100 py-1 md:py-4 px-6 md:px-16 shadow-sm shadow-slate-400 hover:shadow-md hover:shadow-slate-500 hover:bg-sky-200 rounded-xl"
        >
          Enviar
        </button>
      </footer>
    </form>
  )
}

export default ContactForm
