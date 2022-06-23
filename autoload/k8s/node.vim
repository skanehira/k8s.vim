" node
" Author: skanehira
" License: MIT

function! k8s#node#describe() abort
  exe printf('drop k8s://nodes/%s/describe', name)
endfunction
