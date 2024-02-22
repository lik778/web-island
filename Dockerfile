# 设置镜像
FROM node:18

# 设置工作目录
WORKDIR /app

# 使用 cnpm 安装依赖
RUN npm install -g cnpm --registry=https://registry.npmmirror.com

# 复制 package.json 和 package-lock.json（如果有）
COPY package*.json ./

# 安装依赖
RUN cnpm install

# 复制所有文件到工作目录
COPY . .

# 构建应用（如果需要）
RUN npx prisma generate
RUN cnpm run build

# 暴露端口
EXPOSE 8080

# 运行一个无限循环，保持容器运行状态
CMD ["tail", "-f", "/dev/null"]
