" deployment
" Author: skanehira
" License: MIT

function! s:get_deployment() abort
  let dep = b:k8s_deployments[line(".")-2]
  return dep
endfunction

function! k8s#deployment#describe() abort
  let dep = s:get_deployment()
  let name = dep.metadata.name
  let namespace = dep.metadata.namespace
  exe printf('drop k8s://deployments/describe?namespace=%s&name=%s', namespace, name)
endfunction

function! k8s#deployment#yaml() abort
  let dep = s:get_deployment()
  let name = dep.metadata.name
  let namespace = dep.metadata.namespace
  exe printf('drop k8s://deployments/yaml?namespace=%s&name=%s', namespace, name)
endfunction

function! k8s#deployment#edit() abort
  let dep = s:get_deployment()
  let name = dep.metadata.name
  let namespace = dep.metadata.namespace
  call k8s#util#terminal#kubectl('edit', 'deployment', name, '-n', namespace)
endfunction

function k8s#deployment#pods() abort
  let dep = s:get_deployment()
  if !has_key(dep.spec.selector, 'matchLabels')
    return
  endif
  let labels = join(map(keys(dep.spec.selector.matchLabels), 'v:val .. "=" .. dep.spec.selector.matchLabels[v:val]'), ",")
  exe printf('drop k8s://pods/list?namespace=all&labels=%s', labels)
endfunction

function! k8s#deployment#delete() abort
  let dep = s:get_deployment()
  let resource = {
        \ 'type': 'deployments',
        \ 'action': 'delete',
        \ 'opts': {
            \ 'name': dep.metadata.name,
            \ 'namespace': dep.metadata.namespace,
          \ }
        \ }
  cal denops#notify('k8s', 'action', [resource])
  e
endfunction
