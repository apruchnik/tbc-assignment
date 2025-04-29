### Instructions on How to Run the Programs

sequence_calculator: Open seqCalcPython and run calc.py (python calc.py to run it in the command line). The graphs of
the runtime and best fit curve are in the same folder as .pngs.

NOTE: If running the graphing program at the bottom of calc.py, please install numpy, seaborn, scipy, and pandas.

Frontend and backend of the car simulator: Go to each directory and run npm install. To start each server, run npm run
start. Open your browser to localhost:3000 (the server the frontend is running on) to view and interact with the
simulator graphs.
With more time, I would have added an animation to the graphs and adjustable parameters via the web UI.
---

### Time Complexity of sequence_calculator

The time complexity of the python calculator function utilizing for loops would be ~O(n^1.585), as there is one for loop
which iterates through n - 1 numbers. However, there is also multiplication in the algorithm, which is essentially a for
loop of addition. Python uses the Katsuraba algorithm for multiplying very large numbers, which has a complexity of
approximately O(n^1.585). Using exponent rules, this method gave me the overall O(n^1.585). However, when I wrote the
program to plot the curve of best fit for the data and return the exponent of that curve, the runtime actually turned
out
to be ~O(n^1.987), which is essentially O(n^2). This was a surprise, as there is only one computational for loop in my
function, but since multiplication is essentially just another for loop, this would make sense.

NOTE: sequence_calc_graph.png is the graph of the function with n steps of 50, which is why the curve is so accurate and
jumps time values more than sequence_calc_graph_FITCURVE.png. To see a smoother version of the graph (with n steps of
1000),
view the latter png.

NOTE: The other solution in the file utilizes the characteristic equation of the given recursive function to obtain its
geometric formula. Running this program has a computational complexity of O(1), as it is simply running a math equation
with exponents based on n. Technically, the exponents make the runtime a little longer, but there is only one line of
code so it would still classify computationally as O(1).
---

### Challenges

The sequenceCalculator folder of this project contains my first attempt at the sequence calculator in JavaScript.
However, after trying multiple packages (BigInt, Decimal, Big, etc.) to try and calculate such large values, I
eventually had to give up as JS simply does not support enormous values. However, Python supports large integers, so I
had to revert to using a for loop instead of my faster geometric equation. I obtained this equation through solving the
given recursive formula for its characteristic equation, then solving the system of equations given by the base cases.
Upon testing, my equation did work very well, but unfortunately Python does not support large floats (only integers).
This forced me to use the less efficient for loop method which resulted in a runtime complexity of almost n^2. In
general, it was frustrating to give up on a solution I knew would be faster because the languages I worked with did not
support big numbers. However, I did include the original method in comments for testing smaller values.

For the car simulator, working out the simulator itself was fairly straightforward. I decided I wanted to build a simple
website with React to display the graphs utilizing Plotly for React, as it gives an easily customizable graph that is
interactive on the site. However, I ran into issues connecting the front and backend with cors, as well as issues
working with JSONS. I troubleshooted for a while before realizing I simply did not have any middleware to run between
the front and backend, which was the error. I added express.json and the problem was solved. 