// css files
import './App.css'
import '@mantine/core/styles.css'

import { Center, Loader, MantineProvider } from '@mantine/core'

function App () {
  return (
    <>
      <MantineProvider>
        <h1>Hi, this is praneshS</h1>
        <h2>The page is currently is in progress</h2>
        <Center>
          <Loader size={'xl'} type='dots' />
        </Center>
      </MantineProvider>
    </>
  )
}

export default App
