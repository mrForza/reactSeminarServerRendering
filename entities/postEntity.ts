import { UUIDTypes } from "uuid";

export interface Post {
    id: UUIDTypes,
    name: string,
    content: string
}