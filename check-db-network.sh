#!/bin/sh
# check-db-network.sh

set -e

host="$1"
port="$2"
shift 2
cmd="$@"

echo "Checking network connectivity to $host:$port..."

# 尝试连接到数据库端口
if nc -z "$host" "$port"; then
    echo "Successfully connected to $host:$port."
else
    echo "Failed to connect to $host:$port. Ensure that the database service is reachable."
    exit 1
fi

# 如果连接成功，执行传入的命令
exec $cmd
