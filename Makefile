dev:
	npx webpack-dev-server

install:
	yarn install

build:
	rm -rf ./dist
	NODE_ENV=production npx webpack
	echo zipofar-html-1.surge.sh > ./dist/CNAME
