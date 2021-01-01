# FreeCodeCamp's Pinterest Clone
This is the 15th take home project in FreeCodeCamp's Coding Interview Prep where we have to create a Pinterest Clone where user can login with their github account and then users can view, link and deleted images they link to in the Pinterest Clone.

## Live Demo on Repl
https://freecodecamp-pinterest-clone.jordyf15.repl.co/

## Application Usage
When starting the application user may login or not. Below are the access allowed to unauthorized user and authorized user.  
  
**Unauthorized User:** 
1. User can view all images linked to the Pinterest Clone.
2. User can see other user's wall of images by clicking the user's icon.
3. User can login with their github account, so they gain more access to the application as an authorized user.
  
  
**Authorized User:** 
1. User can view all images linked to the Pinterest Clone.
2. User can see other user's wall of images by clicking the user's icon.
3. User can like images.
4. User can link to images.
5. User can delete images that they linked to.
6. User can see their wall of images by clicking the My Pins button in the application's header.
7. User can see their profile which contain information about their account.

### Notes
When cloning this repository, please note that this application require a few things to work properly. They are:  
1. A database url
2. Github OAuth Application and it's Client id and client secret (stored in a env file in the root directory of the backend).

## Technologies Used
1. Front-End
    - axios version ^0.21.1
    - dotenv version ^8.2.0
    - react version ^17.0.1
    - react-dom version ^17.0.1
    - react-masonry-css version ^1.0.14
    - react-router-dom version ^5.2.0
    - react-scripts version 4.0.1
    - styled-components version ^5.2.1
2. Back-End
    - axios version ^0.21.1
    - body-parser version ^1.19.0
    - cors version ^2.8.5
    - dotenv version ^8.2.0
    - express version ^4.17.1
    - mongoose version ^5.11.8

## Project's User Stories
1. As an unauthenticated user, I can login with GitHub.
2. As an authenticated user, I can link to images.
3. As an authenticated user, I can delete images that I've linked to.
4. As an authenticated user, I can see a Pinterest-style wall of all the images I've linked to.
5. As an unauthenticated user, I can browse other users' walls of images.
6. As an authenticated user, if I upload an image that is broken, it will be replaced by a placeholder image. (can use jQuery broken image detection)