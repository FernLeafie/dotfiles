local gh = require('gh')
vim.pack.add({
	gh('nvim-tree/nvim-web-devicons'),
	gh('lewis6991/gitsigns.nvim'),
	gh('romgrk/barbar.nvim'),
})

vim.g.barbar_auto_setup = false

require('barbar').setup({
	auto_hide = 1,
	icons = {
		button = '',
		diagnostics = {
			[vim.diagnostic.severity.ERROR] = { enabled = true, icon = ' ' },
		},
		-- gitsigns = {
		-- 	added = { enabled = true, icon = ' ' },
		-- 	changed = { enabled = true, icon = ' ' },
		-- 	deleted = { enabled = true, icon = ' ' },
		-- },
		pinned = { button = '', filename = true },
	},
})

-- buffers
vim.keymap.set('n', '<S-l>', '<Cmd>bnext<CR>', { desc = 'Next buffer' })
vim.keymap.set('n', '<S-h>', '<Cmd>bprevious<CR>', { desc = 'Previous buffer' })
vim.keymap.set('n', '<leader>bq', '<Cmd>BufferClose<CR>', { desc = 'Close buffer' })
vim.keymap.set('n', '<leader>bQ', '<Cmd>BufferClose!<CR>', { desc = 'Force close buffer' })
vim.keymap.set('n', '<leader>bU', '<Cmd>:bufdo bd<CR>', { desc = 'Close all buffers' })
vim.keymap.set('n', '<leader>bvs', '<Cmd>vsplit<CR><Cmd>bnext<CR>', { desc = 'Open next buffer in vsplit' })

-- buffer position navigation + reorder
vim.keymap.set('n', '<AS-h>', '<Cmd>BufferMovePrevious<CR>')
vim.keymap.set('n', '<AS-l>', '<Cmd>BufferMoveNext<CR>')
vim.keymap.set('n', '<A-1>', '<Cmd>BufferGoto 1<CR>')
vim.keymap.set('n', '<A-2>', '<Cmd>BufferGoto 2<CR>')
vim.keymap.set('n', '<A-3>', '<Cmd>BufferGoto 3<CR>')
vim.keymap.set('n', '<A-4>', '<Cmd>BufferGoto 4<CR>')
vim.keymap.set('n', '<A-5>', '<Cmd>BufferGoto 5<CR>')
vim.keymap.set('n', '<A-6>', '<Cmd>BufferGoto 6<CR>')
vim.keymap.set('n', '<A-7>', '<Cmd>BufferGoto 7<CR>')
vim.keymap.set('n', '<A-8>', '<Cmd>BufferGoto 8<CR>')
vim.keymap.set('n', '<A-9>', '<Cmd>BufferGoto 9<CR>')
vim.keymap.set('n', '<A-0>', '<Cmd>BufferLast<CR>')
vim.keymap.set('n', '<A-p>', '<Cmd>BufferPin<CR>')
