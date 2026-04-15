vim.pack.add({ 'https://github.com/windwp/nvim-autopairs' })

local npairs = require('nvim-autopairs')

npairs.setup({
	ignored_next_char = '[%w%.]', -- will ignore alphanumeric and `.` symbol
	fast_wrap = {
		map = '<M-e>',
		chars = { '{', '[', '(', '"', "'" },
		pattern = [=[[%'%"%>%]%)%}%,]]=],
		end_key = '$',
		before_key = 'h',
		after_key = 'l',
		cursor_pos_before = true,
		keys = 'qwertyuiopzxcvbnmasdfghjkl',
		manual_position = true,
		highlight = 'Search',
		highlight_grey = 'Comment',
	},
	map_cr = true,
})
