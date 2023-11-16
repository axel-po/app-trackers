import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
   for (let i = 0; i < 10; i++) {
      const user = await prisma.user.create({
         data: {
            email: faker.internet.email(),
            name: faker.person.firstName(),
         },
      });

      await prisma.post.create({
         data: {
            title: faker.lorem.sentence(),
            content: faker.lorem.paragraph(),
            published: faker.datatype.boolean(),
            authorId: user.id,
         },
      });
   }
}

main()
   .catch((e) => {
      console.error(e);
      process.exit(1);
   })
   .finally(async () => {
      await prisma.$disconnect();
   });
