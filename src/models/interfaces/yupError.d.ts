export interface IValidationError {
  value: { email: string; description: string } // Reemplaza esto con la estructura real de tus datos
  path: string // La clave del campo con error ("description" en este caso)
  type: string // El tipo de error ("required" en este caso)
  errors: string[] // Un array de mensajes de error ("El campo es requerido" en este caso)
  params: {
    value: any
    originalValue: any
    label?: string
    path: string
    spec: {
      strip: boolean
      strict: boolean
      abortEarly: boolean
      recursive: boolean
      disableStackTrace: boolean
      nullable: boolean
      optional: boolean
      coerce: boolean
    }
  }
  inner: ValidationError[] // Errores internos relacionados con este error
  name: string // Nombre del tipo de error ("ValidationError" en este caso)
  message: string // El mensaje completo del error ("El campo es requerido" en este caso)
  fileName: string // Ruta al archivo donde se originó el error
  lineNumber: number // Número de línea donde se originó el error
  columnNumber: number // Número de columna donde se originó el error
}
