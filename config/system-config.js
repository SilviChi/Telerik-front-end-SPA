System.config({
    'transpiler': 'plugin-babel',
    'map': {
        'main': '../app.js',
        'router': '../controllers/router.js',
        'jquery': '../node_modules/jquery/dist/jquery.js',
        'plugin-babel': '../node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': '../node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
        'system': '../node_modules/system.js/dist/system.js',
        'sammy': '../node_modules/sammy/lib/sammy.js',
        'handlebars': '../node_modules/handlebars/dist/handlebars',
        'templates': '../views/templates.js',
        // 'validator': '../models/helpers/validators.js',
        // 'encryptor': '../models/helpers/encryptors.js',
        'firebase': '../config/firebase.js',
        'menus-controller': '../controllers/menus-controller.js',
        'main-controller': '../controllers/main-controller.js',
        'location-controller': '../controllers/location-controller.js',
        'posts-controller': '../controllers/posts-controller.js',
        'reviews-controller': '../controllers/reviews-controller.js',
        'base-dao': '../models/base-dao',
        'posts-dao': '../models/posts-dao',
        'menus-dao': '../models/menus-dao',
        'reviews-dao': '../models/reviews-dao',
    },
    packages: {
        '/': {
            defaultExtension: 'js'
        }
    }
});
System.import('main');