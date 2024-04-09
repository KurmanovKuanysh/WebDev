def min_of_four(a, b, c, d):
    return min(a, b, c, d)

# Считываем четыре числа
a, b, c, d = map(int, input().split())

# Выводим результат
print(min_of_four(a, b, c, d))
