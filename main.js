(function(){var d=document,r=d.documentElement,$=function(s,c){return(c||d).querySelector(s)},$$=function(s,c){return[].slice.call((c||d).querySelectorAll(s))};
var tb=$('#theme');function lbl(){var k=r.dataset.theme==='dark';tb.textContent=k?'☀':'☾';tb.setAttribute('aria-label',k?'Switch to light mode':'Switch to dark mode')}lbl();
tb.onclick=function(){var t=r.dataset.theme==='dark'?'light':'dark';r.dataset.theme=t;try{localStorage.setItem('theme',t)}catch(e){}lbl()};
var bg=$('#burger');bg.onclick=function(){var o=$('#mm').classList.toggle('open');bg.setAttribute('aria-expanded',o)};
var tp=$('#top');addEventListener('scroll',function(){tp.style.display=scrollY>600?'block':'none'});tp.onclick=function(){scrollTo({top:0,behavior:'smooth'})};
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});$$('.rv').forEach(function(e){io.observe(e)});
var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;co.unobserve(e.target);var n=+e.target.dataset.count,t0=performance.now();(function s(t){var p=Math.min((t-t0)/1400,1);e.target.textContent=Math.round(n*(1-Math.pow(1-p,3)))+'+';if(p<1)requestAnimationFrame(s)})(t0)})});$$('[data-count]').forEach(function(e){co.observe(e)});
// brand logo and photo: shown only if the file exists
$$('[data-asset]').forEach(function(el){var i=new Image();i.onload=function(){var m=$('img',el);m.src=i.src;m.hidden=false;var f=$('.fb',el);if(f)f.hidden=true};i.src=el.dataset.asset});
// blog search + filter
var bs=$('#bs');if(bs){var cat='All';function f(){var q=bs.value.toLowerCase(),n=0;$$('.post').forEach(function(p){var ok=(cat==='All'||p.dataset.cat===cat)&&p.dataset.t.indexOf(q)>-1;p.hidden=!ok;if(ok)n++});$('#none').hidden=n>0}
bs.oninput=f;$$('.chip').forEach(function(c){c.onclick=function(){cat=c.dataset.c;$$('.chip').forEach(function(x){x.setAttribute('aria-pressed',x===c)});f()}})}
// forms (Formspree)
$$('form[data-kind]').forEach(function(fm){var busy=false;fm.addEventListener('submit',function(e){e.preventDefault();if(busy)return;
$$('.err',fm).forEach(function(x){x.remove()});var bad=0,fd=new FormData(fm);
$$('.input',fm).forEach(function(i){var v=i.value.trim(),m='';i.removeAttribute('aria-invalid');
if(i.required&&!v)m='This field is required.';else if(i.type==='email'&&v&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))m='Enter a valid email address, like name@example.com.';else if(i.type==='url'&&v&&!/^https?:\/\/\S+\.\S+/i.test(v))m='Enter a full link starting with https://';
if(m){bad++;i.setAttribute('aria-invalid','true');var p=d.createElement('p');p.className='err';p.id=i.id+'-e';p.textContent=m;i.setAttribute('aria-describedby',p.id);i.parentNode.appendChild(p)}});
if(bad){var x=$('[aria-invalid=true]',fm);if(x)x.focus();return}
if(fd.get('_gotcha'))return;fd.append('form_type',fm.dataset.kind);fd.append('_subject',fm.dataset.kind+': '+fd.get('book_title')+' ('+fd.get('name')+')');
var b=$('button',fm),st=$('.st',fm);busy=true;b.disabled=true;b.textContent='Sending…';st.textContent='';
fetch(fm.dataset.action,{method:'POST',body:fd,headers:{Accept:'application/json'}}).then(function(r){if(!r.ok)throw 0;
fm.innerHTML='<div class="card w" role="status"><h3>Thank you, your message was sent.</h3><p class="muted" style="margin-top:.5rem">'+fm.dataset.done+'</p></div>'}).catch(function(){busy=false;b.disabled=false;b.textContent=fm.dataset.cta;st.className='err st';st.setAttribute('role','alert');st.textContent='Your message was not sent. Check your connection and try again, or email johnnewman9935@gmail.com.'})})});
})();
