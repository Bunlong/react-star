<p align="center">
  <img src="https://raw.githubusercontent.com/Bunlong/react-star/main/react-star.png" alt="react-star" />
</p>

<p align="center">
  ⭐️ Please support us by giving a star! Thanks! ⭐️
</p>

# react-star

A tiny star rating component with custom icons for React.

<!-- ### 💻 Live [Demo](https://codesandbox.io/s/react-screen-capture-i9f4d) -->

## 🎁 Features

* Easy to use
* Compatible with both JavaScript and TypeScript

## 🔧 Install

react-star is available on npm. It can be installed with the following command:

```
npm install react-star --save
```

react-star is available on yarn as well. It can be installed with the following command:

```
yarn add react-star
```

## 💡 Usage

```jsx
import React from 'react';
import { Star } from 'react-star';

class App extends React.Component {
  render() {
    return (
      <Star
        onChange={(value) => console.log(value)}
      />
    );
  }
};

export default App;
```

## 📖 APIs

<table>
  <tr>
    <th>Props</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>defaultValue</td>
    <td>number</td>
    <td>0</td>
    <td>The default value. Use when the component is not controlled.</td>
  </tr>
  <tr>
    <td>fraction</td>
    <td>number</td>
    <td>1</td>
    <td>The number of equal subdivisions that can be selected as a rating in each icon, example, for a fractions value of 2, you will be able to select a rating with a precision of down to half a icon.</td>
  </tr>
  <tr>
    <td>readOnly</td>
    <td>boolean</td>
    <td>false</td>
    <td>Removes all hover effects and pointer events.</td>
  </tr>
  <tr>
    <td>min</td>
    <td>number</td>
    <td>0</td>
    <td>Minimum star.</td>
  </tr>
  <tr>
    <td>max</td>
    <td>number</td>
    <td>5</td>
    <td>Maximum star.</td>
  </tr>
</table>

## 🔰 Callbacks

<table>
  <tr>
    <th>Callback</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>onChange</td>
    <td><code>(value) => {}</code></td>
    <td>The onChange props fires the moment when the value of the element is changed.</td>
  </tr>
  <tr>
    <td>onClick</td>
    <td><code>(value) => {}</code></td>
    <td>The onclick props fires on a mouse click on the element.</td>
  </tr>
   <tr>
    <td>onHover</td>
    <td><code>(value) => {}</code></td>
    <td>The onHover event occurs when the mouse pointer is moved onto an element.</td>
  </tr>
</table>

## ❗ Issues

If you think any of the `react-star` can be improved, please do open a PR with any updates and submit any issues. Also, I will continue to improve this, so you might want to watch/star this repository to revisit.

## 🌟 Contribution

We'd love to have your helping hand on contributions to `react-star` by forking and sending a pull request!

Your contributions are heartily ♡ welcome, recognized and appreciated. (✿◠‿◠)

How to contribute:

- Open pull request with improvements
- Discuss ideas in issues
- Spread the word
- Reach out with any feedback

## ⚖️ License

The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<!-- 

import React, { CSSProperties } from 'react';

const background = {
  borderRadius: '50%',
  border: '5px double white',
  display: 'inline-block',
  height: 30,
  width: 30,
} as CSSProperties;

const styles = {
  empty: {
    ...background,
    backgroundColor: '#ccc',
  } as CSSProperties,
  full: {
    ...background,
    backgroundColor: 'black',
  } as CSSProperties,
  placeholder: {
    ...background,
    backgroundColor: 'red',
  } as CSSProperties,
};

-->
