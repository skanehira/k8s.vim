hi! K8sPodsHeader ctermfg=216 guifg=#e2a478 cterm=underline,bold
hi! K8sPodsFailed cterm=bold ctermfg=203 gui=bold guifg=#ec7279
hi! K8sPodsCreating cterm=bold ctermfg=110 gui=bold guifg=#6cb6eb
hi! K8sPodsTerminating cterm=bold ctermfg=176 gui=bold guifg=#d38aea
hi! K8sPodsUp ctermfg=107 guifg=#a0c980

syntax match K8sPodsHeader /\%1l.*/
syntax match K8sPodsFailed /.*Failed.*/
syntax match K8sPodsUp /.*Running.*/
syntax match K8sPodsTerminating /.*Terminating.*/
syntax match K8sPodsCreating /.*ContainerCreating.*/
