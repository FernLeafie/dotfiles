if status is-interactive
    # Commands to run in interactive sessions can go here

    # Variables
    set -gx FZF_DEFAULT_OPTS " \
    --color=bg+:#313244,bg:#000000,spinner:#F5E0DC,hl:#F38BA8 \
    --color=fg:#CDD6F4,header:#F38BA8,info:#CBA6F7,pointer:#F5E0DC \
    --color=marker:#B4BEFE,fg+:#CDD6F4,prompt:#CBA6F7,hl+:#F38BA8 \
    --color=selected-bg:#45475A \
    --color=border:#313244,label:#CDD6F4"

    set -gx EDITOR "nvim"

    # Fish setting variables
    set -g fish_greeting
    set -g fish_transient_prompt 1

    # Alias
    if command -sq lsd
        alias ls='lsd'
        alias l='ls -l'
        alias la='ls -a'
        alias lla='ls -la'
        alias lt='ls --tree'
    end

    if command -sq bat
        alias cat='bat'
        alias fzf='fzf --preview "bat --color=always --style=numbers --line-range=:500 {}" --style=full'
    end
    if command -sq batman
        alias man='batman'
    end

    alias grep='grep --color=auto'

    alias sysups='bash ~/Documents/scripts/update.sh'
    
    # The stupid alias's
    alias vencord='sh -c "$(curl -sS https://raw.githubusercontent.com/Vendicated/VencordInstaller/main/install.sh)"'
    if command -sq gamescope
        if command -sq steam
            alias bigpicture='gamescope -W 1920 -H 1080 -w 1920 -h 1080 -f -- steam steam://open/bigpicture'
        end
    end
    
    function fastfetch
        argparse -i 'd/distro=&' -- $argv
        if set -ql _flag_d
            set -l _flag_d (echo $_flag_d | tr '[:upper:]' '[:lower:]' | sed "s/linux\$//g; s/gnu\$//g; s/os\$//g;")
            cat ~/.config/fastfetch/distros.json | jq (string join '' '.' $_flag_d '[]') -r | env fastfetch --file /dev/stdin $argv
        else
            cat ~/.config/fastfetch/distros.json | jq (string join '' '.' (grep "^NAME=" /etc/os-release | tr '[:upper:]' '[:lower:]' | sed 's/\"//g; s/name=//g; s/ //g; s#\/##g; s/!//g; s/_//g; s/linux$//g; s/gnu$//g; s/os$//g') '[]') -r | command fastfetch --file /dev/stdin $argv
        end
    end
        # equivalent function in bash
        # cat ~/.config/fastfetch/distros.json | jq ".$(grep "^NAME=" /etc/os-release | sed 's/\"//g; s/NAME=//g; s/ //g; s#\/##g')[]" -r | env fastfetch --file /dev/stdin  $argv
    function hyfetch
        argparse -i 'd/distro=&' -- $argv
        if set -ql _flag_d
            set -l _flag_d (echo $_flag_d | tr '[:upper:]' '[:lower:]' | sed "s/linux\$//g; s/gnu\$//g; s/os\$//g;")
            cat ~/.config/fastfetch/distros.json | jq (string join '' '.' $_flag_d '[]') -r | sed "s/\$.//g" | command hyfetch --ascii-file=/dev/stdin $argv
        else
            cat ~/.config/fastfetch/distros.json | jq (string join '' '.' (grep "^NAME=" /etc/os-release | tr '[:upper:]' '[:lower:]' | sed 's/\"//g; s/name=//g; s/ //g; s#\/##g; s/!//g; s/_//g; s/linux$//g; s/gnu$//g; s/os$//g') '[]') -r | sed "s/\$.//g" | command hyfetch --ascii-file=/dev/stdin $argv
        end
    end

    # Abbriviations
    if command -sq bat
        abbr -a --position anywhere -- --help '--help | bat -Pplhelp'
        abbr -a --position anywhere -- -h '-h | bat -Pplhelp'
    end
    
    # Initialisations
    if command -sq zoxide
        zoxide init --cmd cd fish | source
    end

    set -gx PATH $PATH "$HOME/.cargo/bin"

    # if command -sq catnap
    #     catnap
    # else 
    #     fastfetch
    # end
    fastfetch
end
