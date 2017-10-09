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
		console.log('get all posts');
		this.dao.getAll()
			.then((items) => {
				console.log(items);
				new Templates(templateName)
					.show('#posts', {
						items, // : [items[0]]
					});
			}).catch((error) => {
				console.log(error);
			});		
	}
}

export default PostsController;
