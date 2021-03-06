// Lizards
import Accanthurus from 'assets/Lizards/accanthurus.webp';
import Phelsuma from 'assets/Lizards/phelsuma.webp';
import Macularius from 'assets/Lizards/macularius.webp';
import Ciliatus from 'assets/Lizards/ciliatus.webp';
import Auriculatus from 'assets/Lizards/auriculatus.webp';
import Chlamydosaurus from 'assets/Lizards/chlamydosaurus.webp';
import Omanosaura from 'assets/Lizards/omanosaura.webp';
import Calyptratus from 'assets/Lizards/calyptratus.webp';
import Smaug from 'assets/Lizards/smaug.webp';
import Tokay from 'assets/Lizards/tokay.webp';
import Leachianus from 'assets/Lizards/leachianus.webp';

// Snakes
import Spilota from 'assets/Snakes/spilota.webp';
import Regius from 'assets/Snakes/regius.webp';
import Nigrita from 'assets/Snakes/nigrita.webp';
import Constrictor from 'assets/Snakes/constrictor.webp';
import Virdis from 'assets/Snakes/virdis.webp';
import Eunectes from 'assets/Snakes/eunectes.webp';
import Triangulum from 'assets/Snakes/triangulum.webp';

// Tarantulas
import Blondi from 'assets/Tarantulas/blondi.webp';
import Chromatopelma from 'assets/Tarantulas/chromatopelma.webp';
import Auratum from 'assets/Tarantulas/auratum.webp';
import Caribena from 'assets/Tarantulas/caribena.webp';
import Irminia from 'assets/Tarantulas/irminia.webp';
import Seladonia from 'assets/Tarantulas/seladonia.webp';
import Xenesthis from 'assets/Tarantulas/xenesthis.webp';
import Hamorii from 'assets/Tarantulas/hamorii.webp';
import Chromatus from 'assets/Tarantulas/chromatus.webp';

// Scorpions
import Imperator from 'assets/Scorpions/imperator.webp';
import Petersii from 'assets/Scorpions/petersii.webp';
import Carpathicus from 'assets/Scorpions/carpathicus.webp';
import Liocheles from 'assets/Scorpions/liocheles.webp';
import Hadrurus from 'assets/Scorpions/hadrurus.webp';
import Cavimanus from 'assets/Scorpions/cavimanus.webp';

// accessories
import Tweezers from 'assets/Accessories/tweezers.webp';
import Terrarium30 from 'assets/Accessories/terrarium30.webp';
import Cork from 'assets/Accessories/cork.webp';
import Termometr from 'assets/Accessories/termometr.webp';
import Terrarium60 from 'assets/Accessories/terrarium60.webp';
import Liane from 'assets/Accessories/liane.webp';
import Arcadia from 'assets/Accessories/arcadia.webp';
import Hideouts from 'assets/Accessories/hideouts.webp';
import Terrarium90 from 'assets/Accessories/terrarium90.webp';
import Multivitamin from 'assets/Accessories/multivitamin.webp';

// articles
import Scorpion from 'assets/articles/scorpion.webp';
import Insularis from 'assets/articles/insularis.webp';
import Iguana from 'assets/articles/iguana.webp';
import Terra from 'assets/articles/terra.webp';

import { description } from './SpeciesDescriptions';

