import firebase from 'db';

class BaseDAO {
	constructor(name) {
		this.db = firebase.child(name);
	}

	getById(id) {
		const self = this;
		return new Promise(function(resolve) {
			self.db.child(id).once('value').then(function(snapshot) {
				resolve(snapshot.val());
			});
		});
	}

	getAll() {
		const self = this;
		return new Promise((resolve, reject) => {
			self.db.once('value')
				.then(function(snapshot) {
					const items = [];
					snapshot.forEach(function(childSnapshot) {
						items.push(childSnapshot.val());
					});
					resolve(items);
				})
				.catch((error) => {
					console.log(error);
				});
		});
	}

	save(data) {
		return this.db.push().set(data);
	}
}

export default BaseDAO;
