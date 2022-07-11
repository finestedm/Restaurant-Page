const contactDetails = ['name', 'generic-address1', 'generic-address2', '+48 000 000 000', 'generic@mail.com']

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