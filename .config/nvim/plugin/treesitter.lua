vim.api.nvim_create_autocmd('PackChanged', {
	callback = function(ev)
		local name, kind = ev.data.spec.name, ev.data.kind
		if name == 'nvim-treesitter' and kind == 'update' then
			if not ev.data.active then
				vim.cmd.packadd('nvim-treesitter')
			end
			vim.cmd('TSUpdate')
		end
	end,
})

vim.pack.add({
	'https://github.com/nvim-treesitter/nvim-treesitter',
	'https://github.com/nvim-treesitter/nvim-treesitter-context',
})

require('nvim-treesitter').install({
	'bash',
	'css',
	'html',
	'javascript',
	'json',
	'kdl',
	'lua',
	'markdown',
	'markdown_inline',
	'ron',
	'rust',
})

require('treesitter-context').setup({
	mode = 'topline',
	-- separator = '-',
})
vim.cmd('hi TreesitterContextBottom gui=underdouble guisp=#45475b')

vim.api.nvim_create_autocmd('FileType', {
	pattern = { '<filetype>' },
	callback = function()
		vim.treesitter.start()
		vim.bo.indentexpr = "v:lua.require'nvim-treesitter'.indentexpr()"
	end,
})
