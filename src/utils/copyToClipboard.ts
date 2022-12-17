const copyToClipboard = (text: string, html: string | null = null): void => {
  if (!text) return;

  const listener = (e: ClipboardEvent): void => {
    e.clipboardData?.setData('text/html', html || text);
    e.clipboardData?.setData('text/plain', text);
    e.preventDefault();
  };

  document.addEventListener('copy', listener);
  document.execCommand('copy');
  document.removeEventListener('copy', listener);
};

export default copyToClipboard;
