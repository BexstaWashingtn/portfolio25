import {defineField, defineType} from 'sanity'
import {createMainColorField} from '../fields/createMainColorField'
import {createImageField} from '../fields/createImageField'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Seiten-Einstellungen',
  type: 'document',

  preview: {
    prepare() {
      return {
        title: 'Seiten-Einstellungen',
      }
    },
  },

  groups: [
    {name: 'general', title: 'Allgemein'},
    {name: 'contactInformation', title: 'Kontaktinformationen'},
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

    defineField({
      name: 'contactInformation',
      title: 'Kontaktinformationen',
      type: 'object',
      group: 'contactInformation',
      fields: [
        defineField({
          name: 'firstName',
          title: 'Vorname*',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'lastName',
          title: 'Nachname*',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'email',
          title: 'E-Mail*',
          type: 'string',
          validation: (Rule) => Rule.required().email(),
        }),

        defineField({
          name: 'phone',
          title: 'Telefon',
          type: 'string',
        }),

        defineField({
          name: 'address',
          title: 'Adresse',
          type: 'object',
          fields: [
            defineField({
              name: 'street',
              title: 'Straße',
              type: 'string',
            }),

            defineField({
              name: 'postalCode',
              title: 'PLZ',
              type: 'string',
            }),

            defineField({
              name: 'city',
              title: 'Ort',
              type: 'string',
            }),

            defineField({
              name: 'country',
              title: 'Land',
              type: 'string',
              initialValue: 'Deutschland',
            }),
          ],
        }),

        defineField({
          name: 'github',
          title: 'GitHub',
          type: 'url',
        }),
      ],
    }),
  ],
})
