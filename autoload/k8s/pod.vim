" pod
" Author: skanehira
" License: MIT

function! k8s#pod#containers() abort
  let pod = b:k8s_pods[line('.')-2]
  let namespace = pod.metadata.namespace
  let name = pod.metadata.name
  exe printf('drop k8s://%s/pods/%s/containers', namespace, name)
endfunction

function! k8s#pod#logs() abort
  let pod = b:k8s_pods[line('.')-2]
  let namespace = pod.metadata.namespace
  let name = pod.metadata.name
  call k8s#util#terminal#run('kubectl', 'logs', '-f', '-n', namespace, 'pods/' .. name)
endfunction

function! k8s#pod#shell() abort
  let namespace = b:k8s_pod.metadata.namespace
  if len(b:k8s_pod.spec.containers) ==# 0
    return
  endif
  let pod_name = b:k8s_pod.metadata.name
  let container = b:k8s_pod.spec.containers[line(".")-2]
  call k8s#util#terminal#run('kubectl', 'exec', '-n', namespace, '-it', 'pods/' .. pod_name,
        \ '--container', container.name, '--', 'sh')
endfunction

function! k8s#pod#describe() abort
  let pod = b:k8s_pods[line('.')-2]
  let namespace = pod.metadata.namespace
  let name = pod.metadata.name
  exe printf('drop k8s://%s/pods/%s/describe', namespace, name)
endfunction

function! k8s#pod#yaml() abort
  let pod = b:k8s_pods[line('.')-2]
  let namespace = pod.metadata.namespace
  let name = pod.metadata.name
  exe printf('drop k8s://%s/pods/%s/yaml', namespace, name)
endfunction

function! k8s#pod#delete() abort
  let pod = b:k8s_pods[line('.')-2]
  let namespace = pod.metadata.namespace
  let name = pod.metadata.name
  cal denops#notify('k8s', 'action', ["podDelete", name, namespace])
  e
endfunction
