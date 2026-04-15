local options = {
	showmode = false, -- not needed due to lualine
	clipboard = 'unnamedplus', -- uses the system clipboard
	ttyfast = true, -- faster scrolling
	smoothscroll = true,
	scrolloff = 8,

	number = true, -- numbering lines
	relativenumber = true,
	cursorline = true,
	-- winborder = 'rounded',

	expandtab = true,
	tabstop = 2,
	softtabstop = 2,
	shiftwidth = 2,

	autoindent = true,
	smartindent = true,

	foldmethod = 'indent',
	foldenable = true,
	foldlevel = 99,
	foldlevelstart = 99,
	fillchars = {
		eob = ' ',
		fold = ' ',
		foldsep = ' ',
		foldinner = ' ',
		foldopen = '',
		foldclose = '',
	},
	foldcolumn = '1',

	completeopt = { 'menuone', 'noselect' },
}

for k, v in pairs(options) do
	vim.opt[k] = v
end

vim.diagnostic.config({
	signs = false,
})
