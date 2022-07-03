" k8s_pods
" Author: skanehira
" License: MIT

nnoremap <buffer> <silent> q :bw<CR>

nnoremap <buffer> <silent> <Plug>(k8s:pods:containers)
      \ <Cmd>call k8s#do_action('pods:containers')<CR>

nnoremap <buffer> <silent> <Plug>(k8s:pods:logs)
      \ <Cmd>call k8s#do_action('pods:logs')<CR>

nnoremap <buffer> <silent> <Plug>(k8s:pods:describe)
      \ <Cmd>call k8s#do_action('pods:describe')<CR>

nnoremap <buffer> <silent> <Plug>(k8s:pods:yaml)
      \ <Cmd>call k8s#do_action('pods:yaml')<CR>

nnoremap <buffer> <silent> <Plug>(k8s:pods:delete)
      \ <Cmd>call k8s#do_action('pods:delete')<CR>

nnoremap <buffer> <silent> <Plug>(k8s:pods:kill)
      \ <Cmd>call k8s#do_action('pods:kill')<CR>

nnoremap <buffer> <silent> <Plug>(k8s:pods:events)
      \ <Cmd>call k8s#do_action('pods:events')<CR>

nnoremap <buffer> <silent> <Plug>(k8s:pods:shell)
      \ <Cmd>call k8s#do_action('pods:shell')<CR>

nnoremap <buffer> <silent> <Plug>(k8s:pods:exec)
      \ <Cmd>call k8s#do_action('pods:exec')<CR>
