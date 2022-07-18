import { Dish, foodList } from "../resources/foodlist.js";
import { website } from "./website.js";
import { foodListObjects } from "../resources/foodlist.js";
let alreadyPicked = [];


export function generateHome() {
    const tabSpecificContent = document.createElement('div');
    tabSpecificContent.classList.add('tab-specific-content', 'main')
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

    for (let i = 0; i < 3; i++) {
        foodExamples.append(foodListObjects[getRandomNumber()].foodCard)
    }

    infoHolder.append(description, foodExamples);

    return infoHolder;
}


function getRandomNumber() {
    while (alreadyPicked.length < 3) {
        let picked = Math.floor(Math.random() * foodListObjects.length);
        if (alreadyPicked.includes(picked) === false) {
            alreadyPicked.push(picked);
            return picked;
        }
    }
}