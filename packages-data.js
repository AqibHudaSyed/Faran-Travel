// ============================================================
//  FARAN TOURS & TRAVELS - PACKAGES DATA FILE
//  ============================================================
//  YE FILE EDIT KARKE PACKAGES UPDATE KARO
//  Har mahine naye packages aane par bas is file mein
//  image ka naam change karo aur Netlify pe upload karo!
//
//  KAISE EDIT KARE:
//  1. Notepad ya any text editor mein open karo
//  2. image: "..." ke andar nayi image file ka naam likho
//  3. File save karo
//  4. Netlify pe packages-data.js + nayi image upload karo
//  5. Done! Website automatic update!
//
//  PACKAGE HIDE KARNA HO TO: active: false karo
//  NAYA PACKAGE ADD KARNA HO TO: neeche template copy karo
// ============================================================

const PACKAGES = [

  // ============================================================
  // PACKAGE 1 - DELUXE UMRAH (December Special)
  // ============================================================
  {
    id: "deluxe-umrah-dec",
    active: true,
    badge: "🌟 December Special",
    badgeColor: "#e8b84b",
    title: "Deluxe Umrah — December Special",
    subtitle: "Group Departures · Direct Flight",
    route: "LKO → JED → LKO",
    days: "15-16 Days",
    airline: "Saudi Airlines — Direct Flight",
    price: "₹1,28,000",
    priceNote: "starting per person",
    headerColor: "linear-gradient(135deg, #1a6b3a, #0f4a28)",

    // IMAGE FILE KA NAAM YAHAN LIKHO
    image: "Deluxe_Umrah.jpeg",
    imageFallbackEmoji: "🕋",
    imageFallbackBg: "linear-gradient(135deg, #1a6b3a, #0f4a28)",

    includes: [
      "Return Air Ticket (Saudi Airlines)",
      "Umrah Visa Included",
      "Hotel Diyar Al Nada, Makkah (500m)",
      "Hotel Grand Zawar, Madinah (150m)",
      "Ziyarat — Makkah, Madinah & Badr",
      "All Meals Included (Indian Food)",
      "Laundry Service",
      "Zam Zam Water (5 Litres)",
      "Travel Assistance"
    ],

    dates: [
      { grp: "1", departure: "07 Dec – 21 Dec", arrival: "", days: "15", price: "₹1,28,000" },
      { grp: "2", departure: "10 Dec – 25 Dec", arrival: "", days: "16", price: "₹1,30,000" },
      { grp: "3", departure: "17 Dec – 01 Jan", arrival: "", days: "16", price: "₹1,30,000" },
      { grp: "4", departure: "24 Dec – 08 Jan", arrival: "", days: "16", price: "₹1,30,000" },
      { grp: "5", departure: "31 Dec – 15 Jan", arrival: "", days: "16", price: "₹1,30,000" },
    ],

    whatsappMsg: "Assalamu Alaikum! I want to book the December Special Deluxe Umrah Package. Please share details.",
    note: "Document Required: Scanned Passport, PAN Card & Passport Size Photo."
  },


  // ============================================================
  // PACKAGE 2 - DELUXE UMRAH (Full Year 2026-27)
  // ============================================================
  {
    id: "deluxe-umrah-2027",
    active: true,
    badge: "⭐ Most Popular",
    badgeColor: "#c9963a",
    title: "Deluxe Umrah Package 2026-27",
    subtitle: "1448 Hijri · Group Departures",
    route: "LKO → JED → LKO",
    days: "15-16 Days",
    airline: "Saudi Airlines — Direct Flight",
    price: "₹1,22,000",
    priceNote: "starting per person",
    headerColor: "linear-gradient(135deg, #0d1f3c, #1a3a6e)",

    image: "Deluxe_Umrah_Package.jpeg",
    imageFallbackEmoji: "🕋",
    imageFallbackBg: "linear-gradient(135deg, #0d1f3c, #1a3a6e)",

    includes: [
      "Return Air Ticket (Saudi Airlines)",
      "Umrah Visa Included",
      "Hotel Nada Al Majd, Makkah (550m)",
      "Hotel Grand Zawar, Madinah (150m)",
      "Ziyarat — Makkah, Madinah, Jurana, Badr",
      "All Meals Included",
      "Laundry Service",
      "Zam Zam Water (5 Litres)",
      "Free Wi-Fi",
      "Muallim Guidance"
    ],

    dates: [
      { grp: "1", departure: "16 Oct – 30 Oct", arrival: "", days: "15", price: "₹1,22,000" },
      { grp: "2", departure: "25 Oct – 09 Nov", arrival: "", days: "16", price: "₹1,24,000" },
      { grp: "3", departure: "09 Nov – 23 Nov", arrival: "", days: "15", price: "₹1,24,000" },
      { grp: "4", departure: "20 Nov – 05 Dec", arrival: "", days: "15", price: "₹1,25,000" },
      { grp: "5", departure: "07 Dec – 21 Dec", arrival: "", days: "15", price: "₹1,24,000" },
      { grp: "6", departure: "10 Dec – 25 Dec", arrival: "", days: "16", price: "₹1,26,000" },
      { grp: "7", departure: "17 Dec – 01 Jan", arrival: "", days: "16", price: "₹1,28,000" },
      { grp: "8", departure: "24 Dec – 08 Jan", arrival: "", days: "16", price: "₹1,28,000" },
      { grp: "9", departure: "31 Dec – 15 Jan", arrival: "", days: "16", price: "₹1,28,000" },
    ],

    whatsappMsg: "Assalamu Alaikum! I want to book the Deluxe Umrah Package 2026-27. Please share details.",
    note: "13 Sep, 22 Sep, 04 Oct dates are SOLD OUT. Document Required: Scanned Passport, PAN Card & Passport Size Photo."
  },


  // ============================================================
  // PACKAGE 3 - SEMI DELUXE UMRAH (2026-27)
  // ============================================================
  {
    id: "semi-deluxe-umrah-2027",
    active: true,
    badge: "Budget Friendly",
    badgeColor: "#1a6b3a",
    title: "Semi Deluxe Umrah Package 2026-27",
    subtitle: "1448 Hijri · Air India & Oman Air",
    route: "LKO → JED → LKO",
    days: "15-18 Days",
    airline: "Air India & Oman Air",
    price: "₹97,000",
    priceNote: "starting per person",
    headerColor: "linear-gradient(135deg, #8B6914, #c9963a)",

    image: "SemiDeluxe_Umrah_Package.jpeg",
    imageFallbackEmoji: "🕌",
    imageFallbackBg: "linear-gradient(135deg, #8B6914, #c9963a)",

    includes: [
      "Return Air Ticket",
      "Umrah Visa Included",
      "Makkah Hotel (1200-1500m, Shuttle Service)",
      "Madinah Hotel (900-1000m, Shuttle Service)",
      "Ziyarat — Makkah, Madinah, Jurana, Badr",
      "All Meals Included",
      "Laundry Service",
      "Zam Zam Water (5 Litres)",
      "Free Wi-Fi",
      "Muallim Guidance"
    ],

    dates: [
      { grp: "1", departure: "21 Aug – 05 Sep", arrival: "", days: "16", price: "₹1,04,000", special: "Rabi-ul-Awwal Package" },
      { grp: "2", departure: "28 Aug – 13 Sep", arrival: "", days: "17", price: "₹97,000" },
      { grp: "3", departure: "08 Sep – 25 Sep", arrival: "", days: "18", price: "₹98,000" },
      { grp: "4", departure: "02 Oct – 18 Oct", arrival: "", days: "17", price: "₹97,000" },
      { grp: "5", departure: "09 Oct – 24 Oct", arrival: "", days: "16", price: "₹97,000" },
      { grp: "6", departure: "04 Nov – 19 Nov", arrival: "", days: "16", price: "₹97,000" },
      { grp: "7", departure: "11 Nov – 26 Nov", arrival: "", days: "16", price: "₹97,000" },
      { grp: "8", departure: "02 Dec – 18 Dec", arrival: "", days: "17", price: "₹97,000" },
      { grp: "9", departure: "12 Dec – 28 Dec", arrival: "", days: "17", price: "₹97,000" },
      { grp: "10", departure: "17 Dec – 02 Jan", arrival: "", days: "17", price: "₹97,000" },
      { grp: "11", departure: "23 Dec – 06 Jan", arrival: "", days: "15", price: "₹97,000" },
    ],

    whatsappMsg: "Assalamu Alaikum! I want to book the Semi Deluxe Umrah Package 2026-27. Please share details.",
    note: "07 Jul, 17 Jul, 07 Aug dates are SOLD OUT. Document Required: Scanned Passport, PAN Card & Passport Size Photo."
  },


  // ============================================================
  // PACKAGE 4 - HAJJ 2027 (SHIFTING PACKAGE)
  // Economy + Deluxe both
  // ============================================================
  {
    id: "hajj-2027-shifting",
    active: true,
    badge: "☪️ Hajj 2027",
    badgeColor: "#e8b84b",
    title: "Hajj 2027 — Shifting Package",
    subtitle: "38-42 Days · Muallim C Category",
    route: "LKO/BOM/DEL → JED",
    days: "38-42 Days",
    airline: "Best Available Airlines",
    price: "₹6,30,000",
    priceNote: "starting (Economy, Quad Sharing) + TCS",
    headerColor: "linear-gradient(135deg, #8B1A1A, #5c1010)",

    image: "Hajj2027.jpeg",
    imageFallbackEmoji: "☪️",
    imageFallbackBg: "linear-gradient(135deg, #8B1A1A, #5c1010)",

    includes: [
      "GST Included",
      "Any Best Available Flight",
      "Hajj Visa",
      "Accommodation (Separate Ladies & Gents)",
      "Hajj Medical Insurance",
      "Muallim — Mina, Arafat & Muzdalifa",
      "Round Trip Transportation",
      "Indian Buffet Meals (By Expert Chef)",
      "A Step By Step Guide",
      "5 Litre Zam-Zam",
      "Laundry Service",
      "Visit to Historical Sites"
    ],

    dates: [],

    whatsappMsg: "Assalamu Alaikum! I want to enquire about Hajj 2027 Shifting Package. Please share details and pricing.",
    note: "Economy Shifting: Quad ₹6,30,000 | Triple ₹6,95,000 | Double ₹7,60,000 (+TCS). Deluxe Shifting: Quad ₹7,05,000 | Triple ₹8,00,000 | Double ₹8,45,000 (+TCS). Departure: 09-11th May 2027. TCS refundable through ITR."
  },


  // ============================================================
  // PACKAGE 5 - HAJJ 2027 (NON SHIFTING - Standard & Deluxe)
  // ============================================================
  {
    id: "hajj-2027-non-shifting",
    active: true,
    badge: "☪️ Hajj 2027",
    badgeColor: "#c9963a",
    title: "Hajj 2027 — Non Shifting Package",
    subtitle: "18-22 Days · Muallim C Category",
    route: "LKO/BOM/DEL → JED",
    days: "18-22 Days",
    airline: "Best Available Airlines",
    price: "₹6,30,000",
    priceNote: "starting (Standard, Quad Sharing) + TCS",
    headerColor: "linear-gradient(135deg, #0d1f3c, #162b52)",

    image: "Hajj2027_2.jpeg",
    imageFallbackEmoji: "🕋",
    imageFallbackBg: "linear-gradient(135deg, #0d1f3c, #162b52)",

    includes: [
      "GST Included",
      "Any Best Available Flight",
      "Hajj Visa",
      "Accommodation (Separate Ladies & Gents)",
      "Hajj Medical Insurance",
      "Muallim — Mina, Arafat & Muzdalifa",
      "Round Trip Transportation",
      "Indian Buffet Meals (By Expert Chef)",
      "A Step By Step Guide",
      "5 Litre Zam-Zam",
      "Laundry Service",
      "Visit to Historical Sites"
    ],

    dates: [],

    whatsappMsg: "Assalamu Alaikum! I want to enquire about Hajj 2027 Non Shifting Package. Please share details.",
    note: "Standard Non-Shifting: Quad ₹6,30,000 | Triple ₹6,95,000 | Double ₹7,60,000 (+TCS). Deluxe Non-Shifting: Quad ₹8,20,000 | Triple ₹9,00,000 | Double ₹9,80,000 (+TCS). Departure: 09-11th May 2027. TCS refundable through ITR."
  },


  // ============================================================
  // PACKAGE 6 - HAJJ 2027 (NON SHIFTING - 13-15 Days Standard)
  // ============================================================
  {
    id: "hajj-2027-non-shifting-short",
    active: true,
    badge: "Hajj 2027 · Short",
    badgeColor: "#1a6b3a",
    title: "Hajj 2027 — Non Shifting (13-15 Days)",
    subtitle: "C Category Moallim · Answer His Call",
    route: "LKO/BOM/DEL → JED",
    days: "13-15 Days",
    airline: "Best Available Airlines",
    price: "₹6,15,000",
    priceNote: "starting (Quad Sharing) + TCS",
    headerColor: "linear-gradient(135deg, #1a6b3a, #0f4a28)",

    image: "Hajj2027_NonShifting.jpeg",
    imageFallbackEmoji: "🕌",
    imageFallbackBg: "linear-gradient(135deg, #1a6b3a, #0f4a28)",

    includes: [
      "Hajj Visa",
      "Best Available Flight",
      "Aziziya Hotel (Rawdat Al Salam or Similar)",
      "Madinah Hotel (Haya Al Huda, 300m from Masjid)",
      "Ayyam e Hajj — Mina Arrangement",
      "Hajj Medical Insurance",
      "Muallim Support",
      "Indian Buffet Meals",
      "Round Trip Transportation",
      "5 Litre Zam-Zam",
      "Laundry Service"
    ],

    dates: [],

    whatsappMsg: "Assalamu Alaikum! I want to enquire about Hajj 2027 Non Shifting 13-15 Days Package. Please share details.",
    note: "Quad/Quint ₹6,15,000 | Triple ₹6,80,000 | Double ₹7,45,000 (+TCS). Departure: 09-11 May 2027. Arrival: 24/25 May 2027. TCS refundable through ITR."
  },


  // ============================================================
  // PACKAGE 7 - HAJJ 2027 (DELUXE NON SHIFTING - 13-15 Days)
  // ============================================================
  {
    id: "hajj-2027-deluxe-non-shifting",
    active: true,
    badge: "✨ Deluxe Hajj",
    badgeColor: "#8B6914",
    title: "Hajj 2027 — Deluxe Non Shifting (13-15 Days)",
    subtitle: "C Category Moallim · Accept His Call",
    route: "LKO/BOM/DEL → JED",
    days: "13-15 Days",
    airline: "Best Available Airlines",
    price: "₹8,05,000",
    priceNote: "starting (Quad Sharing) + TCS",
    headerColor: "linear-gradient(135deg, #8B6914, #c9963a)",

    image: "Hajj2027_Deluxe_NonShifting.jpeg",
    imageFallbackEmoji: "☪️",
    imageFallbackBg: "linear-gradient(135deg, #8B6914, #c9963a)",

    includes: [
      "Hajj Visa",
      "Best Available Flight",
      "Makkah Hotel Tara Ajyad (700m from Haram)",
      "Madinah Hotel Manazil Al Rehma (200m from Masjid)",
      "Ayyam e Hajj — Mina Arrangement",
      "Hajj Medical Insurance",
      "Muallim Support",
      "Indian Buffet Meals",
      "Round Trip Transportation",
      "5 Litre Zam-Zam",
      "Laundry Service"
    ],

    dates: [],

    whatsappMsg: "Assalamu Alaikum! I want to enquire about Hajj 2027 Deluxe Non Shifting Package. Please share details.",
    note: "Quad/Quint ₹8,05,000 | Triple ₹8,95,000 | Double ₹9,90,000 (+TCS). Departure: 09-11 May 2027. Arrival: 24/25 May 2027. TCS refundable through ITR."
  }

];


