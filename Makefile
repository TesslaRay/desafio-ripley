VERSION := $$(cat package.json | grep version | sed 's/"/ /g' | awk {'print $$3'})

ENV := env.json

PROJECT_ID := $$(cat $(ENV) | grep PROJECT_ID | sed 's/"/ /g' | awk {'print $$3'})

SVC=test-ripley
PORT=5000

version v:
	@echo $(VERSION)

init i:
	@echo "[Dependencies] Installing dependencies"
	@npm install

run r:
	@echo "[Running] Running service with $(ENV)"
	@PORT=$(PORT) PROJECT_ID="$(PROJECT_ID)" node src/start.js

deploy d:
	@echo "[PROD][App Engine Deployment] Deploying API in PROD"
	@gcloud app deploy app-prod.yaml

.PHONY: version v init i deploy d run r