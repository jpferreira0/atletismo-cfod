# Academia de Atletismo CFOD Website
Repositório do Website da Academia de Atletismo do C.F. Oliveira do Douro.

## Descrição

Esta é uma aplicação web que tem como intuito dar a conhecer ao mundo a Academia de Atletismo do C.F. Oliveira do Douro (CFOD) e também auxiliar os próprios atletas a poderem mais rapidamente aceder aos resultados das provas anteriores, calendário competitivo da época e também a outras informações.

## Instalação

Segue os passos abaixo para conseguires executar este projeto localmente na tua máquina.

### Pré-requisitos

Certifica-te de que tens as seguintes ferramentas instaladas:

1. **Git**  
   Para verificar se o Git está instalado, abre o terminal e executa o seguinte comando:  
   `git --version`  

   - **Mensagem de sucesso (exemplo):**  
     `git version 2.34.1`  

     Se vês algo semelhante, o Git está instalado.  

   - **Mensagem de falha (exemplo):**  
     `git: command not found`  

     Caso recebas uma mensagem semelhante, faz o download e instala o Git a partir de [Git Downloads](https://git-scm.com/downloads).

2. **Docker**  
   Verifica se o Docker está instalado com o comando:  
   `docker --version`  

   - **Mensagem de sucesso (exemplo):**  
     `Docker version 20.10.7, build f0df350`  

   - **Mensagem de falha (exemplo):**  
     `docker: command not found`  

     Se não estiver instalado, faz o download em [Instalação do Docker](https://docs.docker.com/get-docker/).

3. **Docker Compose**  
   Verifica se o Docker Compose está instalado com o comando:  
   `docker-compose --version`  

   - **Mensagem de sucesso (exemplo):**  
     `docker-compose version 1.29.2, build 5becea4c`  

   - **Mensagem de falha (exemplo):**  
     `docker-compose: command not found`  

     Se não estiver instalado, consulta as instruções em [Instalação do Docker Compose](https://docs.docker.com/compose/install/).


### Passos de Instalação

1. **Clonar o repositório**  
   Abre o terminal e clona o repositório para a tua máquina local:
   ```bash
   git clone https://github.com/jpferreira0/atletismo-cfod.git
   cd atletismo-cfod
   ```

2. **Construir e iniciar os containers**
    Utiliza o Docker Compose para criar e iniciar os containers:
    `docker-compose up --build`

3. **Aceder à aplicação**
    Quando o processo for concluído, a aplicação estará disponível no browser em:
    `http://localhost:3000`

4. **Parar os containers**
    Para parar os containers em execução, utiliza:
    `docker-compose down`

   
## Autor

Desenvolvido por João Ferreira no âmbito da Unidade Curricular de Tecnologias Web do Mestrado em Multimédia na FEUP.

## License

MIT License

Copyright (c) 2024 João Ferreira

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.