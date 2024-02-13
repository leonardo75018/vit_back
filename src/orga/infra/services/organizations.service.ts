// import { Injectable } from '@nestjs/common';
// import { PrismaService } from './prisma/organizationPrisma.service';

// @Injectable()
// export class OrganizationsService {
//   constructor(private readonly prismaService: PrismaService) {}

//   async create() {
//     const organization = await this.prismaService.organization.create({
//       data: {
//         name: 'Repairs',
//         email: 'repairs@gmail.com',
//         password: '123',
//       },
//     });

//     return organization;
//   }

//   async findById() {
//     const organization = this.prismaService.organization.findUnique({
//       where: { id: 1 },
//       include: {
//         tags: {
//           select: {
//             tag: {
//               select: {
//                 name: true,
//                 id: true,
//               },
//             },
//           },
//         },
//       },
//     });
//     return organization;
//   }

//   async finIssues() {
//     const issue = await this.prismaService.issue.findUnique({
//       where: {
//         id: 3,
//       },
//       include: {
//         tags: true,
//       },
//     });

//     if (issue?.tags) {
//       const organizations = this.prismaService.organization.findMany({
//         where: {
//           tags: {
//             some: {
//               tagId: {
//                 in: issue.tags.map((item) => item.tagId),
//               },
//             },
//           },
//         },
//       });

//       return organizations;
//     }
//   }

//   async addTagInIusse() {
//     return this.prismaService.issueTag.createMany({
//       data: [
//         {
//           issueId: 3,
//           tagId: 22,
//         },
//         {
//           issueId: 3,
//           tagId: 4,
//         },
//       ],
//     });
//   }

//   async addTag() {
//     const tag = this.prismaService.organizationTag.create({
//       data: {
//         organizationId: 1,
//         tagId: 4,
//       },
//     });
//     return tag;
//   }
// }
