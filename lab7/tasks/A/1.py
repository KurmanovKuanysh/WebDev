import math
def find_hypotenuse(a, b):
    return math.sqrt(a**2 + b**2)

a = float(input("Введите длину первого катета: "))
b = float(input("Введите длину второго катета: "))

hypotenuse = find_hypotenuse(a, b)
print("Длина гипотенузы:", hypotenuse)