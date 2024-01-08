export const PORT: number = Number(process.env.PORT) || 8080;
export const MONGO_URL: string = process.env.MONGO_URL;
export const DEBUG_MODE: boolean = process.env.DEBUG_MODE == '1';
export const LOG_LEVEL: string = process.env.LOG_LEVEL || 'debug';
