function wallpaper
    set -gx FZF_DEFAULT_OPTS " \
    --color=bg+:#313244,bg:#000000,spinner:#F5E0DC,hl:#F38BA8 \
    --color=fg:#CDD6F4,header:#F38BA8,info:#CBA6F7,pointer:#F5E0DC \
    --color=marker:#B4BEFE,fg+:#CDD6F4,prompt:#CBA6F7,hl+:#F38BA8 \
    --color=selected-bg:#45475A \
    --color=border:#313244,label:#CDD6F4"

    set -l directory Pictures/Wallpapers
    set -l theme (ls $directory | fzf)
    set -l location (string join '/' $HOME $directory $theme '')
    set wallpaper (ls $location | sed 's/\.[^.]*$//g; s#^([^/]*/)*##g; /.*-[0-9]$/d' | fzf --preview "~/.config/scripts/fzf-preview.sh (find $location -name '{}.*')" --preview-window up,70%:follow --layout=reverse)
    set -l multiScreenWallpaper (ls $location | sed 's/\.[^.]*$//g' | grep "$wallpaper-[0-9]")
    if string length -q $multiScreenWallpaper
        awww img --resize fit -o DP-1 (find $location -name "$multiScreenWallpaper[1]*")
        awww img --resize fit -o DP-2 (find $location -name "$multiScreenWallpaper[2]*")
    else
        awww img --resize fit (find $location -name "$wallpaper*")
    end
end
