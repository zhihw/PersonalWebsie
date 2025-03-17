function loadFile(fileUrl, elementId) {
    fetch(fileUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load ' + fileUrl);
        }
        return response.text();
      })
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading ' + fileUrl + ':', error);
      });
  }
  
  function loadNavAndFooter() {
    loadFile('navbar.html', 'navbar-placeholder');
    loadFile('footer.html', 'footer-placeholder');
  }
  
  document.addEventListener('DOMContentLoaded', loadNavAndFooter);