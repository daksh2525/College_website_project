document.addEventListener('DOMContentLoaded', function () {
    var showMoreBtn = document.getElementById('showMoreBtn');
    var hiddenContent = document.getElementById('hiddenContent');
  
    showMoreBtn.addEventListener('click', function () {
      if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
        hiddenContent.style.display = 'block';
        showMoreBtn.innerText = 'Show Less';
      } else {
        hiddenContent.style.display = 'none';
        showMoreBtn.innerText = 'Show More';
      }
    });
  });
  