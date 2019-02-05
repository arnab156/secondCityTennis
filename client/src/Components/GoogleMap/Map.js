import React from "react";
import "./Map.css";
// import { compose, withProps } from "recompose";
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
// import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

// const MyMapComponent = compose(
//   withProps({
//     googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBpdFyaRVrfekFaRwoEGRXdHAtS0diaTns&v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap
// )((props) =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     {props.isMarkerShown && 
//     <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />
//     && 
//     <Marker position={{ lat: -45.397, lng: 153.644 }} onClick={props.onMarkerClick} />
//     }
//   </GoogleMap>
// )

// export default class MyFancyComponent extends React.PureComponent {
//   state = {
//     isMarkerShown: false,
//   }

//   componentDidMount() {
//     this.delayedShowMarker()
//   }

//   delayedShowMarker = () => {
//     setTimeout(() => {
//       this.setState({ isMarkerShown: true })
//     }, 3000)
//   }

//   handleMarkerClick = () => {
//     this.setState({ isMarkerShown: false })
//     this.delayedShowMarker()
//   }

//   render() {
//     return (
//       <MyMapComponent
//         isMarkerShown={this.state.isMarkerShown}
//         onMarkerClick={this.handleMarkerClick}
//       />
//     )
//   }
// }


// const fetch = require("isomorphic-fetch");
const { compose, withProps, withHandlers } = require("recompose");
const {withScriptjs, withGoogleMap,GoogleMap,} = require("react-google-maps");
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBpdFyaRVrfekFaRwoEGRXdHAtS0diaTns&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers()
      console.log(`Current clicked markers length: ${clickedMarkers.length}`)
      console.log(clickedMarkers)
    },
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 41.8781, lng: -87.6298 }}
  >
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map(marker => (
        <MarkerWithLabel
          key={marker.photo_id}
          position={{ lat: marker.latitude, lng: marker.longitude }}
          labelAnchor={(0, 0)}
          labelStyle={{backgroundColor: "yellow", fontSize: "12px", padding: "1px"}}
        >
        <div>
            Name:{marker.name}<br/>
            Address:{marker.address}<br/>
            Website:{marker.website}<br/>
            Phone:{marker.phone}<br/>
        </div>
        </MarkerWithLabel>
      ))}
    </MarkerClusterer>
  </GoogleMap>
);

export default class DemoApp extends React.PureComponent {
  componentWillMount() {
    this.setState({ markers: [] })
  }

  componentDidMount() {
    // const url = [
    //   // Length issue
    //   `https://gist.githubusercontent.com`,
    //   `/farrrr/dfda7dd7fccfec5474d3`,
    //   `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
    // ].join("")

    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({ markers: data.photos });
    //   });
    this.setState({ markers: [
        { "photo_id": 1, "longitude": -87.661313,"latitude": 41.925331,"name":"Lakeshore Sport & Fitness", "address":"1320 W Fullerton Ave, Chicago, IL 60614","website":"http://www.lakeshoresf.com/", "phone":"773-477-9888"},
        { "photo_id": 2, "longitude": -87.679369,"latitude": 41.925809,"name":"Midtown Athletic Club", "address":"2444 N Elston Ave, Chicago, IL 60647","website":"http://www.lakeshoresf.com/", "phone":"773-235-2300"},
    ]
        
    });
  }

  render() {
    return (
      <MapWithAMarkerClusterer markers={this.state.markers} />
    )
  }
}