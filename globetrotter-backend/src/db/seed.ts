import { DataSource } from 'typeorm';
import { Destination } from '../destinations/entities/destination.entity';
import dataSource from './datasource';

const seedDestinations = async () => {
  const appDataSource: DataSource = await dataSource.initialize();

  const destinationRepository = appDataSource.getRepository(Destination);
  const destinations = [
    {
      "city": "Nice",
      "country": "France",
      "clues": [
        "This city is known as the capital of the French Riviera",
        "It has a famous promenade along the Mediterranean Sea"
      ],
      "funFacts": [
        "The city has over 300 days of sunshine per year",
        "It is home to the world's largest collection of Matisse works"
      ],
      "trivia": [
        "The original name of Nice is Nikaia, a name given by the ancient Greeks",
        "The city's old town is one of the largest in Europe"
      ]
    },
    {
      "city": "Lyon",
      "country": "France",
      "clues": [
        "Known as the gastronomic capital of the world",
        "Home to the famous Basilica of Notre-Dame de Fourvière"
      ],
      "funFacts": [
        "Lyon has more than 4,000 restaurants",
        "The city is built on the confluence of two rivers: the Rhône and the Saône"
      ],
      "trivia": [
        "Lyon was the capital of the Gauls during the Roman Empire",
        "The city's historic center, Vieux Lyon, is a UNESCO World Heritage site"
      ]
    },
    {
      "city": "Rome",
      "country": "Italy",
      "clues": [
        "Home to the Vatican City, an independent city-state enclaved within Rome.",
        "The Colosseum, the largest amphitheater ever built, is located here."
      ],
      "funFacts": [
        "The city has more fountains than any other city in the world.",
        "The Spanish Steps are named after the Spanish embassy to the Holy See."
      ],
      "trivia": [
        "Rome was the last city in the world to reach a population of one million.",
        "The city is built on seven hills."
      ]
    },
    {
      "city": "Paris",
      "country": "France",
      "clues": [
        "Home to the world's most visited art museum",
        "Known for its iconic tower"
      ],
      "funFacts": [
        "The Eiffel Tower can be 15 cm taller during the summer due to the expansion of the iron on hot days",
        "Paris has more dog poop than people in it"
      ],
      "trivia": [
        "The Louvre Museum was originally a fortress built in the 12th century",
        "The city is often referred to as the 'City of Light'"
      ]
    },
    {
      "city": "Durban",
      "country": "South Africa",
      "clues": [
        "It's known as the 'Surf City of South Africa'",
        "Home to the largest flea market in the Southern Hemisphere"
      ],
      "funFacts": [
        "Durban has the highest number of Indian South Africans in the world",
        "The city is famous for its unique blend of African, Indian, and colonial influences"
      ],
      "trivia": [
        "Durban is the largest city in the South African province of KwaZulu-Natal",
        "The city's beachfront is the longest in the world"
      ]
    },
    {
      "city": "Pretoria",
      "country": "South Africa",
      "clues": [
        "Home to the Union Buildings",
        "Known as the Jacaranda City"
      ],
      "funFacts": [
        "Pretoria is one of the world's greenest cities with over 70,000 trees",
        "The city has more than 70 embassies"
      ],
      "trivia": [
        "Pretoria is the administrative capital of South Africa",
        "The Voortrekker Monument is a major landmark in Pretoria"
      ]
    },
    {
      "city": "Udaipur",
      "country": "India",
      "clues": [
        "Known as the 'City of Lakes'",
        "Home to the stunning Lake Palace"
      ],
      "funFacts": [
        "Udaipur is often referred to as the 'Venice of the East'",
        "The city has seven lakes and is known for its romantic ambiance"
      ],
      "trivia": [
        "Udaipur was the historic capital of the kingdom of Mewar",
        "The city is famous for its opulent royal palaces and forts"
      ]
    },
    {
      "city": "Rishikesh",
      "country": "India",
      "clues": [
        "Known as the 'Yoga Capital of the World'",
        "Home to the famous Beatles Ashram"
      ],
      "funFacts": [
        "Rishikesh is the only place in India where you can see the Ganges flowing through the mountains.",
        "The city hosts the annual International Yoga Festival."
      ],
      "trivia": [
        "Rishikesh is mentioned in ancient Hindu scriptures as the place where Lord Rama performed penance.",
        "The city is a gateway to the Himalayas and is surrounded by lush forests and scenic landscapes."
      ]
    },
    {
      "city": "Ottawa",
      "country": "Canada",
      "clues": [
        "Home to the world's largest indoor ice rink",
        "Features the world's longest skating rink in winter"
      ],
      "funFacts": [
        "Ottawa is the only Canadian city with a UNESCO City of Design designation",
        "The city has more than 400 parks and 45 kilometers of scenic greenbelt"
      ],
      "trivia": [
        "Ottawa is the only Canadian city with a UNESCO City of Design designation",
        "The Rideau Canal, a UNESCO World Heritage site, becomes the world's largest skating rink in winter"
      ]
    },
    {
      "city": "Montreal",
      "country": "Canada",
      "clues": [
        "It's known for its vibrant food scene",
        "Home to the famous Notre-Dame Basilica"
      ],
      "funFacts": [
        "Montreal has the largest jazz festival in the world",
        "The city is home to the world's first underground city"
      ],
      "trivia": [
        "Montreal's Old Port is a UNESCO World Heritage site",
        "The city has more than 100 art galleries"
      ]
    },
    {
      "city": "Darjeeling",
      "country": "India",
      "clues": [
        "Known as the 'Queen of the Hills'",
        "Home to the famous Darjeeling Himalayan Railway"
      ],
      "funFacts": [
        "The tea from Darjeeling is prized worldwide and is known as 'Champagne of Teas'",
        "The city has a unique blend of Indian, Nepalese, and Bhutanese cultures"
      ],
      "trivia": [
        "Darjeeling was a popular summer retreat for the British during the colonial era",
        "The city is home to several Buddhist monasteries and temples"
      ]
    },
    {
      "city": "Shimla",
      "country": "India",
      "clues": [
        "Known as the 'Queen of Hills'",
        "Home to the famous Mall Road"
      ],
      "funFacts": [
        "Has a unique toy train ride",
        "The only city in India with a natural ice skating rink"
      ],
      "trivia": [
        "Was the summer capital of British India",
        "Has a library with books dating back to the 18th century"
      ]
    },
    {
      "city": "Gold Coast",
      "country": "Australia",
      "clues": [
        "It's known as the 'Sixth City' of Australia",
        "Home to the world's first surfing school"
      ],
      "funFacts": [
        "The Gold Coast has over 70 kilometers of golden beaches",
        "It hosted the 1988 World Expo"
      ],
      "trivia": [
        "The Gold Coast is home to over 600,000 people",
        "The city has over 500 parks and 10,000 hectares of nature reserves"
      ]
    },
    {
      "city": "Perth",
      "country": "Australia",
      "clues": [
        "It's known as the 'City of Light'",
        "It has the longest homestretch of any city in the world"
      ],
      "funFacts": [
        "Perth is one of the most isolated major cities in the world",
        "It has more sun hours per year than any other Australian capital"
      ],
      "trivia": [
        "The city's name comes from Perth, Scotland",
        "Perth is home to the world's largest single-site university, Murdoch University"
      ]
    },
    {
      "city": "Milan",
      "country": "Italy",
      "clues": [
        "Home to the world's oldest operating shopping mall",
        "Famous for its fashion and design"
      ],
      "funFacts": [
        "The Milan Cathedral took nearly six centuries to complete",
        "Milan is the second-largest economy in the Eurozone"
      ],
      "trivia": [
        "The city has more ATMs than any other city in Europe",
        "Milan's Sforza Castle was once the largest citadel in Europe"
      ]
    },
    {
      "city": "Bologna",
      "country": "Italy",
      "clues": [
        "Known as La Grassa for its rich cuisine",
        "Home to the oldest university in the Western world"
      ],
      "funFacts": [
        "Bologna has more kilometers of porticoes than any other city in the world",
        "The Two Towers, Garisenda and Asinelli, are famous for their lean"
      ],
      "trivia": [
        "Bologna is the capital of the Emilia-Romagna region",
        "The city is famous for its mortadella, a type of large Italian sausage"
      ]
    },
    {
      "city": "Chicago",
      "country": "USA",
      "clues": [
        "Home to the tallest building in the Western Hemisphere",
        "Famous for its deep-dish pizza"
      ],
      "funFacts": [
        "Chicago's O'Hare Airport has more flights than any other airport in the world",
        "The city has over 26 miles of lakefront trails"
      ],
      "trivia": [
        "Chicago is known as the 'Windy City,' but it's not because of the wind",
        "The first skyscraper was built in Chicago in 1885"
      ]
    },
    {
      "city": "San Francisco",
      "country": "USA",
      "clues": [
        "Known for its iconic Golden Gate Bridge",
        "Home to the world-famous cable cars"
      ],
      "funFacts": [
        "The city is famous for its steep streets, with Filbert Street being one of the steepest",
        "San Francisco has more than 50 microclimates"
      ],
      "trivia": [
        "The city was originally named Yerba Buena",
        "The first fortune cookie was created in San Francisco"
      ]
    },
    {
      "city": "Hoi An",
      "country": "Vietnam",
      "clues": [
        "Known for its well-preserved Ancient Town, a UNESCO World Heritage site.",
        "Famous for its tailor-made clothing shops."
      ],
      "funFacts": [
        "Hoi An is one of the few places in the world where you can get custom-made clothes within 24 hours.",
        "The city is illuminated by thousands of colorful lanterns every night."
      ],
      "trivia": [
        "Hoi An was a major trading port in the 15th to 19th centuries.",
        "The Japanese Covered Bridge, built in the 16th century, is one of the city's most iconic landmarks."
      ]
    },
    {
      "city": "Da Nang",
      "country": "Vietnam",
      "clues": [
        "It is known for its beautiful beaches and the famous Marble Mountains.",
        "The Ba Na Hills, featuring the Golden Bridge, is a popular attraction."
      ],
      "funFacts": [
        "Da Nang is home to the world's largest museum of Cham sculptures.",
        "The city's Dragon Bridge is famous for its fire-breathing and water-spitting displays."
      ],
      "trivia": [
        "Da Nang was a major port city during the Vietnam War.",
        "The city is known for its vibrant street food scene, particularly its banh xeo."
      ]
    },
    {
      "city": "Granada",
      "country": "Spain",
      "clues": [
        "Home to the Alhambra, a stunning Moorish citadel and palace",
        "Famous for its flamenco shows and tapas bars"
      ],
      "funFacts": [
        "The Alhambra's name comes from the Arabic word for 'the red one'",
        "Granada has more tapas bars per capita than any other city in Spain"
      ],
      "trivia": [
        "The Alhambra was built as a fortress in AD 889",
        "The Granada Cathedral took nearly 181 years to complete"
      ]
    },
    {
      "city": "Bilbao",
      "country": "Spain",
      "clues": [
        "Home to the Guggenheim Museum",
        "Known for its innovative architecture"
      ],
      "funFacts": [
        "The city is built around the Nervión River",
        "Bilbao is famous for its pintxos, a type of tapas"
      ],
      "trivia": [
        "Bilbao was the European Capital of Culture in 2000",
        "The city's metro system is designed by Norman Foster"
      ]
    },
    {
      "city": "Luxor",
      "country": "Egypt",
      "clues": [
        "It's known as the world's greatest open-air museum.",
        "It was the ancient city of Thebes."
      ],
      "funFacts": [
        "Luxor has more monuments than any other city in the world.",
        "The ancient city was the capital of Egypt for over 1,000 years."
      ],
      "trivia": [
        "The Luxor Temple was built around 1400 BCE.",
        "The city is home to the Valley of the Kings, where many pharaohs were buried."
      ]
    },
    {
      "city": "Aswan",
      "country": "Egypt",
      "clues": [
        "Known for its granite quarries",
        "Home to the Unfinished Obelisk"
      ],
      "funFacts": [
        "The Unfinished Obelisk is the largest known ancient obelisk",
        "Aswan is home to the Aga Khan Mausoleum"
      ],
      "trivia": [
        "The city is named after the ancient Egyptian goddess of the Nile",
        "Aswan's Nile River cruise is famous for its scenic beauty"
      ]
    },
    {
      "city": "Bariloche",
      "country": "Argentina",
      "clues": [
        "It's known as the 'Switzerland of Argentina.'",
        "Home to the famous chocolate shops."
      ],
      "funFacts": [
        "Bariloche is a popular destination for skiing and snowboarding.",
        "The city is surrounded by beautiful lakes and mountains."
      ],
      "trivia": [
        "Bariloche was founded in 1895 by German immigrants.",
        "It is the gateway to Nahuel Huapi National Park."
      ]
    },
    {
      "city": "Mendoza",
      "country": "Argentina",
      "clues": [
        "Known for its Malbec wines",
        "Home to the highest peak outside of the Himalayas"
      ],
      "funFacts": [
        "The city is named after Pedro de Mendoza, a Spanish conquistador",
        "Mendoza is the main city in the Argentine wine industry"
      ],
      "trivia": [
        "The city was destroyed by an earthquake in 1861",
        "Mendoza is known as the 'City of Sunshine' due to its clear skies"
      ]
    },
    {
      "city": "Varanasi",
      "country": "India",
      "clues": [
        "It is one of the oldest continuously inhabited cities in the world.",
        "It is a major pilgrimage site for Hindus."
      ],
      "funFacts": [
        "Varanasi is also known as Banaras and Kashi.",
        "The city is famous for its narrow lanes, ancient temples, and the ghats along the Ganges River."
      ],
      "trivia": [
        "Varanasi is mentioned in the ancient Hindu scripture Rigveda.",
        "The city is believed to be the place where Lord Shiva, one of the principal deities in Hinduism, resides."
      ]
    },
    {
      "city": "Ranthambore",
      "country": "India",
      "clues": [
        "Known for its national park",
        "Famous for tiger spotting"
      ],
      "funFacts": [
        "The park is named after the historic Ranthambore Fort",
        "The park was established as a hunting ground for the Maharajas of Jaipur"
      ],
      "trivia": [
        "The park is home to the largest banyan tree in India",
        "Ranthambore National Park is one of the largest national parks in Northern India"
      ]
    },
    {
      "city": "Chiang Rai",
      "country": "Thailand",
      "clues": [
        "It is known as the 'Rose of the North'",
        "Home to the famous White Temple"
      ],
      "funFacts": [
        "The city is famous for its unique Lanna architecture",
        "It hosts the annual Flower Festival in February"
      ],
      "trivia": [
        "Chiang Rai was founded in 1262 by King Mangrai",
        "The city is a gateway to the Golden Triangle"
      ]
    },
    {
      "city": "Ayutthaya",
      "country": "Thailand",
      "clues": [
        "Known as the Venice of the East",
        "Home to the famous Ayutthaya Historical Park"
      ],
      "funFacts": [
        "Ayutthaya was once the capital of Siam",
        "The city is known for its unique architecture"
      ],
      "trivia": [
        "The city was founded in 1350",
        "It was destroyed by Burmese invaders in 1767"
      ]
    },
    {
      "city": "Sharjah",
      "country": "UAE",
      "clues": [
        "It is known as the cultural capital of the UAE.",
        "It has the largest concentration of museums in the UAE."
      ],
      "funFacts": [
        "Sharjah is home to the world's largest camel sculpture.",
        "The Sharjah Art Museum houses over 5,000 works of art."
      ],
      "trivia": [
        "Sharjah is the third-largest city in the UAE.",
        "The city was named the Cultural Capital of the Arab World by UNESCO in 1998."
      ]
    },
    {
      "city": "Fujairah",
      "country": "United Arab Emirates",
      "clues": [
        "It's the only emirate with a coastline on the Gulf of Oman",
        "Home to the oldest mosque in the UAE"
      ],
      "funFacts": [
        "Fujairah is known for its stunning mountain landscapes",
        "The city hosts the annual Fujairah International Marathon"
      ],
      "trivia": [
        "Fujairah was the last of the seven emirates to join the UAE federation in 1971",
        "The city is famous for its traditional souks and historic forts"
      ]
    },
    {
      "city": "Al Wakrah",
      "country": "Qatar",
      "clues": [
        "This city is known for its traditional souqs and pearl diving history.",
        "Home to the Al Wakrah Stadium, a venue for the 2022 FIFA World Cup."
      ],
      "funFacts": [
        "Al Wakrah is famous for its traditional dhow building industry.",
        "The city's name translates to 'the little tent' in Arabic."
      ],
      "trivia": [
        "Al Wakrah is one of the oldest settlements in Qatar.",
        "The city's architecture features a blend of traditional and modern designs."
      ]
    },
    {
      "city": "Izmir",
      "country": "Turkey",
      "clues": [
        "Known as the birthplace of Homer",
        "Home to the ancient city of Ephesus"
      ],
      "funFacts": [
        "Izmir is one of the oldest cities in the world, with a history dating back over 5,000 years",
        "The city has a vibrant street food culture, with popular dishes like 'midye dolma' (stuffed mussels)"
      ],
      "trivia": [
        "Izmir was the capital of the ancient kingdom of Lydia",
        "The city is famous for its colorful markets, including the Kemeraltı Bazaar"
      ]
    },
    {
      "city": "Konya",
      "country": "Turkey",
      "clues": [
        "Home to the Mausoleum of Mevlana",
        "Known for its whirling dervishes"
      ],
      "funFacts": [
        "Konya is often referred to as the city of dervishes",
        "The city has a rich history dating back to the Hittite era"
      ],
      "trivia": [
        "Konya is famous for its traditional Turkish delight",
        "The city was the capital of the Seljuk Sultanate of Rum"
      ]
    },
    {
      "city": "Cambridge",
      "country": "UK",
      "clues": [
        "Home to the oldest university in the English-speaking world.",
        "Known for its punting on the River Cam."
      ],
      "funFacts": [
        "The university has produced 120 Nobel laureates.",
        "The famous mathematician Isaac Newton studied here."
      ],
      "trivia": [
        "Cambridge University Library is one of the largest in the world.",
        "The city is home to over 150 academic institutions."
      ]
    },
    {
      "city": "Bath",
      "country": "UK",
      "clues": [
        "Known for its natural hot springs",
        "Home to the iconic Roman Baths"
      ],
      "funFacts": [
        "The city's name comes from the Roman name 'Aquae Sulis'",
        "Bath Abbey has the highest vaulted ceiling in England"
      ],
      "trivia": [
        "Jane Austen lived in Bath from 1801 to 1806",
        "The Royal Crescent is one of the most famous landmarks in Bath"
      ]
    },
    {
      "city": "The Hague",
      "country": "Netherlands",
      "clues": [
        "It is home to the International Court of Justice.",
        "It is known for its beautiful beach, Scheveningen."
      ],
      "funFacts": [
        "The city has more than 1,000 national monuments.",
        "The Peace Palace, a UNESCO World Heritage site, is located here."
      ],
      "trivia": [
        "The Hague is the seat of the Dutch government.",
        "The city is known for its vibrant street art scene."
      ]
    },
    {
      "city": "Giethoorn",
      "country": "Netherlands",
      "clues": [
        "Known as the 'Venice of the Netherlands'",
        "No roads, only canals and footpaths"
      ],
      "funFacts": [
        "Has over 180 bridges",
        "Built on a peat bog"
      ],
      "trivia": [
        "Featured in the 1970s Dutch TV series 'De Flat'",
        "Has a museum dedicated to peasant life"
      ]
    },
    {
      "city": "Ghent",
      "country": "Belgium",
      "clues": [
        "Known for its medieval architecture",
        "Home to the famous Ghent Altarpiece"
      ],
      "funFacts": [
        "Ghent has more canals than Amsterdam",
        "The city is famous for its beer culture"
      ],
      "trivia": [
        "Ghent was the capital of the County of Flanders",
        "The city hosts the largest flower carpet in the world every two years"
      ]
    },
    {
      "city": "Bruges",
      "country": "Belgium",
      "clues": [
        "This city is known as the 'Venice of the North'",
        "It is home to the world's first public toilet"
      ],
      "funFacts": [
        "Bruges has more than 500 listed monuments",
        "The city is famous for its lace and chocolate"
      ],
      "trivia": [
        "The Belfry Tower in Bruges has a carillon of 47 bells",
        "Bruges was the capital of the County of Flanders"
      ]
    },
    {
      "city": "Innsbruck",
      "country": "Austria",
      "clues": [
        "Home to the Golden Roof",
        "Hosted the 1964 and 1976 Winter Olympics"
      ],
      "funFacts": [
        "Innsbruck is known as the 'Capital of the Alps'",
        "The city has more than 300 days of sunshine per year"
      ],
      "trivia": [
        "The name Innsbruck means 'In the Inn bridge'",
        "The city's ski jumping hill is one of the largest in the world"
      ]
    },
    {
      "city": "Hallstatt",
      "country": "Austria",
      "clues": [
        "Known as the 'Pearl of the Salzkammergut'",
        "Home to the oldest salt mine in the world"
      ],
      "funFacts": [
        "The town inspired a replica in China",
        "Hallstatt is a UNESCO World Heritage site"
      ],
      "trivia": [
        "The town has a population of around 800 people",
        "Hallstatt's salt mine has been in operation since the Bronze Age"
      ]
    },
    {
      "city": "Lausanne",
      "country": "Switzerland",
      "clues": [
        "It's home to the Olympic Museum",
        "It has a beautiful lakefront promenade"
      ],
      "funFacts": [
        "Lausanne has more cafes per capita than any other city in Switzerland",
        "The city is built on three hills, giving it a unique topography"
      ],
      "trivia": [
        "Lausanne is known as the 'Olympic Capital'",
        "The city's cathedral is the tallest building in Lausanne"
      ]
    },
    {
      "city": "Zermatt",
      "country": "Switzerland",
      "clues": [
        "This village is car-free, promoting a serene atmosphere.",
        "It is home to the iconic Matterhorn mountain."
      ],
      "funFacts": [
        "Zermatt is one of the highest-altitude towns in Europe.",
        "The village has a long tradition of ice skating on frozen lakes."
      ],
      "trivia": [
        "The Matterhorn was first climbed in 1865 by a British team.",
        "Zermatt's St. Mauritius Church dates back to the 13th century."
      ]
    },
    {
      "city": "Basel",
      "country": "Switzerland",
      "clues": [
        "It is home to the oldest university in Switzerland.",
        "The city hosts the largest art fair in the world."
      ],
      "funFacts": [
        "Basel has more museums per capita than any other city in Switzerland.",
        "The city's zoo is one of the oldest in the world."
      ],
      "trivia": [
        "Basel is where the famous painter Paul Klee was born.",
        "The city's tram network is one of the most extensive in the world."
      ]
    },
    {
      "city": "Cologne",
      "country": "Germany",
      "clues": [
        "Home to a famous cathedral",
        "Known for its vibrant carnival celebrations"
      ],
      "funFacts": [
        "The Cologne Cathedral took over 600 years to complete",
        "The city has more pubs per capita than any other German city"
      ],
      "trivia": [
        "Cologne is the fourth-largest city in Germany",
        "The city's name in German is Köln"
      ]
    },
    {
      "city": "Hamburg",
      "country": "Germany",
      "clues": [
        "It is home to the world's largest model railway.",
        "The Elbphilharmonie is a famous concert hall with a unique glass structure."
      ],
      "funFacts": [
        "Hamburg has more bridges than Amsterdam, Venice, and London combined.",
        "The city's famous fish market is held on Sundays."
      ],
      "trivia": [
        "Hamburg's official name is the Free and Hanseatic City of Hamburg.",
        "The city is known for its red light district, the Reeperbahn."
      ]
    },
    {
      "city": "Dresden",
      "country": "Germany",
      "clues": [
        "Known as the 'Florence of the Elbe'",
        "Home to the Zwinger Palace"
      ],
      "funFacts": [
        "Dresden has more than 1,200 buildings of cultural and historical significance",
        "The Dresden Cathedral is the largest Lutheran church in Saxony"
      ],
      "trivia": [
        "The Dresden Cathedral was originally built as a Protestant church",
        "The Zwinger Palace was built in the early 18th century as a showcase for the Elector of Saxony's art collection"
      ]
    },
    {
      "city": "Český Krumlov",
      "country": "Czech Republic",
      "clues": [
        "Located on the Vltava River",
        "Home to a UNESCO World Heritage site"
      ],
      "funFacts": [
        "The town's castle is the second-largest in the Czech Republic",
        "The town has a bear sanctuary"
      ],
      "trivia": [
        "The town's name means 'Krumlov in Bohemia'",
        "The town's castle was built in the 13th century"
      ]
    },
    {
      "city": "Eger",
      "country": "Hungary",
      "clues": [
        "Known for its historic thermal baths",
        "Home to the largest Baroque castle in Hungary"
      ],
      "funFacts": [
        "Eger wine is famous for its red varieties",
        "The city has a unique underground cellar system"
      ],
      "trivia": [
        "Eger was the site of a famous battle in 1552",
        "The Eger Castle is one of the most visited sites in Hungary"
      ]
    },
    {
      "city": "Sopot",
      "country": "Poland",
      "clues": [
        "It is famous for its wooden pier",
        "Home to the longest beach in the Tri-City area"
      ],
      "funFacts": [
        "The city is known for its vibrant nightlife and jazz festival",
        "Sopot was a popular seaside resort for German aristocracy in the 19th century"
      ],
      "trivia": [
        "The Sopot Pier is over 500 meters long",
        "The city has a rich history of spa treatments"
      ]
    },
    {
      "city": "Zakopane",
      "country": "Poland",
      "clues": [
        "Known as the winter capital of Poland",
        "Home to the highest peak in the Tatra Mountains"
      ],
      "funFacts": [
        "Zakopane is famous for its highland cheese called 'oscypek'",
        "The city hosts the annual Wawel Hill Festival"
      ],
      "trivia": [
        "Zakopane is a popular destination for skiing and hiking",
        "The city is known for its traditional wooden architecture"
      ]
    },
    {
      "city": "Sintra",
      "country": "Portugal",
      "clues": [
        "Known as the 'Garden of Portugal'",
        "Home to colorful palaces and castles"
      ],
      "funFacts": [
        "The Pena Palace was built as a summer residence for the Portuguese royal family",
        "The Moorish Castle offers panoramic views of the surrounding area"
      ],
      "trivia": [
        "Sintra's unique microclimate allows for lush vegetation",
        "The town is a UNESCO World Heritage site"
      ]
    },
    {
      "city": "Funchal",
      "country": "Portugal",
      "clues": [
        "It is known as the 'Garden Island'",
        "Home to the world's largest collection of wine cellars"
      ],
      "funFacts": [
        "The city has a vast network of levadas, ancient water channels",
        "The annual Flower Festival transforms the city into a sea of colors"
      ],
      "trivia": [
        "Funchal is the capital of Madeira",
        "The city's name translates to 'fennel,' a plant that was once abundant in the area"
      ]
    },
    {
      "city": "Toledo",
      "country": "Spain",
      "clues": [
        "Known as the 'City of the Three Cultures'",
        "Home to the famous El Greco Museum"
      ],
      "funFacts": [
        "Toledo was the capital of the Visigothic Kingdom",
        "The city has a cathedral with a unique blend of Gothic and Renaissance architecture"
      ],
      "trivia": [
        "Toledo is famous for its high-quality steel swords",
        "The city's historic center is a UNESCO World Heritage Site"
      ]
    },
    {
      "city": "Malaga",
      "country": "Spain",
      "clues": [
        "Home to the Picasso Museum",
        "Birthplace of Pablo Picasso"
      ],
      "funFacts": [
        "Malaga has over 320 days of sunshine per year",
        "The city is known as the birthplace of the painter Pablo Picasso"
      ],
      "trivia": [
        "Malaga is the capital of the Costa del Sol",
        "The Alcazaba, a Moorish fortress, is one of the city's top attractions"
      ]
    },
    {
      "city": "Delphi",
      "country": "Greece",
      "clues": [
        "Home to the famous Oracle of Delphi",
        "A UNESCO World Heritage Site"
      ],
      "funFacts": [
        "The Temple of Apollo was built in the 4th century BC",
        "The ancient stadium here hosted the Pythian Games"
      ],
      "trivia": [
        "The site is located on the slopes of Mount Parnassus",
        "The Delphic maxims were inscribed on the Temple of Apollo"
      ]
    },
    {
      "city": "Corfu",
      "country": "Greece",
      "clues": [
        "It is known as the 'Emerald Isle' of Greece.",
        "It has a rich Venetian influence."
      ],
      "funFacts": [
        "Corfu is home to the oldest European University.",
        "The island has over 400 churches."
      ],
      "trivia": [
        "Corfu was the first Greek state to adopt the fanion in 1807.",
        "The island was a British protectorate from 1815 to 1864."
      ]
    },
    {
      "city": "Naxos",
      "country": "Greece",
      "clues": [
        "It is known as the 'Emerald of the Aegean'",
        "The Temple of Apollo is located here"
      ],
      "funFacts": [
        "Naxos has the highest mountain in the Cyclades",
        "The island is famous for its potatoes"
      ],
      "trivia": [
        "The island has a medieval castle called Kastro",
        "Naxos is home to the largest ancient temple in the Cyclades"
      ]
    },
    {
      "city": "Tromsø",
      "country": "Norway",
      "clues": [
        "It is above the Arctic Circle",
        "Home to the world's northernmost university"
      ],
      "funFacts": [
        "The city is famous for its midnight sun and northern lights",
        "Tromsø is known as the 'Paris of the North'"
      ],
      "trivia": [
        "Tromsø has a polar bear statue in the city center",
        "The Arctic Cathedral is a major landmark"
      ]
    },
    {
      "city": "Trondheim",
      "country": "Norway",
      "clues": [
        "Home to the world's oldest street, Kjøpmannsgata",
        "Known for the Nidaros Cathedral"
      ],
      "funFacts": [
        "Trondheim was once the capital of Norway",
        "The city has a bridge that can be raised to allow ships to pass"
      ],
      "trivia": [
        "Trondheim is home to the oldest university in Norway",
        "The city has a famous monument to Olav Tryggvason"
      ]
    },
    {
      "city": "Gothenburg",
      "country": "Sweden",
      "clues": [
        "Known for its canals and coffee culture.",
        "Home to the Liseberg amusement park."
      ],
      "funFacts": [
        "Gothenburg has more than 40 bridges.",
        "The city is famous for its Neptune statue."
      ],
      "trivia": [
        "Gothenburg is Sweden's second-largest city.",
        "The city was founded in 1621."
      ]
    },
    {
      "city": "Aarhus",
      "country": "Denmark",
      "clues": [
        "It's home to the world's oldest and smallest merchant navy.",
        "The city's name means 'the mouth of the Aar'."
      ],
      "funFacts": [
        "Aarhus is the birthplace of the LEGO brick.",
        "The city has one of the oldest zoos in Europe."
      ],
      "trivia": [
        "Aarhus is the second-largest city in Denmark.",
        "The city is known for its vibrant street art scene."
      ]
    },
    {
      "city": "Lisbon",
      "country": "Portugal",
      "clues": [
        "Known for its historic trams",
        "Home to the world's oldest bookstore"
      ],
      "funFacts": [
        "Lisbon has the oldest operating public transport system in the world",
        "The city is built on seven hills"
      ],
      "trivia": [
        "Lisbon is the oldest city in Western Europe",
        "The Belém Tower was built to protect the city from pirates"
      ]
    },
    {
      "city": "Manarola",
      "country": "Italy",
      "clues": [
        "Known for its terraced vineyards",
        "Features colorful houses along the coast"
      ],
      "funFacts": [
        "The village is car-free",
        "Has a popular hiking trail called Via dell'Amore"
      ],
      "trivia": [
        "Manarola's name comes from the Latin 'Magna Aurelia'",
        "The village is part of the Cinque Terre National Park"
      ]
    },
    {
      "city": "Verona",
      "country": "Italy",
      "clues": [
        "Famous for being the setting of Shakespeare's Romeo and Juliet",
        "Home to a well-preserved Roman amphitheater"
      ],
      "funFacts": [
        "The balcony of Juliet's house attracts thousands of visitors each year",
        "Verona is known for its love-themed tourism"
      ],
      "trivia": [
        "The Verona Arena is one of the best-preserved Roman amphitheaters in the world",
        "The city has a rich history dating back over 2,000 years"
      ]
    },
    {
      "city": "Amalfi",
      "country": "Italy",
      "clues": [
        "It's home to the famous Amalfi Coast.",
        "The city's cathedral has a stunning Byzantine-style interior."
      ],
      "funFacts": [
        "The city's name comes from the Latin word 'Melfi', meaning 'sheep' due to the sheep that once grazed on the cliffs.",
        "The Amalfi Coast is a UNESCO World Heritage site."
      ],
      "trivia": [
        "The city was a powerful maritime republic in the Middle Ages.",
        "The famous limoncello liqueur originates from the Amalfi Coast."
      ]
    },
    {
      "city": "Rabat",
      "country": "Morocco",
      "clues": [
        "It is the capital of Morocco.",
        "Home to the Mausoleum of Mohammed V."
      ],
      "funFacts": [
        "The city's name means 'the rib' in Arabic.",
        "The Kasbah of the Udayas is a UNESCO World Heritage Site."
      ],
      "trivia": [
        "Rabat was founded in the 12th century.",
        "The Hassan Tower is one of the city's most iconic landmarks."
      ]
    },
    {
      "city": "Essaouira",
      "country": "Morocco",
      "clues": [
        "Known for its vibrant arts scene and colorful medina.",
        "Home to a historic port that was once a significant trade hub."
      ],
      "funFacts": [
        "Essaouira is famous for its windsurfing and kitesurfing due to its strong winds.",
        "The city's name means 'image of the sky' in Berber."
      ],
      "trivia": [
        "Essaouira was a filming location for the movie 'Game of Thrones'.",
        "The city is known for its traditional woodcarving and Thuya wood crafts."
      ]
    },
    {
      "city": "Mombasa",
      "country": "Kenya",
      "clues": [
        "It's known as the 'White and Blue City'.",
        "Home to the iconic Fort Jesus."
      ],
      "funFacts": [
        "Mombasa is the only city in Kenya with a governor.",
        "The city is home to the oldest mosque in Kenya."
      ],
      "trivia": [
        "Mombasa's Old Town is a UNESCO World Heritage Site.",
        "The city has a unique blend of Swahili, Arab, and European influences."
      ]
    },
    {
      "city": "Diani Beach",
      "country": "Kenya",
      "clues": [
        "Located on the Indian Ocean",
        "Known for its white sand beaches"
      ],
      "funFacts": [
        "Home to the Colobus Conservation Project",
        "Has some of the best snorkeling spots in Kenya"
      ],
      "trivia": [
        "Was a popular filming location for 'The Constant Gardener'",
        "Offers direct views of the African mainland from the beach"
      ]
    },
    {
      "city": "Kumasi",
      "country": "Ghana",
      "clues": [
        "It is known as the 'Garden City of West Africa'",
        "It is home to the largest open-air market in West Africa"
      ],
      "funFacts": [
        "Kumasi is the traditional capital of the Ashanti Kingdom",
        "The city hosts the annual Aboakyir Festival"
      ],
      "trivia": [
        "The Manhyia Palace Museum is a major attraction in Kumasi",
        "The city is famous for its Kente cloth weaving"
      ]
    },
    {
      "city": "Tamale",
      "country": "Ghana",
      "clues": [
        "It is known as the capital of the Northern Region.",
        "The city hosts the largest market in West Africa."
      ],
      "funFacts": [
        "Tamale is famous for its traditional 'chichinga' street food.",
        "The city is a hub for the Dagomba people, known for their rich cultural heritage."
      ],
      "trivia": [
        "The Tamale Central Mosque is one of the largest mosques in Ghana.",
        "The city is home to the National Cultural Centre, showcasing Ghana's diverse cultural traditions."
      ]
    },
    {
      "city": "Arusha",
      "country": "Tanzania",
      "clues": [
        "Known as the 'Safari Capital of Tanzania'",
        "Gateway to Mount Kilimanjaro"
      ],
      "funFacts": [
        "Home to the Arusha Declaration, a historic document in Tanzania's politics",
        "Hosts the Arusha National Park, one of the smallest but most scenic parks in Tanzania"
      ],
      "trivia": [
        "Arusha is the site of the International Criminal Tribunal for Rwanda",
        "The city is known for its bustling markets, including the famous Makumbusho Market"
      ]
    },
    {
      "city": "Moshi",
      "country": "Tanzania",
      "clues": [
        "Gateway to Mount Kilimanjaro",
        "Home to the Chagga people"
      ],
      "funFacts": [
        "Moshi is known as the 'Gateway to Africa'",
        "The city has a vibrant coffee industry"
      ],
      "trivia": [
        "Moshi has a unique cultural blend of Swahili and Chagga traditions",
        "The town is famous for its local markets"
      ]
    },
    {
      "city": "Port Elizabeth",
      "country": "South Africa",
      "clues": [
        "It's known as the 'Friendly City'",
        "Home to the world's largest ostrich farm"
      ],
      "funFacts": [
        "It has the third-largest harbor in South Africa",
        "The city is a gateway to the famous Addo Elephant National Park"
      ],
      "trivia": [
        "The city was named after Princess Charlotte, the wife of King George III",
        "It was the birthplace of Nelson Mandela's wife, Winnie Madikizela-Mandela"
      ]
    },
    {
      "city": "Bloemfontein",
      "country": "South Africa",
      "clues": [
        "Known as the City of Roses",
        "Home to the Free State Cheetahs rugby team"
      ],
      "funFacts": [
        "Bloemfontein is one of South Africa's three capital cities",
        "The city has a large population of students due to its universities"
      ],
      "trivia": [
        "Bloemfontein is Afrikaans for 'fountain of flowers'",
        "The city is home to the National Museum, which houses a significant collection of dinosaur fossils"
      ]
    },
    {
      "city": "Lalibela",
      "country": "Ethiopia",
      "clues": [
        "Known as the New Jerusalem",
        "Home to rock-hewn churches"
      ],
      "funFacts": [
        "The churches were carved from single blocks of stone",
        "Lalibela was a pilgrimage site for Ethiopian Orthodox Christians"
      ],
      "trivia": [
        "The city is named after King Lalibela",
        "The churches are UNESCO World Heritage Sites"
      ]
    },
    {
      "city": "Bahir Dar",
      "country": "Ethiopia",
      "clues": [
        "Known as the gateway to Ethiopia's historic route",
        "Home to Lake Tana, the largest lake in Ethiopia"
      ],
      "funFacts": [
        "Bahir Dar is famous for its colorful markets and vibrant cultural festivals",
        "The city is a hub for outdoor activities like hiking and birdwatching"
      ],
      "trivia": [
        "Bahir Dar is located near the Blue Nile Falls, one of the most spectacular waterfalls in Africa",
        "The city is known for its traditional Ethiopian coffee ceremonies"
      ]
    },
    {
      "city": "Bhaktapur",
      "country": "Nepal",
      "clues": [
        "Known as the City of Devotees",
        "Home to the famous Nyatapola Temple"
      ],
      "funFacts": [
        "Bhaktapur has over 2000 temples and monuments",
        "The city is famous for its traditional pottery and woodcarving"
      ],
      "trivia": [
        "Bhaktapur is one of the three ancient cities in the Kathmandu Valley",
        "The city's Durbar Square is a UNESCO World Heritage Site"
      ]
    },
    {
      "city": "Lumbini",
      "country": "Nepal",
      "clues": [
        "Birthplace of Buddha",
        "UNESCO World Heritage Site"
      ],
      "funFacts": [
        "Home to the Maya Devi Temple",
        "Features the Sacred Garden"
      ],
      "trivia": [
        "Lumbini is one of the four holy sites for Buddhists",
        "The Ashoka Pillar is a major attraction here"
      ]
    },
    {
      "city": "Punakha",
      "country": "Bhutan",
      "clues": [
        "It is home to the Punakha Dzong, one of the most beautiful dzongs in Bhutan.",
        "The Mo Chhu River flows through the city."
      ],
      "funFacts": [
        "Punakha was the ancient capital of Bhutan.",
        "The Punakha Dzong is the winter residence of the Je Khenpo, the chief abbot of Bhutan."
      ],
      "trivia": [
        "Punakha is known for its fertile valleys and rice fields.",
        "The city is a popular destination for white-water rafting."
      ]
    },
    {
      "city": "Trongsa",
      "country": "Bhutan",
      "clues": [
        "This city is home to the ancestral home of the Bhutanese royal family.",
        "It is located in central Bhutan."
      ],
      "funFacts": [
        "Trongsa Dzong is one of the largest dzongs in Bhutan.",
        "The city is a gateway to the eastern and central parts of Bhutan."
      ],
      "trivia": [
        "Trongsa is known for its beautiful landscapes and historic sites.",
        "The city is famous for its traditional Bhutanese architecture."
      ]
    },
    {
      "city": "Langkawi",
      "country": "Malaysia",
      "clues": [
        "Known as the Jewel of Kedah",
        "Home to the iconic Sky Bridge"
      ],
      "funFacts": [
        "Duty-free island since 1987",
        "Has over 100 islands in the archipelago"
      ],
      "trivia": [
        "Langkawi is part of a UNESCO Geopark",
        "Features the world's largest bird sculpture"
      ]
    },
    {
      "city": "Malacca",
      "country": "Malaysia",
      "clues": [
        "This city is known for its well-preserved historic sites from the colonial era.",
        "It is a UNESCO World Heritage Site."
      ],
      "funFacts": [
        "Malacca is home to the oldest Chinese temple in Malaysia, Cheng Hoon Teng Temple.",
        "The city is famous for its unique blend of Malay, Chinese, and Dutch influences."
      ],
      "trivia": [
        "The Stadthuys, a Dutch colonial building, is one of the oldest surviving buildings in East Asia.",
        "Malacca's Jonker Street is renowned for its night market and antique shops."
      ]
    },
    {
      "city": "Davao",
      "country": "Philippines",
      "clues": [
        "Known as the 'Durian Capital of the Philippines'",
        "Home to the Philippine Eagle Center"
      ],
      "funFacts": [
        "Davao is one of the largest cities in the world by area",
        "The city is famous for its durian fruit and durian-based delicacies"
      ],
      "trivia": [
        "Davao is the largest city in the Philippines by land area",
        "The city is named after the Bagobo word 'daba-daba,' meaning 'place of trade'"
      ]
    },
    {
      "city": "Tagaytay",
      "country": "Philippines",
      "clues": [
        "Known as the 'Second Summer Capital of the Philippines'",
        "Home to the People's Park in the Sky"
      ],
      "funFacts": [
        "The city's name comes from the Tagalog word 'tayâ' which means 'to cut' referring to the early practice of cutting grass in the area",
        "Tagaytay is famous for its strawberry farms and fresh strawberry treats"
      ],
      "trivia": [
        "Tagaytay is a popular destination for locals and tourists alike due to its cool climate and scenic views",
        "The city is home to the Picnic Grove, a popular spot for picnics and outdoor activities"
      ]
    },
    {
      "city": "Gyeongju",
      "country": "South Korea",
      "clues": [
        "Known as the 'museum without walls'",
        "Home to the ancient Silla Kingdom"
      ],
      "funFacts": [
        "Gyeongju has over 50,000 national treasures",
        "The city is famous for its ancient tombs and temples"
      ],
      "trivia": [
        "Gyeongju was the capital of the Silla Kingdom for nearly 1,000 years",
        "The city hosts the annual Gyeongju Cherry Blossom Festival"
      ]
    },
    {
      "city": "Jeonju",
      "country": "South Korea",
      "clues": [
        "Known for its traditional hanok villages",
        "Home to the Jeonju International Film Festival"
      ],
      "funFacts": [
        "Jeonju's bibimbap is a UNESCO City of Gastronomy",
        "The city has over 800 hanok houses"
      ],
      "trivia": [
        "Jeonju is often called the 'city of light and shadows'",
        "The Jeonju Nambu Traditional Market is one of the oldest in Korea"
      ]
    },
    {
      "city": "Chengdu",
      "country": "China",
      "clues": [
        "Famous for its spicy Sichuan cuisine",
        "Home to the world's largest panda reserve"
      ],
      "funFacts": [
        "Chengdu is known as the 'City of Hibiscus'",
        "The city has over 24 million residents"
      ],
      "trivia": [
        "Chengdu is one of the oldest cities in China",
        "The city is a UNESCO City of Gastronomy"
      ]
    },
    {
      "city": "Guilin",
      "country": "China",
      "clues": [
        "Known as the 'World's Best River Cruise'",
        "Home to the stunning Longji Rice Terraces"
      ],
      "funFacts": [
        "Guilin's karst landscape is a UNESCO World Heritage Site",
        "The city is famous for its unique finger-like limestone hills"
      ],
      "trivia": [
        "Guilin is the setting for the classic Chinese novel 'Journey to the West'",
        "The city's name translates to 'Forest of Sweet Osmanthus'"
      ]
    },
    {
      "city": "Kaohsiung",
      "country": "Taiwan",
      "clues": [
        "It is known for its vibrant night markets.",
        "The city has the world's largest collection of dragon sculptures."
      ],
      "funFacts": [
        "Kaohsiung is home to the world's largest Ferris wheel.",
        "The city has a famous underground market."
      ],
      "trivia": [
        "The Lotus Pond is a popular spot for viewing lanterns.",
        "The city's name means 'harbor mouth'."
      ]
    },
    {
      "city": "Hualien",
      "country": "Taiwan",
      "clues": [
        "Known for its stunning Taroko National Park",
        "Home to the famous Dongdamen Night Market"
      ],
      "funFacts": [
        "Hualien is famous for its seafood, particularly oysters",
        "The city is a gateway to the East Coast National Scenic Area"
      ],
      "trivia": [
        "Hualien was originally a small fishing village",
        "The city is known for its traditional aboriginal cultures"
      ]
    },
    {
      "city": "Adelaide",
      "country": "Australia",
      "clues": [
        "Home to the world's largest wine region",
        "Known for its vibrant festivals"
      ],
      "funFacts": [
        "Adelaide is known as the 'City of Churches'",
        "It has more days of sunshine per year than any other Australian capital"
      ],
      "trivia": [
        "Adelaide was the first Australian city to install electric street lights",
        "The city is home to the Adelaide Oval, a famous cricket ground"
      ]
    },
    {
      "city": "Hobart",
      "country": "Australia",
      "clues": [
        "Known for its historic sites like the Port Arthur Historic Site.",
        "Home to the Museum of Old and New Art (MONA)."
      ],
      "funFacts": [
        "Hobart is the second-driest capital city in Australia.",
        "The city is named after Lord Hobart, the British colonial secretary."
      ],
      "trivia": [
        "Hobart is the smallest Australian capital city by population.",
        "The city hosts the annual Sydney to Hobart Yacht Race."
      ]
    },
    {
      "city": "Rotorua",
      "country": "New Zealand",
      "clues": [
        "Known for its geothermal activity",
        "Home to the Te Puia cultural center"
      ],
      "funFacts": [
        "Rotorua has more than 50 geysers",
        "The city is known as the 'Sulphur City'"
      ],
      "trivia": [
        "The Lady Knox Geyser erupts daily at 10:15 AM",
        "Rotorua's Maori culture is deeply integrated into the city's tourism"
      ]
    },
    {
      "city": "Wellington",
      "country": "New Zealand",
      "clues": [
        "It is known as the windy city of New Zealand",
        "Home to the world's southernmost capital city"
      ],
      "funFacts": [
        "Wellington has more cafes and restaurants per capita than New York City",
        "The city is home to the world's most livable city according to a 2017 survey"
      ],
      "trivia": [
        "Wellington is the world's southernmost capital of a sovereign state",
        "The city hosts the biennial Festival of the Arts, which is New Zealand's largest multi-arts festival"
      ]
    },
    {
      "city": "Cienfuegos",
      "country": "Cuba",
      "clues": [
        "Known as the 'Pearl of the South'",
        "Home to the beautiful Punta Gorda neighborhood"
      ],
      "funFacts": [
        "Cienfuegos is a UNESCO World Heritage site",
        "The city was founded by French settlers in 1819"
      ],
      "trivia": [
        "The city's name means 'one hundred fires'",
        "The Teatro Tomas Terry is a famous landmark"
      ]
    },
    {
      "city": "Trinidad",
      "country": "Cuba",
      "clues": [
        "Known for its cobblestone streets",
        "Home to the Museo Nacional de la Lucha Contra Bandidos"
      ],
      "funFacts": [
        "The city is a UNESCO World Heritage site",
        "It boasts the largest collection of colonial architecture in Cuba"
      ],
      "trivia": [
        "Trinidad was founded in 1514",
        "The city's name translates to 'Holy Trinity' in English"
      ]
    },
    {
      "city": "Recife",
      "country": "Brazil",
      "clues": [
        "Known as the 'Brazilian Venice' due to its many bridges and waterways",
        "Home to the largest carnival in Brazil outside of Rio de Janeiro"
      ],
      "funFacts": [
        "The city has over 40 bridges, more than Venice, Italy",
        "Recife is the birthplace of frevo, a lively and energetic dance"
      ],
      "trivia": [
        "Recife is the capital of the state of Pernambuco",
        "The city's name comes from the Portuguese word for 'reef' due to the nearby coral reefs"
      ]
    },
    {
      "city": "Salvador",
      "country": "Brazil",
      "clues": [
        "Known for its vibrant Afro-Brazilian culture",
        "Home to the historic Pelourinho district"
      ],
      "funFacts": [
        "The city is famous for its lively Carnival celebrations",
        "Salvador has the largest number of Baroque churches in the Americas"
      ],
      "trivia": [
        "The first capital of Brazil",
        "The city's name means 'Savior' in Portuguese"
      ]
    },
    {
      "city": "Arequipa",
      "country": "Peru",
      "clues": [
        "Known for its white volcanic stone architecture.",
        "Home to the Santa Catalina Monastery."
      ],
      "funFacts": [
        "Arequipa is known as the 'White City' due to its white volcanic stone buildings.",
        "The city has over 200 churches and chapels."
      ],
      "trivia": [
        "Arequipa's historic center is a UNESCO World Heritage Site.",
        "The city is located near the Colca Canyon, one of the deepest canyons in the world."
      ]
    },
    {
      "city": "Puno",
      "country": "Peru",
      "clues": [
        "Known as the Folklore Capital of Peru",
        "Home to the highest navigable lake in the world"
      ],
      "funFacts": [
        "Puno is famous for its traditional dances and colorful festivals",
        "The city's name comes from the Aymara word for 'feast'"
      ],
      "trivia": [
        "Puno is located on the shores of Lake Titicaca",
        "The city is a gateway to the Uros Floating Islands"
      ]
    },
    {
      "city": "Guayaquil",
      "country": "Ecuador",
      "clues": [
        "This city is known as the 'Pearl of the Pacific'",
        "It is the largest city in Ecuador"
      ],
      "funFacts": [
        "Guayaquil is home to the largest urban park in South America, the Malecon 2000",
        "The city has a unique tradition of celebrating the 'Day of the Dog' on September 29"
      ],
      "trivia": [
        "The Guayaquil Cathedral is one of the oldest churches in Ecuador",
        "The city's airport is named after José Joaquín de Olmedo, a famous Ecuadorian poet"
      ]
    },
    {
      "city": "Valparaíso",
      "country": "Chile",
      "clues": [
        "Known for its colorful hillside homes.",
        "Home to the world's steepest funicular railway."
      ],
      "funFacts": [
        "Valparaíso is a UNESCO World Heritage Site.",
        "The city has 44 ascensores (funicular railways) to navigate its hills."
      ],
      "trivia": [
        "The city's name means 'Paradise Valley' in Spanish.",
        "Valparaíso is the birthplace of the famous Chilean poet Pablo Neruda."
      ]
    },
    {
      "city": "Marseille",
      "country": "France",
      "clues": [
        "Known for its vibrant street art",
        "Home to the famous Château d'If"
      ],
      "funFacts": [
        "Marseille is the oldest city in France",
        "The city has over 100 public parks"
      ],
      "trivia": [
        "Marseille was the European Capital of Culture in 2013",
        "The city has the largest port in France"
      ]
    },
    {
      "city": "Nice",
      "country": "France",
      "clues": [
        "It's known as the birthplace of modern tourism.",
        "The city has over 300 days of sunshine per year."
      ],
      "funFacts": [
        "The Promenade des Anglais is one of the most famous boulevards in the world.",
        "Nice is home to the world's largest outdoor art gallery."
      ],
      "trivia": [
        "The city's name comes from the Latin 'Nicaea', meaning 'victory'.",
        "Nice was part of Italy until 1860."
      ]
    },
    {
      "city": "Bordeaux",
      "country": "France",
      "clues": [
        "Known for its wine production",
        "Home to the famous Place de la Bourse"
      ],
      "funFacts": [
        "Bordeaux has over 350 historic monuments",
        "The city's tram system is entirely solar-powered"
      ],
      "trivia": [
        "Bordeaux is a UNESCO World Heritage site",
        "The city is often referred to as 'La Perle d'Aquitaine'"
      ]
    },
    {
      "city": "Lyon",
      "country": "France",
      "clues": [
        "Home to the largest Renaissance district outside of Italy",
        "Known for its gastronomy, including famous chefs like Paul Bocuse"
      ],
      "funFacts": [
        "Lyon has more than 4,000 restaurants",
        "The city is built on four hills and the Saône and Rhône rivers"
      ],
      "trivia": [
        "Lyon was the capital of the Gauls",
        "The city has over 2,000 murals and street art pieces"
      ]
    },
    {
      "city": "Nantes",
      "country": "France",
      "clues": [
        "Known for the largest mechanical elephant in the world",
        "Home to the famous Château des ducs de Bretagne"
      ],
      "funFacts": [
        "The city has over 850 bridges, earning it the nickname 'Venice of the West'",
        "The Book Machine, a human-powered book-printing machine, is a popular attraction"
      ],
      "trivia": [
        "Nantes was the capital of Brittany before Rennes",
        "The city hosts the largest contemporary art festival in France, Estuaire"
      ]
    },
    {
      "city": "Toulouse",
      "country": "France",
      "clues": [
        "Known as 'La Ville Rose' due to its pink-hued buildings.",
        "Home to the largest European space center."
      ],
      "funFacts": [
        "Toulouse is famous for its violet flowers, which are used in perfumes and cosmetics.",
        "The city has the highest number of sunny days in France."
      ],
      "trivia": [
        "Toulouse is the fourth-largest metropolitan area in France.",
        "The city is home to the largest university campus in France."
      ]
    },
    {
      "city": "Montpellier",
      "country": "France",
      "clues": [
        "This city is known for its vibrant student population.",
        "It is home to the historic Place de la Comédie."
      ],
      "funFacts": [
        "Montpellier has more sunny days per year than any other city in France.",
        "The city is famous for its street art, particularly in the Gambetta neighborhood."
      ],
      "trivia": [
        "Montpellier was the first city in France to have a public bicycle-sharing system.",
        "The city's medical school, founded in 1137, is one of the oldest in the world."
      ]
    },
    {
      "city": "Lille",
      "country": "France",
      "clues": [
        "It is known as the capital of Flanders.",
        "It hosts one of the largest student populations in France."
      ],
      "funFacts": [
        "Lille has more than 100 brasseries, making it a beer lover's paradise.",
        "The city is home to the famous Lille Cathedral, which inspired the design of the Notre-Dame Cathedral in Paris."
      ],
      "trivia": [
        "Lille is twinned with over 20 cities around the world, including Warsaw, Poland and Turin, Italy.",
        "The city is famous for its annual Grand Place Christmas Market, one of the oldest and largest in Europe."
      ]
    },
    {
      "city": "Sapporo",
      "country": "Japan",
      "clues": [
        "Known for its annual Snow Festival",
        "Home to the largest beer museum in Hokkaido"
      ],
      "funFacts": [
        "Sapporo is the fifth-largest city in Japan by population",
        "The city was built from scratch in the 19th century"
      ],
      "trivia": [
        "Sapporo's beer is one of the oldest in Japan",
        "The city hosted the 1972 Winter Olympics"
      ]
    },
    {
      "city": "Sapporo",
      "country": "Japan",
      "clues": [
        "Known for its annual Snow Festival",
        "Home to the world's largest ramen museum"
      ],
      "funFacts": [
        "Sapporo is the fifth-largest city in Japan by population",
        "The city was the host of the 1972 Winter Olympics"
      ],
      "trivia": [
        "Sapporo is famous for its beer, with the Sapporo Beer Museum being a popular attraction",
        "The city's name means 'dry, great rice field' in the Ainu language"
      ]
    },
    {
      "city": "Nagasaki",
      "country": "Japan",
      "clues": [
        "This city is known for its historic role in World War II",
        "It is home to a famous peace park"
      ],
      "funFacts": [
        "The city is famous for its unique 'Castella' sponge cake",
        "Nagasaki is one of the few places in Japan where you can see a natural forest of sugi trees"
      ],
      "trivia": [
        "The city was the second target of the atomic bombing in 1945",
        "Nagasaki is the only city in Japan with a Dutch-style architecture"
      ]
    },
    {
      "city": "Fukuoka",
      "country": "Japan",
      "clues": [
        "Known for its vibrant street food culture",
        "Home to the famous Fukuoka Tower"
      ],
      "funFacts": [
        "Fukuoka is famous for its Hakata ramen, a rich and flavorful noodle soup",
        "The city hosts the largest festival in Kyushu, the Hakata Dontaku"
      ],
      "trivia": [
        "Fukuoka is one of the largest cities on the island of Kyushu",
        "The city's name means 'Fortune' or 'Good Luck' in Japanese"
      ]
    },
    {
      "city": "Kobe",
      "country": "Japan",
      "clues": [
        "Known for its high-quality beef",
        "Home to the world's oldest mayor"
      ],
      "funFacts": [
        "Kobe is a major port city on the southern side of Honshu",
        "The city is famous for its Ijinkan neighborhood, where foreign residents lived in the late 19th and early 20th centuries"
      ],
      "trivia": [
        "The city's name comes from 'kanbe', an old title for supporters of the city's Ikuta Shrine",
        "Kobe is home to the world's first Shinkansen (bullet train) line"
      ]
    },
    {
      "city": "Yokohama",
      "country": "Japan",
      "clues": [
        "It's home to the world's largest Chinatown outside of China.",
        "It has one of the tallest Ferris wheels in the world."
      ],
      "funFacts": [
        "Yokohama is known for its vibrant nightlife and extensive shopping districts.",
        "The city is famous for its high-quality ramen, particularly the Shoyu ramen."
      ],
      "trivia": [
        "Yokohama was one of the first Japanese ports to open to foreign trade in the 19th century.",
        "The city's Red Brick Warehouse is a historic landmark that has been repurposed into a shopping and dining complex."
      ]
    },
    {
      "city": "Hakodate",
      "country": "Japan",
      "clues": [
        "Known for its night view from Mount Hakodate",
        "Home to the historic Goryokaku Fort"
      ],
      "funFacts": [
        "Hakodate was one of the first Japanese ports to open to foreign trade",
        "The city has a unique blend of Western and Japanese architecture"
      ],
      "trivia": [
        "Hakodate is famous for its fresh seafood, particularly crab",
        "The city has a vibrant food culture with numerous local delicacies"
      ]
    },
    {
      "city": "Nara",
      "country": "Japan",
      "clues": [
        "Home to the world's oldest wooden building",
        "Famous for friendly deer roaming freely"
      ],
      "funFacts": [
        "The city was the capital of Japan from 710 to 794",
        "Nara is known as the 'City of Temples' with 1,200 Buddhist temples"
      ],
      "trivia": [
        "Nara Park is famous for its over 1,200 tame deer",
        "The Great Buddha at Todai-ji Temple is one of the largest bronze statues in the world"
      ]
    },
    {
      "city": "Pretoria",
      "country": "South Africa",
      "clues": [
        "It is known as the 'Jacaranda City' due to its thousands of jacaranda trees.",
        "It is home to the Union Buildings, the official seat of the South African government."
      ],
      "funFacts": [
        "Pretoria has more than 70,000 jacaranda trees, which bloom in October, turning the city purple.",
        "The city is one of the world's leading centers for research in agriculture."
      ],
      "trivia": [
        "Pretoria was originally called Pretoria, but it was renamed to Tshwane in 2005, although Pretoria remains the most widely used name.",
        "The city is home to the largest botanical garden in South Africa, the Pretoria National Botanical Garden."
      ]
    },
    {
      "city": "Durban",
      "country": "South Africa",
      "clues": [
        "It's known for its beautiful beaches.",
        "The city has the largest population of Indians outside of India."
      ],
      "funFacts": [
        "Durban is home to the world's largest collection of Victorian and Edwardian buildings outside of the UK.",
        "The city hosts the largest street parade in South Africa."
      ],
      "trivia": [
        "Durban's Golden Mile is a popular tourist destination with a variety of beaches and attractions.",
        "The city is famous for its curry, often referred to as 'Durban curry'."
      ]
    },
    {
      "city": "Port Elizabeth",
      "country": "South Africa",
      "clues": [
        "Known as the 'Friendly City'",
        "Home to the Addo Elephant National Park"
      ],
      "funFacts": [
        "It's one of the largest cities in South Africa",
        "It has beautiful beaches and a rich cultural heritage"
      ],
      "trivia": [
        "The city is named after Princess Charlotte, the wife of King George III",
        "It was a key port during the colonial era"
      ]
    },
    {
      "city": "Johannesburg",
      "country": "South Africa",
      "clues": [
        "Known as the 'City of Gold'",
        "Home to the Apartheid Museum"
      ],
      "funFacts": [
        "Johannesburg is one of the youngest major cities in the world",
        "It has the largest man-made forest in the world"
      ],
      "trivia": [
        "The city was founded in 1886 following the discovery of gold",
        "The Johannesburg Stock Exchange is the largest in Africa"
      ]
    },
    {
      "city": "Stellenbosch",
      "country": "South Africa",
      "clues": [
        "Known for its Cape Dutch architecture.",
        "Home to the University of Stellenbosch."
      ],
      "funFacts": [
        "Stellenbosch is one of the oldest towns in South Africa.",
        "It has more than 200 wine estates."
      ],
      "trivia": [
        "The town is named after Baron Simon van der Stel, the Governor of the Cape Colony.",
        "Stellenbosch is often referred to as the 'City of Oaks'."
      ]
    },
    {
      "city": "Soweto",
      "country": "South Africa",
      "clues": [
        "It is famous for its vibrant street art.",
        "It was the site of significant anti-apartheid movements."
      ],
      "funFacts": [
        "Soweto is home to the largest man-made forest in the Southern Hemisphere.",
        "The name Soweto is an acronym for South Western Townships."
      ],
      "trivia": [
        "The Soweto Uprising in 1976 was a pivotal moment in South Africa's struggle against apartheid.",
        "Soweto has produced several famous musicians, including Brenda Fassie and Miriam Makeba."
      ]
    },
    {
      "city": "Chennai",
      "country": "India",
      "clues": [
        "It's known as the 'Detroit of India' for its automotive industry.",
        "Home to the world's largest urban beach, Marina Beach."
      ],
      "funFacts": [
        "Chennai is the birthplace of the famous Bharatanatyam dance form.",
        "It has the largest medical tourism industry in India."
      ],
      "trivia": [
        "The city was originally named Madras until 1996.",
        "Chennai is one of the oldest cities in India, with a history dating back over 350 years."
      ]
    },
    {
      "city": "Bangalore",
      "country": "India",
      "clues": [
        "Known as the Silicon Valley of India",
        "Home to the iconic Bangalore Palace"
      ],
      "funFacts": [
        "Bangalore is named after 'Bengaluru', which means 'City of Boiled Beans'",
        "The city is home to the largest collection of vintage cars in India"
      ],
      "trivia": [
        "Bangalore is one of the fastest-growing metropolitan cities in India",
        "The city has one of the largest aerospace industries in India"
      ]
    },
    {
      "city": "Hyderabad",
      "country": "India",
      "clues": [
        "Known as the City of Pearls",
        "Home to the world's largest mosque"
      ],
      "funFacts": [
        "Hyderabad is the birthplace of the iconic Hyderabadi biryani",
        "The city has a unique blend of Hindu and Islamic architecture"
      ],
      "trivia": [
        "The Charminar, a famous monument, was built in 1591",
        "Hyderabad is one of the major hubs for pharmaceutical companies in India"
      ]
    },
    {
      "city": "Pune",
      "country": "India",
      "clues": [
        "Known as the cultural capital of Maharashtra",
        "Home to the iconic Osho International Meditation Resort"
      ],
      "funFacts": [
        "Pune is home to the largest number of colleges in India",
        "The city has a thriving street food scene, famous for its vada pav"
      ],
      "trivia": [
        "Pune was the seat of the Peshwa Empire",
        "The city is known as the Oxford of the East due to its educational institutions"
      ]
    },
    {
      "city": "Coimbatore",
      "country": "India",
      "clues": [
        "Home to the largest shopping mall in Tamil Nadu",
        "Known for its textile industries"
      ],
      "funFacts": [
        "Coimbatore is often referred to as the 'Manchester of South India'",
        "The city is famous for its traditional filter coffee"
      ],
      "trivia": [
        "Coimbatore has the largest number of spinning mills in India",
        "It is one of the fastest-growing cities in India"
      ]
    },
    {
      "city": "Surat",
      "country": "India",
      "clues": [
        "This city is known as the diamond capital of the world.",
        "It is home to the world's second-largest stock exchange by number of trades."
      ],
      "funFacts": [
        "Surat was the main port of the Mughal Empire.",
        "The city is famous for its textile industry, particularly its silk."
      ],
      "trivia": [
        "Surat was one of the most important trading centers in the Mughal Empire.",
        "The city is named after the Suraj, the Sun God."
      ]
    },
    {
      "city": "Indore",
      "country": "India",
      "clues": [
        "Known as the food capital of India",
        "Home to the largest square in Asia"
      ],
      "funFacts": [
        "Indore has a unique waste management system",
        "The city is famous for its street food"
      ],
      "trivia": [
        "Indore was the capital of the Holkar dynasty",
        "The city has a rich history of textiles"
      ]
    },
    {
      "city": "Vadodara",
      "country": "India",
      "clues": [
        "Known as the cultural capital of Gujarat",
        "Home to the iconic Laxmi Vilas Palace"
      ],
      "funFacts": [
        "Vadodara is home to the largest university in Gujarat",
        "The city has a rich tradition of classical music and dance"
      ],
      "trivia": [
        "Vadodara was formerly known as Baroda",
        "The city is famous for its intricate architecture and historical sites"
      ]
    },
    {
      "city": "Vancouver",
      "country": "Canada",
      "clues": [
        "Home to the famous Capilano Suspension Bridge",
        "Known for its stunning Stanley Park"
      ],
      "funFacts": [
        "Vancouver has more than 200 parks",
        "The city is named after Captain George Vancouver"
      ],
      "trivia": [
        "Vancouver was the host city for the 2010 Winter Olympics",
        "Granville Island is a popular destination for shopping and dining"
      ]
    },
    {
      "city": "Montreal",
      "country": "Canada",
      "clues": [
        "It is home to the world's largest jazz festival.",
        "You can find the world's second-largest French-speaking population here."
      ],
      "funFacts": [
        "Montreal is known for its underground city, a network of tunnels connecting shopping malls, metro stations, and offices.",
        "The city has over 40 museums, more than any other city in Canada."
      ],
      "trivia": [
        "Montreal hosted the 1967 World's Fair, Expo 67.",
        "The city's name comes from Mount Royal, the large hill at its heart."
      ]
    },
    {
      "city": "Ottawa",
      "country": "Canada",
      "clues": [
        "It is home to the world's largest indoor ice rink.",
        "You can find the world's longest skating rink here in winter."
      ],
      "funFacts": [
        "Ottawa is the only Canadian city with a royal name.",
        "The city has more than 400 parks."
      ],
      "trivia": [
        "Ottawa is the second coldest capital in the world.",
        "The city is the world's second largest technology hub."
      ]
    },
    {
      "city": "Calgary",
      "country": "Canada",
      "clues": [
        "Home to the Calgary Stampede",
        "Known for its proximity to the Rocky Mountains"
      ],
      "funFacts": [
        "Calgary is the sunniest major city in Canada",
        "The city has more days of sunshine than Miami"
      ],
      "trivia": [
        "Calgary hosted the 1988 Winter Olympics",
        "The city's nickname is 'Cowtown'"
      ]
    },
    {
      "city": "Quebec City",
      "country": "Canada",
      "clues": [
        "It is the only fortified city north of Mexico.",
        "The Plains of Abraham is a historic battlefield within the city."
      ],
      "funFacts": [
        "The city's Old Town is a UNESCO World Heritage site.",
        "It is the oldest city north of Mexico."
      ],
      "trivia": [
        "The city's official language is French.",
        "The Château Frontenac is one of the most photographed hotels in the world."
      ]
    },
    {
      "city": "Edmonton",
      "country": "Canada",
      "clues": [
        "Home to the world's largest mall",
        "Known as the Festival City"
      ],
      "funFacts": [
        "Edmonton has more parkland than any other Canadian city",
        "The city hosts over 50 major festivals each year"
      ],
      "trivia": [
        "Edmonton is the northernmost city in North America with a population over one million",
        "The city's river valley is larger than New York City's Central Park"
      ]
    },
    {
      "city": "Winnipeg",
      "country": "Canada",
      "clues": [
        "Home to the largest human-made lake in the world",
        "Known for its vibrant cultural scene"
      ],
      "funFacts": [
        "Has more outdoor rinks per capita than any other city in the world",
        "Hosts the annual Festival du Voyageur, celebrating French-Canadian culture"
      ],
      "trivia": [
        "The Forks, a historic site, is one of the oldest continuously inhabited sites in Canada",
        "The city is home to the Canadian Museum for Human Rights, the first museum solely dedicated to human rights"
      ]
    },
    {
      "city": "Hamilton",
      "country": "Canada",
      "clues": [
        "Known as the 'Ambassador City'",
        "Home to the Canadian Warplane Heritage Museum"
      ],
      "funFacts": [
        "Hamilton is home to the largest waterfall in Ontario",
        "The Royal Botanical Gardens in Hamilton is one of the largest in Canada"
      ],
      "trivia": [
        "The city is named after British politician and statesman Sir William Hamilton",
        "Hamilton has more waterfalls than any other city in the world"
      ]
    },
    {
      "city": "Brisbane",
      "country": "Australia",
      "clues": [
        "It's home to the world's first floating hotel.",
        "It's known for its subtropical climate."
      ],
      "funFacts": [
        "Brisbane has more than 280 parks covering 20,000 hectares.",
        "The city is home to the world's largest collection of Australian art."
      ],
      "trivia": [
        "Brisbane was originally called 'Edenglassie'",
        "The Story Bridge, one of Brisbane's iconic landmarks, was built by the same company that built the Sydney Harbour Bridge."
      ]
    },
    {
      "city": "Melbourne",
      "country": "Australia",
      "clues": [
        "Known for its vibrant street art",
        "Home to the world's largest tram network"
      ],
      "funFacts": [
        "Melbourne has more cafes per capita than any other city in the world",
        "The city is famous for its coffee culture"
      ],
      "trivia": [
        "Melbourne is often referred to as Australia's cultural capital",
        "The city hosts the Australian Open tennis tournament"
      ]
    },
    {
      "city": "Adelaide",
      "country": "Australia",
      "clues": [
        "It's known as the Festival City.",
        "It has more days of sunshine than any other Australian capital."
      ],
      "funFacts": [
        "Adelaide is home to the world's largest wine region, the Barossa Valley.",
        "The city has more public parks per capita than any other city in the world."
      ],
      "trivia": [
        "Adelaide was founded in 1836 as a planned colony.",
        "The city's name was chosen by Queen Adelaide, the queen consort of King William IV."
      ]
    },
    {
      "city": "Perth",
      "country": "Australia",
      "clues": [
        "Home to the world's largest wildflower display",
        "Known as the 'City of Light'"
      ],
      "funFacts": [
        "Perth is closer to Jakarta than it is to Sydney",
        "The city has more sunny days per year than any other Australian capital"
      ],
      "trivia": [
        "Perth is one of the most isolated major cities in the world",
        "The city's Swan River is home to the world's largest collection of black swans"
      ]
    },
    {
      "city": "Hobart",
      "country": "Australia",
      "clues": [
        "It is the second-driest capital city in Australia.",
        "The city is home to the world's oldest air pollution monitoring station."
      ],
      "funFacts": [
        "Hobart has the smallest population of any Australian capital city.",
        "It is the gateway to the Tasmanian wilderness."
      ],
      "trivia": [
        "The city was founded in 1804 as a penal colony.",
        "Hobart is known for its vibrant arts scene, including the Museum of Old and New Art (MONA)."
      ]
    },
    {
      "city": "Cairns",
      "country": "Australia",
      "clues": [
        "Gateway to the Great Barrier Reef",
        "Known for its tropical rainforests"
      ],
      "funFacts": [
        "Home to the world's oldest rainforest, the Daintree",
        "Cairns is known as the adventure capital of Australia"
      ],
      "trivia": [
        "Cairns is named after William Wellington Cairns, the Governor of Queensland",
        "The city hosts the annual Cairns Festival, one of Australia's largest cultural events"
      ]
    },
    {
      "city": "Alice Springs",
      "country": "Australia",
      "clues": [
        "Known as the heart of Australia's Red Centre",
        "Home to the iconic Uluru-Kata Tjuta National Park"
      ],
      "funFacts": [
        "Alice Springs is named after Alice, the wife of the first telegraph engineer",
        "The town is famous for its hot air balloon rides"
      ],
      "trivia": [
        "The town is located almost in the dead center of Australia",
        "Alice Springs is the second largest town in the Northern Territory"
      ]
    },
    {
      "city": "Darwin",
      "country": "Australia",
      "clues": [
        "Home to the world's largest natural rock formation, Uluru, nearby.",
        "Known for its unique blend of Asian and Australian cultures."
      ],
      "funFacts": [
        "Darwin has more than 60 nationalities represented in its population.",
        "The city is named after the British naturalist Charles Darwin."
      ],
      "trivia": [
        "Darwin is the smallest of Australia's capital cities by population.",
        "The city was almost completely destroyed by Cyclone Tracy in 1974."
      ]
    },
    {
      "city": "Florence",
      "country": "Italy",
      "clues": [
        "Home to the iconic Duomo",
        "Birthplace of the Renaissance"
      ],
      "funFacts": [
        "The Ponte Vecchio bridge is the only bridge in Florence that was not destroyed by the Germans during WWII.",
        "The city has more artworks and museums per square meter than any other city in the world."
      ],
      "trivia": [
        "Florence was the first city in Europe to have paved streets.",
        "The city's official language is Italian, but many locals also speak English, especially in tourist areas."
      ]
    },
    {
      "city": "Venice",
      "country": "Italy",
      "clues": [
        "This city is built on more than 118 small islands.",
        "It has no roads, just canals—over 150 of them."
      ],
      "funFacts": [
        "Venice is known as 'La Serenissima,' which means 'The Most Serene.'",
        "The city has been the setting for over 300 films."
      ],
      "trivia": [
        "Venice is slowly sinking, about 1-2 millimeters per year.",
        "The city's famous gondolas were once a common mode of transportation for the wealthy."
      ]
    },
    {
      "city": "Milan",
      "country": "Italy",
      "clues": [
        "Home to the world's oldest shopping mall",
        "Birthplace of the famous Leonardo da Vinci's Last Supper"
      ],
      "funFacts": [
        "Milan is the fashion capital of the world",
        "The city has more ATMs per capita than any other city in Europe"
      ],
      "trivia": [
        "Milan's cathedral, the Duomo, is the largest Gothic cathedral in the world",
        "The city is known for its rich history in opera, with La Scala being one of the most famous opera houses"
      ]
    },
    {
      "city": "Naples",
      "country": "Italy",
      "clues": [
        "It's home to the world's first pizzeria.",
        "The city has more than 400 historic churches."
      ],
      "funFacts": [
        "Naples is the birthplace of the modern pizza.",
        "The city has an underground world of ancient tunnels and catacombs."
      ],
      "trivia": [
        "Naples has the highest number of UNESCO World Heritage sites in Italy.",
        "The city's historic center is the largest in Europe."
      ]
    },
    {
      "city": "Bologna",
      "country": "Italy",
      "clues": [
        "Known as La Grassa (the fat one) for its rich cuisine.",
        "Home to the oldest university in the Western world."
      ],
      "funFacts": [
        "Bologna has more than 38 kilometers of porticoes.",
        "The city boasts over 200 towers, including the famous Two Towers."
      ],
      "trivia": [
        "Bologna is famous for its tortellini, a type of pasta.",
        "The city is known for its vibrant red color, which comes from the terracotta roofs."
      ]
    },
    {
      "city": "Turin",
      "country": "Italy",
      "clues": [
        "Home to the Shroud of Turin",
        "Birthplace of the Italian automotive industry"
      ],
      "funFacts": [
        "The first Italian film was shot in Turin",
        "Turin has more bars per capita than any other city in Italy"
      ],
      "trivia": [
        "The Mole Antonelliana was originally built as a synagogue",
        "Turin's Egyptian Museum is one of the largest in the world"
      ]
    },
    {
      "city": "Palermo",
      "country": "Italy",
      "clues": [
        "It is known for its vibrant street markets.",
        "It is the capital of Sicily."
      ],
      "funFacts": [
        "Palermo has more than 3,000 churches.",
        "The city's street food, arancini, is a must-try."
      ],
      "trivia": [
        "Palermo was founded by the Phoenicians around 734 BC.",
        "The city's name comes from the Greek Panormus, meaning 'all-port'."
      ]
    },
    {
      "city": "Siena",
      "country": "Italy",
      "clues": [
        "Known for its medieval cityscape",
        "Hosts the famous Palio horse race"
      ],
      "funFacts": [
        "The Torre del Mangia leans more than the Leaning Tower of Pisa",
        "The city's historic center is a UNESCO World Heritage site"
      ],
      "trivia": [
        "Siena was one of the wealthiest cities in Europe during the Middle Ages",
        "The city's coat of arms features a she-wolf suckling the twins Romulus and Remus"
      ]
    },
    {
      "city": "Los Angeles",
      "country": "USA",
      "clues": [
        "Home to the famous Hollywood sign",
        "Known for its vibrant entertainment industry"
      ],
      "funFacts": [
        "Los Angeles has more than 220 public parks",
        "The city has the largest urban park in North America"
      ],
      "trivia": [
        "The original name of Los Angeles was El Pueblo de Nuestra Señora la Reina de los Ángeles",
        "The first McDonald's restaurant was opened in San Bernardino, near Los Angeles, in 1948"
      ]
    },
    {
      "city": "Chicago",
      "country": "USA",
      "clues": [
        "Home to the world's first skyscraper",
        "Famous for deep-dish pizza"
      ],
      "funFacts": [
        "The first skyscraper, the Home Insurance Building, was built in Chicago in 1885",
        "Chicago-style hot dogs have specific rules for toppings"
      ],
      "trivia": [
        "The Chicago River famously flows backward",
        "The city is known as the 'Windy City,' though the name has more to do with politics than weather"
      ]
    },
    {
      "city": "Miami",
      "country": "USA",
      "clues": [
        "Known for its vibrant nightlife and Art Deco architecture.",
        "Home to the largest collection of Art Deco buildings in the world."
      ],
      "funFacts": [
        "Miami has the largest cruise ship port in the world.",
        "The city is home to the world's first underwater sculpture garden."
      ],
      "trivia": [
        "Miami is the only major city in the United States founded by a woman.",
        "The city's name comes from the Mayaimi Native American tribe."
      ]
    },
    {
      "city": "Boston",
      "country": "USA",
      "clues": [
        "This city is home to the oldest public park in the United States.",
        "The first public school in America was established here."
      ],
      "funFacts": [
        "Boston has more colleges and universities per square mile than anywhere else in the world.",
        "The Boston Marathon is the world's oldest annual marathon."
      ],
      "trivia": [
        "The first subway system in the United States was built in Boston.",
        "The Boston Tea Party was a key event leading up to the American Revolution."
      ]
    },
    {
      "city": "Las Vegas",
      "country": "USA",
      "clues": [
        "Known as the 'Entertainment Capital of the World'",
        "Home to the famous Las Vegas Strip"
      ],
      "funFacts": [
        "There are more than 150,000 hotel rooms in Las Vegas",
        "The city has more than 110,000 slot machines"
      ],
      "trivia": [
        "The first hotel-casino in Las Vegas was the Flamingo, opened in 1946",
        "The Bellagio's fountains use 1,214 nozzles to create water displays"
      ]
    },
    {
      "city": "Austin",
      "country": "USA",
      "clues": [
        "Known as the 'Live Music Capital of the World'",
        "Home to the famous South by Southwest (SXSW) festival"
      ],
      "funFacts": [
        "Austin is the only state capital in the U.S. without a professional sports team",
        "The city has more live music venues per capita than any other U.S. city"
      ],
      "trivia": [
        "Austin's motto is 'Keep Austin Weird'",
        "The city is named after Stephen F. Austin, known as the 'Father of Texas'"
      ]
    },
    {
      "city": "Seattle",
      "country": "USA",
      "clues": [
        "Home to the original Starbucks",
        "Known for its iconic Space Needle"
      ],
      "funFacts": [
        "Seattle has more coffee shops per capita than any other city in the U.S.",
        "The city is built on seven hills"
      ],
      "trivia": [
        "Seattle is the birthplace of grunge music",
        "The city is named after Chief Sealth, a Suquamish and Duwamish chief"
      ]
    },
    {
      "city": "Dallas",
      "country": "USA",
      "clues": [
        "Home to the world's largest urban arts district",
        "Birthplace of the frozen margarita"
      ],
      "funFacts": [
        "Dallas has more shopping centers per capita than any other city in the U.S.",
        "The city has more than 400 parks and 60 miles of biking and hiking trails"
      ],
      "trivia": [
        "The Dallas Museum of Art has over 24,000 works of art",
        "The Sixth Floor Museum at Dealey Plaza is dedicated to the assassination of President John F. Kennedy"
      ]
    },
    {
      "city": "Valencia",
      "country": "Spain",
      "clues": [
        "Known for its City of Arts and Sciences",
        "Home to the largest paella festival in the world"
      ],
      "funFacts": [
        "Valencia has the oldest operating market in Europe",
        "The city's metro system has a station that is underwater"
      ],
      "trivia": [
        "Valencia was founded by a Roman consul in 138 BC",
        "The Silk Exchange in Valencia is a UNESCO World Heritage site"
      ]
    },
    {
      "city": "Seville",
      "country": "Spain",
      "clues": [
        "Known for its vibrant Flamenco shows",
        "Home to the largest Gothic cathedral in the world"
      ],
      "funFacts": [
        "Seville is the birthplace of tapas",
        "The city has the largest historic center in Europe"
      ],
      "trivia": [
        "The Alcázar of Seville is the oldest royal palace still in use in Europe",
        "Seville hosted the 1992 World Expo"
      ]
    },
    {
      "city": "Bilbao",
      "country": "Spain",
      "clues": [
        "Home to the famous Guggenheim Museum designed by Frank Gehry",
        "Known for its innovative architecture and vibrant food scene"
      ],
      "funFacts": [
        "The city's name comes from the Basque words 'bil' meaning 'mouth' and 'ba' meaning 'river'",
        "Bilbao is famous for its pintxos, a type of tapas"
      ],
      "trivia": [
        "Bilbao's underground metro system is known for its unique and artistic design",
        "The city was once a major whaling port in the 16th and 17th centuries"
      ]
    },
    {
      "city": "Granada",
      "country": "Spain",
      "clues": [
        "Home to the stunning Alhambra palace",
        "Known for its vibrant tapas culture"
      ],
      "funFacts": [
        "The Alhambra's gardens are famous for their water features and nighttime illuminations",
        "Granada is the birthplace of the Flamenco dance"
      ],
      "trivia": [
        "The city's name is derived from the Arabic word for 'hill'",
        "Granada was the last stronghold of the Nasrid dynasty in Spain"
      ]
    },
    {
      "city": "Malaga",
      "country": "Spain",
      "clues": [
        "Home to the Picasso Museum",
        "Birthplace of Pablo Picasso"
      ],
      "funFacts": [
        "Malaga has one of the oldest Roman theaters in the world",
        "The city is known as the birthplace of tapas"
      ],
      "trivia": [
        "Malaga's Alcazaba fortress dates back to the 11th century",
        "The city is famous for its Malaga wine"
      ]
    },
    {
      "city": "Salamanca",
      "country": "Spain",
      "clues": [
        "Known for its stunning Plaza Mayor",
        "Home to the oldest university in Spain"
      ],
      "funFacts": [
        "The city's architecture is famous for its golden stone",
        "Salamanca's university has been a UNESCO World Heritage Site since 1988"
      ],
      "trivia": [
        "The city's name comes from the Celtic word 'Salmantica'",
        "Salamanca is often referred to as 'the golden city'"
      ]
    },
    {
      "city": "San Sebastián",
      "country": "Spain",
      "clues": [
        "Known for its world-renowned gastronomy",
        "Home to the annual Film Festival"
      ],
      "funFacts": [
        "Has more Michelin stars per capita than any other city",
        "The city's name translates to 'Saint Sebastian'"
      ],
      "trivia": [
        "The old town is a UNESCO World Heritage site",
        "The city's beaches are among the best in Europe"
      ]
    },
    {
      "city": "Alicante",
      "country": "Spain",
      "clues": [
        "Known for its vibrant nightlife and beautiful beaches",
        "Home to the Santa Bárbara Castle"
      ],
      "funFacts": [
        "Alicante has over 300 days of sunshine per year",
        "The city is famous for its traditional 'Habaneras' songs"
      ],
      "trivia": [
        "Alicante is the birthplace of the famous Spanish painter Juan Gris",
        "The city hosts the largest fireworks display in Europe during the 'Bonfires of Saint John' festival"
      ]
    },
    {
      "city": "Alexandria",
      "country": "Egypt",
      "clues": [
        "This city is home to the famous Library of Alexandria",
        "The city's name is derived from Alexander the Great"
      ],
      "funFacts": [
        "The city has a unique blend of Mediterranean and Egyptian cultures",
        "The Catacombs of Kom El Shoqafa are an impressive blend of Egyptian, Greek, and Roman art"
      ],
      "trivia": [
        "Alexandria was the capital of ancient Egypt for nearly a thousand years",
        "The city is known as the 'Bride of the Mediterranean'"
      ]
    },
    {
      "city": "Sharm El Sheikh",
      "country": "Egypt",
      "clues": [
        "Known for its vibrant coral reefs",
        "Home to the famous Naama Bay"
      ],
      "funFacts": [
        "Sharm El Sheikh is a duty-free zone",
        "It's a popular destination for liveaboard diving trips"
      ],
      "trivia": [
        "The city was originally a small fishing village",
        "The name Sharm El Sheikh means 'Bay of the Sheikh'"
      ]
    },
    {
      "city": "Luxor",
      "country": "Egypt",
      "clues": [
        "It is known as the world's greatest open-air museum.",
        "The Temple of Karnak is located here."
      ],
      "funFacts": [
        "Luxor was the ancient city of Thebes, the capital of Egypt during the New Kingdom period.",
        "The Avenue of Sphinxes, a 2.7 km long road lined with sphinx statues, connects Karnak Temple and Luxor Temple."
      ],
      "trivia": [
        "The Valley of the Kings, where Tutankhamun's tomb was discovered, is in Luxor.",
        "Luxor's Temple of Hatshepsut is unique for its terraced design."
      ]
    },
    {
      "city": "Aswan",
      "country": "Egypt",
      "clues": [
        "It's home to the largest ancient obelisk in the world.",
        "The city is known for its beautiful Nile River cruises."
      ],
      "funFacts": [
        "Aswan is the sunniest city in the world with over 3,800 hours of sunshine per year.",
        "The city was the southern frontier of Ancient Egypt."
      ],
      "trivia": [
        "The Aswan High Dam, completed in 1970, is one of the largest embankment dams in the world.",
        "The Temple of Philae, dedicated to the goddess Isis, was relocated to Agilkia Island to save it from flooding."
      ]
    },
    {
      "city": "Hurghada",
      "country": "Egypt",
      "clues": [
        "Known as the diving capital of the Red Sea",
        "Home to the Hurghada Grand Aquarium"
      ],
      "funFacts": [
        "Hurghada was a small fishing village until the 1980s",
        "The city hosts the annual Hurghada International Film Festival"
      ],
      "trivia": [
        "The city's name comes from the Arabic word 'Hurghada' meaning 'brilliant'",
        "Hurghada is home to the largest marine park in the Red Sea"
      ]
    },
    {
      "city": "Taba",
      "country": "Egypt",
      "clues": [
        "Border crossing to Israel",
        "Gateway to the Red Sea"
      ],
      "funFacts": [
        "Home to the Taba Heights resort area",
        "Known for its stunning coral reefs"
      ],
      "trivia": [
        "Taba was returned to Egypt in 1989",
        "The Taba Border Crossing is the only land crossing between Egypt and Israel"
      ]
    },
    {
      "city": "Cordoba",
      "country": "Argentina",
      "clues": [
        "Known for its vibrant student population",
        "Home to the historic Jesuit Block"
      ],
      "funFacts": [
        "Cordoba is often called the 'City of Learning'",
        "It has the largest university in Argentina"
      ],
      "trivia": [
        "Cordoba's Jesuit Block is a UNESCO World Heritage Site",
        "The city is famous for its annual Jazz Festival"
      ]
    },
    {
      "city": "Rosario",
      "country": "Argentina",
      "clues": [
        "It is the birthplace of Che Guevara.",
        "The Flag Monument is a major landmark here."
      ],
      "funFacts": [
        "Rosario is known as the 'Mother of Argentine Football'.",
        "The city hosts one of the largest New Year's Eve celebrations in the country."
      ],
      "trivia": [
        "The first flag of Argentina was created in Rosario.",
        "The city has the highest number of street art murals in Argentina."
      ]
    },
    {
      "city": "Mendoza",
      "country": "Argentina",
      "clues": [
        "Known as the heart of Argentine wine country",
        "Home to the highest peak in the Andes, Aconcagua"
      ],
      "funFacts": [
        "Mendoza has more than 1,200 wineries",
        "The city is famous for its Malbec wines"
      ],
      "trivia": [
        "Mendoza was founded in 1561",
        "The city is located in a desert region but has a thriving wine industry"
      ]
    },
    {
      "city": "Bariloche",
      "country": "Argentina",
      "clues": [
        "Known as the 'Switzerland of Argentina'",
        "Home to the world's first national park"
      ],
      "funFacts": [
        "Bariloche is famous for its chocolate",
        "The city has a German-influenced architecture"
      ],
      "trivia": [
        "Bariloche's name comes from the Mapuche word 'Vuriloche'",
        "The city is a hub for adventure sports like skiing and rafting"
      ]
    },
    {
      "city": "San Miguel de Tucumán",
      "country": "Argentina",
      "clues": [
        "Known as the Garden City",
        "Home to the historic Casa Histórica de la Independencia"
      ],
      "funFacts": [
        "The city is the birthplace of Argentina's independence",
        "Has a vibrant student population due to its universities"
      ],
      "trivia": [
        "The city's cathedral is a UNESCO World Heritage Site",
        "Hosts the annual National Folklore Festival"
      ]
    },
    {
      "city": "Mar del Plata",
      "country": "Argentina",
      "clues": [
        "Known for its beautiful beaches and water sports.",
        "Home to the world's first underwater museum."
      ],
      "funFacts": [
        "It's the largest city in Buenos Aires Province.",
        "The city's name translates to 'Sea of the Plains'."
      ],
      "trivia": [
        "Mar del Plata is famous for its annual film festival.",
        "The city has a vibrant nightlife with numerous bars and clubs."
      ]
    },
    {
      "city": "Chiang Mai",
      "country": "Thailand",
      "clues": [
        "It's known as the 'Rose of the North'",
        "Home to over 300 Buddhist temples"
      ],
      "funFacts": [
        "Chiang Mai has the largest concentration of Buddhist temples in Thailand",
        "It's a major hub for elephant sanctuaries"
      ],
      "trivia": [
        "The city was founded in 1296",
        "Chiang Mai is famous for its annual flower festival"
      ]
    },
    {
      "city": "Bangkok",
      "country": "Thailand",
      "clues": [
        "Known as the 'Venice of the East'",
        "Home to the world's largest water fight festival"
      ],
      "funFacts": [
        "The city has over 400 Buddhist temples",
        "Bangkok's full ceremonial name is the longest place name in the world"
      ],
      "trivia": [
        "The city's skytrain is called BTS",
        "Bangkok's floating markets are a major tourist attraction"
      ]
    },
    {
      "city": "Phuket",
      "country": "Thailand",
      "clues": [
        "It is known as the 'Pearl of the Andaman'",
        "The Phuket Big Buddha is a major landmark"
      ],
      "funFacts": [
        "Phuket is Thailand's largest island",
        "It has over 30 stunning beaches"
      ],
      "trivia": [
        "Phuket was once the center of tin mining and rubber tree plantations",
        "The island has its own international airport"
      ]
    },
    {
      "city": "Pattaya",
      "country": "Thailand",
      "clues": [
        "It's known as the 'City of Sin' and 'Sex capital of Asia'",
        "Home to the world's smallest park"
      ],
      "funFacts": [
        "Pattaya has the highest number of bars per capita in the world",
        "The city hosts the annual Pattaya International Music Festival"
      ],
      "trivia": [
        "The name Pattaya is derived from the marching boys",
        "Pattaya was a small fishing village until the 1960s"
      ]
    },
    {
      "city": "Ayutthaya",
      "country": "Thailand",
      "clues": [
        "Known as the 'Venice of the East'",
        "Home to over 400 temples"
      ],
      "funFacts": [
        "The city was once the capital of Siam",
        "Ayutthaya is a UNESCO World Heritage Site"
      ],
      "trivia": [
        "The city was founded in 1350",
        "It was destroyed by the Burmese in 1767"
      ]
    },
    {
      "city": "Hua Hin",
      "country": "Thailand",
      "clues": [
        "Known as Thailand's original seaside resort",
        "Home to the world's longest weekend market"
      ],
      "funFacts": [
        "The city's name means 'stone head'",
        "Hua Hin is a popular destination for Thai royalty"
      ],
      "trivia": [
        "Hua Hin has one of the oldest golf courses in Thailand",
        "The city is famous for its crab dishes"
      ]
    },
    {
      "city": "Krabi",
      "country": "Thailand",
      "clues": [
        "Known for its stunning limestone cliffs",
        "Popular destination for rock climbing"
      ],
      "funFacts": [
        "Home to the Emerald Pool, a natural hot spring",
        "The Railay Beach can only be reached by boat"
      ],
      "trivia": [
        "Krabi is named after a sword",
        "The Tiger Cave Temple has 1237 steps to reach the summit"
      ]
    },
    {
      "city": "Dubai",
      "country": "United Arab Emirates",
      "clues": [
        "It's home to the world's tallest building.",
        "You can ski indoors here."
      ],
      "funFacts": [
        "Dubai has more than 4,500 ATMs, more than any other city in the world.",
        "The city has over 300 days of sunshine per year."
      ],
      "trivia": [
        "Dubai's police fleet includes a Lamborghini and a Ferrari.",
        "The city's metro system is the world's longest fully automated driverless metro network."
      ]
    },
    {
      "city": "Abu Dhabi",
      "country": "United Arab Emirates",
      "clues": [
        "Home to the world's largest hand-loomed carpet",
        "Features the Louvre Abu Dhabi, a museum with a unique architectural design"
      ],
      "funFacts": [
        "The city's name translates to 'Father of Gazelle'",
        "Abu Dhabi is home to the world's largest cluster of cultural institutions"
      ],
      "trivia": [
        "The Sheikh Zayed Grand Mosque can accommodate over 40,000 worshippers",
        "Abu Dhabi has the world's largest indoor ski resort"
      ]
    },
    {
      "city": "Sharjah",
      "country": "United Arab Emirates",
      "clues": [
        "It is known as the cultural capital of the UAE.",
        "It is home to the largest museum of Islamic art in the world."
      ],
      "funFacts": [
        "Sharjah has more than 16 museums.",
        "It is the only city in the UAE to have a UNESCO World Heritage site."
      ],
      "trivia": [
        "The Sharjah Art Museum houses over 5,000 works of art.",
        "The city is famous for its calligraphy art."
      ]
    },
    {
      "city": "Fujairah",
      "country": "United Arab Emirates",
      "clues": [
        "It is the only emirate with a coastline on the Gulf of Oman.",
        "It is known for its beautiful beaches and historic sites."
      ],
      "funFacts": [
        "Fujairah is home to the oldest fort in the UAE, Al-Fujairah Fort.",
        "The city has the largest mosque in the emirate, the Sheikh Zayed Mosque."
      ],
      "trivia": [
        "Fujairah is the gateway to the East Coast of the UAE.",
        "The city is famous for its Friday market, known as the Al Hayl Market."
      ]
    },
    {
      "city": "Ras Al Khaimah",
      "country": "United Arab Emirates",
      "clues": [
        "Home to the tallest ziggurat outside of Mesopotamia",
        "Offers hot air ballooning over the Hajjar Mountains"
      ],
      "funFacts": [
        "The city has the highest peak in the UAE, Jabal Jais",
        "It features the longest zipline in the world, Jebel Jais Flight"
      ],
      "trivia": [
        "Ras Al Khaimah was the last emirate to join the UAE in 1972",
        "The city is known for its ancient archaeological sites, including the Umm Al Quwain Fort"
      ]
    },
    {
      "city": "Istanbul",
      "country": "Turkey",
      "clues": [
        "This city spans two continents.",
        "It was the capital of three empires."
      ],
      "funFacts": [
        "The city's name means 'to the city' in Greek.",
        "It has over 3000 historical mosques."
      ],
      "trivia": [
        "The Hagia Sophia was originally built as a church.",
        "The city's Grand Bazaar is one of the oldest and largest covered markets in the world."
      ]
    },
    {
      "city": "Antalya",
      "country": "Turkey",
      "clues": [
        "It is known as the Turkish Riviera",
        "It has ancient ruins like Perge and Aspendos"
      ],
      "funFacts": [
        "Antalya has over 300 days of sunshine per year",
        "It is home to the longest beach in Turkey"
      ],
      "trivia": [
        "Antalya was founded by Attalus II, king of Pergamon",
        "The city's old harbor is a popular spot for yacht tours"
      ]
    },
    {
      "city": "Izmir",
      "country": "Turkey",
      "clues": [
        "Home to the ancient city of Smyrna",
        "Known for its vibrant nightlife and cultural festivals"
      ],
      "funFacts": [
        "Izmir is famous for its unique street food, especially kumpir, a baked potato dish",
        "The city has one of the oldest clock towers in Turkey, built in 1901"
      ],
      "trivia": [
        "Izmir was the host city for the 2005 Mediterranean Games",
        "The city is known as the 'Pearl of the Aegean'"
      ]
    },
    {
      "city": "Cappadocia",
      "country": "Turkey",
      "clues": [
        "Known for its unique rock formations",
        "Home to underground cities"
      ],
      "funFacts": [
        "The region is famous for its hot air balloon rides",
        "The landscape was shaped by volcanic activity"
      ],
      "trivia": [
        "Cappadocia has over 200 underground cities",
        "The region's rock formations are called 'fairy chimneys'"
      ]
    },
    {
      "city": "Pamukkale",
      "country": "Turkey",
      "clues": [
        "Known for its white travertine terraces",
        "Located in the Denizli Province"
      ],
      "funFacts": [
        "The name Pamukkale means 'cotton castle' in Turkish",
        "The travertines are formed by mineral-rich thermal waters"
      ],
      "trivia": [
        "The site has been a UNESCO World Heritage Site since 1988",
        "The ancient city of Hierapolis is located near Pamukkale"
      ]
    },
    {
      "city": "Bodrum",
      "country": "Turkey",
      "clues": [
        "It's known as the St. Tropez of Turkey.",
        "Home to the ancient Mausoleum at Halicarnassus."
      ],
      "funFacts": [
        "The city's name comes from the ancient Greek word 'Petronium'",
        "Bodrum has the highest number of blue flag beaches in Turkey."
      ],
      "trivia": [
        "The Bodrum Castle was built by the Knights of St. John in the 15th century.",
        "The city is famous for its vibrant nightlife and water sports."
      ]
    },
    {
      "city": "London",
      "country": "UK",
      "clues": [
        "It's home to a famous clock tower.",
        "You can visit the British Museum here."
      ],
      "funFacts": [
        "The London Underground is the world's oldest underground railway.",
        "The city has more than 200 museums."
      ],
      "trivia": [
        "The Tower of London was founded in 1066.",
        "London's River Thames is the longest river entirely in England."
      ]
    },
    {
      "city": "Oxford",
      "country": "UK",
      "clues": [
        "Home to the oldest university in the English-speaking world",
        "Famous for its punting on the River Cherwell"
      ],
      "funFacts": [
        "The Bodleian Library has over 13 million printed items",
        "The city has more than 1500 listed buildings"
      ],
      "trivia": [
        "The Radcliffe Camera was built as a reading room for the Bodleian Library",
        "The city is known for its unique architectural style, including the 'dreaming spires'"
      ]
    },
    {
      "city": "Edinburgh",
      "country": "UK",
      "clues": [
        "Known for its historic castle",
        "Home to the world's largest arts festival"
      ],
      "funFacts": [
        "Edinburgh has more listed buildings than any other city in the UK",
        "It is the second most visited city in the UK"
      ],
      "trivia": [
        "The city is known as the 'Athens of the North'",
        "Edinburgh Zoo is the only place in the world where you can see penguins being fed at 5:30 PM"
      ]
    },
    {
      "city": "Cambridge",
      "country": "UK",
      "clues": [
        "Home to the famous University of Cambridge",
        "Known for punting on the River Cam"
      ],
      "funFacts": [
        "The University of Cambridge is the second-oldest university in the English-speaking world",
        "The city has more bicycles than residents"
      ],
      "trivia": [
        "Cambridge University's library holds over 8 million items",
        "The city is home to the world-renowned Cavendish Laboratory"
      ]
    },
    {
      "city": "Bristol",
      "country": "UK",
      "clues": [
        "Known for its vibrant street art",
        "Home to the iconic Clifton Suspension Bridge"
      ],
      "funFacts": [
        "Bristol was the first city in the UK to be named the European Green Capital",
        "The city has a famous street food scene, particularly in Stokes Croft"
      ],
      "trivia": [
        "Bristol is the birthplace of the famous actor Cary Grant",
        "The city hosts the world's largest overland vehicle festival, the Bristol Harbour Festival"
      ]
    },
    {
      "city": "Manchester",
      "country": "UK",
      "clues": [
        "Home to the world's first modern railway station",
        "Known for its vibrant music scene and two major football teams"
      ],
      "funFacts": [
        "The city has more canals than Venice",
        "The world's first programmable computer was built here"
      ],
      "trivia": [
        "Manchester is often referred to as the original modern city",
        "The city's name comes from the Celtic name for the River Irwell, Mamucium"
      ]
    },
    {
      "city": "Amsterdam",
      "country": "Netherlands",
      "clues": [
        "It's known for its canals and bicycles.",
        "Home to the Van Gogh Museum."
      ],
      "funFacts": [
        "Amsterdam has more bikes than residents.",
        "The city's canals are a UNESCO World Heritage site."
      ],
      "trivia": [
        "The city has over 1,500 bridges.",
        "The Anne Frank House is a popular historical site."
      ]
    },
    {
      "city": "Rotterdam",
      "country": "Netherlands",
      "clues": [
        "Known for its modern architecture.",
        "Home to the iconic Erasmus Bridge."
      ],
      "funFacts": [
        "Rotterdam has more than 580,000 bicycles, more than residents.",
        "The city has the largest port in Europe."
      ],
      "trivia": [
        "Rotterdam was almost entirely destroyed during World War II.",
        "The Cube Houses are a famous landmark designed by architect Piet Blom."
      ]
    },
    {
      "city": "The Hague",
      "country": "Netherlands",
      "clues": [
        "Home to the Dutch Royal Family",
        "International Court of Justice is located here"
      ],
      "funFacts": [
        "The city has over 1,000 national monuments",
        "It is the third largest city in the Netherlands"
      ],
      "trivia": [
        "The Peace Palace, seat of the International Court of Justice, was a gift from American steel magnate Andrew Carnegie",
        "The Hague is known as the City of Peace and Justice"
      ]
    },
    {
      "city": "Utrecht",
      "country": "Netherlands",
      "clues": [
        "It has the oldest university in the Netherlands.",
        "The city is known for its wharves and canals."
      ],
      "funFacts": [
        "Utrecht's Dom Tower is the tallest church tower in the Netherlands.",
        "The city has the largest concentration of canals in the Netherlands."
      ],
      "trivia": [
        "Utrecht is home to the largest bicycle parking garage in the world.",
        "The city's name is derived from the Latin word 'Traiectum'."
      ]
    },
    {
      "city": "Groningen",
      "country": "Netherlands",
      "clues": [
        "Known for its vibrant student population",
        "Home to the Groninger Museum"
      ],
      "funFacts": [
        "The city has the highest number of bicycles per capita in the Netherlands",
        "Groningen is known as 'Martinistad' after the Martini Tower"
      ],
      "trivia": [
        "The city was the European Capital of Culture in 2008",
        "Groningen has one of the oldest student rowing clubs in the world"
      ]
    },
    {
      "city": "Brussels",
      "country": "Belgium",
      "clues": [
        "Home to the headquarters of the European Union.",
        "Famous for its waffles and chocolates."
      ],
      "funFacts": [
        "Brussels has more bars per capita than any other city in Europe.",
        "The city's Manneken Pis statue is dressed in different costumes throughout the year."
      ],
      "trivia": [
        "The Atomium, built for the 1958 World Expo, is one of Brussels' most iconic landmarks.",
        "Brussels is known as the 'Capital of Europe' due to the presence of the EU institutions."
      ]
    },
    {
      "city": "Antwerp",
      "country": "Belgium",
      "clues": [
        "It is famous for its diamond industry",
        "Home to the largest port in the world"
      ],
      "funFacts": [
        "Antwerp's zoo is the oldest in the world",
        "The city has more bars per resident than any other city in Belgium"
      ],
      "trivia": [
        "The city is known as the 'City of Diamonds'",
        "Antwerp's cathedral houses three significant paintings by Peter Paul Rubens"
      ]
    },
    {
      "city": "Ghent",
      "country": "Belgium",
      "clues": [
        "Known for its medieval architecture",
        "Home to the famous Ghent Altarpiece"
      ],
      "funFacts": [
        "Ghent is often referred to as the 'Florence of the North'",
        "The city has over 100 bridges"
      ],
      "trivia": [
        "Ghent was the capital of the County of Flanders",
        "The city's famous beer, Grendel, is brewed in the basement of a church"
      ]
    },
    {
      "city": "Bruges",
      "country": "Belgium",
      "clues": [
        "It's known as the 'Venice of the North'",
        "Home to the famous De Halve Maan Brewery"
      ],
      "funFacts": [
        "Bruges has more than 80 kilometers of canals",
        "The city's historic center is a UNESCO World Heritage site"
      ],
      "trivia": [
        "The Belfry Tower has 366 steps",
        "The Groeningemuseum houses works by Jan van Eyck"
      ]
    },
    {
      "city": "Liege",
      "country": "Belgium",
      "clues": [
        "Known for its historic citadel",
        "Home to the famous Curtius Museum"
      ],
      "funFacts": [
        "Liege is the third most populous city in Belgium",
        "The city has over 200 fountains"
      ],
      "trivia": [
        "Liege is known as the 'City of Five Bridges'",
        "The city hosts the annual 'Fête de Wallonie'"
      ]
    },
    {
      "city": "Vienna",
      "country": "Austria",
      "clues": [
        "Known for its coffee houses and pastries",
        "Home to the famous Hofburg Palace"
      ],
      "funFacts": [
        "Vienna has more ballrooms than any other city in the world",
        "The city has over 100 museums"
      ],
      "trivia": [
        "Vienna's State Opera House offers standing room tickets for just a few euros",
        "The city's public transportation system is one of the most extensive in the world"
      ]
    },
    {
      "city": "Salzburg",
      "country": "Austria",
      "clues": [
        "Birthplace of Mozart",
        "Home to the famous Hohensalzburg Fortress"
      ],
      "funFacts": [
        "The city's name means 'Salt Castle'",
        "The Sound of Music was filmed here"
      ],
      "trivia": [
        "Salzburg is known as the 'Rome of the North'",
        "It has more baroque buildings than any other city in Europe"
      ]
    },
    {
      "city": "Innsbruck",
      "country": "Austria",
      "clues": [
        "Home to the Golden Roof",
        "Hosted the 1964 and 1976 Winter Olympics"
      ],
      "funFacts": [
        "The city's name translates to 'bridge over the Inn'",
        "Innsbruck is known as the 'Capital of the Alps'"
      ],
      "trivia": [
        "The Imperial Palace is a major tourist attraction",
        "The city has one of the oldest ski clubs in the world"
      ]
    },
    {
      "city": "Graz",
      "country": "Austria",
      "clues": [
        "Known as the city of the seven towers",
        "Home to the oldest zoo in the world"
      ],
      "funFacts": [
        "Graz is a UNESCO City of Design",
        "The city has one of the largest historic old towns in Central Europe"
      ],
      "trivia": [
        "Graz was the European Capital of Culture in 2003",
        "The city's Schlossberg hill is a popular spot for paragliding"
      ]
    },
    {
      "city": "Zurich",
      "country": "Switzerland",
      "clues": [
        "It's home to the world's largest clock face",
        "It's a global center for banking and finance"
      ],
      "funFacts": [
        "Zurich has more water per capita than any other city in the world",
        "The city has over 1,200 fountains"
      ],
      "trivia": [
        "Zurich was the first city in Europe to have a public electric street lighting system",
        "The city's name is derived from the Old High German term for 'land cleared by burning'"
      ]
    },
    {
      "city": "Geneva",
      "country": "Switzerland",
      "clues": [
        "Home to the headquarters of the United Nations",
        "Known for its watchmaking industry"
      ],
      "funFacts": [
        "Geneva is the birthplace of the web",
        "The city has more banks than restaurants"
      ],
      "trivia": [
        "The Jet d'Eau, Geneva's iconic water fountain, can shoot water up to 140 meters high",
        "Geneva's public transportation system is one of the most efficient in the world"
      ]
    },
    {
      "city": "Lucerne",
      "country": "Switzerland",
      "clues": [
        "It's known as the 'City of Light'",
        "It is home to the iconic Chapel Bridge"
      ],
      "funFacts": [
        "The Chapel Bridge is the oldest covered wooden bridge in Europe",
        "The Lion Monument is carved into a cliff face"
      ],
      "trivia": [
        "Lucerne's old town is a UNESCO World Heritage site",
        "The city is famous for its annual Fasnacht carnival"
      ]
    },
    {
      "city": "Bern",
      "country": "Switzerland",
      "clues": [
        "Bears roam the city's old town.",
        "Home to the Zytglogge, a medieval clock tower."
      ],
      "funFacts": [
        "The old town is a UNESCO World Heritage site.",
        "The city's name means 'bear' in German."
      ],
      "trivia": [
        "Bern was the capital of the Helvetic Republic from 1798 to 1802.",
        "The city has a unique bear park along the Aare River."
      ]
    },
    {
      "city": "Berlin",
      "country": "Germany",
      "clues": [
        "Home to the iconic Brandenburg Gate",
        "Famous for its vibrant nightlife in areas like Kreuzberg"
      ],
      "funFacts": [
        "Berlin has more bridges than Venice",
        "The city is home to the world's largest open-air gallery, the East Side Gallery"
      ],
      "trivia": [
        "Berlin was divided by the Berlin Wall from 1961 to 1989",
        "The city has over 170 museums, making it a cultural hub"
      ]
    },
    {
      "city": "Munich",
      "country": "Germany",
      "clues": [
        "Home to the world's largest beer hall",
        "Host of the famous Oktoberfest"
      ],
      "funFacts": [
        "The city has more breweries than any other German city",
        "Munich's English Garden is larger than New York's Central Park"
      ],
      "trivia": [
        "Munich was the original home of the BMW company",
        "The city has over 80 museums"
      ]
    },
    {
      "city": "Frankfurt",
      "country": "Germany",
      "clues": [
        "Home to the European Central Bank",
        "Hosts the world's largest airport by cargo traffic"
      ],
      "funFacts": [
        "Frankfurt has more skyscrapers than any other German city",
        "The city is known for its apple wine and sausages"
      ],
      "trivia": [
        "Frankfurt's name translates to 'Ford of the Franks'",
        "The city's Goethe University is named after the famous writer Johann Wolfgang von Goethe who was born here"
      ]
    },
    {
      "city": "Hamburg",
      "country": "Germany",
      "clues": [
        "It is known for its famous fish market.",
        "It is home to the world's largest model railway."
      ],
      "funFacts": [
        "Hamburg has more bridges than Venice and Amsterdam combined.",
        "The city's official name is Freie und Hansestadt Hamburg."
      ],
      "trivia": [
        "The Miniatur Wunderland is the largest model railway in the world.",
        "The Elbphilharmonie concert hall offers stunning views of the city."
      ]
    },
    {
      "city": "Cologne",
      "country": "Germany",
      "clues": [
        "Home to the largest cathedral in Germany",
        "Famous for its annual carnival celebrations"
      ],
      "funFacts": [
        "Cologne is known for its traditional Eau de Cologne perfume",
        "The city has over 20 museums"
      ],
      "trivia": [
        "Cologne was the capital of the Roman province of Germania Inferior",
        "The city's name in German is Köln"
      ]
    },
    {
      "city": "Prague",
      "country": "Czech Republic",
      "clues": [
        "Known as the 'City of a Hundred Spires'",
        "Home to the famous Charles Bridge"
      ],
      "funFacts": [
        "Prague has the highest beer consumption per capita in the world",
        "The city's Astronomical Clock is the oldest working clock in the world"
      ],
      "trivia": [
        "Prague was the capital of the Holy Roman Empire",
        "The city is home to the world's oldest university in continuous operation"
      ]
    },
    {
      "city": "Brno",
      "country": "Czech Republic",
      "clues": [
        "Known for its vibrant student population",
        "Home to the largest collection of functionalist buildings in Europe"
      ],
      "funFacts": [
        "Brno is home to the world's largest collection of vintage motorcycles",
        "The city has the highest number of pubs per capita in the Czech Republic"
      ],
      "trivia": [
        "Brno was the site of the first-ever parachute jump in 1914",
        "The city's name is derived from the Czech word for 'burnt'"
      ]
    },
    {
      "city": "Pilsen",
      "country": "Czech Republic",
      "clues": [
        "Home to the original Pilsner beer",
        "UNESCO World Heritage Site"
      ],
      "funFacts": [
        "Pilsen is the fourth-largest city in the Czech Republic",
        "The city's historic center is a must-see for its Gothic architecture"
      ],
      "trivia": [
        "Pilsner Urquell beer was first brewed in Pilsen in 1842",
        "The city's name comes from the German word 'Pilsen,' which means 'people of the camp'"
      ]
    },
    {
      "city": "Warsaw",
      "country": "Poland",
      "clues": [
        "It is home to the world's heaviest coin.",
        "The city has a famous palace that was rebuilt after World War II."
      ],
      "funFacts": [
        "Warsaw's Old Town was meticulously reconstructed after being almost entirely destroyed during WWII.",
        "The Palace of Culture and Science, a gift from the Soviet Union, is the tallest building in Poland."
      ],
      "trivia": [
        "The Warsaw Uprising Museum commemorates the largest single revolt by Jews during the Holocaust.",
        "Warsaw is known for its vibrant street art scene, with murals covering many of its buildings."
      ]
    },
    {
      "city": "Kraków",
      "country": "Poland",
      "clues": [
        "It is home to the largest medieval market square in Europe.",
        "The Wawel Royal Castle is a must-see attraction."
      ],
      "funFacts": [
        "Kraków was the official capital of Poland until 1596.",
        "The city has over 200 pubs, bars, and restaurants."
      ],
      "trivia": [
        "The Main Market Square in Kraków is one of the largest medieval market squares in Europe.",
        "The city is famous for its well-preserved Old Town, which is a UNESCO World Heritage Site."
      ]
    },
    {
      "city": "Wrocław",
      "country": "Poland",
      "clues": [
        "Home to the largest market square in Poland",
        "Known for its beautiful dwarf statues"
      ],
      "funFacts": [
        "Wrocław has over 300 bridges, more than Venice",
        "The city was the capital of Silesia for many centuries"
      ],
      "trivia": [
        "The Centennial Hall, a UNESCO World Heritage site, was built in 1913",
        "Wrocław's Old Town was almost entirely rebuilt after WWII"
      ]
    },
    {
      "city": "Gdańsk",
      "country": "Poland",
      "clues": [
        "This city is known as the World Capital of Amber.",
        "It was the birthplace of the Solidarity movement."
      ],
      "funFacts": [
        "The city's Long Market is one of the longest and widest medieval streets in Europe.",
        "Gdańsk's Neptune Fountain is the only fountain in the world where Neptune points his trident at a mermaid."
      ],
      "trivia": [
        "The city's name means 'Garden of the Dead' in Polish.",
        "Gdańsk was the only Polish city to remain German after World War I."
      ]
    },
    {
      "city": "Lisbon",
      "country": "Portugal",
      "clues": [
        "It's known as the city of seven hills.",
        "The Belém Tower is a UNESCO World Heritage site."
      ],
      "funFacts": [
        "Lisbon has the oldest bookstore in the world.",
        "The city is famous for its traditional Fado music."
      ],
      "trivia": [
        "The Lisbon Oceanarium is one of the largest in Europe.",
        "The city was the starting point for many of the Age of Discovery voyages."
      ]
    },
    {
      "city": "Porto",
      "country": "Portugal",
      "clues": [
        "Known for its iconic Livraria Lello bookstore",
        "Home to the famous Port wine lodges"
      ],
      "funFacts": [
        "Porto is the birthplace of the famous fado music",
        "The city has more than 1,000 bridges"
      ],
      "trivia": [
        "Porto's full name is São Francisco do Porto",
        "The city was a European Capital of Culture in 2001"
      ]
    },
    {
      "city": "Sintra",
      "country": "Portugal",
      "clues": [
        "Known for colorful palaces",
        "Inspired Walt Disney"
      ],
      "funFacts": [
        "Home to the Pena Palace, a 19th-century Romanticist castle",
        "Listed as a UNESCO World Heritage Site"
      ],
      "trivia": [
        "The town is often referred to as the 'Romantic Town'",
        "Influenced by the 19th-century Romanticism movement"
      ]
    },
    {
      "city": "Funchal",
      "country": "Portugal",
      "clues": [
        "Known for its beautiful botanical gardens",
        "Home to one of the world's largest outdoor escalators"
      ],
      "funFacts": [
        "Funchal is the capital of the Madeira Islands",
        "The city hosts the famous Madeira Wine Festival"
      ],
      "trivia": [
        "Funchal was the first European city to have electric street lighting",
        "The city's name comes from the fennel plant that grows abundantly in the area"
      ]
    },
    {
      "city": "Athens",
      "country": "Greece",
      "clues": [
        "Home to the world's first known democracy.",
        "Ancient ruins include the Parthenon and the Acropolis."
      ],
      "funFacts": [
        "Athens has more theaters per capita than any other city in the world.",
        "The city is home to the first known university in the world, the Academy of Plato."
      ],
      "trivia": [
        "The Olympic Games were revived in Athens in 1896.",
        "Athens is one of the oldest cities in the world, with a history spanning over 3,400 years."
      ]
    },
    {
      "city": "Fira",
      "country": "Greece",
      "clues": [
        "Known for its stunning caldera views",
        "Home to the Museum of Prehistoric Thira"
      ],
      "funFacts": [
        "Fira is built on the edge of a volcano",
        "It has a unique architecture with cave houses"
      ],
      "trivia": [
        "Fira is the capital of Santorini",
        "The city has a population of around 2,000 people"
      ]
    },
    {
      "city": "Mykonos",
      "country": "Greece",
      "clues": [
        "Known for its windmills",
        "Part of the Cyclades island group"
      ],
      "funFacts": [
        "Mykonos is known as the 'Island of the Winds'",
        "It has a famous beach called Paradise Beach"
      ],
      "trivia": [
        "Mykonos is one of the most famous Greek islands",
        "It is known for its vibrant nightlife and beautiful beaches"
      ]
    },
    {
      "city": "Thessaloniki",
      "country": "Greece",
      "clues": [
        "It is home to the largest university in Greece.",
        "You can find the famous White Tower by the sea."
      ],
      "funFacts": [
        "The city is known as the 'co-capital' of Greece.",
        "It has a vibrant nightlife with over 100 bars and clubs."
      ],
      "trivia": [
        "Thessaloniki was founded in 315 BC by Cassander.",
        "It has the largest student population in Greece."
      ]
    },
    {
      "city": "Chania",
      "country": "Greece",
      "clues": [
        "Known for its Venetian Harbor",
        "Home to the lighthouse at the end of the Venetian harbor"
      ],
      "funFacts": [
        "The old town is a labyrinth of narrow streets",
        "The lighthouse was built in the 16th century"
      ],
      "trivia": [
        "Chania was the capital of Crete during the Venetian period",
        "The city has a strong Ottoman influence"
      ]
    },
    {
      "city": "Oslo",
      "country": "Norway",
      "clues": [
        "It's home to the world's first ski jump",
        "The Nobel Peace Prize is awarded here"
      ],
      "funFacts": [
        "Oslo has more electric cars per capita than any other city",
        "The city has over 400 parks and green areas"
      ],
      "trivia": [
        "Oslo is built on the ruins of Viking settlements",
        "The city's name means 'the mouth of the Lo river'"
      ]
    },
    {
      "city": "Bergen",
      "country": "Norway",
      "clues": [
        "Known as the 'Gateway to the Fjords'",
        "Home to the famous Fløibanen funicular"
      ],
      "funFacts": [
        "Bergen has more than 1,000 years of history",
        "The city is home to the world's oldest continuously operating stock exchange"
      ],
      "trivia": [
        "Bergen was the capital of Norway for several centuries",
        "The city is famous for its colorful wooden houses called 'Bryggen'"
      ]
    },
    {
      "city": "Stavanger",
      "country": "Norway",
      "clues": [
        "Known for its whitewashed wooden houses",
        "Home to the Norwegian Petroleum Museum"
      ],
      "funFacts": [
        "Stavanger is the oil and energy capital of Norway",
        "The city has the highest number of electric cars per capita in the world"
      ],
      "trivia": [
        "Stavanger was the European Capital of Culture in 2008",
        "The city is famous for its annual Norwegian Petroleum Museum"
      ]
    },
    {
      "city": "Trondheim",
      "country": "Norway",
      "clues": [
        "Home to the oldest continuously operating building in Norway",
        "Known for its vibrant student population"
      ],
      "funFacts": [
        "The city has a bridge that is said to be haunted by a troll",
        "Trondheim was the capital of Norway for several centuries"
      ],
      "trivia": [
        "The Nidaros Cathedral is one of the largest cathedrals in Scandinavia",
        "The city is home to the Norwegian University of Science and Technology"
      ]
    },
    {
      "city": "Stockholm",
      "country": "Sweden",
      "clues": [
        "Home to the world's first open-air museum",
        "Known for its vibrant archipelago"
      ],
      "funFacts": [
        "Stockholm has more than 50 bridges",
        "The city is built on 14 islands"
      ],
      "trivia": [
        "The Nobel Prize ceremony is held here",
        "Stockholm is often referred to as the 'Venice of the North'"
      ]
    },
    {
      "city": "Gothenburg",
      "country": "Sweden",
      "clues": [
        "Known for its canals",
        "Home to the Volvo Museum"
      ],
      "funFacts": [
        "Gothenburg has more than 700 years of history",
        "The city is famous for its seafood"
      ],
      "trivia": [
        "Gothenburg is Sweden's second-largest city",
        "The city's name in Swedish is Göteborg"
      ]
    },
    {
      "city": "Malmo",
      "country": "Sweden",
      "clues": [
        "It is home to the Turning Torso, a twisting skyscraper.",
        "It has a famous open-air museum called Skansen."
      ],
      "funFacts": [
        "Malmo was the capital of Denmark in the 15th century.",
        "The city has the longest pedestrian street in Europe."
      ],
      "trivia": [
        "Malmo is connected to Copenhagen by the Oresund Bridge.",
        "The city is known for its vibrant street art scene."
      ]
    },
    {
      "city": "Copenhagen",
      "country": "Denmark",
      "clues": [
        "It's home to the famous Little Mermaid statue.",
        "The city is known for its colorful harbor district, Nyhavn."
      ],
      "funFacts": [
        "Copenhagen has more bicycles than residents.",
        "The city's Tivoli Gardens is the second-oldest operating amusement park in the world."
      ],
      "trivia": [
        "The city's name translates to 'Merchants' Harbor'",
        "Copenhagen is the birthplace of the famous fairy tales by Hans Christian Andersen."
      ]
    },
    {
      "city": "Aarhus",
      "country": "Denmark",
      "clues": [
        "It is home to the oldest and largest zoo in Denmark.",
        "The city is known for its vibrant street art scene."
      ],
      "funFacts": [
        "Aarhus was named the European Capital of Culture in 2017.",
        "The city has the highest concentration of Michelin-starred restaurants in Denmark."
      ],
      "trivia": [
        "Aarhus University is one of the largest and oldest universities in Denmark.",
        "The city's ARoS Aarhus Art Museum features a panoramic rainbow walkway."
      ]
    },
    {
      "city": "Odense",
      "country": "Denmark",
      "clues": [
        "Home to the Hans Christian Andersen Museum",
        "Birthplace of the famous fairy tale writer Hans Christian Andersen"
      ],
      "funFacts": [
        "Odense is known as the 'City of Spires' due to its many church spires",
        "The city has the largest carillon in Scandinavia"
      ],
      "trivia": [
        "Odense Zoo is one of the oldest zoos in Denmark",
        "The Odense River is known for its beautiful bridges and scenic walks"
      ]
    },
    {
      "city": "Reykjavik",
      "country": "Iceland",
      "clues": [
        "It's the world's northernmost capital city",
        "The city's name translates to 'Smoky Bay'"
      ],
      "funFacts": [
        "The city is home to the world's largest hot tub",
        "Reykjavik has more bookstores per capita than any other city"
      ],
      "trivia": [
        "The city's population is less than 200,000",
        "It's one of the greenest cities in the world"
      ]
    },
    {
      "city": "Akureyri",
      "country": "Iceland",
      "clues": [
        "It's known as the capital of the North",
        "Home to the Akureyri Botanical Garden"
      ],
      "funFacts": [
        "It has the world's northernmost botanical garden",
        "The city's name means 'head of the fjord'"
      ],
      "trivia": [
        "Akureyri is the second-largest urban area in Iceland",
        "The city is known for its colorful buildings"
      ]
    },
    {
      "city": "Marrakech",
      "country": "Morocco",
      "clues": [
        "Known as the Red City",
        "Home to the bustling Jemaa el-Fnaa square"
      ],
      "funFacts": [
        "Marrakech has the largest traditional market in Morocco",
        "The city's name means 'Land of God' in the Berber language"
      ],
      "trivia": [
        "Marrakech was founded in 1062 by the Almoravids",
        "The city is famous for its intricate tile work and intricate gardens"
      ]
    },
    {
      "city": "Casablanca",
      "country": "Morocco",
      "clues": [
        "It's home to the largest mosque in Africa.",
        "The city is known for its Art Deco architecture."
      ],
      "funFacts": [
        "Casablanca is not the capital of Morocco.",
        "The city's name translates to 'White House'."
      ],
      "trivia": [
        "The movie 'Casablanca' was not filmed in Casablanca.",
        "The city is a major economic hub in Morocco."
      ]
    },
    {
      "city": "Fez",
      "country": "Morocco",
      "clues": [
        "Known as the cultural capital of Morocco",
        "Home to the oldest university in the world"
      ],
      "funFacts": [
        "The city has over 9,000 narrow streets",
        "The tanneries in Fez are over 1,000 years old"
      ],
      "trivia": [
        "Fez was the capital of Morocco for over 400 years",
        "The city's medina is a UNESCO World Heritage site"
      ]
    },
    {
      "city": "Essaouira",
      "country": "Morocco",
      "clues": [
        "Known as the 'Wind City of Africa'",
        "Home to a UNESCO World Heritage site"
      ],
      "funFacts": [
        "Essaouira is famous for its vibrant arts scene and numerous galleries",
        "The city is a popular destination for windsurfing and kitesurfing"
      ],
      "trivia": [
        "Essaouira's medina is one of the few in Morocco that is open to the sea",
        "The city was once a major port for the trans-Saharan slave trade"
      ]
    },
    {
      "city": "Nairobi",
      "country": "Kenya",
      "clues": [
        "It is home to the world's only wildlife capital.",
        "The Nairobi National Park is the only park in the world with a skyline."
      ],
      "funFacts": [
        "Nairobi is the only city in the world with a national park within its boundaries.",
        "The city is known as the 'Green City in the Sun' due to its lush parks and gardens."
      ],
      "trivia": [
        "The name Nairobi comes from the Maasai phrase Enkare Nairobi, which means 'place of cool waters'.",
        "Nairobi was founded in 1899 as a rail depot on the Uganda Railway."
      ]
    },
    {
      "city": "Mombasa",
      "country": "Kenya",
      "clues": [
        "It's home to the iconic Fort Jesus.",
        "You can visit the Mombasa Marine National Park."
      ],
      "funFacts": [
        "Mombasa is one of the oldest inhabited towns in the East African region.",
        "The city is famous for its vibrant Swahili culture."
      ],
      "trivia": [
        "The Old Town of Mombasa is a UNESCO World Heritage Site.",
        "The city is known as the 'white and blue city' due to the white-washed buildings and blue doors and windows."
      ]
    },
    {
      "city": "Masai Mara",
      "country": "Kenya",
      "clues": [
        "Famous for the Great Migration",
        "Home to the Maasai people"
      ],
      "funFacts": [
        "The Maasai Mara is named after the Maasai people",
        "The Great Migration involves over 1.5 million animals"
      ],
      "trivia": [
        "The Maasai Mara is part of the larger Serengeti ecosystem",
        "The best time to see the Great Migration is between July and October"
      ]
    },
    {
      "city": "Kisumu",
      "country": "Kenya",
      "clues": [
        "Largest city on the shores of Lake Victoria",
        "Known as the 'City of the Great Lakes'"
      ],
      "funFacts": [
        "Home to the Impala Wildlife Sanctuary",
        "Hosts the annual Kisumu International Marathon"
      ],
      "trivia": [
        "The Kisumu Museum showcases the region's rich cultural heritage",
        "The city is a major hub for fishing and agriculture"
      ]
    },
    {
      "city": "Accra",
      "country": "Ghana",
      "clues": [
        "It's home to the National Museum of Ghana.",
        "The city hosts the annual Chale Wote Street Art Festival."
      ],
      "funFacts": [
        "Accra is known for its vibrant nightlife and music scene.",
        "The city is home to the largest open-air market in West Africa, Makola Market."
      ],
      "trivia": [
        "The Labadi Beach is one of the most popular beaches in Accra, known for its lively atmosphere and cultural performances.",
        "The city's name comes from the Akan word 'Nkran,' which means 'ants,' due to the large number of ants found in the area during its early days."
      ]
    },
    {
      "city": "Kumasi",
      "country": "Ghana",
      "clues": [
        "It is known as the 'Garden City of West Africa'",
        "Home to the largest open-air market in West Africa"
      ],
      "funFacts": [
        "Kumasi is the capital of the Ashanti Region",
        "The city is famous for its traditional Kente cloth"
      ],
      "trivia": [
        "Kumasi was the capital of the Ashanti Empire",
        "The Kumasi Cultural Centre is a must-visit for art lovers"
      ]
    },
    {
      "city": "Tamale",
      "country": "Ghana",
      "clues": [
        "It is the capital of the Northern Region of Ghana",
        "Home to the famous Tamale Central Market"
      ],
      "funFacts": [
        "Tamale is known for its vibrant nightlife and music scene",
        "The city hosts the annual Tamale International Trade Fair"
      ],
      "trivia": [
        "Tamale is one of the fastest-growing cities in Ghana",
        "The city is a major hub for the transportation of goods to the Sahel region"
      ]
    },
    {
      "city": "Takoradi",
      "country": "Ghana",
      "clues": [
        "It is known as the Oil City of Ghana.",
        "It has a beautiful coastline with beaches and lighthouses."
      ],
      "funFacts": [
        "Takoradi is home to the Ghanaian Navy.",
        "The city hosts the annual Takoradi International Trade Fair."
      ],
      "trivia": [
        "The Takoradi Lighthouse is a popular landmark.",
        "The city is a major hub for the oil and gas industry in Ghana."
      ]
    },
    {
      "city": "Stone Town",
      "country": "Tanzania",
      "clues": [
        "Known for its rich history and architecture",
        "A UNESCO World Heritage site"
      ],
      "funFacts": [
        "The city is famous for its labyrinthine alleys",
        "It was the capital of the Sultanate of Zanzibar"
      ],
      "trivia": [
        "The Old Fort in Stone Town dates back to the 17th century",
        "Freddie Mercury, the legendary singer of Queen, was born here"
      ]
    },
    {
      "city": "Arusha",
      "country": "Tanzania",
      "clues": [
        "Gateway to Mount Kilimanjaro",
        "Known for safaris in the Serengeti"
      ],
      "funFacts": [
        "Home to the Arusha Declaration",
        "Has a unique blend of African and German architecture"
      ],
      "trivia": [
        "Arusha is known as the 'Safari Capital of Tanzania'",
        "The city hosts the East African Community headquarters"
      ]
    },
    {
      "city": "Moshi",
      "country": "Tanzania",
      "clues": [
        "Gateway to Kilimanjaro",
        "Known for coffee plantations"
      ],
      "funFacts": [
        "Home to the Chagga people",
        "Has a vibrant local market"
      ],
      "trivia": [
        "Moshi means 'sweet water' in the local language",
        "It's a popular base for safaris"
      ]
    },
    {
      "city": "Durban",
      "country": "South Africa",
      "clues": [
        "Known for its vibrant Indian cuisine",
        "Home to the largest collection of Victorian and Edwardian buildings in the Southern Hemisphere"
      ],
      "funFacts": [
        "Durban has the highest number of surfing days per year in the world",
        "It is the busiest port in Africa"
      ],
      "trivia": [
        "Durban is often referred to as the 'Surf City of South Africa'",
        "The city has the largest population of Zulu speakers in the world"
      ]
    },
    {
      "city": "Cape Town",
      "country": "South Africa",
      "clues": [
        "It is known for its iconic Table Mountain.",
        "It is the oldest city in South Africa."
      ],
      "funFacts": [
        "Cape Town is home to the world's smallest penguin species, the African Penguin.",
        "The city has more than 710 miles of wine routes."
      ],
      "trivia": [
        "Cape Town is one of the most multicultural cities in the world.",
        "The Cape of Good Hope is not the most south-western point of Africa."
      ]
    },
    {
      "city": "Pretoria",
      "country": "South Africa",
      "clues": [
        "Known as the administrative capital of South Africa.",
        "Home to the National Zoological Garden."
      ],
      "funFacts": [
        "Pretoria is one of the world's greenest cities with over 70 parks.",
        "The city has more than 100,000 rose bushes."
      ],
      "trivia": [
        "Pretoria was originally named Pretoria Marabastad by the Voortrekkers.",
        "The city is home to the Union Buildings, the official seat of the South African government."
      ]
    },
    {
      "city": "Addis Ababa",
      "country": "Ethiopia",
      "clues": [
        "Home to the largest open-air market in Africa",
        "The only African capital city to host an Olympic Games"
      ],
      "funFacts": [
        "Addis Ababa is home to the largest open-air market in Africa, the Mercato",
        "The city is known as the political capital of Africa due to the presence of the African Union"
      ],
      "trivia": [
        "The name Addis Ababa means 'new flower' in Amharic",
        "The city is home to the oldest university in Ethiopia, Addis Ababa University, founded in 1950"
      ]
    },
    {
      "city": "Lalibela",
      "country": "Ethiopia",
      "clues": [
        "Known for its rock-hewn churches",
        "Located in the highlands of Ethiopia"
      ],
      "funFacts": [
        "The churches were built in the 12th century",
        "The city is named after King Lalibela"
      ],
      "trivia": [
        "The churches are a UNESCO World Heritage Site",
        "Some churches are connected by tunnels"
      ]
    },
    {
      "city": "Kathmandu",
      "country": "Nepal",
      "clues": [
        "Home to the famous Swayambhunath Stupa",
        "Known as the City of Temples"
      ],
      "funFacts": [
        "Kathmandu has seven UNESCO World Heritage Sites",
        "The city is home to the world's only living goddess, the Kumari"
      ],
      "trivia": [
        "Kathmandu is one of the oldest cities in the world",
        "The city's name means 'Wooden House' in the local language"
      ]
    },
    {
      "city": "Pokhara",
      "country": "Nepal",
      "clues": [
        "Home to the world's most dangerous airport",
        "Known for paragliding and adventure sports"
      ],
      "funFacts": [
        "Pokhara is often called the 'City of Lakes'",
        "It is a gateway to the Annapurna Circuit"
      ],
      "trivia": [
        "The Seti River flows underground through Pokhara",
        "Pokhara is the second largest city in Nepal"
      ]
    },
    {
      "city": "Chitwan",
      "country": "Nepal",
      "clues": [
        "It's home to the Chitwan National Park.",
        "You can see one-horned rhinos here."
      ],
      "funFacts": [
        "Chitwan National Park is a UNESCO World Heritage Site.",
        "It is one of the last remaining habitats for the Bengal tiger."
      ],
      "trivia": [
        "The park was established in 1973 as Royal Chitwan National Park.",
        "It covers an area of 932 sq. km."
      ]
    },
    {
      "city": "Thimphu",
      "country": "Bhutan",
      "clues": [
        "This city is the only capital in the world without traffic lights.",
        "It is home to the largest sitting Buddha statue in the world."
      ],
      "funFacts": [
        "Thimphu is the only capital city in the world without traffic lights.",
        "The city hosts the annual Thimphu Tsechu, a vibrant festival featuring traditional mask dances."
      ],
      "trivia": [
        "Thimphu was officially declared the capital of Bhutan in 1961.",
        "The city is known for its unique blend of traditional Bhutanese architecture and modern development."
      ]
    },
    {
      "city": "Paro",
      "country": "Bhutan",
      "clues": [
        "Home to the only international airport in Bhutan",
        "Surrounded by the Himalayas"
      ],
      "funFacts": [
        "It is the only city in Bhutan with an airport",
        "The Paro Taktsang monastery is perched on a cliffside"
      ],
      "trivia": [
        "The airport has one of the most challenging landing approaches in the world",
        "The city is known for its traditional Bhutanese architecture"
      ]
    },
    {
      "city": "Kuala Lumpur",
      "country": "Malaysia",
      "clues": [
        "It's home to the world's tallest twin towers",
        "You can find some of the world's best street food here"
      ],
      "funFacts": [
        "The city's name translates to 'muddy estuary' in Malay",
        "Kuala Lumpur has more than 600 mosques"
      ],
      "trivia": [
        "The Petronas Twin Towers were the world's tallest buildings until 2004",
        "The city is known for its diverse architecture, blending Malay, Chinese, Indian, and colonial influences"
      ]
    },
    {
      "city": "Penang",
      "country": "Malaysia",
      "clues": [
        "Known as the 'Pearl of the Orient'",
        "Home to the famous Cheong Fatt Tze Mansion"
      ],
      "funFacts": [
        "It has the largest tropical forest within a city",
        "Penang's street art is world-renowned"
      ],
      "trivia": [
        "Penang's Fort Cornwallis is named after a British general",
        "The city has a unique blend of Malay, Chinese, and Indian cultures"
      ]
    },
    {
      "city": "Langkawi",
      "country": "Malaysia",
      "clues": [
        "Known as the Jewel of Kedah",
        "Home to the Sky Bridge"
      ],
      "funFacts": [
        "Langkawi is a duty-free island",
        "It is home to the world's largest bird sculpture"
      ],
      "trivia": [
        "Langkawi is an archipelago of 99 islands",
        "The island is a UNESCO Geopark"
      ]
    },
    {
      "city": "Singapore",
      "country": "Singapore",
      "clues": [
        "It is a city-state known for its cleanliness.",
        "It is home to the world's first night zoo."
      ],
      "funFacts": [
        "Singapore has more than 3,000 kilometers of roads, but no rivers.",
        "The city-state has one of the lowest crime rates in the world."
      ],
      "trivia": [
        "Singapore's national language is Malay.",
        "The country has a unique ban on chewing gum."
      ]
    },
    {
      "city": "Manila",
      "country": "Philippines",
      "clues": [
        "This city is home to the oldest Chinatown in the world.",
        "It features a mix of Spanish and American colonial architecture."
      ],
      "funFacts": [
        "Manila is the only capital city in the world that is named after a pearl.",
        "The city has one of the largest shopping malls in the world, SM Mall of Asia."
      ],
      "trivia": [
        "Manila was the capital of the Spanish East Indies for over 300 years.",
        "The city is known for its vibrant street food culture, including balut, a boiled duck embryo."
      ]
    },
    {
      "city": "Cebu",
      "country": "Philippines",
      "clues": [
        "Known for its historic sites and beautiful beaches",
        "Home to the oldest street in the Philippines"
      ],
      "funFacts": [
        "Cebu is known as the 'Queen City of the South'",
        "The Magellan's Cross is a famous landmark here"
      ],
      "trivia": [
        "Cebu is the site of the first Christian settlement in the Philippines",
        "The city is famous for its lechon, a roasted pig dish"
      ]
    },
    {
      "city": "Davao",
      "country": "Philippines",
      "clues": [
        "It is known as the 'Durian Capital of the Philippines'",
        "Home to the Philippine Eagle Center"
      ],
      "funFacts": [
        "Davao has the largest city park in the Philippines, the Davao City Park",
        "It is one of the largest cities in the world in terms of land area"
      ],
      "trivia": [
        "Davao is the first city in the Philippines to have a bloodless revolution",
        "The city is named after the Dabao River"
      ]
    },
    {
      "city": "Seoul",
      "country": "South Korea",
      "clues": [
        "Home to the world's largest indoor theme park",
        "Known for its vibrant street food culture"
      ],
      "funFacts": [
        "Seoul has more than 60% of its area covered in mountains",
        "The city has the world's fastest internet speeds"
      ],
      "trivia": [
        "Seoul's subway system is the longest in the world",
        "The city is home to the world's largest department store"
      ]
    },
    {
      "city": "Busan",
      "country": "South Korea",
      "clues": [
        "Known for its beautiful beaches",
        "Home to the world's largest department store"
      ],
      "funFacts": [
        "Busan is famous for its seafood market, Jagalchi",
        "The city hosts the annual Busan International Film Festival"
      ],
      "trivia": [
        "Busan's Gamcheon Cultural Village is built on a hillside",
        "The city is a popular destination for Korean War veterans"
      ]
    },
    {
      "city": "Jeju",
      "country": "South Korea",
      "clues": [
        "It's known as the 'Island of the Gods'",
        "Home to the world's largest lava tube"
      ],
      "funFacts": [
        "Jeju has the world's largest collection of volcanic rocks",
        "The island is famous for its unique black pig, the Jeju Black"
      ],
      "trivia": [
        "Jeju was designated as a UNESCO World Heritage Site in 2007",
        "The island is home to over 300 volcanic cones"
      ]
    },
    {
      "city": "Beijing",
      "country": "China",
      "clues": [
        "It is home to the Forbidden City",
        "You can see the Great Wall of China from here"
      ],
      "funFacts": [
        "Beijing has more than 40 universities",
        "The city has over 100 museums"
      ],
      "trivia": [
        "Beijing was the host city for the 2008 Summer Olympics",
        "The Temple of Heaven was built in the early 15th century"
      ]
    },
    {
      "city": "Shanghai",
      "country": "China",
      "clues": [
        "It has the world's second-tallest building, the Shanghai Tower.",
        "The Bund is a famous waterfront area with historic buildings."
      ],
      "funFacts": [
        "Shanghai has the world's busiest container port.",
        "The city is home to the world's first magnetic levitation train."
      ],
      "trivia": [
        "Shanghai Disney Resort is the largest Disney park in the world.",
        "The city is known for its extensive network of tunnels and underground facilities."
      ]
    },
    {
      "city": "Hong Kong",
      "country": "China",
      "clues": [
        "It's known for its skyline and deep natural harbor.",
        "It has one of the longest covered escalators in the world."
      ],
      "funFacts": [
        "Hong Kong has over 8,000 restaurants.",
        "It is home to the world's longest outdoor covered escalator."
      ],
      "trivia": [
        "The Peak Tram is one of the world's oldest funicular railways.",
        "The city has over 200 islands."
      ]
    },
    {
      "city": "Guangzhou",
      "country": "China",
      "clues": [
        "Known as 'Canton' in the West",
        "Home to the iconic Canton Tower"
      ],
      "funFacts": [
        "Guangzhou has one of the world's largest wholesale markets for electronics",
        "The city is famous for its dim sum cuisine"
      ],
      "trivia": [
        "Guangzhou hosted the 2010 Asian Games",
        "The city's metro system is one of the longest in the world"
      ]
    },
    {
      "city": "Taipei",
      "country": "Taiwan",
      "clues": [
        "It's known for its bustling night markets.",
        "The city is home to the world's tallest building."
      ],
      "funFacts": [
        "Taipei has more night markets than any other city in the world.",
        "The Taipei 101 building was once the tallest in the world."
      ],
      "trivia": [
        "Taipei's Beitou district is famous for its hot springs.",
        "The city's MRT system is one of the cleanest and most efficient in the world."
      ]
    },
    {
      "city": "Kaohsiung",
      "country": "Taiwan",
      "clues": [
        "Known as the Harbor City",
        "Home to the world's largest Ferris wheel"
      ],
      "funFacts": [
        "Kaohsiung is famous for its night markets",
        "The city has a unique blend of modern and traditional architecture"
      ],
      "trivia": [
        "Kaohsiung's Lotus Pond is a popular spot for dragon boat races",
        "The city hosts the annual Dragon and Lantern Festival"
      ]
    },
    {
      "city": "Auckland",
      "country": "New Zealand",
      "clues": [
        "Home to the world's largest collection of street art.",
        "Known for its vibrant coffee culture."
      ],
      "funFacts": [
        "Auckland is built on an active volcanic field.",
        "The city has more boats per capita than any other city in the world."
      ],
      "trivia": [
        "Auckland is often referred to as the 'City of Sails'.",
        "The city's Sky Tower was the tallest free-standing structure in the Southern Hemisphere until 2011."
      ]
    },
    {
      "city": "Queenstown",
      "country": "New Zealand",
      "clues": [
        "Known as the 'Adventure Capital of the World'",
        "Home to the bungee jumping pioneers"
      ],
      "funFacts": [
        "Queenstown is the only city in New Zealand with a gondola",
        "The town's population triples during the ski season"
      ],
      "trivia": [
        "The first commercial bungee jump was performed near Queenstown",
        "The town is located on the shores of Lake Wakatipu"
      ]
    },
    {
      "city": "Havana",
      "country": "Cuba",
      "clues": [
        "Known for its colorful colonial architecture.",
        "Home to classic American cars from the 1950s."
      ],
      "funFacts": [
        "Havana has the largest collection of Art Deco buildings outside of Miami.",
        "The city's Malecón is a famous seaside promenade."
      ],
      "trivia": [
        "Havana was founded by the Spanish in 1519.",
        "The Capitolio Nacional in Havana was modeled after the U.S. Capitol."
      ]
    },
    {
      "city": "Trinidad",
      "country": "Cuba",
      "clues": [
        "Known as the 'Museum City of Cuba'",
        "Home to over 50 colonial buildings"
      ],
      "funFacts": [
        "The city's architecture is a UNESCO World Heritage Site",
        "The cobblestone streets are a major attraction"
      ],
      "trivia": [
        "Trinidad was a major sugar-producing region in the 18th and 19th centuries",
        "The city has a well-preserved historic center"
      ]
    },
    {
      "city": "Varadero",
      "country": "Cuba",
      "clues": [
        "Known for its long stretch of white-sand beaches",
        "Home to the renowned Varadero Golf Club"
      ],
      "funFacts": [
        "Varadero is home to the largest natural aquarium in the world",
        "The city's name means 'shallow bay' in Spanish"
      ],
      "trivia": [
        "Varadero was once a small fishing village",
        "The city boasts one of the largest coral reefs in the Caribbean"
      ]
    },
    {
      "city": "Rio de Janeiro",
      "country": "Brazil",
      "clues": [
        "Known for its iconic Christ the Redeemer statue",
        "Home to the world-famous Copacabana Beach"
      ],
      "funFacts": [
        "Rio de Janeiro was the capital of Brazil until 1960",
        "The city is named after January, when it was discovered by Portuguese explorers"
      ],
      "trivia": [
        "The Maracanã Stadium in Rio is one of the largest football stadiums in the world",
        "Rio's Carnival is one of the biggest celebrations in the world, attracting millions of visitors each year"
      ]
    },
    {
      "city": "São Paulo",
      "country": "Brazil",
      "clues": [
        "It's home to the largest Japanese population outside of Japan.",
        "It has more helicopters than New York City."
      ],
      "funFacts": [
        "São Paulo has the largest helicopter fleet in the world.",
        "The city has over 80 different ethnicities."
      ],
      "trivia": [
        "The city's name means 'Saint Paul' in Portuguese.",
        "São Paulo's stock exchange is the largest in Latin America."
      ]
    },
    {
      "city": "Salvador",
      "country": "Brazil",
      "clues": [
        "Known as the birthplace of Capoeira",
        "Home to the largest Carnival celebration in the world"
      ],
      "funFacts": [
        "Salvador was the first capital of Brazil",
        "The city has over 350 churches"
      ],
      "trivia": [
        "Salvador is divided into the Upper Town and the Lower Town",
        "The historic center, Pelourinho, is a UNESCO World Heritage site"
      ]
    },
    {
      "city": "Brasília",
      "country": "Brazil",
      "clues": [
        "It is a planned city designed by architect Oscar Niemeyer.",
        "The city is known for its modernist architecture and urban planning."
      ],
      "funFacts": [
        "Brasília was built in just 41 months.",
        "The city's layout is in the shape of an airplane."
      ],
      "trivia": [
        "Brasília became the capital of Brazil in 1960.",
        "The Three Powers Square is a notable landmark featuring the National Congress, the Supreme Federal Court, and the Palácio do Planalto."
      ]
    },
    {
      "city": "Cusco",
      "country": "Peru",
      "clues": [
        "Home to the historic Sacsayhuamán fortress",
        "Gateway to Machu Picchu"
      ],
      "funFacts": [
        "Cusco was the capital of the Inca Empire",
        "It is known as the 'Archaeological Capital of the Americas'"
      ],
      "trivia": [
        "Cusco is one of the highest cities in the world, at 3,400 meters above sea level",
        "The city's historic center is a UNESCO World Heritage site"
      ]
    },
    {
      "city": "Arequipa",
      "country": "Peru",
      "clues": [
        "Known as the White City due to its volcanic stone architecture.",
        "Home to the Santa Catalina Monastery, a UNESCO World Heritage Site."
      ],
      "funFacts": [
        "Arequipa's cuisine is famous for its rocoto relleno, a spicy stuffed pepper dish.",
        "The city is surrounded by three volcanoes, including the active El Misti."
      ],
      "trivia": [
        "The historic center of Arequipa is a UNESCO World Heritage Site.",
        "The city is the capital of the Arequipa Region and the seat of the Constitutional Court of Peru."
      ]
    },
    {
      "city": "Lima",
      "country": "Peru",
      "clues": [
        "Known for its vibrant street food scene",
        "Home to the historic district of Barranco"
      ],
      "funFacts": [
        "Lima has more than 40 museums",
        "The city is home to the largest collection of pre-Columbian art in the world"
      ],
      "trivia": [
        "Lima was founded by Francisco Pizarro in 1535",
        "The city's name comes from the indigenous Aymara word 'Rimaq' which means 'talker'"
      ]
    },
    {
      "city": "Iquitos",
      "country": "Peru",
      "clues": [
        "It's the largest city in the world that cannot be reached by road.",
        "It's known as the 'Capital of the Amazon'."
      ],
      "funFacts": [
        "Iquitos is home to the world's largest river island, Ucayali.",
        "The city has a unique blend of indigenous, Spanish, and Amazonian cultures."
      ],
      "trivia": [
        "Iquitos is the gateway to the Amazon rainforest.",
        "The city is famous for its rubber boom history and the rubber baron's mansions."
      ]
    },
    {
      "city": "Quito",
      "country": "Ecuador",
      "clues": [
        "It is the highest official capital city in the world.",
        "Home to the historic Old Town, a UNESCO World Heritage site."
      ],
      "funFacts": [
        "You can see the Cotopaxi volcano from the city on a clear day.",
        "The city has the largest, least visited city center in the world."
      ],
      "trivia": [
        "The Mitad del Mundo monument, marking the Equator, is a popular tourist spot.",
        "Quito was one of the first cities to be named a UNESCO World Cultural Heritage site."
      ]
    },
    {
      "city": "Guayaquil",
      "country": "Ecuador",
      "clues": [
        "Known as the 'Pearl of the Pacific'",
        "Home to the Malecon 2000 waterfront"
      ],
      "funFacts": [
        "The city has the largest boardwalk in South America",
        "Guayaquil is the birthplace of the Ecuadorian flag"
      ],
      "trivia": [
        "The city's name means 'long river' in the Quechua language",
        "Guayaquil is the largest city in Ecuador by population"
      ]
    },
    {
      "city": "Santiago",
      "country": "Chile",
      "clues": [
        "It's home to the largest collection of pre-Columbian art in South America.",
        "It has a vibrant street art scene, with over 300 murals."
      ],
      "funFacts": [
        "Santiago is one of the few capital cities in the world with a ski resort within its metropolitan area.",
        "The city's Metropolitan Cathedral is the seat of the Archbishop of Santiago."
      ],
      "trivia": [
        "Santiago's Cerro San Cristóbal is one of the highest points in the city and offers panoramic views.",
        "The city is home to the oldest subway system in South America."
      ]
    },
    {
      "city": "Valparaíso",
      "country": "Chile",
      "clues": [
        "Known for its colorful hillside homes",
        "Home to the oldest stock exchange in the Americas"
      ],
      "funFacts": [
        "Valparaíso is a UNESCO World Heritage Site",
        "The city has over 15 funiculars to navigate its hills"
      ],
      "trivia": [
        "The city's name means 'Paradise Valley'",
        "Pablo Neruda, the Nobel laureate, had a home in Valparaíso"
      ]
    },
    {
      "city": "San Juan",
      "country": "Puerto Rico",
      "clues": [
        "Known for its vibrant nightlife and historic sites",
        "Home to the iconic El Morro fortress"
      ],
      "funFacts": [
        "The Bacardi Rum Factory is located in San Juan",
        "The city's name means 'Saint John' in Spanish"
      ],
      "trivia": [
        "San Juan is one of the oldest cities under U.S. jurisdiction",
        "The city has a rich blend of Spanish, African, and American influences"
      ]
    },
    {
      "city": "Ponce",
      "country": "Puerto Rico",
      "clues": [
        "Known as the 'Pearl of the South'",
        "Home to the famous Ponce Carnival"
      ],
      "funFacts": [
        "Ponce is known for its unique architecture, including the iconic Parque de Bombas firehouse.",
        "The city has a rich history of sugar cane production."
      ],
      "trivia": [
        "Ponce is the second largest city in Puerto Rico.",
        "The city's name comes from Juan Ponce de León, the first governor of Puerto Rico."
      ]
    },
    {
      "city": "Caguas",
      "country": "Puerto Rico",
      "clues": [
        "Known for its coffee plantations",
        "Home to the Caguas Botanical and Cultural Garden"
      ],
      "funFacts": [
        "Caguas is known as the 'Heart of Puerto Rico'",
        "The city has a rich history of Taino and Spanish influences"
      ],
      "trivia": [
        "Caguas is the largest city in Puerto Rico by land area",
        "The city is home to the famous Caguas Carnival"
      ]
    },
    {
      "city": "Helsinki",
      "country": "Finland",
      "clues": [
        "Known for its unique architecture and design scene.",
        "Home to the famous Sibelius Monument."
      ],
      "funFacts": [
        "Helsinki is known as the 'Daughter of the Baltic'.",
        "The city has more than 300 islands."
      ],
      "trivia": [
        "Helsinki was founded in 1550 by King Gustav I of Sweden.",
        "The city was named the World Design Capital in 2012."
      ]
    },
    {
      "city": "Tallinn",
      "country": "Estonia",
      "clues": [
        "Known for its well-preserved medieval old town.",
        "Home to the Tallinn Music Week."
      ],
      "funFacts": [
        "Tallinn's old town is a UNESCO World Heritage site.",
        "The city has a vibrant tech startup scene."
      ],
      "trivia": [
        "Tallinn was once a major trading hub in the Hanseatic League.",
        "The city's name means 'Danish King's Town' in Estonian."
      ]
    },
    {
      "city": "Riga",
      "country": "Latvia",
      "clues": [
        "Known for its Art Nouveau architecture.",
        "Home to the largest market in Europe."
      ],
      "funFacts": [
        "Riga is the capital of Latvia and the largest city in the Baltic states.",
        "The city has a rich history of trade and culture."
      ],
      "trivia": [
        "Riga's old town is a UNESCO World Heritage site.",
        "The city is known for its vibrant nightlife and music scene."
      ]
    },
    {
      "city": "Vilnius",
      "country": "Lithuania",
      "clues": [
        "Known for its baroque architecture.",
        "Home to the largest old town in Eastern Europe."
      ],
      "funFacts": [
        "Vilnius is the capital of Lithuania and a UNESCO World Heritage site.",
        "The city has a rich history of Jewish culture."
      ],
      "trivia": [
        "Vilnius was once the capital of the Grand Duchy of Lithuania.",
        "The city is known for its vibrant arts and music scene."
      ]
    },
    {
      "city": "Oslo",
      "country": "Norway",
      "clues": [
        "Known for its green spaces and museums.",
        "Home to the famous Viking Ship Museum."
      ],
      "funFacts": [
        "Oslo is the capital of Norway and one of the fastest-growing cities in Europe.",
        "The city has a rich history of maritime trade."
      ],
      "trivia": [
        "Oslo was founded in 1040 by King Harald Hardrada.",
        "The city is known for its vibrant cultural scene, including music, art, and theater."
      ]
    },
    {
      "city": "Stavanger",
      "country": "Norway",
      "clues": [
        "Known for its stunning fjords and hiking trails.",
        "Home to the famous Pulpit Rock."
      ],
      "funFacts": [
        "Stavanger is known as the 'Oil Capital of Norway'.",
        "The city has a rich history of fishing and trade."
      ],
      "trivia": [
        "Stavanger was founded in the 12th century.",
        "The city is home to the Norwegian Petroleum Museum."
      ]
    },
    {
      "city": "Bergen",
      "country": "Norway",
      "clues": [
        "Known for its colorful wooden houses.",
        "Home to the famous Bryggen Wharf."
      ],
      "funFacts": [
        "Bergen is known as the 'Gateway to the Fjords'.",
        "The city has a rich history of trade and fishing."
      ],
      "trivia": [
        "Bergen was once the capital of Norway.",
        "The city is surrounded by seven mountains."
      ]
    },
    {
      "city": "Stavanger",
      "country": "Norway",
      "clues": [
        "Known for its stunning fjords and hiking trails.",
        "Home to the famous Pulpit Rock."
      ],
      "funFacts": [
        "Stavanger is known as the 'Oil Capital of Norway'.",
        "The city has a rich history of fishing and trade."
      ],
      "trivia": [
        "Stavanger was founded in the 12th century.",
        "The city is home to the Norwegian Petroleum Museum."
      ]
    },
    {
      "city": "Oslo",
      "country": "Norway",
      "clues": [
        "Known for its green spaces and museums.",
        "Home to the famous Viking Ship Museum."
      ],
      "funFacts": [
        "Oslo is the capital of Norway and one of the fastest-growing cities in Europe.",
        "The city has a rich history of maritime trade."
      ],
      "trivia": [
        "Oslo was founded in 1040 by King Harald Hardrada.",
        "The city is known for its vibrant cultural scene, including music, art, and theater."
      ]
    },
    {
      "city": "Stavanger",
      "country": "Norway",
      "clues": [
        "Known for its stunning fjords and hiking trails.",
        "Home to the famous Pulpit Rock."
      ],
      "funFacts": [
        "Stavanger is known as the 'Oil Capital of Norway'.",
        "The city has a rich history of fishing and trade."
      ],
      "trivia": [
        "Stavanger was founded in the 12th century.",
        "The city is home to the Norwegian Petroleum Museum."
      ]
    },
    {
      "city": "Bergen",
      "country": "Norway",
      "clues": [
        "Known for its colorful wooden houses.",
        "Home to the famous Bryggen Wharf."
      ],
      "funFacts": [
        "Bergen is known as the 'Gateway to the Fjords'.",
        "The city has a rich history of trade and fishing."
      ],
      "trivia": [
        "Bergen was once the capital of Norway.",
        "The city is surrounded by seven mountains."
      ]
    },
    {
      "city": "Stavanger",
      "country": "Norway",
      "clues": [
        "Known for its stunning fjords and hiking trails.",
        "Home to the famous Pulpit Rock."
      ],
      "funFacts": [
        "Stavanger is known as the 'Oil Capital of Norway'.",
        "The city has a rich history of fishing and trade."
      ],
      "trivia": [
        "Stavanger was founded in the 12th century.",
        "The city is home to the Norwegian Petroleum Museum."
      ]
    },    
    {
      "city": "Oslo",
      "country": "Norway",
      "clues": [
        "Known for its green spaces and museums.",
        "Home to the famous Viking Ship Museum."
      ],
      "funFacts": [
        "Oslo is the capital of Norway and one of the fastest-growing cities in Europe.",
        "The city has a rich history of maritime trade."
      ],
      "trivia": [
        "Oslo was founded in 1040 by King Harald Hardrada.",
        "The city is known for its vibrant cultural scene, including music, art, and theater."
      ]
    },
    {
      "city": "Stavanger",
      "country": "Norway",
      "clues": [
        "Known for its stunning fjords and hiking trails.",
        "Home to the famous Pulpit Rock."
      ],
      "funFacts": [
        "Stavanger is known as the 'Oil Capital of Norway'.",
        "The city has a rich history of fishing and trade."
      ],
      "trivia": [
        "Stavanger was founded in the 12th century.",
        "The city is home to the Norwegian Petroleum Museum."
      ]
    },
    {
      "city": "Bergen",
      "country": "Norway",
      "clues": [
        "Known for its colorful wooden houses.",
        "Home to the famous Bryggen Wharf."
      ],
      "funFacts": [
        "Bergen is known as the 'Gateway to the Fjords'.",
        "The city has a rich history of trade and fishing."
      ],
      "trivia": [
        "Bergen was once the capital of Norway.",
        "The city is surrounded by seven mountains."
      ]
    },
    {
      "city": "Paris",
      "country": "France",
      "clues": [
        "Home to the world's most visited museum",
        "Known for its iconic tower"
      ],
      "funFacts": [
        "Paris has more dogs than children",
        "The Eiffel Tower can be 15 cm taller in the summer"
      ],
      "trivia": [
        "The Louvre Museum was originally a fortress",
        "Paris is often referred to as the 'City of Light'"
      ]
    },
    {
      "city": "Barcelona",
      "country": "Spain",
      "clues": [
        "Known for its unique architecture by Antoni Gaudí",
        "Home to one of the most famous football clubs in the world"
      ],
      "funFacts": [
        "The city has more than 50 beaches",
        "Barcelona's metro system is one of the deepest in the world"
      ],
      "trivia": [
        "The city is named after a Carthaginian settlement called Barkino",
        "Barcelona hosted the 1992 Summer Olympics"
      ]
    },
    {
      "city": "Cape Town",
      "country": "South Africa",
      "clues": [
        "It's known for its iconic Table Mountain.",
        "The Cape of Good Hope is nearby."
      ],
      "funFacts": [
        "Cape Town has more than 710 miles of coastline.",
        "It is home to the world's smallest penguin species."
      ],
      "trivia": [
        "The city has a rich history of wine-making.",
        "Robben Island, where Nelson Mandela was imprisoned, is a UNESCO World Heritage Site."
      ]
    },
    {
      "city": "Mumbai",
      "country": "India",
      "clues": [
        "Home to the world's first million-dollar home",
        "Known as the city that never sleeps"
      ],
      "funFacts": [
        "Mumbai is the birthplace of Bollywood",
        "The city has the highest number of billionaires in India"
      ],
      "trivia": [
        "The Chhatrapati Shivaji Maharaj Terminus is a UNESCO World Heritage Site",
        "Mumbai's local trains are the lifeline of the city, carrying over 7.5 million passengers daily"
      ]
    },
    {
      "city": "Toronto",
      "country": "Canada",
      "clues": [
        "It's home to the CN Tower, once the world's tallest free-standing structure.",
        "The city has over 8,000 restaurants, making it a food lover's paradise."
      ],
      "funFacts": [
        "Toronto is the most multicultural city in the world, with over 230 distinct nationalities.",
        "The city has the largest film and television industry outside of Hollywood."
      ],
      "trivia": [
        "Toronto was originally named the Town of York.",
        "The city is home to the largest underground shopping complex in the world."
      ]
    },
    {
      "city": "Kolkata",
      "country": "India",
      "clues": [
        "Known as the 'City of Joy'",
        "Home to the iconic Howrah Bridge"
      ],
      "funFacts": [
        "Kolkata is the birthplace of the Nobel laureate Rabindranath Tagore",
        "The city has the only tram system in India"
      ],
      "trivia": [
        "Kolkata is famous for its street food, especially the 'phuchka'",
        "The city has the largest number of newspapers published in any Indian city"
      ]
    },
    {
      "city": "Cherrapunji",
      "country": "India",
      "clues": [
        "Known as one of the wettest places on Earth",
        "Home to the Khoh Ramhah Falls"
      ],
      "funFacts": [
        "It has a unique living root bridge",
        "The Nohkalikai Falls is one of the highest in India"
      ],
      "trivia": [
        "Cherrapunji's rainfall is crucial for the agriculture of Bangladesh",
        "The city is famous for its orchids and limestone caves"
      ]
    },
    {
      "city": "Sydney",
      "country": "Australia",
      "clues": [
        "It's home to the iconic Opera House",
        "You can see the Harbour Bridge from many vantage points"
      ],
      "funFacts": [
        "Sydney is home to over 4.5 million people",
        "The city has more than 100 beaches"
      ],
      "trivia": [
        "The Sydney Opera House took 14 years to build",
        "The city hosted the 2000 Summer Olympics"
      ]
    },
    {
      "city": "Rome",
      "country": "Italy",
      "clues": [
        "This city is home to the smallest country in the world.",
        "The Colosseum, a famous amphitheater, is located here."
      ],
      "funFacts": [
        "The city has more fountains than any other city in the world.",
        "The Spanish Steps are named after the Spanish Embassy to the Holy See."
      ],
      "trivia": [
        "The Pantheon in Rome has been in continuous use throughout its history.",
        "The Roman Forum was the political, commercial, and legal hub of the Roman Republic."
      ]
    },
    {
      "city": "New York",
      "country": "USA",
      "clues": [
        "Home to the Statue of Liberty",
        "Central Park is larger than the entire country of Monaco"
      ],
      "funFacts": [
        "The original name of New York City was New Amsterdam",
        "There are more than 800 languages spoken in New York City"
      ],
      "trivia": [
        "The subway system in New York City is the largest in the world",
        "The Empire State Building has its own zip code"
      ]
    },
    {
      "city": "Hanoi",
      "country": "Vietnam",
      "clues": [
        "It's known for its bustling Old Quarter.",
        "The city is famous for its street food."
      ],
      "funFacts": [
        "Hanoi has over 600 temples and pagodas.",
        "The city's name translates to 'the place between rivers'."
      ],
      "trivia": [
        "Hanoi was the capital of Vietnam for over a thousand years.",
        "The city is home to the world's largest museum of Vietnamese history."
      ]
    },
    {
      "city": "Barcelona",
      "country": "Spain",
      "clues": [
        "This city is famous for its unique architecture by Antoni Gaudí.",
        "It is home to the world's widest boulevard."
      ],
      "funFacts": [
        "The city has more than 50 museums.",
        "Barcelona's metro system is one of the deepest in Europe."
      ],
      "trivia": [
        "The city is named after a Carthaginian settlement called Barkeno.",
        "It is the capital of the Catalonia region."
      ]
    },
    {
      "city": "Cairo",
      "country": "Egypt",
      "clues": [
        "Home to the oldest university in the world",
        "The city's name means 'The Vanquisher' or 'The Conqueror'"
      ],
      "funFacts": [
        "Cairo has more than 90 museums",
        "The Egyptian Museum houses over 120,000 artifacts"
      ],
      "trivia": [
        "Cairo is the largest city in Africa",
        "The city's metro system is the first in Africa"
      ]
    },
    {
      "city": "Buenos Aires",
      "country": "Argentina",
      "clues": [
        "Known as the Paris of South America",
        "Home to the world's widest avenue"
      ],
      "funFacts": [
        "The city has more psychiatrists per capita than any other city in the world",
        "Buenos Aires is the birthplace of tango"
      ],
      "trivia": [
        "The city's name translates to 'good airs' or 'fair winds'",
        "Buenos Aires has more bookshops per inhabitant than any other city"
      ]
    },
    {
      "city": "New Delhi",
      "country": "India",
      "clues": [
        "This city is known for its bustling markets and historic sites.",
        "It is home to the iconic Red Fort."
      ],
      "funFacts": [
        "New Delhi is the world's largest city by area.",
        "The city's metro system is the first in the world to run on solar power."
      ],
      "trivia": [
        "The city's name was changed from Delhi to New Delhi in 1911.",
        "It is one of the oldest continuously inhabited cities in the world."
      ]
    },
    {
      "city": "Jaipur",
      "country": "India",
      "clues": [
        "Known as the Pink City",
        "Home to the City Palace"
      ],
      "funFacts": [
        "Jaipur's architecture is famous for its pink hue",
        "The city is a hub for traditional Rajasthani cuisine"
      ],
      "trivia": [
        "Jaipur was the first planned city of modern India",
        "The city has a unique observatory, Jantar Mantar"
      ]
    },
    {
      "city": "Agra",
      "country": "India",
      "clues": [
        "It is home to one of the Seven Wonders of the World",
        "The city is known for its Mughal architecture"
      ],
      "funFacts": [
        "The Taj Mahal is a UNESCO World Heritage Site",
        "Agra was the capital of the Mughal Empire under Akbar"
      ],
      "trivia": [
        "The city is often referred to as the 'City of Love'",
        "Agra's Red Fort is another UNESCO World Heritage Site"
      ]
    },
    {
      "city": "Panaji",
      "country": "India",
      "clues": [
        "Known for its Latin Quarter",
        "Home to the Fontainhas neighborhood"
      ],
      "funFacts": [
        "Panaji is the capital of Goa",
        "It boasts a unique blend of Portuguese and Indian cultures"
      ],
      "trivia": [
        "Panaji is one of the cleanest cities in India",
        "The city is famous for its vibrant nightlife and casinos"
      ]
    },
    {
      "city": "Bangkok",
      "country": "Thailand",
      "clues": [
        "Known for its ornate shrines and bustling street life.",
        "Home to the world's largest water fight festival."
      ],
      "funFacts": [
        "Bangkok is the most visited city in the world.",
        "It has more than 400 Buddhist temples."
      ],
      "trivia": [
        "The city's full name is Krung Thep Mahanakhon Amon Rattanakosin Mahinthara Yuthaya Mahadilok Phop Noppharat Ratchathani Burirom Udomratchaniwet Mahasathan Amon Piman Awatan Sathit Sakkathattiya Witsanukam Prasit.",
        "The Grand Palace in Bangkok is home to the Emerald Buddha, a highly revered statue."
      ]
    },
    {
      "city": "Phuket",
      "country": "Thailand",
      "clues": [
        "Famous for its stunning beaches and vibrant nightlife.",
        "Home to the iconic Big Buddha statue."
      ],
      "funFacts": [
        "Phuket is the largest island in Thailand.",
        "The island was once a tin-mining center."
      ],
      "trivia": [
        "Phuket is known as the 'Pearl of the Andaman'",
        "The island has over 30 stunning beaches."
      ]
    },
    {
      "city": "Chiang Mai",
      "country": "Thailand",
      "clues": [
        "Known as the 'Rose of the North'",
        "Home to over 300 Buddhist temples"
      ],
      "funFacts": [
        "Has the largest number of Buddhist temples in Thailand",
        "Hosts the annual Loy Krathong festival, where lanterns are released into the sky"
      ],
      "trivia": [
        "The city's name translates to 'new city'",
        "Chiang Mai was the capital of the Lanna Kingdom from 1296 to 1768"
      ]
    },
    {
      "city": "Dubai",
      "country": "UAE",
      "clues": [
        "Home to the world's tallest building",
        "Known for its luxurious shopping malls"
      ],
      "funFacts": [
        "Dubai has more than 300 days of sunshine per year",
        "The city has a police fleet that includes a Lamborghini and a Ferrari"
      ],
      "trivia": [
        "Dubai's Burj Khalifa is taller than the Empire State Building by more than 1,000 feet",
        "The city has a man-made archipelago shaped like a palm tree"
      ]
    },
    {
      "city": "Abu Dhabi",
      "country": "United Arab Emirates",
      "clues": [
        "Home to the world's largest mosque",
        "Features a Ferrari-themed park"
      ],
      "funFacts": [
        "The city has more than 200 nationalities",
        "The Louvre Abu Dhabi is the largest art museum in the Arab world"
      ],
      "trivia": [
        "Abu Dhabi is the capital of the UAE",
        "The city's name translates to 'Father of the Gazelle'"
      ]
    },
    {
      "city": "Doha",
      "country": "Qatar",
      "clues": [
        "Home to the world's largest collection of Islamic art",
        "Hosted the 2022 FIFA World Cup"
      ],
      "funFacts": [
        "Doha's skyline is rapidly changing with new skyscrapers",
        "The city is known for its modern architecture and luxury hotels"
      ],
      "trivia": [
        "Doha is one of the fastest-growing cities in the world",
        "The Museum of Islamic Art is a must-visit attraction"
      ]
    },
    {
      "city": "Istanbul",
      "country": "Turkey",
      "clues": [
        "Straddles two continents",
        "Home to the iconic Hagia Sophia"
      ],
      "funFacts": [
        "Istanbul's Grand Bazaar is one of the oldest and largest covered markets in the world",
        "The city has over 3,000 mosques"
      ],
      "trivia": [
        "Istanbul was the capital of three empires: Roman, Byzantine, and Ottoman",
        "The city's name changed from Constantinople to Istanbul in 1930"
      ]
    },
    {
      "city": "Antalya",
      "country": "Turkey",
      "clues": [
        "Known as the Turkish Riviera",
        "Home to ancient Roman ruins"
      ],
      "funFacts": [
        "Has more blue flag beaches than any other city in Turkey",
        "Hosts the annual Aspendos International Opera and Ballet Festival"
      ],
      "trivia": [
        "Antalya's Old Harbor is one of the largest marinas in the Mediterranean",
        "The city's name means 'port' in ancient Greek"
      ]
    },
    {
      "city": "Pamukkale",
      "country": "Turkey",
      "clues": [
        "Known for its white travertine terraces",
        "Located in the Denizli Province"
      ],
      "funFacts": [
        "The name Pamukkale means 'cotton castle' in Turkish",
        "The terraces are formed by mineral-rich hot springs"
      ],
      "trivia": [
        "The site is a UNESCO World Heritage Site",
        "The ancient city of Hierapolis is located nearby"
      ]
    },
    {
      "city": "London",
      "country": "UK",
      "clues": [
        "It is home to a palace that is still a working royal residence.",
        "The city has a famous clock tower that chimes every hour."
      ],
      "funFacts": [
        "The London Underground, or Tube, is the oldest underground railway network in the world.",
        "The city has more than 800 languages spoken within its boundaries."
      ],
      "trivia": [
        "The Tower of London was originally built as a royal residence, not a prison.",
        "The River Thames is tidal in London, meaning the water level rises and falls twice a day."
      ]
    },
    {
      "city": "Edinburgh",
      "country": "UK",
      "clues": [
        "This city is home to the world's largest arts festival.",
        "It is known for its historic castle perched atop a volcanic rock."
      ],
      "funFacts": [
        "Edinburgh has more listed buildings per acre than any other city in Europe.",
        "The city is home to the world's first fire brigade."
      ],
      "trivia": [
        "Edinburgh is the second most visited city in the UK after London.",
        "The city's official animal is the lion."
      ]
    },
    {
      "city": "Oxford",
      "country": "United Kingdom",
      "clues": [
        "It's known as the city of dreaming spires.",
        "It's home to the oldest university in the English-speaking world."
      ],
      "funFacts": [
        "The Bodleian Library has over 13 million printed items.",
        "The city has more than 1,500 listed buildings."
      ],
      "trivia": [
        "Oxford University has educated 120 Olympic medalists.",
        "The first ever recorded game of football took place in Oxford."
      ]
    },
    {
      "city": "Amsterdam",
      "country": "Netherlands",
      "clues": [
        "This city is famous for its canals.",
        "Bicycles outnumber residents."
      ],
      "funFacts": [
        "The city has over 1,500 bridges.",
        "It's home to the world's first stock exchange."
      ],
      "trivia": [
        "The city's name translates to 'dam on the Amstel.'",
        "It has more museums than rainy days in a year."
      ]
    },
    {
      "city": "Rotterdam",
      "country": "Netherlands",
      "clues": [
        "Known for its modern architecture.",
        "Home to the Euromast tower."
      ],
      "funFacts": [
        "Rotterdam has more than 580,000 bicycles, more than residents.",
        "The city has the largest port in Europe."
      ],
      "trivia": [
        "Rotterdam was almost entirely destroyed during World War II.",
        "The city is famous for its innovative Cube Houses."
      ]
    },
    {
      "city": "Brussels",
      "country": "Belgium",
      "clues": [
        "Home to the original French fries.",
        "The city has over 80 museums."
      ],
      "funFacts": [
        "Brussels has more bars per square kilometer than any other city in Europe.",
        "The city is home to the world's largest collection of comic strip murals."
      ],
      "trivia": [
        "Brussels is the de facto capital of the European Union.",
        "The Manneken Pis, a small bronze statue of a boy urinating, is one of the city's most famous landmarks."
      ]
    },
    {
      "city": "Vienna",
      "country": "Austria",
      "clues": [
        "Home to the world's oldest zoo",
        "Known for its coffeehouse culture"
      ],
      "funFacts": [
        "Vienna has more ballrooms than any other city in the world",
        "The city has over 100 museums"
      ],
      "trivia": [
        "Vienna's coffeehouses were once gathering spots for intellectuals like Sigmund Freud",
        "The city's public transportation system is one of the most extensive in the world"
      ]
    },
    {
      "city": "Salzburg",
      "country": "Austria",
      "clues": [
        "Known as the birthplace of Mozart",
        "Home to the famous Hohensalzburg Fortress"
      ],
      "funFacts": [
        "The city has over 400 bridges",
        "Salzburg's Old Town is a UNESCO World Heritage site"
      ],
      "trivia": [
        "The Sound of Music was filmed here",
        "The city hosts an annual Mozart Week"
      ]
    },
    {
      "city": "Zurich",
      "country": "Switzerland",
      "clues": [
        "It is known for its vibrant nightlife.",
        "The city has one of the world's largest art collections."
      ],
      "funFacts": [
        "Zurich has more water per capita than any other city in the world.",
        "The city is home to the world's oldest zoo, founded in 1836."
      ],
      "trivia": [
        "Zurich was the capital of Switzerland from 1803 to 1814.",
        "The city's main street, Bahnhofstrasse, is one of the world's most expensive retail streets."
      ]
    },
    {
      "city": "Lucerne",
      "country": "Switzerland",
      "clues": [
        "Known for its well-preserved medieval architecture.",
        "Home to the iconic Chapel Bridge."
      ],
      "funFacts": [
        "The Chapel Bridge is one of the oldest covered bridges in Europe.",
        "The Lion Monument is carved into a cliff."
      ],
      "trivia": [
        "Lucerne is known as the 'City of Lights'.",
        "The city has a rich history of musical traditions."
      ]
    },
    {
      "city": "Interlaken",
      "country": "Switzerland",
      "clues": [
        "Known as the adventure capital of Europe",
        "Home to the famous Jungfraujoch, the Top of Europe"
      ],
      "funFacts": [
        "Interlaken is located between two lakes, Lake Brienz and Lake Thun",
        "The town is a hub for skydiving, paragliding, and bungee jumping"
      ],
      "trivia": [
        "Interlaken's name translates to 'between the lakes'",
        "The town has hosted the World Parachuting Championships multiple times"
      ]
    },
    {
      "city": "Berlin",
      "country": "Germany",
      "clues": [
        "It's home to the iconic Brandenburg Gate.",
        "The Berlin Wall once divided this city."
      ],
      "funFacts": [
        "Berlin has more bridges than Venice.",
        "It's known for its vibrant street art scene."
      ],
      "trivia": [
        "The city is famous for its nightlife, with over 1,700 bars and clubs.",
        "Berlin's public transportation system is extensive, with over 2,000 buses."
      ]
    },
    {
      "city": "Munich",
      "country": "Germany",
      "clues": [
        "Home to the world's largest beer hall",
        "Hosts the famous Oktoberfest"
      ],
      "funFacts": [
        "Munich has more breweries than any other German city",
        "The city's name in German is München"
      ],
      "trivia": [
        "Munich was the capital of the Kingdom of Bavaria",
        "The city is known for its high quality of life"
      ]
    },
    {
      "city": "Frankfurt",
      "country": "Germany",
      "clues": [
        "Known as the birthplace of the famous writer Johann Wolfgang von Goethe.",
        "Home to the world's largest forest of skyscrapers outside of New York City."
      ],
      "funFacts": [
        "Frankfurt's airport is one of the busiest in Europe.",
        "The city has over 2,000 bars, making it a great place for nightlife."
      ],
      "trivia": [
        "Frankfurt is the financial capital of Germany.",
        "The city's name translates to 'ford of the Franks'."
      ]
    },
    {
      "city": "Prague",
      "country": "Czech Republic",
      "clues": [
        "Home to the world's oldest astronomical clock",
        "Known for its well-preserved Old Town"
      ],
      "funFacts": [
        "Prague is built on seven hills",
        "The city has more than 10 major bridges"
      ],
      "trivia": [
        "The Charles Bridge was completed in 1402",
        "Prague Castle is the largest ancient castle in the world"
      ]
    },
    {
      "city": "Budapest",
      "country": "Hungary",
      "clues": [
        "This city is known as the 'City of Spas' due to its numerous thermal baths.",
        "The Hungarian Parliament Building, one of the largest in the world, is located here."
      ],
      "funFacts": [
        "Budapest has more thermal springs than any other capital city in the world.",
        "The city's metro system, the M1 line, is a UNESCO World Heritage site."
      ],
      "trivia": [
        "The world's largest synagogue, the Dohány Street Synagogue, is located in Budapest.",
        "The city is home to the world's third-largest classic music venue, the Budapest Opera House."
      ]
    },
    {
      "city": "Warsaw",
      "country": "Poland",
      "clues": [
        "It is home to the largest castle in the country",
        "The Old Town was rebuilt after WWII"
      ],
      "funFacts": [
        "The Palace of Culture and Science was a gift from Stalin",
        "Warsaw has more green spaces per capita than any other European capital"
      ],
      "trivia": [
        "The city's metro system was built in secret during the Cold War",
        "Warsaw's Barbican is one of the few remaining city gates in Europe"
      ]
    },
    {
      "city": "Kraków",
      "country": "Poland",
      "clues": [
        "Home to the largest medieval market square in Europe",
        "Features the historic Wawel Royal Castle"
      ],
      "funFacts": [
        "The city boasts over 2000 years of history",
        "The Cloth Hall is one of the oldest shopping malls in the world"
      ],
      "trivia": [
        "Kraków was the capital of Poland until 1596",
        "The city is famous for its well-preserved Old Town, a UNESCO World Heritage site"
      ]
    },
    {
      "city": "Lisbon",
      "country": "Portugal",
      "clues": [
        "Known for its historic trams",
        "Home to the iconic Belém Tower"
      ],
      "funFacts": [
        "Lisbon is the oldest city in Western Europe",
        "Fado music originated in Lisbon's working-class neighborhoods"
      ],
      "trivia": [
        "Lisbon is built on seven hills",
        "The city has the oldest bookstore in the world"
      ]
    },
    {
      "city": "Porto",
      "country": "Portugal",
      "clues": [
        "Known for its famous port wine",
        "Home to the iconic Livraria Lello"
      ],
      "funFacts": [
        "Porto is the birthplace of the famous fado music",
        "The city's historic center is a UNESCO World Heritage site"
      ],
      "trivia": [
        "Porto is the second-largest city in Portugal",
        "The Dom Luís I Bridge was built by a student of Gustave Eiffel"
      ]
    },
    {
      "city": "Madrid",
      "country": "Spain",
      "clues": [
        "Home to the world's oldest restaurant",
        "Famous for its vibrant nightlife"
      ],
      "funFacts": [
        "Madrid has more bars per capita than any other city in Europe",
        "The city's metro system is the second-largest in Europe"
      ],
      "trivia": [
        "Madrid's Royal Palace is the largest functioning royal palace in Europe by floor area",
        "The city is home to the world's first modern underground metro system"
      ]
    },
    {
      "city": "Seville",
      "country": "Spain",
      "clues": [
        "Known for its vibrant flamenco culture",
        "Home to the largest Gothic cathedral in the world"
      ],
      "funFacts": [
        "The city has more than 3,000 bars",
        "The Alcázar of Seville is the oldest royal palace still in use in Europe"
      ],
      "trivia": [
        "Seville was the first city to have street lighting in the world",
        "The city's famous tapas tradition began as a way to keep bar patrons drinking"
      ]
    },
    {
      "city": "Valencia",
      "country": "Spain",
      "clues": [
        "This city is known for its paella.",
        "It is home to the City of Arts and Sciences."
      ],
      "funFacts": [
        "Valencia has the largest fresh water lake in Spain.",
        "The city has the oldest operating market in Europe."
      ],
      "trivia": [
        "The Silk Exchange in Valencia is a UNESCO World Heritage Site.",
        "Valencia was the capital of the Roman province of Hispania."
      ]
    },
    {
      "city": "Athens",
      "country": "Greece",
      "clues": [
        "Home to the ancient Acropolis.",
        "Known for its rich history and ancient ruins."
      ],
      "funFacts": [
        "The first modern Olympic Games were held in Athens in 1896.",
        "The city is home to the world's first known democracy."
      ],
      "trivia": [
        "Athens is one of the world's oldest cities, with a recorded history of over 3,400 years.",
        "The city has more than 150 museums and galleries."
      ]
    },
    {
      "city": "Santorini",
      "country": "Greece",
      "clues": [
        "Known for its stunning sunsets over the caldera.",
        "Home to ancient ruins and blue-domed churches."
      ],
      "funFacts": [
        "Santorini is essentially what's left of an island that was destroyed by a volcanic eruption.",
        "The island is famous for its unique wine, made from grapes grown in volcanic soil."
      ],
      "trivia": [
        "The island's name comes from Saint Irene, who was martyred in the 4th century.",
        "Santorini's beaches have unique colors, including red, black, and white sand."
      ]
    },
    {
      "city": "Mykonos",
      "country": "Greece",
      "clues": [
        "Known for its windmills",
        "Famous for its vibrant nightlife"
      ],
      "funFacts": [
        "Mykonos is part of the Cyclades island group",
        "The island is known as the 'Island of the Winds'"
      ],
      "trivia": [
        "The windmills are a famous landmark",
        "Mykonos has a rich history dating back to 3000 BC"
      ]
    },
    {
      "city": "Oslo",
      "country": "Norway",
      "clues": [
        "It is home to the Nobel Peace Prize ceremony.",
        "The city is built on a fjord."
      ],
      "funFacts": [
        "Oslo has more museums per capita than any other city in the world.",
        "The city's name means 'the mouth of the river Lo.'"
      ],
      "trivia": [
        "Oslo is known for its vibrant street art scene.",
        "The city has one of the world's oldest streetcar systems."
      ]
    },
    {
      "city": "Bergen",
      "country": "Norway",
      "clues": [
        "Known as the 'Gateway to the Fjords'",
        "Home to the famous fish market"
      ],
      "funFacts": [
        "Bergen has the second-oldest stock exchange in Europe",
        "The city has seven hills, not seven mountains"
      ],
      "trivia": [
        "Bergen is the second-largest city in Norway",
        "The city's name means 'the green meadows among the mountains'"
      ]
    },
    {
      "city": "Stockholm",
      "country": "Sweden",
      "clues": [
        "It's known as the 'Venice of the North'",
        "Home to the world's first open-air museum"
      ],
      "funFacts": [
        "Stockholm has more than 50 bridges",
        "The city is built on 14 islands"
      ],
      "trivia": [
        "The Nobel Prize ceremonies are held here",
        "Stockholm's subway system is the world's longest art exhibit"
      ]
    },
    {
      "city": "Copenhagen",
      "country": "Denmark",
      "clues": [
        "Home to the famous Little Mermaid statue",
        "Known for its colorful Nyhavn harbor"
      ],
      "funFacts": [
        "Copenhagen has more bicycles than residents",
        "The city is home to the world's oldest amusement park, Tivoli Gardens"
      ],
      "trivia": [
        "Copenhagen's Round Tower was built in the 17th century as an astronomical observatory",
        "The city is famous for its design and architecture, including the works of Arne Jacobsen"
      ]
    },
    {
      "city": "Rome",
      "country": "Italy",
      "clues": [
        "Home to the Colosseum",
        "Pizza and pasta originated here"
      ],
      "funFacts": [
        "Rome has 280 fountains",
        "The city has more churches than any other city in the world"
      ],
      "trivia": [
        "Rome was originally built on seven hills",
        "The city is known as the 'Eternal City'"
      ]
    },
    {
      "city": "Rome",
      "country": "Italy",
      "clues": [
        "Home to the Colosseum, the largest amphitheater ever built.",
        "The Vatican City, an independent city-state, is located within Rome."
      ],
      "funFacts": [
        "Rome has more fountains than any other city in the world.",
        "The famous Trevi Fountain has a tradition where visitors throw coins to ensure a return trip to Rome."
      ],
      "trivia": [
        "Rome was originally built on seven hills.",
        "The Pantheon in Rome has the world's largest unreinforced concrete dome."
      ]
    },
    {
      "city": "Florence",
      "country": "Italy",
      "clues": [
        "Home to the iconic Duomo",
        "Birthplace of the Renaissance"
      ],
      "funFacts": [
        "The Ponte Vecchio bridge is the only bridge in Florence that survived WWII",
        "Florence has more art galleries than any other city in the world"
      ],
      "trivia": [
        "The Uffizi Gallery holds more masterpieces than any other museum in the world",
        "Florence was the first city in Europe to have paved streets"
      ]
    },
    {
      "city": "Venice",
      "country": "Italy",
      "clues": [
        "A city built on water",
        "Famous for its canals and gondolas"
      ],
      "funFacts": [
        "Venice has no cars; it's a pedestrian and boat city",
        "The city is famous for its glass-making techniques, particularly in Murano"
      ],
      "trivia": [
        "Venice is known as 'La Serenissima,' meaning 'The Most Serene'",
        "The city has over 150 canals and 400 bridges"
      ]
    },
    {
      "city": "Naples",
      "country": "Italy",
      "clues": [
        "Home to the world's first pizzeria",
        "Known for its vibrant street art"
      ],
      "funFacts": [
        "The city has over 400 churches",
        "Naples is the third-most populous municipality in Italy"
      ],
      "trivia": [
        "The original pizza was invented in Naples",
        "The city has a UNESCO World Heritage Site"
      ]
    },
    {
      "city": "Sorrento",
      "country": "Italy",
      "clues": [
        "Known for its limoncello liqueur",
        "Home to the Villa Comunale park"
      ],
      "funFacts": [
        "Sorrento is the birthplace of the limoncello liqueur",
        "It has a rich history of being a popular vacation spot for Roman emperors"
      ],
      "trivia": [
        "Sorrento is often referred to as 'the pearl of the Mediterranean'",
        "The city's name comes from the Greek word 'Sorrentum' meaning 'rocky place'"
      ]
    },
    {
      "city": "Marrakech",
      "country": "Morocco",
      "clues": [
        "Known as the Red City due to its red sandstone buildings.",
        "Home to the bustling Jemaa el-Fnaa square."
      ],
      "funFacts": [
        "Marrakech is home to the largest traditional market in Morocco.",
        "The city's name translates to 'Land of God'."
      ],
      "trivia": [
        "The Bahia Palace in Marrakech features over 150 rooms.",
        "The Koutoubia Mosque's minaret is a prominent landmark visible from many parts of the city."
      ]
    },
    {
      "city": "Casablanca",
      "country": "Morocco",
      "clues": [
        "It is home to the largest mosque in Africa.",
        "The city's name means 'white house' in Spanish."
      ],
      "funFacts": [
        "Casablanca is the economic and business center of Morocco.",
        "The city has a rich blend of European and Moroccan architecture."
      ],
      "trivia": [
        "The film 'Casablanca' was not filmed in Casablanca.",
        "The city is known for its vibrant nightlife and cultural festivals."
      ]
    },
    {
      "city": "Fez",
      "country": "Morocco",
      "clues": [
        "It is home to the world's oldest university.",
        "The city has a medina that is a UNESCO World Heritage site."
      ],
      "funFacts": [
        "Fez is known for its leather tanneries that have been operating for over a thousand years.",
        "The city's medina is one of the largest car-free urban areas in the world."
      ],
      "trivia": [
        "Fez is often referred to as the cultural capital of Morocco.",
        "The Bou Inania Madrasa is one of the few religious sites in Fez open to non-Muslims."
      ]
    },
    {
      "city": "Nairobi",
      "country": "Kenya",
      "clues": [
        "Home to the world's only wildlife capital",
        "Location of the world's largest urban elephant population"
      ],
      "funFacts": [
        "Nairobi is the only city in the world with a national park within its boundaries",
        "The city is known as the 'Green City in the Sun'"
      ],
      "trivia": [
        "Nairobi's name comes from the Maasai phrase Enkare Nyirobi, which means 'place of cool waters'",
        "The city is home to the largest urban giraffe population"
      ]
    },
    {
      "city": "Maasai Mara",
      "country": "Kenya",
      "clues": [
        "Known for the Great Migration of wildebeest",
        "Home to the Maasai people"
      ],
      "funFacts": [
        "The Maasai Mara is named after the Maasai people",
        "It's one of the best places to see the Big Five"
      ],
      "trivia": [
        "The Mara River is famous for its crocodile population",
        "The reserve is about 1,510 square kilometers"
      ]
    },
    {
      "city": "Accra",
      "country": "Ghana",
      "clues": [
        "It is known for its vibrant nightlife and bustling markets.",
        "Home to the National Museum of Ghana."
      ],
      "funFacts": [
        "Accra is the capital of Ghana and is known as the 'Black Star of Africa'.",
        "The city is famous for its colorful festivals, including the Homowo festival."
      ],
      "trivia": [
        "Accra was the capital of the British Gold Coast.",
        "The city is home to the Kwame Nkrumah Mausoleum, a significant historical site."
      ]
    },
    {
      "city": "Cape Coast",
      "country": "Ghana",
      "clues": [
        "This city is known for its historic castles.",
        "It is home to a significant university."
      ],
      "funFacts": [
        "Cape Coast is famous for its vibrant Kente cloth weaving.",
        "The city's beaches are popular for turtle nesting."
      ],
      "trivia": [
        "The Cape Coast Castle was a major slave-trading outpost.",
        "The University of Cape Coast is one of Ghana's oldest universities."
      ]
    },
    {
      "city": "Stone Town",
      "country": "Tanzania",
      "clues": [
        "It's a UNESCO World Heritage site.",
        "The narrow streets are perfect for exploring on foot."
      ],
      "funFacts": [
        "The city is known for its intricate wooden doors.",
        "Stone Town was a major trading hub in the 19th century."
      ],
      "trivia": [
        "The city's architecture is a blend of Arab, Persian, Indian, and European styles.",
        "Freddie Mercury, the legendary singer of Queen, was born here."
      ]
    },
    {
      "city": "Stone Town",
      "country": "Tanzania",
      "clues": [
        "Known for its unique blend of African, Arab, and European architecture",
        "A UNESCO World Heritage Site"
      ],
      "funFacts": [
        "Stone Town is home to the oldest stone buildings in East Africa",
        "The town's labyrinthine streets are a maze of history and culture"
      ],
      "trivia": [
        "The name 'Stone Town' comes from the use of coral stone in its construction",
        "The town was a major trading hub for spices, ivory, and slaves in the 19th century"
      ]
    },
    {
      "city": "Johannesburg",
      "country": "South Africa",
      "clues": [
        "Home to the Apartheid Museum",
        "Known for its vibrant street art"
      ],
      "funFacts": [
        "The city has more than 80 km of underground tunnels",
        "Johannesburg is the largest city in South Africa"
      ],
      "trivia": [
        "The city was founded in 1886 during the Witwatersrand Gold Rush",
        "It is one of the youngest major cities in the world"
      ]
    },
    {
      "city": "Durban",
      "country": "South Africa",
      "clues": [
        "It's known for its golden beaches.",
        "Home to the world's largest collection of Indian art outside of India."
      ],
      "funFacts": [
        "Durban has the largest population of Indian origin outside of India.",
        "The city is famous for its unique blend of African, Indian, and colonial influences."
      ],
      "trivia": [
        "Durban is the busiest port in Africa.",
        "The city is home to the world's largest collection of Victorian and Edwardian architecture outside of the UK."
      ]
    },
    {
      "city": "Addis Ababa",
      "country": "Ethiopia",
      "clues": [
        "Home to the largest open-air market in Africa",
        "The only African capital city that was never colonized"
      ],
      "funFacts": [
        "Addis Ababa means 'new flower' in Amharic",
        "The city hosts the African Union headquarters"
      ],
      "trivia": [
        "Addis Ababa is the third-highest capital city in Africa",
        "The city is known for its vibrant live music scene"
      ]
    },
    {
      "city": "Kathmandu",
      "country": "Nepal",
      "clues": [
        "Home to the only living goddess in the world.",
        "Includes the historic Durbar Square."
      ],
      "funFacts": [
        "Kathmandu is one of the oldest cities in the world.",
        "It is home to seven UNESCO World Heritage Sites."
      ],
      "trivia": [
        "The city's name translates to 'Wooden House' in Sanskrit.",
        "It is known as the 'City of Temples'."
      ]
    },
    {
      "city": "Pokhara",
      "country": "Nepal",
      "clues": [
        "It's known as the 'City of Lakes'",
        "Home to the world's highest altitude paragliding"
      ],
      "funFacts": [
        "Pokhara is the starting point for treks to the Annapurna Circuit",
        "It has one of the largest caves in the world, Mahendra Cave"
      ],
      "trivia": [
        "Pokhara is the second largest city in Nepal",
        "The city is a gateway to the Annapurna Conservation Area"
      ]
    },
    {
      "city": "Thimphu",
      "country": "Bhutan",
      "clues": [
        "It's the only capital city in the world without traffic lights.",
        "Home to the world's largest sitting Buddha statue."
      ],
      "funFacts": [
        "Thimphu is the only capital city in the world without a single traffic light.",
        "The city is home to the Takin, Bhutan's national animal."
      ],
      "trivia": [
        "Thimphu was officially declared the capital of Bhutan in 1961.",
        "The city hosts the annual Thimphu Tsechu, a religious festival with masked dances."
      ]
    },
    {
      "city": "Paro",
      "country": "Bhutan",
      "clues": [
        "Home to the only international airport in Bhutan",
        "Known for the annual Paro Tshechu festival"
      ],
      "funFacts": [
        "Paro Taktsang, also known as the Tiger's Nest, is one of the most famous Buddhist sacred sites",
        "The city is surrounded by beautiful landscapes and mountains"
      ],
      "trivia": [
        "Paro is the site of the only airport in Bhutan",
        "The city is known for its traditional architecture and vibrant culture"
      ]
    },
    {
      "city": "Kuala Lumpur",
      "country": "Malaysia",
      "clues": [
        "Home to the world's tallest twin towers",
        "Known for its diverse street food"
      ],
      "funFacts": [
        "The city's name translates to 'muddy estuary'",
        "Kuala Lumpur has over 600 mosques"
      ],
      "trivia": [
        "The Petronas Twin Towers were the world's tallest buildings from 1998 to 2004",
        "Kuala Lumpur is one of the few places where you can find a Hindu temple, a Buddhist temple, and a mosque within walking distance of each other"
      ]
    },
    {
      "city": "Penang",
      "country": "Malaysia",
      "clues": [
        "Known as the 'Pearl of the Orient'",
        "Home to the oldest temple in Malaysia"
      ],
      "funFacts": [
        "Penang has the highest density of botanic gardens in Southeast Asia",
        "The city is famous for its street art, including the works of Ernest Zacharevic"
      ],
      "trivia": [
        "Penang's Cheong Fatt Tze Mansion is known as the 'Blue Mansion' due to its indigo blue exterior",
        "The city is a UNESCO World Heritage Site for its historic architecture"
      ]
    },
    {
      "city": "Singapore",
      "country": "Singapore",
      "clues": [
        "It's known as the 'Lion City'",
        "It has a famous botanical garden that's a UNESCO World Heritage Site"
      ],
      "funFacts": [
        "Singapore has one of the lowest crime rates in the world",
        "It is home to the world's first night zoo"
      ],
      "trivia": [
        "The Singapore Sling cocktail was invented at the Long Bar in the Raffles Hotel",
        "It is one of only three city-states in the world"
      ]
    },
    {
      "city": "Manila",
      "country": "Philippines",
      "clues": [
        "Home to the oldest Chinatown in the world",
        "Known for its vibrant street food scene"
      ],
      "funFacts": [
        "Manila was the capital of the Spanish East Indies",
        "The city has the largest number of jeepneys in the world"
      ],
      "trivia": [
        "The Manila American Cemetery and Memorial is the largest American cemetery outside the U.S.",
        "The city is named after the mangrove plant, 'nilad'"
      ]
    },
    {
      "city": "Cebu",
      "country": "Philippines",
      "clues": [
        "It's known as the 'Queen City of the South'",
        "Home to the oldest street in the Philippines"
      ],
      "funFacts": [
        "Cebu is the birthplace of the famous Filipino delicacy, lechon.",
        "The city is home to the oldest Christian settlement in the Philippines."
      ],
      "trivia": [
        "Cebu is the first Philippine city to be settled by the Spanish.",
        "The Magellan's Cross, a significant historical landmark, is located in Cebu."
      ]
    },
    {
      "city": "Seoul",
      "country": "South Korea",
      "clues": [
        "Home to the world's largest indoor theme park",
        "Known for its vibrant street food scene"
      ],
      "funFacts": [
        "Seoul has more than 10,000 restaurants",
        "The city is home to the world's largest indoor ice rink"
      ],
      "trivia": [
        "Seoul is one of the oldest capitals in the world",
        "The city has the fastest internet in the world"
      ]
    },
    {
      "city": "Busan",
      "country": "South Korea",
      "clues": [
        "It's known for its beautiful beaches and hot tea culture.",
        "Home to the world's largest department store."
      ],
      "funFacts": [
        "Busan is famous for its seafood, particularly its ssiat hotteok (seafood pancakes).",
        "The Gamcheon Cultural Village is known as the 'Machu Picchu of Busan'."
      ],
      "trivia": [
        "The Busan International Film Festival is one of the largest in Asia.",
        "The Haedong Yonggungsa Temple is a unique seaside temple."
      ]
    },
    {
      "city": "Shanghai",
      "country": "China",
      "clues": [
        "It is home to the world's second-tallest building.",
        "You can find the world's busiest metro system here."
      ],
      "funFacts": [
        "Shanghai's Bund is one of the most photographed skylines in the world.",
        "The city has more skyscrapers than New York City."
      ],
      "trivia": [
        "Shanghai was the largest city in the world by population in the 1980s.",
        "The city's name translates to 'On the Sea'."
      ]
    },
    {
      "city": "Beijing",
      "country": "China",
      "clues": [
        "Home to the world's largest palace complex",
        "Known for its iconic Great Wall section"
      ],
      "funFacts": [
        "Beijing's Forbidden City has 9,999 rooms",
        "The Summer Palace has the world's longest painted corridor"
      ],
      "trivia": [
        "Beijing hosted the 2008 Summer Olympics",
        "The city's name means 'Northern Capital'"
      ]
    },
    {
      "city": "Hong Kong",
      "country": "China",
      "clues": [
        "It's known for its iconic skyline.",
        "It has one of the world's longest escalators."
      ],
      "funFacts": [
        "It has more skyscrapers over 100 meters tall than any other city.",
        "It's home to the world's longest outdoor covered escalator system."
      ],
      "trivia": [
        "It was a British colony until 1997.",
        "It has one of the highest densities of skyscrapers in the world."
      ]
    },
    {
      "city": "Taipei",
      "country": "Taiwan",
      "clues": [
        "Home to the world's highest green building",
        "Known for its bustling night markets"
      ],
      "funFacts": [
        "The Taipei 101 was once the tallest building in the world",
        "Taipei has more than 200 temples"
      ],
      "trivia": [
        "The city has a unique blend of traditional and modern architecture",
        "Taipei is famous for its vibrant street food culture"
      ]
    },
    {
      "city": "Melbourne",
      "country": "Australia",
      "clues": [
        "Known for its vibrant street art.",
        "Home to the world's largest tram network."
      ],
      "funFacts": [
        "Melbourne has more cafes per capita than any other city in the world.",
        "The city is famous for its coffee culture."
      ],
      "trivia": [
        "Melbourne was the second-largest city in the British Empire in the late 19th century.",
        "The city hosts the Australian Open tennis tournament."
      ]
    },
    {
      "city": "Brisbane",
      "country": "Australia",
      "clues": [
        "Home to the world's largest collection of Australian art",
        "Known for its subtropical climate and lush parks"
      ],
      "funFacts": [
        "Brisbane is home to the world's first floating hotel",
        "The city has more than 270 parks covering over 2,200 hectares"
      ],
      "trivia": [
        "Brisbane was originally called 'Edenglassie'",
        "The city's iconic Story Bridge was built by the same company that constructed the Sydney Harbour Bridge"
      ]
    },
    {
      "city": "Queenstown",
      "country": "New Zealand",
      "clues": [
        "Known as the 'Adventure Capital of the World'",
        "Home to the world's first commercial bungee jump"
      ],
      "funFacts": [
        "Queenstown is located on the shores of Lake Wakatipu",
        "It is the gateway to the Milford Sound"
      ],
      "trivia": [
        "The town's name was chosen by William Gilbert Rees",
        "The town's population doubles in the summer"
      ]
    },
    {
      "city": "Auckland",
      "country": "New Zealand",
      "clues": [
        "It is known as the 'City of Sails'",
        "It has more boats per capita than any other city in the world"
      ],
      "funFacts": [
        "Auckland is built on an active volcanic field",
        "It has the largest Polynesian population of any city in the world"
      ],
      "trivia": [
        "Auckland is home to the world's largest collection of street art",
        "The city's Sky Tower was the tallest free-standing structure in the Southern Hemisphere until 2011"
      ]
    },
    {
      "city": "Havana",
      "country": "Cuba",
      "clues": [
        "It's famous for classic cars from the 1950s.",
        "It has a historic district that is a UNESCO World Heritage site."
      ],
      "funFacts": [
        "Havana has more than 900 historic buildings.",
        "The city is known for its vibrant street art."
      ],
      "trivia": [
        "Havana is home to the world's smallest bird, the bee hummingbird.",
        "The city's name comes from the native Taíno people."
      ]
    },
    {
      "city": "San Juan",
      "country": "Puerto Rico",
      "clues": [
        "Known for its vibrant nightlife and historic architecture",
        "Features the iconic El Morro fortress"
      ],
      "funFacts": [
        "The city is home to the only tropical rainforest in the U.S. National Forest System",
        "San Juan's Old San Juan district is the oldest city under U.S. jurisdiction"
      ],
      "trivia": [
        "The city's name translates to 'Saint John' in English",
        "San Juan is the second-oldest European-established capital city in the Americas"
      ]
    },
    {
      "city": "Rio de Janeiro",
      "country": "Brazil",
      "clues": [
        "Home to the iconic Christ the Redeemer statue",
        "Known for its vibrant Carnival celebrations"
      ],
      "funFacts": [
        "The city's name translates to 'January River'",
        "Rio de Janeiro has the largest urban forest in the world, the Tijuca Forest"
      ],
      "trivia": [
        "The Maracanã Stadium in Rio hosted the 1950 and 2014 FIFA World Cup finals",
        "The city is famous for its beautiful beaches like Copacabana and Ipanema"
      ]
    },
    {
      "city": "São Paulo",
      "country": "Brazil",
      "clues": [
        "Home to the largest helicopter fleet in the world",
        "The city has over 70 museums"
      ],
      "funFacts": [
        "It has the largest Japanese population outside of Japan",
        "The city is home to the world's largest helipad"
      ],
      "trivia": [
        "The city's name means 'Saint Paul' in Portuguese",
        "São Paulo has more pizzerias than Naples, Italy"
      ]
    },
    {
      "city": "Cusco",
      "country": "Peru",
      "clues": [
        "It was the capital of the Inca Empire",
        "It is a UNESCO World Heritage site"
      ],
      "funFacts": [
        "Cusco is known as the 'Archaeological Capital of the Americas'",
        "It is home to the famous Sacsayhuamán fortress"
      ],
      "trivia": [
        "The city's name means 'navel' in Quechua, reflecting its status as the center of the Inca world",
        "Cusco has more than 300 days of sunshine per year"
      ]
    },
    {
      "city": "Lima",
      "country": "Peru",
      "clues": [
        "Known for its vibrant street food scene",
        "Home to the historic Plaza de Armas"
      ],
      "funFacts": [
        "Lima is home to the largest collection of colonial architecture in South America",
        "The city has more than 200 museums"
      ],
      "trivia": [
        "Lima was the capital of the Viceroyalty of Peru",
        "The city's name comes from the Aymara word 'rimak' meaning 'talker'"
      ]
    },
    {
      "city": "Quito",
      "country": "Ecuador",
      "clues": [
        "It is the highest official capital city in the world.",
        "It is home to the historic Old Town, a UNESCO World Heritage site."
      ],
      "funFacts": [
        "Quito is located on the equator, making it a great place to experience the middle of the world.",
        "The city has a vibrant street art scene with colorful murals throughout."
      ],
      "trivia": [
        "Quito's Old Town has one of the best-preserved historic centers in the Americas.",
        "The city is known for its diverse ecosystems, ranging from the Andes to the Amazon rainforest."
      ]
    },
    {
      "city": "Santiago",
      "country": "Chile",
      "clues": [
        "This city is home to the world's longest street.",
        "It is located in a valley surrounded by the Andes and the Coastal Mountain Range."
      ],
      "funFacts": [
        "Santiago is known as the 'City of the Islands' due to its numerous islands in the Mapocho River.",
        "The city has the largest number of skyscrapers in Latin America."
      ],
      "trivia": [
        "The Metropolitan Cathedral of Santiago is the seat of the Archbishop of Santiago.",
        "Santiago's Cerro San Cristobal hill offers panoramic views of the city and is home to a large statue of the Virgin Mary."
      ]
    },
    {
      "city": "Buenos Aires",
      "country": "Argentina",
      "clues": [
        "Known for its tango music and dance",
        "Home to the famous Recoleta Cemetery"
      ],
      "funFacts": [
        "Buenos Aires is known as the 'Paris of South America'",
        "The city has the largest number of bookstores per capita in the world"
      ],
      "trivia": [
        "The city's name means 'Good Airs' in Spanish",
        "Buenos Aires is home to the world's widest avenue, Avenida 9 de Julio"
      ]
    } 
  
  ]


  for (const destination of destinations) {
    const existingDestination = await destinationRepository.findOne({
      where: { city: destination.city, country: destination.country },
    });

    if (!existingDestination) {
      await destinationRepository.save(destination);
      console.log(`Inserted destination: ${destination.city}, ${destination.country}`);
    } else {
      console.log(`Destination already exists: ${destination.city}, ${destination.country}`);
    }
  }

  await appDataSource.destroy();
};

seedDestinations()
  .then(() => console.log('Seeding completed!'))
  .catch((error) => console.error('Error seeding data:', error));