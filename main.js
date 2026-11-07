(function(){
  const MENU=[
    {name:'Home',href:'index.html',icon:'<i class="fa-solid fa-house"></i>'},
    {name:'Profile',href:'profile.html',icon:'<i class="fa-solid fa-user"></i>'},
    {name:'Image Cut',href:'image-cut.html',icon:'<i class="fa-solid fa-scissors"></i>'},
    {name:'Img URL Generator',href:'img-url-generator.html',icon:'<i class="fa-solid fa-image"></i>'},
    {name:'Audio & Video URL Gen',href:'av-url-generator.html',icon:'<i class="fa-solid fa-photo-film"></i>'},
    {name:'Subtitles Translator',href:'subtitle-translator.html',icon:'<i class="fa-solid fa-globe"></i>'},
    {name:'Sub Srt/VTT/ASS Converter',href:'subtitle-converter.html',icon:'<i class="fa-solid fa-rotate"></i>'},
    {name:'Modz Downloader',href:'modz-downloader.html',icon:'<i class="fa-solid fa-download"></i>'},
    {name:'Social Downloader',href:'social-downloader.html',icon:'<i class="fa-solid fa-users"></i>'},
    {name:'WP Ban & Unban',href:'wp-ban-unban.html',icon:'<i class="fa-solid fa-ban"></i>'},
    {name:'WhatsApp Report',href:'whatsapp-report.html',icon:'<i class="fa-brands fa-whatsapp"></i>'},
    {name:'Unlimited Text Generator',href:'text-generator.html',icon:'<i class="fa-solid fa-text-width"></i>'},
    {name:'1x Bet Signals',href:'1xbet-signals.html',icon:'<i class="fa-solid fa-bullseye"></i>'},
    {name:'Crypto Free Course',href:'crypto-course.html',icon:'<i class="fa-brands fa-bitcoin"></i>'},
    {name:'About',href:'about.html',icon:'<i class="fa-solid fa-circle-info"></i>'}
  ];

  // Loader
  const ld=document.createElement('div');ld.id='dgdev-loader';ld.className='dgdev-loader-overlay';
  ld.innerHTML='<div class="loader-wrapper"><div class="inner one"></div><div class="inner two"></div><div class="inner three"></div></div><div class="loader-brand">DG-DEV PROJECTS</div>';
  document.body.prepend(ld);

  // Header
  const hd=document.createElement('header');hd.className='dgdev-header';
  hd.innerHTML='<a href="index.html" class="dgdev-brand"><span class="brand-icon"><i class="fa-solid fa-code"></i></span><span>DG-DEV <span class="brand-accent">PROJECTS</span></span></a><div class="header-actions"><button class="icon-btn hamburger" id="menuToggle"><span></span><span></span><span></span></button></div>';
  document.body.prepend(hd);

  // Menu
  const mn=document.createElement('div');mn.className='dgdev-menu-overlay';mn.id='dgdevMenu';
  mn.innerHTML=`<div class="menu-backdrop"></div>
    <div class="menu-panel">
      <div class="menu-header">
        <span class="menu-title">DG-DEV <span class="brand-accent">PROJECTS</span></span>
        <button class="icon-btn" id="menuClose"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <nav class="menu-nav">
        ${MENU.map(i=>`<a href="${i.href}" class="menu-item"><div class="menu-item-left"><span class="menu-item-icon">${i.icon}</span><span>${i.name}</span></div><i class="fa-solid fa-chevron-right menu-item-arrow"></i></a>`).join('')}
      </nav>
      <div class="menu-footer">
        <div class="crown"><i class="fa-solid fa-crown"></i></div>
        <p>© 2024 DG-DEV PROJECTS</p>
        <p style="margin-top:5px;">All Services 100% Free <i class="fa-solid fa-heart" style="color:#ef4444;"></i> Made in Sri Lanka 🇱🇰</p>
      </div>
    </div>`;
  document.body.appendChild(mn);

  // Menu toggle
  const open=()=>{mn.classList.add('active');document.body.style.overflow='hidden'};
  const close=()=>{mn.classList.remove('active');document.body.style.overflow=''};
  document.getElementById('menuToggle').onclick=open;
  document.getElementById('menuClose').onclick=close;
  mn.querySelector('.menu-backdrop').onclick=close;
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
  
  // Active link
  const path=window.location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.menu-item').forEach(el=>{if(el.getAttribute('href')===path)el.classList.add('active')});
  
  // Toast helper
  window.dgdevToast=function(msg,type='success'){
    const t=document.createElement('div');t.className='toast '+type;t.textContent=msg;
    document.body.appendChild(t);requestAnimationFrame(()=>t.classList.add('show'));
    setTimeout(()=>{t.classList.remove('show');setTimeout(()=>t.remove(),400)},3000);
  };

  // Hide loader
  const start=Date.now();
  const hide=()=>{const e=Date.now()-start;setTimeout(()=>{ld.classList.add('hidden');setTimeout(()=>ld.remove(),500)},Math.max(0,800-e))};
  if(document.readyState==='complete')hide();else window.addEventListener('load',hide);
})();
