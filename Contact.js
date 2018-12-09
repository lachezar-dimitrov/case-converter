const sendEmail = () => {
  const body = document.getElementById('text').value;
  const subject = document.getElementById('subject').value;
  const link = 'mailto:test@example.com?subject=subject&body=body';
  console.log('asd')
  window.location.href = link;
  alert('Thanks for your purchase!');
  // window.location.reload();
}
