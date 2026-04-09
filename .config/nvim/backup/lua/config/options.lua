-- vim.cmd("set expandtab")
-- vim.cmd("set tabstop=4")
-- vim.cmd("set softtabstop=4")
-- vim.cmd("set shiftwidth=4")

local options = {
    showmode = false, -- not needed due to lualine
    clipboard = "unnamedplus", -- uses the system clipboard
    ttyfast = true, -- faster scrolling
    smoothscroll = true,

    number = true, -- numbering lines
    relativenumber = true,

    expandtab = true,
    tabstop = 2,
    softtabstop = 2,
    shiftwidth = 2
}

for k, v in pairs(options) do
	vim.opt[k] = v
end

vim.diagnostic.config({
	signs = false,
})
