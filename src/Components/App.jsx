import Body from './Body';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';
import '../Styling/App.css'

function App() {
  //Arreglo indicado dentro de las instrucciones de la práctica
  const arreglo = [
    "Repo 1",
    "Repo 2",
    "Repo 3",
    "Repo 4",
    "Repo 5"
  ];

  return (
    <div className="App">
          <Banner texto="Texto 1"/>
          <Header/>
          <Banner texto='Texto 2'/>
          <Body practica='Texto 3' temas={arreglo}/>
          <Footer> {<p>Texto 4</p>} </Footer>
    </div>
  )
}

export default App
