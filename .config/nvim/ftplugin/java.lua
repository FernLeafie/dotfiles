local cb = require('cb')
vim.pack.add({ cb('mfussenegger/nvim-jdtls') })

require('jdtls').start_or_attach({
	name = 'jdtls',
	cmd = { 'jdtls' },
	root_dir = vim.fs.root(0, { 'gradlew', '.git', 'mvnw' }),
	settings = {
		java = {
			project = {
				referencedLibraries = {},
			},
		},
	},
	init_options = {
		extendedClientCapabilities = {
			progressReportProvider = false,
		},
	},
	handlers = { ['language/status'] = function() end },
})
