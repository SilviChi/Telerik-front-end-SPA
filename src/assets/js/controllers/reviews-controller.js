import ReviewsDAO from 'reviews-dao';
import Templates from 'templates';

class ReviewsController {
	constructor() {
		this.dao = new ReviewsDAO();
	}

	getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}

	randomReview() {
		this.dao.getAll()
		.then((items) => {
			const review = items[this.getRandomInt(0, items.length)];
			new Templates('reviews')
				.show('.section3', review);
		}).catch((error) => {
			console.log(error);
		});
	}
	getRecentReviews() {
		this.dao.getAll()
		.then((reviews) => {
			new Templates('comments')
				.show('.comments', {
					reviews, // : [items[0]]
				});
		}).catch((error) => {
			console.log(error);
		});
	}

	// getReviews() {
	// 	this.dao.getAll()
	// 	.then((reviews) => {
	// 		new Templates('comments')
	// 			.show('.comments', {
	// 				reviews, // : [items[0]]
	// 			});
	// 	}).catch((error) => {
	// 		console.log(error);
	// 	});
	// }
}

export default ReviewsController;
