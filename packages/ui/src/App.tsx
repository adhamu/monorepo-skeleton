import { BrowserRouter, Route, Routes } from 'react-router-dom'
import useSWR from 'swr'

import Container from './components/Container'
import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'
import About from './screens/About'
import Home from './screens/Home'
import { fetcher } from './utils'

const App = () => {
  const { data, error, isLoading } = useSWR<{ message: string }>(
    'http://localhost:4242/info',
    fetcher,
    { revalidateOnFocus: false }
  )

  if (!data || isLoading || error) {
    return null
  }

  return (
    <BrowserRouter>
      <Header response={data.message} />
      <Container>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App
