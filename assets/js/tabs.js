(() => {
  const tabs = Array.from(document.querySelectorAll('.tab'));
  const panels = {
    gallery: document.getElementById('panel-gallery'),
    intro: document.getElementById('panel-intro'),
    blog: document.getElementById('panel-blog'),
    papers: document.getElementById('panel-papers')
  };

  function activate(name, updateHash = true) {
    // Intro intentionally shows the biography instead of the default photo gallery.
    const panelName = name === 'intro' ? 'intro' : name;
    tabs.forEach(tab => {
      const active = tab.dataset.panel === name;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    Object.entries(panels).forEach(([key, panel]) => {
      if (panel) panel.hidden = key !== panelName;
    });
    if (updateHash) history.replaceState(null, '', `#${name}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab.dataset.panel));
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let next = index;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      tabs[next].focus();
      activate(tabs[next].dataset.panel);
    });
  });

  const requested = window.location.hash.slice(1);
  if (['intro', 'blog', 'papers'].includes(requested)) {
    activate(requested, false);
  } else {
    // The default landing view is the photo gallery, while Intro remains the first tab.
    Object.values(panels).forEach(panel => { if (panel) panel.hidden = panel.id !== 'panel-gallery'; });
    tabs.forEach(tab => {
      const active = tab.dataset.panel === 'intro';
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
  }
})();
