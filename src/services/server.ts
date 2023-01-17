import { prisma } from './db';

export async function getServers() {
	const servers = await prisma.server.findMany();
	return servers;
}

export async function createServer(name: string) {
	const server = await prisma.server.create({
		data: {
			name
		}
	});
	return server;
}

export async function updateServer(serverId: string, name: string) {
	const server = await prisma.server.update({
		where: {
			id: serverId
		},
		data: {
			name
		}
	});
	return server;
}

export async function deleteServer(serverId: string) {
	const server = await prisma.server.delete({
		where: {
			id: serverId
		}
	});
	return server;
}
