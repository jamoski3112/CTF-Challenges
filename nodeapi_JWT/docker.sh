#!/bin/bash
docker build -t nodeapi:vuln .
docker run --name nodeapi -p 80:8080 -d 9e66958ab8b8
