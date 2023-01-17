import { prisma } from './db';

export async function getUsers(userId: unknown) {
  const users = await prisma.user.findMany({
    where: { id: { not: userId } }
  });
  return users;
}

export async function getMessages(to: unknown) {
  const messages = await prisma.message.findMany({
    where: { to }
  });
  return messages;
}

export async function sendMessage(to: unknown, message: string) {
  const newMessage = await prisma.message.create({
    data: { to, content: message }
  });
  return newMessage;
}
