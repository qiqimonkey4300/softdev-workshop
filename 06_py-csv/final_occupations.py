# Ubun3 - Shyne Choi, Aaron Contreras, Sadid Ethun
# SoftDev
# K06 -- StI/O: Divine your Destiny! / Python File Reading / Read csv file about accupations and percentages and randomly return occupation based on the percent given
# 2021-09-28

# SUMMARY
# We first discussed how we could read the csv file. 
# We decided to use the csv module and use csv.reader(). 
# To return a random occupation and weigh the percentages, we decided to first generate a random number between 0 and 99.8.
# We then loop through the percentages and keep subtracting until the number reaches 0 or less than 0.
# The job at that point is printed.
# DISCOVERIES
# csv.reader() actually takes care of quotations that surround jobs with commas in them
# QUESTIONS
# Are the percentages supposed to represent out of 100 or out of 99.8?

import csv
import random

def open_file():
    # Opens file and formats into dictionary as Job Class: Percentage
    
    with open('occupations.csv', newline='') as f:
         reader = csv.reader(f)
         next(reader) #skips the first line
         
         occupations = {}
         
         for row in reader: #for each line in the file
            occupations[row[0]] = float(row[1])
            
    return occupations

def get_random(di):
    # Finds a random job occupation
    
    num = random.uniform(0, 99.8) # alternatively could have used random.random()*99.8
    
    for key in di:
        num -= di[key] # subtracts the percentage from the random number
        
        if (num <= 0):
            return key
        
    return -1

def test(n):
    occupations = open_file()
    occupations_freq = {}
    
    for key in occupations: 
        occupations_freq[key]= 0
    
    for i in range(n):
        occupation = get_random(occupations)
        occupations_freq[occupation] += 1 # adds to the frequency value
    
    for key in occupations:
        occupations_freq[key] =  (occupations_freq[key]/n)*100

    return occupations_freq
        
# print(test(100000))
print(get_random(open_file()))
