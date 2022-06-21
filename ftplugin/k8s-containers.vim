" k8s_containers
" Author: skanehira
" License: MIT

nnoremap <buffer> <silent> q :bw<CR>

nnoremap <buffer> <silent> <Plug>(k8s:pods:containers:attach)
      \ <Cmd>call k8s#do_action('pods:containers:attach')<CR>

nmap <buffer> a <Plug>(k8s:pods:containers:attach)
