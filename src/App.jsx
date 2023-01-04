import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'
import data from "./data"

function App() {
  const cardElement = data.map(card=><Card key={card.id} {...card} />)

  return (
    <div className="App">
      <Nav />
      <Hero />
      <section className='cards'>
      {cardElement}
      </section>
    </div>
  )
}

export default App
