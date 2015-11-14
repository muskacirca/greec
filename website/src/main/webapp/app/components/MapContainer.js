import React from 'react'
import MainMap from './MainMap'

class MapContainer extends React.Component {


    constructor(props) {
        super(props)

    }


    //

    render() {



        return  <div  className="collapse" >
                    <MainMap />
                </div>


    }
}
export default MapContainer
