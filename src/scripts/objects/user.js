const userData = {
    avatarUrl: "",
    name: "",
    bio: "",
    userName: "",
    followers: 0,
    following: 0,
    repositoriesQuantity: 0,
    repositories: [],
    setInfo(githubUser) {
        this.avatarUrl = githubUser.avatar_url;
        this.name = githubUser.name;
        this.bio = githubUser.bio;
        this.userName = githubUser.login;
        this.followers = githubUser.followers;
        this.following = githubUser.following;
        this.repositoriesQuantity = githubUser.public_repos;
    },
    setRepositories(repos) {
        this.repositories = repos;
    }
}

export { userData };