#
# ~/.bashrc
#
[[ $- == *i* ]] && source ~/.local/share/blesh/ble.sh --noattach
# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='lsd'
alias cat='bat'
alias grep='grep --color=auto'
PS1='[\u@\h \W]\$ '

ble-import -d integration/fzf-completion
ble-import -d integration/fzf-key-bindings

fastfetch
eval "$(oh-my-posh init bash --config https://github.com/JanDeDobbeleer/oh-my-posh/blob/main/themes/catppuccin_mocha.omp.json)"
bleopt prompt_ps1_transient=">"
bleopt prompt_ps1_final="  "

export FZF_DEFAULT_OPTS=" \
--color=bg+:#313244,bg:#000000,spinner:#F5E0DC,hl:#F38BA8 \
--color=fg:#CDD6F4,header:#F38BA8,info:#CBA6F7,pointer:#F5E0DC \
--color=marker:#B4BEFE,fg+:#CDD6F4,prompt:#CBA6F7,hl+:#F38BA8 \
--color=selected-bg:#45475A \
--color=border:#313244,label:#CDD6F4"

#----------------------------------
# catppuccin mocha theme for ble.sh
#----------------------------------

# catppuccin mocha
ble-face -s argument_error bg=#f38ba8,fg=#11111b  # Red background, Crust foreground for better contrast
ble-face -s argument_option fg=#f2cdcd,italic  # Flamingo
ble-face -s auto_complete fg=#9399b2,italic  # Overlay2
ble-face -s cmdinfo_cd_cdpath fg=#89b4fa,bg=#11111b,italic  # Blue, Crust
ble-face -s command_alias fg=#b4befe  # Lavender
ble-face -s command_builtin fg=#fab387  # Peach
ble-face -s command_directory fg=#89b4fa  # Blue
ble-face -s command_file fg=#b4befe  # Lavender
ble-face -s command_function fg=#b4befe  # Lavender
ble-face -s command_keyword fg=#cba6f7  # Mauve
ble-face -s disabled fg=#9399b2  # Overlay2
ble-face -s filename_directory fg=#89b4fa  # Blue
ble-face -s filename_directory_sticky fg=#11111b,bg=#a6e3a1  # Crust, Green
ble-face -s filename_executable fg=#a6e3a1,bold  # Green
ble-face -s filename_ls_colors none
ble-face -s filename_orphan fg=#89dceb,bold  # Sky
ble-face -s filename_other none
ble-face -s filename_setgid fg=#11111b,bg=#f9e2af,underline  # Crust, Yellow
ble-face -s filename_setuid fg=#11111b,bg=#fab387,underline  # Crust, Peach
ble-face -s menu_filter_input fg=#11111b,bg=#f9e2af  # Crust, Yellow
ble-face -s overwrite_mode fg=#11111b,bg=#89dceb  # Crust, Sky
ble-face -s prompt_status_line bg=#9399b2  # Overlay2
ble-face -s region bg=#45475a  # Surface1
ble-face -s region_insert bg=#45475a  # Surface1
ble-face -s region_match fg=#11111b,bg=#f9e2af  # Crust, Yellow
ble-face -s region_target fg=#11111b,bg=#cba6f7  # Crust, Mauve
ble-face -s syntax_brace fg=#6c7086  # Overlay0
ble-face -s syntax_command fg=#b4befe  # Lavender
ble-face -s syntax_comment fg=#f9e2af  # Yellow
ble-face -s syntax_delimiter fg=#6c7086  # Overlay0
ble-face -s syntax_document fg=#f5e0dc,bold  # Rosewater
ble-face -s syntax_document_begin fg=#f5e0dc,bold  # Rosewater
ble-face -s syntax_error bg=#f38ba8,fg=#11111b  # Red background, Crust foreground for better contrast
ble-face -s syntax_escape fg=#f2cdcd  # Flamingo
ble-face -s syntax_expr fg=#cba6f7  # Mauve
ble-face -s syntax_function_name fg=#b4befe  # Lavender
ble-face -s syntax_glob fg=#fab387  # Peach
ble-face -s syntax_history_expansion fg=#b4befe,italic  # Lavender
ble-face -s syntax_param_expansion fg=#f38ba8  # Red
ble-face -s syntax_quotation fg=#a6e3a1  # Green
ble-face -s syntax_tilde fg=#cba6f7  # Mauve
ble-face -s syntax_varname fg=#f5e0dc  # Rosewater
ble-face -s varname_array fg=#fab387  # Peach
ble-face -s varname_empty fg=#fab387  # Peach
ble-face -s varname_export fg=#fab387  # Peach
ble-face -s varname_expr fg=#fab387  # Peach
ble-face -s varname_hash fg=#fab387  # Peach
ble-face -s varname_number fg=#f5e0dc  # Rosewater
ble-face -s varname_readonly fg=#fab387  # Peach
ble-face -s varname_transform fg=#fab387  # Peach
ble-face -s varname_unset bg=#f38ba8,fg=#11111b  # Red background, Crust foreground for better contrast
ble-face -s vbell_erase bg=#45475a  # Surface1

alias bottom=btm

eval "$(zoxide init --cmd cd bash)"

export PATH="$HOME/.cargo/bin:$PATH"

[[ ! ${BLE_VERSION-} ]] || ble-attach
