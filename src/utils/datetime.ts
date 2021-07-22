import 'moment/locale/pt-br'

import moment from 'moment-timezone'

moment.locale('pt-br')
moment.tz.setDefault('America/Sao_Paulo')

export function dateToBrFormat(input: Date) {
  return moment(input).format('DD/MM/YYYY HH:mm:ss')
}

export default moment
