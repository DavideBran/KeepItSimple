// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    type: 'app',
    vue: true,
    typescript: true,
    formatters: true,
  }),
  // PascalCase for components
  {
    files: ['app/components/*.{js,ts,vue}'],
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'pascalCase',
        },
      ],
    },
  },
  // camelCase for pages
  {
    files: ['app/pages/*.{js,ts,vue}'],
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'camelCase',
        },
      ],
    },
  },
)
