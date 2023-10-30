import { getDownloadURL, getStorage, ref, uploadBytes } from '@firebase/storage'
import { v4 as uuidv4 } from 'uuid'
import app from '../config'

const storage = getStorage(app)

const uploadFileToFirabase = async (file: File) => {
  const uuid = uuidv4()
  const storageRef = ref(storage, 'documents/' + uuid)

  await uploadBytes(storageRef, file)

  const downloadURL = await getDownloadURL(storageRef)

  return downloadURL
}

export default uploadFileToFirabase
