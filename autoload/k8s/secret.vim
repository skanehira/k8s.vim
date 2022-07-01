" secret
" Author: skanehira
" License: MIT

function! s:get_secret() abort
  return b:k8s_secrets[line('.')-2]
endfunction

function! k8s#secret#describe() abort
  let secret = s:get_secret()
  let namespace = secret.metadata.namespace
  let name = secret.metadata.name
  exe printf('drop k8s://secrets/describe?namespace=%s&name=%s', namespace, name)
endfunction

function! k8s#secret#yaml() abort
  let secret = s:get_secret()
  let namespace = secret.metadata.namespace
  let name = secret.metadata.name
  exe printf('drop k8s://secrets/yaml?namespace=%s&name=%s', namespace, name)
endfunction
