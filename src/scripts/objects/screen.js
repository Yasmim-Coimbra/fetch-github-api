const screen = {
	profileData: document.querySelector(".profile-data"),
	renderUser(user) {
		this.profileData.innerHTML = `<div class="info">
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
		if (repos.length > 0) {
			this.profileData.innerHTML += `<div class="repositories section">
        <h2>Repositórios</h2>
        <ul>${repos.map((repo) => `<li><a target="_blank" href="${repo.html_url}">${repo.name}</a></li>`).join("")}</ul>
        </div>`;
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
};

export { screen };
