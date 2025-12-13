export function formatDate(dateStr) {
  const date = new Date(dateStr);
  // format : 30 Apr, 2025
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).replace(/ /, ' ').replace(/ /, ', ');
}
