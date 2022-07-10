import spaghettiPhoto from '../images/spaghetti.jpg'
import lasagnePhoto from '../images/lasagne.jpg'



export class Dish {
    constructor(name, description, ingredients, photo) {
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.photo = photo;
    }

    get foodCard() {
        const card = document.createElement('card');
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

export const foodList = [['Spaghetti', 'Pasta with tomato sauce', 'Pasta, tomatoes, bla bla bla', spaghettiPhoto], ['Lasagne', 'Pasta with tomato sauce, but different', 'Pasta, tomatoes, bla bla bla', lasagnePhoto]]