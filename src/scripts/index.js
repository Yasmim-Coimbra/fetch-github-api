import { getUser } from "./services/user.js";
import { getRepos } from "./services/repositories.js";

import { userData } from "./objects/user.js";
import { screen } from "./objects/screen.js";

export const searchInput = document.querySelector("#input-search");
const searchButton = document.querySelector("#btn-search");
