import 'jquery';

import Handlebars from 'handlebars';
import MainController from 'main-controller'
import MenusController from 'menus-controller'
import PostsController from 'posts-controller'
import Sammy from 'sammy';
import templates from 'templates';

const router = (function() {
    const menusController = new MenusController();
    const postsController = new PostsController();
    const mainController = new MainController();

    function start() {
        let sammyApp = Sammy('#main', function() {
            this.get('/', function() {
                this.redirect('#/');
            });
            this.get('#/', function() {
                this.redirect('#/home');
            });
            this.get('#/home', function() {
                mainController.showMain('home').then(() => {
                    // menusController.chefsRecommendations();
                    // locationController.shortLocation();
                    // reviewsController.getRandomReview();
                    postsController.getAllPosts();
                })
            });
            this.get('#/posts/:id', function() {
                var id = this.params.id;
                mainController.showMain('post').then(() => {
                    postsController.showPost(id);
                });
            });
            this.get('#/menu', function() {
                mainController.showMain('menu').then(() => {
                    // menusController.showMenu();
                });
            });
            this.get('#/location', function() {
                mainController.showMain('location').then(() => {
                    // locationController.fullLocation();
                });
            });
        });
        sammyApp.run('#/home');
    }
    return {
        start
    };
}());

export default router;