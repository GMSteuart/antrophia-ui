/**
 * Time ago in words
 *
 * Returns a string expressing the time ago in words
 *
 * @param date
 */

import moment from 'moment'
// TODO: optimize by removing moment
export default function(date: Date): string {
  return moment.utc(date).fromNow()
}
