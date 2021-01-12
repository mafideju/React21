export function fetchPopularRepos(language) {
    const endpoint = window.decodeURI(
        `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
    );

    return fetch(endpoint)
        .then(resp => resp.json())
        .then(data => {
            if(!data.items) throw new Error(data.message);
            // console.log('data', data)
            return data;
        })
}