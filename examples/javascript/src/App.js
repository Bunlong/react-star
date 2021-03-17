import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { Star } from 'react-star';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Star
          onChange={(rate) => console.log(rate)}
        /> */}
        
        {/* Readonly rating */}
        {/* <Star
          initialRating={3}
          readonly
        /> */}

        {/* Readonly fractional rating */}
        {/* <Star
          initialRating={2.5}
          readonly
        /> */}

        {/* React svg element rating */}
        
        <Star
          fraction={2}
          onChange={(rate) => console.log(rate)}
          // emptyIcon={<SVGIcon href="#icon-star-empty" className="icon" />}
          // fullIcon={<SVGIcon1 href="#icon-star-full" className="icon" />}
        />

        {/* React span element rating */}
        {/* <Star
          emptySymbol={<span className="icon-text">-</span>}
          fullSymbol={[1,2,3,4,5].map(n => <span className="icon-text">{n}</span>)}
        /> */}

        {/* React img element rating */}
        {/* <Star
          emptySymbol={<img src="assets/images/star-empty.png" className="icon" />}
          fullSymbol={<img src="assets/images/star-full.png" className="icon" />}
        /> */}

        {/* Fontawesome Five Star rating */}
        {/* <Star
          emptyIcon="fa fa-star-o fa-2x"
          fullIcon="fa fa-star fa-2x"
        /> */}

        {/* Fontawesome Thumbs Up/Down rating (showcases background icon hiding) */}
        {/* <Star
          emptySymbol="fa fa-thumbs-down fa-2x"
          fullSymbol="fa fa-thumbs-up fa-2x"
        /> */}

        {/* Bootstrap Five Heart rating */}
        {/* <Star
          emptySymbol="glyphicon glyphicon-heart-empty"
          fullSymbol="glyphicon glyphicon-heart"
        /> */}

        {/* Fractional rating */}
        {/* <Star
          emptySymbol="fa fa-star-o fa-2x"
          fullSymbol="fa fa-star fa-2x"
          fractions={2}
        /> */}

        {/* Alert when rate changes */}
        {/* <Star
          onChange={(rate) => alert(rate)}
        /> */}

        {/* Update a label when rate moves */}
        {/* <Star
          onHover={(rate) => document.getElementById('label-onrate').innerHTML = rate || ''}
        /> */}

        {/* Update a label when rate moves "quietly" */}
        {/* <Star
          quiet
          onHover={(rate) => document.getElementById('label-quiet-onrate').innerHTML = rate || ''}
        /> */}

        {/* Colored rating */}
        {/* <Star
          stop={6}
          emptySymbol={['fa fa-star-o fa-2x low', 'fa fa-star-o fa-2x low',
            'fa fa-star-o fa-2x medium', 'fa fa-star-o fa-2x medium',
            'fa fa-star-o fa-2x high', 'fa fa-star-o fa-2x high']}
          fullSymbol={['fa fa-star fa-2x low', 'fa fa-star fa-2x low',
            'fa fa-star fa-2x medium', 'fa fa-star fa-2x medium',
            'fa fa-star fa-2x high', 'fa fa-star fa-2x high']}
        /> */}

        {/* Mixed symbols */}
        {/* <Star
          emptySymbol={['fa fa-star-o fa-2x', 'fa fa-heart-o fa-2x']}
          fullSymbol={['fa fa-star fa-2x', 'fa fa-heart fa-2x']}
        /> */}

        {/* Custom each symbol */}
        {/* <Star
          stop={4}
          emptySymbol="fa fa-battery-empty fa-2x"
          fullSymbol={['fa fa-battery-1 fa-2x', 'fa fa-battery-2 fa-2x',
            'fa fa-battery-3 fa-2x', 'fa fa-battery-4 fa-2x']}
        /> */}

        {/* 1 to 10 rating */}
        {/* <Star
          stop={10}
        /> */}

        {/* 5 to 10 rating */}
        {/* <Star
          start={4}
          stop={10}
        /> */}

        {/* 1 to 10 with step 2 (odd numbers) */}
        {/* <Star
          stop={10}
          step={2}
        /> */}

        {/* 10 to 1 with step -2 (odd numbers between [1..10] inverted order) */}
        {/* <Star
          start={11}
          stop={1}
          step={-2}
        /> */}

        {/* Rating with placeholder */}
        {/* <Star
          placeholderRating={3.5}
          emptySymbol={<img src="assets/images/star-grey.png" className="icon" />}
          placeholderSymbol={<img src="assets/images/star-red.png" className="icon" />}
          fullSymbol={<img src="assets/images/star-yellow.png" className="icon" />}
        /> */}

        {/* <div className="stars" data-stars="1">
          <svg height="25" width="23" className="star rating" fill='red'>
            <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
          </svg>
        </div> */}
      </div>
    );
  }
};

export default App;
