import {defineField, defineType} from 'sanity'
import {createImageField} from '../fields/createImageField'
import {createStringArrayField} from '../fields/createStringArrayField'
import {createStringField} from '../fields/createStringField'
import {createSkillField} from '../fields/createSkillField'

const startpageGroups = [
  {name: 'hero', title: 'Hero'},
  {name: 'aboutme', title: 'Über mich'},
  {name: 'typeAnalysis', title: 'Typanalyse'},
  {name: 'workingMethods', title: 'Arbeitsweise'},
  {name: 'skills', title: 'Skills'},
  {name: 'projects', title: 'Projekte'},
  {name: 'contact', title: 'Kontakt'},
]

const commonSectionGroups = [
  {name: 'sectionSettings', title: 'Einstellungen'},
  {name: 'sectionHeader', title: 'Sektionheader'},
  {name: 'content', title: 'Inhalt'},
]

export const startpage = defineType({
  name: 'startpage',
  title: 'Startseite',
  type: 'document',
  preview: {
    prepare() {
      return {title: 'Startseite'}
    },
  },
  groups: startpageGroups,
  fields: [
    defineField({
      name: 'heroSection',
      title: 'Hero',
      type: 'heroSection',
      group: 'hero',
    }),
    defineField({
      name: 'aboutMeSection',
      title: 'Über mich',
      type: 'aboutMeSection',
      group: 'aboutme',
    }),
    defineField({
      name: 'typeAnalysisSection',
      title: 'Typanalyse',
      type: 'typeAnalysisSection',
      group: 'typeAnalysis',
    }),
    defineField({
      name: 'workingMethodsSection',
      title: 'Arbeitsweise',
      type: 'workingMethodsSection',
      group: 'workingMethods',
    }),
    defineField({
      name: 'skillsSection',
      title: 'Skills',
      type: 'skillsSection',
      group: 'skills',
    }),
    defineField({
      name: 'projectsSection',
      title: 'Projekte',
      type: 'projectsSection',
      group: 'projects',
    }),
    defineField({
      name: 'contactSection',
      title: 'Kontakt',
      type: 'contactSection',
      group: 'contact',
    }),
  ],
})

export const sectionSettings = defineType({
  name: 'sectionSettings',
  title: 'Sektion-Einstellungen',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionId',
      title: 'Section ID / Anchor*',
      type: 'string',
      validation: (Rule) =>
        Rule.required().regex(/^[a-z0-9-]+$/, {
          name: 'sectionId',
        }),
    }),
    defineField({
      name: 'visible',
      title: 'Sektion anzeigen',
      type: 'boolean',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'showInNavigation',
      title: 'In Navigation anzeigen',
      type: 'boolean',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'navigationLabel',
      title: 'Navigationstext*',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    createImageField({
      name: 'backgroundImage',
      title: 'Hintergrundbild',
      description: '1920 x 1080px, Format JPEG',
      required: false,
      imageVariant: true,
      initialVariant: 'sectionBackground',
    }),
  ],
})

export const startpageSectionHeader = defineType({
  name: 'startpageSectionHeader',
  title: 'Sektionheader',
  type: 'object',
  fields: [
    createImageField({
      name: 'headerImage',
      title: 'Sektion Icon',
      description: 'width max: 160px height max: 140px, Format SVG, JPG, PNG',
      imageVariant: true,
      required: false,
    }),
    createStringField({
      name: 'headerHeadline',
      title: 'Überschrift*',
      description: 'Überschrift der Sektion',
      min: 4,
      max: 32,
      required: true,
    }),
    defineField({
      name: 'headerText',
      title: 'Headertext*',
      description: 'Sektion Text, min. 48 - max. 240',
      type: 'text',
      validation: (Rule) => Rule.min(48).max(240).required(),
    }),
  ],
})

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero',
  type: 'object',
  groups: [
    {name: 'sectionSettings', title: 'Einstellungen'},
    {name: 'content', title: 'Inhalt'},
  ],
  fields: [
    defineField({
      name: 'sectionSettings',
      title: 'Einstellungen',
      type: 'sectionSettings',
      group: 'sectionSettings',
    }),
    createStringField({
      name: 'teaser',
      title: 'Hero Teaser Slogan*',
      description: 'Spruch unter dem Logo, min. 12 - max. 62 Zeichen',
      min: 12,
      max: 62,
      required: true,
      group: 'content',
    }),
  ],
})

