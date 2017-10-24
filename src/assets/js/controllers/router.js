import 'jquery';

import LocationController from 'location-controller';
import MainController from 'main-controller';
import MenusController from 'menus-controller';
import PostsController from 'posts-controller';
import ReviewsController from 'reviews-controller';
import Sammy from 'sammy';

const router = (function() {
    const menusController = new MenusController();
    const postsController = new PostsController();
    const mainController = new MainController();
    const locationController = new LocationController();
    const reviewsController = new ReviewsController();

    function start() {
        const sammyApp = new Sammy('#main', function() {
            this.get('/', function() {
                this.redirect('#/');
            });
            this.get('#/', function() {
                this.redirect('#/home');
            });
            this.get('#/home', function() {
                mainController.showMain('home').then(() => {
                    postsController.getAllPosts();
                    menusController.chefsRecommendations();
                    locationController.shortLocation();
                    reviewsController.randomReview();
                });
            });
            this.get('#/posts/:id', function() {
                const id = this.params.id;
                postsController.showPost(id).then(() => {
                    postsController.getAllPostsAside();
                    reviewsController.getRecentReviews();
                    postsController.getAllPostsFooter();
                });
            });
            this.get('#/menu', function() {
                mainController.showMain('menu').then(() => {
                    menusController.showMenu();
                    reviewsController.getRecentReviews();
                    postsController.getAllPostsFooter();
                });
            });
            this.get('#/location', function() {
                mainController.showMain('location').then(() => {
                    locationController.fullLocation();
                    reviewsController.getRecentReviews();
                    postsController.getAllPostsFooter();
                });
            });
        });
        sammyApp.run('#/home');
    }
    return {
        start,
    };
}());

export default router;
