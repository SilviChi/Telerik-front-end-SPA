import Templates from 'templates';

class LocationController {
	shortLocation() {
		return new Templates('short-location')
			.show('.section2', {});
	}
	fullLocation() {
		return new Templates('full-location')
			.show('.findUs', {});
	}
}

export default LocationController;
