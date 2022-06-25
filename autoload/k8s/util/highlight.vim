" highlight
" Author: skanehira
" License: MIT

function! k8s#util#highlight#define() abort
  hi! K8sListHeader ctermfg=216 guifg=#e2a478 cterm=underline,bold
  hi! K8sContainersUp ctermfg=107 guifg=#a0c980
  hi! K8sDescribeKey ctermfg=216 guifg=#e2a478 cterm=bold
  hi! K8sPodsFailed cterm=bold ctermfg=203 gui=bold guifg=#ec7279
  hi! K8sPodsCreating cterm=bold ctermfg=110 gui=bold guifg=#6cb6eb
  hi! K8sPodsTerminating cterm=bold ctermfg=176 gui=bold guifg=#d38aea
  hi! K8sPodsUp ctermfg=107 guifg=#a0c980
endfunction
