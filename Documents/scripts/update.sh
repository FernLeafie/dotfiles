#!/bin/bash

sudo pacman -Syu
yay -Syu
flatpak update
cargo install-update -a
yay -Scc
sudo pacman -Rns $(pacman -Qdtq)
yay -Yc
flatpak uninstall --unused
notify-send -i emblem-synchronizing-symbolic "Sysups" "Finished system update" -a "Sysups"
echo Done!
