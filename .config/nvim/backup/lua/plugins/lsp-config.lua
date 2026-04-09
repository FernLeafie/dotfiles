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
            -- vim.lsp.enable('qmlls', {
            --     capabilities = capabilities,
            -- })
            vim.lsp.enable('solargraph', {
                capabilities = capabilities,
            })
            vim.lsp.enable('html' , {
                capabilities = capabilities,
            })
            vim.lsp.enable('lua_ls', {
                capabilities = capabilities,
            })
            vim.lsp.config('harper_ls', {
                settings = {
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
            })
            vim.lsp.enable('harper_ls')
            -- lspconfig.rust_analyser.setup({
            --     capabilities = capabilities,
            --     on_attach = on_attach,
            --     settings = {
            --         ["rust-analyzer"] = {
            --             imports = {
            --                 granularity = {
            --                     group = "module",
            --                 },
            --                 prefix = "self",
            --             },
            --             cargo = {
            --                 buildScripts = {
            --                     enable = true,
            --                 },
            --             },
            --             procMacro = {
            --                 enable = true
            --             },
            --         }
            --     }
            -- })
            vim.keymap.set("n", "<leader>de", "<cmd>lua vim.diagnostic.enable(not vim.diagnostic.is_enabled())<cr>")
            vim.keymap.set("n", "K", vim.lsp.buf.hover, {})
            vim.keymap.set({ "n", "x" }, "<leader>ca", function()
                require("tiny-code-action").code_action()
            end, { noremap = true, silent = true })
        end,
    },
    {
        'mrcjkb/rustaceanvim',
        version = '^6', -- Recommended
        lazy = false, -- This plugin is already lazy
        config = function() 
            vim.g.rustaceanvim = {
                -- Plugin configuration
                tools = {
                },
                -- LSP configuration
                server = {
                    -- cmd = function()
                    --     local mason_registry = require('mason-registry')
                    --     if mason_registry.is_installed('rust-analyzer') then
                    --         -- This may need to be tweaked depending on the operating system.
                    --         local ra = mason_registry.get_package('rust-analyzer')
                    --         local ra_filename = ra:get_receipt():get().links.bin['rust-analyzer']
                    --         return { ('%s/%s'):format(ra:get_install_path(), ra_filename or 'rust-analyzer') }
                    --     else
                    --         -- global installation
                    --         return { 'rust-analyzer' }
                    --     end
                    -- end,
                    on_attach = function(client, bufnr)
                        -- you can also put keymaps in here
                        local bufnr = vim.api.nvim_get_current_buf()
                        vim.keymap.set( "n", "<leader>a", function()
                            -- vim.cmd.RustLsp('codeAction') -- supports rust-analyzer's grouping
                            -- or vim.lsp.buf.codeAction() if you don't want grouping.
                            require("tiny-code-action").code_action()
                        end, { silent = true, buffer = bufnr })
                        -- Override Neovim's built-in hover keymap with rustaceanvim's hover actions
                        vim.keymap.set("n", "K", function()
                            vim.cmd.RustLsp({'hover', 'actions'})
                        end, { silent = true, buffer = bufnr })
                    end,
                    default_settings = {
                        -- rust-analyzer language server configuration
                        ['rust-analyzer'] = {
                        },
                    },
                },
                -- DAP configuration
                dap = {
                },
            }
        end,
    }
    -- {
    --     "simrat39/rust-tools.nvim",
    --     config = function()
    --         require("rust-tools")
    --
    --         rt.setup({
    --             server = {
    --                 on_attach = function(_, bufnr)
    --                     -- Hover actions
    --                     vim.keymap.set("n", "<C-space>", rt.hover_actions.hover_actions, { buffer = bufnr })
    --                     -- Code action groups
    --                     vim.keymap.set("n", "<Leader>a", rt.code_action_group.code_action_group, { buffer = bufnr })
    --                 end,
    --             },
    --         })
    --     end,
    -- },
}
