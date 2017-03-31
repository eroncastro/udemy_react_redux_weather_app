import React from 'react';

/*
  The React ref system allows a React component
  to reference an HTML component after it has been rendered
  to the page.
*/

class GoogleMap extends React.Component {
  /*
    Lifecycle method that gets called after the component
    has been rendered to the screen.
  */
  componentDidMount() {
    /*
      this.refs.map is a reference to a component
      rendered to the screen. This is usually the way
      to deal with third-party libraries that don't know
      how to interact with the React ecosystem.
    */
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // this.refs.map
    return <div ref="map" />;
  }
}

export default GoogleMap;
