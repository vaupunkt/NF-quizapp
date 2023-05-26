const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const prefersLightScheme = window.matchMedia("(prefers-color-scheme: light)");
let currentTheme = localStorage.getItem("theme");
const darkmodeSwitch = document.querySelector('[data-js="darkmode-button"]');

if (currentTheme == "dark" || prefersDarkScheme.matches) {
	setDarkmode();
	darkmodeSwitch.checked = true;
} else if (currentTheme == "light" || prefersLightScheme.matches) {
	setLightmode();
	darkmodeSwitch.checked = false;
}

function darkmode() {
	if (currentTheme == "dark" || prefersDarkScheme.matches) {
		setLightmode();
		localStorage.setItem("theme", "light");
		currentTheme = localStorage.getItem("theme");
	} else if (currentTheme == "light" || prefersLightScheme.matches) {
		setDarkmode();
		localStorage.setItem("theme", "dark");
		currentTheme = localStorage.getItem("theme");
	}
}

function setLightmode() {
	document.documentElement.style.setProperty(
		"--light-primary-color",
		"#c68965"
	);
	document.documentElement.style.setProperty(
		"--light-secondary-color",
		"#444b56"
	);
	document.documentElement.style.setProperty("--light-medium-color", "#8d8a9f");
	document.documentElement.style.setProperty("--light-accent-color", "#b35946");
	document.documentElement.style.setProperty("--light-white", "#eff3ee");
	document.documentElement.style.setProperty("--light-font-color", "#eff3ee");
}

function setDarkmode() {
	document.documentElement.style.setProperty(
		"--light-primary-color",
		"#3700b3"
	);
	document.documentElement.style.setProperty(
		"--light-secondary-color",
		"#000000"
	);
	document.documentElement.style.setProperty("--light-medium-color", "#484848");
	document.documentElement.style.setProperty("--light-accent-color", "#ffffff");
	document.documentElement.style.setProperty("--light-white", "#202020");
	document.documentElement.style.setProperty("--light-font-color", "#ffffff");
}
