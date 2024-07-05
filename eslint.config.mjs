import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: [
      'src/uni_modules',
      'src/js_sdk',
      'src/static',
    ],
  },
  {
    languageOptions: {
      globals: {
        uni: true,
        plus: true,
        wx: true,
        my: true,
        getApp: true,
        getCurrentPages: true,
        App: true,
        Page: true,
        Component: true,
        Behavior: true,
        wxs: true,
        requirePlugin: true,
        require: true,
        define: true,
        module: true,
        exports: true,
        process: true,
        global: true,
      },
    },
    rules: {},
  },
)
