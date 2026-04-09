vim.pack.add({ 'https://github.com/catgoose/nvim-colorizer.lua' })

require('colorizer').setup({
  options = {
    parsers = {
      css = true,
      css_fn = true,
      names = {
        enable = false
      },
      hex = {
        rrggbbaa = true
      }
    }
  },
})
