import Card from './Card.jsx'

import './App.css'

function App() {


  return (
    <>
    <div className="main-page">
      <div className="horizontal-scroll">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        {/* Add more Card components here */}
      </div>
    </div>
    </>
  )
}

export default App
