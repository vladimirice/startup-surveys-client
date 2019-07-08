check-project-not-committed-changes:
	/bin/bash ./ci-scripts/check-project-not-committed-changes.sh

check-project-npm-outdated:
	/bin/bash ./ci-scripts/check-project-npm-outdated.sh

check-project-by-codeclimate:
	/bin/bash ./ci-scripts/check-project-code-climate.sh

check-project-before-commit:
	npm run checks
	/bin/bash ./ci-scripts/check-project-code-climate.sh
