import cookie from 'js-cookie'

export default {
  // called when the user attempts to log in
  login: ({username, password}) => {
    cookie.set('admin-header', btoa(`${username}:${password}`), {
      path: '/admin',
      expires: 1,
    })
    return Promise.resolve()
  },
  // called when the user clicks on the logout button
  logout: () => {
    cookie.remove('admin-header', {path: '/admin'})
    return Promise.resolve()
  },
  // called when the API returns an error
  checkError: ({status}) => {
    console.log('check error!')
    if (status === 401 || status === 403) {
      localStorage.cookie.remove('admin-header')
      return Promise.reject()
    }
    return Promise.resolve()
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => (cookie.get('admin-header') ? Promise.resolve() : Promise.reject()),
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => (cookie.get('admin-header') ? Promise.resolve() : Promise.reject()),
}
