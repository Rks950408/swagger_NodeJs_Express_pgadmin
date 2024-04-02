import { PrismaClient } from '@prisma/client'
import dataSeeder from './seeder/dataSeeder'
const prisma = new PrismaClient()
async function main() {
  await dataSeeder()
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    // process.exit(1)
  })