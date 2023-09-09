// JavaScript for making sections collapsible
const sections = document.querySelectorAll('section[id]');

sections.forEach((section) => {
    const heading = section.querySelector('h2');
    const content = section.querySelector('p, ul');

    heading.addEventListener('click', () => {
        content.classList.toggle('hidden');
    });
});