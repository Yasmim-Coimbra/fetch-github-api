import { getUser } from "./services/user.js";
import { getRepos } from "./services/repositories.js";

import { userData } from "./objects/user.js";
import { screen } from "./objects/screen.js";

export const searchInput = document.querySelector("#input-search");
const searchButton = document.querySelector("#btn-search");

function validateEmptyInput() {
	if (searchInput.value === "") {
		screen.renderNotWritten();
		return true;
	}
}

async function getUserData() {
	const user = await getUser();

	const repos = await getRepos();

	userData.setInfo(user);
	userData.setRepositories(repos);

	return user;
}

async function showUserData() {
	const user = await getUserData();

	if (user.message === "Not Found") return screen.renderNotFound();

	screen.renderUser(userData);
	screen.renderRepositories(userData.repositories);
}
