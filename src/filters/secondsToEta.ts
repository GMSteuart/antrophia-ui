export default function(seconds) {
  // calculate Hours, Minutes, and Seconds
  let hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  let minutes = Math.floor(seconds / 60);
  seconds %= 60;

  return (
    hours +
    (hours == 1 ? ' hour, ' : ' hours, ') +
    minutes +
    (minutes == 1 ? ' minute, ' : ' minutes, ') +
    seconds +
    (seconds == 1 ? ' second' : ' seconds')
  );
}
