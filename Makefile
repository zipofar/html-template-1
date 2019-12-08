dev:
	npx webpack-dev-server

install:
	yarn install

build:
	rm -rf ./docs
	NODE_ENV=production npx webpack

deploy: build
	git push origin master
