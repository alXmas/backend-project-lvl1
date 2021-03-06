.PHONY: install
install:
	npm ci

.PHONY: brain-calc
brain-calc:
	node bin/brain-calc.js

.PHONY: brain-even
brain-even:
	node bin/brain-even.js

.PHONY: brain-gcd
brain-gcd:
	node bin/brain-gcd.js

.PHONY: brain-prime
brain-prime:
	node bin/brain-prime.js

.PHONY: brain-progression
brain-progression:
	node bin/brain-progression.js

.PHONY: publish
publish:
	npm publish --dry-run

.PHONY: lint
lint:
	npx eslint .
