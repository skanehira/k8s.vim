" k8s_deployments
" Author: skanehira
" License: MIT

nnoremap <buffer> <silent> q :bw<CR>

nnoremap <buffer> <silent> <Plug>(k8s:deployments:describe)
      \ <Cmd>call k8s#do_action('deployments:describe')<CR>
