" node
" Author: skanehira
" License: MIT

function! s:get_node() abort
  return b:k8s_nodes[line(".")-2]
endfunction

function! k8s#node#describe() abort
  let name = s:get_node().metadata.name
  exe printf('drop k8s://nodes/%s/describe', name)
endfunction

function! k8s#node#pods() abort
  let name = s:get_node().metadata.name
  exe printf('drop k8s://all/pods?fields=spec.nodeName=%s', name)
endfunction
