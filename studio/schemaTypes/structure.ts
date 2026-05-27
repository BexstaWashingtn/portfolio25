import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(
          S.editor()
            .id('siteSettingsEditor')
            .title('Site Settings')
            .schemaType('siteSettings')
            .documentId('siteSettings'),
        ),

      S.listItem()
        .title('Startseite')
        .id('startpage')
        .child(
          S.editor()
            .id('startpageEditor')
            .title('Startseite')
            .schemaType('startpage')
            .documentId('startpage'),
        ),

      ...S.documentTypeListItems().filter(
        (listItem) => listItem.getId() !== 'siteSettings' && listItem.getId() !== 'startpage',
      ),
    ])
