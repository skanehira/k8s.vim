" k8s_secrets
" Author: skanehira
" License: MIT

nnoremap <buffer> <silent> q :bw<CR>

nnoremap <buffer> <silent> <Plug>(k8s:secrets:describe)
      \ <Cmd>call k8s#do_action('secrets:describe')<CR>

nnoremap <buffer> <silent> <Plug>(k8s:secrets:yaml)
      \ <Cmd>call k8s#do_action('secrets:yaml')<CR>

nnoremap <buffer> <silent> <Plug>(k8s:secrets:edit)
      \ <Cmd>call k8s#do_action('secrets:edit')<CR>

nnoremap <buffer> <silent> <Plug>(k8s:secrets:delete)
      \ <Cmd>call k8s#do_action('secrets:delete')<CR>
