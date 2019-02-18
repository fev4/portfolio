/** Importar en este archivo todos los íconos que se vayan a utilizar */
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faCopyright,
  faBalanceScale,
  faPiggyBank,
  faRoute,
  faBinoculars,
  faAd
} from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/free-regular-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

/* Font Awesome Icons */
const FontAwesome = library.add(
  faBars,
  faCopyright,
  faBalanceScale,
  faPiggyBank,
  faRoute,
  faBinoculars,
  faAd,
  faGoogle
)

export default FontAwesome