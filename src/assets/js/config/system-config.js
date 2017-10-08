/* global System*/

const base = 'assets/js';

System.config({
    'transpiler': 'plugin-babel',
    'map': {
        'jquery': base + '/lib/jquery/dist/jquery.js',
        'firebase': base + '/lib/firebase/firebase',
        'plugin-babel': base + '/lib/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build':
            base + '/lib/systemjs-plugin-babel/systemjs-babel-browser.js',
        'system': base + '/lib/systemjs/dist/system.js',
        'sammy': base + '/lib/sammy/lib/sammy.js',
        'handlebars': base + '/lib/handlebars/dist/handlebars.js',
        'main': base + '/app.js',
        'router': base + '/controllers/router.js',
        'templates': base + '/views/templates.js',
        'db': base + '/config/firebase.js',
        'menus-controller': base + '/controllers/menus-controller.js',
        'main-controller': base + '/controllers/main-controller.js',
        'location-controller': base + '/controllers/location-controller.js',
        'posts-controller': base + '/controllers/posts-controller.js',
        'reviews-controller': base + '/controllers/reviews-controller.js',
        'base-dao': base + '/models/base-dao',
        'posts-dao': base + '/models/posts-dao',
        'menus-dao': base + '/models/menus-dao',
        'reviews-dao': base + '/models/reviews-dao',
    },
    packages: {
        '/': {
            defaultExtension: 'js',
        },
    },
});
System.import('main');
