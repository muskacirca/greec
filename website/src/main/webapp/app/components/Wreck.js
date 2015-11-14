import React from 'react'

class Wreck extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            wreck: {
                name: "Ray of Hope",
                header: "Depth: Starts at 20 meters",
                description: "The 'Ray of Hope' is a retired cargo ship that was donated by the Bahamian Government for " +
                "use as an artificial reef. This 200 ft wreck rests on the sand in about 50ft of water with the wheelhouse " +
                "at around 20ft. Stingrays can be seen in the sand around the wreck as well as resident Caribbean Reef sharks.",
                imagePath: "./app/resources/wreck/rayofhope/header-rayofhope.jpg"
            }
        }
    }


    render() {



        return  <div className="container-fluid data-container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <PresentationComponent data={this.state.wreck} />
                        </div>
                    </div>
                </div>


    }
}

class PresentationComponent extends React.Component {

    constructor(props) {
        super(props)
    }


    getThumbnail(src) {

        var dot = src.indexOf(".jpg")
        var name = src.substring(0, dot)
        var extension = src.substring(dot)

        return name + "-thumbnail2" +  extension
    }

    render() {

        var thumbnailPath = this.getThumbnail(this.props.data.imagePath)

        return  <div>
                    <div className="media">
                        <div className="media-left">

                            <img className="media-object img-thumbnail" src={thumbnailPath} alt={this.props.data.name} />
                        </div>
                        <div className="media-body">

                            <h1 className="media-heading">{this.props.data.name}</h1>
                            <PresentationHeader />
                            <PresentationBody data={this.props.data} />

                        </div>
                    </div>
                </div>
    }
}

class PresentationBody extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return  <div className="presentation-body">
                    <p className="lead">{this.props.data.header}</p>
                    <p>{this.props.data.description}</p>
                </div>
    }
}


class PresentationHeader extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return  <div>
                    <ul className="nav nav-tabs">
                        <li role="presentation" className="active"><a href="#">Présentation</a></li>
                        <li role="presentation"><a href="#">Sites de plongées</a></li>
                        <li role="presentation"><a href="#">Media</a></li>
                    </ul>
                </div>
    }
}

export default Wreck
