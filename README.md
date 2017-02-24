# open-calendar
[![Build Status](https://travis-ci.org/joelklingler/open-calendar.svg?branch=master)](https://travis-ci.org/joelklingler/open-calendar)
[![Heroku](https://heroku-badge.herokuapp.com/?app=glacial-meadow-43612)](https://glacial-meadow-43612.herokuapp.com/)

An online calendar that doesn't require login or auth. You create a calendar and get a permalink. Anyone with that permalink can use the calendar.

## Installation

Clone repository
```
git clone https://github.com/joelklingler/open-calendar
cd open-calendar
```

Install dependencies
```
npm install
```

Run the app
```
node app.js
// or
npm start
// You can now visit the page on localhost:3000
```

Run tests
```
mocha tests --recursive
// or
npm test
```