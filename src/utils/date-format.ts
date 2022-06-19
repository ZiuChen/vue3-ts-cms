import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
export function formatUTCString(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  dayjs.extend(utc)
  return dayjs.utc(utcString).format(format)
}
