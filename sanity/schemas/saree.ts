import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'saree',
  title: 'Saree Listing',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'e.g. Forest Green Peacock Kanjivaram',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Auto-generated URL identifier',
      options: { source: 'name', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Saree Type',
      type: 'string',
      options: {
        list: [
          { title: 'Kanjivaram', value: 'kanjivaram' },
          { title: 'Banarasi', value: 'banarasi' },
          { title: 'Paithani', value: 'paithani' },
          { title: 'Chanderi', value: 'chanderi' },
          { title: 'Mysore Silk', value: 'mysore' },
          { title: 'Pochampally', value: 'pochampally' },
          { title: 'Other', value: 'other' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'origin',
      title: 'Origin / Region',
      type: 'string',
      description: 'e.g. Tamil Nadu · Heirloom, or Varanasi · Est. 1980s',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'listingType',
      title: 'Listing Type',
      type: 'string',
      options: {
        list: [
          { title: 'Buy Only', value: 'buy' },
          { title: 'Rent Only', value: 'rent' },
          { title: 'Buy or Rent', value: 'both' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'condition',
      title: 'Condition Grade',
      type: 'string',
      options: {
        list: [
          { title: 'Heirloom', value: 'heirloom' },
          { title: 'Excellent', value: 'excellent' },
          { title: 'Good', value: 'good' },
          { title: 'Fair', value: 'fair' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'buyPrice',
      title: 'Buy Price (USD)',
      type: 'number',
      description: 'Leave blank if not available for purchase',
    }),
    defineField({
      name: 'rentPrice',
      title: 'Rent Price (USD per 3 days)',
      type: 'number',
      description: 'Leave blank if not available for rent',
    }),
    defineField({
      name: 'images',
      title: 'Photos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt text',
              description: 'Brief description for accessibility',
            },
          ],
        },
      ],
      description: 'Upload multiple photos. First photo is the cover image.',
      validation: Rule => Rule.min(1).error('At least one photo is required'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'The story and details of this piece — fabric, motifs, history',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'provenanceStory',
      title: 'Provenance Story',
      type: 'text',
      rows: 4,
      description: 'Optional deeper story — where it came from, who owned it, what occasions it witnessed',
    }),
    defineField({
      name: 'colors',
      title: 'Primary Colors',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. Forest Green, Antique Gold, Ruby Red',
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Piece',
      type: 'boolean',
      description: 'Show this piece prominently at the top of the shop',
      initialValue: false,
    }),
    defineField({
      name: 'available',
      title: 'Available',
      type: 'boolean',
      description: 'Uncheck to hide this listing without deleting it',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first. Leave blank for automatic ordering.',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'origin',
      media: 'images.0',
    },
  },
  orderings: [
    {
      title: 'Manual Order',
      name: 'manualOrder',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Name A–Z',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
})
