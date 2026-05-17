// ============================================================
//  FARAN TOURS & TRAVELS - PACKAGES DATA FILE
//  ============================================================
//  YE FILE EDIT KARKE PACKAGES UPDATE KARO
//  Har mahine naye packages aane par bas is file mein 
//  changes karo aur Netlify pe upload karo!
//
//  KAISE EDIT KARE:
//  1. Notepad ya any text editor mein open karo
//  2. Package ki details change karo
//  3. File save karo
//  4. Netlify pe teeno files (index, packages, is file) upload karo
// ============================================================

const PACKAGES = [

  // ============================================================
  // PACKAGE 1 - DELUXE UMRAH
  // Image change karne ke liye: image ke saamne apni image ka 
  // naam likho. Image file bhi netlify pe upload karna hoga.
  // ============================================================
  {
    id: "deluxe-umrah",
    active: true,                          // false karo to hide ho jayega
    badge: "⭐ Most Popular",
    badgeColor: "#e8b84b",
    title: "Deluxe Umrah Package",
    subtitle: "2026-27 · 1447-48 Hijri",
    route: "LKO → JED → LKO",
    days: "16 Days",
    airline: "Saudi Airlines - Direct Flight",
    price: "₹1,18,000",
    priceNote: "per person (quadruple sharing)",
    headerColor: "linear-gradient(135deg, #1a6b3a, #0f4a28)",
    
    // IMAGE: Apni pamphlet/image ka naam yahan likho
    // Example: "umrah-deluxe-2026.jpg"
    // Image file bhi website folder mein daalni hogi
    image: "Deluxe_Umrah_package.jpg",   // <-- YAHAN IMAGE FILE KA NAAM LIKHO
    imageFallbackEmoji: "🕋",
    imageFallbackBg: "linear-gradient(135deg, #1a6b3a, #0f4a28)",

    includes: [
      "Umrah Visa Included",
      "Umrah Kit Included",
      "Saudi Airlines — Direct Flight",
      "Hotel Oliyan Al Khalil, Makkah (700m from Haram)",
      "Hotel Rawda Mukhtara, Madinah (200m from Masjid)",
      "Full Board Buffet Meals (Breakfast + Lunch + Dinner)",
      "AC Bus for Makkah & Madinah Ziyarat",
      "Zam Zam Water (5 Litres)",
      "Free Laundry Service",
      "Wi-Fi & Insurance",
      "Room on Sharing Basis"
    ],

    // DEPARTURE DATES - Har mahine naye dates yahan update karo
    dates: [
      { grp: "01", departure: "05 Jul", arrival: "20 Jul", days: "16", price: "₹1,18,000" },
      { grp: "02", departure: "09 Jul", arrival: "24 Jul", days: "16", price: "₹1,18,000" },
      { grp: "03", departure: "16 Jul", arrival: "31 Jul", days: "16", price: "₹1,18,000" },
      { grp: "04", departure: "23 Jul", arrival: "07 Aug", days: "16", price: "₹1,18,000" },
      { grp: "05", departure: "02 Aug", arrival: "17 Aug", days: "16", price: "₹1,18,000" },
      { grp: "06", departure: "09 Aug", arrival: "24 Aug", days: "16", price: "₹1,18,000" },
      { grp: "07", departure: "16 Aug", arrival: "31 Aug", days: "16", price: "₹1,23,000", special: "Rabi-ul-Awwal Special" },
      { grp: "08", departure: "27 Aug", arrival: "11 Sep", days: "16", price: "₹1,18,000" },
      { grp: "09", departure: "03 Sep", arrival: "18 Sep", days: "16", price: "₹1,18,000" },
      { grp: "10", departure: "10 Sep", arrival: "25 Sep", days: "16", price: "₹1,18,000" },
    ],

    whatsappMsg: "I want to book the Deluxe Umrah Package 2026-27. Please share details.",
    note: "Prices per person on quadruple sharing basis. More dates available on request."
  },


  // ============================================================
  // PACKAGE 2 - SEMI DELUXE UMRAH
  // ============================================================
  {
    id: "semi-deluxe-umrah",
    active: true,
    badge: "Via Oman Air",
    badgeColor: "#c9963a",
    title: "Semi Deluxe Umrah Package",
    subtitle: "2026-27 · 1447-48 Hijri",
    route: "LKO → MCT → JED/MED → MCT → LKO",
    days: "16/17 Days",
    airline: "Oman Air via Muscat",
    price: "₹95,000",
    priceNote: "per person (quadruple sharing)",
    headerColor: "linear-gradient(135deg, #0d1f3c, #162b52)",

    image: "Umrah_semi_deluxe_package.jpg",   // <-- YAHAN IMAGE FILE KA NAAM LIKHO
    imageFallbackEmoji: "🕌",
    imageFallbackBg: "linear-gradient(135deg, #0d1f3c, #162b52)",

    includes: [
      "Umrah Visa Included",
      "Umrah Kit Included",
      "Oman Air via Muscat",
      "Makkah Hotel (1200-1500 Mtr from Haram)",
      "Madinah Hotel (900-1000 Mtr from Masjid)",
      "All Meals Included",
      "Shuttle Bus Service",
      "Zam Zam Water (5 Litres)",
      "Free Laundry Service",
      "Wi-Fi & Insurance",
      "Makkah & Madinah Ziyarat"
    ],

    dates: [
      { grp: "01", departure: "07 Jul", arrival: "23 Jul", days: "17", price: "₹95,000" },
      { grp: "02", departure: "07 Aug", arrival: "23 Aug", days: "17", price: "₹95,000" },
      { grp: "03", departure: "21 Aug", arrival: "05 Sep", days: "16", price: "₹1,10,000", special: "Rabi-ul-Awwal Special" },
      { grp: "04", departure: "08 Sep", arrival: "25 Sep", days: "18", price: "₹95,000" },
      { grp: "05", departure: "09 Oct", arrival: "24 Oct", days: "16", price: "₹95,000" },
    ],

    whatsappMsg: "I want to book the Semi Deluxe Umrah Package 2026-27. Please share details.",
    note: "Prices per person on quadruple sharing basis."
  },


  // ============================================================
  // PACKAGE 3 - HAJJ
  // ============================================================
  {
    id: "hajj",
    active: true,
    badge: "Sacred Journey",
    badgeColor: "#e8b84b",
    title: "Hajj Package",
    subtitle: "Complete Hajj Arrangements",
    route: "Lucknow → Jeddah / Madinah",
    days: "As per Hajj season",
    airline: "Best available airlines",
    price: "Contact for Price",
    priceNote: "Call for best rates",
    headerColor: "linear-gradient(135deg, #8B1A1A, #5c1010)",

    image: "",   // <-- YAHAN IMAGE FILE KA NAAM LIKHO
    imageFallbackEmoji: "☪️",
    imageFallbackBg: "linear-gradient(135deg, #8B1A1A, #5c1010)",

    includes: [
      "Hajj Visa Processing",
      "Return Flights from Lucknow",
      "Makkah Hotel",
      "Madinah Hotel",
      "Mina Tent Arrangement",
      "Arafat Stay",
      "All Meals Included",
      "AC Transport",
      "Guided Rituals Support",
      "Ziyarat Tours",
      "Zam Zam Water",
      "24/7 Group Support"
    ],

    dates: [],  // Hajj ke liye dates table nahi dikhega

    whatsappMsg: "I want to enquire about the Hajj Package. Please share details and pricing.",
    note: "Hajj package prices vary based on dates and accommodation. Contact us for current season details."
  }

];


// ============================================================
// NAYA PACKAGE ADD KARNA HO TO:
// Upar wale template ko copy karo aur neeche paste karo
// active: true rakho
// ============================================================


// ============================================================
// YE LINE MAT CHHEDO - Technical hai
// ============================================================
if (typeof module !== 'undefined') module.exports = PACKAGES;
