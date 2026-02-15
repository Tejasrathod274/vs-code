// Simple list of all destinations: name, description, places, hotels, tours
// Each destination has the same structure - easy to add more later
window.DESTINATION_DATA = {
  kerala: {
    name: 'Kerala',
    description: 'Tropical paradise with backwaters, beaches and hill stations.',
    aboutParagraph: 'Kerala is a green paradise in South India. It is famous for its backwaters, houseboats, tea gardens in Munnar, and peaceful beaches like Kovalam. You can explore historic Kochi with its Chinese fishing nets, wildlife in Thekkady, and the hills of Wayanad. The culture, food, and hospitality here make it one of India\'s most loved destinations.',
    heroImage: 'images/kerala/kerala1.jpg',
    places: [
      { name: 'Munnar', description: 'Tea gardens and misty hills.', image: 'images/kerala/munnar/munnar.jpg' },
      { name: 'Alleppey', description: 'Backwaters and houseboat stays.', image: 'images/kerala/allepey/allepey.jpg' },
      { name: 'Kochi', description: 'Historic port and Chinese fishing nets.', image: 'images/kerala/kochi/kochi.jpg' },
      { name: 'Thekkady', description: 'Wildlife and spice plantations.', image: 'images/kerala/thekkady/thekkady.jpg' },
      { name: 'Kovalam', description: 'Beaches and lighthouse.', image: 'images/kerala/kovalam/kovalam.jpg' },
      { name: 'Wayanad', description: 'Green hills and caves.', image: 'images/kerala/wayanad/wayanad.jpg' }
    ],
    hotels: [
      { name: 'Backwater Resort', description: 'Lakeside with houseboat access.', price: '₹4,500/night', image: 'images/kerala/allepey/hotel/BackwaterResort.jpg' },
      { name: 'Tea County Munnar', description: 'Estate bungalow in tea gardens.', price: '₹6,200/night', image: 'images/kerala/munnar/hotel/tea-county.jpg' },
      { name: 'Kochi Heritage Hotel', description: 'Colonial stay in Fort Kochi.', price: '₹5,800/night', image: 'images/kerala/kochi/hotel/Kochi-Heritage.jpg' },
      { name: 'Kovalam Beach Inn', description: 'Steps from the beach.', price: '₹3,900/night', image: 'images/kerala/kovalam/hotel/Kovalam-Beach.jpg' },
      { name: 'Wayanad Green Lodge', description: 'Amidst nature.', price: '₹4,200/night', image: 'images/kerala/wayanad/hotel/wayanad-lodge.jpg' }
    ],
    tours: [
      { name: 'Kerala Backwaters 3D', description: 'Houseboat and backwaters.', price: '₹12,000/person', image: 'images/kerala/tours/kerala-Backwaters.jpg' },
      { name: 'Munnar-Thekkady 4D', description: 'Hills and wildlife.', price: '₹15,500/person', image: 'images/kerala/tours/munnar-thekkeday.jpg' },
      { name: 'Full Kerala 7D', description: 'Backwaters, hills and coast.', price: '₹28,000/person', image: 'images/kerala/tours/kerala-full.jpg' },
      { name: 'Kerala Hills 5D', description: 'Munnar, Wayanad and tea estates.', price: '₹18,000/person', image: 'images/kerala/tours/kerala-hills.jpg' },
      { name: 'Kerala Beaches 4D', description: 'Kovalam, Varkala and coast.', price: '₹14,000/person', image: 'images/kerala/tours/kerala-beaches.jpg' }
    ],
    restaurants: [
      { name: 'Kayees Rahmathullah', description: 'Famous for biryani in Mattancherry, Kochi.', cuisine: 'Biryani', image: 'images/kerala/kochi/restaurant/kayees.jpg' },
      { name: 'Paragon Restaurant', description: 'Traditional Kerala meals and seafood in Kozhikode.', cuisine: 'Kerala', image: 'images/kerala/restaurant/paragon.jpg' },
      { name: 'Saravana Bhavan', description: 'South Indian vegetarian across Kerala.', cuisine: 'Vegetarian', image: 'images/kerala/restaurant/saravana.jpg' }
    ]
  },
  jaipur: {
    name: 'Jaipur',
    description: 'Royal forts, palaces and vibrant culture.',
    aboutParagraph: 'Jaipur, the Pink City, is the capital of Rajasthan. It is known for Amber Fort, City Palace, Hawa Mahal, and busy bazaars. The city showcases royal heritage, handicrafts, and Rajasthani culture. From forts to street food, Jaipur offers a perfect mix of history and local life.',
    heroImage: 'images/jaipur/jaipur.jpg',
    places: [
      { name: 'Amber Fort', description: 'Majestic fort and palace.', image: 'images/jaipur/amber-fort/amber-fort.jpg' },
      { name: 'City Palace', description: 'Royal residence and museums.', image: 'images/jaipur/city-palace/city-palace.jpg' },
      { name: 'Hawa Mahal', description: 'Palace of Winds.', image: 'images/jaipur/hawa-mahal/hawa-mahal.jpg' },
      { name: 'Jantar Mantar', description: 'Ancient observatory.', image: 'images/jaipur/jantar-mantar/jantar-mantar.jpg' },
      { name: 'Nahargarh Fort', description: 'Views over the city.', image: 'images/jaipur/nahargarh-fort/nahargah-fort.jpg' },
      { name: 'Johari Bazaar', description: 'Markets and handicrafts.', image: 'images/jaipur/johari-bazaar/johari-bazaar.jpg' }
    ],
    hotels: [
      { name: 'Raj Palace Heritage', description: 'Palace hotel with royal suites.', price: '₹9,000/night', image: 'images/jaipur/city-palace/hotel/raj-palace.jpg' },
      { name: 'Pink City Inn', description: 'Central near markets.', price: '₹3,200/night', image: 'images/jaipur/hawa-mahal/hotel/pink-city-inn.jpg' },
      { name: 'Fort View Resort', description: 'Views of Amber Fort.', price: '₹5,500/night', image: 'images/jaipur/amber-fort/hotel/fort-view.jpg' },
      { name: 'Heritage Haveli Jaipur', description: 'Traditional stay.', price: '₹4,800/night', image: 'images/jaipur/jantar-mantar/hotel/heritage-haveli.jpg' }
    ],
    tours: [
      { name: 'Jaipur Royal Tour', description: 'Forts, palaces and markets.', price: '₹9,000/person', image: 'images/jaipur/tours/jaipur-tour.jpg' },
      { name: 'Rajasthan Heritage 5D', description: 'Jaipur, Udaipur and more.', price: '₹28,000/person', image: 'images/jaipur/tours/rajasthan.jpg' },
      { name: 'Golden Triangle 6D', description: 'Delhi, Agra, Jaipur.', price: '₹22,000/person', image: 'images/jaipur/tours/golden-triangle-tour-package.jpg' }
    ],
    restaurants: [
      { name: 'Laxmi Mishthan Bhandar (LMB)', description: 'Famous sweets and traditional meals near Johari Bazaar.', cuisine: 'Rajasthani', image: 'images/jaipur/johari-bazaar/restaurant/lmb.jpg' },
      { name: 'Tapri Central', description: 'Café with rooftop views and chai.', cuisine: 'Café', image: 'images/jaipur/city-palace/restaurant/tapri-central.jpg' },
      { name: 'Handi Restaurant', description: 'North Indian and Mughlai in MI Road.', cuisine: 'North Indian', image: 'images/jaipur/restaurant/handi.jpg' }
    ]
  },
  himachal: {
    name: 'Himachal',
    description: 'Snowy mountains and peaceful hill stations.',
    aboutParagraph: 'Himachal Pradesh is a mountain state with hill stations like Shimla, Manali, and Dharamshala. You can enjoy snow, trekking, Tibetan culture in McLeod Ganj, and quiet valleys like Spiti. The state is ideal for nature lovers and adventure seekers.',
    heroImage: 'images/Himachal.jpg',
    places: [
      { name: 'Shimla', description: 'Queen of Hills, colonial charm.', image: 'images/Himachal/shimla/to-visit/shimla.jpg' },
      { name: 'Manali', description: 'Adventure and snow views.', image: 'images/Himachal/manali/to-visit/manali.jpg' },
      { name: 'Dharamshala', description: 'Tibetan culture and Dalai Lama.', image: 'images/Himachal/dharamshala/to-visit/dharamshala.jpg' },
      { name: 'Spiti Valley', description: 'High-altitude desert and monasteries.', image: 'images/Himachal/spiti-valley/to-visit/spiti-valley.jpg' },
      { name: 'Dalhousie', description: 'Quiet hills and valleys.', image: 'images/Himachal/dalhousie/to-visit/dalhousie.jpg' },
      { name: 'Kasol', description: 'Hippie trails and trekking.', image: 'images/Himachal/kasol/to-visit/kasol.jpg' }
    ],
    hotels: [
      { name: 'Mountain View Shimla', description: 'Valley views.', price: '₹5,500/night', image: 'images/Himachal/shimla/hotel/mountain-view.jpg' },
      { name: 'Manali Snow Resort', description: 'Near Rohtang and Solang.', price: '₹6,800/night', image: 'images/Himachal/manali/hotel/manali-snow.jpg' },
      { name: 'Dharamshala Peace Inn', description: 'Near McLeod Ganj.', price: '₹3,900/night', image: 'images/Himachal/dharamshala/hotel/peace-inn.jpg' },
      { name: 'Spiti Valley Lodge', description: 'Simple and cosy.', price: '₹2,500/night', image: 'images/Himachal/spiti-valley/hotel/spiti-lodge.jpg' }
    ],
    tours: [
      { name: 'Shimla-Manali 5D', description: 'Classic hill circuit.', price: '₹18,000/person', image: 'images/Himachal.jpg' },
      { name: 'Spiti Valley 7D', description: 'Adventure and monasteries.', price: '₹25,000/person', image: 'images/Himachal.jpg' },
      { name: 'Dharamshala & Bir 4D', description: 'Culture and paragliding.', price: '₹14,000/person', image: 'images/Himachal.jpg' }
    ],
    restaurants: [
      { name: 'Johnson Lodge (Manali)', description: 'Wood-fired pizzas and mountain views.', cuisine: 'Continental', image: 'images/Himachal/manali/restaurant/johnson-lodge.jpg' },
      { name: 'Illiterati (McLeod Ganj)', description: 'Books, coffee, and Tibetan food.', cuisine: 'Tibetan', image: 'images/Himachal/dharamshala/restaurant/illiterati.jpg' },
      { name: 'Wake & Bake (Kasol)', description: 'Israeli and continental by the river.', cuisine: 'Continental', image: 'images/Himachal/kasol/restaurant/wake-bake.jpg' }
    ]
  },
  kashmir: {
    name: 'Kashmir',
    description: 'Paradise with valleys and lakes.',
    aboutParagraph: 'Kashmir is known for Dal Lake, houseboats, Gulmarg meadows, and Pahalgam valleys. Shikara rides, snow in winter, and local hospitality make it a favourite. The region offers both peace and adventure in the Himalayas.',
    heroImage: 'images/kashmir.jpg',
    places: [
      { name: 'Dal Lake', description: 'Houseboats and shikara rides.', image: 'images/kashmir/dal-lake/to-visit/dal-lake.jpg' },
      { name: 'Gulmarg', description: 'Meadows and skiing.', image: 'images/kashmir/gulmarg/to-visit/gulmarg.jpg' },
      { name: 'Pahalgam', description: 'Valleys and trekking.', image: 'images/kashmir/to-visit/pahalgam.jpg' },
      { name: 'Sonamarg', description: 'Meadow of gold.', image: 'images/kashmir/to-visit/sonamarg.jpg' },
      { name: 'Betaab Valley', description: 'Green meadows and streams.', image: 'images/kashmir/to-visit/betaab-valley.jpg' }
    ],
    hotels: [
      { name: 'Dal Lake Houseboat', description: 'Traditional houseboat stay.', price: '₹8,500/night', image: 'images/kashmir/dal-lake/hotel/dal-lake-houseboat.jpg' },
      { name: 'Gulmarg Resort', description: 'Slopes and mountain views.', price: '₹9,200/night', image: 'images/kashmir/gulmarg/hotel/gulmarg-resort.jpg' },
      { name: 'Pahalgam Valley Lodge', description: 'Riverside lodge.', price: '₹5,500/night', image: 'images/kashmir/hotel/pahalgam-lodge.jpg' }
    ],
    tours: [
      { name: 'Kashmir Paradise 5D', description: 'Srinagar, Gulmarg, Pahalgam.', price: '₹24,000/person', image: 'images/kashmir-tour.jpg' },
      { name: 'Houseboat & Gulmarg 4D', description: 'Houseboat plus Gulmarg.', price: '₹18,500/person', image: 'images/kashmir-tour.jpg' }
    ],
    restaurants: [
      { name: 'Ahdoos', description: 'Famous for wazwan and Kashmiri cuisine in Srinagar.', cuisine: 'Kashmiri', image: 'images/kashmir/dal-lake/restaurant/ahdoos.jpg' },
      { name: 'Mughal Darbar', description: 'Kashmiri and North Indian in Srinagar.', cuisine: 'Kashmiri', image: 'images/kashmir/dal-lake/restaurant/mughal-darbar.jpg' },
      { name: 'Stream Restaurant (Gulmarg)', description: 'Views and local food.', cuisine: 'Kashmiri', image: 'images/kashmir/gulmarg/restaurant/stream.jpg' }
    ]
  },
  mumbai: {
    name: 'Mumbai',
    description: 'City of dreams and coastal charm.',
    aboutParagraph: 'Mumbai is India\'s financial and entertainment capital. Gateway of India, Marine Drive, Elephanta Caves, and Bollywood are major draws. The city mixes colonial heritage with street food, markets, and a fast-paced urban life.',
    heroImage: 'images/mumbai.jpg',
    places: [
      { name: 'Gateway of India', description: 'Iconic monument by the sea.', image: 'images/mumbai/gateway-of-india/to-visit/gateway-of-india.jpg' },
      { name: 'Marine Drive', description: "Queen's Necklace promenade.", image: 'images/mumbai/marine-drive/to-visit/marine-drive.jpg' },
      { name: 'Elephanta Caves', description: 'Ancient rock-cut caves.', image: 'images/mumbai/to-visit/elephanta-caves.jpg' },
      { name: 'Bollywood Studios', description: 'Film city tours.', image: 'images/mumbai/to-visit/bollywood-studios.jpg' },
      { name: 'Colaba Causeway', description: 'Shopping and street food.', image: 'images/mumbai/to-visit/colaba-causeway.jpg' }
    ],
    hotels: [
      { name: 'Marine Drive Hotel', description: 'Sea-facing rooms.', price: '₹6,500/night', image: 'images/mumbai/marine-drive/hotel/marine-drive-hotel.jpg' },
      { name: 'Gateway View', description: 'Near Gateway of India.', price: '₹5,200/night', image: 'images/mumbai/gateway-of-india/hotel/gateway-view.jpg' },
      { name: 'Bandra Boutique', description: 'Trendy area stay.', price: '₹4,800/night', image: 'images/mumbai/hotel/bandra-boutique.jpg' }
    ],
    tours: [
      { name: 'Mumbai City Tour', description: 'Monuments, markets and chowpatty.', price: '₹3,500/person', image: 'images/mumbai.jpg' },
      { name: 'Elephanta & Dharavi', description: 'Caves and local experience.', price: '₹5,000/person', image: 'images/mumbai.jpg' }
    ],
    restaurants: [
      { name: 'Bademiya', description: 'Legendary street kebabs near Taj, Colaba.', cuisine: 'Mughlai', image: 'images/mumbai/gateway-of-india/restaurant/bademiya.jpg' },
      { name: 'Britannia & Co.', description: 'Parsi food and berry pulao in Ballard Estate.', cuisine: 'Parsi', image: 'images/mumbai/restaurant/britannia.jpg' },
      { name: 'Trishna', description: 'Fresh seafood in Fort.', cuisine: 'Seafood', image: 'images/mumbai/restaurant/trishna.jpg' }
    ]
  },
  goa: {
    name: 'Goa',
    description: 'Beaches, nightlife and Portuguese heritage.',
    aboutParagraph: 'Goa is known for beaches, Portuguese churches, and relaxed vibes. Calangute, Anjuna, and Old Goa offer sun, sea, heritage, and nightlife. The food mixes Konkan, Portuguese, and seafood.',
    heroImage: 'images/goa.jpg',
    places: [
      { name: 'Calangute Beach', description: 'Popular beach and water sports.', image: 'images/goa/calangute-beach/to-visit/calangute-beach.jpg' },
      { name: 'Old Goa', description: 'Churches and heritage.', image: 'images/goa/to-visit/old-goa.jpg' },
      { name: 'Dudhsagar Falls', description: 'Milky waterfall.', image: 'images/goa/to-visit/dudhsagar-falls.jpg' },
      { name: 'Anjuna Beach', description: 'Flea market and parties.', image: 'images/goa/to-visit/anjuna-beach.jpg' },
      { name: 'Fontainhas', description: 'Colonial quarter in Panjim.', image: 'images/goa/to-visit/fontainhas.jpg' }
    ],
    hotels: [
      { name: 'Beach Resort Calangute', description: 'On the beach.', price: '₹5,200/night', image: 'images/goa/calangute-beach/hotel/beach-resort-calangute.jpg' },
      { name: 'Goa Heritage Inn', description: 'In old Goa area.', price: '₹4,500/night', image: 'images/goa/hotel/goa-heritage-inn.jpg' },
      { name: 'Anjuna Beach House', description: 'Chill vibe.', price: '₹4,800/night', image: 'images/goa/hotel/anjuna-beach-house.jpg' }
    ],
    tours: [
      { name: 'Goa Beach 4D', description: 'Beaches and nightlife.', price: '₹11,500/person', image: 'images/goa-tour.jpg' },
      { name: 'Goa Heritage & Nature 5D', description: 'Churches, falls and beaches.', price: '₹16,000/person', image: 'images/goa-tour.jpg' }
    ],
    restaurants: [
      { name: 'Martin\'s Corner', description: 'Goan seafood and music in Betalbatim.', cuisine: 'Goan', image: 'images/goa/restaurant/martins-corner.jpg' },
      { name: 'Viva Panjim', description: 'Goan and Portuguese in Fontainhas.', cuisine: 'Goan', image: 'images/goa/to-visit/viva-panjim.jpg' },
      { name: 'Thalassa', description: 'Greek food with beach view, Vagator.', cuisine: 'Greek', image: 'images/goa/calangute-beach/restaurant/thalassa.jpg' }
    ]
  },
};

