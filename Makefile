.PHONY: install
install:
	npm ci

.PHONY: brain-calc
brain-calc:
	node bin/brain-calc.js

.PHONY: brain-even
brain-even:
	node bin/brain-even.js

.PHONY: publish
publish:
	npm publish --dry-run

.PHONY: lint
lint:
	npx eslint .
