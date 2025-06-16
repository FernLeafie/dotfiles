#!/usr/bin/env bash
#
# Menu with Rofi to control recordings (full screen, region, stop).
# Internally calls "record.sh".
#
# Adjust the paths according to your preferences.

# Path to your recording script
RECORD_SCRIPT="$HOME/.config/hypr/scripts/record.sh"

# Path to your theme for Rofi (.rasi file)
ROFI_THEME="$HOME/.config/rofi/record/config.rasi"

# Options to display in the menu
# You can change the icons to others of your choice (Nerd Fonts, FontAwesome, etc.)
options="󰍹  Full screen\n󰆞  Select Region\n  Stop Recording"

# Call rofi to display the menu
# -dmenu = drop-down menu
# -p = prompt (text on the left)
# -theme = load the custom .rasi
choice="$(echo -e "$options" | rofi -dmenu -p "Recording" -theme "$ROFI_THEME" -selected-row 0)"

# We act according to the user's choice
case "$choice" in
    "󰍹  Full screen")
        "$RECORD_SCRIPT" fullscreen
        ;;
    "󰆞  Select Region")
        "$RECORD_SCRIPT" section
        ;;
    "  Stop Recording")
        "$RECORD_SCRIPT" stop
        ;;
    *)
        # If the menu is closed or something unexpected is chosen
        exit 0
        ;;
esac
