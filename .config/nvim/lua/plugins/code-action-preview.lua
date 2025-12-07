return {
    "rachartier/tiny-code-action.nvim",
    dependencies = {
        {"nvim-lua/plenary.nvim"},
        {"nvim-telescope/telescope.nvim"},
    },
    event = "LspAttach",
    opts = {
        backend = "delta",
        picker = "telescope",
        backend_opts = {
            delta = {
                -- Header from delta can be quite large.
                -- You can remove them by setting this to the number of lines to remove
                header_lines_to_remove = 4,

                -- The arguments to pass to delta
                -- If you have a custom configuration file, you can set the path to it like so:
                -- args = {
                --     "--config" .. os.getenv("HOME") .. "/.config/delta/config.yml",
                -- }
                args = {
                    "--line-numbers",
                },
            },
        },

        resolve_timeout = 100, -- Timeout in milliseconds to resolve code actions

        -- Notification settings
        notify = {
            enabled = true, -- Enable/disable all notifications
            on_empty = true, -- Show notification when no code actions are found
        },

        -- The icons to use for the code actions
        -- You can add your own icons, you just need to set the exact action's kind of the code action
        -- You can set the highlight like so: { link = "DiagnosticError" } or  like nvim_set_hl ({ fg ..., bg..., bold..., ...})
        signs = {
            quickfix = { "", { link = "DiagnosticWarning" } },
            others = { "", { link = "DiagnosticWarning" } },
            refactor = { "", { link = "DiagnosticInfo" } },
            ["refactor.move"] = { "󰪹", { link = "DiagnosticInfo" } },
            ["refactor.extract"] = { "", { link = "DiagnosticError" } },
            ["source.organizeImports"] = { "", { link = "DiagnosticWarning" } },
            ["source.fixAll"] = { "󰃢", { link = "DiagnosticError" } },
            ["source"] = { "", { link = "DiagnosticError" } },
            ["rename"] = { "󰑕", { link = "DiagnosticWarning" } },
            ["codeAction"] = { "", { link = "DiagnosticWarning" } },
        },
    }
}
