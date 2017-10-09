import Templates from 'templates';

class MainController {
	showMain(location) {
		const templateName = location === 'home' ? 'main' : 'basic';
		return new Templates(templateName)
			.show('#main', {});
	}
}

export default MainController;
