
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { jobsAtom, messagesAtom, networkAtom, notificationsAtom, sumofAllSelector } from './atoms'
import { useMemo } from 'react'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>

}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom)
  const messageAtomCount = useRecoilValue(messagesAtom)
  const notificationsAtomCount = useRecoilValue(notificationsAtom)
  const sumOfAll = useRecoilValue(sumofAllSelector)

  // const sumOfAll = useMemo(() =>{
  //   return networkNotificationCount + jobsAtomCount + messageAtomCount + notificationsAtomCount
  // },[networkNotificationCount + jobsAtomCount + messageAtomCount + notificationsAtomCount])

  return (
    <>
      <button>Home</button>


      <button>My Network({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs({jobsAtomCount})</button>
      <button>Messaging({messageAtomCount})</button>
      <button>Notification({notificationsAtomCount})</button>
      <button>Me({sumOfAll})</button>
    </>
  )
}


export default App