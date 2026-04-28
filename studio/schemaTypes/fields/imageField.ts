// schemaTypes/fields/imageField.ts
import {defineField} from 'sanity'

type Options = {
  name?: string
  title?: string
  required?: boolean
  group?: string
  description?: string
}

export function createImageField({
  name = 'image',
  title = 'Image',
  required = false,
  group,
  description,
}: Options = {}) {
  return defineField({
    name,
    title,
    type: 'image',
    group,
    description,
    options: {
      hotspot: true,
    },
    fields: [
      defineField({
        name: 'alt',
        title: 'Alt Text',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
    ],
    validation: (Rule) => {
      return required ? Rule.required() : Rule
    },
  })
}
