export type getOrganizationsStrapiMock = {
  data: [
    {
      id: number;
      attributes: {
        name: string;
        description: string;
        isActive: boolean;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        email: string;
        videoPresenationUrl: string;
        location: {
          address: string;
          coordinates: {
            lat: number;
            lng: number;
          };
          geohash: string;
        };
        tags: {
          data: [
            {
              id: number;
              attributes: {
                name: string;
                createdAt: string;
                updatedAt: string;
                publishedAt: string;
              };
            },
          ];
        };
        photos: {
          data: [
            {
              id: number;
              attributes: {
                name: string;
                alternativeText: boolean;
                caption: boolean;
                width: number;
                height: number;
                formats: {
                  thumbnail: {
                    name: string;
                    hash: string;
                    ext: string;
                    mime: string;
                    path: null;
                    width: number;
                    height: number;
                    size: number;
                    url: string;
                  };
                  small: {
                    name: string;
                    hash: string;
                    ext: string;
                    mime: string;
                    path: null;
                    width: number;
                    height: number;
                    size: number;
                    url: string;
                  };
                  large: {
                    name: string;
                    hash: string;
                    ext: string;
                    mime: string;
                    path: boolean;
                    width: number;
                    height: number;
                    size: number;
                    url: string;
                  };
                  medium: {
                    name: string;
                    hash: string;
                    ext: string;
                    mime: string;
                    path: boolean;
                    width: number;
                    height: number;
                    size: number;
                    url: string;
                  };
                };
                hash: string;
                ext: string;
                mime: string;
                size: number;
                url: string;
                previewUrl: boolean;
                provider: string;
                provider_metadata: boolean;
                createdAt: string;
                updatedAt: string;
              };
            },
          ];
        };
        photoCover: {
          data: [
            {
              id: number;
              attributes: {
                name: string;
                alternativeText: boolean;
                caption: boolean;
                width: number;
                height: number;
                formats: {
                  thumbnail: {
                    name: string;
                    hash: string;
                    ext: string;
                    mime: string;
                    path: null;
                    width: number;
                    height: number;
                    size: number;
                    url: string;
                  };
                  small: {
                    name: string;
                    hash: string;
                    ext: string;
                    mime: string;
                    path: null;
                    width: number;
                    height: number;
                    size: number;
                    url: string;
                  };
                  large: {
                    name: string;
                    hash: string;
                    ext: string;
                    mime: string;
                    path: boolean;
                    width: number;
                    height: number;
                    size: number;
                    url: string;
                  };
                  medium: {
                    name: string;
                    hash: string;
                    ext: string;
                    mime: string;
                    path: boolean;
                    width: number;
                    height: number;
                    size: number;
                    url: string;
                  };
                };
                hash: string;
                ext: string;
                mime: string;
                size: number;
                url: string;
                previewUrl: boolean;
                provider: string;
                provider_metadata: boolean;
                createdAt: string;
                updatedAt: string;
              };
            },
          ];
        };
      };
    },
  ];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
