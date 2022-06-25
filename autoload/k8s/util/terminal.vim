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
