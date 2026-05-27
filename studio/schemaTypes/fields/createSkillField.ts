import {defineField} from 'sanity'
import {createSkillLevelField} from './createSkillLevelField'

type Options = {
  name?: string
  title?: string
  required?: boolean
}

export function createSkillField({
  name = 'skill',
  title = 'Skill',
  required = false,
}: Options = {}) {
  return defineField({
    name,
    title,
    type: 'object',
    fields: [
      defineField({
        name: 'skill',
        title: 'Skill',
        type: 'string',
        validation: (Rule) => (required ? Rule.required() : Rule),
      }),

      createSkillLevelField({
        name: 'level',
        title: 'Kenntnisstand*',
        required,
      }),
    ],
  })
}
