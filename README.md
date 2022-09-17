# CRUD operations with Firebase on a React App

>This project was bootstrapped with 
* [Create React App](https://github.com/facebook/create-react-app) 
* [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/) / [react-bootstrap](https://react-bootstrap.github.io/getting-started/introduction) 
* [Firebase](https://firebase.google.com/docs?gclid=Cj0KCQjwvZCZBhCiARIsAPXbajtu7-o7ukBqk1aJUnJD_LcjawBC6KMpgvj6O6ZZQw_x3-6C-sVwb5oaAprQEALw_wcB&gclsrc=aw.ds) 

>Deployed project link ( hopefully it is still live )
>`https://react-firebase-crud-7a23c.web.app/`
## Project Description
---
### **App Functionality**
This is a really basic CRUD app that allows you to add/update new books to the database by introducing a book title, author, and status within the provided form.
Once the submit button is pressed, the front end will call a "post" method that will add the new book to the database.

Once the databse is populated with at least one item, the app will show a table of the previously created books and it will give you the options to edit or delete each individual book.

### **Technologies used**
* React
  * React useState, useEffect, props, and function components
* Bootstrap
  * React-Bootstrap
  * Container, Form, Buttons, and many other useful components
* Firebase
  * Firestore

## Personal Notes
---
### **Motivation**
I decided to work on this project that I found online so I could become familiar with firebase and its features.
This is because I have a dream project that I wish to accomplish before the year is over (2022). It requires many features such as CRUD operation, API calls, OAuth 2.0, user authentication, amongst others.

### **What I learned**
Every time I work on a new project I work faster and undestand better what I'm doing, but on this specific project I felt like many things started to make even more sense.
* I finally learned about file structure for small projects.
For example, I created a directory named `/services` were I handled all my database operations and exported those functions to the other components within my app.
* I learned to deploy my web apps on Firebase which made me really excited to be able to share my apps with my non-programmer friends.
* I worked with react bootstrap and learned to use its documentation which made the front-end styling process way easier and faster.

### **Challenges faced**
I first found muself really lost while working with react-bootstrap but reading the documentation helped me a lot by giving me a path to follow.

I had lots of issues while working with github due to the constant error messages while trying to push my code to the remote origin, but somehow I managed to fix it (I'm still not sure about how my solution fixed the problem tho)

I found myself a little lost while working with props, but then I quickly picked it up and realized it was actually pretty simple.

### **Future Goals**
* Create an user authentication app
* **Learn how to test my apps**
* Learn how to use Redux
* Learn how to manage routes with React

## How to Install
---
Just fork the repository and follow the create-react-app npm | yarn command:
> ### `npm start`
>Runs the app in the development mode.\
>Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
>The page will reload when you make changes.\
>You may also see any lint errors in the console.
