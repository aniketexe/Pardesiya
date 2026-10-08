const img = {
  taj: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=80",
  kerala: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
  rajasthan: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
  varanasi: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80",
  goa: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
  himachal: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
  food: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80",
  dance: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
  textile: "https://images.unsplash.com/photo-1609587312208-cea54be969e7?auto=format&fit=crop&w=1200&q=80",
  spice: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80",
  temple: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
  boat: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
  portrait: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
  portrait2: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
  brandBg: "https://images.unsplash.com/photo-1532664189809-0819a8088d0d?auto=format&fit=crop&w=1600&q=80",
  jewelry: "https://images.unsplash.com/photo-1611652022419-a73ad72d3b0c?auto=format&fit=crop&w=1200&q=80",
  pottery: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=80",
  silk: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
};

const STATE_NAMES = {
  an: "Andaman and Nicobar Islands",
  ap: "Andhra Pradesh",
  ar: "Arunachal Pradesh",
  as: "Assam",
  br: "Bihar",
  ch: "Chandigarh",
  ct: "Chhattisgarh",
  dn: "Dadra and Nagar Haveli",
  dd: "Daman and Diu",
  dl: "Delhi",
  ga: "Goa",
  gj: "Gujarat",
  hr: "Haryana",
  hp: "Himachal Pradesh",
  jk: "Jammu and Kashmir",
  jh: "Jharkhand",
  ka: "Karnataka",
  kl: "Kerala",
  ld: "Lakshadweep",
  mp: "Madhya Pradesh",
  mh: "Maharashtra",
  mn: "Manipur",
  ml: "Meghalaya",
  mz: "Mizoram",
  nl: "Nagaland",
  or: "Odisha",
  py: "Puducherry",
  pb: "Punjab",
  rj: "Rajasthan",
  sk: "Sikkim",
  tn: "Tamil Nadu",
  tg: "Telangana",
  tr: "Tripura",
  up: "Uttar Pradesh",
  ut: "Uttarakhand",
  wb: "West Bengal",
};

