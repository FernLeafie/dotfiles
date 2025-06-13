# Fern Snowleafie's Dotfiles
Dotfiles made for both plasma and hyprland, with an amoled theme based on catppuccin mocha

The waybar configuration is based on https://github.com/notdanna/hypr.dots

## Programmes

## Hyprland Keybinds

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
