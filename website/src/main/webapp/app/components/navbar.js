import React from 'react'
import {Link} from 'react-router'

class Navbar extends React.Component{

    constructor(props) {
      super(props)
        this.state = {
            isMapExpanded: true
        }

    }

    toggleMap() {
        this.setState({isMapExpanded: !this.state.isMapExpanded})
    }

    render() {

        var expandButtonClass = this.state.isMapExpanded ? "fa fa-chevron-up" : "fa fa-globe"

        return (
          <nav className="navbar navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">GREEC</a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li role="presentation">
                    <Link to="/wreck" activeClassName="link-active">Les Epaves</Link>
                  </li>
                  <li role="presentation">
                    <Link to="/fauna" activeClassName="link-active">La Faune</Link>
                  </li>
                  <li role="presentation">
                    <Link to="/advice" activeClassName="link-active">Conseils</Link>
                  </li>
                  <li role="presentation">
                    <Link to="/team" activeClassName="link-active">L'Equipe</Link>
                  </li>
                </ul>

                  <div className="map-toolbar">
                      <button onClick={this.toggleMap.bind(this)} type="button" className="btn btn-default"
                              data-toggle="collapse" data-target="#map-container" aria-expanded="true" aria-controls="map-container">
                          <i className={expandButtonClass} />
                      </button>
                  </div>
              </div>




            </div>
          </nav>
        )
    }
}

export default Navbar
