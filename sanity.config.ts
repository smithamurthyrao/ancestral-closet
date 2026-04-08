import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'ancestral-closet',
  title: 'Ancestral Closet',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Ancestral Closet')
          .items([
            S.listItem()
              .title('Saree Listings')
              .child(
                S.documentList()
                  .title('All Sarees')
                  .filter('_type == "saree"')
              ),
            S.listItem()
              .title('Featured Pieces')
              .child(
                S.documentList()
                  .title('Featured')
                  .filter('_type == "saree" && featured == true')
              ),
            S.listItem()
              .title('Available Now')
              .child(
                S.documentList()
                  .title('Available')
                  .filter('_type == "saree" && available == true')
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
