let s:suite = themis#suite('pod')
let s:assert = themis#helper('assert')
let s:expect = themis#helper('expect')

call WaitDenopsLoading()

function s:suite.before_each()
" make resource for test
  call k8s#kubectl('apply', '-f', 'test/manifests/pod.yaml')
  call k8s#kubectl('wait', 'pod/sample-pod', '--for', 'condition=Ready')

  e! k8s://pods/list?labels=app=sample-app
  normal! j
endfunction

function s:suite.list()
  call ListBufferNotEmpty(bufnr())
  call s:assert.equals(&ft, 'k8s-pods')
endfunction

function! s:suite.describe()
  call k8s#do_action('pods:describe')
  call BufferNotEmpty(bufnr())
endfunction

function! s:suite.yaml()
  call k8s#do_action('pods:yaml')
  call BufferNotEmpty(bufnr())
  call s:assert.equals(&ft, 'k8s-pods-yaml')
endfunction

function! s:suite.events()
  call k8s#do_action('pods:events')
  call BufferNotEmpty(bufnr())
  call s:assert.equals(&ft, 'k8s-events')
endfunction

function! s:suite.containers()
  call k8s#do_action('pods:containers')
  call BufferNotEmpty(bufnr())
  call s:assert.equals(&ft, 'k8s-containers')
endfunction

function! s:suite.containers_shell()
  call k8s#do_action('pods:containers')
  normal! j
  call k8s#do_action('pods:containers:shell')
  call s:expect(bufnr()).job_status_to_be('running')
endfunction

function! s:suite.logs()
  call k8s#do_action('pods:logs')
  call s:expect(bufnr()).job_status_to_be('running')
endfunction

function! s:suite.shell()
  call k8s#do_action('pods:shell')
  call s:expect(bufnr()).job_status_to_be('running')
endfunction

function s:suite.edit()
  call k8s#do_action('pods:edit')
  call BufferNotEmpty(bufnr())
  call s:expect(bufnr()).job_status_to_be('running')
endfunction

function! s:suite.delete()
  call k8s#do_action('pods:delete')
  call k8s#kubectl('wait', 'pod/sample-pod', '--for', 'delete')
  let result = k8s#kubectl('get', 'pod', '--field-selector=metadata.name=sample-pod')
  call s:assert.equals(result, 'No resources found in default namespace.')
endfunction

function! s:suite.kill()
  call k8s#do_action('pods:kill')
  let result = k8s#kubectl('get', 'pod', '--field-selector=metadata.name=sample-pod')
  call s:assert.equals(result, 'No resources found in default namespace.')
endfunction

