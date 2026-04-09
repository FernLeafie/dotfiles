return { --[[
    'vyfor/cord.nvim',
    build = ':Cord update',
    -- opts = {}
    config = function()
        -- vim.g.cord_defer_startup = true
        display.theme = 'default'
        display.flavor = 'accent'
        text = {
            editing = 'Editing a file',
            viewing = 'Viewing a file',
            workspace = 'In a workspace',
        }
    vim.keymap.set('n', '<C-d>', ':Cord toggle', {})
        vim.cmd "Cord disable"
    end ]]
}
