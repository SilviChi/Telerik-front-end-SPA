import Templates from 'templates';

class MainController {
	showMain(location) {
		const templateName = location === 'home' ? 'main' : 'basic';
		const titles = {
			location: {
				title: 'Location',
				nav: 'LOCATION',
			},
			menu: {
				title: 'Menu',
				nav: 'MENU',
			},
			home: {
				title: '',
				nav: '',
			},
		};
		return new Templates(templateName)
			.show('#main', {
				title: titles[location].title,
				titleNav: titles[location].nav,
			});
	}
}

export default MainController;
