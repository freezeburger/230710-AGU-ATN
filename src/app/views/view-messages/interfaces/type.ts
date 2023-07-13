import { Message } from "./message";

export type MessageEntry = Pick<Message, 'title'| 'text'>; // TypeScript Helpers : Partial, Pick, Omit
