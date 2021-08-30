// Styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';

// Libraries
import 'bootstrap';
import {Switch, Route} from 'react-router-dom'

// Components
import {Container} from 'react-bootstrap';
import Header from './components/Header'
import MenuSettings from './components/MenuSettings'
import Menulist from './components/Menulist'
import Cart from './components/Cart'
import HeaderCart from './components/HeaderCart'

function App() {
  return (
      <div className="wrapper">
        <Switch>
          <Route path='/' exact>
            <Header />
            <div className="content">
              <Container>
                <MenuSettings />
                <h2 className="content__title">Все пиццы</h2>
                <Menulist />
              </Container>
            </div>
          </Route>

          <Route path='/cart' exact>
            <HeaderCart />
            <div class="content">
             <Cart />
            </div>
          </Route>

          <Route>
            <h1 className='text-center m-5 p-5'>404 NOT FOUND</h1>
          </Route>
        </Switch>
      </div>
  )
}

export default App;
