" k8s_services
" Author: skanehira
" License: MIT

nnoremap <buffer> <silent> q :bw<CR>

nnoremap <buffer> <silent> <Plug>(k8s:svcs:pods)
      \ <Cmd>call k8s#do_action('services:pods')<CR>

nnoremap <buffer> <silent> <Plug>(k8s:svcs:describe)
      \ <Cmd>call k8s#do_action('services:describe')<CR>

nnoremap <buffer> <silent> <Plug>(k8s:svcs:delete)
      \ <Cmd>call k8s#do_action('services:delete')<CR>

nnoremap <buffer> <silent> <Plug>(k8s:svcs:yaml)
      \ <Cmd>call k8s#do_action('services:yaml')<CR>
