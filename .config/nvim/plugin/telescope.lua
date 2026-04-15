local gh = require('gh')
vim.pack.add({
	gh('nvim-telescope/telescope-ui-select.nvim'),
	gh('nvim-telescope/telescope.nvim'),
	gh('nvim-lua/plenary.nvim'),
	gh('rachartier/tiny-code-action.nvim'),
})

require('telescope').setup({
	extensions = {
		['ui-select'] = {
			require('telescope.themes').get_dropdown({}),
		},
	},
})

local builtin = require('telescope.builtin')
vim.keymap.set('n', '<C-p>', builtin.find_files, { desc = 'Find files' })
vim.keymap.set('n', '<leader>fg', builtin.live_grep, { desc = 'Find with grep' })
vim.keymap.set('n', '<leader><leader>', builtin.oldfiles, { desc = 'Find old files' })

-- LSP thingies
vim.keymap.set('n', '<leader>gd', builtin.lsp_definitions, { desc = 'Show LSP definitions' })
vim.keymap.set('n', '<leader>gr', builtin.lsp_references, { desc = 'Show LSP references' })
vim.keymap.set('n', '<leader>gi', builtin.lsp_implementations, { desc = 'Go to implementation' })
vim.keymap.set('n', '<leader>ds', builtin.diagnostics, { desc = 'Show LSP diagnostics' })
require('telescope').load_extension('ui-select')

require('tiny-code-action').setup({
	backend = 'delta',
	picker = 'telescope',
	backend_opts = {
		delta = {
			header_lines_to_remove = 4,
			args = {
				'--line-numbers',
			},
		},
	},
})

vim.keymap.set({ 'n', 'x' }, '<leader>ca', function()
	require('tiny-code-action').code_action()
end, { noremap = true, silent = true, desc = 'View code actions' })
