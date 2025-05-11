"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const destination_entity_1 = require("../destinations/entities/destination.entity");
const datasource_1 = require("./datasource");
const seedDestinations = async () => {
    const appDataSource = await datasource_1.default.initialize();
    const destinationRepository = appDataSource.getRepository(destination_entity_1.Destination);
    const destinations = [
        {
            city: 'Madrid',
            country: 'Spain',
            clues: [
                'This city is home to the Royal Palace and the Prado Museum.',
                'Known for its vibrant nightlife and flamenco dancing.',
            ],
            funFacts: [
                'Madrid is the highest capital city in Europe, sitting at 667 meters above sea level.',
                "The city's name is believed to originate from the Arabic 'Magerit', meaning 'place of abundant water'.",
            ],
            trivia: [
                "Madrid's El Rastro is one of the most famous open-air flea markets in Europe.",
                "The city's official symbol is a bear eating berries from a tree.",
            ],
        },
        {
            city: 'Florence',
            country: 'Italy',
            clues: [
                'This city is known as the birthplace of the Renaissance.',
                'Home to the Uffizi Gallery and Michelangelo’s David.',
            ],
            funFacts: [
                'Florence was the first city in Europe to have paved streets.',
                'The city’s historic center is a UNESCO World Heritage Site.',
            ],
            trivia: [
                'Florence’s Duomo has the largest brick dome ever constructed.',
                'The city was once ruled by the powerful Medici family.',
            ],
        },
        {
            city: 'Kyoto',
            country: 'Japan',
            clues: [
                'This city is famous for its classical Buddhist temples.',
                'Home to the Fushimi Inari Shrine and Arashiyama Bamboo Grove.',
            ],
            funFacts: [
                'Kyoto was the capital of Japan for over 1,000 years.',
                'The city has over 1,600 temples and shrines.',
            ],
            trivia: [
                'Kyoto is known for its traditional kaiseki dining.',
                'The city’s name means "Capital City" in Japanese.',
            ],
        },
        {
            city: 'Venice',
            country: 'Italy',
            clues: [
                'This city is built on a lagoon with canals instead of streets.',
                'Home to St. Mark’s Basilica and the Rialto Bridge.',
            ],
            funFacts: [
                'Venice is made up of 118 small islands.',
                'The city’s gondolas are painted black by law.',
            ],
            trivia: [
                'Venice’s Carnival is famous for its elaborate masks.',
                'The city has no cars or roads, only canals and boats.',
            ],
        },
        {
            city: 'Helsinki',
            country: 'Finland',
            clues: [
                'This city is known for its design and architecture.',
                'Home to the Suomenlinna Fortress and Sibelius Monument.',
            ],
            funFacts: [
                'Helsinki is one of the northernmost capitals in the world.',
                'The city has over 300 islands in its archipelago.',
            ],
            trivia: [
                'Helsinki’s public saunas are an integral part of its culture.',
                'The city was the World Design Capital in 2012.',
            ],
        },
        {
            city: 'Reykjavik',
            country: 'Iceland',
            clues: [
                'This city is the northernmost capital in the world.',
                'Home to the Hallgrímskirkja Church and Blue Lagoon.',
            ],
            funFacts: [
                'Reykjavik means "Smoky Bay" in Icelandic.',
                'The city is powered almost entirely by renewable energy.',
            ],
            trivia: [
                'Reykjavik has no McDonald’s restaurants.',
                'The city hosts the annual Iceland Airwaves music festival.',
            ],
        },
        {
            city: 'Casablanca',
            country: 'Morocco',
            clues: [
                'This city is known for its French colonial architecture.',
                'Home to the Hassan II Mosque and Rick’s Café.',
            ],
            funFacts: [
                'Casablanca is the largest city in Morocco.',
                'The city’s name means "White House" in Spanish.',
            ],
            trivia: [
                'The movie "Casablanca" was named after this city.',
                'The Hassan II Mosque has the tallest minaret in the world.',
            ],
        },
        {
            city: 'Manila',
            country: 'Philippines',
            clues: [
                'This city is known for its historic Intramuros district.',
                'Home to Rizal Park and Manila Cathedral.',
            ],
            funFacts: [
                'Manila is one of the most densely populated cities in the world.',
                'The city’s name comes from "Maynilad," referring to a type of mangrove plant.',
            ],
            trivia: [
                'Manila was the first city in Asia to have a tram system.',
                'The city is part of a metropolitan area with over 13 million people.',
            ],
        },
        {
            city: 'Santiago',
            country: 'Chile',
            clues: [
                'This city is located in a valley surrounded by mountains.',
                'Home to Cerro San Cristóbal and La Moneda Palace.',
            ],
            funFacts: [
                'Santiago is one of the highest capital cities in the world.',
                'The city experiences both Mediterranean and alpine climates.',
            ],
            trivia: [
                'Santiago’s subway system is one of the most modern in South America.',
                'The city’s name means "Saint James" in Spanish.',
            ],
        },
        {
            city: 'Jakarta',
            country: 'Indonesia',
            clues: [
                'This city is the capital of the world’s largest archipelago nation.',
                'Home to the National Monument and Istiqlal Mosque.',
            ],
            funFacts: [
                'Jakarta is sinking at an alarming rate due to groundwater extraction.',
                'The city’s name means "Complete Victory" in Sanskrit.',
            ],
            trivia: [
                'Jakarta is one of the most populous urban areas in the world.',
                'The city has a mix of Javanese, Malay, Chinese, and Dutch influences.',
            ],
        },
        {
            city: 'Lagos',
            country: 'Nigeria',
            clues: [
                'This city is the largest in Africa by population.',
                'Home to the Lekki Conservation Centre and Nike Art Gallery.',
            ],
            funFacts: [],
            trivia: [
                'Tokyo was originally a small fishing village named Edo.',
                'The city has more Michelin-starred restaurants than any other city.',
            ],
        },
        {
            city: 'Sydney',
            country: 'Australia',
            clues: [
                'This city is home to the iconic Opera House.',
                'Known for its Harbour Bridge and beautiful beaches.',
            ],
            funFacts: [
                'Sydney has over 100 beaches.',
                'The Sydney Opera House took 14 years to build.',
            ],
            trivia: [
                'Sydney’s Bondi Beach is one of the most famous beaches in the world.',
                'The city was the site of the 2000 Summer Olympics.',
            ],
        },
        {
            city: 'Cape Town',
            country: 'South Africa',
            clues: [
                'This city is known for its Table Mountain.',
                'Home to Robben Island, where Nelson Mandela was imprisoned.',
            ],
            funFacts: [
                'Cape Town is one of the most biodiverse cities in the world.',
                'The city has a penguin colony at Boulders Beach.',
            ],
            trivia: [
                'Cape Town is often called the "Mother City" of South Africa.',
                'The city’s Kirstenbosch Botanical Garden is a UNESCO World Heritage Site.',
            ],
        },
        {
            city: 'Istanbul',
            country: 'Turkey',
            clues: [
                'This city straddles two continents: Europe and Asia.',
                'Home to the Hagia Sophia and the Blue Mosque.',
            ],
            funFacts: [
                'Istanbul was formerly known as Byzantium and Constantinople.',
                'The Grand Bazaar in Istanbul is one of the largest and oldest covered markets in the world.',
            ],
            trivia: [
                'Istanbul is the only city in the world located on two continents.',
                'The city has over 3,000 mosques.',
            ],
        },
        {
            city: 'Moscow',
            country: 'Russia',
            clues: [
                'This city is home to the Kremlin and Red Square.',
                'Known for its iconic St. Basil’s Cathedral.',
            ],
            funFacts: [
                'Moscow’s metro system is one of the busiest in the world.',
                'The city has more billionaires than any other city in Europe.',
            ],
            trivia: [
                'Moscow’s Kremlin is the largest medieval fortress in the world.',
                'The city’s name is derived from the Moskva River.',
            ],
        },
        {
            city: 'Rio de Janeiro',
            country: 'Brazil',
            clues: [
                'This city is famous for its Carnival and samba music.',
                'Home to the Christ the Redeemer statue.',
            ],
            funFacts: [
                'Rio’s Copacabana Beach is one of the most famous beaches in the world.',
                'The city’s Maracanã Stadium is one of the largest football stadiums in the world.',
            ],
            trivia: [
                'Rio de Janeiro means "January River" in Portuguese.',
                'The city was once the capital of Brazil.',
            ],
        },
        {
            city: 'Toronto',
            country: 'Canada',
            clues: [
                'This city is home to the CN Tower.',
                'Known for its multicultural population.',
            ],
            funFacts: [
                'Toronto has over 8,000 restaurants.',
                'The city’s PATH is the largest underground shopping complex in the world.',
            ],
            trivia: [
                'Toronto is the fourth-largest city in North America.',
                'The city hosts the Toronto International Film Festival (TIFF).',
            ],
        },
        {
            city: 'San Francisco',
            country: 'USA',
            clues: [
                'This city is known for the Golden Gate Bridge.',
                'Home to Alcatraz Island and cable cars.',
            ],
            funFacts: [
                'San Francisco has more dogs than children.',
                'The city’s Lombard Street is known as the "crookedest street in the world."',
            ],
            trivia: [
                'The fortune cookie was invented in San Francisco.',
                'The city was almost completely destroyed by an earthquake in 1906.',
            ],
        },
        {
            city: 'Mumbai',
            country: 'India',
            clues: [
                'This city is the financial capital of India.',
                'Home to Bollywood, the Indian film industry.',
            ],
            funFacts: [
                'Mumbai was originally a group of seven islands.',
                'The city’s dabbawalas deliver over 200,000 lunchboxes daily with incredible accuracy.',
            ],
            trivia: [
                'Mumbai’s Chhatrapati Shivaji Terminus is a UNESCO World Heritage Site.',
                'The city is home to the world’s most expensive private residence, Antilia.',
            ],
        },
        {
            city: 'Mexico City',
            country: 'Mexico',
            clues: [
                'This city is built on a lake.',
                'Home to the ancient Aztec Templo Mayor.',
            ],
            funFacts: [
                'Mexico City sinks about 10 inches every year.',
                'The city has the largest number of museums in the Americas.',
            ],
            trivia: [
                'Mexico City was originally called Tenochtitlán.',
                'The city’s Chapultepec Park is one of the largest city parks in the world.',
            ],
        },
        {
            city: 'Hanoi',
            country: 'Vietnam',
            clues: [
                'This city is known for its centuries-old architecture.',
                'Home to Hoan Kiem Lake and the Old Quarter.',
            ],
            funFacts: [
                'Hanoi is over 1,000 years old.',
                'The city’s name means "Inside the Rivers."',
            ],
            trivia: [
                'Hanoi’s Train Street is a popular tourist attraction.',
                'The city has a unique coffee culture, including egg coffee.',
            ],
        },
        {
            city: 'Lisbon',
            country: 'Portugal',
            clues: [
                'This city is known for its yellow trams and Fado music.',
                'Home to the Belém Tower and Jerónimos Monastery.',
            ],
            funFacts: [
                'Lisbon is one of the oldest cities in Western Europe.',
                'The city is built on seven hills.',
            ],
            trivia: [
                'Lisbon’s Vasco da Gama Bridge is the longest bridge in Europe.',
                'The city was almost completely destroyed by an earthquake in 1755.',
            ],
        },
        {
            city: 'Vienna',
            country: 'Austria',
            clues: [
                'This city is known as the "City of Music."',
                'Home to Schönbrunn Palace and the Vienna State Opera.',
            ],
            funFacts: [
                'Vienna has been ranked as the world’s most livable city multiple times.',
                'The city’s coffee culture is UNESCO-recognized.',
            ],
            trivia: [
                'Vienna was the home of famous composers like Mozart and Beethoven.',
                'The city has over 100 museums.',
            ],
        },
        {
            city: 'Bangkok',
            country: 'Thailand',
            clues: [
                'This city is known for its ornate temples and vibrant street life.',
                'Home to the Grand Palace and Wat Arun.',
            ],
            funFacts: [
                'Bangkok’s full ceremonial name is the longest city name in the world.',
                'The city has over 400 temples.',
            ],
            trivia: [
                'Bangkok is often called the "Venice of the East" due to its many canals.',
                'The Chatuchak Market in Bangkok is one of the largest markets in the world.',
            ],
        },
        {
            city: 'Prague',
            country: 'Czech Republic',
            clues: [
                'This city is known as the "City of a Hundred Spires."',
                'Home to Prague Castle and Charles Bridge.',
            ],
            funFacts: [
                'Prague’s astronomical clock is the oldest working clock of its kind.',
                'The city was largely untouched during World War II.',
            ],
            trivia: [
                'Prague’s Old Town Square is a UNESCO World Heritage Site.',
                'The city has a beer spa where you can bathe in beer.',
            ],
        },
        {
            city: 'Stockholm',
            country: 'Sweden',
            clues: [
                'This city is built on 14 islands.',
                'Home to the Vasa Museum and Gamla Stan.',
            ],
            funFacts: [
                'Stockholm is often called the "Venice of the North."',
                'The city has over 50 bridges connecting its islands.',
            ],
            trivia: [
                'Stockholm’s subway is known as the world’s longest art gallery.',
                'The Nobel Prizes are awarded in Stockholm.',
            ],
        },
        {
            city: 'Dubai',
            country: 'UAE',
            clues: [
                'This city is home to the tallest building in the world.',
                'Known for its luxury shopping and ultramodern architecture.',
            ],
            funFacts: [
                'Dubai’s Burj Khalifa is 828 meters tall.',
                'The city has an indoor ski resort in the middle of the desert.',
            ],
            trivia: [
                'Dubai has no natural rivers.',
                'The Palm Jumeirah is an artificial archipelago shaped like a palm tree.',
            ],
        },
        {
            city: 'Hong Kong',
            country: 'China',
            clues: [
                'This city is known for its skyline and Victoria Harbour.',
                'Home to the Tian Tan Buddha and Disneyland.',
            ],
            funFacts: [
                'Hong Kong has more skyscrapers than any other city in the world.',
                'The city’s name means "Fragrant Harbour."',
            ],
            trivia: [
                'Hong Kong has one of the world’s most efficient public transport systems.',
                'The city has the world’s longest outdoor covered escalator system.',
            ],
        },
        {
            city: 'Kuala Lumpur',
            country: 'Malaysia',
            clues: [
                'This city is home to the Petronas Twin Towers.',
                'Known for its diverse culture and street food.',
            ],
            funFacts: [
                'Kuala Lumpur means "Muddy Confluence" in Malay.',
                'The city has a tropical rainforest within its boundaries.',
            ],
            trivia: [
                'Kuala Lumpur’s Batu Caves are a popular tourist attraction.',
                'The city’s Petronas Towers were the tallest buildings in the world from 1998 to 2004.',
            ],
        },
        {
            city: 'Lima',
            country: 'Peru',
            clues: [
                'This city is known as the "City of Kings."',
                'Home to the historic Plaza Mayor and Larco Museum.',
            ],
            funFacts: [
                'Lima is the second-largest desert city in the world after Cairo.',
                'The city’s cuisine is considered one of the best in the world.',
            ],
            trivia: [
                'Lima was the most important city in South America during Spanish colonial rule.',
                'The city’s historic center is a UNESCO World Heritage Site.',
            ],
        },
        {
            city: 'Oslo',
            country: 'Norway',
            clues: [
                'This city is known for its green spaces and museums.',
                'Home to the Viking Ship Museum and the Oslo Opera House.',
            ],
            funFacts: [
                'Oslo is one of the fastest-growing cities in Europe.',
                'The city is surrounded by a forest called Oslomarka.',
            ],
            trivia: [
                'Oslo was formerly known as Christiania.',
                'The Nobel Peace Prize is awarded in Oslo.',
            ],
        },
        {
            city: 'Copenhagen',
            country: 'Denmark',
            clues: [
                'This city is known for its canals and cycling culture.',
                'Home to the Little Mermaid statue and Tivoli Gardens.',
            ],
            funFacts: [
                'Copenhagen is one of the happiest cities in the world.',
                'The city’s harbor is clean enough to swim in.',
            ],
            trivia: [
                'Copenhagen’s Nyhavn district is one of its most iconic areas.',
                'The city has more bicycles than cars.',
            ],
        },
        {
            city: 'Edinburgh',
            country: 'Scotland',
            clues: [
                'This city is known for its historic and cultural attractions.',
                'Home to Edinburgh Castle and the Royal Mile.',
            ],
            funFacts: [
                'Edinburgh hosts the world’s largest arts festival, the Edinburgh Festival Fringe.',
                'The city is built on seven hills.',
            ],
            trivia: [
                'Edinburgh’s Old and New Towns are UNESCO World Heritage Sites.',
                'The city’s nickname is "Auld Reekie."',
            ],
        },
        {
            city: 'Athens',
            country: 'Greece',
            clues: [
                'This city is known as the cradle of Western civilization.',
                'Home to the Acropolis and Parthenon.',
            ],
            funFacts: [
                'Athens is one of the oldest cities in the world, with a history spanning over 3,400 years.',
                'The city is named after Athena, the Greek goddess of wisdom.',
            ],
            trivia: [
                'Athens hosted the first modern Olympic Games in 1896.',
                'The city’s metro system uncovered numerous archaeological artifacts during its construction.',
            ],
        },
        {
            city: 'Seoul',
            country: 'South Korea',
            clues: [
                'This city is known for its K-pop culture and technology.',
                'Home to Gyeongbokgung Palace and N Seoul Tower.',
            ],
            funFacts: [
                'Seoul is the world’s most wired city with the fastest internet speeds.',
                'The city has a population of over 10 million people.',
            ],
            trivia: [
                'Seoul’s name means "Capital" in Korean.',
                'The city’s Cheonggyecheon Stream was restored after being buried under a highway for decades.',
            ],
        },
        {
            city: 'Buenos Aires',
            country: 'Argentina',
            clues: [
                'This city is known as the "Paris of South America."',
                'Home to the Obelisk and La Boca neighborhood.',
            ],
            funFacts: [
                'Buenos Aires is the birthplace of tango music and dance.',
                'The city has the widest avenue in the world, Avenida 9 de Julio.',
            ],
            trivia: [
                'Buenos Aires means "Fair Winds" in Spanish.',
                'The city’s Teatro Colón is one of the best opera houses in the world.',
            ],
        },
        {
            city: 'Berlin',
            country: 'Germany',
            clues: [
                'This city is known for its history and vibrant art scene.',
                'Home to the Brandenburg Gate and Berlin Wall.',
            ],
            funFacts: [
                'Berlin has more bridges than Venice.',
                'The city is nine times bigger than Paris.',
            ],
            trivia: [
                'Berlin’s name is derived from the Slavic word "berl," meaning swamp.',
                'The city’s Museum Island is a UNESCO World Heritage Site.',
            ],
        },
        {
            city: 'Singapore',
            country: 'Singapore',
            clues: [
                'This city is a global financial hub and island nation.',
                'Home to Marina Bay Sands and Gardens by the Bay.',
            ],
            funFacts: [
                'Singapore is one of only three city-states in the world.',
                'The city has a ban on chewing gum sales.',
            ],
            trivia: [
                'Singapore’s Changi Airport has been voted the best airport in the world multiple times.',
                'The city’s name means "Lion City" in Sanskrit.',
            ],
        },
        {
            city: 'Cairo',
            country: 'Egypt',
            clues: [
                'This city is known as the "City of a Thousand Minarets."',
                'Home to the Pyramids of Giza and the Sphinx.',
            ],
            funFacts: [
                'Cairo is the largest city in the Arab world.',
                'The city’s Tahrir Square was a focal point of the 2011 Egyptian Revolution.',
            ],
            trivia: [
                'Cairo’s name means "The Victorious" in Arabic.',
                'The city’s Al-Azhar University is one of the oldest universities in the world.',
            ],
        },
        {
            city: 'Budapest',
            country: 'Hungary',
            clues: [
                'This city is known as the "Pearl of the Danube."',
                'Home to Buda Castle and the Chain Bridge.',
            ],
            funFacts: [
                'Budapest is actually two cities, Buda and Pest, separated by the Danube River.',
                'The city has over 100 thermal springs.',
            ],
            trivia: [
                'Budapest’s Parliament Building is the third-largest in the world.',
                'The city’s Széchenyi Thermal Bath is one of the largest spa complexes in Europe.',
            ],
        },
        {
            city: 'Warsaw',
            country: 'Poland',
            clues: [
                'This city is known for its resilience and history.',
                'Home to the Royal Castle and Old Town Market Square.',
            ],
            funFacts: [
                'Warsaw was almost completely destroyed during World War II and rebuilt afterward.',
                'The city’s name means "Belonging to Warsz."',
            ],
            trivia: [
                'Warsaw’s Old Town is a UNESCO World Heritage Site.',
                'The city’s Chopin Airport is named after the famous composer Frédéric Chopin.',
            ],
        },
        {
            city: 'Brussels',
            country: 'Belgium',
            clues: [
                'This city is known as the capital of Europe.',
                'Home to the Atomium and Grand Place.',
            ],
            funFacts: [
                'Brussels is the headquarters of the European Union and NATO.',
                'The city is famous for its waffles, chocolate, and beer.',
            ],
            trivia: [
                'Brussels’ Manneken Pis statue is one of its most famous landmarks.',
                'The city’s name means "Home in the Marshes."',
            ],
        },
        {
            city: 'Dublin',
            country: 'Ireland',
            clues: [
                'This city is known for its literary history and pubs.',
                'Home to Trinity College and the Guinness Storehouse.',
            ],
            funFacts: [
                'Dublin’s name comes from the Irish "Dubh Linn," meaning "Black Pool."',
                'The city has more green spaces per square kilometer than any other European capital.',
            ],
            trivia: [
                'Dublin is a UNESCO City of Literature.',
                'The city’s O’Connell Bridge is wider than it is long.',
            ],
        },
        {
            city: 'Havana',
            country: 'Cuba',
            clues: [
                'This city is known for its vintage cars and colonial architecture.',
                'Home to the Malecón and Old Havana.',
            ],
            funFacts: [
                'Havana is the largest city in the Caribbean.',
                'The city’s historic center is a UNESCO World Heritage Site.',
            ],
            trivia: [
                'Havana’s name is derived from the Taíno word "Habaguanex."',
                'The city’s Tropicana Club is one of the most famous cabarets in the world.',
            ],
        },
        {
            city: 'Munich',
            country: 'Germany',
            clues: [
                'This city is known for its beer and Oktoberfest.',
                'Home to Marienplatz and Nymphenburg Palace.',
            ],
            funFacts: [
                'Munich’s name means "Home of the Monks."',
                'The city is the headquarters of BMW.',
            ],
            trivia: [
                'Munich’s Englischer Garten is one of the largest urban parks in the world.',
                'The city’s Viktualienmarkt has been a food market since 1807.',
            ],
        },
        {
            city: 'Vancouver',
            country: 'Canada',
            clues: [
                'This city is known for its natural beauty and outdoor activities.',
                'Home to Stanley Park and Granville Island.',
            ],
            funFacts: [
                'Vancouver is one of the most ethnically diverse cities in Canada.',
                'The city has been ranked as one of the most livable cities in the world.',
            ],
            trivia: [
                'Vancouver’s name comes from British explorer George Vancouver.',
                'The city’s Capilano Suspension Bridge is a popular tourist attraction.',
            ],
        },
        {
            city: 'Beijing',
            country: 'China',
            clues: [
                'This city is known for its imperial history and modern architecture.',
                'Home to the Forbidden City and the Great Wall.',
            ],
            funFacts: [
                'Beijing has been the capital of China for over 800 years.',
                'The city’s name means "Northern Capital."',
            ],
            trivia: [
                'Beijing’s Temple of Heaven is a UNESCO World Heritage Site.',
                'The city hosted the 2008 Summer Olympics and will host the 2022 Winter Olympics.',
            ],
        },
        {
            city: 'Jakarta',
            country: 'Indonesia',
            clues: [
                'This city is the capital of the world’s largest archipelago nation.',
                'Home to the National Monument and Istiqlal Mosque.',
            ],
            funFacts: [
                'Jakarta is sinking at an alarming rate due to groundwater extraction.',
                'The city’s name means "Complete Victory" in Sanskrit.',
            ],
            trivia: [
                'Jakarta is one of the most populous urban areas in the world.',
                'The city has a mix of Javanese, Malay, Chinese, and Dutch influences.',
            ],
        },
    ];
    for (const destination of destinations) {
        const existingDestination = await destinationRepository.findOne({
            where: { city: destination.city, country: destination.country },
        });
        if (!existingDestination) {
            await destinationRepository.save(destination);
            console.log(`Inserted destination: ${destination.city}, ${destination.country}`);
        }
        else {
            console.log(`Destination already exists: ${destination.city}, ${destination.country}`);
        }
    }
    await appDataSource.destroy();
};
seedDestinations()
    .then(() => console.log('Seeding completed!'))
    .catch((error) => console.error('Error seeding data:', error));
//# sourceMappingURL=seed.js.map