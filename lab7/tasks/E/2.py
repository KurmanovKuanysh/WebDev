def power(a, n):
    return a ** n

# Считываем два числа
a, n = map(float, input().split())

# Выводим результат
print(power(a, int(n)))
