---

# API em Node.js – Demonstração

Esta é uma API simples feita em **Node.js**, utilizada para testes e demonstrações.

🔗 **API online:**
[https://projeto-ci-cd-back-mvjv.onrender.com/](https://projeto-ci-cd-back-mvjv.onrender.com/)

---

## Endpoints

* `GET /` → `{ "mensagem": "API online e integrada com CI/CD!" }`
* `GET /v1/health` → `{ "status": "okay!" }`

---

# 🚀 Como rodar o projeto localmente

Instale as dependências:

```bash
npm install
```

Execute em modo desenvolvimento:

```bash
npm run dev
```

Depois, abra no navegador:

👉 **[http://localhost:3000](http://localhost:3000)**

---

# 🐳 Rodando com Docker

### Criar a imagem Docker:

```bash
docker build -t projeto-ci-cd-back .
```

### Executar o container:

```bash
docker run -p 3000:3000 -e ALLOWED_ORIGIN='*' projeto-ci-cd-back
```

---
