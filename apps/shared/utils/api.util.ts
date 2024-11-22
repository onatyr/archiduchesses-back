export function formatUrlSearchParams(params: URLSearchParams | null) {
    return params ? `?${params.toString()}` : ''
}