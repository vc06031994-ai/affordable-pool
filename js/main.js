const toggle=document.querySelector('.menu-toggle'),menu=document.querySelector('.mobile-menu');
if(toggle){toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',open);});}
document.querySelectorAll('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
document.querySelector('#quoteForm')?.addEventListener('submit',e=>{e.preventDefault();e.currentTarget.querySelector('.form-message').textContent='Thanks! Your quote request is ready to be sent.';});