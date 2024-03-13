import dayjs from 'dayjs'
var buddhistEra = require('dayjs/plugin/buddhistEra')
import 'dayjs/locale/th'
dayjs.locale('th')
dayjs.extend(buddhistEra)

export const buddhistDay = (date?: any) => dayjs(date)