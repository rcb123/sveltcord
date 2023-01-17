import { prisma } from './db';

export async function createServer(name: string) {
	const server = await prisma.server.create({
		data: {
			name
		}
	});
	return server;
}

export async function updateServer(serverId: number, name: string) {
	await prisma.server.update({
		where: { id: serverId },
		data: { name }
	});
}

export async function deleteServer(serverId: number) {
	await prisma.server.delete({
		where: { id: serverId }
	});
}

export async function createChannel(serverId: number, name: string) {
	const channel = await prisma.channel.create({
		data: {
			server: { connect: { id: serverId } },
			name
		}
	});
	return channel;
}

export async function deleteChannel(channelId: number) {
	await prisma.channel.delete({
		where: { id: channelId }
	});
}

export async function createMessage(channelId: number, content: string) {
	const message = await prisma.message.create({
		data: {
			channel: { connect: { id: channelId } },
			content
		}
	});
	return message;
}
