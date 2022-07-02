let s:suite = themis#suite('pod')
let s:assert = themis#helper('assert')
let s:expect = themis#helper('expect')

" wait for loading plugin
let s:result = denops#plugin#wait('k8s', {'interval': 1})
if s:result !=# 0
  call s:assert.fail('k8s is not ready, result: ' .. s:result)
endif

" make resource for test
call k8s#util#cli#kubectl('apply', '-f', 'test/manifests/pod.yaml')
call k8s#util#cli#kubectl('wait', 'pod/sample-pod', '--for', 'condition=Ready')

function s:suite.list()
  e k8s://pods/list?labels=app=sample-app
  let contents = getline(1, '$')
  call s:expect(len(contents)).to_be_greater_than(1)
  bw
endfunction

function! s:suite.describe()
  e k8s://pods/list?labels=app=sample-app
  normal! j
  call k8s#do_action('pods:describe')
  call s:assert.not_equals(len(getline(1, '$')), 0)
  bw!
endfunction

function! s:suite.yaml()
  e k8s://pods/list?labels=app=sample-app
  normal! j
  call k8s#do_action('pods:yaml')
  call s:assert.not_equals(len(getline(1, '$')), 0)
  bw!
endfunction

function! s:suite.events()
  e k8s://pods/list?labels=app=sample-app
  normal! j
  call k8s#do_action('pods:events')
  call s:assert.not_equals(len(getline(1, '$')), 0)
  bw!
endfunction

function! s:suite.containers()
  e k8s://pods/list?labels=app=sample-app
  normal! j
  call k8s#do_action('pods:containers')
  call s:assert.not_equals(len(getline(1, '$')), 0)
  call s:assert.equals(&ft, 'k8s-containers')
  bw!
endfunction

function! s:suite.containers_shell()
  e k8s://pods/list?labels=app=sample-app
  normal! j
  call k8s#do_action('pods:containers')
  call s:assert.not_equals(len(getline(1, '$')), 0)
  call s:assert.equals(&ft, 'k8s-containers')
  call k8s#do_action('pods:containers:shell')
  call s:assert.equals(&buftype, 'terminal')
  bw!
endfunction

function! s:suite.logs()
  e k8s://pods/list?labels=app=sample-app
  normal! j
  call k8s#do_action('pods:logs')
  call s:assert.not_equals(len(getline(1, '$')), 0)
  call s:assert.equals(&buftype, 'terminal')
  bw!
endfunction

function! s:suite.shell()
  e k8s://pods/list?labels=app=sample-app
  normal! j
  call k8s#do_action('pods:shell')
  call s:assert.equals(&buftype, 'terminal')
  bw!
endfunction

function! s:suite.delete()
  e k8s://pods/list?labels=app=sample-app
  normal! j
  call k8s#do_action('pods:delete')
  call k8s#util#cli#kubectl('wait', 'pod/sample-pod', '--for', 'delete')
  let result = k8s#util#cli#kubectl('get', 'pod', '--field-selector=metadata.name=sample-pod')
  call s:assert.equals(result, 'No resources found in default namespace.')
  bw!
endfunction
