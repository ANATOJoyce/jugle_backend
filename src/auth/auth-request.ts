// src/auth/auth-request.ts
import { Request } from 'express';
import { User } from '../user/entities/user.entity'; // adapte le chemin

export interface AuthRequest extends Request {
  user?: User;
}
