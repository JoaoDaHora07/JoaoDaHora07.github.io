package main

import (
	"fmt"
	"net"
)

func main() {
	
	port := ":8080"


	conn, err := net.ListenPacket("udp", port)
	if err != nil {
		fmt.Println("Erro ao iniciar servidor:", err)
		return
	}
	defer conn.Close()

	fmt.Println("Servidor UDP escutando em", port)

	buffer := make([]byte, 1024)

	for {
		
		n, addr, err := conn.ReadFrom(buffer)
		if err != nil {
			fmt.Println("Erro ao ler:", err)
			continue
		}

		fmt.Println("Recebido de "+addr.String()+": "+string(buffer[:n]))

		
		
	}
}
