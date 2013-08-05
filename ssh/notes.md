= generate a key                                                                                                   

    ssh-keygen -t rsa -C "my comment"

by default, this saves this to ~/.ssh/id_rsa and id_rsa.pub

= use on server

    scp .ssh/id_rsa.pub to/your/server:
    # on the server
    mv id_rsa.pub .ssh/authorizedkeys
