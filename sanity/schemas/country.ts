import { defineField, defineType } from 'sanity'

export const country = defineType({
  name: 'country',
  title: 'Страны и Локации',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Название страны',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'locations',
      title: 'Города и Локации',
      type: 'array',
      description: 'Список городов/офисов для этой страны со своими курсами валют',
      of: [
        {
          type: 'object',
          title: 'Локация',
          fields: [
            defineField({
              name: 'name',
              title: 'Название города/района',
              type: 'string',
              description: 'Например: Москва, Центр',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'address',
              title: 'Конкретный адрес',
              type: 'string',
              description: 'Например: ул. Пушкина, д. Колотушкина',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Дополнительное описание',
              type: 'text',
              description: 'Режим работы, ориентиры и т.д.',
            }),
            defineField({
              name: 'rates',
              title: 'Курсы валют в этой локации',
              type: 'array',
              description: 'Курсы валют, доступные именно в этом офисе',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'code',
                      title: 'Код валюты (например, USD)',
                      type: 'string',
                      validation: (rule) => rule.required().uppercase(),
                    }),
                    defineField({
                      name: 'name',
                      title: 'Название валюты (например, Доллар США)',
                      type: 'string',
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: 'rate',
                      title: 'Курс (к базовой валюте, например к рублю)',
                      type: 'number',
                      validation: (rule) => rule.required().positive(),
                    })
                  ],
                  preview: {
                    select: {
                      title: 'name',
                      subtitle: 'code',
                      rate: 'rate'
                    },
                    prepare({ title, subtitle, rate }) {
                      return {
                        title: `${subtitle} - ${title}`,
                        subtitle: `Курс: ${rate}`
                      }
                    }
                  }
                }
              ]
            })
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'address'
            }
          }
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
