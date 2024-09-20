export class ApiService {
    private baseUrl = "http://localhost:3000/";

    // todo methods here should only be used by other services

    constructor(baseRoute: string) {
        this.baseUrl += baseRoute || '';
    }

    async _request(route: string, options: RequestInit = {}) {
        const url = `${this.baseUrl}/${route}`
        const token = localStorage.getItem('token')

        const headers = new Headers(options.headers)
        headers.append('Authorization', `Bearer ${token}`)

        options.headers = headers

        try {
            const response = await fetch(url, options)

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            return await response.json()
        } catch (error) {
            console.error('API Request Failed:', error)
            throw error
        }
    }

    async _get(route: string, queryParams: URLSearchParams | null = null) {
        const getRoute = queryParams ? route + '?' + queryParams : route
        return this._request(getRoute)
    }

    async _post(route: string, body: string) {
        const options: RequestInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body
        }
        return this._request(route, options)
    }
}