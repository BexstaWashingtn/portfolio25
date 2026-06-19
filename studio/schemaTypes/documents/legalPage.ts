import {defineField, defineType} from 'sanity'
import {createStringField} from '../fields/createStringField'
import {createImageField} from '../fields/createImageField'

const legalpageGroups = [
  {name: 'pageSettings', title: 'Einstellungen'},
  {name: 'pageHero', title: 'Hero'},
  {name: 'infoBlockTop', title: 'Info Block Oben'},
  {name: 'legalPageContent', title: 'Content'},
  {name: 'infoBlockBottom', title: 'Info Block Bottom'},
]

export const pageSettings = defineType({
  name: 'pageSettings',
  title: 'Seiteneinstellungen',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel*',
      type: 'string',
      validation: (Rule) => Rule.min(4).max(12).required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug*',
      type: 'slug',
      options: {
        source: 'pageSettings.title',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'showInFooterNavigation',
      title: 'In Footer Navigation anzeigen',
      type: 'boolean',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'navigationLabel',
      title: 'Navigationstext*',
      type: 'string',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as {showInFooterNavigation?: boolean}

          if (parent?.showInFooterNavigation && !value) {
            return 'Navigationstext ist erforderlich, wenn die Seite im Footer angezeigt wird.'
          }

          return true
        }),
    }),
  ],
})

export const pageHero = defineType({
  name: 'pageHero',
  title: 'Hero',
  type: 'object',
  fields: [
    createStringField({
      name: 'headline',
      title: 'Hero Headline*',
      description: 'min. 5 - max. 48 Zeichen • Hervorhebung: [accent]Text[/accent] • Umbruch [br]',
      min: 4,
      max: 48,
      required: true,
    }),
    defineField({
      name: 'text',
      title: 'Hero Text',
      description: 'min. 12 - max. 120 Zeichen',
      type: 'text',
      validation: (Rule) => Rule.min(12).max(120),
    }),
    createImageField({
      name: 'backgroundImage',
      title: 'Hintergrundbild',
      description: '1920 x 1080px, Format JPEG',
      required: true,
      imageVariant: true,
      initialVariant: 'sectionBackground',
    }),
  ],
})

export const infoBlock = defineType({
  name: 'infoBlock',
  title: 'Info Block',
  type: 'object',
  fields: [
    createImageField({
      name: 'icon',
      title: 'Icon',
      description: '60 x 60 px, Format SVG',
      required: false,
      imageVariant: true,
      initialVariant: 'icon60x60',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: (Rule) => Rule.min(4).max(460),
    }),
  ],
})

export const legalPageContent = defineType({
  name: 'legalPageContent',
  title: 'Content',
  type: 'object',
  fields: [
    createImageField({
      name: 'icon',
      title: 'Icon*',
      description: '50 x 50 px, Format SVG',
      required: true,
      imageVariant: true,
      initialVariant: 'icon50x50',
    }),
    defineField({
      name: 'title',
      title: 'Titel*',
      type: 'string',
      description: 'min. 4 - max. 240',
      validation: (Rule) => Rule.min(4).max(240).required(),
    }),
    defineField({
      name: 'contentType',
      title: 'Inhaltstyp*',
      type: 'string',
      initialValue: 'text',
      options: {
        list: [
          {title: 'Freier Text', value: 'text'},
          {title: 'Owner-Adresse', value: 'ownerAddress'},
          {title: 'Owner-Kontakt', value: 'ownerContact'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text*',
      type: 'text',
      description: 'min. 4 - max. 460',
      hidden: ({parent}) => parent?.contentType !== 'text',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as {
            contentType?: string
          }

          if (parent?.contentType !== 'text') {
            return true
          }

          if (!value) {
            return 'Text ist erforderlich'
          }

          if (value.length < 4) {
            return 'Der Text muss mindestens 4 Zeichen lang sein'
          }

          if (value.length > 460) {
            return 'Der Text darf maximal 460 Zeichen lang sein'
          }

          return true
        }),
    }),
  ],
})

export const legalPage = defineType({
  name: 'legalPages',
  type: 'document',
  title: 'Legal Page',
  preview: {
    select: {
      title: 'pageSettings.title',
    },
  },
  groups: legalpageGroups,
  fields: [
    defineField({
      name: 'pageSettings',
      title: 'Page Settings',
      type: 'pageSettings',
      group: 'pageSettings',
    }),
    defineField({
      name: 'pageHero',
      title: 'Hero Section',
      type: 'pageHero',
      group: 'pageHero',
    }),
    defineField({
      name: 'infoBlockTop',
      title: 'Info Block Oben',
      type: 'infoBlock',
      group: 'infoBlockTop',
    }),
    defineField({
      name: 'legalPageContent',
      title: 'Content',
      type: 'object',
      group: 'legalPageContent',
      fields: [
        defineField({
          name: 'legalPageContent',
          title: 'Content*',
          type: 'array',

          of: [
            {
              type: 'legalPageContent',
            },
          ],
          validation: (Rule) => Rule.required(),
        }),
        createImageField({
          name: 'backgroundImage',
          title: 'Content Section Hintergrundbild',
          description: '1920 x 1080px, Format JPEG',
          required: false,
          imageVariant: true,
          initialVariant: 'sectionBackground',
        }),
      ],
    }),
    defineField({
      name: 'infoBlockBottom',
      title: 'Info Block Unten',
      type: 'infoBlock',
      group: 'infoBlockBottom',
    }),
  ],
})
