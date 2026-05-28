// schemaTypes/fields/stringArrayField.ts
import {defineField, type ArrayRule} from 'sanity'

type CreateStringArrayFieldProps = {
  name: string
  title: string
  itemTitle: string
  description?: string
  required?: boolean
  group?: string
}

export function createStringArrayField({
  name,
  title,
  itemTitle,
  description,
  required = false,
  group,
}: CreateStringArrayFieldProps) {
  return defineField({
    name,
    title,
    type: 'array',
    ...(description && {description}),
    ...(group && {group}),
    of: [
      {
        name: 'item',
        title: itemTitle,
        type: 'string',
      },
    ],
    ...(required && {
      validation: (Rule: ArrayRule<string[]>) => Rule.required(),
    }),
  })
}
