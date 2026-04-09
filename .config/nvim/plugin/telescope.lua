local gh = require('gh')
vim.pack.add({ 
	gh('nvim-telescope/telescope-ui-select.nvim'),
	gh('nvim-telescope/telescope.nvim'),
	gh('nvim-lua/plenary.nvim'),
  gh('rachartier/tiny-code-action.nvim')
})


require('telescope').setup({
	extensions = {
		['ui-select'] = {
			require('telescope.themes').get_dropdown({}),
		},
	},
})

local builtin = require('telescope.builtin')
vim.keymap.set('n', '<C-p>', builtin.find_files, {})
vim.keymap.set('n', '<leader>fg', builtin.live_grep, {})
vim.keymap.set('n', '<leader><leader>', builtin.oldfiles, {})

-- lsp thingies
vim.keymap.set('n', '<leader>gd', builtin.lsp_definitions, {})
vim.keymap.set('n', '<leader>gr', builtin.lsp_references, {})
vim.keymap.set('n', '<leader>ds', builtin.diagnostics, {})
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
