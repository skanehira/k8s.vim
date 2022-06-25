" k8s
" Author: skanehira
" License: MIT

let s:action_list = {
      \ 'pods:logs': function('k8s#pod#logs'),
      \ 'pods:containers': function('k8s#pod#containers'),
      \ 'pods:containers:shell': function('k8s#pod#shell'),
      \ 'pods:describe': function('k8s#pod#describe'),
      \ 'pods:yaml': function('k8s#pod#yaml'),
      \ 'pods:delete': function('k8s#pod#delete'),
      \ 'nodes:describe': function('k8s#node#describe'),
      \ 'deployments:describe': function('k8s#deployment#describe'),
      \ }

function! k8s#do_action(action) abort
  if a:action ==# ''
    return
  endif
  call call(s:action_list[a:action] , [])
endfunction
