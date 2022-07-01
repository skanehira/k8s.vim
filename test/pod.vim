let s:suite = themis#suite('pod')
let s:assert = themis#helper('assert')
let s:expect = themis#helper('expect')

" wait for denops starting
while denops#server#status() !=# 'running'
  sleep 1
endwhile

function s:kubectl(...) abort
  call system(join(['kubectl'] + a:000))
endfunction

" make resource for test
call s:kubectl('apply', '-f', 'test/manifests/deployment.yaml')
call s:kubectl('wait', 'pod', '-l', 'app=sample', '--for', 'condition=Ready')
call s:kubectl('apply', 'get', 'pods')

function s:suite.pod_list()
  e k8s://pods/list?labels=app=sample-app
  let contents = getline(1, '$')
  call s:expect(len(contents)).to_be_greater_than(1)
  bw
endfunction

function! s:suite.pod_describe()
  e k8s://pods/list?labels=app=sample-app
  normal! j
  call k8s#do_action('pods:describe')
  call s:assert.not_equals(len(getline(1, '$')), 0)
  bw!
endfunction

function! s:suite.pod_yaml()
  e k8s://pods/list?labels=app=sample-app
  normal! j
  call k8s#do_action('pods:yaml')
  call s:assert.not_equals(len(getline(1, '$')), 0)
  bw!
endfunction

function! s:suite.pod_events()
  e k8s://pods/list?labels=app=sample-app
  normal! j
  call k8s#do_action('pods:events')
  call s:assert.not_equals(len(getline(1, '$')), 0)
  bw!
endfunction

function! s:suite.pod_containers()
  e k8s://pods/list?labels=app=sample-app
  normal! j
  call k8s#do_action('pods:containers')
  call s:assert.not_equals(len(getline(1, '$')), 0)
  call s:assert.equals(&ft, 'k8s-containers')
  bw!
endfunction

function! s:suite.pod_containers_shell()
  e k8s://pods/list?labels=app=sample-app
  normal! j
  call k8s#do_action('pods:containers')
  call s:assert.not_equals(len(getline(1, '$')), 0)
  call s:assert.equals(&ft, 'k8s-containers')
  call k8s#do_action('pods:containers:shell')
  call s:assert.equals(&buftype, 'terminal')
  bw!
endfunction

function! s:suite.pod_logs()
  e k8s://pods/list?labels=app=sample-app
  normal! j
  call k8s#do_action('pods:logs')
  call s:assert.not_equals(len(getline(1, '$')), 0)
  bw!
endfunction

function! s:suite.pod_shell()
  e k8s://pods/list?labels=app=sample-app
  normal! j
  call k8s#do_action('pods:shell')
  call s:assert.equals(&buftype, 'terminal')
  bw!
endfunction
