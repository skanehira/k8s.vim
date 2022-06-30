" pod
" Author: skanehira
" License: MIT

function! s:get_pod() abort
  return b:k8s_pods[line('.')-2]
endfunction

function! k8s#pod#containers() abort
  let pod = s:get_pod()
  let namespace = pod.metadata.namespace
  let name = pod.metadata.name
  exe printf('drop k8s://pods/containers?namespace=%s&name=%s', namespace, name)
endfunction

function! k8s#pod#logs() abort
  let pod = s:get_pod()
  let namespace = pod.metadata.namespace
  let name = pod.metadata.name
  call k8s#util#terminal#run('kubectl', 'logs', '-f', '-n', namespace, 'pods/' .. name)
endfunction

let s:shellcmd = ['sh', '-c', '"[ -e /bin/bash ] || [ -e /usr/local/bin/bash ] && bash || sh"']

function! k8s#pod#shell() abort
  let pod = s:get_pod()
  if len(pod.spec.containers) ==# 0
    return
  endif
  let name = pod.metadata.name
  let namespace = pod.metadata.namespace
  let cmd = ['kubectl', 'exec', '-n', namespace, '-it', 'pods/' .. name, '--'] + s:shellcmd
  call call('k8s#util#terminal#run', cmd)
endfunction

function! k8s#pod#container_shell() abort
  let namespace = b:k8s_pod.metadata.namespace
  if len(b:k8s_pod.spec.containers) ==# 0
    return
  endif
  let pod_name = b:k8s_pod.metadata.name
  let container = b:k8s_pod.spec.containers[line(".")-2]
  let cmd = ['kubectl', 'exec', '-n', namespace, '-it', 'pods/' .. pod_name,
        \ '--container', container.name, '--'] + s:shellcmd
  call call('k8s#util#terminal#run', cmd)
endfunction

function! k8s#pod#describe() abort
  let pod = s:get_pod()
  let namespace = pod.metadata.namespace
  let name = pod.metadata.name
  exe printf('drop k8s://pods/describe?namespace=%s&name=%s', namespace, name)
endfunction

function! k8s#pod#yaml() abort
  let pod = s:get_pod()
  let namespace = pod.metadata.namespace
  let name = pod.metadata.name
  exe printf('drop k8s://pods/yaml?namespace=%s&name=%s', namespace, name)
endfunction

function! k8s#pod#delete() abort
  let pod = s:get_pod()
  let resource = {
        \ 'type': 'pods',
        \ 'action': 'delete',
        \ 'opts': {
            \ 'name': pod.metadata.name,
            \ 'namespace': pod.metadata.namespace,
          \ }
        \ }
  cal denops#notify('k8s', 'action', [resource])
  e
endfunction

function! k8s#pod#events() abort
  let pod = s:get_pod()
  exe printf('drop k8s://events/list?namespace=%s&name=%s', pod.metadata.namespace, pod.metadata.name)
endfunction
