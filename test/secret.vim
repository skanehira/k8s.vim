let s:suite = themis#suite('secret')
let s:assert = themis#helper('assert')
let s:expect = themis#helper('expect')

call WaitDenopsLoading()

" make resource for test
call k8s#kubectl('apply', '-f', 'test/manifests/secret.yaml')

function s:suite.before_each()
  e k8s://secrets/list?fields=metadata.name=sample-secret
  normal! j
endfunction

function s:suite.after_each()
  bw!
endfunction

function s:suite.list()
  call ListBufferNotEmpty(bufnr())
  call s:assert.equals(&ft, 'k8s-secrets')
endfunction

function s:suite.describe()
  call k8s#do_action('secrets:describe')
  call BufferNotEmpty(bufnr())
  call s:assert.equals(&ft, 'k8s-secrets-describe')
endfunction

function s:suite.yaml()
  call k8s#do_action('secrets:yaml')
  call BufferNotEmpty(bufnr())
  call s:assert.equals(&ft, 'yaml')
endfunction

function s:suite.edit()
  call k8s#do_action('secrets:edit')
  call BufferNotEmpty(bufnr())
  call s:expect(bufnr()).job_status_to_be('running')
endfunction

function! s:suite.delete()
  call k8s#do_action('secrets:delete')
  let result = k8s#kubectl('get', 'secrets', '--field-selector=metadata.name=sample-secrets')
  call s:assert.equals(result, 'No resources found in default namespace.')
endfunction
