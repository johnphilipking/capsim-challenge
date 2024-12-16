# capsim-challenge
Node/React Demo for Capsim Job Interview Challenge

## Instructions

1. Clone repository from https://github.com/johnphilipking/capsim-challenge.git
2. Open terminal, navigate to project folder
3. To install required Node packages: `npm install`
4. To run tests: `npm run test`
5. To start application: `npm run start`
6. Application should start up and be available at http://localhost:3000/ assuming that port isn't already in use
7. To compile/minify for production: `npm run build`


## Application Notes

The app uses react-router to define the page paths for the default, quiz, and report pages. The working assumption being that the quiz that is loaded is defined by the URL path. In this demo, that path is "/1", with "1" being the value used by the data services as the "testId" to query for the appropriate quiz content for this page, allowing the Quiz and Report components to work for all quizes and quiz result sets available from the data services.

The Report component uses the graph library from https://www.react-google-charts.com/ and if depending on the amount of data and complexity of chart I would wrap it in a `<Suspense>` fallback so that the user would see a loader animation for the few seconds the chart my take to render.


Thanks.

John King
johnphilipking@gmail.com
