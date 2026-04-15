local gh = require('gh')
vim.pack.add({
	gh('nvim-tree/nvim-web-devicons'),
	gh('lewis6991/gitsigns.nvim'),
	gh('romgrk/barbar.nvim'),
})

require('barbar').setup({
	auto_hide = 1,
})
