import PostsDAO from 'posts-dao';
import Templates from 'templates';

class PostsController {
	constructor() {
		this.dao = new PostsDAO();
	}

	getAllPosts() {
		this.getAllPostsForTemplate('posts');
	}

	getAllPostsFooter() {
		this.getAllPostsForTemplate('posts-footer');
	}

	getAllPostsForTemplate(templateName) {
		this.dao.getAll()
			.then((items) => {
				new Templates(templateName)
					.show('#posts', {
						items, // : [items[0]]
					});
			}).catch((error) => {
				console.log(error);
			});
	}

	getAllPostsAside() {
		this.dao.getAll()
			.then((items) => {
				new Templates('posts-footer')
					.show('.com-posts', {
						items, // : [items[0]]
					});
			}).catch((error) => {
				console.log(error);
			});
	}

	showPost(id) {
		return this.dao.getById(id)
		.then((item) => {
			return new Templates('basic')
				.show('#main', {
					title: item.title,
					titleNav: item.title.toUpperCase(),
				})
				.then(() => {
					return new Templates('post')
					.show('.post', {
						item,
					});
				});
		});
	}
}

export default PostsController;
