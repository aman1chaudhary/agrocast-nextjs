import React from 'react'
import { MapContainer, TileLayer, Popup, Marker, Tooltip, Circle, FeatureGroup,GeoJSON,  } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { ListProjects } from '../utilities/Utility'
import indiastates from '../data/indiaStates.json';
import { MajorEarthquakes } from '../utilities/Utility'
import MarkerIcon from "../public/images/placeholder.png"
import * as L from "leaflet";

const myIcon = new L.Icon({
  iconUrl: MarkerIcon.src,
  iconRetinaUrl: MarkerIcon.src,
  popupAnchor: [0, 0],
  iconSize: [20],
});

const ProjectMap = () => {

  return (
    <>
      <MapContainer
        center={[20.5937, 80]}
        // zoomControl={false}
        style={{ width: '100%', height: "500px", backgroundColor: 'white', boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.1)" }}
        zoom={4}
        zoomDelta={0.5}
        zoomSnap={0}
        maxZoom={7}

        attributionControl={false}
        scrollWheelZoom={false}
        minZoom={3}
        keyboard={false}
        dragging={true}
        touchZoom={false}
        doubleClickZoom={false}
      >

        {/* <TileLayer
          url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
          subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
        /> */}

                <GeoJSON
                  data={indiastates.features}
                  style={{
                    fillColor: "#84857e",
                    fillOpacity: 0.5,
                    weight: 2,
                    color: "whitesmoke",
                    interactive: false,
                  }}
                />






        <FeatureGroup>

          {ListProjects.features.map((station, index) => {
            return (
              <Circle
                key={index}
                center={[station.properties.Lat, station.properties.Lon]}
                radius={30000}
                color="blue"
                fillColor="blue"
                fillOpacity={1}
              >
                <Popup>
                <div className="popup_content">
                    <h6>Project</h6>
                      <strong>Project Name:</strong> {station.properties.ProjectName}<br />
                      <strong>Client:</strong> {station.properties.Client}<br />
                      <strong>District:</strong> {station.properties.District}<br />
                      <strong>State:</strong> {station.properties.State}<br />
                      <strong>Country:</strong> {station.properties.Country}
                  </div>
                </Popup>
              </Circle>
            );
          })}

          
        </FeatureGroup>


      </MapContainer>

    </>
  )
}

export default ProjectMap