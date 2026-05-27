// schemaTypes/fields/stringField.ts
import {defineField, type StringRule} from 'sanity'

type CreateStringFieldProps = {
  name: string
  title: string
  description?: string
  group?: string
  min?: number
  max?: number
  required?: boolean
}

export function createStringField({
  name,
  title,
  description,
  group,
  min,
  max,
  required = false,
}: CreateStringFieldProps) {
  return defineField({
    name,
    title,
    type: 'string',
    ...(description && {description}),
    ...(group && {group}),

    validation: (Rule: StringRule) => {
      let rule = Rule

      if (typeof min === 'number') {
        rule = rule.min(min)
      }

      if (typeof max === 'number') {
        rule = rule.max(max)
      }

      if (required) {
        rule = rule.required()
      }

      return rule
    },
  })
}
