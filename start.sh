#!/bin/bash
concurrently "cd server && npm start" "cd client && npm run serve"
