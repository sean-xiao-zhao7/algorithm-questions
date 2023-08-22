input = 3


def make_spiral_matrix(width):
    """
    Print a width * width square matrix with numbers from 1 to max num that fits.

    Parameters:
    width (int): the width/height of the matrix
    """

    matrix = [[0 for index in range(width)] for index in range(width)]

    _matrix_helper(matrix, 0, 0, width, width)

    for row in matrix:
        print(row)


def _matrix_helper(matrix, top, left, bottom, right, current_num=1):
    """
    Recursively fill the empty matrix of zeros with correct numbers.
    """
    if top > bottom or left > right:
        exit()

    for x in range(left, right):
        matrix[top][x] = current_num
        current_num += 1

    for y in range(top + 1, bottom):
        matrix[right][y] = current_num
        current_num += 1

    for x in range(right - 1, left, -1):
        matrix[bottom][x] = current_num
        current_num += 1

    for y in range(bottom + 1, top + 1, -1):
        matrix[left][y] = current_num
        current_num += 1

    _matrix_helper(matrix, top + 1, left + 1,
                   bottom + 1, right + 1, current_num)


if __name__ == '__main__':
    make_spiral_matrix(input)
