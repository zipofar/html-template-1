dev:
	npx webpack-dev-server

install:
	yarn install

build:
	rm -rf ./dist
	NODE_ENV=production npx webpack
	echo zipofar-project-moon_sea.surge.sh > ./dist/CNAME
