local gh = require('gh')
vim.pack.add({
	gh('nvim-tree/nvim-web-devicons'),
	gh('nanozuki/tabby.nvim'),
})

-- future improvements
-- - filter out nvimtree from tab name
-- - figure out unique filenames sometimes not working
-- - possibly shorten unique filenames like fish

local mocha = require('catppuccin.palettes').get_palette('mocha')
local theme = {
	fill = 'TabLineFill',
	head = { fg = mocha.crust, bg = mocha.yellow, style = 'italic' },
	current_tab = { fg = mocha.crust, bg = mocha.mauve, style = 'italic' },
	tab = { fg = mocha.mauve, bg = mocha.surface0, style = 'normal' },
	win = { fg = mocha.mauve, bg = mocha.surface0, style = 'normal' },
	modified = { fg = mocha.teal, bg = mocha.surface0, style = 'normal' },
	warning = { fg = mocha.yellow, bg = mocha.surface0, style = 'normal' },
	danger = { fg = mocha.red, bg = mocha.surface0, style = 'normal' },
	tail = { fg = mocha.mauve, bg = mocha.surface0, style = 'italic' },
}

local function tab_modified(tab)
	local wins = require('tabby.module.api').get_tab_wins(tab)
	for i, x in pairs(wins) do
		if vim.bo[vim.api.nvim_win_get_buf(x)].modified then
			return '●'
		end
	end
	return ''
end

local function lsp_diag(buf)
	local diagnostics = vim.diagnostic.get(buf)
	local count = { 0, 0, 0, 0 }

	for _, diagnostic in ipairs(diagnostics) do
		count[diagnostic.severity] = count[diagnostic.severity] + 1
	end
	if count[1] > 0 then
		return vim.bo[buf].modified and '' or ''
	elseif count[2] > 0 then
		return vim.bo[buf].modified and '' or ''
	end
	return vim.bo[buf].modified and '●' or ''
end

require('tabby').setup({
	line = function(line)
		return {
			{
				{ '  ', hl = theme.head },
				line.sep('', theme.head, theme.fill),
			},
			line.tabs().foreach(function(tab)
				local hl = tab.is_current() and theme.current_tab or theme.tab
				return {
					line.sep('', hl, theme.fill),
					tab.in_jump_mode() and tab.jump_key() or tab.number(),
					-- gets the icon of the currently open win in tab
					-- tab.current_win().file_icon() might work instead
					-- but then there's no possibility of future granularity
					tab.wins().foreach(function(win)
						if win.is_current() == true then
							return win.file_icon()
						else
							return ''
						end
					end),
					tab.name(),
					tab.close_btn(tab_modified(tab.id)),
					line.sep('', hl, theme.fill),
					hl = hl,
					margin = ' ',
				}
			end),
			line.spacer(),
			line
				.wins_in_tab(line.api.get_current_tab())
				-- filters out nvimtree
				.filter(function(win)
					if string.find(win.buf_name(), 'NvimTree') then
						return false
					else
						return true
					end
				end)
				.foreach(function(win)
					local hl = theme.win
					-- sets the window highlight depending on lsp status
					local lsp = lsp_diag(win.buf().id)
					if lsp == '' or lsp == '' then
						hl = theme.danger
					elseif lsp == '' or lsp == '' then
						hl = theme.warning
					elseif lsp == '●' then
						hl = theme.modified
					end
					return {
						line.sep('', theme.win, theme.fill),
						win.file_icon(),
						win.buf_name(),
						lsp,
						line.sep('', theme.win, theme.fill),
						hl = hl,
						margin = ' ',
					}
				end),
			{
				line.sep('', theme.tail, theme.fill),
				{ '  ', hl = theme.tail },
			},
			hl = theme.fill,
		}
	end,
	option = {
		buf_name = {
			mode = 'unique', -- or 'relative', 'tail', 'shorten'
		},
	},
})

-- buffers
vim.keymap.set('n', '<leader>bn', '<Cmd>bnext<CR>', { desc = 'Next buffer' })
vim.keymap.set('n', '<leader>bp', '<Cmd>bprevious<CR>', { desc = 'Previous buffer' })
vim.keymap.set('n', '<leader>bq', '<Cmd>BufferClose<CR>', { desc = 'Close buffer' })
vim.keymap.set('n', '<leader>bQ', '<Cmd>BufferClose!<CR>', { desc = 'Force close buffer' })
vim.keymap.set('n', '<leader>bU', '<Cmd>:bufdo bd<CR>', { desc = 'Close all buffers' })
vim.keymap.set('n', '<leader>bvs', '<Cmd>vsplit<CR><Cmd>bnext<CR>', { desc = 'Open next buffer in vsplit' })
-- tabs
vim.api.nvim_set_keymap('n', '<leader>ta', '<Cmd>$tabnew<CR>', { noremap = true, desc = 'New tab' })
vim.api.nvim_set_keymap('n', '<leader>tc', '<Cmd>tabclose<CR>', { noremap = true, desc = 'Close tab' })
vim.api.nvim_set_keymap('n', '<leader>tj', '<Cmd>Tabby jump_to_tab<CR>', { noremap = true, desc = 'Tab jump mode' })
vim.api.nvim_set_keymap('n', '<leader>tf', '<Cmd>Tabby pick_window<CR>', { noremap = true, desc = 'Find tab' })
vim.api.nvim_set_keymap('n', '<leader>to', '<Cmd>tabonly<CR>', { noremap = true, desc = 'Close all other tabs' })
vim.api.nvim_set_keymap('n', '<leader>tn', '<Cmd>tabn<CR>', { noremap = true, desc = 'Next tab' })
vim.api.nvim_set_keymap('n', '<leader>tp', '<Cmd>tabp<CR>', { noremap = true, desc = 'Previous tab' })
vim.api.nvim_set_keymap('n', '<S-l>', '<Cmd>tabn<CR>', { noremap = true, desc = 'Next tab' })
vim.api.nvim_set_keymap('n', '<S-h>', '<Cmd>tabp<CR>', { noremap = true, desc = 'previous tab' })
-- move current tab to previous position
vim.api.nvim_set_keymap('n', '<leader>tmp', '<Cmd>-tabmove<CR>', { noremap = true, desc = 'Move tab back' })
-- move current tab to next position
vim.api.nvim_set_keymap('n', '<leader>tmn', '<Cmd>+tabmove<CR>', { noremap = true, desc = 'Move tab forward' })
