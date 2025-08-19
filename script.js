<!-- your page content -->
<script>
  const studentImages = document.querySelectorAll('.student-img');

  studentImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
      const performanceDiv = img.closest('.performance');
      if (performanceDiv) {
        performanceDiv.classList.add('blur');
      }
    });

    img.addEventListener('mouseleave', () => {
      const performanceDiv = img.closest('.performance');
      if (performanceDiv) {
        performanceDiv.classList.remove('blur');
      }
    });
  });
</script>
</body>
