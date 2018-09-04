import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSongQuery from '../queries/fetchSong';
import { Link } from 'react-router';
import LyricList from './LyricList';
import LyricCreate from './LyricCreate';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;
    if (!song) return (<div>Loading...</div>);

    return (
      <div>
        <Link to="/">back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics} />
        <LyricCreate songId={song.id} />
      </div>
    );
  }
}

export default graphql(fetchSongQuery, {
  options: (props) => ({ variables: { id: props.params.id }})
})(SongDetail);
