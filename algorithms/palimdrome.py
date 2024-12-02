user_input = 'pennnep'

result = list(user_input)
front_pointer = 0
back_pointer = len(user_input) - 1
while front_pointer < back_pointer:
    if result[front_pointer] != result[back_pointer]:
        print(False)
        exit()
    front_pointer += 1
    back_pointer -= 1
print(True)
