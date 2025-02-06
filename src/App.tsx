import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <div className="w-screen flex justify-center sm:px-4 lg:px-10 bg-gray-100">
          <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg">
            <HomePage />
            <Footer />
          </div>
        </div>
    </>
  )
}

export default App
