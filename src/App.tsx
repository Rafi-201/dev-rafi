// import { useState } from 'react'
import HomePage from './pages/HomePage'
import SkillPage from './pages/SkillPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <div className='w-screen h-screen px-10'>
      <HomePage></HomePage>
      <SkillPage></SkillPage>
    </div> */}
        <div className="w-screen h-screen flex justify-center px-10 bg-gray-100">
        <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg">
          <HomePage />
          <SkillPage />
        </div>
      </div>
    </>
  )
}

export default App
