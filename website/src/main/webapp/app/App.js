import React from 'react'
import ReactDOM from 'react-dom'

import {Router, IndexRoute, Route} from 'react-router'

import Navbar from './components/navbar'
import MainCarousel from './components/MainCarousel'
import MainMap from './components/MainMap'
import Wreck from './components/Wreck'

class App extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        return  <div id="main">
                    <Navbar/>
                    <div id="map-container" className="collapse in">
                        <MainMap />
                    </div>

                    <div className="data-container">
                        {this.props.children}
                    </div>
                </div>
    }
}

let routes = (
    <Route path="/" component={App}>
        <IndexRoute component={App}/>
        <Route path="/wreck" component={Wreck}/>
        <Route path="/fauna" component={App}/>
        <Route path="/advice" component={App}/>
        <Route path="/team" component={App}/>
    </Route>
)

ReactDOM.render(<Router id="router">{routes}</Router>, document.getElementById('app'))

