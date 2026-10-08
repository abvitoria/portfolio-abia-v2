(function(){
'use strict';
function currentPage(){
  var bp = document.body && document.body.getAttribute('data-page');
  if(bp) return bp.toLowerCase();
  var p = (location.pathname.split('/').pop() || 'index.dc.html');
  return p.split('?')[0].split('#')[0].toLowerCase() || 'index.dc.html';
}
function setActive(){
  var cur = currentPage();
  var isCase = cur.indexOf('case') === 0;
  document.querySelectorAll('.ac-nav a').forEach(function(a){
    var href = (a.getAttribute('href') || '').toLowerCase();
    var match = href === cur || (isCase && href === 'projetos.dc.html');
    if(match) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current');
  });
}
var curLang = 'pt';
function snapshotPt(){
  document.querySelectorAll('[data-en]').forEach(function(n){
    n.setAttribute('data-pt', n.innerHTML);
  });
}
function apply(lang){
  if(curLang === 'pt') snapshotPt();
  if(!(lang === 'pt' && curLang === 'pt')){
    document.querySelectorAll('[data-en]').forEach(function(n){
      var html = n.getAttribute(lang === 'en' ? 'data-en' : 'data-pt');
      if(html !== null) n.innerHTML = html;
    });
  }
  curLang = lang;
  document.querySelectorAll('.ac-lang button').forEach(function(b){
    b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false');
  });
  try{
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    localStorage.setItem('abia-lang', lang);
  }catch(_){}
  document.dispatchEvent(new CustomEvent('abia:lang', { detail:{ lang: lang } }));
}
function setupScrollSpy(){
  var work = document.getElementById('work');
  if(!work) return;
  var links = document.querySelectorAll('.ac-nav a');
  var homeLink = null, casesLink = null;
  links.forEach(function(a){
    var h = (a.getAttribute('href') || '').toLowerCase();
    if(h === 'index.dc.html') homeLink = a;
    if(h === 'projetos.dc.html') casesLink = a;
  });
  if(!homeLink || !casesLink) return;
  var raf = null;
  function updateSpy(){
    raf = null;
    var threshold = 140;
    var workTop = work.getBoundingClientRect().top;
    if(workTop <= threshold){
      homeLink.removeAttribute('aria-current');
      casesLink.setAttribute('aria-current','page');
    } else {
      casesLink.removeAttribute('aria-current');
      homeLink.setAttribute('aria-current','page');
    }
  }
  function onScroll(){ if(raf) return; raf = requestAnimationFrame(updateSpy); }
  updateSpy();
  window.addEventListener('scroll', onScroll, { passive:true });
}
function init(){
  setActive();
  var cp = currentPage();
  if(cp.indexOf('case') === 0){ document.body.classList.add('dark-surface'); }
  var saved = 'pt';
  try{ saved = localStorage.getItem('abia-lang') || 'pt'; }catch(_){}
  apply(saved);
  setupScrollSpy();
}
var __acInited = false;
function runInit(){ if(__acInited) return; if(!document.querySelector('.ac-nav')) return; __acInited = true; init(); }
document.addEventListener('click', function(e){
  var t = e.target;
  var b = (t && t.closest) ? t.closest('.ac-lang button') : null;
  if(b) apply(b.dataset.lang);
});
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', runInit);
else runInit();
if(!__acInited){
  var mo = new MutationObserver(function(){ runInit(); if(__acInited && mo){ mo.disconnect(); mo = null; } });
  try{ mo.observe(document.documentElement, { childList:true, subtree:true }); }catch(_){}
  setTimeout(runInit, 200);
  setTimeout(runInit, 800);
}
window.AbiaChrome = { refresh: init, setLang: apply };
})();
