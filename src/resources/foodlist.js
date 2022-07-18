import spaghettiPhoto from '../images/spaghetti.jpg'
import lasagnePhoto from '../images/lasagne.jpg'
import ciacioPhoto from '../images/Cacio-e-Pepe.jpeg'
import pizza from '../images/pizza.jpg'
import minestrone from '../images/minestrone.jpg'


export let foodListObjects = []


export class Dish {
    constructor(name, description, ingredients, photo) {
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.photo = photo;
        foodListObjects.push(this);
    }

    get foodCard() {
        const card = document.createElement('li');
        const foodTitle = document.createElement('h2');
        foodTitle.innerHTML = this.name;
        const foodSubTitle = document.createElement('h3');
        foodSubTitle.innerHTML = this.description;
        const foodIngredients = document.createElement('span');
        foodIngredients.innerHTML = this.ingredients;
        const foodPhoto = document.createElement('img');
        foodPhoto.setAttribute('src', `${this.photo}`);
        card.append(foodTitle, foodSubTitle, foodIngredients, foodPhoto);

        return card;
    }

}

// part below is responsible for creating objects through class constructor so that it can be added to the foodListObjects array as objects instead of raw text

export const foodList = [
    ['Spaghetti', 'Pasta with tomato sauce', 'Pasta, tomatoes, bla bla bla', spaghettiPhoto],
    ['Lasagne', 'Pasta with tomato sauce, but different', 'Pasta, tomatoes, bla bla bla', lasagnePhoto],
    ['Cacio e Pepe', 'Literally “cheese and pepper”', 'Pasta, pepper, Pecorino cheese, Grana Padano cheese', ciacioPhoto],
    ['Pizza', 'Dish of Italian origin with round, flat base', 'Wheat-based dough topped with tomatoes, cheese', pizza],
    ['Minestrone', 'Thick soup made with vegetables', 'Beans, onions, celery, carrots, leaf vegetables, stock, parmesan cheese and tomatoes', minestrone]

]

for (let i = 0; i < foodList.length; i++) {
    let dish = new Dish(foodList[i][0], foodList[i][1], foodList[i][2], foodList[i][3])
}
