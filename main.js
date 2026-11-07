(function(){
  // Loader
  const ld=document.createElement('div');ld.id='dgdev-loader';ld.className='dgdev-loader-overlay';
  ld.innerHTML='<div class="loader"></div><div class="loader-brand">DG-DEV SYSTEM LOADING</div>';
  document.body.prepend(ld);

  // Header Inject
  const hd=document.createElement('header');hd.className='header';
  hd.innerHTML=`
    <div class="header-inner">
      <a href="index.html" class="logo">
        <div class="logo-icon"><i class="fa-solid fa-code"></i></div>
        DG-<span>DEV</span>
      </a>
      <button class="menu-toggle" id="menuToggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>`;
  document.body.prepend(hd);

  // Overlay and Side Menu Inject
  const menuHTML = `
    <div class="nav-overlay" id="navOverlay"></div>
    <nav class="side-menu" id="sideMenu">
      <div class="menu-heading">DG-DEV NAVIGATION</div>
      <a href="index.html" class="menu-link"><i class="fa-solid fa-house"></i> Home</a>
      <a href="profile.html" class="menu-link"><i class="fa-solid fa-user"></i> Profile</a>
      
      <div class="menu-label">PREMIUM TOOLS</div>
      <a href="image-cut.html" class="menu-link"><i class="fa-solid fa-object-group"></i> Image Cut</a>
      <a href="img-url-generator.html" class="menu-link"><i class="fa-solid fa-link"></i> Img URL Generator</a>
      <a href="av-url-generator.html" class="menu-link"><i class="fa-solid fa-clapperboard"></i> Audio & Video Gen</a>
      <a href="subtitle-translator.html" class="menu-link"><i class="fa-solid fa-language"></i> Subtitles Translator</a>
      <a href="subtitle-converter.html" class="menu-link"><i class="fa-solid fa-arrows-rotate"></i> Sub Converter</a>
      <a href="modz-downloader.html" class="menu-link"><i class="fa-solid fa-cloud-arrow-down"></i> Modz Downloader</a>
      <a href="social-downloader.html" class="menu-link"><i class="fa-solid fa-photo-film"></i> Social Downloader</a>
      <a href="wp-ban-unban.html" class="menu-link"><i class="fa-solid fa-shield-halved"></i> WP Ban & Unban</a>
      <a href="whatsapp-report.html" class="menu-link"><i class="fa-brands fa-whatsapp"></i> WhatsApp Report</a>
      <a href="text-generator.html" class="menu-link"><i class="fa-solid fa-wand-magic-sparkles"></i> Text Generator</a>
      <a href="1xbet-signals.html" class="menu-link"><i class="fa-solid fa-chart-line"></i> 1x Bet Signals</a>
      <a href="crypto-course.html" class="menu-link"><i class="fa-brands fa-bitcoin"></i> Crypto Course</a>
      <a href="about.html" class="menu-link"><i class="fa-solid fa-circle-info"></i> About</a>
    </nav>`;
  document.body.insertAdjacentHTML('beforeend', menuHTML);

  // Menu Toggle Logic
  const menuToggle = document.getElementById('menuToggle');
  const sideMenu = document.getElementById('sideMenu');
  const navOverlay = document.getElementById('navOverlay');

  window.toggleMenu = function() {
    const isOpen = sideMenu.classList.toggle('active');
    menuToggle.classList.toggle('active', isOpen);
    navOverlay.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  menuToggle.onclick = window.toggleMenu;
  navOverlay.onclick = window.toggleMenu;

  document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', () => {
      sideMenu.classList.remove('active');
      menuToggle.classList.remove('active');
      navOverlay.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('keydown', e => {
    if(e.key === 'Escape') {
      sideMenu.classList.remove('active');
      menuToggle.classList.remove('active');
      navOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Highlight Active Page
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu-link').forEach(el => {
    if(el.getAttribute('href') === path) el.classList.add('active');
  });

  // Toast helper
  window.dgdevToast = function(msg, type='success'){
    const t=document.createElement('div');t.className='toast '+type;t.textContent=msg;
    document.body.appendChild(t);requestAnimationFrame(()=>t.classList.add('show'));
    setTimeout(()=>{t.classList.remove('show');setTimeout(()=>t.remove(),400)},3000);
  };

  // Hide Loader
  const start=Date.now();
  const hide=()=>{const e=Date.now()-start;setTimeout(()=>{ld.classList.add('hidden');setTimeout(()=>ld.remove(),500)},Math.max(0,600-e))};
  if(document.readyState==='complete')hide();else window.addEventListener('load',hide);
})();
