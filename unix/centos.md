= list installed packages

    rpm -qa

= list installed packages by size

   rpm -qa --queryformat="%{NAME} %{SIZE}\n" | sort -k 2 -n | grep setserial 

= search for package

    yum search [name]

= install package

    yum install [name]

= remove package

    yum remove [name]

