const hasTooltip = document.querySelectorAll('.has-tooltip');

hasTooltip.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    
    const tooltipActive = document.querySelectorAll('.tooltip_active')[0];

    if (tooltipActive) {
      tooltipActive.classList.remove('tooltip_active');
        if (tooltipActive.textContent == item.title) {
        return false;
        }
    }
  
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip', 'tooltip_active');
  tooltip.textContent = item.getAttribute('title');

  const coordinates = item.getBoundingClientRect();
  tooltip.style.top = coordinates.bottom + 3 + 'px';
  tooltip.style.left = coordinates.left + 'px';
  document.body.append(tooltip); 
  })
})

