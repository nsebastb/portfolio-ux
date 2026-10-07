/* Nicole Sebastiani — interacción */
(() => {
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const root = document.documentElement;
const cursor = document.querySelector('.cursor');
const mix = (a, b, p) => { const h = s => [1,3,5].map(i => parseInt(s.slice(i, i + 2), 16)); const x = h(a), y = h(b); return '#' + x.map((v, i) => Math.round(v * p + y[i] * (1 - p)).toString(16).padStart(2, '0')).join('') };
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover:hover) and (pointer:fine)').matches;
const L = () => root.dataset.lang === 'en' ? 'en' : 'es';
const t = o => (o && typeof o === 'object') ? (o[L()] ?? o.es) : (o ?? '');
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

const TONES = {clarito:'#EE2A1F', telco:'#2B2FE0', pago:'#0B8A7A', energy:'#B85C00', salud:'#0A78AE',
  'research-telco':'#4B3FD1', portabilidad:'#9A2E5E', catering:'#C2386F', veridik:'#6B3FE0'};
const UI = {
  role:{es:'Mi rol',en:'My role'}, sector:{es:'Sector',en:'Sector'}, year:{es:'Año',en:'Year'}, tools:{es:'Herramientas',en:'Tools'},
  glance:{es:'En resumen',en:'At a glance'}, challenge:{es:'El reto',en:'The challenge'}, steps:{es:'El flujo, paso a paso',en:'The flow, step by step'},
  process:{es:'El proceso',en:'The process'}, demo:{es:'Demo real del agente',en:'Real agent demo'},
  sound:{es:'Activa el sonido para escucharlo.',en:'Turn the sound on to hear it.'},
  emo:{es:'Matriz de emociones',en:'Emotion matrix'}, design:{es:'Diseño',en:'Design'}, friction:{es:'Fricción detectada en el testing',en:'Friction found in testing'},
  drivers:{es:'Cinco drivers que habilitan avanzar',en:'Five drivers that unlock progress'},
  prev:{es:'Anterior',en:'Previous'}, next:{es:'Siguiente',en:'Next'}, live:{es:'Pruébalo en vivo',en:'Try it live'},
  talk:{es:'Hablar con Clarito',en:'Talk to Clarito'}, speaking:{es:'hablando',en:'speaking'}, listening:{es:'escuchando',en:'listening'},
  from:{es:'Fuente: agente de',en:'Source: agent for'},
  srcName:{telco:{es:'telco',en:'telco'},energy:{es:'energía',en:'energy'},salud:{es:'salud',en:'healthcare'}}
};

/* ---------------- idioma ---------------- */
function setLang(l){
  root.dataset.lang = l; root.lang = l;
  try{ localStorage.setItem('ns-lang', l) }catch(e){}
  $$('[data-set-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.setLang === l)));
  renderIndex(); renderChips(); if (current) renderCase(current, false);
  splitHeadline(true);
}
$$('[data-set-lang]').forEach(b => b.addEventListener('click', () => setLang(b.dataset.setLang)));

/* ---------------- fondo ambiental ---------------- */
let ambLocked = null;
function setAmb(c1, c2, c3){ root.style.setProperty('--c1', c1); root.style.setProperty('--c2', c2); root.style.setProperty('--c3', c3) }
function sectionAmb(sec){ const [a,b,c] = sec.dataset.amb.split(','); setAmb(a,b,c) }
let activeSec = null;
const nav = $('.nav');
const secIO = new IntersectionObserver(es => {
  es.forEach(e => {
    if (!e.isIntersecting) return;
    activeSec = e.target;
    if (!ambLocked) sectionAmb(activeSec);
    nav.classList.toggle('solid', activeSec.dataset.theme === 'light'); root.dataset.sec = activeSec.dataset.theme;
  });
}, {rootMargin:'-50% 0px -50% 0px'});
$$('[data-amb]').forEach(s => secIO.observe(s));

/* progreso de lectura */
const prog = $('.progress');
addEventListener('scroll', () => {
  const h = document.documentElement.scrollHeight - innerHeight;
  prog.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
  nav.classList.toggle('scrolled', scrollY > 40);
}, {passive:true});

/* ---------------- campo de voz (hero + contacto) ---------------- */
function voiceField(canvas, opts = {}){
  const ctx = canvas.getContext('2d');
  let w, h, dpr, lines, raf, visible = true;
  const st = {energy: opts.energy ?? .35, target: opts.energy ?? .35, mx: .62, my: .5, tmx: .62, tmy: .5, ripples: []};
  function size(){
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr; ctx.setTransform(dpr,0,0,dpr,0,0);
    lines = Math.max(14, Math.round(h / (opts.gap || 26)));
  }
  size(); addEventListener('resize', size);
  const host = canvas.parentElement;
  host.addEventListener('pointermove', e => {
    const r = canvas.getBoundingClientRect();
    st.tmx = (e.clientX - r.left) / r.width; st.tmy = (e.clientY - r.top) / r.height;
    st.target = Math.max(st.target, .55);
    clearTimeout(st.idle); st.idle = setTimeout(() => st.target = opts.energy ?? .35, 900);
  });
  host.addEventListener('pointerdown', e => {
    if (e.target.closest('a,button')) return;
    const r = canvas.getBoundingClientRect();
    st.ripples.push({x:(e.clientX - r.left), y:(e.clientY - r.top), t:0});
  });
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible && !reduce) loop() }, {threshold:0});
  io.observe(canvas);
  let time = 0;
  function draw(){
    st.energy += (st.target - st.energy) * .06;
    st.mx += (st.tmx - st.mx) * .07; st.my += (st.tmy - st.my) * .07;
    ctx.clearRect(0,0,w,h);
    const cx = st.mx * w, amp = h * .07 * st.energy;
    for (let i = 0; i < lines; i++){
      const y0 = (i + .5) * h / lines;
      const dy = Math.abs(y0 / h - st.my);
      const near = Math.exp(-dy * dy * 18);
      ctx.beginPath();
      for (let x = 0; x <= w; x += 6){
        const dx = (x - cx) / w;
        const env = Math.exp(-dx * dx * 9) * (.35 + near * .9);
        const speech = .55 + .45 * Math.sin(time * 2.1 + i * .3) * Math.sin(time * .73 + i);
        let y = y0 - env * amp * speech * (Math.sin(x * .021 + time * 3 + i * .55) + .55 * Math.sin(x * .047 - time * 2.2 + i));
        for (const r of st.ripples){
          const d = Math.hypot(x - r.x, y0 - r.y), ring = r.t * 900;
          y -= Math.exp(-((d - ring) ** 2) / 1600) * 22 * (1 - r.t);
        }
        x ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      }
      ctx.strokeStyle = `rgba(255,255,255,${.12 + near * .38})`;
      ctx.lineWidth = 1 + near * .6;
      ctx.stroke();
    }
    st.ripples = st.ripples.filter(r => (r.t += .012) < 1);
    time += .016;
  }
  function loop(){ cancelAnimationFrame(raf); if (!visible) return; draw(); raf = requestAnimationFrame(loop) }
  if (reduce) draw(); else loop();
  return st;
}
const heroField = voiceField($('#voice'), {energy:.35, gap:24});
voiceField($('#voice2'), {energy:.25, gap:30});

