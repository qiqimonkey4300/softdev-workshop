import random

pd1 = []
pd2 = []

def addToList():
    period = int(input("What period is the student in? "))
    name = input("What is their name? ")
    
    while period != 1 and period != 2:
        print("That is not a softdev period. Please input the information again.")
        period = int(input("What period is the student in? "))

    if period == 1:
        pd1.append(name)
    else:
        pd2.append(name)

    print("The student's name is " + name + " and their period is " + str(period) + ".")

def printList():
    all = []
    all.extend(pd1)
    all.extend(pd2)

    print (all)

# addToList()
# printList()
