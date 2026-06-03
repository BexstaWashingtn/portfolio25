// schemaTypes/fields/imageField.ts
import {defineField, type ImageRule} from 'sanity'

type ImageVariant = 'logo' | 'portrait' | 'icon' | 'background'

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
  initialVariant = 'icon',
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
        validation: (Rule) => Rule.required(),
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
                    title: 'Logo',
                    value: 'logo',
                  },
                  {
                    title: 'Portrait',
                    value: 'portrait',
                  },
                  {
                    title: 'Icon',
                    value: 'icon',
                  },
                  {
                    title: 'Hintergrund',
                    value: 'background',
                  },
                ],
              },

              validation: (Rule) => Rule.required(),
            }),
          ]
        : []),
    ],
    ...(required && {
      validation: (Rule: ImageRule) => Rule.required(),
    }),
  })
}
