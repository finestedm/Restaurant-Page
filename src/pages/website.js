import gitHubImage from '../images/githublogo.png'

import { generateRestaurantInfo } from './home.js'


const website = document.getElementById('content');
const navBar = document.createElement('nav-bar');
const main = document.createElement('main');


function generateFooter() {
    const footer = document.createElement('footer');
    const gitHubLogo = document.createElement('img');
    gitHubLogo.setAttribute('src', `${gitHubImage}`);
    gitHubLogo.setAttribute('alt', 'GitHubLogo');
    gitHubLogo.classList.add('git-hub-logo');
    const credits = document.createElement('a');
    credits.setAttribute('href', 'https://github.com/finestedm');
    credits.innerHTML = 'Designed by Paweł Stępień';
    footer.append(gitHubLogo, credits);
    return footer;
}


export function buttonGenerator(buttonName) {
    const tabButton = document.createElement('button');
    tabButton.classList.add('tab-button');
    tabButton.setAttribute('id', buttonName);
    tabButton.innerHTML = buttonName;
    tabButton.addEventListener('click', () => {
        console.log(buttonName);    // in future here we will send a request to switch tab content
    })
    navBar.append(tabButton);
}

export function websiteInitialize() {
    buttonGenerator('home');
    buttonGenerator('menu');
    buttonGenerator('contact');
    website.append(navBar, main, generateRestaurantInfo(), generateFooter());
}
