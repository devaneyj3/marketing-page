import dundeeos from '../../../img/Dundee_O\'s.jpg'
import gabagool from '../../../img/gaba-gool.jpg'
import beets from '../../../img/beet_cereal.jpg'

class Cereals {
    constructor(name, price, description, image) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
    }
}

let cereals = [new Cereals('Dundee O\'s', '$4.99', "Scranton's favorite sugar flavored cereal", dundeeos), new Cereals('Gaba-gool', "$5.99", "Michael's personal favorite. Broccoli flavored cereal", gabagool), new Cereals('Beet Flakes', '$5.99', "Made from Dwight's home made beets on his farm.", beets)];

export {cereals}