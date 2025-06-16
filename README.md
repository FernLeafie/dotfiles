# Fern Snowleafie's Dotfiles
Dotfiles made for both plasma and hyprland, with an amoled theme based on catppuccin mocha

The waybar configuration is based on https://github.com/notdanna/hypr.dots

## Programmes
 - Kitty
 - Dolphin

### Requirements
 - mpdris2-rs - makes mpd work with mpris, required for playerctl
 - pacman-contrib - required for the waybar updates module
 
## Hyprland Keybinds

### Basic window management
| Key Combination | Action |
|-----------------|--------|
| <kbd>Super</kbd> + <kbd>LMB</kbd> | Move window |
| <kbd>Super</kbd> + <kbd>RMB</kbd> | Resize window |
| <kbd>Super</kbd> + <kbd>Q</kbd> | Kill active window |
| <kbd>Super</kbd> + <kbd>D</kbd> | Toggle floating mode |
| <kbd>Super</kbd> + <kbd>F</kbd> | Toggle fullscreen |
| <kbd>Super</kbd> + <kbd>P</kbd> | Toggle pseudo mode |
| <kbd>Super</kbd> + <kbd>N</kbd> | Toggle Split |

## User customisation
### waybar
`.config/waybar/modules.jsonc`
- Comment out unwanted modules
- Edit the --bus <number> under custom/brightness to match the i2c busses your screens are mapped to 
  - (easiest way to find out which are which is just to try `ddcutil --bus <number> getvcp 10` until you find the bus responding)
  - for multiple screens, setup the command to run once per bus with `&&` between

## To-Do's
- Configure Rofi
- Get logout menu
