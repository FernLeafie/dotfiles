return {

    {
        'MeanderingProgrammer/render-markdown.nvim',
        dependencies = { 'nvim-treesitter/nvim-treesitter', 'nvim-tree/nvim-web-devicons' },
        ---@module 'render-markdown'
        ---@type render.md.UserConfig
        opts = {
            completions = { lsp = { enabled = true } },
            code = {
                position = 'right',
                width = 'block',
                right_pad = 10,
            },
            checkbox = {
                enabled = true,
                unchecked = {
                    icon = ' ',
                },
                checked = {
                    icon = ' ',
                },
                custom = {
                    todo = { raw = '[/]', rendered = ' ', highlight = 'RenderMarkdownTodo', scope_highlight = nil },
                    -- incomplete = { raw = '[/]', rendered = ' ', highlight = 'RenderMarkdownTodo', scope_highlight = nil },
                    forwarded = { raw = '[>]', rendered = ' ', highlight = 'RenderMarkdownTodo', scope_highlight = nil },
                    scheduling = { raw = '[<]', rendered = ' ', highlight = 'RenderMarkdownTodo', scope_highlight = nil },
                    cancelled = { raw = '[-]', rendered = ' ', highlight = 'RenderMarkdownTodo', scope_highlight = nil },
                    question = { raw = '[?]', rendered = ' ', highlight = 'RenderMarkdownTodo', scope_highlight = nil },
                    important = { raw = '[!]', rendered = ' ', highlight = 'RenderMarkdownUnchecked', scope_highlight = nil },
                    star = { raw = '[*]', rendered = ' ', highlight = 'RenderMarkdownTodo', scope_highlight = nil },
                    quote = { raw = '["]', rendered = ' ', highlight = 'RenderMarkdownTodo', scope_highlight = nil },
                    location = { raw = '[l]', rendered = ' ', highlight = 'RenderMarkdownTodo', scope_highlight = nil },
                    bookmark = { raw = '[b]', rendered = ' ', highlight = 'RenderMarkdownTodo', scope_highlight = nil },
                    information = { raw = '[i]', rendered = ' ', highlight = 'RenderMarkdownChecked', scope_highlight = nil },
                    savings = { raw = '[S]', rendered = ' ', highlight = 'RenderMarkdownChecked', scope_highlight = nil },
                    idea = { raw = '[I]', rendered = ' ', highlight = 'RenderMarkdownTodo', scope_highlight = nil },
                    pros = { raw = '[p]', rendered = ' ', highlight = 'RenderMarkdownChecked', scope_highlight = nil },
                    cons = { raw = '[c]', rendered = ' ', highlight = 'RenderMarkdownUnchecked', scope_highlight = nil },
                    fire = { raw = '[f]', rendered = ' ', highlight = 'RenderMarkdownUnchecked', scope_highlight = nil },
                    key = { raw = '[k]', rendered = ' ', highlight = 'RenderMarkdownTodo', scope_highlight = nil },
                    win = { raw = '[w]', rendered = ' ', highlight = 'RenderMarkdownTodo', scope_highlight = nil },
                    up = { raw = '[u]', rendered = '󰔵 ', highlight = 'RenderMarkdownChecked', scope_highlight = nil },
                    down = { raw = '[d]', rendered = '󰔳 ', highlight = 'RenderMarkdownUnchecked', scope_highlight = nil },
                },
            },
            pipe_table = {
                border = {
                    '╭', '┬', '╮',
                    '├', '┼', '┤',
                    '╰', '┴', '╯',
                    '│', '─',
                },
            }
        },
    },
    {

    }
}
