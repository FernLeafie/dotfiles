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

require('config')
