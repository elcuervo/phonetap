NODE = node

all: compile
	@$(NODE) test/*.js

compile:
	coffee -c lib/phonetap.coffee
