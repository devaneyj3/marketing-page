import Scott from '../../img/Scott.jpg'
import Dwight from '../../img/Dwight.jpg'
import Jim from '../../img/Jim.jpg'
import Pam from '../../img/Pam.jpg'

class Person {
    constructor(name, title, quote, photo) {
        this.name = name
        this.title = title
        this.quote = quote
        this.photo = photo
    }
}

const mike = new Person('Micheal Scott', 'Owner/Manager', "They call me prision Mike",Scott);
const dwight = new Person('Dwight Schrute', "Sales", "Bears, Beets, Battle Star Galactica", Dwight);

const pam = new Person('Pam Halpert-Beasly', "Receptionists", "I feel God is in this chili's tonight", Pam)

const jim = new Person('Jim Halpert', "Assisted Manager", "My roommate wants to meet everybody. Because I’m pretty sure he thinks I’m making Dwight up. He is very real.", Jim)
let newArray = []

newArray.push(mike)
newArray.push(dwight)
newArray.push(pam)
newArray.push(jim)

export { newArray };