// Place-level detail: when user clicks Explore on a place (e.g. Munnar), show this data.
// Key: destination key (kerala, jaipur...) -> place key (munnar, alleppey... lowercase).
window.PLACE_DETAILS = {
  kerala: {
    munnar: {
      aboutParagraph: 'Munnar is a beautiful hill station in Kerala, famous for endless tea plantations, misty mountains, and cool weather. It sits in the Western Ghats and is one of the best places to see how tea is grown and processed. You can visit Echo Point, Mattupetty Dam, Eravikulam National Park (home to the Nilgiri tahr), and the Tea Museum. Munnar is ideal for nature walks, photography, and a peaceful break from the heat.',
      heroImage: 'images/kerala/munnar/munnar.jpg',
      hotels: [
        { name: 'Tea County Munnar', description: 'Estate bungalow surrounded by tea gardens. Cosy rooms and mountain views.', price: '₹6,200/night', image:'images/kerala/munnar/hotel/tea-county.jpg'},
        { name: 'Windermere Estate', description: 'Heritage stay with tea estate walks and organic food.', price: '₹8,500/night', image: 'images/kerala/munnar/hotel/windermere.jpg' },
        { name: 'Sienna Village', description: 'Cottages in the hills with fireplace and garden.', price: '₹5,500/night', image: 'images/kerala/munnar/hotel/sienna.jpg'}
      ],
      restaurants: [
        { name: 'Rapsy Restaurant', description: 'Popular for North Indian, Chinese and Kerala meals. Great views.', cuisine: 'Multi-cuisine' ,image:'images/kerala/munnar/restaurant/rapsy.jpg' },
        { name: 'Saravana Bhavan Munnar', description: 'South Indian vegetarian and breakfast.', cuisine: 'South Indian', image: 'images/kerala/munnar/restaurant/saravana.jpg' },
        { name: 'SN Restaurant', description: 'Local Kerala food and fresh tea.', cuisine: 'Kerala', image: 'images/kerala/munnar/restaurant/sn.jpg' }
      ],
      spotsToVisit: [
        { name: 'Eravikulam National Park', description: 'See Nilgiri tahr and rolling green hills.', image: 'images/kerala/munnar/to-visit/eravikulam.jpg' },
        { name: 'Tea Museum', description: 'Learn how tea is made and taste fresh tea.', image: 'images/kerala/munnar/to-visit/tea-museum.jpg' },
        { name: 'Echo Point', description: 'Scenic viewpoint with natural echo.', image: 'images/kerala/munnar/to-visit/echo-point.jpg' },
        { name: 'Mattupetty Dam', description: 'Lake and dam with boating.', image: 'images/kerala/munnar/to-visit/mattupetty-dam.jpg' }
      ],
    },
    alleppey: {
      aboutParagraph: 'Alleppey (Alappuzha) is the gateway to Kerala\'s backwaters. It is famous for houseboat stays, canals, and village life along the water. You can cruise on a kettuvallam (houseboat), watch coir-making, and enjoy fresh Kerala food on the boat. The town has a beach, and nearby you can explore Kuttanad’s paddy fields and bird life.',
      heroImage: 'images/kerala/allepey/allepey.jpg',
      hotels: [
        { name: 'Backwater Resort', description: 'Lakeside rooms and houseboat booking. Peaceful setting.', price: '₹4,500/night', image: 'images/kerala/allepey/hotel/BackwaterResort.jpg' },
        { name: 'Palm Grove Lake Resort', description: 'On the backwaters with pool and restaurant.', price: '₹5,800/night', image: 'images/kerala/allepey/hotel/palmgroveresort.jpg' },
        { name: 'Raheem Residency', description: 'Heritage stay near the beach.', price: '₹4,200/night', image: 'images/kerala/allepey/hotel/raheemresidency.jpg' }
      ],
      spotsToVisit: [
        { name: 'Houseboat Cruise', description: 'Stay or day cruise on the backwaters.', image: 'images/kerala/allepey/to-visit/chakara.jpg' },
        { name: 'Alleppey Beach', description: 'Long beach and lighthouse.', image: 'images/kerala/allepey/to-visit/AlleppeyBeach.jpg' },
        { name: 'Kuttanad', description: 'Paddy fields and village life below sea level.', image: 'images/kerala/allepey/to-visit/kuttanadpaddy.jpg' }
      ],
       restaurants: [
        { name: 'Kayees Rahmathullah', description: 'Famous biryani in Mattancherry.', cuisine: 'Biryani', image: 'images/kerala/allepey/restaurant/kayees.jpg' },
        { name: 'Kashi Art Café', description: 'Breakfast, coffee and art gallery.', cuisine: 'Café', image: 'images/kerala/allepey/restaurant/kashi.jpg' },
        { name: 'kream-Korener', description: 'Local food with spice plantation tour.', cuisine: 'Kerala', image: 'images/kerala/allepey/restaurant/kream-korener.jpg' }
      ],
    },
    kochi: {
      aboutParagraph: 'Kochi (Cochin) is a historic port city with a mix of Indian, Dutch, and Portuguese heritage. Fort Kochi is known for Chinese fishing nets, St Francis Church, and narrow streets. You can see Kathakali performances, visit the Jewish Synagogue in Mattancherry, and enjoy seafood and cafés. Kochi is a great base to start or end a Kerala trip.',
      heroImage: 'images/kerala/kochi/kochi.jpg',
      hotels: [
        { name: 'Kochi Heritage Hotel', description: 'Colonial-style stay in Fort Kochi.', price: '₹5,800/night', image: 'images/kerala/kochi/hotel/hotelkochi.jpg' },
        { name: 'Brunton Boatyard', description: 'Waterfront heritage hotel with pool.', price: '₹12,000/night', image: 'images/kerala/kochi/hotel/brunton.jpg' },
        { name: 'Old Harbour Hotel', description: 'Charming rooms in the heart of Fort Kochi.', price: '₹6,500/night', image: 'images/kerala/kochi/hotel/OldHarbor.jpg' }
      ],
      restaurants: [
        { name: 'Kayees Rahmathullah', description: 'Famous biryani in Mattancherry.', cuisine: 'Biryani', image: 'images/kerala/kochi/restaurant/kayees.jpg' },
        { name: 'Dal Roti', description: 'North Indian and continental in Fort Kochi.', cuisine: 'North Indian', image: 'images/kerala/kochi/restaurant/dal-roti.jpg' },
        { name: 'Kashi Art Café', description: 'Breakfast, coffee and art gallery.', cuisine: 'Café', image: 'images/kerala/kochi/restaurant/kashi.jpg' }
      ],
      spotsToVisit: [
        { name: 'Chinese Fishing Nets', description: 'Iconic nets on the waterfront.', image: 'images/kerala/kochi/to-visit/fishcatching.jpg' },
        { name: 'Fort Kochi Beach', description: 'Evening stroll and street food.', image: 'images/kerala/kochi/to-visit/fortkochi.jpg' },
        { name: 'Mattancherry Palace', description: 'Dutch Palace with murals.', image: 'images/kerala/kochi/to-visit/mattanchery.jpg' },
      ],
    },
    thekkady: {
      aboutParagraph: 'Thekkady is known for Periyar Wildlife Sanctuary, spice plantations, and green hills. You can do boat rides on Periyar Lake to spot elephants and other wildlife, walk in spice gardens, and watch traditional performances. The area is perfect for nature and wildlife lovers.',
      heroImage: 'images/kerala/thekkady/thekkady.jpg',
      hotels: [
        { name: 'Spice Village', description: 'Eco resort with spice garden and pool.', price: '₹7,500/night', image: 'images/kerala/thekkady/hotel/spicevillage.jpg' },
        { name: 'Cardamom County', description: 'Near Periyar with mountain views.', price: '₹5,200/night', image: 'images/kerala/thekkady/hotel/cardamom.jpg' },
        { name: 'Green Palace Resort', description: 'Comfortable stay close to the sanctuary.', price: '₹4,000/night', image: 'images/kerala/thekkady/hotel/greenpalace.jpg' }
      ],
      restaurants: [
        { name: 'Ambadi Restaurant', description: 'Kerala and Indian in a garden setting.', cuisine: 'Kerala', image: 'images/kerala/thekkady/restaurant/hotelambadi.jpg' },
        { name: 'Spice Garden Restaurant', description: 'Local food with spice plantation tour.', cuisine: 'Kerala', image: 'images/kerala/thekkady/restaurant/spicegarden.jpg' }
      ],
      spotsToVisit: [
        { name: 'Periyar Wildlife Sanctuary', description: 'Boat safari and wildlife.', image: 'images/kerala/thekkady/to-visit/periyar.jpg' },
        { name: 'Spice Plantations', description: 'Tours and fresh spices.', image: 'images/kerala/thekkady/to-visit/spice-plantation.jpg' },
        { name: 'Kathakali Show', description: 'Traditional dance performances.', image: 'images/kerala/thekkady/to-visit/kathakali.jpg' }
      ],
    },
    kovalam: {
      aboutParagraph: 'Kovalam is a popular beach town near Thiruvananthapuram with three main beaches: Lighthouse, Hawah, and Samudra. You can relax on the sand, swim, try Ayurvedic massages, and enjoy seafood. The lighthouse offers great views. Kovalam is ideal for a relaxed beach holiday.',
      heroImage: 'images/kerala/kovalam/kovalam.jpg',
      hotels: [
        { name: 'Kovalam Beach Inn', description: 'Steps from the beach with sea view.', price: '₹3,900/night', image: 'images/kerala/kovalam/hotel/kovalambeach.jpg' },
        { name: 'The Leela Kovalam', description: 'Luxury resort on the cliff and beach.', price: '₹15,000/night', image: 'images/kerala/kovalam/hotel/leela.jpg' },
        { name: 'Surya Samudra', description: 'Heritage cottages with ocean view.', price: '₹9,000/night', image: 'images/kerala/kovalam/hotel/surya.jpg' }
      ],
      restaurants: [
        { name: 'Suprabhatham', description: 'South Indian and seafood by the beach.', cuisine: 'South Indian', image: 'images/kerala/kovalam/restaurant/hotel-suprabhatham.jpg' },
        { name: 'Sea view Restaurant', description: 'Multi-cuisine with sea view.', cuisine: 'Multi-cuisine', image: 'images/kerala/kovalam/restaurant/seaview.jpg' }
      ],
      spotsToVisit: [
        { name: 'Lighthouse Beach', description: 'Main beach and lighthouse.', image: 'images/kerala/kovalam/to-visit/lighthouse.jpg' },
        { name: 'Vizhinjam Harbour', description: 'Fishing harbour and temple.', image: 'images/kerala/kovalam/to-visit/vizhinjam.jpg' }
      ],
    },
    wayanad: {
      aboutParagraph: 'Wayanad is a green district in the Western Ghats with forests, waterfalls, and caves. You can visit Edakkal Caves, Chembra Peak, Soochipara Falls, and Banasura Sagar Dam. The area is great for trekking, wildlife, and tea/coffee estates. Wayanad is less crowded than Munnar and perfect for nature lovers.',
      heroImage: 'images/kerala/wayanad/wayanad.jpg',
      hotels: [
        { name: 'Wayanad Green Lodge', description: 'Amidst nature with garden and meals.', price: '₹4,200/night', image: 'images/kerala/wayanad/hotel/wayanand-green.jpg' },
        { name: 'Vythiri Resort', description: 'Treehouse and cottage stay in the forest.', price: '₹8,000/night', image: 'images/kerala/wayanad/hotel/Vyrithi.jpg' },
        { name: 'Tranquil Resort', description: 'Eco stay with coffee plantation.', price: '₹6,500/night', image: 'images/kerala/wayanad/hotel/tranquil.jpg' }
      ],
      restaurants: [
        { name: 'Salt N Pepper', description: 'North Indian and local food in Kalpetta.', cuisine: 'Multi-cuisine', image: 'images/kerala/wayanad/restaurant/saltnpepper.jpg' },
        { name: 'Udupi Restaurant', description: 'South Indian vegetarian.', cuisine: 'South Indian', image: 'images/kerala/wayanad/restaurant/udupi.jpg' }
      ],
      spotsToVisit: [
        { name: 'Edakkal Caves', description: 'Ancient cave with carvings.', image: 'images/kerala/wayanad/to-visit/caves.jpg' },
        { name: 'Chembra Peak', description: 'Highest peak and trek.', image: 'images/kerala/wayanad/to-visit/kerala-hills.jpg' },
        { name: 'Soochipara Falls', description: 'Three-tier waterfall.', image: 'images/kerala/wayanad/to-visit/Soochipara.jpg' },
        { name: 'Banasura Sagar Dam', description: 'Largest earthen dam in India.', image: 'images/kerala/wayanad/to-visit/banasura-sagar-dam.jpg' }
      ],
    }
  },
  jaipur: {
    'amber fort': {
      aboutParagraph: 'Amber Fort is a large fort-palace on a hill near Jaipur, built in the 16th century. It has courtyards, halls, and the famous Sheesh Mahal (mirror palace). You can walk up or take a jeep/elephant ride. The fort offers great views of the surrounding hills and Maota Lake.',
      heroImage: 'images/jaipur/amber-fort/amber-fort.jpg',
      hotels: [
        { name: 'Fort View Resort', description: 'Views of Amber Fort from the rooms.', price: '₹5,500/night',image:'images/jaipur/amber-fort/hotel/fort-view.jpg' },
        { name: 'Mandawa Haveli', description: 'Heritage stay near the fort.', price: '₹4,200/night', image:'images/jaipur/amber-fort/hotel/mandawa.jpg' }
      ],
      restaurants: [
        { name: 'Anokhi Café', description: 'Healthy food and café near the fort road.', cuisine: 'Café', image:'images/jaipur/amber-fort/restaurant/anokhi-cafe.jpg' },
        { name: 'Laxmi Mishthan Bhandar', description: 'Sweets and Rajasthani snacks.', cuisine: 'Rajasthani', image:'images/jaipur/amber-fort/restaurant/laxmi.jpg' }
      ],
      spotsToVisit: [
        { name: 'Sheesh Mahal', description: 'Mirror palace inside the fort.', image: 'images/jaipur/amber-fort/to-visit/sheesh-mahal.jpg' },
        { name: 'Maota Lake', description: 'Lake at the foot of the fort.', image: 'images/jaipur/amber-fort/to-visit/matao-lake.jpg' }
      ],
      tours: [
        { name: 'Jaipur Royal Tour', description: 'Forts, palaces and markets.', price: '₹9,000/person', image: 'images/jaipur-tour.jpg' },
        { name: 'Golden Triangle 6D', description: 'Delhi, Agra, Jaipur.', price: '₹22,000/person', image: 'images/jaipur-tour.jpg' }
      ]
    },
    'city palace': {
      aboutParagraph: 'City Palace in the heart of Jaipur is still home to the royal family. It has museums, courtyards, and the famous Peacock Gate. You can see royal costumes, weapons, and art. The palace blends Rajasthani and Mughal architecture.',
      heroImage: 'images/jaipur/city-palace/city-palace.jpg',
      hotels: [
        { name: 'Raj Palace Heritage', description: 'Palace hotel with royal suites.', price: '₹9,000/night',image:'images/jaipur/city-palace/hotel/raj-palace.jpg' },
        { name: 'Pink City Inn', description: 'Central, near City Palace and markets.', price: '₹3,200/night', image:'images/jaipur/city-palace/hotel/pin-city.jpg' }
      ],
      restaurants: [
        { name: 'Handi Restaurant', description: 'Mughlai and North Indian near MI Road.', cuisine: 'North Indian', image:'images/jaipur/city-palace/restaurant/handi.jpg' },
        { name: 'Tapri Central', description: 'Rooftop chai and snacks.', cuisine: 'Café', image:'images/jaipur/city-palace/restaurant/tapri.jpg' }
      ],
      spotsToVisit: [
        { name: 'Mubarak Mahal', description: 'Museum of royal textiles.', image: 'images/jaipur/city-palace/to-visit/mubarak.jpg' },
        { name: 'Chandra Mahal', description: 'Royal residence (partial access).', image: 'images/jaipur/city-palace/to-visit/chandra-mahal.jpg' }
      ],
    },
    'hawa mahal': {
      aboutParagraph: 'Hawa Mahal, the Palace of Winds, is a five-storey facade with small windows so royal women could watch the street without being seen. It is a symbol of Jaipur and best viewed from the street in the morning light.',
      heroImage: 'images/jaipur/hawa-mahal/hawa-mahal.jpg',
      hotels: [
        { name: 'Pink City Inn', description: 'Walking distance to Hawa Mahal.', price: '₹3,200/night' ,image:'images/jaipur/hawa-mahal/hotel/pin-city.jpg' }
      ],
      restaurants: [
        { name: 'LMB', description: 'Famous sweets and thali near Johari Bazaar.', cuisine: 'Rajasthani', image:'images/jaipur/johari-bazaar/restaurant/lxmb.jpg' }
      ],
      spotsToVisit: [
        { name: 'Johari Bazaar', description: 'Traditional market behind Hawa Mahal.', image: 'images/jaipur/hawa-mahal/to-visit/johari-bazaar.jpg' }
      ],
    },
    'jantar mantar': {
      aboutParagraph: 'Jantar Mantar in Jaipur is an ancient astronomical observatory with large stone instruments to measure time and position of stars. It is a UNESCO site and shows the scientific side of Rajasthan.',
      heroImage: 'images/jaipur/jantar-mantar/jantar-mantar.jpg',
      hotels: [
        { name: 'Heritage Haveli Jaipur', description: 'Traditional stay near the old city.', price: '₹4,800/night', image:'images/jaipur/jantar-mantar/hotel/heritage-haveli.jpg' }
      ],
      restaurants: [
        { name: 'Handi Restaurant', description: 'North Indian and Mughlai.', cuisine: 'North Indian', image:'images/jaipur/jantar-mantar/restaurant/handi.jpg' }
      ],
      spotsToVisit: [
        { name: 'Samrat Yantra', description: 'Largest sundial in the complex.', image: 'images/jaipur/jantar-mantar/to-visit/samrat.jpg' }
      ],
    },
    'nahargarh fort': {
      aboutParagraph: 'Nahargarh Fort sits on the Aravalli hills overlooking Jaipur. It was built for defence and has great views of the city, especially at sunset. You can drive up and enjoy the view from the fort walls.',
      heroImage: 'images/jaipur/nahargarh-fort/nahargah-fort.jpg',
      hotels: [
        { name: 'Fort View Resort', description: 'Near the fort area.', price: '₹5,500/night', image:'images/jaipur/nahargarh-fort/hotel/fort-view.jpg' }
      ],
      restaurants: [
        { name: 'Once Upon a Time', description: 'Rooftop restaurant at Nahargarh with city view.', cuisine: 'Rajasthani', image:'images/jaipur/nahargarh-fort/restaurant/once.jpg' }
      ],
      spotsToVisit: [
        { name: 'Sunset Point', description: 'Best views of Jaipur at dusk.', image: 'images/jaipur/nahargarh-fort/to-visit/sunset.jpg' }
      ],
      tours: [
        { name: 'Jaipur Royal Tour', description: 'Forts, palaces and markets.', price: '₹9,000/person', image: 'images/jaipur-tour.jpg' }
      ]
    },
    'johari bazaar': {
      aboutParagraph: 'Johari Bazaar is Jaipur\'s famous jewellery and handicraft market. You can buy traditional jewellery, gems, textiles, and souvenirs. The bazaar is colourful and full of local life.',
      heroImage: 'images/jaipur/johari-bazaar/johari-bazaar.jpg',
      hotels: [
        { name: 'Pink City Inn', description: 'Central near the bazaars.', price: '₹3,200/night', image:'images/jaipur/johari-bazaar/hotel/pin-city.jpg' }
      ],
      restaurants: [
        { name: 'Laxmi Mishthan Bhandar (LMB)', description: 'Sweets and traditional meals.', cuisine: 'Rajasthani', image:'images/jaipur/johari-bazaar/restaurant/lxmb.jpg' }
      ],
      spotsToVisit: [
        { name: 'Bapu Bazaar', description: 'Textiles and handicrafts.', image: 'images/jaipur/johari-bazaar/to-visit/bapu.jpg' }
      ],
      tours: [
        { name: 'Jaipur Royal Tour', description: 'Forts, palaces and markets.', price: '₹9,000/person', image: 'images/jaipur-tour.jpg' }
      ]
    }
  },
  himachal: {
    shimla: {
      aboutParagraph: 'Shimla, the Queen of Hills, was the summer capital of British India. It has colonial buildings, the Mall Road, and scenic views. You can visit Jakhu Temple, take the toy train, and enjoy the cool weather and pine forests.',
      heroImage: 'images/Himachal.jpg',
      hotels: [
        { name: 'Mountain View Shimla', description: 'Valley views and comfortable rooms.', price: '₹5,500/night' },
        { name: 'Oberoi Cecil', description: 'Heritage hotel on the Mall.', price: '₹12,000/night' }
      ],
      restaurants: [
        { name: 'Wake and Bake', description: 'Café and bakery on Mall Road.', cuisine: 'Café' },
        { name: 'Himachal Pradesh Tourism Restaurant', description: 'Local and North Indian.', cuisine: 'North Indian' }
      ],
      spotsToVisit: [
        { name: 'Mall Road', description: 'Shopping, cafés and walks.', image: 'images/Himachal.jpg' },
        { name: 'Jakhu Temple', description: 'Hanuman temple with views.', image: 'images/Himachal.jpg' },
        { name: 'Kufri', description: 'Snow point and activities.', image: 'images/Himachal.jpg' }
      ],
      tours: [
        { name: 'Shimla-Manali 5D', description: 'Classic hill circuit.', price: '₹18,000/person', image: 'images/Himachal.jpg' }
      ]
    },
    manali: {
      aboutParagraph: 'Manali is a popular hill station with snow views, adventure sports, and apple orchards. You can visit Rohtang Pass (when open), Solang Valley, Hadimba Temple, and the old Manali village. It is a hub for trekking and paragliding.',
      heroImage: 'images/Himachal.jpg',
      hotels: [
        { name: 'Manali Snow Resort', description: 'Near Rohtang and Solang.', price: '₹6,800/night' },
        { name: 'Johnson Lodge', description: 'Wood and stone lodge with mountain view.', price: '₹5,200/night' }
      ],
      restaurants: [
        { name: 'Johnson Lodge Restaurant', description: 'Wood-fired pizzas and continental.', cuisine: 'Continental' },
        { name: 'Casa Bella Vista', description: 'Italian and Indian with view.', cuisine: 'Italian' }
      ],
      spotsToVisit: [
        { name: 'Solang Valley', description: 'Adventure sports and snow.', image: 'images/Himachal.jpg' },
        { name: 'Hadimba Temple', description: 'Wooden temple in the forest.', image: 'images/Himachal.jpg' },
        { name: 'Old Manali', description: 'Cafés and hippie vibe.', image: 'images/Himachal.jpg' }
      ],
      tours: [
        { name: 'Shimla-Manali 5D', description: 'Classic hill circuit.', price: '₹18,000/person', image: 'images/Himachal.jpg' },
        { name: 'Dharamshala & Bir 4D', description: 'Culture and paragliding.', price: '₹14,000/person', image: 'images/Himachal.jpg' }
      ]
    },
    dharamshala: {
      aboutParagraph: 'Dharamshala is home to the Dalai Lama and the Tibetan government-in-exile. McLeod Ganj is the main traveller area with monasteries, cafés, and trekking. You can visit Tsuglagkhang Temple, Norbulingka, and enjoy Tibetan food and culture.',
      heroImage: 'images/Himachal.jpg',
      hotels: [
        { name: 'Dharamshala Peace Inn', description: 'Near McLeod Ganj and main square.', price: '₹3,900/night' }
      ],
      restaurants: [
        { name: 'Illiterati', description: 'Books, coffee and Tibetan food.', cuisine: 'Tibetan' },
        { name: 'Nick\'s Kitchen', description: 'Tibetan and Indian.', cuisine: 'Tibetan' }
      ],
      spotsToVisit: [
        { name: 'Tsuglagkhang Temple', description: 'Main temple and Dalai Lama\'s residence.', image: 'images/Himachal.jpg' },
        { name: 'Triund Trek', description: 'Popular one-day trek.', image: 'images/Himachal.jpg' }
      ],
      tours: [
        { name: 'Dharamshala & Bir 4D', description: 'Culture and paragliding.', price: '₹14,000/person', image: 'images/Himachal.jpg' }
      ]
    },
    'spiti valley': {
      aboutParagraph: 'Spiti Valley is a high-altitude desert with monasteries, stark landscapes, and clear skies. Key places include Key Monastery, Tabo, and Kaza. It is ideal for adventure and culture lovers. Best visited in summer.',
      heroImage: 'images/Himachal.jpg',
      hotels: [
        { name: 'Spiti Valley Lodge', description: 'Simple and cosy in Kaza.', price: '₹2,500/night' }
      ],
      restaurants: [
        { name: 'Sol Café (Kaza)', description: 'Simple food and warmth.', cuisine: 'Multi-cuisine' }
      ],
      spotsToVisit: [
        { name: 'Key Monastery', description: 'Famous Buddhist monastery.', image: 'images/Himachal.jpg' },
        { name: 'Tabo Monastery', description: 'One of the oldest in the Himalayas.', image: 'images/Himachal.jpg' }
      ],
      tours: [
        { name: 'Spiti Valley 7D', description: 'Adventure and monasteries.', price: '₹25,000/person', image: 'images/Himachal.jpg' }
      ]
    },
    dalhousie: {
      aboutParagraph: 'Dalhousie is a quiet hill station with colonial charm, pine and oak forests. You can visit Panchpula, Kalatop, and enjoy peaceful walks. It is less crowded than Shimla and Manali.',
      heroImage: 'images/Himachal.jpg',
      hotels: [
        { name: 'Grand View Hotel', description: 'Heritage stay with valley view.', price: '₹4,500/night' }
      ],
      restaurants: [
        { name: 'Kwality Restaurant', description: 'North Indian and local.', cuisine: 'North Indian' }
      ],
      spotsToVisit: [
        { name: 'Panchpula', description: 'Stream and picnic spot.', image: 'images/Himachal.jpg' },
        { name: 'Kalatop Wildlife Sanctuary', description: 'Forest walk.', image: 'images/Himachal.jpg' }
      ],
      tours: []
    },
    kasol: {
      aboutParagraph: 'Kasol is a small village on the Parvati River, popular with backpackers. It is a base for treks to Kheerganga and Malana. You can enjoy Israeli food, cafés, and the relaxed vibe.',
      heroImage: 'images/Himachal.jpg',
      hotels: [
        { name: 'Parvati Kuteer', description: 'Cottages by the river.', price: '₹2,800/night' }
      ],
      restaurants: [
        { name: 'Wake and Bake', description: 'Israeli and continental by the river.', cuisine: 'Continental' }
      ],
      spotsToVisit: [
        { name: 'Kheerganga Trek', description: 'Hot springs and mountain views.', image: 'images/Himachal.jpg' },
        { name: 'Malana', description: 'Village known for culture and trek.', image: 'images/Himachal.jpg' }
      ],
      tours: []
    }
  },
  kashmir: {
    'dal lake': {
      aboutParagraph: 'Dal Lake is the soul of Srinagar. It is famous for houseboats, shikara rides, and floating gardens. You can stay on a houseboat, take a shikara to the floating market, and enjoy views of the Zabarwan hills. The lake is especially beautiful at sunrise and sunset.',
      heroImage: 'images/kashmir.jpg',
      hotels: [
        { name: 'Dal Lake Houseboat', description: 'Traditional houseboat stay.', price: '₹8,500/night' }
      ],
      restaurants: [
        { name: 'Ahdoos', description: 'Famous wazwan and Kashmiri cuisine.', cuisine: 'Kashmiri' },
        { name: 'Mughal Darbar', description: 'Kashmiri and North Indian.', cuisine: 'Kashmiri' }
      ],
      spotsToVisit: [
        { name: 'Shikara ride', description: 'Traditional boat on the lake.', image: 'images/kashmir.jpg' },
        { name: 'Floating market', description: 'Morning market on shikaras.', image: 'images/kashmir.jpg' }
      ],
      tours: [
        { name: 'Kashmir Paradise 5D', description: 'Srinagar, Gulmarg, Pahalgam.', price: '₹24,000/person', image: 'images/kashmir-tour.jpg' },
        { name: 'Houseboat & Gulmarg 4D', description: 'Houseboat plus Gulmarg.', price: '₹18,500/person', image: 'images/kashmir-tour.jpg' }
      ]
    },
    gulmarg: {
      aboutParagraph: 'Gulmarg is a meadow resort in the Himalayas, famous for skiing in winter and flower meadows in summer. You can take the Gondola (one of the highest cable cars), trek, and enjoy the mountain views. It is a key destination for adventure and nature in Kashmir.',
      heroImage: 'images/kashmir.jpg',
      hotels: [
        { name: 'Gulmarg Resort', description: 'Slopes and mountain views.', price: '₹9,200/night' }
      ],
      restaurants: [
        { name: 'Stream Restaurant', description: 'Local and Indian with view.', cuisine: 'Kashmiri' }
      ],
      spotsToVisit: [
        { name: 'Gondola ride', description: 'Cable car to higher peaks.', image: 'images/kashmir.jpg' },
        { name: 'Skiing (winter)', description: 'Ski slopes and snow.', image: 'images/kashmir.jpg' }
      ],
      tours: [
        { name: 'Kashmir Paradise 5D', description: 'Srinagar, Gulmarg, Pahalgam.', price: '₹24,000/person', image: 'images/kashmir-tour.jpg' },
        { name: 'Houseboat & Gulmarg 4D', description: 'Houseboat plus Gulmarg.', price: '₹18,500/person', image: 'images/kashmir-tour.jpg' }
      ]
    }
  },
  mumbai: {
    'gateway of india': {
      aboutParagraph: 'The Gateway of India is Mumbai\'s most famous monument, built to welcome King George V in 1911. It stands by the sea in Apollo Bunder and is the starting point for boat trips to Elephanta Caves. The area has street food, photographers, and a view of the Taj Palace hotel.',
      heroImage: 'images/mumbai.jpg',
      hotels: [
        { name: 'Gateway View', description: 'Near Gateway of India.', price: '₹5,200/night' },
        { name: 'Taj Palace', description: 'Iconic hotel facing the Gateway.', price: '₹18,000/night' }
      ],
      restaurants: [
        { name: 'Bademiya', description: 'Legendary kebabs near the Gateway.', cuisine: 'Mughlai' },
        { name: 'Trishna', description: 'Fresh seafood in Fort.', cuisine: 'Seafood' }
      ],
      spotsToVisit: [
        { name: 'Elephanta Caves', description: 'Ferry from Gateway to the island.', image: 'images/mumbai.jpg' },
        { name: 'Colaba Causeway', description: 'Shopping and street food.', image: 'images/mumbai.jpg' }
      ],
      tours: [
        { name: 'Mumbai City Tour', description: 'Monuments, markets and chowpatty.', price: '₹3,500/person', image: 'images/mumbai.jpg' },
        { name: 'Elephanta & Dharavi', description: 'Caves and local experience.', price: '₹5,000/person', image: 'images/mumbai.jpg' }
      ]
    },
    'marine drive': {
      aboutParagraph: 'Marine Drive is a curved promenade along the Arabian Sea, often called the Queen\'s Necklace for its lights at night. It is perfect for an evening walk, watching the sunset, and feeling the city vibe. The area has hotels, cafés, and Chowpatty Beach at the northern end.',
      heroImage: 'images/mumbai.jpg',
      hotels: [
        { name: 'Marine Drive Hotel', description: 'Sea-facing rooms.', price: '₹6,500/night' }
      ],
      restaurants: [
        { name: 'Britannia & Co.', description: 'Parsi food and berry pulao.', cuisine: 'Parsi' }
      ],
      spotsToVisit: [
        { name: 'Chowpatty Beach', description: 'Beach, snacks and sunset.', image: 'images/mumbai.jpg' }
      ],
      tours: [
        { name: 'Mumbai City Tour', description: 'Monuments, markets and chowpatty.', price: '₹3,500/person', image: 'images/mumbai.jpg' }
      ]
    }
  },
  goa: {
    'calangute beach': {
      aboutParagraph: 'Calangute is Goa\'s most popular beach, with golden sand, water sports, and a busy strip of shacks and shops. You can swim, try parasailing or jet ski, and enjoy seafood and drinks by the sea. It is lively and family-friendly.',
      heroImage: 'images/goa.jpg',
      hotels: [
        { name: 'Beach Resort Calangute', description: 'On the beach.', price: '₹5,200/night' }
      ],
      restaurants: [
        { name: 'Martin\'s Corner', description: 'Goan seafood and music.', cuisine: 'Goan' },
        { name: 'Thalassa', description: 'Greek food with beach view.', cuisine: 'Greek' }
      ],
      spotsToVisit: [
        { name: 'Water sports', description: 'Parasailing, jet ski, banana boat.', image: 'images/goa.jpg' },
        { name: 'Baga Beach', description: 'Next beach, nightlife.', image: 'images/goa.jpg' }
      ],
      tours: [
        { name: 'Goa Beach 4D', description: 'Beaches and nightlife.', price: '₹11,500/person', image: 'images/goa-tour.jpg' },
        { name: 'Goa Heritage & Nature 5D', description: 'Churches, falls and beaches.', price: '₹16,000/person', image: 'images/goa-tour.jpg' }
      ]
    }
  },
};
// Helper: get place key from place name (e.g. "Amber Fort" -> "amber fort")
function getPlaceKey(placeName) {
  if (!placeName) return '';
  return String(placeName).toLowerCase().trim();
}
