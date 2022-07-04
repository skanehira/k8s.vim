" node
" Author: skanehira
" License: MIT

function! s:get_node() abort
  return b:k8s_nodes[line(".")-2]
endfunction

function! k8s#node#describe() abort
  let node = s:get_node()
  let name = node.metadata.name
  exe printf('drop k8s://nodes/describe?name=%s', name)
endfunction

function! k8s#node#edit() abort
  let node = s:get_node()
  let name = node.metadata.name
  call k8s#util#terminal#kubectl('edit', 'node', name)
endfunction

function! k8s#node#yaml() abort
  let node = s:get_node()
  let name = node.metadata.name
  exe printf('drop k8s://nodes/yaml?name=%s', name)
endfunction

function! k8s#node#pods() abort
  let node = s:get_node()
  let name = node.metadata.name
  exe printf('drop k8s://pods/list?namespace=all&fields=spec.nodeName=%s', name)
endfunction
