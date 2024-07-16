export interface IReview {
  name: string
  profileURL: string
  rating: number
  date: string
  text: string
  likes?: number // El campo likes es opcional
}

export const reviews: IReview[] = [
  {
    name: 'Alexandro Hediger',
    profileURL:
      'https://lh3.googleusercontent.com/a-/ALV-UjVY7zJjC123ISpaOdPAQ8qNAomv1yjm5HRFZAPamdZOX1lL1f1s=w120-h120-p-rp-mo-br100',
    rating: 5,
    date: 'Hace un mes',
    text: 'Increíble experiencia trabajando con Sofia! Su servicio es rápido, y muy profesional. Recomendaría sus servicios al 100% a cualquiera que necesite una traducción.',
    likes: 0
  },
  {
    name: 'Lizbeth Nunez',
    profileURL:
      'https://lh3.googleusercontent.com/a/ACg8ocK4MJUpio9EImJsKYazl_AnQeTv28yJnJEwVesLjhVGezNBsA=w120-h120-p-rp-mo-br100',
    rating: 5,
    date: '3 semanas atrás',
    text: 'Sofia es muy profesional y se toma su trabajo muy en serio. Es muy excelente y muy servicial. Soy de provincia y sí necesitara de nuevo sus servicios no lo dudaría.'
  },
  {
    name: 'Lucía Marino',
    profileURL:
      'https://lh3.googleusercontent.com/a-/ALV-UjV8O-ftUmv-9JlOGrplvLm07PeXIbsj-fK0-PzSajOe74mz_3Ze=w120-h120-p-rp-mo-br100',
    rating: 5,
    date: 'Hace un mes',
    text: 'Primera vez que le pedimos unas traducciones para presentar en Canadá y la verdad que nos encantó el servicio! Súper profesional, realizó las cosas antes del tiempo estimado y siempre estuvo bien predispuesta a cambios de último momento.\n\nGracias Sofi por tu empatía y profesionalismo. Súper recomendable, la volveríamos a elegir sin dudarlo.'
  },
  {
    name: 'Diego Dzodan',
    profileURL:
      'https://lh3.googleusercontent.com/a/ACg8ocIAC4dNr_4d5F31_fMVhnshUe0KScpK3GQ9gW0xi5_BrgQr1g=w120-h120-p-rp-mo-br100',
    rating: 5,
    date: 'Hace un mes',
    text: 'Excelente trabajo. Las respuestas fueron extremadamente rápidas, la calidad del trabajo fue excelente, y los resultados de la traducción atendieron 100% de las necesidades del trámite que necesitábamos. Recomendamos a Sofia bajo los más fuertes términos, y somos muy agradecidos por el servicio prestado.'
  },
  {
    name: 'Debora Tegaldo',
    profileURL:
      'https://lh3.googleusercontent.com/a/ACg8ocI3e1i74hU5n8AGBu2k8dhq2-Og6jGanaxb1LHwoS1XtjlS4Q=w120-h120-p-rp-mo-br100',
    rating: 5,
    date: 'Hace un mes',
    text: 'Excelente el servicio que brinda Sofía. Todo lo resuelve de manera ágil y es muy profesional. Envía el presupuesto muy rápido y cumple con los tiempos de entrega. Es muy amable! Super recomendable!'
  },
  {
    name: 'Matias Esquivel',
    profileURL:
      'https://lh3.googleusercontent.com/a-/ALV-UjUP6_aPTRormJCZ6eGinSvs9tviifTixJp6HaiuFnmMmSGMU_U=w120-h120-p-rp-mo-br100',
    rating: 5,
    date: 'Hace un mes',
    text: 'Servicio excelente! Totalmente recomendado, me ayudó mucho con mis documentos para vivir en el extranjero. Servicio rápido y asertivo. Gracias Sofi!'
  },
  {
    name: 'Valeria Larosa',
    profileURL:
      'https://lh3.googleusercontent.com/a-/ALV-UjX2C-yFp-n_GG5HTKWwkVDvj-vN8jVrLoHk9-LbNNHUkPx8lBlB=w120-h120-p-rp-mo-br100',
    rating: 5,
    date: '3 semanas atrás',
    text: 'Sofia es una profesional impecable, muy expeditiva. Cumple en tiempo y forma los compromisos asumidos. Super recomendable!!!'
  },
  {
    name: 'Lilian Rivera',
    profileURL:
      'https://lh3.googleusercontent.com/a/ACg8ocKtZK0FvAnPdkD-xGx69eRfquuMela9tGR9F5ib_h8k8Rxql2MV=w120-h120-p-rp-mo-br100',
    rating: 5,
    date: 'Hace un mes',
    text: 'Triple E. Expeditiva, Eficiente y excelente 100% recomendable. Además de su simpatía y compromiso profesional.'
  },
  {
    name: 'Hernán Robledo',
    profileURL:
      'https://lh3.googleusercontent.com/a/ACg8ocKhx2Xqzg2PxZdZuy9q1RXV9pT6Qy9YmjCJd2Vu_PgSdI6Abg=w120-h120-p-rp-mo-ba4-br100',
    rating: 5,
    date: '2 semanas atrás',
    text: 'Excelente experiencia con Sofía. Respuesta inmediata, seriedad, puntualidad, super recomendable!!!'
  },
  {
    name: 'Lautaro Vergara',
    profileURL:
      'https://lh3.googleusercontent.com/a-/ALV-UjXNXcU2IIFQFlfmnxPWv-uK9lMPZ_s2T3cG3XgIGYBAjYcbtA6N=w120-h120-p-rp-mo-br100',
    rating: 5,
    date: 'Hace un mes',
    text: 'Excelente traductora! Trabaja de manera muy prolija y ordenada! Super recomendable!',
    likes: 1
  },
  {
    name: 'Mabel Mabel',
    profileURL:
      'https://lh3.googleusercontent.com/a/ACg8ocKKOFnXMwXrOyCrQY4g-MNu92r8rTJFjiREUM4OBwavAJxo=w120-h120-p-rp-mo-br100',
    rating: 5,
    date: 'Hace un mes',
    text: 'Sofia solamente palabras de agradecimiento para tu trabajo hecho para mi hijo que está en Australia excelente con mucha responsabilidad',
    likes: 1
  },
  {
    name: 'Andrea Klammer',
    profileURL:
      'https://lh3.googleusercontent.com/a/ACg8ocKPGC9nxaYdheyUrVdUyiIk2N8XrREX4rvvD7ntRfCTgXW5NA=w120-h120-p-rp-mo-br100',
    rating: 5,
    date: 'Hace un mes',
    text: 'Sofia brinda un servicio ágil y excelente, súper recomendable!!',
    likes: 1
  },
  {
    name: 'Lu Raffaelli',
    profileURL:
      'https://lh3.googleusercontent.com/a-/ALV-UjUWUTcGHlPhvXmVpeo44jZuv3lLHOjBjtiZmleHmu9Y7K1_niXn=w120-h120-p-rp-mo-br100',
    rating: 5,
    date: 'Hace un mes',
    text: 'Excelente! Recomendada 100%. Muy profesional.',
    likes: 1
  },
  {
    name: 'Carlos Torrico',
    profileURL:
      'https://lh3.googleusercontent.com/a/ACg8ocLc1TXOKZ4g28tWN7kYk_jS0Ewh8EMllSAZvcYO7L7Q0hmr=w120-h120-p-rp-mo-br100',
    rating: 5,
    date: '2 semanas atrás',
    text: 'Excelente trabajo 100% recomendada',
    likes: 1
  },
  {
    name: 'Mariana Lopez',
    profileURL:
      'https://lh3.googleusercontent.com/a-/ALV-UjUUEZDtIC43P5mD7TdRq2VJkTAzM2tWC4MH0VyEbHvNvmPs3AG_hg=w120-h120-p-rp-mo-ba3-br100',
    rating: 5,
    date: 'Hace un mes',
    text: 'Excelente atención y trabajo la recomiendo',
    likes: 1
  }
]
