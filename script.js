import {
	setDarkmode,
	setLightmode,
	darkmode,
	darkmodeSwitch,
	prefersDarkScheme,
	prefersLightScheme,
	currentTheme,
} from "./utils/darkmode.js";
import { formFunction, formTextareas } from "./components/form/form.js";
import {
	questionSectionSelect,
	bookmarkSectionSelect,
	formSectionSelect,
	profileSectionSelect,
	questionNavItem,
	bookmarkNavItem,
	formNavItem,
	profileNavItem,
} from "./utils/pageSelection.js";
import { createQuestions } from "./components/questioncard/questionCard.js";

if (currentTheme == "dark" || prefersDarkScheme.matches) {
	setDarkmode();
} else if (currentTheme == "light" || prefersLightScheme.matches) {
	setLightmode();
}

darkmodeSwitch.addEventListener("click", darkmode);

questionNavItem.addEventListener("click", questionSectionSelect);
bookmarkNavItem.addEventListener("click", bookmarkSectionSelect);
formNavItem.addEventListener("click", formSectionSelect);
profileNavItem.addEventListener("click", profileSectionSelect);

createQuestions();

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const formData = new FormData(event.target);
	const data = Object.fromEntries(formData);
	formFunction(data);
});
formTextareas.forEach((textarea, index) => {
	const lettercounter = document.querySelectorAll('[data-js="lettercounter"]');
	textarea.addEventListener("input", () => {
		const typedLetters = textarea.value.length;
		if (typedLetters <= 150) {
			lettercounter[index].textContent =
				150 - typedLetters + " Characters left";
		}
	});
});
