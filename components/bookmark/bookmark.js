export const bookmarkIcons = document.querySelectorAll(
	'[data-js="bookmarkIcon"]'
);
export function bookmarkToggle(bookmarkIcon) {
	bookmarkIcon.addEventListener("click", () => {
		console.log("click");
		bookmarkIcon.classList.toggle("bookmark--saved");
	});
}
