import Budget from './components/Budget'
import Form from './components/Form'
import List from './components/List'
import { AppProvider } from './context/AppProvider'

function App() {
  return (
    <AppProvider>
      <div className='container mt-3'>
        <Budget />
        <Form />
        <hr />
        <List />
      </div>
    </AppProvider>
  )
}

export default App
