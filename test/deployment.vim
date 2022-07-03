let s:suite = themis#suite('deployment')
let s:assert = themis#helper('assert')
let s:expect = themis#helper('expect')

call WaitDenopsLoading()

" make resource for test
call k8s#kubectl('apply', '-f', 'test/manifests/deployment.yaml')
call k8s#kubectl('wait', 'deployments/sample-deployment', '--for', 'condition=Available')

function s:suite.before_each()
  e k8s://deployments/list?fields=metadata.name=sample-deployment
  normal! j
endfunction

function s:suite.after_each()
  bw!
endfunction

function s:suite.list()
  call ListBufferNotEmpty(bufnr())
  call s:assert.equals(&ft, 'k8s-deployments')
endfunction

function s:suite.pods()
  call k8s#do_action('deployments:pods')
  call BufferNotEmpty(bufnr())
  call s:assert.equals(&ft, 'k8s-pods')
endfunction

function s:suite.describe()
  call k8s#do_action('deployments:describe')
  call BufferNotEmpty(bufnr())
  call s:assert.equals(&ft, 'k8s-deployments-describe')
endfunction

function s:suite.yaml()
  call k8s#do_action('deployments:yaml')
  call BufferNotEmpty(bufnr())
  call s:assert.equals(&ft, 'yaml')
endfunction

function s:suite.edit()
  call k8s#do_action('deployments:edit')
  call BufferNotEmpty(bufnr())
  call s:expect(bufnr()).job_status_to_be('running')
endfunction

function! s:suite.delete()
  call k8s#do_action('deployments:delete')
  call k8s#kubectl('wait', 'deployments/sample-delpoyment', '--for', 'delete')
  let result = k8s#kubectl('get', 'deployments', '--field-selector=metadata.name=sample-deployment')
  call s:assert.equals(result, 'No resources found in default namespace.')
endfunction
