import { baseUrl, shownRepositoriesQuantity } from "../variables.js";
import { searchInput } from "../index.js";

async function getRepos() {
    const userName = searchInput.value;
    const url = `${baseUrl}${userName}/repos?per_page=${shownRepositoriesQuantity}`;

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        throw new Error("Repositórios não encontrados!");
    }
}

export { getRepos };