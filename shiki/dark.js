const toggleButton = document.createElement("button");
toggleButton.innerHTML = "O";
toggleButton.id = "themeToggler";
toggleButton.style = `
  background: #62606629;
  font-size: 20px;
  padding: 0 5px 0 5px;
  top: 60px;
  position: fixed;
  right: 10px;
  border: 2px dashed currentColor;
  border-radius: 100px;
`;
document.body.appendChild(toggleButton);

const alternateTheme = document.createElement("style");
alternateTheme.id = "alternateTheme";
alternateTheme.innerHTML = `
@media only screen and (min-width: 1024px) {
:focus{outline:none}:not(u){text-decoration:none!important}
  .l-page {
    background-color: transparent !important;
  }
  .b-ajax:before {
    background: rgba(254, 254, 254, 0.75);
  }
  body {
    background:#626065;
  }
  .to-top-fix,
  .l-top_menu {
    background: #000;
    border-bottom: none;
  }
  .l-page {
    background-color: rgba(0, 0, 0, 0.7);
  }
  .b-link_button {
    border: none;
  }
  .item-minus {
    color: #ffffff;
  }
  .b-status-line .section.changed_at time:before {
    font-family: shikimori;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-feature-settings: "liga";
    font-feature-settings: "liga";
    text-transform: none;
    letter-spacing: normal;
    content: "";
    color: #fff;
    display: inline-block;
    font-size: 14px;
    padding-right: 5px;
  }
  .b-status-line .section.additional .collection-size {
    color: #fff;
    display: inline-block;
    margin-right: 15px;
  }
  body {
    color: #fff;
  }
  .b-achievement .c-image .inner a .border {
    border-width: 1px;
  }
  .p-user_rates-index .list-groups .summary.lines {
    color: #fff;
    font-family: Arial;
    font-size: 12px;
  }
  .b-achievement.is-badge:before {
    bottom: 1px;
  }
  .b-tag[href] {
    border-bottom-color: #fff;
  }
  .b-anime_status_tag.episode,
  .b-anime_status_tag.studio {
    background-color: rgba(0, 0, 0, 0) !important;
  }
  .b-hot_topics-v2 .b-link {
    text-decoration: none !important;
  }
  .l-top_menu-v2 .menu-dropdown > span {
    background: rgba(0, 0, 0, 0) !important;
  }
  .l-top_menu-v2 .global-search .search-marker:before {
    color: rgba(255, 255, 255, 1);
  } .l-top_menu-v2 .global-search .search-results.is-overflowed-above:before, .l-top_menu-v2 .global-search .search-results.is-overflowed-below:after { display:none}
  
  .is-search-focus .global-search input {
    background: #4c4c4c !important;
    border-radius: 0px !important;
    border: 1px solid #4c4c4c !important;
  }
  .l-top_menu-v2 {
    background: #565656 !important;
  }
  .l-top_menu-v2 .global-search input {
    background: rgba(255, 255, 255, 0);
    border: 1px solid #eee0;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    color: #fff;
    font-size: 14px;
    line-height: 28px;
    padding: 1px 42px 0 38px;
    text-overflow: ellipsis;
    width: 100%;
  }
  .l-top_menu-v2 .global-search .search-results .nothing_found,
  .l-top_menu-v2 .global-search .search-results .search-mode {
    color: #fff;
  }
  .search-mode {
    color: #fff !important;
  }
  .search-mode.active {
    color: #000 !important;
  }
  a.b-db_entry-variant-list_item.active:before {
    color: #fff !important;
  }
  .l-top_menu-v2
    .global-search
    .search-results
    .search-mode.active
    + .search-mode {
    border-top-color: #ffffff;
  }
  .l-top_menu-v2 .global-search .search-results .nothing_found,
  .l-top_menu-v2 .global-search .search-results .b-db_entry-variant-list_item,
  .l-top_menu-v2 .global-search .search-results .search-mode {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
  .l-top_menu-v2
    .global-search
    .search-results
    .nothing_found.active
    + .b-db_entry-variant-list_item,
  .l-top_menu-v2
    .global-search
    .search-results
    .nothing_found.active
    + .search-mode,
  .l-top_menu-v2
    .global-search
    .search-results
    .nothing_found:focus
    + .b-db_entry-variant-list_item,
  .l-top_menu-v2
    .global-search
    .search-results
    .nothing_found:focus
    + .search-mode,
  .l-top_menu-v2
    .global-search
    .search-results
    .b-db_entry-variant-list_item.active
    + .b-db_entry-variant-list_item,
  .l-top_menu-v2
    .global-search
    .search-results
    .b-db_entry-variant-list_item.active
    + .search-mode,
  .l-top_menu-v2
    .global-search
    .search-results
    .b-db_entry-variant-list_item:focus
    + .b-db_entry-variant-list_item,
  .l-top_menu-v2
    .global-search
    .search-results
    .b-db_entry-variant-list_item:focus
    + .search-mode,
  .l-top_menu-v2
    .global-search
    .search-results
    .search-mode.active
    + .b-db_entry-variant-list_item,
  .l-top_menu-v2
    .global-search
    .search-results
    .search-mode.active
    + .search-mode,
  .l-top_menu-v2
    .global-search
    .search-results
    .search-mode:focus
    + .b-db_entry-variant-list_item,
  .l-top_menu-v2
    .global-search
    .search-results
    .search-mode:focus
    + .search-mode {
    border-top-color: #fff;
  }
  .b-db_entry-variant-list_item > .info .name .b-link {
    text-decoration: none;
  }
  .b-anime_status_tag.studio {
    color: #fff;
  }
  .l-top_menu-v2
    .global-search
    .search-results
    .search-mode:active
    + .b-db_entry-variant-list_item,
  .l-top_menu-v2
    .global-search
    .search-results
    .search-mode:active
    + .search-mode,
  .l-top_menu-v2
    .global-search
    .search-results
    .b-db_entry-variant-list_item:active
    + .b-db_entry-variant-list_item,
  .l-top_menu-v2
    .global-search
    .search-results
    .b-db_entry-variant-list_item:active
    + .search-mode {
    border-top-color: #ffffff;
  }
  .l-top_menu-v2 .global-search .search-results .search-mode:active,
  .l-top_menu-v2
    .global-search
    .search-results
    .b-db_entry-variant-list_item:active {
    border-top-color: #ffffff;
    background: rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.1);
  }
  .l-top_menu-v2 .global-search .search-results .nothing_found.active,
  .l-top_menu-v2 .global-search .search-results .nothing_found:focus,
  .l-top_menu-v2
    .global-search
    .search-results
    .b-db_entry-variant-list_item.active,
  .l-top_menu-v2
    .global-search
    .search-results
    .b-db_entry-variant-list_item:focus,
  .l-top_menu-v2 .global-search .search-results .search-mode.active,
  .l-top_menu-v2 .global-search .search-results .search-mode:focus {
    background: rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.1);
    border-top-color: #ffffff;
  }
  .l-top_menu-v2 .global-search .hotkey-marker {
    display: none;
  }
  .l-top_menu-v2 .global-search .search-results .search-mode:hover {
    background: rgba(255, 255, 255, 0.25);
  }
  .l-top_menu-v2 .global-search .search-results .search-mode:hover:before {
    background: rgba(255, 255, 255, 0.5);
  }
  .l-top_menu-v2 .global-search .search-results .search-mode {
    border-top: 1px solid rgba(255, 255, 255, 0);
    -webkit-transition: 0s !important;
    transition: 0s !important;
  }
  .l-top_menu-v2 .global-search .search-results .nothing_found.active:before,
  .l-top_menu-v2 .global-search .search-results .nothing_found:focus:before,
  .l-top_menu-v2 .global-search .search-results .search-mode.active:before,
  .l-top_menu-v2 .global-search .search-results .search-mode:focus:before {
    background: #000;
  }
  .l-top_menu-v2
    .global-search
    .search-results
    .b-db_entry-variant-list_item.active:before,
  .l-top_menu-v2
    .global-search
    .search-results
    .b-db_entry-variant-list_item:focus:before {
    background: #fff;
  }
  .l-top_menu-v2 .global-search .clear {
    color: #fff;
  }
  .l-top_menu-v2 .global-search .search-marker,
  .l-top_menu-v2 .global-search .clear {
    top: 7.5px;
  }
  .l-top_menu-v2 .global-search input {
    height: 46px;
    line-height: 46px;
  }
  .l-top_menu-v2 .global-search .search-results {
    top: 46px;
  }
  .l-top_menu-v2 .global-search .search-results .search-mode.active {
    background: rgba(255, 255, 255, 1) !important;
  }
  .l-top_menu-v2 .global-search .search-results {
    background-color: #4c4c4c;
  }
  .l-top_menu-v2 .menu-icon.contest:before,
  .l-top_menu-v2 .menu-icon.forum:before {
    color: #fff;
  }
  .l-top_menu-v2 .menu-icon:active,
  .l-top_menu-v2 .menu-icon:hover {
    background-color: #1b1b1b;
    transition: 0;
    color: #fff;
  }
  .l-top_menu-v2 .submenu {
    background: #4d4b50;
    border-bottom: none;
    border-left: none;
    border-right: none;
  }
  .l-top_menu-v2 .menu-dropdown.active > span {
    background-color: #4d4b50 !important;
  }
  .l-top_menu-v2 .menu-dropdown > span a:hover {
    background-color: #4d4b50;
  }
  .b-anime_status_tag.other {
    background-color: #d7fdaf;
    border: 1px solid #d7fdaf;
    color: #000 !important;
  }
  .b-link {
    color: #ffffff;
    cursor: pointer;
    text-decoration: underline;
  }
  .b-db_entry-variant-list_item > .info .line .key {
    color: #fff;
  }
  .b-tag {
    color: #fff;
  }
  .b-tag[href].active,
  .b-tag[href]:hover {
    background-color: #fff;
    color: #000 !important;
  }
  
  .b-form input[type="submit"] {
    background-color: #fff;
    color: #000;
  }
  .b-form input[type="submit"]:hover {
    background-color: rgb(240, 240, 240);
    color: #000;
  }
  .b-form input[type="submit"]:active {
    background-color: rgb(220, 220, 220);
    color: #000;
  }
  .headline,
  .midheadline,
  .subheadline {
    color: #fff;
    background:rgb(255 255 255 / 10%);
    border-left: none;
  }
  .b-options-floated a,
  .b-options-floated .link {
    color: #ffffff;
    text-decoration: underline;
  }
  .b-options-floated a:hover,
  .b-options-floated .link:hover {
    color: rgba(255, 255, 255, 0.5);
  }
  .b-options-floated .selected {
    color: #ffffff;
    text-decoration: none;
  }
  .b-options-floated .selected:hover {
    color: rgba(255, 255, 255, 0.5);
  }
  header.head h1 a.back,
  header.head h2 a.back {
    color: #ffffff;
  }
  header.head h1,
  header.head h2 {
    color: #fff;
  }
  header.head h1 a.back:before,
  header.head h2 a.back:before {
    color: #fff;
  }
  .b-link:hover {
    color: rgb(0, 255, 255);
  }
  a:hover {
    color: rgba(255, 255, 255, 0.8) !important;
  }
  a:active {
    color: rgba(255, 255, 255, 0.7) !important;
  }
  select#user_preferences_body_width {
    color: #000;
  }
  header.head .notice {
    color: #d6d6d6;
  }
  .p-profiles .profile-head .c-info .c-additionals b {
    color: #d8d8d8;
  }
  .b-stats_bar .title {
    color: #e6e6e6;
  }
  application-3559f36….css: 1 .p-profiles-show .lifetime .times .time.checked {
    color: #efefef;
  }
  .p-profiles-show .lifetime .cuts .cut {
    background: #626066;
  }
  .p-profiles-show .lifetime .times .time {
    color: #efefef;
  }
  .p-profiles-show .profile-content .activity .title {
    color: #efefef;
  }
  .bar.simple .bar.s3 {
    background: #ffffff;
  }
  .bar.simple .bar:hover.s2 {
    background: #98c2e3;
  }
  .bar.simple .bar.s2 {
    background: #e4e4e4;
  }
  .bar.simple .bar.s0 {
    background: #b5b5b5;
  }
  .bar.simple .bar.s1 {
    background: #cacaca;
  }
  .bar.simple .bar:hover.s0,
  .bar.simple .bar:hover.s2,
  .bar.simple .bar:hover.s3,
  .bar.simple .bar:hover.s1 {
    background: #fff;
  }
  .bar.vertical .line .x_label {
    color: #fff;
  }
  .bar.vertical .line .bar-container .value {
    color: #000;
  }
  .b-block_list li {
    color: #fff;
  }
  a {
    color: #fff !important;
  }
  .b-catalog_entry .cover .title {
    color: #fff;
  }
  .b-catalog_entry .cover .misc span {
    color: #fff;
  }
  .b-catalog_entry .cover:hover .title {
    color: rgba(255, 255, 255, 0.8) !important;
  }
  .bar.horizontal .line .x_label {
    color: #fff;
  }
  .bar.horizontal .line .bar-container .value {
    color: black;
  }
  .b-collection_search .field input {
    background: none;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.46);
  }
  .b-list_switchers .switcher.posters.selected {
    color: rgb(0, 0, 0);
  }
  .b-list_switchers .switcher.lines {
    color: #6b6b6b;
  }
  .b-list_switchers .switcher.lines:active {
    color: #000000;
  }
  .b-list_switchers .switcher.lines:hover {
    color: #000000;
  }
  .b-block_list li:hover {
    color: rgba(255, 255, 255, 0.8);
    background-color: rgba(0, 0, 0, 0) !important;
  }
  .b-block_list li:active {
    background-color: rgba(0, 0, 0, 0) !important;
  }
  .p-user_rates-index .list-groups .summary.posters {
    border: 1px solid rgba(255, 255, 255, 0.3);
    background-color: rgba(245, 245, 245, 0);
  }
  .l-footer .copyright {
    color: #ffffff;
  }
  .b-spoiler label {
    color: #ffffff;
  }
  .b-spoiler label:hover {
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.34);
  }
  .b-spoiler label:active {
    color: #fff;
    border-color: #fff;
  }
  .collapsed {
    background: rgba(0, 0, 0, 0);
    border-color: rgba(255, 255, 255, 0.34);
  }
  .p-animes_collection-index .pagination,
  .p-mangas_collection-index .pagination,
  .p-recommendations-index .pagination,
  .p-userlist_comparer-show .pagination {
    color: #fff;
  }
  .b-list li {
    list-style-image: none !important;
  }
  .b-tooltipped {
    color: #fff !important;
  }
  .b-shiki_editor .body .editor textarea {
    background: rgba(252, 252, 252, 0);
    border-color: rgba(255, 255, 255, 0.34);
    color: #fff;
  }
  .headline > a,
  .midheadline > a,
  .subheadline > a {
    color: #fff;
  }
  .b-nothing_here {
    color: #fbfbfb;
  }
  .locale-ru .b-offtopic_marker.off:before {
    color: #ffffff;
  }
  .headline > a:before,
  .midheadline > a:before,
  .subheadline > a:before {
    color: #ffffff;
  }
  .p-profiles .profile-head .c-history .entry .misc {
    color: #ffffff !important;
  }
  .p-profiles .profile-head .c-history .entry .misc.date {
    color: #e8e8e8 !important;
  }
  .b-stats_bar.lifetime .bar .first {
    background: #ffffff;
  }
  .p-profiles-show .lifetime .times .time.checked {
    color: #fff;
  }
  .p-profiles-show .lifetime .times .time.checked:before {
    color: #ffffff;
  }
  .b-stats_bar.anime .bar .first {
    background: #ffffff;
  }
  .b-stats_bar .bar .first,
  .b-stats_bar .bar .second,
  .b-stats_bar .bar .third {
    color: black;
  }
  .b-stats_bar .bar .third {
    background: #b1b1b1;
  }
  .b-stats_bar.anime .bar .second {
    background: #d6d6d6;
  }
  .tooltip-inner {
    background: rgba(0, 0, 0, 0.8);
    background: none repeat scroll 0 0 rgba(0, 0, 0, 0.8);
    border: 1px solid #ffffff;
    color: #ffffff;
  }
  .tooltip-arrow {
    background: none !important;
  }
  .tooltip-arrow:after {
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(255, 255, 255, 0);
    border-right-color: #ffffff;
    border-width: 13px;
    right: 0;
    margin-top: 0;
  }
  .tooltip-left .tooltip-arrow:after {
    border: solid transparent;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(255, 255, 255, 0);
    border-left-color: #ffffff;
    border-width: 13px;
    left: 0;
    margin-top: 0;
  }
  .b-catalog_entry-tooltip .inner .rating {
    color: #fff;
  }
  .b-catalog_entry-tooltip .inner .line .value .tag:active,
  .b-catalog_entry-tooltip .inner .line .value .tag:hover {
    background-color: #ffffff;
    color: #000 !important;
    text-decoration: none !important;
  }
  .b-catalog_entry-tooltip .inner .line .value .tag {
    border-bottom: 1px dashed #fff;
  }
  .b-catalog_entry-tooltip .inner .line .key {
    color: #fff;
  }
  .tooltip-inner .close {
    background: none;
    color: #fff;
  }
  .tooltip-inner .close:hover {
    color: #e4e4e4;
  }
  .b-add_to_list.planned .trigger,
  .b-add_to_list.planned .option {
    background: #fff;
    border-color: #fff;
    color: #000;
  }
  .b-add_to_list .plus {
    color: #969696;
    cursor: pointer;
  }
  .b-add_to_list .plus:active {
    color: #000;
  }
  .b-add_to_list .plus:hover {
    color: #000;
  }
  .b-add_to_list.planned .trigger-arrow {
    color: #969696;
  }
  .b-add_to_list.planned .trigger-arrow:active {
    color: #000;
  }
  .b-add_to_list.planned .trigger-arrow:hover {
    color: #000;
  }
  .ajax-loading {
    background: url(https://camo-v3.shikimori.one/0d9852fdb20de29a128320ff6608a123bb7f2ec2?url=https%3A%2F%2Firecommend.ru%2Fsites%2Fall%2Fmodules%2F_custom%2Fimglazy%2Fajax-loader.gif)
      no-repeat;
    background-position: center;
    min-height: 30px;
    width: 100%;
  }
  .item-sign {
    color: #fffefe;
  }
  .item-sign:hover {
    color: #e4e4e4;
  }
  .item-sign:active {
    color: #bdbdbd;
  }
  .b-block_list li.selected {
    background-color: rgba(0, 0, 0, 0);
    color: #adadad;
  }
  .b-entry-info .line .key {
    color: #fff;
  }
  .b-entry-info .line .value {
    color: #fff;
  }
  p.score-counter {
    color: #fff !important;
  }
  p.score-source {
    color: #fff !important;
  }
  .b-rate .stars.score {
    color: #ffd800 !important;
  }
  .b-rate .text-score {
    color: #fff;
  }
  .b-rate .score-notice {
    color: rgba(255, 255, 255, 0.83);
  }
  .b-entry-info .line .b-tag {
    border-bottom: 1px dashed #fff;
  }
  .b-entry-info .line .b-tag:hover {
    background-color: #ffffff;
    color: #000 !important;
    text-decoration: none !important;
  }
  .b-entry-info .line .b-tag:active {
    background-color: #ffffff;
    color: #000 !important;
    text-decoration: none !important;
  }
  .b-hot_topics-v2 {
    background-color: rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid #000000;
    margin: -15px -15px 15px -15px;
  }
  .b-hot_topics-v2 .topic.subject {
    color: #fff;
  }
  .p-dashboards-show .c-my_list {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.34);
  }
  .b-hot_topics-v2 .subject {
    color: #fff;
  }
  .p-dashboards .user_list .list-change .note {
    color: #ffffff;
    font-size: 11px;
    line-height: 1.4;
  }
  .b-link_button {
    background-color: rgba(255, 255, 255, 0.34) !important;
  }
  .b-link_button:active {
    background-color: #ffffff;
    border-color: #fdfdfd;
    color: #000;
  }
  .b-link_button:hover {
    background-color: #ffffff;
    border-color: #fdfdfd;
    color: #000;
  }
  .p-dashboards-show .contests .contest .notice {
    color: #fff;
  }
  .p-dashboards-show .contests .contest .can-vote {
    color: #00ff2d;
  }
  .b-forums .forum .topics {
    color: #ececec;
  }
  .p-dashboards-show .c-content .options .option {
    color: #ffffff;
  }
  .p-dashboards-show .c-content .options .option.selected {
    color: #ffffff;
    border-bottom-color: rgba(255, 255, 255, 0.7);
  }
  .p-dashboards .user_list .list-type > .title .switch,
  .p-dashboards .user_list .history > .title .switch {
    color: rgba(255, 255, 255, 0.7);
    border-bottom: 1px dotted rgba(255, 255, 255, 0.3);
  }
  .p-dashboards .user_list .list-type > .title .switch:hover,
  .p-dashboards .user_list .history > .title .switch:hover {
    color: rgba(255, 255, 255, 0.6);
  }
  .p-dashboards .user_list .list-type > .title .switch:hover,
  .p-dashboards .user_list .history > .title .switch:active {
    color: rgba(255, 255, 255, 0.5);
  }
  .headline.linkheadline > a:active,
  .linkheadline.midheadline > a:active,
  .linkheadline.subheadline > a:active,
  .headline.linkheadline > a:active:before,
  .linkheadline.midheadline > a:active:before,
  .linkheadline.subheadline > a:active:before {
    color: #ffffff;
  }
  .b-height_shortener .shade {
    background-image: none !important;
  }
  .b-height_shortener .expand {
    color: #ff9800;
  }
  .b-comments .comments-loader,
  .b-comments .comments-hider,
  .b-comments .comments-expander {
    background: rgba(249, 249, 249, 0);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.34);
    margin: 5px 0 10px 0;
  }
  .b-comment {
    border-top: 1px dashed rgba(255, 255, 255, 0.34);
  }
  .b-comment > .inner header .name-date .time {
    color: #ddddde;
  }
  .buttons .item-reply,
  .buttons .item-moderation,
  .buttons .item-edit,
  .buttons .item-delete,
  .buttons .item-quote,
  .item-delete-cancel,
  .item-delete-confirm,
  .buttons .item-ignore,
  .b-video_player .cc-player_controls .increment-user_rate .icon {
    color: #fff !important;
  }
  .b-comments .comments-loader:hover,
  .b-comments .comments-hider:hover,
  .b-comments .comments-expander:hover {
    background-color: rgba(255, 255, 255, 0);
    color: rgba(255, 255, 255, 0.8);
    border-color: rgba(255, 255, 255, 0.34);
  }
  .b-comments .comments-collapser {
    color: #e4e4e4;
  }
  .b-comments .comments-collapser:hover {
    color: rgba(255, 255, 255, 0.8);
  }
  .b-comments .comments-collapser:active {
    color: rgba(255, 255, 255, 0.7);
  }
  .buttons .item-moderation:hover,
  .buttons .item-reply:hover,
  .buttons .item-edit:hover,
  .buttons .item-delete:hover,
  .buttons .item-quote:hover,
  item-delete-cancel:hover,
  .item-delete-cancel:hover,
  .item-delete-confirm:hover,
  .buttons .item-ignore:hover {
    color: rgba(255, 255, 255, 0.8) !important;
  }
  .buttons .item-moderation:active,
  .buttons .item-reply:active,
  .buttons .item-edit:active,
  .buttons .item-delete:active,
  .buttons .item-quote:active,
  item-delete-cancel:active,
  .item-delete-cancel:active,
  .item-delete-confirm:active,
  .buttons .item-ignore:active {
    color: rgba(255, 255, 255, 0.7) !important;
  }
  .b-comment .inner .name-date a.name .normal {
    color: #dedede;
  }
  .b-replies {
    color: #d8d8d8;
  }
  .menu.menu-items a {
    text-decoration: none !important;
  }
  .b-lang_trigger span {
    color: #d4d4d4;
    border-bottom: 1px dotted rgba(255, 255, 255, 0.3);
  }
  .b-animes-menu .total-rates {
    color: #d8d8d8;
  }
  .b-animes-menu .menu-topics-block .date {
    color: #ececec;
  }
  .b-main_search .input input {
    font-family: arial;
    font-size: 12px;
    color: #000;
  }
  .p-profiles .profile-head .c-brief header h1.aliases:after {
    color: #fff;
  }
  a.entry {
    text-decoration: none !important;
  }
  .p-contests .match-day .match-link:hover {
    background-color: rgba(255, 255, 255, 0.3) !important;
  }
  .p-contests .match-day .match-link:active {
    background-color: rgba(255, 255, 255, 0.2) !important;
  }
  .p-contests .contest-match .vs .help,
  .p-contests .contest-match .vs .next,
  .p-contests .contest-match .vs .finish,
  .p-contests .contest-match .vs .refrain,
  .p-contests .contest-match .vs .refrained {
    color: #e8e8e8;
  }
  .p-contests .contest-match .vs {
    color: #fdfdfd;
    text-align: center;
  }
  .p-contests .contest-match .vs .refrain {
    color: #cacaca;
    cursor: pointer;
    display: block;
  }
  .b-rate .stars.hover {
    color: #ff8600 !important;
    position: absolute;
  }
  .item-add {
    cursor: pointer;
    color: #ffffff;
  }
  .b-video_player .cc-player_controls .episode-num span {
    color: #fff !important;
  }
  .p-anime_videos-index .c-anime_video_episodes .title,
  .p-anime_videos-index .c-videos .title {
    color: #fff;
  }
  .b-video_variant .episode-hostings,
  .b-video_variant .video-hosting,
  .b-video_variant .video-language {
    color: #c8cacc;
  }
  .b-video_player .cc-player_controls .next .icon,
  .b-video_player .cc-player_controls .prev .icon,
  .b-video_player .cc-player_controls .upload .icon,
  .b-video_player .cc-player_controls .show-options .icon,
  .b-video_player .cc-player_controls .report .icon {
    cursor: pointer;
    color: #ffffff;
  }
  .b-video_variant .video-author {
    color: #e4e4e4;
    display: inline;
    text-decoration: none !important;
  }
  .b-video_variant.active a {
    border-bottom: 1px dotted #ffffff;
  }
  .b-video_player .cc-player_controls .c-control {
    color: #ffffff;
    cursor: pointer;
    text-align: center;
  }
  .p-anime_videos-index .c-videos .video-variant-switcher {
    color: #ffffff;
  }
  .p-anime_videos-index .c-videos .video-variant-switcher.active {
    color: #b3b3b3;
  }
  .b-message > .inner header .name-date .time {
    color: #dcdcdc;
  }
  .b-message {
    border-top: 1px dashed rgba(255, 255, 255, 0.34);
  }
  select {
    color: #000;
  }
  #user_avatar {
    color: #fff;
  }
  .b-topic-preview > .inner .status-line .additional .comments:before {
    color: #fff;
  }
  .b-topic-preview > .inner .status-line .time.changed_at:before {
    color: #fff;
  }
  .b-db_entry > .c-about .additional-links .key {
    float: left;
    color: #ffffff;
  }
  .b-video_variant .episode-num,
  .b-video_variant .video-id {
    color: #fff;
  }
  .p-anime_videos-index .c-video_stats .views_count,
  .b-animes-menu .total-rates {
    color: #ffffff;
  }
  .b-catalog_entry-tooltip .inner .rating .text {
    color: #fff;
  }
  .b-options-floated .action {
    color: #ffffff;
    border-bottom: 1px dotted rgba(255, 255, 255, 0.3);
  }
  .b-video_player .cc-player_controls .cc-navigation > .c-control {
    width: 32.66667%;
    margin-right: 0;
  }
  .c-control.episode-num b {
    color: #fff !important;
  }
  .b-video_player .cc-player_controls .episode-num input {
    margin-left: 4%;
    border: none;
    text-align: center;
  }
  .p-contests .match-day .matches-num,
  .b-club .info .number,
  .b-club .name,
  .b-club .info .value {
    color: #ffffff;
  }
  .b-stats_bar.manga .bar .second {
    background: #d6d6d6;
  }
  tr.selectable.slightly-difr .tooltipped,
  tr.selectable.abslt-difr .tooltipped,
  tr.selectable.almost-same .tooltipped {
    color: #000 !important;
  }
  tr.selectable.slightly-difr .num,
  tr.selectable.abslt-difr .num,
  tr.selectable.almost-same .num {
    color: #000;
  }
  .p-userlist_comparer .comparer table .notice {
    color: #ffffff;
  }
  .p-userlist_comparer .comparer table .selectable:hover .tooltipped,
  .p-userlist_comparer .comparer table .selectable:hover .num,
  .p-userlist_comparer .comparer table .selectable:hover .notice {
    color: #000 !important;
  }
  .b-table th {
    color: #ffffff;
  }
  hr {
    border: 0;
    height: 1px;
    background-image: -webkit-linear-gradient(
      left,
      transparent,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0)
    );
    background-image: -moz-linear-gradient(
      left,
      transparent,
      rgba(0, 0, 0, 0.65),
      transparent
    );
    background-image: -ms-linear-gradient(
      left,
      transparent,
      rgba(0, 0, 0, 0.65),
      transparent
    );
    background-image: -o-linear-gradient(
      left,
      transparent,
      rgba(0, 0, 0, 0.65),
      transparent
    );
  }
  .b-topic > .inner header .name-date .time {
    color: #ffffff;
  }
  .p-topics .l-menu .calendar .entry .misc,
  .p-topics .l-menu .critiques .entry .misc,
  .p-topics .l-menu .clubs .entry .misc,
  .p-topics .l-menu .calendar .entry .misc.date,
  .p-topics .l-menu .critiques .entry .misc.date,
  .p-topics .l-menu .clubs .entry .misc.date,
  .p-topics .l-menu .contests .contest .notice {
    color: #ffffff !important;
  }
  .p-topics .l-menu .contests .contest .can-vote {
    color: #00ff2d;
  }
  .b-user.detailed .history .line a .event {
    color: #ffffff;
  }
  .b-header_filters .filter-line .title {
    color: #fff;
  }
  .b-user.detailed .history .line .date {
    color: #ffffff;
  }
  .b-shiki_editor footer .unpreview:not(.link),
  .b-shiki_editor footer .cancel,
  .b-shiki_editor footer .hide {
    color: #ffffff;
    border-bottom: 1px dotted rgba(255, 255, 255, 0.3);
  }
  .b-quote {
    background: rgba(0, 208, 255, 0.25);
    border: none;
    color: #ffffff;
  }
  .b-status-line .section.main .comments:before,
  .b-quote .quoteable:before,
  .b-critique_votes:before,
  .b-critique_votes span,
  .b-collection-topic > .inner .status-line .collection-size {
    color: #fff;
  }
  .b-critique_votes .votes-for {
    color: #00ff1c;
  }
  .b-critique_votes .votes-against {
    color: #ff0d00;
  }
  .l-top_menu .submenu {
    background: #000000;
    border: none;
  }
  .l-top_menu .submenu > .entry {
    border-bottom: 1px solid #292929;
    background: #000000;
    font-family: Arial;
    font-size: 12px;
    height: 27px;
    line-height: 21px;
    min-width: 80px;
    padding: 3px 10px 3px 10px;
  }
  .b-main_search ul.popup {
    background: #000000;
    border: none;
  }
  .b-main_search ul.popup li {
    border-bottom: 1px solid #292929;
    font-family: Arial;
    font-size: 12px;
    padding: 3px 5px 3px 8px;
    width: 178px;
    height: 27px;
    line-height: 21px;
  }
  .b-main_search.hovered .popup {
    height: 243px;
  }
  .b-main_search .popup li {
    transition: 0s;
  }
  .b-topic {
    border-color: rgba(255, 255, 255, 0.4);
  }
  .b-comments .b-comment:first-child {
    border-top: none;
  }
  .b-to-top .arrow:before {
    text-shadow: none;
  }
  .headline.linkheadline > a:hover,
  .linkheadline.midheadline > a:hover,
  .linkheadline.subheadline > a:hover,
  .headline.linkheadline > a:hover:before,
  .linkheadline.midheadline > a:hover:before,
  .linkheadline.subheadline > a:hover:before {
    color: #fff;
  }
  .editor-collapse,
  .editor-expand {
    color: orange;
  }
  .headline.linkheadline > a,
  .linkheadline.midheadline > a,
  .linkheadline.subheadline > a {
    text-decoration: none;
  }
  html.turbolinks-progress-bar:before {
    z-index: 9999 !important;
    background: #ffc107 !important;
    box-shadow: none;
  }
  .b-catalog_entry-tooltip .inner .additional-images .link .title,
  .b-show_more,
  .p-contests .results .cc-result .c-rounds .label,
  .p-contests .match-day .match-link .started:before,
  .b-animes-menu .menu-topics-block a.entry .name,
  .p-anime_videos-index .same-videos .title,
  .b-options-floated.count,
  .b-contest_match .vs .label,
  .b-contest_match .vs .invitation,
  .b-contest_match .vs .vote-voted,
  .b-contest_match .vs .vote-abstained,
  .b-contest_match .vs .thanks,
  .b-contest_match .vs .hint,
  .b-contest_match .vs .action,
  .b-contest_match .vs .actions .action span,
  .b-contest_match .vs .actions .action span,
  header.head .misc,
  header.head a.edit,
  .b-video_player .cc-player_controls .create-user_rate .icon,
  .p-user_rates-index .l-content .order-control,
  .p-achievements-global table.statistics td:first-child,
  .b-achievement .c-about .percent,
  .b-achievement .c-about .hint,
  .p-profiles-show .achievements .header .title,
  .b-status-line .section.additional .comments:before,
  .b-status-line .section.created_at time:before,
  span.studio {
    color: #fff !important;
  }
  .b-achievement .c-about .progress .bar {
    background: #2185d4;
    height: 100%;
  }
  .b-achievement.badge:before {
    background: rgba(17, 34, 51, 0.7);
  }
  .b-code {
    background: rgba(51, 51, 51, 0.7);
  }
  table.statistics tr:first-child {
    color: rgba(255, 255, 255, 0.9);
  }
  table.statistics tr th br {
    display: none;
  }
  .collapsed {
    color: #fff;
  }
  .b-form .cancel {
    color: #e78900;
  }
  .collapsed {
    border-color: rgba(255, 255, 255, 0.5);
  }
  .b-contest_match .vs .invitation {
    color: #c4c4c4;
  }
  .locale-ru .b-new_marker.off:before {
    color: #ffffff;
    border-color: #ffffff;
  }
  .b-stats_bar.manga .bar .first {
    background: #b1b1b1;
  }
  .b-animes-menu .menu-topics-block a.entry .date {
    color: rgba(255, 255, 255, 0.8);
  }
  .b-button {
    background-color: rgba(255, 255, 255, 0.3);
  }
  .b-button:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  .b-button:active {
    background-color: rgba(255, 255, 255, 0.1);
  }
  .p-contests .match-day .match-link.active {
    background-color: #ffffff4d;
  }
  .p-user_rates-index .list-lines .selectable:hover a.tooltipped,
  .p-user_rates-index .list-lines .selectable:hover td.num {
    color: rgb(0, 0, 0) !important;
  }
  .b-stats_bar.manga .bar .first {
    background: #fff;
  }
  .b-animes-menu .menu-topics-block .entry .time {
    color: rgb(222, 222, 222);
  }
  .b-achievements_notifier .achievement.gained .title a,
  .b-achievements_notifier .achievement.gained .name a {
    color: #419541 !important;
  }
  .b-achievements_notifier .achievement.lost .title a,
  .b-achievements_notifier .achievement.lost .name a {
    color: #fb5353 !important;
  }
  .editor-collapse,
  .editor-expand {
    color: orange !important;
    opacity: 0.8;
  }
  .editor-collapse:hover,
  .editor-expand:hover {
    opacity: 1;
  }
  .editor-collapse:active,
  .editor-expand:active {
    opacity: 0.8;
  }
  .b-achievements_notifier .achievement .name .level {
    color: rgba(0, 0, 0, 0.5);
  }
  a.discord-channel {
    display: none !important;
  }
  .b-catalog_entry-tooltip .inner .rating .text {
    margin-top: 3px;
    font-family: arial;
  }
  .rating span {
    font-family: arial;
  }
  .l-footer .copyright,
  .l-footer .links {
    display: none !important;
  }
  .l-footer {
    clear: both;
    padding-bottom: 25px;
  }
  .b-link_button.maxi {
    font-size: 20px;
    padding: 5px 20px 6px 20px;
  }
  .p-dashboard .l-menu .ongoing .misc .key,
  .p-dashboard .l-menu .ongoing .misc .value,
  .p-dashboard .l-menu .season .notice {
    color: #ffffff;
  }
  .p-dashboard .l-menu .season .title:hover {
    color: rgba(255, 255, 255, 0.6) !important;
    text-decoration: none;
  }
  .p-dashboard .l-menu .season .title:active {
    color: rgba(255, 255, 255, 0.8) !important;
    text-decoration: none;
  }
  .p-dashboard .l-menu .season:hover .title,
  .p-dashboard .l-menu .season:hover .title:after {
    color: rgba(255, 255, 255, 0.6) !important;
    text-decoration: none;
  }
  .p-dashboard .l-menu .season:active .title,
  .p-dashboard .l-menu .season:active .title:after {
    color: rgba(255, 255, 255, 0.8) !important;
    text-decoration: none;
  }
  .p-dashboard .l-menu .season:hover {
    color: rgba(255, 255, 255, 1);
  }
  .p-dashboard .l-menu .ongoing:hover .title {
    text-decoration: none;
  }
  .p-dashboard .l-menu .season {
    padding-left: 0;
  }
  .p-dashboard .l-menu .ongoing,
  .p-dashboard .l-menu .season,
  .p-dashboard .l-content .b-catalog_entry,
  .p-profiles .profile-head .c-history .entry {
    border-top: 1px dashed rgba(221, 221, 221, 0.38);
  }
  .p-user_history-index .history-page .history-interval p {
    color: rgba(255, 255, 255, 0.6);
  }
  .headline > a:hover:before,
  .midheadline > a:hover:before,
  .subheadline > a:hover:before {
    color: rgba(255, 255, 255, 0.8);
  }
  .headline > a:hover,
  .midheadline > a:hover,
  .subheadline > a:hover {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.8);
  }
  .l-top_menu-v2 .menu-dropdown > span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background: #1b1b1b;
  }
  .l-top_menu-v2 .submenu > a:hover {
    background: #fff;
    color: #000 !important;
  }
  .l-top_menu-v2 .submenu > a:active {
    background: #fff;
    color: #000 !important;
  }
  .b-anime_status_tag.episode,
  .b-anime_status_tag.studio {
    background-color: rgba(0, 0, 0, 0) !important;
    color: #fff;
  }
  .navigation-node {
    background-color: rgba(255, 255, 255, 0.3) !important;
  }
  .b-reviews_navigation .navigation-node.is-empty:not(.is-active) .label,
  .b-reviews_navigation .navigation-node.is-empty:not(.is-active) .count {
    color: rgb(255 255 255);
  }
  .b-review-topic.is-review_review_author_details
    > .inner
    .review-info
    .user-rate-label {
    color: rgba(255, 255, 255, 0.75);
  }
}
`;
document.head.appendChild(alternateTheme);

let isAlternate = localStorage.getItem("isAlternate") === "true";
alternateTheme.disabled = !isAlternate;

toggleButton.addEventListener("click", function() {
  alternateTheme.disabled = !alternateTheme.disabled;
  isAlternate = !isAlternate;
  localStorage.setItem("isAlternate", isAlternate);
});
