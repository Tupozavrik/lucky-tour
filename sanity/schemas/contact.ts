export const contact = {
    name: 'contact',
    title: 'Контакты',
    type: 'document',
    fields: [
        {
            name: 'phone',
            title: 'Телефон',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'address',
            title: 'Адрес',
            type: 'string',
        },
        {
            name: 'vk',
            title: 'Ссылка на VK',
            type: 'url',
        },
        {
            name: 'telegram',
            title: 'Ссылка на Telegram',
            type: 'url',
        }
    ]
}
