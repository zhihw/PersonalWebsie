function loadNavbar() {
    fetch('navbar.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('fetch failed');
        }
        return response.text();
      })
      .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
      })
      .catch(error => {
        console.error('error:', error);
      });
  }
  loadNavbar();
  