input = 10

output = '#'
for index in range(1, input + 1):
    print(">" + output + ' ' * (input - index) + "<")
    output += '#'
