import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.portfolio.createMany({
    data: [
      {
        title: 'Example Project A',
        description: 'A demo project showing Three.js integration',
        imageUrl: '',
        projectUrl: ''
      },
      {
        title: 'Example Project B',
        description: 'Another demo project',
        imageUrl: '',
        projectUrl: ''
      }
    ],
    skipDuplicates: true
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
