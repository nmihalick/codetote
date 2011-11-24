# checks for a root user
if [ "$UID" -ne "$ROOT_UID" ]
then
    echo "must be root to run this script."
    exit $E_NOTROOT
fi  

#checks for arguments
#fill in these vars
script_parameters="-a -h -m -z"
number_of_expected_args=1

E_WRONG_ARGS=85
if [ $# -ne $number_of_expected_args ]
then
    echo "Usage: `basename $0` $script_parameters"
    exit $E_WRONG_ARGS
fi
