import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'game',
  title: 'Spill',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tittle',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'Trykk \"Generate\"',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'players',
      title: 'Antall spillere',
      type: 'amount',
    }),
    defineField({
      name: 'summary',
      title: 'Kort fortalt',
      type: 'text',
      validation: Rule => Rule.max(100).warning('Husk at dette er KORT fortalt (max 100 tegn)'),
    }),
    defineField({
      name: 'body',
      title: 'Regler',
      type: 'blockContent',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      description: 'Regler i form av spørsmål',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'faq',
          title: 'FAQ',
          type: 'object',
          fields: [
            {type: 'string', name: 'question', title: 'Spørsmål'},
            {type: 'text', name: 'ansver', title: 'Svar'},
          ]
        })
      ]
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    // defineField({
    //   name: 'author',
    //   title: 'Author',
    //   type: 'reference',
    //   to: {type: 'author'},
    // }),
    // defineField({
    //   name: 'mainImage',
    //   title: 'Main image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
    // defineField({
    //   name: 'publishedAt',
    //   title: 'Published at',
    //   type: 'datetime',
    // }),
  ],

  preview: {
    select: {
      title: 'title',
      // author: 'author.name',
      // media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
