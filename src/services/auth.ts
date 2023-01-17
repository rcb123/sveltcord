import bcrypt from 'bcryptjs';
import { prisma } from './db';
import { sign, type Secret } from 'jsonwebtoken';
import jwt from 'jsonwebtoken';

export async function register(name: string, email: string, password: string) {
	const hashedPassword = await bcrypt.hash(password, 10);
	const user = await prisma.user.create({
		data: {
			name,
			email,
			password: hashedPassword
		}
	});
	return user;
}

export async function login(email: string, password: string) {
	const user = await prisma.user.findOne({
		where: {
			email
		}
	});
	if (!user) {
		throw new Error('Invalid email or password');
	}
	const isPasswordValid = await bcrypt.compare(password, user.password);
	if (!isPasswordValid) {
		throw new Error('Invalid email or password');
	}
	const token = sign({ userId: user.id }, process.env.JWT_SECRET as Secret, {
		expiresIn: '1d'
	});
	return { user, token };
}

export function setAuthToken(token: string) {
	localStorage.setItem('token', token);
}

export function getAuthToken() {
	return localStorage.getItem('token');
}

export async function verifyJwt(token: string) {
	try {
		return jwt.verify(token, process.env.JWT_SECRET as Secret);
	} catch (err) {
		throw new Error('Invalid token');
	}
}
