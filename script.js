function generateMailtoLink() {
  const to = document.getElementById('to').value;
  const cc = document.getElementById('cc').value;
  const bcc = document.getElementById('bcc').value;
  const subject = document.getElementById('subject').value;
  const body = document.getElementById('body').value;

  let mailtoLink = `mailto:${to}`;

  const params = new URLSearchParams();
  if (cc) params.append('cc', cc);
  if (bcc) params.append('bcc', bcc);
  if (subject) params.append('subject', subject);
  if (body) params.append('body', body);

  if (params.toString()) {
    mailtoLink += `?${params.toString()}`;
  }

  document.getElementById('mailtoLink').value = mailtoLink;
}

function copyToClipboard() {
  const mailtoLink = document.getElementById('mailtoLink');
  mailtoLink.select();
  document.execCommand('copy');
  alert('Copied to clipboard');
}
