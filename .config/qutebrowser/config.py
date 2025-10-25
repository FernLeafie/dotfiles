import catppuccin

# load your autoconfig, use this, if the rest of your config is empty!
config.load_autoconfig()

# set the flavor you'd like to use
# valid options are 'mocha', 'macchiato', 'frappe', and 'latte'
# last argument (optional, default is False): enable the plain look for the menu rows
catppuccin.setup(c, 'mocha', True)

c.fonts.default_family = "FiraCode Nerd Font Propo"
c.fonts.default_size = '10pt'
c.fonts.web.family.fixed = "FiraCode Nerd Font Propo"
c.fonts.web.family.sans_serif = "FiraCode Nerd Font Propo"
c.fonts.web.family.serif = "FiraCode Nerd Font Propo"
c.fonts.web.family.standard = "FiraCode Nerd Font Propo"

c.auto_save.session = True

c.url.searchengines = {
    'DEFAULT':  'https://www.startpage.com/sp/search?q={}',
    '!ala':     'https://anilist.co/search/anime?search={}',
    '!alm':     'https://anilist.co/search/manga?search={}',
    '!aw':      'https://wiki.archlinux.org/?search={}',
    '!apkg':    'https://archlinux.org/packages/?sort=&q={}&maintainer=&flagged=',
    '!aur':     'https://aur.archlinux.org/packages?O=0&SeB=nd&K={}&outdated=&SB=p&SO=d&PP=50',
    '!cfs':     'https://superstormer.github.io/cf-search/?searchFilter={}',
    '!ddg':     'https://duckduckgo.com/?q={}',
    '!es':      'https://explainshell.com/explain?cmd={}',
    '!gh':      'https://github.com/search?o=desc&q={}&s=stars',
    '!mdn':     'https://developer.mozilla.org/en-US/search?q={}',
    '!mrm':     'https://modrinth.com/mods?q={}',
    '!mrr':     'https://modrinth.com/resourcepacks?q={}',
    '!mcw':     'https://minecraft.wiki/w/Special:Search?search={}',
    '!sdv':     'https://stardewvalleywiki.com/mediawiki/index.php?title=Special:Search&search={}',
    '!sgdb':    'https://www.steamgriddb.com/search/grids?term={}',
    '!yt':      'https://www.youtube.com/results?search_query={}',
}
c.colors.webpage.darkmode.enabled = True
c.completion.open_categories = ["quickmarks", "bookmarks", "searchengines", "history", "filesystem"]
c.statusbar.widgets = ["keypress", "search_match", "url", "scroll", "history", "tabs", "progress"]
# c.tabs.position = top
c.url.default_page = 'file:///home/fern-snow/Documents/Programs/catppuccin-startpage-main/index.html'
c.url.start_pages = 'file:///home/fern-snow/Documents/Programs/catppuccin-startpage-main/index.html'
c.colors.webpage.preferred_color_scheme = 'dark'

# c.colors.webpage.darkmode.enabled = True
# c.colors.webpage.preferred_color_scheme = dark
