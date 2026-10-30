const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  navigation.classList.toggle('open', !isOpen);
});

navigation.addEventListener('click', event => {
  if (event.target.closest('a')) {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('open');
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const values = new FormData(form);
  const subject = encodeURIComponent(`Website enquiry: ${values.get('topic')}`);
  const body = encodeURIComponent(`Name: ${values.get('name')}\nEmail: ${values.get('email')}\nTopic: ${values.get('topic')}\n\n${values.get('message')}`);
  document.querySelector('#form-status').textContent = 'Your email app will open so you can review and send your enquiry.';
  window.location.href = `mailto:wanjohiadvocates@gmail.com?subject=${subject}&body=${body}`;
});
