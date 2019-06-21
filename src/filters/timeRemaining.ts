import moment from 'moment'
// TODO: optimize by removing moment
export default function(date: Date): string {
  return moment.utc(date).toNow(true)
}
