#!/usr/bin/env fish

function sysups
  sudo pacman -Syu
  yay -Syu
  flatpak update
  cargo install-update -a
  if ls /var/cache/pacman/pkg/ | grep -q "^download-.*"
      sudo rmdir /var/cache/pacman/pkg/download-*
  end
  yay -Scc
  sudo pacman -Rns $(pacman -Qdtq)
  yay -Yc
  flatpak uninstall --unused
  notify-send -i emblem-synchronizing-symbolic "Sysups" "Finished system update" -a "Sysups"
  echo "Done!"
end
