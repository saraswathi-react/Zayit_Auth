import PageNotFound from '../Components/PageNotFound'
import UserSignin from '../../modules/Auth/Container/index'
import { Home } from '../../modules/Home'
import { ProductView } from '../../modules/ProductView/ProductView'

export const anonymous = [
  {
    routePath: '/signin',
    Component: UserSignin,
  },
]

export const authenticated = [
  {
    routePath: '/',
    Component: Home,
  },
  {
    routePath: '/Product',
    Component: ProductView,
  },
  {
    routePath: '*',
    Component: PageNotFound,
  },
]
