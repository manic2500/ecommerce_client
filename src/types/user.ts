export interface User {
    id: string
    name: string
    email: string
    roles: string[]
    permissions: string[]
}

export interface LoginUserResponse {
    user: User
    token: string
}

