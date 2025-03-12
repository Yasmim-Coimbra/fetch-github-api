import { baseUrl } from "../variables.js";
import { searchInput } from "../index.js";

async function getUser() {
	const userName = searchInput.value;
	const url = `${baseUrl}${userName}`;

	try {
		const response = await fetch(url);
		return await response.json();
	} catch (error) {
		throw new Error("Usuário não encontrado!");
	}
}

export { getUser };