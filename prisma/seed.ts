import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'leo',
  //     email: 'leo@gmail.com',
  //     isAdmin: true,
  //     password: '123',
  //   },
  // });
  // console.log(user);
  // const tags = await prisma.tag.createMany({
  //   data: [
  //     {
  //       name: 'Accès aux soins',
  //     },
  //     {
  //       name: 'Contrat jeune majeur',
  //     },
  //     {
  //       name: 'Groupes de Pairs',
  //     },
  //     {
  //       name: "Hébergement d'Urgence",
  //     },
  //     {
  //       name: 'Formation',
  //     },
  //     {
  //       name: 'Santé mentale',
  //     },
  //     {
  //       name: 'Soins médicaux',
  //     },
  //     {
  //       name: 'Soutien psychologique',
  //     },
  //     {
  //       name: ' Aide juridique',
  //     },
  //     {
  //       name: 'Communauté',
  //     },
  //   ],
  // });
  // console.log(tags);
  // const issues = await prisma.issue.createMany({
  //   data: [
  //     {
  //       name: "Je me sens isolé(e) et j'ai besoin de conseils en santé mentale",
  //     },
  //     {
  //       name: "Je souhaite créer un réseau de soutien avec d'autres jeunes de l'ASE",
  //     },
  //     {
  //       name: 'Je suis actuellement sans abri',
  //     },
  //     {
  //       name: "Je suis confronté(e) à un problème juridique et j'ai besoin d'aide",
  //     },
  //     {
  //       name: 'Je veux préparer mon contrat jeune majeur',
  //     },
  //     {
  //       name: 'Mon contrat jeune majeur a été refusé',
  //     },
  //   ],
  // });
  // console.log(issues);

  const organizationTag = await prisma.organizationTag.createMany({
    data: [
      {
        organizationId: 1,
        tagId: 22,
      },
      {
        organizationId: 1,
        tagId: 4,
      },
    ],
  });

  console.log(organizationTag);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
