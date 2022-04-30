import React from 'react';
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import items from './assets/items'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './css/skeleton.css'
import './css/normalize.css'

import Home from './public/index'
import PageNotFound from './public/404'

function App({ currentUser, checkUserSession }) {
    return ( 
        <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={PageNotFound} />
        </Switch>
   
        <div className = "App" >
            <Header></Header>
            <div className = "container row">
                {
                    items.map((item, i) => {
                        return(
                            <Card
                            i={i}
                            title={item.title}
                            subtitle={item.subtitle}
                            link={item.link}
                            cover={item.image}>
                            </Card>
                        )
                    })
                }
            </div>
            <Footer></Footer>
        </div>
        </Router>
    );
}

export default App;