/* el campo de voz se intensifica mientras aparece el titular */
function setSpeaking(on){
  heroField.target = on ? 1 : .35;
}

/* titular palabra a palabra */
function splitHeadline(instant){
  const h1 = $('[data-words]');
  $$('span[lang]', h1).forEach(sp => {
    if (!sp.dataset.raw) sp.dataset.raw = sp.textContent.trim();
    sp.innerHTML = sp.dataset.raw.split(' ').map(w => `<span class="w${instant || reduce ? ' on' : ''}">${esc(w)}</span>`).join(' ');
  });
}
splitHeadline(false);
if (!reduce){
  setTimeout(() => {
    const ws = $$(`[data-words] span[lang="${L()}"] .w`);
    setSpeaking(true);
    ws.forEach((w, i) => setTimeout(() => w.classList.add('on'), i * 170));
    setTimeout(() => { setSpeaking(false); $$('[data-words] .w').forEach(w => w.classList.add('on')) }, ws.length * 170 + 700);
  }, 450);
}

/* ---------------- burbujas de pregunta ---------------- */
const askIO = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const a = e.target; askIO.unobserve(a);
  if (reduce){ a.classList.add('said'); return }
  a.classList.add('is-typing');
  setTimeout(() => { a.classList.remove('is-typing'); a.classList.add('said') }, 1000);
}), {threshold:.6});
$$('.ask').forEach(a => askIO.observe(a));

/* ---------------- contadores ---------------- */
const cntIO = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; cntIO.unobserve(e.target);
  const el = e.target, end = +el.dataset.count; if (reduce) return;
  const t0 = performance.now();
  (function f(n){ const p = Math.min(1, (n - t0) / 1100); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f) })(t0);
}), {threshold:.8});
$$('[data-count]').forEach(e => cntIO.observe(e));

/* ---------------- GSAP: método horizontal + parallax ---------------- */
if (window.gsap && window.ScrollTrigger && !reduce){
  gsap.registerPlugin(ScrollTrigger);
  const mm = gsap.matchMedia();
  mm.add('(min-width: 761px)', () => {
    const track = $('.track'), outer = $('.track-outer');
    const dist = () => Math.max(0, track.scrollWidth - innerWidth);
    gsap.to(track, {x: () => -dist(), ease:'none',
      scrollTrigger:{trigger:outer, start:'center center', end:() => '+=' + dist(), pin:true, scrub:.6, invalidateOnRefresh:true}});
    gsap.from('.mstep', {y:60, opacity:0, stagger:.08, duration:.8, ease:'power3.out', scrollTrigger:{trigger:outer, start:'top 80%'}});
  });
  gsap.to('[data-parallax] img', {yPercent:-8, scale:1.08, ease:'none', scrollTrigger:{trigger:'[data-parallax]', scrub:true}});
  gsap.from('.stage', {y:80, rotate:-2, opacity:0, duration:1.1, ease:'power3.out', scrollTrigger:{trigger:'.stage', start:'top 85%'}});
  gsap.from('.skill-col', {y:40, opacity:0, stagger:.1, duration:.8, ease:'power3.out', scrollTrigger:{trigger:'.skill-cols', start:'top 85%'}});
  gsap.from('.contact h2', {yPercent:40, opacity:0, duration:1.1, ease:'power4.out', scrollTrigger:{trigger:'.contact h2', start:'top 90%'}});
}

