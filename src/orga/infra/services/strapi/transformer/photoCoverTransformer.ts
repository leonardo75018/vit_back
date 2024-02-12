export function photoCoverTransformer(photoCover): string {
  return photoCover.data.attributes.formats.small.url;
}
