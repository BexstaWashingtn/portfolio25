import {defineType} from 'sanity'
import {createMainColorField} from '../fields/mainColorField'
import {createImageField} from '../fields/imageField'

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
    createImageField({
      name: 'previewImage',
      title: 'Projekt Logo*',
      group: 'details',
      description: 'max. 266px x 160px, Format SVG',
      required: true,
    }),
    createImageField({
      name: 'projectImage',
      title: 'Projektbild*',
      group: 'details',
      description: '816px x 459px, Format JPEG',
      required: true,
    }),
    createImageField({
      name: 'backgroundImage',
      title: 'Projekt Hintergrundbild',
      group: 'details',
      description: '1920 x 1080px, Format JPEG',
      required: false,
    }),
    createMainColorField({
      name: 'projectMainColor',
      title: 'Projekt-Hauptfarbe (RGB)',
      required: false,
      description: 'MainColor für Projekthintergrund',
    }),
    {
      name: 'projectInformations',
      title: 'Projekt Informationen*',
      type: 'object',
      fields: [
        {
          name: 'developmentTime',
          title: 'Entwicklungszeit*',
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
          title: 'GitHub Link',
          type: 'object',
          fields: [
            {
              name: 'href',
              title: 'Link',
              type: 'url',
            },
          ],
        },
      ],
    },
  ],
})
