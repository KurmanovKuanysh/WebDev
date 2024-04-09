v = int(input("Введите скорость Васи в км/ч: "))
t = int(input("Введите время в часах: "))

distance = v * t
checkpoint = distance % 109

print("Вася остановится на отметке:", checkpoint)
