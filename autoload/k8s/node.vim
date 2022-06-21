" node
" Author: skanehira
" License: MIT

function! k8s#node#describe() abort
  let pod = b:k8s_nodes[line('.')-2]
  let name = pod.metadata.name
  let open = k8s#util#window#open()
  if open ==# ''
    return
  endif
  exe printf('%s k8s://nodes/%s/describe', open, name)
endfunction
