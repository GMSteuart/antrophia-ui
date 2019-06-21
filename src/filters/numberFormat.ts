export default function(value: number): string {
  return Number(value)
    .toFixed()
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
