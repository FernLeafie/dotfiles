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
