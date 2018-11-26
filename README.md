# Introduction
 This is a simple **SpendLess** tool to track our customers' spending and help them get their spending on track. Simply, use the handlers on the right side of the widget to adjust and see how much you can save! This app has been GitHub and here is the link to the app https://rajgthub.github.io/spendless/.

# Technologies used to build this tool
 JavaScript (ES6) with ReactJS,  CSS3 and HTML5 are used with create-react-app module to build and develop this app. Also, Redux is used to manage states and avoid passing props between components; it helps reduce the complexity as we add more features to the app. 

 This is also fully tested and TDD approach was followed during the development process. Actions, reducers and components were tested using enzyme and redux-mock-store modules. User interactions such as input value change and click were also tested.  

# Follow the steps below to get started and run the app 

## step 1: clone or fork the project and install dependencies using yarn or npm inside your packge.json (root) folder:
      $ yarn or $ nmp i
## step 2: run the project 
    $ yarn start or $ npm start
## step 3 (optional): run the test suites
    $ yarn test or $ npm test

# Further improvements
This app has been implemented using pure CSS3 and JSX. However, third-party modules such as Bootstrap and React strap, Material-UI, Formik and Redux form can be used to refactor some of the input fields used in this app or we can generate our own Field elements by following DRY! 

# Challenges faced
Using range input fields and working with currency symbol (£) while controlling the input field to get and set to the component state!