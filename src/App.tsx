import team from './data/data'


import './App.css'
import UserComponent from './components/user'
import { useState } from 'react'
import { cn } from './utils'

function App() {
  const [theme, setTheme] = useState("normal")

  return (
    <div className={cn('flex flex-col w-full h-screen bg-sky-50 transition-all duration-1000',
    theme=="brut" && 'bg-yellow-300')}>
    <div className={cn('flex items-center justify-center pt-7 transition-all duration-1000')}>
      <div onClick={() => {theme == "normal" ? setTheme("brut") : setTheme("normal")}} className={cn('select-none text-[5rem] font-extrabold',theme=="normal" && ' text-transparent bg-clip-text bg-gradient-to-l from-sky-600 to-blue-600',
      theme=="brut" && 'bg-white text-black px-12 rounded-2xl border-black border-t-4 border-l-4 border-r-8 border-b-8')}>Ticket Tracker</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 h-full gap-5 p-7">
        {team.map((user) => (
          <UserComponent key={user.id} theme={theme} name={user.name} role={user.role}/>
        ))}
      </div>
      </div>
  )
}

export default App
