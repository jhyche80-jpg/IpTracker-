# FrontEnd Mentor Ip Tracker 
## Table of contents 
 1. [Overview](#Overview)
    1. [Features](#Features) 
    2. [Usage](#Usage)
 2. [Problem](#problem)     
    1. [Problem Breakdown/ Goal](#problem-breakdown-goal)
    2. [Questions and Answer](#questions--answers)
    3. [Input?](#input-)
    4. [Output?](#output-)
    5. [Step by step Plan](#step-by-step-process-what-will-i-need-to-do)
 3. [What I did step by step](#what-i-did-in-detail)
 4. [Trouble Shooting ](#troubleshooting)
 5. [Reflection](#reflection)
 6. [References](#references)
    1. [Programs Used ](#programs-i-used)
## Overview 
The IP Address Tracker is a web application that allows users to track any IP address or domain and view its geolocation on an interactive map. 
The app fetches IP information using the IP Geolocation API by IPify and displays the results with an interactive map powered by LeafletJS. The 
interface is fully responsive and includes accessibility features for a better user experience.
### Features
1. Display the visitor’s own IP address and location on page load.
2. Search for any IP address or domain and display:
    - IP address
    - Location (city and state)
    - Timezone
    - ISP
3. Interactive LeafletJS map centered on the location.
4. Input validation to ensure correct IP or domain formats.
5. Responsive design for mobile and desktop.
6. Hover states and accessibility features using ARIA attributes.
### Usage

- Enter an IP address or domain in the input field and click Search.
- The app will display the IP information and update the map with a marker at the corresponding location.
- On page load, the app automatically displays the visitor’s IP address and location.

## Problem 
### Problem Breakdown!/ Goal
Building a Ip tracker page 
- ↓Html
- → Accessible design for both mobile and desktop users 
- → Input with validation
- → Ui
- ↓Css
- → Hover states for interactives
- → Validation colors 
- ↓ JS
- → Message displaying 
- → API call
- → Promises 
- → Error handling(try/catch)
- → Redirect
to make an arrow  First, hold down the Alt key. For a left-facing arrow, type the number 27 ←. A right arrow can be inserted by typing the number 26 →. Type the number 24 for an up arrow ↑, or 25 for a down arrow ↓.
### Questions + Answers  
- How do I get input?

     I will use the ```<Input>``` tab on it 
 
 - How do I check it’s valid?
    The input will be required 
- How do I display something back?
    in the js code , each box will be separated by their inputs. 
-  What is LeafletJS and how can i use it to find locations on a map
    LeafletJS is a light open source, js Liabary to build interactive maps for the web 
- How can i intialize the LeafletJS file 
    firstly you will make a whole new js file for the map and then defer js into their respective files 
    You can add a dive with the  id of map and in the js you can have a const with the name map.
    in the name you initalize the map and set the starting location and the zoom. 
- How can I get location and Track the IP address ?  
Using  IP Geolocation API by IPify I can make an account and then use its api to look up an IP address and their location. 
- How will I display the IP Address  correctly? 
    I should make and algorithm that will use the following ```<input type="number" class="input-box" placeholder="xxx.xxx.xxx.xx" autocomplete="off" />```
    this will show the format at which the ip address should be displayed and add a validation function in the code and error handling that will tell the specific problem and how to fix it 
- How will I get the Ip address of the computer of the person yusing the website to make it display first ?
    Your website cannot directly see the visitor’s IP address, so you send a request to a public IP lookup API . That API returns the user’s public IP, 
    which you can then show on your page.Once you have the IP, you can send it to a geolocation API  to get the user’s city, region, and GPS coordinates. 
    Then you can use those coordinates to center the Leaflet map and place a marker at their location.
    making another function.

### Input ?
1. Ip address 
### Output ??
1. Location (City and state)
2. Time Zone 
3. Isp 
4. the Ip address 
5. Location on the map


### Step-by-Step Process (What will I need to do)  
The Outcome of every battle takes place in the planning phase. 
1. Make the Html File and set it up with the input and the output 
2. Structure the HTML file 
3. In js create a file that will fetch the Api information. 
4. In the main js file make
5. Test and debug the page
6. Style the page and make it acessible (adding hover effect and other things)


## What I did in detail 
In this section you should say what you did and why and if you made refinements as well. 
1. Make the Html File and set it up with the input and the output 
- I added the title and made the Basic Html structure for the page
- I added he input field and other static elements like the titles of each sections that be updated based on the search criteria. 
- I added a div that will display the full map and location for later use. 
2. I created a class called Location that will get feched by the Api and asign values to it. 
-  I also made another doccument that will help with a function and help me find the state ! I streamlined it by finding a website and copy and pasting the template 50+ times and then filled it in line by line. 
-  I made a function that will loop through the whole of the zipranes and find where the number is between and added notes just for  people who are wondering why i have more than 50!
3. I made the fetch function  in another function and made a simple error message until i make the next doccument 
4. I made a document to take the specific type of error. 
5. I put I started on the main js file to fet the data and store the data into a let  variable . 
6. I then spent time debugging the app
7. I added  the map system 
8. i then fixed the css code to resemble the website 
9. IO added aria values to things for screen readers
10. I then added more css media for mobile devices 
11.  Deleted superflous code since i do not need it any more

## Troubleshooting 
    Ask: “What should happen right now?”
    Ask: “What’s actually happening?”
    Test your assumptions step by step.
### Problems 
Problems  will arise every time you code knowing the problem is key to understanding it !

1. I noticed that the website did not show us the state and we needed the state   
2. My file paths were really messed up and I could not figure out wha was wrong with it 
3. zip code isnt popping up, 


### Solutions
 Finding out how to fix those problems will be important!

1.  I went to a website and hard coded in the zipcodes 
2. I remade the file paths and redownloaded live server it too me a long time however
3. Turns out You do not need the zipcode for that function because region gives you the state ! i ended up deleting the function i made and then adding a contional .


## Reflection

Developing the IP Address Tracker was an engaging process that required integrating HTML, CSS, JavaScript, and external APIs to create a functional, interactive web application.
 My development process began with planning the layout and structure of the HTML page, creating input fields for IP addresses or domains, sections to display results, and a <div> 
 for the interactive LeafletJS map. Later after finishing the js portion of the code, I then focused on styling the interface, adding hover states, responsive layouts for mobile 
 devices, and accessibility features like ARIA attributes to improve usability.

The JavaScript portion presented the greatest challenge, particularly in fetching and displaying geolocation data. Initially, I attempted to determine the state using ZIP code 
ranges, which became superflous once I realized the IPify API already provides the region. I structured my code by creating a Location class to store API responses 
and separate functions for fetching data, updating the UI, and handling errors. Implementing LeafletJS for map rendering was another learning opportunity. I had to ensure the 
map initialized correctly, updated dynamically, and centered on the user’s location or searched IP. Error handling and input validation were also critical to maintaining a 
robust application.

Key solutions included simplifying the state detection logic, restructuring file paths to avoid broken references, and systematically debugging API calls and map updates. 
I also refined the CSS and layout based on iterative testing across devices to ensure a polished, responsive design.

For potential improvements, I could implement more advanced input validation to detect invalid IPs or domains before querying the API, add smoother map animations, and enhance the user interface with additional styling cues or interactive elements. Overall, this project strengthened my understanding of asynchronous operations, API integration, responsive design,
 and practical problem-solving in web development.


## References 
- https://stackoverflow.com/questions/49306970/correct-input-type-for-ip-address
- https://www.w3schools.com/html/html_form_input_types.asp
- https://www.structnet.com/instructions/zip_min_max_by_state.htm
- https://leafletjs.com/
- https://onecompiler.com/typescript/444nr9wk8
### Programs I used 
- Leafjs
- JavaScript
- Html
- Css 
- Bootstrap







