import colors from 'vuetify/es5/util/colors'

export default {
    mode: 'spa',

    //server port **Todo**
    // server: {
    //     port: 8000, // default: 3000
    //     host: '0.0.0.0', // default: localhost
    // },
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s - ' + process.env.npm_package_name,
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#4e9525' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/vuetify',
        '@nuxtjs/moment',
        '@nuxtjs/axios'
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */

    axios: {},
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        theme: {
            primary: '#4e9525',
            success: '#3cd1c2',
            info: '#ffaa2c',
            error: '#ff3333'
        }
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}