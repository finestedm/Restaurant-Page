import { foodListObjects, Dish } from "../resources/foodlist";

export function generateMenu() {
    const menuHolder = document.createElement('ul')
    menuHolder.classList.add('tab-specific-content', 'menu-holder')
    menuHolder.append(foodListObjects[0].foodCard, foodListObjects[1].foodCard, foodListObjects[2].foodCard);

    return menuHolder;
}