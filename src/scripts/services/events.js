import { baseUrl, defaultShownQuantity } from "../variables.js";
import { searchInput } from "../index.js";

async function getEvents() {
    const userName = searchInput.value;
    const url = `${baseUrl}${userName}/events?per_page=${defaultShownQuantity}`;

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        throw new Error("Eventos não encontrados!");
    }
}

export { getEvents };