const featured = {
  rj: {
    tagline: "Desert palaces and living craft",
    heroImage: img.rajasthan,
    locations: ["Jaipur", "Udaipur", "Jaisalmer", "Pushkar"],
    categories: {
      culture: "Rajasthan’s courtly manners, folk ballads, and desert hospitality still shape how guests are received. Palaces, havelis, and village courtyards keep a public culture of colour, honour, and music.",
      festival: "Teej, Gangaur, and the Desert Festival in Jaisalmer fill streets with processions, camels, and ghoomar. Diwali here is a city of lamps on sandstone.",
      language: "Rajasthani languages — Marwari, Mewari, Dhundhari and others — sit beside Hindi. Folk epics like Pabuji ki Phad are still sung, not only archived.",
      art: "Blue pottery, miniature painting, block-printed textiles, and the Phad scrolls of Bhilwara. Walls and fabrics are canvases.",
      food: "Dal baati churma, laal maas, ker sangri, and ghewar. Spice is slow-cooked, not rushed; sweets arrive like jewellery.",
      hiddenGems: "Bundi’s painted palaces, Shekhawati’s open-air fresco towns, and the salt flats around Sambhar reward travellers who leave the Golden Triangle loop.",
    },
  },
  kl: {
    tagline: "Backwaters, monsoon, and classical arts",
    heroImage: img.kerala,
    locations: ["Alappuzha", "Kochi", "Munnar", "Kozhikode"],
    categories: {
      culture: "Kerala’s public life mixes temple arts, Christian and Muslim coastal towns, and a strong reading culture. The houseboat and the courtyard house are both ways of living with water.",
      festival: "Onam’s pookalam and sadya, Thrissur Pooram’s elephants, and Theyyam in the north — seasons are marked by ritual theatre.",
      language: "Malayalam, with a literary tradition that travels easily into cinema and poetry.",
      art: "Kathakali, Mohiniyattam, mural painting, and coir and bronze craft. Faces become stories in makeup and lamp-light.",
      food: "Sadya on banana leaf, appam with stew, Malabar biryani, and toddy-shop karimeen. Coconut, curry leaf, and tamarind do the quiet work.",
      hiddenGems: "Wayanad’s groves, the Jewish traces of Mattancherry beyond the postcard, and village theyyam nights in Kannur.",
    },
  },
  tn: {
    tagline: "Temple cities and living classical form",
    heroImage: img.temple,
    locations: ["Chennai", "Madurai", "Thanjavur", "Pondicherry coast"],
    categories: {
      culture: "Tamil Nadu holds one of the world’s oldest continuous literary cultures. Temple towns are still civic centres, not ruins.",
      festival: "Pongal, Chennai’s music season, and chariot festivals that turn streets into processional architecture.",
      language: "Tamil — classical and contemporary, from Sangam verse to cinema dialogue.",
      art: "Bharatanatyam, bronze casting of Swamimalai, Tanjore painting, and Kolam drawn at dawn.",
      food: "Idli, dosa, Chettinad pepper heat, filter coffee, and temple prasadam that is also a cuisine.",
      hiddenGems: "Chettinad mansions, the quiet tanks of smaller Chola shrines, and the salt air of fishing hamlets south of Chennai.",
    },
  },
  mh: {
    tagline: "Sahyadri forts, mill cities, and theatre",
    heroImage: img.dance,
    locations: ["Mumbai", "Pune", "Kolhapur", "Ajanta & Ellora"],
    categories: {
      culture: "Marathi public culture runs from wadas and lavani to the film studios of Mumbai. The ghats remember Shivaji; the city remembers mills and migration.",
      festival: "Ganeshotsav, Gudi Padwa, and the Pandharpur wari — devotion that moves as a crowd.",
      language: "Marathi, with Mumbai’s everyday mix of Hindi, English, and coastal Konkani.",
      art: "Warli painting, Kolhapuri craft, and a fierce theatre and cinema tradition.",
      food: "Vada pav, puran poli, Malvani fish, and Kolhapuri thecha. Street food is a civic language.",
      hiddenGems: "Konkan village temples, monsoon forts on the Sahyadris, and the cave stillness of Ajanta beyond a day trip.",
    },
  },
  wb: {
    tagline: "Adda, Durga, and the delta",
    heroImage: img.boat,
    locations: ["Kolkata", "Sundarbans", "Shantiniketan", "Darjeeling"],
    categories: {
      culture: "Bengal’s adda, books, and political song sit beside a delta ecology. Kolkata still feels like a conversation that started a century ago.",
      festival: "Durga Puja as public art, Poila Boishakh, and winter book fairs.",
      language: "Bangla — poetry, protest, and film in the same breath.",
      art: "Kantha stitch, Kalighat painting, and the Santiniketan lineage of Tagore.",
      food: "Machher jhol, rosogolla, puchka, and a sweet shop on every second corner.",
      hiddenGems: "Bishnupur terracotta temples, the quiet of the Sundarbans creeks, and neighbourhood pujas that never make the brochure.",
    },
  },
  pb: {
    tagline: "Langar, fields, and a loud heart",
    heroImage: img.food,
    locations: ["Amritsar", "Patiala", "Ludhiana", "Anandpur Sahib"],
    categories: {
      culture: "Punjab’s culture is hospitality at scale — langar, harvest, and music that does not whisper. The Golden Temple is both shrine and civic square.",
      festival: "Baisakhi, Lohri, and Maghi. Winter bonfires and spring harvest share the same drum.",
      language: "Punjabi, written in Gurmukhi, sung in every register from hymn to bhangra.",
      art: "Phulkari embroidery, metalwork, and a popular music industry that travels the world.",
      food: "Makki di roti, sarson da saag, Amritsari kulcha, lassi as thick as a story.",
      hiddenGems: "Border villages near Hussainiwala, Qila Mubarak’s rooms in Patiala, and roadside dhabas that outcook the city.",
    },
  },
  ga: {
    tagline: "Konkan churches, spice, and slow tide",
    heroImage: img.goa,
    locations: ["Panaji", "Old Goa", "Divar Island", "Palolem"],
    categories: {
      culture: "Goa is not only a beach. Konkani life, Catholic feasts, and Hindu village temples share a small coastal state with a long Portuguese chapter.",
      festival: "Carnival, Sao Joao, and Shigmo. Feasts are neighbourhood events, not shows.",
      language: "Konkani, with Marathi, English, and traces of Portuguese in kitchens and churches.",
      art: "Azulejo-influenced tiles, church music, and contemporary art in Fontainhas.",
      food: "Prawn balchão, bebinca, xacuti, and feni. Vinegar and coconut argue productively.",
      hiddenGems: "Divar ferries, spice estates inland, and village tavernas far from the night market.",
    },
  },
  hp: {
    tagline: "Apple roads and temple cedar",
    heroImage: img.himachal,
    locations: ["Shimla", "Dharamshala", "Spiti", "Kullu"],
    categories: {
      culture: "Himachal’s village gods travel in palanquins. Hill stations are a colonial layer over much older pahari worlds.",
      festival: "Kullu Dussehra, Losar in Buddhist valleys, and local fairs where deities meet.",
      language: "Pahari varieties and Hindi, with Tibetan in exile communities of Dharamshala.",
      art: "Pahari miniature painting, wood-carved temples, and thangka in the rain-shadow valleys.",
      food: "Siddu, dham thalis, trout, and apple everything in season.",
      hiddenGems: "Tirthan valley, the mud villages of Spiti, and deodar shrines that never needed a hashtag.",
    },
  },
  as: {
    tagline: "Brahmaputra, tea, and living weaving",
    heroImage: img.boat,
    locations: ["Guwahati", "Kaziranga", "Majuli", "Jorhat"],
    categories: {
      culture: "Assam sits at a river crossroads. Satras, tea gardens, and a dozen communities share the valley without becoming one postcard.",
      festival: "Bihu in three seasons, and river island theatre on Majuli.",
      language: "Assamese, with Bodo and many others in daily earshot.",
      art: "Muga and pat silk, mask-making, and Sattriya dance.",
      food: "Khar, tenga, pithas, and duck on winter tables. Mustard and fermented flavours lead.",
      hiddenGems: "Majuli’s monasteries, tea-bungalow backroads, and village weavers who still set the loom at dawn.",
    },
  },
  up: {
    tagline: "Ganga cities and craft corridors",
    heroImage: img.varanasi,
    locations: ["Varanasi", "Agra", "Lucknow", "Prayagraj"],
    categories: {
      culture: "Uttar Pradesh holds pilgrimage, nawabi memory, and the Hindi-Urdu public sphere. The river is a teacher.",
      festival: "Dev Deepawali, Holi in Mathura-Vrindavan, and the Kumbh when the calendar turns.",
      language: "Hindi and Urdu, Awadhi and Bhojpuri — speech as performance.",
      art: "Banarasi silk, Lucknow chikankari, and the stone inlay of Agra.",
      food: "Awadhi dum pukht, chaat, petha, and a street that never closes.",
      hiddenGems: "Weaving mohallas of Varanasi, old havelis of Lucknow beyond the Imambara selfie, and the quiet of Chitrakoot.",
    },
  },
  gj: {
    tagline: "Salt, textiles, and a long coast",
    heroImage: img.textile,
    locations: ["Ahmedabad", "Kutch", "Dwarka", "Gir"],
    categories: {
      culture: "Gujarat’s mercantile confidence shows in pols, stepwells, and a craft map that still employs whole talukas.",
      festival: "Navratri’s garba, Rann Utsav, and Uttarayan when the sky fills with kites.",
      language: "Gujarati, with Kachchhi and a trading English that is older than the airports.",
      art: "Ajrakh, bandhani, embroidery of Kutch, and the wooden haveli.",
      food: "A thali that argues sweet and salty at once; fafda, undhiyu, and Gujarati kadhi.",
      hiddenGems: "Modhera’s sun temple at late light, the salt desert at night, and village block-printers in Dhamadka.",
    },
  },
  ka: {
    tagline: "Stone empires and a coffee shade",
    heroImage: img.temple,
    locations: ["Bengaluru", "Hampi", "Coorg", "Mysuru"],
    categories: {
      culture: "Karnataka holds Vijayanagara’s ruins, a classical music school, and a tech city that still eats ragi.",
      festival: "Mysuru Dasara, Ugadi, and temple rathas in the old towns.",
      language: "Kannada, with Tulu and Kodava in the south and west.",
      art: "Hoysala stone, Mysore painting, and Yakshagana’s night-long theatre.",
      food: "Bisi bele bath, Neer dosa, Coorg pork, and filter coffee as ritual.",
      hiddenGems: "Lesser Hoysala shrines around Halebidu, the islands of the Tungabhadra, and coffee estate roads after rain.",
    },
  },
};

