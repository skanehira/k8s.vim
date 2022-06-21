" k8s
" Author: skanehira
" License: MIT

let s:action_list = {
      \ 'pods:logs': function('k8s#pod#logs'),
      \ 'pods:containers': function('k8s#pod#containers'),
      \ 'pods:containers:attach': function('k8s#pod#container_attach'),
      \ 'pods:describe': function('k8s#pod#describe'),
      \ 'pods:yaml': function('k8s#pod#yaml'),
      \ 'nodes:describe': function('k8s#node#describe'),
      \ }

function! k8s#do_action(action) abort
  if a:action ==# ''
    return
  endif
  call call(s:action_list[a:action] , [])
endfunction
