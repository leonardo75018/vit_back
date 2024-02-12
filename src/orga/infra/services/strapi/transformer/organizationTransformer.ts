// import { photoCoverTransformer } from './photoCoverTransformer';
// import { photoTransformer } from './photosTransformer';
// import { Organization } from 'src/organizations/domain/entities';

// export function OrganizationTransformer(org): Organization {
//   return {
//     id: org.id,
//     name: org.attributes.name,
//     description: org.attributes.description,
//     location: {
//       address: org.attributes.location.address,
//       latitude: org.attributes.location.coordinates.lat,
//       longitude: org.attributes.location.coordinates.lng,
//     },
//     email: org.attributes.email,
//     photoCover: photoCoverTransformer(org.attributes.photoCover),
//     photos: photoTransformer(org.attributes.photos.data),
//   };
// }
