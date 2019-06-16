import moment from 'moment'

export default function (start, end) {
  return moment.duration(moment(end).diff(moment(start))).asDays();
}