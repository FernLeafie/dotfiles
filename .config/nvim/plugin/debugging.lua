if false then
	local cb = require('cb')
	local gh = require('gh')
	vim.pack.add({
		cb('mfussenegger/nvim-dap'),
		gh('igorlfs/nvim-dap-view'),
	})

	vim.keymap.set('n', '<Leader>dv', '<cmd>DapViewToggle<CR>', { desc = 'Debug view' })
	vim.keymap.set('n', '<Leader>db', '<cmd>DapToggleBreakpoint<CR>', { desc = 'Debug breakpoint' })
	vim.keymap.set('n', '<Leader>dc', '<cmd>DapContinue<CR>', { desc = 'Debug continue' })
	vim.keymap.set('n', '<Leader>dx', '<cmd>DapTerminate<CR>', { desc = 'Debug terminate' })
	vim.keymap.set('n', '<Leader>do', '<cmd>DapStepOver<CR>', { desc = 'Debug step over' })

	local sign = vim.fn.sign_define

	sign('DapBreakpoint', { text = '', texthl = 'DapBreakpoint', linehl = '', numhl = '' })
	sign('DapBreakpointCondition', { text = '', texthl = 'DapBreakpointCondition', linehl = '', numhl = '' })
	sign('DapLogPoint', { text = '', texthl = 'DapLogPoint', linehl = '', numhl = '' })

	require('dap-view').setup({
		icons = {
			collapsed = ' ',
			disabled = '',
			disconnect = '',
			enabled = '',
			expanded = ' ',
			filter = '',
			negate = ' ',
			pause = '',
			play = '',
			run_last = '',
			step_back = '',
			step_into = '',
			step_out = '',
			step_over = '',
			terminate = '',
		},
		help = {
			border = 'rounded',
		},
	})
end
