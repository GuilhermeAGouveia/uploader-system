# GETTING STARTED

### Clone github project
```md
git clone https://github.com/GuilhermeAGouveia/uploader-system.git
```


### Run backend

1. A partir da pasta raiz do repositório git, acesse o diretório backend:
```md
cd backend
```

2. Instale todas as dependencias node:
```md
npm install -y
```

3. Instale o banco de dados NO-SQL Mongodb, [tutorial](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-debian/)
4. Não se esqueça de executar o daemon mongod com `sudo service mongod start` e verificar seu status com `sudo service mongod status`
5. Execute o backend com o comando:
```md
npm run dev
```


### Run frontend

1. A partir da pasta raiz do repositório git, acesse o diretório backend:
```md
cd frontend
```

2. Instale todas as dependencias node:
```md
npm install -y
```
3. (Opcional) Para testar a aplicação em outros dispositivos na rede altere o campo baseURI do JSON no arquivo [api.js](src/services/api.json) para o IP de seu servidor na rede

4. Execute o frontend com o comando: 
```md
npm start
```

