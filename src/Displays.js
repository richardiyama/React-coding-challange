import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderBanner from './HeaderBanner';
import { makeYourChoices } from './compute';
import './Displays.css';

class Displays extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feed: null,
      loading: false,
      error: false,
    };
  }

  componentDidMount() {
    this.fetchFeed();
  }

  async fetchFeed() {
    this.setState({ loading: true });

    let results = null;
    try {
      const response = await fetch('/sample.json');
      if (!response.ok) {
        this.setState({ error: true, loading: false });
        return results;
      }

      results = await response.json();
      this.setState({ feed: results, loading: false });
    } catch (error) {
      console.error('Fetch feed err:', error); 
      this.setState({ error: true, loading: false });
    }

    return results;
  }

  renderContent() {
    const { programType } = this.props;
    const { feed, loading, error } = this.state;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Oops, something went wrong...</div>;

    if (!feed || !feed.total) {
      return <div>Looks like there is nothing to watch ¯\_(ツ)_/¯.</div>;
    }

    const displays = makeYourChoices(feed.entries, {
      limit: 21,
      releaseYear: 2010,
      programType,
    });

    return (
      <div className="display-list">
        {displays.map(display => (
          <div className="display" key={display.title}>
            <img src={display.images['Poster Art'].url} alt={display.title} />
            <div className="display-title">{display.title}</div>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <>
        <HeaderBanner content={this.props.bannerTitle} />
        <div className="wrapper displays">{this.renderContent()}</div>
      </>
    );
  }
}

Displays.propTypes = {
  programType: PropTypes.string.isRequired,
  bannerTitle: PropTypes.string.isRequired,
};

export default Displays;
