#Clyde "Thluffy" Sinclair
#SoftDev
#skeleton/stub :: SQLITE3 BASICS
#Dec 2020 -- The Time of the Rona

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="discobandit.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops -- you will use cursor to trigger db events

#==========================================================

# create tables
command = "CREATE TABLE courses (name TEXT, mark INTEGER, id INTEGER)"  # test SQL stmt in sqlite3 shell, save as string
c.execute(command)    # run SQL statement
command = "CREATE TABLE students (name TEXT, age INTEGER, id INTEGER PRIMARY KEY)"  # test SQL stmt in sqlite3 shell, save as string
c.execute(command)    # run SQL statement

with open('courses.csv') as f:
    courses = csv.DictReader(f)
    for row in courses:
        #print(row)
        command = "INSERT INTO courses VALUES(?, ?, ?)"
        # insert the line into course
        vals = (row['code'], row['mark'], row['id'])
        c.execute(command, vals)    # run SQL statement

#print()

with open('students.csv') as f:
    students = csv.DictReader(f)
    for row in students:
        #print(row)
        command = "INSERT INTO students VALUES(?, ?, ?)"
        # insert the line into course
        vals = (row['name'], row['age'], row['id'])
        c.execute(command, vals)    # run SQL statement

#==========================================================

db.commit() #save changes
db.close()  #close database
