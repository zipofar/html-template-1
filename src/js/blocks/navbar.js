export default () => {
  const elId = 'navbar__toggler';
  const nodesToggler = document.querySelectorAll(`.${elId}`);
  nodesToggler.forEach((e) => {
    e.addEventListener('click', (e) => {
      const nodeNavbar = e.currentTarget.parentElement;
      const nodeNavbarCollapse = nodeNavbar.querySelector('.navbar-collapse');
      const nodeNavbarNav = nodeNavbar.querySelector('.navbar__nav');
      const isShow = nodeNavbarCollapse.classList.contains('show');
      const navHeight = nodeNavbarNav.clientHeight;
      if (isShow) {
        nodeNavbarCollapse.classList.remove('show');
        nodeNavbarCollapse.style.height = "";
      } else {
        nodeNavbarCollapse.classList.add('show');
        nodeNavbarCollapse.style.height = `calc(1rem + ${navHeight}px)`;
      }
    });
  });
};
