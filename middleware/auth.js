import {isLoggedIn} from '~/services/AuthService'
import store from '~/store/store'
console.log('i made it', isLoggedIn())

export default function (ctx) {
store.dispatch('authenticate')
  if(!isLoggedIn()) {
    return ctx.redirect('/login')
  }
}
