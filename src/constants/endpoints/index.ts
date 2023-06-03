const BACKEND_PORT = process.env.BACKEND_PORT ?? "http://localhost:3000/api";

export const COUNTER_SERVICE = `${BACKEND_PORT}/counter`;
