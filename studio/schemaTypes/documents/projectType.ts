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
    {
      name: 'goals',
      title: 'Ziele',
    },
    {
      name: 'implementation',
      title: 'Umsetzung',
    },
    {
      name: 'visuals',
      title: 'Visuals',
    },
    {
      name: 'learnings',
      title: 'Learnings',
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
      name: 'completedAt',
      title: 'Projekt Fertigstellung*',
      description:
        'dient ausschließlich zur Bestimmung der Reihenfolge der Projekte im Projektpreview',
      type: 'date',
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
      description: '848px x 477px, Format JPEG',
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
    {
      name: 'goals',
      title: 'Projekt Ziele*',
      group: 'goals',
      type: 'object',
      fields: [
        {
          name: 'initial',
          title: 'Ausgangssituation*',
          type: 'text',
          description: 'Beschreibe die Ausgangssituation vor Projektbeginn.',
          validation: (Rule) => Rule.min(20).max(500).required(),
        },
        {
          name: 'reason',
          title: 'Grund für die Projektumsetzung*',
          type: 'text',
          description: 'Warum wurde das Projekt umgesetzt? Was war die Motivation dahinter?',
          validation: (Rule) => Rule.min(20).max(500).required(),
        },
      ],
    },
    {
      name: 'implementation',
      title: 'Projekt Umsetzung*',
      group: 'implementation',
      type: 'object',
      fields: [
        {
          name: 'process',
          title: 'Projekt Prozess',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Prozessschritt Titel*',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Prozessschritt Beschreibung*',
                  type: 'text',
                  validation: (Rule) => Rule.min(20).max(500).required(),
                },
              ],
            },
          ],
        },
        {
          name: 'techstack',
          title: 'Tech Stack',
          type: 'object',
          fields: [
            {
              name: 'frontend',
              title: 'Frontend',
              type: 'array',
              of: [{type: 'string'}],
              validation: (Rule) => Rule.min(1),
            },
            {
              name: 'backend',
              title: 'Backend',
              type: 'array',
              of: [{type: 'string'}],
              validation: (Rule) => Rule.min(1),
            },
            {
              name: 'tools',
              title: 'Tools',
              type: 'array',
              of: [{type: 'string'}],
              validation: (Rule) => Rule.min(1),
            },
          ],
        },
        {
          name: 'challenge',
          title: 'Projekt Herausforderungen',
          type: 'object',
          fields: [
            {
              name: 'problem',
              title: 'Herausforderungen und Lösungsansätze',
              type: 'text',
              description:
                'Beschreibe die größten Herausforderungen im Projekt und wie du sie gelöst hast.',
              validation: (Rule) => Rule.min(20).max(1000),
            },
            {
              name: 'approach',
              title: 'Vorgehensweise',
              type: 'text',
              description:
                'Wie bist du bei der Projektumsetzung vorgegangen? Gab es einen bestimmten Prozess oder eine Methodik, die du angewendet hast?',
              validation: (Rule) => Rule.min(20).max(1000),
            },
            {
              name: 'learnings',
              title: 'Learnings aus der Projektumsetzung',
              type: 'text',
              description:
                'Was hast du aus der Projektumsetzung gelernt? Welche Erkenntnisse nimmst du mit für zukünftige Projekte?',
              validation: (Rule) => Rule.min(20).max(1000),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'visuals',
      title: 'Projekt Visuals',
      group: 'visuals',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            createImageField({
              name: 'image',
              title: 'Bild*',
              description: 'Mindestens 300 × 300 px, maximal 900 × 900 px, bevorzugt JPEG.',
              hotspot: true,
              required: false,
            }),
            {
              name: 'layoutSize',
              type: 'string',
              title: 'Darstellungsgröße*',
              initialValue: 'medium',
              options: {
                list: [
                  {title: 'Klein (1 Spalte / 1 Reihe)', value: 'small'},
                  {title: 'Mittel (2 Spalten / 1 Reihe)', value: 'medium'},
                  {title: 'Breit (3 Spalten / 1 Reihen)', value: 'wide'},
                  {title: 'Hoch (1 Spalte / 2 Reihen)', value: 'tall'},
                  {title: 'Groß (2 Spalten / 2 Reihen)', value: 'large'},
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              title: 'Bildunterschrift*',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
})
