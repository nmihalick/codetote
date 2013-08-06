= create

    tar -czvf [name].tar.gz [files]

= create and exclude dir

    tar -czvf [name].tar.gz [files] --exclude='[dir]/*' --exclude='[dir]'

= extract .gz file

    tar -xzf [name].tar.gz

= extract .bz2 file

    tar -jxf [name].tar.bz2
