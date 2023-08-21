input = 10


def pyramid(max):
    """
    Print a pyramid of #s and white spaces, such that the #s are centered and padding by
    same number of whitespaces on either side. Increment that amount of #s for each row.

    Parameters:
    max (int): the max number of rows in the output.
    """
    _helper(2 * max - 1)


def _helper(max, current=1):
    """
    Print each odd row.
    """
    if current % 2 != 0:
        num_spaces = int((max - current)/2)
        print(">" + num_spaces * " " + current * "#" + num_spaces * " " + "<")
    if max == current:
        exit()
    _helper(max, current + 1)


pyramid(10)
