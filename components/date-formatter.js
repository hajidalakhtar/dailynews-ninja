import { parseISO, format } from 'date-fns'
import ReactTimeAgo from 'react-time-ago'

export default function DateFormatter({ dateString }) {
  return  <ReactTimeAgo date={dateString} />
}
