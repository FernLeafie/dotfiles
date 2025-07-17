-- Providing syntax highlighting
return {
    {
        "nvim-treesitter/nvim-treesitter",
        build = ":TSUpdate",
        config = function()
            local config = require("nvim-treesitter.configs")
            config.setup({
                ensure_installed = {
                    "lua",
                    "javascript",
                    "markdown",
                    "markdown_inline",
                    "bash",
                    "rust",
                    "ron",
                    "css",
                    "html",
                    "json",
                    "kdl",
                },
                auto_install = true,
                highlight = { enable = true },
                indent = { enable = true },
            })
        end,
    },
}
