
def decode(message_file):
    file = open(message_file, 'r')
    line = file.readline()
    while line:
        pass
    file.close()
    
if __name__ == '__main__':
    result = decode('./inputs/decode_pyramid/0.txt')
    print(result)