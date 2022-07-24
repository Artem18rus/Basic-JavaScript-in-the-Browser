const hasTooltip = document.querySelectorAll('.has-tooltip');
hasTooltip.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    const tooltip = document.querySelector('.tooltip')
    tooltip.classList.toggle('tooltip_active');
      if(tooltip.classList.contains('tooltip_active')) {
        const atrTitle = item.getAttribute('title');
        tooltip.textContent = atrTitle;

        let leftPosition = item.getBoundingClientRect().left;
        let topPosition = item.getBoundingClientRect().top;
        tooltip.attributes.style.textContent = `left: ${leftPosition}px; top: ${topPosition+20}px;`;
      }
  })
})