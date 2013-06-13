" Set JavaScript Lint as compiler.
if ! exists('b:current_compiler')
    compiler jslint
endif 

"make on save so we find syntax errors.
au BufWritePost *.js make

