'use client';

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schema'

export default defineConfig({
    name: 'default',
    title: 'Lucky Tour Admin',

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'wpttru71',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    basePath: '/studio',

    plugins: [structureTool()],

    schema: {
        types: schemaTypes,
    },
})