export const lizards = [
  {
    id: 1,
    species: 'Varanus Acanthurus',
    name: 'Spiny-tailed Monitor',
    birth: 'CB2021',
    price: 1199,
    picture: Accanthurus,
    available: 'Babies',
    stock: 5,
    description: description.Accanthurus.description,
    FeedingAndSupplementation:
      description.Accanthurus.FeedingAndSupplementation,
    housing: description.Accanthurus.Housing,
    count: 1,
    order: 'reptiles',
    category: 'lizards',
  },

  {
    id: 2,
    species: 'Phelsuma grandis',
    name: 'Giant Day Gecko',
    birth: 'CB2019',
    price: 389,
    picture: Phelsuma,
    available: 'Females',
    stock: 3,
    description: description.Phelsuma.description,
    FeedingAndSupplementation:
      description.Phelsuma.FeedingAndSupplementation,
    housing: description.Phelsuma.Housing,
    count: 1,
    order: 'reptiles',
    category: 'lizards',
  },
  {
    id: 3,
    species: 'Eublepharis Macularius',
    name: 'Leopard Gecko',
    birth: 'CB2020',
    price: 89,
    picture: Macularius,
    available: 'Babies',
    stock: 9,
    description: description.Eublepharis.description,
    FeedingAndSupplementation:
      description.Eublepharis.FeedingAndSupplementation,
    housing: description.Eublepharis.Housing,
    count: 1,
    order: 'reptiles',
    category: 'lizards',
  },
  {
    id: 4,
    species: 'Correlophus Ciliatus ',
    name: 'Crested Gecko',
    birth: 'CB2018',
    price: 269,
    picture: Ciliatus,
    available: 'Males and Females',
    stock: 4,
    description: description.Ciliatus.description,
    FeedingAndSupplementation:
      description.Ciliatus.FeedingAndSupplementation,
    housing: description.Ciliatus.Housing,
    count: 1,
    order: 'reptiles',
    category: 'lizards',
  },
  {
    id: 5,
    species: 'Rhacodactylus Auriculatus',
    name: 'Gargoyle Gecko',
    birth: 'CB2021',
    price: 849,
    picture: Auriculatus,
    available: 'Males and Females',
    stock: 2,
    description: description.Auriculatus.description,
    FeedingAndSupplementation:
      description.Auriculatus.FeedingAndSupplementation,
    housing: description.Auriculatus.Housing,
    count: 1,
    order: 'reptiles',
    category: 'lizards',
  },
  {
    id: 6,
    species: 'Chlamydosaurus Kingii',
    name: 'Frilled Dragon ',
    birth: 'CB2021',
    price: 949,
    picture: Chlamydosaurus,
    available: 'Babies',
    stock: 4,
    description: description.Chlamydosaurus.description,
    FeedingAndSupplementation:
      description.Chlamydosaurus.FeedingAndSupplementation,
    housing: description.Chlamydosaurus.Housing,
    count: 1,
    order: 'reptiles',
    category: 'lizards',
  },
  {
    id: 7,
    species: 'Omanosaura Jayakari',
    name: 'Jayakar lizard',
    birth: 'CB2020',
    price: 449,
    picture: Omanosaura,
    available: 'Babies',
    stock: 7,
    description: description.Omanosaura.description,
    FeedingAndSupplementation:
      description.Omanosaura.FeedingAndSupplementation,
    housing: description.Omanosaura.Housing,
    count: 1,
    order: 'reptiles',
    category: 'lizards',
  },
  {
    id: 8,
    species: 'Chamaeleo Calyptratus ',
    name: 'Yemen Chameleon',
    birth: 'CB2021',
    price: 249,
    picture: Calyptratus,
    available: 'Babies',
    stock: 15,
    description: description.Calyptratus.description,
    FeedingAndSupplementation:
      description.Calyptratus.FeedingAndSupplementation,
    housing: description.Calyptratus.Housing,
    count: 1,
    order: 'reptiles',
    category: 'lizards',
  },
  {
    id: 9,
    species: 'Smaug Giganteus',
    name: 'Sungazer',
    birth: 'CB2018',
    price: 5999,
    picture: Smaug,
    available: 'Male and Female',
    stock: 2,
    description: description.Smaug.description,
    FeedingAndSupplementation:
      description.Smaug.FeedingAndSupplementation,
    housing: description.Smaug.Housing,
    count: 1,
    order: 'reptiles',
    category: 'lizards',
  },
  {
    id: 10,
    species: 'Gekko gecko',
    name: 'Tokay Gecko',
    birth: 'CB2020',
    price: 149,
    picture: Tokay,
    available: 'Babies',
    stock: 4,
    description: description.Tokay.description,
    FeedingAndSupplementation:
      description.Tokay.FeedingAndSupplementation,
    housing: description.Tokay.Housing,
    count: 1,
    order: 'reptiles',
    category: 'lizards',
  },
  {
    id: 11,
    species: 'Rhacodactylus Leachianus',
    name: 'Caledonian Giant Gecko',
    birth: 'CB2021',
    price: 2329,
    picture: Leachianus,
    available: 'Babies',
    stock: 5,
    description: description.Leachianus.description,
    FeedingAndSupplementation:
      description.Leachianus.FeedingAndSupplementation,
    housing: description.Leachianus.Housing,
    count: 1,
    order: 'reptiles',
    category: 'lizards',
  },
];

