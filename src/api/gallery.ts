import {
  ALBUM_IMAGES_PAGE_SIZE,
  DEFAULT_ALBUMS_PAGE_SIZE,
} from '../constants/api';
import { WEBSITE_KEY } from '../constants/website';
import {
  Album,
  AlbumDetail,
  AlbumImagesQueryParams,
  AlbumsQueryParams,
} from '../types/gallery';
import { ApiRequestError } from '../types/api';
import { apiClient } from './axios';
import {
  findAlbumTitle,
  mapAlbumImagesResponse,
  mapAlbumListItem,
} from './mappers/galleryMapper';
import {
  fetchAllPaginatedItems,
  hasMorePages,
  parsePaginatedResponse,
} from './utils/pagination';
import { isValidEntityId } from './utils/responseUtils';

async function fetchAlbumsPage(page: number, pageSize: number) {
  const response = await apiClient.get(
    `/api/academics/public/${WEBSITE_KEY}/albums`,
    {
      params: { page, pageSize },
    }
  );

  return parsePaginatedResponse(response.data, mapAlbumListItem, page, pageSize);
}

export async function fetchAlbums(
  params: AlbumsQueryParams = {}
): Promise<Album[]> {
  const pageSize = params.pageSize ?? DEFAULT_ALBUMS_PAGE_SIZE;

  if (params.page) {
    const result = await fetchAlbumsPage(params.page, pageSize);
    return result.items;
  }

  return fetchAllPaginatedItems(
    (page, size) => fetchAlbumsPage(page, size),
    pageSize
  );
}

export async function fetchAlbumImages(
  albumId: string,
  fallbackTitle = 'Album Details',
  params: AlbumImagesQueryParams = {}
): Promise<AlbumDetail> {
  if (!isValidEntityId(albumId)) {
    throw new ApiRequestError('Invalid album id.', 400);
  }

  const pageSize = Math.min(
    params.pageSize ?? ALBUM_IMAGES_PAGE_SIZE,
    ALBUM_IMAGES_PAGE_SIZE
  );
  const allImages: AlbumDetail['images'] = [];
  let title = fallbackTitle;
  let id = albumId;
  let page = params.page ?? 1;
  const fetchSinglePage = Boolean(params.page);

  while (true) {
    const response = await apiClient.get(
      `/api/academics/public/${WEBSITE_KEY}/album-images/${albumId}`,
      {
        params: { page, pageSize },
      }
    );

    const mapped = mapAlbumImagesResponse(response.data, albumId, fallbackTitle);
    title = mapped.title;
    id = mapped.id;
    allImages.push(...mapped.images);

    if (fetchSinglePage) {
      break;
    }

    const parsed = parsePaginatedResponse(
      response.data,
      () => null,
      page,
      pageSize
    );

    if (!hasMorePages(parsed.meta, mapped.images.length)) {
      break;
    }

    page += 1;
  }

  if (allImages.length === 0 && page === 1) {
    throw new ApiRequestError('No photos found in this album.', 404);
  }

  return {
    id,
    title,
    images: allImages,
  };
}

export async function fetchAlbumDetail(
  albumId: string,
  cachedAlbums: Album[] = []
): Promise<AlbumDetail> {
  const fallbackTitle = findAlbumTitle(cachedAlbums, albumId);
  return fetchAlbumImages(albumId, fallbackTitle);
}
