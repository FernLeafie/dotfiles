function wallpaper
    set -l directory "Documents/Backgrounds"
    set -l theme "catppuccin"
    set -l location (string join '/' $HOME $directory $theme '')
    set wallpaper (ls $location | sed 's/\.[^.]*$//g; s#^([^/]*/)*##g; /.*-[0-9]$/d' | fzf --preview "~/.config/scripts/fzf-preview.sh (find $location -name '{}.*')" --preview-window up:follow)
    set -l multiScreenWallpaper (ls $location | sed 's/\.[^.]*$//g' | grep "$wallpaper-[0-9]")
    if string length -q $multiScreenWallpaper
        swww img -o DP-1 (find $location -name "$multiScreenWallpaper[1]*")
        swww img -o DP-2 (find $location -name "$multiScreenWallpaper[2]*")
    else
        swww img (find $location -name "$wallpaper*")
    end
end
