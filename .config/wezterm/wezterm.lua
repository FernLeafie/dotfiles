local wezterm = require("wezterm")

local config = wezterm.config_builder()

local platform = package.config:sub(1,1)

if platform == '\\' then
    config.default_prog = { 'powershell.exe' }
elseif platform == '/' then
    -- (Linux|Unix) specific configs
end

local custom = wezterm.color.get_builtin_schemes()["Catppuccin Mocha"]
-- custom.background = "#000000"
-- custom.tab_bar.background = "#040404"
-- custom.tab_bar.inactive_tab.bg_color = "#0f0f0f"
-- custom.tab_bar.new_tab.bg_color = "#080808"

config.color_schemes = { ["Oledppuccin"] = custom, }
config.color_scheme = "Oledppuccin"
config.window_background_opacity = 0.8

config.font_size = 10
config.font = wezterm.font_with_fallback {
    'Maple Mono NF CN',
    -- 'FiraCode Nerd Font Propo',
    -- 'Source Han Sans JP',
}

config.enable_tab_bar = true
config.hide_tab_bar_if_only_one_tab = true
config.tab_bar_at_bottom = true
config.use_fancy_tab_bar = false
config.tab_max_width = 50

config.automatically_reload_config = true
config.window_close_confirmation = "NeverPrompt"

return config
