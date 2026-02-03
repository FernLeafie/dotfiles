function hyfetch
    argparse -i 'd/distro=&' -- $argv
    if set -ql _flag_d
        set -l _flag_d (echo $_flag_d | tr '[:upper:]' '[:lower:]' | sed "s/linux\$//g; s/gnu\$//g; s/os\$//g;")
        cat ~/.config/fastfetch/distros.json | jq (string join '' '.' $_flag_d '[]') -r | sed "s/\$.//g" | command hyfetch --ascii-file=/dev/stdin $argv
    else
        cat ~/.config/fastfetch/distros.json | jq (string join '' '.' (grep -oP '(?<=^NAME=")[^"]+(?=")' /etc/os-release | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z]//g; s/linux$//g; s/gnu$//g; s/os$//g') '[]') -r | sed "s/\$.//g" | command hyfetch --ascii-file=/dev/stdin $argv
    end
end
