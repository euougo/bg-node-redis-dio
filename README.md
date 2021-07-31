# Tarefas em background utilizando Node.js e Redis

## DESCRIÇÃO

Nesse Labs você deve desenvolver e entregar um projeto de “Cadastro de usuário e envio de e-mail de confirmação de cadastro como tarefa em background utilizando Node.js” ao qual você praticará e aplicará os conceitos de processamento assíncrono de tarefas utilizando Node.js e Redis. Demonstre toda sua capacidade criativa para transformar a base do projeto apresentada nesta sessão em um desenvolvimento inovador.

---

### Ferramentas:

- Node:
    - Versão utilizada: 10.16.3
- Redis:
    - Redis no docker
        $ docker run --name redis -p 6379:6379 -d -t redis:alpine
- Yarn:
    - Instalar:
        $ npm install -g yarn
    - Habilitar emoji:
        $ yarn config set -- --emoji true

- VSCode

- Insomnia

- MailTrap:
    - Caixa de e-mail falsa para testes em desenvolvimento.
    - Site: mailtrap.io

- Sentry:
    - Monitoração de falhas em produção.
    - Site: sentry.io

---        

### Projeto:

- Comandos:

    - Iniciar projeto:
        $ yarn init -y

    - Dependencias: 
        
        Express Nodemailer Dotenv
        $ yarn add express nodemailer

        Password-Generator
        $ yarn add password-generator

        Bull
        $ yarn add bull

        Bull Board
        $ yarn add bull-board

    - Dependendias de Desenvolvimento: Nodemon Sucrase
        $ yarn add nodemon sucrase -D

- Arquivos:

    - Criados:

        - .gitignore
            node_modules/

        - nodemon.json
            - para usar o sucrase em versões anteriores a versão 12 do node.js   

        - app/server.js

        - .env

        - app/controllers/UserController.js  

        - app/lib/Mail.js

        - app/config/mail.js

        - app/config/redis.js

        - app/jobs/RegistrationMail.js 
        
        - app/jobs/index.js 

    - Editados:

        - package.json
            - "scripts"  
---


# PARTE 7