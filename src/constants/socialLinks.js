export const SOCIAL_LINKS = [
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/evergreenseniorsecondaryschool?mibextid=ZbWKwL',
    icon: 'fa-brands fa-facebook-f',
    brandColor: '#316FF6',
    embedUrl:
      'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fevergreenseniorsecondaryschool%2F&tabs=timeline&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/evergreenseniorsecondaryschool?igsh=MWVzb2FrZzFqbmJoYg==',
    icon: 'fa-brands fa-instagram',
    brandColor: '#AA336A',
    embedUrl:
      'https://www.instagram.com/p/C33917NPsVx/embed/captioned/?cr=1&v=14&wp=540',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: 'https://youtube.com/@evergreenseniorsecondaryschool?si=oZF03f-iQD8KFQtq',
    icon: 'fa-brands fa-youtube',
    brandColor: '#FF0000',
    embedUrl: 'https://www.youtube.com/embed/_PTZVEPC2Bw?si=RiMBePLtnP89ZgsR',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://api.whatsapp.com/send?phone=919997182574',
    icon: 'fa-brands fa-whatsapp',
    brandColor: '#25D366',
  },
];

export const SOCIAL_EMBED_LINKS = SOCIAL_LINKS.filter((link) => link.embedUrl);
