# ---------- builder ----------
FROM node:20-alpine AS builder
WORKDIR /app

# Instala dependências só com package*.json para cache melhor
COPY package*.json ./
RUN npm ci

# Copia código e compila
COPY . .
RUN npm run build && npm prune --production

# ---------- runner ----------
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=staging \
    PORT=9832 \
    DB_HOST=sqlserver \
    DB_PORT=1433 \
    DB_USERNAME=sa \
    DB_PASSWORD="N3stJS@2025!" \
    DB_DATABASE=prod_as \
    DB_SYNCHRONIZE=false \
    DB_RUN_MIGRATIONS=false \
    DB_DROP_SCHEMA=false \
    DB_LOGGING=false \
    DB_POOL_MAX=10 \
    DB_POOL_MIN=2 \
    DB_POOL_ACQUIRE=30000 \
    DB_POOL_IDLE=10000 \
    FRONTEND_URL=https://antoniosergio.sites.microlopes.pt \
    JWT_SECRET="stg_JWT$k_IbeqX08%@DFXy7f^XS&kUy" \
    JWT_EXPIRATION=3600

# Cria user não-root
RUN addgroup -S nodejs && adduser -S nodeuser -G nodejs

# Copia artefactos de produção do builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Cria diretório uploads e garante permissões
RUN mkdir -p /app/uploads && \
    chown -R nodeuser:nodejs /app && \
    chmod -R 755 /app/uploads

# Expõe a porta
EXPOSE 9832
USER nodeuser

CMD ["node", "dist/src/main.js"]
