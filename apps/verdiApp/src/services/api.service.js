export class ApiService {
    baseUrl = "http://localhost:3000/";
    constructor(baseRoute) {
        this.baseUrl += baseRoute || '';
    }
    async request(route, options = {}) {
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
    async get(route, queryParams) {
        return this.request(route + '/' + queryParams.toString());
    }
    async post(route, body) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body
        };
        return this.request(route, options);
    }
}
