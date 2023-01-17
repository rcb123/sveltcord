import { prisma } from './db';

export async function createReport(title: string, description: string) {
  const report = await prisma.report.create({
    data: {
      title,
      description
    }
  });
  return report;
}