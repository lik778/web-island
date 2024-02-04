# 使用 CentOS 7 作为基础镜像
FROM centos:7

# 安装 Node.js 18
RUN curl -fsSL https://rpm.nodesource.com/setup_18.x | bash - \
    && yum install -y nodejs

# 安装 pnpm
RUN npm install -g pnpm

# 设置工作目录
WORKDIR /app

# 优化 Docker 层，复制 package 文件并安装依赖
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# 复制剩余的项目文件到工作目录
COPY . .

#
