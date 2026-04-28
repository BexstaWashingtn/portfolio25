import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .schemaType('siteSettings')
        .child(S.editor().id('siteSettings').schemaType('siteSettings').documentId('siteSettings')),

      ...S.documentTypeListItems().filter((listItem) => listItem.getId() !== 'siteSettings'),
    ])
