import './App.css';

import { Header, Introduction, Experience, Projects, Contact, Education } from './components/index';

function App() {


  return (
    <div className=''>
      <div className='bg-black px-40'>
        <Header />
        <Introduction />
        <Experience />
        <Projects />
        <Education />
      </div>
      <div className='bg-custom-dark-gray px-40'>
        <Contact />
        <Header />
      </div>
    </div>
  )
}

export default App
