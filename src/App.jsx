import Header from './components/Header'
import Form from './pages/Form'

function App() {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      <main className='p-6'>
        <Form />
      </main>
    </div>
  )
}

export default App
