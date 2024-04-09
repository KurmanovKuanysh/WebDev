# Read the number of students
n = int(input())

# Initialize an empty list to store the student names and grades
students = []

# Read the names and grades of each student and store them in the list
for _ in range(n):
    name = input()
    score = float(input())
    students.append([name, score])

# Sort the list of students based on their grades
students.sort(key=lambda x: x[1])

# Find the second lowest grade
second_lowest_grade = None
for i in range(1, n):
    if students[i][1] > students[0][1]:
        second_lowest_grade = students[i][1]
        break

# Print the names of students with the second lowest grade
for name, grade in sorted(students):
    if grade == second_lowest_grade:
        print(name)
