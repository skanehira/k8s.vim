" deployment
" Author: skanehira
" License: MIT

function! k8s#deployment#describe() abort
  let dep = b:k8s_deployments[line(".")-2]
  let name = dep.metadata.name
  let namespace = dep.metadata.namespace
  exe printf('drop k8s://%s/deployments/%s/describe', namespace, name)
endfunction
