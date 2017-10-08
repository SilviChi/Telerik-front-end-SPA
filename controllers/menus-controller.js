import MenusDAO from 'menus-dao'
import Templates from 'templates'

class MenusController {
	constructor() {
		this.dao = new MenusDAO();
	}

	chefsRecommendations() {
		this.dao.getAll()
		.then((items) => {
			items = items.filter((item) => {
				return item.recommended;
			});
			new Templates('recommendations')
				.show('.section1', {
					items : [items[0], items[1], items[2]]
				});
		}).catch(error => {
			console.log(error);
			let code = error.code;
			let message = error.message;
		});
	}
}

export default MenusController;