import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: {
      vueVersion: 2,
    },
    ignores: [
      'docker',
      'docs',
      'public',
      'src/uni_modules',
      'src/hybrid',
      'src/js_sdk',
      'src/nativeplugins',
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
        worker: true,
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
