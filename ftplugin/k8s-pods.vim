" k8s_pods
" Author: skanehira
" License: MIT

nnoremap <buffer> <silent> q :bw<CR>

nnoremap <buffer> <silent> <Plug>(k8s:pods:containers)
      \ <Cmd>call k8s#do_action('pods:containers')<CR>

nnoremap <buffer> <silent> <Plug>(k8s:pods:logs)
      \ <Cmd>call k8s#do_action('pods:logs')<CR>

nmap <CR> <Plug>(k8s:pods:containers)
nmap l <Plug>(k8s:pods:logs)
