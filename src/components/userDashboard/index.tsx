import { useContext } from 'react'
import { UserContext } from '../../containers/UserContainer'

export const UserDashboard = () => {
  const user = useContext(UserContext)
  console.log(user, 'user')
  return <h1>{`Welcome to you dashboard ${user}`}</h1>
}
