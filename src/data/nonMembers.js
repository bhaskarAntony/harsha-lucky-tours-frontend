const nonMemberPackages = [
  {
    packageId: 'NM001',
    name: 'Shirdi Package',
    destination: ['Shirdi temple'],
    couples: 2,
    duration: '4 Days 3 Nights',
    images: [
      'https://visitshirdi.com/wp-content/uploads/2020/07/DWARKAMAI.jpg',
      'https://visitshirdi.com/wp-content/uploads/2020/07/DWARKAMAI.jpg'
    ],
    description: 'Visit the holy town of Shirdi and seek blessings at Sai Baba Temple along with guided visits to nearby spiritual attractions.',
    inclusions: ['Hotel Stay', 'All Meals', 'Transportation', 'Temple Visits', 'Local Sightseeing'],
    price: 15999,
    available: true,
  },
  {
    packageId: 'NM002',
    name: 'Hyderabad Tour Package',
    destination: ['Charminar'],
    couples: 2,
    duration: '6 Days 5 Nights',
    images: [
      'https://hyderabadtourpackage.in/images/places-to-visit/charminar-hyderabad-entryfee-timings-tour-package-small.jpg',
      'https://hyderabadtourpackage.in/images/places-to-visit/charminar-hyderabad-entryfee-timings-tour-package-small.jpg'
    ],
    description: 'Explore the City of Pearls, Hyderabad. Visit Charminar, Golconda Fort, Ramoji Film City, and savor authentic Hyderabadi biryani.',
    inclusions: ['Hotel Stay', 'Daily Breakfast & Dinner', 'City Sightseeing', 'Ramoji Film City Visit', 'Transportation'],
    price: 35999,
    available: true,
  },
  {
    packageId: 'NM003',
    name: 'Puri Jagannath Package',
    destination: ['Puri Jagannath'],
    couples: 2,
    duration: '8 Days 7 Nights',
    images: [
      'https://odishadairy.wordpress.com/wp-content/uploads/2015/07/jagannath-03.jpg',
      'https://odishadairy.wordpress.com/wp-content/uploads/2015/07/jagannath-03.jpg'
    ],
    description: 'Embark on a spiritual journey to Puri and experience the divine aura of Lord Jagannath Temple along with nearby beaches and Konark Sun Temple.',
    inclusions: ['Hotel Stay', 'All Meals', 'Private Transportation', 'Jagannath Temple Darshan', 'Konark Sun Temple Visit'],
    price: 42999,
    available: true,
  },
  {
    packageId: 'NM004',
    name: 'Goa Tour Package',
    destination: ['Goa'],
    couples: 2,
    duration: '7 Days 6 Nights',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3U7SfsPUEJss6j4N7JvXHApsxd9Nz5FpHN9e89OzBWyfudgnCURZ9Sw8Kg3nWBV_9KfE&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3U7SfsPUEJss6j4N7JvXHApsxd9Nz5FpHN9e89OzBWyfudgnCURZ9Sw8Kg3nWBV_9KfE&usqp=CAU'
    ],
    description: 'Enjoy the vibrant nightlife, sandy beaches, water sports, and Portuguese heritage in the tropical paradise of Goa.',
    inclusions: ['Beach Resort Stay', 'Breakfast & Dinner', 'Water Sports', 'Nightlife Experiences', 'Local Sightseeing'],
    price: 39999,
    available: true,
  },
  {
    packageId: 'NM005',
    name: 'Kerala Tour Package',
    destination: ['Kerala'],
    couples: 2,
    duration: '5 Days 4 Nights',
    images: [
      'https://miro.medium.com/v2/resize:fit:1400/1*-77gLR_5woCRst3x9DIoOQ.jpeg',
      'https://miro.medium.com/v2/resize:fit:1400/1*-77gLR_5woCRst3x9DIoOQ.jpeg'
    ],
    description: 'Cruise through Kerala backwaters in houseboats, explore lush tea gardens of Munnar, and enjoy the tranquil beaches and Ayurvedic experiences.',
    inclusions: ['Houseboat Stay', 'All Meals', 'Tea Plantation Tour', 'Backwater Cruise', 'Ayurvedic Spa'],
    price: 24999,
    available: true,
  },
  {
    packageId: 'NM006',
    name: 'Kashi & Ayodhya Tours Package',
    destination: ['Kashi', 'Ayodhya'],
    couples: 2,
    duration: '6 Days 5 Nights',
    images: [
      'https://www.bharatbooking.com/admin/webroot/img/uploads/holiday-package-gallery/1705752225_514246-kashi-gaya-prayag-ayodhya-tour-package-slider-image.webp',
      'https://www.bharatbooking.com/admin/webroot/img/uploads/holiday-package-gallery/1705752225_514246-kashi-gaya-prayag-ayodhya-tour-package-slider-image.webp'
    ],
    description: 'Visit the holy cities of Kashi and Ayodhya with sacred temple tours, evening Ganga aarti, and spiritual exploration along the ghats.',
    inclusions: ['Hotel Stay', 'Daily Breakfast', 'Temple Tours', 'Ganga Aarti Experience', 'Local Transportation'],
    price: 55999,
    available: true,
  },
  {
    packageId: 'NM007',
    name: 'Mumbai & Lonavala Tour Package',
    destination: ['Mumbai', 'Lonavala'],
    couples: 2,
    duration: '6 Days 5 Nights',
    images: [
      'https://5.imimg.com/data5/FW/UU/GJ/SELLER-2760433/lonavala-tour-package-service.png',
      'https://5.imimg.com/data5/FW/UU/GJ/SELLER-2760433/lonavala-tour-package-service.png'
    ],
    description: 'Explore the bustling city of Mumbai with Marine Drive, Gateway of India, and Bollywood attractions, then relax amidst Lonavala’s hills and waterfalls.',
    inclusions: ['Hotel Stay', 'Daily Breakfast', 'City Sightseeing', 'Lonavala Excursion', 'Private Transfers'],
    price: 55999,
    available: true,
  }
];

export { nonMemberPackages }
