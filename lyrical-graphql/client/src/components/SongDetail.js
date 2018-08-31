import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSongQuery from '../queries/fetchSong';

class SongDetail extends Component {
  render() {
    return (
      <div><h3>song detail</h3></div>
    );
  }
}

// export default graphql(fetchSongQuery)(SongDetail);
export default SongDetail;
