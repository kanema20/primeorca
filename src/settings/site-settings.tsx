import { ILFlag } from '@components/icons/ILFlag';
import { SAFlag } from '@components/icons/SAFlag';
import { CNFlag } from '@components/icons/CNFlag';
import { USFlag } from '@components/icons/USFlag';
import { DEFlag } from '@components/icons/DEFlag';
import { ESFlag } from '@components/icons/ESFlag';
import Nike from 'public/assets/images/brands/megamenu/nike.png';
import Dior from 'public/assets/images/brands/megamenu/dior.png';
import Gucci from 'public/assets/images/brands/megamenu/gucci.png';
import Gucci1 from 'public/assets/images/brands/megamenu/gucci1.png';
import Puma from 'public/assets/images/brands/megamenu/puma.png';
import Levis from 'public/assets/images/brands/megamenu/levis.png';
import Banner1 from 'public/assets/images/banner/megamenu/banner-1.png';
import Banner2 from 'public/assets/images/banner/megamenu/banner-2.png';
import { ROUTES } from '@utils/routes';

import { ThunderIcon } from '@components/icons/thunder-icon';
import { WomenIcon } from '@components/icons/women-icon';
import { MenIcon } from '@components/icons/men-icon';
import { WatchIcon } from '@components/icons/watch-icon';
import { WalletIcon } from '@components/icons/wallet-icon';
import { BagIcon } from '@components/icons/bag-icon';
import { JewelryIcon } from '@components/icons/jewelry-icon';
import { SunglassIcon } from '@components/icons/sunglass-icon';
import { SneakerIcon } from '@components/icons/sneaker-icon';

