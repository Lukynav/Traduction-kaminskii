/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PUBLIC_FIREBASE_API_KEY: string
  readonly PUBLIC_FIREBASE_AUTH_DOMAIN: string
  readonly PUBLIC_FIREBASE_PROJECT_ID: string
  readonly PUBLIC_FIREBASE_STORAGE_BUCKET: string
  readonly PUBLIC_FIREBASE_SENDER_ID: string
  readonly PUBLIC_FIREBASE_APP_ID: string
  readonly PUBLIC_EMAILJS_SERVICE_ID: string
  readonly PUBLIC_EMAILJS_TEMPLATE_ID: string
  readonly PUBLIC_EMAILJS_USER_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
