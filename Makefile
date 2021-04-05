.PHONY: install
install:
	npm ci

.PHONY: brain-games
brain-games:
	node bin/brain-games.js

.PHONY: brain-even
brain-even:
	node bin/brain-even.js

.PHONY: publish
publish:
	npm publish --dry-run

.PHONY: lint
lint:
	npx eslint .
