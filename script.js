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
	showAnswerToggleAfterFetch,
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

window.addEventListener("load", () => {
	console.log("lodaded");
	createQuestions();
	showAnswerButton.forEach((answerButton, index) =>
		showAnswerToggle(answerButton, index)
	);
});

const questionSection = document.querySelector('[data-js="questionSection"]');
async function getQuizQuestions() {
	try {
		const response = await fetch(" https://the-trivia-api.com/api/questions");

		if (response.ok) {
			const dataset = await response.json();
			return dataset;
		} else {
			console.error("Bad Response");
		}
	} catch (error) {
		console.error("An Error occurred");
	}
}

async function createQuestions() {
	const dataset = await getQuizQuestions();
	console.log(dataset);
	dataset.forEach((data) => {
		const questionViewport = document.createElement("section");
		questionViewport.classList.add("question-viewport");
		const card = document.createElement("section");
		card.classList.add("questioncard");
		const bookmark = document.createElement("button");
		bookmark.classList.add("button--bookmark", "bookmark");
		bookmark.setAttribute("data-js", "bookmarkIcon");
		const bookmarkIcon = document.createElement("img");
		const questionText = document.createElement("h2");
		questionText.classList.add("questioncard__header");
		const answer = document.createElement("p");
		answer.setAttribute("data-js", "answerBlock");
		answer.classList.add("answer", "answer--hidden");
		const answerButton = document.createElement("button");
		answerButton.setAttribute("data-js", "answerButton");
		answerButton.classList.add("button", "button--show-answer");
		const taglist = document.createElement("ul");
		taglist.classList.add("taglist");

		questionSection.append(questionViewport);
		questionViewport.append(card);
		card.append(bookmark);
		bookmark.append(bookmarkIcon);
		card.append(questionText);
		card.append(answerButton);
		card.append(answer);
		card.append(taglist);

		bookmarkIcon.setAttribute("src", "./assets/bookmark.svg");
		questionText.textContent = data.question;
		answer.textContent = data.correctAnswer;
		answerButton.textContent = "Show Answer";
		const getTags = data.tags;
		console.log(getTags);
		for (let i = 0; i < getTags.length; i++) {
			const tag = document.createElement("li");
			tag.classList.add("tag");
			tag.textContent = getTags[i];
			taglist.append(tag);
		}
	});
}
