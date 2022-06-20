hi! PodsHeader ctermfg=216 guifg=#e2a478 cterm=underline,bold
hi! PodsFailed cterm=bold ctermfg=203 gui=bold guifg=#ec7279
hi! PodsUp ctermfg=107 guifg=#a0c980

syntax match PodsHeader /\%1l.*/
syntax match PodsFailed /.*Failed.*/
syntax match PodsUp /.*Running.*/
