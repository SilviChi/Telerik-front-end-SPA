import Templates from 'templates';

class LocationController {
	shortLocation() {
		return new Templates('short-location')
			.show('.section2', {});
	}
}

export default LocationController;
