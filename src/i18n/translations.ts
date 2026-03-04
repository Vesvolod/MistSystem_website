export type Locale = 'en' | 'id'

export const translations: Record<Locale, Record<string, string>> = {
  en: {
    // ─── Navigation ───
    'nav.benefits': 'Why MistSystem',
    'nav.product': 'Technology',
    'nav.calculator': 'ROI Calculator',
    'nav.cases': 'Results',
    'nav.pricing': 'Solutions',
    'nav.cta': 'Get My Cooling Plan',
    'nav.home': 'Home',
    'nav.contacts': 'Contact',

    // ─── Hero ───
    'hero.eyebrow': "Indonesia's No. 1 Outdoor Cooling System",
    'hero.title': 'Your terrace is losing money every hot afternoon.',
    'hero.titleLine2': 'MistSystem fixes that.',
    'hero.subtitle':
      'Ultra-fine mist drops the temperature by up to 10°C — instantly. No wet tables. No noisy fans. Just cool, comfortable guests who stay longer and spend more. Already trusted by 600+ venues across Indonesia.',
    'hero.ctaPrimary': 'Get My Cooling Plan',
    'hero.ctaSecondary': 'Calculate My ROI',
    'hero.meta1': '600+ venues trust MistSystem',
    'hero.meta2': 'Up to 10°C temperature drop',
    'hero.meta3': '90% lower energy vs traditional AC',
    'hero.caption':
      'System integrates invisibly into your existing structure.',

    // ─── Stats bar ───
    'stats.venues': '600+',
    'stats.venuesLabel': 'Venues Cooled',
    'stats.tempDrop': '10°C',
    'stats.tempDropLabel': 'Temperature Reduction',
    'stats.energySaving': '90%',
    'stats.energySavingLabel': 'Lower Energy Cost vs AC',
    'stats.lifespan': '10+',
    'stats.lifespanLabel': 'Years of Reliable Operation',

    // ─── Pain / Solution ───
    'pain.title': 'Right now, heat is costing you real money.',
    'pain.subtitle':
      "Every afternoon your terrace sits empty, you're paying rent on space that produces zero revenue. Your competitors with cooled terraces? They're full.",
    'pain.badLabel': 'Without MistSystem',
    'pain.badTitle': 'Lost revenue, every single day',
    'pain.bad1': 'Terrace empty from 11am to 5pm — guests refuse to sit in the heat.',
    'pain.bad2': 'Walk-ins check out the view, feel the heat, and leave for a cooled venue.',
    'pain.bad3': "Fans blow hot air and add noise. AC doesn't work outdoors.",
    'pain.bad4': 'You pay full rent, full staff — but only earn revenue in the evening.',
    'pain.goodLabel': 'With MistSystem',
    'pain.goodTitle': 'Full terrace. All day. More revenue.',
    'pain.good1': "Guests choose your terrace even at peak heat — it's 10°C cooler.",
    'pain.good2': 'Average dwell time increases. More orders per table per day.',
    'pain.good3': 'The mist creates a "wow" moment guests photograph and share online.',
    'pain.good4': 'System runs for less than IDR 15,000/day in electricity.',

    // ─── Before / After slider ───
    'beforeAfter.title': 'What your terrace feels like — before and after MistSystem.',
    'beforeAfter.subtitle':
      'Slide to compare: a hot, empty terrace vs a cool, packed venue guests never want to leave.',
    'beforeAfter.beforeLabel': 'Before MistSystem',
    'beforeAfter.afterLabel': 'With MistSystem',
    'beforeAfter.beforeAlt': 'Hot terrace with guests uncomfortable and few people seated.',
    'beforeAfter.afterAlt': 'Cool terrace with MistSystem, full of happy guests.',
    'beforeAfter.sliderLabel': 'Slide to compare your terrace before and after MistSystem.',

    // ─── Benefits ───
    'benefits.title': 'Not just cooling. A business advantage.',
    'benefits.subtitle':
      'MistSystem is the only outdoor cooling technology that combines instant comfort, premium aesthetics, and real ROI for restaurants, hotels and beach clubs.',
    'benefit1.title': 'Unlock daytime revenue',
    'benefit1.text':
      'Your terrace becomes usable all day — not just in the evening. That means 30–40% more covers from the same space.',
    'benefit2.title': 'Guests stay 40 min longer',
    'benefit2.text':
      "Comfortable guests don't rush. They order another drink, another course, another round. Your average ticket grows.",
    'benefit3.title': 'Premium atmosphere guests share',
    'benefit3.text':
      'Ultra-fine mist is invisible to cameras but felt on skin. Guests feel the luxury, capture the vibe, and post it. Free marketing.',
    'benefit4.title': 'Runs for IDR 15K/day',
    'benefit4.text':
      'The system uses 90% less energy than AC. A full day of mist cooling costs less than a single iced coffee.',

    // ─── Product / Technology ───
    'product.title': 'Engineered for Indonesian heat.',
    'product.subtitle':
      'High-pressure mist technology creates droplets so fine (10–20 µm) they evaporate before touching any surface. The result: instant cooling without wetness.',
    'product.f1': '0.1–0.2mm droplets that evaporate on contact with air.',
    'product.f2': 'Integrates into pergolas, ceilings, facades — completely invisible.',
    'product.f3': 'Smart controls: auto on/off by temperature, timer, or app.',
    'product.f4': 'Whisper-quiet operation. Guests hear music, not machines.',
    'product.f5': 'Stainless steel + brass components. Built for tropical humidity.',

    // ─── Installation Map ───
    'install.title': 'How the system installs on your terrace.',
    'install.subtitle':
      'A slim stainless-steel line follows your layout, with the pump and filter hidden out of sight. Guests feel the cooling, not the hardware.',
    'install.s1': 'Mist line runs along the perimeter of your terrace, pergola, or facade.',
    'install.s2': 'Quick-connect nozzles every 60–80 cm create an even cooling cloud over the seating area.',
    'install.s3': 'High-pressure pump, filter, and water connection stay in the back-of-house area.',

    // ─── Calculator ───
    'calculator.title': 'See your ROI in 10 seconds.',
    'calculator.subtitleSimple':
      "Enter your terrace size and average guest spend. We'll show you the system cost, daily revenue boost, and exactly how fast it pays for itself.",
    'calculator.areaLabel': 'Terrace area',
    'calculator.areaHint': '10–600 m²',
    'calculator.avgCheckShort': 'Average guest spend (IDR)',
    'calculator.infographic.model': 'Your system',
    'calculator.infographic.systemCost': 'One-time investment',
    'calculator.infographic.revenueDay': 'Extra revenue per day',
    'calculator.infographic.extraGuests': '+{n} guests/day from cooled terrace',
    'calculator.infographic.electricityDay': 'Daily electricity cost',
    'calculator.infographic.netProfit': 'Est. daily net profit',
    'calculator.infographic.profitNote': 'After 30% margin, 75% utilization, minus electricity',
    'calculator.infographic.payback': 'Estimated payback period',
    'calculator.paybackMonths': 'months',
    'calculator.assumptionNote': 'Conservative estimate: 30% profit margin, 75% seat utilization, 8h/day. Real results depend on your venue.',
    'calculator.ctaAfter': 'Get a detailed proposal for my venue',

    // ─── How it works ───
    'how.title': 'From first call to cool terrace — in days, not months.',
    'how.subtitle':
      'One team handles everything: survey, design, install, and support. No subcontractors. No surprises.',
    'how.step1.title': 'Free site survey',
    'how.step1.text': 'We visit your venue, measure the space, assess wind and sun exposure, and understand your peak hours.',
    'how.step2.title': 'Custom system design',
    'how.step2.text': 'Our engineers design the nozzle layout, pump capacity, and piping route. You approve the plan before anything starts.',
    'how.step3.title': 'Professional installation',
    'how.step3.text': 'We install around your schedule — no need to close. Most venues are up and running within 1–2 days.',
    'how.step4.title': 'Ongoing support',
    'how.step4.text': "Seasonal maintenance, nozzle cleaning, and system checks. Warranty included. We're one WhatsApp away.",

    // ─── Social proof ───
    'social.title': 'Venues that switched to MistSystem — and never looked back.',
    'social.subtitle':
      'Real results from real businesses across Bali, Jakarta, and beyond.',
    'social.case1.label': 'Restaurant · Bali',
    'social.case1.title': '"Terrace revenue up 35% in the first month."',
    'social.case1.text':
      'After installing MistSystem, our outdoor seating became the preferred choice — even at noon. Guests actively ask for terrace tables now. The system paid for itself in under 3 months.',
    'social.case1.author': 'Michael Tan, Restaurant Owner',
    'social.case2.label': 'Beach Club · Bali',
    'social.case2.title': '"Guests stay 45 minutes longer on average."',
    'social.case2.text':
      "We installed mist lines around the daybed area and pool bar. The atmosphere is incredible — guests feel the cool breeze, take photos of the mist, and don't want to leave.",
    'social.case2.author': 'Laura Widjaja, Events Director',
    'social.case3.label': 'Hotel · Jakarta',
    'social.case3.title': '"Our rooftop bar went from dead to fully booked."',
    'social.case3.text':
      "The rooftop was unusable during the day. MistSystem dropped the temperature enough that we now serve lunch up there. It's become our highest-revenue F&B outlet.",
    'social.case3.author': "James O'Connor, General Manager",

    // ─── Pricing ───
    'pricing.title': 'A system for every venue size.',
    'pricing.subtitle':
      'All packages include full equipment, professional installation, and warranty. Prices start from IDR 12.9M.',
    'pricing.card1.label': 'Small venues',
    'pricing.card1.title': '10–65 m²',
    'pricing.card1.text': 'Cafés, small terraces, pool areas. Compact pump, 20 nozzles.',
    'pricing.card1.li1': 'MistPro 100 system',
    'pricing.card1.li2': 'From IDR 12.9M',
    'pricing.card1.li3': 'Free installation',
    'pricing.card1.note': '',
    'pricing.card1.cta': 'Get a quote',
    'pricing.card2.label': 'Most popular',
    'pricing.card2.title': '50–300 m²',
    'pricing.card2.text': 'Restaurants, hotels, beach clubs. Modular design for complex layouts.',
    'pricing.card2.li1': 'MistPro 300–400 systems',
    'pricing.card2.li2': 'From IDR 17.9M',
    'pricing.card2.li3': 'Smart app control included',
    'pricing.card2.note': '',
    'pricing.card2.cta': 'Get a custom quote',
    'pricing.card3.label': 'Large venues',
    'pricing.card3.title': '200–600 m²',
    'pricing.card3.text': 'Large terraces, event spaces, resorts. High-capacity industrial pumps.',
    'pricing.card3.li1': 'MistPro 600–700 systems',
    'pricing.card3.li2': 'From IDR 22.9M',
    'pricing.card3.li3': 'Multi-zone automation',
    'pricing.card3.note': '',
    'pricing.card3.cta': 'Request site survey',

    // ─── Lead form ───
    'lead.title': 'Get your free cooling plan.',
    'lead.subtitle':
      "Tell us about your space. We'll recommend the right system, calculate your ROI, and send a clear proposal — within 24 hours.",
    'lead.contactLabel': 'Prefer WhatsApp?',
    'lead.nameLabel': 'Name',
    'lead.phoneLabel': 'WhatsApp number',
    'lead.contextLabel': 'Venue type',
    'lead.commentLabel': 'Anything else',
    'lead.namePlaceholder': 'Your name',
    'lead.phonePlaceholder': '+62 8xx xxxx xxxx',
    'lead.contextPlaceholder': 'Select your venue type',
    'lead.contextHome': 'Private villa / home',
    'lead.contextHoreca': 'Restaurant / café / hotel',
    'lead.contextBusiness': 'Beach club / event space',
    'lead.contextOther': 'Other',
    'lead.commentPlaceholder': 'Terrace size, number of seats, anything useful…',
    'lead.submit': 'Get My Cooling Plan',
    'lead.submitting': 'Sending…',
    'lead.policy': "We'll respond within 24 hours. No spam, ever.",
    'lead.success': "Done! We'll WhatsApp you within 24 hours with your cooling plan.",
    'lead.error': 'Please fill in your name and WhatsApp number.',

    // ─── WhatsApp ───
    'whatsapp.cta': 'Chat on WhatsApp',

    // ─── Footer ───
    'footer.copy': "Indonesia's No. 1 outdoor mist cooling system for restaurants, hotels, and beach clubs.",
    'footer.rights': 'MistSystem. All rights reserved.',
  },

  id: {
    // ─── Navigasi ───
    'nav.benefits': 'Keunggulan',
    'nav.product': 'Teknologi',
    'nav.calculator': 'Kalkulator ROI',
    'nav.cases': 'Hasil Nyata',
    'nav.pricing': 'Solusi',
    'nav.cta': 'Dapatkan Cooling Plan',
    'nav.home': 'Beranda',
    'nav.contacts': 'Kontak',

    // ─── Hero ───
    'hero.eyebrow': 'Sistem Pendingin Outdoor No. 1 di Indonesia',
    'hero.title': 'Teras Anda kehilangan uang setiap siang yang panas.',
    'hero.titleLine2': 'MistSystem solusinya.',
    'hero.subtitle':
      'Kabut ultra-halus menurunkan suhu hingga 10°C — seketika. Meja tidak basah. Tanpa kipas berisik. Tamu tetap nyaman, betah lebih lama, dan belanja lebih banyak. Sudah dipercaya 600+ venue di seluruh Indonesia.',
    'hero.ctaPrimary': 'Dapatkan Cooling Plan Saya',
    'hero.ctaSecondary': 'Hitung ROI Saya',
    'hero.meta1': '600+ venue mempercayai MistSystem',
    'hero.meta2': 'Penurunan suhu hingga 10°C',
    'hero.meta3': '90% lebih hemat energi vs AC',
    'hero.caption': 'Sistem terintegrasi tidak terlihat ke struktur yang ada.',

    // ─── Stats bar ───
    'stats.venues': '600+',
    'stats.venuesLabel': 'Venue Didinginkan',
    'stats.tempDrop': '10°C',
    'stats.tempDropLabel': 'Penurunan Suhu',
    'stats.energySaving': '90%',
    'stats.energySavingLabel': 'Lebih Hemat Energi vs AC',
    'stats.lifespan': '10+',
    'stats.lifespanLabel': 'Tahun Operasi Handal',

    // ─── Pain / Solution ───
    'pain.title': 'Saat ini, panas sedang merugikan bisnis Anda.',
    'pain.subtitle':
      'Setiap siang teras Anda kosong, Anda membayar sewa untuk ruang yang tidak menghasilkan apa-apa. Kompetitor Anda yang punya teras sejuk? Mereka penuh.',
    'pain.badLabel': 'Tanpa MistSystem',
    'pain.badTitle': 'Kehilangan pendapatan, setiap hari',
    'pain.bad1': 'Teras kosong jam 11 pagi–5 sore — tamu menolak duduk di bawah terik.',
    'pain.bad2': 'Walk-in lihat pemandangan, rasakan panas, dan pergi ke venue yang lebih sejuk.',
    'pain.bad3': 'Kipas hanya meniup udara panas dan menambah kebisingan. AC tidak berfungsi di luar.',
    'pain.bad4': 'Anda bayar sewa penuh, staf penuh — tapi hanya dapat pendapatan malam hari.',
    'pain.goodLabel': 'Dengan MistSystem',
    'pain.goodTitle': 'Teras penuh. Sepanjang hari. Lebih banyak pendapatan.',
    'pain.good1': 'Tamu memilih teras Anda bahkan di puncak panas — 10°C lebih sejuk.',
    'pain.good2': 'Waktu kunjungan lebih lama. Lebih banyak pesanan per meja per hari.',
    'pain.good3': 'Kabut menciptakan momen "wow" yang difoto dan dishare tamu secara online.',
    'pain.good4': 'Sistem berjalan dengan biaya listrik kurang dari Rp 15.000/hari.',

    // ─── Before / After slider ───
    'beforeAfter.title': 'Beginilah terasa teras Anda — sebelum dan sesudah MistSystem.',
    'beforeAfter.subtitle':
      'Geser untuk membandingkan: teras panas dan kosong vs teras sejuk yang penuh tamu.',
    'beforeAfter.beforeLabel': 'Sebelum MistSystem',
    'beforeAfter.afterLabel': 'Dengan MistSystem',
    'beforeAfter.beforeAlt': 'Teras panas dengan sedikit tamu yang terlihat tidak nyaman.',
    'beforeAfter.afterAlt': 'Teras sejuk dengan MistSystem, penuh tamu yang menikmati suasana.',
    'beforeAfter.sliderLabel': 'Geser untuk membandingkan teras Anda sebelum dan sesudah MistSystem.',

    // ─── Manfaat ───
    'benefits.title': 'Bukan sekadar pendingin. Keunggulan bisnis.',
    'benefits.subtitle':
      'MistSystem adalah satu-satunya teknologi pendingin outdoor yang menggabungkan kenyamanan instan, estetika premium, dan ROI nyata untuk restoran, hotel, dan beach club.',
    'benefit1.title': 'Buka pendapatan siang hari',
    'benefit1.text':
      'Teras Anda bisa digunakan sepanjang hari — bukan hanya malam. Artinya 30–40% lebih banyak tamu dari ruang yang sama.',
    'benefit2.title': 'Tamu betah 40 menit lebih lama',
    'benefit2.text':
      'Tamu yang nyaman tidak terburu-buru. Mereka pesan minuman lagi, hidangan lagi, ronde lagi. Rata-rata tagihan Anda naik.',
    'benefit3.title': 'Suasana premium yang di-share tamu',
    'benefit3.text':
      'Kabut ultra-halus tidak terlihat kamera tapi terasa di kulit. Tamu merasakan kemewahan, rekam suasana, dan posting. Marketing gratis.',
    'benefit4.title': 'Biaya Rp 15rb/hari',
    'benefit4.text':
      'Sistem ini 90% lebih hemat energi dari AC. Satu hari penuh pendingin kabut biayanya kurang dari satu es kopi.',

    // ─── Produk / Teknologi ───
    'product.title': 'Dirancang untuk panas Indonesia.',
    'product.subtitle':
      'Teknologi kabut tekanan tinggi menciptakan tetesan sangat halus (10–20 µm) yang menguap sebelum menyentuh permukaan apapun. Hasilnya: pendinginan instan tanpa basah.',
    'product.f1': 'Tetesan 0,1–0,2mm yang menguap saat kontak dengan udara.',
    'product.f2': 'Terintegrasi ke pergola, plafon, fasad — sepenuhnya tidak terlihat.',
    'product.f3': 'Smart control: otomatis on/off berdasarkan suhu, timer, atau app.',
    'product.f4': 'Operasi super senyap. Tamu dengar musik, bukan mesin.',
    'product.f5': 'Komponen stainless steel + kuningan. Dibuat untuk kelembaban tropis.',

    // ─── Peta Instalasi ───
    'install.title': 'Begini cara sistem dipasang di teras Anda.',
    'install.subtitle':
      'Pipa stainless tipis mengikuti layout ruang Anda, dengan pompa dan filter tersembunyi. Tamu merasakan sejuknya, bukan melihat peralatannya.',
    'install.s1': 'Pipa kabut berjalan di sepanjang perimeter teras, pergola, atau fasad.',
    'install.s2': 'Nozel quick-connect setiap 60–80 cm menciptakan kabut merata ke area duduk, bukan ke meja.',
    'install.s3': 'Pompa tekanan tinggi, filter, dan sambungan air ditempatkan di area service / back-of-house.',

    // ─── Kalkulator ───
    'calculator.title': 'Lihat ROI Anda dalam 10 detik.',
    'calculator.subtitleSimple':
      'Masukkan ukuran teras dan rata-rata belanja tamu. Kami tunjukkan biaya sistem, tambahan pendapatan harian, dan berapa cepat sistem ini membayar dirinya sendiri.',
    'calculator.areaLabel': 'Luas teras',
    'calculator.areaHint': '10–600 m²',
    'calculator.avgCheckShort': 'Rata-rata belanja tamu (IDR)',
    'calculator.infographic.model': 'Sistem Anda',
    'calculator.infographic.systemCost': 'Investasi satu kali',
    'calculator.infographic.revenueDay': 'Tambahan pendapatan per hari',
    'calculator.infographic.extraGuests': '+{n} tamu/hari dari teras yang sejuk',
    'calculator.infographic.electricityDay': 'Biaya listrik harian',
    'calculator.infographic.netProfit': 'Perkiraan laba bersih/hari',
    'calculator.infographic.profitNote': 'Setelah margin 30%, utilisasi 75%, minus listrik',
    'calculator.infographic.payback': 'Perkiraan periode balik modal',
    'calculator.paybackMonths': 'bulan',
    'calculator.assumptionNote': 'Estimasi konservatif: margin laba 30%, utilisasi kursi 75%, 8 jam/hari. Hasil nyata tergantung venue Anda.',
    'calculator.ctaAfter': 'Dapatkan proposal detail untuk venue saya',

    // ─── Cara Kerja ───
    'how.title': 'Dari telepon pertama ke teras sejuk — dalam hitungan hari.',
    'how.subtitle':
      'Satu tim menangani semua: survei, desain, instalasi, dan dukungan. Tanpa subkontraktor. Tanpa kejutan.',
    'how.step1.title': 'Survei lokasi gratis',
    'how.step1.text': 'Kami kunjungi venue Anda, ukur ruang, cek paparan angin dan matahari, dan pahami jam sibuk Anda.',
    'how.step2.title': 'Desain sistem kustom',
    'how.step2.text': 'Engineer kami desain layout nozel, kapasitas pompa, dan jalur pipa. Anda approve rencana sebelum apapun dimulai.',
    'how.step3.title': 'Instalasi profesional',
    'how.step3.text': 'Kami pasang sesuai jadwal Anda — tidak perlu tutup. Kebanyakan venue beroperasi dalam 1–2 hari.',
    'how.step4.title': 'Dukungan berkelanjutan',
    'how.step4.text': 'Perawatan musiman, pembersihan nozel, dan pengecekan sistem. Garansi included. Kami satu WhatsApp away.',

    // ─── Bukti Sosial ───
    'social.title': 'Venue yang beralih ke MistSystem — dan tidak pernah kembali.',
    'social.subtitle': 'Hasil nyata dari bisnis nyata di Bali, Jakarta, dan sekitarnya.',
    'social.case1.label': 'Restoran · Bali',
    'social.case1.title': '"Pendapatan teras naik 35% di bulan pertama."',
    'social.case1.text':
      'Setelah pasang MistSystem, outdoor seating jadi pilihan utama — bahkan saat siang. Tamu secara aktif minta meja teras. Sistem balik modal kurang dari 3 bulan.',
    'social.case1.author': 'Michael Tan, Pemilik Restoran',
    'social.case2.label': 'Beach Club · Bali',
    'social.case2.title': '"Tamu betah rata-rata 45 menit lebih lama."',
    'social.case2.text':
      'Kami pasang garis kabut di sekitar area daybed dan pool bar. Suasananya luar biasa — tamu merasakan angin sejuk, foto kabut, dan tidak mau pulang.',
    'social.case2.author': 'Laura Widjaja, Events Director',
    'social.case3.label': 'Hotel · Jakarta',
    'social.case3.title': '"Rooftop bar kami berubah dari sepi jadi fully booked."',
    'social.case3.text':
      'Rooftop tidak bisa dipakai siang hari. MistSystem menurunkan suhu cukup sehingga kami sekarang serve lunch di atas. Sekarang ini outlet F&B kami dengan revenue tertinggi.',
    'social.case3.author': "James O'Connor, General Manager",

    // ─── Harga ───
    'pricing.title': 'Sistem untuk setiap ukuran venue.',
    'pricing.subtitle':
      'Semua paket termasuk peralatan lengkap, instalasi profesional, dan garansi. Harga mulai dari Rp 12,9 juta.',
    'pricing.card1.label': 'Venue kecil',
    'pricing.card1.title': '10–65 m²',
    'pricing.card1.text': 'Kafe, teras kecil, area kolam. Pompa kompak, 20 nozel.',
    'pricing.card1.li1': 'Sistem MistPro 100',
    'pricing.card1.li2': 'Mulai Rp 12,9 juta',
    'pricing.card1.li3': 'Instalasi gratis',
    'pricing.card1.note': '',
    'pricing.card1.cta': 'Minta penawaran',
    'pricing.card2.label': 'Paling populer',
    'pricing.card2.title': '50–300 m²',
    'pricing.card2.text': 'Restoran, hotel, beach club. Desain modular untuk layout kompleks.',
    'pricing.card2.li1': 'Sistem MistPro 300–400',
    'pricing.card2.li2': 'Mulai Rp 17,9 juta',
    'pricing.card2.li3': 'Smart app control included',
    'pricing.card2.note': '',
    'pricing.card2.cta': 'Dapatkan penawaran kustom',
    'pricing.card3.label': 'Venue besar',
    'pricing.card3.title': '200–600 m²',
    'pricing.card3.text': 'Teras besar, event space, resort. Pompa industri berkapasitas tinggi.',
    'pricing.card3.li1': 'Sistem MistPro 600–700',
    'pricing.card3.li2': 'Mulai Rp 22,9 juta',
    'pricing.card3.li3': 'Otomasi multi-zona',
    'pricing.card3.note': '',
    'pricing.card3.cta': 'Minta survei lokasi',

    // ─── Form ───
    'lead.title': 'Dapatkan cooling plan gratis Anda.',
    'lead.subtitle':
      'Ceritakan tentang ruang Anda. Kami rekomendasikan sistem yang tepat, hitung ROI, dan kirim proposal jelas — dalam 24 jam.',
    'lead.contactLabel': 'Lebih suka WhatsApp?',
    'lead.nameLabel': 'Nama',
    'lead.phoneLabel': 'Nomor WhatsApp',
    'lead.contextLabel': 'Tipe venue',
    'lead.commentLabel': 'Info tambahan',
    'lead.namePlaceholder': 'Nama Anda',
    'lead.phonePlaceholder': '+62 8xx xxxx xxxx',
    'lead.contextPlaceholder': 'Pilih tipe venue',
    'lead.contextHome': 'Villa / rumah pribadi',
    'lead.contextHoreca': 'Restoran / kafe / hotel',
    'lead.contextBusiness': 'Beach club / event space',
    'lead.contextOther': 'Lainnya',
    'lead.commentPlaceholder': 'Ukuran teras, jumlah kursi, info berguna lainnya…',
    'lead.submit': 'Dapatkan Cooling Plan Saya',
    'lead.submitting': 'Mengirim…',
    'lead.policy': 'Kami akan merespons dalam 24 jam. Tanpa spam, selamanya.',
    'lead.success': 'Terkirim! Kami akan WhatsApp Anda dalam 24 jam dengan cooling plan.',
    'lead.error': 'Mohon isi nama dan nomor WhatsApp.',

    // ─── WhatsApp ───
    'whatsapp.cta': 'Chat via WhatsApp',

    // ─── Footer ───
    'footer.copy': 'Sistem pendingin kabut outdoor No. 1 Indonesia untuk restoran, hotel, dan beach club.',
    'footer.rights': 'MistSystem. Hak cipta dilindungi.',
  },
}
