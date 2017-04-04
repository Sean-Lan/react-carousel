# Carousel - React Transition Demo

This is an image carousel demo for transition usage with [React](https://facebook.github.io/react/). You can click the `NEXT PICTURE` button to see the pictures sliding from left to right.

![demo](./demo.gif)

## Start

	npm install
	
	npm start

## Structure

    ├── README.md
    ├── node_modules
    ├── package.json
    ├── public
    │   ├── favicon.ico
    │   └── index.html
    └── src
        ├── components
        │   ├── App
        │   │   ├── App.css
        │   │   ├── App.js
        │   │   ├── App.test.js
        │   │   ├── images
        │   │   │   ├── dog1.jpg
        │   │   │   ├── dog2.jpg
        │   │   │   ├── dog3.jpg
        │   │   │   ├── dog4.jpg
        │   │   │   └── dog5.jpg
        │   │   ├── index.js
        │   │   └── logo.svg
        │   └── Carousel
        │       ├── Carousel.css
        │       ├── Carousel.js
        │       └── index.js
        ├── index.css
        └── index.js

The real story is in `src/components/`. There are two components, i.e, `App` and `Carousel`, and `App` contains a `Carousel`. In `Carousel.css`, the relevant transition properties are defined.

## Acknowledgement

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), thanks for the convenience it offers!

## License

No license, you can use it anywhere you like.

