import React from 'react';
import './App.scss';
import wolfImage from '@assets/images/wolftrax-green.jpg'

class App extends React.Component {
  state = {
    CaptainKirkBio: {},
    Foo: null, // Foo is out component
  };

  componentDidMount() {
    this.onGetKirkBio();
    import(/* webpackChunkName: 'Foo' */ '../../UI/Foo').then(Foo => {
      this.setState({ Foo: Foo.default });
    });
  }

  onGetKirkBio = async () => {
    try {
      const result = await fetch('http://stapi.co/api/v1/rest/character/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: {
          title: 'James T. Kirk',
          name: 'James T. Kirk',
        },
      });
      const resultJSON = await result.json();
      const character = resultJSON.characters[0];
      this.setState({ CaptainKirkBio: character });
    } catch (error) {
      console.log('error', error);
    }
  };

  render() {
    const { CaptainKirkBio, Foo } = this.state;
    return (
      <div className="app">
        <h2>VERSION: {process.env.VERSION}</h2>
        <h2>PLATFORM: {process.env.PLATFORM}</h2>
        <h2>NODE_ENV: {process.env.NODE_ENV}</h2>
        <img alt="wolftrax-green" src={wolfImage} className="app-header" />
        <p>
          We are a most promising species, Mr. Spock, as predators go. Did you know that? I frequently have my doubts. I
          dont. Not any more. And maybe in a thousand years or so, we will be able to prove it.
        </p>
        <p>- Captain Kirk</p>
        <section>
          {Object.values(CaptainKirkBio).length === 0 ? (
            <p>Loading User Information</p>
          ) : (
            <p style={{ wordBreak: 'break-all' }}>{JSON.stringify(CaptainKirkBio)}</p>
          )}
        </section>
        {Foo ? <Foo /> : <p>Foo is loading</p>}
      </div>
    );
  }
}

export default App;
