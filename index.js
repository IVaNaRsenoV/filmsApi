class serviceApi {
    _apiBase = 'https://api.tvmaze.com/shows';
    getResource(url) {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error (`Could not fetch${url} ` + `, received ${response.status}`);
        }
        const body = await response.json();
        return body;
    }
}

const a = serviceApi();
a.getResource().then((body) => {
    console.log(body);
})