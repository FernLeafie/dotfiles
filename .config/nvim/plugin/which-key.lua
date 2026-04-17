vim.pack.add({ 'https://github.com/folke/which-key.nvim' })

require('which-key').setup({
	preset = 'helix',
})

vim.keymap.set('n', '<leader>?', function()
	require('which-key').show({ global = false })
end, { desc = 'Buffer Local Keymaps (which-key)' })

local wk = require('which-key')
wk.add({
	{ '<leader>b', group = 'Buffers' },
	{ '<leader>c', group = 'Code actions' },
	{ '<leader>d', group = 'Debug and diagnostics' },
	{ '<leader>f', group = 'Find files' },
	{ '<leader>g', group = 'Lsp actions', icon = { icon = '', color = 'green'} },
})
