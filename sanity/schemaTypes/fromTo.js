import {defineType, defineField} from 'sanity'

export default defineType({
    name: 'amount',
    title: 'Antal spillere',
    type: 'object',
    fields: [
      defineField({
        name: 'from',
        title: 'Fra',
        type: 'number',
        validation: Rule => Rule.min(1).warning('Må være heltall over 1!'),
      }),
      defineField({
        name: 'to',
        title: 'Til',
        description: 'La være blank for ubegrenset antall.',
        type: 'number',
        validation: Rule => Rule.min(1).warning('La være større enn fra, og heltall over 1 (eller blank)'),
      }),
    ],
    // make the fields render next to each other
    options: {columns: 2},
  })
