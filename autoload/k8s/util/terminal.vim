if has('nvim')
  function! k8s#util#terminal#run(...) abort
    call termopen(a:000)
  endfunction
else
  function! k8s#util#terminal#run(...) abort
    call term_start([&shell, '-c', join(a:000, ' ')], {
          \ 'curwin': 1,
          \ })
  endfunction
endif
