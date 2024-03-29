" k8s_nodes
" Author: skanehira
" License: MIT

nnoremap <buffer> <silent> q :<C-u>bw<CR>

nnoremap <buffer> <silent> <Plug>(k8s:nodes:describe)
      \ <Cmd>call k8s#do_action('nodes:describe')<CR>

nnoremap <buffer> <silent> <Plug>(k8s:nodes:yaml)
      \ <Cmd>call k8s#do_action('nodes:yaml')<CR>

nnoremap <buffer> <silent> <Plug>(k8s:nodes:pods)
      \ <Cmd>call k8s#do_action('nodes:pods')<CR>

nnoremap <buffer> <silent> <Plug>(k8s:nodes:edit)
      \ <Cmd>call k8s#do_action('nodes:edit')<CR>
