import { CreativeCommons } from "lucide-react";

// Product data generated from images in assets folder
export const products = [
  // Original products with minimal data
  {
    id: 1,
    name: "Golden Drip Chocolate Cake",
    description:
      "A rich chocolate cake with a luxurious golden drip topped with chocolate, oreos, kitkats, perfect for elegant celebrations.",
    image: "/assets/images/products/IMG_7210-Photoroom.jpg",
    category: "Classic Desserts", // Changed to Classic Desserts based on appearance
    occasions: ["Birthday Cakes", "Anniversary", "Celebration Cakes"],
    longDescription:
      "Indulge in the rich flavors of our Golden Drip Chocolate Cake. This decadent cake is covered in smooth chocolate frosting and features an elegant golden drip, making it a stunning centerpiece for any special occasion. Garnished with chocolate sticks and sprinkles, it's a delight for both the eyes and the palate.",
    ingredients: [
      "Chocolate Cake",
      "Chocolate Ganache",
      "Edible Gold Drip",
      "Chocolate Sticks",
      "Sprinkles",
    ], // Assuming ingredients
    frostingType: "Ganache", // Appears to be ganache with a drip
    cakeShape: "Round",
  },
  {
    id: 2, // Assigning a new ID as it's a new cake not part of the previous sequence
    name: "KitKat Chocolate Delight Cake",
    description:
      "A decadent chocolate cake encircled with KitKat bars and topped with more chocolates and wafers.",
    image: "/assets/images/products/IMG_4287-Photoroom.jpg", // Using the newly provided image
    category: "Chocolate Cakes",
    occasions: ["Birthday Cakes", "Celebration Cakes", "Chocolate Lovers"],
    longDescription:
      "Indulge in the ultimate chocolate experience with our KitKat Chocolate Delight Cake. This rich chocolate cake is generously surrounded by classic KitKat bars, held in place with a black ribbon, and crowned with an assortment of chocolate candies and crispy wafers. It's a truly irresistible treat for any chocolate enthusiast and a perfect centerpiece for a joyous celebration.",
    ingredients: [
      "Chocolate Cake",
      "Chocolate Frosting",
      "KitKat Bars",
      "Assorted Chocolates",
      "Wafers",
    ], // Assumed ingredients based on visual
    frostingType: "Ganache", // Appears to be a poured chocolate ganache
    cakeShape: "Round",
  },
  {
    id: 3,
    name: "White & Black Floral Elegance Cake",
    description:
      "An elegant white cake with black floral details and a delicate black ribbon.",
    image: "/assets/images/products/IMG_4290-Photoroom.jpg",
    category: "Occasion Cakes",
    occasions: ["Weddings", "Anniversary", "Formal Events", "Birthday Cakes"],
    longDescription:
      "Our White & Black Floral Elegance Cake combines classic sophistication with modern design. This pristine white cake is adorned with elegant black floral patterns and tied with a graceful black ribbon, making it perfect for weddings, anniversaries, or any formal gathering that calls for a touch of refined beauty.",
    ingredients: [
      "Vanilla Cake",
      "White Buttercream",
      "Black Fondant Details",
      "Black Ribbon",
    ], // Assuming ingredients
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 4,
    name: "Minimalist White & Gold Celebration Cake",
    description:
      "A simple yet elegant white cake with subtle gold accents, perfect for understated celebrations.",
    image: "/assets/images/products/IMG_4293-Photoroom.jpg",
    category: "Classic Desserts",
    occasions: ["Anniversary", "Birthday Cakes", "Formal Events"],
    longDescription:
      "The Minimalist White & Gold Celebration Cake offers understated elegance for any occasion. This smooth white cake is adorned with delicate gold edible elements, providing a sophisticated touch without overwhelming the design. It's ideal for those who appreciate simple beauty and refined taste.",
    ingredients: ["White Cake", "White Fondant", "Edible Gold Paint"], // Assuming ingredients
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 5,
    name: "Dark Chocolate & Gold Speckle Cake",
    description:
      "A rich dark chocolate cake with elegant gold speckles, perfect for a sophisticated celebration.",
    image: "/assets/images/products/IMG_4296-Photoroom.jpg",
    category: "Classic Desserts",
    occasions: ["Birthday Cakes", "Formal Events", "Chocolate Lovers"],
    longDescription:
      "Indulge in the luxurious experience of our Dark Chocolate & Gold Speckle Cake. This deeply rich chocolate cake is covered in dark frosting and subtly enhanced with shimmering gold speckles, adding a touch of glamour. It's a perfect choice for those who appreciate the decadent flavors of chocolate and elegant design.",
    ingredients: [
      "Chocolate Cake",
      "Dark Chocolate Frosting",
      "Edible Gold Dust/Speckles",
    ], // Assuming ingredients
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 6,
    name: "Number '5' Green & White Celebration Cake",
    description:
      "A fun and vibrant cake featuring the number '5' on a green and white background.",
    image: "/assets/images/products/IMG_4302-Photoroom.jpg",
    category: "Custom Cakes",
    occasions: ["Birthday Cakes", "Anniversary", "Milestone Celebrations"],
    longDescription:
      "Our Number '5' Green & White Celebration Cake is perfect for marking a special fifth milestone. This cake is boldly decorated with a large '5' on a vibrant green and white background, making it an ideal choice for birthdays, anniversaries, or any event celebrating the number five. It’s a cheerful and personalized way to commemorate a special day.",
    ingredients: [
      "Vanilla Cake",
      "Green and White Buttercream",
      "Fondant Numbers",
    ], // Assuming ingredients
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 7,
    name: "Pastel Teal & Orange Bunting Cake",
    description:
      "A cheerful pastel cake adorned with colorful bunting, perfect for a festive birthday.",
    image: "/assets/images/products/IMG_4317-Photoroom.jpg",
    category: "Birthday Cakes",
    occasions: ["Birthday Cakes", "Children's Parties", "Festive Celebrations"],
    longDescription:
      "Bring a festive touch to your celebration with our Pastel Teal & Orange Bunting Cake. This delightful cake features a soft pastel teal frosting and is decorated with charming multi-colored bunting, creating a joyful and celebratory atmosphere. It's an ideal choice for birthdays, especially children's parties, adding a playful and colorful element to the festivities.",
    ingredients: ["Vanilla Cake", "Teal Buttercream", "Edible Bunting Flags"], // Assuming ingredients
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 8,
    name: "Ballerina Dream White Cake",
    description:
      "A graceful white cake featuring a delicate ballerina figurine, perfect for aspiring dancers.",
    image: "/assets/images/products/IMG_4319-Photoroom.jpg",
    category: "Occasion Cakes",
    occasions: ["Birthday Cakes", "Dance Recitals", "Children's Parties"],
    longDescription:
      "Inspire dreams with our Ballerina Dream White Cake. This elegant white cake is adorned with a delicate ballerina figurine and intricate white decorations, making it a magical centerpiece for any young dancer's birthday or a celebration of a dance achievement. Its graceful design evokes the beauty of ballet.",
    ingredients: [
      "Vanilla Cake",
      "White Buttercream",
      "Edible Ballerina Figurine",
      "Fondant Accents",
    ], // Assuming ingredients
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 9,
    name: "Purple & White Pillow Cake",
    description:
      "A charming light purple cake designed with a pillow effect, perfect for a baby shower or gentle celebration.",
    image: "/assets/images/products/IMG_4403-Photoroom.jpg",
    category: "Occasion Cakes",
    occasions: ["Baby Shower", "Birthday Cakes", "Gentle Celebrations"],
    longDescription:
      "Our Purple & White Pillow Cake offers a tender and elegant design. This soft purple cake is crafted with a quilted, pillow-like texture and delicate white accents, making it a beautiful and serene choice for baby showers, christenings, or any occasion that calls for a gentle and sweet touch. It's a comforting and visually appealing dessert.",
    ingredients: ["Vanilla Cake", "Purple Fondant", "White Fondant Details"], // Assuming ingredients
    frostingType: "Fondant",
    cakeShape: "Round",
  },
  {
    id: 10,
    name: "Elegant White & Blue Floral Cake",
    description:
      "A sophisticated white cake adorned with delicate blue floral designs, ideal for elegant gatherings.",
    image: "/assets/images/products/IMG_4528-Photoroom.jpg",
    category: "Occasion Cakes",
    occasions: [
      "Anniversary",
      "Birthday Cakes",
      "Bridal Shower",
      "Formal Events",
    ],
    longDescription:
      "Our Elegant White & Blue Floral Cake is a vision of serene beauty. This pristine white cake is gracefully decorated with intricate blue floral patterns, adding a touch of refined elegance. It’s a perfect choice for anniversaries, bridal showers, or any special occasion where a delicate and sophisticated dessert is desired.",
    ingredients: [
      "White Cake",
      "White Fondant",
      "Blue Royal Icing Floral Designs",
    ], // Assuming ingredients
    frostingType: "Fondant",
    cakeShape: "Round",
  },
  {
    id: 11,
    name: "Majestic White & Gold Floral Cake",
    description:
      "A regal white cake adorned with opulent gold floral designs, perfect for grand celebrations.",
    image: "/assets/images/products/IMG_4532-Photoroom.jpg",
    category: "Occasion Cakes",
    occasions: [
      "Weddings",
      "Anniversary",
      "Grand Celebrations",
      "Birthday Cakes",
    ],
    longDescription:
      "Step into luxury with our Majestic White & Gold Floral Cake. This stunning white cake is lavishly embellished with intricate gold floral patterns, exuding grandeur and sophistication. It’s the ideal centerpiece for weddings, golden anniversaries, or any grand event that calls for a truly magnificent dessert.",
    ingredients: ["Almond Cake", "White Fondant", "Edible Gold Floral Designs"], // Assuming ingredients
    frostingType: "Fondant",
    cakeShape: "Round",
  },
  {
    id: 12,
    name: "White Dove of Peace Cake",
    description:
      "A serene white cake topped with a graceful dove, symbolizing peace and new beginnings.",
    image: "/assets/images/products/IMG_4560-Photoroom.jpg",
    category: "Occasion Cakes",
    occasions: [
      "Weddings",
      "Christenings",
      "Religious Celebrations",
      "Anniversary",
    ],
    longDescription:
      "Our White Dove of Peace Cake embodies serenity and hope. This pristine white cake is elegantly simple, crowned with a delicate white dove, making it a perfect symbol of peace and new beginnings. It’s an ideal choice for weddings, christenings, or any event that celebrates purity and fresh starts.",
    ingredients: ["White Cake", "White Buttercream", "Fondant Dove"], // Assuming ingredients
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 13,
    name: "Spider-Man Hero Cake",
    description:
      "A vibrant Spider-Man themed cake, perfect for superhero fans!",
    image: "/assets/images/products/IMG_5627-Photoroom.jpg",
    category: "Custom Cakes",
    occasions: ["Birthday Cakes", "Children's Parties", "Superhero Themes"],
    longDescription:
      "Swing into action with our Spider-Man Hero Cake! This exciting cake features the iconic red and black design of Spider-Man's mask, making it an absolute hit for any young superhero's birthday party. It's a web-slinging, delicious treat that will make any fan's day extra special.",
    ingredients: [
      "Vanilla Cake",
      "Red and Black Fondant",
      "Edible Spiderweb Details",
    ], // Assuming ingredients
    frostingType: "Fondant",
    cakeShape: "Round",
  },
  {
    id: 14,
    name: "Rustic White Wood Grain Cake",
    description:
      "A unique white cake with a rustic wood grain texture, perfect for nature-inspired events.",
    image: "/assets/images/products/IMG_5283-Photoroom.jpg",
    category: "Occasion Cakes",
    occasions: [
      "Rustic Weddings",
      "Anniversary",
      "Outdoor Events",
      "Nature Themes",
    ],
    longDescription:
      "Our Rustic White Wood Grain Cake brings a touch of nature's beauty to your celebration. This distinctive white cake is artfully designed with a realistic wood grain texture, offering a charming and earthy aesthetic. It’s an ideal choice for rustic-themed weddings, outdoor gatherings, or any event that embraces natural elegance.",
    ingredients: ["Vanilla Cake", "White Fondant", "Edible Gold Details"], // Assuming ingredients
    frostingType: "Fondant",
    cakeShape: "Round",
  },
  {
    id: 15,
    name: "Ruby Red Velvet Slice Cake",
    description:
      "A striking slice of red velvet cake, showcasing its rich color and decadent layers.",
    image: "/assets/images/products/IMG_5170-Photoroom.jpg",
    category: "Classic Desserts",
    occasions: ["Dessert Table", "Individual Treat", "Romantic Gestures"],
    longDescription:
      "Indulge in the luxurious taste of our Ruby Red Velvet Slice Cake. This perfectly portioned slice highlights the vibrant red hue of the cake layers, beautifully contrasted with creamy white frosting. It's a decadent treat ideal for individual enjoyment or as part of a lavish dessert spread, perfect for those who appreciate classic flavors.",
    ingredients: ["Red Velvet Cake", "Cream Cheese Frosting"], // Assuming ingredients
    frostingType: "Cream Cheese Frosting",
    cakeShape: "Slice", // This is a slice, not a whole cake
  },
  {
    id: 16,
    name: "White & Gold Floral Drip Cake",
    description:
      "An elegant white cake with a golden drip and delicate floral accents.",
    image: "/assets/images/products/IMG_5351-Photoroom.jpg",
    category: "Occasion Cakes",
    occasions: ["Weddings", "Anniversary", "Birthday Cakes", "Formal Events"],
    longDescription:
      "Our White & Gold Floral Drip Cake is a masterpiece of elegance. This pristine white cake features a luxurious golden drip cascading down its sides, complemented by intricate white floral designs. It's a perfect blend of modern trends and classic beauty, ideal for weddings, anniversaries, or any celebration demanding sophisticated charm.",
    ingredients: [
      "Vanilla Cake",
      "White Buttercream",
      "Gold Drip",
      "Edible White Flowers",
    ], // Assuming ingredients
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 17,
    name: "Pastel Pink & White Floral Cake",
    description:
      "A delicate pastel pink cake adorned with beautiful white floral patterns.",
    image: "/assets/images/products/IMG_5249-Photoroom.jpg",
    category: "Occasion Cakes",
    occasions: [
      "Baby Shower",
      "Birthday Cakes",
      "Bridal Shower",
      "Spring Celebrations",
    ],
    longDescription:
      "Our Pastel Pink & White Floral Cake is a vision of gentle charm. This lovely cake features a soft pink frosting elegantly decorated with delicate white floral designs, creating a serene and beautiful aesthetic. It’s an ideal choice for baby showers, bridal showers, or any celebration where a subtle yet stunning dessert is desired.",
    ingredients: [
      "Vanilla Cake",
      "Pink Buttercream",
      "White Royal Icing Floral Designs",
    ], // Assuming ingredients
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 18,
    name: "Cake 18", // No clear distinguishing features from the image
    description: "Delicious cake",
    image: "/assets/images/products/IMG_5795-Photoroom.jpg",
    category: "Classic Desserts",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Round",
  },
  {
    id: 19,
    name: "Cake 19", // No clear distinguishing features from the image
    description: "Delicious cake",
    image: "/assets/images/products/IMG_5793-Photoroom.jpg",
    category: "Classic Desserts",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Round",
  },
  {
    id: 20,
    name: "Cake 20", // No clear distinguishing features from the image
    description: "Delicious cake",
    image: "/assets/images/products/IMG_6018-Photoroom.jpg",
    category: "Classic Desserts",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Round",
  },
  {
    id: 21,
    name: "White & Gold Number Cake",
    description:
      "A sophisticated white cake with a golden number '20' on top, perfect for milestone birthdays or anniversaries.",
    image: "/assets/images/products/IMG_5290-Photoroom.jpg",
    category: "Custom Cakes",
    occasions: ["Birthday Cakes", "Anniversary", "Milestone Celebrations"],
    longDescription:
      "Celebrate a significant milestone with our White & Gold Number Cake. This elegant white cake is beautifully adorned with a prominent golden number '20' (or any custom number), making it ideal for 20th birthdays, anniversaries, or other special occasions. Its clean design and luxurious gold accents provide a sophisticated touch to any celebration.",
    ingredients: ["Vanilla Cake", "White Fondant", "Edible Gold Numbers"],
    frostingType: "Fondant",
    cakeShape: "Round",
  },
  {
    id: 22,
    name: "Black & White Geometric Drip Cake",
    description:
      "A modern black and white cake with geometric patterns and a stylish drip.",
    image: "/assets/images/products/IMG_5461-Photoroom.jpg",
    category: "Occasion Cakes",
    occasions: ["Modern Celebrations", "Birthday Cakes", "Formal Events"],
    longDescription:
      "Our Black & White Geometric Drip Cake is a statement of modern elegance. This visually striking cake features a clean black and white design with geometric accents and a trendy drip effect. It’s perfect for those who appreciate contemporary aesthetics and a bold look, making it suitable for sophisticated birthdays or stylish gatherings.",
    ingredients: [
      "Chocolate Cake",
      "Black & White Buttercream",
      "Chocolate Drip",
    ],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 23,
    name: "Blue & White Two-Tier Cake with Clouds",
    description:
      "A whimsical two-tier cake in blue and white, decorated with clouds and balloons, ideal for baby showers or children's birthdays.",
    image: "/assets/images/products/IMG_5177-Photoroom.jpg",
    category: "Occasion Cakes",
    occasions: ["Baby Shower", "Children's Parties", "Birthday Cakes"],
    longDescription:
      "Float away on clouds with our Blue & White Two-Tier Cake. This adorable cake features soft blue and white tiers, adorned with fluffy clouds and colorful balloons, creating a whimsical scene. It's the perfect centerpiece for a baby shower, a child's birthday, or any celebration that calls for a dreamy and playful atmosphere.",
    ingredients: [
      "Vanilla Cake",
      "Blue and White Buttercream",
      "Fondant Clouds",
      "Edible Balloons",
    ],
    frostingType: "Buttercream",
    cakeShape: "Tiered Round",
  },
  {
    id: 24,
    name: "Abstract Gold & White Cake",
    description:
      "A modern white cake with abstract gold artistic brushstrokes, perfect for a contemporary celebration.",
    image: "/assets/images/products/IMG_5854-Photoroom.jpg",
    category: "Occasion Cakes",
    occasions: [
      "Artistic Events",
      "Anniversary",
      "Birthday Cakes",
      "Modern Celebrations",
    ],
    longDescription:
      "Our Abstract Gold & White Cake is a canvas of edible art. This elegant white cake is uniquely adorned with bold, abstract gold brushstrokes, creating a sophisticated and artistic design. It's an ideal choice for gallery openings, anniversaries, or any event that celebrates creativity and modern aesthetics.",
    ingredients: ["White Cake", "White Buttercream", "Edible Gold Paint"],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 25,
    name: "Oceanic Blue & White Fish Cake",
    description:
      "A delightful blue and white cake adorned with playful fish, perfect for an underwater adventure.",
    image: "/assets/images/products/IMG_5458-Photoroom.jpg",
    category: "Occasion Cakes",
    occasions: ["Children's Parties", "Under the Sea Theme", "Birthday Cakes"],
    longDescription:
      "Dive into fun with our Oceanic Blue & White Fish Cake! This charming cake features a serene blue and white base, playfully decorated with colorful fish and underwater elements. It's the perfect centerpiece for a child's birthday party with an 'under the sea' theme or any celebration that loves aquatic adventures.",
    ingredients: [
      "Vanilla Cake",
      "Blue and White Buttercream",
      "Fondant Fish and Seaweed",
    ],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 26,
    name: "Roblox Gaming Zone Cake",
    description:
      "An exciting Roblox-themed cake, perfect for dedicated gamers.",
    image: "/assets/images/products/IMG_6562-Photoroom.jpg",
    category: "Custom Cakes",
    occasions: ["Birthday Cakes", "Children's Parties", "Gaming Events"],
    longDescription:
      "Level up your celebration with our Roblox Gaming Zone Cake! This dynamic cake is designed with iconic Roblox characters and elements, making it an absolute must-have for any young gamer's birthday party. It's a block-tastic and delicious way to celebrate in true Roblox style.",
    ingredients: [
      "Chocolate Cake",
      "Black Fondant",
      "Edible Roblox Characters",
      "Gaming Controller Topper",
    ],
    frostingType: "Fondant",
    cakeShape: "Round",
  },
  {
    id: 27,
    name: "Minnie Mouse Bow Cake",
    description:
      "A sweet pink and red Minnie Mouse themed cake with a big bow.",
    image: "/assets/images/products/IMG_5895-Photoroom.jpg",
    category: "Custom Cakes",
    occasions: ["Birthday Cakes", "Children's Parties", "Disney Themes"],
    longDescription:
      "Bring Disney magic to your party with our Minnie Mouse Bow Cake! This adorable cake features the classic Minnie Mouse colors of pink and red, complete with her signature bow. It's the perfect centerpiece for a little one's birthday, adding a cheerful and beloved character to the celebration.",
    ingredients: [
      "Vanilla Cake",
      "Pink and Red Buttercream",
      "Edible Minnie Mouse Bow",
    ],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 28,
    name: "Blue & White Starry Cake",
    description:
      "A charming blue and white cake adorned with delicate stars and pearls, perfect for baby showers or gender reveals.",
    image: "/assets/images/products/IMG_5515-Photoroom.jpg",
    category: "Occasion Cakes",
    occasions: [
      "Baby Shower",
      "Gender Reveal",
      "Children's Parties",
      "Birthday Cakes",
    ],
    longDescription:
      "Wish upon a star with our Blue & White Starry Cake. This delightful cake features a serene blue base with elegant white stars and edible pearls, creating a magical and dreamy effect. It’s an ideal choice for baby showers, gender reveal parties, or a child's birthday, adding a touch of wonder to your special event.",
    ingredients: [
      "Vanilla Cake",
      "Blue and White Buttercream",
      "Edible Stars",
      "Edible Pearls",
    ],
    frostingType: "Buttercream",
    cakeShape: "Square",
  },
  {
    id: 29,
    name: "Golden Fantasia Floral Cake",
    description:
      "A majestic golden cake with intricate floral designs, exuding opulence and grandeur.",
    image: "/assets/images/products/IMG_5497-Photoroom.jpg",
    category: "Occasion Cakes",
    occasions: [
      "Weddings",
      "Anniversary",
      "Grand Celebrations",
      "Formal Events",
    ],
    longDescription:
      "Our Golden Fantasia Floral Cake is a vision of pure luxury. This stunning cake is entirely covered in lustrous gold frosting, intricately detailed with elegant floral patterns, creating a breathtaking and opulent display. It’s the ultimate centerpiece for grand weddings, significant anniversaries, or any occasion that demands a truly magnificent and memorable dessert.",
    ingredients: ["Almond Cake", "Gold Fondant", "Edible Gold Flowers"],
    frostingType: "Fondant",
    cakeShape: "Round",
  },
  {
    id: 30,
    name: "Pink & White Cloud Dream Cake",
    description:
      "A whimsical pink and white cake with cloud-like frosting and delicate accents.",
    image: "/assets/images/products/IMG_5997-Photoroom.jpg",
    category: "Occasion Cakes",
    occasions: [
      "Baby Shower",
      "Children's Parties",
      "Birthday Cakes",
      "Dreamy Themes",
    ],
    longDescription:
      "Drift into a sweet dream with our Pink & White Cloud Dream Cake. This charming cake features soft pink and white frosting styled to resemble fluffy clouds, adorned with delicate accents. It’s a perfect choice for baby showers, children's birthdays, or any celebration where you want to create a whimsical and ethereal atmosphere.",
    ingredients: ["Vanilla Cake", "Pink and White Whipped Cream", "Sprinkles"],
    frostingType: "Whipped Cream",
    cakeShape: "Round",
  },
  {
    id: 31,
    name: "Pink & Gold Princess Crown Cake",
    description:
      "A charming pink and gold cake adorned with a crown, perfect for a little princess.",
    image: "/assets/images/products/IMG_1842-Photoroom.jpg",
    category: "Occasion Cakes",
    occasions: ["Children's Parties", "Birthday Cakes", "Princess Themes"],
    longDescription:
      "Make her feel like royalty with our Pink & Gold Princess Crown Cake. This delightful cake features soft pink and gold accents, beautifully topped with a sparkling crown, making it the ultimate treat for a princess-themed birthday or a special celebration for your little one. It’s a dream come true for any aspiring royalty.",
    ingredients: [
      "Strawberry Cake",
      "Pink Buttercream",
      "Edible Gold Glitter",
      "Crown Topper",
    ],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 32,
    name: "Question Mark & Tools Cake",
    description:
      "A unique yellow cake with a question mark and various tools, perfect for a curious mind or a themed party.",
    image: "/assets/images/products/IMG_1861-Photoroom.jpg",
    category: "Custom Cakes",
    occasions: ["Birthday Cakes", "Themed Parties", "Graduation"],
    longDescription:
      "Spark curiosity with our Question Mark & Tools Cake! This distinctive yellow cake is playfully decorated with a large question mark and various tools, making it a fantastic choice for a themed birthday, a puzzle enthusiast, or celebrating an inquiry-driven milestone. It's a fun and intriguing centerpiece for any gathering.",
    ingredients: [
      "Lemon Cake",
      "Yellow Fondant",
      "Fondant Question Mark and Tools",
    ],
    frostingType: "Fondant",
    cakeShape: "Round",
  },
  {
    id: 33,
    name: "Colorful Character Army Cake",
    description:
      "A playful cake featuring a collection of small, colorful characters, perfect for a fun celebration.",
    image: "/assets/images/products/IMG_1863-Photoroom.jpg",
    category: "Occasion Cakes",
    occasions: ["Children's Parties", "Birthday Cakes", "Playful Gatherings"],
    longDescription:
      "Bring a burst of fun to your party with our Colorful Character Army Cake! This vibrant cake is adorned with a multitude of small, colorful characters, creating a cheerful and exciting scene. It’s the perfect choice for children's birthdays or any playful gathering that needs a dash of whimsical charm.",
    ingredients: [
      "Vanilla Cake",
      "Green Buttercream",
      "Assorted Fondant Characters",
    ],
    frostingType: "Buttercream",
    cakeShape: "Square",
  },
  {
    id: 34,
    name: "Deconstructed Strawberry Delight Cake",
    description:
      "A unique cake with visible strawberry and cream layers, designed for a modern aesthetic.",
    image: "/assets/images/products/IMG_1879-Photoroom.jpg",
    category: "Classic Desserts",
    occasions: ["Dessert Table", "Summer Gatherings", "Casual Celebrations"],
    longDescription:
      "Our Deconstructed Strawberry Delight Cake offers a fresh and modern take on a classic dessert. This cake beautifully displays its layers of light sponge, fresh cream, and vibrant strawberries, creating an inviting and visually appealing treat. It’s perfect for summer gatherings or any occasion where you want to highlight the natural beauty of your ingredients.",
    ingredients: ["Vanilla Sponge", "Whipped Cream", "Fresh Strawberries"],
    frostingType: "Whipped Cream",
    cakeShape: "Round",
  },
  {
    id: 35,
    name: "Festive Holiday Wreath Cake",
    description:
      "A cheerful white cake decorated with a festive holiday wreath and colorful ornaments.",
    image: "/assets/images/products/IMG_1884-Photoroom.jpg",
    category: "Occasion Cakes",
    occasions: ["Christmas", "Holiday Season", "Winter Celebrations"],
    longDescription:
      "Celebrate the season with our Festive Holiday Wreath Cake. This delightful white cake is beautifully adorned with a vibrant holiday wreath and colorful edible ornaments, capturing the spirit of Christmas and festive cheer. It’s the perfect centerpiece for your holiday gathering, bringing joy and sweetness to your celebration.",
    ingredients: [
      "Vanilla Cake",
      "White Buttercream",
      "Edible Holly and Berries",
      "Sugar Ornaments",
    ],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 36,
    name: "Golden Drip Cake with Chocolate & Berries",
    description:
      "A rich chocolate cake with golden drip, adorned with chocolates and fresh berries.",
    image: "/assets/images/products/IMG_1894-Photoroom.jpg",
    category: "Classic Desserts",
    occasions: ["Birthday Cakes", "Celebration Cakes", "Formal Events"],
    longDescription:
      "Indulge in our Golden Drip Cake with Chocolate & Berries, a perfect blend of richness and freshness. This decadent chocolate cake features a luxurious golden drip, beautifully complemented by an assortment of chocolates and fresh berries. It's a visually stunning and delicious choice for any celebration, offering a sophisticated dessert experience.",
    ingredients: [
      "Chocolate Cake",
      "Chocolate Ganache",
      "Edible Gold Drip",
      "Assorted Chocolates",
      "Fresh Berries",
    ],
    frostingType: "Ganache",
    cakeShape: "Round",
  },
  {
    id: 37,
    name: "Radiant Red Rose Elegance Cake",
    description:
      "A stunning red cake adorned with delicate roses, ideal for romantic celebrations.",
    image: "/assets/images/products/IMG_1901-Photoroom.jpg",
    category: "Occasion Cakes",
    occasions: [
      "Anniversary",
      "Valentine's Day",
      "Romantic Gestures",
      "Birthday Cakes",
    ],
    longDescription:
      "Express your love with our Radiant Red Rose Elegance Cake. This beautiful cake features a rich red frosting, elegantly decorated with handcrafted red roses, making it the perfect centerpiece for anniversaries, Valentine's Day, or any occasion that calls for a touch of romance. Its vibrant color and classic design are sure to impress.",
    ingredients: [
      "Red Velvet Cake",
      "Cream Cheese Frosting",
      "Edible Sugar Roses",
    ],
    frostingType: "Cream Cheese Frosting",
    cakeShape: "Round",
  },
  {
    id: 38,
    name: "Custom Number / Letter Cake", // Placeholder as the image shows custom letters
    description:
      "A personalized cake shaped like a number or letter, perfect for custom celebrations.",
    image: "/assets/images/products/IMG_1906-Photoroom.jpg",
    category: "Custom Cakes",
    occasions: ["Birthday Cakes", "Anniversary", "Milestone Celebrations"],
    longDescription:
      "Make your celebration uniquely yours with our Custom Number / Letter Cake. This personalized cake can be crafted into any number or letter, adorned with various decorations to match your theme. It’s an ideal choice for significant birthdays, anniversaries, or any event where you want a truly bespoke and memorable dessert.",
    ingredients: [
      "Vanilla Cake",
      "Buttercream",
      "Assorted Candies and Chocolates",
    ],
    frostingType: "Buttercream",
    cakeShape: "Custom",
  },
  {
    id: 39,
    name: "Pastel Polka Dot Celebration Cake",
    description:
      "A charming pastel pink cake covered in delicate white polka dots, ideal for baby showers or sweet celebrations.",
    image: "/assets/images/products/IMG_1911-Photoroom.jpg",
    category: "Occasion Cakes",
    occasions: ["Baby Shower", "Birthday Cakes", "Children's Parties"],
    longDescription:
      "Our Pastel Polka Dot Celebration Cake is a vision of sweetness and charm. This delightful cake is beautifully decorated with soft pink frosting and playful white polka dots, making it the perfect addition to a baby shower, a child's birthday, or any joyful gathering. Its gentle aesthetics promise a delightful experience for everyone.",
    ingredients: [
      "Strawberry Cake",
      "Light Pink Vanilla Buttercream",
      "White Chocolate Polka Dots",
    ],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 40,
    name: "My First Tooth Milestone Cake",
    description:
      "Celebrate a precious milestone with this adorable 'My First Tooth' themed cake.",
    image: "/assets/images/products/IMG_1925-Photoroom.jpg",
    category: "Occasion Cakes",
    occasions: ["Baby Milestone", "Baby Shower", "Family Celebrations"],
    longDescription:
      "Commemorate a tiny but significant moment with our charming 'My First Tooth' Milestone Cake. This sweet cake is designed with a playful tooth illustration and the inscription 'My First Tooth,' making it the perfect centerpiece for a family celebration of your little one's new milestone. It’s a delightful way to mark a special memory.",
    ingredients: [
      "Vanilla Bean Cake",
      "Light Grey Buttercream",
      "White Fondant Tooth Decoration",
    ],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 41,
    name: "Football Fan's Dream Cake",
    description:
      "Score big with this delicious football-themed cake, perfect for any sports enthusiast!",
    image: "/assets/images/products/IMG_1945-Photoroom.jpg", // Corrected image path for Cake 41
    category: "Custom Cakes",
    occasions: ["Birthday Cakes", "Celebration Cakes", "Sports Events"],
    longDescription:
      "Celebrate a victory or a special birthday with our meticulously designed Football Fan's Dream Cake. Adorned with a vibrant green pitch and a miniature football, this cake is a sure goal for any sports lover. Personalize it with a name like 'Ljubo' to make it extra special. It's not just a cake, it's a celebration!",
    ingredients: [
      "Vanilla sponge",
      "Green buttercream frosting",
      "White fondant accents",
      "Chocolate soccer ball decoration",
    ],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 42,
    name: "Radiant Red Rose Elegance Cake",
    description:
      "A stunning red cake adorned with delicate roses, ideal for romantic celebrations.",
    image: "/assets/images/products/IMG_1949-Photoroom.jpg", // Corrected image path for Cake 42
    category: "Occasion Cakes",
    occasions: [
      "Anniversary",
      "Valentine's Day",
      "Romantic Gestures",
      "Birthday Cakes",
    ],
    longDescription:
      "Express your love with our Radiant Red Rose Elegance Cake. This beautiful cake features a rich red frosting, elegantly decorated with handcrafted red roses, making it the perfect centerpiece for anniversaries, Valentine's Day, or any occasion that calls for a touch of romance. Its vibrant color and classic design are sure to impress.",
    ingredients: [
      "Red velvet cake",
      "Cream cheese frosting",
      "Edible sugar roses",
    ],
    frostingType: "Cream Cheese Frosting",
    cakeShape: "Round",
  },
  {
    id: 43,
    name: "The BERNA Personalized Delight",
    description:
      "A chic and modern red cake personalized with the name 'BERNA,' perfect for birthdays or special recognition.",
    image: "/assets/images/products/IMG_1954-Photoroom.jpg", // Corrected image path for Cake 43
    category: "Custom Cakes",
    occasions: ["Birthday Cakes", "Personalized Gifts", "Celebration Cakes"],
    longDescription:
      "Make a statement with The BERNA Personalized Delight. This sleek red cake is designed for a truly personal touch, featuring the name 'BERNA' prominently displayed. Whether it's a birthday, an achievement, or just to show someone you care, this modern cake is a delicious way to celebrate.",
    ingredients: [
      "Chocolate fudge cake",
      "Red ganache frosting",
      "White fondant lettering",
    ],
    frostingType: "Ganache",
    cakeShape: "Round",
  },
  {
    id: 44,
    name: "Pink Hearts Celebration Cake",
    description:
      "A charming pastel white cake covered in delicate pink hearts, ideal for baby showers or sweet celebrations.",
    image: "/assets/images/products/IMG_1956-Photoroom.jpg", // Corrected image path for Cake 44
    category: "Occasion Cakes",
    occasions: ["Baby Shower", "Birthday Cakes", "Children's Parties"],
    longDescription:
      "Our Pastel White Celebration Cake is a vision of sweetness and charm. This delightful cake is beautifully decorated with soft pink frosting and playful white polka dots, making it the perfect addition to a baby shower, a child's birthday, or any joyful gathering. Its gentle aesthetics promise a delightful experience for everyone.",
    ingredients: [
      "Strawberry cake",
      "Light pink vanilla buttercream",
      "White chocolate polka dots",
    ],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 45,
    name: "My First Tooth Milestone Cake",
    description:
      "Celebrate a precious milestone with this adorable 'My First Tooth' themed cake.",
    image: "/assets/images/products/IMG_1958-Photoroom.jpg", // Corrected image path for Cake 45
    category: "Occasion Cakes",
    occasions: ["Baby Milestone", "Baby Shower", "Family Celebrations"],
    longDescription:
      "Commemorate a tiny but significant moment with our charming 'My First Tooth' Milestone Cake. This sweet cake is designed with a playful tooth illustration and the inscription 'My First Tooth,' making it the perfect centerpiece for a family celebration of your little one's new milestone. It’s a delightful way to mark a special memory.",
    ingredients: [
      "Vanilla bean cake",
      "Light grey buttercream",
      "White fondant tooth decoration",
    ],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 46,
    name: "Elegant White & Gold Mecca Cake",
    description:
      "A sophisticated white and gold cake featuring the Kaaba, perfect for Islamic celebrations and pilgrims.",
    image: "/assets/images/products/IMG_1991-Photoroom.jpg", // Corrected image path for Cake 46
    category: "Custom Cakes",
    occasions: [
      "Islamic Celebrations",
      "Eid",
      "Hajj/Umrah Return",
      "Religious Milestones",
    ],
    longDescription:
      "Honor faith and tradition with our Elegant White & Gold Mecca Cake. This beautifully crafted cake features intricate golden details and a representation of the Kaaba, making it a respectful and fitting centerpiece for Eid celebrations, Hajj or Umrah returns, or other significant Islamic events. It's a sweet tribute to a sacred journey.",
    ingredients: [
      "Lemon sponge cake",
      "White fondant",
      "Edible gold accents",
      "Chocolate Kaaba topper",
    ],
    frostingType: "Fondant",
    cakeShape: "Round",
  },
  {
    id: 47,
    name: "Pure White Elegance Cake",
    description:
      "A classic and timeless white cake, offering simple elegance for any occasion.",
    image: "/assets/images/products/IMG_1992-Photoroom.jpg", // Corrected image path for Cake 47
    category: "Classic Desserts",
    occasions: ["Weddings", "Anniversary", "Formal Events", "Birthday Cakes"],
    longDescription:
      "Embrace timeless beauty with our Pure White Elegance Cake. This exquisite cake is adorned with delicate white frosting and subtle patterns, exuding sophistication and grace. It’s the perfect choice for weddings, anniversaries, or any event where understated elegance is key. Its pristine appearance makes it a versatile and beautiful option.",
    ingredients: [
      "Classic white cake",
      "Whipped cream frosting",
      "Edible silver beads",
    ],
    frostingType: "Whipped Cream",
    cakeShape: "Round",
  },
  {
    id: 48,
    name: "Dark & Dashing  Cake",
    description:
      "A sleek dark grey cake personalized with a name , perfect for a modern celebration.",
    image: "/assets/images/products/IMG_2015-Photoroom.jpg", // Corrected image path for Cake 48
    category: "Custom Cakes",
    occasions: ["Birthday Cakes", "Personalized Gifts", "Modern Celebrations"],
    longDescription:
      "Make a bold statement with our Dark & Dashing Cake. This striking dark grey cake is stylishly adorned with a name , making it a unique choice for a birthday or special occasion. Its contemporary design and personal touch ensure it stands out at any gathering.",
    ingredients: [
      "Dark chocolate cake",
      "Charcoal grey buttercream",
      "White fondant lettering",
    ],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 49,
    name: "Rosy Red & Grey Floral Cake",
    description:
      "A sophisticated grey cake adorned with rich red roses and green accents, perfect for elegant celebrations.",
    image: "/assets/images/products/IMG_2029-Photoroom.jpg", // Corrected image path for Cake 49
    category: "Occasion Cakes",
    occasions: ["Anniversary", "Birthday Cakes", "Elegant Events"],
    longDescription:
      "Our Rosy Red & Grey Floral Cake offers a beautiful blend of modern sophistication and classic romance. The elegant grey frosting provides a stunning contrast to the vibrant red roses and lush green leaves, making it an ideal choice for anniversaries, birthdays, or any event where you want to add a touch of refined beauty.",
    ingredients: [
      "Vanilla sponge",
      "Grey fondant",
      "Red edible sugar roses",
      "Green edible leaves",
    ],
    frostingType: "Fondant",
    cakeShape: "Round",
  },
  {
    id: 50,
    name: "Rich Red Floral Delight",
    description:
      "A vibrant red cake generously adorned with an abundance of red flowers, celebrating richness and beauty.",
    image: "/assets/images/products/IMG_2034-Photoroom.jpg", // Corrected image path for Cake 50
    category: "Occasion Cakes",
    occasions: [
      "Romantic Gestures",
      "Anniversary",
      "Birthday Cakes",
      "Grand Celebrations",
    ],
    longDescription:
      "Indulge in the beauty of our Rich Red Floral Delight. This stunning cake is completely covered in luscious red frosting and intricate floral designs, creating a breathtaking visual feast. Perfect for grand celebrations, romantic gestures, or simply to add a burst of color to your event, this cake is truly a work of art.",
    ingredients: [
      "Red velvet cake",
      "Red buttercream frosting",
      "Edible sugar flowers",
    ],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 51,
    name: "Classic White Bow Tie Cake",
    description:
      "A timeless white cake elegantly decorated with a delicate black bow, perfect for sophisticated events.",
    image: "/assets/images/products/IMG_2055-Photoroom.jpg", // Corrected image path for Cake 51
    category: "Occasion Cakes",
    occasions: ["Formal Events", "Anniversary", "Weddings", "Birthday Cakes"],
    longDescription:
      "Our Classic White Bow Tie Cake embodies understated elegance and charm. This pristine white cake is beautifully accented with a chic black bow, creating a sophisticated and refined look. It’s an exquisite choice for formal gatherings, anniversaries, or any occasion that calls for a touch of classic flair.",
    ingredients: [
      "Almond cake",
      "White vanilla buttercream",
      "Black fondant bow",
    ],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 52,
    name: "Sara's Dreamy White Floral Cake",
    description:
      "A delicate white cake adorned with subtle white floral patterns and personalized for 'SARA.'",
    image: "/assets/images/products/IMG_2056-Photoroom.jpg", // Corrected image path for Cake 52
    category: "Custom Cakes",
    occasions: ["Birthday Cakes", "Bridal Shower", "Personalized Gifts"],
    longDescription:
      "Celebrate with Sara's Dreamy White Floral Cake, a vision of purity and grace. This beautiful white cake is intricately decorated with subtle floral patterns and the name 'SARA,' making it a wonderfully personal and elegant choice for birthdays, bridal showers, or any special occasion. Its timeless design will charm everyone.",
    ingredients: [
      "White chocolate mud cake",
      "White fondant",
      "Edible lace patterns",
      "White royal icing for lettering",
    ],
    frostingType: "Fondant",
    cakeShape: "Round",
  },
  {
    id: 53,
    name: "OMAR's Holy Kaaba Cake",
    description:
      "A sacred white and grey cake featuring the Kaaba, personalized for 'OMAR.'",
    image: "/assets/images/products/IMG_2058-Photoroom.jpg", // Corrected image path for Cake 53
    category: "Custom Cakes",
    occasions: [
      "Islamic Celebrations",
      "Eid",
      "Hajj/Umrah Return",
      "Religious Milestones",
    ],
    longDescription:
      "Honor faith and celebrate with OMAR's Holy Kaaba Cake. This respectful cake features a detailed depiction of the Kaaba, beautifully rendered in white and grey, and personalized with the name 'OMAR.' It's an ideal choice for Eid, Hajj, Umrah celebrations, or any religious milestone, offering a sweet tribute to a spiritual journey.",
    ingredients: [
      "Vanilla sponge",
      "Grey and white buttercream",
      "Edible image of Kaaba",
      "Chocolate accents",
    ],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 54,
    name: "Pink Butterfly Fantasy Cake",
    description:
      "An enchanting pink cake adorned with delicate butterflies, perfect for a whimsical celebration.",
    image: "/assets/images/products/IMG_2071-Photoroom.jpg", // Corrected image path for Cake 54
    category: "Occasion Cakes",
    occasions: [
      "Children's Parties",
      "Birthday Cakes",
      "Fairy Tale Themes",
      "Baby Shower",
    ],
    longDescription:
      "Flutter into a magical celebration with our Pink Butterfly Fantasy Cake. This delightful cake is coated in a lovely pink frosting and adorned with an array of graceful butterflies, creating a truly enchanting sight. It's the perfect choice for a little girl's birthday, a fairy-tale themed party, or any event that calls for a touch of whimsy and joy.",
    ingredients: [
      "Strawberry cake",
      "Pink vanilla buttercream",
      "Edible wafer paper butterflies",
    ],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 55,
    name: "Elegant White & Red Heart Cake",
    description:
      "A classic white cake with a vibrant red heart, symbolizing love and passion.",
    image: "/assets/images/products/IMG_2075-Photoroom.jpg", // Corrected image path for Cake 55
    category: "Occasion Cakes",
    occasions: ["Anniversary", "Valentine's Day", "Romantic Gestures"],
    longDescription:
      "Express your heartfelt emotions with our Elegant White & Red Heart Cake. This sophisticated white cake is beautifully accented with a bold red heart, making it a perfect symbol of love and affection. Ideal for anniversaries, Valentine's Day, or romantic gestures, this cake is a sweet declaration of devotion.",
    ingredients: [
      "Classic white cake",
      "White buttercream frosting",
      "Red fondant heart",
    ],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 56,
    name: "Pink & Gold Floral Fantasy Cake",
    description:
      "A vibrant pink cake with delicate gold floral accents, perfect for a chic and joyful celebration.",
    image: "/assets/images/products/IMG_2086-Photoroom.jpg", // Corrected image path for Cake 56
    category: "Occasion Cakes",
    occasions: ["Birthday Cakes", "Bridal Shower", "Celebration Cakes"],
    longDescription:
      "Our Pink & Gold Floral Fantasy Cake is a delightful blend of playful charm and elegant sparkle. This eye-catching cake features a vibrant pink base beautifully embellished with intricate gold floral patterns. It's an ideal choice for birthdays, bridal showers, or any event where you want to add a touch of glamour and fun.",
    ingredients: [
      "Raspberry cake",
      "Pink buttercream",
      "Edible gold dust",
      "Royal icing floral designs",
    ],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 57,
    name: "Decadent Drip Chocolate Cake",
    description:
      "A rich chocolate cake with luscious chocolate drip, perfect for the ultimate chocolate lover.",
    image: "/assets/images/products/IMG_2089-Photoroom.jpg", // Corrected image path for Cake 57
    category: "Classic Desserts",
    occasions: ["Birthday Cakes", "Celebration Cakes", "Chocolate Lovers"],
    longDescription:
      "Indulge your cravings with our Decadent Drip Chocolate Cake. This rich and moist chocolate cake is generously topped with a tempting chocolate drip and various chocolate garnishes, creating an irresistible treat for any chocolate aficionado. It's the ultimate dessert for birthdays, celebrations, or simply to satisfy your sweet tooth.",
    ingredients: [
      "Dark chocolate cake",
      "Chocolate ganache drip",
      "Chocolate shavings",
      "Chocolate candies",
    ],
    frostingType: "Ganache",
    cakeShape: "Round",
  },
  {
    id: 58,
    name: "Brittany's Whimsical Floral Cake",
    description:
      "A charming red cake adorned with whimsical white and green floral designs, personalized for 'Brittany.'",
    image: "/assets/images/products/IMG_2091-Photoroom.jpg", // Corrected image path for Cake 58
    category: "Custom Cakes",
    occasions: ["Birthday Cakes", "Personalized Gifts", "Celebration Cakes"],
    longDescription:
      "Celebrate in style with Brittany's Whimsical Floral Cake. This delightful red cake features playful white and green floral patterns, adding a touch of charm and personality. Personalized with the name 'Brittany,' it's the perfect centerpiece for a birthday, a joyful gathering, or any occasion that calls for a unique and memorable dessert.",
    ingredients: [
      "Red velvet cake",
      "Red buttercream",
      "White and green royal icing floral details",
    ],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 59,
    name: "Elegant Swirl White Cake",
    description:
      "A sophisticated white cake featuring delicate swirled frosting, offering timeless elegance.",
    image: "/assets/images/products/IMG_2092-Photoroom.jpg", // Corrected image path for Cake 59
    category: "Classic Desserts",
    occasions: ["Weddings", "Anniversary", "Formal Events"],
    longDescription:
      "Our Elegant Swirl White Cake is a masterpiece of subtle beauty and refined taste. This pristine white cake is meticulously decorated with intricate swirled frosting, creating a textured and visually appealing design. It's the perfect choice for weddings, anniversaries, or any special event where classic elegance is desired.",
    ingredients: [
      "Vanilla bean cake",
      "Whipped cream or meringue buttercream",
      "Edible silver accents",
    ],
    frostingType: "Whipped Cream",
    cakeShape: "Round",
  },
  {
    id: 60,
    name: "Sweet Pink & Gold Crown Cake",
    description:
      "A charming pink and gold cake crowned with a tiara, fit for a little princess.",
    image: "/assets/images/products/IMG_2094-Photoroom.jpg", // Corrected image path for Cake 60
    category: "Occasion Cakes",
    occasions: ["Children's Parties", "Birthday Cakes", "Princess Themes"],
    longDescription:
      "Make her feel like royalty with our Sweet Pink & Gold Crown Cake. This delightful cake features soft pink and gold accents, beautifully topped with a sparkling tiara, making it the ultimate treat for a princess-themed birthday or a special celebration for your little one. It’s a dream come true for any aspiring royalty.",
    ingredients: [
      "Strawberry cake",
      "Pink buttercream",
      "Edible gold glitter",
      "Plastic tiara topper",
    ],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 61,
    name: "Sara's Elegant Black & White Drip Cake",
    description:
      "A chic black and white drip cake personalized for 'SARA,' offering modern sophistication.",
    image: "/assets/images/products/IMG_2095-Photoroom.jpg", // Corrected image path for Cake 61
    category: "Custom Cakes",
    occasions: ["Birthday Cakes", "Modern Celebrations", "Personalized Gifts"],
    longDescription:
      "Make a stylish statement with Sara's Elegant Black & White Drip Cake. This contemporary cake features a striking black and white design with a trendy drip effect, and is personalized with the name 'SARA.' It's the perfect choice for a modern birthday, a sophisticated gathering, or any event where you want a visually stunning and delicious dessert.",
    ingredients: [
      "Cookies and cream cake",
      "Black and white ganache drip",
      "White fondant lettering",
    ],
    frostingType: "Ganache",
    cakeShape: "Round",
  },
  {
    id: 62,
    name: "Charming Woodland Creatures Cake",
    description:
      "A whimsical cake adorned with adorable woodland animals and natural elements.",
    image: "/assets/images/products/IMG_2096-Photoroom.jpg", // Corrected image path for Cake 62
    category: "Occasion Cakes",
    occasions: [
      "Children's Parties",
      "Baby Shower",
      "Nature Themes",
      "Birthday Cakes",
    ],
    longDescription:
      "Step into an enchanting forest with our Charming Woodland Creatures Cake. This delightful cake features various friendly woodland animals and natural details, creating a magical and playful scene. It's the perfect choice for a child's birthday, a baby shower, or any celebration with a whimsical, nature-inspired theme.",
    ingredients: [
      "Carrot cake",
      "Green buttercream",
      "Edible fondant animals and mushrooms",
    ],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 63,
    name: "Elegant Silver & Gold Anniversary Cake",
    description:
      "A sophisticated two-tier cake in silver and gold, perfect for anniversaries or grand celebrations.",
    image: "/assets/images/products/IMG_2101-Photoroom.jpg", // Corrected image path for Cake 63
    category: "Occasion Cakes",
    occasions: ["Anniversary", "Weddings", "Grand Celebrations"],
    longDescription:
      "Celebrate enduring love and success with our Elegant Silver & Gold Anniversary Cake. This stunning two-tier cake shimmers with intricate silver and gold details, exuding luxury and grandeur. It's the ideal centerpiece for milestone anniversaries, elegant weddings, or any grand occasion that calls for a truly majestic dessert.",
    ingredients: [
      "Multiple tiers of varied flavors (e.g., red velvet, lemon, chocolate)",
      "Silver and gold edible paint",
      "Fondant decorations",
    ],
    frostingType: "Fondant",
    cakeShape: "Tiered Round",
  },
  {
    id: 64,
    name: "Cloud Nine White Floral Cake",
    description:
      "An ethereal white cake adorned with delicate white flowers, evoking purity and tranquility.",
    image: "/assets/images/products/IMG_2106-Photoroom.jpg", // Corrected image path for Cake 64
    category: "Occasion Cakes",
    occasions: ["Weddings", "Baptisms", "Anniversary", "Elegant Events"],
    longDescription:
      "Drift away on Cloud Nine with our White Floral Cake. This delicate and ethereal cake is beautifully decorated with an abundance of soft white flowers, creating a serene and angelic appearance. It’s a perfect choice for weddings, baptisms, or any event where you wish to convey purity, peace, and understated elegance.",
    ingredients: [
      "Coconut cake",
      "Whipped cream frosting",
      "Edible sugar flowers",
    ],
    frostingType: "Whipped Cream",
    cakeShape: "Round",
  },
  {
    id: 65,
    name: "Princess Crown Pink & Silver Cake",
    description:
      "A regal pink and silver cake topped with a sparkling crown, fit for a little princess.",
    image: "/assets/images/products/IMG_2115-Photoroom.jpg", // Corrected image path for Cake 65
    category: "Occasion Cakes",
    occasions: ["Children's Parties", "Birthday Cakes", "Princess Themes"],
    longDescription:
      "Fulfill a princess's dream with our Princess Crown Pink & Silver Cake. This enchanting cake features elegant pink and shimmering silver details, crowned with a beautiful tiara. It's the ultimate celebratory cake for birthdays, royal-themed parties, or any occasion where you want to make a little one feel extra special.",
    ingredients: [
      "Pink velvet cake",
      "Silver buttercream",
      "Edible glitter",
      "Plastic crown",
    ],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 66,
    name: "Silver Stream Elegance Cake",
    description:
      "A sleek silver cake with cascading ribbons and pearls, exuding modern elegance.",
    image: "/assets/images/products/IMG_2116-Photoroom.jpg", // Corrected image path for Cake 66
    category: "Occasion Cakes",
    occasions: [
      "Anniversary",
      "Engagement",
      "Formal Events",
      "Modern Celebrations",
    ],
    longDescription:
      "Make a dazzling statement with our Silver Stream Elegance Cake. This modern and sophisticated cake features a stunning silver finish, accented with delicate cascading ribbons and shimmering edible pearls. It's the perfect choice for anniversaries, engagements, or any occasion that calls for a touch of contemporary glamour.",
    ingredients: [
      "Lemon poppy seed cake",
      "Silver fondant",
      "Edible silver ribbons",
      "Edible pearls",
    ],
    frostingType: "Fondant",
    cakeShape: "Round",
  },
  {
    id: 67,
    name: '"REALLY" Black & White Statement Cake',
    description:
      "A bold black and white cake featuring the word 'REALLY,' a fun and intriguing statement piece.",
    image: "/assets/images/products/IMG_2128-Photoroom.jpg", // Corrected image path for Cake 67
    category: "Custom Cakes",
    occasions: ["Birthday Cakes", "Fun Celebrations", "Unique Gifts"],
    longDescription:
      "Spark conversation with our 'REALLY' Black & White Statement Cake. This striking cake, with its contrasting black and white design and the prominent word 'REALLY,' is sure to grab attention and add a touch of playful mystery to your event. It's perfect for a unique birthday, a fun surprise, or any occasion where you want to make a memorable impression.",
    ingredients: [
      "Oreo cake",
      "White and black buttercream",
      "Fondant lettering",
    ],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 68,
    name: "Hearts & Dots Black & White Delight",
    description:
      "A charming black and white cake adorned with playful hearts and dots, perfect for sweet celebrations.",
    image: "/assets/images/products/IMG_2131-Photoroom.jpg", // Corrected image path for Cake 68
    category: "Occasion Cakes",
    occasions: ["Birthday Cakes", "Anniversary", "Sweet Celebrations"],
    longDescription:
      "Spread love and joy with our Hearts & Dots Black & White Delight. This adorable cake combines classic black and white with a playful design of scattered hearts and dots, creating a charming and sweet aesthetic. It’s an ideal choice for birthdays, anniversaries, or any occasion that calls for a delightful and visually appealing treat.",
    ingredients: [
      "Vanilla bean cake",
      "White buttercream",
      "Black edible markers for hearts and dots",
    ],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 69,
    name: "Golden Butterfly Fairy Tale Cake",
    description:
      "A majestic tiered cake adorned with golden butterflies and flowers, fit for a fairy tale.",
    image: "/assets/images/products/IMG_2151-Photoroom.jpg", // Corrected image path for Cake 69
    category: "Occasion Cakes",
    occasions: [
      "Weddings",
      "Anniversary",
      "Grand Celebrations",
      "Birthday Cakes",
    ],
    longDescription:
      "Enter a world of enchantment with our Golden Butterfly Fairy Tale Cake. This stunning multi-tiered cake features intricate golden butterflies and delicate floral accents, creating a truly magical and opulent display. It's the ultimate centerpiece for grand weddings, anniversaries, or any event where you want to create an unforgettable, fairy-tale atmosphere.",
    ingredients: [
      "Multiple tiers of varied flavors (e.g., red velvet, lemon, chocolate)",
      "White fondant",
      "Edible gold butterflies",
      "Sugar flowers",
    ],
    frostingType: "Fondant",
    cakeShape: "Tiered Round",
  },
  {
    id: 70,
    name: "Elegant White & Gold Floral Cake",
    description:
      "A sophisticated white cake adorned with exquisite gold floral designs, perfect for elegant celebrations.",
    image: "/assets/images/products/IMG_2156-Photoroom.jpg", // Corrected image path for Cake 70
    category: "Occasion Cakes",
    occasions: ["Weddings", "Anniversary", "Formal Events", "Birthday Cakes"],
    longDescription:
      "Our Elegant White & Gold Floral Cake is a testament to refined taste and artistry. This pristine white cake is meticulously decorated with intricate gold floral patterns, exuding luxury and timeless beauty. It's an ideal choice for weddings, anniversaries, or any special occasion that calls for a truly elegant and memorable dessert.",
    ingredients: [
      "Almond cake",
      "White buttercream",
      "Edible gold paint",
      "Royal icing floral designs",
    ],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 71,
    name: "Sacred Green Quran Cake",
    description:
      "A revered green cake designed to resemble the Holy Quran, perfect for religious milestones.",
    image: "/assets/images/products/IMG_2157-Photoroom.jpg", // Corrected image path for Cake 71
    category: "Custom Cakes",
    occasions: [
      "Islamic Celebrations",
      "Religious Milestones",
      "Hifz Celebrations",
    ],
    longDescription:
      "Honor faith and learning with our Sacred Green Quran Cake. This unique cake is beautifully crafted to resemble the Holy Quran, featuring a vibrant green cover and intricate golden details. It's a respectful and meaningful centerpiece for graduations from Quranic studies, Hifz celebrations, or other significant Islamic events.",
    ingredients: [
      "Pistachio cake",
      "Green fondant",
      "Edible gold details",
      "Edible paper for 'pages'",
    ],
    frostingType: "Fondant",
    cakeShape: "Custom", // Or "Book Shaped"
  },
  {
    id: 72,
    name: "Holy Kaaba Pilgrimage Cake",
    description:
      "A solemn cake featuring the Kaaba, commemorating a spiritual journey.",
    image: "/assets/images/products/IMG_2159-Photoroom.jpg", // Corrected image path for Cake 72
    category: "Occasion Cakes",
    occasions: [
      "Islamic Celebrations",
      "Hajj/Umrah Return",
      "Religious Milestones",
    ],
    longDescription:
      "Mark a significant spiritual journey with our Holy Kaaba Pilgrimage Cake. This respectful cake beautifully depicts the Kaaba, making it a heartfelt way to celebrate Hajj or Umrah returns, or other important Islamic milestones. It's a thoughtful and symbolic dessert to share with loved ones.",
    ingredients: [
      "Date cake",
      "Black and white fondant",
      "Gold edible accents",
      "Chocolate Kaaba structure",
    ],
    frostingType: "Fondant",
    cakeShape: "Round",
  },
  {
    id: 73,
    name: "Blue & Silver Frozen Fantasy Cake",
    description:
      "A magical blue and silver cake inspired by a winter wonderland, perfect for chilly celebrations.",
    image: "/assets/images/products/IMG_2160-Photoroom.jpg", // Corrected image path for Cake 73
    category: "Occasion Cakes",
    occasions: ["Children's Parties", "Birthday Cakes", "Winter Themes"],
    longDescription:
      "Step into a frozen fairy tale with our Blue & Silver Frozen Fantasy Cake. This enchanting cake shimmers with icy blue and silver tones, adorned with delicate snowflakes and elegant patterns, evoking the magic of a winter wonderland. It's the perfect choice for a 'Frozen' themed party, a winter birthday, or any celebration that embraces the beauty of snow.",
    ingredients: [
      "Vanilla cake",
      "Blue and silver buttercream",
      "Edible glitter",
      "White chocolate snowflakes",
    ],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 74,
    name: "Classic White & Silver Elegance Cake",
    description:
      "A timeless white cake with elegant silver accents, exuding understated sophistication.",
    image: "/assets/images/products/IMG_2182-Photoroom.jpg", // Corrected image path for Cake 74
    category: "Classic Desserts",
    occasions: ["Weddings", "Anniversary", "Formal Events"],
    longDescription:
      "Embrace classic beauty with our Classic White & Silver Elegance Cake. This pristine white cake is subtly adorned with delicate silver accents, creating a refined and sophisticated look. It's an ideal choice for weddings, anniversaries, or any formal occasion where you desire a touch of grace and timeless charm.",
    ingredients: [
      "White almond cake",
      "White fondant",
      "Edible silver pearls",
      "Silver edible dust",
    ],
    frostingType: "Fondant",
    cakeShape: "Round",
  },
  {
    id: 75,
    name: "Red & Silver Heart Duo Cake",
    description:
      "A romantic heart-shaped cake featuring rich red and shimmering silver, perfect for expressing love.",
    image: "/assets/images/products/IMG_2186-Photoroom.jpg", // Corrected image path for Cake 75
    category: "Occasion Cakes",
    occasions: ["Anniversary", "Valentine's Day", "Romantic Gestures"],
    longDescription:
      "Declare your love with our Red & Silver Heart Duo Cake. This beautiful heart-shaped cake combines passionate red with elegant silver accents, symbolizing enduring affection. It's the perfect gift for anniversaries, Valentine's Day, or any occasion where you want to show someone how much you care with a truly heartfelt dessert.",
    ingredients: [
      "Red velvet cake",
      "Red and silver buttercream",
      "Edible silver glitter",
      "Sugar hearts",
    ],
    frostingType: "Buttercream",
    cakeShape: "Heart",
  },
  {
    id: 76,
    name: "Black & White Traditional Kaaba Cake",
    description:
      "A reverent black and white cake depicting the Kaaba, honoring Islamic tradition.",
    image: "/assets/images/products/IMG_2191-Photoroom.jpg", // Corrected image path for Cake 76
    category: "Occasion Cakes",
    occasions: [
      "Islamic Celebrations",
      "Eid",
      "Hajj/Umrah Return",
      "Religious Milestones",
    ],
    longDescription:
      "Celebrate faith with our Black & White Traditional Kaaba Cake. This respectful cake features a dignified portrayal of the Kaaba, rendered in classic black and white, making it a meaningful centerpiece for Eid, Hajj, or Umrah celebrations. It's a beautiful way to acknowledge and share in spiritual milestones.",
    ingredients: [
      "Chocolate cake",
      "Black and white fondant",
      "Gold edible detailing on Kaaba",
    ],
    frostingType: "Fondant",
    cakeShape: "Round",
  },
  {
    id: 77,
    name: "Black & White Floral Drip Cake",
    description:
      "A chic black and white cake with elegant floral details and a modern drip effect.",
    image: "/assets/images/products/IMG_2194-Photoroom.jpg", // Corrected image path for Cake 77
    category: "Occasion Cakes",
    occasions: ["Modern Celebrations", "Birthday Cakes", "Formal Events"],
    longDescription:
      "Our Black & White Floral Drip Cake offers a contemporary twist on classic elegance. This striking cake features a stylish black and white color scheme, enhanced by delicate floral accents and a trendy drip design. It's the perfect choice for a sophisticated birthday, a modern wedding, or any event where you want a visually captivating dessert.",
    ingredients: [
      "White chocolate cake",
      "Black and white ganache drip",
      "White royal icing flowers",
    ],
    frostingType: "Ganache",
    cakeShape: "Round",
  },
  {
    id: 78,
    name: "Pink & Purple Diva Shoe Cake",
    description:
      "A dazzling pink and purple cake shaped like a high-heeled shoe, perfect for a fashionista.",
    image: "/assets/images/products/IMG_2204-Photoroom.jpg", // Corrected image path for Cake 78
    category: "Custom Cakes",
    occasions: ["Birthday Cakes", "Bachelorette Parties", "Fashion Events"],
    longDescription:
      "Step out in style with our Pink & Purple Diva Shoe Cake! This incredibly unique cake is meticulously sculpted into a fashionable high-heeled shoe, adorned with vibrant pink and purple. It's the ultimate showstopper for birthdays, bachelorette parties, or any celebration for the fashion-forward individual.",
    ingredients: [
      "Vanilla pound cake",
      "Pink and purple fondant",
      "Edible glitter",
      "Sugar accents",
    ],
    frostingType: "Fondant",
    cakeShape: "Custom", // Or "Shoe Shaped"
  },
  {
    id: 79,
    name: "Black & White Swirl Elegance Cake",
    description:
      "A sophisticated black and white cake featuring elegant swirled designs, for a touch of modern artistry.",
    image: "/assets/images/products/IMG_2210.jpg", // Corrected image path for Cake 79
    category: "Classic Desserts",
    occasions: ["Modern Celebrations", "Birthday Cakes", "Formal Events"],
    longDescription:
      "Our Black & White Swirl Elegance Cake is a testament to modern artistry and refined taste. This striking cake boasts a dynamic black and white swirled design, creating a visually captivating effect. It's the perfect choice for a chic birthday, a contemporary celebration, or any event where you want to impress with unique style.",
    ingredients: [
      "Red velvet cake",
      "Black and white buttercream swirled design",
      "Edible silver beads",
    ],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 80,
    name: "Fiery Red Rose Cascade Cake",
    description:
      "A passionate red cake adorned with a cascade of red roses, symbolizing intense love and beauty.",
    image: "/assets/images/products/IMG_2219.jpg", // Corrected image path for Cake 80
    category: "Occasion Cakes",
    occasions: [
      "Anniversary",
      "Romantic Gestures",
      "Valentine's Day",
      "Weddings",
    ],
    longDescription:
      "Ignite your celebration with our Fiery Red Rose Cascade Cake. This breathtaking red cake is lavishly decorated with a stunning cascade of handcrafted red roses, creating an incredibly romantic and passionate display. It's the ultimate choice for anniversaries, proposals, or any occasion where you want to express deep affection and make a grand statement.",
    ingredients: ["Chocolate fudge cake", "Red fondant", "Edible sugar roses"],
    frostingType: "Fondant",
    cakeShape: "Round",
  },

  {
    id: 81,
    name: "Cake 81",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_2222.jpg",
    category: "fruit",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 82,
    name: "Cake 82",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_2224.jpg",
    category: "specialty",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 83,
    name: "Cake 83",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_2225.jpg",
    category: "chocolate",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 84,
    name: "Cake 84",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_2226.jpg",
    category: "vanilla",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 85,
    name: "Cake 85",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_2227.jpg",
    category: "fruit",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 86,
    name: "Cake 86",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_2228.jpg",
    category: "specialty",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 87,
    name: "Cake 87",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_2240.jpg",
    category: "chocolate",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 88,
    name: "Cake 88",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_2241.jpg",
    category: "vanilla",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 89,
    name: "Cake 89",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_2255.jpg",
    category: "fruit",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 90,
    name: "Cake 90",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_2279.jpg",
    category: "specialty",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 91,
    name: "Cake 91",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_2281.jpg",
    category: "chocolate",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 92,
    name: "Cake 92",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_3927.jpg",
    category: "vanilla",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 93,
    name: "Cake 93",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_3928.jpg",
    category: "fruit",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 94,
    name: "Cake 94",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_3929.jpg",
    category: "specialty",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 95,
    name: "Cake 95",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_3930.jpg",
    category: "chocolate",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 96,
    name: "Cake 96",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_3949.jpg",
    category: "vanilla",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 97,
    name: "Cake 97",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_3962.jpg",
    category: "fruit",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 98,
    name: "Cake 98",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_3965.jpg",
    category: "specialty",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 99,
    name: "Cake 99",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_3980.jpg",
    category: "chocolate",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 100,
    name: "Cake 100",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_3990.jpg",
    category: "vanilla",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 101,
    name: "Cake 101",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4561.jpg",
    category: "fruit",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 102,
    name: "Cake 102",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4570.jpg",
    category: "specialty",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 103,
    name: "Cake 103",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4571.jpg",
    category: "chocolate",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 104,
    name: "Cake 104",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4588.jpg",
    category: "vanilla",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 105,
    name: "Cake 105",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4589.jpg",
    category: "fruit",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 106,
    name: "Cake 106",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4598.jpg",
    category: "specialty",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 107,
    name: "Cake 107",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4602.jpg",
    category: "chocolate",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 108,
    name: "Cake 108",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4603.jpg",
    category: "vanilla",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 109,
    name: "Cake 109",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4604.jpg",
    category: "fruit",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 110,
    name: "Cake 110",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4638.jpg",
    category: "specialty",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 111,
    name: "Cake 111",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4642.jpg",
    category: "chocolate",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 112,
    name: "Cake 112",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4658.jpg",
    category: "vanilla",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 113,
    name: "Cake 113",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4662.jpg",
    category: "fruit",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 114,
    name: "Cake 114",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4695.jpg",
    category: "specialty",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 115,
    name: "Cake 115",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4701.jpg",
    category: "chocolate",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 116,
    name: "Cake 116",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4703.jpg",
    category: "vanilla",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 117,
    name: "Cake 117",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4705.jpg",
    category: "fruit",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 118,
    name: "Cake 118",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4712.jpg",
    category: "specialty",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 119,
    name: "Cake 119",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4721.jpg",
    category: "chocolate",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 120,
    name: "Cake 120",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4729.jpg",
    category: "vanilla",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 121,
    name: "Cake 121",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4743.jpg",
    category: "fruit",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 122,
    name: "Cake 122",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4753.jpg",
    category: "specialty",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 123,
    name: "Cake 123",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4754.jpg",
    category: "chocolate",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 124,
    name: "Cake 124",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4756.jpg",
    category: "vanilla",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 125,
    name: "Cake 125",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4757.jpg",
    category: "fruit",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 126,
    name: "Cake 126",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4770.jpg",
    category: "specialty",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 127,
    name: "Cake 127",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4783.jpg",
    category: "chocolate",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 128,
    name: "Cake 128",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4784.jpg",
    category: "vanilla",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 129,
    name: "Cake 129",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4785.jpg",
    category: "fruit",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 130,
    name: "Cake 130",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4802.jpg",
    category: "specialty",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 131,
    name: "Cake 131",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4804.jpg",
    category: "chocolate",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 132,
    name: "Cake 132",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4805.jpg",
    category: "vanilla",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 133,
    name: "Cake 133",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4818.jpg",
    category: "fruit",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 134,
    name: "Cake 134",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4820.jpg",
    category: "specialty",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 135,
    name: "Cake 135",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4822.jpg",
    category: "chocolate",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 136,
    name: "Cake 136",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4823.jpg",
    category: "vanilla",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 137,
    name: "Cake 137",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4835.jpg",
    category: "fruit",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 138,
    name: "Cake 138",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4836.jpg",
    category: "specialty",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 139,
    name: "Cake 139",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4841.jpg",
    category: "chocolate",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 140,
    name: "Cake 140",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4851.jpg",
    category: "vanilla",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 141,
    name: "Cake 141",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4867.jpg",
    category: "fruit",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 142,
    name: "Cake 142",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4873.jpg",
    category: "specialty",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 143,
    name: "Cake 143",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4898.jpg",
    category: "chocolate",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 144,
    name: "Cake 144",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4901.jpg",
    category: "vanilla",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 145,
    name: "Cake 145",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4907.jpg",
    category: "fruit",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 146,
    name: "Cake 146",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4910.jpg",
    category: "specialty",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 147,
    name: "Cake 147",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4924.jpg",
    category: "chocolate",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 148,
    name: "Cake 148",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4940.jpg",
    category: "vanilla",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 149,
    name: "Cake 149",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4942.jpg",
    category: "fruit",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 150,
    name: "Cake 150",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4955.jpg",
    category: "specialty",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 151,
    name: "Cake 151",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_4962.jpg",
    category: "chocolate",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 200,
    name: "Cake 200",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_5129.jpg",
    category: "vanilla",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 250,
    name: "Cake 250",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_5254.jpg",
    category: "fruit",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 300,
    name: "Cake 300",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_5308.jpg",
    category: "specialty",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 350,
    name: "Cake 350",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_5398.jpg",
    category: "chocolate",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 400,
    name: "Cake 400",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_5552.jpg",
    category: "vanilla",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 450,
    name: "Cake 450",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_5873.jpg",
    category: "fruit",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 475,
    name: "Cake 475",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_6432.jpg",
    category: "specialty",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 480,
    name: "Cake 480",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_6570.jpg",
    category: "chocolate",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 485,
    name: "Cake 485",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_6673.jpg",
    category: "vanilla",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 490,
    name: "Cake 490",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_6726.jpg",
    category: "fruit",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 495,
    name: "Cake 495",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_6777.jpg",
    category: "specialty",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 496,
    name: "Cake 496",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_6807.jpg",
    category: "chocolate",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 497,
    name: "Cake 497",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_6843.jpg",
    category: "vanilla",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
  {
    id: 498,
    name: "Cake 498",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_6868.jpg",
    category: "fruit",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Buttercream",
    cakeShape: "Round",
  },
  {
    id: 499,
    name: "Cake 499",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_7017.jpg",
    category: "specialty",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Whipped Cream",
    cakeShape: "Custom",
  },
  {
    id: 500,
    name: "Cake 500",
    description: "Delicious cake",
    image: "/assets/images/products/IMG_7173.jpg",
    category: "chocolate",
    occasions: ["all", "birthday", "wedding", "anniversary", "custom"],
    longDescription: "",
    ingredients: [],
    frostingType: "Fondant",
    cakeShape: "Square",
  },
];

// Function to get products by category
export const getProductsByCategory = (category) => {
  return category === "all"
    ? products
    : products.filter((product) => product.category === category);
};

// Function to get product by ID
export const getProductById = (id) => {
  const productId = parseInt(id);
  return products.find((product) => product.id === productId);
};

// Function to get related products (same category, excluding current product)
export const getRelatedProducts = (productId) => {
  const currentProduct = getProductById(productId);

  if (!currentProduct) return [];

  return products
    .filter(
      (product) =>
        product.category === currentProduct.category &&
        product.id !== currentProduct.id
    )
    .slice(0, 3);
};

// Get unique categories for filter buttons
export const getCategories = () => {
  const categories = [
    "Birthday Cakes",
    "Roll Cakes",
    "Dubai Chocolate",
    "Mini Cakes",
    "Desserts in a Cup",
    "Classic Desserts",
    "Custom Cakes",
    "Occasion Cakes",
    "Fruit Cakes",
  ];
  return categories;
};

// Get unique cake shapes for filter buttons
export const getCakeShapes = () => {
  const shapes = ["Round", "Square", "Heart", "Custom"];
  return shapes;
};

// Get unique frosting types for filter buttons
export const getFrostingTypes = () => {
  const frostingTypes = ["Fondant", "Whipped Cream", "Buttercream"];
  return frostingTypes;
};

// Get unique occasions
export const getOccasions = () => {
  const occasions = ["all", "birthday", "wedding", "anniversary", "custom"];
  return occasions;
};

// Get products by frosting type
export const getProductsByFrostingType = (frostingType) => {
  return frostingType === "all"
    ? products
    : products.filter((product) => product.frostingType === frostingType);
};

// Get products by cake shape
export const getProductsByShape = (shape) => {
  return shape === "all"
    ? products
    : products.filter((product) => product.cakeShape === shape);
};

// Function to get products by both category and shape
export const getProductsByCategoryAndShape = (category, shape) => {
  let filteredProducts = products;

  if (category !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  if (shape !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.cakeShape === shape
    );
  }

  return filteredProducts;
};
