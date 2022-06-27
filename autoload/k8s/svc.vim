" svc
" Author: skanehira
" License: MIT

function! s:get_svc() abort
  return b:k8s_svcs[line('.')-2]
endfunction

function! k8s#svc#pods() abort
  let svc = s:get_svc()
  if !has_key(svc.spec, 'selector')
    return
  endif
  let labels = join(map(keys(svc.spec.selector), 'v:val .. "=" .. svc.spec.selector[v:val]'), ",")
  exe printf('drop k8s://all/pods?labels=%s', labels)
endfunction

function! k8s#svc#describe() abort
  let svc = s:get_svc()
  let namespace = svc.metadata.namespace
  let name = svc.metadata.name
  exe printf('drop k8s://%s/services/%s/describe', namespace, name)
endfunction
