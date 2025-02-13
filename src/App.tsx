import React from 'react'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import GlobalStyles from './GlobalStyles' // Importando os estilos globais

function App() {
  return (
    <>
      <GlobalStyles /> {/* Aplicando os estilos globais */}
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  )
}

export default App
