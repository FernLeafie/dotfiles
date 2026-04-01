// ==UserScript==
// @name    Userstyle (hacker-news.css)
// @include    *news.ycombinator.com*
// ==/UserScript==
GM_addStyle(`/* ==UserStyle==
@name Hacker News Catppuccin
@namespace github.com/catppuccin/userstyles/styles/hacker-news
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/hacker-news
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/hacker-news/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Ahacker-news
@description Soothing pastel theme for Hacker News
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */

@media (prefers-color-scheme: light) {
  :root {
    color-scheme: dark;
    /* Header */
    /* Story points */
    /* Story ranking number */
    /* Comment text */
    /* Comment box */
    /* Poll questions */
    /* Text post content */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root [bgcolor="#fafaf0"],
  :root [bgcolor="#f6f6ef"] {
    background-color: #1e1e2e;
  }
  :root body {
    background-color: #181825;
    color: #cdd6f4;
  }
  :root td {
    color: #cdd6f4;
  }
  :root td[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
  :root td[bgcolor="#ff6600"] .pagetop,
  :root td[bgcolor="#ff6600"] .pagetop a {
    color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] img[src="y18.svg"] {
    content: url("data:image/svg+xml,%3Csvg%20height%3D%2218%22%20viewBox%3D%224%204%20188%20188%22%20width%3D%2218%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M4%204h188v188H4z%22%20fill%3D%22%23cba6f7%22/%3E%3Cpath%20d%3D%22M73.252%2045.01%2096%2092.401l22.748-47.391h19.566l-34.324%2064.487v41.493H88.01v-41.493L53.686%2045.01z%22%20fill%3D%22%2311111b%22/%3E%3C/svg%3E");
    border-color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] [color="#ffffff"] {
    color: #11111b;
  }
  :root td[bgcolor="#ffffaa"] {
    background-color: #f9e2af;
  }
  :root td[bgcolor="#ffffaa"] td {
    color: #11111b;
  }
  :root .subtext,
  :root .comhead,
  :root .subtext a:link,
  :root .comhead a:link,
  :root .subtext a:visited,
  :root .comhead a:visited,
  :root .subtext a:hover,
  :root .comhead a:hover {
    color: #9399b2 !important;
  }
  :root a:link {
    color: #89b4fa;
  }
  :root a:link:hover {
    color: #89dceb;
  }
  :root .hnmore a:link,
  :root a:visited {
    color: #b4befe;
  }
  :root [color="#3c963c"] {
    color: #a6e3a1;
  }
  :root .score {
    color: #a6adc8;
  }
  :root .title {
    color: #b4befe;
  }
  :root .commtext {
    color: #cdd6f4;
  }
  :root input,
  :root textarea,
  :root select {
    background-color: #181825;
    color: #cdd6f4;
    border-width: 1px;
    border-style: solid;
    border-color: #313244;
    border-radius: 2px;
  }
  :root input {
    padding: 2px;
  }
  :root td.comment > div > font {
    color: #cdd6f4;
  }
  :root .toptext {
    color: #cdd6f4;
  }
  :root .votearrow {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2016%22%20width%3D%2232%22%3E%3Cpath%20d%3D%22M2%2027%2016-2l14%2029z%22%20fill%3D%22%23a6adc8%22/%3E%3C/svg%3E");
  }
  :root .yclinks {
    color: #585b70;
  }
  :root b {
    color: #cdd6f4;
  }
  :root table[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    /* Header */
    /* Story points */
    /* Story ranking number */
    /* Comment text */
    /* Comment box */
    /* Poll questions */
    /* Text post content */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root [bgcolor="#fafaf0"],
  :root [bgcolor="#f6f6ef"] {
    background-color: #1e1e2e;
  }
  :root body {
    background-color: #181825;
    color: #cdd6f4;
  }
  :root td {
    color: #cdd6f4;
  }
  :root td[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
  :root td[bgcolor="#ff6600"] .pagetop,
  :root td[bgcolor="#ff6600"] .pagetop a {
    color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] img[src="y18.svg"] {
    content: url("data:image/svg+xml,%3Csvg%20height%3D%2218%22%20viewBox%3D%224%204%20188%20188%22%20width%3D%2218%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M4%204h188v188H4z%22%20fill%3D%22%23cba6f7%22/%3E%3Cpath%20d%3D%22M73.252%2045.01%2096%2092.401l22.748-47.391h19.566l-34.324%2064.487v41.493H88.01v-41.493L53.686%2045.01z%22%20fill%3D%22%2311111b%22/%3E%3C/svg%3E");
    border-color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] [color="#ffffff"] {
    color: #11111b;
  }
  :root td[bgcolor="#ffffaa"] {
    background-color: #f9e2af;
  }
  :root td[bgcolor="#ffffaa"] td {
    color: #11111b;
  }
  :root .subtext,
  :root .comhead,
  :root .subtext a:link,
  :root .comhead a:link,
  :root .subtext a:visited,
  :root .comhead a:visited,
  :root .subtext a:hover,
  :root .comhead a:hover {
    color: #9399b2 !important;
  }
  :root a:link {
    color: #89b4fa;
  }
  :root a:link:hover {
    color: #89dceb;
  }
  :root .hnmore a:link,
  :root a:visited {
    color: #b4befe;
  }
  :root [color="#3c963c"] {
    color: #a6e3a1;
  }
  :root .score {
    color: #a6adc8;
  }
  :root .title {
    color: #b4befe;
  }
  :root .commtext {
    color: #cdd6f4;
  }
  :root input,
  :root textarea,
  :root select {
    background-color: #181825;
    color: #cdd6f4;
    border-width: 1px;
    border-style: solid;
    border-color: #313244;
    border-radius: 2px;
  }
  :root input {
    padding: 2px;
  }
  :root td.comment > div > font {
    color: #cdd6f4;
  }
  :root .toptext {
    color: #cdd6f4;
  }
  :root .votearrow {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2016%22%20width%3D%2232%22%3E%3Cpath%20d%3D%22M2%2027%2016-2l14%2029z%22%20fill%3D%22%23a6adc8%22/%3E%3C/svg%3E");
  }
  :root .yclinks {
    color: #585b70;
  }
  :root b {
    color: #cdd6f4;
  }
  :root table[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
}

/* ==UserStyle==
@name Hacker News Catppuccin
@namespace github.com/catppuccin/userstyles/styles/hacker-news
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/hacker-news
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/hacker-news/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Ahacker-news
@description Soothing pastel theme for Hacker News
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */

@media (prefers-color-scheme: light) {
  :root {
    color-scheme: dark;
    /* Header */
    /* Story points */
    /* Story ranking number */
    /* Comment text */
    /* Comment box */
    /* Poll questions */
    /* Text post content */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root [bgcolor="#fafaf0"],
  :root [bgcolor="#f6f6ef"] {
    background-color: #1e1e2e;
  }
  :root body {
    background-color: #181825;
    color: #cdd6f4;
  }
  :root td {
    color: #cdd6f4;
  }
  :root td[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
  :root td[bgcolor="#ff6600"] .pagetop,
  :root td[bgcolor="#ff6600"] .pagetop a {
    color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] img[src="y18.svg"] {
    content: url("data:image/svg+xml,%3Csvg%20height%3D%2218%22%20viewBox%3D%224%204%20188%20188%22%20width%3D%2218%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M4%204h188v188H4z%22%20fill%3D%22%23cba6f7%22/%3E%3Cpath%20d%3D%22M73.252%2045.01%2096%2092.401l22.748-47.391h19.566l-34.324%2064.487v41.493H88.01v-41.493L53.686%2045.01z%22%20fill%3D%22%2311111b%22/%3E%3C/svg%3E");
    border-color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] [color="#ffffff"] {
    color: #11111b;
  }
  :root td[bgcolor="#ffffaa"] {
    background-color: #f9e2af;
  }
  :root td[bgcolor="#ffffaa"] td {
    color: #11111b;
  }
  :root .subtext,
  :root .comhead,
  :root .subtext a:link,
  :root .comhead a:link,
  :root .subtext a:visited,
  :root .comhead a:visited,
  :root .subtext a:hover,
  :root .comhead a:hover {
    color: #9399b2 !important;
  }
  :root a:link {
    color: #89b4fa;
  }
  :root a:link:hover {
    color: #89dceb;
  }
  :root .hnmore a:link,
  :root a:visited {
    color: #b4befe;
  }
  :root [color="#3c963c"] {
    color: #a6e3a1;
  }
  :root .score {
    color: #a6adc8;
  }
  :root .title {
    color: #b4befe;
  }
  :root .commtext {
    color: #cdd6f4;
  }
  :root input,
  :root textarea,
  :root select {
    background-color: #181825;
    color: #cdd6f4;
    border-width: 1px;
    border-style: solid;
    border-color: #313244;
    border-radius: 2px;
  }
  :root input {
    padding: 2px;
  }
  :root td.comment > div > font {
    color: #cdd6f4;
  }
  :root .toptext {
    color: #cdd6f4;
  }
  :root .votearrow {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2016%22%20width%3D%2232%22%3E%3Cpath%20d%3D%22M2%2027%2016-2l14%2029z%22%20fill%3D%22%23a6adc8%22/%3E%3C/svg%3E");
  }
  :root .yclinks {
    color: #585b70;
  }
  :root b {
    color: #cdd6f4;
  }
  :root table[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    /* Header */
    /* Story points */
    /* Story ranking number */
    /* Comment text */
    /* Comment box */
    /* Poll questions */
    /* Text post content */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root [bgcolor="#fafaf0"],
  :root [bgcolor="#f6f6ef"] {
    background-color: #1e1e2e;
  }
  :root body {
    background-color: #181825;
    color: #cdd6f4;
  }
  :root td {
    color: #cdd6f4;
  }
  :root td[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
  :root td[bgcolor="#ff6600"] .pagetop,
  :root td[bgcolor="#ff6600"] .pagetop a {
    color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] img[src="y18.svg"] {
    content: url("data:image/svg+xml,%3Csvg%20height%3D%2218%22%20viewBox%3D%224%204%20188%20188%22%20width%3D%2218%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M4%204h188v188H4z%22%20fill%3D%22%23cba6f7%22/%3E%3Cpath%20d%3D%22M73.252%2045.01%2096%2092.401l22.748-47.391h19.566l-34.324%2064.487v41.493H88.01v-41.493L53.686%2045.01z%22%20fill%3D%22%2311111b%22/%3E%3C/svg%3E");
    border-color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] [color="#ffffff"] {
    color: #11111b;
  }
  :root td[bgcolor="#ffffaa"] {
    background-color: #f9e2af;
  }
  :root td[bgcolor="#ffffaa"] td {
    color: #11111b;
  }
  :root .subtext,
  :root .comhead,
  :root .subtext a:link,
  :root .comhead a:link,
  :root .subtext a:visited,
  :root .comhead a:visited,
  :root .subtext a:hover,
  :root .comhead a:hover {
    color: #9399b2 !important;
  }
  :root a:link {
    color: #89b4fa;
  }
  :root a:link:hover {
    color: #89dceb;
  }
  :root .hnmore a:link,
  :root a:visited {
    color: #b4befe;
  }
  :root [color="#3c963c"] {
    color: #a6e3a1;
  }
  :root .score {
    color: #a6adc8;
  }
  :root .title {
    color: #b4befe;
  }
  :root .commtext {
    color: #cdd6f4;
  }
  :root input,
  :root textarea,
  :root select {
    background-color: #181825;
    color: #cdd6f4;
    border-width: 1px;
    border-style: solid;
    border-color: #313244;
    border-radius: 2px;
  }
  :root input {
    padding: 2px;
  }
  :root td.comment > div > font {
    color: #cdd6f4;
  }
  :root .toptext {
    color: #cdd6f4;
  }
  :root .votearrow {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2016%22%20width%3D%2232%22%3E%3Cpath%20d%3D%22M2%2027%2016-2l14%2029z%22%20fill%3D%22%23a6adc8%22/%3E%3C/svg%3E");
  }
  :root .yclinks {
    color: #585b70;
  }
  :root b {
    color: #cdd6f4;
  }
  :root table[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
}

/* ==UserStyle==
@name Hacker News Catppuccin
@namespace github.com/catppuccin/userstyles/styles/hacker-news
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/hacker-news
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/hacker-news/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Ahacker-news
@description Soothing pastel theme for Hacker News
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */

@media (prefers-color-scheme: light) {
  :root {
    color-scheme: dark;
    /* Header */
    /* Story points */
    /* Story ranking number */
    /* Comment text */
    /* Comment box */
    /* Poll questions */
    /* Text post content */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root [bgcolor="#fafaf0"],
  :root [bgcolor="#f6f6ef"] {
    background-color: #1e1e2e;
  }
  :root body {
    background-color: #181825;
    color: #cdd6f4;
  }
  :root td {
    color: #cdd6f4;
  }
  :root td[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
  :root td[bgcolor="#ff6600"] .pagetop,
  :root td[bgcolor="#ff6600"] .pagetop a {
    color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] img[src="y18.svg"] {
    content: url("data:image/svg+xml,%3Csvg%20height%3D%2218%22%20viewBox%3D%224%204%20188%20188%22%20width%3D%2218%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M4%204h188v188H4z%22%20fill%3D%22%23cba6f7%22/%3E%3Cpath%20d%3D%22M73.252%2045.01%2096%2092.401l22.748-47.391h19.566l-34.324%2064.487v41.493H88.01v-41.493L53.686%2045.01z%22%20fill%3D%22%2311111b%22/%3E%3C/svg%3E");
    border-color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] [color="#ffffff"] {
    color: #11111b;
  }
  :root td[bgcolor="#ffffaa"] {
    background-color: #f9e2af;
  }
  :root td[bgcolor="#ffffaa"] td {
    color: #11111b;
  }
  :root .subtext,
  :root .comhead,
  :root .subtext a:link,
  :root .comhead a:link,
  :root .subtext a:visited,
  :root .comhead a:visited,
  :root .subtext a:hover,
  :root .comhead a:hover {
    color: #9399b2 !important;
  }
  :root a:link {
    color: #89b4fa;
  }
  :root a:link:hover {
    color: #89dceb;
  }
  :root .hnmore a:link,
  :root a:visited {
    color: #b4befe;
  }
  :root [color="#3c963c"] {
    color: #a6e3a1;
  }
  :root .score {
    color: #a6adc8;
  }
  :root .title {
    color: #b4befe;
  }
  :root .commtext {
    color: #cdd6f4;
  }
  :root input,
  :root textarea,
  :root select {
    background-color: #181825;
    color: #cdd6f4;
    border-width: 1px;
    border-style: solid;
    border-color: #313244;
    border-radius: 2px;
  }
  :root input {
    padding: 2px;
  }
  :root td.comment > div > font {
    color: #cdd6f4;
  }
  :root .toptext {
    color: #cdd6f4;
  }
  :root .votearrow {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2016%22%20width%3D%2232%22%3E%3Cpath%20d%3D%22M2%2027%2016-2l14%2029z%22%20fill%3D%22%23a6adc8%22/%3E%3C/svg%3E");
  }
  :root .yclinks {
    color: #585b70;
  }
  :root b {
    color: #cdd6f4;
  }
  :root table[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    /* Header */
    /* Story points */
    /* Story ranking number */
    /* Comment text */
    /* Comment box */
    /* Poll questions */
    /* Text post content */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root [bgcolor="#fafaf0"],
  :root [bgcolor="#f6f6ef"] {
    background-color: #1e1e2e;
  }
  :root body {
    background-color: #181825;
    color: #cdd6f4;
  }
  :root td {
    color: #cdd6f4;
  }
  :root td[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
  :root td[bgcolor="#ff6600"] .pagetop,
  :root td[bgcolor="#ff6600"] .pagetop a {
    color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] img[src="y18.svg"] {
    content: url("data:image/svg+xml,%3Csvg%20height%3D%2218%22%20viewBox%3D%224%204%20188%20188%22%20width%3D%2218%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M4%204h188v188H4z%22%20fill%3D%22%23cba6f7%22/%3E%3Cpath%20d%3D%22M73.252%2045.01%2096%2092.401l22.748-47.391h19.566l-34.324%2064.487v41.493H88.01v-41.493L53.686%2045.01z%22%20fill%3D%22%2311111b%22/%3E%3C/svg%3E");
    border-color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] [color="#ffffff"] {
    color: #11111b;
  }
  :root td[bgcolor="#ffffaa"] {
    background-color: #f9e2af;
  }
  :root td[bgcolor="#ffffaa"] td {
    color: #11111b;
  }
  :root .subtext,
  :root .comhead,
  :root .subtext a:link,
  :root .comhead a:link,
  :root .subtext a:visited,
  :root .comhead a:visited,
  :root .subtext a:hover,
  :root .comhead a:hover {
    color: #9399b2 !important;
  }
  :root a:link {
    color: #89b4fa;
  }
  :root a:link:hover {
    color: #89dceb;
  }
  :root .hnmore a:link,
  :root a:visited {
    color: #b4befe;
  }
  :root [color="#3c963c"] {
    color: #a6e3a1;
  }
  :root .score {
    color: #a6adc8;
  }
  :root .title {
    color: #b4befe;
  }
  :root .commtext {
    color: #cdd6f4;
  }
  :root input,
  :root textarea,
  :root select {
    background-color: #181825;
    color: #cdd6f4;
    border-width: 1px;
    border-style: solid;
    border-color: #313244;
    border-radius: 2px;
  }
  :root input {
    padding: 2px;
  }
  :root td.comment > div > font {
    color: #cdd6f4;
  }
  :root .toptext {
    color: #cdd6f4;
  }
  :root .votearrow {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2016%22%20width%3D%2232%22%3E%3Cpath%20d%3D%22M2%2027%2016-2l14%2029z%22%20fill%3D%22%23a6adc8%22/%3E%3C/svg%3E");
  }
  :root .yclinks {
    color: #585b70;
  }
  :root b {
    color: #cdd6f4;
  }
  :root table[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
}

/* ==UserStyle==
@name Hacker News Catppuccin
@namespace github.com/catppuccin/userstyles/styles/hacker-news
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/hacker-news
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/hacker-news/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Ahacker-news
@description Soothing pastel theme for Hacker News
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */

@media (prefers-color-scheme: light) {
  :root {
    color-scheme: dark;
    /* Header */
    /* Story points */
    /* Story ranking number */
    /* Comment text */
    /* Comment box */
    /* Poll questions */
    /* Text post content */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root [bgcolor="#fafaf0"],
  :root [bgcolor="#f6f6ef"] {
    background-color: #1e1e2e;
  }
  :root body {
    background-color: #181825;
    color: #cdd6f4;
  }
  :root td {
    color: #cdd6f4;
  }
  :root td[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
  :root td[bgcolor="#ff6600"] .pagetop,
  :root td[bgcolor="#ff6600"] .pagetop a {
    color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] img[src="y18.svg"] {
    content: url("data:image/svg+xml,%3Csvg%20height%3D%2218%22%20viewBox%3D%224%204%20188%20188%22%20width%3D%2218%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M4%204h188v188H4z%22%20fill%3D%22%23cba6f7%22/%3E%3Cpath%20d%3D%22M73.252%2045.01%2096%2092.401l22.748-47.391h19.566l-34.324%2064.487v41.493H88.01v-41.493L53.686%2045.01z%22%20fill%3D%22%2311111b%22/%3E%3C/svg%3E");
    border-color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] [color="#ffffff"] {
    color: #11111b;
  }
  :root td[bgcolor="#ffffaa"] {
    background-color: #f9e2af;
  }
  :root td[bgcolor="#ffffaa"] td {
    color: #11111b;
  }
  :root .subtext,
  :root .comhead,
  :root .subtext a:link,
  :root .comhead a:link,
  :root .subtext a:visited,
  :root .comhead a:visited,
  :root .subtext a:hover,
  :root .comhead a:hover {
    color: #9399b2 !important;
  }
  :root a:link {
    color: #89b4fa;
  }
  :root a:link:hover {
    color: #89dceb;
  }
  :root .hnmore a:link,
  :root a:visited {
    color: #b4befe;
  }
  :root [color="#3c963c"] {
    color: #a6e3a1;
  }
  :root .score {
    color: #a6adc8;
  }
  :root .title {
    color: #b4befe;
  }
  :root .commtext {
    color: #cdd6f4;
  }
  :root input,
  :root textarea,
  :root select {
    background-color: #181825;
    color: #cdd6f4;
    border-width: 1px;
    border-style: solid;
    border-color: #313244;
    border-radius: 2px;
  }
  :root input {
    padding: 2px;
  }
  :root td.comment > div > font {
    color: #cdd6f4;
  }
  :root .toptext {
    color: #cdd6f4;
  }
  :root .votearrow {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2016%22%20width%3D%2232%22%3E%3Cpath%20d%3D%22M2%2027%2016-2l14%2029z%22%20fill%3D%22%23a6adc8%22/%3E%3C/svg%3E");
  }
  :root .yclinks {
    color: #585b70;
  }
  :root b {
    color: #cdd6f4;
  }
  :root table[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    /* Header */
    /* Story points */
    /* Story ranking number */
    /* Comment text */
    /* Comment box */
    /* Poll questions */
    /* Text post content */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root [bgcolor="#fafaf0"],
  :root [bgcolor="#f6f6ef"] {
    background-color: #1e1e2e;
  }
  :root body {
    background-color: #181825;
    color: #cdd6f4;
  }
  :root td {
    color: #cdd6f4;
  }
  :root td[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
  :root td[bgcolor="#ff6600"] .pagetop,
  :root td[bgcolor="#ff6600"] .pagetop a {
    color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] img[src="y18.svg"] {
    content: url("data:image/svg+xml,%3Csvg%20height%3D%2218%22%20viewBox%3D%224%204%20188%20188%22%20width%3D%2218%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M4%204h188v188H4z%22%20fill%3D%22%23cba6f7%22/%3E%3Cpath%20d%3D%22M73.252%2045.01%2096%2092.401l22.748-47.391h19.566l-34.324%2064.487v41.493H88.01v-41.493L53.686%2045.01z%22%20fill%3D%22%2311111b%22/%3E%3C/svg%3E");
    border-color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] [color="#ffffff"] {
    color: #11111b;
  }
  :root td[bgcolor="#ffffaa"] {
    background-color: #f9e2af;
  }
  :root td[bgcolor="#ffffaa"] td {
    color: #11111b;
  }
  :root .subtext,
  :root .comhead,
  :root .subtext a:link,
  :root .comhead a:link,
  :root .subtext a:visited,
  :root .comhead a:visited,
  :root .subtext a:hover,
  :root .comhead a:hover {
    color: #9399b2 !important;
  }
  :root a:link {
    color: #89b4fa;
  }
  :root a:link:hover {
    color: #89dceb;
  }
  :root .hnmore a:link,
  :root a:visited {
    color: #b4befe;
  }
  :root [color="#3c963c"] {
    color: #a6e3a1;
  }
  :root .score {
    color: #a6adc8;
  }
  :root .title {
    color: #b4befe;
  }
  :root .commtext {
    color: #cdd6f4;
  }
  :root input,
  :root textarea,
  :root select {
    background-color: #181825;
    color: #cdd6f4;
    border-width: 1px;
    border-style: solid;
    border-color: #313244;
    border-radius: 2px;
  }
  :root input {
    padding: 2px;
  }
  :root td.comment > div > font {
    color: #cdd6f4;
  }
  :root .toptext {
    color: #cdd6f4;
  }
  :root .votearrow {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2016%22%20width%3D%2232%22%3E%3Cpath%20d%3D%22M2%2027%2016-2l14%2029z%22%20fill%3D%22%23a6adc8%22/%3E%3C/svg%3E");
  }
  :root .yclinks {
    color: #585b70;
  }
  :root b {
    color: #cdd6f4;
  }
  :root table[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
}

/* ==UserStyle==
@name Hacker News Catppuccin
@namespace github.com/catppuccin/userstyles/styles/hacker-news
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/hacker-news
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/hacker-news/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Ahacker-news
@description Soothing pastel theme for Hacker News
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */

@media (prefers-color-scheme: light) {
  :root {
    color-scheme: dark;
    /* Header */
    /* Story points */
    /* Story ranking number */
    /* Comment text */
    /* Comment box */
    /* Poll questions */
    /* Text post content */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root [bgcolor="#fafaf0"],
  :root [bgcolor="#f6f6ef"] {
    background-color: #1e1e2e;
  }
  :root body {
    background-color: #181825;
    color: #cdd6f4;
  }
  :root td {
    color: #cdd6f4;
  }
  :root td[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
  :root td[bgcolor="#ff6600"] .pagetop,
  :root td[bgcolor="#ff6600"] .pagetop a {
    color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] img[src="y18.svg"] {
    content: url("data:image/svg+xml,%3Csvg%20height%3D%2218%22%20viewBox%3D%224%204%20188%20188%22%20width%3D%2218%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M4%204h188v188H4z%22%20fill%3D%22%23cba6f7%22/%3E%3Cpath%20d%3D%22M73.252%2045.01%2096%2092.401l22.748-47.391h19.566l-34.324%2064.487v41.493H88.01v-41.493L53.686%2045.01z%22%20fill%3D%22%2311111b%22/%3E%3C/svg%3E");
    border-color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] [color="#ffffff"] {
    color: #11111b;
  }
  :root td[bgcolor="#ffffaa"] {
    background-color: #f9e2af;
  }
  :root td[bgcolor="#ffffaa"] td {
    color: #11111b;
  }
  :root .subtext,
  :root .comhead,
  :root .subtext a:link,
  :root .comhead a:link,
  :root .subtext a:visited,
  :root .comhead a:visited,
  :root .subtext a:hover,
  :root .comhead a:hover {
    color: #9399b2 !important;
  }
  :root a:link {
    color: #89b4fa;
  }
  :root a:link:hover {
    color: #89dceb;
  }
  :root .hnmore a:link,
  :root a:visited {
    color: #b4befe;
  }
  :root [color="#3c963c"] {
    color: #a6e3a1;
  }
  :root .score {
    color: #a6adc8;
  }
  :root .title {
    color: #b4befe;
  }
  :root .commtext {
    color: #cdd6f4;
  }
  :root input,
  :root textarea,
  :root select {
    background-color: #181825;
    color: #cdd6f4;
    border-width: 1px;
    border-style: solid;
    border-color: #313244;
    border-radius: 2px;
  }
  :root input {
    padding: 2px;
  }
  :root td.comment > div > font {
    color: #cdd6f4;
  }
  :root .toptext {
    color: #cdd6f4;
  }
  :root .votearrow {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2016%22%20width%3D%2232%22%3E%3Cpath%20d%3D%22M2%2027%2016-2l14%2029z%22%20fill%3D%22%23a6adc8%22/%3E%3C/svg%3E");
  }
  :root .yclinks {
    color: #585b70;
  }
  :root b {
    color: #cdd6f4;
  }
  :root table[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    /* Header */
    /* Story points */
    /* Story ranking number */
    /* Comment text */
    /* Comment box */
    /* Poll questions */
    /* Text post content */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root [bgcolor="#fafaf0"],
  :root [bgcolor="#f6f6ef"] {
    background-color: #1e1e2e;
  }
  :root body {
    background-color: #181825;
    color: #cdd6f4;
  }
  :root td {
    color: #cdd6f4;
  }
  :root td[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
  :root td[bgcolor="#ff6600"] .pagetop,
  :root td[bgcolor="#ff6600"] .pagetop a {
    color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] img[src="y18.svg"] {
    content: url("data:image/svg+xml,%3Csvg%20height%3D%2218%22%20viewBox%3D%224%204%20188%20188%22%20width%3D%2218%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M4%204h188v188H4z%22%20fill%3D%22%23cba6f7%22/%3E%3Cpath%20d%3D%22M73.252%2045.01%2096%2092.401l22.748-47.391h19.566l-34.324%2064.487v41.493H88.01v-41.493L53.686%2045.01z%22%20fill%3D%22%2311111b%22/%3E%3C/svg%3E");
    border-color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] [color="#ffffff"] {
    color: #11111b;
  }
  :root td[bgcolor="#ffffaa"] {
    background-color: #f9e2af;
  }
  :root td[bgcolor="#ffffaa"] td {
    color: #11111b;
  }
  :root .subtext,
  :root .comhead,
  :root .subtext a:link,
  :root .comhead a:link,
  :root .subtext a:visited,
  :root .comhead a:visited,
  :root .subtext a:hover,
  :root .comhead a:hover {
    color: #9399b2 !important;
  }
  :root a:link {
    color: #89b4fa;
  }
  :root a:link:hover {
    color: #89dceb;
  }
  :root .hnmore a:link,
  :root a:visited {
    color: #b4befe;
  }
  :root [color="#3c963c"] {
    color: #a6e3a1;
  }
  :root .score {
    color: #a6adc8;
  }
  :root .title {
    color: #b4befe;
  }
  :root .commtext {
    color: #cdd6f4;
  }
  :root input,
  :root textarea,
  :root select {
    background-color: #181825;
    color: #cdd6f4;
    border-width: 1px;
    border-style: solid;
    border-color: #313244;
    border-radius: 2px;
  }
  :root input {
    padding: 2px;
  }
  :root td.comment > div > font {
    color: #cdd6f4;
  }
  :root .toptext {
    color: #cdd6f4;
  }
  :root .votearrow {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2016%22%20width%3D%2232%22%3E%3Cpath%20d%3D%22M2%2027%2016-2l14%2029z%22%20fill%3D%22%23a6adc8%22/%3E%3C/svg%3E");
  }
  :root .yclinks {
    color: #585b70;
  }
  :root b {
    color: #cdd6f4;
  }
  :root table[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
}

/* ==UserStyle==
@name Hacker News Catppuccin
@namespace github.com/catppuccin/userstyles/styles/hacker-news
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/hacker-news
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/hacker-news/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Ahacker-news
@description Soothing pastel theme for Hacker News
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */

@media (prefers-color-scheme: light) {
  :root {
    color-scheme: dark;
    /* Header */
    /* Story points */
    /* Story ranking number */
    /* Comment text */
    /* Comment box */
    /* Poll questions */
    /* Text post content */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root [bgcolor="#fafaf0"],
  :root [bgcolor="#f6f6ef"] {
    background-color: #1e1e2e;
  }
  :root body {
    background-color: #181825;
    color: #cdd6f4;
  }
  :root td {
    color: #cdd6f4;
  }
  :root td[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
  :root td[bgcolor="#ff6600"] .pagetop,
  :root td[bgcolor="#ff6600"] .pagetop a {
    color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] img[src="y18.svg"] {
    content: url("data:image/svg+xml,%3Csvg%20height%3D%2218%22%20viewBox%3D%224%204%20188%20188%22%20width%3D%2218%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M4%204h188v188H4z%22%20fill%3D%22%23cba6f7%22/%3E%3Cpath%20d%3D%22M73.252%2045.01%2096%2092.401l22.748-47.391h19.566l-34.324%2064.487v41.493H88.01v-41.493L53.686%2045.01z%22%20fill%3D%22%2311111b%22/%3E%3C/svg%3E");
    border-color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] [color="#ffffff"] {
    color: #11111b;
  }
  :root td[bgcolor="#ffffaa"] {
    background-color: #f9e2af;
  }
  :root td[bgcolor="#ffffaa"] td {
    color: #11111b;
  }
  :root .subtext,
  :root .comhead,
  :root .subtext a:link,
  :root .comhead a:link,
  :root .subtext a:visited,
  :root .comhead a:visited,
  :root .subtext a:hover,
  :root .comhead a:hover {
    color: #9399b2 !important;
  }
  :root a:link {
    color: #89b4fa;
  }
  :root a:link:hover {
    color: #89dceb;
  }
  :root .hnmore a:link,
  :root a:visited {
    color: #b4befe;
  }
  :root [color="#3c963c"] {
    color: #a6e3a1;
  }
  :root .score {
    color: #a6adc8;
  }
  :root .title {
    color: #b4befe;
  }
  :root .commtext {
    color: #cdd6f4;
  }
  :root input,
  :root textarea,
  :root select {
    background-color: #181825;
    color: #cdd6f4;
    border-width: 1px;
    border-style: solid;
    border-color: #313244;
    border-radius: 2px;
  }
  :root input {
    padding: 2px;
  }
  :root td.comment > div > font {
    color: #cdd6f4;
  }
  :root .toptext {
    color: #cdd6f4;
  }
  :root .votearrow {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2016%22%20width%3D%2232%22%3E%3Cpath%20d%3D%22M2%2027%2016-2l14%2029z%22%20fill%3D%22%23a6adc8%22/%3E%3C/svg%3E");
  }
  :root .yclinks {
    color: #585b70;
  }
  :root b {
    color: #cdd6f4;
  }
  :root table[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    /* Header */
    /* Story points */
    /* Story ranking number */
    /* Comment text */
    /* Comment box */
    /* Poll questions */
    /* Text post content */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root [bgcolor="#fafaf0"],
  :root [bgcolor="#f6f6ef"] {
    background-color: #1e1e2e;
  }
  :root body {
    background-color: #181825;
    color: #cdd6f4;
  }
  :root td {
    color: #cdd6f4;
  }
  :root td[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
  :root td[bgcolor="#ff6600"] .pagetop,
  :root td[bgcolor="#ff6600"] .pagetop a {
    color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] img[src="y18.svg"] {
    content: url("data:image/svg+xml,%3Csvg%20height%3D%2218%22%20viewBox%3D%224%204%20188%20188%22%20width%3D%2218%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M4%204h188v188H4z%22%20fill%3D%22%23cba6f7%22/%3E%3Cpath%20d%3D%22M73.252%2045.01%2096%2092.401l22.748-47.391h19.566l-34.324%2064.487v41.493H88.01v-41.493L53.686%2045.01z%22%20fill%3D%22%2311111b%22/%3E%3C/svg%3E");
    border-color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] [color="#ffffff"] {
    color: #11111b;
  }
  :root td[bgcolor="#ffffaa"] {
    background-color: #f9e2af;
  }
  :root td[bgcolor="#ffffaa"] td {
    color: #11111b;
  }
  :root .subtext,
  :root .comhead,
  :root .subtext a:link,
  :root .comhead a:link,
  :root .subtext a:visited,
  :root .comhead a:visited,
  :root .subtext a:hover,
  :root .comhead a:hover {
    color: #9399b2 !important;
  }
  :root a:link {
    color: #89b4fa;
  }
  :root a:link:hover {
    color: #89dceb;
  }
  :root .hnmore a:link,
  :root a:visited {
    color: #b4befe;
  }
  :root [color="#3c963c"] {
    color: #a6e3a1;
  }
  :root .score {
    color: #a6adc8;
  }
  :root .title {
    color: #b4befe;
  }
  :root .commtext {
    color: #cdd6f4;
  }
  :root input,
  :root textarea,
  :root select {
    background-color: #181825;
    color: #cdd6f4;
    border-width: 1px;
    border-style: solid;
    border-color: #313244;
    border-radius: 2px;
  }
  :root input {
    padding: 2px;
  }
  :root td.comment > div > font {
    color: #cdd6f4;
  }
  :root .toptext {
    color: #cdd6f4;
  }
  :root .votearrow {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2016%22%20width%3D%2232%22%3E%3Cpath%20d%3D%22M2%2027%2016-2l14%2029z%22%20fill%3D%22%23a6adc8%22/%3E%3C/svg%3E");
  }
  :root .yclinks {
    color: #585b70;
  }
  :root b {
    color: #cdd6f4;
  }
  :root table[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
}

/* ==UserStyle==
@name Hacker News Catppuccin
@namespace github.com/catppuccin/userstyles/styles/hacker-news
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/hacker-news
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/hacker-news/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Ahacker-news
@description Soothing pastel theme for Hacker News
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */

@media (prefers-color-scheme: light) {
  :root {
    color-scheme: dark;
    /* Header */
    /* Story points */
    /* Story ranking number */
    /* Comment text */
    /* Comment box */
    /* Poll questions */
    /* Text post content */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root [bgcolor="#fafaf0"],
  :root [bgcolor="#f6f6ef"] {
    background-color: #1e1e2e;
  }
  :root body {
    background-color: #181825;
    color: #cdd6f4;
  }
  :root td {
    color: #cdd6f4;
  }
  :root td[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
  :root td[bgcolor="#ff6600"] .pagetop,
  :root td[bgcolor="#ff6600"] .pagetop a {
    color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] img[src="y18.svg"] {
    content: url("data:image/svg+xml,%3Csvg%20height%3D%2218%22%20viewBox%3D%224%204%20188%20188%22%20width%3D%2218%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M4%204h188v188H4z%22%20fill%3D%22%23cba6f7%22/%3E%3Cpath%20d%3D%22M73.252%2045.01%2096%2092.401l22.748-47.391h19.566l-34.324%2064.487v41.493H88.01v-41.493L53.686%2045.01z%22%20fill%3D%22%2311111b%22/%3E%3C/svg%3E");
    border-color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] [color="#ffffff"] {
    color: #11111b;
  }
  :root td[bgcolor="#ffffaa"] {
    background-color: #f9e2af;
  }
  :root td[bgcolor="#ffffaa"] td {
    color: #11111b;
  }
  :root .subtext,
  :root .comhead,
  :root .subtext a:link,
  :root .comhead a:link,
  :root .subtext a:visited,
  :root .comhead a:visited,
  :root .subtext a:hover,
  :root .comhead a:hover {
    color: #9399b2 !important;
  }
  :root a:link {
    color: #89b4fa;
  }
  :root a:link:hover {
    color: #89dceb;
  }
  :root .hnmore a:link,
  :root a:visited {
    color: #b4befe;
  }
  :root [color="#3c963c"] {
    color: #a6e3a1;
  }
  :root .score {
    color: #a6adc8;
  }
  :root .title {
    color: #b4befe;
  }
  :root .commtext {
    color: #cdd6f4;
  }
  :root input,
  :root textarea,
  :root select {
    background-color: #181825;
    color: #cdd6f4;
    border-width: 1px;
    border-style: solid;
    border-color: #313244;
    border-radius: 2px;
  }
  :root input {
    padding: 2px;
  }
  :root td.comment > div > font {
    color: #cdd6f4;
  }
  :root .toptext {
    color: #cdd6f4;
  }
  :root .votearrow {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2016%22%20width%3D%2232%22%3E%3Cpath%20d%3D%22M2%2027%2016-2l14%2029z%22%20fill%3D%22%23a6adc8%22/%3E%3C/svg%3E");
  }
  :root .yclinks {
    color: #585b70;
  }
  :root b {
    color: #cdd6f4;
  }
  :root table[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    /* Header */
    /* Story points */
    /* Story ranking number */
    /* Comment text */
    /* Comment box */
    /* Poll questions */
    /* Text post content */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root [bgcolor="#fafaf0"],
  :root [bgcolor="#f6f6ef"] {
    background-color: #1e1e2e;
  }
  :root body {
    background-color: #181825;
    color: #cdd6f4;
  }
  :root td {
    color: #cdd6f4;
  }
  :root td[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
  :root td[bgcolor="#ff6600"] .pagetop,
  :root td[bgcolor="#ff6600"] .pagetop a {
    color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] img[src="y18.svg"] {
    content: url("data:image/svg+xml,%3Csvg%20height%3D%2218%22%20viewBox%3D%224%204%20188%20188%22%20width%3D%2218%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M4%204h188v188H4z%22%20fill%3D%22%23cba6f7%22/%3E%3Cpath%20d%3D%22M73.252%2045.01%2096%2092.401l22.748-47.391h19.566l-34.324%2064.487v41.493H88.01v-41.493L53.686%2045.01z%22%20fill%3D%22%2311111b%22/%3E%3C/svg%3E");
    border-color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] [color="#ffffff"] {
    color: #11111b;
  }
  :root td[bgcolor="#ffffaa"] {
    background-color: #f9e2af;
  }
  :root td[bgcolor="#ffffaa"] td {
    color: #11111b;
  }
  :root .subtext,
  :root .comhead,
  :root .subtext a:link,
  :root .comhead a:link,
  :root .subtext a:visited,
  :root .comhead a:visited,
  :root .subtext a:hover,
  :root .comhead a:hover {
    color: #9399b2 !important;
  }
  :root a:link {
    color: #89b4fa;
  }
  :root a:link:hover {
    color: #89dceb;
  }
  :root .hnmore a:link,
  :root a:visited {
    color: #b4befe;
  }
  :root [color="#3c963c"] {
    color: #a6e3a1;
  }
  :root .score {
    color: #a6adc8;
  }
  :root .title {
    color: #b4befe;
  }
  :root .commtext {
    color: #cdd6f4;
  }
  :root input,
  :root textarea,
  :root select {
    background-color: #181825;
    color: #cdd6f4;
    border-width: 1px;
    border-style: solid;
    border-color: #313244;
    border-radius: 2px;
  }
  :root input {
    padding: 2px;
  }
  :root td.comment > div > font {
    color: #cdd6f4;
  }
  :root .toptext {
    color: #cdd6f4;
  }
  :root .votearrow {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2016%22%20width%3D%2232%22%3E%3Cpath%20d%3D%22M2%2027%2016-2l14%2029z%22%20fill%3D%22%23a6adc8%22/%3E%3C/svg%3E");
  }
  :root .yclinks {
    color: #585b70;
  }
  :root b {
    color: #cdd6f4;
  }
  :root table[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
}

/* ==UserStyle==
@name Hacker News Catppuccin
@namespace github.com/catppuccin/userstyles/styles/hacker-news
@homepageURL https://github.com/catppuccin/userstyles/tree/main/styles/hacker-news
@version 2025.09.06
@updateURL https://github.com/catppuccin/userstyles/raw/main/styles/hacker-news/catppuccin.user.less
@supportURL https://github.com/catppuccin/userstyles/issues?q=is%3Aopen+is%3Aissue+label%3Ahacker-news
@description Soothing pastel theme for Hacker News
@author Catppuccin
@license MIT

@preprocessor less
@var select lightFlavor "Light Flavor" ["latte:Latte*", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha"]
@var select darkFlavor "Dark Flavor" ["latte:Latte", "frappe:Frappé", "macchiato:Macchiato", "mocha:Mocha*"]
@var select accentColor "Accent" ["rosewater:Rosewater", "flamingo:Flamingo", "pink:Pink", "mauve:Mauve*", "red:Red", "maroon:Maroon", "peach:Peach", "yellow:Yellow", "green:Green", "teal:Teal", "blue:Blue", "sapphire:Sapphire", "sky:Sky", "lavender:Lavender", "subtext0:Gray"]
==/UserStyle== */
/* deno-fmt-ignore */
/* deno-fmt-ignore */

@media (prefers-color-scheme: light) {
  :root {
    color-scheme: dark;
    /* Header */
    /* Story points */
    /* Story ranking number */
    /* Comment text */
    /* Comment box */
    /* Poll questions */
    /* Text post content */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root [bgcolor="#fafaf0"],
  :root [bgcolor="#f6f6ef"] {
    background-color: #1e1e2e;
  }
  :root body {
    background-color: #181825;
    color: #cdd6f4;
  }
  :root td {
    color: #cdd6f4;
  }
  :root td[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
  :root td[bgcolor="#ff6600"] .pagetop,
  :root td[bgcolor="#ff6600"] .pagetop a {
    color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] img[src="y18.svg"] {
    content: url("data:image/svg+xml,%3Csvg%20height%3D%2218%22%20viewBox%3D%224%204%20188%20188%22%20width%3D%2218%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M4%204h188v188H4z%22%20fill%3D%22%23cba6f7%22/%3E%3Cpath%20d%3D%22M73.252%2045.01%2096%2092.401l22.748-47.391h19.566l-34.324%2064.487v41.493H88.01v-41.493L53.686%2045.01z%22%20fill%3D%22%2311111b%22/%3E%3C/svg%3E");
    border-color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] [color="#ffffff"] {
    color: #11111b;
  }
  :root td[bgcolor="#ffffaa"] {
    background-color: #f9e2af;
  }
  :root td[bgcolor="#ffffaa"] td {
    color: #11111b;
  }
  :root .subtext,
  :root .comhead,
  :root .subtext a:link,
  :root .comhead a:link,
  :root .subtext a:visited,
  :root .comhead a:visited,
  :root .subtext a:hover,
  :root .comhead a:hover {
    color: #9399b2 !important;
  }
  :root a:link {
    color: #89b4fa;
  }
  :root a:link:hover {
    color: #89dceb;
  }
  :root .hnmore a:link,
  :root a:visited {
    color: #b4befe;
  }
  :root [color="#3c963c"] {
    color: #a6e3a1;
  }
  :root .score {
    color: #a6adc8;
  }
  :root .title {
    color: #b4befe;
  }
  :root .commtext {
    color: #cdd6f4;
  }
  :root input,
  :root textarea,
  :root select {
    background-color: #181825;
    color: #cdd6f4;
    border-width: 1px;
    border-style: solid;
    border-color: #313244;
    border-radius: 2px;
  }
  :root input {
    padding: 2px;
  }
  :root td.comment > div > font {
    color: #cdd6f4;
  }
  :root .toptext {
    color: #cdd6f4;
  }
  :root .votearrow {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2016%22%20width%3D%2232%22%3E%3Cpath%20d%3D%22M2%2027%2016-2l14%2029z%22%20fill%3D%22%23a6adc8%22/%3E%3C/svg%3E");
  }
  :root .yclinks {
    color: #585b70;
  }
  :root b {
    color: #cdd6f4;
  }
  :root table[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    /* Header */
    /* Story points */
    /* Story ranking number */
    /* Comment text */
    /* Comment box */
    /* Poll questions */
    /* Text post content */
  }
  :root ::selection {
    background-color: rgba(203, 166, 247, 0.3);
  }
  :root input::placeholder,
  :root textarea::placeholder {
    color: #a6adc8 !important;
  }
  :root [bgcolor="#fafaf0"],
  :root [bgcolor="#f6f6ef"] {
    background-color: #1e1e2e;
  }
  :root body {
    background-color: #181825;
    color: #cdd6f4;
  }
  :root td {
    color: #cdd6f4;
  }
  :root td[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
  :root td[bgcolor="#ff6600"] .pagetop,
  :root td[bgcolor="#ff6600"] .pagetop a {
    color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] img[src="y18.svg"] {
    content: url("data:image/svg+xml,%3Csvg%20height%3D%2218%22%20viewBox%3D%224%204%20188%20188%22%20width%3D%2218%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M4%204h188v188H4z%22%20fill%3D%22%23cba6f7%22/%3E%3Cpath%20d%3D%22M73.252%2045.01%2096%2092.401l22.748-47.391h19.566l-34.324%2064.487v41.493H88.01v-41.493L53.686%2045.01z%22%20fill%3D%22%2311111b%22/%3E%3C/svg%3E");
    border-color: #11111b !important;
  }
  :root td[bgcolor="#ff6600"] [color="#ffffff"] {
    color: #11111b;
  }
  :root td[bgcolor="#ffffaa"] {
    background-color: #f9e2af;
  }
  :root td[bgcolor="#ffffaa"] td {
    color: #11111b;
  }
  :root .subtext,
  :root .comhead,
  :root .subtext a:link,
  :root .comhead a:link,
  :root .subtext a:visited,
  :root .comhead a:visited,
  :root .subtext a:hover,
  :root .comhead a:hover {
    color: #9399b2 !important;
  }
  :root a:link {
    color: #89b4fa;
  }
  :root a:link:hover {
    color: #89dceb;
  }
  :root .hnmore a:link,
  :root a:visited {
    color: #b4befe;
  }
  :root [color="#3c963c"] {
    color: #a6e3a1;
  }
  :root .score {
    color: #a6adc8;
  }
  :root .title {
    color: #b4befe;
  }
  :root .commtext {
    color: #cdd6f4;
  }
  :root input,
  :root textarea,
  :root select {
    background-color: #181825;
    color: #cdd6f4;
    border-width: 1px;
    border-style: solid;
    border-color: #313244;
    border-radius: 2px;
  }
  :root input {
    padding: 2px;
  }
  :root td.comment > div > font {
    color: #cdd6f4;
  }
  :root .toptext {
    color: #cdd6f4;
  }
  :root .votearrow {
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2016%22%20width%3D%2232%22%3E%3Cpath%20d%3D%22M2%2027%2016-2l14%2029z%22%20fill%3D%22%23a6adc8%22/%3E%3C/svg%3E");
  }
  :root .yclinks {
    color: #585b70;
  }
  :root b {
    color: #cdd6f4;
  }
  :root table[bgcolor="#ff6600"] {
    background-color: #cba6f7;
  }
}

`)