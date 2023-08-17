input = 100

for current in range(input + 1):
    if current % 3 == 0:
        if current % 5 == 0:
            print(f"{current} FizzBuzz")
            continue
        print(f"{current} Fizz")
    elif current % 5 == 0:
        print(f"{current} Fuzz")
