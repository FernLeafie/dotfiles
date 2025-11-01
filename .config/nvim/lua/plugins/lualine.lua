return {
    'nvim-lualine/lualine.nvim',
    dependencies = { 'nvim-tree/nvim-web-devicons' },
    config = function()
        require('lualine').setup {
            options = {
                icons_enabled = true,
                theme = 'catppuccin',
                component_separators = { left = '', right = ''},
                section_separators = { left = '', right = ''},
                disabled_filetypes = {
                    statusline = {},
                    winbar = {},
                },
                ignore_focus = {},
                always_divide_middle = true,
                always_show_tabline = true,
                globalstatus = true,
                refresh = {
                    statusline = 1000,
                    tabline = 1000,
                    winbar = 1000,
                    refresh_time = 16, -- ~60fps
                    events = {
                        'WinEnter',
                        'BufEnter',
                        'BufWritePost',
                        'SessionLoadPost',
                        'FileChangedShellPost',
                        'VimResized',
                        'Filetype',
                        'CursorMoved',
                        'CursorMovedI',
                        'ModeChanged',
                    },
                }
            },
            sections = {
                lualine_a = {{'mode', icon = ''}},
                lualine_b = {
                    {
                        'filetype', 
                        coloured = true, 
                        icon_only = true, 
                        separator = "", 
                        padding = { left = 1, right = 0}
                    },
                    {
                        'filename', 
                        separator = nil, 
                        padding = { left = 0, right = 1},
                        symbols = { modified = ' ', readonly = ' ', unnamed = ' ', newfile = ' '}
                    }
                },
                lualine_c = {'branch', 
                    {
                        "diff",
                        colored = true,
                        symbols = { added = " ", modified = " ", removed = " " },
                    }, 
                },
                lualine_x = {--[[ 'encoding', 'fileformat',]]
                    {
                        "diagnostics",
                        sources = { "nvim_diagnostic" },
                        sections = { "error", "warn" },
                        symbols = { error = " ", warn = " " },
                        colored = true,
                        update_in_insert = false,
                        always_visible = true,
                        cond = function()
                            return vim.bo.filetype ~= "markdown"
                        end,
                    },
                    'filetype'
                },
                lualine_y = {'progress'},
                lualine_z = {'location'}
            },
            inactive_sections = {
                lualine_a = {},
                lualine_b = {},
                lualine_c = {'filename'},
                lualine_x = {'location'},
                lualine_y = {},
                lualine_z = {}
            },
            tabline = {},
            winbar = {},
            inactive_winbar = {},
            extensions = {'nvim-tree', 'fern'}
        }
    end
}

