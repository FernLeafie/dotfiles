vim.pack.add({ 'https://github.com/goolord/alpha-nvim' })

local alpha = require('alpha')
local dashboard = require('alpha.themes.dashboard')

local function greeting()
	local platform = package.config:sub(1, 1)
	-- Sets username to a specific string if on windows, and pulls the username from the device if on linux
	if platform == '\\' then
		username = 'Fern Snowleafie'
	elseif platform == '/' then
		username = os.getenv('USER') or os.getenv('USERNAME') or 'user'
	end

	local tableTime = os.date('*t')
	local hour = tableTime.hour
	local greetingsTable = {
		[1] = '  Sleep well',
		[2] = '  Good morning', -- 󰖜 
		[3] = '  Good day', -- 󰖙  
		[4] = '  Good afternoon', -- 󰖛 
		[5] = '  Good evening', -- 
		[6] = '󱡇  Good night',
	}
	local greetingIndex = 0
	if hour == 23 or hour < 7 then
		greetingIndex = 1
	elseif hour < 10 then
		greetingIndex = 2
	elseif hour >= 10 and hour < 15 then
		greetingIndex = 3
	elseif hour >= 15 and hour < 18 then
		greetingIndex = 4
	elseif hour >= 18 and hour < 21 then
		greetingIndex = 5
	elseif hour >= 21 then
		greetingIndex = 6
	end
	return greetingsTable[greetingIndex] .. ', ' .. username
end

dashboard.section.terminal.command = 'chafa --size=69x20 -f symbols --symbols all '
	.. vim.fn.stdpath('config')
	.. '/resources/NeovimLogo_catppuccin-mocha.png'
dashboard.section.terminal.width = 69
dashboard.section.terminal.height = 18

dashboard.section.header.val = {
	--     '      ████ ██████           █████      ██                    ',
	--     '     ███████████             █████                            ',
	--     '     █████████ ███████████████████ ███   ███████████  ',
	--     '    █████████  ███    █████████████ █████ ██████████████  ',
	--     '   █████████ ██████████ █████████ █████ █████ ████ █████  ',
	--     ' ███████████ ███    ███ █████████ █████ █████ ████ █████ ',
	--     '██████  █████████████████████ ████ █████ █████ ████ ██████',
	--     '',
	greeting(),
}

dashboard.section.buttons.val = {
	dashboard.button('e', '  New file', ':ene <BAR> startinsert <CR>'), -- 󰝒
	dashboard.button('f', '  Find file', ':Telescope find_files<CR>'),
	dashboard.button('r', '  Recently opened', ':Telescope oldfiles<CR>'),
	dashboard.button('t', '  Browse cwd', ':NvimTreeOpen<CR>'), --   
	-- dashboard.button('r', '  Browse src', ':e ~/.local/src/<CR>'),
	-- dashboard.button('s', '󰯂  Browse scripts', ':e ~/scripts/<CR>'),
	dashboard.button('c', '  Config', ':e ' .. vim.fn.stdpath('config') .. '<CR>'), --  
	-- dashboard.button('m', '  Mappings', ':e ~/.config/nvim/lua/config/mappings.lua<CR>'),
	-- dashboard.button('l', '󰒲  Lazy', ':Lazy<CR>'),
	dashboard.button('u', '  Update', ':lua vim.pack.update()<CR>'),
	dashboard.button('q', '  Quit', ':q!<CR>'), --   
}

-- Layout
dashboard.config.layout = {
	{ type = 'padding', val = 1 },
	dashboard.section.terminal,
	{ type = 'padding', val = 1 },
	dashboard.section.header,
	{ type = 'padding', val = 1 },
	dashboard.section.buttons,
}

alpha.setup(dashboard.opts)
require('alpha.term')
