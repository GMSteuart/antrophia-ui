import moment from 'moment';

export default function(date) {
  return moment.utc(date).toNow(true);
}
