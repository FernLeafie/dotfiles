// ==UserScript==
// @name    Userstyle (shinigami-eyes.css)
// @include    *facebook.com*
// @include    *youtube.com*
// @include    *reddit.com*
// @include    *twitter.com*
// @include    *x.com*
// @include    *medium.com*
// @include    *disqus.com*
// @include    *tumblr.com*
// @include    *wikipedia.org*
// @include    *rationalwiki.org*
// @include    *cohost.org*
// @include    *bsky.app*
// @include    *anarchism.space*
// @include    *aus.social*
// @include    *c.im*
// @include    *chaos.social*
// @include    *eightpoint.app*
// @include    *eldritch.cafe*
// @include    *fosstodon.org*
// @include    *hachyderm.io*
// @include    *infosec.exchange*
// @include    *kolektiva.social*
// @include    *mas.to*
// @include    *masto.ai*
// @include    *chaosfem.tw*
// @include    *mastodon.art*
// @include    *mastodon.cloud*
// @include    *mastodon.green*
// @include    *mastodon.ie*
// @include    *mastodon.nz*
// @include    *mastodon.online*
// @include    *mastodon.scot*
// @include    *mastodon.social*
// @include    *mastodon.world*
// @include    *mastodon.xyz*
// @include    *mastodonapp.uk*
// @include    *meow.social*
// @include    *mstdn.ca*
// @include    *mstdn.jp*
// @include    *mstdn.social*
// @include    *octodon.social*
// @include    *ohai.social*
// @include    *pixelfed.social*
// @include    *queer.party*
// @include    *sfba.social*
// @include    *social.transsafety.network*
// @include    *tech.lgbt*
// @include    *techhub.social*
// @include    *toot.cat*
// @include    *toot.community*
// @include    *toot.wales*
// @include    *vulpine.club*
// @include    *wandering.shop*
// @include    *lgbtqia.space*
// @include    *threads.net*
// @include    *duckduckgo.com*
// @include    *bing.com*
// @include    *google.ar*
// @include    *google.at*
// @include    *google.be*
// @include    *google.ca*
// @include    *google.ch*
// @include    *google.co.uk*
// @include    *google.com*
// @include    *google.de*
// @include    *google.dk*
// @include    *google.es*
// @include    *google.fi*
// @include    *google.fr*
// @include    *google.is*
// @include    *google.it*
// @include    *google.no*
// @include    *google.pt*
// @include    *google.se*
// ==/UserScript==
GM_addStyle(`/* ==UserStyle==
@name Shinigami Eyes Catppuccin
@namespace github.com/catppuccin/userstyles/styles/shinigami-eyes
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/shinigami-eyes
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/shinigami-eyes/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Ashinigami-eyes
@description Soothing pastel theme for Shinigami Eyes
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */
/*
These are the domains for the sites that Shinigami Eyes works with.
The list can be found at https://github.com/shinigami-eyes/shinigami-eyes/blob/b66e9ad41fa4daef31886b139d8af6f852efcaaa/extension/manifest.json#L15-L96.
*/

@media (prefers-color-scheme: light) {
  :root body {
    --ShinigamiEyesTFriendly: #a6e3a1 !important;
    --ShinigamiEyesTransphobic: #f38ba8 !important;
  }
  :root .shinigami-eyes-theme-purple-yellow {
    --ShinigamiEyesTFriendly: #cba6f7 !important;
    --ShinigamiEyesTransphobic: #f9e2af !important;
  }
  :root .shinigami-eyes-theme-cyan-orange {
    --ShinigamiEyesTFriendly: #74c7ec !important;
    --ShinigamiEyesTransphobic: #fab387 !important;
  }
}
@media (prefers-color-scheme: dark) {
  :root body {
    --ShinigamiEyesTFriendly: #a6e3a1 !important;
    --ShinigamiEyesTransphobic: #f38ba8 !important;
  }
  :root .shinigami-eyes-theme-purple-yellow {
    --ShinigamiEyesTFriendly: #cba6f7 !important;
    --ShinigamiEyesTransphobic: #f9e2af !important;
  }
  :root .shinigami-eyes-theme-cyan-orange {
    --ShinigamiEyesTFriendly: #74c7ec !important;
    --ShinigamiEyesTransphobic: #fab387 !important;
  }
}

/* ==UserStyle==
@name Shinigami Eyes Catppuccin
@namespace github.com/catppuccin/userstyles/styles/shinigami-eyes
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/shinigami-eyes
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/shinigami-eyes/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Ashinigami-eyes
@description Soothing pastel theme for Shinigami Eyes
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */
/*
These are the domains for the sites that Shinigami Eyes works with.
The list can be found at https://github.com/shinigami-eyes/shinigami-eyes/blob/b66e9ad41fa4daef31886b139d8af6f852efcaaa/extension/manifest.json#L15-L96.
*/

@media (prefers-color-scheme: light) {
  :root body {
    --ShinigamiEyesTFriendly: #a6e3a1 !important;
    --ShinigamiEyesTransphobic: #f38ba8 !important;
  }
  :root .shinigami-eyes-theme-purple-yellow {
    --ShinigamiEyesTFriendly: #cba6f7 !important;
    --ShinigamiEyesTransphobic: #f9e2af !important;
  }
  :root .shinigami-eyes-theme-cyan-orange {
    --ShinigamiEyesTFriendly: #74c7ec !important;
    --ShinigamiEyesTransphobic: #fab387 !important;
  }
}
@media (prefers-color-scheme: dark) {
  :root body {
    --ShinigamiEyesTFriendly: #a6e3a1 !important;
    --ShinigamiEyesTransphobic: #f38ba8 !important;
  }
  :root .shinigami-eyes-theme-purple-yellow {
    --ShinigamiEyesTFriendly: #cba6f7 !important;
    --ShinigamiEyesTransphobic: #f9e2af !important;
  }
  :root .shinigami-eyes-theme-cyan-orange {
    --ShinigamiEyesTFriendly: #74c7ec !important;
    --ShinigamiEyesTransphobic: #fab387 !important;
  }
}

/* ==UserStyle==
@name Shinigami Eyes Catppuccin
@namespace github.com/catppuccin/userstyles/styles/shinigami-eyes
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/shinigami-eyes
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/shinigami-eyes/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Ashinigami-eyes
@description Soothing pastel theme for Shinigami Eyes
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */
/*
These are the domains for the sites that Shinigami Eyes works with.
The list can be found at https://github.com/shinigami-eyes/shinigami-eyes/blob/b66e9ad41fa4daef31886b139d8af6f852efcaaa/extension/manifest.json#L15-L96.
*/

@media (prefers-color-scheme: light) {
  :root body {
    --ShinigamiEyesTFriendly: #a6e3a1 !important;
    --ShinigamiEyesTransphobic: #f38ba8 !important;
  }
  :root .shinigami-eyes-theme-purple-yellow {
    --ShinigamiEyesTFriendly: #cba6f7 !important;
    --ShinigamiEyesTransphobic: #f9e2af !important;
  }
  :root .shinigami-eyes-theme-cyan-orange {
    --ShinigamiEyesTFriendly: #74c7ec !important;
    --ShinigamiEyesTransphobic: #fab387 !important;
  }
}
@media (prefers-color-scheme: dark) {
  :root body {
    --ShinigamiEyesTFriendly: #a6e3a1 !important;
    --ShinigamiEyesTransphobic: #f38ba8 !important;
  }
  :root .shinigami-eyes-theme-purple-yellow {
    --ShinigamiEyesTFriendly: #cba6f7 !important;
    --ShinigamiEyesTransphobic: #f9e2af !important;
  }
  :root .shinigami-eyes-theme-cyan-orange {
    --ShinigamiEyesTFriendly: #74c7ec !important;
    --ShinigamiEyesTransphobic: #fab387 !important;
  }
}

/* ==UserStyle==
@name Shinigami Eyes Catppuccin
@namespace github.com/catppuccin/userstyles/styles/shinigami-eyes
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/shinigami-eyes
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/shinigami-eyes/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Ashinigami-eyes
@description Soothing pastel theme for Shinigami Eyes
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */
/*
These are the domains for the sites that Shinigami Eyes works with.
The list can be found at https://github.com/shinigami-eyes/shinigami-eyes/blob/b66e9ad41fa4daef31886b139d8af6f852efcaaa/extension/manifest.json#L15-L96.
*/

@media (prefers-color-scheme: light) {
  :root body {
    --ShinigamiEyesTFriendly: #a6e3a1 !important;
    --ShinigamiEyesTransphobic: #f38ba8 !important;
  }
  :root .shinigami-eyes-theme-purple-yellow {
    --ShinigamiEyesTFriendly: #cba6f7 !important;
    --ShinigamiEyesTransphobic: #f9e2af !important;
  }
  :root .shinigami-eyes-theme-cyan-orange {
    --ShinigamiEyesTFriendly: #74c7ec !important;
    --ShinigamiEyesTransphobic: #fab387 !important;
  }
}
@media (prefers-color-scheme: dark) {
  :root body {
    --ShinigamiEyesTFriendly: #a6e3a1 !important;
    --ShinigamiEyesTransphobic: #f38ba8 !important;
  }
  :root .shinigami-eyes-theme-purple-yellow {
    --ShinigamiEyesTFriendly: #cba6f7 !important;
    --ShinigamiEyesTransphobic: #f9e2af !important;
  }
  :root .shinigami-eyes-theme-cyan-orange {
    --ShinigamiEyesTFriendly: #74c7ec !important;
    --ShinigamiEyesTransphobic: #fab387 !important;
  }
}

/* ==UserStyle==
@name Shinigami Eyes Catppuccin
@namespace github.com/catppuccin/userstyles/styles/shinigami-eyes
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/shinigami-eyes
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/shinigami-eyes/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Ashinigami-eyes
@description Soothing pastel theme for Shinigami Eyes
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */
/*
These are the domains for the sites that Shinigami Eyes works with.
The list can be found at https://github.com/shinigami-eyes/shinigami-eyes/blob/b66e9ad41fa4daef31886b139d8af6f852efcaaa/extension/manifest.json#L15-L96.
*/

@media (prefers-color-scheme: light) {
  :root body {
    --ShinigamiEyesTFriendly: #a6e3a1 !important;
    --ShinigamiEyesTransphobic: #f38ba8 !important;
  }
  :root .shinigami-eyes-theme-purple-yellow {
    --ShinigamiEyesTFriendly: #cba6f7 !important;
    --ShinigamiEyesTransphobic: #f9e2af !important;
  }
  :root .shinigami-eyes-theme-cyan-orange {
    --ShinigamiEyesTFriendly: #74c7ec !important;
    --ShinigamiEyesTransphobic: #fab387 !important;
  }
}
@media (prefers-color-scheme: dark) {
  :root body {
    --ShinigamiEyesTFriendly: #a6e3a1 !important;
    --ShinigamiEyesTransphobic: #f38ba8 !important;
  }
  :root .shinigami-eyes-theme-purple-yellow {
    --ShinigamiEyesTFriendly: #cba6f7 !important;
    --ShinigamiEyesTransphobic: #f9e2af !important;
  }
  :root .shinigami-eyes-theme-cyan-orange {
    --ShinigamiEyesTFriendly: #74c7ec !important;
    --ShinigamiEyesTransphobic: #fab387 !important;
  }
}

/* ==UserStyle==
@name Shinigami Eyes Catppuccin
@namespace github.com/catppuccin/userstyles/styles/shinigami-eyes
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/shinigami-eyes
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/shinigami-eyes/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Ashinigami-eyes
@description Soothing pastel theme for Shinigami Eyes
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */
/*
These are the domains for the sites that Shinigami Eyes works with.
The list can be found at https://github.com/shinigami-eyes/shinigami-eyes/blob/b66e9ad41fa4daef31886b139d8af6f852efcaaa/extension/manifest.json#L15-L96.
*/

@media (prefers-color-scheme: light) {
  :root body {
    --ShinigamiEyesTFriendly: #a6e3a1 !important;
    --ShinigamiEyesTransphobic: #f38ba8 !important;
  }
  :root .shinigami-eyes-theme-purple-yellow {
    --ShinigamiEyesTFriendly: #cba6f7 !important;
    --ShinigamiEyesTransphobic: #f9e2af !important;
  }
  :root .shinigami-eyes-theme-cyan-orange {
    --ShinigamiEyesTFriendly: #74c7ec !important;
    --ShinigamiEyesTransphobic: #fab387 !important;
  }
}
@media (prefers-color-scheme: dark) {
  :root body {
    --ShinigamiEyesTFriendly: #a6e3a1 !important;
    --ShinigamiEyesTransphobic: #f38ba8 !important;
  }
  :root .shinigami-eyes-theme-purple-yellow {
    --ShinigamiEyesTFriendly: #cba6f7 !important;
    --ShinigamiEyesTransphobic: #f9e2af !important;
  }
  :root .shinigami-eyes-theme-cyan-orange {
    --ShinigamiEyesTFriendly: #74c7ec !important;
    --ShinigamiEyesTransphobic: #fab387 !important;
  }
}

`)