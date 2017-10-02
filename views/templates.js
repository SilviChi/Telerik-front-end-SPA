import Handlebars from 'handlebars';

let cacheObj = {};

class Templates {
    constructor(name) {
        this.name = name;
    }

    load() {
        if (cacheObj.hasOwnProperty(this.name)) {
            return Promise.resolve(cacheObj[this.name]);
        }

        let url = 'views/templates/' + this.name + '.handlebars';
        return new Promise((resolve, reject) => {
            $.ajax({
                url: url,
                success: function (data) {
                    cacheObj[this.name] = data; //cahce new temp late
                    resolve(data);
                },
                error: function (err) {
                    reject(err);
                }
            });
        })
    }
    show(selector, data) {
        return new Promise((resolve) => {
            this.load().then((templateHTML) => {
                let template = Handlebars.compile(templateHTML);
                $(selector).html(template(data));
                resolve();
            })    
        });
    }
}

export default Templates;