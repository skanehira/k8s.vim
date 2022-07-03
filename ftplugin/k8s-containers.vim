" k8s_containers
" Author: skanehira
" License: MIT

nnoremap <buffer> <silent> q :bw<CR>

nnoremap <buffer> <silent> <Plug>(k8s:pods:containers:shell)
      \ <Cmd>call k8s#do_action('pods:containers:shell')<CR>

nnoremap <buffer> <silent> <Plug>(k8s:pods:containers:exec)
      \ <Cmd>call k8s#do_action('pods:containers:exec')<CR>
