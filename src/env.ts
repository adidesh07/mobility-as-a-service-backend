if (!process.env.MONGO_URL) {
    throw Error('MONGO_URL not found in environment!');
} 
if (!process.env.SECRET_KEY) {
    throw Error('SECRET_KEY not found in environment!');
}

// Optional
export const PORT: number = Number(process.env.PORT) || 8080;
export const DEBUG_MODE: boolean = process.env.DEBUG_MODE == '1';
export const LOG_LEVEL: string = process.env.LOG_LEVEL || 'debug';

// Required
export const MONGO_URL: string = process.env.MONGO_URL;
export const SECRET_KEY: string = process.env.SECRET_KEY;
