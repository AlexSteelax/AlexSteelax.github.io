#!/usr/bin/env bash
# Запускает watcher (пересборка index.html) и статик-сервер http.server.
# Открой http://localhost:8000
set -e
cd "$(dirname "$0")"

node watch.js &
WATCH_PID=$!

cleanup() {
  kill "$WATCH_PID" 2>/dev/null || true
}
trap cleanup EXIT INT TERM

echo "[dev] python3 -m http.server 8000"
exec python3 -m http.server 8000