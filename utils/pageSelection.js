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
	questionSection.style.display = "block";
	bookmarkSection.style.display = "none";
	formSection.style.display = "none";
	profileSection.style.display = "none";

	questionNavItem.classList.add("navigation__item--current");
	bookmarkNavItem.classList.remove("navigation__item--current");
	formNavItem.classList.remove("navigation__item--current");
	profileNavItem.classList.remove("navigation__item--current");
}

export function bookmarkSectionSelect() {
	questionSection.style.display = "none";
	bookmarkSection.style.display = "block";
	formSection.style.display = "none";
	profileSection.style.display = "none";

	questionNavItem.classList.remove("navigation__item--current");
	bookmarkNavItem.classList.add("navigation__item--current");
	formNavItem.classList.remove("navigation__item--current");
	profileNavItem.classList.remove("navigation__item--current");
}

export function formSectionSelect() {
	questionSection.style.display = "none";
	bookmarkSection.style.display = "none";
	formSection.style.display = "block";
	profileSection.style.display = "none";

	questionNavItem.classList.remove("navigation__item--current");
	bookmarkNavItem.classList.remove("navigation__item--current");
	formNavItem.classList.add("navigation__item--current");
	profileNavItem.classList.remove("navigation__item--current");
}

export function profileSectionSelect() {
	questionSection.style.display = "none";
	bookmarkSection.style.display = "none";
	formSection.style.display = "none";
	profileSection.style.display = "block";

	questionNavItem.classList.remove("navigation__item--current");
	bookmarkNavItem.classList.remove("navigation__item--current");
	formNavItem.classList.remove("navigation__item--current");
	profileNavItem.classList.add("navigation__item--current");
}
