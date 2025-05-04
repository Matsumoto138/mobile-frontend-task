document.querySelectorAll('.bottom-nav .nav-item').forEach(link => {
    if (window.location.pathname.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    }
    else{
        link.classList.remove('active');
    }
  });