/* ---------------- simulador de emociones (con voz real) ---------------- */
const chipsBox = $('.chips');
let emoIdx = 0, emoState = {energy:.5, speed:1, warmth:.7}, typer;
const voice = new Audio(); voice.preload = 'none';
let actx, analyser, freq, playing = false;
const listenBtn = $('.listen');
let hasVoice = false;
fetch('assets/voz/greet-es.mp3', {method:'HEAD'}).then(r => { hasVoice = r.ok; listenBtn.hidden = !r.ok }).catch(() => { listenBtn.hidden = true });
function setListen(state){
  listenBtn.dataset.state = state;
  listenBtn.querySelector('.lbl').textContent = t({play:{es:'Escuchar',en:'Listen'}, stop:{es:'Detener',en:'Stop'}, na:{es:'Audio no disponible',en:'Audio unavailable'}}[state]);
  listenBtn.disabled = state === 'na';
}
function audioGraph(){
  if (actx) return;
  try{
    actx = new (window.AudioContext || window.webkitAudioContext)();
    const src = actx.createMediaElementSource(voice);
    analyser = actx.createAnalyser(); analyser.fftSize = 256; analyser.smoothingTimeConstant = .72;
    src.connect(analyser); analyser.connect(actx.destination);
    freq = new Uint8Array(analyser.frequencyBinCount);
  }catch(e){ actx = null }
}
function typeLine(txt, ms){
  const say = $('.emo-say'); clearInterval(typer);
  if (reduce){ say.textContent = txt; return }
  say.textContent = ''; let k = 0;
  typer = setInterval(() => { say.textContent = txt.slice(0, ++k); if (k >= txt.length) clearInterval(typer) }, ms);
}
// Suena UNA sola vez por clic; cambiar de emoción corta la anterior. Los audios son los originales en español.
function play(){
  const e = EMO_PLAY[emoIdx];
  audioGraph(); if (actx && actx.state === 'suspended') actx.resume();
  voice.pause(); voice.loop = false;
  voice.src = `assets/voz/${e.k}-es.mp3`;
  voice.currentTime = 0;
  voice.play().then(() => { playing = true; setListen('stop') }).catch(() => { playing = false; setListen('na') });
}
voice.addEventListener('loadedmetadata', () => { const txt = t(EMO_PLAY[emoIdx].say); if (isFinite(voice.duration)) typeLine(txt, Math.max(18, voice.duration * 900 / txt.length)) });
voice.addEventListener('ended', () => { playing = false; setListen('play') });
voice.addEventListener('error', () => { playing = false; setListen('na') });
listenBtn.addEventListener('click', () => { if (playing){ voice.pause(); playing = false; setListen('play'); clearInterval(typer); $('.emo-say').textContent = t(EMO_PLAY[emoIdx].say) } else play() });
function renderChips(){
  chipsBox.innerHTML = EMO_PLAY.map((e, i) => `<button type="button" aria-pressed="${i === emoIdx}" data-i="${i}">${esc(t(e.e))}</button>`).join('');
  showEmo(emoIdx, true);
}
chipsBox.addEventListener('click', e => { const b = e.target.closest('button'); if (b){ showEmo(+b.dataset.i); if (hasVoice) play() } });
function showEmo(i, instant){
  emoIdx = i; const e = EMO_PLAY[i];
  $$('button', chipsBox).forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.i === i)));
  $('.emo-e').textContent = t(e.e).toLowerCase();
  $('.emo-src').textContent = `${t(UI.from)} ${t(UI.srcName[e.src])}`;
  $('.emo-tag').textContent = e.tag;
  $('.emo-tone').textContent = t(e.tone);
  emoState = {energy:e.energy, speed:e.speed, warmth:e.warmth};
  $$('[data-m]').forEach(m => m.style.width = Math.round((m.dataset.m === 'speed' ? e.speed / 1.5 : e[m.dataset.m]) * 100) + '%');
  if (instant){ $('.emo-say').textContent = t(e.say); voice.pause(); playing = false; setListen('play'); return }
  typeLine(t(e.say), 38 / e.speed);
}
(function emoWave(){
  const c = $('#emoWave'), ctx = c.getContext('2d'); let time = 0, cur = {energy:.5, speed:1, warmth:.7}, vis = false, lvl = 0;
  new IntersectionObserver(([en]) => { vis = en.isIntersecting; if (vis) loop() }).observe(c);
  function loop(){
    if (!vis) return;
    const dpr = Math.min(devicePixelRatio || 1, 2), w = c.clientWidth, h = c.clientHeight;
    if (c.width !== w * dpr){ c.width = w * dpr; c.height = h * dpr }
    ctx.setTransform(dpr,0,0,dpr,0,0); ctx.clearRect(0,0,w,h);
    for (const k in cur) cur[k] += (emoState[k] - cur[k]) * .05;
    const live = playing && analyser;
    if (live) analyser.getByteFrequencyData(freq);
    lvl += ((live ? 1 : 0) - lvl) * .08;
    const n = Math.floor(w / 7), mid = (n - 1) / 2;
    for (let i = 0; i < n; i++){
      const x = i * 7 + 3, p = i / n, env = Math.sin(p * Math.PI);
      const v = (Math.sin(i * .35 + time * 4 * cur.speed) * .5 + .5) * (Math.sin(i * .11 - time * 2.3 * cur.speed) * .5 + .5);
      const idle = env * h * .9 * cur.energy * (.25 + v) * (1 - lvl * .85);
      let real = 0;
      if (live){ const bin = Math.min(freq.length - 1, Math.floor(Math.abs(i - mid) / mid * 70) + 2); real = (freq[bin] / 255) * h * .95 * (.35 + env * .65) }
      const bh = Math.max(3, idle + real * lvl);
      const warm = cur.warmth, a = live ? .45 + (freq[Math.min(freq.length - 1, Math.floor(Math.abs(i - mid) / mid * 70) + 2)] / 255) * .55 : .35 + v * .65;
      ctx.fillStyle = `rgba(255,${Math.round(255 - warm * 70)},${Math.round(255 - warm * 120)},${a})`;
      ctx.beginPath(); ctx.roundRect ? ctx.roundRect(x - 2, h/2 - bh/2, 4, bh, 2) : ctx.rect(x - 2, h/2 - bh/2, 4, bh); ctx.fill();
    }
    time += reduce ? 0 : .016;
    requestAnimationFrame(loop);
  }
})();


