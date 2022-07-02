let s:suite = themis#suite('node')
let s:assert = themis#helper('assert')
let s:expect = themis#helper('expect')

" wait for loading plugin
let s:result = denops#plugin#wait('k8s', {'interval': 1})
if s:result !=# 0
  call s:assert.fail('k8s is not ready, result: ' .. s:result)
endif

function s:suite.list()
  :K8sNodes
  let contents = getline(1, '$')
  call s:expect(len(contents)).to_be_greater_than(1)
  bw
endfunction

function s:suite.pods()
  :K8sNodes
  call k8s#do_action('nodes:pods')
  let contents = getline(1, '$')
  call s:expect(len(contents)).to_be_greater_than(1)
  bw
endfunction

function s:suite.describe()
  :K8sNodes
  call k8s#do_action('nodes:describe')
  let contents = getline(1, '$')
  call s:assert.not_equals(len(getline(1, '$')), 0)
  bw
endfunction
