
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
 import TableBoostrap from './assets/components/pages/Tablecheckbxbootstrap';

function App() {
  const imgUrl3 = new URL('/src/assets/img/cabecalho.png', import.meta.url)

  return (
    <>
      <div className="geralzao">
        <h1 className="title-app"> TCC Control</h1>
        <img className="imgHeadGeral" src={imgUrl3} width='100%' alt='image-head'></img>
        {/* Fonte: CodingDesign - https://www.youtube.com/watch?v=Ay8BXbAmEYM */}
        {/* Usamos icones do freepik, background freepik https://www.freepik.com/free-photo/close-up-negotiating-table_863262.htm#page=3&query=client%20background&position=43&from_view=keyword&track=ais */}

        <div className='tablebotspgmae'><TableBoostrap /></div>
        
      </div>
    </>
  )
}

export default App
