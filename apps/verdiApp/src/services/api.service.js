export class ApiService {
    baseUrl = "http://localhost:3000/";
    // todo methods here should only be used by other services
    constructor(baseRoute) {
        this.baseUrl += baseRoute || '';
    }
    async _request(route, options = {}) {
        const url = `${this.baseUrl}/${route}`;
        const token = localStorage.getItem('token');
        const headers = new Headers(options.headers);
        headers.append('Authorization', `Bearer ${token}`);
        options.headers = headers;
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        }
        catch (error) {
            console.error('API Request Failed:', error);
            throw error;
        }
    }
    async _get(route, queryParams = null) {
        const getRoute = queryParams ? route + '?' + queryParams : route;
        return this._request(getRoute);
    }
    async _post(route, body) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body
        };
        return this._request(route, options);
    }
}
