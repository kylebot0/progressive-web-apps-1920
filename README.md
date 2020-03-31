# SpaceX Display ⚙️

This project uses the SpaceX API to display their rockets, missions, launches, capsules and ships. It has certain overview pages and detailpages. The detailpages feature all the extra content 

![Project Image](https://github.com/kylebot0/web-app-from-scratch-1920/blob/master/gh-images/hoofdpagina.png)
> Overview page

## Table of Contents 🗃
- [SpaceX Display ⚙️](#spacex-display---)
  * [Table of Contents 🗃](#table-of-contents---)
  * [Live demo](#live-demo)
  * [To Do and features 📌](#to-do-and-features---)
  * [Description 📝](#description---)
  * [Actor diagram](#actor-diagram)
  * [Interaction diagram](#interaction-diagram)
  * [Installing 🔍](#installing---)
    + [Packages and Technologies](#packages-and-technologies)
  * [API 🐒](#api---)
  * [Keep up to date](#keep-up-to-date)
  * [Contributing](#contributing)
  * [Sources 📚](#sources---)
    + [Credits](#credits)
  * [Licence 🔓](#licence---)

## Live demo
[Direct link](https://pwa-1920-kyle-bot.herokuapp.com/)
```
https://pwa-1920-kyle-bot.herokuapp.com/
```

## To Do and features 📌
Things to do in this project:

- [ ] Add HTTPS/2 support
- [ ] Add all the detail pages

Features:

- [x] Add service worker
- [x] Add offline mode
- [x] Server side rendering with EJS
- [x] Add critical rendering path
- [x] Use gzip compression
- [x] Image reflow and lazy loading of images for slow networks
- [x] Browser caching
- [x] Cache caching
- [x] Add minifying with webpack

## Description 📝
This project uses the SpaceX API to display their rockets, missions, launches, capsules and ships. It has certain overview pages and detailpages. The detailpages feature all the extra content when you search for it. To get the different kind of overview pages, the app calls to a different api to get the data. It renders the pages using EJS on the server. Next to that the pages are fully optimized for performance and gets a 100 score in audits.

![Detail page](https://github.com/kylebot0/web-app-from-scratch-1920/blob/master/gh-images/detailpagina.png)
> Detail page


## Installing 🔍
To install this application and enter the repo write the following into your terminal:
```
git clone https://github.com/kylebot0/web-app-from-scratch-1920.git && cd web-app-from-scratch-1920
```

Because this project uses different modules, you'll have to npm install to get the different dependecies
```
npm install
```
To build all the modules, run
```
npm run watch
```

### Packages and Technologies
This project makes use of the following packages and technologies:

  * Webpack

## API 🐒
The data used throughout the application is from the SpaceX API ```https://api.spacexdata.com/v3```.
It is a free public api with no rate limit, and can be called as many times as you want.

Because i call the API, from different links the data can vary.
The data has i.e. the following structure:
```javascript
{
    "mission_name": "Iridium NEXT",
    "mission_id": "F3364BF",
    "manufacturers": [
      "Orbital ATK"
    ],
    "payload_ids": [
      "Iridium NEXT 1",
      "Iridium NEXT 2",
      "Iridium NEXT 3",
      "Iridium NEXT 4",
      "Iridium NEXT 5",
      "Iridium NEXT 6",
      "Iridium NEXT 7"
    ],
  },
```

If you want to look at the docs from the API, and or are interested in easily seeing how it works. 
SpaceX uses postman for that.
```
https://docs.spacexdata.com/?version=latest
```

## Performance 
### Service worker
The service worker adds the possibility to 
- [x] Add service worker
- [x] Add offline mode
- [x] Server side rendering with EJS
- [x] Add critical rendering path
- [x] Use gzip compression
- [x] Image reflow and lazy loading of images for slow networks
- [x] Browser caching
- [x] Cache caching
- [x] Add minifying with webpack
## Keep up to date
Make sure you pull the repository once in a while since we are still working on this project, you can do this by using ```git pull```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Sources 📚
Sources i used throughout the project.

* https://docs.spacexdata.com/?version=latest
* https://dev.to/kodnificent/how-to-build-a-router-with-vanilla-javascript-2a18

### Credits

  * None

## Licence 🔓
MIT © [Kyle Bot](https://github.com/kylebot0)
