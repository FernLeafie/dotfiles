function fish_prompt --description 'Write out the prompt'
    set -l last_pipestatus $pipestatus
    set -lx __fish_last_status $status # Export for __fish_print_pipestatus.
    set -l normal (set_color normal)
    set -q fish_color_status
    or set -g fish_color_status red
    set -l os

    # Color the prompt differently when we're root
    set -l color_cwd $fish_color_cwd
    set -l suffix ''
    if functions -q fish_is_root_user; and fish_is_root_user
        if set -q fish_color_cwd_root
            set color_cwd $fish_color_cwd_root
        end
        set suffix ''
    end

    # Write pipestatus
    # If the status was carried over (if no command is issued or if `set` leaves the status untouched), don't bold it.
    set -l bold_flag --bold
    set -q __fish_prompt_status_generation; or set -g __fish_prompt_status_generation $status_generation
    if test $__fish_prompt_status_generation = $status_generation
        set bold_flag
    end
    set __fish_prompt_status_generation $status_generation
    set -l status_color (set_color $fish_color_status)
    set -l statusb_color (set_color $bold_flag $fish_color_status)
    set -l prompt_status (__fish_print_pipestatus "[exit: " "]" "|" "$status_color" "$statusb_color" $last_pipestatus)

    # os icon
    switch (string split '=' (grep "^NAME=" /etc/os-release) | sed 's/"//g')[2]
        case "Arch Linux"
            set os ""
        case NixOS
            set os ""
        case "Debian GNU/Linux"
            set os ""
        case "Fedora Linux"
            set os ""
        case Gentoo
            set os ""
        case "Pop!_OS"
            set os ""
        case postmarketOS
            set os ""
        case SteamOS
            set os ""
        case Ubuntu
            set os ""
        case Void
            set os ""
        case "Zorin OS"
            set os ""
        case "Nobara Linux"
            set os ""
    end
    set os $os " " # adds the spacer

    # version control system, sed to remove parenthesis
    set -l vcs " "(fish_vcs_prompt | sed 's/(//g;s/)//g')

    # rewriting pwd
    set -l pwd
    set -l base (path basename $PWD)
    set -l parent (string split / $PWD)[2]
    if string match -q '~*' (prompt_pwd) # all paths beginning in ~
        if string match -q '~' (prompt_pwd) # paths only ~
            set pwd '~'
        else if string match -q (string join '' '~/' $base) (prompt_pwd) # paths ~/base
            set pwd '~/' $base
        else # paths ~/../base
            set pwd '~/.. ../' $base
        end
    else # all system paths
        if string match -q / (prompt_pwd) # paths only /
            set pwd /
        else if string match -q (string join '' '/' $base) (prompt_pwd) # paths /base
            set pwd $base
        else if string match -q (string join '' '/' $parent '/' $base) $PWD # paths /parent/base
            set pwd $parent / $base
        else # paths /parent/../base
            set pwd $parent '/..  ../' $base
        end
    end

    set -l prompt_time
    set -l duration $CMD_DURATION
    # convert command duration to human readable time
    if test $duration -lt 60000 # 1 min
        set prompt_time (math $duration / 1000) s
    else if test $duration -lt 3600000 # 1 hour
        set prompt_time (math floor\($duration / 60000\)) 'm ' (math \($duration % 60000\) / 1000) s
    else # more than 1h
        set prompt_time (math floor\($duration / 3600000\)) 'h ' (math floor\(\($duration % 3600000\) / 60000\)) 'm ' (math \(\($duration % 3600000\) % 60000\) / 1000) s
    end

    set -l prompt
    # decides look if transient, or current
    if contains -- --final-rendering $argv
        # transient
        set prompt $os $suffix " "
    else
        # current
        set prompt $os (prompt_login)' ' (set_color $color_cwd) $pwd $normal $vcs $normal " "$suffix " "
    end

    # Final print
    if test $CMD_DURATION -gt 30000
        echo -s '[elapsed: ' $prompt_time ']'
    end
    if string length -q -- $prompt_status
        echo -s $prompt_status # prints exit status if on line before if available
    end
    echo -n -s $prompt
end
