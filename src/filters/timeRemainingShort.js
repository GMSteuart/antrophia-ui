/**
 * Time Remaining
 *
 * Takes seconds and oupts the time remaining in words
 *
 * @param {Number} seconds
 */
export default function(seconds) {
  if (seconds === 0) {
    return 'Finished!';
  }

  let hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  let minutes = Math.floor(seconds / 60);
  seconds %= 60;

  return hours
    ? hours + ' h, '
    : '' + minutes
      ? minutes + ' m, '
      : '' + seconds + ' s';
}
