import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'
import Treanding from '../container/trending'
import Home from '../container/Home'
import Detail from '../container/details'
import Playlist from './playlist'

const Routing=()=>{
    return(
        <BrowserRouter>
        <Header/>
        <div className='row'>
            <div className='col-md-2'>
                <Sidebar/>
            </div>
            <div className='col-md-10'>
               <Route exact path='/' component={Home}/>
               <Route exact path='/treanding' component={Treanding}/>
               <Route exact path='/detail/:id' component={Detail}/>
               <Route exact path='/playlist/:id' component={Playlist}/>
            </div>
        </div>
        <Footer></Footer>
        </BrowserRouter>

    )
}

export default Routing