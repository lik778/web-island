# 设置镜像
FROM node:18.19-slim

# 设置工作目录
WORKDIR /app

# 设置 npm 和 pnpm 使用阿里云的镜像源
RUN npm config set registry https://registry.npmmirror.com && \
    npm install -g pnpm && \
    pnpm config set registry https://registry.npmmirror.com

# 复制 package.json 和 pnpm-lock.yaml（如果有）
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制所有文件到工作目录
COPY . .

# 构建应用
RUN npx prisma generate
RUN npm run build

CMD ["pnpm", "start"]

EXPOSE 8080