// ============================================================
// NAYA PACKAGE ADD KARNA HO TO — YE TEMPLATE COPY KARO:
//
//  {
//    id: "unique-id",           // koi bhi unique naam
//    active: true,              // false = website pe nahi dikhega
//    badge: "Badge Text",
//    badgeColor: "#c9963a",
//    title: "Package Title",
//    subtitle: "Subtitle",
//    route: "LKO → JED → LKO",
//    days: "16 Days",
//    airline: "Airline Name",
//    price: "₹X,XX,000",
//    priceNote: "per person",
//    headerColor: "linear-gradient(135deg, #0d1f3c, #162b52)",
//    image: "image-file-name.jpg",  // <- nayi image ka naam
//    imageFallbackEmoji: "🕋",
//    imageFallbackBg: "linear-gradient(135deg, #0d1f3c, #162b52)",
//    includes: ["Item 1", "Item 2"],
//    dates: [
//      { grp: "1", departure: "DD Mon", arrival: "DD Mon", days: "16", price: "₹X,XX,000" }
//    ],
//    whatsappMsg: "WhatsApp pe jane wala message",
//    note: "Koi note ya disclaimer"
//  },
// ============================================================


// ============================================================
// YE LINE MAT CHHEDO - Technical hai
// ============================================================
if (typeof module !== 'undefined') module.exports = PACKAGES;
