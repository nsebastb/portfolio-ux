/* Nikkita · avatar vectorial animado (versión B · juguete 3D, con moño)
   Uso: const nk = NikkitaAvatar.mount(el); nk.emo('think'); nk.level(0.6); nk.look(dx, dy);
   Emociones: neutral · listen · think · talk · happy · wow · empathy · wave · point */
(function(){
  let n = 0;
  function rings(seed, cx, cy, rx, ry, count, rMin, rVar){
    let s = seed, rnd = () => (s = (s * 9301 + 49297) % 233280) / 233280, out = '';
    for (let i = 0; i < count; i++){
      const t = rnd() * Math.PI * 2, d = Math.sqrt(rnd());
      const x = cx + Math.cos(t) * rx * d, y = cy + Math.sin(t) * ry * d, r = rMin + rnd() * rVar, a = rnd() * 360;
      out += `<path class="ring" d="M${(x - r).toFixed(1)} ${y.toFixed(1)} a${r.toFixed(1)} ${r.toFixed(1)} 0 1 1 ${(r * 1.6).toFixed(1)} ${(r * .9).toFixed(1)}" transform="rotate(${a.toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})"/>`;
    }
    return out;
  }
  function bumps(seed, cx, cy, rx, ry, count){
    let s = seed, rnd = () => (s = (s * 9301 + 49297) % 233280) / 233280, out = '';
    for (let i = 0; i < count; i++){
      const t = (i / count) * Math.PI * 2 + rnd() * .3;
      out += `<circle cx="${(cx + Math.cos(t) * rx).toFixed(1)}" cy="${(cy + Math.sin(t) * ry).toFixed(1)}" r="${(8 + rnd() * 5).toFixed(1)}"/>`;
    }
    return out;
  }
  function svg(){
    const id = 'nkb' + (n++), g = k => `url(#${id}-${k})`;
    return `<svg class="nk" viewBox="0 0 300 400" data-emo="neutral" aria-hidden="true">
  <defs>
    <radialGradient id="${id}-skin" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#F3BE97"/><stop offset=".7" stop-color="#DE9E74"/><stop offset="1" stop-color="#C98560"/></radialGradient>
    <radialGradient id="${id}-hair" cx="45%" cy="25%" r="80%"><stop offset="0" stop-color="#3E353D"/><stop offset=".55" stop-color="#18131B"/><stop offset="1" stop-color="#0A070C"/></radialGradient>
    <radialGradient id="${id}-bun" cx="40%" cy="30%" r="75%"><stop offset="0" stop-color="#4A404A"/><stop offset=".7" stop-color="#18131B"/><stop offset="1" stop-color="#0A070C"/></radialGradient>
    <linearGradient id="${id}-jacket" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9A3044"/><stop offset="1" stop-color="#5E1626"/></linearGradient>
    <linearGradient id="${id}-jeans" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6E9BDA"/><stop offset="1" stop-color="#3E68AA"/></linearGradient>
  </defs>
  <ellipse cx="150" cy="378" rx="70" ry="9" fill="#16163A" opacity=".2"/>
  <g class="all">
    <path d="M112 296 L188 296 L196 362 L156 362 L150 318 L144 362 L104 362 Z" fill="${g('jeans')}"/>
    <ellipse cx="124" cy="366" rx="24" ry="10" fill="#F7F5F2"/><ellipse cx="176" cy="366" rx="24" ry="10" fill="#F7F5F2"/>
    <rect x="140" y="196" width="20" height="30" rx="6" fill="${g('skin')}"/>
    <path d="M108 226 Q150 210 192 226 L200 300 L100 300 Z" fill="${g('jacket')}"/>
    <path d="M134 222 Q150 230 166 222 L170 300 L130 300 Z" fill="#F6F1EC"/>
    <line x1="132" y1="226" x2="130" y2="300" stroke="#cfcfcf" stroke-width="2"/><line x1="168" y1="226" x2="170" y2="300" stroke="#cfcfcf" stroke-width="2"/>
    <g class="head">
      <!-- moño rizado -->
      <g class="bun">
        <g fill="${g('bun')}">${bumps(7, 150, 30, 26, 20, 14)}<ellipse cx="150" cy="30" rx="30" ry="24"/></g>
        <g fill="none" stroke-linecap="round">${rings(11, 150, 30, 26, 20, 18, 4, 3)}</g>
        <rect x="132" y="50" width="36" height="9" rx="4.5" fill="#8A2A3D"/>
      </g>
      <circle cx="76" cy="140" r="11" fill="${g('skin')}"/><circle cx="224" cy="140" r="11" fill="${g('skin')}"/>
      <circle cx="150" cy="128" r="76" fill="${g('skin')}"/>
      <ellipse class="blush" cx="108" cy="160" rx="13" ry="7" fill="#FF7A8A"/><ellipse class="blush" cx="192" cy="160" rx="13" ry="7" fill="#FF7A8A"/>
      <!-- cabello recogido con raya al medio -->
      <path d="M72 142 C68 72 108 50 150 50 C192 50 232 72 228 142 C220 116 204 98 176 90 C164 86 156 80 150 70 C144 80 136 86 124 90 C96 98 80 116 72 142 Z" fill="${g('hair')}"/>
      <path d="M118 62 Q132 55 146 58" stroke="#6B5F6A" stroke-width="4" fill="none" stroke-linecap="round" opacity=".9"/><path d="M156 58 Q176 57 190 66" stroke="#6B5F6A" stroke-width="4" fill="none" stroke-linecap="round" opacity=".9"/>
      <!-- rizos sueltos en las sienes -->
      <g fill="none" stroke="#18131B" stroke-width="4" stroke-linecap="round" class="strands">
        <path d="M78 136 q-6 10 0 18 q6 8 -1 16"/><path d="M222 136 q6 10 0 18 q-6 8 1 16"/>
      </g>
      <path class="brow browL" d="M104 100 Q121 92 138 99" stroke="#1A1418" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path class="brow browR" d="M162 99 Q179 92 196 100" stroke="#1A1418" stroke-width="4" fill="none" stroke-linecap="round"/>
      <g class="eyes"><g class="pupils">
        <ellipse cx="121" cy="131" rx="14" ry="16" fill="#0B0B10"/><ellipse cx="179" cy="131" rx="14" ry="16" fill="#0B0B10"/>
        <circle cx="126" cy="124" r="4.6" fill="#fff"/><circle cx="184" cy="124" r="4.6" fill="#fff"/>
        <circle cx="116" cy="138" r="1.8" fill="#fff" opacity=".7"/><circle cx="174" cy="138" r="1.8" fill="#fff" opacity=".7"/>
      </g></g>
      <g class="happyEyes" stroke="#0B0B10" stroke-width="5" fill="none" stroke-linecap="round"><path d="M108 134 Q121 120 134 134"/><path d="M166 134 Q179 120 192 134"/></g>
      <g fill="rgba(255,255,255,.08)" stroke="#0B0B10" stroke-width="5">
        <rect x="97" y="110" width="48" height="42" rx="14"/><rect x="155" y="110" width="48" height="42" rx="14"/>
        <path d="M145 124 Q150 120 155 124" fill="none"/><path d="M97 122 L80 128" fill="none"/><path d="M203 122 L220 128" fill="none"/>
      </g>
      <circle cx="147" cy="168" r="2.3" fill="#3A2A26"/>
      <g class="mouth" fill="none" stroke="#5A2A2A" stroke-width="3.2" stroke-linecap="round">
        <path class="m m-smile" d="M141 180 Q150 186 159 180"/>
        <path class="m m-soft" d="M143 181 Q150 184 157 181"/>
        <path class="m m-flat" d="M143 182 L156 180"/>
        <path class="m m-big" d="M137 177 Q150 194 163 177 Z" fill="#7A2E33"/>
        <ellipse class="m m-o" cx="150" cy="183" rx="6" ry="8" fill="#7A2E33"/>
        <ellipse class="m m-talk" cx="150" cy="182" rx="8" ry="5" fill="#7A2E33"/>
      </g>
    </g>
    <g class="armL"><path d="M110 228 Q96 236 94 262 L92 284 L108 286 L112 262 Z" fill="${g('jacket')}"/><circle cx="100" cy="292" r="11" fill="${g('skin')}"/></g>
    <g class="armR"><path d="M190 228 Q204 236 206 262 L208 284 L192 286 L188 262 Z" fill="${g('jacket')}"/><circle cx="200" cy="292" r="11" fill="${g('skin')}"/></g>
    <g class="bubble">
      <circle cx="228" cy="70" r="5" fill="#fff"/><circle cx="240" cy="54" r="8" fill="#fff"/>
      <rect x="236" y="14" width="56" height="34" rx="17" fill="#fff"/>
      <circle class="d" cx="252" cy="31" r="4" fill="#2B2FE0"/><circle class="d" cx="264" cy="31" r="4" fill="#2B2FE0"/><circle class="d" cx="276" cy="31" r="4" fill="#2B2FE0"/>
    </g>
  </g>
</svg>`;
  }
  function mount(el){
    el.innerHTML = svg();
    const s = el.querySelector('.nk'), eyes = s.querySelector('.eyes'), pupils = s.querySelector('.pupils');
    let alive = true, target = 0, cur = 0;
    (function blink(){ if (!alive) return; eyes.classList.remove('blink'); void eyes.getBBox(); eyes.classList.add('blink'); setTimeout(blink, 2600 + Math.random() * 2600) })();
    // boca suavizada: sube rápido, baja más lento (como sílabas), sin saltos bruscos
    (function smooth(){ if (!alive) return; const t = s.dataset.emo === 'talk' ? target : 0;
      cur += (t - cur) * (t > cur ? .35 : .18); s.style.setProperty('--lvl', cur.toFixed(3)); requestAnimationFrame(smooth) })();
    return {
      el: s,
      emo(e){ s.dataset.emo = e },
      get current(){ return s.dataset.emo },
      level(v){ target = Math.max(0, Math.min(1, v)) },
      look(dx, dy){ pupils.style.transform = `translate(${(Math.max(-1, Math.min(1, dx)) * 5).toFixed(1)}px,${(Math.max(-1, Math.min(1, dy)) * 4).toFixed(1)}px)` },
      destroy(){ alive = false }
    };
  }
  window.NikkitaAvatar = {mount, svg};
})();
