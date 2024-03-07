import { BrowserRouter } from 'react-router-dom'

import AppRouter from './routes/appRouter'
import { Layout } from './components/layout/layout'

function App() {
  return (

    <BrowserRouter>
      {' '}
      <Layout className="b-thick">
        <AppRouter />
      </Layout>
    </BrowserRouter>

  )
}

export default App
