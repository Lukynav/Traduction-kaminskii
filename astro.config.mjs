import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import dotenv from 'dotenv'
dotenv.config()

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()]
})