/* ---------------- índice de casos ---------------- */
const indexEl = $('#index'), peek = $('.peek');
let filter = 'all';
function renderIndex(){
  indexEl.innerHTML = CASES.map((c, i) => {
    const grp = c.kind === 'research' ? 'research' : 'voice';
    const cls = c.kind === 'red' ? 'red' : c.kind === 'voice' ? 'voice' : '';
    return `<li class="row${filter !== 'all' && filter !== grp ? ' hidden' : ''}" data-grp="${grp}" style="--tone:${TONES[c.id]}">
      <button type="button" data-open-case="${c.id}">
        <span class="num">${String(i + 1).padStart(2, '0')}</span>
        <span class="t">${esc(t(c.title))}<small>${esc(t(c.short))}</small></span>
        <span class="sec">${esc(t(c.sector))}</span>
        <span class="kind ${cls}">${esc(t(c.type))}</span>
        <span class="go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </button></li>`;
  }).join('');
}
$$('[data-filter]').forEach(b => b.addEventListener('click', () => {
  filter = b.dataset.filter;
  $$('[data-filter]').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
  $$('.row', indexEl).forEach(r => {
    const hide = filter !== 'all' && filter !== r.dataset.grp;
    if (!reduce && window.gsap){
      if (hide) gsap.to(r, {opacity:0, height:0, duration:.35, ease:'power2.in', onComplete:() => r.classList.add('hidden')});
      else { r.classList.remove('hidden'); gsap.fromTo(r, {opacity:0, height:0}, {opacity:1, height:'auto', duration:.45, ease:'power2.out'}) }
    } else r.classList.toggle('hidden', hide);
  });
}));
/* tono del caso sobre el fondo + vista previa flotante */
function caseById(id){ return CASES.find(c => c.id === id) }
function peekHTML(c){
  if (c.id === 'clarito') return `<img src="assets/clarito-store.jpg" alt=""><img src="assets/clarito.webp" alt="" style="position:absolute;inset:auto 0 0 25%;width:50%;height:auto">`;
  if (c.videos) return `<img src="${c.videos[0][1]}" alt="" style="opacity:.25"><div class="wave">${'<b></b>'.repeat(14)}</div>`;
  if (c.shots) return `<img src="${c.shots[c.shots.length > 1 ? 1 : 0]}" alt="" style="object-fit:contain;background:#fff">`;
  return `<div class="wave" style="font-size:44px;font-weight:800;color:#fff;letter-spacing:-.04em">AS-IS → TO-BE</div>`;
}
let peekId = null;
indexEl.addEventListener('pointerover', e => {
  const b = e.target.closest('[data-open-case]'); if (!b) return;
  const c = caseById(b.dataset.openCase), tone = TONES[c.id];
  ambLocked = c.id;
  setAmb('#EEEFF7', mix(tone, '#EEEFF7', .34), mix(tone, '#F5F5FA', .12));
  if (peekId !== c.id){ peek.innerHTML = peekHTML(c); peek.style.background = tone; peekId = c.id;
    $$('.wave b', peek).forEach((x, i) => x.style.animationDelay = (i * .07) + 's') }
  peek.classList.add('on');
});
indexEl.addEventListener('pointerleave', () => { ambLocked = null; peek.classList.remove('on'); if (activeSec) sectionAmb(activeSec) });
indexEl.addEventListener('focusin', e => {
  const b = e.target.closest('[data-open-case]'); if (!b) return;
  const tone = TONES[b.dataset.openCase];
  setAmb('#EEEFF7', mix(tone, '#EEEFF7', .34), mix(tone, '#F5F5FA', .12));
});
let px = 0, py = 0, tx = 0, ty = 0;
addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; cursor.classList.add('seen') }, {passive:true});
(function follow(){ px += (tx - px) * .16; py += (ty - py) * .16;
  peek.style.left = px + 'px'; peek.style.top = py + 'px';
  cursor.style.transform = `translate(${tx}px,${ty}px)`;
  requestAnimationFrame(follow) })();

