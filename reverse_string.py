print('This is the reverse string program.')
user_input = input("Enter the input string:")

result = ''
for char in user_input:
    result = char + result

print(result)
