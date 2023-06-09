import { changeUserQuestionCounter } from "../userprofile/userprofile.js";

const form = document.querySelector('[data-js="questionForm"]');

let userQuestionNumber = 0;

export function formFunction(data) {
	const formSection = document.querySelector('[data-js="formSection"]');
	const questioncard = document.createElement("section");
	const bookmark = document.createElement("button");
	const bookmarkIcon = document.createElement("img");
	const questioncardHeader = document.createElement("h2");
	const answer = document.createElement("p");
	const tagList = document.createElement("ul");

	questioncard.classList.add("questioncard", "questioncard--new-card");
	bookmark.classList.add("bookmark", "button--bookmark");
	bookmark.setAttribute("data-js", "bookmarkIcon");
	questioncardHeader.classList.add("questioncard__header");
	answer.classList.add("answer");
	tagList.classList.add("taglist");
	bookmarkIcon.setAttribute("src", "./assets/bookmark.svg");

	questioncardHeader.textContent = data.question;
	answer.textContent = data.answer;

	formSection.append(questioncard);
	questioncard.style.marginTop = "50px";
	questioncard.append(bookmark);
	bookmark.append(bookmarkIcon);
	questioncard.append(questioncardHeader);
	questioncard.append(answer);
	questioncard.append(tagList);

	let tagArray = data.tags.split(",");
	for (let i = 0; i < tagArray.length; i++) {
		const tag = document.createElement("li");
		tag.classList.add("tag");
		tagArray[i] = "#" + tagArray[i].trim();
		tag.textContent = tagArray[i];
		tagList.append(tag);
	}
	userQuestionNumber++;
	changeUserQuestionCounter(userQuestionNumber);
	form.reset();
	form.question.focus();
}

export const formTextareas = document.querySelectorAll(
	'[data-js="formTextarea"]'
);
