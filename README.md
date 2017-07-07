# d2l-turnitin-finder
Goes through a list of d2l courses and checks if the course uses Turnitin.
## Use

To use this tool, you must first use the `course-list-generator` module found in a different repositiory in `byuitechops`.
This tool will generate a CSV file for you based on a search query.
## Install

To install this program, open the command line and type this in: 
```
npm i -g https://github.com/byuitechops/d2l-turnitin-finder.git
```
Once you have this repository installed and you have a CSV file available to use, run the program by typing 
```
node finder
```
## Dependencies

The program uses nightmare to click through as many courses as are listed in the CSV (as links) to check for a Turnitin setting in D2L.
It will write out an HTML file for you and open it in your browser.
This program depends on `d2l-hacker` module in `byuitechops`.
