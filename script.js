const mockData = {
    'NLX-2024-78421': {
      status: "Yo'lda — Dubay",
      eta: '12 Dekabr 2024',
      type: 'Havo',
      steps: [
        {label:'Qabul qilindi', loc:'Toshkent', done:true},
        {label:'Saralash',      loc:'Toshkent Hub', done:true},
        {label:'Uchishda',      loc:'Dubay → London', done:false, active:true},
        {label:'Bojxona',       loc:'London LHR', done:false},
        {label:'Yetkazildi',    loc:'London', done:false}
      ]
    },
    'NLX-2024-55100': {
      status: 'Portda — Singapur',
      eta: '28 Dekabr 2024',
      type: 'Dengiz',
      steps: [
        {label:"Jo'natildi", loc:'Busan Port', done:true},
        {label:"Kema'da",    loc:'Tinch okeani', done:true},
        {label:'Portda',     loc:'Singapur', done:false, active:true},
        {label:'Bojxona',    loc:'Singapur', done:false},
        {label:'Yetkazildi', loc:'Jakarta', done:false}
      ]
    },
    'NLX-2024-33007': {
      status: 'Yetkazildi',
      eta: "Yetkazildi",
      type: 'Avtomobil',
      steps: [
        {label:"Jo'natildi", loc:'Frankfurt', done:true},
        {label:'Tranzit',    loc:'Polsha', done:true},
        {label:'Chegara',    loc:'Belarus', done:true},
        {label:'Tranzit',    loc:'Moskva', done:true},
        {label:'Yetkazildi', loc:'Toshkent', done:true}
      ]
    },
    'NLX-2024-91205': {
      status: "Yo'lda — Samarqand",
      eta: '18 Dekabr 2024',
      type: "Temir yo'l",
      steps: [
        {label:"Jo'natildi",  loc:'Moskva',       done:true},
        {label:'Tranzit',     loc:"Qozog'iston",  done:true},
        {label:"Yo'lda",      loc:'Samarqand',    done:false, active:true},
        {label:'Bojxona',     loc:'Toshkent',     done:false},
        {label:'Yetkazildi',  loc:'Toshkent',     done:false}
      ]
    }
  };

  function fillAndTrack(num) {
    document.getElementById('trackInput').value = num;
    trackCargo();
  }

  function trackCargo() {
    const v = document.getElementById('trackInput').value.trim().toUpperCase();
    const r = document.getElementById('trackResult');
    const e = document.getElementById('errMsg');
    const d = mockData[v];
    if (!d) {
      r.classList.remove('show');
      e.classList.add('show');
      return;
    }
    e.classList.remove('show');
    document.getElementById('tr-num').textContent    = v;
    document.getElementById('tr-status').textContent = d.status;
    document.getElementById('tr-eta').textContent    = d.eta;
    document.getElementById('tr-type').textContent   = d.type;
    const sc = document.getElementById('trackSteps');
    const checkSvg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
    const activeSvg = `<svg width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" fill="#0a0f1e"/></svg>`;
    sc.innerHTML = d.steps.map(s => `
      <div class="step ${s.done ? 'done' : ''} ${s.active ? 'active' : ''}">
        <div class="step-dot">${s.done && !s.active ? checkSvg : s.active ? activeSvg : ''}</div>
        <div class="step-label">${s.label}</div>
        <div class="step-loc">${s.loc}</div>
      </div>`).join('');
    r.classList.add('show');
  }

  document.getElementById('trackInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') trackCargo();
  });

  function syncWeight(v) {
    document.getElementById('weightVal').textContent   = v + ' kg';
    document.getElementById('weightInput').value = v;
    calcPrice();
  }
  function syncWeightInput(v) {
    const n = Math.min(30000, Math.max(1, parseInt(v) || 1));
    document.getElementById('weightSlider').value      = n;
    document.getElementById('weightVal').textContent   = n + ' kg';
    calcPrice();
  }
  function syncDist(v) {
    document.getElementById('distVal').textContent = v + ' km';
    calcPrice();
  }

  function calcPrice() {
    const type  = document.getElementById('cType').value;
    const w     = parseFloat(document.getElementById('weightSlider').value);
    const d     = parseFloat(document.getElementById('distSlider').value);
    const speed = document.getElementById('cSpeed').value;
    const ins   = parseFloat(document.getElementById('cIns').value);

    const rates     = {road: 0.05, sea: 0.02, air: 0.18, rail: 0.035};
    const speedMult = {std: 1, fast: 1.4, exp: 2.2};

    const base     = w * rates[type] * (d / 1000 + 1);
    const speedAdd = base * (speedMult[speed] - 1);
    const fuel     = base * 0.12;
    const total    = base + speedAdd + fuel;
    const insAmt   = total * ins;
    const grand    = total + insAmt;

    document.getElementById('priceNum').textContent   = '$' + Math.round(grand).toLocaleString();
    document.getElementById('br-base').textContent    = '$' + Math.round(base).toLocaleString();
    document.getElementById('br-speed').textContent   = '$' + Math.round(speedAdd).toLocaleString();
    document.getElementById('br-fuel').textContent    = '$' + Math.round(fuel).toLocaleString();
    document.getElementById('br-ins').textContent     = ins > 0 ? '$' + Math.round(insAmt).toLocaleString() : t('calc_ins_none');
    document.getElementById('br-total').textContent   = '$' + Math.round(grand).toLocaleString();
  }

  calcPrice();



  const TG_TOKEN_MAIN   = '8660445619:AAH8r7_8Y7tHNXQiJbAC72YG0Mherjlgi_4';
  const TG_CHAT_MAIN    = '8556541505';

  // ── Real foydalanuvchilar storage dan yuklanadi ──
  var ALL_WORKERS_DATA = [];
  var FREE_WORKERS_DATA = [];
  var selectedWorker = null;

  async function loadWorkersFromStorage() {
    try {
      const result = await window.storage.list('nlx_worker:', true);
      const keys = result && result.keys ? result.keys : [];
      const workers = [];
      for (const key of keys) {
        try {
          const r = await window.storage.get(key, true);
          if (r && r.value) {
            const w = JSON.parse(r.value);
            workers.push(w);
          }
        } catch(e) {}
      }
      ALL_WORKERS_DATA = workers;
      FREE_WORKERS_DATA = workers.filter(w => w.status === 'idle');
    } catch(e) {
      ALL_WORKERS_DATA = [];
      FREE_WORKERS_DATA = [];
    }
  }



  function makeColleagueRows(arr) {
    const headers = ["Ism","Marshrut","KM","Holat"];
    const thStyle = "text-align:left;padding:6px 8px;color:#6b7a99;font-size:10px;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid #1a2540;font-family:'DM Sans',sans-serif;white-space:nowrap";
    let html = '<thead><tr>' + headers.map(h=>`<th style="${thStyle}">${h}</th>`).join('') + '</tr></thead><tbody>';
    html += arr.map(w => {
      const s = w.status === 'active'
        ? `<span style="display:inline-flex;align-items:center;gap:3px;font-size:10px;padding:2px 7px;border-radius:20px;background:rgba(74,222,128,0.1);color:#4ade80"><span style="width:4px;height:4px;border-radius:50%;background:#4ade80;display:inline-block"></span>${t('reg_status_active')}</span>`
        : `<span style="display:inline-flex;align-items:center;gap:3px;font-size:10px;padding:2px 7px;border-radius:20px;background:rgba(107,176,245,0.1);color:#6ab0f5"><span style="width:4px;height:4px;border-radius:50%;background:#6ab0f5;display:inline-block"></span>${t('reg_status_idle')}</span>`;
      return `<tr style="border-bottom:1px solid rgba(26,37,64,0.4)">
        <td style="padding:8px;color:white;font-size:11px;font-weight:500">${w.name}</td>
        <td style="padding:8px;color:#1a7fe0;font-size:10px">${w.from} → ${w.to}</td>
        <td style="padding:8px;color:#F5C518;font-size:10px;font-weight:600">${w.km}</td>
        <td style="padding:8px">${s}</td>
      </tr>`;
    }).join('');
    return html + '</tbody>';
  }

  function makeBuyerRows(arr) {

    const headers = ["Ism","Marshrut","KM",""];
    const thStyle = "text-align:left;padding:6px 8px;color:#6b7a99;font-size:10px;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid #1a2540;font-family:'DM Sans',sans-serif;white-space:nowrap";
    let html = '<thead><tr>' + headers.map(h=>`<th style="${thStyle}">${h}</th>`).join('') + '</tr></thead><tbody>';
    html += arr.map((w, i) => {
      return `<tr style="border-bottom:1px solid rgba(26,37,64,0.4);transition:background 0.2s;cursor:pointer"
          onmouseover="this.style.background='rgba(0,87,184,0.08)'"
          onmouseout="this.style.background=''"
          onclick="openOrderModal(${i})">
        <td style="padding:8px;color:white;font-size:11px;font-weight:500">${w.name}</td>
        <td style="padding:8px;color:#1a7fe0;font-size:10px">${w.from} → ${w.to}</td>
        <td style="padding:8px;color:#F5C518;font-size:10px;font-weight:600">${w.km} km</td>
        <td style="padding:8px">
          <span style="display:inline-flex;align-items:center;gap:4px;font-size:10px;padding:3px 8px;background:#F5C518;color:#000;font-family:'Bebas Neue',sans-serif;letter-spacing:1px;cursor:pointer">
            BUYURTMA
          </span>
        </td>
      </tr>`;
    }).join('');
    return html + '</tbody>';
  }



  function openOrderModal(workerIndex) {
    selectedWorker = FREE_WORKERS_DATA[workerIndex];
    document.getElementById('orderWorkerName').textContent =
      '🚛 ' + selectedWorker.name + '  •  ' + selectedWorker.from + ' → ' + selectedWorker.to;
    document.getElementById('orderStep1').style.display = 'block';
    document.getElementById('orderStep2').style.display = 'none';
    document.getElementById('orderYuk').value    = '';
    document.getElementById('orderManzil').value = '';
    document.getElementById('orderIzoh').value   = '';
    document.getElementById('orderErr').style.display = 'none';
    document.getElementById('orderModal').classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeOrderModal() {
    document.getElementById('orderModal').classList.remove('show');
    document.body.style.overflow = '';
    selectedWorker = null;
  }


  document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeOrderModal(); });

  document.getElementById('orderModal').addEventListener('click', function(e){
    if(e.target === this) closeOrderModal();
  });

  function generateOrderId() {
    var chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789';
    var id = 'NLX-' + new Date().getFullYear() + '-';
    for(var i=0; i<5; i++) id += chars[Math.floor(Math.random()*chars.length)];
    return id;
  }

  function submitOrder() {
    var yuk    = document.getElementById('orderYuk').value.trim();
    var manzil = document.getElementById('orderManzil').value.trim();
    var izoh   = document.getElementById('orderIzoh').value.trim();
    var errEl  = document.getElementById('orderErr');

    if (!yuk || yuk.length < 3) {
      errEl.textContent = "⚠ Yuk ma'lumotini to'ldiring!";
      errEl.style.display = 'block'; return;
    }
    if (!manzil || manzil.length < 4) {
      errEl.textContent = "⚠ Manzilni kiriting! (masalan: Toshkent → Moskva)";
      errEl.style.display = 'block'; return;
    }
    errEl.style.display = 'none';

    var orderId = generateOrderId();
    var user = JSON.parse(sessionStorage.getItem('nlx_user') || '{}');
    var vaqt = new Date().toLocaleString('uz-UZ');


    var tgMsg =
      '📦 <b>YANGI BUYURTMA — NeoLogix</b>\n\n' +
      '🆔 Buyurtma ID: <b>' + orderId + '</b>\n\n' +
      '─── HARIDOR ───\n' +
      '👤 Ism:      ' + (user.name  || '—') + '\n' +
      '📞 Telefon:  ' + (user.phone || '—') + '\n' +
      '📍 Shahar:   ' + (user.city  || '—') + '\n\n' +
      '─── ISHCHI ───\n' +
      '🚛 Ishchi:   ' + (selectedWorker ? selectedWorker.name : '—') + '\n' +
      '📞 Tel:      ' + (selectedWorker ? selectedWorker.phone : '—') + '\n' +
      '🗺 Marshrut: ' + (selectedWorker ? selectedWorker.from + ' → ' + selectedWorker.to : '—') + '\n\n' +
      '─── YUK ───\n' +
      '📦 Yuk:      ' + yuk + '\n' +
      '📍 Manzil:   ' + manzil + '\n' +
      '💬 Izoh:     ' + (izoh || "Yo'q") + '\n\n' +
      '🕐 Vaqt: ' + vaqt + '\n' +
      '🌐 Manba: neologix.uz';


    fetch('https://api.telegram.org/bot' + TG_TOKEN_MAIN + '/sendMessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TG_CHAT_MAIN, text: tgMsg, parse_mode: 'HTML' })
    }).catch(function(e){ console.warn('TG xato:', e); });

 
    document.getElementById('orderStep1').style.display = 'none';
    document.getElementById('orderStep2').style.display = 'block';
    document.getElementById('orderIdDisplay').textContent = orderId;
  }



  async function initHeroSideList() {
    var role = sessionStorage.getItem('nlx_role');
    var params = new URLSearchParams(window.location.search);
    if (params.get('role')) {
      role = params.get('role');
      sessionStorage.setItem('nlx_role', role);
    }
    if (!role) return;

    // Storage dan yuklash
    await loadWorkersFromStorage();

    if (role === 'worker') {
      document.getElementById('heroColleagues').style.display = 'block';
      if (ALL_WORKERS_DATA.length === 0) {
        document.getElementById('heroColTable').innerHTML = '<tbody><tr><td colspan="4" style="padding:20px;text-align:center;color:#6b7a99;font-size:12px">' + t('reg_empty_colleagues') + '</td></tr></tbody>';
      } else {
        document.getElementById('heroColTable').innerHTML = makeColleagueRows(ALL_WORKERS_DATA);
      }
    } else if (role === 'buyer') {
      document.getElementById('heroBuyerList').style.display = 'block';
      if (FREE_WORKERS_DATA.length === 0) {
        document.getElementById('heroWrkTable').innerHTML = '<tbody><tr><td colspan="4" style="padding:20px;text-align:center;color:#6b7a99;font-size:12px">' + t('reg_empty_workers') + '</td></tr></tbody>';
      } else {
        document.getElementById('heroWrkTable').innerHTML = makeBuyerRows(FREE_WORKERS_DATA);
      }
    }
  }

  initHeroSideList();

  
  var ALL_WORKERS = [];
  var FREE_WORKERS = [];

  async function loadAndRender() {
    try {
      const result = await window.storage.list('nlx_worker:', true);
      const keys = result && result.keys ? result.keys : [];
      const workers = [];
      for (const key of keys) {
        try {
          const r = await window.storage.get(key, true);
          if (r && r.value) workers.push(JSON.parse(r.value));
        } catch(e) {}
      }
      ALL_WORKERS = workers;
      FREE_WORKERS = workers.filter(function(w){ return w.status === 'idle'; });
    } catch(e) {
      ALL_WORKERS = [];
      FREE_WORKERS = [];
    }
    renderColleagues();
    renderFreeWorkers();
  }



  function renderRow(w, isColleague) {
    var statusHtml = w.status === 'active'
      ? '<span class="worker-status ws-active"><span class="ws-dot"></span>' + t('reg_status_active') + '</span>'
      : '<span class="worker-status ws-idle"><span class="ws-dot"></span>' + t('reg_status_idle') + '</span>';

    var routeCell = isColleague
      ? '<div class="worker-route">' + w.from + ' → ' + w.to + '</div>'
      : '<div class="worker-route">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 14 8 14s8-8.75 8-14a8 8 0 0 0-8-8z"/></svg>' +
          w.from + ' → ' + w.to +
        '</div>';

    return '<tr>' +
      '<td class="worker-name">' + w.name + '</td>' +
      '<td>' + routeCell + '</td>' +
      '<td class="worker-km">' + w.km + ' km</td>' +
      '<td>' + statusHtml + '</td>' +
      '</tr>';
  }

  function renderColleagues() {
    var tbody = document.getElementById('colleagueTbody');
    if (ALL_WORKERS.length === 0) {
      tbody.innerHTML = '<tr><td colspan="4" style="padding:20px;text-align:center;color:#6b7a99;font-size:12px">' + t('reg_empty_colleagues') + '</td></tr>';
    } else {
      tbody.innerHTML = ALL_WORKERS.map(function(w){ return renderRow(w, true); }).join('');
    }
  }
  function renderFreeWorkers() {
    var tbody = document.getElementById('workersTbody');
    if (FREE_WORKERS.length === 0) {
      tbody.innerHTML = '<tr><td colspan="4" style="padding:20px;text-align:center;color:#6b7a99;font-size:12px">' + t('reg_empty_workers') + '</td></tr>';
    } else {
      tbody.innerHTML = FREE_WORKERS.map(function(w){ return renderRow(w, false); }).join('');
    }
  }

  loadAndRender();



  var currentRole = 'worker';

  function selectRole(role) {
    currentRole = role;


    document.getElementById('roleWorker').className = 'role-card' + (role === 'worker' ? ' active' : '');
    document.getElementById('roleBuyer').className  = 'role-card' + (role === 'buyer'  ? ' active' : '');


    var wf = document.getElementById('workerFields');
    var bf = document.getElementById('buyerFields');
    if (role === 'worker') {
      wf.classList.add('show'); wf.style.display = '';
      bf.classList.remove('show'); bf.style.display = 'none';
    } else {
      wf.classList.remove('show'); wf.style.display = 'none';
      bf.classList.add('show'); bf.style.display = '';
    }


    var cPanel = document.getElementById('colleaguePanel');
    var wPanel = document.getElementById('workerPanel');
    if (role === 'worker') {
      cPanel.classList.remove('hidden');
      wPanel.classList.add('hidden');
    } else {
      cPanel.classList.add('hidden');
      wPanel.classList.remove('hidden');
    }
  }


  selectRole('worker');



  function showError(id, msg) {
    var el = document.getElementById(id);
    el.style.borderColor = '#f87171';
    el.title = msg;
    el.focus();
    setTimeout(function(){ el.style.borderColor=''; el.title=''; }, 3000);
    return false;
  }

  function formatName(n) {
    return n.trim().replace(/\s+/g,' ').split(' ').map(function(w){
      return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    }).join(' ');
  }

  function validateForm() {
    var fname = document.getElementById('fname').value.trim();
    var lname = document.getElementById('lname').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var city  = document.getElementById('city').value;
    var pass  = document.getElementById('pass').value;

    if (!fname || fname.length < 2) return showError('fname', "Ism noto'g'ri!");
    if (!lname || lname.length < 2) return showError('lname', "Familiya noto'g'ri!");
    if (!phone || phone.replace(/\D/g,'').length < 9) return showError('phone', "Telefon noto'g'ri!");
    if (!city) return showError('city', "Shahar tanlang!");
    if (!pass || pass.length < 6) return showError('pass', "Parol kamida 6 ta belgi!");

    if (currentRole === 'worker') {
      var from = document.getElementById('fromCity').value.trim();
      var to   = document.getElementById('toCity').value.trim();
      var tr   = document.getElementById('transport').value;
      var cap  = document.getElementById('capacity').value;
      if (!from) return showError('fromCity', "Boshlang'ich shahar!");
      if (!to)   return showError('toCity', "Manzil shahar!");
      if (!tr)   return showError('transport', "Transport turi!");
      if (!cap)  return showError('capacity', "Yuk sig'imi!");
    }

    return true;
  }



  async function handleRegister() {
    if (!validateForm()) return;

    var fname = formatName(document.getElementById('fname').value);
    var lname = formatName(document.getElementById('lname').value);

    var payload = {
      role:  currentRole,
      name:  fname + ' ' + lname,
      phone: document.getElementById('phone').value.trim(),
      city:  document.getElementById('city').value
    };

    if (currentRole === 'worker') {
      payload.from      = document.getElementById('fromCity').value.trim();
      payload.to        = document.getElementById('toCity').value.trim();
      payload.transport = document.getElementById('transport').value;
      payload.capacity  = document.getElementById('capacity').value;
      payload.status    = 'idle'; 
      payload.km        = '—';
      payload.registeredAt = Date.now();

    
      var storageKey = 'nlx_worker:' + Date.now() + '_' + Math.random().toString(36).slice(2,7);
      try {
        await window.storage.set(storageKey, JSON.stringify({
          name:   payload.name,
          phone:  payload.phone,
          from:   payload.from,
          to:     payload.to,
          km:     payload.km,
          status: payload.status,
          transport: payload.transport,
          city:   payload.city
        }), true); 
      } catch(e) {
        console.warn('Storage xato:', e);
      }
    } else {
      payload.company   = document.getElementById('company').value.trim();
      payload.mainRoute = document.getElementById('mainRoute').value;
    }


    sessionStorage.setItem('nlx_role', currentRole);
    sessionStorage.setItem('nlx_user', JSON.stringify({
      name:  payload.name,
      phone: payload.phone,
      city:  payload.city,
      role:  currentRole
    }));

    document.getElementById('formSection').style.display = 'none';
    var sc = document.getElementById('successScreen');
    sc.classList.add('show');
    var msg = currentRole === 'worker'
      ? fname + ', ' + t('reg_success_worker_msg')
      : fname + ', ' + t('reg_success_buyer_msg');
    document.getElementById('successMsg').textContent = msg;

    setTimeout(function() {
      window.location.href = 'index.html';
    }, 2000);
  }