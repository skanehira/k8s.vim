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
  exe printf('drop k8s://pods/list?namespace=all&labels=%s', labels)
endfunction

function! k8s#svc#edit() abort
  let svc = s:get_svc()
  let namespace = svc.metadata.namespace
  let name = svc.metadata.name
  call k8s#util#terminal#kubectl('edit', 'svc', name, '-n', namespace)
endfunction

function! k8s#svc#describe() abort
  let svc = s:get_svc()
  let namespace = svc.metadata.namespace
  let name = svc.metadata.name
  exe printf('drop k8s://services/describe?namespace=%s&name=%s', namespace, name)
endfunction

function! k8s#svc#yaml() abort
  let svc = s:get_svc()
  let namespace = svc.metadata.namespace
  let name = svc.metadata.name
  exe printf('drop k8s://services/yaml?namespace=%s&name=%s', namespace, name)
endfunction

function! k8s#svc#delete() abort
  let svc = s:get_svc()
  let resource = {
        \ 'type': 'services',
        \ 'action': 'delete',
        \ 'opts': {
            \ 'name': svc.metadata.name,
            \ 'namespace': svc.metadata.namespace,
          \ }
        \ }
  cal denops#notify('k8s', 'action', [resource])
  e
endfunction
