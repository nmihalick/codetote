= create group

    groupadd [group name]

= add user to group

    usermod -a -G [group] [user]

= assign users/groups to files/directories

    chown [-R] [user] [files]
    chgrp [-R] [group] [files]

= permissions

unix permissions are typically seen as drwxrwxrwx+.

    position	definition
    1		directory flag. d is directory, '-' otherwise.
    2,3,4	user permissions
    5,6,7	group permissions
    8,9,10	other permission

== setting permissions

1 

== single file permission

    chmod [permission] [file]

== access control lists

ACLs manage permissions and ownership information. it copies permissions between
users and groups.

commands are (system dependent):
    setacl or setfacl
    getacl or getfacl

adding a user acl
    
    setacl -u user:[user]:[permissions] file
    setfacl -m u:[user]:[permissions] file

adding a group acl

    setacl -g group:[group]:[permissions] file
    setfacl -m g:[group]:[permissions] file

setting a default acl

    setfacl -d -m g:[group]:[permissions] file
