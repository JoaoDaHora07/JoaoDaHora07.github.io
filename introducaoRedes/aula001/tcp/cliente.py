import socket

def start_server(host:str, port:int):
    client_socket = socket.socket(socket.AF_INET,socket.SOCK_STREAM)

    message = input('Type your message: ')
    client_socket.connect((host, port))
    client_socket.sendall(message.encode('uft-8'))

    client_socket.close()


if __name__ == '__main__':
    HOST = 'localhost'
    PORT = 8000

    start_server(HOST,PORT)