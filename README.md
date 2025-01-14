# Exoplanet Data Visualizer

> **DISCLAIMER: May take a couple seconds to load/parse**
>
> Demo: https://exoplanet-visualizer.netlify.app/
> 
> **Created for the CodePi Hackathon (2024-2025)**
> 
> **Big thanks to the NASA Exoplanet Archive for all the data**
## Inspiration
- I was inspired to create this project by my own genuine curiosity at how we have progressed in discovering exoplanets, which was surprisingly different than what I expected.
## Information
- The Exoplanet Data Visualizer is a small project, featuring an interactive graph with four different visualizations to help visualize how the discovery in exoplanets has changed through time, exemplifying how code can be used in statistics to make data more readable and understandable.

  
  ![image](https://github.com/user-attachments/assets/0382ab9c-c606-408f-8d05-c7bb19b99129)
  ## How it was built
  - The visualizer was built using react for building the webpage, charts.js for making and rendering graphs, and papaparse to parse through the data.
  ## Challenges
  - The biggest challenge by far in making this project were with the parsing and visualization of the data. When parsing data in a web browser, certain Node modules are not able to be used, such as fs, which took me a while to figure out.
  - Additionally, once I had the data for each graph, learning how to make the chart.js graph change without making an error was another challenging ordeal since one can't just replace the dataset list and must instead change the individual components of the list.
  ## Accomplishments
  - This is my first time building a webapp with this many features individually, and I'm proud at how much I've learned and how much I've done for somebody who is very unexperienced.
  ## What could be improved upon or added?
  - The thing that would have the biggest impact when improved upon would be the optimization. Currently, it takes a couple seconds to parse through all the data, but potentially, by storing the parsed data on a server, it would be a lot quicker and allow each client browser to fetch the data.
  - Adding more graphs would also be an obvious increase to quality, especially if there are enough to the point where each user can select the X and Y axis through a dropdown instead of only having a few preset graphs.
  
