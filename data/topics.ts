
import React from 'react';
import { Topic } from '../types';
import { Zap, Activity, Wind, Heart, Bug, ShieldCheck } from 'lucide-react';

export const topics: Topic[] = [
  {
    id: 'ratsional-ovqatlanish',
    title: "Ratsional Ovqatlanish",
    description: "Sog'lom bo'lish sirlari: Tanangizni super mashinaga aylantiramiz!",
    themeColor: "orange",
    icon: React.createElement(Zap, { size: 24 }),
    hero: {
      title: "Nega mashina yurishi uchun benzin kerak-u, senga esa ovqat?",
      subtitle: "Keling, tanamiz qanday ishlashini va qaysi ovqatlar bizni haqiqiy super qahramonga aylantirishini bilib olaylik! 🦸‍♂️🍎",
      imageUrl: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=1000&q=80",
      badge: "Tabiiy Fanlar: 6-sinf"
    },
    learningContent: {
      easy: {
        title: "Tanang — Bu Super Mashina 🏎️",
        content: `
          <p class="mb-4 text-lg">Tasavvur qil, sening tanang — bu dunyodagi eng zo'r poyga mashinasi! Lekin eng zo'r mashina ham <strong>yoqilg'isiz</strong> yura olmaydi.</p>
          
          <div class="bg-orange-50 p-4 rounded-xl border border-orange-200 my-4">
            <h4 class="font-bold text-orange-800 mb-2">🚗 Mashina vs Odam 🧍</h4>
            <ul class="space-y-2">
              <li>Mashinaga <strong>benzin</strong> kerak 👉 Senga <strong>ovqat</strong> kerak.</li>
              <li>Mashina motori bor 👉 Sening <strong>yuraging va mushaklaring</strong> bor.</li>
            </ul>
          </div>

          <p class="mb-4">Agar mashinaga sifatsiz benzin quysang nima bo'ladi? U buzilib qoladi, to'g'rimi? 🏚️</p>
          <p>Sen ham faqat <strong>chips va gazli suv</strong> (yomon yoqilg'i) iste'mol qilsang, tanang "buziladi" — tez charchaysan va kasal bo'lasan. Lekin <strong>olma, yong'oq va tuxum</strong> (super yoqilg'i) yesang, sen chempion bo'lasan! 🏆</p>
        `
      },
      medium: {
        title: "Sehrli Uchlik: Oqsil, Yog' va Uglevod 🧪",
        content: `
          <p class="mb-4">Ovqat tarkibida biz ko'rmaydigan kichkina "yordamchilar" bor. Keling, ular bilan tanishamiz:</p>
          
          <div class="space-y-4">
            <div class="flex items-start gap-3 bg-blue-50 p-3 rounded-lg">
              <span class="text-2xl">🧱</span>
              <div>
                <strong>1. Oqsillar (Quruvchilar):</strong>
                <p class="text-sm">Bular tanangning g'ishtlari. Bo'ying o'sishi va mushaklaring kuchli bo'lishi uchun javobgar! <br/><em>Manba: Go'sht, tuxum, sut, loviya.</em></p>
              </div>
            </div>

            <div class="flex items-start gap-3 bg-yellow-50 p-3 rounded-lg">
              <span class="text-2xl">🔋</span>
              <div>
                <strong>2. Yog'lar (Zaxira Batareya):</strong>
                <p class="text-sm">Bu sening zaxira quvvating. Miya yaxshi ishlashi uchun juda muhim. Lekin ehtiyot bo'l, ko'pi zarar! <br/><em>Manba: Saryog', yong'oq, pista.</em></p>
              </div>
            </div>

            <div class="flex items-start gap-3 bg-green-50 p-3 rounded-lg">
              <span class="text-2xl">🚀</span>
              <div>
                <strong>3. Uglevodlar (Reaktiv Yoqilg'i):</strong>
                <p class="text-sm">Yugurish, sakrash va dars qilish uchun tezkor energiya beradi.<br/><em>Manba: Non, guruch, makaron, mevalar.</em></p>
              </div>
            </div>
            
            <p class="mt-4 text-center font-bold text-purple-600">🛡️ Vitaminlar esa sening tansoqchilaringdir! Ular kasallikni quvib yuboradi.</p>
          </div>
        `
      },
      hard: {
        title: "Tarozi va Me'yor ⚖️",
        content: `
          <p class="mb-4"><strong>Ratsional ovqatlanish</strong> — bu hamma narsani me'yorida yeyish degani. Xuddi tarozini teng ushlab turish kabi!</p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div class="bg-red-50 p-3 rounded-lg border border-red-100">
              <strong>🍭 Agar shakar ko'payib ketsa:</strong>
              <p class="text-sm mt-1">Tishlaringda <strong>Kariyes</strong> (bo'shliqlar) paydo bo'ladi va tishlar "yig'laydi". Kelajakda <strong>Qandli diabet</strong> xavfi ortadi.</p>
            </div>
            <div class="bg-yellow-50 p-3 rounded-lg border border-yellow-100">
              <strong>🍔 Agar yog' ko'payib ketsa:</strong>
              <p class="text-sm mt-1">Yurak qiynaladi va <strong>Ortiqcha vazn</strong> paydo bo'ladi. Bu xuddi ryukzakka keraksiz toshlarni solib yurishga o'xshaydi — juda og'ir!</p>
            </div>
          </div>

          <div class="bg-blue-100 p-4 rounded-xl text-center">
            <h4 class="font-bold text-blue-800">💧 Suv — Hayot Manbai</h4>
            <p class="text-blue-900 text-sm">Kuniga <strong>6-8 stakan</strong> suv ichishni unutmang! Suv tanadagi barcha "axlatlarni" yuvib tashlaydi.</p>
          </div>
        `
      }
    },
    flashcards: [
      { id: 1, term: "Ratsional", definition: "Oqilona va to'g'ri o'lchangan ovqatlanish.", icon: "🧠" },
      { id: 2, term: "Oqsil", definition: "Bo'y o'stirish uchun kerak bo'lgan 'qurilish materiali' (Go'sht, tuxum).", icon: "🧱" },
      { id: 3, term: "Vitamin", definition: "Kasalliklardan himoya qiluvchi tansoqchilar.", icon: "🛡️" },
      { id: 4, term: "Kaloriya", definition: "Ovqat ichidagi energiya miqdori.", icon: "⚡" }
    ],
    quiz: [
      { id: 1, question: "\"Ratsional\" so'zining ma'nosi nima?", options: ["Tezkor", "Oqilona", "Mazali", "Qimmat"], correctAnswer: 1 },
      { id: 2, question: "Qaysi mahsulotlar \"Oqsillar\"ga (qurilish materialiga) boy?", options: ["Non va makaron", "Olma va sabzi", "Go'sht, tuxum va sut", "Konfet va shokolad"], correctAnswer: 2 },
      { id: 3, question: "Uglevodlar tanamizga nima beradi?", options: ["Tezkor energiya", "Ortiqcha vazn", "Faqat kasallik", "Hech narsa"], correctAnswer: 0 },
      { id: 4, question: "Kuniga necha stakan suv ichish tavsiya etiladi?", options: ["1-2 stakan", "3-4 stakan", "6-8 stakan", "Faqat chanqaganda"], correctAnswer: 2 },
      { id: 5, question: "Vitaminlarning asosiy vazifasi nima?", options: ["Semirtirish", "Kasalliklardan himoya qilish", "Uyquni keltirish", "Chanqoqni qondirish"], correctAnswer: 1 },
      { id: 6, question: "Agar shirinlik haddan tashqari ko'p yeyilsa, tishlarda nima paydo bo'ladi?", options: ["Kariyes", "Gripp", "Kuch", "Yangi tishlar"], correctAnswer: 0 },
      { id: 7, question: "Zaxira energiya manbai nima?", options: ["Suv", "Yog'lar", "Vitaminlar", "Tuz"], correctAnswer: 1 },
      { id: 8, question: "Qaysi ovqat \"Super mashina\" (tana) uchun yomon yoqilg'i hisoblanadi?", options: ["Olma", "Yong'oq", "Chips va gazli suv", "Tuxum"], correctAnswer: 2 },
      { id: 9, question: "Qandli diabet kasalligiga nima sabab bo'lishi mumkin?", options: ["Ko'p suv ichish", "Ko'p shakar iste'mol qilish", "Ko'p yugurish", "Ko'p kitob o'qish"], correctAnswer: 1 },
      { id: 10, question: "Ortiqcha vazn nimadan paydo bo'ladi?", options: ["Ko'p harakat qilishdan", "Me'yoridan ortiq yog'li ovqat va kam harakatdan", "Suv ichishdan", "Vitamin yeyishdan"], correctAnswer: 1 }
    ],
    resources: [
      { id: 1, type: 'video', title: "Video: Vitaminlar sarguzashti", thumbnailUrl: "https://img.youtube.com/vi/5t1QkLq_Xp0/hqdefault.jpg", description: "Bolajonlar uchun foydali multfilm." },
      { id: 2, type: 'article', title: "Foydali maslahatlar", description: "Sog'lom turmush tarzi bo'yicha qo'llanma." }
    ]
  },
  {
    id: 'ovqat-hazm-qilish',
    title: "Ovqat Hazm Qilish Sistemasi",
    description: "Sendvichning sarguzashtlari: Oshqozon va ichaklar qanday ishlaydi?",
    themeColor: "blue",
    icon: React.createElement(Activity, { size: 24 }),
    hero: {
      title: "Ovqat Hazm Qilish Sistemasi",
      subtitle: "Sen yegan mazali sendvich qayerga g'oyib bo'ladi? Keling, tanamiz ichidagi sirli zavodga sayohat qilamiz! 🎢",
      imageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1000&q=80", 
      badge: "2-Mavzu"
    },
    learningContent: {
      easy: {
        title: "Somsa Sayohati 🥟",
        content: `
          <p class="mb-4">Tasavvur qil, sen yegan <strong>somsa</strong> uzoq va qiziqarli sayohatga chiqdi. Bu sayohat xuddi attraksion parkiga o'xshaydi!</p>
          
          <ul class="space-y-3 mt-4">
            <li class="bg-white p-3 rounded-lg shadow-sm border-l-4 border-red-400">
              <strong>1. Kirish Darvozasi (Og'iz):</strong> Tishlar somsani "g'arch-g'urch" maydalaydi (tegirmon), til esa uni ho'llaydi.
            </li>
            <li class="bg-white p-3 rounded-lg shadow-sm border-l-4 border-orange-400">
              <strong>2. Sirpanchiq (Qizilo'ngach):</strong> Ovqat uzun truba orqali pastga, oshqozonga sirpanib tushadi. 🎢
            </li>
            <li class="bg-white p-3 rounded-lg shadow-sm border-l-4 border-yellow-400">
              <strong>3. Kislotali Hovuz (Oshqozon):</strong> Bu yerda ovqat xuddi "mikser" kabi aylanadi va bo'tqaga aylanadi. 🥣
            </li>
            <li class="bg-white p-3 rounded-lg shadow-sm border-l-4 border-green-400">
              <strong>4. Uzun Tunnel (Ichaklar):</strong> Bu yerda tanang ovqatdan kerakli vitaminlarni so'rib oladi.
            </li>
          </ul>
        `
      },
      medium: {
        title: "Ko'rinmas Qaychilar ✂️",
        content: `
          <p class="mb-4 text-lg">Qanday qilib qattiq olma qonga singib ketadi? Sir — <strong>Hazm shiralari</strong>da!</p>
          <p class="mb-4">Sening oshqozoning va ichaklaringda maxsus suyuqliklar (fermentlar) bor. Ular xuddi <strong>ko'rinmas qaychilar</strong> kabi katta ovqat bo'laklarini ko'zga ko'rinmas zarrachalarga maydalab tashlaydi.</p>
          
          <div class="grid grid-cols-2 gap-4 my-4">
            <div class="bg-blue-50 p-3 rounded-lg text-center">
              <span class="text-3xl">🌪️</span>
              <h5 class="font-bold text-blue-800">Ingichka Ichak</h5>
              <p class="text-xs text-blue-600">Eng muhim qism! Foydali moddalar shu yerda qonga o'tadi.</p>
            </div>
            <div class="bg-purple-50 p-3 rounded-lg text-center">
              <span class="text-3xl">🗑️</span>
              <h5 class="font-bold text-purple-800">Yo'g'on Ichak</h5>
              <p class="text-xs text-purple-600">Suvni tejab qoladi va keraksiz chiqindini chiqarib yuboradi.</p>
            </div>
          </div>
        `
      },
      hard: {
        title: "Vorsinkalar va Hayvonlar 🔬",
        content: `
          <p class="mb-4"><strong>Absorbsiya (So'rish):</strong> Ingichka ichakning ichki devori silliq emas. U yerda millionlab kichkina tukchalar bor — ular <strong>Vorsinkalar</strong> deb ataladi.</p>
          <p class="mb-4">Vorsinkalar xuddi momiq sochiq suvni shimib olgani kabi, oziq moddalarni shimib olib, qonga uzatadi. Qon esa bu energiyani butun tanaga tarqatadi! 🩸⚡</p>
          
          <div class="bg-gray-100 p-4 rounded-xl mt-4">
            <h4 class="font-bold text-gray-800">🐮 Qiziqarli Fakt:</h4>
            <p class="text-sm text-gray-700">Sigirning oshqozoni odamnikidan farq qiladi. Ular o't-o'lan yeyishi uchun 4 ta bo'lmali oshqozonga ega. Odamlar esa o'tni hazm qila olmaydi!</p>
          </div>
        `
      }
    },
    flashcards: [
      { id: 1, term: "Oshqozon", definition: "Ovqatni 'mikser' kabi aralashtirib, bo'tqa qiladigan xaltasimon organ.", icon: "🥣" },
      { id: 2, term: "Qizilo'ngach", definition: "Og'izdan oshqozonga ovqat eltuvchi 'lift' (naycha).", icon: "📏" },
      { id: 3, term: "Hazm shirasi", definition: "Ovqatni erituvchi maxsus suyuqlik (ko'rinmas qaychi).", icon: "🧪" },
      { id: 4, term: "Vorsinkalar", definition: "Ichakdagi foydali moddalarni shimib oluvchi kichkina tukchalar.", icon: "🧽" }
    ],
    quiz: [
      { id: 1, question: "Hazm qilish qayerdan boshlanadi?", options: ["Oshqozon", "Og'iz bo'shlig'i", "Ichak", "Qizilo'ngach"], correctAnswer: 1 },
      { id: 2, question: "Tishlarning vazifasi nima?", options: ["Ovqatni yutish", "Ovqatni maydalash", "Ovqatni eritish", "Ta'm bilish"], correctAnswer: 1 },
      { id: 3, question: "Qizilo'ngach qayerga olib boradi?", options: ["Yurakka", "O'pkaga", "Oshqozonga", "Miyaga"], correctAnswer: 2 },
      { id: 4, question: "Oshqozonda ovqat nima bilan aralashadi?", options: ["Suv bilan", "Havo bilan", "Kislota va hazm shiralari bilan", "Qon bilan"], correctAnswer: 2 },
      { id: 5, question: "Foydali moddalar qayerda qonga so'riladi?", options: ["Ingichka ichak", "Qizilo'ngach", "Tishlar", "Oshqozon"], correctAnswer: 0 },
      { id: 6, question: "Yo'g'on ichakning asosiy vazifasi nima?", options: ["Ovqatni maydalash", "Suvni so'rib olish", "Vitamin yasash", "Qon tozalash"], correctAnswer: 1 },
      { id: 7, question: "Vorsinkalar nima?", options: ["Zararli bakteriyalar", "Ichakdagi so'ruvchi tukchalar", "Oshqozon devori", "Tish turlari"], correctAnswer: 1 },
      { id: 8, question: "Ovqatni eritishga yordam beradigan suyuqlik nima deb ataladi?", options: ["Suv", "Hazm shirasi (ferment)", "Sut", "Yog'"], correctAnswer: 1 },
      { id: 9, question: "Hazm bo'lmagan qoldiqlar qayerga ketadi?", options: ["Qonga", "Miyaga", "Tashqariga chiqariladi", "Oshqozonda qoladi"], correctAnswer: 2 },
      { id: 10, question: "Hazm qilish organlarining to'g'ri ketma-ketligi qaysi?", options: ["Oshqozon -> Og'iz -> Ichak", "Og'iz -> Qizilo'ngach -> Oshqozon -> Ichaklar", "Ichak -> Oshqozon -> Og'iz", "Qizilo'ngach -> Og'iz -> Ichak"], correctAnswer: 1 }
    ],
    resources: [
      { id: 1, type: 'video', title: "Video: Sehrli Maktab Avtobusi (Hazm qilish)", thumbnailUrl: "https://img.youtube.com/vi/VwrXyP89b_k/hqdefault.jpg", description: "Ichaklar bo'ylab qiziqarli sayohat." },
      { id: 2, type: 'article', title: "Maqola: Nega qornimiz ochadi?", description: "Oshqozon sirlari haqida qisqa hikoya." }
    ]
  },
  {
    id: 'nafas-sistemasi',
    title: "Nafas Sistemasi",
    description: "Ko'rinmas havo qanday qilib bizga hayot bag'ishlaydi?",
    themeColor: "teal",
    icon: React.createElement(Wind, { size: 24 }),
    hero: {
      title: "Ko'rinmas Kuch: Havo",
      subtitle: "Nega burnimizda tuklar bor va o'pkalarimiz xuddi sharga o'xshaydi? Keling, nafas olish sirlarini ochamiz! 🌬️🎈",
      imageUrl: "https://images.unsplash.com/photo-1594803964951-240b2f152d56?auto=format&fit=crop&w=1000&q=80",
      badge: "3-Mavzu"
    },
    learningContent: {
      easy: {
        title: "Havo Sharlari 🎈",
        content: `
          <p class="mb-4">Sening ko'krak qafasingda ikkita katta, yumshoq "shar" borligini bilasanmi? Ular — <strong>O'pkalar</strong>dir!</p>
          <p class="mb-4">Nafas olganingda bu sharlar havo bilan to'lib, kattalashadi. Nafas chiqarganingda esa kichrayadi. Xuddi bayramdagi pufakchalar kabi! 🎉</p>
          
          <div class="bg-teal-50 p-4 rounded-xl border border-teal-200 my-4">
            <h4 class="font-bold text-teal-800 mb-2">🚪 Kirish Darvozasi</h4>
            <p>Havo tanaga asosan <strong>Burun</strong> orqali kiradi. Burun — bu aqlli darvozabon! U sovuq havoni isitadi va changlarni ushlab qoladi.</p>
          </div>
        `
      },
      medium: {
        title: "Havo Yo'llari va Nasos 🛣️",
        content: `
          <p class="mb-4">Havo burundan o'tgach, uzun trubka — <strong>Traxeya</strong> (kekirdak) orqali pastga tushadi. Keyin u ikki tarafga bo'linib, o'pkalarga kiradi.</p>
          
          <div class="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border-l-4 border-teal-500">
            <span class="text-3xl">🦾</span>
            <div>
              <strong class="text-teal-900">Diafragma nima?</strong>
              <p class="text-sm">O'pkalaringning tagida <strong>Diafragma</strong> degan katta mushak bor. U pastga tushganda, o'pkaga havo "so'rib" olinadi (Nafas olish). U yuqoriga ko'tarilganda esa havoni itarib chiqaradi (Nafas chiqarish).</p>
            </div>
          </div>
        `
      },
      hard: {
        title: "Gazlar Almashinuvi: Uzum Shodasi 🍇",
        content: `
          <p class="mb-4 text-lg">O'pkaning ichida nima bor? U yerda millionlab mayda pufakchalar — <strong>Alveolalar</strong> bor. Ular xuddi uzum shodasiga o'xshaydi!</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div class="bg-green-50 p-3 rounded-lg border border-green-200">
              <h5 class="font-bold text-green-800">📥 Kislorod Kirishi</h5>
              <p class="text-sm">Biz nafas olganda Alveolalar kislorodni ushlab, uni darhol qonga o'tkazadi.</p>
            </div>
            <div class="bg-gray-100 p-3 rounded-lg border border-gray-300">
              <h5 class="font-bold text-gray-700">📤 Chiqindi Gaz</h5>
              <p class="text-sm">Tanamizdagi keraksiz gaz (Karbonat angidrid) qondan alveolaga o'tadi va biz uni nafas bilan chiqarib yuboramiz.</p>
            </div>
          </div>
        `
      }
    },
    flashcards: [
      { id: 1, term: "Traxeya", definition: "Havo o'tadigan asosiy naycha (kekirdak).", icon: "🛣️" },
      { id: 2, term: "O'pka", definition: "Havo bilan to'luvchi asosiy nafas organi.", icon: "🫁" },
      { id: 3, term: "Alveola", definition: "O'pkadagi mayda pufakchalar (gaz almashinuvchi joy).", icon: "🍇" },
      { id: 4, term: "Diafragma", definition: "Nafas olishga yordam beruvchi gumbazsimon mushak.", icon: "💪" }
    ],
    quiz: [
      { id: 1, question: "Burunning asosiy vazifasi nima?", options: ["Hid bilish va havoni tozalash/isitish", "Ovqatni chaynash", "Qonni tozalash", "Ovoz chiqarish"], correctAnswer: 0 },
      { id: 2, question: "Havo o'tadigan naycha nima deb ataladi?", options: ["Qizilo'ngach", "Traxeya", "Vena", "Arteriya"], correctAnswer: 1 },
      { id: 3, question: "O'pkalar nima bilan to'ladi?", options: ["Suv bilan", "Qon bilan", "Havo bilan", "Ovqat bilan"], correctAnswer: 2 },
      { id: 4, question: "Nafas olishda qatnashadigan asosiy mushak qaysi?", options: ["Yurak", "Til", "Diafragma", "Oshqozon"], correctAnswer: 2 },
      { id: 5, question: "Alveolalar nimaga o'xshaydi?", options: ["Olma daraxtiga", "Uzum shodasiga", "G'isht devorga", "Suv quvuriga"], correctAnswer: 1 },
      { id: 6, question: "Nafas olganda diafragma qayerga harakatlanadi?", options: ["Pastga", "Yuqoriga", "O'ngga", "Harakatlanmaydi"], correctAnswer: 0 },
      { id: 7, question: "Biz qaysi gazni yutamiz (tanamizga kerak)?", options: ["Karbonat angidrid", "Kislorod", "Tabiiy gaz", "Tutun"], correctAnswer: 1 },
      { id: 8, question: "Biz nafas chiqarganda qaysi gaz chiqib ketadi?", options: ["Kislorod", "Oltin", "Karbonat angidrid", "Suv"], correctAnswer: 2 },
      { id: 9, question: "Burun ichidagi tuklar nima uchun kerak?", options: ["Chiroyli bo'lish uchun", "Chang va mikroblarni ushlab qolish uchun", "Hidni sezish uchun", "Havo tezligini oshirish uchun"], correctAnswer: 1 },
      { id: 10, question: "Gazlar almashinuvi qayerda sodir bo'ladi?", options: ["Burunda", "Traxeyada", "Alveolalarda", "Og'izda"], correctAnswer: 2 }
    ],
    resources: [
      { id: 1, type: 'video', title: "Video: O'pkalar qanday ishlaydi?", thumbnailUrl: "https://img.youtube.com/vi/qGiPZf7njqY/hqdefault.jpg", description: "Doktor Binoks bilan sayohat." },
      { id: 2, type: 'article', title: "Qiziqarli faktlar", description: "Nega biz esnaymiz va aksiramiz?" }
    ]
  },
  {
    id: 'qon-aylanish-sistemasi',
    title: "Qon Aylanish Sistemasi",
    description: "Tanamizning tirik nasosi: Yurak va tomirlar bo'ylab sayohat.",
    themeColor: "red",
    icon: React.createElement(Heart, { size: 24 }),
    hero: {
      title: "Tirik Nasos: Yurak",
      subtitle: "Qo'lingni ko'kragiga qo'y. Gup-gup... Eshityapsanmi? Bu sening hayot motoringiz ishlamoqda! ❤️🩸",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-217358c7e618?auto=format&fit=crop&w=1000&q=80",
      badge: "4-Mavzu"
    },
    learningContent: {
      easy: {
        title: "Yetkazib Berish Xizmati 🚚",
        content: `
          <p class="mb-4">Sening tanangda juda katta <strong>Kuryerlik Xizmati</strong> ishlaydi. </p>
          <ul class="space-y-4">
            <li class="flex items-center gap-3">
              <span class="text-3xl">🚚</span>
              <span><strong>Qon</strong> — bu yuk mashinasi. U oziq-ovqat va kislorodni tashlaydi.</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-3xl">🛣️</span>
              <span><strong>Qon tomirlari</strong> — bu mashinalar yuradigan yo'llar.</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-3xl">❤️</span>
              <span><strong>Yurak</strong> — bu motor (nasos). U qonni butun tanaga haydab beradi.</span>
            </li>
          </ul>
          <p class="mt-4 text-center font-bold text-red-600">Yurak hech qachon uxlamaydi va dam olmaydi!</p>
        `
      },
      medium: {
        title: "Yo'llar Xaritasi: Tomirlar 🗺️",
        content: `
          <p class="mb-4">Tanada uch xil "yo'l" (tomir) bor:</p>
          
          <div class="space-y-3">
            <div class="bg-red-50 p-3 rounded-lg border-l-4 border-red-500">
              <strong class="text-red-900">1. Arteriya (Katta Magistral)</strong>
              <p class="text-sm">Qonni yurakdan olib ketadi. Devorlari qalin va kuchli. Odatda kislorodga boy toza qon oqadi.</p>
            </div>
            
            <div class="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
              <strong class="text-blue-900">2. Vena (Qaytish Yo'li)</strong>
              <p class="text-sm">Qonni yurakka qaytarib olib keladi. Devorlari yupqaroq.</p>
            </div>

            <div class="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
              <strong class="text-purple-900">3. Kapillyar (Ko'priklar)</strong>
              <p class="text-sm">Soch tolasidan ham ingichka tomirlar! Ular arteriya va venalarni bog'laydi.</p>
            </div>
          </div>
        `
      },
      hard: {
        title: "Yurak Xonalari va Puls 💓",
        content: `
          <p class="mb-4"><strong>Yurak tuzilishi:</strong> Sening yuraging mushting kattaligida bo'lib, u ikki qismga (O'ng va Chap) va 4 ta xonaga bo'lingan. Chap tomon butun tanaga qon haydaydi, o'ng tomon esa o'pkaga.</p>
          
          <div class="bg-white p-4 rounded-xl shadow-md border border-slate-200 mt-4">
            <h4 class="font-bold text-slate-800">🩺 Puls nima?</h4>
            <p class="text-sm mb-2">Tomir urishi (puls) — bu yurakning har bir qisqarishi. Kattalarda yurak daqiqasiga <strong>60-80 marta</strong> uradi. Bolalarda esa tezroq!</p>
            <hr class="my-2"/>
            <p class="text-xs text-slate-500">🎓 <strong>Uilyam Garvey</strong> — qonning tanada aylanishini birinchi bo'lib isbotlagan olim.</p>
          </div>
        `
      }
    },
    flashcards: [
      { id: 1, term: "Yurak", definition: "Qonni tanaga haydab beruvchi mushakli nasos.", icon: "❤️" },
      { id: 2, term: "Arteriya", definition: "Yurakdan qon olib ketuvchi qalin devorli tomir.", icon: "🔴" },
      { id: 3, term: "Vena", definition: "Yurakka qon olib keluvchi tomir.", icon: "🔵" },
      { id: 4, term: "Kapillyar", definition: "Eng mayda va ingichka qon tomirlari.", icon: "🕸️" },
      { id: 5, term: "Puls", definition: "Yurakning urishi natijasida tomirlarning tepishi.", icon: "🩺" }
    ],
    quiz: [
      { id: 1, question: "Yurakning asosiy vazifasi nima?", options: ["Ovqat hazm qilish", "Fikrrlash", "Qonni nasos kabi haydash", "Nafas olish"], correctAnswer: 2 },
      { id: 2, question: "Yurakdan qon olib ketuvchi tomir qaysi?", options: ["Vena", "Arteriya", "Kapillyar", "Traxeya"], correctAnswer: 1 },
      { id: 3, question: "Yurakka qon qaytarib olib keluvchi tomir qaysi?", options: ["Arteriya", "Vena", "Kapillyar", "O'pka"], correctAnswer: 1 },
      { id: 4, question: "Eng mayda qon tomirlari nima deb ataladi?", options: ["Arteriyalar", "Venalar", "Kapillyarlar", "Shlanglar"], correctAnswer: 2 },
      { id: 5, question: "Puls (tomir urishi) nimani bildiradi?", options: ["Yurak urishini", "Oshqozon ishlashini", "Nafas olishni", "Uyqu kelishini"], correctAnswer: 0 },
      { id: 6, question: "Katta odamlarda normal puls nechta bo'ladi?", options: ["10-20 marta", "60-80 marta", "100-200 marta", "1000 marta"], correctAnswer: 1 },
      { id: 7, question: "Qon aylanishini kim kashf etgan?", options: ["Albert Eynshteyn", "Uilyam Garvey", "Ibn Sino", "Nyuton"], correctAnswer: 1 },
      { id: 8, question: "Qon nimalarni tashiydi?", options: ["Faqat suvni", "Oziq moddalar va kislorodni", "Toshlarni", "Havo sharlarini"], correctAnswer: 1 },
      { id: 9, question: "Yurak necha qismga bo'lingan (o'ng va chap)?", options: ["Bo'linmagan", "2 qismga", "10 qismga", "3 qismga"], correctAnswer: 1 },
      { id: 10, question: "Arteriya tomirlarining devori qanday bo'ladi?", options: ["Juda yupqa", "Qalin va elastik", "Teshik", "Ko'rinmas"], correctAnswer: 1 }
    ],
    resources: [
      { id: 1, type: 'video', title: "Video: Yurak qanday ishlaydi?", thumbnailUrl: "https://img.youtube.com/vi/tF9kXt7jB5M/hqdefault.jpg", description: "Bolalar uchun ajoyib animatsiya." },
      { id: 2, type: 'article', title: "Maqola: Tomiringni ushlab ko'r!", description: "O'z pulsingni qanday o'lchash mumkin?" }
    ]
  },
  {
    id: 'yuqumli-kasalliklar',
    title: "Yuqumli Kasalliklar",
    description: "Ko'rinmas dushmanlar hujumi: Viruslar va bakteriyalar haqida.",
    themeColor: "purple",
    icon: React.createElement(Bug, { size: 24 }),
    hero: {
      title: "Ko'rinmas Dushmanlar",
      subtitle: "Qanday qilib ko'zga ko'rinmas zarrachalar seni kasal qilishi mumkin? Keling, mikroskop ostiga qaraymiz! 🦠🔬",
      imageUrl: "https://images.unsplash.com/photo-1579555712960-67dd99930511?auto=format&fit=crop&w=1000&q=80",
      badge: "5-Mavzu"
    },
    learningContent: {
      easy: {
        title: "Mikroblar Hujumi 🦠",
        content: `
          <p class="mb-4">Tasavvur qiling, havoda, suvda va hatto qo'llarimizda bizga ko'rinmaydigan kichkina "yirtqichlar" yashaydi. Ular <strong>Patogenlar</strong> deb ataladi.</p>
          <p class="mb-4">Biz ularni faqat mikroskop orqali ko'ra olamiz. Ular bizning tanamizga (uyimizga) kirib olib, bizni kasal qilishga urinishadi. 🤒</p>
          <div class="bg-purple-50 p-4 rounded-xl border border-purple-200 my-4">
             <strong class="text-purple-900">Maqsad:</strong>
             <p class="text-sm mt-1">Ular tanaga kirib, ko'payishni xohlashadi. Bizning vazifamiz — ularga yo'l qo'ymaslik!</p>
          </div>
        `
      },
      medium: {
        title: "4 Xil Yovuz Dushman 🧛‍♂️",
        content: `
          <p class="mb-4">Dushmanlarni tanib olishimiz kerak:</p>
          
          <ul class="space-y-3">
            <li class="bg-indigo-50 p-3 rounded-lg border-l-4 border-indigo-500">
              <strong class="text-indigo-900">1. Bakteriyalar:</strong> 
              <span class="text-sm block">Juda kichik tirik jonzotlar. Yomonlari "Vabo"ni keltirib chiqaradi, lekin yaxshilari bizga qatiq (yogurt) tayyorlashda yordam beradi! 🍦</span>
            </li>
            <li class="bg-red-50 p-3 rounded-lg border-l-4 border-red-500">
              <strong class="text-red-900">2. Viruslar:</strong>
              <span class="text-sm block">Haqiqiy "bosqinchilar". Ular Gripp va Suvchechak chaqiradi. Ular tirik hujayraga kirmasa, ko'paya olmaydi.</span>
            </li>
            <li class="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-500">
              <strong class="text-yellow-900">3. Zamburug'lar:</strong>
              <span class="text-sm block">Non ustidagi mog'or yoki oyoqdagi qichishishni keltirib chiqaradi. 🍄</span>
            </li>
            <li class="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
              <strong class="text-green-900">4. Parazitlar:</strong>
              <span class="text-sm block">Boshqa organizm hisobiga yashovchilar (masalan, gijja yoki bezgak paraziti). 🐛</span>
            </li>
          </ul>
        `
      },
      hard: {
        title: "Yuqish Yo'llari 🛤️",
        content: `
          <p class="mb-4">Dushmanlar qal'aga (tanaga) qanday kiradi?</p>
          
          <div class="space-y-4">
             <div class="flex gap-3 items-start">
                <span class="text-2xl">🤧</span>
                <div>
                  <strong>Havo-tomchi yo'li:</strong>
                  <p class="text-sm text-slate-600">Aksirganda yoki yo'talganda tupurik zarrachalari havoga tarqaladi. Gripp va Covid shunday yuqadi.</p>
                </div>
             </div>
             <div class="flex gap-3 items-start">
                <span class="text-2xl">🤝</span>
                <div>
                  <strong>Kontakt (Tegish):</strong>
                  <p class="text-sm text-slate-600">Kir qo'llar yoki kasal odamning buyumlarini ishlatish orqali.</p>
                </div>
             </div>
             <div class="flex gap-3 items-start">
                <span class="text-2xl">🦟</span>
                <div>
                  <strong>Tashuvchilar:</strong>
                  <p class="text-sm text-slate-600">Hasharotlar orqali. Masalan, chivin chaqishi natijasida Bezgak (Malariya) yuqishi mumkin.</p>
                </div>
             </div>
          </div>
        `
      }
    },
    flashcards: [
      { id: 1, term: "Patogen", definition: "Kasallik qo'zg'atuvchi mayda organizm (mikrob).", icon: "🦠" },
      { id: 2, term: "Virus", definition: "Gripp va suvchechakni chaqiruvchi eng kichik 'bosqinchi'.", icon: "👾" },
      { id: 3, term: "Bakteriya", definition: "Bir hujayrali organizm. (Foydalisi ham, zararlisi ham bor).", icon: "🧫" },
      { id: 4, term: "Yuqumli kasallik", definition: "Bir odamdan boshqasiga yuqadigan kasallik.", icon: "😷" }
    ],
    quiz: [
      { id: 1, question: "Patogenlar nima?", options: ["Foydali vitaminlar", "Kasallik chaqiruvchi mikroblar", "Qon hujayralari", "O'simliklar"], correctAnswer: 1 },
      { id: 2, question: "Gripp kasalligini nima qo'zg'atadi?", options: ["Bakteriya", "Virus", "Zamburug'", "Chang"], correctAnswer: 1 },
      { id: 3, question: "Qatiq (yogurt) tayyorlashda qaysi mikroblar yordam beradi?", options: ["Foydali bakteriyalar", "Zararli viruslar", "Parazitlar", "Hech qaysi"], correctAnswer: 0 },
      { id: 4, question: "Bezgak (Malariya) qanday yuqadi?", options: ["Havo orqali", "Chivin chaqishi orqali", "Yomon ovqatdan", "Sovuq suvdan"], correctAnswer: 1 },
      { id: 5, question: "Zamburug'lar qayerda o'sishi mumkin?", options: ["Faqat suvda", "Eski nonda (mog'or) va nam joylarda", "Faqat havoda", "Temir ustida"], correctAnswer: 1 },
      { id: 6, question: "Aksirganda og'izni yopmaslik qanday yuqish yo'liga kiradi?", options: ["Havo-tomchi", "Tashuvchi", "Suv orqali", "Qon orqali"], correctAnswer: 0 },
      { id: 7, question: "Parazitga misol keltiring.", options: ["Gijja", "Gripp", "Mog'or", "Tosh"], correctAnswer: 0 },
      { id: 8, question: "Mikroblarni ko'rish uchun nima kerak?", options: ["Ko'zoynak", "Mikroskop", "Teleskop", "Lupa"], correctAnswer: 1 },
      { id: 9, question: "Tashuvchi (vektor) deb nimaga aytiladi?", options: ["Kasal odamga", "Kasallik tarqatuvchi hasharot yoki hayvonga", "Shifokorga", "Dori vositasiga"], correctAnswer: 1 },
      { id: 10, question: "Suvchechak (vetryanka) nima sababdan bo'ladi?", options: ["Ko'p shirinlik yeyishdan", "Virus yuqishidan", "Sovuq qotishdan", "Yiqilishdan"], correctAnswer: 1 }
    ],
    resources: [
      { id: 1, type: 'video', title: "Video: Viruslar vs Bakteriyalar", thumbnailUrl: "https://img.youtube.com/vi/71X8kMmwjJ0/hqdefault.jpg", description: "Ular nima va qanday farq qiladi?" },
      { id: 2, type: 'article', title: "Qo'l yuvish qoidalari", description: "To'g'ri yuvish bo'yicha ko'rsatma." }
    ]
  },
  {
    id: 'kasallikning-oldini-olish',
    title: "Kasallikning Oldini Olish",
    description: "Salomatlik qalqoni: Qanday qilib o'zimizni himoya qilamiz?",
    themeColor: "green",
    icon: React.createElement(ShieldCheck, { size: 24 }),
    hero: {
      title: "Salomatlik Qalqoni",
      subtitle: "Qanday qilib o'zingni super qahramondek himoya qilasan? Eng kuchli qurol — bu oddiy tozalik! 🛡️🧼",
      imageUrl: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=1000&q=80",
      badge: "6-Mavzu"
    },
    learningContent: {
      easy: {
        title: "Tozalik - Salomatlik Garovi 🧼",
        content: `
          <p class="mb-4">Bizning kasalliklarga qarshi eng kuchli qurolimiz bu — **Sovun**!</p>
          
          <div class="bg-green-50 p-4 rounded-xl border border-green-200 my-4 text-center">
            <h4 class="font-bold text-green-800 text-lg mb-2">Qo'lni qachon yuvish kerak?</h4>
            <div class="flex justify-center gap-4 text-2xl">
               <span title="Ovqatdan oldin">🍽️</span>
               <span title="Hojatxonadan keyin">🚽</span>
               <span title="O'yindan keyin">⚽</span>
               <span title="Hayvonlarni ushlagandan keyin">🐶</span>
            </div>
          </div>
          <p class="mb-4">Aksirganda og'izni tirsak bilan yopish — bu nafaqat madaniyat, balki do'stlaringizni himoya qilishdir! 🤧🚫</p>
        `
      },
      medium: {
        title: "Ovqat va Suv Xavfsizligi 🥣",
        content: `
          <p class="mb-4">Mikroblar ovqatga tushishni yaxshi ko'radi. Ularni to'xtatish uchun:</p>
          
          <ul class="space-y-3">
            <li class="bg-white p-3 rounded-lg shadow-sm border-l-4 border-yellow-400">
              <strong>Pashshalardan saqlash:</strong> Pashshalar axlatxonada yurib, keyin ovqatga qo'nadi. Ovqat ustini doim yopib yurish kerak! 🪰🚫
            </li>
            <li class="bg-white p-3 rounded-lg shadow-sm border-l-4 border-blue-400">
              <strong>Qaynatilgan suv:</strong> Suvni qaynatganda undagi ko'rinmas mikroblar o'ladi. Xom suv ichma! 💧🔥
            </li>
            <li class="bg-white p-3 rounded-lg shadow-sm border-l-4 border-red-400">
              <strong>Karantin:</strong> Kasal odam boshqalarga yuqtirmasligi uchun alohida xonada turishi kerak. 🏠
            </li>
          </ul>
        `
      },
      hard: {
        title: "Maxsus Himoya va Fan 🧪",
        content: `
          <p class="mb-4">Olimlar kasalliklarni qanday to'xtatadi?</p>
          
          <div class="grid grid-cols-1 gap-4">
             <div class="bg-slate-100 p-3 rounded-lg">
                <strong class="text-slate-800">🕵️‍♂️ Epidemiologlar</strong>
                <p class="text-sm">Bular kasallik ovchilari! Ular kasallik qayerdan kelganini va uni qanday to'xtatishni o'rganadilar.</p>
             </div>
             <div class="bg-slate-100 p-3 rounded-lg">
                <strong class="text-slate-800">🕸️ Pashshaxona (Chivin to'ri)</strong>
                <p class="text-sm">Bezgak tarqalgan joylarda tunlari to'r ichida uxlash hayotni saqlab qoladi.</p>
             </div>
             <div class="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                <strong class="text-yellow-800">⚠️ Pestitsidlar</strong>
                <p class="text-sm">Hasharotlarni o'ldiradigan kimyoviy dorilar. Lekin ehtiyot bo'lish kerak, agar ular ovqatga tushsa, odamni zaharlashi mumkin!</p>
             </div>
          </div>
        `
      }
    },
    flashcards: [
      { id: 1, term: "Gigiyena", definition: "Tozalik saqlash va kasallikni oldini olish qoidalari.", icon: "🚿" },
      { id: 2, term: "Epidemiya", definition: "Kasallikning bir vaqtda ko'p odamlarga tarqalishi.", icon: "📈" },
      { id: 3, term: "Pasterizatsiya", definition: "Sutni qizdirib mikroblarni o'ldirish usuli.", icon: "🥛" },
      { id: 4, term: "Tashuvchi", definition: "Kasallikni bir joydan ikkinchi joyga eltuvchi (masalan, pashsha).", icon: "🪰" }
    ],
    quiz: [
      { id: 1, question: "Kasallikdan himoyalanishning eng oson yo'li nima?", options: ["Qo'lni sovunlab yuvish", "Ko'p shirinlik yeyish", "Uyda o'tirish", "Televizor ko'rish"], correctAnswer: 0 },
      { id: 2, question: "Aksirganda og'izni nima bilan yopish kerak?", options: ["Qo'lning kafti bilan", "Tirsak yoki dastro'mol bilan", "Yopish kerak emas", "Til bilan"], correctAnswer: 1 },
      { id: 3, question: "Ovqat ustini nima uchun yopish kerak?", options: ["Sovub qolmasligi uchun", "Pashsha va chang tushmasligi uchun", "Ko'rinmasligi uchun", "Mushuk yemasligi uchun"], correctAnswer: 1 },
      { id: 4, question: "Suvni nima uchun qaynatish kerak?", options: ["Mazali bo'lishi uchun", "Mikroblarni o'ldirish uchun", "Rangi o'zgarishi uchun", "Gazli qilish uchun"], correctAnswer: 1 },
      { id: 5, question: "Epidemiolog kim?", options: ["Tish shifokori", "Kasallik tarqalishini o'rganuvchi olim", "Oshpaz", "Quruvchi"], correctAnswer: 1 },
      { id: 6, question: "Bezgakdan saqlanish uchun nima ishlatiladi?", options: ["Pashshaxona (to'r)", "Qalin ko'rpa", "Isitgich", "Ventilyator"], correctAnswer: 0 },
      { id: 7, question: "Pestitsidlar nima?", options: ["Vitaminlar", "Hasharotlarga qarshi zaharli dorilar", "Shirinliklar", "O'yinchoqlar"], correctAnswer: 1 },
      { id: 8, question: "Karantin nima?", options: ["Bayram qilish", "Kasal odamni alohidalash", "Ko'p ovqat yeyish", "Dars qilish"], correctAnswer: 1 },
      { id: 9, question: "Qo'lni qachon yuvish shart EMAS?", options: ["Ovqatdan oldin", "Hojatxonadan keyin", "Uxlab turganda (shart emas, lekin tavsiya)", "Kitob o'qiganda (shart emas)"], correctAnswer: 3 },
      { id: 10, question: "Pashshalar nima tashiydi?", options: ["Asal", "Mikrob va ifloslik", "Suv", "Havo"], correctAnswer: 1 }
    ],
    resources: [
      { id: 1, type: 'video', title: "Video: Nega qo'lni yuvish kerak?", thumbnailUrl: "https://img.youtube.com/vi/3N9K-YkS6wY/hqdefault.jpg", description: "Mikroblar qanday yo'qoladi?" },
      { id: 2, type: 'article', title: "Maqola: Suvni tozalash usullari", description: "Uy sharoitida suvni qanday zararsizlantirish mumkin?" }
    ]
  }
];
