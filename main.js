(function(){
  const MENU=[
    {name:'Home',href:'index.html',icon:'🏠'},{name:'Profile',href:'profile.html',icon:'👤'},
    {name:'Image Cut',href:'image-cut.html',icon:'✂️'},{name:'Img URL Generator',href:'img-url-generator.html',icon:'🖼️'},
    {name:'Audio & Video URL Gen',href:'av-url-generator.html',icon:'🎬'},{name:'Subtitles Translator',href:'subtitle-translator.html',icon:'🌐'},
    {name:'Sub Srt/VTT/ASS Converter',href:'subtitle-converter.html',icon:'🔄'},{name:'Modz Downloader',href:'modz-downloader.html',icon:'📥'},
    {name:'Social Downloader',href:'social-downloader.html',icon:'📱'},{name:'WP Ban & Unban',href:'wp-ban-unban.html',icon:'🚫'},
    {name:'WhatsApp Report',href:'whatsapp-report.html',icon:'⚠️'},{name:'Unlimited Text Generator',href:'text-generator.html',icon:'✍️'},
    {name:'1x Bet Signals',href:'1xbet-signals.html',icon:'🎯'},{name:'Crypto Free Course',href:'crypto-course.html',icon:'₿'},
    {name:'About',href:'about.html',icon:'ℹ️'}
  ];
  // Loader
  const ld=document.createElement('div');ld.id='dgdev-loader';ld.className='dgdev-loader-overlay';
  ld.innerHTML='<div class="loader"><div class="wrapper"><div class="circle"></div><div class="line-1"></div><div class="line-2"></div><div class="line-3"></div><div class="line-4"></div></div></div><div class="loader-brand">DG-DEV PROJECTS</div>';
  document.body.prepend(ld);
  // Header
  const hd=document.createElement('header');hd.className='dgdev-header';
  hd.innerHTML='<a href="index.html" class="dgdev-brand"><span class="brand-icon">⚡</span><span>DG-DEV <span class="brand-accent">PROJECTS</span></span></a><div class="header-actions"><button class="icon-btn theme-toggle" id="themeToggle"><svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg><svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg></button><button class="icon-btn hamburger" id="menuToggle"><span></span><span></span><span></span></button></div>';
  document.body.prepend(hd);
  // Menu
  const mn=document.createElement('div');mn.className='dgdev-menu-overlay';mn.id='dgdevMenu';
  mn.innerHTML='<div class="menu-backdrop"></div><div class="menu-panel"><div class="menu-header"><span class="menu-title">DG-DEV <span class="brand-accent">PROJECTS</span></span><button class="icon-btn" id="menuClose"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg></button></div><nav class="menu-nav">'+MENU.map(i=>'<a href="'+i.href+'" class="menu-item"><span class="menu-icon">'+i.icon+'</span><span>'+i.name+'</span></a>').join('')+'</nav><div class="menu-footer"><p>© 2024 DG-DEV PROJECTS</p><p>All Services 100% Free</p></div></div>';
  document.body.appendChild(mn);
  // Theme
  document.getElementById('themeToggle').onclick=()=>{const c=document.documentElement.getAttribute('data-theme');const n=c==='dark'?'light':'dark';document.documentElement.setAttribute('data-theme',n);localStorage.setItem('dgdev-theme',n)};
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
  window.dgdevToast=function(msg,type){type=type||'success';const t=document.createElement('div');t.className='toast '+type;t.textContent=msg;document.body.appendChild(t);requestAnimationFrame(()=>t.classList.add('show'));setTimeout(()=>{t.classList.remove('show');setTimeout(()=>t.remove(),400)},3000)};
  // Hide loader
  const start=Date.now();
  const hide=()=>{const e=Date.now()-start;setTimeout(()=>{ld.classList.add('hidden');setTimeout(()=>ld.remove(),500)},Math.max(0,700-e))};
  if(document.readyState==='complete')hide();else window.addEventListener('load',hide);
})();
