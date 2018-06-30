# CRA SSR Boilerplate

## Goal

I've spent some time to set up my first server-side rendering React app.

Then I've spent even more time to make it work with the React Router V4.

And one day I decided to combine all my experience from the articles I've found around the Internet and make a boilerplate that will work with original ```create-react-app```.

You don't need to spend that much time anymore. Just use this boilerplate =)

## Stack

- [React js](https://reactjs.org/)
- [React router 4](https://reacttraining.com/react-router/web/guides/quick-start)
- [Express js](http://expressjs.com/)

## Docs

1. Clone the repo.
2. run ```npm install```
3. run ```npm start``` to benefit from all **CRA** features
4. run ```npm run server``` to build the app and start Express server
5. (FOR PRODUCTION) Don't forget to change ```NODE_ENV``` in ```npm scripts``` in **package.json** to ```production``` before deploying
P.S. Server runs with nodemon and will be hot-reloaded on changes. However, since the app is built before starting the server, any changes in components will not be visible. Rerun ```npm run server``` to see your changes in SSR mode.


### Happy Coding!
