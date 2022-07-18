import { foodListObjects, Dish } from "../resources/foodlist";

export function generateMenu() {
    const menuHolder = document.createElement('ul')
    menuHolder.classList.add('tab-specific-content', 'menu-holder')
    for (let i = 0; i < foodListObjects.length; i++) {
        menuHolder.append(foodListObjects[i].foodCard);
    }

    return menuHolder;
}