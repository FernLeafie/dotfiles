-- My messy keybinds <3

local function map(m, k, v)
	vim.keymap.set(m, k, v, { noremap = true, silent = true })
end

-- misc
map("n", "<C-t>", ":NvimTreeToggle<CR>") --open file explorer
