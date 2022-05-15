# Feedback-Widget-back-end
Projeto backend da aplicação

# Configurando Prisma
## Pacotes para baixar: yarn add prisma -D, yarn add @prisma/client   
## Inicializando Prisma: npx prisma init
## Vai ser criado uma pasta Prisma contendo um arquivo chamado "schema.prisma" para criar as tabelas e o banco de dados
## Comando para criar as tabelas em modo de desenvolvimento: npx prisma migrate dev ou deploy em produção
## Comando para visualizar as tabelas criadas: npx prisma studio

# SOLID
## 1 - Single Responsibility Principle
## 2 - Open/Closed Principle
## 3 - Liskov Substitution Principle
## 4 - Interface Segregation Principle
## 5 - Dependency Inversion Principle

----------------------------------------------------------------

## 1. Cada classe/função tem uma responsabilidade única;
## 2. AS classes da aplicação devem ser abertas para extensão mas fechadas para modificação;
## 3. Nós devemos poder substituir uma classe pai por uma herença dela e tudo continuar funcionando;
## 4. Segregar/separar as interfaces ao inves de criar tudo dentro de uma grande interface;
## 5. Mostrado exemplo em vídeo na hora: 01:06:50 até 01:31:20
# SOLID

# Configurando Jest
## Pacotes para baixar: yarn add -D jest @types/jest @swc/core @swc/jest ts-node
## Inicializando Jest: npx jest --init