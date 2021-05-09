// import React, { Component } from "react"
// import { Map, Marker, TileLayer, Popup } from "react-leaflet";

// export default class MyMap extends Component {
//   render() {
//     const { options } = this.props

//     if (typeof window !== "undefined") {
//       return (
//         <Map center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
//           <TileLayer
//             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           <Marker position={[51.505, -0.09]}>
//             <Popup>
//               A pretty CSS3 popup. <br /> Easily customizable.
//             </Popup>
//           </Marker>
//         </Map>
//       )
//     }
//     return null
//   }
// }
