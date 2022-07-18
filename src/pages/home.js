import { Dish, foodList } from "../resources/foodlist.js";
import { website } from "./website.js";
import { foodListObjects } from "../resources/foodlist.js";
let generatedRandomNumbers = [];

(function generateRandomNumber() {
    while (generatedRandomNumbers.length < 3) {
        let picked = Math.floor(Math.random() * foodListObjects.length);
        if (generatedRandomNumbers.includes(picked) === false) {
            generatedRandomNumbers += picked;
        }
    }
})();

export function generateHome() {
    const tabSpecificContent = document.createElement('div');
    tabSpecificContent.classList.add('tab-specific-content', 'home')
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
        foodExamples.append(foodListObjects[generatedRandomNumbers[i]].foodCard)
    }

    infoHolder.append(description, foodExamples);

    return infoHolder;
}


