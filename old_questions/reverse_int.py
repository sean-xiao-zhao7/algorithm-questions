import math

input = 121

result = ''
if input == 0:
    print(0)
    exit()
elif input < 0:
    input = -input
    result = '-'

current_num = input % 10
while input != 0:
    result += str(current_num)
    input = math.floor(input / 10)
    current_num = input % 10

print(int(result))
