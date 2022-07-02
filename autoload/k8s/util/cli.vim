" cli
" Author: skanehira
" License: MIT

function k8s#util#cli#kubectl(...) abort
  let result = systemlist(join(['kubectl'] + a:000))
  return join(result, "\n")
endfunction
