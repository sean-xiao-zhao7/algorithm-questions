
def decode(message_file):
    """
    Read from file encoded pairs of integer and string.
    Return a string that contains the complete decoded string.
    """
    file = open(message_file, 'r')
    
    # parse all pairs
    line = file.readline()
    words = {}
    max = 1
    while line:
        if len(line) > 1:
            parts = line.strip().split(' ')
            words[int(parts[0])] = parts[1].strip('\n')            
            max += 1
        line = file.readline()
    file.close()

    # calculate all code words according to the arithmetic series (pyramid)
    result = ''
    level = 1
    term = 1
    while term <= max:
        term = int((level * (level + 1)) / 2)
        if term in words:
             result += f'{words[term]} '
        level += 1       
    return result
    
if __name__ == '__main__':
    result = decode('./inputs/decode_pyramid/0.txt')
    print(result)