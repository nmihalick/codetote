== replace word(s) in multiple files.

    grep -rl '[words to match]' ./ | xargs sed -i 's/[words to match]/[replacement string]/g'
