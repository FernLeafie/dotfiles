return {
    "nvim-tree/nvim-tree.lua",
    version = "*",
    lazy = false,
    dependencies = {
        "nvim-tree/nvim-web-devicons",
    },
    config = function()
        require("nvim-tree").setup {}
        vim.keymap.set('n', '<C-n>', ':NvimTreeOpen<cr>', {})
        local function natural_cmp(left, right)
            left = left.name:lower()
            right = right.name:lower()

            if left == right then
                return false
            end

            for i = 1, math.max(string.len(left), string.len(right)), 1 do
                local l = string.sub(left, i, -1)
                local r = string.sub(right, i, -1)

                if type(tonumber(string.sub(l, 1, 1))) == "number" and type(tonumber(string.sub(r, 1, 1))) == "number" then
                    local l_number = tonumber(string.match(l, "^[0-9]+"))
                    local r_number = tonumber(string.match(r, "^[0-9]+"))

                    if l_number ~= r_number then
                        return l_number < r_number
                    end
                elseif string.sub(l, 1, 1) ~= string.sub(r, 1, 1) then
                    return l < r
                end
            end
        end

        -- better keybinds
        local api = require("nvim-tree.api")
        require"nvim-tree".setup {
            on_attach = function (bufnr)
                -- description and options for keybinds
                local function opts(desc)
                    return { desc = "nvim-tree: " .. desc, buffer = bufnr, noremap = true, silent = true, nowait = true }
                end
                -- get all default keybinds
                api.config.mappings.default_on_attach(bufnr)
                -- function for left to assign to keybindings
                local lefty = function ()
                    local node_at_cursor = api.tree.get_node_under_cursor()
                    -- if it's a node and it's open, close
                    if node_at_cursor.nodes and node_at_cursor.open then
                        api.node.open.edit()
                        -- else left jumps up to parent
                    else
                        api.node.navigate.parent()
                    end
                end
                -- function for right to assign to keybindings
                local righty = function ()
                    local node_at_cursor = api.tree.get_node_under_cursor()
                    -- if it's a closed node, open it
                    if node_at_cursor.nodes and not node_at_cursor.open then
                        -- expand or collapse folder
                        api.node.open.edit()
                    else
                        -- open file
                        api.node.open.edit()
                    end
                end
                vim.keymap.set("n", "h", lefty , opts("Close directory or jump to parent") )
                vim.keymap.set("n", "<Left>", lefty , opts("Close directory or jump to parent") )
                vim.keymap.set("n", "<Right>", righty , opts("Open") )
                vim.keymap.set("n", "l", righty , opts("Open") )
                -- remove default keybinds
                vim.keymap.del("n", "<C-t>", { buffer = bufnr })
                -- overwrite default keybinds
                vim.keymap.set("n", "<C-¨>", api.tree.change_root_to_node, opts(" CD"))
            end,

            renderer = {
                icons = {
                    glyphs = {
                        folder = {
                            default = "",      --       󰉋 
                            open = "",         --       󰝰 
                            empty = "",        --       󰉖 
                            empty_open = "",   --       󰷏 
                            symlink = "",      --   󱞫   󰾶 
                            symlink_open = ""  --   󱞫   󰾶 
                        },
                        git = {
                            unstaged = "",  --       
                            staged = "",    --       
                            unmerged = "󰧾",  --      󰧾
                            untracked = "", --      
                            renamed = "",   --       
                            deleted = "",   --      
                            ignored = ""    --     ∅
                        }
                    },
                    show = {
                        file = true,
                        folder = true,
                        folder_arrow = true, -- set to false if using indent_markers
                        git = true,
                    }
                },
                indent_markers = {
                    enable = false,
                },
            },
            sort_by = function(nodes)
                table.sort(nodes, natural_cmp)
            end,
        }
    end,
}
