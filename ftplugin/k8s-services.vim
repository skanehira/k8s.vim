" k8s_services
" Author: skanehira
" License: MIT

nnoremap <buffer> <silent> q :bw<CR>

nnoremap <buffer> <silent> <Plug>(k8s:svcs:pods)
      \ <Cmd>call k8s#svc#pods()<CR>
