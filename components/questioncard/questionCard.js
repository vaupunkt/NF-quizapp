import { bookmarkSection, bookmarkFunction } from "../bookmark/bookmark.js";

const questionSection = document.querySelector('[data-js="questionSection"]');

async function getQuizQuestions() {
	try {
		const response = await fetch("https://the-trivia-api.com/api/questions");
		const data = response.json();
		return data;
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

export function createNewCard(data) {
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

	questionViewport.append(card);
	bookmark.append(bookmarkIcon);
	card.append(questionText, answerButton, answer, taglist, bookmark);
	bookmarkIcon.setAttribute("src", "./assets/bookmark.svg");
	questionText.textContent = data.question;
	answer.textContent = data.correctAnswer;
	answerButton.textContent = "Show Answer";
	const getTags = data.tags;
	for (let i = 0; i < getTags.length; i++) {
		const tag = document.createElement("li");
		tag.classList.add("tag");
		tag.textContent = getTags[i];
		taglist.append(tag);
	}
	answerButton.addEventListener("click", () => {
		answer.classList.toggle("answer--hidden");
		if (answerButton.textContent === "Hide Answer") {
			answerButton.textContent = "Show Answer";
		} else {
			answerButton.textContent = "Hide Answer";
		}
	});

	return questionViewport;
}

export async function createQuestions() {
	const dataset = await getQuizQuestions();
	dataset.forEach((data) => {
		const newCard = createNewCard(data);
		questionSection.append(newCard);
		bookmarkFunction(newCard, data);
	});
}
