import { PrismaClient } from "@prisma/client";
import {faker} from '@faker-js/faker';



const prisma = new PrismaClient();
const dataSeeder = async () => {

    const n = 1000;
    for (let i = 0; i < n; i++) {
      await prisma.user.create({
        data: {
            name: faker.person.fullName(),
            email: faker.internet.email()
        },
      });
    }
};
export default dataSeeder;