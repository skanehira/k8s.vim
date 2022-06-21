" pod
" Author: skanehira
" License: MIT

function! k8s#pod#containers() abort
  let pod = b:k8s_pods[line('.')-2]
  let namespace = pod.metadata.namespace
  let name = pod.metadata.name
  let open = k8s#util#window#open()
  if open ==# ''
    return
  endif
  exe printf('%s k8s://%s/pods/%s/containers', open, namespace, name)
endfunction

function! k8s#pod#logs() abort
  let pod = b:k8s_pods[line('.')-2]
  let namespace = pod.metadata.namespace
  let name = pod.metadata.name
  let open = k8s#util#window#open()
  if open ==# ''
    return
  endif
  exe open
  call k8s#util#terminal#run('kubectl', 'logs', '-f', '-n', namespace, 'pods/' .. name)
endfunction

function! k8s#pod#container_attach() abort
  let namespace = b:k8s_pod.metadata.namespace
  if len(b:k8s_pod.spec.containers) ==# 0
    return
  endif
  let pod_name = b:k8s_pod.metadata.name
  let container = b:k8s_pod.spec.containers[line(".")-2]
  let open = k8s#util#window#open()
  if open ==# ''
    return
  endif
  exe open
  call k8s#util#terminal#run('kubectl', 'exec', '-n', namespace, '-it', 'pods/' .. pod_name,
        \ '--container', container.name, '--', 'sh')
endfunction

function! k8s#pod#describe() abort
  let pod = b:k8s_pods[line('.')-2]
  let namespace = pod.metadata.namespace
  let name = pod.metadata.name
  let open = k8s#util#window#open()
  if open ==# ''
    return
  endif
  exe printf('%s k8s://%s/pods/%s/describe', open, namespace, name)
endfunction
