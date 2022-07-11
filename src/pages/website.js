import gitHubImage from '../images/githublogo.png'
import { generateContact } from './contact.js'
import { generateHome } from './home.js'


export const website = document.getElementById('content');
const navBar = document.createElement('nav-bar');


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
    tabButton.addEventListener('click', () => {         // send it all to the separate function!!!
        try {
            document.querySelector('.tab-specific-content').remove();
            switch (buttonName) {
                case 'Home':
                    website.append(generateHome()); // generateHome should not require website.append...
                    break;
                case 'Contact':
                    website.append(generateContact()); // generateContact should not require website.append...
                    break;
            }
        } catch (e) {
            switch (buttonName) {
                case 'Home':
                    website.append(generateHome()); // generateHome should not require website.append...
                    break;
                case 'Contact':
                    website.append(generateContact()); // generateContact should not require website.append...
                    break;
            };    // in future here we will send a request to switch tab content
        }
    })
    navBar.append(tabButton);
}

export function websiteInitialize() {
    buttonGenerator('Home');
    buttonGenerator('Menu');
    buttonGenerator('Contact');
    website.append(navBar, generateHome(), generateFooter());
}