/* ---------------- panel de caso ---------------- */
const dlg = $('#caseDlg'), body = $('#csBody'), panel = $('.case-panel', dlg);
let current = null, lastFocus = null;
function renderCase(id, scrollTop = true){
  const c = caseById(id); current = id;
  const i = CASES.indexOf(c), prev = CASES[(i - 1 + CASES.length) % CASES.length], next = CASES[(i + 1) % CASES.length];
  dlg.style.setProperty('--tone', TONES[id]);
  $('.crumb', dlg).textContent = `${String(i + 1).padStart(2,'0')} / ${String(CASES.length).padStart(2,'0')} · ${t(c.title)}`;
  const meta = [[UI.role, t(c.role)], [UI.sector, t(c.sector)], c.tools ? [UI.tools, c.tools] : [UI.year, c.year || '—']];
  let h = `<header class="cs-hero">
    <span class="k">${esc(t(c.type))}</span>
    <h2 id="csTitle">${esc(t(c.title))}</h2>
    <p class="line">${esc(t(c.line))}</p>
    <p class="lead">${esc(t(c.lead))}</p>
    <dl class="cs-meta">${meta.map(([k, v]) => `<div><dt>${t(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
    ${c.live ? `<div class="hero-cta"><button class="btn btn-white" type="button" data-open-live style="color:var(--tone)">${t(UI.talk)}</button></div>` : ''}
  </header>
  <div class="cs-stats">${c.stats.map(([v, l]) => `<div class="cs-stat"><b>${esc(v)}</b><span>${esc(t(l))}</span></div>`).join('')}</div>
  <section class="cs-sec"><h3>${t(UI.challenge)}</h3><div class="cs-two"><div><p>${esc(t(c.challenge))}</p><p>${esc(t(c.answer))}</p></div><p class="voice-quote">${esc(t(c.quote))}</p></div></section>
  <section class="cs-sec"><h3>${t(c.kind === 'research' ? UI.process : UI.steps)}</h3><ol class="steps">${c.steps.map(([a, b, tag]) => `<li><div><h4>${esc(t(a))}</h4><p>${esc(t(b))}</p></div>${tag ? `<code>${esc(tag)}</code>` : '<span></span>'}</li>`).join('')}</ol></section>`;
  if (c.videos){
    const phones = c.videos.filter(v => !v[2]), webs = c.videos.filter(v => v[2]);
    h += `<section class="cs-sec"><h3>${t(UI.demo)}</h3><div class="demos${webs.length ? ' mixed' : ''}">`
      + phones.map(([s, p]) => `<figure class="phone-wrap"><div class="phone"><video src="${s}" poster="${p}" controls playsinline preload="none"></video></div><figcaption class="cap">${t(UI.sound)}</figcaption></figure>`).join('')
      + webs.map(([s, p, lab]) => `<figure class="browser"><div class="bar" aria-hidden="true"><i></i><i></i><i></i><span class="url">${esc(t(lab))}</span></div><video src="${s}" poster="${p}" autoplay muted loop playsinline preload="metadata" data-ambient aria-label="${esc(t(lab))}"></video></figure>`).join('')
      + `</div></section>`;
  }
  if (c.live) h += `<section class="cs-sec"><h3>${t(UI.live)}</h3><div class="stage" style="max-width:820px;margin:0 auto"><img class="logo" src="assets/ntt-logo.png" alt="NTT DATA"><div class="shadow"></div><div class="mascot"><img src="assets/clarito.webp" alt="Clarito"></div></div><div class="hero-cta" style="justify-content:center"><button class="btn btn-red" type="button" data-open-live>${t(UI.talk)}</button></div></section>`;
  if (c.shots) h += `<section class="cs-sec"><h3>${t(UI.design)}</h3><div class="shots${c.shots.length > 1 ? ' three' : ''}">${c.shots.map(s => `<img src="${s}" alt="${esc(t(c.title))}" loading="lazy">`).join('')}</div></section>`;
  if (c.bars) h += `<section class="cs-sec"><h3>${t(UI.friction)}</h3><div class="fbars">${c.bars.map(([l, v, lab]) => `<div class="bar"><span>${esc(t(l))}</span><span class="tr"><i style="--v:${v}"></i></span><b>${esc(t(lab))}</b></div>`).join('')}</div></section>`;
  if (c.emo) h += `<section class="cs-sec"><h3>${t(UI.emo)}</h3><div class="emo">${c.emo.map(([w, tn, s]) => `<div><span class="when">${esc(t(w))}</span><span class="tone">${esc(t(tn))}</span><q>${esc(t(s))}</q></div>`).join('')}</div></section>`;
  if (c.drivers) h += `<section class="cs-sec"><h3>${t(c.driversTitle || UI.drivers)}</h3><div class="toolbox">${c.drivers.map(d => `<span class="k" style="background:var(--tone);font-size:16px;padding:10px 18px">${esc(t(d))}</span>`).join('')}</div></section>`;
  h += `<section class="cs-sec"><h3>${esc(t(c.tilesTitle))}</h3><div class="tiles">${c.tiles.map(([a, b]) => `<div><h4>${esc(t(a))}</h4><p>${t(b)}</p></div>`).join('')}</div></section>
  <nav class="cs-next"><button type="button" data-go="${prev.id}"><span>${t(UI.prev)}</span><b>${esc(t(prev.title))}</b></button>
  <button class="nx" type="button" data-go="${next.id}"><span>${t(UI.next)}</span><b>${esc(t(next.title))}</b></button></nav>`;
  body.innerHTML = h;
  if (scrollTop) panel.scrollTop = 0;
  if (!reduce && window.gsap && scrollTop){
    gsap.from($$('.cs-hero > *, .cs-stat', body), {y:24, opacity:0, stagger:.05, duration:.7, ease:'power3.out', delay:.15});
  }
}
function openCase(id){
  lastFocus = document.activeElement;
  renderCase(id);
  dlg.hidden = false; dlg.classList.add('open'); document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => requestAnimationFrame(() => dlg.classList.add('show')));
  setTimeout(() => $('[data-close].icon-btn', dlg).focus(), 80);
  history.replaceState(null, '', '#caso-' + id);
}
function closeCase(){
  dlg.classList.remove('show'); $$('video', dlg).forEach(v => v.pause());
  setTimeout(() => { dlg.classList.remove('open'); dlg.hidden = true; current = null }, reduce ? 0 : 550);
  document.body.style.overflow = '';
  history.replaceState(null, '', location.pathname + location.search);
  lastFocus && lastFocus.focus();
}
document.addEventListener('click', e => {
  const o = e.target.closest('[data-open-case]'); if (o){ openCase(o.dataset.openCase); return }
  const g = e.target.closest('[data-go]'); if (g){ renderCase(g.dataset.go); history.replaceState(null,'','#caso-' + g.dataset.go); return }
  if (e.target.closest('[data-close]')) closeCase();
  if (e.target.closest('[data-prev]') || e.target.closest('[data-next]')){
    const i = CASES.findIndex(c => c.id === current), d = e.target.closest('[data-next]') ? 1 : -1;
    const id = CASES[(i + d + CASES.length) % CASES.length].id; renderCase(id); history.replaceState(null,'','#caso-' + id);
  }
  if (e.target.closest('[data-open-live]')) openLive();
  if (e.target.closest('[data-close-live]')) closeLive();
});
/* pausar otros videos */
document.addEventListener('play', e => { if (e.target.hasAttribute('data-ambient')) return; $$('video:not([data-ambient])').forEach(v => v !== e.target && v.pause()) }, true);

/* ---------------- Clarito en vivo ---------------- */
const live = $('#live'), frame = $('iframe', live);
let liveFocus = null;
function openLive(){
  window.dispatchEvent(new Event('nikkita-stop'));
  liveFocus = document.activeElement;
  if (!frame.src) frame.src = frame.dataset.src;
  live.hidden = false; live.classList.add('open'); document.body.style.overflow = 'hidden';
  setTimeout(() => $('[data-close-live].icon-btn', live).focus(), 60);
}
function closeLive(){
  live.classList.remove('open'); live.hidden = true; frame.src = '';
  if (!dlg.classList.contains('open')) document.body.style.overflow = '';
  liveFocus && liveFocus.focus();
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape'){ if (live.classList.contains('open')) closeLive(); else if (dlg.classList.contains('open')) closeCase() }
  if (dlg.classList.contains('open') && !live.classList.contains('open')){
    if (e.key === 'ArrowRight' && !e.target.closest('video')) $('[data-next]', dlg).click();
    if (e.key === 'ArrowLeft' && !e.target.closest('video')) $('[data-prev]', dlg).click();
  }
  if (e.key === 'Tab'){
    const box = live.classList.contains('open') ? live : dlg.classList.contains('open') ? dlg : null; if (!box) return;
    const f = $$('a[href],button:not([disabled]),video,iframe,[tabindex]:not([tabindex="-1"])', box).filter(x => x.offsetParent !== null);
    if (!f.length) return;
    if (e.shiftKey && document.activeElement === f[0]){ e.preventDefault(); f[f.length - 1].focus() }
    else if (!e.shiftKey && document.activeElement === f[f.length - 1]){ e.preventDefault(); f[0].focus() }
  }
});

/* ---------------- botones magnéticos, tilt y cursor ---------------- */
if (finePointer && !reduce){
  root.classList.add('has-cursor');
  $$('[data-magnetic]').forEach(b => {
    b.addEventListener('pointermove', e => { const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width/2) * .22}px,${(e.clientY - r.top - r.height/2) * .3}px)` });
    b.addEventListener('pointerleave', () => b.style.transform = '');
  });
  const stage = $('#clarito .stage');
  stage.addEventListener('pointermove', e => { const r = stage.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    stage.style.transform = `perspective(1000px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg)`;
    $('.mascot', stage).style.translate = `${x * 24}px ${y * 10}px` });
  stage.addEventListener('pointerleave', () => { stage.style.transform = ''; $('.mascot', stage).style.translate = '' });
  stage.style.transition = 'transform .4s cubic-bezier(.2,.7,.1,1)';
  const label = $('em', cursor);
  document.addEventListener('pointerover', e => {
    const row = e.target.closest('[data-open-case]'), talk = e.target.closest('#clarito .stage');
    cursor.classList.toggle('big', !!(row || talk));
    label.textContent = row ? (L() === 'es' ? 'Ver' : 'View') : talk ? (L() === 'es' ? 'Hola' : 'Hi') : '';
  });
  $('#clarito .stage').addEventListener('click', openLive);
}

