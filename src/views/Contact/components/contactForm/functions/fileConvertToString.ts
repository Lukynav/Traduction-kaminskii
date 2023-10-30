import uploadFileToFirabase from 'src/firebase/functions/uploadFile'

const fileConvertToString = async (files: File[]) => {
  if (!files) return

  const urlArray: string[] = []

  for (let i = 0; i < files.length; i++) {
    const url = await uploadFileToFirabase(files[i])
    urlArray.push(url)
  }

  return urlArray.map((url, index) => `- Archivo nro. ${index + 1}: ${url}`)
}

export default fileConvertToString
