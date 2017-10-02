import Templates from 'templates'

class MainController {

	showMain(location) {
		return new Templates('main')
			.show('#main', {
				location
			});
	}
}

export default MainController;