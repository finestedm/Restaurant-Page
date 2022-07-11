const contactDetails = ['Generic Restaurant', 'generic-address1', 'generic-address2', '<a href="tel:+48 000 000 000">+48 000 000 000</a>', '<a href="mailto:generic@mail.com">generic@mail.com</a>']

export function generateContact() {
    const contactInfoHolder = document.createElement('ul');
    contactInfoHolder.classList.add('contact-info');
    contactInfoHolder.classList.add('tab-specific-content');
    for (let i = 0; i < contactDetails.length; i++) {
        const contactDetail = document.createElement('li');
        contactDetail.innerHTML = contactDetails[i]
        contactInfoHolder.append(contactDetail)
    }
    return contactInfoHolder;
}