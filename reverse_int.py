import math

input = 54321

result = ''
current_num = input % 10
while current_num != 0:
    result += str(current_num)
    input = math.floor(input / 10)
    current_num = input % 10
print(int(result))
