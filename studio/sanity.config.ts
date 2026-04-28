import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {structure} from './schemaTypes/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Portfolio 25',

  projectId: 'xrck9l1v',
  dataset: 'production',

  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    newDocumentOptions: (prev) => prev.filter((item) => item.templateId !== 'siteSettings'),
  },
})
