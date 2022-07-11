import { Dish, foodList } from "../resources/foodlist.js";
import { website } from "./website.js";
import { foodListObjects } from "../resources/foodlist.js";

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

    foodExamples.append(foodListObjects[0].foodCard, foodListObjects[1].foodCard, foodListObjects[2].foodCard);
    infoHolder.append(description, foodExamples);

    return infoHolder;
}
