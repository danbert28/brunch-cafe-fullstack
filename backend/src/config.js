import 'dotenv/config';
import { z } from 'zod';
 
// Define y valida las variables de entorno que el backend necesita.
// Si falta alguna obligatoria, el servidor no arranca (mejor fallar rápido).
const envSchema = z.object({
  PORT: z.string().default('4000'),
  MONGO_URI: z.string().min(1, 'MONGO_URI es requerido en el .env'),
  JWT_SECRET: z.string().min(1, 'JWT_SECRET es requerido en el .env'),
  JWT_EXPIRES_IN: z.string().default('7d'),
  CLIENT_URL: z.string().default('http://localhost:5173'),
  NODE_ENV: z.string().default('development'),
});
 
const parsed = envSchema.safeParse(process.env);
 
if (!parsed.success) {
  console.error('❌ Variables de entorno inválidas o faltantes:');
  console.error(parsed.error.format());
  process.exit(1);
}
 
export const config = parsed.data;