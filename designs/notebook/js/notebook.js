/**
 * notebook.js
 * Draggable divider for resizable flow panels.
 * Handles any number of stacked .flow-wrap sections.
 * (c)2026 Steve Knoblock
 * MIT LICENSE
 */

document.querySelectorAll('.flow-wrap').forEach(wrap => {
  const divider = wrap.querySelector('.divider');
  const left    = wrap.querySelector('.flow-sticky');

  if (!divider || !left) return;

  let dragging = false;

  divider.addEventListener('mousedown', () => {
    dragging = true;
    divider.classList.add('dragging');
    document.body.style.cursor    = 'col-resize';
    document.body.style.userSelect = 'none';
  });

  document.addEventListener('mousemove', e => {
    if (!dragging) return;
    const rect = wrap.getBoundingClientRect();
    const min  = 140;
    const max  = wrap.offsetWidth - 144; /* min right panel width */
    const w    = Math.max(min, Math.min(max, e.clientX - rect.left));
    wrap.style.gridTemplateColumns = `${w}px 4px 1fr`;
  });

  document.addEventListener('mouseup', () => {
    if (!dragging) return;
    dragging = false;
    divider.classList.remove('dragging');
    document.body.style.cursor    = '';
    document.body.style.userSelect = '';
  });

});
