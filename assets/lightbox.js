(() => {
  const top = document.querySelector('.top');
  const onScroll = () => top.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, {passive: true}); onScroll();

  const lb = document.getElementById('lightbox');
  const img = lb.querySelector('img');
  const cap = lb.querySelector('figcaption');
  const items = Array.from(document.querySelectorAll('.zoom'));
  let idx = -1, opener = null, list = items;

  const show = (i) => {
    idx = (i + list.length) % list.length;
    const b = list[idx];
    img.src = b.dataset.full;
    img.alt = b.querySelector('img').alt;
    cap.textContent = b.dataset.caption || '';
  };
  const open = (b, from) => {
    // Blättern nur durch die sichtbaren Bilder (ausgeblendete Reiter überspringen)
    list = items.filter((x) => !x.closest('[hidden]'));
    opener = from; show(list.indexOf(b));
    lb.hidden = false; document.body.classList.add('lb-open');
    lb.querySelector('.lb-close').focus();
  };
  const close = () => {
    lb.hidden = true; document.body.classList.remove('lb-open');
    img.removeAttribute('src');
    if (opener) opener.focus();
  };
  items.forEach((b) => {
    const c = b.closest('figure').querySelector('figcaption');
    if (!b.dataset.caption && c) b.dataset.caption = c.textContent;
    b.addEventListener('click', () => open(b, b));
  });
  lb.querySelector('.lb-close').addEventListener('click', close);
  lb.querySelector('.lb-prev').addEventListener('click', () => show(idx - 1));
  lb.querySelector('.lb-next').addEventListener('click', () => show(idx + 1));
  lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
  document.addEventListener('keydown', (e) => {
    if (lb.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowRight') show(idx + 1);
    else if (e.key === 'ArrowLeft') show(idx - 1);
    else if (e.key === 'Tab') {
      const f = Array.from(lb.querySelectorAll('button'));
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
})();

(() => {
  document.querySelectorAll('[role="tablist"]').forEach((list) => {
    const tabs = Array.from(list.querySelectorAll('[role="tab"]'));
    const select = (t) => {
      tabs.forEach((x) => {
        const on = x === t;
        x.setAttribute('aria-selected', on ? 'true' : 'false');
        x.tabIndex = on ? 0 : -1;
        document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
      });
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(t));
      t.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        const n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        select(n); n.focus();
      });
    });
  });
})();
