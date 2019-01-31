/**
 * Time ago in words
 *
 * Returns a string expressing the time ago in words
 *
 * @param date
 */

import moment from 'moment';

export default function(date) {
  return moment.utc(date).fromNow();
}
