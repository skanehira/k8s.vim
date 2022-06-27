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
```

Also you can do some action(like show pod's logs).
Please refer help for more details.

## Author
skanehira
