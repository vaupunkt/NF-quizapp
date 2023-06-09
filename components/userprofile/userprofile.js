export function changeBookmarkCounter(newNumber) {
	const userBookmarkCounter = document.querySelector(
		'[data-js="bookmarkCounter"]'
	);
	const bookmarkLabel = document.querySelector('[data-js="bookmarkLabel"]');
	userBookmarkCounter.textContent = newNumber;
	if (newNumber === 0) {
		bookmarkLabel.textContent = "Bookmarks yet";
	} else if (newNumber === 1) {
		bookmarkLabel.textContent = "Bookmark";
	} else {
		bookmarkLabel.textContent = "Bookmarks";
	}
}

export function changeUserQuestionCounter(newNumber) {
	const userQuestionCounter = document.querySelector(
		'[data-js="userQuestionCounter"]'
	);
	const userQuestionLabel = document.querySelector(
		'[data-js="userQuestionLabel"]'
	);
	userQuestionCounter.textContent = newNumber;
	if (newNumber === 0) {
		userQuestionLabel.textContent = "User-Questions";
	} else if (newNumber === 1) {
		userQuestionLabel.textContent = "User-Question";
	} else {
		userQuestionLabel.textContent = "User-Questions";
	}
}
