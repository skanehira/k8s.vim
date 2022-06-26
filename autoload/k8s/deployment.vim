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
  exe printf('drop k8s://%s/deployments/%s/describe', namespace, name)
endfunction

function! k8s#deployment#edit() abort
  let dep = s:get_deployment()
  let name = dep.metadata.name
  let namespace = dep.metadata.namespace
  call k8s#util#terminal#run('kubectl', 'edit', 'deployment', name, '-n', namespace)
endfunction

function k8s#deployment#pods() abort
  let dep = s:get_deployment()
  if !has_key(dep.spec.selector, 'matchLabels')
    return
  endif
  let labels = join(map(keys(dep.spec.selector.matchLabels), 'v:val .. "=" .. dep.spec.selector.matchLabels[v:val]'), ",")
  exe printf('drop k8s://all/pods?labels=%s', labels)
endfunction

