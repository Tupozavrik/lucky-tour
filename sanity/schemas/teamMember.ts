import { defineField, defineType } from 'sanity';

export const teamMember = defineType({
    name: 'teamMember',
    title: 'Участник команды',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Имя',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Описание / Должность',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'photo',
            title: 'Фото',
            type: 'image',
            options: {
                hotspot: true, // Позволяет администратору обрезать фото в интерфейсе
            },
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'photo',
        },
    },
});
