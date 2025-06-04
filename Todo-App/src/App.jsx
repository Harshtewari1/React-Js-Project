
import {  useState } from 'react'

import Create from './components/Create'
import Read from './components/Read'


const App = () => {
  const [todos, settodos] = useState([
  
  
  ])
 

  return (
    <div className='w-screen h-screen bg-gray-800 flex p-10 text-white '> 
      <Create todos={todos} settodos={settodos} />  
      <Read todos={todos} settodos={settodos} /> 
    </div>
  )
}

export default App


