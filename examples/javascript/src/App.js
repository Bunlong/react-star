import React from 'react';
import { Star } from 'react-star'

class App extends React.Component {
  render() {
    return (
      <div>
        <Star
          onChange={(rate) => console.log(rate)}
        />
      </div>
    );
  }
};

export default App;
