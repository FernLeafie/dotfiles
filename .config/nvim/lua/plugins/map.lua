return {
    "gorbit99/codewindow.nvim",
    opts = {
        screen_bounds = 'background',
        window_border = 'double',
    },
    config = function()
        vim.api.nvim_set_hl(0, 'CodewindowBorder', {fg = '#45475b'})
        local codewindow = require('codewindow')
        codewindow.setup()
        codewindow.apply_default_keybinds()
    end,
}
