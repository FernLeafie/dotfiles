-- creates a custom command for force restart since :restart! isn't a thing
vim.api.nvim_create_user_command('Restart', function()
	vim.cmd([[
  bdelete!
  restart
  ]])
end, { desc = 'Force restart' })

-- General keymaps
-- Move block
vim.keymap.set('v', 'J', ":m '>+1<CR>gv=gv", { desc = 'Move visual block up' })
vim.keymap.set('v', 'K', ":m '<-2<CR>gv=gv", { desc = 'Move visual block down' })

vim.keymap.set('n', 'J', 'mzJ`z', { desc = 'Append following line' })

-- Paste without overwriting register
vim.keymap.set('x', '<leader>p', [['_dP]], { desc = 'Paste while perserving clipboard' })

-- Replace word under cursor across the entire buffer
vim.keymap.set(
	'n',
	'<leader>s',
	[[:%s/\<<C-r><C-w>\>/<C-r><C-w>/gI<Left><Left><Left>]],
	{ desc = 'Replace word under cursor' }
)

vim.keymap.set("n", "<C-h>", "<C-w>h")
vim.keymap.set("n", "<C-j>", "<C-w>j")
vim.keymap.set("n", "<C-k>", "<C-w>k")
vim.keymap.set("n", "<C-l>", "<C-w>l")
