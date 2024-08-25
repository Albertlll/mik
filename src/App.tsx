// import { useState } from 'react'
import './App.css'
// import { Button } from './components/ui/button'
// import { ThemeProvider } from './components/theme-provider'
// import { ModeToggle } from './components/mode-toggle'
import {Chat} from './components/chat'
// import AudioRecorder from './components/audio-recorder'
// import {StompSessionProvider} from 'react-stomp-hooks'
function App() {
  // const [connected, se] = useState(0)

  

  return (
    <>
        {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ModeToggle/> */}
        {/* <StompSessionProvider
            url={"ws://localhost:8080/ws"}
            onConnect={() => console.log('Приветики')}> */}
        <div className='flex w-full h-full justify-center p-8 mob:p-1'>
        <Chat/>
        {/* <AudioRecorder/> */}
        </div>

        {/* </StompSessionProvider> */}
        {/* </ThemeProvider> */}
    </>
  )
}

export default App
