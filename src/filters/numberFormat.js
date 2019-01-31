export default function(value) {
  return Number(value)
    .toFixed()
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
