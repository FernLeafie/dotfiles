# Fern Snowleafie's Dotfiles
Dotfiles made for Niri and more, with an amoled theme based on catppuccin mocha.

Also features an extensively configured Neovim configuration.
## Theme
A customised version of catppuccin mocha focused on a more amoled aesthetic, combined with the Maple Mono font

Generally just a mess
 - Colours - [Catppuccin mocha](https://catppuccin.com/)
 - Font - [Maple Mono](https://github.com/subframe7536/maple-font)
 - Icons - [Papirus Dark](https://github.com/PapirusDevelopmentTeam/papirus-icon-theme)
 - Cursor - [Breeze](https://github.com/KDE/breeze/tree/master/cursors)

## Programmes

### Defaults
 - Kitty - Terminal
 - Dolphin - File manager
 - Waybar - Status bar
 - Firefox - Browser
 - Swaync - Notification panel
 - Rofi - Application launcher

### Soft Dependencies/Requirements
Not necessarily needed, but scripts that rely on them wont work as expected without them
#### General 
 - kbuildsyscoca6 - Required for the dolphin "open with" option to work under Niri (possibly not anymore, but I can't reproduce my solution)
 - qt5ct + qt6ct-kde - Required for QT theming under Niri
#### Waybar
 - playerctl - Media control
 - mpdris2-rs - Makes mpd work with mpris, required for playerctl (getting replaced with rmpcd when that ships to repos)
 - pacman-contrib - Required for the waybar updates module
 - wttrbar - Waybars weather module (sourcing from wttr.in)
 - ddcutil - Waybars brightness control for external screens
#### Rofi
 - cliphist - Required for the clipboard history menu
 - rofimoji - Rofi emoji selector
 - rofi-calc - rofi calculator menu

## User Customisation
### Niri
- Change the display configuration to match your own
- Change the keyboard layout and variant to match your own
### Waybar
`.config/waybar/modules.jsonc`
- Comment out unwanted modules
- Edit the `--bus <number>` under custom/brightness to match the i2c busses your screens are mapped to 
  - (easiest way to find out which are which is just to try `ddcutil --bus <number> getvcp 10` until you find the bus responding)
  - for multiple screens, set up the command to run once per bus with `&&` between

## Niri Keybinds
### Basic Window Management
| Key Combination | Action |
|-----------------|--------|
| <kbd>Super</kbd> + <kbd>LMB</kbd> | Move window |
| <kbd>Super</kbd> + <kbd>RMB</kbd> | Resize window |
| <kbd>Super</kbd> + <kbd>MMB</kbd> | Scroll window feed |
| <kbd>Super</kbd> + <kbd>Q</kbd> | Kill active window |
| <kbd>Super</kbd> + <kbd>D</kbd> | Toggle floating mode |
| <kbd>Super</kbd> + <kbd>F</kbd> | Toggle full screen |
| <kbd>Super</kbd> + <kbd>R</kbd> | Resize column width |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> | Resize column height  |
| <kbd>Super</kbd> + <kbd>O</kbd> | Toggle overview |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd> | Toggle keybind  |


### Applications
| Key Combination | Action |
|-----------------|--------|
| <kbd>Super</kbd> + <kbd>Return</kbd> | Launch terminal (`Kitty`) |
| <kbd>Super</kbd> + <kbd>Space</kbd> | Open application launcher (`Rofi drun`) |
| <kbd>Super</kbd> + <kbd>E</kbd> | Launch file manager (`Dolphin`) |
| <kbd>Super</kbd> + <kbd>B</kbd> | Launch browser (`Firefox`) |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> | Launch browser (`qutebrowser`) |
| <kbd>PrtSc</kbd> | Take screenshot (`Grim + Slurp`)|
| <kbd>Super</kbd> + <kbd>N</kbd> | Launch wallpaper picker (`Custom`) |

### Rofi Scripts
| Key Combination | Action |
|-----------------|--------|
| <kbd>Super</kbd> + <kbd>V</kbd> | Open clipboard manager (`cliphist.sh`) |
| <kbd>Super</kbd> + <kbd>X</kbd> | Open Rofi calculator (`calc.sh`) |

### Window Management
#### Window Navigation
| Key Combination | Action |
|-----------------|--------|
| <kbd>Super</kbd> + <kbd>H</kbd> | Move focus left |
| <kbd>Super</kbd> + <kbd>J</kbd> | Move focus up |
| <kbd>Super</kbd> + <kbd>K</kbd> | Move focus down |
| <kbd>Super</kbd> + <kbd>L</kbd> | Move focus right |

#### Window Resizing
| Key Combination | Action |
|-----------------|--------|
| <kbd>Super</kbd> + <kbd>Minus</kbd> | Decrease column width |
| <kbd>Super</kbd> + <kbd>Plus</kbd> | Increase column width |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>Minus</kbd> | Decrease window height |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>Plus</kbd> | Increase window height |

#### Window Arrangement
| Key Combination | Action |
|-----------------|--------|
| <kbd>Super</kbd> + <kbd>Control</kbd> + <kbd>H</kbd> | Move window left |
| <kbd>Super</kbd> + <kbd>Control</kbd> + <kbd>J</kbd> | Move window up |
| <kbd>Super</kbd> + <kbd>Control</kbd> + <kbd>K</kbd> | Move window down |
| <kbd>Super</kbd> + <kbd>Control</kbd> + <kbd>L</kbd> | Move window right |

### Workspaces
| Key Combination | Action |
|-----------------|--------|
| <kbd>Super</kbd> + <kbd>U</kbd> | Switch to next workspace |
| <kbd>Super</kbd> + <kbd>I</kbd> | Switch to previous workspace |
| <kbd>Super</kbd> + <kbd>1</kbd> | Switch to workspace 1 |
| <kbd>Super</kbd> + <kbd>2</kbd> | Switch to workspace 2 |
| <kbd>Super</kbd> + <kbd>3</kbd> | Switch to workspace 3 |
| <kbd>Super</kbd> + <kbd>4</kbd> | Switch to workspace 4 |
| <kbd>Super</kbd> + <kbd>5</kbd> | Switch to workspace 5 |
| <kbd>Super</kbd> + <kbd>6</kbd> | Switch to workspace 6 |
| <kbd>Super</kbd> + <kbd>7</kbd> | Switch to workspace 7 |
| <kbd>Super</kbd> + <kbd>8</kbd> | Switch to workspace 8 |
| <kbd>Super</kbd> + <kbd>9</kbd> | Switch to workspace 9 |

| Key Combination | Action |
|-----------------|--------|
| <kbd>Super</kbd> + <kbd>Control</kbd> + <kbd>U</kbd> | Move window to next workspace |
| <kbd>Super</kbd> + <kbd>Control</kbd> + <kbd>I</kbd> | Move window to previous workspace |
| <kbd>Super</kbd> + <kbd>Control</kbd> + <kbd>1</kbd> | Move window to workspace 1 |
| <kbd>Super</kbd> + <kbd>Control</kbd> + <kbd>2</kbd> | Move window to workspace 2 |
| <kbd>Super</kbd> + <kbd>Control</kbd> + <kbd>3</kbd> | Move window to workspace 3 |
| <kbd>Super</kbd> + <kbd>Control</kbd> + <kbd>4</kbd> | Move window to workspace 4 |
| <kbd>Super</kbd> + <kbd>Control</kbd> + <kbd>5</kbd> | Move window to workspace 5 |
| <kbd>Super</kbd> + <kbd>Control</kbd> + <kbd>6</kbd> | Move window to workspace 6 |
| <kbd>Super</kbd> + <kbd>Control</kbd> + <kbd>7</kbd> | Move window to workspace 7 |
| <kbd>Super</kbd> + <kbd>Control</kbd> + <kbd>8</kbd> | Move window to workspace 8 |
| <kbd>Super</kbd> + <kbd>Control</kbd> + <kbd>9</kbd> | Move window to workspace 9 |

## To-Do's
- Wait for wifey's quickshell configs, or write some together with her
- Rewrite configs in nix?

## Credits
- The waybar configuration is based on https://github.com/notdanna/hypr.dots
- The rofi configuration is based on the one found in https://github.com/notdanna/hypr.dots
- Catppuccin
- My lovely wife [Kyoko](https://github.com/CodedKyoko) for the fastfetch and oh-my-posh config - and lots more <3

### Backgrounds
All amazing artists with lots of beautiful background material (if any of these credits are incorrect, please correct me)
- T5 [Twitter](https://x.com/thornsdance) [pixiv](https://www.pixiv.net/en/users/4819066) [artstation](https://www.artstation.com/thornsdance)
- Cogecha [Twitter](https://x.com/BARD713) [pixiv](https://www.pixiv.net/en/users/12845810) (Rest in peace)
- Shapoko [Twitter](https://x.com/shapoco) [pixiv](https://www.pixiv.net/en/users/24431887) [Bluesky](https://bsky.app/profile/shapoco.net) [website](https://www.shapoco.net/)
- Neko [Twitter](https://x.com/Neko_4cfantasy) [pixiv](https://www.pixiv.net/en/users/2600911)
- inee [twitter](https://x.com/inee) [pixiv](https://www.pixiv.net/en/users/45059236)
- Datsha [twitter](https://x.com/S2_Datsha) [pixiv](https://www.pixiv.net/en/users/45015081)
