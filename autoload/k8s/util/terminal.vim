" terminal
" Author: skanehira
" License: MIT

if has('nvim')
  function! k8s#util#terminal#run(...) abort
    new | setlocal buftype=nofile
    call termopen([&shell, &shellcmdflag, join(a:000, ' ')])
  endfunction
else
  function! k8s#util#terminal#run(...) abort
    call term_start([&shell, &shellcmdflag, join(a:000, ' ')])
  endfunction
endif

function! k8s#util#terminal#kubectl(...) abort
  let cmd = ['kubectl'] + a:000
  call call('k8s#util#terminal#run', cmd)
endfunction
