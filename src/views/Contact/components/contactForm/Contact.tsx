import { useState } from 'react'
import InputText from './components/InputText/InputText'
import TextAreaInput from './components/TextAreaInput/TextAreaInput'
import type { IContactError } from '@models/interfaces/contactError'
import { Toaster } from 'react-hot-toast'
import FileTags from './components/fileTags/FileTags'
import onSubmit from './functions/onSubmit'
import Spinner from '@components/spinner/Spinner'
import { useForm } from 'react-hook-form'

const ContactForm = ({ languaje }: { languaje: string }) => {
  const { register, handleSubmit, reset } = useForm()
  const [errors, setErrors] = useState<IContactError>({
    email: '',
    description: ''
  })
  const [files, setFiles] = useState([])
  const [fileName, setFileName] = useState([])
  const [sending, setSending] = useState(false)

  const onUploadFile = () => {
    const fileInput = document.getElementById('fileInput')
    if (fileInput === null) return
    fileInput.click()
    fileInput.addEventListener('change', () => {
      // @ts-ignore
      const files = fileInput.files
      setFiles(files)
      const fileNameCopy = []
      for (let i = 0; i < files.length; i++) {
        fileNameCopy.push(files[i].name)
      }
      //@ts-ignore
      setFileName(fileNameCopy)
    })
  }
  return (
    <form
      onSubmit={handleSubmit((data) =>
        onSubmit(
          data,
          setErrors,
          setFileName,
          reset,
          files,
          setSending,
          languaje
        )
      )}
      className="max-w-3xl m-auto -mt-8 grid gap-2 p-4"
      id="contact-form"
    >
      <Toaster />
      <InputText languaje={languaje} register={register} errors={errors} />
      <TextAreaInput languaje={languaje} register={register} errors={errors} />
      <FileTags
        fileName={fileName}
        setFileName={setFileName}
        setFiles={files}
        files={files}
      />

      <input
        type="file"
        id="fileInput"
        accept=".docx, .pdf, .xlsx"
        multiple
        className="hidden"
      />
      <footer className="mt-5 flex justify-end gap-6">
        <button
          type="button"
          className="flex gap-2 md:gap-4 text-md md:text-lg items-center py-2 md:py-4 px-2 md:px-6 hover:bg-slate-50 rounded-xl"
          onClick={onUploadFile}
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
          {languaje === 'english' ? 'Attach file' : 'Adjuntar archivo'}
        </button>

        {sending ? (
          <button className="flex gap-4 text-lg items-center bg-slate-300 py-1 md:py-4 px-2 md:px-8 rounded-xl">
            <Spinner />
            {languaje === 'english' ? 'Sending...' : 'Enviando...'}
          </button>
        ) : (
          <button
            type="submit"
            className="flex gap-4 text-lg items-center bg-sky-100 py-1 md:py-4 px-6 md:px-16 shadow-sm shadow-slate-400 hover:shadow-md hover:shadow-slate-500 hover:bg-sky-200 rounded-xl"
          >
            {languaje === 'english' ? 'Send' : 'Enviar'}
          </button>
        )}
      </footer>
    </form>
  )
}

export default ContactForm