export const snakes = [
  {
    id: 12,
    species: 'Morelia Spilota',
    name: 'Carpet Python',
    birth: 'CB2019',
    price: 299,
    picture: Spilota,
    available: 'Males and Females',
    stock: 4,
    description: description.Spilota.description,
    FeedingAndSupplementation:
      description.Spilota.FeedingAndSupplementation,
    housing: description.Spilota.Housing,
    count: 1,
    order: 'reptiles',
    category: 'snakes',
  },
  {
    id: 13,
    species: 'Python Regius',
    name: 'Ball Python',
    birth: 'CB2019',
    price: 169,
    picture: Regius,
    available: 'Males',
    stock: 2,
    description: description.Regius.description,
    FeedingAndSupplementation:
      description.Regius.FeedingAndSupplementation,
    housing: description.Regius.Housing,
    count: 1,
    order: 'reptiles',
    category: 'snakes',
  },
  {
    id: 14,
    species: 'Lampropeltis Nigrita',
    name: 'Mexican Black Kingsnake',
    birth: 'CB2020',
    price: 899,
    picture: Nigrita,
    available: 'Babies',
    stock: 6,
    description: description.Nigrita.description,
    FeedingAndSupplementation:
      description.Nigrita.FeedingAndSupplementation,
    housing: description.Nigrita.Housing,
    count: 1,
    order: 'reptiles',
    category: 'snakes',
  },
  {
    id: 15,
    species: 'Boa Constrictor',
    name: 'Red-tailed Boa',
    birth: 'CB2021',
    price: 239,
    picture: Constrictor,
    available: 'Babies',
    stock: 9,
    description: description.Constrictor.description,
    FeedingAndSupplementation:
      description.Constrictor.FeedingAndSupplementation,
    housing: description.Constrictor.Housing,
    count: 1,
    order: 'reptiles',
    category: 'snakes',
  },
  {
    id: 16,
    species: 'Morelia Virdis',
    name: 'Green Tree Python',
    birth: 'CB2020',
    price: 2689,
    picture: Virdis,
    available: 'Babies',
    stock: 4,
    description: description.Virdis.description,
    FeedingAndSupplementation:
      description.Virdis.FeedingAndSupplementation,
    housing: description.Virdis.Housing,
    count: 1,
    order: 'reptiles',
    category: 'snakes',
  },
  {
    id: 17,
    species: 'Eunectes Murinus',
    name: 'Green Anaconda',
    birth: 'CB2021',
    price: 799,
    picture: Eunectes,
    available: 'Babies',
    stock: 12,
    description: description.Eunectes.description,
    FeedingAndSupplementation:
      description.Eunectes.FeedingAndSupplementation,
    housing: description.Eunectes.Housing,
    count: 1,
    order: 'reptiles',
    category: 'snakes',
  },
  {
    id: 18,
    species: 'Lampropeltis triangulum',
    name: 'Milk snake',
    birth: 'CB2018',
    price: 229,
    picture: Triangulum,
    available: 'Males and Females',
    stock: 3,
    description: description.Triangulum.description,
    FeedingAndSupplementation:
      description.Triangulum.FeedingAndSupplementation,
    housing: description.Triangulum.Housing,
    count: 1,
    order: 'reptiles',
    category: 'snakes',
  },
];

