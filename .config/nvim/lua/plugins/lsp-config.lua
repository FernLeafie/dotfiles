return {
    {
        "williamboman/mason.nvim",
        lazy = false,
        config = function()
            require("mason").setup({
                ui = {
                    icons = {
                        package_installed = " ",
                        package_pending = " ",
                        package_uninstalled = " ",
                    },
                },
            })
        end,
    },
    {
        "williamboman/mason-lspconfig.nvim",
        lazy = false,
        opts = {
            auto_install = true,
        },
    },
    {
        "neovim/nvim-lspconfig",
        lazy = false,
        config = function()
            local capabilities = require("cmp_nvim_lsp").default_capabilities()

            vim.lsp.enable('ts_ls', {
                capabilities = capabilities,
            })
            vim.lsp.enable('solargraph', {
                capabilities = capabilities,
            })
            vim.lsp.enable('html' , {
                capabilities = capabilities,
            })
            vim.lsp.enable('lua_ls', {
                capabilities = capabilities,
            })
            --[[ lspconfig.rust_analyser.setup({
                capabilities = capabilities,
                on_attach = on_attach,
            vim.lsp.config('harper_ls', {
                settings = {
                    ["rust-analyzer"] = {
                        imports = {
                            granularity = {
                                group = "module",
                            },
                            prefix = "self",
                        },
                        cargo = {
                            buildScripts = {
                                enable = true,
                            },
                        },
                        procMacro = {
                            enable = true
                    ["harper-ls"] = {

                        linters = {
                            SpellCheck = true,
                            SpelledNumbers = false,
                            AnA = true,
                            SentenceCapitalization = false, -- changed
                            UnclosedQuotes = true,
                            WrongQuotes = false,
                            LongSentences = true,
                            RepeatedWords = true,
                            Spaces = true,
                            Matcher = true,
                            CorrectNumberSuffix = true
                        },
                        diagnosticSeverity = "hint",
                        isolateEnglish = false,
                        dialect = "British",
                        maxFileLength = 120000,
                        ignoredLintsPath = "",
                        excludePatterns = {}
                    }
                }
            })]]

            })
            vim.lsp.enable('harper_ls')
            vim.keymap.set("n", "K", vim.lsp.buf.hover, {})
            vim.keymap.set("n", "<leader>gd", vim.lsp.buf.definition, {})
            vim.keymap.set("n", "<leader>gr", vim.lsp.buf.references, {})
            vim.keymap.set({ "n", "x" }, "<leader>ca", function()
                require("tiny-code-action").code_action()
            end, { noremap = true, silent = true })
        end,
    },
    --[[{
        "simrat39/rust-tools.nvim",
        config = function()
            require("rust-tools")

            rt.setup({
                server = {
                    on_attach = function(_, bufnr)
                        -- Hover actions
                        vim.keymap.set("n", "<C-space>", rt.hover_actions.hover_actions, { buffer = bufnr })
                        -- Code action groups
                        vim.keymap.set("n", "<Leader>a", rt.code_action_group.code_action_group, { buffer = bufnr })
                    end,
                },
            })
        end,
    },]]
}
