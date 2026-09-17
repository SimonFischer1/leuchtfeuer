
(function(){
  const KEY='leuchtfeuer_data_v1';
  function deepClone(o){return JSON.parse(JSON.stringify(o));}
  function loadData(){
    try{const saved=localStorage.getItem(KEY); if(saved) return JSON.parse(saved);}catch(e){}
    return deepClone(window.DEFAULT_DATA);
  }
  function saveData(data){localStorage.setItem(KEY,JSON.stringify(data));}
  window.LF={KEY,loadData,saveData,deepClone};

  const data=loadData();
  function $(s){return document.querySelector(s)}
  function esc(v){return String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
  function renderHours(){
    const el=$('#hours-list'); if(!el) return;
    el.innerHTML=data.hours.map(h=>`<div class="hour-row"><span>${esc(h.day)}</span><span class="${h.closed?'closed':''}">${h.closed?'Geschlossen':esc(h.open)+' – '+esc(h.close)}</span></div>`).join('');
    const today=new Intl.DateTimeFormat('de-DE',{weekday:'long'}).format(new Date());
    const h=data.hours.find(x=>x.day.toLowerCase()===today.toLowerCase());
    const t=$('#today-status');
    if(t&&h)t.textContent=h.closed?'Heute geschlossen':`Heute: ${h.open} – ${h.close}`;
  }
  function renderMenu(){
    const el=$('#menu-preview'); if(!el)return;
    const cats=[...new Set(data.menu.map(x=>x.category))];
    el.innerHTML=cats.map(cat=>`<div class="menu-cat"><h3>${esc(cat)}</h3>${data.menu.filter(x=>x.category===cat).map(i=>`<div class="menu-item"><div><strong>${esc(i.name)}</strong>${i.note?`<small>${esc(i.note)}</small>`:''}</div><strong class="price">${esc(i.price)}</strong></div>`).join('')}</div>`).join('');
  }
  function renderOffers(){
    const el=$('#offers'); if(!el)return;
    const active=data.offers.filter(x=>x.active);
    el.innerHTML=active.length?active.map(o=>`<article class="card offer"><div class="eyebrow">Angebot</div><h3>${esc(o.title)}</h3><p class="muted">${esc(o.text)}</p><div class="price">${esc(o.price)}</div></article>`).join(''):`<article class="card"><h3>Aktuell keine Angebote</h3><p class="muted">Schau bald wieder vorbei.</p></article>`;
  }
  function renderEvents(){
    const el=$('#events'); if(!el)return;
    const active=data.events.filter(x=>x.active);
    el.innerHTML=active.length?active.map(e=>`<article class="card"><div class="eyebrow">${esc(e.date)}</div><h3>${esc(e.title)}</h3><p class="muted">${esc(e.text)}</p></article>`).join(''):`<article class="card"><h3>Demnächst mehr</h3><p class="muted">Neue Termine werden hier veröffentlicht.</p></article>`;
  }
  function renderSocial(){
    const ig=$('#ig-link'), fb=$('#fb-link'), igLatest=$('#ig-latest'), fbLatest=$('#fb-latest');
    if(ig)ig.href=data.site.instagram;
    if(fb)fb.href=data.site.facebook;
    if(igLatest){
      if(data.site.latestInstagram){igLatest.href=data.site.latestInstagram;igLatest.textContent='Neuesten Instagram-Post öffnen →';}
      else {igLatest.href=data.site.instagram;igLatest.textContent='Instagram-Profil öffnen →';}
    }
    if(fbLatest){
      if(data.site.latestFacebook){fbLatest.href=data.site.latestFacebook;fbLatest.textContent='Neuesten Facebook-Post öffnen →';}
      else {fbLatest.href=data.site.facebook;fbLatest.textContent='Facebook öffnen →';}
    }
  }
  document.addEventListener('DOMContentLoaded',()=>{
    const name=$('#site-name'); if(name)name.textContent=data.site.name;
    document.querySelectorAll('[data-site="address"]').forEach(e=>e.textContent=data.site.address);
    document.querySelectorAll('[data-site="zipcity"]').forEach(e=>e.textContent=data.site.zipcity);
    renderHours();renderMenu();renderOffers();renderEvents();renderSocial();
  });
})();
