// schemaTypes/fields/skillLevelField.ts

import {defineField} from 'sanity'

type Options = {
  name?: string
  title?: string
  description?: string
  required?: boolean
  group?: string
}

export function createSkillLevelField({
  name = 'level',
  title = 'Skill Level',
  description,
  required = false,
  group,
}: Options = {}) {
  return defineField({
    name,
    title,
    type: 'number',
    group,
    description,

    options: {
      list: [
        {title: '1 - Grundlagen', value: 1},
        {title: '2 - Anfänger', value: 2},
        {title: '3 - Fortgeschritten', value: 3},
        {title: '4 - Sehr gut', value: 4},
        {title: '5 - Experte', value: 5},
      ],

      layout: 'dropdown',
    },

    validation: (Rule) => {
      let rule = Rule.min(1).max(5)

      if (required) {
        rule = rule.required()
      }

      return rule
    },
  })
}
