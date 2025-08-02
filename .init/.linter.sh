#!/bin/bash
cd /home/kavia/workspace/code-generation/videostream-platform-9774-9783/react_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

