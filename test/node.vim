let s:suite = themis#suite('node')
let s:assert = themis#helper('assert')
let s:expect = themis#helper('expect')

call WaitDenopsLoading()

function s:suite.before_each()
  K8sNodes
  normal! j
endfunction

function s:suite.after_each()
  bw!
endfunction

function s:suite.list()
  call ListBufferNotEmpty(bufnr())
  call s:assert.equals(&ft, 'k8s-nodes')
endfunction

function s:suite.pods()
  call k8s#do_action('nodes:pods')
  call BufferNotEmpty(bufnr())
  call s:assert.equals(&ft, 'k8s-pods')
endfunction

function s:suite.describe()
  call k8s#do_action('nodes:describe')
  call BufferNotEmpty(bufnr())
  call s:assert.equals(&ft, 'k8s-nodes-describe')
endfunction

function s:suite.yaml()
  call k8s#do_action('nodes:yaml')
  call BufferNotEmpty(bufnr())
  call s:assert.equals(&ft, 'k8s-nodes-yaml')
endfunction

function s:suite.edit()
  call k8s#do_action('nodes:edit')
  call BufferNotEmpty(bufnr())
  call s:expect(bufnr()).job_status_to_be('running')
endfunction

