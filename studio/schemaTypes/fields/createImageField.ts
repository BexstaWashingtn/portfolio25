// schemaTypes/fields/imageField.ts
import {defineField, type ImageRule} from 'sanity'

type Options = {
  name?: string
  title?: string
  required?: boolean
  group?: string
  description?: string
  hotspot?: boolean
}

export function createImageField({
  name = 'image',
  title = 'Image',
  required = false,
  group,
  description,
  hotspot = false,
}: Options = {}) {
  return defineField({
    name,
    title,
    type: 'image',
    group,
    description,
    options: {
      hotspot,
    },
    fields: [
      defineField({
        name: 'alt',
        title: 'Alt Text*',
        description: 'required',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'title',
        title: 'Title',
        description: 'optional (for SEO important)',
        type: 'string',
      }),
    ],
    ...(required && {
      validation: (Rule: ImageRule) => Rule.required(),
    }),
  })
}
