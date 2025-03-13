const screen = {
	profileData: document.querySelector(".profile-data"),
	renderUser(user) {
		this.profileData.innerHTML = 
		`<div class="info">
            <img src="${user.avatarUrl}" alt="Foto do perfil de ${user.name}">
            <div class="data">
                <h1>${user.name ?? "Não posssui nome cadastrado"}</h1>
                <p>${user.bio ?? "Nenhuma biografia cadastrada"}</p>
                <ul>
                    <li>Seguidores: ${user.followers}</li>
                    <li>Seguindo: ${user.following}</li>
                    <li>Repositórios: ${user.repositoriesQuantity}</li>
                </ul>
            </div>
        </div>`;
	},
	renderRepositories(repos) {
		this.profileData.innerHTML += 
		`<div class="repositories section">
			<h2>Repositórios</h2>
			<ul id="repos-list"></ul>
		</div>`;
		const reposList = this.profileData.querySelector("#repos-list");

		if (repos.length === 0) {
			const p = document.createElement("p");
			p.textContent = "Este usuário ainda não possui nenhum repositório.";
			reposList.replaceWith(p);
			return;
		}

		for (const repo of repos) {
			const li = document.createElement("li");
			const a = document.createElement("a");
			a.href = repo.html_url;
			a.innerHTML = 
			`<p>${repo.name}</p>
			<div class="repo-description">
				<span class="info">🍴${repo.forks}</span>
				<span class="info">⭐ ${repo.stargazers_count}</span>
				<span class="info">👀 ${repo.watchers}</span>
				<span class="info">🧑‍💻 ${repo.language ?? "Nenhuma linguagem detectada"}</span>
			</div>`;
			li.appendChild(a);
			reposList.appendChild(li);
		}
	},
	renderNotFound() {
		this.profileData.innerHTML = `
        <h2 class="error-msg">Usuário não encontrado.</h2>`;
	},
	renderNotWritten() {
		this.profileData.innerHTML = `
        <h2 class="error-msg">Por favor, digite o nome do usuário no GitHub antes de buscá-lo.</h2>`;
	},
	renderEvents(events) {
		this.profileData.innerHTML += 
		`<div class="events section">
            <h2>Eventos</h2>
            <ul id="events-list"></ul>
        </div>`;
		const eventsList = this.profileData.querySelector("#events-list");

		if (events.length === 0) {
			const p = document.createElement("p");
			p.textContent = "Este usuário não possui nenhuma atividade recente.";
			eventsList.replaceWith(p);
			return;
		}

		for (const event of events) {
			const li = document.createElement("li");
			const strong = document.createElement("strong");
			strong.textContent = event.repo.name;

			li.appendChild(strong);
			li.appendChild(
				document.createTextNode(
					event.type === "PushEvent"
						? ` - ${event.payload.commits[0].message}`
						: " - Sem mensagem de commit",
				),
			);

			eventsList.appendChild(li);
		}
	},
};

export { screen };
