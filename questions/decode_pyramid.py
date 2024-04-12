
def decode(message_file):
    file = open(message_file, 'r')
    
    line = file.readline()
    words = {}
    while line:
        parts = line.split(' ')        
        words[parts[0]] = parts[1].strip('\n')
        line = file.readline()
    print(words)
    file.close()
    
if __name__ == '__main__':
    result = decode('./inputs/decode_pyramid/0.txt')
    print(result)