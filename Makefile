NODE = node

all:
	coffee -c lib/phonetap.coffee
	@$(NODE) test/*.js
