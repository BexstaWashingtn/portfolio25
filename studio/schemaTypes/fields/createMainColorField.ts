// schemaTypes/fields/mainColorField.ts
import {defineField} from 'sanity'

type Options = {
  name?: string
  required?: boolean
  title?: string
  group?: string
  description?: string
}

export function createMainColorField({
  name = 'mainColor',
  title = 'Main Color (RGB)',
  required = false,
  group,
  description,
}: Options = {}) {
  return defineField({
    name,
    title,
    type: 'object',
    group: group,
    description: description,
    options: {
      columns: 3,
    },
    fields: [
      defineField({
        name: 'r',
        title: 'R',
        type: 'number',
        validation: (Rule) => (required ? Rule.required().min(0).max(255) : Rule.min(0).max(255)),
      }),
      defineField({
        name: 'g',
        title: 'G',
        type: 'number',
        validation: (Rule) => (required ? Rule.required().min(0).max(255) : Rule.min(0).max(255)),
      }),
      defineField({
        name: 'b',
        title: 'B',
        type: 'number',
        validation: (Rule) => (required ? Rule.required().min(0).max(255) : Rule.min(0).max(255)),
      }),
    ],
    validation: (Rule) => {
      return required ? Rule.required() : Rule
    },
  })
}
