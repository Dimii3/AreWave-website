const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-links__link');
const navBtn = document.querySelector('.menu-btn');
const animateEl = document.querySelectorAll('.animate');
const footerYear = (document.querySelector('.year').textContent = new Date().getFullYear());

const cookieModal = document.querySelector('.cookie-modal');
cookieModal.showModal();
const cookieBtn = document.querySelector('.cookie-btn');

let isMenuOpen = false;
const isVisible = () => {
	const windowHeight = (window.innerHeight / 5) * 4;
	animateEl.forEach((el) => {
		if (el.getBoundingClientRect().top <= windowHeight) {
			el.classList.add('show');
		}
	});
};

const menuHandler = () => {
	if (!isMenuOpen) {
		navBtn.classList.add('active');
		nav.classList.add('active');
		document.body.style.overflow = 'hidden';
		isMenuOpen = true;
	} else {
		navBtn.classList.remove('active');
		nav.classList.remove('active');
		document.body.style.overflow = 'visible';
		isMenuOpen = false;
	}
};

const checkCookie = () => {
	if (localStorage.getItem('cookie') === 'accept') {
		cookieModal.close();
	}
};
checkCookie();

// LISTENERS
window.addEventListener('scroll', () => {
	isVisible();
	window.scrollY > 200 ? nav.classList.add('expand') : nav.classList.remove('expand');
});
navLinks.forEach((link) =>
	link.addEventListener('click', () => {
		menuHandler();
		document.body.style.overflow = 'visible';
	})
);
navBtn.addEventListener('click', menuHandler);
cookieBtn.addEventListener('click', () => {
	localStorage.setItem('cookie', 'accept');
	cookieModal.close();
});
