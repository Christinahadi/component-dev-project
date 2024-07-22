
import './App.css'
import AdContainer from './components/AdContainer'
import Nav from './components/Nav'

function App() {
  
  return (
    <div className='App'>
      <Nav />
      <div className="main">
        <AdContainer />
        <AdContainer />
        <AdContainer />
        <AdContainer />
      </div>
    </div>
  )
}

export default App
