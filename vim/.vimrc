set nocompatible
" HELP - how to reload me after edit -- :so % 

" HELP - Use bang (!) to redefine a command or function, if already defined.
" HELP EXAMPLE - command! Mycommand echo "Hello!"
set backspace=indent,eol,start
set autoindent
set incsearch
set history=50
set ruler
set showcmd
set number
set nowrap
colorscheme desert
syntax enable
filetype plugin on
" i like fold based on indents
set foldmethod=indent
" i like the whole line to be highlighted
set cursorline
" smart case searching
set smartcase

"i want standard soft tabs everywhere.
set softtabstop=4
"i want << and >> to match the softtab.
set shiftwidth=4

"i like using space to page down.
map <Space> <PageDown>
"i like using delete to page up
map <BS> <PageUp>

"i like terms set to 80 pxs.
set textwidth=80

"mac Terminal requires some additions to be able to use this.
set mouse=a

"i want tab completion
set wildmenu

" i want to see more commands at the bottom of the window
set cmdheight=2

" paste toggle for indentless pasting.
" http://vim.wikia.com/wiki/Toggle_auto-indenting_for_code_paste
set pastetoggle=<F2>

