# 设置镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json（如果有）
COPY package*.json ./

# 安装依赖

RUN pnpm install

# 复制所有文件到工作目录
COPY . .

# 构建应用
RUN npx run generate

RUN pnpm run build

CMD ["pnpm", "start"]

EXPOSE 8080