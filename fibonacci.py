import time

input = 15

seen = {}


def fib_mem(n):
    """
    Generate the nth fibonacci num.

    Paramter:
    n (int): the nth fibonacci num desired.
    """
    if n == 0:
        return 0
    elif n == 1:
        return 1
    elif n in seen:
        return seen[n]
    else:
        seen[n - 1] = fib_mem(n - 1)
        seen[n - 2] = fib_mem(n - 2)
        return seen[n - 1] + seen[n - 2]


def fib(n):
    """
    Generate the nth fibonacci num.

    Paramter:
    n (int): the nth fibonacci num desired.
    """
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n - 1) + fib(n - 2)


start_time = time.time()
print(fib(input))
end_time = time.time()
print("Elapsed time:", end_time - start_time, "seconds")

start_time = time.time()
print(fib_mem(input))
end_time = time.time()
print("Elapsed time:", end_time - start_time, "seconds")
