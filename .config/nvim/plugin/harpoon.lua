local gh = require('gh')
vim.pack.add({
	gh('nvim-lua/plenary.nvim'),
  gh('nvim-telescope/telescope.nvim'),
  {
    src = gh('ThePrimeagen/harpoon'),
    version = 'harpoon2'
  }
})

local harpoon = require('harpoon')

harpoon.setup({})

-- basic telescope configuration
local conf = require('telescope.config').values
local function toggle_telescope(harpoon_files)
  local file_paths = {}
  for _, item in ipairs(harpoon_files.items) do
    table.insert(file_paths, item.value)
  end

  require('telescope.pickers').new({}, {
    layout_strategy = 'vertical',
    -- layout_config = { width = 0.5 },
    prompt_title = 'Harpoon',
    finder = require('telescope.finders').new_table({
      results = file_paths,
    }),
    previewer = conf.file_previewer({}),
    sorter = conf.generic_sorter({}),
  }):find()
end

-- Key bindings
vim.keymap.set('n', '<leader>a', function()
  harpoon:list():add()
end, {desc = 'Add to harpoon'})
vim.keymap.set('n', '<C-e>', function()
  toggle_telescope(harpoon:list())
end, { desc = 'Open harpoon window' })

vim.keymap.set('n', '<M-1>', function()
  harpoon:list():select(1)
end, { desc = 'Harpoon shortcut 1' })
vim.keymap.set('n', '<M-2>', function()
  harpoon:list():select(2)
end, { desc = 'Harpoon shortcut 2' })
vim.keymap.set('n', '<M-3>', function()
  harpoon:list():select(3)
end, { desc = 'Harpoon shortcut 3' })
vim.keymap.set('n', '<M-4>', function()
  harpoon:list():select(4)
end, { desc = 'Harpoon shortcut 4' })

-- Toggle previous & next buffers stored within Harpoon list
vim.keymap.set('n', '<C-S-P>', function() harpoon:list():prev() end, { desc = 'Harpoon next' })
vim.keymap.set('n', '<C-S-N>', function() harpoon:list():next() end, { desc = 'Harpoon previous' })
