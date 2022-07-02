let s:suite = themis#suite('service')
let s:assert = themis#helper('assert')
let s:expect = themis#helper('expect')

" wait for loading plugin
let s:result = denops#plugin#wait('k8s', {'interval': 1})
if s:result !=# 0
  call s:assert.fail('k8s is not ready, result: ' .. s:result)
endif

" make resource for test
call k8s#util#cli#kubectl('apply', '-f', 'test/manifests/service.yaml')
call k8s#util#cli#kubectl('wait', 'pod/servife-pod', '--for', 'condition=Ready')

function s:openbuffer()
  e k8s://services/list?fields=metadata.name=sample-service
  normal! j
endfunction

function s:suite.list()
  call s:openbuffer()
  let contents = getline(1, '$')
  call s:expect(len(contents)).to_be_greater_than(1)
  bw
endfunction

function s:suite.pods()
  call s:openbuffer()
  call k8s#do_action('services:pods')
  let contents = getline(1, '$')
  call s:expect(len(contents)).to_be_greater_than(1)
  call s:assert.equals(&ft, 'k8s-pods')
  bw
endfunction

function s:suite.describe()
  call s:openbuffer()
  call k8s#do_action('services:describe')
  let contents = getline(1, '$')
  call s:assert.not_equals(len(getline(1, '$')), 0)
  call s:assert.equals(&ft, 'k8s-services-describe')
  bw
endfunction

function! s:suite.delete()
  call s:openbuffer()
  call k8s#do_action('services:delete')
  call k8s#util#cli#kubectl('wait', 'services/sample-service', '--for', 'delete')
  let result = k8s#util#cli#kubectl('get', 'services', '--field-selector=metadata.name=sample-service')
  call s:assert.equals(result, 'No resources found in default namespace.')
  bw!
endfunction
