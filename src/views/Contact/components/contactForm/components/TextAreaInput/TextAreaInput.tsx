import type { IContactError } from '@models/interfaces/contactError'

interface InputTextAreaProps {
  errors: IContactError
  register: any
  languaje: string
}

const TextAreaInput = (props: InputTextAreaProps) => {
  const { errors, register, languaje } = props
  return (
    <label
      className={
        errors.description !== ''
          ? 'flex flex-col text-red-800 mt-4'
          : 'flex flex-col text-slate-500 mt-4 gap-2'
      }
    >
      {languaje === 'english'
        ? 'How can we help you?'
        : 'Contanos. ¿Cómo podemos ayudarte?'}
      <textarea
        className={
          errors.description
            ? 'bg-red-50 w-full h-44 border-b-0 border-2 border-red-800 rounded-t-lg p-2 text-black resize-none mt-2'
            : 'bg-white w-full h-44 border-2 border-slate-300 rounded-lg p-2 text-black resize-none focus:border-none'
        }
        type="text"
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
  )
}

export default TextAreaInput
