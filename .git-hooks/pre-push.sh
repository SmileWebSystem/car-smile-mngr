#!/bin/bash
# @rationale: Ejecuta pre-validaciones, evita subir código basura.
# @link: https://hackernoon.com/how-to-use-git-hooks-in-your-development-workflow-a94e66a0f3eb
export PATH=/usr/local/bin:$PATH
npm run lint
