export default class FetchData {
    constructor() {
        this._urlBase = "https://reqres.in/api"
    }

    async FetchData(url) {
        const result = await fetch(`${this._urlBase}${url}`);

        if(!result.ok) {
            throw new Error(`The link is not proper ${url}, status ${result.status}`)
        }
        const json = await result.json();

        return json;
    }

    getAllPosts() {
        return this.FetchData("/users?page=1")
    }

    getPostById(id) {
        return this.FetchData(`/users/${id}`);
    }
}