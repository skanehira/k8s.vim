let s:suite = themis#suite('pod')
let s:assert = themis#helper('assert')
let s:expect = themis#helper('expect')

call WaitDenopsLoading()

" make resource for test
call k8s#util#cli#kubectl('apply', '-f', 'test/manifests/pod.yaml')
call k8s#util#cli#kubectl('wait', 'pod/sample-pod', '--for', 'condition=Ready')

function s:suite.before_each()
  e k8s://pods/list?labels=app=sample-app
  normal! j
endfunction

function s:suite.after_each()
  bw!
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
  call s:assert.equals(&ft, 'yaml')
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

function! s:suite.delete()
  normal! j
  call k8s#do_action('pods:delete')
  call k8s#util#cli#kubectl('wait', 'pod/sample-pod', '--for', 'delete')
  let result = k8s#util#cli#kubectl('get', 'pod', '--field-selector=metadata.name=sample-pod')
  call s:assert.equals(result, 'No resources found in default namespace.')
endfunction