function stubState(id, name) {
  return {
    id,
    name,
    tagline: `A chapter of India: ${name}`,
    heroImage: img.dance,
    locations: ["Capital & towns", "Craft clusters", "Pilgrim roads", "Quiet countryside"],
    categories: {
      culture: `${name} carries its own public manners, faiths, and ways of gathering. Pardesiya will keep adding field notes from local collaborators.`,
      festival: `Seasonal festivals in ${name} still organise the year — harvest, monsoon, and temple or mosque calendars overlapping.`,
      language: `Languages of ${name} are the first map. Listen in markets and songs before you read the guidebook.`,
      art: `Craft and performance in ${name} survive in workshops, stages, and courtyards. Seek the maker, not only the souvenir.`,
      food: `The thali of ${name} is a geography lesson — grain, oil, spice, and sweet in a local order.`,
      hiddenGems: `Leave the first famous stop. ${name} hides its best rooms one bus ride further.`,
    },
  };
}

function buildStates() {
  return Object.entries(STATE_NAMES).map(([id, name]) => {
    const extra = featured[id];
    if (!extra) return stubState(id, name);
    return { id, name, ...extra };
  });
}

function buildContent() {
  return {
    site: {
      name: "Pardesiya",
      hindi: "परदेसिया",
      tagline: "Travel with the grain of the country — not against it.",
      intro:
        "Pardesiya is a host for slow travel across India: a planner, a gallery, and a circle of people who still believe a journey should leave you more literate in someone else’s street. We map festivals, food, language, art, and the rooms that never make the brochure.",
      sidePanelTitle: "Yatra notes",
      sidePanel: [
        { title: "How to arrive", body: "Land with curiosity. Learn one greeting, one sweet, one neighbourhood walk before the monument." },
        { title: "Monsoon window", body: "Western ghats and Kerala glow after first rains. Forts of Maharashtra are a green theatre." },
        { title: "Craft, not costume", body: "Buy from the workshop. Ask who dyed the cloth. Carry less plastic than you think you need." },
        { title: "Forum is open", body: "Travellers and hosts will soon swap routes, warnings, and invitations. The square is being swept." },
      ],
      vision:
        "We want a India that is visited without being flattened. Pardesiya exists so culture can be met in its own tempo — state by state, table by table — and so a small brand can send a little money back to makers. Know us more: we are hosts, not influencers with a drone.",
    },
    gallery: [
      { id: "g1", title: "Sandstone morning", caption: "A courtyard before the tour buses.", image: img.rajasthan },
      { id: "g2", title: "Backwater lamp", caption: "Kerala between two rains.", image: img.kerala },
      { id: "g3", title: "Ghat light", caption: "The river keeps its own clock.", image: img.varanasi },
      { id: "g4", title: "Spice market", caption: "Colour you can smell.", image: img.spice },
      { id: "g5", title: "Coastal pause", caption: "Tide, church, and toddy shop.", image: img.goa },
      { id: "g6", title: "Hill cedar", caption: "A road that climbs into apple air.", image: img.himachal },
    ],
    products: [
      {
        id: "p1",
        name: "Ajrakh stole",
        region: "Kutch, Gujarat",
        description: "Hand-block printed indigo and madder on cotton. A piece of our culture you can wear on a night bus.",
        image: img.textile,
      },
      {
        id: "p2",
        name: "Blue pottery bowl",
        region: "Jaipur, Rajasthan",
        description: "Quartz-glazed ware for daal, not for a locked cabinet. Made to be put on a table.",
        image: img.pottery,
      },
      {
        id: "p3",
        name: "Banarasi border",
        region: "Varanasi, Uttar Pradesh",
        description: "A length of silk that remembers the loom. For ceremonies, or for the courage of ordinary Fridays.",
        image: img.silk,
      },
      {
        id: "p4",
        name: "Temple-town silver",
        region: "South workshops",
        description: "Small jewellery with a quiet weight. Not costume — a piece you forget you are wearing.",
        image: img.jewelry,
      },
    ],
    sponsors: [
      { id: "s1", name: "Nilgiri Leaf", note: "Tea gardens" },
      { id: "s2", name: "Kaveri Weaves", note: "Handloom house" },
      { id: "s3", name: "Salt Route Co.", note: "Coastal stays" },
      { id: "s4", name: "Peacock Ink", note: "Independent press" },
      { id: "s5", name: "Ghat & Grain", note: "Community kitchens" },
      { id: "s6", name: "Cedar Post", note: "Hill hostels" },
    ],
    brand: {
      title: "Brand story",
      kicker: "Brand portfolio",
      image: img.brandBg,
      body: "Pardesiya began as a collaboration: one of us walking with a notebook through family towns, the other photographing doorframes and thalis. We were tired of itineraries that treated India as a checklist. This house is built from those walks — a planner, a shop of makers, and a gallery that prefers people to monuments. The photograph on this wall is from an early trip; the story is still being written with everyone who hosts us.",
    },
    team: [
      { id: "t1", name: "Aniket", role: "Co-founder", bio: "Builds the house and the map.", photo: img.portrait2 },
      { id: "t2", name: "Collaborator", role: "Co-founder", bio: "Keeps the photographs honest.", photo: img.portrait },
    ],
    social: {
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      linkedin: "https://linkedin.com",
    },
    contact: {
      email: "hello@pardesiya.example",
      place: "India — and wherever the next train stops",
    },
    forum: {
      intro: "A square for travellers and hosts. Threads below are placeholders while we connect a proper database, logins, and rate limits.",
      threads: [
        { id: "f1", title: "Monsoon in the ghats — window seats or wait?", author: "Meera", excerpt: "Planning a slow loop from Pune into the Konkan. What is still open when the ferries sulk?" },
        { id: "f2", title: "Looking for a weaver in Bhujodi", author: "Kabir", excerpt: "Not a shop tour — a morning in the workshop, if they will have a guest." },
        { id: "f3", title: "Langar etiquette for first-timers", author: "Sofia", excerpt: "I want to visit Amritsar without performing tourism. Teach me the quiet rules." },
      ],
    },
    states: buildStates(),
  };
}

module.exports = { buildContent, STATE_NAMES };
