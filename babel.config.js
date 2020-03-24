module.exports = {
    presets: [
        [
            '@vue/app',
            {
                polyfills: ['es7.object.entries', 'es6.promise']
            }
        ]
    ],
    plugins: [
        [
            'component',
            {
                libraryName: 'element-ui',
                styleLibraryName: 'theme-chalk'
            }
        ],
        [
            "prismjs", {
                "languages": ["javascript", "css", "markup", "go", "json", "jsonp"],
                "plugins": ["line-numbers"],
                "theme": "dark",
                "css": true
            }
        ]
    ]
};
