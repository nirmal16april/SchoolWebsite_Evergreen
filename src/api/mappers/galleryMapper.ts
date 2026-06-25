import { Album, AlbumDetail, AlbumImage } from '../../types/gallery';
import {
  normalizeDate,
  readId,
  readNumber,
  readRawString,
  readString,
  resolveBase64Image,
  resolveMediaUrl,
  unwrapListPayload,
  unwrapObjectPayload,
} from '../utils/responseUtils';

function resolveAlbumCoverImage(source: Record<string, unknown>): string {
  const coverImageBase64 = readRawString(source, ['coverImageBase64']);

  if (coverImageBase64) {
    return coverImageBase64.startsWith('data:')
      ? coverImageBase64
      : resolveBase64Image('image/png', coverImageBase64);
  }

  const coverImage = readString(source, [
    'coverImage',
    'coverImageUrl',
    'coverUrl',
    'thumbnailUrl',
    'thumbnail',
    'imageUrl',
  ]);

  return resolveMediaUrl(coverImage);
}

function resolveAlbumImageUrl(source: Record<string, unknown>): string {
  const directUrl = readString(source, [
    'url',
    'imageUrl',
    'imageURL',
    'photoUrl',
    'path',
    'fileUrl',
    'mediaUrl',
  ]);

  if (directUrl) {
    return resolveMediaUrl(directUrl);
  }

  const base64 = readRawString(source, [
    'fileContentBase64',
    'imageBase64',
    'base64',
    'mediaBase64',
  ]);
  const contentType = readString(
    source,
    ['contentType', 'mimeType', 'mediaType'],
    'image/jpeg'
  );

  if (base64) {
    return resolveBase64Image(
      contentType.includes('/') ? contentType : `image/${contentType}`,
      base64
    );
  }

  return '';
}

function mapAlbumImageItem(item: unknown, index: number): AlbumImage | null {
  if (typeof item === 'string') {
    return {
      id: `image-${index + 1}`,
      url: resolveMediaUrl(item),
    };
  }

  if (!item || typeof item !== 'object') {
    return null;
  }

  const source = item as Record<string, unknown>;
  const id = readId(
    source,
    ['galleryMediaId', 'id', 'imageId', 'albumImageId', 'mediaDocumentId'],
    `image-${index + 1}`
  );
  const url = resolveAlbumImageUrl(source);

  if (!url) {
    return null;
  }

  return {
    id,
    url,
  };
}

export function mapAlbumListItem(item: unknown): Album | null {
  if (!item || typeof item !== 'object') {
    return null;
  }

  const source = item as Record<string, unknown>;
  const id = readId(source, ['id', 'albumId']);

  if (!id) {
    return null;
  }

  const totalImages = readNumber(source, [
    'totalImages',
    'imageCount',
    'photoCount',
    'totalPhotos',
    'count',
    'total',
  ]);

  return {
    id,
    title: readString(source, ['title', 'name', 'albumName', 'albumTitle', 'eventName'], 'Untitled Album'),
    coverImage: resolveAlbumCoverImage(source),
    totalImages,
    date: normalizeDate(
      readString(source, ['date', 'createdOnUtc', 'createdAt', 'createdDate', 'albumDate', 'eventDate'])
    ),
  };
}

export function mapAlbumsResponse(data: unknown): Album[] {
  return unwrapListPayload(data)
    .map(mapAlbumListItem)
    .filter((album): album is Album => album !== null);
}

export function mapAlbumImagesResponse(
  data: unknown,
  albumId: string,
  fallbackTitle = 'Album Details'
): AlbumDetail {
  const payload = unwrapObjectPayload(data);
  const rawImages =
    payload.items ??
    payload.images ??
    payload.albumImages ??
    payload.photos ??
    payload.media ??
    data;

  const images = unwrapListPayload(rawImages)
    .map(mapAlbumImageItem)
    .filter((image): image is AlbumImage => image !== null);

  const title = readString(
    payload,
    ['title', 'name', 'albumName', 'albumTitle', 'eventName'],
    fallbackTitle
  );

  return {
    id: readId(payload, ['id', 'albumId'], albumId),
    title,
    images,
  };
}

export function findAlbumTitle(albums: Album[], albumId: string): string {
  return albums.find((album) => album.id === albumId)?.title || 'Album Details';
}