export const tarantulas = [
  {
    id: 19,
    species: 'Theraphosa Blondi',
    name: 'Goliath Birdeater',
    birth: 'L2',
    price: 299,
    picture: Blondi,
    available: 'Only Babies',
    stock: 45,
    description: description.Blondi.description,
    FeedingAndSupplementation:
      description.Blondi.FeedingAndSupplementation,
    housing: description.Blondi.Housing,
    count: 1,
    order: 'arachnids',
    category: 'tarantulas',
  },
  {
    id: 20,
    species: 'Chromatopelma Cyaneopubescens ',
    name: 'Greenbottle Blue Tarantula',
    birth: 'L1',
    price: 39,
    picture: Chromatopelma,
    available: 'Only Babies',
    stock: 32,
    description: description.Chromatopelma.description,
    FeedingAndSupplementation:
      description.Chromatopelma.FeedingAndSupplementation,
    housing: description.Chromatopelma.Housing,
    count: 1,
    order: 'arachnids',
    category: 'tarantulas',
  },
  {
    id: 21,
    species: 'Brapychelma Auratum',
    name: 'Mexican Flame Knee Tarantula',
    birth: 'L4',
    price: 99,
    picture: Auratum,
    available: 'Only Babies',
    stock: 6,
    description: description.Auratum.description,
    FeedingAndSupplementation:
      description.Auratum.FeedingAndSupplementation,
    housing: description.Auratum.Housing,
    count: 1,
    order: 'arachnids',
    category: 'tarantulas',
  },
  {
    id: 22,
    species: 'Caribena versicolor',
    name: 'Antilles Pinktoe Tarantula',
    birth: 'L2',
    price: 49,
    picture: Caribena,
    available: 'Only Babies',
    stock: 43,
    description: description.Caribena.description,
    FeedingAndSupplementation:
      description.Caribena.FeedingAndSupplementation,
    housing: description.Caribena.Housing,
    count: 1,
    order: 'arachnids',
    category: 'tarantulas',
  },
  {
    id: 23,
    species: 'Psalmopoeus Irminia',
    name: 'Venezuelan suntiger',
    birth: 'L5',
    price: 14,
    picture: Irminia,
    available: 'Only Babies',
    stock: 43,
    description: description.Irminia.description,
    FeedingAndSupplementation:
      description.Irminia.FeedingAndSupplementation,
    housing: description.Irminia.Housing,
    count: 1,
    order: 'arachnids',
    category: 'tarantulas',
  },
  {
    id: 24,
    species: 'Typhochlaena Seladonia',
    birth: 'L1',
    price: 399,
    picture: Seladonia,
    available: 'Babies',
    stock: 26,
    description: description.Seladonia.description,
    FeedingAndSupplementation:
      description.Seladonia.FeedingAndSupplementation,
    housing: description.Seladonia.Housing,
    count: 1,
    order: 'arachnids',
    category: 'tarantulas',
  },
  {
    id: 25,
    species: 'Xenesthis Immanis',
    name: 'Colombian Lesserblack',
    birth: 'L2',
    price: 349,
    picture: Xenesthis,
    available: 'Babies',
    stock: 43,
    description: description.Xenesthis.description,
    FeedingAndSupplementation:
      description.Xenesthis.FeedingAndSupplementation,
    housing: description.Xenesthis.Housing,
    count: 1,
    order: 'arachnids',
    category: 'tarantulas',
  },
  {
    id: 26,
    species: 'Brachypelma Hamorii',
    name: 'Antilles Pinktoe Tarantula',
    birth: 'L3',
    price: 29,
    picture: Hamorii,
    available: 'Babies',
    stock: 43,
    description: description.Hamorii.description,
    FeedingAndSupplementation:
      description.Hamorii.FeedingAndSupplementation,
    housing: description.Hamorii.Housing,
    count: 1,
    order: 'arachnids',
    category: 'tarantulas',
  },
  {
    id: 27,
    species: 'Nhandu Chromtus',
    name: 'Brazilian Red and White Tarantula',
    birth: 'L8',
    price: 49,
    picture: Chromatus,
    available: 'Babies',
    stock: 43,
    description: description.Chromatus.description,
    FeedingAndSupplementation:
      description.Chromatus.FeedingAndSupplementation,
    housing: description.Chromatus.Housing,
    count: 1,
    order: 'arachnids',
    category: 'tarantulas',
  },
];

export const scorpions = [
  {
    id: 28,
    species: 'Pandinus Imperator',
    name: ' Emperor Scorpion',
    birth: 'L2',
    price: 159,
    picture: Imperator,
    available: 'Only Babies',
    stock: 5,
    description: description.Pandinus.description,
    FeedingAndSupplementation:
      description.Pandinus.FeedingAndSupplementation,
    housing: description.Pandinus.Housing,
    count: 1,
    order: 'arachnids',
    category: 'scorpions',
  },
  {
    id: 29,
    species: 'Heterometrus Petersii',
    name: 'Giant Forest Scorpion',
    birth: 'L6',
    price: 34,
    picture: Petersii,
    available: 'Babies',
    stock: 8,
    description: description.Petersii.description,
    FeedingAndSupplementation:
      description.Petersii.FeedingAndSupplementation,
    housing: description.Petersii.Housing,
    count: 1,
    order: 'arachnids',
    category: 'scorpions',
  },
  {
    id: 30,
    species: 'Euscorpius Carpathicus',
    name: 'Small Wood Scorpion',
    birth: 'L4',
    price: 14,
    picture: Carpathicus,
    available: 'Babies',
    stock: 8,
    description: description.Carpathicus.description,
    FeedingAndSupplementation:
      description.Carpathicus.FeedingAndSupplementation,
    housing: description.Carpathicus.Housing,
    count: 1,
    order: 'arachnids',
    category: 'scorpions',
  },
  {
    id: 31,
    species: 'Liocheles australasiae',
    name: 'Small Wood Scorpion',
    birth: 'L6',
    price: 19,
    picture: Liocheles,
    available: 'Females and Babies',
    stock: 15,
    description: description.Liocheles.description,
    FeedingAndSupplementation:
      description.Liocheles.FeedingAndSupplementation,
    housing: description.Liocheles.Housing,
    count: 1,
    order: 'arachnids',
    category: 'scorpions',
  },
  {
    id: 32,
    species: 'Hadrurus Arizonensis',
    name: 'Giant Desert Hairy Scorpion',
    birth: 'L8',
    price: 129,
    picture: Hadrurus,
    available: 'Males and Females',
    stock: 3,
    description: description.Hadrurus.description,
    FeedingAndSupplementation:
      description.Hadrurus.FeedingAndSupplementation,
    housing: description.Hadrurus.Housing,
    count: 1,
    order: 'arachnids',
    category: 'scorpions',
  },
  {
    id: 33,
    species: 'Pandinus Cavimanus',
    name: 'Tanzanian Red Clawed Scorpion',
    birth: 'L1',
    price: 59,
    picture: Cavimanus,
    available: 'Males and Females',
    stock: 8,
    description: description.Cavimanus.description,
    FeedingAndSupplementation:
      description.Cavimanus.FeedingAndSupplementation,
    housing: description.Cavimanus.Housing,
    count: 1,
    order: 'arachnids',
    category: 'scorpions',
  },
];

