# Fern Snowleafie's Dotfiles
Dotfiles made for both plasma and hyprland, with an amoled theme based on catppuccin mocha
## Theme
A customised version of catppuccin mocha focused on a more amoled aestetic, combined with the Fira Code font

Generally just a mess
 - Colours - [Catppuccin mocha](https://catppuccin.com/)
 - Font - [Fira Code](https://github.com/tonsky/FiraCode)
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

### Soft Dependancies/Requirements
Not necessarily needed, but scripts that rely on them wont work as expected without them
#### General 
 - kbuildsyscoca6 - Required for the dolphin "open with" option to work under hyprland
 - qt5ct + qt6ct-kde - Required for QT theming under hyprland
#### Waybar
 - playerctl - Media control
 - mpdris2-rs - Makes mpd work with mpris, required for playerctl
 - pacman-contrib - Required for the waybar updates module
 - wttrbar - Waybars weather module (sourcing from wttr.in)
 - ddcutil - Waybars brightness control for external screens
#### Rofi
 - cliphist - Required for the clipboard history menu
 - rofimoji - Rofi emoji selector
 - rofi-calc - rofi calculator menu

## User customisation
### Hyprland
- Change the display configuration to match your own
- Change the keyboard layout and variant to match your own
### Waybar
`.config/waybar/modules.jsonc`
- Comment out unwanted modules
- Edit the --bus <number> under custom/brightness to match the i2c busses your screens are mapped to 
  - (easiest way to find out which are which is just to try `ddcutil --bus <number> getvcp 10` until you find the bus responding)
  - for multiple screens, setup the command to run once per bus with `&&` between

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

### Applications
| Key Combination | Action |
|-----------------|--------|
| <kbd>Super</kbd> + <kbd>Return</kbd> | Launch terminal (`Kitty`) |
| <kbd>Super</kbd> + <kbd>Space</kbd> | Open application launcher (`Rofi drun`) |
| <kbd>Super</kbd> + <kbd>E</kbd> | Launch file manager (`Dolphin`) |
| <kbd>Super</kbd> + <kbd>B</kbd> | Launch browser (`Firefox`) |
| <kbd>PrtSc</kbd> | Take screenshot (`Hyprshot`)|

### Rofi scripts
| Key Combination | Action |
|-----------------|--------|
| <kbd>Super</kbd> + <kbd>Esc</kbd> | Open powermenu (`powermenu.sh`) |
| <kbd>Super</kbd> + <kbd>Period</kbd> | Open emojipicker (`emoji.sh`) |
| <kbd>Super</kbd> + <kbd>V</kbd> | Open clipboard manager (`cliphist.sh`) |
| <kbd>Super</kbd> + <kbd>C</kbd> | Open Rofi calculator (`calc.sh`) |

### Window management
#### Window navigation
| Key Combination | Action |
|-----------------|--------|
| <kbd>Super</kbd> + <kbd>H</kbd> | Move focus left |
| <kbd>Super</kbd> + <kbd>J</kbd> | Move focus up |
| <kbd>Super</kbd> + <kbd>K</kbd> | Move focus down |
| <kbd>Super</kbd> + <kbd>L</kbd> | Move focus right |

#### Window resizing
| Key Combination | Action |
|-----------------|--------|
| <kbd>Super</kbd> + <kbd>Left</kbd> | Move border left |
| <kbd>Super</kbd> + <kbd>Up</kbd> | Move border up |
| <kbd>Super</kbd> + <kbd>Down</kbd> | Move border down |
| <kbd>Super</kbd> + <kbd>Right</kbd> | Move border right |

#### Window arrangement
| Key Combination | Action |
|-----------------|--------|
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd> | Move window left |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>J</kbd> | Move window up |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd> | Move window down |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> | Move window right |

### Workspaces
| Key Combination | Action |
|-----------------|--------|
| <kbd>Super</kbd> + <kbd>1</kbd> | Switch to workspace 1 |
| <kbd>Super</kbd> + <kbd>2</kbd> | Switch to workspace 2 |
| <kbd>Super</kbd> + <kbd>3</kbd> | Switch to workspace 3 |
| <kbd>Super</kbd> + <kbd>4</kbd> | Switch to workspace 4 |
| <kbd>Super</kbd> + <kbd>5</kbd> | Switch to workspace 5 |
| <kbd>Super</kbd> + <kbd>6</kbd> | Switch to workspace 6 |
| <kbd>Super</kbd> + <kbd>7</kbd> | Switch to workspace 7 |
| <kbd>Super</kbd> + <kbd>8</kbd> | Switch to workspace 8 |
| <kbd>Super</kbd> + <kbd>9</kbd> | Switch to workspace 9 |
| <kbd>Super</kbd> + <kbd>0</kbd> | Switch to workspace 10 |
| <kbd>Super</kbd> + <kbd>S</kbd> | Switch to special workspace |

| Key Combination | Action |
|-----------------|--------|
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>1</kbd> | Move window to workspace 1 |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>2</kbd> | Move window to workspace 2 |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>3</kbd> | Move window to workspace 3 |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>4</kbd> | Move window to workspace 4 |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>5</kbd> | Move window to workspace 5 |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>6</kbd> | Move window to workspace 6 |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>7</kbd> | Move window to workspace 7 |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>8</kbd> | Move window to workspace 8 |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>9</kbd> | Move window to workspace 9 |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>0</kbd> | Move window to workspace 10 |
| <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> | Move window to special workspace |

## To-Do's
- Get logout menu
- Get idler
- Configure my own nvim

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
- inee [Twitter](https://x.com/inee) [pixiv](https://www.pixiv.net/en/users/45059236)
