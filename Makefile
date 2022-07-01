PLUGIN_NAME=$$(basename `git rev-parse --show-toplevel` .vim)

.PHONY: init
init:
	@mv denops/template denops/$(PLUGIN_NAME)

.PHONY: coverage
coverage: test-local
	@deno coverage cov
	@rm -rf cov

.PHONY: test-local
test-local:
	@DENOPS_PATH=$$GHQ_ROOT/github.com/vim-denops/denops.vim 
	\ DENOPS_TEST_NVIM=$$(which nvim) DENOPS_TEST_VIM=$$(which vim) TZ=UTC deno test -A --unstable

.PHONY: test-local-e2e
test-local-e2e:
	@THEMIS_VIM=$$(which vim) themis --runtimepath $$GHQ_ROOT/github.com/vim-denops/denops.vim
	@THEMIS_VIM=$$(which nvim) themis --runtimepath $$GHQ_ROOT/github.com/vim-denops/denops.vim

.PHONY: test
test:
	@deno test -A --unstable

.PHONY: test-e2e
test-e2e:
	@THEMIS_VIM=$$DENOPS_TEST_VIM themis --runtimepath $$DENOPS_PATH
	@THEMIS_VIM=$$DENOPS_TEST_NVIM themis --runtimepath $$DENOPS_PATH

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
