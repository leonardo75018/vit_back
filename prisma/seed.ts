import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // const issue = [
  //   {
  //     name: "Je suis sans abri, j'ai besoin de logement.",
  //   },
  //   {
  //     name: 'Je suis en préparation pour la majorité.',
  //   },
  //   {
  //     name: "Je suis en difficulté d'intégration sociale.",
  //   },
  //   {
  //     name: 'Je suis en besoin de soutien mental.',
  //   },
  //   {
  //     name: 'Je suis victime de violences familiales.',
  //   },
  //   {
  //     name: 'Je suis en précarité financière.',
  //   },
  //   {
  //     name: "Je suis en recherche d'emploi ou de formation.",
  //   },
  //   {
  //     name: "Je suis en conflits avec la famille d'accueil.",
  //   },
  //   {
  //     name: "Je suis en besoin d'informations sur les droits.",
  //   },
  //   {
  //     name: 'Je suis en isolement social.',
  //   },
  //   {
  //     name: "Je suis confronté à la discrimination due au passé en protection de l'enfance.",
  //   },
  //   {
  //     name: 'Je suis en difficulté dans la gestion des émotions et des relations interpersonnelles.',
  //   },
  //   {
  //     name: 'Je suis sous pression pour devenir indépendant rapidement.',
  //   },
  //   {
  //     name: "Je suis en besoin d'accès à des soins médicaux ou thérapeutiques.",
  //   },
  //   {
  //     name: 'Je suis en recherche de modèles positifs ou de mentors.',
  //   },
  //   {
  //     name: 'Je suis confronté à des obstacles administratifs.',
  //   },
  //   {
  //     name: 'Je suis confronté à la précarité alimentaire.',
  //   },
  //   {
  //     name: 'Je suis en besoin de soutien financier pour les études.',
  //   },
  //   {
  //     name: 'Je suis confronté à des barrières linguistiques ou culturelles.',
  //   },
  //   {
  //     name: "Je suis en besoin d'informations sur la santé sexuelle et reproductive.",
  //   },
  //   {
  //     name: "Je suis en recherche d'activités de loisirs.",
  //   },
  //   {
  //     name: 'Je suis en besoin de retrouver des pairs.',
  //   },
  // ];
  // for (const i of issue) {
  //   await prisma.issue.create({
  //     data: i,
  //   });
  // }

  const tag = [
    {
      name: 'logement',
    },
    {
      name: 'précarité',
    },
    {
      name: 'aide sociale',
    },
    {
      name: 'soutien financier',
    },
    {
      name: 'transition',
    },
    {
      name: 'autonomie',
    },
    {
      name: 'droits',
    },
    {
      name: 'accompagnement',
    },
    {
      name: 'isolement social',
    },
    {
      name: 'violences familiales',
    },
    {
      name: 'santé mentale',
    },
    {
      name: 'emploi',
    },
    {
      name: 'conflits familiaux',
    },
    {
      name: 'information juridique',
    },
    {
      name: 'réseautage social',
    },
    {
      name: 'discrimination',
    },
    {
      name: 'gestion émotionnelle',
    },
    {
      name: 'soutien scolaire',
    },
    {
      name: 'accès aux soins de santé',
    },
    {
      name: 'mentorat',
    },
    {
      name: 'diversité culturelle',
    },
    {
      name: 'loisirs',
    },
    {
      name: 'retrouver des pairs',
    },
  ];

  for (const t of tag) {
    await prisma.tag.create({
      data: t,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
