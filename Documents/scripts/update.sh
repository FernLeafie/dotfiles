#!/bin/bash

sudo pacman -Syu
yay -Syu
flatpak update
cargo install-update -a
sudo pacman -Scc
sudo pacman -Rns $(pacman -Qdtq)
flatpak uninstall --unused
notify-send -i emblem-synchronizing-symbolic "Sysups" "Finished system update" -a "Sysups"
echo Done!
