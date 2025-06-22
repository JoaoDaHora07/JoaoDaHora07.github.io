package main

import (
    "bufio"
    "fmt"
    "net"
    "os"
    "strings"
)

func main() {
    enderecoServidor := "localhost:8080"
    var name string

    conn, err := net.Dial("udp", enderecoServidor)
    if err != nil {
        fmt.Println("Erro ao conectar no servidor:", err)
        return
    }
    defer conn.Close()

    fmt.Printf("Digite seu nome: ")
    fmt.Scanln(&name)

    reader := bufio.NewReader(os.Stdin)

    for {
        fmt.Print("Digite a Mensagem: ")
        mensagemDigitada, _ := reader.ReadString('\n')
        mensagemDigitada = strings.TrimSpace(mensagemDigitada)

        mensagem := []byte(name + ": " + mensagemDigitada)
        _, err = conn.Write(mensagem)
        if err != nil {
            fmt.Println("Erro ao enviar:", err)
            return
        }
    }
}
