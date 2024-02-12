// // This is your Prisma schema file,
// // learn more about it in the docs: https://pris.ly/d/prisma-schema

// datasource db {
//   provider     = "mysql"
//   url          = env("DATABASE_URL")
//   relationMode = "prisma"
// }

// generator client {
//   provider = "prisma-client-js"
// }

// model User{
//   id Int @id @default(autoincrement())
//   name String
//   email String
//   password String
//   photoProfil String ?
//   isAdmin Boolean
//   eventsParticiped EventParticipant[]
// }

// model Organization {
//   id          Int      @id @default(autoincrement())
//   name        String   @unique
//   email String
//   password String
//   location OrganizationLocation ?
//   photoProfil String ?
//   photos Photo[]
//   tags OrganizationTag[]
//   events Event[]
//   enventsCollaborated EventCollaborator[]
//   createdAt   DateTime @default(now())
//   updatedAt   DateTime @updatedAt
// }

// model OrganizationLocation {
//   id Int @id @default(autoincrement() )
//   latitude  String
//   longitude String
//   organization Organization @relation(fields: [organizationId], references: [id])
//   organizationId Int @unique
//   createdAt DateTime @default(now())
//   updatedAt DateTime @default(now())
// }

// model Photo {
//   id Int @id @default(autoincrement())
//   photoUrl String
//   organization Organization @relation(fields: [organizationId], references: [id])
//   organizationId Int @unique
//   createdAt DateTime @default(now())
//   updatedAt   DateTime @default(now())
// }

// model Tag{
//   id Int @id @default(autoincrement())
//   name String
//   issueTags IssueTag[]
//   organizationTags   OrganizationTag[]
// }

// model Issue {
//   id Int @id @default(autoincrement())
//   name String
//   tags   IssueTag[]
// }

// model IssueTag{
//   id Int @id @default(autoincrement())
//   issue Issue @relation(fields: [issueId], references: [id])
//   tag Tag @relation(fields: [tagId], references: [id])

//   issueId Int
//   tagId Int
// }

// model OrganizationTag{
//   id Int @id @default(autoincrement())
//   organization Organization  @relation(fields: [organizationId], references: [id])
//   tag Tag @relation(fields: [tagId], references: [id])

//   organizationId Int
//   tagId Int

//   createdAt DateTime @default(now())
//   updatedAt   DateTime @default(now())
// }

// model Event {
//   id Int @id @default(autoincrement())
//   name String
//   description String
//   dateStart DateTime
//   dateEnd DateTime
//   organizedBy Organization  @relation(fields: [organizationId], references: [id])
//   eventCollaborators EventCollaborator[]
//   eventParticipants EventParticipant[]
//   organizationId Int @unique
// }

// model EventCollaborator {
//   id Int @id  @default(autoincrement())
//   event  Event @relation(fields: [eventId], references: [id])
//   collaborator Organization @relation(fields: [collaboratorId], references: [id])

//   eventId Int @unique
//   collaboratorId  Int @unique
// }

// model EventParticipant {
//   id Int @id @default(autoincrement())
//   event Event @relation(fields: [eventId], references: [id])
//   user  User @relation(fields: [perticipantId], references: [id])

//   perticipantId Int @unique
//   eventId Int @unique
// }
