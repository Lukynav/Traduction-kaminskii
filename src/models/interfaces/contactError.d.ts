export interface IContactError {
  email: string
  description: string
}

export interface IValidation {
  value: Record<string, string>
  path: 'email' | 'description'
  type: string | undefined
  errors: string[]
  params: any | undefined
  inner: ValidationError[]
  message: string
}

interface ValidationError {
  value: string
  path: string
  type: string
  errors: string[]
  params: any
  inner: ValidationError[]
  name: string
  message: string
  fileName: string
  lineNumber: number
  columnNumber: number
  [Symbol.toStringTag]: string
}

// Ejemplo de uso:
const validationData: ValidationInterface = {
  value: { email: 'f' },
  path: undefined,
  type: undefined,
  errors: [
    'El campo debe ser un correo electrónico válido',
    'El campo es requerido'
  ],
  params: undefined,
  inner: [
    {
      value: 'f',
      path: 'email',
      type: 'email',
      errors: ['El campo debe ser un correo electrónico válido'],
      params: {
        // ...
      },
      inner: [],
      name: 'ValidationError',
      message: 'El campo debe ser un correo electrónico válido',
      fileName:
        'http://localhost:4321/node_modules/.vite/deps/yup.js?v=5fda27ad',
      lineNumber: 296,
      columnNumber: 5,
      [Symbol.toStringTag]: 'Error'
    }
  ]
}
