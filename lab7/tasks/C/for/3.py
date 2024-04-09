import math

a = int(input("Number: "))
b = int(input("Number: "))

for i in range(a, b):
    if math.sqrt(i).is_integer():
        print(i, end=" ")
