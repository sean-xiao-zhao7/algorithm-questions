input1 = "Whoa! Hi!"
input2 = "Hi! Whoa!"

if input1 == input2:
    print(f'"{input1}" is an anagram of "{input2}"')

input1_len = len(input1)
input2_len = len(input2)
max_len = input1_len if input1_len > input2_len else input2_len

ord_total = 0

for index in range(0, max_len, 1):
    if index < input1_len:
        char1 = input1[index]
        if char1.isalnum():
            ord_total += ord(char1.lower())
    if index < input2_len:
        char2 = input2[index]
        if char2.isalnum():
            ord_total -= ord(char2.lower())

if ord_total == 0:
    print(f'"{input1}"\nis an anagram of\n"{input2}"')
else:
    print(f'"{input1}"\nis not an anagram of\n"{input2}"')
