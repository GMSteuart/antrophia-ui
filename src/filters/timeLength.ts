import moment from 'moment'
// TODO: optimize by removing moment
export default function(start: Date, end: Date): number {
  return moment.duration(moment(end).diff(moment(start))).asDays()
}
