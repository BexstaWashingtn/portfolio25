import {defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Projekt',
  type: 'document',
  groups: [
    {
      name: 'details',
      title: 'Details',
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Titel*',
      type: 'string',
      group: 'details',
      validation: (Rule) => Rule.min(3).max(32).required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle*',
      type: 'string',
      group: 'details',
      description: 'min.5 max.64 Zeichen',
      validation: (Rule) => Rule.min(5).max(64).required(),
    },
    {
      name: 'slug',
      title: 'Slug*',
      type: 'slug',
      group: 'details',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Kurzbeschreibung*',
      type: 'text',
      group: 'details',
      description: 'min.20 max.160 Zeichen',
      validation: (Rule) => Rule.min(20).max(160).required(),
    },
    {
      name: 'previewImage',
      title: 'Previewbild*',
      type: 'image',
      group: 'details',
      description: 'max. 266px x 160px',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'projectImage',
      title: 'Projektbild*',
      type: 'image',
      group: 'details',
      description: 'max. 816px x 459px',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'projectMainColor',
      title: 'Projektfarbe (RGB)*',
      type: 'object',
      description: 'Hauptfarbe für von dem Projekt',
      validation: (Rule) => Rule.required(),
      options: {
        columns: 3,
      },
      fields: [
        {
          name: 'r',
          title: 'Rot (R)',
          type: 'number',
          validation: (Rule) => Rule.min(0).max(255),
        },
        {
          name: 'g',
          title: 'Grün (G)',
          type: 'number',
          validation: (Rule) => Rule.min(0).max(255),
        },
        {
          name: 'b',
          title: 'Blau (B)',
          type: 'number',
          validation: (Rule) => Rule.min(0).max(255),
        },
      ],
    },
    {
      name: 'projectInformations',
      title: 'Projekt Informationen',
      type: 'object',
      fields: [
        {
          name: 'developmentTime',
          title: 'Entwicklungszeit',
          type: 'object',
          validation: (Rule) => Rule.required(),
          fields: [
            {
              name: 'description',
              title: 'Zeitraum oder Gesamtzeit*',
              type: 'string',
            },
          ],
        },
        {
          name: 'methods',
          title: 'angewandte Methoden*',
          type: 'array',
          of: [
            {
              type: 'string',
            },
          ],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'tools',
          title: 'verwendete Tools*',
          type: 'array',
          of: [
            {
              type: 'string',
            },
          ],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'liveDemo',
          title: 'Live Demo*',
          type: 'object',
          fields: [
            {
              name: 'href',
              title: 'Link',
              type: 'url',
            },
          ],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'github',
          title: 'GitHub Link*',
          type: 'object',
          fields: [
            {
              name: 'href',
              title: 'Link',
              type: 'url',
            },
          ],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
})