export const accessories = [
  {
    id: 34,
    species: 'Tweezers 21cm',
    price: 15,
    picture: Tweezers,
    stock: 2,
    description: description.Tweezers.description,
    count: 1,
    order: 'shop',
    category: 'accessories',
  },
  {
    id: 35,
    species: 'Terrarium 30x30x30',
    price: 119,
    picture: Terrarium30,
    stock: 8,
    description: description.Terrarium.description,
    count: 1,
    order: 'shop',
    category: 'accessories',
  },
  {
    id: 36,
    species: 'Cork Tubes 1kg',
    price: 39,
    picture: Cork,
    stock: 287,
    description: description.Cork.description,
    count: 1,
    order: 'shop',
    category: 'accessories',
  },
  {
    id: 37,
    species: 'Termometr Higrometr',
    price: 14,
    picture: Termometr,
    stock: 20,
    description: description.Termometr.description,
    count: 27,
    order: 'shop',
    category: 'accessories',
  },
  {
    id: 38,
    species: 'Terrarium 60x45x30',
    price: 619,
    picture: Terrarium60,
    stock: 3,
    description: description.Terrarium.description,
    count: 1,
    order: 'shop',
    category: 'accessories',
  },
  {
    id: 39,
    species: 'Liane 90cm',
    price: 39,
    picture: Liane,
    stock: 43,
    description: description.Liane.description,
    count: 1,
    order: 'shop',
    category: 'accessories',
  },
  {
    id: 40,
    species: 'Arcadia UVB T5 8%',
    price: 49,
    picture: Arcadia,
    stock: 4,
    description: description.Arcadia.description,
    count: 1,
    order: 'shop',
    category: 'accessories',
  },
  {
    id: 41,
    species: 'Exo Terra Hideouts',
    price: 89,
    picture: Hideouts,
    stock: 18,
    description: description.Hideouts.description,
    count: 1,
    order: 'shop',
    category: 'accessories',
  },
  {
    id: 42,
    species: 'Tweezers 30cm',
    price: 20,
    picture: Tweezers,
    stock: 4,
    description: description.Tweezers.description,
    count: 1,
    order: 'shop',
    category: 'accessories',
  },
  {
    id: 43,
    species: 'Terrarium 90x45x60',
    price: 849,
    picture: Terrarium90,
    stock: 2,
    description: description.Terrarium.description,
    count: 1,
    order: 'shop',
    category: 'accessories',
  },
  {
    id: 44,
    species: 'Zoo Med ReptiVit D3',
    price: 19,
    picture: Multivitamin,
    stock: 12,
    description: description.Terrarium.description,
    count: 1,
    order: 'shop',
    category: 'accessories',
  },
];

export const articles = [
  {
    id: 1,
    image: Terra,
    date: 'April 22  2021',
    side: false,
    heading: 'Visit our stand at the Rybnik Terrarium!',
    text: description.Rybnik.description,
  },
  {
    id: 2,
    image: Scorpion,
    date: 'June 11 2020',
    side: true,
    heading:
      'A third compound was found responsible for fluorescence in scorpions',
    text: description.Scorpions.description,
  },
  {
    id: 3,
    image: Insularis,
    date: 'April 10 2020',
    side: false,
    heading: 'Germany NRW - Breeding ban on poisonous animals voted',
    text: description.Germany.description,
  },

  {
    id: 4,
    image: Iguana,
    date: 'February 20 2020',
    side: true,
    heading:
      'Florida wants to ban the breeding of green iguanas and teju',
    text: description.Florida.description,
  },
];
