import MenusDAO from 'menus-dao';
import Templates from 'templates';

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
					items: [items[0], items[1], items[2]],
				});
		}).catch((error) => {
			console.log(error);
		});
	}

	showMenu() {
		this.dao.getAll()
		.then((items) => {
			const starter = items.filter((item) => {
				return item.type === 'Starters';
			});
			console.log(starter);
			const main = items.filter((item) => {
				return item.type === 'Main';
			});
			const dessert = items.filter((item) => {
				return item.type === 'Desserts';
			});
			new Templates('menu')
				.show('.menu', {
					starter,
					main,
					dessert,
				});
		}).catch((error) => {
			console.log(error);
		});
	}
}

export default MenusController;
