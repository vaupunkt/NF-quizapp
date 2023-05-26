const form = document.querySelector('[data-js="questionForm"]');
const main = document.querySelector('[data-js="main"]');

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const formData = new FormData(event.target);
	const data = Object.fromEntries(formData);

	const questioncard = document.createElement("section");
	const bookmark = document.createElement("img");
	const questioncardHeader = document.createElement("h2");
	const answer = document.createElement("p");
	const tagList = document.createElement("ul");

	questioncard.classList.add("questioncard", "questioncard--new-card");
	bookmark.classList.add("bookmark");
	questioncardHeader.classList.add("questioncard__header");
	answer.classList.add("answer");
	tagList.classList.add("taglist");
	bookmark.setAttribute("src", "./assets/bookmark.svg");
	bookmark.setAttribute("data-js", "bookmarkIcon");

	questioncardHeader.textContent = data.question;
	answer.textContent = data.answer;

	main.append(questioncard);
	questioncard.style.marginTop = "50px";
	questioncard.append(bookmark);
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

	form.reset();
	form.question.focus();
});

const questionFormTextareas = document.querySelectorAll(
	'[data-js="questionFormTextarea"]'
);

questionFormTextareas.forEach((textarea, index) => {
	let counter = 150;
	const lettercounter = document.querySelectorAll('[data-js="lettercounter"]');
	textarea.addEventListener("input", () => {
		if (counter > 0) {
			counter--;
			lettercounter[index].textContent = counter + " Characters left";
		}
	});
});