export const aboutMeSection = defineType({
  name: 'aboutMeSection',
  title: 'Über mich',
  type: 'object',
  groups: [
    ...commonSectionGroups,
    {name: 'typeAnalysis', title: 'Typanalyse'},
    {name: 'workingMethods', title: 'Arbeitsweise'},
  ],
  fields: [
    defineField({
      name: 'sectionSettings',
      title: 'Einstellungen',
      type: 'sectionSettings',
      group: 'sectionSettings',
    }),
    defineField({
      name: 'sectionHeader',
      title: 'Sektionheader',
      type: 'startpageSectionHeader',
      group: 'sectionHeader',
    }),
  ],
})

export const typeAnalysisSection = defineType({
  name: 'typeAnalysisSection',
  title: 'Typanalyse',
  type: 'object',
  groups: commonSectionGroups,
  fields: [
    defineField({
      name: 'sectionSettings',
      title: 'Einstellungen',
      type: 'sectionSettings',
      group: 'sectionSettings',
    }),
    createStringField({
      name: 'headerHeadline',
      title: 'Überschrift*',
      min: 4,
      max: 24,
      required: true,
      group: 'content',
    }),
    createStringArrayField({
      name: 'pros',
      title: 'Pro Argumente*',
      itemTitle: 'Pro Argument',
      required: true,
      group: 'content',
    }),
    createStringArrayField({
      name: 'cons',
      title: 'Kontra Argumente*',
      itemTitle: 'Kontra Argument',
      required: true,
      group: 'content',
    }),
  ],
})

export const workingMethodsSection = defineType({
  name: 'workingMethodsSection',
  title: 'Arbeitsweise',
  type: 'object',
  groups: commonSectionGroups,
  fields: [
    defineField({
      name: 'sectionSettings',
      title: 'Einstellungen',
      type: 'sectionSettings',
      group: 'sectionSettings',
    }),
    createStringField({
      name: 'headerHeadline',
      title: 'Überschrift*',
      min: 4,
      max: 24,
      required: true,
      group: 'content',
    }),
    defineField({
      name: 'items',
      title: 'Arbeitsweiseaufzählung',
      type: 'array',
      group: 'content',
      of: [
        defineField({
          name: 'workingMethodItem',
          title: 'Arbeitsweise',
          type: 'object',
          fields: [
            createStringField({
              name: 'headline',
              title: 'Überschrift*',
              min: 4,
              max: 24,
              required: true,
            }),
            createImageField({
              name: 'icon',
              title: 'Icon*',
              description: 'width: ~80px, height: 80px, Format: SVG, JPG, PNG',
              imageVariant: true,
              initialVariant: 'workingMethodsIcon',
              required: true,
            }),
            createStringField({
              name: 'text',
              title: 'Text*',
              description: 'Beschreibungstext max. 96 Zeichen',
              min: 4,
              max: 96,
              required: true,
            }),
          ],
        }),
      ],
    }),
  ],
})

