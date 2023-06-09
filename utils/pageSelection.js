const questionSection = document.querySelector('[data-js="questionSection"]');
const bookmarkSection = document.querySelector('[data-js="bookmarkSection"]');
const formSection = document.querySelector('[data-js="formSection"]');
const profileSection = document.querySelector('[data-js="profileSection"]');

export const questionNavItem = document.querySelector(
	'[data-js="questionSectionNavigation"]'
);
export const bookmarkNavItem = document.querySelector(
	'[data-js="bookmarkSectionNavigation"]'
);
export const formNavItem = document.querySelector(
	'[data-js="formSectionNavigation"]'
);
export const profileNavItem = document.querySelector(
	'[data-js="profileSectionNavigation"]'
);

export function questionSectionSelect() {
	questionSection.classList.remove("main__section--hidden");
	bookmarkSection.classList.add("main__section--hidden");
	formSection.classList.add("main__section--hidden");
	profileSection.classList.add("main__section--hidden");

	questionNavItem.classList.add("navigation__item--current");
	bookmarkNavItem.classList.remove("navigation__item--current");
	formNavItem.classList.remove("navigation__item--current");
	profileNavItem.classList.remove("navigation__item--current");
	document.documentElement.scrollTop = 0;
}

export function bookmarkSectionSelect() {
	questionSection.classList.add("main__section--hidden");
	bookmarkSection.classList.remove("main__section--hidden");
	formSection.classList.add("main__section--hidden");
	profileSection.classList.add("main__section--hidden");

	questionNavItem.classList.remove("navigation__item--current");
	bookmarkNavItem.classList.add("navigation__item--current");
	formNavItem.classList.remove("navigation__item--current");
	profileNavItem.classList.remove("navigation__item--current");
	document.documentElement.scrollTop = 0;
}

export function formSectionSelect() {
	questionSection.classList.add("main__section--hidden");
	bookmarkSection.classList.add("main__section--hidden");
	formSection.classList.remove("main__section--hidden");
	profileSection.classList.add("main__section--hidden");

	questionNavItem.classList.remove("navigation__item--current");
	bookmarkNavItem.classList.remove("navigation__item--current");
	formNavItem.classList.add("navigation__item--current");
	profileNavItem.classList.remove("navigation__item--current");
	document.documentElement.scrollTop = 0;
}

export function profileSectionSelect() {
	questionSection.classList.add("main__section--hidden");
	bookmarkSection.classList.add("main__section--hidden");
	formSection.classList.add("main__section--hidden");
	profileSection.classList.remove("main__section--hidden");

	questionNavItem.classList.remove("navigation__item--current");
	bookmarkNavItem.classList.remove("navigation__item--current");
	formNavItem.classList.remove("navigation__item--current");
	profileNavItem.classList.add("navigation__item--current");
	document.documentElement.scrollTop = 0;
}
