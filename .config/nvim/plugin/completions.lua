local gh = require('gh')
vim.pack.add({
  { src = gh('L3MON4D3/LuaSnip') },
	{ src = gh('rafamadriz/friendly-snippets') },
	-- { src = gh('hrsh7th/nvim-cmp') },
	-- { src = gh('hrsh7th/cmp-nvim-lsp') },
	{ src = gh('Saghen/blink.cmp'), version = vim.version.range('*') },
})

require('luasnip.loaders.from_vscode').lazy_load()
require('blink.cmp').setup({
	signature = {
    enabled = true,
    -- window = {
    --   border = 'rounded'
    -- }
  },
	completion = {
		documentation = { auto_show = true, auto_show_delay_ms = 500, window = { border = 'rounded' }, },
		menu = {
			auto_show = true,
			draw = {
				treesitter = { 'lsp' },
				columns = { { 'kind_icon', 'label', 'label_description', gap = 1 }, { 'kind' } },
			},
		},
    ghost_text = {
      enabled = true,
    }
	},
})

-- local cmp_autopairs = require('nvim-autopairs.completion.cmp')
-- local cmp = require('cmp')
-- -- require('luasnip.loaders.from_vscode').lazy_load()
--
-- cmp.setup({
--   snippet = {
--     expand = function(args)
--       require('luasnip').lsp_expand(args.body)
--       vim.snippet.expand(args.body)
--     end,
--   },
--   window = {
--     -- completion = cmp.config.window.bordered(),
--     completion = {
--       border = 'rounded'
--     },
--     -- documentation = cmp.config.window.bordered(),
--     documentation = {
--       border = 'rounded'
--     },
--   },
--   mapping = cmp.mapping.preset.insert({
--     ['<C-b>'] = cmp.mapping.scroll_docs(-4),
--     ['<C-f>'] = cmp.mapping.scroll_docs(4),
--     ['<C-Space>'] = cmp.mapping.complete(),
--     ['<C-e>'] = cmp.mapping.abort(),
--     ['<CR>'] = cmp.mapping.confirm({ select = true }),
--   }),
--   sources = cmp.config.sources({
--     { name = 'nvim_lsp' },
--     { name = 'luasnip' }, -- For luasnip users.
--   }, {
--     { name = 'buffer' },
--   }),
-- })
-- cmp.event:on(
--   'confirm_done',
--   cmp_autopairs.on_confirm_done()
-- )
