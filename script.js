import {
	setDarkmode,
	setLightmode,
	darkmode,
	darkmodeSwitch,
	prefersDarkScheme,
	prefersLightScheme,
	currentTheme,
} from "./utils/darkmode.js";
import {
	bookmarkToggle,
	bookmarkIcons,
} from "./components/bookmark/bookmark.js";
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
import {
	showAnswerButton,
	showAnswerToggle,
} from "./components/button/button.js";

if (currentTheme == "dark" || prefersDarkScheme.matches) {
	setDarkmode();
} else if (currentTheme == "light" || prefersLightScheme.matches) {
	setLightmode();
}

darkmodeSwitch.addEventListener("click", darkmode);

bookmarkIcons.forEach((bookmarkIcon) => bookmarkToggle(bookmarkIcon));

questionNavItem.addEventListener("click", questionSectionSelect);
bookmarkNavItem.addEventListener("click", bookmarkSectionSelect);
formNavItem.addEventListener("click", formSectionSelect);
profileNavItem.addEventListener("click", profileSectionSelect);

showAnswerButton.forEach((answerButton, index) =>
	showAnswerToggle(answerButton, index)
);
