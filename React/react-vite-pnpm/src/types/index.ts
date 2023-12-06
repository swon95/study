export interface User {
    userId: string
    email: string
    name: string
    profileUrl?: string
}


export enum Collections {
    USERS = 'users',
    CHATS = 'chats',
    MESSAGES = 'message',
}

