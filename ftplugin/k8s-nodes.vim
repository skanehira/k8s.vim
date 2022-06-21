" k8s_nodes
" Author: skanehira
" License: MIT

nnoremap <buffer> <silent> q :<C-u>bw<CR>

nnoremap <buffer> <silent> <Plug>(k8s:nodes:describe)
      \ <Cmd>call k8s#do_action('nodes:describe')<CR>
