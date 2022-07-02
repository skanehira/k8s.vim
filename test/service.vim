let s:suite = themis#suite('service')
let s:assert = themis#helper('assert')
let s:expect = themis#helper('expect')

call WaitDenopsLoading()

" make resource for test
call k8s#util#cli#kubectl('apply', '-f', 'test/manifests/service.yaml')
call k8s#util#cli#kubectl('wait', 'pod/servife-pod', '--for', 'condition=Ready')

function s:suite.before_each()
  e k8s://services/list?fields=metadata.name=sample-service
  normal! j
endfunction

function s:suite.after_each()
  bw!
endfunction

function s:suite.list()
  call ListBufferNotEmpty(bufnr())
  call s:assert.equals(&ft, 'k8s-services')
endfunction

function s:suite.pods()
  call k8s#do_action('services:pods')
  call BufferNotEmpty(bufnr())
  call s:assert.equals(&ft, 'k8s-pods')
endfunction

function s:suite.describe()
  call k8s#do_action('services:describe')
  call BufferNotEmpty(bufnr())
  call s:assert.equals(&ft, 'k8s-services-describe')
endfunction

function s:suite.yaml()
  call k8s#do_action('services:yaml')
  call BufferNotEmpty(bufnr())
  call s:assert.equals(&ft, 'yaml')
endfunction

function! s:suite.delete()
  call k8s#do_action('services:delete')
  call k8s#util#cli#kubectl('wait', 'services/sample-service', '--for', 'delete')
  let result = k8s#util#cli#kubectl('get', 'services', '--field-selector=metadata.name=sample-service')
  call s:assert.equals(result, 'No resources found in default namespace.')
endfunction
