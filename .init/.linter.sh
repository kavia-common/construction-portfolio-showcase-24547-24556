#!/bin/bash
cd /home/kavia/workspace/code-generation/construction-portfolio-showcase-24547-24556/frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

