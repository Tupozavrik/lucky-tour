export const hero = {
    name: 'hero',
    title: 'Главный экран',
    type: 'document',
    fields: [
        {
            name: 'headline',
            title: 'Главный заголовок',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'subheadline',
            title: 'Подзаголовок',
            type: 'text',
        },
        {
            name: 'buttonText',
            title: 'Текст кнопки',
            type: 'string',
            description: 'Например: "Найти тур"',
        },
        {
            name: 'backgroundImage',
            title: 'Фоновое изображение',
            type: 'image',
            options: {
                hotspot: true,
            },
        }
    ]
}
