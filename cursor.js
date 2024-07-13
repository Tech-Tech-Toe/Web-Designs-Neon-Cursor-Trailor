document.addEventListener('mousemove', (event) => {
  const cursor = document.createElement('div');
  cursor.className = 'cursor';
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
  document.body.appendChild(cursor);

  // Remove the cursor after a longer time for a lengthier trail
  setTimeout(() => {
    cursor.remove();
  }, 500); // 500ms
});
