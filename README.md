
API em Node.js de demonstração de CI/CD.

## Endpoints
- `GET /` → `{ "mensagem": "API online e integrada com CI/CD!" }`
- `GET /health` → `{ "status": "ok!"}`

---

# 🚀 Guia de Execução e Deploy

## 🖥️ Rodando o projeto localmente

Para iniciar o ambiente de desenvolvimento:

```bash
npm install
npm run dev
```

Depois, acesse em seu navegador:

👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🐳 Criar imagem Docker (opcional)

Caso queira rodar via Docker:

```bash
docker build -t projeto-ci-cd-back .
docker run -p 3000:3000 -e ALLOWED_ORIGIN='*' projeto-ci-cd-back
```

---

## 📦 Fluxo de Deploy (Render + GitHub Actions)

### 1️⃣ Configure os *Secrets* no GitHub

Acesse: **Settings → Secrets → Actions**
Crie:

* `RENDER_API_KEY`
* `RENDER_SERVICE_ID`

---

### 2️⃣ Gere uma nova tag semântica

```bash
git tag v1.0.0
git push origin v1.0.0
```

---

### 3️⃣ Deploy automático

Ao enviar a tag, o workflow **release.yml** será acionado e fará o deploy no Render automaticamente. 🎉

---
