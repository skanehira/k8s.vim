# k8s.vim
A Vim/Neovim plugin for kubernetes

![](https://i.gyazo.com/38e00915e05eeef62acbe6008c24f540.png)

## Requirements
- [denops.vim](https://github.com/vim-denops/denops.vim)
- [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl)

## Usage
```vim
" Execute kubectl via terminal
" Bellow is Same as 'kubectl get pods -A'
:K8s get pods -A

" Show all pods
:K8sPods

" Show all nodes
:K8sNodes

" Show all depployments
:K8sDeployments

" Show all services
:K8sServices

" Show all secrets
:K8sSecrets

" Show all events
:K8sEvents

" Show pod list filterd by 'app=sample-pod' of label
:drop k8s://pods/list?labels=app=sample-pod
```

Also you can do some action(like show pod's logs, run shell in pod).
Please see help for more details.

## Related Project
- [denops-docker.vim](https://github.com/skanehira/denops-docker.vim)

## Author
skanehira
