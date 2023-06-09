import { createNewCard } from "../questioncard/questionCard.js";
import { changeBookmarkCounter } from "../userprofile/userprofile.js";

export const bookmarkSection = document.querySelector(
	'[data-js="bookmarkSection"]'
);

export let bookmarkCounter = 0;

export function bookmarkFunction(card, data) {
	changeBookmarkCounter(bookmarkCounter);
	const bookmarkButton = card.querySelector('[data-js="bookmarkIcon"]');
	bookmarkButton.addEventListener("click", () => {
		bookmarkButton.classList.toggle("bookmark--saved");
		const bookmarkedQuestion = createNewCard(data);
		const bookmarked = bookmarkedQuestion.querySelector(
			'[data-js="bookmarkIcon"]'
		);

		if (bookmarkButton.classList.contains("bookmark--saved")) {
			bookmarked.classList.add("bookmark--saved");
			bookmarkSection.append(bookmarkedQuestion);
			bookmarkCounter++;
			changeBookmarkCounter(bookmarkCounter);
		}
		bookmarked.addEventListener("click", () => {
			bookmarkedQuestion.remove();
			bookmarkButton.classList.toggle("bookmark--saved");
			bookmarkCounter--;
			changeBookmarkCounter(bookmarkCounter);
		});
		bookmarkButton.addEventListener("click", () => {
			bookmarkedQuestion.remove();
			bookmarkCounter--;
			changeBookmarkCounter(bookmarkCounter);
		});
	});
}
