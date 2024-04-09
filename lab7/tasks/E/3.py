def xor(x, y):
    return int((x or y) and not (x and y))

# Считываем два числа
x, y = map(int, input().split())

# Выводим результат
print(xor(x, y))
