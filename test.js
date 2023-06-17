const styleBlocks = document.querySelectorAll('body style');

styleBlocks.forEach((block) => {
  block.innerText = block.innerHTML.trim();
});