export const siteSettings = {
  name: 'Prime Orca',
  description: 'The source for premium replica basketball shoes, including exclusive Kobe, Jordan, Kyrie and more.',
  author: {
    name: 'Prime Orca',
    websiteUrl: 'https://primeorca.com',
    address: '',
  },
  logo: {
    url: '/assets/images/prime-orca-logo.png',
    alt: 'Prime Orca',
    href: '/',
    width: 75,
    height: 75,
  },
  defaultLanguage: 'en',
  currencyCode: 'USD',
  site_header: {
    menu: [
      {
        id: 1,
        path: '/',
        label: 'menu-about',
        subMenu: [
          // {
          //   id: 1,
          //   path: '/',
          //   label: 'menu-users',
          //   subMenu: [
          //     {
          //       id: 1,
          //       path: '/my-account',
          //       label: 'menu-my-account',
          //     },
          //     {
          //       id: 2,
          //       path: '/signin',
          //       label: 'menu-sign-in',
          //     },
          //     {
          //       id: 3,
          //       path: '/signup',
          //       label: 'menu-sign-up',
          //     },
          //     {
          //       id: 4,
          //       path: '/forget-password',
          //       label: 'menu-forget-password',
          //     },
          //   ],
          // },
          {
            id: 2,
            path: '/process',
            label: 'menu-our-process',
          },
          {
            id: 3,
            path: '/privacy',
            label: 'menu-privacy-policy',
          },
          {
            id: 4,
            path: '/about-us',
            label: 'menu-about',
          },
          {
            id: 5,
            path: '/contact-us',
            label: 'menu-contact-us',
          },
          {
            id: 6,
            path: '/faq',
            label: 'menu-faq',
          },
        ],
      },
      // {
      //   id: 1,
      //   path: '/',
      //   label: 'menu-demos',
      //   subMenu: [
      //     {
      //       id: 1,
      //       path: '/',
      //       label: 'menu-minimal',
      //     },
      //     {
      //       id: 2,
      //       path: '/standard',
      //       label: 'menu-standard',
      //     },
      //     {
      //       id: 3,
      //       path: '/modern',
      //       label: 'menu-modern',
      //     },
      //     {
      //       id: 4,
      //       path: '/vintage',
      //       label: 'menu-vintage',
      //     },
      //     {
      //       id: 5,
      //       path: '/classic',
      //       label: 'menu-classic',
      //     },
      //     {
      //       id: 6,
      //       path: '/trendy',
      //       label: 'menu-trendy',
      //     },
      //     {
      //       id: 7,
      //       path: '/elegant',
      //       label: 'menu-elegant',
      //     },
      //     {
      //       id: 8,
      //       path: '/refined',
      //       label: 'menu-refined',
      //     },
      //     {
      //       id: 9,
      //       path: '/contemporary',
      //       label: 'menu-contemporary',
      //     },
      //     {
      //       id: 10,
      //       path: '/ancient',
      //       label: 'menu-ancient',
      //     },
      //   ],
      // },
      // {
      // id: 2,
      // path: '/',
      // path: `${ROUTES.KOBE}`,
      // label: 'menu-kobe',
      // columns: [
      // {
      // id: 1,
      // columnItems: [
      //   // {
      //   //   id: 1,
      //   //   // path: `${ROUTES.KOBE5}`,
      //   //   path: "/",
      //   //   label: 'Kobe',
      //   {
      //     id: 1,
      //     path: `${ROUTES.KOBE5}`,
      //     label: 'Kobe 5',
      //   },
      //   {
      //     id: 2,
      //     path: `${ROUTES.KOBE6}`,
      //     label: 'Kobe 6',
      //   },
      //   {
      //     id: 3,
      //     path: `${ROUTES.KOBE8}`,
      //     label: 'Kobe 8',
      //   },

      // columnItemItems: [
      //   {
      //     id: 1,
      //     path: `${ROUTES.KOBE5}`,
      //     label: 'Kobe 5',
      //   },
      //   {
      //     id: 2,
      //     path: `${ROUTES.KOBE6}`,
      //     label: 'Kobe 6',
      //   },
      //   {
      //     id: 3,
      //     path: `${ROUTES.KOBE8}`,
      //     label: 'Kobe 8',
      //   },
      // {
      //   id: 1,
      //   path: `/products/nike-kobe-5-protro-2k-gamer-exclusive`,
      //   label: 'Nike-Kobe-5-Protro-2K',
      // },
      // {
      //   id: 2,
      //   path: `/products/kobe-5-joker-chaos`,
      //   label: 'Nike-Kobe-5-Joker-Chaos',
      // },
      // {
      //   id: 3,
      //   path: `/products/nike-kobe-5-usa`,
      //   label: 'Nike-Kobe-5-USA',
      // },
      // {
      //   id: 4,
      //   path: `/products/nike-kobe-5-protro-lakers`,
      //   label: 'Nike-Kobe-5-Protro-Lakers',
      // },
      // {
      //   id: 5,
      //   path: `/products/kobe-5-bruce-lee`,
      //   label: 'Nike-Kobe-5-Bruce-Lee',
      // },
      // ],
      // },
      // ],
      // },
      // {
      //   id: 2,
      //   columnItems: [
      //     {
      //       id: 1,
      //       path: `${ROUTES.KOBE6}`,
      //       label: 'menu-kobe-6',
      //       columnItemItems: [
      //         {
      //           id: 1,
      //           path: `/products/nike-kobe-6-protro-grinch`,
      //           label: 'kobe-6-grinch',
      //         },
      //         {
      //           id: 2,
      //           path: `/products/nike-kobe-6-reverse-grinch`,
      //           label: 'kobe-6-reverse-grinch',
      //         },
      //         {
      //           id: 3,
      //           path: `/products/nike-kobe-protro-6-think-pink`,
      //           label: 'kobe-6-think-pink',
      //         },
      //         {
      //           id: 4,
      //           path: `/products/nike-kobe-6-protro-mambacita-sweet-16`,
      //           label: 'kobe-6-mambacita',
      //         },
      //         {
      //           id: 5,
      //           path: `/products/kobe-6-asg-west-challenge-red`,
      //           label: 'kobe-6-asg',
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   id: 3,
      //   columnItems: [
      //     {
      //       id: 1,
      //       path: `${ROUTES.KOBE8}`,
      //       label: 'menu-kobe-8',
      //       columnItemItems: [
      //         {
      //           id: 1,
      //           path: `/products/kobe-8-sulfur-electric`,
      //           label: 'kobe-8-sulfur-electric',
      //         },
      //         {
      //           id: 2,
      //           path: `/products/kobe-8-easter`,
      //           label: 'kobe-8-easter',
      //         },
      //         {
      //           id: 3,
      //           path: `/products/kobe-8-milk-snake`,
      //           label: 'kobe-8-milk-snake',
      //         },
      //         {
      //           id: 4,
      //           path: `/products/nike-kobe-8-system-green-glow-laser-orange`,
      //           label: 'kobe-8-green-glow',
      //         },
      //         {
      //           id: 5,
      //           path: `/products/kobe-8-black-history-month`,
      //           label: 'kobe-8-bhm',
      //         },
      //       ],
      //     },
      //   ],
      // },
      // ],
      // },
      {
        id: 2,
        path: '/',
        label: 'DRIP 🌊',
        subMenu: [
          // {
          //   id: 1,
          //   path: `/`,
          //   label: 'COMING SOON',
          // },
          {
            id: 2,
            path: `${ROUTES.OFF}`,
            // label: 'OFF WHITE ✖ NIKE',
            label: 'OFF WHITE',
          },
          {
            id: 3,
            path: `${ROUTES.RHUDE}`,
            label: 'Rhude',
          },
          {
            id: 4,
            path: `${ROUTES.GALLERY}`,
            label: 'Gallery Dept.',
          },
        ],
      },
      {
        id: 6,
        path: '/',
        label: 'Kobe 🐍',
        subMenu: [
          {
            id: 1,
            path: `${ROUTES.KOBE5}`,
            label: 'Kobe 5',
          },
          {
            id: 2,
            path: `${ROUTES.KOBE6}`,
            label: 'Kobe 6',
          },
          {
            id: 3,
            path: `${ROUTES.KOBE8}`,
            label: 'Kobe 8',
          },
        ],
      },
      {
        id: 3,
        path: '/',
        label: 'Nike ✔',
        subMenu: [
          {
            id: 1,
            path: '/nike/gtcuts',
            label: 'GT Cuts',
          },
          {
            id: 2,
            path: '/nike/eybl',
            label: 'EYBL 🍊',
          },
          {
            id: 3,
            path: '/nike/travis',
            label: 'Travis Scott 🌵',
          },
          {
            id: 4,
            path: `${ROUTES.DUNKS}`,
            label: 'SB Dunks',
          },
        ],
      },
      {
        id: 4,
        path: '/',
        label: 'menu-balenciaga',
        subMenu: [
          {
            id: 1,
            path: '/balenciaga/track',
            label: 'Track',
          },
          {
            id: 2,
            path: '/balenciaga/triple-s',
            label: 'Triple S',
          },
        ],
      },
      {
        id: 5,
        path: '/',
        label: 'Yeezy 🐐',
        subMenu: [
          {
            id: 1,
            path: `${ROUTES.YEEZY350}`,
            label: 'Yeezy 350',
          },
          {
            id: 2,
            path: `${ROUTES.YEEZY700}`,
            label: 'Yeezy 700',
          },
          {
            id: 3,
            path: `${ROUTES.YEEZYSLIDE}`,
            label: 'Yeezy Slide',
          },
        ],
      },
      // {
      //   id: 2,
      //   path: '/search?q=men-wear',
      //   label: 'menu-men-wear',
      //   columns: [
      //     {
      //       id: 1,
      //       columnItems: [
      //         {
      //           id: 1,
      //           path: '/search?q=top-wear',
      //           label: 'menu-top-wear',
      //           columnItemItems: [
      //             {
      //               id: 1,
      //               path: '/search?q=t-shit-shirtrt',
      //               label: 'menu-t-shirt',
      //             },
      //             {
      //               id: 2,
      //               path: '/search?q=casual-shirts',
      //               label: 'menu-casual-shirts',
      //             },
      //             {
      //               id: 3,
      //               path: '/search?q=formal-shirts',
      //               label: 'menu-formal-shirts',
      //             },
      //             {
      //               id: 4,
      //               path: '/search?q=blazwers-coats',
      //               label: 'menu-blazwers-coats',
      //             },
      //             {
      //               id: 5,
      //               path: '/search?q=suits',
      //               label: 'menu-suits',
      //             },
      //             {
      //               id: 6,
      //               path: '/search?q=jackets',
      //               label: 'menu-jackets',
      //             },
      //           ],
      //         },
      //         {
      //           id: 2,
      //           path: '/search?q=belt-scarves',
      //           label: 'menu-belt-scarves',
      //         },
      //         {
      //           id: 3,
      //           path: '/search?q=watches-wearables',
      //           label: 'menu-watches-wearables',
      //         },
      //       ],
      //     },
      //     {
      //       id: 2,
      //       columnItems: [
      //         {
      //           id: 1,
      //           path: '/search?q=western-wear',
      //           label: 'menu-western-wear',
      //           columnItemItems: [
      //             {
      //               id: 1,
      //               path: '/search?q=dresses',
      //               label: 'menu-dresses',
      //             },
      //             {
      //               id: 2,
      //               path: '/search?q=jumpsuits',
      //               label: 'menu-jumpsuits',
      //             },
      //             {
      //               id: 3,
      //               path: '/search?q=tops-t-shirt',
      //               label: 'menu-tops-shirts',
      //             },
      //             {
      //               id: 4,
      //               path: '/search?q=shorts-skirts',
      //               label: 'menu-shorts-skirts',
      //             },
      //             {
      //               id: 5,
      //               path: '/search?q=shurgs',
      //               label: 'menu-shurgs',
      //             },
      //             {
      //               id: 6,
      //               path: '/search?q=blazers',
      //               label: 'menu-blazers',
      //             },
      //           ],
      //         },
      //         {
      //           id: 2,
      //           path: '/search?q=plus-size',
      //           label: 'menu-plus-size',
      //         },
      //         {
      //           id: 3,
      //           path: '/search?q=sunglasses-frames',
      //           label: 'menu-sunglasses-frames',
      //         },
      //       ],
      //     },
      //     {
      //       id: 3,
      //       columnItems: [
      //         {
      //           id: 1,
      //           path: '/search?q=footwear',
      //           label: 'menu-footwear',
      //           columnItemItems: [
      //             {
      //               id: 1,
      //               path: '/search?q=flats',
      //               label: 'menu-flats',
      //             },
      //             {
      //               id: 2,
      //               path: '/search?q=casual-shoes',
      //               label: 'menu-casual-shoes',
      //             },
      //             {
      //               id: 3,
      //               path: '/search?q=heels',
      //               label: 'menu-heels',
      //             },
      //             {
      //               id: 4,
      //               path: '/search?q=boots',
      //               label: 'menu-boots',
      //             },
      //           ],
      //         },
      //         {
      //           id: 2,
      //           path: '/search?q=sports-active-wear',
      //           label: 'menu-sports-active-wear',
      //           columnItemItems: [
      //             {
      //               id: 1,
      //               path: '/search?q=clothing',
      //               label: 'menu-clothing',
      //             },
      //             {
      //               id: 2,
      //               path: '/search?q=footwear',
      //               label: 'menu-footwear',
      //             },
      //             {
      //               id: 3,
      //               path: '/search?q=sports-accessories',
      //               label: 'menu-sports-accessories',
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       id: 4,
      //       columnItems: [
      //         {
      //           id: 1,
      //           path: '/search?q=lingerie-sleepwear',
      //           label: 'menu-lingerie-sleepwear',
      //           columnItemItems: [
      //             {
      //               id: 1,
      //               path: '/search?q=bra',
      //               label: 'menu-bra',
      //             },
      //             {
      //               id: 2,
      //               path: '/search?q=briefs',
      //               label: 'menu-briefs',
      //             },
      //             {
      //               id: 3,
      //               path: '/search?q=sleepwear',
      //               label: 'menu-sleepwear',
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       id: 5,
      //       columnItems: [
      //         {
      //           id: 1,
      //           path: '/search?q=gadgets',
      //           label: 'menu-gadgets',
      //           columnItemItems: [
      //             {
      //               id: 1,
      //               path: '/search?q=smart-wearables',
      //               label: 'menu-smart-wearables',
      //             },
      //             {
      //               id: 2,
      //               path: '/search?q=headphones',
      //               label: 'menu-headphones',
      //             },
      //           ],
      //         },
      //         {
      //           id: 2,
      //           path: '/search?q=jewellers',
      //           label: 'menu-jewellers',
      //           columnItemItems: [
      //             {
      //               id: 1,
      //               path: '/search?q=fashion-jewellers',
      //               label: 'menu-fashion-jewellers',
      //             },
      //             {
      //               id: 2,
      //               path: '/search?q=fine-jewellers',
      //               label: 'menu-fine-jewellers',
      //             },
      //           ],
      //         },
      //         {
      //           id: 3,
      //           path: '/search?q=backpacks',
      //           label: 'menu-backpacks',
      //         },
      //         {
      //           id: 4,
      //           path: '/search?q=handbags-wallets',
      //           label: 'menu-handbags-wallets',
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   id: 6,
      //   path: '/ja-1',
      //   label: 'menu-ja-1',
      // },
      // {
      //   id: 7,
      //   path: '/off-white',
      //   label: 'menu-off-white',
      // },
      {
        id: 8,
        path: '/prada/cloudbust',
        label: 'Prada 🌫',
      },
      // {
      // id: 9,
      // path: '/nike/gtcuts',
      // label: 'GT Cuts',
      // },
      {
        id: 10,
        path: '/mcqueen/oversized',
        label: 'McQueen 👑',
      },
      {
        id: 11,
        path: '/nike/travis',
        label: 'Travis Scott 🌵',
      },
      {
        id: 12,
        path: '/dior/b22',
        label: 'DIOR 💎',
      },
    ],
    mobileMenu: [
      // {
      //   id: 1,
      //   path: '/',
      //   label: 'menu-demos',
      //   subMenu: [
      //     {
      //       id: 1,
      //       path: '/',
      //       label: 'menu-modern',
      //     },
      //     {
      //       id: 2,
      //       path: '/standard',
      //       label: 'menu-standard',
      //     },
      //     {
      //       id: 3,
      //       path: '/minimal',
      //       label: 'menu-minimal',
      //     },
      //     {
      //       id: 4,
      //       path: '/vintage',
      //       label: 'menu-vintage',
      //     },
      //     {
      //       id: 5,
      //       path: '/classic',
      //       label: 'menu-classic',
      //     },
      //     {
      //       id: 6,
      //       path: '/trendy',
      //       label: 'menu-trendy',
      //     },
      //     {
      //       id: 7,
      //       path: '/elegant',
      //       label: 'menu-elegant',
      //     },
      //     {
      //       id: 8,
      //       path: '/refined',
      //       label: 'menu-refined',
      //     },
      //     {
      //       id: 9,
      //       path: '/contemporary',
      //       label: 'menu-contemporary',
      //     },
      //     {
      //       id: 10,
      //       path: '/ancient',
      //       label: 'menu-ancient',
      //     },
      //   ],
      // },
      {
        id: 5,
        path: '/',
        label: 'menu-about',
        subMenu: [
          // {
          //   id: 1,
          //   path: '/',
          //   label: 'menu-users',
          //   subMenu: [
          //     {
          //       id: 1,
          //       path: '/my-account',
          //       label: 'menu-my-account',
          //     },
          //     {
          //       id: 2,
          //       path: '/signin',
          //       label: 'menu-sign-in',
          //     },
          //     {
          //       id: 3,
          //       path: '/signup',
          //       label: 'menu-sign-up',
          //     },
          //     {
          //       id: 4,
          //       path: '/forget-password',
          //       label: 'menu-forget-password',
          //     },
          //   ],
          // },
          {
            id: 2,
            path: '/process',
            label: 'menu-our-process',
          },
          {
            id: 3,
            path: '/privacy',
            label: 'menu-privacy-policy',
          },
          // {
          //   id: 4,
          //   path: '/terms',
          //   label: 'menu-terms-condition',
          // },
          {
            id: 4,
            path: '/about-us',
            label: 'menu-about',
          },
          {
            id: 5,
            path: '/contact-us',
            label: 'menu-contact-us',
          },
          {
            id: 6,
            path: '/faq',
            label: 'menu-faq',
          },
        ],
      },
      {
        id: 2,
        path: '/',
        label: 'DRIP 🌊',
        subMenu: [
          // {
          //   id: 1,
          //   path: `/`,
          //   label: 'COMING SOON',
          // },
          {
            id: 2,
            path: `${ROUTES.OFF}`,
            label: 'OFF WHITE',
          },
          {
            id: 3,
            path: `${ROUTES.RHUDE}`,
            label: 'Rhude',
          },
          {
            id: 4,
            path: `${ROUTES.GALLERY}`,
            label: 'Gallery Dept.',
          },
        ],
      },
      {
        id: 6,
        path: '/',
        label: 'Kobe 🐍',
        subMenu: [
          {
            id: 1,
            path: `${ROUTES.KOBE5}`,
            label: 'menu-kobe-5',
          },
          {
            id: 2,
            path: `${ROUTES.KOBE6}`,
            label: 'menu-kobe-6',
          },
          {
            id: 3,
            path: `${ROUTES.KOBE8}`,
            label: 'menu-kobe-8',
          },
        ],
      },
      {
        id: 3,
        path: '/',
        label: 'Nike ✔',
        subMenu: [
          {
            id: 1,
            path: `${ROUTES.EYBL}`,
            label: 'EYBL 🍊',
          },
          {
            id: 2,
            path: `${ROUTES.GT}`,
            label: 'menu-gt',
          },
          {
            id: 3,
            path: `${ROUTES.TRAVIS}`,
            label: 'Travis Scott 🌵',
          },
          {
            id: 4,
            path: `${ROUTES.DUNKS}`,
            label: 'SB Dunks ',
          },
        ],
      },
      {
        id: 4,
        path: '/',
        label: 'menu-balenciaga',
        subMenu: [
          {
            id: 1,
            path: `${ROUTES.TRACK}`,
            label: 'Track',
          },
          {
            id: 2,
            path: `${ROUTES.TRIPLES}`,
            label: 'Triple S',
          },
        ],
      },
      {
        id: 5,
        path: '/',
        label: 'Yeezy 🐐',
        subMenu: [
          {
            id: 1,
            path: `${ROUTES.YEEZY350}`,
            label: 'Yeezy 350',
          },
          {
            id: 2,
            path: `${ROUTES.YEEZY700}`,
            label: 'Yeezy 700',
          },
          {
            id: 3,
            path: `${ROUTES.YEEZYSLIDE}`,
            label: 'Yeezy Slide',
          },
        ],
      },
      // {
      //   id: 7,
      //   path: '/off-white',
      //   label: 'menu-off-white',
      // },
      {
        id: 8,
        path: '/prada/cloudbust',
        label: 'Prada 🌫',
      },
      // {
      //   id: 9,
      //   path: '/nike/GT-Cuts',
      //   label: 'menu-gtcuts',
      // },
      {
        id: 10,
        path: '/mcqueen/oversized',
        label: 'McQueen 👑',
      },
      {
        id: 12,
        path: '/dior/b22',
        label: 'Dior 💎',
      },
      {
        id: 13,
        path: '/nike/travis',
        label: 'Travis Scott 🌵',
      },
      // {
      //   id: 14,
      //   path: '/contact-us',
      //   label: 'Request An Item',
      // }
    ],
    languageMenu: [
      {
        id: 'ar',
        name: 'عربى - AR',
        value: 'ar',
        icon: <SAFlag width="20px" height="15px" />,
      },
      {
        id: 'zh',
        name: '中国人 - ZH',
        value: 'zh',
        icon: <CNFlag width="20px" height="15px" />,
      },
      {
        id: 'en',
        name: 'English - EN',
        value: 'en',
        icon: <USFlag width="20px" height="15px" />,
      },
      {
        id: 'de',
        name: 'Deutsch - DE',
        value: 'de',
        icon: <DEFlag width="20px" height="15px" />,
      },
      {
        id: 'he',
        name: 'rעברית - HE',
        value: 'he',
        icon: <ILFlag width="20px" height="15px" />,
      },
      {
        id: 'es',
        name: 'Español - ES',
        value: 'es',
        icon: <ESFlag width="20px" height="15px" />,
      },
    ],
    categoryMenu: [
      {
        id: 1,
        path: '/',
        label: 'menu-womens-fashion',
        icon: <WomenIcon />,
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: '/search?q=top-wear',
                label: 'menu-top-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=t-shit-shirtrt',
                    label: 'menu-t-shirt',
                  },
                  {
                    id: 2,
                    path: '/search?q=casual-shirts',
                    label: 'menu-casual-shirts',
                  },
                  {
                    id: 3,
                    path: '/search?q=formal-shirts',
                    label: 'menu-formal-shirts',
                  },
                  {
                    id: 4,
                    path: '/search?q=blazwers-coats',
                    label: 'menu-blazwers-coats',
                  },
                  {
                    id: 5,
                    path: '/search?q=suits',
                    label: 'menu-suits',
                  },
                  {
                    id: 6,
                    path: '/search?q=jackets',
                    label: 'menu-jackets',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=belt-scarves',
                label: 'menu-belt-scarves',
              },
              {
                id: 3,
                path: '/search?q=watches-wearables',
                label: 'menu-watches-wearables',
              },
            ],
          },
          {
            id: 2,
            columnItems: [
              {
                id: 1,
                path: '/search?q=western-wear',
                label: 'menu-western-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=dresses',
                    label: 'menu-dresses',
                  },
                  {
                    id: 2,
                    path: '/search?q=jumpsuits',
                    label: 'menu-jumpsuits',
                  },
                  {
                    id: 3,
                    path: '/search?q=tops-t-shirt',
                    label: 'menu-tops-shirts',
                  },
                  {
                    id: 4,
                    path: '/search?q=shorts-skirts',
                    label: 'menu-shorts-skirts',
                  },
                  {
                    id: 5,
                    path: '/search?q=shurgs',
                    label: 'menu-shurgs',
                  },
                  {
                    id: 6,
                    path: '/search?q=blazers',
                    label: 'menu-blazers',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=plus-size',
                label: 'menu-plus-size',
              },
              {
                id: 3,
                path: '/search?q=sunglasses-frames',
                label: 'menu-sunglasses-frames',
              },
            ],
          },
          {
            id: 3,
            columnItems: [
              {
                id: 1,
                path: '/search?q=footwear',
                label: 'menu-footwear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=flats',
                    label: 'menu-flats',
                  },
                  {
                    id: 2,
                    path: '/search?q=casual-shoes',
                    label: 'menu-casual-shoes',
                  },
                  {
                    id: 3,
                    path: '/search?q=heels',
                    label: 'menu-heels',
                  },
                  {
                    id: 4,
                    path: '/search?q=boots',
                    label: 'menu-boots',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=sports-active-wear',
                label: 'menu-sports-active-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=clothing',
                    label: 'menu-clothing',
                  },
                  {
                    id: 2,
                    path: '/search?q=footwear',
                    label: 'menu-footwear',
                  },
                  {
                    id: 3,
                    path: '/search?q=sports-accessories',
                    label: 'menu-sports-accessories',
                  },
                ],
              },
            ],
          },
        ],
        brands: [
          {
            id: 1,
            path: '/search?q=nike',
            label: 'nike',
            icon: Nike,
          },
          {
            id: 2,
            path: '/search?q=dior',
            label: 'dior',
            icon: Dior,
          },
          {
            id: 3,
            path: '/search?q=gucci',
            label: 'gucci',
            icon: Gucci,
          },
          {
            id: 4,
            path: '/search?q=gucci1',
            label: 'gucci1',
            icon: Gucci1,
          },
          {
            id: 5,
            path: '/search?q=puma',
            label: 'puma',
            icon: Puma,
          },
          {
            id: 6,
            path: '/search?q=levis',
            label: 'levis',
            icon: Levis,
          },
        ],
        banners: [
          {
            id: 1,
            path: '/search?q=winter',
            label: 'winter',
            image: Banner1,
          },
          {
            id: 2,
            path: '/search?q=summer',
            label: 'summer',
            image: Banner2,
          },
        ],
      },
      {
        id: 2,
        path: '/',
        label: 'menu-mens-fashion',
        icon: <MenIcon />,
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: '/search?q=top-wear',
                label: 'menu-top-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=t-shit-shirtrt',
                    label: 'menu-t-shirt',
                  },
                  {
                    id: 2,
                    path: '/search?q=casual-shirts',
                    label: 'menu-casual-shirts',
                  },
                  {
                    id: 3,
                    path: '/search?q=formal-shirts',
                    label: 'menu-formal-shirts',
                  },
                  {
                    id: 4,
                    path: '/search?q=blazwers-coats',
                    label: 'menu-blazwers-coats',
                  },
                  {
                    id: 5,
                    path: '/search?q=suits',
                    label: 'menu-suits',
                  },
                  {
                    id: 6,
                    path: '/search?q=jackets',
                    label: 'menu-jackets',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=belt-scarves',
                label: 'menu-belt-scarves',
              },
              {
                id: 3,
                path: '/search?q=watches-wearables',
                label: 'menu-watches-wearables',
              },
            ],
          },
          {
            id: 2,
            columnItems: [
              {
                id: 1,
                path: '/search?q=western-wear',
                label: 'menu-western-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=dresses',
                    label: 'menu-dresses',
                  },
                  {
                    id: 2,
                    path: '/search?q=jumpsuits',
                    label: 'menu-jumpsuits',
                  },
                  {
                    id: 3,
                    path: '/search?q=tops-t-shirt',
                    label: 'menu-tops-shirts',
                  },
                  {
                    id: 4,
                    path: '/search?q=shorts-skirts',
                    label: 'menu-shorts-skirts',
                  },
                  {
                    id: 5,
                    path: '/search?q=shurgs',
                    label: 'menu-shurgs',
                  },
                  {
                    id: 6,
                    path: '/search?q=blazers',
                    label: 'menu-blazers',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=plus-size',
                label: 'menu-plus-size',
              },
              {
                id: 3,
                path: '/search?q=sunglasses-frames',
                label: 'menu-sunglasses-frames',
              },
            ],
          },
          {
            id: 3,
            columnItems: [
              {
                id: 1,
                path: '/search?q=footwear',
                label: 'menu-footwear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=flats',
                    label: 'menu-flats',
                  },
                  {
                    id: 2,
                    path: '/search?q=casual-shoes',
                    label: 'menu-casual-shoes',
                  },
                  {
                    id: 3,
                    path: '/search?q=heels',
                    label: 'menu-heels',
                  },
                  {
                    id: 4,
                    path: '/search?q=boots',
                    label: 'menu-boots',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=sports-active-wear',
                label: 'menu-sports-active-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=clothing',
                    label: 'menu-clothing',
                  },
                  {
                    id: 2,
                    path: '/search?q=footwear',
                    label: 'menu-footwear',
                  },
                  {
                    id: 3,
                    path: '/search?q=sports-accessories',
                    label: 'menu-sports-accessories',
                  },
                ],
              },
            ],
          },
        ],
        brands: [
          {
            id: 1,
            path: '/search?q=nike',
            label: 'nike',
            icon: Nike,
          },
          {
            id: 2,
            path: '/search?q=dior',
            label: 'dior',
            icon: Dior,
          },
          {
            id: 3,
            path: '/search?q=gucci',
            label: 'gucci',
            icon: Gucci,
          },
          {
            id: 4,
            path: '/search?q=gucci1',
            label: 'gucci1',
            icon: Gucci1,
          },
          {
            id: 5,
            path: '/search?q=puma',
            label: 'puma',
            icon: Puma,
          },
          {
            id: 6,
            path: '/search?q=levis',
            label: 'levis',
            icon: Levis,
          },
        ],
        banners: [
          {
            id: 1,
            path: '/search?q=winter',
            label: 'winter',
            image: Banner1,
          },
          {
            id: 2,
            path: '/search?q=summer',
            label: 'summer',
            image: Banner2,
          },
        ],
      },
      {
        id: 3,
        path: '/',
        label: 'menu-watches',
        icon: <WatchIcon />,
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: '/search?q=top-wear',
                label: 'menu-top-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=t-shit-shirtrt',
                    label: 'menu-t-shirt',
                  },
                  {
                    id: 2,
                    path: '/search?q=casual-shirts',
                    label: 'menu-casual-shirts',
                  },
                  {
                    id: 3,
                    path: '/search?q=formal-shirts',
                    label: 'menu-formal-shirts',
                  },
                  {
                    id: 4,
                    path: '/search?q=blazwers-coats',
                    label: 'menu-blazwers-coats',
                  },
                  {
                    id: 5,
                    path: '/search?q=suits',
                    label: 'menu-suits',
                  },
                  {
                    id: 6,
                    path: '/search?q=jackets',
                    label: 'menu-jackets',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=belt-scarves',
                label: 'menu-belt-scarves',
              },
              {
                id: 3,
                path: '/search?q=watches-wearables',
                label: 'menu-watches-wearables',
              },
            ],
          },
          {
            id: 2,
            columnItems: [
              {
                id: 1,
                path: '/search?q=western-wear',
                label: 'menu-western-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=dresses',
                    label: 'menu-dresses',
                  },
                  {
                    id: 2,
                    path: '/search?q=jumpsuits',
                    label: 'menu-jumpsuits',
                  },
                  {
                    id: 3,
                    path: '/search?q=tops-t-shirt',
                    label: 'menu-tops-shirts',
                  },
                  {
                    id: 4,
                    path: '/search?q=shorts-skirts',
                    label: 'menu-shorts-skirts',
                  },
                  {
                    id: 5,
                    path: '/search?q=shurgs',
                    label: 'menu-shurgs',
                  },
                  {
                    id: 6,
                    path: '/search?q=blazers',
                    label: 'menu-blazers',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=plus-size',
                label: 'menu-plus-size',
              },
              {
                id: 3,
                path: '/search?q=sunglasses-frames',
                label: 'menu-sunglasses-frames',
              },
            ],
          },
          {
            id: 3,
            columnItems: [
              {
                id: 1,
                path: '/search?q=footwear',
                label: 'menu-footwear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=flats',
                    label: 'menu-flats',
                  },
                  {
                    id: 2,
                    path: '/search?q=casual-shoes',
                    label: 'menu-casual-shoes',
                  },
                  {
                    id: 3,
                    path: '/search?q=heels',
                    label: 'menu-heels',
                  },
                  {
                    id: 4,
                    path: '/search?q=boots',
                    label: 'menu-boots',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=sports-active-wear',
                label: 'menu-sports-active-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=clothing',
                    label: 'menu-clothing',
                  },
                  {
                    id: 2,
                    path: '/search?q=footwear',
                    label: 'menu-footwear',
                  },
                  {
                    id: 3,
                    path: '/search?q=sports-accessories',
                    label: 'menu-sports-accessories',
                  },
                ],
              },
            ],
          },
        ],
        brands: [
          {
            id: 1,
            path: '/search?q=nike',
            label: 'nike',
            icon: Nike,
          },
          {
            id: 2,
            path: '/search?q=dior',
            label: 'dior',
            icon: Dior,
          },
          {
            id: 3,
            path: '/search?q=gucci',
            label: 'gucci',
            icon: Gucci,
          },
          {
            id: 4,
            path: '/search?q=gucci1',
            label: 'gucci1',
            icon: Gucci1,
          },
          {
            id: 5,
            path: '/search?q=puma',
            label: 'puma',
            icon: Puma,
          },
          {
            id: 6,
            path: '/search?q=levis',
            label: 'levis',
            icon: Levis,
          },
        ],
        banners: [
          {
            id: 1,
            path: '/search?q=winter',
            label: 'winter',
            image: Banner1,
          },
          {
            id: 2,
            path: '/search?q=summer',
            label: 'summer',
            image: Banner2,
          },
        ],
      },
      {
        id: 4,
        path: '/',
        label: 'menu-wallets',
        icon: <WalletIcon />,
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: '/search?q=top-wear',
                label: 'menu-top-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=t-shit-shirtrt',
                    label: 'menu-t-shirt',
                  },
                  {
                    id: 2,
                    path: '/search?q=casual-shirts',
                    label: 'menu-casual-shirts',
                  },
                  {
                    id: 3,
                    path: '/search?q=formal-shirts',
                    label: 'menu-formal-shirts',
                  },
                  {
                    id: 4,
                    path: '/search?q=blazwers-coats',
                    label: 'menu-blazwers-coats',
                  },
                  {
                    id: 5,
                    path: '/search?q=suits',
                    label: 'menu-suits',
                  },
                  {
                    id: 6,
                    path: '/search?q=jackets',
                    label: 'menu-jackets',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=belt-scarves',
                label: 'menu-belt-scarves',
              },
              {
                id: 3,
                path: '/search?q=watches-wearables',
                label: 'menu-watches-wearables',
              },
            ],
          },
          {
            id: 2,
            columnItems: [
              {
                id: 1,
                path: '/search?q=western-wear',
                label: 'menu-western-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=dresses',
                    label: 'menu-dresses',
                  },
                  {
                    id: 2,
                    path: '/search?q=jumpsuits',
                    label: 'menu-jumpsuits',
                  },
                  {
                    id: 3,
                    path: '/search?q=tops-t-shirt',
                    label: 'menu-tops-shirts',
                  },
                  {
                    id: 4,
                    path: '/search?q=shorts-skirts',
                    label: 'menu-shorts-skirts',
                  },
                  {
                    id: 5,
                    path: '/search?q=shurgs',
                    label: 'menu-shurgs',
                  },
                  {
                    id: 6,
                    path: '/search?q=blazers',
                    label: 'menu-blazers',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=plus-size',
                label: 'menu-plus-size',
              },
              {
                id: 3,
                path: '/search?q=sunglasses-frames',
                label: 'menu-sunglasses-frames',
              },
            ],
          },
          {
            id: 3,
            columnItems: [
              {
                id: 1,
                path: '/search?q=footwear',
                label: 'menu-footwear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=flats',
                    label: 'menu-flats',
                  },
                  {
                    id: 2,
                    path: '/search?q=casual-shoes',
                    label: 'menu-casual-shoes',
                  },
                  {
                    id: 3,
                    path: '/search?q=heels',
                    label: 'menu-heels',
                  },
                  {
                    id: 4,
                    path: '/search?q=boots',
                    label: 'menu-boots',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=sports-active-wear',
                label: 'menu-sports-active-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=clothing',
                    label: 'menu-clothing',
                  },
                  {
                    id: 2,
                    path: '/search?q=footwear',
                    label: 'menu-footwear',
                  },
                  {
                    id: 3,
                    path: '/search?q=sports-accessories',
                    label: 'menu-sports-accessories',
                  },
                ],
              },
            ],
          },
        ],
        brands: [
          {
            id: 1,
            path: '/search?q=nike',
            label: 'nike',
            icon: Nike,
          },
          {
            id: 2,
            path: '/search?q=dior',
            label: 'dior',
            icon: Dior,
          },
          {
            id: 3,
            path: '/search?q=gucci',
            label: 'gucci',
            icon: Gucci,
          },
          {
            id: 4,
            path: '/search?q=gucci1',
            label: 'gucci1',
            icon: Gucci1,
          },
          {
            id: 5,
            path: '/search?q=puma',
            label: 'puma',
            icon: Puma,
          },
          {
            id: 6,
            path: '/search?q=levis',
            label: 'levis',
            icon: Levis,
          },
        ],
        banners: [
          {
            id: 1,
            path: '/search?q=winter',
            label: 'winter',
            image: Banner1,
          },
          {
            id: 2,
            path: '/search?q=summer',
            label: 'summer',
            image: Banner2,
          },
        ],
      },
      {
        id: 5,
        path: '/',
        label: 'menu-bags',
        icon: <BagIcon />,
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: '/search?q=top-wear',
                label: 'menu-top-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=t-shit-shirtrt',
                    label: 'menu-t-shirt',
                  },
                  {
                    id: 2,
                    path: '/search?q=casual-shirts',
                    label: 'menu-casual-shirts',
                  },
                  {
                    id: 3,
                    path: '/search?q=formal-shirts',
                    label: 'menu-formal-shirts',
                  },
                  {
                    id: 4,
                    path: '/search?q=blazwers-coats',
                    label: 'menu-blazwers-coats',
                  },
                  {
                    id: 5,
                    path: '/search?q=suits',
                    label: 'menu-suits',
                  },
                  {
                    id: 6,
                    path: '/search?q=jackets',
                    label: 'menu-jackets',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=belt-scarves',
                label: 'menu-belt-scarves',
              },
              {
                id: 3,
                path: '/search?q=watches-wearables',
                label: 'menu-watches-wearables',
              },
            ],
          },
          {
            id: 2,
            columnItems: [
              {
                id: 1,
                path: '/search?q=western-wear',
                label: 'menu-western-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=dresses',
                    label: 'menu-dresses',
                  },
                  {
                    id: 2,
                    path: '/search?q=jumpsuits',
                    label: 'menu-jumpsuits',
                  },
                  {
                    id: 3,
                    path: '/search?q=tops-t-shirt',
                    label: 'menu-tops-shirts',
                  },
                  {
                    id: 4,
                    path: '/search?q=shorts-skirts',
                    label: 'menu-shorts-skirts',
                  },
                  {
                    id: 5,
                    path: '/search?q=shurgs',
                    label: 'menu-shurgs',
                  },
                  {
                    id: 6,
                    path: '/search?q=blazers',
                    label: 'menu-blazers',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=plus-size',
                label: 'menu-plus-size',
              },
              {
                id: 3,
                path: '/search?q=sunglasses-frames',
                label: 'menu-sunglasses-frames',
              },
            ],
          },
          {
            id: 3,
            columnItems: [
              {
                id: 1,
                path: '/search?q=footwear',
                label: 'menu-footwear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=flats',
                    label: 'menu-flats',
                  },
                  {
                    id: 2,
                    path: '/search?q=casual-shoes',
                    label: 'menu-casual-shoes',
                  },
                  {
                    id: 3,
                    path: '/search?q=heels',
                    label: 'menu-heels',
                  },
                  {
                    id: 4,
                    path: '/search?q=boots',
                    label: 'menu-boots',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=sports-active-wear',
                label: 'menu-sports-active-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=clothing',
                    label: 'menu-clothing',
                  },
                  {
                    id: 2,
                    path: '/search?q=footwear',
                    label: 'menu-footwear',
                  },
                  {
                    id: 3,
                    path: '/search?q=sports-accessories',
                    label: 'menu-sports-accessories',
                  },
                ],
              },
            ],
          },
        ],
        brands: [
          {
            id: 1,
            path: '/search?q=nike',
            label: 'nike',
            icon: Nike,
          },
          {
            id: 2,
            path: '/search?q=dior',
            label: 'dior',
            icon: Dior,
          },
          {
            id: 3,
            path: '/search?q=gucci',
            label: 'gucci',
            icon: Gucci,
          },
          {
            id: 4,
            path: '/search?q=gucci1',
            label: 'gucci1',
            icon: Gucci1,
          },
          {
            id: 5,
            path: '/search?q=puma',
            label: 'puma',
            icon: Puma,
          },
          {
            id: 6,
            path: '/search?q=levis',
            label: 'levis',
            icon: Levis,
          },
        ],
        banners: [
          {
            id: 1,
            path: '/search?q=winter',
            label: 'winter',
            image: Banner1,
          },
          {
            id: 2,
            path: '/search?q=summer',
            label: 'summer',
            image: Banner2,
          },
        ],
      },
      {
        id: 6,
        path: '/',
        label: 'menu-jewelry',
        icon: <JewelryIcon />,
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: '/search?q=top-wear',
                label: 'menu-top-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=t-shit-shirtrt',
                    label: 'menu-t-shirt',
                  },
                  {
                    id: 2,
                    path: '/search?q=casual-shirts',
                    label: 'menu-casual-shirts',
                  },
                  {
                    id: 3,
                    path: '/search?q=formal-shirts',
                    label: 'menu-formal-shirts',
                  },
                  {
                    id: 4,
                    path: '/search?q=blazwers-coats',
                    label: 'menu-blazwers-coats',
                  },
                  {
                    id: 5,
                    path: '/search?q=suits',
                    label: 'menu-suits',
                  },
                  {
                    id: 6,
                    path: '/search?q=jackets',
                    label: 'menu-jackets',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=belt-scarves',
                label: 'menu-belt-scarves',
              },
              {
                id: 3,
                path: '/search?q=watches-wearables',
                label: 'menu-watches-wearables',
              },
            ],
          },
          {
            id: 2,
            columnItems: [
              {
                id: 1,
                path: '/search?q=western-wear',
                label: 'menu-western-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=dresses',
                    label: 'menu-dresses',
                  },
                  {
                    id: 2,
                    path: '/search?q=jumpsuits',
                    label: 'menu-jumpsuits',
                  },
                  {
                    id: 3,
                    path: '/search?q=tops-t-shirt',
                    label: 'menu-tops-shirts',
                  },
                  {
                    id: 4,
                    path: '/search?q=shorts-skirts',
                    label: 'menu-shorts-skirts',
                  },
                  {
                    id: 5,
                    path: '/search?q=shurgs',
                    label: 'menu-shurgs',
                  },
                  {
                    id: 6,
                    path: '/search?q=blazers',
                    label: 'menu-blazers',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=plus-size',
                label: 'menu-plus-size',
              },
              {
                id: 3,
                path: '/search?q=sunglasses-frames',
                label: 'menu-sunglasses-frames',
              },
            ],
          },
          {
            id: 3,
            columnItems: [
              {
                id: 1,
                path: '/search?q=footwear',
                label: 'menu-footwear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=flats',
                    label: 'menu-flats',
                  },
                  {
                    id: 2,
                    path: '/search?q=casual-shoes',
                    label: 'menu-casual-shoes',
                  },
                  {
                    id: 3,
                    path: '/search?q=heels',
                    label: 'menu-heels',
                  },
                  {
                    id: 4,
                    path: '/search?q=boots',
                    label: 'menu-boots',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=sports-active-wear',
                label: 'menu-sports-active-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=clothing',
                    label: 'menu-clothing',
                  },
                  {
                    id: 2,
                    path: '/search?q=footwear',
                    label: 'menu-footwear',
                  },
                  {
                    id: 3,
                    path: '/search?q=sports-accessories',
                    label: 'menu-sports-accessories',
                  },
                ],
              },
            ],
          },
        ],
        brands: [
          {
            id: 1,
            path: '/search?q=nike',
            label: 'nike',
            icon: Nike,
          },
          {
            id: 2,
            path: '/search?q=dior',
            label: 'dior',
            icon: Dior,
          },
          {
            id: 3,
            path: '/search?q=gucci',
            label: 'gucci',
            icon: Gucci,
          },
          {
            id: 4,
            path: '/search?q=gucci1',
            label: 'gucci1',
            icon: Gucci1,
          },
          {
            id: 5,
            path: '/search?q=puma',
            label: 'puma',
            icon: Puma,
          },
          {
            id: 6,
            path: '/search?q=levis',
            label: 'levis',
            icon: Levis,
          },
        ],
        banners: [
          {
            id: 1,
            path: '/search?q=winter',
            label: 'winter',
            image: Banner1,
          },
          {
            id: 2,
            path: '/search?q=summer',
            label: 'summer',
            image: Banner2,
          },
        ],
      },
      {
        id: 7,
        path: '/',
        label: 'menu-sunglasses',
        icon: <SunglassIcon />,
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: '/search?q=top-wear',
                label: 'menu-top-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=t-shit-shirtrt',
                    label: 'menu-t-shirt',
                  },
                  {
                    id: 2,
                    path: '/search?q=casual-shirts',
                    label: 'menu-casual-shirts',
                  },
                  {
                    id: 3,
                    path: '/search?q=formal-shirts',
                    label: 'menu-formal-shirts',
                  },
                  {
                    id: 4,
                    path: '/search?q=blazwers-coats',
                    label: 'menu-blazwers-coats',
                  },
                  {
                    id: 5,
                    path: '/search?q=suits',
                    label: 'menu-suits',
                  },
                  {
                    id: 6,
                    path: '/search?q=jackets',
                    label: 'menu-jackets',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=belt-scarves',
                label: 'menu-belt-scarves',
              },
              {
                id: 3,
                path: '/search?q=watches-wearables',
                label: 'menu-watches-wearables',
              },
            ],
          },
          {
            id: 2,
            columnItems: [
              {
                id: 1,
                path: '/search?q=western-wear',
                label: 'menu-western-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=dresses',
                    label: 'menu-dresses',
                  },
                  {
                    id: 2,
                    path: '/search?q=jumpsuits',
                    label: 'menu-jumpsuits',
                  },
                  {
                    id: 3,
                    path: '/search?q=tops-t-shirt',
                    label: 'menu-tops-shirts',
                  },
                  {
                    id: 4,
                    path: '/search?q=shorts-skirts',
                    label: 'menu-shorts-skirts',
                  },
                  {
                    id: 5,
                    path: '/search?q=shurgs',
                    label: 'menu-shurgs',
                  },
                  {
                    id: 6,
                    path: '/search?q=blazers',
                    label: 'menu-blazers',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=plus-size',
                label: 'menu-plus-size',
              },
              {
                id: 3,
                path: '/search?q=sunglasses-frames',
                label: 'menu-sunglasses-frames',
              },
            ],
          },
          {
            id: 3,
            columnItems: [
              {
                id: 1,
                path: '/search?q=footwear',
                label: 'menu-footwear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=flats',
                    label: 'menu-flats',
                  },
                  {
                    id: 2,
                    path: '/search?q=casual-shoes',
                    label: 'menu-casual-shoes',
                  },
                  {
                    id: 3,
                    path: '/search?q=heels',
                    label: 'menu-heels',
                  },
                  {
                    id: 4,
                    path: '/search?q=boots',
                    label: 'menu-boots',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=sports-active-wear',
                label: 'menu-sports-active-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=clothing',
                    label: 'menu-clothing',
                  },
                  {
                    id: 2,
                    path: '/search?q=footwear',
                    label: 'menu-footwear',
                  },
                  {
                    id: 3,
                    path: '/search?q=sports-accessories',
                    label: 'menu-sports-accessories',
                  },
                ],
              },
            ],
          },
        ],
        brands: [
          {
            id: 1,
            path: '/search?q=nike',
            label: 'nike',
            icon: Nike,
          },
          {
            id: 2,
            path: '/search?q=dior',
            label: 'dior',
            icon: Dior,
          },
          {
            id: 3,
            path: '/search?q=gucci',
            label: 'gucci',
            icon: Gucci,
          },
          {
            id: 4,
            path: '/search?q=gucci1',
            label: 'gucci1',
            icon: Gucci1,
          },
          {
            id: 5,
            path: '/search?q=puma',
            label: 'puma',
            icon: Puma,
          },
          {
            id: 6,
            path: '/search?q=levis',
            label: 'levis',
            icon: Levis,
          },
        ],
        banners: [
          {
            id: 1,
            path: '/search?q=winter',
            label: 'winter',
            image: Banner1,
          },
          {
            id: 2,
            path: '/search?q=summer',
            label: 'summer',
            image: Banner2,
          },
        ],
      },
      {
        id: 8,
        path: '/',
        label: 'menu-sneakers',
        icon: <SneakerIcon />,
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: '/search?q=top-wear',
                label: 'menu-top-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=t-shit-shirtrt',
                    label: 'menu-t-shirt',
                  },
                  {
                    id: 2,
                    path: '/search?q=casual-shirts',
                    label: 'menu-casual-shirts',
                  },
                  {
                    id: 3,
                    path: '/search?q=formal-shirts',
                    label: 'menu-formal-shirts',
                  },
                  {
                    id: 4,
                    path: '/search?q=blazwers-coats',
                    label: 'menu-blazwers-coats',
                  },
                  {
                    id: 5,
                    path: '/search?q=suits',
                    label: 'menu-suits',
                  },
                  {
                    id: 6,
                    path: '/search?q=jackets',
                    label: 'menu-jackets',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=belt-scarves',
                label: 'menu-belt-scarves',
              },
              {
                id: 3,
                path: '/search?q=watches-wearables',
                label: 'menu-watches-wearables',
              },
            ],
          },
          {
            id: 2,
            columnItems: [
              {
                id: 1,
                path: '/search?q=western-wear',
                label: 'menu-western-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=dresses',
                    label: 'menu-dresses',
                  },
                  {
                    id: 2,
                    path: '/search?q=jumpsuits',
                    label: 'menu-jumpsuits',
                  },
                  {
                    id: 3,
                    path: '/search?q=tops-t-shirt',
                    label: 'menu-tops-shirts',
                  },
                  {
                    id: 4,
                    path: '/search?q=shorts-skirts',
                    label: 'menu-shorts-skirts',
                  },
                  {
                    id: 5,
                    path: '/search?q=shurgs',
                    label: 'menu-shurgs',
                  },
                  {
                    id: 6,
                    path: '/search?q=blazers',
                    label: 'menu-blazers',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=plus-size',
                label: 'menu-plus-size',
              },
              {
                id: 3,
                path: '/search?q=sunglasses-frames',
                label: 'menu-sunglasses-frames',
              },
            ],
          },
          {
            id: 3,
            columnItems: [
              {
                id: 1,
                path: '/search?q=footwear',
                label: 'menu-footwear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=flats',
                    label: 'menu-flats',
                  },
                  {
                    id: 2,
                    path: '/search?q=casual-shoes',
                    label: 'menu-casual-shoes',
                  },
                  {
                    id: 3,
                    path: '/search?q=heels',
                    label: 'menu-heels',
                  },
                  {
                    id: 4,
                    path: '/search?q=boots',
                    label: 'menu-boots',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=sports-active-wear',
                label: 'menu-sports-active-wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=clothing',
                    label: 'menu-clothing',
                  },
                  {
                    id: 2,
                    path: '/search?q=footwear',
                    label: 'menu-footwear',
                  },
                  {
                    id: 3,
                    path: '/search?q=sports-accessories',
                    label: 'menu-sports-accessories',
                  },
                ],
              },
            ],
          },
        ],
        brands: [
          {
            id: 1,
            path: '/search?q=nike',
            label: 'nike',
            icon: Nike,
          },
          {
            id: 2,
            path: '/search?q=dior',
            label: 'dior',
            icon: Dior,
          },
          {
            id: 3,
            path: '/search?q=gucci',
            label: 'gucci',
            icon: Gucci,
          },
          {
            id: 4,
            path: '/search?q=gucci1',
            label: 'gucci1',
            icon: Gucci1,
          },
          {
            id: 5,
            path: '/search?q=puma',
            label: 'puma',
            icon: Puma,
          },
          {
            id: 6,
            path: '/search?q=levis',
            label: 'levis',
            icon: Levis,
          },
        ],
        banners: [
          {
            id: 1,
            path: '/search?q=winter',
            label: 'winter',
            image: Banner1,
          },
          {
            id: 2,
            path: '/search?q=summer',
            label: 'summer',
            image: Banner2,
          },
        ],
      },
    ],
    pagesMenu: [
      {
        id: 1,
        path: '/search',
        label: 'menu-deals-today',
        icon: <ThunderIcon className="w-3 h-auto" />,
      },
      {
        id: 2,
        path: '/',
        label: 'menu-offers',
      },
      {
        id: 3,
        path: '/process',
        label: 'menu-our-process',
      },
      {
        id: 4,
        path: '/contact-us',
        label: 'menu-contact',
      },
    ],
  },
};
