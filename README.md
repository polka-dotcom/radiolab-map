# Interactive Map with Location Pins

## Overview

This project creates a web-based interactive map featuring location pins that provide detailed information upon hovering. The pins are in relation to various episodes and are an example of the locations that Radiolab has touched.

## Features

- **Interactive Pins:** Hovering over a pin on the map displays a formatted textbox with relevant information.
- **Zoom Functionality:** Users can zoom in and out to explore different areas of the map.
- **Location Types:** Pins can be placed on cities or specific locations such as buildings.
- **Filtering:** A filter option allows users to limit visible locations based on various criteria, including years or tags (e.g., research labs, universities).
- **Pin Management:** An admin can add, remove, or edit pins, including updating information and tags.


-----------------------------
Notes: 

### map used: open street maps 

### backend: manual document approach
to lower the learning curve and ensure a simpler backend experience as a beginner, instead of using Firebase as originally planned I've decided to use basic JSON document. It is 
- easy to implement for beginners
- provides total control over data structure and storage 
- app works without relying on external services 
- the project specs do not require real time updates, multiple user management or exponential scalability
