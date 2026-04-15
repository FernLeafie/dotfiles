vim.pack.add({ { src = 'https://github.com/catppuccin/nvim', name = 'catppuccin' } })

require('catppuccin').setup({
	flavour = 'auto', -- latte, frappe, macchiato, mocha
	background = { -- :h background
		light = 'latte',
		dark = 'mocha',
	},
	transparent_background = true, -- disables setting the background color.
	float = {
		transparent = true, -- enable transparent floating windows
		solid = false, -- use solid styling for floating windows, see |winborder|
	},
	term_colors = false, -- sets terminal colors (e.g. `g:terminal_color_0`)
	dim_inactive = {
		enabled = false, -- dims the background color of inactive window
		shade = 'dark',
		percentage = 0.15, -- percentage of the shade to apply to the inactive window
	},
	no_italic = false, -- Force no italic
	no_bold = false, -- Force no bold
	no_underline = false, -- Force no underline
	styles = { -- Handles the styles of general hi groups (see `:h highlight-args`):
		comments = { 'italic' }, -- Change the style of comments
		conditionals = { 'italic' },
		loops = {},
		functions = {},
		keywords = {},
		strings = {},
		variables = {},
		numbers = {},
		booleans = {},
		properties = {},
		types = {},
		operators = {},
		-- miscs = {}, -- Uncomment to turn off hard-coded styles
	},
	color_overrides = {},
	custom_highlights = function(colors)
		return {
			FloatBorder = { fg = colors.mauve },
			NotifyINFOBorder = { fg = colors.mauve },
			BlinkCmpMenuBorder = { fg = colors.mauve },
			HarpoonBorder = { fg = colors.mauve },
		}
	end,
	default_integrations = true,
	integrations = {
		alpha = true,
		barbar = true,
		blink_cmp = {
			style = 'bordered',
		},
		blink_indent = true,
		cmp = true,
		fidget = true,
		gitsigns = true,
		harpoon = true,
		indent_blankline = {
			enabled = true,
			scope_color = 'mauve', -- catppuccin color (eg. `lavender`) Default: text
			colored_indent_levels = false,
		},
		markview = true,
		mini = {
			enabled = true,
			indentscope_color = '',
		},
		noice = true,
		notify = true,
		nvimtree = true,
		render_markdown = true,
		treesitter = true,
		treesitter_context = true,
		which_key = true,
		ufo = true,
		-- For more plugins integrations please scroll down (https://github.com/catppuccin/nvim#integrations)
	},
})

-- setup must be called before loading
vim.cmd.colorscheme('catppuccin')
