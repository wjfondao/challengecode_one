export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,
    mode: 'spa',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'wjbenz',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image', href: '/logo_icon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/scss/app.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt', [
            '@nuxtjs/firebase',
            {
                config: {
                    apiKey: 'AIzaSyCORIo2iWNvvk011o_2TtkSLSU8qie1pRE',
                    authDomain: 'challengeone-57616.firebaseapp.com',
                    projectId: 'challengeone-57616',
                    storageBucket: 'challengeone-57616.appspot.com',
                    messagingSenderId: '638283081037',
                    appId: '1:638283081037:web:d1db116e5259630292c304',
                    measurementId: 'G-LNRFDQ47DC',
                },
                services: {
                    auth: true, // Just as example. Can be any other service.
                },
            },
        ],
    ],

    // ------------------
    // Global Settings : https://nuxtjs.org/docs/features/configuration/#global-settings
    script: [{
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
    }, ],
    link: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap',
    }, ],
    // -------------------

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        loaders: {
            sass: {
                implementation: require('sass'),
            },
            scss: {
                implementation: require('sass'),
            },
        },
    },
}