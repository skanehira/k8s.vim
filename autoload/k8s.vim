" k8s
" Author: skanehira
" License: MIT

let s:action_list = {
      \ 'pods:logs': function('k8s#pod#logs'),
      \ 'pods:containers': function('k8s#pod#containers'),
      \ 'pods:containers:shell': function('k8s#pod#container_shell'),
      \ 'pods:containers:exec': function('k8s#pod#container_exec'),
      \ 'pods:describe': function('k8s#pod#describe'),
      \ 'pods:shell': function('k8s#pod#shell'),
      \ 'pods:exec': function('k8s#pod#exec'),
      \ 'pods:yaml': function('k8s#pod#yaml'),
      \ 'pods:delete': function('k8s#pod#delete'),
      \ 'pods:kill': function('k8s#pod#kill'),
      \ 'pods:edit': function('k8s#pod#edit'),
      \ 'pods:events': function('k8s#pod#events'),
      \ 'nodes:pods': function('k8s#node#pods'),
      \ 'nodes:describe': function('k8s#node#describe'),
      \ 'nodes:yaml': function('k8s#node#yaml'),
      \ 'nodes:edit': function('k8s#node#edit'),
      \ 'deployments:describe': function('k8s#deployment#describe'),
      \ 'deployments:yaml': function('k8s#deployment#yaml'),
      \ 'deployments:edit': function('k8s#deployment#edit'),
      \ 'deployments:pods': function('k8s#deployment#pods'),
      \ 'deployments:delete': function('k8s#deployment#delete'),
      \ 'services:pods': function('k8s#svc#pods'),
      \ 'services:describe': function('k8s#svc#describe'),
      \ 'services:delete': function('k8s#svc#delete'),
      \ 'services:yaml': function('k8s#svc#yaml'),
      \ 'services:edit': function('k8s#svc#edit'),
      \ 'secrets:describe': function('k8s#secret#describe'),
      \ 'secrets:yaml': function('k8s#secret#yaml'),
      \ 'secrets:edit': function('k8s#secret#edit'),
      \ 'secrets:delete': function('k8s#secret#delete'),
      \ }

function! k8s#do_action(action, ...) abort
  if a:action ==# ''
    return
  endif
  call call(s:action_list[a:action] , a:000)
endfunction

function! k8s#kubectl(...) abort
  let result = system(join(['kubectl'] + a:000))
  return trim(result)
endfunction
