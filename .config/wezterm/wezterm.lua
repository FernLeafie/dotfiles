local wezterm = require("wezterm")

local custom = wezterm.color.get_builtin_schemes()["Catppuccin Mocha"]
custom.background = "#000000"
custom.tab_bar.background = "#040404"
custom.tab_bar.inactive_tab.bg_color = "#0f0f0f"
custom.tab_bar.new_tab.bg_color = "#080808"

return {
    color_schemes = {
        ["Oledppuccin"] = custom,
    },
    color_scheme = "Oledppuccin",
    window_background_opacity = 0.9,
    font = wezterm.font_with_fallback {
        'FiraCode Nerd Font Propo',
        'Source Han Sans JP',
    },
}
