== replace word(s) in multiple files.

    grep -rl '[words to match]' ./ | xargs sed -i 's/[words to match]/[replacement string]/g'

== replace but use the replacing word in your replacement

    s/(word)/foo\1/g

for the string "this is a word", the result will be "this is a fooword".
