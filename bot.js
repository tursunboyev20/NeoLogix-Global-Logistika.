const TG_TOKEN   = '8660445619:AAH8r7_8Y7tHNXQiJbAC72YG0Mherjlgi_4';
const TG_CHAT_ID = '8556541505';

const IC = {
  check: `<svg style="display:inline;vertical-align:middle;margin-right:6px" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  box:   `<svg style="display:inline;vertical-align:middle;margin-right:6px" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6ab0f5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  money: `<svg style="display:inline;vertical-align:middle;margin-right:6px" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5C518" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  plane: `<svg style="display:inline;vertical-align:middle;margin-right:6px" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6ab0f5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>`,
  ship:  `<svg style="display:inline;vertical-align:middle;margin-right:6px" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6ab0f5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1"/><path d="M4 18V9a1 1 0 0 1 1-1h4V5"/><path d="M9 4h6l3 5H6z"/></svg>`,
  truck: `<svg style="display:inline;vertical-align:middle;margin-right:6px" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6ab0f5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  train: `<svg style="display:inline;vertical-align:middle;margin-right:6px" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6ab0f5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M7 17v2M17 17v2"/><path d="M2 12h20"/><circle cx="7" cy="17" r="1"/><circle cx="17" cy="17" r="1"/></svg>`,
  user:  `<svg style="display:inline;vertical-align:middle;margin-right:6px" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6ab0f5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  phone: `<svg style="display:inline;vertical-align:middle;margin-right:6px" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.88a16 16 0 0 0 6.29 6.29l1.17-1.17a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  mail:  `<svg style="display:inline;vertical-align:middle;margin-right:6px" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6ab0f5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  clock: `<svg style="display:inline;vertical-align:middle;margin-right:6px" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5C518" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  pin:   `<svg style="display:inline;vertical-align:middle;margin-right:6px" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5C518" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 14 8 14s8-8.75 8-14a8 8 0 0 0-8-8z"/></svg>`,
  wave:  `<svg style="display:inline;vertical-align:middle;margin-right:6px" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5C518" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
  help:  `<svg style="display:inline;vertical-align:middle;margin-right:6px" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8b97b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  warn:  `<svg style="display:inline;vertical-align:middle;margin-right:6px" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f87171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
};




function formatName(name) {
  return name.trim().replace(/\s+/g, ' ').split(' ').map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

// Telefon raqamni formatlash
function formatPhone(phone) {
  var digits = phone.replace(/\D/g, '');
  if (digits.startsWith('998') && digits.length >= 12) {
    return '+' + digits;
  } else if (digits.length === 9) {
    return '+998' + digits;
  }
  return '+998' + digits;
}



function validateStep(stepName, value) {
  var v = value.trim();

  if (stepName === 'ism') {
    if (!/^[a-zA-ZА-Яа-яЎўҚқҒғҲҳ\s'-]+$/.test(v)) {
      return { ok: false, error: IC.warn + "<b>Ism noto'g'ri!</b><br>Ism faqat harflardan iborat bo'lishi kerak. Raqam yoki belgi yozmang." };
    }
    if (v.replace(/[\s'-]/g, '').length < 2) {
      return { ok: false, error: IC.warn + "<b>Ism juda qisqa!</b><br>Kamida 2 ta harf kiriting." };
    }
    return { ok: true, value: formatName(v) };
  }

  if (stepName === 'tel') {
    var digits = v.replace(/\D/g, '');
    if (digits.length < 9) {
      return { ok: false, error: IC.warn + "<b>Telefon raqam noto'g'ri!</b><br>Kamida 9 ta raqam kiriting.<br><i>Masalan: +998 90 123 45 67</i>" };
    }
    if (digits.length > 12) {
      return { ok: false, error: IC.warn + "<b>Telefon raqam juda uzun!</b><br>To'g'ri format: <b>+998 XX XXX XX XX</b>" };
    }
    return { ok: true, value: formatPhone(v) };
  }

  if (stepName === 'yuk') {
    if (v.length < 3) {
      return { ok: false, error: IC.warn + "<b>Kechirasiz, ma'lumotni to'liq kiriting!</b><br>Yuk nomi, og'irligi va o'lchamini yozing.<br><i>Masalan: Kiyim, 500 kg, 2 ta qopta</i>" };
    }
    if (/^\d+$/.test(v)) {
      return { ok: false, error: IC.warn + "<b>Kechirasiz, ma'lumotni to'liq kiriting!</b><br>Faqat raqam yetarli emas. Yuk nomini ham yozing.<br><i>Masalan: Elektronika, 200 kg</i>" };
    }
    return { ok: true, value: v };
  }

  if (stepName === 'manzil') {
    if (v.length < 5) {
      return { ok: false, error: IC.warn + "<b>Kechirasiz, ma'lumotni to'liq kiriting!</b><br>Qayerdan va qayerga ekanini yozing.<br><i>Masalan: Toshkent — Moskva</i>" };
    }
    if (/^\d+$/.test(v)) {
      return { ok: false, error: IC.warn + "<b>Kechirasiz, ma'lumotni to'liq kiriting!</b><br>Shahar nomlarini yozing.<br><i>Masalan: Toshkent — Dubay</i>" };
    }
    return { ok: true, value: v };
  }

  return { ok: true, value: v };
}

function tgValidateStep(stepName, value) {
  var v = value.trim();

  if (stepName === 'transport') {
    var map = {
      '🚗 Avtomobil': 'Avtomobil', '✈️ Havo': 'Havo',
      '🚢 Dengiz': 'Dengiz', "🚂 Temir yo'l": "Temir yo'l",
      'avtomobil': 'Avtomobil', 'havo': 'Havo',
      'dengiz': 'Dengiz', "temir yo'l": "Temir yo'l"
    };
    var mapped = map[v] || map[v.toLowerCase()];
    if (!mapped) return { ok: false, error: "Transport turini to'g'ri tanlang (tugmalardan birini bosing)." };
    return { ok: true, value: mapped };
  }

  if (stepName === 'ism') {
    if (!/^[a-zA-ZА-Яа-яЎўҚқҒғҲҳ\s'-]+$/.test(v)) {
      return { ok: false, error: "Ism faqat harflardan iborat bo'lishi kerak. Raqam yoki belgi yozmang." };
    }
    if (v.replace(/[\s'-]/g, '').length < 2) {
      return { ok: false, error: "Ism juda qisqa! Kamida 2 ta harf kiriting." };
    }
    return { ok: true, value: formatName(v) };
  }

  if (stepName === 'tel') {
    var digits = v.replace(/\D/g, '');
    if (digits.length < 9) return { ok: false, error: "Telefon raqam noto'g'ri! Kamida 9 ta raqam kiriting.\nMasalan: +998 90 123 45 67" };
    if (digits.length > 12) return { ok: false, error: "Telefon raqam juda uzun! Format: +998 XX XXX XX XX" };
    return { ok: true, value: formatPhone(v) };
  }

  if (stepName === 'yuk') {
    if (v.length < 3 || /^\d+$/.test(v)) {
      return { ok: false, error: "Kechirasiz, ma'lumotni to'liq kiriting!\nYuk nomi, og'irligi va o'lchamini yozing.\nMasalan: Elektronika, 200 kg" };
    }
    return { ok: true, value: v };
  }

  if (stepName === 'manzil') {
    if (v.length < 5 || /^\d+$/.test(v)) {
      return { ok: false, error: "Kechirasiz, manzilni to'liq kiriting!\nMasalan: Toshkent → Moskva" };
    }
    return { ok: true, value: v };
  }

  return { ok: true, value: v };
}

function formatZakazForTG(z) {
  var vaqt = new Date().toLocaleString('uz-UZ');
  return (
    '🚚 <b>YANGI ZAKAZ — NeoLogix</b>\n\n' +
    '👤 Ism:        ' + (z.ism       || '—') + '\n' +
    '📞 Telefon:    ' + (z.tel       || '—') + '\n' +
    '🚛 Transport:  ' + (z.transport || '—') + '\n' +
    '📦 Yuk:        ' + (z.yuk       || '—') + '\n' +
    '📍 Manzil:     ' + (z.manzil    || '—') + '\n' +
    '💬 Izoh:       ' + (z.izoh      || '—') + '\n\n' +
    '🕐 Vaqt: ' + vaqt + '\n' +
    '🌐 Manba: neologix.uz'
  );
}

function formatUserMsgForTG(text) {
  var vaqt = new Date().toLocaleString('uz-UZ');
  var context = '';
  if (zakazForm !== null) {
    var stepName = ZAKAZ_STEPS[zakazForm.step];
    context = '\n📋 Zakaz bosqichi: <b>' + stepName + '</b>';
  }
  return (
    '💬 <b>SAYT CHAT XABARI — NeoLogix</b>\n\n' +
    '✏️ Xabar: ' + text + context + '\n\n' +
    '🕐 Vaqt: ' + vaqt + '\n' +
    '🌐 Manba: neologix.uz'
  );
}



function sendToTelegram(text) {
  fetch('https://api.telegram.org/bot' + TG_TOKEN + '/sendMessage', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: TG_CHAT_ID, text: text, parse_mode: 'HTML' })
  }).catch(function(e) { console.warn('Telegram xato:', e); });
}

function tgSend(chatId, text, keyboard) {
  var body = { chat_id: chatId, text: text, parse_mode: 'HTML' };
  if (keyboard) {
    body.reply_markup = { keyboard: keyboard, resize_keyboard: true, one_time_keyboard: false };
  }
  fetch('https://api.telegram.org/bot' + TG_TOKEN + '/sendMessage', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).catch(function(e) { console.warn('Telegram xato:', e); });
}



var tgLastUpdateId = 0;
var tgSessions = {}; 

var TG_MAIN_KB = [
  ['📦 Zakaz berish', '💰 Narxni bilish'],
  ['🔍 Yukni kuzatish', '👤 Operatorga ulanish']
];
var TG_BACK_KB   = [['🏠 Asosiy menyu']];
var TG_TRANS_KB  = [['🚗 Avtomobil', '✈️ Havo'], ['🚢 Dengiz', "🚂 Temir yo'l"], ['🏠 Asosiy menyu']];

var TG_ZAKAZ_STEPS = ['ism', 'tel', 'transport', 'yuk', 'manzil', 'izoh'];
var TG_ZAKAZ_Q = {
  ism:       '👤 Ismingizni kiriting:',
  tel:       '📞 Telefon raqamingizni kiriting:\n(masalan: +998 90 123 45 67)',
  transport: '🚛 Transport turini tanlang:',
  yuk:       "📦 Yuk haqida ma'lumot kiriting:\n(nomi, og'irligi, o'lchami)",
  manzil:    '📍 Qayerdan → Qayerga yetkazish kerak?\n(masalan: Toshkent → Moskva)',
  izoh:      "💬 Qo'shimcha izoh (ixtiyoriy):\nYo'q desangiz \"yo'q\" yozing"
};

function tgHandleMsg(chatId, text) {
  var s = tgSessions[chatId] || {};
  var t = (text || '').trim();


  if (t === '/start' || t === '🏠 Asosiy menyu') {
    tgSessions[chatId] = {};
    tgSend(chatId,
      '👋 <b>NeoLogix</b> ga xush kelibsiz!\n\nQuyidagi xizmatlardan birini tanlang:',
      TG_MAIN_KB
    );
    return;
  }


  if (t === '📦 Zakaz berish') {
    tgSessions[chatId] = { mode: 'zakaz', step: 0, ism:'', tel:'', transport:'', yuk:'', manzil:'', izoh:'' };
    tgSend(chatId, '📦 <b>Zakaz berish</b>\n\nBir necha savol — tez to\'ldirasiz.\n\n' + TG_ZAKAZ_Q['ism'], TG_BACK_KB);
    return;
  }


  if (t === '💰 Narxni bilish') {
    tgSessions[chatId] = {};
    tgSend(chatId,
      '💰 <b>Narxni hisoblash</b>\n\n' +
      'Aniq narx olish uchun quyidagi ma\'lumotlarni yuboring:\n\n' +
      '— Transport turi\n— Yuk og\'irligi (kg)\n— Manzil (qayerdan → qayerga)\n\n' +
      '📊 Yoki saytda kalkulyator: <b>neologix.uz</b>',
      [['📦 Zakaz berish'], ['🏠 Asosiy menyu']]
    );
    return;
  }

  if (t === '🔍 Yukni kuzatish') {
    tgSessions[chatId] = { mode: 'track' };
    tgSend(chatId,
      '🔍 <b>Yukni kuzatish</b>\n\nYuk raqamingizni kiriting.\nNamuna: <b>NLX-2024-78421</b>',
      TG_BACK_KB
    );
    return;
  }


  if (t === '👤 Operatorga ulanish') {
    tgSessions[chatId] = {};
    tgSend(chatId,
      '👤 <b>Operator bilan bog\'lanish</b>\n\n' +
      '📞 <b>+998 71 123-45-67</b>\n' +
      '📧 <b>info@neologix.uz</b>\n' +
      '🕐 24/7 ishlaydi\n\n' +
      'Tez orada operatorimiz siz bilan bog\'lanadi.',
      TG_MAIN_KB
    );
    return;
  }


  if (s.mode === 'track') {
    var num = t.toUpperCase();
    if (!num.match(/^NLX-\d{4}-\d+$/)) {
      tgSend(chatId, '❌ Noto\'g\'ri format.\nNamuna: <b>NLX-2024-78421</b>\n\nQayta kiriting:', TG_BACK_KB);
      return;
    }
    tgSessions[chatId] = {};
    tgSend(chatId,
      '🔍 <b>' + num + '</b> — saytda tekshiring:\n\n🌐 <b>neologix.uz</b> → "Yukni kuzatish"\n\nYoki: <b>+998 71 123-45-67</b>',
      TG_MAIN_KB
    );
    return;
  }

  if (s.mode === 'zakaz' && typeof s.step === 'number') {
    var stepName = TG_ZAKAZ_STEPS[s.step];
    var validated = tgValidateStep(stepName, t);

    if (!validated.ok) {
      var kb = stepName === 'transport' ? TG_TRANS_KB : TG_BACK_KB;
      tgSend(chatId, '⚠️ ' + validated.error + '\n\nQayta kiriting:', kb);
      return;
    }

    s[stepName] = validated.value;
    s.step++;

    if (s.step >= TG_ZAKAZ_STEPS.length) {
      sendToTelegram(formatZakazForTG(s));
      tgSessions[chatId] = {};
      tgSend(chatId,
        '✅ <b>Zakazingiz qabul qilindi!</b>\n\n🕐 Tez orada operatorimiz siz bilan bog\'lanadi.\n\nRahmat!',
        TG_MAIN_KB
      );
      return;
    }

    var next = TG_ZAKAZ_STEPS[s.step];
    var nextKb = next === 'transport' ? TG_TRANS_KB : TG_BACK_KB;
    tgSend(chatId, TG_ZAKAZ_Q[next], nextKb);
    return;
  }


  tgSend(chatId, '❓ Tushunmadim. Quyidagilardan birini tanlang:', TG_MAIN_KB);
}

function tgPoll() {
  fetch('https://api.telegram.org/bot' + TG_TOKEN + '/getUpdates?offset=' + (tgLastUpdateId + 1) + '&timeout=10')
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (data.ok && data.result && data.result.length) {
        data.result.forEach(function(upd) {
          tgLastUpdateId = upd.update_id;
          if (upd.message && upd.message.text) {
            tgHandleMsg(upd.message.chat.id, upd.message.text);
          }
        });
      }
    })
    .catch(function() {})
    .finally(function() { setTimeout(tgPoll, 2000); });
}

setTimeout(tgPoll, 1000);



var zakazForm = null;
var ZAKAZ_STEPS = ['ism', 'tel', 'transport', 'yuk', 'manzil', 'izoh'];
var ZAKAZ_QUESTIONS = {
  ism:       IC.user  + 'Ismingizni kiriting:',
  tel:       IC.phone + 'Telefon raqamingizni kiriting:<br><i>(masalan: +998 90 123 45 67)</i>',
  transport: IC.truck + 'Transport turini tanlang:',
  yuk:       IC.box   + "Yuk haqida ma'lumot kiriting:<br><i>(nomi, og'irligi, o'lchami)</i>",
  manzil:    IC.pin   + "Qayerdan — qayerga yetkazish kerak?<br><i>(masalan: Toshkent — Moskva)</i>",
  izoh:      IC.help  + "Qo'shimcha izoh (ixtiyoriy):<br><i>Yo'q desangiz \"yo'q\" yozing</i>"
};
var ZAKAZ_QUICK = {
  transport: ['Avtomobil', 'Dengiz', 'Havo', "Temir yo'l"]
};

function startZakaz() {
  zakazForm = { step: 0, ism: '', tel: '', transport: '', yuk: '', manzil: '', izoh: '' };
  botTypeThenSay(IC.check + "<b>Zakaz berish</b>\n\nBir necha savol — tez to'ldirasiz.", []);
  setTimeout(function() {
    botTypeThenSay(ZAKAZ_QUESTIONS['ism'], []);
  }, 1200);
}

function processZakazStep(text) {
  var step = ZAKAZ_STEPS[zakazForm.step];
  var validated = validateStep(step, text);

  if (!validated.ok) {
    botTypeThenSay(validated.error, ZAKAZ_QUICK[step] || []);
    return;
  }

  zakazForm[step] = validated.value;
  zakazForm.step++;

  if (zakazForm.step >= ZAKAZ_STEPS.length) {
    sendToTelegram(formatZakazForTG(zakazForm));
    zakazForm = null;
    botTypeThenSay(
      IC.check + "<b>Zakazingiz qabul qilindi!</b>\n\n" +
      IC.clock + "Tez orada operatorimiz siz bilan bog'lanadi.\n\nRahmat!",
      ['Yukni kuzatish', 'Narx hisoblash']
    );
    return;
  }

  var nextStep = ZAKAZ_STEPS[zakazForm.step];
  botTypeThenSay(ZAKAZ_QUESTIONS[nextStep], ZAKAZ_QUICK[nextStep] || []);
}



const BOT_RESPONSES = [
  {
    keys: ['narx', 'qancha', 'pul', 'dollar', 'cost', 'price', 'hisob'],
    reply: IC.money + "<b>Narxni hisoblash</b>\n\nKalkulyator bo'limiga o'ting yoki ma'lumot yuboring:\n\n— Transport turi\n— Yuk og'irligi (kg)\n— Yuborish va qabul manzili",
    quick: ["Kalkulyatorga o'tish", 'Zakaz berish', 'Operatorga ulanish']
  },
  {
    keys: ['kuzat', 'track', 'qayerda', 'holat', 'status', 'raqam'],
    reply: IC.box + '<b>Yukni kuzatish</b>\n\nYuk raqamingizni kiriting.\nNamuna: <b>NLX-2024-78421</b>',
    quick: ["Yukni kuzatish bo'limiga o'tish", 'Operatorga ulanish']
  },
  {
    keys: ['temir', 'poyezd', 'vagon', 'rail'],
    reply: IC.train + "<b>Temir yo'l tashish</b>\n\n— Markaziy Osiyo, Rossiya, Xitoy\n— Og'ir va katta hajmli yuklar\n— Iqtisodiy narxlar\n— O'rtacha 7–15 kun",
    quick: ['Narx hisoblash', 'Zakaz berish']
  },
  {
    keys: ['havo', 'samolyot', 'air', 'express'],
    reply: IC.plane + '<b>Havo yuk tashish</b>\n\n— Express: 24 soat\n— Standart: 3–5 kun\n— 120+ aeroport\n— Tibbiy va qimmatbaho yuklar',
    quick: ['Narx hisoblash', 'Zakaz berish']
  },
  {
    keys: ['dengiz', 'kema', 'konteyner', 'sea'],
    reply: IC.ship + '<b>Dengiz yuk tashish</b>\n\n— FCL va LCL konteynerlar\n— 45+ port\n— Osiyo, Yevropa, Amerika\n— O\'rtacha 20–45 kun',
    quick: ['Narx hisoblash', 'Zakaz berish']
  },
  {
    keys: ['avtomobil', 'mashina', 'road', 'quruqlik'],
    reply: IC.truck + '<b>Avtomobil yuk tashish</b>\n\n— 800+ yuk mashinasi\n— MDH va Yevropa\n— GPS kuzatuvi\n— Sovutgichli va xavfli yuklar',
    quick: ['Narx hisoblash', 'Zakaz berish']
  },
  {
    keys: ['operator', 'menejer', "bog'lan", 'murojaat', 'telefon'],
    reply: IC.user + "<b>Operator bilan bog'lanish</b>\n\n" + IC.phone + '<b>+998 71 123-45-67</b>\n' + IC.mail + '<b>info@neologix.uz</b>\n' + IC.clock + '24/7 ishlaydi',
    quick: ['Zakaz berish', 'Yukni kuzatish']
  },
  {
    keys: ['salom', 'hello', 'hi', 'assalom'],
    reply: IC.wave + "<b>NeoLogix</b> ga xush kelibsiz!\n\nZakaz berish, narx hisoblash yoki yuk kuzatish bo'yicha yordam bera olaman.",
    quick: ['Zakaz berish', 'Narx bilmoqchi', 'Yukni kuzatish', 'Operatorga ulanish']
  },
  {
    keys: ['manzil', 'ofis', 'adres', 'joylash'],
    reply: IC.pin + '<b>Bizning ofislarimiz</b>\n\n— <b>Toshkent</b> — Bosh ofis\n— <b>Moskva</b> — Filial\n— <b>Dubay</b> — Filial\n\n' + IC.clock + '09:00–18:00 (hafta ichi)',
    quick: ['Operatorga ulanish', 'Zakaz berish']
  }
];

const DEFAULT_REPLY = {
  reply: IC.help + 'Tushunmadim. Quyidagilardan birini tanlang:',
  quick: ['Zakaz berish', 'Narx bilmoqchi', 'Yukni kuzatish', 'Operatorga ulanish']
};

const QUICK_ACTIONS = {
  "Kalkulyatorga o'tish": function() { document.getElementById('calc').scrollIntoView({ behavior: 'smooth' }); },
  "Yukni kuzatish bo'limiga o'tish": function() { document.getElementById('track').scrollIntoView({ behavior: 'smooth' }); }
};



var chatOpen = false;

function toggleChat() {
  chatOpen = !chatOpen;
  var box       = document.getElementById('chatBox');
  var chatIcon  = document.getElementById('chatIcon');
  var closeIcon = document.getElementById('closeIcon');
  var badge     = document.getElementById('chatBadge');
  box.classList.toggle('open', chatOpen);
  chatIcon.style.display  = chatOpen ? 'none'  : 'block';
  closeIcon.style.display = chatOpen ? 'block' : 'none';
  badge.classList.add('hidden');
  if (chatOpen && document.getElementById('chatMessages').children.length === 0) {
    setTimeout(function() {
      botTypeThenSay(
        IC.wave + "<b>NeoLogix Bot</b> ga xush kelibsiz!\n\nZakaz berish, narx hisoblash yoki yuk kuzatish bo'yicha yordam bera olaman.",
        ['Zakaz berish', 'Narx bilmoqchi', 'Yukni kuzatish', 'Operatorga ulanish']
      );
    }, 300);
  }
}

function now() {
  return new Date().toLocaleTimeString('uz', { hour: '2-digit', minute: '2-digit' });
}

function addMsg(text, from) {
  var msgs = document.getElementById('chatMessages');
  var div  = document.createElement('div');
  div.className = 'msg ' + from;
  div.innerHTML = text.replace(/\n/g, '<br>') + '<div class="msg-time">' + now() + '</div>';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return div;
}

function showTyping() {
  var msgs = document.getElementById('chatMessages');
  var div  = document.createElement('div');
  div.className = 'msg bot';
  div.id = 'typingIndicator';
  div.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function removeTyping() {
  var el = document.getElementById('typingIndicator');
  if (el) el.remove();
}

function setQuickBtns(buttons) {
  var container = document.getElementById('chatQuickBtns');
  container.innerHTML = '';
  if (!buttons || !buttons.length) return;
  buttons.forEach(function(label) {
    var btn = document.createElement('button');
    btn.className = 'qbtn';
    btn.textContent = label;
    btn.onclick = function() {
      if (QUICK_ACTIONS[label]) { toggleChat(); QUICK_ACTIONS[label](); }
      else handleUserInput(label);
    };
    container.appendChild(btn);
  });
}

function botTypeThenSay(text, quick) {
  quick = quick || [];
  showTyping();
  setTimeout(function() {
    removeTyping();
    addMsg(text, 'bot');
    setQuickBtns(quick);
  }, 800 + Math.random() * 300);
}

function getBotResponse(input) {
  var low = input.toLowerCase();
  for (var i = 0; i < BOT_RESPONSES.length; i++) {
    if (BOT_RESPONSES[i].keys.some(function(k) { return low.includes(k); })) {
      return BOT_RESPONSES[i];
    }
  }
  return DEFAULT_REPLY;
}

function handleUserInput(text) {
  if (!text.trim()) return;
  setQuickBtns([]);
  addMsg(text, 'user');
  document.getElementById('chatInput').value = '';


  sendToTelegram(formatUserMsgForTG(text));

  if (zakazForm !== null) {
    processZakazStep(text);
    return;
  }
  if (text.toLowerCase().includes('zakaz') || text === 'Zakaz berish') {
    startZakaz();
    return;
  }
  var resp = getBotResponse(text);
  botTypeThenSay(resp.reply, resp.quick);
}

function sendMsg() {
  handleUserInput(document.getElementById('chatInput').value.trim());
}
// ── Ko'p tillilik qo'llab-quvvatlash ──
function updateBotLang() {
  if (typeof t !== 'function') return;

  ZAKAZ_QUESTIONS = {
    ism:       IC.user  + t('bot_q_ism'),
    tel:       IC.phone + t('bot_q_tel').replace(/\n/g, '<br>'),
    transport: IC.truck + t('bot_q_transport'),
    yuk:       IC.box   + t('bot_q_yuk').replace(/\n/g, '<br>'),
    manzil:    IC.pin   + t('bot_q_manzil').replace(/\n/g, '<br>'),
    izoh:      IC.help  + t('bot_q_izoh').replace(/\n/g, '<br>')
  };

  DEFAULT_REPLY = {
    reply: IC.help + t('bot_default'),
    quick: [t('bot_q_zakaz'), t('bot_q_narx'), t('bot_q_kuzat'), t('bot_q_operator')]
  };

  BOT_RESPONSES[BOT_RESPONSES.length - 1] = {
    keys: ['salom', 'hello', 'hi', 'assalom', 'привет', 'здравствуйте'],
    reply: IC.wave + "<b>NeoLogix</b> — " + t('bot_welcome'),
    quick: [t('bot_q_zakaz'), t('bot_q_narx'), t('bot_q_kuzat'), t('bot_q_operator')]
  };

  
  var inp = document.getElementById('chatInput');
  if (inp) inp.placeholder = t('chat_input_ph');


  var onlineEls = document.querySelectorAll('[data-i18n="chat_online"]');
  onlineEls.forEach(function(el) { el.textContent = t('chat_online'); });
}


var _origToggleChat = toggleChat;
toggleChat = function() {
  var wasOpen = chatOpen;
  _origToggleChat();
  if (!wasOpen && chatOpen && document.getElementById('chatMessages').children.length === 0) {
  
    setTimeout(function() {
      var qc = document.getElementById('chatQuickBtns');
      if (qc) {
        var btns = qc.querySelectorAll('.qbtn');
        var labels = [t('bot_q_zakaz'), t('bot_q_narx'), t('bot_q_kuzat'), t('bot_q_operator')];
        btns.forEach(function(btn, i) { if (labels[i]) btn.textContent = labels[i]; });
      }
    }, 1200);
  }
};