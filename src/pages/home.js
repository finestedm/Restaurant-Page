import { Dish, foodList } from "../resources/foodlist.js";
import { website } from "./website.js";

export function generateHome() {
    const tabSpecificContent = document.createElement('div');
    tabSpecificContent.classList.add('tab-specific-content')
    const main = document.createElement('main');
    tabSpecificContent.append(main, generateRestaurantInfo());
    return tabSpecificContent;
}

function generateRestaurantInfo() {
    const infoHolder = document.createElement('div');
    infoHolder.classList.add('info-holder');
    const description = document.createElement('p');
    description.innerHTML = 'Our <strong>Generic Restaurant</strong> creates dishes with passion for your pleasure. We only use best quality ingredients.';
    const foodExamples = document.createElement('ul');
    foodExamples.classList.add('food-examples');

    const firstDish = new Dish(foodList[0][0], foodList[0][1], foodList[0][2], foodList[0][3]); // later here we will put a function that will generate cards from 3 random chosen dishes
    const secondDish = new Dish(foodList[1][0], foodList[1][1], foodList[1][2], foodList[1][3]); // later here we will put a function that will generate cards from 3 random chosen dishes


    foodExamples.append(firstDish.foodCard, secondDish.foodCard);
    infoHolder.append(description, foodExamples);

    return infoHolder;
}