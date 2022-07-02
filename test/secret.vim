let s:suite = themis#suite('secret')
let s:assert = themis#helper('assert')
let s:expect = themis#helper('expect')

" wait for loading plugin
let s:result = denops#plugin#wait('k8s', {'interval': 1})
if s:result !=# 0
  call s:assert.fail('k8s is not ready, result: ' .. s:result)
endif

" make resource for test
call k8s#util#cli#kubectl('apply', '-f', 'test/manifests/secret.yaml')

function s:openbuffer()
  e k8s://secrets/list?fields=metadata.name=sample-secret
  normal! j
endfunction

function s:suite.list()
  call s:openbuffer()
  let contents = getline(1, '$')
  call s:expect(len(contents)).to_be_greater_than(1)
  bw
endfunction

function s:suite.describe()
  call s:openbuffer()
  call k8s#do_action('secrets:describe')
  let contents = getline(1, '$')
  call s:assert.not_equals(len(getline(1, '$')), 0)
  call s:assert.equals(&ft, 'k8s-secrets-describe')
  bw
endfunction

function s:suite.yaml()
  call s:openbuffer()
  call k8s#do_action('secrets:yaml')
  let contents = getline(1, '$')
  call s:assert.not_equals(len(getline(1, '$')), 0)
  call s:assert.equals(&ft, 'yaml')
  bw
endfunction

function s:suite.edit()
  call s:openbuffer()
  call k8s#do_action('secrets:edit')
  let contents = getline(1, '$')
  call s:assert.not_equals(len(getline(1, '$')), 0)
  call s:assert.equals(&buftype, 'terminal')
  bw!
endfunction

function! s:suite.delete()
  call s:openbuffer()
  call k8s#do_action('secrets:delete')
  let result = k8s#util#cli#kubectl('get', 'secrets', '--field-selector=metadata.name=sample-secrets')
  call s:assert.equals(result, 'No resources found in default namespace.')
  bw!
endfunction
