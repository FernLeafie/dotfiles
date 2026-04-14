local gh = require('gh')
vim.pack.add({
  { src = gh('neovim/nvim-lspconfig') },
  { src = gh('mason-org/mason.nvim') },
  { src = gh('mason-org/mason-lspconfig.nvim') },
  { src = gh('WhoIsSethDaniel/mason-tool-installer.nvim') },
  gh('stevearc/conform.nvim'),
  gh('nvim-lua/plenary.nvim'),
  gh('j-hui/fidget.nvim')
})

require('mason').setup({
  ui = {
    border = 'rounded',
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

require('conform').setup({
  formatters_by_ft = {
    lua = { 'stylua' },
    javascript = { 'prettierd', 'prettier', stop_after_first = true },
    typescript = { 'prettierd', 'prettier', stop_after_first = true },
    json = { 'prettierd', 'prettier', stop_after_first = true },
    graphql = { 'prettierd', 'prettier', stop_after_first = true },
    java = { 'google-java-format' },
    kotlin = { 'ktlint' },
    markdown = { 'prettierd', 'prettier', stop_after_first = true },
    html = { 'htmlbeautifier' },
    bash = { 'beautysh' },
    rust = { 'rustfmt' },
    yaml = { 'yamlfix' },
    toml = { 'taplo' },
    css = { 'prettierd', 'prettier', stop_after_first = true },
    sh = { 'shellcheck' },
    xml = { 'xmllint' },
    fish = { 'fish_indent' },
  },
})

require('fidget').setup({
  notification = {
    window = {
      avoid = { 'NvimTree' }
    }
  }
});

vim.keymap.set({ 'n', 'v' }, '<leader>gf', function()
  require('conform').format({
    lsp_format = 'fallback',
    async = true,
    timeout_ms = 1000,
  })
end, { desc = 'Format file or range' })

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

vim.keymap.set('n', 'K', function()
  vim.lsp.buf.hover({border = 'rounded'})
end, {desc = 'Show LSP hover information'})

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


-- Global LSP settings
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

