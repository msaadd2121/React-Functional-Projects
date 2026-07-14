import { useState } from 'react'
import UseFetchHookTest from './components/FetchHook/FunctionFetchHook'
import UseOnclickOutsideTest from './components/Use_Outside_Click.jsx/Test'
import UseWindowResizeTest from './components/WindowResize/test'
import ScrollTopOrBottom from './components/Toptobottom.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseFetchHookTest/>
      {/* <UseOnclickOutsideTest/> */}
      {/* <UseWindowResizeTest/> */}
      {/* < ScrollTopOrBottom/> */}
    </>
  )
}

export default App
