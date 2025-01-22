import { browser } from "$app/environment";
import { writable } from "svelte/store";

const savedChats = browser ? JSON.parse(window.localStorage.getItem('chats')) ?? [{ user: 'Eliza', message: "My name is George Droyd. Shiiieeet, How can I assist you?" }] : [];

export const chat_store = writable(savedChats);

if (browser) {
    chat_store.subscribe((value) => {
        window.localStorage.setItem('chats', JSON.stringify(value));
    });
}