export const LOGIN = 'LOGIN'

const BASEURL = 'http://localhost:3000/api/v1'

// export default class AuthAdapter {
//   static login (loginParams) {
//     return fetch(`${baseUrl}/login`, {
//       method: 'POST',
//       headers: headers(),
//       body: JSON.stringify(loginParams)
//     }).then(res => res.json())
//   }

//   static currentUser () {
//     return fetch(`${baseUrl}/current_user`, {
//       headers: headers()
//     }).then(res => res.json())
//   }
// }

function headers () {
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Authorization': localStorage.getItem('jwt')
  }
}

export function Login(loginParams) {
    return function(dispatch) {
      dispatch({type: 'POSTLOGINPARAMS'})
      return fetch(`${BASEURL}/login`,{
        method: 'POST',
        headers: headers(),
        body: JSON.stringify(loginParams)
      }).then(res => res.json())
      .then(resp => {
        if(resp.error){
          console.log("do nothing")
        } else {
          localStorage.setItem('jwt', resp.token)
          dispatch({type: 'AUTH', resp: resp})
        }
      })
    }

}
//   .then(res => {
//     if(res.error){
//       console.log("do nothing")
//     }else{
//       localStorage.setItem('jwt', res.token)
//       this.setState({
//         auth:{
//           isLoggedIn: true,
//           user: res.username,
//           name: res.name
//         }
//       })
//     }
//   })
// OnSubmit
// (dipatch action)
// this.props.Login(parmas)
// fetch to post API using dipatch and thunk
// .then to fetch API to set the localStorage JWT
