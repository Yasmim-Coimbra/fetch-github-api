import { baseUrl, defaultShownQuantity } from "../variables.js";
import { searchInput } from "../index.js";

async function getEvents() {
	const userName = searchInput.value;
	const url = `${baseUrl}${userName}/events`;

	try {
		const response = await fetch(url);
		const events = await response.json();
		const tenFilteredEvents = events
			.filter(
				(event) => event.type === "PushEvent" || event.type === "CreateEvent",
			)
			.slice(0, defaultShownQuantity);
		return await tenFilteredEvents;
	} catch (error) {
		throw new Error("Eventos não encontrados!");
	}
}

export { getEvents };
