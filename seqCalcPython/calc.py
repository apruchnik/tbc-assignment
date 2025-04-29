# (1)
# Complete the sequence_calculator function, which should
# Return the n-th number of the sequence S_n, defined as:
# S_n = 3*S_(n-1) - S_(n-2), with S_0 = 0 and S_1 = 1.
# Your implementation should minimize the execution time.
#
# (2)
# Find the time complexity of the proposed solution, using
# the "Big O" notation, and explain in detail why such
# complexity is obtained, for n ranging from 0 to at least
# 100000. HINT: you are dealing with very large numbers!
#
# (3)
# Plot the execution time VS n (again, for n ranging from 0
# to at least 100000).
#
# (4)
# Confirm that the empirically obtained time complexity curve
# from (3) matches the claimed time complexity from (2) (e.g.
# by using curve fitting techniques).


# import math

# def sequence_calculator(n):
#     x = (math.sqrt(5)) / 5
#     to_power1 = (3 + math.sqrt(5)) / 2
#     to_power2 = (3 - math.sqrt(5)) / 2
#     return round(x * math.pow(to_power1, n)) - (x * math.pow(to_power2, n))
#
#
# print(sequence_calculator(100000))

def sequence_calculator(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1

    s0 = 0
    s1 = 1
    for i in range(2, n + 1):
        s_next = 3 * s1 - s0
        s0, s1 = s1, s_next
    return s1


print(sequence_calculator(100000))

# Tests for easy numbers! Compared values from function with values obtained manually
# print(sequence_calculator(0)) # 0
# print(sequence_calculator(1)) # 1
# print(sequence_calculator(2)) # 3
# print(sequence_calculator(3)) # 8
# print(sequence_calculator(4)) # 21
# print(sequence_calculator(5)) # 55


### Code for graphing linear fit
# import time
#
# import matplotlib.pyplot as plt
# import numpy as np
# import pandas as pd
# from scipy.optimize import curve_fit
#
# # Measure execution time
# results = []
# for j in range(0, 100000, 1000):  # Higher values take exponentially longer, feel free to modify step size here!
#     # Data for sequence_calculator
#     start = time.time()
#     sequence_calculator(j)
#     end = time.time()
#     duration = end - start
#
#     results.append({'n': j, 'time of seq_calc': duration})
#
# # Create DataFrame
# df = pd.DataFrame(results)
# # Convert for graph
# x = np.array(df['n'])
# y = np.array(df['time of seq_calc'])
#
#
# # Function for power law
# def power_law(x, b, a):
#     return b * (x ** a)
#
#
# # Fit the power-law model
# popt, _ = curve_fit(power_law, x, y)
# b, a = popt  # Scaling factor, exponent
# x_fit = np.linspace(min(x), max(x), 100)  # Smooth curve for plotting
# y_fit = power_law(x_fit, b, a)
# print(a)  # what the exponent is - turns out to be ~1.986
#
# # For a linear fit
# # a, b = np.polyfit(x, y, 1)
# # plt.plot(x, a * x + b)
# plt.plot(x, y, color='blue')
# plt.plot(x_fit, y_fit, color='red', linestyle=':')
#
# plt.title("sequence_calculator() Execution Time with Best Line Fit")
# plt.xlabel("n")
# plt.ylabel("Execution Time (seconds)")
# plt.savefig("sequence_calc_graph_FITCURVE.png", dpi=300)
