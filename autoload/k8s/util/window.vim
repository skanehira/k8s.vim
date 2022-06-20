" open
" Author: skanehira
" License: MIT

function! s:echo_msg(msg, hl) abort
  exe "echohl" a:hl
  if type(a:msg) ==# v:t_list
    for m in a:msg
      redraw
      echom m
    endfor
  else
    echom a:msg
  endif
  echohl None
endfunction

" returns chosed action
" actions must be object array liek bellow
" [
"   {"text": "(e)dit", value: "edit"}
"   {"text": "(n)ew", value: "new"}
" ]
" NOTE: text must contains '()' to detect input and its must be 1 character
function! s:choose(actions) abort
  call s:echo_msg(join(map(copy(a:actions), { _, v -> v.text }), ", ") .. ": ", 'Directory')
  let result = getcharstr()
  let result = filter(a:actions, { _, v -> v.text =~# printf(".*\(%s\).*", result)})
  echo '' | redraw!
  return len(result) ? result[0].value : ""
endfunction

function! k8s#util#window#open() abort
  return s:choose([
        \ {"text": "(e)dit", "value": "edit"},
        \ {"text": "(n)ew", "value": "new"},
        \ {"text": "(v)new", "value": "vnew"},
        \ {"text": "(t)abnew", "value": "tabnew"},
        \ ])
endfunction