export const skillsSection = defineType({
  name: 'skillsSection',
  title: 'Skills',
  type: 'object',
  groups: [
    ...commonSectionGroups,
    {
      name: 'skills',
      title: 'Skills',
    },
  ],
  fields: [
    {
      name: 'sectionSettings',
      title: 'Einstellungen',
      type: 'sectionSettings',
      group: 'sectionSettings',
    },
    {
      name: 'sectionHeader',
      title: 'Sektionheader',
      type: 'startpageSectionHeader',
      group: 'sectionHeader',
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'object',
      group: 'skills',
      groups: [
        {name: 'experiences', title: 'Erfahrungen'},
        {name: 'technologies', title: 'Technologien'},
        {name: 'graphics', title: 'Grafik'},
        {name: 'software', title: 'Software'},
        {name: 'os', title: 'OS'},
        {name: 'languages', title: 'Sprachen'},
      ],
      fields: [
        {
          name: 'experiences',
          title: 'Erfahrungen',
          type: 'object',
          group: 'experiences',
          fields: [
            {
              name: 'items',
              title: 'Erfahrungen',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'skill',
                      title: 'Erfahrung',
                      type: 'string',
                    },
                  ],
                  preview: {
                    select: {
                      title: 'skill',
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          name: 'technologies',
          title: 'Technologien',
          type: 'object',
          group: 'technologies',
          groups: [
            {name: 'frontend', title: 'Frontend'},
            {name: 'backend', title: 'Backend'},
          ],
          fields: [
            {
              name: 'frontend',
              title: 'Frontend',
              group: 'frontend',
              type: 'object',
              fields: [
                {
                  name: 'items',
                  title: 'Skills',
                  type: 'array',
                  of: [createSkillField({required: true})],
                },
              ],
            },
            {
              name: 'backend',
              title: 'Backend',
              group: 'backend',
              type: 'object',
              fields: [
                {
                  name: 'items',
                  title: 'Skills',
                  type: 'array',
                  of: [createSkillField({required: true})],
                },
              ],
            },
          ],
        },
        {
          name: 'graphics',
          title: 'Grafik',
          group: 'graphics',
          type: 'object',
          fields: [
            {
              name: 'items',
              title: 'Skills',
              type: 'array',
              of: [createSkillField({required: true})],
            },
          ],
        },
        {
          name: 'software',
          title: 'Software',
          group: 'software',
          type: 'object',
          fields: [
            {
              name: 'items',
              title: 'Skills',
              type: 'array',
              of: [createSkillField({required: true})],
            },
          ],
        },
        {
          name: 'os',
          title: 'OS',
          group: 'os',
          type: 'object',
          fields: [
            {
              name: 'items',
              title: 'Skills',
              type: 'array',
              of: [createSkillField({required: true})],
            },
          ],
        },
        {
          name: 'languages',
          title: 'Sprachen',
          group: 'languages',
          type: 'object',
          fields: [
            {
              name: 'items',
              title: 'Skills',
              type: 'array',
              of: [createSkillField({required: true})],
            },
          ],
        },
      ],
    },
  ],
})

export const projectsSection = defineType({
  name: 'projectsSection',
  title: 'Projekte',
  type: 'object',
  groups: commonSectionGroups,
  fields: [
    defineField({
      name: 'sectionSettings',
      title: 'Einstellungen',
      type: 'sectionSettings',
      group: 'sectionSettings',
    }),
    defineField({
      name: 'sectionHeader',
      title: 'Sektionheader',
      type: 'startpageSectionHeader',
      group: 'sectionHeader',
    }),
    createStringField({
      name: 'teaser',
      title: 'Projekt-Teaser',
      min: 12,
      max: 160,
      required: false,
      group: 'content',
    }),
  ],
})

export const contactSection = defineType({
  name: 'contactSection',
  title: 'Kontakt',
  type: 'object',
  groups: commonSectionGroups,
  fields: [
    defineField({
      name: 'sectionSettings',
      title: 'Einstellungen',
      type: 'sectionSettings',
      group: 'sectionSettings',
    }),
    defineField({
      name: 'sectionHeader',
      title: 'Sektionheader',
      type: 'startpageSectionHeader',
      group: 'sectionHeader',
    }),
    createStringField({
      name: 'email',
      title: 'E-Mail*',
      min: 6,
      max: 96,
      required: true,
      group: 'content',
    }),
  ],
})
