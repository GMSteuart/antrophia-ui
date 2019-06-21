/**
 * Time Remaining
 *
 * Takes seconds and returns the time remaining in words
 *
 * @param {Number} seconds
 */
export default function(seconds: number): string {
  if (seconds === 0) {
    return 'Finished!'
  }

  const hours = Math.floor(seconds / 3600)
  seconds %= 3600
  const minutes = Math.floor(seconds / 60)
  seconds %= 60

  return hours
    ? hours + ' h, '
    : '' + minutes
    ? minutes + ' m, '
    : '' + seconds + ' s'
}
