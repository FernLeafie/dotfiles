local gh = require('gh')
vim.pack.add({
  { src = gh('neovim/nvim-lspconfig') },
  { src = gh('mason-org/mason.nvim') },
  { src = gh('mason-org/mason-lspconfig.nvim') },
  { src = gh('WhoIsSethDaniel/mason-tool-installer.nvim') },
})

require('mason').setup({
  ui = {
    icons = {
      package_installed = ' ',
      package_pending = ' ',
      package_uninstalled = ' ',
    },
  },
})
require('mason-lspconfig').setup()
require('mason-tool-installer').setup({
  ensure_install = {
    'lua_ls',
    'stylua'
  }
})

-- vim.cmd('set completeopt+=noselect')
--
-- vim.api.nvim_create_autocmd('LspAttach', {
-- 	callback = function(ev)
-- 		local client = vim.lsp.get_client_by_id(ev.data.client_id)
-- 		if client ~= nil and client:supports_method('textDocument/completion') then
-- 			vim.lsp.completion.enable(true, client.id, ev.buf, { autotrigger = true })
-- 		end
-- 	end,
-- })

vim.keymap.set('n', '<leader>de', '<cmd>lua vim.diagnostic.enable(not vim.diagnostic.is_enabled())<cr>')
vim.keymap.set('n', 'K', vim.lsp.buf.hover, {})
vim.keymap.set({ 'n', 'x' }, '<leader>ca', function()
  require('tiny-code-action').code_action()
end, { noremap = true, silent = true })


-- Global lsp settings
vim.lsp.config('harper_ls', {
  settings = {
    ['harper-ls'] = {
      linters = {
        SentenceCapitalization = false, -- changed
      },
      dialect = 'British',
    }
  }
})

