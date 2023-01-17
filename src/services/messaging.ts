import { prisma } from './db';

export async function getConversations(userId: string) {
	const conversations = await prisma.conversation.findMany({
		where: {
			OR: [{ user1Id: userId }, { user2Id: userId }]
		}
	});
	return conversations;
}

export async function getMessages(conversationId: string) {
	const messages = await prisma.message.findMany({
		where: { conversationId }
	});
	return messages;
}

export async function sendMessage(conversationId: string, content: string, from: string) {
	const message = await prisma.message.create({
		data: {
			conversationId,
			content,
			from
		}
	});
	return message;
}
