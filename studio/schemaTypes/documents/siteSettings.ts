import {defineType} from 'sanity'
import {createMainColorField} from '../fields/mainColorField'
import {createImageField} from '../fields/imageField'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'SiteSettings',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      }
    },
  },
  groups: [
    {name: 'general', title: 'General'},
    {name: 'navigation', title: 'Navigation'},
  ],
  fields: [
    createImageField({
      name: 'siteLogo',
      title: 'Logo',
      required: true,
      group: 'general',
      description: 'Seitenlogo, Format SVG',
    }),
    createMainColorField({
      name: 'siteMainColor',
      title: 'Seiten-Hauptfarbe* (RGB)',
      required: true,
      group: 'general',
      description: 'Fallback für Projekte ohne MainColor',
    }),

    {
      name: 'mainNavigation',
      title: 'Hauptnavigation',
      group: 'navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Navigationspunkt',
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'string',
              validation: (Rule) => Rule.min(3).max(20).required(),
            },
            {
              name: 'slug',
              title: 'Section-ID',
              type: 'string',
              description:
                'Muss exakt der id der passenden Section entsprechen, z. B. about oder projects.',
              validation: (Rule) => Rule.min(3).max(30).required(),
            },
          ],
          preview: {
            select: {
              title: 'text',
              subtitle: 'slug',
            },
          },
        },
      ],
    },
  ],
})
