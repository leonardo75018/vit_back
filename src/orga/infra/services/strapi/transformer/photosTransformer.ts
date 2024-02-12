import { Photo } from 'src/orga/domain/entities';

export function photoTransformer(photos): Photo[] {
  return photos.map((photo) => ({
    id: photo.id,
    url: photo.attributes.formats.thumbnail.url,
  }));
}
