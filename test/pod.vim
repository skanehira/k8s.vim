let s:suite = themis#suite('pod')
let s:assert = themis#helper('assert')
let s:expect = themis#helper('expect')

" wait for denops starting
while denops#server#status() !=# 'running'
  sleep 1
endwhile

function s:suite.pod_list()
  e k8s://pods/list?namespace=kube-system
  let contents = getline(1, '$')
  call s:expect(len(contents)).to_be_greater_than(1)
  bw!
endfunction

function! s:suite.pod_describe()
  e k8s://pods/list?namespace=kube-system
  normal! j
  call k8s#do_action('pods:describe')
  call s:assert.equals(getline(1, '$'), [])
  bw!
endfunction
