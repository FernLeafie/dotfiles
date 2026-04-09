local gh = require('gh')
vim.pack.add({
  { src = gh('neovim/nvim-lspconfig') },
  { src = gh('mason-org/mason.nvim') },
  { src = gh('mason-org/mason-lspconfig.nvim') },
  { src = gh('WhoIsSethDaniel/mason-tool-installer.nvim') },
  gh('nvimtools/none-ls.nvim'),
  gh('nvim-lua/plenary.nvim'),
  gh('j-hui/fidget.nvim')
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

local null_ls = require("null-ls")
null_ls.setup({
  sources = {
    null_ls.builtins.formatting.stylua,
  },
})

require('fidget').setup({});

vim.keymap.set("n", "<leader>gf", vim.lsp.buf.format, {})

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

-- vim.keymap.set('n', '<leader>de', '<cmd>lua vim.diagnostic.enable(not vim.diagnostic.is_enabled())<cr>')
vim.keymap.set('n', '<leader>de', function()
  local new_config = not vim.diagnostic.config().virtual_text
  vim.diagnostic.config({ virtual_text = new_config })
end, { desc = 'Toggle diagnostic virtual_text' })

vim.keymap.set('n', 'K', vim.lsp.buf.hover, {})
vim.keymap.set({ 'n', 'x' }, '<leader>ca', function()
  require('tiny-code-action').code_action()
end, { noremap = true, silent = true })

vim.diagnostic.config({
  virtual_text = true,
  underline = true,
  signs = {
    text = {
      [vim.diagnostic.severity.ERROR] = '',
      [vim.diagnostic.severity.WARN] = '',
      [vim.diagnostic.severity.INFO] = '',
      [vim.diagnostic.severity.HINT] = '',
    },
    -- linehl = {
    --   [vim.diagnostic.severity.ERROR] = 'ErrorMsg',
    -- },
    numhl = {
      [vim.diagnostic.severity.ERROR] = 'ErrorMsg',
      [vim.diagnostic.severity.WARN] = 'WarningMsg',
      [vim.diagnostic.severity.INFO] = 'DiagnosticInfo',
      [vim.diagnostic.severity.HINT] = 'diagnosticHint',
    },
  },
})


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

