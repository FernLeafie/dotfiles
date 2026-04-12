vim.loader.enable()

local gh = require('gh')
vim.pack.add({
	gh('sitiom/nvim-numbertoggle'),
	gh('numToStr/Comment.nvim'),
	gh('lewis6991/gitsigns.nvim'),
	gh('saghen/blink.indent'),
})

require('Comment').setup()

-- General settings
vim.g.mapleader = ' '
vim.g.maplocalleader = '\\'

local options = {
	showmode = false, -- not needed due to lualine
	clipboard = 'unnamedplus', -- uses the system clipboard
	ttyfast = true, -- faster scrolling
	smoothscroll = true,

	number = true, -- numbering lines
	relativenumber = true,
	cursorline = true,

	expandtab = true,
	tabstop = 2,
	softtabstop = 2,
	shiftwidth = 2,

	autoindent = true,

	completeopt = { 'menuone', 'noselect' },
}

for k, v in pairs(options) do
	vim.opt[k] = v
end

vim.diagnostic.config({
	signs = false,
})

-- creates a custom command for force restart since :restart! isn't a thing
vim.api.nvim_create_user_command('Restart', '%bdelete! | restart', {desc = 'Force restart'} )

-- General keymaps
-- Move block
vim.keymap.set('v', 'J', ":m '>+1<CR>gv=gv", { desc = 'Move visual block up' })
vim.keymap.set('v', 'K', ":m '<-2<CR>gv=gv", { desc = 'Move visual block down' })

vim.keymap.set('n', 'J', 'mzJ`z', { desc = 'Append following line' })

-- Paste without overwriting register
vim.keymap.set('x', '<leader>p', [['_dP]], { desc = 'Paste while perserving clipboard' })

-- Replace word under cursor across the entire buffer
vim.keymap.set('n', '<leader>s', [[:%s/\<<C-r><C-w>\>/<C-r><C-w>/gI<Left><Left><Left>]], { desc = 'Replace word under cursor' })
