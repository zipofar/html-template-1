dev:
	npx webpack-dev-server

install:
	yarn install

build:
	rm -rf ./dist
	NODE_ENV=production npx webpack
	echo divergent-throat.surge.sh > ./dist/CNAME
