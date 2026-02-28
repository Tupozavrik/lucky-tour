export const tour = {
    name: 'tour',
    title: 'Туры',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Название тура',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Идентификатор (URL)',
            type: 'slug',
            description: 'Используется для создания ссылки на тур (например: altai-2024)',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'price',
            title: 'Цена',
            type: 'string',
            description: 'Например: "от 50 000 руб."',
        },
        {
            name: 'duration',
            title: 'Продолжительность',
            type: 'string',
            description: 'Например: "7 дней / 6 ночей"',
        },
        {
            name: 'date',
            title: 'Даты проведения',
            type: 'string',
            description: 'Например: "15-22 Июня 2024"',
        },
        {
            name: 'location',
            title: 'Локация (Регион)',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Описание тура',
            type: 'text',
        },
        {
            name: 'mainImage',
            title: 'Главное фото',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Альтернативный текст (для слабовидящих и SEO)',
                }
            ]
        },
        {
            name: 'gallery',
            title: 'Галерея фотографий',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }]
        },
        {
            name: 'route',
            title: 'Маршрут',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Список точек маршрута'
        }
    ],
}
