import nextSession from "next-session";

export const getSession = nextSession({ autoCommit: true });
