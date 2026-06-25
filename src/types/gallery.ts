export interface Album {
  id: string;
  title: string;
  coverImage: string;
  totalImages: number;
  date: string;
}

export interface AlbumImage {
  id: string;
  url: string;
}

export interface AlbumDetail {
  id: string;
  title: string;
  images: AlbumImage[];
}

export interface AlbumsQueryParams {
  page?: number;
  pageSize?: number;
}

export interface AlbumImagesQueryParams {
  page?: number;
  pageSize?: number;
}
