import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import actions from 'services/actions'
import { dataRef } from 'services/firebase'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import mapCustomStyles from 'constants/mapStyles'

// components
import Spinner from 'components/atoms/Spinner'

function MapContainer(props) {
  const [stores, setStores] = useState([])

  useEffect(() => {
    dataRef.doc('map').onSnapshot((doc) => {
      setStores(doc.data().markers)
    })
  }, [])

  const handleMarkerClick = (index) => {
    actions.changeMarkers({ action: 'DELETE', value: index })
  }

  const handleMapClick = (mapProps, map, event) => {
    const markerData = { lat: event.latLng.lat(), lng: event.latLng.lng() }
    actions.changeMarkers({ action: 'ADD', value: markerData })
  }

  const displayMarkers = () => {
    return stores.map((item, index) => {
      return (
        <Marker
          key={index}
          position={{ ...item }}
          onClick={() => handleMarkerClick(index)}
        />
      )
    })
  }

  const _mapLoaded = (mapProps, map) => {
    map.setOptions({ styles: mapCustomStyles })
  }

  return (
    <StyledMapContainer>
      <h3 className='title'>
        - Haz clic sobre el mapa para añadir un nuevo negocio.
        <br />- Haz clic sobre un negocio para removerlo.
      </h3>

      <Map
        google={props.google}
        zoom={11.52}
        style={mapStyles}
        initialCenter={{ lat: 4.6417302, lng: -74.0994751 }}
        onClick={handleMapClick}
        onReady={(mapProps, map) => _mapLoaded(mapProps, map)}>
        {displayMarkers()}
      </Map>
    </StyledMapContainer>
  )
}

const StyledMapContainer = styled.div`
  .title {
    position: absolute;
    z-index: 1000;
    background-color: white;
    padding: 0.5em 1em;
    bottom: 2.5em;
    left: 0.5em;
  }
`

const mapStyles = {
  width: '100%',
  height: 'calc(100vh - 7em)',
}

const LoadingContainer = () => <Spinner type={2} color='primary' />

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB_4xP3SR5gwxggFfoq7KHFUHZCmJetdWY',
  language: 'es',
  LoadingContainer,
})(MapContainer)
