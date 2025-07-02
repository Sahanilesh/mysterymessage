import {z} from 'zod';

export const vefifySchema = z.object({
    code: z.string().min(6, {message: 'Verification code must be exactly 6 characters long'}).max(6, {message: 'Verification code must be exactly 6 characters long'}),
});