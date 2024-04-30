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
  // const tag = [
  //   {
  //     name: 'logement',
  //   },
  //   {
  //     name: 'précarité',
  //   },
  //   {
  //     name: 'aide sociale',
  //   },
  //   {
  //     name: 'soutien financier',
  //   },
  //   {
  //     name: 'transition',
  //   },
  //   {
  //     name: 'autonomie',
  //   },
  //   {
  //     name: 'droits',
  //   },
  //   {
  //     name: 'accompagnement',
  //   },
  //   {
  //     name: 'isolement social',
  //   },
  //   {
  //     name: 'violences familiales',
  //   },
  //   {
  //     name: 'santé mentale',
  //   },
  //   {
  //     name: 'emploi',
  //   },
  //   {
  //     name: 'conflits familiaux',
  //   },
  //   {
  //     name: 'information juridique',
  //   },
  //   {
  //     name: 'réseautage social',
  //   },
  //   {
  //     name: 'discrimination',
  //   },
  //   {
  //     name: 'gestion émotionnelle',
  //   },
  //   {
  //     name: 'soutien scolaire',
  //   },
  //   {
  //     name: 'accès aux soins de santé',
  //   },
  //   {
  //     name: 'mentorat',
  //   },
  //   {
  //     name: 'diversité culturelle',
  //   },
  //   {
  //     name: 'loisirs',
  //   },
  //   {
  //     name: 'retrouver des pairs',
  //   },
  // ];
  // for (const t of tag) {
  //   await prisma.tag.create({
  //     data: t,
  //   });
  // }
  // const issueTag = [
  //   {
  //     issueId: 1,
  //     tags: [{ tagId: 5 }, { tagId: 6 }, { tagId: 7 }, { tagId: 8 }],
  //   },
  //   {
  //     issueId: 2,
  //     tags: [{ tagId: 9 }, { tagId: 10 }, { tagId: 11 }, { tagId: 12 }],
  //   },
  //   {
  //     issueId: 3,
  //     tags: [{ tagId: 13 }, { tagId: 14 }, { tagId: 15 }],
  //   },
  //   {
  //     issueId: 4,
  //     tags: [{ tagId: 16 }, { tagId: 17 }],
  //   },
  //   {
  //     issueId: 5,
  //     tags: [{ tagId: 18 }, { tagId: 19 }],
  //   },
  //   {
  //     issueId: 6,
  //     tags: [{ tagId: 2 }, { tagId: 20 }],
  //   },
  //   {
  //     issueId: 7,
  //     tags: [{ tagId: 21 }, { tagId: 18 }, { tagId: 22 }],
  //   },
  //   {
  //     issueId: 8,
  //     tags: [{ tagId: 23 }, { tagId: 18 }, { tagId: 22 }],
  //   },
  //   {
  //     issueId: 9,
  //     tags: [{ tagId: 7 }, { tagId: 22 }],
  //   },
  //   {
  //     issueId: 10,
  //     tags: [{ tagId: 24 }, { tagId: 22 }],
  //   },
  //   {
  //     issueId: 11,
  //     tags: [{ tagId: 25 }, { tagId: 22 }],
  //   },
  //   {
  //     issueId: 12,
  //     tags: [{ tagId: 14 }, { tagId: 22 }],
  //   },
  //   {
  //     issueId: 13,
  //     tags: [{ tagId: 10 }, { tagId: 22 }],
  //   },
  //   {
  //     issueId: 14,
  //     tags: [{ tagId: 14 }, { tagId: 24 }],
  //   },
  //   {
  //     issueId: 15,
  //     tags: [{ tagId: 26 }, { tagId: 22 }],
  //   },
  //   {
  //     issueId: 16,
  //     tags: [{ tagId: 27 }, { tagId: 22 }],
  //   },
  //   {
  //     issueId: 17,
  //     tags: [{ tagId: 1 }, { tagId: 2 }],
  //   },
  //   {
  //     issueId: 18,
  //     tags: [{ tagId: 3 }, { tagId: 4 }],
  //   },
  //   {
  //     issueId: 19,
  //     tags: [{ tagId: 5 }, { tagId: 6 }],
  //   },
  //   {
  //     issueId: 20,
  //     tags: [{ tagId: 7 }, { tagId: 8 }],
  //   },
  //   {
  //     issueId: 21,
  //     tags: [{ tagId: 9 }, { tagId: 10 }],
  //   },
  //   {
  //     issueId: 22,
  //     tags: [{ tagId: 11 }, { tagId: 12 }],
  //   },
  //   {
  //     issueId: 23,
  //     tags: [{ tagId: 13 }, { tagId: 14 }],
  //   },
  //   {
  //     issueId: 24,
  //     tags: [{ tagId: 15 }, { tagId: 16 }],
  //   },
  // ];
  // for (const it of issueTag) {
  //   const issue = await prisma.issueTag.createMany({
  //     data: it.tags.map((tag) => ({
  //       issueId: it.issueId,
  //       tagId: tag.tagId,
  //     })),
  //   });
  //   console.log(`Created issue with id: ${issue.count}`);
  // }
  // const user = [
  //   {
  //     name: "Association pour l'avenir vert",
  //     email: 'contact@avenirvert.org',
  //     password: 'avenir123',
  //     roleId: 1,
  //     tags: [{ tagId: 5 }, { tagId: 6 }, { tagId: 7 }, { tagId: 8 }],
  //   },
  //   {
  //     name: 'Société de développement technologique',
  //     email: 'contact@sdt-france.com',
  //     password: 'sdt456',
  //     roleId: 2,
  //     tags: [{ tagId: 9 }, { tagId: 10 }, { tagId: 11 }, { tagId: 12 }],
  //   },
  //   {
  //     name: 'Cercle de solidarité communautaire',
  //     email: 'info@cerclesolidarite.org',
  //     password: 'solidarite789',
  //     roleId: 3,
  //     tags: [{ tagId: 13 }, { tagId: 14 }, { tagId: 15 }],
  //   },
  //   {
  //     name: 'Fédération des entreprises émergentes',
  //     email: 'info@federation-entreprises.fr',
  //     password: 'emergentes123',
  //     roleId: 1,
  //     tags: [{ tagId: 16 }, { tagId: 17 }],
  //   },
  //   {
  //     name: 'Union pour le progrès durable',
  //     email: 'info@uniondurable.fr',
  //     password: 'durable456',
  //     roleId: 2,
  //     tags: [{ tagId: 18 }, { tagId: 19 }],
  //   },
  //   {
  //     name: 'Association des nouvelles idées',
  //     email: 'contact@nouvellesidees.org',
  //     password: 'nouvelles789',
  //     roleId: 3,
  //     tags: [{ tagId: 20 }, { tagId: 21 }],
  //   },
  //   {
  //     name: "Centre d'innovation sociale",
  //     email: 'contact@innovationsociale.fr',
  //     password: 'sociale123',
  //     roleId: 1,
  //     tags: [{ tagId: 22 }, { tagId: 23 }],
  //   },
  //   {
  //     name: "Alliance pour l'éducation équitable",
  //     email: 'info@educationequitable.org',
  //     password: 'equitable456',
  //     roleId: 2,
  //     tags: [{ tagId: 24 }, { tagId: 25 }],
  //   },
  //   {
  //     name: 'Mouvement pour la santé publique',
  //     email: 'info@santepublique.fr',
  //     password: 'sante789',
  //     roleId: 3,
  //     tags: [{ tagId: 26 }, { tagId: 27 }],
  //   },
  //   {
  //     name: 'Réseau des jeunes entrepreneurs',
  //     email: 'info@jeunesentrepreneurs.org',
  //     password: 'jeunes123',
  //     roleId: 1,
  //     tags: [{ tagId: 28 }, { tagId: 29 }],
  //   },
  //   {
  //     name: "Association pour la protection de l'environnement",
  //     email: 'contact@protectionenvironnement.fr',
  //     password: 'environnement456',
  //     roleId: 2,
  //     tags: [{ tagId: 30 }, { tagId: 31 }],
  //   },
  //   {
  //     name: "Organisation pour l'entraide communautaire",
  //     email: 'info@entraidecommunautaire.org',
  //     password: 'entraide789',
  //     roleId: 3,
  //     tags: [{ tagId: 32 }, { tagId: 33 }],
  //   },
  //   {
  //     name: 'Union des petites entreprises locales',
  //     email: 'contact@petitesentreprises.fr',
  //     password: 'petites123',
  //     roleId: 1,
  //     tags: [{ tagId: 34 }, { tagId: 35 }],
  //   },
  //   {
  //     name: "Association pour la culture et l'art",
  //     email: 'info@cultureart.org',
  //     password: 'culture456',
  //     roleId: 2,
  //     tags: [{ tagId: 36 }, { tagId: 37 }],
  //   },
  // ];
  // for (const u of user) {
  //   const user = await prisma.user.create({
  //     data: {
  //       name: u.name,
  //       email: u.email,
  //       password: u.password,
  //       roleId: u.roleId,
  //     },
  //   });
  //   console.log(user);
  // }

  const organizationTag =
    await prisma.organizationInformationsComplementaryTag.createMany({
      data: [
        {
          tagId: 1,
          OrganizationInformationsComplementaryId: 1,
        },
        {
          tagId: 2,
          OrganizationInformationsComplementaryId: 1,
        },
        {
          tagId: 3,
          OrganizationInformationsComplementaryId: 2,
        },
        {
          tagId: 4,
          OrganizationInformationsComplementaryId: 2,
        },
        {
          tagId: 5,
          OrganizationInformationsComplementaryId: 3,
        },
        {
          tagId: 6,
          OrganizationInformationsComplementaryId: 3,
        },
      ],
    });

  console.log(organizationTag);

  main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      // close Prisma Client at the end
      await prisma.$disconnect();
    });
}

main();
