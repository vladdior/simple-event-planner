export const BASE_URL: string = "http://localhost:8080";

export const SIGN_IN: string = "/login";
export const SIGN_IN_URL: string = BASE_URL + SIGN_IN;

export const SIGN_UP: string = "/register";
export const SING_UP_URL: string = BASE_URL + SIGN_UP;

export const MY_EVENTS: string = "/events/my-events";
export const MY_EVENTS_URL: string = BASE_URL + MY_EVENTS;

export const EVENTS: string = "/events"
export const EVENTS_URL: string = BASE_URL + EVENTS;

export const USERS: string = "/users";
export const USERS_URL: string = BASE_URL + USERS;

export const USERS_FULL: string = USERS + "/full";
export const USERS_FULL_URL: string = BASE_URL + USERS_FULL;

export const CATEGORIES: string = "/categories";
export const CATEGORIES_URL: string = BASE_URL + CATEGORIES;

export const FILES: string = "/events/files";
export const FILES_URL: string = BASE_URL + FILES;

export const APPROVE_EVENT: string = EVENTS + "/approve-event";
export const APPROVE_EVENT_URL: string = BASE_URL + APPROVE_EVENT;
