import gitHubImage from '../images/githublogo.png'
import { generateContact } from './contact.js'
import { generateHome } from './home.js'
import { generateMenu } from './menu';


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

function replaceTabSpecificContent(buttonName) {
    try {
        document.querySelector('.tab-specific-content').remove();
        switch (buttonName) {
            case 'Home':
                website.append(generateHome());
                break;
            case 'Contact':
                website.append(generateContact());
                break;
            case 'Menu':
                website.append(generateMenu());
                break;
        }
    } catch (e) {
        switch (buttonName) {
            case 'Home':
                website.append(generateHome());
                break;
            case 'Contact':
                website.append(generateContact());
                break;
            case 'Menu':
                website.append(generateMenu());
                break;
        };
    }
}

export function buttonGenerator(buttonName) {
    const tabButton = document.createElement('button');
    tabButton.classList.add('tab-button');
    tabButton.setAttribute('id', buttonName);
    tabButton.innerHTML = buttonName;
    tabButton.addEventListener('click', (e) => { replaceTabSpecificContent(buttonName) })
    navBar.append(tabButton);
}

export function websiteInitialize() {
    buttonGenerator('Home');
    buttonGenerator('Menu');
    buttonGenerator('Contact');
    website.append(navBar, generateHome(), generateFooter());
}
