import PostsDAO from 'posts-dao'
import Templates from 'templates'

class PostsController {
	constructor() {
		this.dao = new PostsDAO();
	}

	getAllPosts() {
		console.log("get all posts");
		this.dao.getAll()
			.then((items) => {
				console.log(items);
				new Templates('posts')
					.show('#posts', {
						items // : [items[0]]
					});
			}).catch(error => {
				console.log(error);
                let code = error.code;
                let message = error.message;
            });
	}

	showPost(id) {
		this.dao.getById(id)
			.then((post) => {
				//TODO
			})
	}
}

export default PostsController;