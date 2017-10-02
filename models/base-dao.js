import firebase from 'firebase';

class BaseDAO {
	constructor(name) {
		this.db = firebase.child(name);
	}

	getById(id) {
		var self = this;
		return new Promise(function (resolve) {
			this.db.child(id).once('value').then(function (snapshot) {
				resolve(snapshot.val());
			});
		});
	}

	getAll() {
		var self = this;
		return new Promise((resolve, reject) => {
			self.db.once('value')
				.then(function (snapshot) {
					var items = [];
					snapshot.forEach(function (childSnapshot) {
						console.log(childSnapshot.val());
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