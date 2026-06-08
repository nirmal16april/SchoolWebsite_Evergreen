/**
 * Mock gallery data — consumed ONLY by galleryApi.js.
 * Page components must never import this file directly.
 *
 * When the real backend is ready, remove or archive this file and update
 * galleryApi.js to call the live endpoints instead.
 */

import eventImg1 from '../../../assets/img/event/event-1-1.jpg';
import eventImg2 from '../../../assets/img/event/event-1-2.jpg';
import eventImg3 from '../../../assets/img/event/event-1-3.jpg';
import eventImg4 from '../../../assets/img/event/event-3-1.jpg';
import eventImg5 from '../../../assets/img/event/event-3-2.jpg';
import eventImg6 from '../../../assets/img/event/event-3-3.jpg';
import eventImg7 from '../../../assets/img/event/event-3-4.jpg';
import eventImg8 from '../../../assets/img/event/event-3-5.jpg';
import eventImg9 from '../../../assets/img/event/event-3-6.jpg';
import eventDetails1 from '../../../assets/img/event/details-1.jpg';
import aboutImg1 from '../../../assets/new-images/about-page/img_01.jpg';
import aboutImg2 from '../../../assets/new-images/about-page/img_02.jpg';
import homeImg1 from '../../../assets/new-images/Home-page/img-1.jpg';
import videoThumb from '../../../assets/img/video/thumb-5.jpg';

const mockAlbums = [
  {
    id: 1,
    title: 'Annual Function 2025',
    coverImage: eventImg1,
    totalImages: 8,
    date: '2025-05-10',
    images: [
      { id: 101, url: eventImg1 },
      { id: 102, url: eventImg2 },
      { id: 103, url: eventImg3 },
      { id: 104, url: eventDetails1 },
      { id: 105, url: eventImg4 },
      { id: 106, url: eventImg5 },
      { id: 107, url: eventImg6 },
      { id: 108, url: eventImg7 },
    ],
  },
  {
    id: 2,
    title: 'Sports Day 2025',
    coverImage: eventImg2,
    totalImages: 6,
    date: '2025-02-15',
    images: [
      { id: 201, url: eventImg2 },
      { id: 202, url: eventImg8 },
      { id: 203, url: eventImg9 },
      { id: 204, url: aboutImg1 },
      { id: 205, url: homeImg1 },
      { id: 206, url: videoThumb },
    ],
  },
  {
    id: 3,
    title: 'Independence Day Celebration',
    coverImage: eventImg3,
    totalImages: 5,
    date: '2024-08-15',
    images: [
      { id: 301, url: eventImg3 },
      { id: 302, url: eventImg4 },
      { id: 303, url: eventImg5 },
      { id: 304, url: aboutImg2 },
      { id: 305, url: eventImg1 },
    ],
  },
  {
    id: 4,
    title: 'Science Exhibition',
    coverImage: eventImg4,
    totalImages: 7,
    date: '2024-12-08',
    images: [
      { id: 401, url: eventImg4 },
      { id: 402, url: eventImg5 },
      { id: 403, url: eventImg6 },
      { id: 404, url: eventDetails1 },
      { id: 405, url: homeImg1 },
      { id: 406, url: aboutImg1 },
      { id: 407, url: videoThumb },
    ],
  },
  {
    id: 5,
    title: 'Republic Day Parade',
    coverImage: eventImg5,
    totalImages: 4,
    date: '2025-01-26',
    images: [
      { id: 501, url: eventImg5 },
      { id: 502, url: eventImg6 },
      { id: 503, url: eventImg7 },
      { id: 504, url: eventImg8 },
    ],
  },
  {
    id: 6,
    title: 'Cultural Fest',
    coverImage: eventImg6,
    totalImages: 6,
    date: '2024-11-20',
    images: [
      { id: 601, url: eventImg6 },
      { id: 602, url: eventImg9 },
      { id: 603, url: aboutImg2 },
      { id: 604, url: eventImg2 },
      { id: 605, url: eventImg3 },
      { id: 606, url: eventDetails1 },
    ],
  },
];

export const getMockAlbumsList = () =>
  mockAlbums.map(({ id, title, coverImage, totalImages, date }) => ({
    id,
    title,
    coverImage,
    totalImages,
    date,
  }));

export const getMockAlbumById = (albumId) => {
  const album = mockAlbums.find((item) => item.id === albumId);

  if (!album) {
    return null;
  }

  return {
    id: album.id,
    title: album.title,
    images: album.images,
  };
};
