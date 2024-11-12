#!/bin/bash
# Descarga PocketBase para Linux
wget https://github.com/pocketbase/pocketbase/releases/download/v0.22.23/pocketbase_0.22.23_linux_amd64.zip
# Descomprime el archivo
unzip pocketbase_0.22.23_linux_amd64.zip
# Elimina el zip
rm pocketbase_0.22.23_linux_amd64.zip
# Da permisos de ejecución
chmod +x ./pocketbase