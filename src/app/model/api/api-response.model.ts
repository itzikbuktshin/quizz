export type ApiResponse<T> = {
    message?: string, 
    results: T, 
    result: T
}