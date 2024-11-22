input = 10

# output = '#'
# for index in range(1, input + 1):
#     print(">" + output + ' ' * (input - index) + "<")
#     output += '#'


def step(max, current=1):
    """
    Print a triangle of #s, padding by white space.

    Parameters:
    current (int): current number of #s to be printed.
    max (int): the max number of #s in the whole program.
    """
    print(">" + "#" * current + " " * (max - current) + "<")
    if (current == max):
        exit()
    else:
        step(max, current + 1)


step(10)
