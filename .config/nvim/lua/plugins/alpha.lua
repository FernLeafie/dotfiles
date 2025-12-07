-- Startpage
return {
    "goolord/alpha-nvim",
    config = function()
        -- require("alpha").setup(require("alpha.themes.dashboard").config)
        local alpha = require("alpha")
        local dashboard = require("alpha.themes.dashboard")

        -- local function greeting()
        --     local hour = tonumber(vim.fn.strftime("%H"))
        --     -- [02:00, 10:00) - morning, [10:00, 18:00) - day, [18:00, 02:00) - evening
        --     local part_id = math.floor((hour + 6) / 8) + 1
        --     local day_part = ({ "evening", "morning", "afternoon", "evening" })[part_id]
        --     local username = os.getenv("USER") or os.getenv("USERNAME") or "user"
        --     return ("Good %s, %s"):format(day_part, username)
        -- end

        local function greeting()
            local tableTime = os.date("*t")
            local hour = tableTime.hour
            local greetingsTable = {
                [1] = "  Sleep well",
                [2] = "  Good morning",   -- 󰖜   
                [3] = "  Good day",       -- 󰖙   
                [4] = "  Good afternoon", -- 󰖛  
                [5] = "  Good evening",   -- 
                [6] = "󱡇  Good night",
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
            local username = os.getenv("USER") or os.getenv("USERNAME") or "user"
            return greetingsTable[greetingIndex] .. ", " .. username
        end

        -- local greeting = greeting()

        local greetHeading = {
            type = "text",
            val = greeting,
            opts = {
                position = "center",
                hl = "String",
            },
        }

        dashboard.section.header.val = {
            "      ████ ██████           █████      ██                    ",
            "     ███████████             █████                            ",
            "     █████████ ███████████████████ ███   ███████████  ",
            "    █████████  ███    █████████████ █████ ██████████████  ",
            "   █████████ ██████████ █████████ █████ █████ ████ █████  ",
            " ███████████ ███    ███ █████████ █████ █████ ████ █████ ",
            "██████  █████████████████████ ████ █████ █████ ████ ██████",
            "",
            greeting(),
        }
        dashboard.section.buttons.val = {
            dashboard.button("e", "  New file", ":ene <BAR> startinsert <CR>"), -- 󰝒 
            dashboard.button("f", "  Find file", ":Telescope find_files<CR>"),
            dashboard.button("t", "  Browse cwd", ":NvimTreeOpen<CR>"), --    
            -- dashboard.button("r", "  Browse src", ":e ~/.local/src/<CR>"),
            -- dashboard.button("s", "󰯂  Browse scripts", ":e ~/scripts/<CR>"),
            dashboard.button("c", "  Config", ":e ~/.config/nvim/<CR>"), --    
            -- dashboard.button("m", "  Mappings", ":e ~/.config/nvim/lua/config/mappings.lua<CR>"),
            dashboard.button("l", "󰒲  Lazy", ":Lazy<CR>"),
            dashboard.button("q", "  Quit", ":q!<CR>"), --    
        }
        -- dashboard.section.footer.val =
        alpha.setup(dashboard.opts)
    end,
}
