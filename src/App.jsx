
import './App.css';

import Header from './components/header/header';
import CardUser from './components/CardUser/CardUser';
import NavBar from "./components/NavBar/NavBar";


const App = ( ) => {
  
  return (
    <div>
      <Header title="mi tienda"
      subtitle="libreria"
      />
      <NavBar />
      <ItemListContainer />
      <div className='UserSection'>
        <CardUser
        name="a"
        description="pe"
        img="https://react.semantic-ui.com/images/avatar/large/matthew.png"
        />
        <CardUser/>
      </div>
    </div>
  )
}

export default App
