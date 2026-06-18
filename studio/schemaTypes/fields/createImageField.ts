// schemaTypes/fields/imageField.ts
import {defineField, type ImageRule} from 'sanity'

type ImageVariant =
  | 'heroLogo'
  | 'headerPortrait'
  | 'headerIcon'
  | 'workingMethodsIcon'
  | 'icon60x60'
  | 'icon50x50'
  | 'sectionBackground'

type Options = {
  name?: string
  title?: string
  required?: boolean
  group?: string
  description?: string
  hotspot?: boolean

  imageVariant?: Boolean
  initialVariant?: ImageVariant
}

export function createImageField({
  name = 'image',
  title = 'Image',
  required = false,
  group,
  description,
  hotspot = false,
  imageVariant = false,
  initialVariant = 'headerIcon',
}: Options = {}) {
  return defineField({
    name,
    title,
    type: 'image',
    group,
    description,
    options: {
      hotspot,
    },
    fields: [
      defineField({
        name: 'alt',
        title: 'Alternativtext*',
        description: 'required',
        type: 'string',
        validation: (Rule) => (required ? Rule.required() : Rule),
      }),
      defineField({
        name: 'title',
        title: 'Title',
        description: 'optional (for SEO important)',
        type: 'string',
      }),
      ...(imageVariant
        ? [
            defineField({
              name: 'imageVariant',
              title: 'Bildtyp',
              type: 'string',

              initialValue: initialVariant,

              options: {
                layout: 'radio',

                list: [
                  {
                    title: 'Hero Logo',
                    value: 'heroLogo',
                  },
                  {
                    title: 'Sectionheader Portrait',
                    value: 'headerPortrait',
                  },
                  {
                    title: 'Sectionheader Icon',
                    value: 'headerIcon',
                  },
                  {
                    title: 'Working Methods Icon',
                    value: 'workingMethodsIcon',
                  },
                  {
                    title: 'Section Hintergrund',
                    value: 'sectionBackground',
                  },
                  {
                    title: 'Icon 50x50',
                    value: 'icon50x50',
                  },
                  {
                    title: 'Icon 60x60',
                    value: 'icon60x60',
                  },
                ],
              },

              validation: (Rule) => (required ? Rule.required() : Rule),
            }),
          ]
        : []),
    ],
    ...(required && {
      validation: (Rule: ImageRule) => Rule.required(),
    }),
  })
}
