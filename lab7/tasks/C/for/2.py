a = int(input("Number: "))
b = int(input("Number: "))
c = int(input("Number: "))
d = int(input("Number: "))

for i in range (a, b, 1):
    if i%d == c:
        print(i, end=" ")