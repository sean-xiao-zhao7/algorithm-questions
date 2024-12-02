print('This is the reverse string program.')
user_input = input("Enter the input string:")

result = list(user_input)
front_pointer = 0
back_pointer = len(user_input) - 1
while front_pointer < back_pointer:
    temp = result[front_pointer]
    result[front_pointer] = result[back_pointer]
    result[back_pointer] = temp
    front_pointer += 1
    back_pointer -= 1

print(''.join(result))
