import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'saree', title: 'Saree Listing', type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name', maxLength: 96 }, validation: Rule => Rule.required() }),
    defineField({ name: 'type', title: 'Saree Type', type: 'string', options: { list: [
      { title: 'Kanjivaram', value: 'kanjivaram' },
      { title: 'Banarasi Pure Silk', value: 'banarasi' },
      { title: 'Banarasi Georgette', value: 'banarasi_georgette' },
      { title: 'Paithani', value: 'paithani' },
      { title: 'KSIC Mysore Silk Crepe', value: 'mysore_crepe' },
      { title: 'KSIC Mysore Silk Georgette', value: 'mysore_georgette' },
      { title: 'Pochampally / Ikat Silk', value: 'pochampally' },
    ], layout: 'radio' }, validation: Rule => Rule.required() }),
    defineField({ name: 'origin', title: 'Origin / Region', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'listingType', title: 'Listing Type', type: 'string', options: { list: [
      { title: 'Buy Only', value: 'buy' },
    ], layout: 'radio' }, validation: Rule => Rule.required() }),
    defineField({ name: 'condition', title: 'Condition Grade', type: 'string', options: { list: [
      { title: 'Heirloom', value: 'heirloom' },
      { title: 'Excellent', value: 'excellent' },
      { title: 'Good', value: 'good' },
      { title: 'Fair', value: 'fair' },
    ], layout: 'radio' }, validation: Rule => Rule.required() }),
    defineField({ name: 'buyPrice', title: 'Buy Price (USD)', type: 'number' }),
    defineField({ name: 'images', title: 'Photos', type: 'array', of: [{ type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string', title: 'Alt text' }] }], validation: Rule => Rule.min(1).error('At least one photo required') }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4, validation: Rule => Rule.required() }),
    defineField({ name: 'provenanceStory', title: 'Provenance Story', type: 'text', rows: 4 }),
    defineField({ name: 'colors', title: 'Primary Colors', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } }),
    defineField({ name: 'featured', title: 'Featured Piece', type: 'boolean', initialValue: false }),
    defineField({ name: 'available', title: 'Available', type: 'boolean', initialValue: true }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  preview: { select: { title: 'name', subtitle: 'origin', media: 'images.0' } },
})
