import React from 'react'
import './styles/styles.css'
import Navbar from './components/Navbar'
import data from './components/data'
import Card from './components/Hero'

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />
  })

  return (
    <div className='App'>
      <Navbar />
      <section className='cards-list'>{cards}</section>
    </div>
  )
}

export default App