/* ---------------- agente guía (ElevenLabs) ---------------- */
// Pega aquí el Agent ID del agente público de ElevenLabs. Vacío = el botón no aparece.
const GUIDE_AGENT_ID = 'agent_2401m4by69x4e54v5h02b7tqsa6v';
(function guide(){
  const box = $('.guide'); if (!GUIDE_AGENT_ID || !box) return;
  box.hidden = false;
  const btn = $('.guide-btn', box), end = $('.guide-end', box), cap = $('.guide-cap', box), orb = $('.g-orb', box);
  let conv = null, sdk = null, raf;
  /* avatar vectorial de Nikkita (nikkita.js): la emoción sigue el estado de la conversación */
  const av = {el:$('.nikkita', box), hold:null, think:false};
  av.nk = window.NikkitaAvatar ? NikkitaAvatar.mount(av.el) : null;
  av.refresh = () => { if (!av.nk) return; const s = box.dataset.state;
    av.nk.emo(av.hold || (s === 'connecting' ? 'think' : s === 'speaking' ? 'talk' : av.think ? 'think' : s === 'listening' ? 'listen' : 'neutral')) };
  av.mood = (e, ms) => { av.hold = e; av.refresh(); clearTimeout(av.th); av.th = setTimeout(() => { av.hold = null; av.refresh() }, ms) };
  av.set = (k, v) => { if (k === 'level'){ av.nk?.level(v / 100); return } if (k === 'speaking' && v) av.think = false; av.refresh() };
  av.fire = k => { if (k === 'wave') av.mood('wave', 2400) };
  av.point = () => { av.el.classList.add('pointing'); av.mood('point', 2600); clearTimeout(av.tp); av.tp = setTimeout(() => av.el.classList.remove('pointing'), 2600) };
  if (av.nk){ av.el.hidden = false; box.classList.add('has-avatar') }
  if (av.nk && finePointer && !reduce) addEventListener('pointermove', e => { const r = av.el.getBoundingClientRect();
    av.nk.look((e.clientX - (r.left + r.width / 2)) / 400, (e.clientY - (r.top + r.height * .33)) / 400) }, {passive:true});
  const SAY = {es:'¡Hola! Soy Nikkita, la guía de este portfolio. ¿Qué te gustaría conocer de Nicole?', en:'Hi! I’m Nikkita, this portfolio’s guide. What would you like to know about Nicole?'};
  const SECTIONS = {inicio:'#top', sobre_mi:'#about', competencias:'#skills', clarito:'#clarito', metodo:'#method', emociones:'#play', casos:'#work', experiencia:'#xp', contacto:'#contact'};
  const go = sel => { if (dlg.classList.contains('open')) closeCase(); setTimeout(() => { $(sel)?.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block:'start'}); av.point() }, 120) };
  const tools = {
    ir_a_seccion: ({seccion}) => { const s = SECTIONS[seccion]; if (!s) return 'Sección no encontrada'; go(s); return 'Mostrando la sección ' + seccion },
    abrir_caso: ({caso}) => { if (!caseById(caso)) return 'Caso no encontrado'; av.point(); if (live.classList.contains('open')) closeLive(); if (dlg.classList.contains('open')){ renderCase(caso); history.replaceState(null,'','#caso-' + caso) } else openCase(caso); return 'Caso abierto: ' + t(caseById(caso).title) },
    cerrar_caso: () => { if (dlg.classList.contains('open')) closeCase(); return 'Caso cerrado' },
    filtrar_casos: ({tipo}) => { const f = {todos:'all', voz:'voice', research:'research'}[tipo] || 'all'; go('#work'); setTimeout(() => $(`[data-filter="${f}"]`)?.click(), 700); return 'Lista filtrada: ' + tipo },
    probar_emocion: ({emocion}) => { const i = EMO_PLAY.findIndex(e => e.k === emocion); if (i < 0) return 'Emoción no encontrada'; go('#play'); setTimeout(() => showEmo(i), 700); return 'Mostrando la respuesta para: ' + t(EMO_PLAY[i].e) },
    mostrar_emocion: ({emocion}) => { const e = {feliz:'happy', sorprendida:'wow', empatica:'empathy', pensativa:'think'}[emocion]; if (!e) return 'Emoción no válida'; av.mood(e, 3500); return 'Mostrando emoción ' + emocion },
    cambiar_idioma: ({idioma}) => { if (idioma !== 'es' && idioma !== 'en') return 'Idioma no válido'; setLang(idioma); return 'Idioma cambiado a ' + idioma }
  };
  const setState = s => { box.dataset.state = s; av.set('speaking', s === 'speaking'); av.set('listening', s === 'listening'); $('.g-lbl', box).innerHTML = {
    idle:'<span lang="es">Pregúntale a Nikkita</span><span lang="en">Ask Nikkita</span>',
    connecting:'<span lang="es">Conectando…</span><span lang="en">Connecting…</span>',
    listening:'<span lang="es">Te escucho</span><span lang="en">Listening</span>',
    speaking:'<span lang="es">Nikkita está hablando</span><span lang="en">Nikkita is speaking</span>'}[s] };
  function pulse(){ let v = 0; try{ v = Math.max(conv?.getOutputVolume?.() || 0, (conv?.getInputVolume?.() || 0) * .6) }catch(e){}
    orb.style.transform = `scale(${1 + Math.min(.6, v * 1.4)})`; let o = 0; try{ o = conv?.getOutputVolume?.() || 0 }catch(e){} av.set('level', Math.round(Math.min(1, o * 2.2) * 100)); raf = requestAnimationFrame(pulse) }
  async function start(){
    if (conv) return;
    if (live.classList.contains('open')) closeLive();
    setState('connecting');
    try{
      sdk = sdk || (await import('https://esm.sh/@elevenlabs/client')).Conversation;
      conv = await sdk.startSession({
        agentId: GUIDE_AGENT_ID, connectionType:'websocket',
        dynamicVariables:{idioma:L(), saludo:SAY[L()]},
        clientTools: tools,
        onStatusChange: s => console.info('Nikkita status', s),
        onConnect: () => { window.__nkT = Date.now(); box.classList.add('on'); av.fire('wave'); setState('listening'); pulse() },
        onDisconnect: d => { const why = d?.message || d?.reason || ''; console.warn('Nikkita disconnect', d); const short = Date.now() - (window.__nkT || 0) < 6000; stop(true); if (short){ cap.textContent = (L() === 'es' ? 'Se cerró la conexión: ' : 'Connection closed: ') + (why || 'sin motivo'); box.classList.add('on'); setTimeout(() => { if (!conv) box.classList.remove('on') }, 12000) } },
        onError: (e, ctx) => { console.error('Nikkita error', e, ctx); cap.textContent = 'Error: ' + (e?.message || e); },
        onModeChange: m => setState(m?.mode === 'speaking' ? 'speaking' : 'listening'),
        onMessage: ev => { const txt = ev?.message || ev?.text; if (!txt) return; if (ev.source === 'ai' || ev.role === 'agent') cap.textContent = txt; else { av.think = true; av.refresh() } }
      });
    }catch(e){ console.error(e); conv = null; setState('idle'); cap.textContent = (L() === 'es' ? 'No pude conectar: ' : 'Couldn’t connect: ') + (e?.message || e); box.classList.add('on'); setTimeout(() => { if (!conv) box.classList.remove('on') }, 12000) }
  }
  async function stop(silent){
    const c = conv; conv = null; cancelAnimationFrame(raf); orb.style.transform = ''; av.set('level', 0);
    if (c && !silent){ try{ await c.endSession() }catch(e){} }
    box.classList.remove('on'); cap.textContent = ''; setState('idle');
  }
  btn.addEventListener('click', () => conv ? null : start());
  addEventListener('nikkita-stop', () => { if (conv) stop(false) });
  end.addEventListener('click', () => stop(false));
  setState('idle');
})();




/* ---------------- arranque ---------------- */
$$('[data-set-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.setLang === L())));
renderIndex(); renderChips();
const m = location.hash.match(/^#caso-(.+)$/); if (m && caseById(m[1])) openCase(m[1]);
})();
