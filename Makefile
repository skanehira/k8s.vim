PLUGIN_NAME := $$(basename `git rev-parse --show-toplevel` .vim)
DENOPS := $${DENOPS_PATH:-$$GHQ_ROOT/github.com/vim-denops/denops.vim}
VIM := $${DENOPS_TEST_VIM:-$$(which vim)}
NVIM := $${DENOPS_TEST_NVIM:-$$(which nvim)}

.PHONY: test
test:
	@DENOPS_PATH=$(DENOPS) \
		DENOPS_TEST_NVIM=$(NVIM) \
		DENOPS_TEST_VIM=$(VIM) \
		TZ=UTC \
		deno test -A --unstable

.PHONY: test-e2e
test-e2e:
	@echo ==== test in Vim =====
	@THEMIS_VIM=$(VIM) THEMIS_ARGS="-e -s -u DEFAULTS" themis --runtimepath $(DENOPS)
	@echo ==== test in Neovim =====
	@THEMIS_VIM=$(NVIM) THEMIS_ARGS="-e -s -u NORC" themis --runtimepath $(DENOPS)

.PHONY: deps
deps:
	@deno run -A https://deno.land/x/udd@0.7.3/main.ts denops/$(PLUGIN_NAME)/deps.ts

.PHONY: gen
gen:
	@docker run --rm -v $$PWD:/local -w /local openapitools/openapi-generator-cli generate \
		--skip-operation-example \
		--additional-properties=platform=deno \
		--global-property models \
		-g typescript \
		-i denops/k8s/swagger.json \
		-o /local/denops/k8s
