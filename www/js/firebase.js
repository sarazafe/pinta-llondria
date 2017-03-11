





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-6718b56fbb752ac1a583c95f00f5efc2a162aaed40e413df4506f4e5b9792996.css" integrity="sha256-Zxi1b7t1KsGlg8lfAPXvwqFiqu1A5BPfRQb05bl5KZY=" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-a97f6b98170262f1be5dd5b84d3fb788f1bb65b269c11417026fe763d5eeb63b.css" integrity="sha256-qX9rmBcCYvG+XdW4TT+3iPG7ZbJpwRQXAm/nY9Xutjs=" media="all" rel="stylesheet" />
  
  
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-1da8b9f73abeb68e6a54d0f514085224fe9e7325fd664eacacb38bebe10b9eab.css" integrity="sha256-Hai59zq+to5qVND1FAhSJP6ecyX9Zk6srLOL6+ELnqs=" media="all" rel="stylesheet" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>MOOC-notes/firebase.js at master · devscola/MOOC-notes · GitHub</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars3.githubusercontent.com/u/6756717?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="devscola/MOOC-notes" property="og:title" /><meta content="https://github.com/devscola/MOOC-notes" property="og:url" /><meta content="MOOC-notes - Aplicacion de gestion de notas para el MOOC Creando Apps. Aprende a programar aplicaciones móviles." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="C1F6:274E:7DE662:C9A2F9:58BABED8" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="C1F6:274E:7DE662:C9A2F9:58BABED8" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged Out">



      <meta name="hostname" content="github.com">
  <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="ZjdmMzhjNzdlOWM4ZDk4ZWM1MDkzNWU0NjMwNjJhMTg2NzhiYjlhZWNmZmYxYzZmYzRkNTU3Yzk2NWZmYWZlZXx7InJlbW90ZV9hZGRyZXNzIjoiODAuMzkuNDQuMTM4IiwicmVxdWVzdF9pZCI6IkMxRjY6Mjc0RTo3REU2NjI6QzlBMkY5OjU4QkFCRUQ4IiwidGltZXN0YW1wIjoxNDg4NjMzNTYxLCJob3N0IjoiZ2l0aHViLmNvbSJ9">


  <meta name="html-safe-nonce" content="6e94919dfb220eee768afdaa2b4b46270bb5a490">

  <meta http-equiv="x-pjax-version" content="dc5b71228a97b330f4c8330ad3bfb8a1">
  

    
  <meta name="description" content="MOOC-notes - Aplicacion de gestion de notas para el MOOC Creando Apps. Aprende a programar aplicaciones móviles.">
  <meta name="go-import" content="github.com/devscola/MOOC-notes git https://github.com/devscola/MOOC-notes.git">

  <meta content="6756717" name="octolytics-dimension-user_id" /><meta content="devscola" name="octolytics-dimension-user_login" /><meta content="71396615" name="octolytics-dimension-repository_id" /><meta content="devscola/MOOC-notes" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="71396615" name="octolytics-dimension-repository_network_root_id" /><meta content="devscola/MOOC-notes" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/devscola/MOOC-notes/commits/master.atom" rel="alternate" title="Recent Commits to MOOC-notes:master" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/devscola/MOOC-notes/blob/master/www/js/firebase.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  </head>

  <body class="logged-out env-production windows vis-public page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



          <header class="site-header js-details-container Details" role="banner">
  <div class="container-responsive">
    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
    </a>

    <button class="btn-link float-right site-header-toggle js-details-target" type="button" aria-label="Toggle navigation">
      <svg aria-hidden="true" class="octicon octicon-three-bars" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
    </button>

    <div class="site-header-menu">
      <nav class="site-header-nav">
          <a href="/features" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features">
            Features
</a>          <a href="/explore" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship /showcases /explore">
            Explore
</a>        <a href="/pricing" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing">
          Pricing
</a>      </nav>

      <div class="site-header-actions">
          <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/devscola/MOOC-notes/search" class="js-site-search-form" data-scoped-search-url="/devscola/MOOC-notes/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>


          <a class="text-bold site-header-link" href="/login?return_to=%2Fdevscola%2FMOOC-notes%2Fblob%2Fmaster%2Fwww%2Fjs%2Ffirebase.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
            <span class="text-gray">or</span>
            <a class="text-bold site-header-link" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      </div>
    </div>
  </div>
</header>


  </div>

  <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
      <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      



<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Fdevscola%2FMOOC-notes"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/devscola/MOOC-notes/watchers"
     aria-label="9 users are watching this repository">
    9
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fdevscola%2FMOOC-notes"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/devscola/MOOC-notes/stargazers"
      aria-label="7 users starred this repository">
      7
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fdevscola%2FMOOC-notes"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/devscola/MOOC-notes/network" class="social-count"
       aria-label="13 users forked this repository">
      13
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/devscola" class="url fn" rel="author">devscola</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/devscola/MOOC-notes" data-pjax="#js-repo-pjax-container">MOOC-notes</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/devscola/MOOC-notes" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /devscola/MOOC-notes" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/devscola/MOOC-notes/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /devscola/MOOC-notes/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">0</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/devscola/MOOC-notes/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /devscola/MOOC-notes/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

  <a href="/devscola/MOOC-notes/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /devscola/MOOC-notes/projects">
    <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
    Projects
    <span class="counter">0</span>
</a>


  <a href="/devscola/MOOC-notes/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /devscola/MOOC-notes/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/devscola/MOOC-notes/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /devscola/MOOC-notes/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/devscola/MOOC-notes/blob/4edb9768d5de2deb9963cf9f951b09904d21f0f1/www/js/firebase.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:bb1bcdfb31bf50779ec47c2d77f5c3bb -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/devscola/MOOC-notes/blob/master/www/js/firebase.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/devscola/MOOC-notes/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/devscola/MOOC-notes"><span>MOOC-notes</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/devscola/MOOC-notes/tree/master/www"><span>www</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/devscola/MOOC-notes/tree/master/www/js"><span>js</span></a></span><span class="separator">/</span><strong class="final-path">firebase.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/devscola/MOOC-notes/commit/17147e6001d702c2bafe839d95193e07583779c3" data-pjax>
          17147e6
        </a>
        <relative-time datetime="2016-10-20T23:56:51Z">Oct 21, 2016</relative-time>
      </span>
      <div>
        <img alt="@gerardorf" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1324742?v=3&amp;s=40" width="20" />
        <a href="/gerardorf" class="user-mention" rel="contributor">gerardorf</a>
          <a href="/devscola/MOOC-notes/commit/17147e6001d702c2bafe839d95193e07583779c3" class="message" data-pjax="true" title="datos persistentes en firebase">datos persistentes en firebase</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>1</strong>
         contributor
      </button>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@gerardorf" height="24" src="https://avatars2.githubusercontent.com/u/1324742?v=3&amp;s=48" width="24" />
            <a href="/gerardorf">gerardorf</a>
          </li>
      </ul>
    </div>
  </div>


<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/devscola/MOOC-notes/raw/master/www/js/firebase.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/devscola/MOOC-notes/blame/master/www/js/firebase.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/devscola/MOOC-notes/commits/master/www/js/firebase.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      640 lines (638 sloc)
      <span class="file-info-divider"></span>
    324 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">/*! @license Firebase v3.5.1</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">    Build: 3.5.1-rc.1</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">    Terms: https://developers.google.com/terms */</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">var firebase = null; (function() { for(var aa=&quot;function&quot;==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError(&quot;ES3 does not support getters and setters.&quot;);a!=Array.prototype&amp;&amp;a!=Object.prototype&amp;&amp;(a[b]=c.value)},h=&quot;undefined&quot;!=typeof window&amp;&amp;window===this?this:&quot;undefined&quot;!=typeof global&amp;&amp;null!=global?global:this,ba=function(){ba=function(){};h.Symbol||(h.Symbol=ca)},da=0,ca=function(a){return&quot;jscomp_symbol_&quot;+(a||&quot;&quot;)+da++},m=function(){ba();var a=h.Symbol.iterator;a||(a=h.Symbol.iterator=</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">h.Symbol(&quot;iterator&quot;));&quot;function&quot;!=typeof Array.prototype[a]&amp;&amp;aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(this)}});m=function(){}},ea=function(a){var b=0;return fa(function(){return b&lt;a.length?{done:!1,value:a[b++]}:{done:!0}})},fa=function(a){m();a={next:a};a[h.Symbol.iterator]=function(){return this};return a},n=function(a){m();var b=a[Symbol.iterator];return b?b.call(a):ea(a)},p=h,q=[&quot;Promise&quot;],r=0;r&lt;q.length-1;r++){var t=q[r];t in p||(p[t]={});p=p[t]}</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">var ga=q[q.length-1],u=p[ga],w=function(){function a(){this.c=null}if(u)return u;a.prototype.L=function(a){null==this.c&amp;&amp;(this.c=[],this.W());this.c.push(a)};a.prototype.W=function(){var a=this;this.M(function(){a.$()})};var b=h.setTimeout;a.prototype.M=function(a){b(a,0)};a.prototype.$=function(){for(;this.c&amp;&amp;this.c.length;){var a=this.c;this.c=[];for(var b=0;b&lt;a.length;++b){var c=a[b];delete a[b];try{c()}catch(k){this.X(k)}}}this.c=null};a.prototype.X=function(a){this.M(function(){throw a;})};var c=</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">function(a){this.a=0;this.j=void 0;this.m=[];var b=this.F();try{a(b.resolve,b.reject)}catch(g){b.reject(g)}};c.prototype.F=function(){function a(a){return function(e){c||(c=!0,a.call(b,e))}}var b=this,c=!1;return{resolve:a(this.ia),reject:a(this.K)}};c.prototype.ia=function(a){if(a===this)this.K(new TypeError(&quot;A Promise cannot resolve to itself&quot;));else if(a instanceof c)this.la(a);else{var b;a:switch(typeof a){case &quot;object&quot;:b=null!=a;break a;case &quot;function&quot;:b=!0;break a;default:b=!1}b?this.ha(a):</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">this.R(a)}};c.prototype.ha=function(a){var b=void 0;try{b=a.then}catch(g){this.K(g);return}&quot;function&quot;==typeof b?this.ma(b,a):this.R(a)};c.prototype.K=function(a){this.U(2,a)};c.prototype.R=function(a){this.U(1,a)};c.prototype.U=function(a,b){if(0!=this.a)throw Error(&quot;Cannot settle(&quot;+a+&quot;, &quot;+b|&quot;): Promise already settled in state&quot;+this.a);this.a=a;this.j=b;this.ba()};c.prototype.ba=function(){if(null!=this.m){for(var a=this.m,b=0;b&lt;a.length;++b)a[b].call(),a[b]=null;this.m=null}};var d=new a;c.prototype.la=</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">function(a){var b=this.F();a.o(b.resolve,b.reject)};c.prototype.ma=function(a,b){var c=this.F();try{a.call(b,c.resolve,c.reject)}catch(k){c.reject(k)}};c.prototype.then=function(a,b){function e(a,b){return&quot;function&quot;==typeof a?function(b){try{d(a(b))}catch(Fa){f(Fa)}}:b}var d,f,z=new c(function(a,b){d=a;f=b});this.o(e(a,d),e(b,f));return z};c.prototype.catch=function(a){return this.then(void 0,a)};c.prototype.o=function(a,b){function c(){switch(e.a){case 1:a(e.j);break;case 2:b(e.j);break;default:throw Error(&quot;Unexpected state: &quot;+</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">e.a);}}var e=this;null==this.m?d.L(c):this.m.push(function(){d.L(c)})};c.resolve=function(a){return a instanceof c?a:new c(function(b){b(a)})};c.reject=function(a){return new c(function(b,c){c(a)})};c.race=function(a){return new c(function(b,d){for(var e=n(a),f=e.next();!f.done;f=e.next())c.resolve(f.value).o(b,d)})};c.all=function(a){var b=n(a),d=b.next();return d.done?c.resolve([]):new c(function(a,e){function k(b){return function(c){f[b]=c;l--;0==l&amp;&amp;a(f)}}var f=[],l=0;do f.push(void 0),l++,c.resolve(d.value).o(k(f.length-</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">1),e),d=b.next();while(!d.done)})};c.$jscomp$new$AsyncExecutor=function(){return new a};return c}();w!=u&amp;&amp;null!=w&amp;&amp;aa(p,ga,{configurable:!0,writable:!0,value:w});</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">var x=this,y=function(){},ha=function(a){var b=typeof a;if(&quot;object&quot;==b)if(a){if(a instanceof Array)return&quot;array&quot;;if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(&quot;[object Window]&quot;==c)return&quot;object&quot;;if(&quot;[object Array]&quot;==c||&quot;number&quot;==typeof a.length&amp;&amp;&quot;undefined&quot;!=typeof a.splice&amp;&amp;&quot;undefined&quot;!=typeof a.propertyIsEnumerable&amp;&amp;!a.propertyIsEnumerable(&quot;splice&quot;))return&quot;array&quot;;if(&quot;[object Function]&quot;==c||&quot;undefined&quot;!=typeof a.call&amp;&amp;&quot;undefined&quot;!=typeof a.propertyIsEnumerable&amp;&amp;!a.propertyIsEnumerable(&quot;call&quot;))return&quot;function&quot;}else return&quot;null&quot;;</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">else if(&quot;function&quot;==b&amp;&amp;&quot;undefined&quot;==typeof a.call)return&quot;object&quot;;return b},A=function(a){return&quot;function&quot;==ha(a)},ia=function(a,b,c){return a.call.apply(a.bind,arguments)},ja=function(a,b,c){if(!a)throw Error();if(2&lt;arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},B=function(a,b,c){B=Function.prototype.bind&amp;&amp;-1!=Function.prototype.bind.toString().indexOf(&quot;native code&quot;)?</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">ia:ja;return B.apply(null,arguments)},ka=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},la=function(a,b){function c(){}c.prototype=b.prototype;a.sa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ra=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e&lt;arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var C;C=&quot;undefined&quot;!==typeof window?window:&quot;undefined&quot;!==typeof self?self:global;function __extends(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&amp;&amp;(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">function __decorate(a,b,c,d){var e=arguments.length,f=3&gt;e?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d,g;g=C.Reflect;if(&quot;object&quot;===typeof g&amp;&amp;&quot;function&quot;===typeof g.decorate)f=g.decorate(a,b,c,d);else for(var k=a.length-1;0&lt;=k;k--)if(g=a[k])f=(3&gt;e?g(f):3&lt;e?g(b,c,f):g(b,c))||f;return 3&lt;e&amp;&amp;f&amp;&amp;Object.defineProperty(b,c,f),f}function __metadata(a,b){var c=C.Reflect;if(&quot;object&quot;===typeof c&amp;&amp;&quot;function&quot;===typeof c.metadata)return c.metadata(a,b)}</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">var __param=function(a,b){return function(c,d){b(c,d,a)}},__awaiter=function(a,b,c,d){return new (c||(c=Promise))(function(e,f){function g(a){try{l(d.next(a))}catch(v){f(v)}}function k(a){try{l(d.throw(a))}catch(v){f(v)}}function l(a){a.done?e(a.value):(new c(function(b){b(a.value)})).then(g,k)}l((d=d.apply(a,b)).next())})};&quot;undefined&quot;!==typeof C.V&amp;&amp;C.V||(C.__extends=__extends,C.__decorate=__decorate,C.__metadata=__metadata,C.__param=__param,C.__awaiter=__awaiter);var D=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,D);else{var b=Error().stack;b&amp;&amp;(this.stack=b)}a&amp;&amp;(this.message=String(a))};la(D,Error);D.prototype.name=&quot;CustomError&quot;;var ma=function(a,b){for(var c=a.split(&quot;%s&quot;),d=&quot;&quot;,e=Array.prototype.slice.call(arguments,1);e.length&amp;&amp;1&lt;c.length;)d+=c.shift()+e.shift();return d+c.join(&quot;%s&quot;)};var E=function(a,b){b.unshift(a);D.call(this,ma.apply(null,b));b.shift()};la(E,D);E.prototype.name=&quot;AssertionError&quot;;var na=function(a,b,c,d){var e=&quot;Assertion failed&quot;;if(c)var e=e+(&quot;: &quot;+c),f=d;else a&amp;&amp;(e+=&quot;: &quot;+a,f=b);throw new E(&quot;&quot;+e,f||[]);},F=function(a,b,c){a||na(&quot;&quot;,null,b,Array.prototype.slice.call(arguments,2))},G=function(a,b,c){A(a)||na(&quot;Expected function but got %s: %s.&quot;,[ha(a),a],b,Array.prototype.slice.call(arguments,2))};var H=function(a,b,c){this.ea=c;this.Y=a;this.ga=b;this.A=0;this.w=null};H.prototype.get=function(){var a;0&lt;this.A?(this.A--,a=this.w,this.w=a.next,a.next=null):a=this.Y();return a};H.prototype.put=function(a){this.ga(a);this.A&lt;this.ea&amp;&amp;(this.A++,a.next=this.w,this.w=a)};var I;a:{var oa=x.navigator;if(oa){var pa=oa.userAgent;if(pa){I=pa;break a}}I=&quot;&quot;};var qa=function(a){x.setTimeout(function(){throw a;},0)},J,ra=function(){var a=x.MessageChannel;&quot;undefined&quot;===typeof a&amp;&amp;&quot;undefined&quot;!==typeof window&amp;&amp;window.postMessage&amp;&amp;window.addEventListener&amp;&amp;-1==I.indexOf(&quot;Presto&quot;)&amp;&amp;(a=function(){var a=document.createElement(&quot;IFRAME&quot;);a.style.display=&quot;none&quot;;a.src=&quot;&quot;;document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write(&quot;&quot;);a.close();var c=&quot;callImmediate&quot;+Math.random(),d=&quot;file:&quot;==b.location.protocol?&quot;*&quot;:b.location.protocol+</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">&quot;//&quot;+b.location.host,a=B(function(a){if((&quot;*&quot;==d||a.origin==d)&amp;&amp;a.data==c)this.port1.onmessage()},this);b.addEventListener(&quot;message&quot;,a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if(&quot;undefined&quot;!==typeof a&amp;&amp;-1==I.indexOf(&quot;Trident&quot;)&amp;&amp;-1==I.indexOf(&quot;MSIE&quot;)){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.N;c.N=null;a()}};return function(a){d.next={N:a};d=d.next;b.port2.postMessage(0)}}return&quot;undefined&quot;!==typeof document&amp;&amp;&quot;onreadystatechange&quot;in</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">document.createElement(&quot;SCRIPT&quot;)?function(a){var b=document.createElement(&quot;SCRIPT&quot;);b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){x.setTimeout(a,0)}};var K=function(){this.C=this.g=null},sa=new H(function(){return new L},function(a){a.reset()},100);K.prototype.add=function(a,b){var c=sa.get();c.set(a,b);this.C?this.C.next=c:(F(!this.g),this.g=c);this.C=c};K.prototype.remove=function(){var a=null;this.g&amp;&amp;(a=this.g,this.g=this.g.next,this.g||(this.C=null),a.next=null);return a};var L=function(){this.next=this.scope=this.H=null};L.prototype.set=function(a,b){this.H=a;this.scope=b;this.next=null};</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">L.prototype.reset=function(){this.next=this.scope=this.H=null};var O=function(a,b){M||ta();N||(M(),N=!0);ua.add(a,b)},M,ta=function(){var a=x.Promise;if(-1!=String(a).indexOf(&quot;[native code]&quot;)){var b=a.resolve(void 0);M=function(){b.then(va)}}else M=function(){var a=va,b;!(b=!A(x.setImmediate))&amp;&amp;(b=x.Window&amp;&amp;x.Window.prototype)&amp;&amp;(b=-1==I.indexOf(&quot;Edge&quot;)&amp;&amp;x.Window.prototype.setImmediate==x.setImmediate);b?(J||(J=ra()),J(a)):x.setImmediate(a)}},N=!1,ua=new K,va=function(){for(var a;a=ua.remove();){try{a.H.call(a.scope)}catch(b){qa(b)}sa.put(a)}N=!1};var Q=function(a,b){this.a=0;this.j=void 0;this.s=this.h=this.B=null;this.v=this.G=!1;if(a!=y)try{var c=this;a.call(b,function(a){P(c,2,a)},function(a){try{if(a instanceof Error)throw a;throw Error(&quot;Promise rejected.&quot;);}catch(e){}P(c,3,a)})}catch(d){P(this,3,d)}},wa=function(){this.next=this.context=this.i=this.f=this.child=null;this.D=!1};wa.prototype.reset=function(){this.context=this.i=this.f=this.child=null;this.D=!1};</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">var xa=new H(function(){return new wa},function(a){a.reset()},100),ya=function(a,b,c){var d=xa.get();d.f=a;d.i=b;d.context=c;return d},Aa=function(a,b,c){za(a,b,c,null)||O(ka(b,a))};Q.prototype.then=function(a,b,c){null!=a&amp;&amp;G(a,&quot;opt_onFulfilled should be a function.&quot;);null!=b&amp;&amp;G(b,&quot;opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?&quot;);return Ba(this,A(a)?a:null,A(b)?b:null,c)};Q.prototype.then=Q.prototype.then;Q.prototype.$goog_Thenable=!0;</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">Q.prototype.na=function(a,b){return Ba(this,null,a,b)};var Da=function(a,b){a.h||2!=a.a&amp;&amp;3!=a.a||Ca(a);F(null!=b.f);a.s?a.s.next=b:a.h=b;a.s=b},Ba=function(a,b,c,d){var e=ya(null,null,null);e.child=new Q(function(a,g){e.f=b?function(c){try{var e=b.call(d,c);a(e)}catch(z){g(z)}}:a;e.i=c?function(b){try{var e=c.call(d,b);a(e)}catch(z){g(z)}}:g});e.child.B=a;Da(a,e);return e.child};Q.prototype.oa=function(a){F(1==this.a);this.a=0;P(this,2,a)};</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">Q.prototype.pa=function(a){F(1==this.a);this.a=0;P(this,3,a)};</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">var P=function(a,b,c){0==a.a&amp;&amp;(a===c&amp;&amp;(b=3,c=new TypeError(&quot;Promise cannot resolve to itself&quot;)),a.a=1,za(c,a.oa,a.pa,a)||(a.j=c,a.a=b,a.B=null,Ca(a),3!=b||Ea(a,c)))},za=function(a,b,c,d){if(a instanceof Q)return null!=b&amp;&amp;G(b,&quot;opt_onFulfilled should be a function.&quot;),null!=c&amp;&amp;G(c,&quot;opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?&quot;),Da(a,ya(b||y,c||null,d)),!0;var e;if(a)try{e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">!0;e=typeof a;if(&quot;object&quot;==e&amp;&amp;null!=a||&quot;function&quot;==e)try{var f=a.then;if(A(f))return Ga(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1},Ga=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},k=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,k)}catch(l){k(l)}},Ca=function(a){a.G||(a.G=!0,O(a.aa,a))},Ha=function(a){var b=null;a.h&amp;&amp;(b=a.h,a.h=b.next,b.next=null);a.h||(a.s=null);null!=b&amp;&amp;F(null!=b.f);return b};</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">Q.prototype.aa=function(){for(var a;a=Ha(this);){var b=this.a,c=this.j;if(3==b&amp;&amp;a.i&amp;&amp;!a.D){var d;for(d=this;d&amp;&amp;d.v;d=d.B)d.v=!1}if(a.child)a.child.B=null,Ia(a,b,c);else try{a.D?a.f.call(a.context):Ia(a,b,c)}catch(e){Ja.call(null,e)}xa.put(a)}this.G=!1};var Ia=function(a,b,c){2==b?a.f.call(a.context,c):a.i&amp;&amp;a.i.call(a.context,c)},Ea=function(a,b){a.v=!0;O(function(){a.v&amp;&amp;Ja.call(null,b)})},Ja=qa;function R(a,b){if(!(b instanceof Object))return b;switch(b.constructor){case Date:return new Date(b.getTime());case Object:void 0===a&amp;&amp;(a={});break;case Array:a=[];break;default:return b}for(var c in b)b.hasOwnProperty(c)&amp;&amp;(a[c]=R(a[c],b[c]));return a};Q.all=function(a){return new Q(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&amp;&amp;b(e)},g=function(a){c(a)},k=0,l;k&lt;a.length;k++)l=a[k],Aa(l,ka(f,k),g);else b(e)})};Q.resolve=function(a){if(a instanceof Q)return a;var b=new Q(y);P(b,2,a);return b};Q.reject=function(a){return new Q(function(b,c){c(a)})};Q.prototype[&quot;catch&quot;]=Q.prototype.na;var S=Q;&quot;undefined&quot;!==typeof Promise&amp;&amp;(S=Promise);var Ka=S;function La(a,b){a=new T(a,b);return a.subscribe.bind(a)}var T=function(a,b){var c=this;this.b=[];this.T=0;this.task=Ka.resolve();this.u=!1;this.J=b;this.task.then(function(){a(c)}).catch(function(a){c.error(a)})};T.prototype.next=function(a){U(this,function(b){b.next(a)})};T.prototype.error=function(a){U(this,function(b){b.error(a)});this.close(a)};T.prototype.complete=function(){U(this,function(a){a.complete()});this.close()};</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">T.prototype.subscribe=function(a,b,c){var d=this,e;if(void 0===a&amp;&amp;void 0===b&amp;&amp;void 0===c)throw Error(&quot;Missing Observer.&quot;);e=Ma(a)?a:{next:a,error:b,complete:c};void 0===e.next&amp;&amp;(e.next=Na);void 0===e.error&amp;&amp;(e.error=Na);void 0===e.complete&amp;&amp;(e.complete=Na);a=this.qa.bind(this,this.b.length);this.u&amp;&amp;this.task.then(function(){try{d.O?e.error(d.O):e.complete()}catch(f){}});this.b.push(e);return a};</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">T.prototype.qa=function(a){void 0!==this.b&amp;&amp;void 0!==this.b[a]&amp;&amp;(delete this.b[a],--this.T,0===this.T&amp;&amp;void 0!==this.J&amp;&amp;this.J(this))};var U=function(a,b){if(!a.u)for(var c=0;c&lt;a.b.length;c++)Oa(a,c,b)},Oa=function(a,b,c){a.task.then(function(){if(void 0!==a.b&amp;&amp;void 0!==a.b[b])try{c(a.b[b])}catch(d){&quot;undefined&quot;!==typeof console&amp;&amp;console.error&amp;&amp;console.error(d)}})};T.prototype.close=function(a){var b=this;this.u||(this.u=!0,void 0!==a&amp;&amp;(this.O=a),this.task.then(function(){b.b=void 0;b.J=void 0}))};</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">function Ma(a){if(&quot;object&quot;!==typeof a||null===a)return!1;for(var b=n([&quot;next&quot;,&quot;error&quot;,&quot;complete&quot;]),c=b.next();!c.done;c=b.next())if(c=c.value,c in a&amp;&amp;&quot;function&quot;===typeof a[c])return!0;return!1}function Na(){};var Pa=Error.captureStackTrace,V=function(a,b){this.code=a;this.message=b;if(Pa)Pa(this,Qa.prototype.create);else{var c=Error.apply(this,arguments);this.name=&quot;FirebaseError&quot;;Object.defineProperty(this,&quot;stack&quot;,{get:function(){return c.stack}})}};V.prototype=Object.create(Error.prototype);V.prototype.constructor=V;V.prototype.name=&quot;FirebaseError&quot;;var Qa=function(a,b,c){this.ja=a;this.ka=b;this.Z=c;this.pattern=/\{\$([^}]+)}/g};</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">Qa.prototype.create=function(a,b){void 0===b&amp;&amp;(b={});var c=this.Z[a];a=this.ja+&quot;/&quot;+a;var c=void 0===c?&quot;Error&quot;:c.replace(this.pattern,function(a,c){a=b[c];return void 0!==a?a.toString():&quot;&lt;&quot;+c+&quot;?&gt;&quot;}),c=this.ka+&quot;: &quot;+c+&quot; (&quot;+a+&quot;).&quot;,c=new V(a,c),d;for(d in b)b.hasOwnProperty(d)&amp;&amp;&quot;_&quot;!==d.slice(-1)&amp;&amp;(c[d]=b[d]);return c};var W=S,X=function(a,b,c){var d=this;this.P=c;this.S=!1;this.l={};this.I=b;this.fa=R(void 0,a);Object.keys(c.INTERNAL.factories).forEach(function(a){var b=c.INTERNAL.useAsService(d,a);null!==b&amp;&amp;(b=d.da.bind(d,b),d[a]=b)})};X.prototype.delete=function(){var a=this;return(new W(function(b){Y(a);b()})).then(function(){a.P.INTERNAL.removeApp(a.I);return W.all(Object.keys(a.l).map(function(b){return a.l[b].INTERNAL.delete()}))}).then(function(){a.S=!0;a.l={}})};</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">X.prototype.da=function(a){Y(this);void 0===this.l[a]&amp;&amp;(this.l[a]=this.P.INTERNAL.factories[a](this,this.ca.bind(this)));return this.l[a]};X.prototype.ca=function(a){R(this,a)};var Y=function(a){a.S&amp;&amp;Z(Ra(&quot;deleted&quot;,{name:a.I}))};h.Object.defineProperties(X.prototype,{name:{configurable:!0,enumerable:!0,get:function(){Y(this);return this.I}},options:{configurable:!0,enumerable:!0,get:function(){Y(this);return this.fa}}});X.prototype.name&amp;&amp;X.prototype.options||X.prototype.delete||console.log(&quot;dc&quot;);</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">function Sa(){function a(a){a=a||&quot;[DEFAULT]&quot;;var b=d[a];void 0===b&amp;&amp;Z(&quot;noApp&quot;,{name:a});return b}function b(a,b){Object.keys(e).forEach(function(d){d=c(a,d);if(null!==d&amp;&amp;f[d])f[d](b,a)})}function c(a,b){if(&quot;serverAuth&quot;===b)return null;var c=b;a=a.options;&quot;auth&quot;===b&amp;&amp;(a.serviceAccount||a.credential)&amp;&amp;(c=&quot;serverAuth&quot;,&quot;serverAuth&quot;in e||Z(&quot;serverAuthMissing&quot;));return c}var d={},e={},f={},g={__esModule:!0,initializeApp:function(a,c){void 0===c?c=&quot;[DEFAULT]&quot;:&quot;string&quot;===typeof c&amp;&amp;&quot;&quot;!==c||Z(&quot;bad-app-name&quot;,</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">{name:c+&quot;&quot;});void 0!==d[c]&amp;&amp;Z(&quot;dupApp&quot;,{name:c});a=new X(a,c,g);d[c]=a;b(a,&quot;create&quot;);void 0!=a.INTERNAL&amp;&amp;void 0!=a.INTERNAL.getToken||R(a,{INTERNAL:{getToken:function(){return W.resolve(null)},addAuthTokenListener:function(){},removeAuthTokenListener:function(){}}});return a},app:a,apps:null,Promise:W,SDK_VERSION:&quot;0.0.0&quot;,INTERNAL:{registerService:function(b,c,d,v){e[b]&amp;&amp;Z(&quot;dupService&quot;,{name:b});e[b]=c;v&amp;&amp;(f[b]=v);c=function(c){void 0===c&amp;&amp;(c=a());return c[b]()};void 0!==d&amp;&amp;R(c,d);return g[b]=c},createFirebaseNamespace:Sa,</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">extendNamespace:function(a){R(g,a)},createSubscribe:La,ErrorFactory:Qa,removeApp:function(a){b(d[a],&quot;delete&quot;);delete d[a]},factories:e,useAsService:c,Promise:Q,deepExtend:R}};g[&quot;default&quot;]=g;Object.defineProperty(g,&quot;apps&quot;,{get:function(){return Object.keys(d).map(function(a){return d[a]})}});a.App=X;return g}function Z(a,b){throw Error(Ra(a,b));}</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">function Ra(a,b){b=b||{};b={noApp:&quot;No Firebase App &#39;&quot;+b.name+&quot;&#39; has been created - call Firebase App.initializeApp().&quot;,&quot;bad-app-name&quot;:&quot;Illegal App name: &#39;&quot;+b.name+&quot;&#39;.&quot;,dupApp:&quot;Firebase App named &#39;&quot;+b.name+&quot;&#39; already exists.&quot;,deleted:&quot;Firebase App named &#39;&quot;+b.name+&quot;&#39; already deleted.&quot;,dupService:&quot;Firebase Service named &#39;&quot;+b.name+&quot;&#39; already registered.&quot;,serverAuthMissing:&quot;Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain.&quot;}[a];</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">return void 0===b?&quot;Application Error: (&quot;+a+&quot;)&quot;:b};&quot;undefined&quot;!==typeof firebase&amp;&amp;(firebase=Sa()); })();</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">firebase.SDK_VERSION = &quot;3.5.1&quot;;</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">(function(){var h,aa=aa||{},l=this,ba=function(){},ca=function(){throw Error(&quot;unimplemented abstract method&quot;);},m=function(a){var b=typeof a;if(&quot;object&quot;==b)if(a){if(a instanceof Array)return&quot;array&quot;;if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(&quot;[object Window]&quot;==c)return&quot;object&quot;;if(&quot;[object Array]&quot;==c||&quot;number&quot;==typeof a.length&amp;&amp;&quot;undefined&quot;!=typeof a.splice&amp;&amp;&quot;undefined&quot;!=typeof a.propertyIsEnumerable&amp;&amp;!a.propertyIsEnumerable(&quot;splice&quot;))return&quot;array&quot;;if(&quot;[object Function]&quot;==c||&quot;undefined&quot;!=</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">typeof a.call&amp;&amp;&quot;undefined&quot;!=typeof a.propertyIsEnumerable&amp;&amp;!a.propertyIsEnumerable(&quot;call&quot;))return&quot;function&quot;}else return&quot;null&quot;;else if(&quot;function&quot;==b&amp;&amp;&quot;undefined&quot;==typeof a.call)return&quot;object&quot;;return b},da=function(a){return null===a},ea=function(a){return&quot;array&quot;==m(a)},fa=function(a){var b=m(a);return&quot;array&quot;==b||&quot;object&quot;==b&amp;&amp;&quot;number&quot;==typeof a.length},n=function(a){return&quot;string&quot;==typeof a},ga=function(a){return&quot;number&quot;==typeof a},p=function(a){return&quot;function&quot;==m(a)},ha=function(a){var b=typeof a;</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">return&quot;object&quot;==b&amp;&amp;null!=a||&quot;function&quot;==b},ia=function(a,b,c){return a.call.apply(a.bind,arguments)},ja=function(a,b,c){if(!a)throw Error();if(2&lt;arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},q=function(a,b,c){q=Function.prototype.bind&amp;&amp;-1!=Function.prototype.bind.toString().indexOf(&quot;native code&quot;)?ia:ja;return q.apply(null,</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">arguments)},ka=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},la=Date.now||function(){return+new Date},r=function(a,b){function c(){}c.prototype=b.prototype;a.Vc=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.df=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e&lt;arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var u=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&amp;&amp;(this.stack=b)}a&amp;&amp;(this.message=String(a))};r(u,Error);u.prototype.name=&quot;CustomError&quot;;var ma=function(a,b){for(var c=a.split(&quot;%s&quot;),d=&quot;&quot;,e=Array.prototype.slice.call(arguments,1);e.length&amp;&amp;1&lt;c.length;)d+=c.shift()+e.shift();return d+c.join(&quot;%s&quot;)},na=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,&quot;&quot;)},oa=/&amp;/g,pa=/&lt;/g,qa=/&gt;/g,ra=/&quot;/g,sa=/&#39;/g,ta=/\x00/g,va=/[\x00&amp;&lt;&gt;&quot;&#39;]/,v=function(a,b){return-1!=a.indexOf(b)},wa=function(a,b){return a&lt;b?-1:a&gt;b?1:0};var xa=function(a,b){b.unshift(a);u.call(this,ma.apply(null,b));b.shift()};r(xa,u);xa.prototype.name=&quot;AssertionError&quot;;</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">var ya=function(a,b,c,d){var e=&quot;Assertion failed&quot;;if(c)var e=e+(&quot;: &quot;+c),f=d;else a&amp;&amp;(e+=&quot;: &quot;+a,f=b);throw new xa(&quot;&quot;+e,f||[]);},w=function(a,b,c){a||ya(&quot;&quot;,null,b,Array.prototype.slice.call(arguments,2))},za=function(a,b){throw new xa(&quot;Failure&quot;+(a?&quot;: &quot;+a:&quot;&quot;),Array.prototype.slice.call(arguments,1));},Aa=function(a,b,c){ga(a)||ya(&quot;Expected number but got %s: %s.&quot;,[m(a),a],b,Array.prototype.slice.call(arguments,2));return a},Ba=function(a,b,c){n(a)||ya(&quot;Expected string but got %s: %s.&quot;,[m(a),a],b,Array.prototype.slice.call(arguments,</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">2))},Ca=function(a,b,c){p(a)||ya(&quot;Expected function but got %s: %s.&quot;,[m(a),a],b,Array.prototype.slice.call(arguments,2))};var Da=Array.prototype.indexOf?function(a,b,c){w(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0&gt;c?Math.max(0,a.length+c):c;if(n(a))return n(b)&amp;&amp;1==b.length?a.indexOf(b,c):-1;for(;c&lt;a.length;c++)if(c in a&amp;&amp;a[c]===b)return c;return-1},x=Array.prototype.forEach?function(a,b,c){w(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=n(a)?a.split(&quot;&quot;):a,f=0;f&lt;d;f++)f in e&amp;&amp;b.call(c,e[f],f,a)},Ea=function(a,b){for(var c=n(a)?</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">a.split(&quot;&quot;):a,d=a.length-1;0&lt;=d;--d)d in c&amp;&amp;b.call(void 0,c[d],d,a)},Fa=Array.prototype.map?function(a,b,c){w(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=n(a)?a.split(&quot;&quot;):a,g=0;g&lt;d;g++)g in f&amp;&amp;(e[g]=b.call(c,f[g],g,a));return e},Ga=Array.prototype.some?function(a,b,c){w(null!=a.length);return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=n(a)?a.split(&quot;&quot;):a,f=0;f&lt;d;f++)if(f in e&amp;&amp;b.call(c,e[f],f,a))return!0;return!1},</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">Ia=function(a){var b;a:{b=Ha;for(var c=a.length,d=n(a)?a.split(&quot;&quot;):a,e=0;e&lt;c;e++)if(e in d&amp;&amp;b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0&gt;b?null:n(a)?a.charAt(b):a[b]},Ja=function(a,b){return 0&lt;=Da(a,b)},La=function(a,b){b=Da(a,b);var c;(c=0&lt;=b)&amp;&amp;Ka(a,b);return c},Ka=function(a,b){w(null!=a.length);return 1==Array.prototype.splice.call(a,b,1).length},Ma=function(a,b){var c=0;Ea(a,function(d,e){b.call(void 0,d,e,a)&amp;&amp;Ka(a,e)&amp;&amp;c++})},Na=function(a){return Array.prototype.concat.apply(Array.prototype,</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">arguments)},Oa=function(a){return Array.prototype.concat.apply(Array.prototype,arguments)},Pa=function(a){var b=a.length;if(0&lt;b){for(var c=Array(b),d=0;d&lt;b;d++)c[d]=a[d];return c}return[]},Qa=function(a,b){for(var c=1;c&lt;arguments.length;c++){var d=arguments[c];if(fa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g&lt;f;g++)a[e+g]=d[g]}else a.push(d)}};var Ra=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},Sa=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},Ta=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},Ua=function(a){for(var b in a)return!1;return!0},Va=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0},Wa=function(a){var b={},c;for(c in a)b[c]=a[c];return b},Xa=&quot;constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf&quot;.split(&quot; &quot;),</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">Ya=function(a,b){for(var c,d,e=1;e&lt;arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f&lt;Xa.length;f++)c=Xa[f],Object.prototype.hasOwnProperty.call(d,c)&amp;&amp;(a[c]=d[c])}};var Za;a:{var $a=l.navigator;if($a){var ab=$a.userAgent;if(ab){Za=ab;break a}}Za=&quot;&quot;}var y=function(a){return v(Za,a)};var bb=function(a){bb[&quot; &quot;](a);return a};bb[&quot; &quot;]=ba;var db=function(a,b){var c=cb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var eb=y(&quot;Opera&quot;),z=y(&quot;Trident&quot;)||y(&quot;MSIE&quot;),fb=y(&quot;Edge&quot;),gb=fb||z,hb=y(&quot;Gecko&quot;)&amp;&amp;!(v(Za.toLowerCase(),&quot;webkit&quot;)&amp;&amp;!y(&quot;Edge&quot;))&amp;&amp;!(y(&quot;Trident&quot;)||y(&quot;MSIE&quot;))&amp;&amp;!y(&quot;Edge&quot;),ib=v(Za.toLowerCase(),&quot;webkit&quot;)&amp;&amp;!y(&quot;Edge&quot;),jb=function(){var a=l.document;return a?a.documentMode:void 0},kb;</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">a:{var lb=&quot;&quot;,mb=function(){var a=Za;if(hb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(fb)return/Edge\/([\d\.]+)/.exec(a);if(z)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ib)return/WebKit\/(\S+)/.exec(a);if(eb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();mb&amp;&amp;(lb=mb?mb[1]:&quot;&quot;);if(z){var nb=jb();if(null!=nb&amp;&amp;nb&gt;parseFloat(lb)){kb=String(nb);break a}}kb=lb}</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">var ob=kb,cb={},A=function(a){return db(a,function(){for(var b=0,c=na(String(ob)).split(&quot;.&quot;),d=na(String(a)).split(&quot;.&quot;),e=Math.max(c.length,d.length),f=0;0==b&amp;&amp;f&lt;e;f++){var g=c[f]||&quot;&quot;,k=d[f]||&quot;&quot;;do{g=/(\d*)(\D*)(.*)/.exec(g)||[&quot;&quot;,&quot;&quot;,&quot;&quot;,&quot;&quot;];k=/(\d*)(\D*)(.*)/.exec(k)||[&quot;&quot;,&quot;&quot;,&quot;&quot;,&quot;&quot;];if(0==g[0].length&amp;&amp;0==k[0].length)break;b=wa(0==g[1].length?0:parseInt(g[1],10),0==k[1].length?0:parseInt(k[1],10))||wa(0==g[2].length,0==k[2].length)||wa(g[2],k[2]);g=g[3];k=k[3]}while(0==b)}return 0&lt;=b})},pb;var qb=l.document;</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">pb=qb&amp;&amp;z?jb()||(&quot;CSS1Compat&quot;==qb.compatMode?parseInt(ob,10):5):void 0;var rb=null,sb=null,ub=function(a){var b=&quot;&quot;;tb(a,function(a){b+=String.fromCharCode(a)});return b},tb=function(a,b){function c(b){for(;d&lt;a.length;){var c=a.charAt(d++),e=sb[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error(&quot;Unknown base64 encoding at char: &quot;+c);}return b}vb();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),k=c(64);if(64===k&amp;&amp;-1===e)break;b(e&lt;&lt;2|f&gt;&gt;4);64!=g&amp;&amp;(b(f&lt;&lt;4&amp;240|g&gt;&gt;2),64!=k&amp;&amp;b(g&lt;&lt;6&amp;192|k))}},vb=function(){if(!rb){rb={};sb={};for(var a=0;65&gt;a;a++)rb[a]=&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=&quot;.charAt(a),</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">sb[rb[a]]=a,62&lt;=a&amp;&amp;(sb[&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.&quot;.charAt(a)]=a)}};var wb=!z||9&lt;=Number(pb),xb=z&amp;&amp;!A(&quot;9&quot;);!ib||A(&quot;528&quot;);hb&amp;&amp;A(&quot;1.9b&quot;)||z&amp;&amp;A(&quot;8&quot;)||eb&amp;&amp;A(&quot;9.5&quot;)||ib&amp;&amp;A(&quot;528&quot;);hb&amp;&amp;!A(&quot;8&quot;)||z&amp;&amp;A(&quot;9&quot;);var yb=function(){this.Ba=this.Ba;this.Wb=this.Wb};yb.prototype.Ba=!1;yb.prototype.isDisposed=function(){return this.Ba};yb.prototype.Ra=function(){if(this.Wb)for(;this.Wb.length;)this.Wb.shift()()};var zb=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.Ya=!1;this.Bd=!0};zb.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Bd=!1};var Ab=function(a,b){zb.call(this,a?a.type:&quot;&quot;);this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.ob=this.state=null;a&amp;&amp;this.init(a,b)};r(Ab,zb);</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">Ab.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(hb){var e;a:{try{bb(b.nodeName);e=!0;break a}catch(f){}e=!1}e||(b=null)}}else&quot;mouseover&quot;==c?b=a.fromElement:&quot;mouseout&quot;==c&amp;&amp;(b=a.toElement);this.relatedTarget=b;null===d?(this.offsetX=ib||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=ib||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||(&quot;keypress&quot;==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.ob=a;a.defaultPrevented&amp;&amp;</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">this.preventDefault()};Ab.prototype.preventDefault=function(){Ab.Vc.preventDefault.call(this);var a=this.ob;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,xb)try{if(a.ctrlKey||112&lt;=a.keyCode&amp;&amp;123&gt;=a.keyCode)a.keyCode=-1}catch(b){}};Ab.prototype.le=function(){return this.ob};var Bb=&quot;closure_listenable_&quot;+(1E6*Math.random()|0),Cb=0;var Db=function(a,b,c,d,e){this.listener=a;this.ac=null;this.src=b;this.type=c;this.Gb=!!d;this.Nb=e;this.key=++Cb;this.cb=this.Fb=!1},Eb=function(a){a.cb=!0;a.listener=null;a.ac=null;a.src=null;a.Nb=null};var Fb=function(a){this.src=a;this.A={};this.Cb=0};Fb.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.A[f];a||(a=this.A[f]=[],this.Cb++);var g=Gb(a,b,d,e);-1&lt;g?(b=a[g],c||(b.Fb=!1)):(b=new Db(b,this.src,f,!!d,e),b.Fb=c,a.push(b));return b};Fb.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.A))return!1;var e=this.A[a];b=Gb(e,b,c,d);return-1&lt;b?(Eb(e[b]),Ka(e,b),0==e.length&amp;&amp;(delete this.A[a],this.Cb--),!0):!1};</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">var Hb=function(a,b){var c=b.type;c in a.A&amp;&amp;La(a.A[c],b)&amp;&amp;(Eb(b),0==a.A[c].length&amp;&amp;(delete a.A[c],a.Cb--))};Fb.prototype.Ac=function(a,b,c,d){a=this.A[a.toString()];var e=-1;a&amp;&amp;(e=Gb(a,b,c,d));return-1&lt;e?a[e]:null};var Gb=function(a,b,c,d){for(var e=0;e&lt;a.length;++e){var f=a[e];if(!f.cb&amp;&amp;f.listener==b&amp;&amp;f.Gb==!!c&amp;&amp;f.Nb==d)return e}return-1};var Ib=&quot;closure_lm_&quot;+(1E6*Math.random()|0),Jb={},Kb=0,Lb=function(a,b,c,d,e){if(ea(b))for(var f=0;f&lt;b.length;f++)Lb(a,b[f],c,d,e);else c=Mb(c),a&amp;&amp;a[Bb]?a.listen(b,c,d,e):Nb(a,b,c,!1,d,e)},Nb=function(a,b,c,d,e,f){if(!b)throw Error(&quot;Invalid event type&quot;);var g=!!e,k=Ob(a);k||(a[Ib]=k=new Fb(a));c=k.add(b,c,d,e,f);if(!c.ac){d=Pb();c.ac=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,g);else if(a.attachEvent)a.attachEvent(Qb(b.toString()),d);else throw Error(&quot;addEventListener and attachEvent are unavailable.&quot;);</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">Kb++}},Pb=function(){var a=Rb,b=wb?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},Sb=function(a,b,c,d,e){if(ea(b))for(var f=0;f&lt;b.length;f++)Sb(a,b[f],c,d,e);else c=Mb(c),a&amp;&amp;a[Bb]?Tb(a,b,c,d,e):Nb(a,b,c,!0,d,e)},Ub=function(a,b,c,d,e){if(ea(b))for(var f=0;f&lt;b.length;f++)Ub(a,b[f],c,d,e);else c=Mb(c),a&amp;&amp;a[Bb]?a.ba.remove(String(b),c,d,e):a&amp;&amp;(a=Ob(a))&amp;&amp;(b=a.Ac(b,c,!!d,e))&amp;&amp;Vb(b)},Vb=function(a){if(!ga(a)&amp;&amp;a&amp;&amp;!a.cb){var b=a.src;if(b&amp;&amp;</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">b[Bb])Hb(b.ba,a);else{var c=a.type,d=a.ac;b.removeEventListener?b.removeEventListener(c,d,a.Gb):b.detachEvent&amp;&amp;b.detachEvent(Qb(c),d);Kb--;(c=Ob(b))?(Hb(c,a),0==c.Cb&amp;&amp;(c.src=null,b[Ib]=null)):Eb(a)}}},Qb=function(a){return a in Jb?Jb[a]:Jb[a]=&quot;on&quot;+a},Xb=function(a,b,c,d){var e=!0;if(a=Ob(a))if(b=a.A[b.toString()])for(b=b.concat(),a=0;a&lt;b.length;a++){var f=b[a];f&amp;&amp;f.Gb==c&amp;&amp;!f.cb&amp;&amp;(f=Wb(f,d),e=e&amp;&amp;!1!==f)}return e},Wb=function(a,b){var c=a.listener,d=a.Nb||a.src;a.Fb&amp;&amp;Vb(a);return c.call(d,b)},Rb=function(a,</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">b){if(a.cb)return!0;if(!wb){if(!b)a:{b=[&quot;window&quot;,&quot;event&quot;];for(var c=l,d;d=b.shift();)if(null!=c[d])c=c[d];else{b=null;break a}b=c}d=b;b=new Ab(d,this);c=!0;if(!(0&gt;d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.currentTarget;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;!b.Ya&amp;&amp;0&lt;=e;e--){b.currentTarget=d[e];var f=Xb(d[e],a,!0,b),c=c&amp;&amp;f}for(e=0;!b.Ya&amp;&amp;e&lt;d.length;e++)b.currentTarget=</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">d[e],f=Xb(d[e],a,!1,b),c=c&amp;&amp;f}return c}return Wb(a,new Ab(b,this))},Ob=function(a){a=a[Ib];return a instanceof Fb?a:null},Yb=&quot;__closure_events_fn_&quot;+(1E9*Math.random()&gt;&gt;&gt;0),Mb=function(a){w(a,&quot;Listener can not be null.&quot;);if(p(a))return a;w(a.handleEvent,&quot;An object listener must have handleEvent method.&quot;);a[Yb]||(a[Yb]=function(b){return a.handleEvent(b)});return a[Yb]};var Zb=/^[+a-zA-Z0-9_.!#$%&amp;&#39;*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;var ac=function(){this.kc=&quot;&quot;;this.Td=$b};ac.prototype.Qb=!0;ac.prototype.Lb=function(){return this.kc};ac.prototype.toString=function(){return&quot;Const{&quot;+this.kc+&quot;}&quot;};var bc=function(a){if(a instanceof ac&amp;&amp;a.constructor===ac&amp;&amp;a.Td===$b)return a.kc;za(&quot;expected object of type Const, got &#39;&quot;+a+&quot;&#39;&quot;);return&quot;type_error:Const&quot;},$b={},cc=function(a){var b=new ac;b.kc=a;return b};cc(&quot;&quot;);var B=function(){this.la=&quot;&quot;;this.Sd=dc};B.prototype.Qb=!0;B.prototype.Lb=function(){return this.la};B.prototype.toString=function(){return&quot;SafeUrl{&quot;+this.la+&quot;}&quot;};</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">var ec=function(a){if(a instanceof B&amp;&amp;a.constructor===B&amp;&amp;a.Sd===dc)return a.la;za(&quot;expected object of type SafeUrl, got &#39;&quot;+a+&quot;&#39; of type &quot;+m(a));return&quot;type_error:SafeUrl&quot;},fc=/^(?:(?:https?|mailto|ftp):|[^&amp;:/?#]*(?:[/?#]|$))/i,hc=function(a){if(a instanceof B)return a;a=a.Qb?a.Lb():String(a);fc.test(a)||(a=&quot;about:invalid#zClosurez&quot;);return gc(a)},dc={},gc=function(a){var b=new B;b.la=a;return b};gc(&quot;about:blank&quot;);var ic=function(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\[&quot;\\\/bfnrtu]/g,&quot;@&quot;).replace(/(?:&quot;[^&quot;\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*&quot;|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,&quot;]&quot;).replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,&quot;&quot;))},jc=function(a){a=String(a);if(ic(a))try{return eval(&quot;(&quot;+a+&quot;)&quot;)}catch(b){}throw Error(&quot;Invalid JSON string: &quot;+a);},mc=function(a){var b=[];kc(new lc,a,b);return b.join(&quot;&quot;)},lc=function(){this.ec=void 0},</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">kc=function(a,b,c){if(null==b)c.push(&quot;null&quot;);else{if(&quot;object&quot;==typeof b){if(ea(b)){var d=b;b=d.length;c.push(&quot;[&quot;);for(var e=&quot;&quot;,f=0;f&lt;b;f++)c.push(e),e=d[f],kc(a,a.ec?a.ec.call(d,String(f),e):e,c),e=&quot;,&quot;;c.push(&quot;]&quot;);return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push(&quot;{&quot;);f=&quot;&quot;;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&amp;&amp;(e=b[d],&quot;function&quot;!=typeof e&amp;&amp;(c.push(f),nc(d,c),c.push(&quot;:&quot;),kc(a,a.ec?a.ec.call(b,d,e):e,c),f=&quot;,&quot;));c.push(&quot;}&quot;);return}}switch(typeof b){case &quot;string&quot;:nc(b,</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">c);break;case &quot;number&quot;:c.push(isFinite(b)&amp;&amp;!isNaN(b)?String(b):&quot;null&quot;);break;case &quot;boolean&quot;:c.push(String(b));break;case &quot;function&quot;:c.push(&quot;null&quot;);break;default:throw Error(&quot;Unknown type: &quot;+typeof b);}}},oc={&#39;&quot;&#39;:&#39;\\&quot;&#39;,&quot;\\&quot;:&quot;\\\\&quot;,&quot;/&quot;:&quot;\\/&quot;,&quot;\b&quot;:&quot;\\b&quot;,&quot;\f&quot;:&quot;\\f&quot;,&quot;\n&quot;:&quot;\\n&quot;,&quot;\r&quot;:&quot;\\r&quot;,&quot;\t&quot;:&quot;\\t&quot;,&quot;\x0B&quot;:&quot;\\u000b&quot;},pc=/\uffff/.test(&quot;\uffff&quot;)?/[\\\&quot;\x00-\x1f\x7f-\uffff]/g:/[\\\&quot;\x00-\x1f\x7f-\xff]/g,nc=function(a,b){b.push(&#39;&quot;&#39;,a.replace(pc,function(a){var b=oc[a];b||(b=&quot;\\u&quot;+(a.charCodeAt(0)|65536).toString(16).substr(1),</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">oc[a]=b);return b}),&#39;&quot;&#39;)};var qc=function(){};qc.prototype.Zc=null;qc.prototype.nb=ca;var rc=function(a){return a.Zc||(a.Zc=a.Tb())};qc.prototype.Tb=ca;var sc,tc=function(){};r(tc,qc);tc.prototype.nb=function(){var a=uc(this);return a?new ActiveXObject(a):new XMLHttpRequest};tc.prototype.Tb=function(){var a={};uc(this)&amp;&amp;(a[0]=!0,a[1]=!0);return a};</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">var uc=function(a){if(!a.od&amp;&amp;&quot;undefined&quot;==typeof XMLHttpRequest&amp;&amp;&quot;undefined&quot;!=typeof ActiveXObject){for(var b=[&quot;MSXML2.XMLHTTP.6.0&quot;,&quot;MSXML2.XMLHTTP.3.0&quot;,&quot;MSXML2.XMLHTTP&quot;,&quot;Microsoft.XMLHTTP&quot;],c=0;c&lt;b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.od=d}catch(e){}}throw Error(&quot;Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed&quot;);}return a.od};sc=new tc;var vc=function(){};r(vc,qc);vc.prototype.nb=function(){var a=new XMLHttpRequest;if(&quot;withCredentials&quot;in a)return a;if(&quot;undefined&quot;!=typeof XDomainRequest)return new wc;throw Error(&quot;Unsupported browser&quot;);};vc.prototype.Tb=function(){return{}};</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">var wc=function(){this.qa=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseText=&quot;&quot;;this.status=-1;this.statusText=this.responseXML=null;this.qa.onload=q(this.pe,this);this.qa.onerror=q(this.md,this);this.qa.onprogress=q(this.qe,this);this.qa.ontimeout=q(this.re,this)};h=wc.prototype;h.open=function(a,b,c){if(null!=c&amp;&amp;!c)throw Error(&quot;Only async requests are supported.&quot;);this.qa.open(a,b)};</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">h.send=function(a){if(a)if(&quot;string&quot;==typeof a)this.qa.send(a);else throw Error(&quot;Only string data is supported&quot;);else this.qa.send()};h.abort=function(){this.qa.abort()};h.setRequestHeader=function(){};h.pe=function(){this.status=200;this.responseText=this.qa.responseText;xc(this,4)};h.md=function(){this.status=500;this.responseText=&quot;&quot;;xc(this,4)};h.re=function(){this.md()};h.qe=function(){this.status=200;xc(this,1)};var xc=function(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()};var C=function(a,b){this.h=[];this.g=b;for(var c=!0,d=a.length-1;0&lt;=d;d--){var e=a[d]|0;c&amp;&amp;e==b||(this.h[d]=e,c=!1)}},yc={},zc=function(a){if(-128&lt;=a&amp;&amp;128&gt;a){var b=yc[a];if(b)return b}b=new C([a|0],0&gt;a?-1:0);-128&lt;=a&amp;&amp;128&gt;a&amp;&amp;(yc[a]=b);return b},F=function(a){if(isNaN(a)||!isFinite(a))return D;if(0&gt;a)return E(F(-a));for(var b=[],c=1,d=0;a&gt;=c;d++)b[d]=a/c|0,c*=4294967296;return new C(b,0)},Ac=function(a,b){if(0==a.length)throw Error(&quot;number format error: empty string&quot;);b=b||10;if(2&gt;b||36&lt;b)throw Error(&quot;radix out of range: &quot;+</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">b);if(&quot;-&quot;==a.charAt(0))return E(Ac(a.substring(1),b));if(0&lt;=a.indexOf(&quot;-&quot;))throw Error(&#39;number format error: interior &quot;-&quot; character&#39;);for(var c=F(Math.pow(b,8)),d=D,e=0;e&lt;a.length;e+=8){var f=Math.min(8,a.length-e),g=parseInt(a.substring(e,e+f),b);8&gt;f?(f=F(Math.pow(b,f)),d=d.multiply(f).add(F(g))):(d=d.multiply(c),d=d.add(F(g)))}return d},D=zc(0),Bc=zc(1),Cc=zc(16777216),Dc=function(a){if(-1==a.g)return-Dc(E(a));for(var b=0,c=1,d=0;d&lt;a.h.length;d++)b+=Ec(a,d)*c,c*=4294967296;return b};</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">C.prototype.toString=function(a){a=a||10;if(2&gt;a||36&lt;a)throw Error(&quot;radix out of range: &quot;+a);if(Fc(this))return&quot;0&quot;;if(-1==this.g)return&quot;-&quot;+E(this).toString(a);for(var b=F(Math.pow(a,6)),c=this,d=&quot;&quot;;;){var e=Gc(c,b),c=Hc(c,e.multiply(b)),f=((0&lt;c.h.length?c.h[0]:c.g)&gt;&gt;&gt;0).toString(a),c=e;if(Fc(c))return f+d;for(;6&gt;f.length;)f=&quot;0&quot;+f;d=&quot;&quot;+f+d}};</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">var G=function(a,b){return 0&gt;b?0:b&lt;a.h.length?a.h[b]:a.g},Ec=function(a,b){a=G(a,b);return 0&lt;=a?a:4294967296+a},Fc=function(a){if(0!=a.g)return!1;for(var b=0;b&lt;a.h.length;b++)if(0!=a.h[b])return!1;return!0};C.prototype.Ib=function(a){if(this.g!=a.g)return!1;for(var b=Math.max(this.h.length,a.h.length),c=0;c&lt;b;c++)if(G(this,c)!=G(a,c))return!1;return!0};C.prototype.compare=function(a){a=Hc(this,a);return-1==a.g?-1:Fc(a)?0:1};</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">var E=function(a){for(var b=a.h.length,c=[],d=0;d&lt;b;d++)c[d]=~a.h[d];return(new C(c,~a.g)).add(Bc)};C.prototype.add=function(a){for(var b=Math.max(this.h.length,a.h.length),c=[],d=0,e=0;e&lt;=b;e++){var f=d+(G(this,e)&amp;65535)+(G(a,e)&amp;65535),g=(f&gt;&gt;&gt;16)+(G(this,e)&gt;&gt;&gt;16)+(G(a,e)&gt;&gt;&gt;16),d=g&gt;&gt;&gt;16,f=f&amp;65535,g=g&amp;65535;c[e]=g&lt;&lt;16|f}return new C(c,c[c.length-1]&amp;-2147483648?-1:0)};var Hc=function(a,b){return a.add(E(b))};</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">C.prototype.multiply=function(a){if(Fc(this)||Fc(a))return D;if(-1==this.g)return-1==a.g?E(this).multiply(E(a)):E(E(this).multiply(a));if(-1==a.g)return E(this.multiply(E(a)));if(0&gt;this.compare(Cc)&amp;&amp;0&gt;a.compare(Cc))return F(Dc(this)*Dc(a));for(var b=this.h.length+a.h.length,c=[],d=0;d&lt;2*b;d++)c[d]=0;for(d=0;d&lt;this.h.length;d++)for(var e=0;e&lt;a.h.length;e++){var f=G(this,d)&gt;&gt;&gt;16,g=G(this,d)&amp;65535,k=G(a,e)&gt;&gt;&gt;16,t=G(a,e)&amp;65535;c[2*d+2*e]+=g*t;Ic(c,2*d+2*e);c[2*d+2*e+1]+=f*t;Ic(c,2*d+2*e+1);c[2*d+2*e+</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">1]+=g*k;Ic(c,2*d+2*e+1);c[2*d+2*e+2]+=f*k;Ic(c,2*d+2*e+2)}for(d=0;d&lt;b;d++)c[d]=c[2*d+1]&lt;&lt;16|c[2*d];for(d=b;d&lt;2*b;d++)c[d]=0;return new C(c,0)};</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">var Ic=function(a,b){for(;(a[b]&amp;65535)!=a[b];)a[b+1]+=a[b]&gt;&gt;&gt;16,a[b]&amp;=65535,b++},Gc=function(a,b){if(Fc(b))throw Error(&quot;division by zero&quot;);if(Fc(a))return D;if(-1==a.g)return-1==b.g?Gc(E(a),E(b)):E(Gc(E(a),b));if(-1==b.g)return E(Gc(a,E(b)));if(30&lt;a.h.length){if(-1==a.g||-1==b.g)throw Error(&quot;slowDivide_ only works with positive integers.&quot;);for(var c=Bc;0&gt;=b.compare(a);)c=c.shiftLeft(1),b=b.shiftLeft(1);var d=Jc(c,1),e=Jc(b,1),f;b=Jc(b,2);for(c=Jc(c,2);!Fc(b);)f=e.add(b),0&gt;=f.compare(a)&amp;&amp;(d=d.add(c),</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">e=f),b=Jc(b,1),c=Jc(c,1);return d}for(c=D;0&lt;=a.compare(b);){d=Math.max(1,Math.floor(Dc(a)/Dc(b)));e=Math.ceil(Math.log(d)/Math.LN2);e=48&gt;=e?1:Math.pow(2,e-48);f=F(d);for(var g=f.multiply(b);-1==g.g||0&lt;g.compare(a);)d-=e,f=F(d),g=f.multiply(b);Fc(f)&amp;&amp;(f=Bc);c=c.add(f);a=Hc(a,g)}return c},Kc=function(a,b){for(var c=Math.max(a.h.length,b.h.length),d=[],e=0;e&lt;c;e++)d[e]=G(a,e)|G(b,e);return new C(d,a.g|b.g)};</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">C.prototype.shiftLeft=function(a){var b=a&gt;&gt;5;a%=32;for(var c=this.h.length+b+(0&lt;a?1:0),d=[],e=0;e&lt;c;e++)d[e]=0&lt;a?G(this,e-b)&lt;&lt;a|G(this,e-b-1)&gt;&gt;&gt;32-a:G(this,e-b);return new C(d,this.g)};var Jc=function(a,b){var c=b&gt;&gt;5;b%=32;for(var d=a.h.length-c,e=[],f=0;f&lt;d;f++)e[f]=0&lt;b?G(a,f+c)&gt;&gt;&gt;b|G(a,f+c+1)&lt;&lt;32-b:G(a,f+c);return new C(e,a.g)};var Lc=function(a,b){this.sb=a;this.pa=b};Lc.prototype.Ib=function(a){return this.pa==a.pa&amp;&amp;this.sb.Ib(Wa(a.sb))};Lc.prototype.toString=ca;</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">var Oc=function(a){try{var b;if(b=0==a.lastIndexOf(&quot;[&quot;,0)){var c=a.length-1;b=0&lt;=c&amp;&amp;a.indexOf(&quot;]&quot;,c)==c}return b?new Mc(a.substring(1,a.length-1)):new Nc(a)}catch(d){return null}},Nc=function(a){var b=D;if(a instanceof C){if(0!=a.g||0&gt;a.compare(D)||0&lt;a.compare(Pc))throw Error(&quot;The address does not look like an IPv4.&quot;);b=Wa(a)}else{if(!Qc.test(a))throw Error(a+&quot; does not look like an IPv4 address.&quot;);var c=a.split(&quot;.&quot;);if(4!=c.length)throw Error(a+&quot; does not look like an IPv4 address.&quot;);for(var d=0;d&lt;</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">c.length;d++){var e;e=c[d];var f=Number(e);e=0==f&amp;&amp;/^[\s\xa0]*$/.test(e)?NaN:f;if(isNaN(e)||0&gt;e||255&lt;e||1!=c[d].length&amp;&amp;0==c[d].lastIndexOf(&quot;0&quot;,0))throw Error(&quot;In &quot;+a+&quot;, octet &quot;+d+&quot; is not valid&quot;);e=F(e);b=Kc(b.shiftLeft(8),e)}}Lc.call(this,b,4)};r(Nc,Lc);var Qc=/^[0-9.]*$/,Pc=Hc(Bc.shiftLeft(32),Bc);Nc.prototype.toString=function(){if(this.Ea)return this.Ea;for(var a=Ec(this.sb,0),b=[],c=3;0&lt;=c;c--)b[c]=String(a&amp;255),a&gt;&gt;&gt;=8;return this.Ea=b.join(&quot;.&quot;)};</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">var Mc=function(a){var b=D;if(a instanceof C){if(0!=a.g||0&gt;a.compare(D)||0&lt;a.compare(Rc))throw Error(&quot;The address does not look like a valid IPv6.&quot;);b=Wa(a)}else{if(!Sc.test(a))throw Error(a+&quot; is not a valid IPv6 address.&quot;);var c=a.split(&quot;:&quot;);if(-1!=c[c.length-1].indexOf(&quot;.&quot;)){a=Ec(Wa((new Nc(c[c.length-1])).sb),0);var d=[];d.push((a&gt;&gt;&gt;16&amp;65535).toString(16));d.push((a&amp;65535).toString(16));Ka(c,c.length-1);Qa(c,d);a=c.join(&quot;:&quot;)}d=a.split(&quot;::&quot;);if(2&lt;d.length||1==d.length&amp;&amp;8!=c.length)throw Error(a+</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">&quot; is not a valid IPv6 address.&quot;);if(1&lt;d.length){c=d[0].split(&quot;:&quot;);d=d[1].split(&quot;:&quot;);1==c.length&amp;&amp;&quot;&quot;==c[0]&amp;&amp;(c=[]);1==d.length&amp;&amp;&quot;&quot;==d[0]&amp;&amp;(d=[]);var e=8-(c.length+d.length);if(1&gt;e)c=[];else{for(var f=[],g=0;g&lt;e;g++)f[g]=&quot;0&quot;;c=Oa(c,f,d)}}if(8!=c.length)throw Error(a+&quot; is not a valid IPv6 address&quot;);for(d=0;d&lt;c.length;d++){e=Ac(c[d],16);if(0&gt;e.compare(D)||0&lt;e.compare(Tc))throw Error(c[d]+&quot; in &quot;+a+&quot; is not a valid hextet.&quot;);b=Kc(b.shiftLeft(16),e)}}Lc.call(this,b,6)};r(Mc,Lc);</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">var Sc=/^([a-fA-F0-9]*:){2}[a-fA-F0-9:.]*$/,Tc=zc(65535),Rc=Hc(Bc.shiftLeft(128),Bc);Mc.prototype.toString=function(){if(this.Ea)return this.Ea;for(var a=[],b=3;0&lt;=b;b--){var c=Ec(this.sb,b),d=c&amp;65535;a.push((c&gt;&gt;&gt;16).toString(16));a.push(d.toString(16))}for(var c=b=-1,e=d=0,f=0;f&lt;a.length;f++)&quot;0&quot;==a[f]?(e++,-1==c&amp;&amp;(c=f),e&gt;d&amp;&amp;(d=e,b=c)):(c=-1,e=0);0&lt;d&amp;&amp;(b+d==a.length&amp;&amp;a.push(&quot;&quot;),a.splice(b,d,&quot;&quot;),0==b&amp;&amp;(a=[&quot;&quot;].concat(a)));return this.Ea=a.join(&quot;:&quot;)};var Vc=function(){this.Zb=&quot;&quot;;this.Ud=Uc};Vc.prototype.Qb=!0;Vc.prototype.Lb=function(){return this.Zb};Vc.prototype.toString=function(){return&quot;TrustedResourceUrl{&quot;+this.Zb+&quot;}&quot;};var Uc={};var Xc=function(){this.la=&quot;&quot;;this.Rd=Wc};Xc.prototype.Qb=!0;Xc.prototype.Lb=function(){return this.la};Xc.prototype.toString=function(){return&quot;SafeHtml{&quot;+this.la+&quot;}&quot;};var Yc=function(a){if(a instanceof Xc&amp;&amp;a.constructor===Xc&amp;&amp;a.Rd===Wc)return a.la;za(&quot;expected object of type SafeHtml, got &#39;&quot;+a+&quot;&#39; of type &quot;+m(a));return&quot;type_error:SafeHtml&quot;},Wc={};Xc.prototype.ye=function(a){this.la=a;return this};!hb&amp;&amp;!z||z&amp;&amp;9&lt;=Number(pb)||hb&amp;&amp;A(&quot;1.9.1&quot;);z&amp;&amp;A(&quot;9&quot;);var $c=function(a,b){Ra(b,function(b,d){&quot;style&quot;==d?a.style.cssText=b:&quot;class&quot;==d?a.className=b:&quot;for&quot;==d?a.htmlFor=b:Zc.hasOwnProperty(d)?a.setAttribute(Zc[d],b):0==d.lastIndexOf(&quot;aria-&quot;,0)||0==d.lastIndexOf(&quot;data-&quot;,0)?a.setAttribute(d,b):a[d]=b})},Zc={cellpadding:&quot;cellPadding&quot;,cellspacing:&quot;cellSpacing&quot;,colspan:&quot;colSpan&quot;,frameborder:&quot;frameBorder&quot;,height:&quot;height&quot;,maxlength:&quot;maxLength&quot;,nonce:&quot;nonce&quot;,role:&quot;role&quot;,rowspan:&quot;rowSpan&quot;,type:&quot;type&quot;,usemap:&quot;useMap&quot;,valign:&quot;vAlign&quot;,width:&quot;width&quot;};var ad=function(a,b,c){this.Ae=c;this.ae=a;this.Le=b;this.Vb=0;this.Ob=null};ad.prototype.get=function(){var a;0&lt;this.Vb?(this.Vb--,a=this.Ob,this.Ob=a.next,a.next=null):a=this.ae();return a};ad.prototype.put=function(a){this.Le(a);this.Vb&lt;this.Ae&amp;&amp;(this.Vb++,a.next=this.Ob,this.Ob=a)};var bd=function(a){l.setTimeout(function(){throw a;},0)},cd,dd=function(){var a=l.MessageChannel;&quot;undefined&quot;===typeof a&amp;&amp;&quot;undefined&quot;!==typeof window&amp;&amp;window.postMessage&amp;&amp;window.addEventListener&amp;&amp;!y(&quot;Presto&quot;)&amp;&amp;(a=function(){var a=document.createElement(&quot;IFRAME&quot;);a.style.display=&quot;none&quot;;a.src=&quot;&quot;;document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write(&quot;&quot;);a.close();var c=&quot;callImmediate&quot;+Math.random(),d=&quot;file:&quot;==b.location.protocol?&quot;*&quot;:b.location.protocol+&quot;//&quot;+b.location.host,</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">a=q(function(a){if((&quot;*&quot;==d||a.origin==d)&amp;&amp;a.data==c)this.port1.onmessage()},this);b.addEventListener(&quot;message&quot;,a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if(&quot;undefined&quot;!==typeof a&amp;&amp;!y(&quot;Trident&quot;)&amp;&amp;!y(&quot;MSIE&quot;)){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.cd;c.cd=null;a()}};return function(a){d.next={cd:a};d=d.next;b.port2.postMessage(0)}}return&quot;undefined&quot;!==typeof document&amp;&amp;&quot;onreadystatechange&quot;in document.createElement(&quot;SCRIPT&quot;)?</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">function(a){var b=document.createElement(&quot;SCRIPT&quot;);b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){l.setTimeout(a,0)}};var ed=function(){this.pc=this.Ma=null},gd=new ad(function(){return new fd},function(a){a.reset()},100);ed.prototype.add=function(a,b){var c=gd.get();c.set(a,b);this.pc?this.pc.next=c:(w(!this.Ma),this.Ma=c);this.pc=c};ed.prototype.remove=function(){var a=null;this.Ma&amp;&amp;(a=this.Ma,this.Ma=this.Ma.next,this.Ma||(this.pc=null),a.next=null);return a};var fd=function(){this.next=this.scope=this.zc=null};fd.prototype.set=function(a,b){this.zc=a;this.scope=b;this.next=null};</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">fd.prototype.reset=function(){this.next=this.scope=this.zc=null};var ld=function(a,b){hd||id();jd||(hd(),jd=!0);kd.add(a,b)},hd,id=function(){var a=l.Promise;if(-1!=String(a).indexOf(&quot;[native code]&quot;)){var b=a.resolve(void 0);hd=function(){b.then(md)}}else hd=function(){var a=md;!p(l.setImmediate)||l.Window&amp;&amp;l.Window.prototype&amp;&amp;!y(&quot;Edge&quot;)&amp;&amp;l.Window.prototype.setImmediate==l.setImmediate?(cd||(cd=dd()),cd(a)):l.setImmediate(a)}},jd=!1,kd=new ed,md=function(){for(var a;a=kd.remove();){try{a.zc.call(a.scope)}catch(b){bd(b)}gd.put(a)}jd=!1};var nd=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},od=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var H=function(a,b){this.J=0;this.ma=void 0;this.Pa=this.ha=this.s=null;this.Mb=this.yc=!1;if(a!=ba)try{var c=this;a.call(b,function(a){pd(c,2,a)},function(a){if(!(a instanceof qd))try{if(a instanceof Error)throw a;throw Error(&quot;Promise rejected.&quot;);}catch(e){}pd(c,3,a)})}catch(d){pd(this,3,d)}},rd=function(){this.next=this.context=this.Va=this.Ga=this.child=null;this.lb=!1};rd.prototype.reset=function(){this.context=this.Va=this.Ga=this.child=null;this.lb=!1};</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">var sd=new ad(function(){return new rd},function(a){a.reset()},100),td=function(a,b,c){var d=sd.get();d.Ga=a;d.Va=b;d.context=c;return d},I=function(a){if(a instanceof H)return a;var b=new H(ba);pd(b,2,a);return b},J=function(a){return new H(function(b,c){c(a)})},vd=function(a,b,c){ud(a,b,c,null)||ld(ka(b,a))},wd=function(a){return new H(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{ke:!0,value:f}:{ke:!1,reason:f};0==c&amp;&amp;b(d)},f=0,g;f&lt;a.length;f++)g=a[f],vd(g,ka(e,f,!0),</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">ka(e,f,!1));else b(d)})};H.prototype.then=function(a,b,c){null!=a&amp;&amp;Ca(a,&quot;opt_onFulfilled should be a function.&quot;);null!=b&amp;&amp;Ca(b,&quot;opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?&quot;);return xd(this,p(a)?a:null,p(b)?b:null,c)};nd(H);var zd=function(a,b){b=td(b,b,void 0);b.lb=!0;yd(a,b);return a};H.prototype.l=function(a,b){return xd(this,null,a,b)};H.prototype.cancel=function(a){0==this.J&amp;&amp;ld(function(){var b=new qd(a);Ad(this,b)},this)};</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">var Ad=function(a,b){if(0==a.J)if(a.s){var c=a.s;if(c.ha){for(var d=0,e=null,f=null,g=c.ha;g&amp;&amp;(g.lb||(d++,g.child==a&amp;&amp;(e=g),!(e&amp;&amp;1&lt;d)));g=g.next)e||(f=g);e&amp;&amp;(0==c.J&amp;&amp;1==d?Ad(c,b):(f?(d=f,w(c.ha),w(null!=d),d.next==c.Pa&amp;&amp;(c.Pa=d),d.next=d.next.next):Bd(c),Cd(c,e,3,b)))}a.s=null}else pd(a,3,b)},yd=function(a,b){a.ha||2!=a.J&amp;&amp;3!=a.J||Dd(a);w(null!=b.Ga);a.Pa?a.Pa.next=b:a.ha=b;a.Pa=b},xd=function(a,b,c,d){var e=td(null,null,null);e.child=new H(function(a,g){e.Ga=b?function(c){try{var e=b.call(d,c);a(e)}catch(ua){g(ua)}}:</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">a;e.Va=c?function(b){try{var e=c.call(d,b);void 0===e&amp;&amp;b instanceof qd?g(b):a(e)}catch(ua){g(ua)}}:g});e.child.s=a;yd(a,e);return e.child};H.prototype.Ue=function(a){w(1==this.J);this.J=0;pd(this,2,a)};H.prototype.Ve=function(a){w(1==this.J);this.J=0;pd(this,3,a)};</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">var pd=function(a,b,c){0==a.J&amp;&amp;(a===c&amp;&amp;(b=3,c=new TypeError(&quot;Promise cannot resolve to itself&quot;)),a.J=1,ud(c,a.Ue,a.Ve,a)||(a.ma=c,a.J=b,a.s=null,Dd(a),3!=b||c instanceof qd||Ed(a,c)))},ud=function(a,b,c,d){if(a instanceof H)return null!=b&amp;&amp;Ca(b,&quot;opt_onFulfilled should be a function.&quot;),null!=c&amp;&amp;Ca(c,&quot;opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?&quot;),yd(a,td(b||ba,c||null,d)),!0;if(od(a))return a.then(b,c,d),!0;if(ha(a))try{var e=a.then;if(p(e))return Fd(a,</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1},Fd=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},k=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,k)}catch(t){k(t)}},Dd=function(a){a.yc||(a.yc=!0,ld(a.fe,a))},Bd=function(a){var b=null;a.ha&amp;&amp;(b=a.ha,a.ha=b.next,b.next=null);a.ha||(a.Pa=null);null!=b&amp;&amp;w(null!=b.Ga);return b};H.prototype.fe=function(){for(var a;a=Bd(this);)Cd(this,a,this.J,this.ma);this.yc=!1};</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">var Cd=function(a,b,c,d){if(3==c&amp;&amp;b.Va&amp;&amp;!b.lb)for(;a&amp;&amp;a.Mb;a=a.s)a.Mb=!1;if(b.child)b.child.s=null,Gd(b,c,d);else try{b.lb?b.Ga.call(b.context):Gd(b,c,d)}catch(e){Hd.call(null,e)}sd.put(b)},Gd=function(a,b,c){2==b?a.Ga.call(a.context,c):a.Va&amp;&amp;a.Va.call(a.context,c)},Ed=function(a,b){a.Mb=!0;ld(function(){a.Mb&amp;&amp;Hd.call(null,b)})},Hd=bd,qd=function(a){u.call(this,a)};r(qd,u);qd.prototype.name=&quot;cancel&quot;;/*</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line"> Portions of this code are from MochiKit, received by</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line"> The Closure Authors under the MIT license. All other code is Copyright</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line"> 2005-2009 The Closure Authors. All Rights Reserved.</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">*/</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">var Id=function(a,b){this.gc=[];this.ud=a;this.fd=b||null;this.qb=this.Ta=!1;this.ma=void 0;this.Tc=this.Yc=this.tc=!1;this.nc=0;this.s=null;this.uc=0};Id.prototype.cancel=function(a){if(this.Ta)this.ma instanceof Id&amp;&amp;this.ma.cancel();else{if(this.s){var b=this.s;delete this.s;a?b.cancel(a):(b.uc--,0&gt;=b.uc&amp;&amp;b.cancel())}this.ud?this.ud.call(this.fd,this):this.Tc=!0;this.Ta||Jd(this,new Kd)}};Id.prototype.dd=function(a,b){this.tc=!1;Ld(this,a,b)};</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">var Ld=function(a,b,c){a.Ta=!0;a.ma=c;a.qb=!b;Md(a)},Od=function(a){if(a.Ta){if(!a.Tc)throw new Nd;a.Tc=!1}};Id.prototype.callback=function(a){Od(this);Pd(a);Ld(this,!0,a)};</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">var Jd=function(a,b){Od(a);Pd(b);Ld(a,!1,b)},Pd=function(a){w(!(a instanceof Id),&quot;An execution sequence may not be initiated with a blocking Deferred.&quot;)},Td=function(a){var b=Qd(&quot;https://apis.google.com/js/client.js?onload=&quot;+Rd);Sd(b,null,a,void 0)},Sd=function(a,b,c,d){w(!a.Yc,&quot;Blocking Deferreds can not be re-used&quot;);a.gc.push([b,c,d]);a.Ta&amp;&amp;Md(a)};Id.prototype.then=function(a,b,c){var d,e,f=new H(function(a,b){d=a;e=b});Sd(this,d,function(a){a instanceof Kd?f.cancel():e(a)});return f.then(a,b,c)};</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">nd(Id);</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">var Ud=function(a){return Ga(a.gc,function(a){return p(a[1])})},Md=function(a){if(a.nc&amp;&amp;a.Ta&amp;&amp;Ud(a)){var b=a.nc,c=Vd[b];c&amp;&amp;(l.clearTimeout(c.rb),delete Vd[b]);a.nc=0}a.s&amp;&amp;(a.s.uc--,delete a.s);for(var b=a.ma,d=c=!1;a.gc.length&amp;&amp;!a.tc;){var e=a.gc.shift(),f=e[0],g=e[1],e=e[2];if(f=a.qb?g:f)try{var k=f.call(e||a.fd,b);void 0!==k&amp;&amp;(a.qb=a.qb&amp;&amp;(k==b||k instanceof Error),a.ma=b=k);if(od(b)||&quot;function&quot;===typeof l.Promise&amp;&amp;b instanceof l.Promise)d=!0,a.tc=!0}catch(t){b=t,a.qb=!0,Ud(a)||(c=!0)}}a.ma=b;d&amp;&amp;</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">(k=q(a.dd,a,!0),d=q(a.dd,a,!1),b instanceof Id?(Sd(b,k,d),b.Yc=!0):b.then(k,d));c&amp;&amp;(b=new Wd(b),Vd[b.rb]=b,a.nc=b.rb)},Nd=function(){u.call(this)};r(Nd,u);Nd.prototype.message=&quot;Deferred has already fired&quot;;Nd.prototype.name=&quot;AlreadyCalledError&quot;;var Kd=function(){u.call(this)};r(Kd,u);Kd.prototype.message=&quot;Deferred was canceled&quot;;Kd.prototype.name=&quot;CanceledError&quot;;var Wd=function(a){this.rb=l.setTimeout(q(this.Te,this),0);this.N=a};</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">Wd.prototype.Te=function(){w(Vd[this.rb],&quot;Cannot throw an error that is not scheduled.&quot;);delete Vd[this.rb];throw this.N;};var Vd={};var Qd=function(a){var b=new Vc;b.Zb=a;return Xd(b)},Xd=function(a){var b={},c=b.document||document,d;a instanceof Vc&amp;&amp;a.constructor===Vc&amp;&amp;a.Ud===Uc?d=a.Zb:(za(&quot;expected object of type TrustedResourceUrl, got &#39;&quot;+a+&quot;&#39; of type &quot;+m(a)),d=&quot;type_error:TrustedResourceUrl&quot;);var e=document.createElement(&quot;SCRIPT&quot;);a={Cd:e,Bb:void 0};var f=new Id(Yd,a),g=null,k=null!=b.timeout?b.timeout:5E3;0&lt;k&amp;&amp;(g=window.setTimeout(function(){Zd(e,!0);Jd(f,new $d(1,&quot;Timeout reached for loading script &quot;+d))},k),a.Bb=g);e.onload=</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">e.onreadystatechange=function(){e.readyState&amp;&amp;&quot;loaded&quot;!=e.readyState&amp;&amp;&quot;complete&quot;!=e.readyState||(Zd(e,b.ef||!1,g),f.callback(null))};e.onerror=function(){Zd(e,!0,g);Jd(f,new $d(0,&quot;Error while loading script &quot;+d))};a=b.attributes||{};Ya(a,{type:&quot;text/javascript&quot;,charset:&quot;UTF-8&quot;,src:d});$c(e,a);ae(c).appendChild(e);return f},ae=function(a){var b;return(b=(a||document).getElementsByTagName(&quot;HEAD&quot;))&amp;&amp;0!=b.length?b[0]:a.documentElement},Yd=function(){if(this&amp;&amp;this.Cd){var a=this.Cd;a&amp;&amp;&quot;SCRIPT&quot;==a.tagName&amp;&amp;</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">Zd(a,!0,this.Bb)}},Zd=function(a,b,c){null!=c&amp;&amp;l.clearTimeout(c);a.onload=ba;a.onerror=ba;a.onreadystatechange=ba;b&amp;&amp;window.setTimeout(function(){a&amp;&amp;a.parentNode&amp;&amp;a.parentNode.removeChild(a)},0)},$d=function(a,b){var c=&quot;Jsloader error (code #&quot;+a+&quot;)&quot;;b&amp;&amp;(c+=&quot;: &quot;+b);u.call(this,c);this.code=a};r($d,u);var be=function(){yb.call(this);this.ba=new Fb(this);this.Xd=this;this.Ic=null};r(be,yb);be.prototype[Bb]=!0;h=be.prototype;h.addEventListener=function(a,b,c,d){Lb(this,a,b,c,d)};h.removeEventListener=function(a,b,c,d){Ub(this,a,b,c,d)};</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">h.dispatchEvent=function(a){ce(this);var b,c=this.Ic;if(c){b=[];for(var d=1;c;c=c.Ic)b.push(c),w(1E3&gt;++d,&quot;infinite loop&quot;)}c=this.Xd;d=a.type||a;if(n(a))a=new zb(a,c);else if(a instanceof zb)a.target=a.target||c;else{var e=a;a=new zb(d,c);Ya(a,e)}var e=!0,f;if(b)for(var g=b.length-1;!a.Ya&amp;&amp;0&lt;=g;g--)f=a.currentTarget=b[g],e=de(f,d,!0,a)&amp;&amp;e;a.Ya||(f=a.currentTarget=c,e=de(f,d,!0,a)&amp;&amp;e,a.Ya||(e=de(f,d,!1,a)&amp;&amp;e));if(b)for(g=0;!a.Ya&amp;&amp;g&lt;b.length;g++)f=a.currentTarget=b[g],e=de(f,d,!1,a)&amp;&amp;e;return e};</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">h.Ra=function(){be.Vc.Ra.call(this);if(this.ba){var a=this.ba,b=0,c;for(c in a.A){for(var d=a.A[c],e=0;e&lt;d.length;e++)++b,Eb(d[e]);delete a.A[c];a.Cb--}}this.Ic=null};h.listen=function(a,b,c,d){ce(this);return this.ba.add(String(a),b,!1,c,d)};</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">var Tb=function(a,b,c,d,e){a.ba.add(String(b),c,!0,d,e)},de=function(a,b,c,d){b=a.ba.A[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f&lt;b.length;++f){var g=b[f];if(g&amp;&amp;!g.cb&amp;&amp;g.Gb==c){var k=g.listener,t=g.Nb||g.src;g.Fb&amp;&amp;Hb(a.ba,g);e=!1!==k.call(t,d)&amp;&amp;e}}return e&amp;&amp;0!=d.Bd};be.prototype.Ac=function(a,b,c,d){return this.ba.Ac(String(a),b,c,d)};var ce=function(a){w(a.ba,&quot;Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?&quot;)};var ee=&quot;StopIteration&quot;in l?l.StopIteration:{message:&quot;StopIteration&quot;,stack:&quot;&quot;},fe=function(){};fe.prototype.next=function(){throw ee;};fe.prototype.Wd=function(){return this};var ge=function(a,b){this.ca={};this.v=[];this.pa=this.i=0;var c=arguments.length;if(1&lt;c){if(c%2)throw Error(&quot;Uneven number of arguments&quot;);for(var d=0;d&lt;c;d+=2)this.set(arguments[d],arguments[d+1])}else a&amp;&amp;this.addAll(a)};h=ge.prototype;h.ld=function(){return this.i};h.X=function(){he(this);for(var a=[],b=0;b&lt;this.v.length;b++)a.push(this.ca[this.v[b]]);return a};h.ja=function(){he(this);return this.v.concat()};h.mb=function(a){return ie(this.ca,a)};</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">h.Ib=function(a,b){if(this===a)return!0;if(this.i!=a.ld())return!1;b=b||je;he(this);for(var c,d=0;c=this.v[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};var je=function(a,b){return a===b};ge.prototype.remove=function(a){return ie(this.ca,a)?(delete this.ca[a],this.i--,this.pa++,this.v.length&gt;2*this.i&amp;&amp;he(this),!0):!1};</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">var he=function(a){if(a.i!=a.v.length){for(var b=0,c=0;b&lt;a.v.length;){var d=a.v[b];ie(a.ca,d)&amp;&amp;(a.v[c++]=d);b++}a.v.length=c}if(a.i!=a.v.length){for(var e={},c=b=0;b&lt;a.v.length;)d=a.v[b],ie(e,d)||(a.v[c++]=d,e[d]=1),b++;a.v.length=c}};h=ge.prototype;h.get=function(a,b){return ie(this.ca,a)?this.ca[a]:b};h.set=function(a,b){ie(this.ca,a)||(this.i++,this.v.push(a),this.pa++);this.ca[a]=b};</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">h.addAll=function(a){var b;a instanceof ge?(b=a.ja(),a=a.X()):(b=Ta(a),a=Sa(a));for(var c=0;c&lt;b.length;c++)this.set(b[c],a[c])};h.forEach=function(a,b){for(var c=this.ja(),d=0;d&lt;c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new ge(this)};h.Wd=function(a){he(this);var b=0,c=this.pa,d=this,e=new fe;e.next=function(){if(c!=d.pa)throw Error(&quot;The map has changed since the iterator was created&quot;);if(b&gt;=d.v.length)throw ee;var e=d.v[b++];return a?e:d.ca[e]};return e};</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">var ie=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var ke=function(a){if(a.X&amp;&amp;&quot;function&quot;==typeof a.X)return a.X();if(n(a))return a.split(&quot;&quot;);if(fa(a)){for(var b=[],c=a.length,d=0;d&lt;c;d++)b.push(a[d]);return b}return Sa(a)},le=function(a){if(a.ja&amp;&amp;&quot;function&quot;==typeof a.ja)return a.ja();if(!a.X||&quot;function&quot;!=typeof a.X){if(fa(a)||n(a)){var b=[];a=a.length;for(var c=0;c&lt;a;c++)b.push(c);return b}return Ta(a)}},me=function(a,b){if(a.forEach&amp;&amp;&quot;function&quot;==typeof a.forEach)a.forEach(b,void 0);else if(fa(a)||n(a))x(a,b,void 0);else for(var c=le(a),d=ke(a),e=</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">d.length,f=0;f&lt;e;f++)b.call(void 0,d[f],c&amp;&amp;c[f],a)};var ne=function(a,b,c,d,e){this.reset(a,b,c,d,e)};ne.prototype.hd=null;var oe=0;ne.prototype.reset=function(a,b,c,d,e){&quot;number&quot;==typeof e||oe++;d||la();this.ub=a;this.Ee=b;delete this.hd};ne.prototype.Fd=function(a){this.ub=a};var pe=function(a){this.Fe=a;this.nd=this.vc=this.ub=this.s=null},qe=function(a,b){this.name=a;this.value=b};qe.prototype.toString=function(){return this.name};var re=new qe(&quot;SEVERE&quot;,1E3),se=new qe(&quot;CONFIG&quot;,700),te=new qe(&quot;FINE&quot;,500);pe.prototype.getParent=function(){return this.s};pe.prototype.Fd=function(a){this.ub=a};var ue=function(a){if(a.ub)return a.ub;if(a.s)return ue(a.s);za(&quot;Root logger has no level set.&quot;);return null};</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">pe.prototype.log=function(a,b,c){if(a.value&gt;=ue(this).value)for(p(b)&amp;&amp;(b=b()),a=new ne(a,String(b),this.Fe),c&amp;&amp;(a.hd=c),c=&quot;log:&quot;+a.Ee,l.console&amp;&amp;(l.console.timeStamp?l.console.timeStamp(c):l.console.markTimeline&amp;&amp;l.console.markTimeline(c)),l.msWriteProfilerMark&amp;&amp;l.msWriteProfilerMark(c),c=this;c;){b=c;var d=a;if(b.nd)for(var e=0,f;f=b.nd[e];e++)f(d);c=c.getParent()}};</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">var ve={},we=null,xe=function(a){we||(we=new pe(&quot;&quot;),ve[&quot;&quot;]=we,we.Fd(se));var b;if(!(b=ve[a])){b=new pe(a);var c=a.lastIndexOf(&quot;.&quot;),d=a.substr(c+1),c=xe(a.substr(0,c));c.vc||(c.vc={});c.vc[d]=b;b.s=c;ve[a]=b}return b};var K=function(a,b){a&amp;&amp;a.log(te,b,void 0)};var ye=function(a,b,c){if(p(a))c&amp;&amp;(a=q(a,c));else if(a&amp;&amp;&quot;function&quot;==typeof a.handleEvent)a=q(a.handleEvent,a);else throw Error(&quot;Invalid listener argument&quot;);return 2147483647&lt;Number(b)?-1:l.setTimeout(a,b||0)},ze=function(a){var b=null;return(new H(function(c,d){b=ye(function(){c(void 0)},a);-1==b&amp;&amp;d(Error(&quot;Failed to schedule timer.&quot;))})).l(function(a){l.clearTimeout(b);throw a;})};var Ae=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,Be=function(a,b){if(a){a=a.split(&quot;&amp;&quot;);for(var c=0;c&lt;a.length;c++){var d=a[c].indexOf(&quot;=&quot;),e,f=null;0&lt;=d?(e=a[c].substring(0,d),f=a[c].substring(d+1)):e=a[c];b(e,f?decodeURIComponent(f.replace(/\+/g,&quot; &quot;)):&quot;&quot;)}}};var L=function(a){be.call(this);this.headers=new ge;this.rc=a||null;this.ra=!1;this.qc=this.b=null;this.tb=this.sd=this.Ub=&quot;&quot;;this.Da=this.Dc=this.Rb=this.xc=!1;this.ib=0;this.mc=null;this.Ad=&quot;&quot;;this.oc=this.Ke=this.Nd=!1};r(L,be);var Ce=L.prototype,De=xe(&quot;goog.net.XhrIo&quot;);Ce.T=De;var Ee=/^https?$/i,Fe=[&quot;POST&quot;,&quot;PUT&quot;];</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">L.prototype.send=function(a,b,c,d){if(this.b)throw Error(&quot;[goog.net.XhrIo] Object is active with another request=&quot;+this.Ub+&quot;; newUri=&quot;+a);b=b?b.toUpperCase():&quot;GET&quot;;this.Ub=a;this.tb=&quot;&quot;;this.sd=b;this.xc=!1;this.ra=!0;this.b=this.rc?this.rc.nb():sc.nb();this.qc=this.rc?rc(this.rc):rc(sc);this.b.onreadystatechange=q(this.xd,this);this.Ke&amp;&amp;&quot;onprogress&quot;in this.b&amp;&amp;(this.b.onprogress=q(function(a){this.wd(a,!0)},this),this.b.upload&amp;&amp;(this.b.upload.onprogress=q(this.wd,this)));try{K(this.T,Ge(this,&quot;Opening Xhr&quot;)),</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">this.Dc=!0,this.b.open(b,String(a),!0),this.Dc=!1}catch(f){K(this.T,Ge(this,&quot;Error opening Xhr: &quot;+f.message));this.N(5,f);return}a=c||&quot;&quot;;var e=this.headers.clone();d&amp;&amp;me(d,function(a,b){e.set(b,a)});d=Ia(e.ja());c=l.FormData&amp;&amp;a instanceof l.FormData;!Ja(Fe,b)||d||c||e.set(&quot;Content-Type&quot;,&quot;application/x-www-form-urlencoded;charset=utf-8&quot;);e.forEach(function(a,b){this.b.setRequestHeader(b,a)},this);this.Ad&amp;&amp;(this.b.responseType=this.Ad);&quot;withCredentials&quot;in this.b&amp;&amp;this.b.withCredentials!==this.Nd&amp;&amp;(this.b.withCredentials=</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">this.Nd);try{He(this),0&lt;this.ib&amp;&amp;(this.oc=Ie(this.b),K(this.T,Ge(this,&quot;Will abort after &quot;+this.ib+&quot;ms if incomplete, xhr2 &quot;+this.oc)),this.oc?(this.b.timeout=this.ib,this.b.ontimeout=q(this.Bb,this)):this.mc=ye(this.Bb,this.ib,this)),K(this.T,Ge(this,&quot;Sending request&quot;)),this.Rb=!0,this.b.send(a),this.Rb=!1}catch(f){K(this.T,Ge(this,&quot;Send error: &quot;+f.message)),this.N(5,f)}};var Ie=function(a){return z&amp;&amp;A(9)&amp;&amp;ga(a.timeout)&amp;&amp;void 0!==a.ontimeout},Ha=function(a){return&quot;content-type&quot;==a.toLowerCase()};</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">L.prototype.Bb=function(){&quot;undefined&quot;!=typeof aa&amp;&amp;this.b&amp;&amp;(this.tb=&quot;Timed out after &quot;+this.ib+&quot;ms, aborting&quot;,K(this.T,Ge(this,this.tb)),this.dispatchEvent(&quot;timeout&quot;),this.abort(8))};L.prototype.N=function(a,b){this.ra=!1;this.b&amp;&amp;(this.Da=!0,this.b.abort(),this.Da=!1);this.tb=b;Je(this);Ke(this)};var Je=function(a){a.xc||(a.xc=!0,a.dispatchEvent(&quot;complete&quot;),a.dispatchEvent(&quot;error&quot;))};</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">L.prototype.abort=function(){this.b&amp;&amp;this.ra&amp;&amp;(K(this.T,Ge(this,&quot;Aborting&quot;)),this.ra=!1,this.Da=!0,this.b.abort(),this.Da=!1,this.dispatchEvent(&quot;complete&quot;),this.dispatchEvent(&quot;abort&quot;),Ke(this))};L.prototype.Ra=function(){this.b&amp;&amp;(this.ra&amp;&amp;(this.ra=!1,this.Da=!0,this.b.abort(),this.Da=!1),Ke(this,!0));L.Vc.Ra.call(this)};L.prototype.xd=function(){this.isDisposed()||(this.Dc||this.Rb||this.Da?Le(this):this.Ie())};L.prototype.Ie=function(){Le(this)};</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">var Le=function(a){if(a.ra&amp;&amp;&quot;undefined&quot;!=typeof aa)if(a.qc[1]&amp;&amp;4==Me(a)&amp;&amp;2==Ne(a))K(a.T,Ge(a,&quot;Local request error detected and ignored&quot;));else if(a.Rb&amp;&amp;4==Me(a))ye(a.xd,0,a);else if(a.dispatchEvent(&quot;readystatechange&quot;),4==Me(a)){K(a.T,Ge(a,&quot;Request complete&quot;));a.ra=!1;try{var b=Ne(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.Ub).match(Ae)[1]||null;if(!f&amp;&amp;l.self&amp;&amp;l.self.location)var g=l.self.location.protocol,</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">f=g.substr(0,g.length-1);e=!Ee.test(f?f.toLowerCase():&quot;&quot;)}d=e}if(d)a.dispatchEvent(&quot;complete&quot;),a.dispatchEvent(&quot;success&quot;);else{var k;try{k=2&lt;Me(a)?a.b.statusText:&quot;&quot;}catch(t){K(a.T,&quot;Can not get status: &quot;+t.message),k=&quot;&quot;}a.tb=k+&quot; [&quot;+Ne(a)+&quot;]&quot;;Je(a)}}finally{Ke(a)}}};L.prototype.wd=function(a,b){w(&quot;progress&quot;===a.type,&quot;goog.net.EventType.PROGRESS is of the same type as raw XHR progress.&quot;);this.dispatchEvent(Oe(a,&quot;progress&quot;));this.dispatchEvent(Oe(a,b?&quot;downloadprogress&quot;:&quot;uploadprogress&quot;))};</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">var Oe=function(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}},Ke=function(a,b){if(a.b){He(a);var c=a.b,d=a.qc[0]?ba:null;a.b=null;a.qc=null;b||a.dispatchEvent(&quot;ready&quot;);try{c.onreadystatechange=d}catch(e){(a=a.T)&amp;&amp;a.log(re,&quot;Problem encountered resetting onreadystatechange: &quot;+e.message,void 0)}}},He=function(a){a.b&amp;&amp;a.oc&amp;&amp;(a.b.ontimeout=null);ga(a.mc)&amp;&amp;(l.clearTimeout(a.mc),a.mc=null)},Me=function(a){return a.b?a.b.readyState:0},Ne=function(a){try{return 2&lt;Me(a)?</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">a.b.status:-1}catch(b){return-1}},Pe=function(a){try{return a.b?a.b.responseText:&quot;&quot;}catch(b){return K(a.T,&quot;Can not get responseText: &quot;+b.message),&quot;&quot;}},Ge=function(a,b){return b+&quot; [&quot;+a.sd+&quot; &quot;+a.Ub+&quot; &quot;+Ne(a)+&quot;]&quot;};var Qe=function(a,b){this.ia=this.Ka=this.na=&quot;&quot;;this.Xa=null;this.Ca=this.ta=&quot;&quot;;this.P=this.ze=!1;var c;a instanceof Qe?(this.P=void 0!==b?b:a.P,Re(this,a.na),c=a.Ka,M(this),this.Ka=c,Se(this,a.ia),Te(this,a.Xa),Ue(this,a.ta),Ve(this,a.$.clone()),a=a.Ca,M(this),this.Ca=a):a&amp;&amp;(c=String(a).match(Ae))?(this.P=!!b,Re(this,c[1]||&quot;&quot;,!0),a=c[2]||&quot;&quot;,M(this),this.Ka=We(a),Se(this,c[3]||&quot;&quot;,!0),Te(this,c[4]),Ue(this,c[5]||&quot;&quot;,!0),Ve(this,c[6]||&quot;&quot;,!0),a=c[7]||&quot;&quot;,M(this),this.Ca=We(a)):(this.P=!!b,this.$=new N(null,</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">0,this.P))};Qe.prototype.toString=function(){var a=[],b=this.na;b&amp;&amp;a.push(Xe(b,Ye,!0),&quot;:&quot;);var c=this.ia;if(c||&quot;file&quot;==b)a.push(&quot;//&quot;),(b=this.Ka)&amp;&amp;a.push(Xe(b,Ye,!0),&quot;@&quot;),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,&quot;%$1&quot;)),c=this.Xa,null!=c&amp;&amp;a.push(&quot;:&quot;,String(c));if(c=this.ta)this.ia&amp;&amp;&quot;/&quot;!=c.charAt(0)&amp;&amp;a.push(&quot;/&quot;),a.push(Xe(c,&quot;/&quot;==c.charAt(0)?Ze:$e,!0));(c=this.$.toString())&amp;&amp;a.push(&quot;?&quot;,c);(c=this.Ca)&amp;&amp;a.push(&quot;#&quot;,Xe(c,af));return a.join(&quot;&quot;)};</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">Qe.prototype.resolve=function(a){var b=this.clone(),c=!!a.na;c?Re(b,a.na):c=!!a.Ka;if(c){var d=a.Ka;M(b);b.Ka=d}else c=!!a.ia;c?Se(b,a.ia):c=null!=a.Xa;d=a.ta;if(c)Te(b,a.Xa);else if(c=!!a.ta){if(&quot;/&quot;!=d.charAt(0))if(this.ia&amp;&amp;!this.ta)d=&quot;/&quot;+d;else{var e=b.ta.lastIndexOf(&quot;/&quot;);-1!=e&amp;&amp;(d=b.ta.substr(0,e+1)+d)}e=d;if(&quot;..&quot;==e||&quot;.&quot;==e)d=&quot;&quot;;else if(v(e,&quot;./&quot;)||v(e,&quot;/.&quot;)){for(var d=0==e.lastIndexOf(&quot;/&quot;,0),e=e.split(&quot;/&quot;),f=[],g=0;g&lt;e.length;){var k=e[g++];&quot;.&quot;==k?d&amp;&amp;g==e.length&amp;&amp;f.push(&quot;&quot;):&quot;..&quot;==k?((1&lt;f.length||</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">1==f.length&amp;&amp;&quot;&quot;!=f[0])&amp;&amp;f.pop(),d&amp;&amp;g==e.length&amp;&amp;f.push(&quot;&quot;)):(f.push(k),d=!0)}d=f.join(&quot;/&quot;)}else d=e}c?Ue(b,d):c=&quot;&quot;!==a.$.toString();c?Ve(b,We(a.$.toString())):c=!!a.Ca;c&amp;&amp;(a=a.Ca,M(b),b.Ca=a);return b};Qe.prototype.clone=function(){return new Qe(this)};</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">var Re=function(a,b,c){M(a);a.na=c?We(b,!0):b;a.na&amp;&amp;(a.na=a.na.replace(/:$/,&quot;&quot;))},Se=function(a,b,c){M(a);a.ia=c?We(b,!0):b},Te=function(a,b){M(a);if(b){b=Number(b);if(isNaN(b)||0&gt;b)throw Error(&quot;Bad port number &quot;+b);a.Xa=b}else a.Xa=null},Ue=function(a,b,c){M(a);a.ta=c?We(b,!0):b},Ve=function(a,b,c){M(a);b instanceof N?(a.$=b,a.$.Sc(a.P)):(c||(b=Xe(b,bf)),a.$=new N(b,0,a.P))},O=function(a,b,c){M(a);a.$.set(b,c)},cf=function(a,b){M(a);a.$.remove(b)},M=function(a){if(a.ze)throw Error(&quot;Tried to modify a read-only Uri&quot;);</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">};Qe.prototype.Sc=function(a){this.P=a;this.$&amp;&amp;this.$.Sc(a);return this};</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">var df=function(a){return a instanceof Qe?a.clone():new Qe(a,void 0)},ef=function(a,b){var c=new Qe(null,void 0);Re(c,&quot;https&quot;);a&amp;&amp;Se(c,a);b&amp;&amp;Ue(c,b);return c},We=function(a,b){return a?b?decodeURI(a.replace(/%25/g,&quot;%2525&quot;)):decodeURIComponent(a):&quot;&quot;},Xe=function(a,b,c){return n(a)?(a=encodeURI(a).replace(b,ff),c&amp;&amp;(a=a.replace(/%25([0-9a-fA-F]{2})/g,&quot;%$1&quot;)),a):null},ff=function(a){a=a.charCodeAt(0);return&quot;%&quot;+(a&gt;&gt;4&amp;15).toString(16)+(a&amp;15).toString(16)},Ye=/[#\/\?@]/g,$e=/[\#\?:]/g,Ze=/[\#\?]/g,bf=/[\#\?@]/g,</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">af=/#/g,N=function(a,b,c){this.i=this.j=null;this.M=a||null;this.P=!!c},gf=function(a){a.j||(a.j=new ge,a.i=0,a.M&amp;&amp;Be(a.M,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g,&quot; &quot;)),c)}))},jf=function(a){var b=le(a);if(&quot;undefined&quot;==typeof b)throw Error(&quot;Keys are undefined&quot;);var c=new N(null,0,void 0);a=ke(a);for(var d=0;d&lt;b.length;d++){var e=b[d],f=a[d];ea(f)?hf(c,e,f):c.add(e,f)}return c};h=N.prototype;h.ld=function(){gf(this);return this.i};</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">h.add=function(a,b){gf(this);this.M=null;a=this.O(a);var c=this.j.get(a);c||this.j.set(a,c=[]);c.push(b);this.i=Aa(this.i)+1;return this};h.remove=function(a){gf(this);a=this.O(a);return this.j.mb(a)?(this.M=null,this.i=Aa(this.i)-this.j.get(a).length,this.j.remove(a)):!1};h.mb=function(a){gf(this);a=this.O(a);return this.j.mb(a)};h.ja=function(){gf(this);for(var a=this.j.X(),b=this.j.ja(),c=[],d=0;d&lt;b.length;d++)for(var e=a[d],f=0;f&lt;e.length;f++)c.push(b[d]);return c};</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">h.X=function(a){gf(this);var b=[];if(n(a))this.mb(a)&amp;&amp;(b=Na(b,this.j.get(this.O(a))));else{a=this.j.X();for(var c=0;c&lt;a.length;c++)b=Na(b,a[c])}return b};h.set=function(a,b){gf(this);this.M=null;a=this.O(a);this.mb(a)&amp;&amp;(this.i=Aa(this.i)-this.j.get(a).length);this.j.set(a,[b]);this.i=Aa(this.i)+1;return this};h.get=function(a,b){a=a?this.X(a):[];return 0&lt;a.length?String(a[0]):b};var hf=function(a,b,c){a.remove(b);0&lt;c.length&amp;&amp;(a.M=null,a.j.set(a.O(b),Pa(c)),a.i=Aa(a.i)+c.length)};</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">N.prototype.toString=function(){if(this.M)return this.M;if(!this.j)return&quot;&quot;;for(var a=[],b=this.j.ja(),c=0;c&lt;b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.X(d),f=0;f&lt;d.length;f++){var g=e;&quot;&quot;!==d[f]&amp;&amp;(g+=&quot;=&quot;+encodeURIComponent(String(d[f])));a.push(g)}return this.M=a.join(&quot;&amp;&quot;)};N.prototype.clone=function(){var a=new N;a.M=this.M;this.j&amp;&amp;(a.j=this.j.clone(),a.i=this.i);return a};N.prototype.O=function(a){a=String(a);this.P&amp;&amp;(a=a.toLowerCase());return a};</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">N.prototype.Sc=function(a){a&amp;&amp;!this.P&amp;&amp;(gf(this),this.M=null,this.j.forEach(function(a,c){var b=c.toLowerCase();c!=b&amp;&amp;(this.remove(c),hf(this,b,a))},this));this.P=a};var lf=function(){var a=kf();return z&amp;&amp;!!pb&amp;&amp;11==pb||/Edge\/\d+/.test(a)},mf=function(){return l.window&amp;&amp;l.window.location.href||&quot;&quot;},nf=function(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):ea(a[d])?Va(a[d],b[d])||c.push(d):&quot;object&quot;==typeof a[d]&amp;&amp;null!=a[d]&amp;&amp;null!=b[d]?0&lt;nf(a[d],b[d]).length&amp;&amp;c.push(d):a[d]!==b[d]&amp;&amp;c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c},pf=function(){var a;a=kf();a=&quot;Chrome&quot;!=of(a)?null:(a=a.match(/\sChrome\/(\d+)/i))&amp;&amp;2==a.length?parseInt(a[1],</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">10):null;return a&amp;&amp;30&gt;a?!1:!z||!pb||9&lt;pb},qf=function(a){a=a||l.window;try{a.close()}catch(b){}},rf=function(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-b)/2;b={width:b,height:c,top:0&lt;e?e:0,left:0&lt;f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};d&amp;&amp;(b.target=d);&quot;Firefox&quot;==of(kf())&amp;&amp;(a=a||&quot;http://localhost&quot;,b.scrollbars=!0);var g;c=a||&quot;about:blank&quot;;(d=b)||(d={});a=window;b=c instanceof B?c:hc(&quot;undefined&quot;!=</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">typeof c.href?c.href:String(c));c=d.target||c.target;e=[];for(g in d)switch(g){case &quot;width&quot;:case &quot;height&quot;:case &quot;top&quot;:case &quot;left&quot;:e.push(g+&quot;=&quot;+d[g]);break;case &quot;target&quot;:case &quot;noreferrer&quot;:break;default:e.push(g+&quot;=&quot;+(d[g]?1:0))}g=e.join(&quot;,&quot;);(y(&quot;iPhone&quot;)&amp;&amp;!y(&quot;iPod&quot;)&amp;&amp;!y(&quot;iPad&quot;)||y(&quot;iPad&quot;)||y(&quot;iPod&quot;))&amp;&amp;a.navigator&amp;&amp;a.navigator.standalone&amp;&amp;c&amp;&amp;&quot;_self&quot;!=c?(g=a.document.createElement(&quot;A&quot;),&quot;undefined&quot;!=typeof HTMLAnchorElement&amp;&amp;&quot;undefined&quot;!=typeof Location&amp;&amp;&quot;undefined&quot;!=typeof Element&amp;&amp;(e=g&amp;&amp;(g instanceof</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">HTMLAnchorElement||!(g instanceof Location||g instanceof Element)),f=ha(g)?g.constructor.displayName||g.constructor.name||Object.prototype.toString.call(g):void 0===g?&quot;undefined&quot;:null===g?&quot;null&quot;:typeof g,w(e,&quot;Argument is not a HTMLAnchorElement (or a non-Element mock); got: %s&quot;,f)),b=b instanceof B?b:hc(b),g.href=ec(b),g.setAttribute(&quot;target&quot;,c),d.noreferrer&amp;&amp;g.setAttribute(&quot;rel&quot;,&quot;noreferrer&quot;),d=document.createEvent(&quot;MouseEvent&quot;),d.initMouseEvent(&quot;click&quot;,!0,!0,a,1),g.dispatchEvent(d),g={}):d.noreferrer?</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">(g=a.open(&quot;&quot;,c,g),d=ec(b),g&amp;&amp;(gb&amp;&amp;v(d,&quot;;&quot;)&amp;&amp;(d=&quot;&#39;&quot;+d.replace(/&#39;/g,&quot;%27&quot;)+&quot;&#39;&quot;),g.opener=null,a=cc(&quot;b/12014412, meta tag with sanitized URL&quot;),va.test(d)&amp;&amp;(-1!=d.indexOf(&quot;&amp;&quot;)&amp;&amp;(d=d.replace(oa,&quot;&amp;amp;&quot;)),-1!=d.indexOf(&quot;&lt;&quot;)&amp;&amp;(d=d.replace(pa,&quot;&amp;lt;&quot;)),-1!=d.indexOf(&quot;&gt;&quot;)&amp;&amp;(d=d.replace(qa,&quot;&amp;gt;&quot;)),-1!=d.indexOf(&#39;&quot;&#39;)&amp;&amp;(d=d.replace(ra,&quot;&amp;quot;&quot;)),-1!=d.indexOf(&quot;&#39;&quot;)&amp;&amp;(d=d.replace(sa,&quot;&amp;#39;&quot;)),-1!=d.indexOf(&quot;\x00&quot;)&amp;&amp;(d=d.replace(ta,&quot;&amp;#0;&quot;))),d=&#39;&lt;META HTTP-EQUIV=&quot;refresh&quot; content=&quot;0; url=&#39;+d+&#39;&quot;&gt;&#39;,Ba(bc(a),&quot;must provide justification&quot;),</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">w(!/^[\s\xa0]*$/.test(bc(a)),&quot;must provide non-empty justification&quot;),g.document.write(Yc((new Xc).ye(d))),g.document.close())):g=a.open(ec(b),c,g);if(g)try{g.focus()}catch(k){}return g},sf=function(a){return new H(function(b){var c=function(){ze(2E3).then(function(){if(!a||a.closed)b();else return c()})};return c()})},tf=function(){var a=null;return(new H(function(b){&quot;complete&quot;==l.document.readyState?b():(a=function(){b()},Sb(window,&quot;load&quot;,a))})).l(function(b){Ub(window,&quot;load&quot;,a);throw b;})},uf=function(a){switch(a||</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">l.navigator&amp;&amp;l.navigator.product||&quot;&quot;){case &quot;ReactNative&quot;:return&quot;ReactNative&quot;;default:return&quot;undefined&quot;!==typeof l.process?&quot;Node&quot;:&quot;Browser&quot;}},vf=function(){var a=uf();return&quot;ReactNative&quot;===a||&quot;Node&quot;===a},of=function(a){var b=a.toLowerCase();if(v(b,&quot;opera/&quot;)||v(b,&quot;opr/&quot;)||v(b,&quot;opios/&quot;))return&quot;Opera&quot;;if(v(b,&quot;iemobile&quot;))return&quot;IEMobile&quot;;if(v(b,&quot;msie&quot;)||v(b,&quot;trident/&quot;))return&quot;IE&quot;;if(v(b,&quot;edge/&quot;))return&quot;Edge&quot;;if(v(b,&quot;firefox/&quot;))return&quot;Firefox&quot;;if(v(b,&quot;silk/&quot;))return&quot;Silk&quot;;if(v(b,&quot;blackberry&quot;))return&quot;Blackberry&quot;;</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">if(v(b,&quot;webos&quot;))return&quot;Webos&quot;;if(!v(b,&quot;safari/&quot;)||v(b,&quot;chrome/&quot;)||v(b,&quot;crios/&quot;)||v(b,&quot;android&quot;))if(!v(b,&quot;chrome/&quot;)&amp;&amp;!v(b,&quot;crios/&quot;)||v(b,&quot;edge/&quot;)){if(v(b,&quot;android&quot;))return&quot;Android&quot;;if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&amp;&amp;2==a.length)return a[1]}else return&quot;Chrome&quot;;else return&quot;Safari&quot;;return&quot;Other&quot;},wf=function(a){var b=uf(void 0);return(&quot;Browser&quot;===b?of(kf()):b)+&quot;/JsCore/&quot;+a},kf=function(){return l.navigator&amp;&amp;l.navigator.userAgent||&quot;&quot;},xf=function(a){a=a.split(&quot;.&quot;);for(var b=l,c=0;c&lt;a.length&amp;&amp;</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">&quot;object&quot;==typeof b&amp;&amp;null!=b;c++)b=b[a[c]];c!=a.length&amp;&amp;(b=void 0);return b},zf=function(){var a;if(!(a=!l.location||!l.location.protocol||&quot;http:&quot;!=l.location.protocol&amp;&amp;&quot;https:&quot;!=l.location.protocol||vf())){var b;a:{try{var c=l.localStorage,d=yf();if(c){c.setItem(d,&quot;1&quot;);c.removeItem(d);b=lf()?!!l.indexedDB:!0;break a}}catch(e){}b=!1}a=!b}return!a},Af=function(a){a=a||kf();var b=(a||kf()).toLowerCase();return b.match(/android/)||b.match(/webos/)||b.match(/iphone|ipad|ipod/)||b.match(/blackberry/)||</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">b.match(/windows phone/)||b.match(/iemobile/)||&quot;Firefox&quot;==of(a)?!1:!0},Bf=function(a){return&quot;undefined&quot;===typeof a?null:mc(a)},Cf=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&amp;&amp;null!==a[c]&amp;&amp;void 0!==a[c]&amp;&amp;(b[c]=a[c]);return b},Df=function(a){if(null!==a){var b;try{b=jc(a)}catch(c){try{b=JSON.parse(a)}catch(d){throw c;}}return b}},yf=function(a){return a?a:&quot;&quot;+Math.floor(1E9*Math.random()).toString()},Ef=function(a){a=a||kf();return&quot;Safari&quot;==of(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">!1:!0},Ff=function(){var a=l.___jsl;if(a&amp;&amp;a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c&lt;a.CP.length;c++)a.CP[c]=null};var Gf;try{var Hf={};Object.defineProperty(Hf,&quot;abcd&quot;,{configurable:!0,enumerable:!0,value:1});Object.defineProperty(Hf,&quot;abcd&quot;,{configurable:!0,enumerable:!0,value:2});Gf=2==Hf.abcd}catch(a){Gf=!1}</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">var P=function(a,b,c){Gf?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c},If=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&amp;&amp;P(a,c,b[c])},Jf=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&amp;&amp;(b[c]=a[c]);return b},Kf=function(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c&lt;b.length;c++){var d=a[b[c]];if(void 0===d||null===d||&quot;&quot;===d)return!1}return!0};var Lf=[&quot;client_id&quot;,&quot;response_type&quot;,&quot;scope&quot;,&quot;redirect_uri&quot;,&quot;state&quot;],Mf={Od:{xb:500,wb:600,providerId:&quot;facebook.com&quot;,fc:Lf},Pd:{xb:500,wb:620,providerId:&quot;github.com&quot;,fc:Lf},Qd:{xb:515,wb:680,providerId:&quot;google.com&quot;,fc:Lf},Vd:{xb:485,wb:705,providerId:&quot;twitter.com&quot;,fc:&quot;oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version&quot;.split(&quot; &quot;)}},Nf=function(a){for(var b in Mf)if(Mf[b].providerId==a)return Mf[b];return null},Of=function(a){return(a=Nf(a))&amp;&amp;</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">a.fc||[]};var Q=function(a,b){this.code=&quot;auth/&quot;+a;this.message=b||Pf[a]||&quot;&quot;};r(Q,Error);Q.prototype.K=function(){return{name:this.code,code:this.code,message:this.message}};</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">var Pf={&quot;argument-error&quot;:&quot;&quot;,&quot;app-not-authorized&quot;:&quot;This app, identified by the domain where it&#39;s hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.&quot;,&quot;cors-unsupported&quot;:&quot;This browser is not supported.&quot;,&quot;credential-already-in-use&quot;:&quot;This credential is already associated with a different user account.&quot;,&quot;custom-token-mismatch&quot;:&quot;The custom token corresponds to a different audience.&quot;,&quot;requires-recent-login&quot;:&quot;This operation is sensitive and requires recent authentication. Log in again before retrying this request.&quot;,</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">&quot;email-already-in-use&quot;:&quot;The email address is already in use by another account.&quot;,&quot;expired-action-code&quot;:&quot;The action code has expired. &quot;,&quot;cancelled-popup-request&quot;:&quot;This operation has been cancelled due to another conflicting popup being opened.&quot;,&quot;internal-error&quot;:&quot;An internal error has occurred.&quot;,&quot;invalid-user-token&quot;:&quot;The user&#39;s credential is no longer valid. The user must sign in again.&quot;,&quot;invalid-auth-event&quot;:&quot;An internal error has occurred.&quot;,&quot;invalid-custom-token&quot;:&quot;The custom token format is incorrect. Please check the documentation.&quot;,</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">&quot;invalid-email&quot;:&quot;The email address is badly formatted.&quot;,&quot;invalid-api-key&quot;:&quot;Your API key is invalid, please check you have copied it correctly.&quot;,&quot;invalid-credential&quot;:&quot;The supplied auth credential is malformed or has expired.&quot;,&quot;invalid-oauth-provider&quot;:&quot;EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.&quot;,&quot;unauthorized-domain&quot;:&quot;This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.&quot;,</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">&quot;invalid-action-code&quot;:&quot;The action code is invalid. This can happen if the code is malformed, expired, or has already been used.&quot;,&quot;wrong-password&quot;:&quot;The password is invalid or the user does not have a password.&quot;,&quot;missing-iframe-start&quot;:&quot;An internal error has occurred.&quot;,&quot;auth-domain-config-required&quot;:&quot;Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.&quot;,&quot;app-deleted&quot;:&quot;This instance of FirebaseApp has been deleted.&quot;,&quot;account-exists-with-different-credential&quot;:&quot;An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.&quot;,</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">&quot;network-request-failed&quot;:&quot;A network error (such as timeout, interrupted connection or unreachable host) has occurred.&quot;,&quot;no-auth-event&quot;:&quot;An internal error has occurred.&quot;,&quot;no-such-provider&quot;:&quot;User was not linked to an account with the given provider.&quot;,&quot;operation-not-allowed&quot;:&quot;The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.&quot;,&quot;operation-not-supported-in-this-environment&quot;:&#39;This operation is not supported in the environment this application is running on. &quot;location.protocol&quot; must be http or https and web storage must be enabled.&#39;,</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">&quot;popup-blocked&quot;:&quot;Unable to establish a connection with the popup. It may have been blocked by the browser.&quot;,&quot;popup-closed-by-user&quot;:&quot;The popup has been closed by the user before finalizing the operation.&quot;,&quot;provider-already-linked&quot;:&quot;User can only be linked to one identity for the given provider.&quot;,timeout:&quot;The operation has timed out.&quot;,&quot;user-token-expired&quot;:&quot;The user&#39;s credential is no longer valid. The user must sign in again.&quot;,&quot;too-many-requests&quot;:&quot;We have blocked all requests from this device due to unusual activity. Try again later.&quot;,</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">&quot;user-cancelled&quot;:&quot;User did not grant your application the permissions it requested.&quot;,&quot;user-not-found&quot;:&quot;There is no user record corresponding to this identifier. The user may have been deleted.&quot;,&quot;user-disabled&quot;:&quot;The user account has been disabled by an administrator.&quot;,&quot;user-mismatch&quot;:&quot;The supplied credentials do not correspond to the previously signed in user.&quot;,&quot;user-signed-out&quot;:&quot;&quot;,&quot;weak-password&quot;:&quot;The password must be 6 characters long or more.&quot;,&quot;web-storage-unsupported&quot;:&quot;This browser is not supported.&quot;};var Qf=function(a,b,c,d,e){this.ya=a;this.W=b||null;this.kb=c||null;this.hc=d||null;this.N=e||null;if(this.kb||this.N){if(this.kb&amp;&amp;this.N)throw new Q(&quot;invalid-auth-event&quot;);if(this.kb&amp;&amp;!this.hc)throw new Q(&quot;invalid-auth-event&quot;);}else throw new Q(&quot;invalid-auth-event&quot;);};Qf.prototype.getError=function(){return this.N};Qf.prototype.K=function(){return{type:this.ya,eventId:this.W,urlResponse:this.kb,sessionId:this.hc,error:this.N&amp;&amp;this.N.K()}};var Rf=function(a){var b=&quot;unauthorized-domain&quot;,c=void 0,d=df(a);a=d.ia;d=d.na;&quot;http&quot;!=d&amp;&amp;&quot;https&quot;!=d?b=&quot;operation-not-supported-in-this-environment&quot;:c=ma(&quot;This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -&gt; Auth section -&gt; Sign in method tab.&quot;,a);Q.call(this,b,c)};r(Rf,Q);var Sf=function(a){this.De=a.sub;la();this.Hb=a.email||null};var Tf=function(a,b,c,d){var e={};ha(c)?e=c:b&amp;&amp;n(c)&amp;&amp;n(d)?e={oauthToken:c,oauthTokenSecret:d}:!b&amp;&amp;n(c)&amp;&amp;(e={accessToken:c});if(b||!e.idToken&amp;&amp;!e.accessToken)if(b&amp;&amp;e.oauthToken&amp;&amp;e.oauthTokenSecret)P(this,&quot;accessToken&quot;,e.oauthToken),P(this,&quot;secret&quot;,e.oauthTokenSecret);else{if(b)throw new Q(&quot;argument-error&quot;,&quot;credential failed: expected 2 arguments (the OAuth access token and secret).&quot;);throw new Q(&quot;argument-error&quot;,&quot;credential failed: expected 1 argument (the OAuth access token).&quot;);}else e.idToken&amp;&amp;P(this,</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">&quot;idToken&quot;,e.idToken),e.accessToken&amp;&amp;P(this,&quot;accessToken&quot;,e.accessToken);P(this,&quot;provider&quot;,a)};Tf.prototype.Kb=function(a){return Uf(a,Vf(this))};Tf.prototype.td=function(a,b){var c=Vf(this);c.idToken=b;return Wf(a,c)};var Vf=function(a){var b={};a.idToken&amp;&amp;(b.id_token=a.idToken);a.accessToken&amp;&amp;(b.access_token=a.accessToken);a.secret&amp;&amp;(b.oauth_token_secret=a.secret);b.providerId=a.provider;return{postBody:jf(b).toString(),requestUri:zf()?mf():&quot;http://localhost&quot;}};</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">Tf.prototype.K=function(){var a={provider:this.provider};this.idToken&amp;&amp;(a.oauthIdToken=this.idToken);this.accessToken&amp;&amp;(a.oauthAccessToken=this.accessToken);this.secret&amp;&amp;(a.oauthTokenSecret=this.secret);return a};</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">var Xf=function(a,b,c){var d=!!b,e=c||[];b=function(){If(this,{providerId:a,isOAuthProvider:!0});this.Rc=[];this.ed={};&quot;google.com&quot;==a&amp;&amp;this.addScope(&quot;profile&quot;)};d||(b.prototype.addScope=function(a){Ja(this.Rc,a)||this.Rc.push(a)});b.prototype.setCustomParameters=function(a){this.ed=Wa(a)};b.prototype.me=function(){var a=Cf(this.ed),b;for(b in a)a[b]=a[b].toString();a=Wa(a);for(b=0;b&lt;e.length;b++){var c=e[b];c in a&amp;&amp;delete a[c]}return a};b.prototype.ne=function(){return Pa(this.Rc)};b.credential=</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">function(b,c){return new Tf(a,d,b,c)};If(b,{PROVIDER_ID:a});return b},Yf=Xf(&quot;facebook.com&quot;,!1,Of(&quot;facebook.com&quot;));Yf.prototype.addScope=Yf.prototype.addScope||void 0;var Zf=Xf(&quot;github.com&quot;,!1,Of(&quot;github.com&quot;));Zf.prototype.addScope=Zf.prototype.addScope||void 0;var $f=Xf(&quot;google.com&quot;,!1,Of(&quot;google.com&quot;));$f.prototype.addScope=$f.prototype.addScope||void 0;</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">$f.credential=function(a,b){if(!a&amp;&amp;!b)throw new Q(&quot;argument-error&quot;,&quot;credential failed: must provide the ID token and/or the access token.&quot;);return new Tf(&quot;google.com&quot;,!1,ha(a)?a:{idToken:a||null,accessToken:b||null})};var ag=Xf(&quot;twitter.com&quot;,!0,Of(&quot;twitter.com&quot;)),bg=function(a,b){this.Hb=a;this.Jc=b;P(this,&quot;provider&quot;,&quot;password&quot;)};bg.prototype.Kb=function(a){return R(a,cg,{email:this.Hb,password:this.Jc})};bg.prototype.td=function(a,b){return R(a,dg,{idToken:b,email:this.Hb,password:this.Jc})};</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">bg.prototype.K=function(){return{email:this.Hb,password:this.Jc}};var eg=function(){If(this,{providerId:&quot;password&quot;,isOAuthProvider:!1})};If(eg,{PROVIDER_ID:&quot;password&quot;});var fg={cf:eg,Od:Yf,Qd:$f,Pd:Zf,Vd:ag},gg=function(a){var b=a&amp;&amp;a.providerId;if(!b)return null;var c=a&amp;&amp;a.oauthAccessToken,d=a&amp;&amp;a.oauthTokenSecret;a=a&amp;&amp;a.oauthIdToken;for(var e in fg)if(fg[e].PROVIDER_ID==b)try{return fg[e].credential({accessToken:c,idToken:a,oauthToken:c,oauthTokenSecret:d})}catch(f){break}return null};var hg=function(a,b,c,d){Q.call(this,a,d);P(this,&quot;email&quot;,b);P(this,&quot;credential&quot;,c)};r(hg,Q);hg.prototype.K=function(){var a={code:this.code,message:this.message,email:this.email},b=this.credential&amp;&amp;this.credential.K();b&amp;&amp;(Ya(a,b),a.providerId=b.provider,delete a.provider);return a};var ig=function(a){if(a.code){var b=a.code||&quot;&quot;;0==b.indexOf(&quot;auth/&quot;)&amp;&amp;(b=b.substring(5));return a.email?new hg(b,a.email,gg(a),a.message):new Q(b,a.message||void 0)}return null};var jg=function(a){this.bf=a};r(jg,qc);jg.prototype.nb=function(){return new this.bf};jg.prototype.Tb=function(){return{}};</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">var S=function(a,b,c){var d;d=&quot;Node&quot;==uf();d=l.XMLHttpRequest||d&amp;&amp;firebase.INTERNAL.node&amp;&amp;firebase.INTERNAL.node.XMLHttpRequest;if(!d)throw new Q(&quot;internal-error&quot;,&quot;The XMLHttpRequest compatibility library was not found.&quot;);this.m=a;a=b||{};this.Ne=a.secureTokenEndpoint||&quot;https://securetoken.googleapis.com/v1/token&quot;;this.Oe=a.secureTokenTimeout||1E4;this.Dd=Wa(a.secureTokenHeaders||kg);this.ie=a.firebaseEndpoint||&quot;https://www.googleapis.com/identitytoolkit/v3/relyingparty/&quot;;this.je=a.firebaseTimeout||</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">1E4;this.kd=Wa(a.firebaseHeaders||lg);c&amp;&amp;(this.kd[&quot;X-Client-Version&quot;]=c,this.Dd[&quot;X-Client-Version&quot;]=c);this.$d=new vc;this.af=new jg(d)},mg,kg={&quot;Content-Type&quot;:&quot;application/x-www-form-urlencoded&quot;},lg={&quot;Content-Type&quot;:&quot;application/json&quot;},og=function(a,b,c,d,e,f,g){pf()?a=q(a.Qe,a):(mg||(mg=new H(function(a,b){ng(a,b)})),a=q(a.Pe,a));a(b,c,d,e,f,g)};</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">S.prototype.Qe=function(a,b,c,d,e,f){var g=&quot;Node&quot;==uf(),k=vf()?g?new L(this.af):new L:new L(this.$d),t;f&amp;&amp;(k.ib=Math.max(0,f),t=setTimeout(function(){k.dispatchEvent(&quot;timeout&quot;)},f));k.listen(&quot;complete&quot;,function(){t&amp;&amp;clearTimeout(t);var a=null;try{var c;c=this.b?jc(this.b.responseText):void 0;a=c||null}catch(Wi){try{a=JSON.parse(Pe(this))||null}catch(Xi){a=null}}b&amp;&amp;b(a)});Tb(k,&quot;ready&quot;,function(){t&amp;&amp;clearTimeout(t);this.Ba||(this.Ba=!0,this.Ra())});Tb(k,&quot;timeout&quot;,function(){t&amp;&amp;clearTimeout(t);this.Ba||</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">(this.Ba=!0,this.Ra());b&amp;&amp;b(null)});k.send(a,c,d,e)};var Rd=&quot;__fcb&quot;+Math.floor(1E6*Math.random()).toString(),ng=function(a,b){((window.gapi||{}).client||{}).request?a():(l[Rd]=function(){((window.gapi||{}).client||{}).request?a():b(Error(&quot;CORS_UNSUPPORTED&quot;))},Td(function(){b(Error(&quot;CORS_UNSUPPORTED&quot;))}))};</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">S.prototype.Pe=function(a,b,c,d,e){var f=this;mg.then(function(){window.gapi.client.setApiKey(f.m);var g=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:&quot;none&quot;,callback:function(a){window.gapi.auth.setToken(g);b&amp;&amp;b(a)}})}).l(function(a){b&amp;&amp;b({error:{message:a&amp;&amp;a.message||&quot;CORS_UNSUPPORTED&quot;}})})};</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">var qg=function(a,b){return new H(function(c,d){&quot;refresh_token&quot;==b.grant_type&amp;&amp;b.refresh_token||&quot;authorization_code&quot;==b.grant_type&amp;&amp;b.code?og(a,a.Ne+&quot;?key=&quot;+encodeURIComponent(a.m),function(a){a?a.error?d(pg(a)):a.access_token&amp;&amp;a.refresh_token?c(a):d(new Q(&quot;internal-error&quot;)):d(new Q(&quot;network-request-failed&quot;))},&quot;POST&quot;,jf(b).toString(),a.Dd,a.Oe):d(new Q(&quot;internal-error&quot;))})},rg=function(a,b,c,d,e){var f=a.ie+b+&quot;?key=&quot;+encodeURIComponent(a.m);e&amp;&amp;(f+=&quot;&amp;cb=&quot;+la().toString());return new H(function(b,e){og(a,</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">f,function(a){a?a.error?e(pg(a)):b(a):e(new Q(&quot;network-request-failed&quot;))},c,mc(Cf(d)),a.kd,a.je)})},sg=function(a){if(!Zb.test(a.email))throw new Q(&quot;invalid-email&quot;);},tg=function(a){&quot;email&quot;in a&amp;&amp;sg(a)},vg=function(a,b){var c=zf()?mf():&quot;http://localhost&quot;;return R(a,ug,{identifier:b,continueUri:c}).then(function(a){return a.allProviders||[]})},xg=function(a){return R(a,wg,{}).then(function(a){return a.authorizedDomains||[]})},yg=function(a){if(!a.idToken)throw new Q(&quot;internal-error&quot;);};</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">S.prototype.signInAnonymously=function(){return R(this,zg,{})};S.prototype.updateEmail=function(a,b){return R(this,Ag,{idToken:a,email:b})};S.prototype.updatePassword=function(a,b){return R(this,dg,{idToken:a,password:b})};var Bg={displayName:&quot;DISPLAY_NAME&quot;,photoUrl:&quot;PHOTO_URL&quot;};S.prototype.updateProfile=function(a,b){var c={idToken:a},d=[];Ra(Bg,function(a,f){var e=b[f];null===e?d.push(a):f in b&amp;&amp;(c[f]=e)});d.length&amp;&amp;(c.deleteAttribute=d);return R(this,Ag,c)};</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">S.prototype.sendPasswordResetEmail=function(a){return R(this,Cg,{requestType:&quot;PASSWORD_RESET&quot;,email:a})};S.prototype.sendEmailVerification=function(a){return R(this,Dg,{requestType:&quot;VERIFY_EMAIL&quot;,idToken:a})};</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">var Fg=function(a,b,c){return R(a,Eg,{idToken:b,deleteProvider:c})},Gg=function(a){if(!a.requestUri||!a.sessionId&amp;&amp;!a.postBody)throw new Q(&quot;internal-error&quot;);},Hg=function(a){var b=null;a.needConfirmation?(a.code=&quot;account-exists-with-different-credential&quot;,b=ig(a)):&quot;FEDERATED_USER_ID_ALREADY_LINKED&quot;==a.errorMessage?(a.code=&quot;credential-already-in-use&quot;,b=ig(a)):&quot;EMAIL_EXISTS&quot;==a.errorMessage&amp;&amp;(a.code=&quot;email-already-in-use&quot;,b=ig(a));if(b)throw b;if(!a.idToken)throw new Q(&quot;internal-error&quot;);},Uf=function(a,</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">b){b.returnIdpCredential=!0;return R(a,Ig,b)},Wf=function(a,b){b.returnIdpCredential=!0;return R(a,Jg,b)},Kg=function(a){if(!a.oobCode)throw new Q(&quot;invalid-action-code&quot;);};S.prototype.confirmPasswordReset=function(a,b){return R(this,Lg,{oobCode:a,newPassword:b})};S.prototype.checkActionCode=function(a){return R(this,Mg,{oobCode:a})};S.prototype.applyActionCode=function(a){return R(this,Ng,{oobCode:a})};</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">var Ng={endpoint:&quot;setAccountInfo&quot;,I:Kg,gb:&quot;email&quot;},Mg={endpoint:&quot;resetPassword&quot;,I:Kg,wa:function(a){if(!Zb.test(a.email))throw new Q(&quot;internal-error&quot;);}},Og={endpoint:&quot;signupNewUser&quot;,I:function(a){sg(a);if(!a.password)throw new Q(&quot;weak-password&quot;);},wa:yg,xa:!0},ug={endpoint:&quot;createAuthUri&quot;},Pg={endpoint:&quot;deleteAccount&quot;,eb:[&quot;idToken&quot;]},Eg={endpoint:&quot;setAccountInfo&quot;,eb:[&quot;idToken&quot;,&quot;deleteProvider&quot;],I:function(a){if(!ea(a.deleteProvider))throw new Q(&quot;internal-error&quot;);}},Qg={endpoint:&quot;getAccountInfo&quot;},</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">Dg={endpoint:&quot;getOobConfirmationCode&quot;,eb:[&quot;idToken&quot;,&quot;requestType&quot;],I:function(a){if(&quot;VERIFY_EMAIL&quot;!=a.requestType)throw new Q(&quot;internal-error&quot;);},gb:&quot;email&quot;},Cg={endpoint:&quot;getOobConfirmationCode&quot;,eb:[&quot;requestType&quot;],I:function(a){if(&quot;PASSWORD_RESET&quot;!=a.requestType)throw new Q(&quot;internal-error&quot;);sg(a)},gb:&quot;email&quot;},wg={Zd:!0,endpoint:&quot;getProjectConfig&quot;,ue:&quot;GET&quot;},Lg={endpoint:&quot;resetPassword&quot;,I:Kg,gb:&quot;email&quot;},Ag={endpoint:&quot;setAccountInfo&quot;,eb:[&quot;idToken&quot;],I:tg,xa:!0},dg={endpoint:&quot;setAccountInfo&quot;,eb:[&quot;idToken&quot;],</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">I:function(a){tg(a);if(!a.password)throw new Q(&quot;weak-password&quot;);},wa:yg,xa:!0},zg={endpoint:&quot;signupNewUser&quot;,wa:yg,xa:!0},Ig={endpoint:&quot;verifyAssertion&quot;,I:Gg,wa:Hg,xa:!0},Jg={endpoint:&quot;verifyAssertion&quot;,I:function(a){Gg(a);if(!a.idToken)throw new Q(&quot;internal-error&quot;);},wa:Hg,xa:!0},Rg={endpoint:&quot;verifyCustomToken&quot;,I:function(a){if(!a.token)throw new Q(&quot;invalid-custom-token&quot;);},wa:yg,xa:!0},cg={endpoint:&quot;verifyPassword&quot;,I:function(a){sg(a);if(!a.password)throw new Q(&quot;wrong-password&quot;);},wa:yg,xa:!0},R=</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">function(a,b,c){if(!Kf(c,b.eb))return J(new Q(&quot;internal-error&quot;));var d=b.ue||&quot;POST&quot;,e;return I(c).then(b.I).then(function(){b.xa&amp;&amp;(c.returnSecureToken=!0);return rg(a,b.endpoint,d,c,b.Zd||!1)}).then(function(a){return e=a}).then(b.wa).then(function(){if(!b.gb)return e;if(!(b.gb in e))throw new Q(&quot;internal-error&quot;);return e[b.gb]})},pg=function(a){var b,c;c=(a.error&amp;&amp;a.error.errors&amp;&amp;a.error.errors[0]||{}).reason||&quot;&quot;;var d={keyInvalid:&quot;invalid-api-key&quot;,ipRefererBlocked:&quot;app-not-authorized&quot;};if(c=d[c]?</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">new Q(d[c]):null)return c;c=a.error&amp;&amp;a.error.message||&quot;&quot;;d={INVALID_CUSTOM_TOKEN:&quot;invalid-custom-token&quot;,CREDENTIAL_MISMATCH:&quot;custom-token-mismatch&quot;,MISSING_CUSTOM_TOKEN:&quot;internal-error&quot;,INVALID_IDENTIFIER:&quot;invalid-email&quot;,MISSING_CONTINUE_URI:&quot;internal-error&quot;,INVALID_EMAIL:&quot;invalid-email&quot;,INVALID_PASSWORD:&quot;wrong-password&quot;,USER_DISABLED:&quot;user-disabled&quot;,MISSING_PASSWORD:&quot;internal-error&quot;,EMAIL_EXISTS:&quot;email-already-in-use&quot;,PASSWORD_LOGIN_DISABLED:&quot;operation-not-allowed&quot;,INVALID_IDP_RESPONSE:&quot;invalid-credential&quot;,</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">FEDERATED_USER_ID_ALREADY_LINKED:&quot;credential-already-in-use&quot;,EMAIL_NOT_FOUND:&quot;user-not-found&quot;,EXPIRED_OOB_CODE:&quot;expired-action-code&quot;,INVALID_OOB_CODE:&quot;invalid-action-code&quot;,MISSING_OOB_CODE:&quot;internal-error&quot;,CREDENTIAL_TOO_OLD_LOGIN_AGAIN:&quot;requires-recent-login&quot;,INVALID_ID_TOKEN:&quot;invalid-user-token&quot;,TOKEN_EXPIRED:&quot;user-token-expired&quot;,USER_NOT_FOUND:&quot;user-token-expired&quot;,CORS_UNSUPPORTED:&quot;cors-unsupported&quot;,TOO_MANY_ATTEMPTS_TRY_LATER:&quot;too-many-requests&quot;,WEAK_PASSWORD:&quot;weak-password&quot;,OPERATION_NOT_ALLOWED:&quot;operation-not-allowed&quot;,</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">USER_CANCELLED:&quot;user-cancelled&quot;};b=(b=c.match(/^[^\s]+\s*:\s*(.*)$/))&amp;&amp;1&lt;b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new Q(d[e],b);!b&amp;&amp;a&amp;&amp;(b=Bf(a));return new Q(&quot;internal-error&quot;,b)};var Sg=function(a){this.U=a};Sg.prototype.value=function(){return this.U};Sg.prototype.Gd=function(a){this.U.style=a;return this};var Tg=function(a){this.U=a||{}};Tg.prototype.value=function(){return this.U};Tg.prototype.Gd=function(a){this.U.style=a;return this};var Vg=function(a){this.$e=a;this.Cc=null;this.vd=Ug(this)};Vg.prototype.Hc=function(){return this.vd};</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">var Wg=function(a){var b=new Tg;b.U.where=document.body;b.U.url=a.$e;b.U.messageHandlersFilter=xf(&quot;gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER&quot;);b.U.attributes=b.U.attributes||{};(new Sg(b.U.attributes)).Gd({position:&quot;absolute&quot;,top:&quot;-100px&quot;,width:&quot;1px&quot;,height:&quot;1px&quot;});b.U.dontclear=!0;return b},Ug=function(a){return Xg().then(function(){return new H(function(b,c){xf(&quot;gapi.iframes.getContext&quot;)().open(Wg(a).value(),function(d){a.Cc=d;a.Cc.restyle({setHideOnLeave:!1});var e=setTimeout(function(){c(Error(&quot;Network Error&quot;))},</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">5E3),f=function(){clearTimeout(e);b()};d.ping(f).then(f,function(){c(Error(&quot;Network Error&quot;))})})})})},Yg=function(a,b){a.vd.then(function(){a.Cc.register(&quot;authEvent&quot;,b,xf(&quot;gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER&quot;))})},Xg=function(){return new H(function(a,b){var c=function(){Ff();xf(&quot;gapi.load&quot;)(&quot;gapi.iframes&quot;,{callback:a,ontimeout:function(){Ff();b(Error(&quot;Network Error&quot;))},timeout:3E3})};if(xf(&quot;gapi.iframes.Iframe&quot;))a();else if(xf(&quot;gapi.load&quot;))c();else{var d=&quot;__iframefcb&quot;+Math.floor(1E6*Math.random()).toString();</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">l[d]=function(){xf(&quot;gapi.load&quot;)?c():b(Error(&quot;Network Error&quot;))};I(Qd(&quot;https://apis.google.com/js/api.js?onload=&quot;+d)).l(function(){b(Error(&quot;Network Error&quot;))})}})};var Zg=function(a,b,c){this.C=a;this.m=b;this.F=c;this.La=null;this.u=ef(this.C,&quot;/__/auth/iframe&quot;);O(this.u,&quot;apiKey&quot;,this.m);O(this.u,&quot;appName&quot;,this.F)};Zg.prototype.setVersion=function(a){this.La=a;return this};Zg.prototype.toString=function(){this.La?O(this.u,&quot;v&quot;,this.La):cf(this.u,&quot;v&quot;);return this.u.toString()};</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">var $g=function(a,b,c,d,e){this.C=a;this.m=b;this.F=c;this.Yd=d;this.La=this.W=this.Pc=null;this.$b=e;this.u=ef(this.C,&quot;/__/auth/handler&quot;);O(this.u,&quot;apiKey&quot;,this.m);O(this.u,&quot;appName&quot;,this.F);O(this.u,&quot;authType&quot;,this.Yd)};$g.prototype.setVersion=function(a){this.La=a;return this};</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">$g.prototype.toString=function(){if(this.$b.isOAuthProvider){O(this.u,&quot;providerId&quot;,this.$b.providerId);var a=this.$b.ne();a&amp;&amp;a.length&amp;&amp;O(this.u,&quot;scopes&quot;,a.join(&quot;,&quot;));a=this.$b.me();Ua(a)||O(this.u,&quot;customParameters&quot;,Bf(a))}this.Pc?O(this.u,&quot;redirectUrl&quot;,this.Pc):cf(this.u,&quot;redirectUrl&quot;);this.W?O(this.u,&quot;eventId&quot;,this.W):cf(this.u,&quot;eventId&quot;);this.La?O(this.u,&quot;v&quot;,this.La):cf(this.u,&quot;v&quot;);return this.u.toString()};</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">var bh=function(a,b,c,d){this.C=a;this.m=b;this.F=c;d=this.Aa=d||null;this.ve=(new Zg(a,b,c)).setVersion(d).toString();this.pd=new Vg(this.ve);this.Db=[];ah(this)};bh.prototype.Hc=function(){return this.pd.Hc()};</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">var ch=function(a,b,c,d,e,f,g,k){a=new $g(a,b,c,d,e);a.Pc=f;a.W=g;return a.setVersion(k).toString()},ah=function(a){Yg(a.pd,function(b){var c={};if(b&amp;&amp;b.authEvent){var d=!1;b=b.authEvent||{};if(b.type){if(c=b.error)var e=(c=b.error)&amp;&amp;(c.name||c.code),c=e?new Q(e.substring(5),c.message):null;b=new Qf(b.type,b.eventId,b.urlResponse,b.sessionId,c)}else b=null;for(c=0;c&lt;a.Db.length;c++)d=a.Db[c](b)||d;c={};c.status=d?&quot;ACK&quot;:&quot;ERROR&quot;;return I(c)}c.status=&quot;ERROR&quot;;return I(c)})},dh=function(a,b){Ma(a.Db,function(a){return a==</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">b})};var eh=function(a){this.w=a||firebase.INTERNAL.reactNative&amp;&amp;firebase.INTERNAL.reactNative.AsyncStorage;if(!this.w)throw new Q(&quot;internal-error&quot;,&quot;The React Native compatibility library was not found.&quot;);};h=eh.prototype;h.get=function(a){return I(this.w.getItem(a)).then(function(a){return a&amp;&amp;Df(a)})};h.set=function(a,b){return I(this.w.setItem(a,Bf(b)))};h.remove=function(a){return I(this.w.removeItem(a))};h.Na=function(){};h.bb=function(){};var fh=function(){this.w={}};h=fh.prototype;h.get=function(a){return I(this.w[a])};h.set=function(a,b){this.w[a]=b;return I()};h.remove=function(a){delete this.w[a];return I()};h.Na=function(){};h.bb=function(){};var hh=function(){if(!gh()){if(&quot;Node&quot;==uf())throw new Q(&quot;internal-error&quot;,&quot;The LocalStorage compatibility library was not found.&quot;);throw new Q(&quot;web-storage-unsupported&quot;);}this.w=l.localStorage||firebase.INTERNAL.node.localStorage},gh=function(){var a=&quot;Node&quot;==uf(),a=l.localStorage||a&amp;&amp;firebase.INTERNAL.node&amp;&amp;firebase.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem(&quot;__sak&quot;,&quot;1&quot;),a.removeItem(&quot;__sak&quot;),!0}catch(b){return!1}};h=hh.prototype;</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">h.get=function(a){var b=this;return I().then(function(){var c=b.w.getItem(a);return Df(c)})};h.set=function(a,b){var c=this;return I().then(function(){var d=Bf(b);null===d?c.remove(a):c.w.setItem(a,d)})};h.remove=function(a){var b=this;return I().then(function(){b.w.removeItem(a)})};h.Na=function(a){l.window&amp;&amp;Lb(l.window,&quot;storage&quot;,a)};h.bb=function(a){l.window&amp;&amp;Ub(l.window,&quot;storage&quot;,a)};var ih=function(){this.w={}};h=ih.prototype;h.get=function(){return I(null)};h.set=function(){return I()};h.remove=function(){return I()};h.Na=function(){};h.bb=function(){};var kh=function(){if(!jh()){if(&quot;Node&quot;==uf())throw new Q(&quot;internal-error&quot;,&quot;The SessionStorage compatibility library was not found.&quot;);throw new Q(&quot;web-storage-unsupported&quot;);}this.w=l.sessionStorage||firebase.INTERNAL.node.sessionStorage},jh=function(){var a=&quot;Node&quot;==uf(),a=l.sessionStorage||a&amp;&amp;firebase.INTERNAL.node&amp;&amp;firebase.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem(&quot;__sak&quot;,&quot;1&quot;),a.removeItem(&quot;__sak&quot;),!0}catch(b){return!1}};h=kh.prototype;</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">h.get=function(a){var b=this;return I().then(function(){var c=b.w.getItem(a);return Df(c)})};h.set=function(a,b){var c=this;return I().then(function(){var d=Bf(b);null===d?c.remove(a):c.w.setItem(a,d)})};h.remove=function(a){var b=this;return I().then(function(){b.w.removeItem(a)})};h.Na=function(){};h.bb=function(){};var lh=function(a,b,c,d,e,f){if(!window.indexedDB)throw new Q(&quot;web-storage-unsupported&quot;);this.be=a;this.Gc=b;this.wc=c;this.Md=d;this.pa=e;this.S={};this.zb=[];this.vb=0;this.we=f||l.indexedDB},mh,nh=function(a){return new H(function(b,c){var d=a.we.open(a.be,a.pa);d.onerror=function(a){c(Error(a.target.errorCode))};d.onupgradeneeded=function(b){b=b.target.result;try{b.createObjectStore(a.Gc,{keyPath:a.wc})}catch(f){c(f)}};d.onsuccess=function(a){b(a.target.result)}})},oh=function(a){a.qd||(a.qd=</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">nh(a));return a.qd},ph=function(a,b){return b.objectStore(a.Gc)},qh=function(a,b,c){return b.transaction([a.Gc],c?&quot;readwrite&quot;:&quot;readonly&quot;)},rh=function(a){return new H(function(b,c){a.onsuccess=function(a){a&amp;&amp;a.target?b(a.target.result):b()};a.onerror=function(a){c(Error(a.target.errorCode))}})};h=lh.prototype;</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">h.set=function(a,b){var c=!1,d,e=this;return zd(oh(this).then(function(b){d=b;b=ph(e,qh(e,d,!0));return rh(b.get(a))}).then(function(f){var g=ph(e,qh(e,d,!0));if(f)return f.value=b,rh(g.put(f));e.vb++;c=!0;f={};f[e.wc]=a;f[e.Md]=b;return rh(g.add(f))}).then(function(){e.S[a]=b}),function(){c&amp;&amp;e.vb--})};h.get=function(a){var b=this;return oh(this).then(function(c){return rh(ph(b,qh(b,c,!1)).get(a))}).then(function(a){return a&amp;&amp;a.value})};</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">h.remove=function(a){var b=!1,c=this;return zd(oh(this).then(function(d){b=!0;c.vb++;return rh(ph(c,qh(c,d,!0))[&quot;delete&quot;](a))}).then(function(){delete c.S[a]}),function(){b&amp;&amp;c.vb--})};</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">h.Se=function(){var a=this;return oh(this).then(function(b){var c=ph(a,qh(a,b,!1));return c.getAll?rh(c.getAll()):new H(function(a,b){var d=[],e=c.openCursor();e.onsuccess=function(b){(b=b.target.result)?(d.push(b.value),b[&quot;continue&quot;]()):a(d)};e.onerror=function(a){b(Error(a.target.errorCode))}})}).then(function(b){var c={},d=[];if(0==a.vb){for(d=0;d&lt;b.length;d++)c[b[d][a.wc]]=b[d][a.Md];d=nf(a.S,c);a.S=c}return d})};h.Na=function(a){0==this.zb.length&amp;&amp;this.Uc();this.zb.push(a)};</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">h.bb=function(a){Ma(this.zb,function(b){return b==a});0==this.zb.length&amp;&amp;this.jc()};h.Uc=function(){var a=this;this.jc();var b=function(){a.Lc=ze(800).then(q(a.Se,a)).then(function(b){0&lt;b.length&amp;&amp;x(a.zb,function(a){a(b)})}).then(b).l(function(a){&quot;STOP_EVENT&quot;!=a.message&amp;&amp;b()});return a.Lc};b()};h.jc=function(){this.Lc&amp;&amp;this.Lc.cancel(&quot;STOP_EVENT&quot;)};var vh=function(){this.gd={Browser:sh,Node:th,ReactNative:uh}[uf()]},wh,sh={Z:hh,Wc:kh},th={Z:hh,Wc:kh},uh={Z:eh,Wc:ih};var xh=&quot;First Second Third Fourth Fifth Sixth Seventh Eighth Ninth&quot;.split(&quot; &quot;),T=function(a,b){return{name:a||&quot;&quot;,fa:&quot;a valid string&quot;,optional:!!b,ga:n}},U=function(a){return{name:a||&quot;&quot;,fa:&quot;a valid object&quot;,optional:!1,ga:ha}},yh=function(a,b){return{name:a||&quot;&quot;,fa:&quot;a function&quot;,optional:!!b,ga:p}},zh=function(){return{name:&quot;&quot;,fa:&quot;null&quot;,optional:!1,ga:da}},Ah=function(){return{name:&quot;credential&quot;,fa:&quot;a valid credential&quot;,optional:!1,ga:function(a){return!(!a||!a.Kb)}}},Bh=function(){return{name:&quot;authProvider&quot;,</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">fa:&quot;a valid Auth provider&quot;,optional:!1,ga:function(a){return!!(a&amp;&amp;a.providerId&amp;&amp;a.hasOwnProperty&amp;&amp;a.hasOwnProperty(&quot;isOAuthProvider&quot;))}}},Ch=function(a,b,c,d){return{name:c||&quot;&quot;,fa:a.fa+&quot; or &quot;+b.fa,optional:!!d,ga:function(c){return a.ga(c)||b.ga(c)}}};var Eh=function(a,b){for(var c in b){var d=b[c].name;a[d]=Dh(d,a[c],b[c].a)}},V=function(a,b,c,d){a[b]=Dh(b,c,d)},Dh=function(a,b,c){if(!c)return b;var d=Fh(a);a=function(){var a=Array.prototype.slice.call(arguments),e;a:{e=Array.prototype.slice.call(a);var k;k=0;for(var t=!1,ua=0;ua&lt;c.length;ua++)if(c[ua].optional)t=!0;else{if(t)throw new Q(&quot;internal-error&quot;,&quot;Argument validator encountered a required argument after an optional argument.&quot;);k++}t=c.length;if(e.length&lt;k||t&lt;e.length)e=&quot;Expected &quot;+(k==</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">t?1==k?&quot;1 argument&quot;:k+&quot; arguments&quot;:k+&quot;-&quot;+t+&quot; arguments&quot;)+&quot; but got &quot;+e.length+&quot;.&quot;;else{for(k=0;k&lt;e.length;k++)if(t=c[k].optional&amp;&amp;void 0===e[k],!c[k].ga(e[k])&amp;&amp;!t){e=c[k];if(0&gt;k||k&gt;=xh.length)throw new Q(&quot;internal-error&quot;,&quot;Argument validator received an unsupported number of arguments.&quot;);e=xh[k]+&quot; argument &quot;+(e.name?&#39;&quot;&#39;+e.name+&#39;&quot; &#39;:&quot;&quot;)+&quot;must be &quot;+e.fa+&quot;.&quot;;break a}e=null}}if(e)throw new Q(&quot;argument-error&quot;,d+&quot; failed: &quot;+e);return b.apply(this,a)};for(var e in b)a[e]=b[e];for(e in b.prototype)a.prototype[e]=</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">b.prototype[e];return a},Fh=function(a){a=a.split(&quot;.&quot;);return a[a.length-1]};var Gh=function(a,b,c,d){this.Ge=a;this.Ed=b;this.Me=c;this.hb=d;this.R={};wh||(wh=new vh);a=wh;try{var e;lf()?(mh||(mh=new lh(&quot;firebaseLocalStorageDb&quot;,&quot;firebaseLocalStorage&quot;,&quot;fbase_key&quot;,&quot;value&quot;,1)),e=mh):e=new a.gd.Z;this.Wa=e}catch(f){this.Wa=new fh,this.hb=!0}try{this.lc=new a.gd.Wc}catch(f){this.lc=new fh}this.Hd=q(this.Id,this);this.S={}},Hh,Ih=function(){Hh||(Hh=new Gh(&quot;firebase&quot;,&quot;:&quot;,!Ef(kf())&amp;&amp;l.window&amp;&amp;l.window!=l.window.top?!0:!1,Af()));return Hh};h=Gh.prototype;</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">h.O=function(a,b){return this.Ge+this.Ed+a.name+(b?this.Ed+b:&quot;&quot;)};h.get=function(a,b){return(a.Z?this.Wa:this.lc).get(this.O(a,b))};h.remove=function(a,b){b=this.O(a,b);a.Z&amp;&amp;!this.hb&amp;&amp;(this.S[b]=null);return(a.Z?this.Wa:this.lc).remove(b)};h.set=function(a,b,c){var d=this.O(a,c),e=this,f=a.Z?this.Wa:this.lc;return f.set(d,b).then(function(){return f.get(d)}).then(function(b){a.Z&amp;&amp;!this.hb&amp;&amp;(e.S[d]=b)})};</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">h.addListener=function(a,b,c){a=this.O(a,b);this.hb||(this.S[a]=l.localStorage.getItem(a));Ua(this.R)&amp;&amp;this.Uc();this.R[a]||(this.R[a]=[]);this.R[a].push(c)};h.removeListener=function(a,b,c){a=this.O(a,b);this.R[a]&amp;&amp;(Ma(this.R[a],function(a){return a==c}),0==this.R[a].length&amp;&amp;delete this.R[a]);Ua(this.R)&amp;&amp;this.jc()};h.Uc=function(){this.Wa.Na(this.Hd);this.hb||Jh(this)};</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">var Jh=function(a){Kh(a);a.Fc=setInterval(function(){for(var b in a.R){var c=l.localStorage.getItem(b);c!=a.S[b]&amp;&amp;(a.S[b]=c,c=new Ab({type:&quot;storage&quot;,key:b,target:window,oldValue:a.S[b],newValue:c}),a.Id(c))}},1E3)},Kh=function(a){a.Fc&amp;&amp;(clearInterval(a.Fc),a.Fc=null)};Gh.prototype.jc=function(){this.Wa.bb(this.Hd);this.hb||Kh(this)};</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">Gh.prototype.Id=function(a){if(a&amp;&amp;a.le){var b=a.ob.key;if(this.Me){var c=l.localStorage.getItem(b);a=a.ob.newValue;a!=c&amp;&amp;(a?l.localStorage.setItem(b,a):a||l.localStorage.removeItem(b))}this.S[b]=l.localStorage.getItem(b);this.ad(b)}else x(a,q(this.ad,this))};Gh.prototype.ad=function(a){this.R[a]&amp;&amp;x(this.R[a],function(a){a()})};var Lh=function(a){this.D=a;this.B=Ih()},Mh={name:&quot;pendingRedirect&quot;,Z:!1},Nh=function(a){return a.B.set(Mh,&quot;pending&quot;,a.D)},Oh=function(a){return a.B.remove(Mh,a.D)},Ph=function(a){return a.B.get(Mh,a.D).then(function(a){return&quot;pending&quot;==a})};var Sh=function(a,b,c){var d=this,e=(this.Aa=firebase.SDK_VERSION||null)?wf(this.Aa):null;this.f=new S(b,null,e);this.sa=null;this.C=a;this.m=b;this.F=c;this.Ab=[];this.Sb=!1;this.Xc=q(this.oe,this);this.Za=new Qh(this);this.yd=new Rh(this);this.Kc=new Lh(this.m+&quot;:&quot;+this.F);this.jb={};this.jb.unknown=this.Za;this.jb.signInViaRedirect=this.Za;this.jb.linkViaRedirect=this.Za;this.jb.signInViaPopup=this.yd;this.jb.linkViaPopup=this.yd;this.dc=this.fb=null;this.Xb=new H(function(a,b){d.fb=a;d.dc=b})};</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">Sh.prototype.reset=function(){var a=this;this.sa=null;this.Xb.cancel();this.Sb=!1;this.dc=this.fb=null;this.Pb&amp;&amp;dh(this.Pb,this.Xc);this.Xb=new H(function(b,c){a.fb=b;a.dc=c})};</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">var Th=function(a){var b=mf();return xg(a).then(function(a){a:{for(var c=df(b).ia,e=0;e&lt;a.length;e++){var f;var g=a[e];f=c;var k=Oc(g);k?f=(f=Oc(f))?k.Ib(f):!1:(k=g.split(&quot;.&quot;).join(&quot;\\.&quot;),f=(new RegExp(&quot;^(.+\\.&quot;+k+&quot;|&quot;+k+&quot;)$&quot;,&quot;i&quot;)).test(f));if(f){a=!0;break a}}a=!1}if(!a)throw new Rf(mf());})},Uh=function(a){a.Sb||(a.Sb=!0,tf().then(function(){a.Pb=new bh(a.C,a.m,a.F,a.Aa);a.Pb.Hc().l(function(){a.dc(new Q(&quot;network-request-failed&quot;));a.reset()});a.Pb.Db.push(a.Xc)}));return a.Xb};</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">Sh.prototype.subscribe=function(a){Ja(this.Ab,a)||this.Ab.push(a);if(!this.Sb){var b=this,c=function(){var a=kf();Af(a)||Ef(a)||Uh(b);Vh(b.Za)};Ph(this.Kc).then(function(a){a?Oh(b.Kc).then(function(){Uh(b)}):c()}).l(function(){c()})}};Sh.prototype.unsubscribe=function(a){Ma(this.Ab,function(b){return b==a})};</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">Sh.prototype.oe=function(a){if(!a)throw new Q(&quot;invalid-auth-event&quot;);this.fb&amp;&amp;(this.fb(),this.fb=null);for(var b=!1,c=0;c&lt;this.Ab.length;c++){var d=this.Ab[c];if(d.bd(a.ya,a.W)){(b=this.jb[a.ya])&amp;&amp;b.zd(a,d);b=!0;break}}Vh(this.Za);return b};Sh.prototype.getRedirectResult=function(){return this.Za.getRedirectResult()};</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">var Xh=function(a,b,c,d,e,f){if(!b)return J(new Q(&quot;popup-blocked&quot;));if(f)return Uh(a),I();a.sa||(a.sa=Th(a.f));return a.sa.then(function(){return Uh(a)}).then(function(){Wh(d);var f=ch(a.C,a.m,a.F,c,d,null,e,a.Aa);(b||l.window).location.href=ec(hc(f))}).l(function(b){&quot;auth/network-request-failed&quot;==b.code&amp;&amp;(a.sa=null);throw b;})},Yh=function(a,b,c,d){a.sa||(a.sa=Th(a.f));return a.sa.then(function(){Wh(c);var e=ch(a.C,a.m,a.F,b,c,mf(),d,a.Aa);Nh(a.Kc).then(function(){l.window.location.href=ec(hc(e))})})},</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">Zh=function(a,b,c,d,e){var f=new Q(&quot;popup-closed-by-user&quot;);return a.Xb.l(function(){}).then(function(){return sf(d)}).then(function(){return ze(2E3).then(function(){b.Ja(c,null,f,e)})})},Wh=function(a){if(!a.isOAuthProvider)throw new Q(&quot;invalid-oauth-provider&quot;);},$h={},ai=function(a,b,c){var d=b+&quot;:&quot;+c;$h[d]||($h[d]=new Sh(a,b,c));return $h[d]},Qh=function(a){this.B=a;this.yb=this.cc=this.$a=this.aa=null;this.Oc=!1};</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">Qh.prototype.zd=function(a,b){if(!a)return J(new Q(&quot;invalid-auth-event&quot;));this.Oc=!0;var c=a.ya,d=a.W;&quot;unknown&quot;==c?(this.aa||bi(this,!1,null,null),a=I()):a=a.N?this.Mc(a,b):b.pb(c,d)?this.Nc(a,b):J(new Q(&quot;invalid-auth-event&quot;));return a};var Vh=function(a){a.Oc||(a.Oc=!0,bi(a,!1,null,null))};Qh.prototype.Mc=function(a){this.aa||bi(this,!0,null,a.getError());return I()};</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">Qh.prototype.Nc=function(a,b){var c=this,d=a.ya;b=b.pb(d,a.W);var e=a.kb;a=a.hc;var f=&quot;signInViaRedirect&quot;==d||&quot;linkViaRedirect&quot;==d;if(this.aa)return I();this.yb&amp;&amp;this.yb.cancel();return b(e,a).then(function(a){c.aa||bi(c,f,a,null)}).l(function(a){c.aa||bi(c,f,null,a)})};var bi=function(a,b,c,d){b?d?(a.aa=function(){return J(d)},a.cc&amp;&amp;a.cc(d)):(a.aa=function(){return I(c)},a.$a&amp;&amp;a.$a(c)):(a.aa=function(){return I({user:null})},a.$a&amp;&amp;a.$a({user:null}));a.$a=null;a.cc=null};</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">Qh.prototype.getRedirectResult=function(){var a=this;this.$c||(this.$c=new H(function(b,c){a.aa?a.aa().then(b,c):(a.$a=b,a.cc=c,ci(a))}));return this.$c};var ci=function(a){var b=new Q(&quot;timeout&quot;);a.yb&amp;&amp;a.yb.cancel();a.yb=ze(1E4).then(function(){a.aa||bi(a,!0,null,b)})},Rh=function(a){this.B=a};Rh.prototype.zd=function(a,b){if(!a)return J(new Q(&quot;invalid-auth-event&quot;));var c=a.ya,d=a.W;return a.N?this.Mc(a,b):b.pb(c,d)?this.Nc(a,b):J(new Q(&quot;invalid-auth-event&quot;))};</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">Rh.prototype.Mc=function(a,b){b.Ja(a.ya,null,a.getError(),a.W);return I()};Rh.prototype.Nc=function(a,b){var c=a.W,d=a.ya;return b.pb(d,c)(a.kb,a.hc).then(function(a){b.Ja(d,a,null,c)}).l(function(a){b.Ja(d,null,a,c)})};var di=function(a){this.f=a;this.za=this.V=null;this.Sa=0};di.prototype.K=function(){return{apiKey:this.f.m,refreshToken:this.V,accessToken:this.za,expirationTime:this.Sa}};</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">var fi=function(a,b){var c=b.idToken,d=b.refreshToken;b=ei(b.expiresIn);a.za=c;a.Sa=b;a.V=d},ei=function(a){return la()+1E3*parseInt(a,10)},gi=function(a,b){return qg(a.f,b).then(function(b){a.za=b.access_token;a.Sa=ei(b.expires_in);a.V=b.refresh_token;return{accessToken:a.za,expirationTime:a.Sa,refreshToken:a.V}}).l(function(b){&quot;auth/user-token-expired&quot;==b.code&amp;&amp;(a.V=null);throw b;})},hi=function(a){return!(!a.za||a.V)};</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">di.prototype.getToken=function(a){a=!!a;return hi(this)?J(new Q(&quot;user-token-expired&quot;)):a||!this.za||la()&gt;this.Sa-3E4?this.V?gi(this,{grant_type:&quot;refresh_token&quot;,refresh_token:this.V}):I(null):I({accessToken:this.za,expirationTime:this.Sa,refreshToken:this.V})};var ii=function(a,b,c,d,e){If(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,providerId:b})},ji=function(a,b){zb.call(this,a);for(var c in b)this[c]=b[c]};r(ji,zb);</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">var W=function(a,b,c){this.Y=[];this.m=a.apiKey;this.F=a.appName;this.C=a.authDomain||null;a=firebase.SDK_VERSION?wf(firebase.SDK_VERSION):null;this.f=new S(this.m,null,a);this.ea=new di(this.f);ki(this,b.idToken);fi(this.ea,b);P(this,&quot;refreshToken&quot;,this.ea.V);li(this,c||{});be.call(this);this.Yb=!1;this.C&amp;&amp;zf()&amp;&amp;(this.o=ai(this.C,this.m,this.F));this.ic=[];this.sc=I()};r(W,be);</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">W.prototype.ua=function(a,b){var c=Array.prototype.slice.call(arguments,1),d=this;return this.sc=this.sc.then(function(){return a.apply(d,c)},function(){return a.apply(d,c)})};</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">var ki=function(a,b){a.rd=b;P(a,&quot;_lat&quot;,b)},mi=function(a,b){Ma(a.ic,function(a){return a==b})},ni=function(a){for(var b=[],c=0;c&lt;a.ic.length;c++)b.push(a.ic[c](a));return wd(b).then(function(){return a})},oi=function(a){a.o&amp;&amp;!a.Yb&amp;&amp;(a.Yb=!0,a.o.subscribe(a))},li=function(a,b){If(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,isAnonymous:b.isAnonymous||!1,providerData:[]})};P(W.prototype,&quot;providerId&quot;,&quot;firebase&quot;);</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">var pi=function(){},qi=function(a){return I().then(function(){if(a.de)throw new Q(&quot;app-deleted&quot;);})},ri=function(a){return Fa(a.providerData,function(a){return a.providerId})},ti=function(a,b){b&amp;&amp;(si(a,b.providerId),a.providerData.push(b))},si=function(a,b){Ma(a.providerData,function(a){return a.providerId==b})},ui=function(a,b,c){(&quot;uid&quot;!=b||c)&amp;&amp;a.hasOwnProperty(b)&amp;&amp;P(a,b,c)};</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">W.prototype.copy=function(a){var b=this;b!=a&amp;&amp;(If(this,{uid:a.uid,displayName:a.displayName,photoURL:a.photoURL,email:a.email,emailVerified:a.emailVerified,isAnonymous:a.isAnonymous,providerData:[]}),x(a.providerData,function(a){ti(b,a)}),this.ea=a.ea,P(this,&quot;refreshToken&quot;,this.ea.V))};W.prototype.reload=function(){var a=this;return qi(this).then(function(){return vi(a).then(function(){return ni(a)}).then(pi)})};</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">var vi=function(a){return a.getToken().then(function(b){var c=a.isAnonymous;return wi(a,b).then(function(){c||ui(a,&quot;isAnonymous&quot;,!1);return b}).l(function(b){&quot;auth/user-token-expired&quot;==b.code&amp;&amp;(a.dispatchEvent(new ji(&quot;userDeleted&quot;)),xi(a));throw b;})})};</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">W.prototype.getToken=function(a){var b=this,c=hi(this.ea);return qi(this).then(function(){return b.ea.getToken(a)}).then(function(a){if(!a)throw new Q(&quot;internal-error&quot;);a.accessToken!=b.rd&amp;&amp;(ki(b,a.accessToken),b.Fa());ui(b,&quot;refreshToken&quot;,a.refreshToken);return a.accessToken}).l(function(a){if(&quot;auth/user-token-expired&quot;==a.code&amp;&amp;!c)return ni(b).then(function(){ui(b,&quot;refreshToken&quot;,null);throw a;});throw a;})};</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">var yi=function(a,b){b.idToken&amp;&amp;a.rd!=b.idToken&amp;&amp;(fi(a.ea,b),a.Fa(),ki(a,b.idToken),ui(a,&quot;refreshToken&quot;,a.ea.V))};W.prototype.Fa=function(){this.dispatchEvent(new ji(&quot;tokenChanged&quot;))};var wi=function(a,b){return R(a.f,Qg,{idToken:b}).then(q(a.Je,a))};</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">W.prototype.Je=function(a){a=a.users;if(!a||!a.length)throw new Q(&quot;internal-error&quot;);a=a[0];li(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified});for(var b=zi(a),c=0;c&lt;b.length;c++)ti(this,b[c]);ui(this,&quot;isAnonymous&quot;,!(this.email&amp;&amp;a.passwordHash)&amp;&amp;!(this.providerData&amp;&amp;this.providerData.length))};</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">var zi=function(a){return(a=a.providerUserInfo)&amp;&amp;a.length?Fa(a,function(a){return new ii(a.rawId,a.providerId,a.email,a.displayName,a.photoUrl)}):[]};W.prototype.reauthenticate=function(a){var b=this;return this.c(a.Kb(this.f).then(function(a){var c;a:{var e=a.idToken.split(&quot;.&quot;);if(3==e.length){for(var e=e[1],f=(4-e.length%4)%4,g=0;g&lt;f;g++)e+=&quot;.&quot;;try{var k=jc(ub(e));if(k.sub&amp;&amp;k.iss&amp;&amp;k.aud&amp;&amp;k.exp){c=new Sf(k);break a}}catch(t){}}c=null}if(!c||b.uid!=c.De)throw new Q(&quot;user-mismatch&quot;);yi(b,a);return b.reload()}))};</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">var Ai=function(a,b){return vi(a).then(function(){if(Ja(ri(a),b))return ni(a).then(function(){throw new Q(&quot;provider-already-linked&quot;);})})};h=W.prototype;h.Be=function(a){var b=this;return this.c(Ai(this,a.provider).then(function(){return b.getToken()}).then(function(c){return a.td(b.f,c)}).then(q(this.jd,this)))};h.link=function(a){return this.ua(this.Be,a)};h.jd=function(a){yi(this,a);var b=this;return this.reload().then(function(){return b})};</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">h.Xe=function(a){var b=this;return this.c(this.getToken().then(function(c){return b.f.updateEmail(c,a)}).then(function(a){yi(b,a);return b.reload()}))};h.updateEmail=function(a){return this.ua(this.Xe,a)};h.Ye=function(a){var b=this;return this.c(this.getToken().then(function(c){return b.f.updatePassword(c,a)}).then(function(a){yi(b,a);return b.reload()}))};h.updatePassword=function(a){return this.ua(this.Ye,a)};</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">h.Ze=function(a){if(void 0===a.displayName&amp;&amp;void 0===a.photoURL)return qi(this);var b=this;return this.c(this.getToken().then(function(c){return b.f.updateProfile(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(a){yi(b,a);ui(b,&quot;displayName&quot;,a.displayName||null);ui(b,&quot;photoURL&quot;,a.photoUrl||null);return ni(b)}).then(pi))};h.updateProfile=function(a){return this.ua(this.Ze,a)};</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">h.We=function(a){var b=this;return this.c(vi(this).then(function(c){return Ja(ri(b),a)?Fg(b.f,c,[a]).then(function(a){var c={};x(a.providerUserInfo||[],function(a){c[a.providerId]=!0});x(ri(b),function(a){c[a]||si(b,a)});return ni(b)}):ni(b).then(function(){throw new Q(&quot;no-such-provider&quot;);})}))};h.unlink=function(a){return this.ua(this.We,a)};h.ce=function(){var a=this;return this.c(this.getToken().then(function(b){return R(a.f,Pg,{idToken:b})}).then(function(){a.dispatchEvent(new ji(&quot;userDeleted&quot;))})).then(function(){xi(a)})};</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">h.delete=function(){return this.ua(this.ce)};h.bd=function(a,b){return&quot;linkViaPopup&quot;==a&amp;&amp;(this.ka||null)==b&amp;&amp;this.da||&quot;linkViaRedirect&quot;==a&amp;&amp;(this.bc||null)==b?!0:!1};h.Ja=function(a,b,c,d){&quot;linkViaPopup&quot;==a&amp;&amp;d==(this.ka||null)&amp;&amp;(c&amp;&amp;this.Ha?this.Ha(c):b&amp;&amp;!c&amp;&amp;this.da&amp;&amp;this.da(b),this.G&amp;&amp;(this.G.cancel(),this.G=null),delete this.da,delete this.Ha)};h.pb=function(a,b){return&quot;linkViaPopup&quot;==a&amp;&amp;b==(this.ka||null)||&quot;linkViaRedirect&quot;==a&amp;&amp;(this.bc||null)==b?q(this.ge,this):null};</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">h.Jb=function(){return yf(this.uid+&quot;:::&quot;)};</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">var Ci=function(a,b){if(!zf())return J(new Q(&quot;operation-not-supported-in-this-environment&quot;));var c=Nf(b.providerId),d=a.Jb(),e=null;!Af()&amp;&amp;a.C&amp;&amp;b.isOAuthProvider&amp;&amp;(e=ch(a.C,a.m,a.F,&quot;linkViaPopup&quot;,b,null,d,firebase.SDK_VERSION||null));var f=rf(e,c&amp;&amp;c.xb,c&amp;&amp;c.wb),c=Ai(a,b.providerId).then(function(){return ni(a)}).then(function(){Bi(a);return a.getToken()}).then(function(){return Xh(a.o,f,&quot;linkViaPopup&quot;,b,d,!!e)}).then(function(){return new H(function(b,c){a.Ja(&quot;linkViaPopup&quot;,null,new Q(&quot;cancelled-popup-request&quot;),</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">a.ka||null);a.da=b;a.Ha=c;a.ka=d;a.G=Zh(a.o,a,&quot;linkViaPopup&quot;,f,d)})}).then(function(a){f&amp;&amp;qf(f);return a}).l(function(a){f&amp;&amp;qf(f);throw a;});return a.c(c)};W.prototype.linkWithPopup=function(a){var b=Ci(this,a);return this.ua(function(){return b})};</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">W.prototype.Ce=function(a){if(!zf())return J(new Q(&quot;operation-not-supported-in-this-environment&quot;));var b=this,c=null,d=this.Jb(),e=Ai(this,a.providerId).then(function(){Bi(b);return b.getToken()}).then(function(){b.bc=d;return ni(b)}).then(function(a){b.Ia&amp;&amp;(a=b.Ia,a=a.B.set(Di,b.K(),a.D));return a}).then(function(){return Yh(b.o,&quot;linkViaRedirect&quot;,a,d)}).l(function(a){c=a;if(b.Ia)return Ei(b.Ia);throw c;}).then(function(){if(c)throw c;});return this.c(e)};</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">W.prototype.linkWithRedirect=function(a){return this.ua(this.Ce,a)};var Bi=function(a){if(!a.o||!a.Yb){if(a.o&amp;&amp;!a.Yb)throw new Q(&quot;internal-error&quot;);throw new Q(&quot;auth-domain-config-required&quot;);}};W.prototype.ge=function(a,b){var c=this;this.G&amp;&amp;(this.G.cancel(),this.G=null);var d=null,e=this.getToken().then(function(d){return Wf(c.f,{requestUri:a,sessionId:b,idToken:d})}).then(function(a){d=gg(a);return c.jd(a)}).then(function(a){return{user:a,credential:d}});return this.c(e)};</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">W.prototype.sendEmailVerification=function(){var a=this;return this.c(this.getToken().then(function(b){return a.f.sendEmailVerification(b)}).then(function(b){if(a.email!=b)return a.reload()}).then(function(){}))};var xi=function(a){for(var b=0;b&lt;a.Y.length;b++)a.Y[b].cancel(&quot;app-deleted&quot;);a.Y=[];a.de=!0;P(a,&quot;refreshToken&quot;,null);a.o&amp;&amp;a.o.unsubscribe(a)};W.prototype.c=function(a){var b=this;this.Y.push(a);zd(a,function(){La(b.Y,a)});return a};W.prototype.toJSON=function(){return this.K()};</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">W.prototype.K=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.m,appName:this.F,authDomain:this.C,stsTokenManager:this.ea.K(),redirectEventId:this.bc||null};x(this.providerData,function(b){a.providerData.push(Jf(b))});return a};</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">var Fi=function(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&amp;&amp;a.stsTokenManager.accessToken&amp;&amp;a.stsTokenManager.expirationTime)c.idToken=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken||null,c.expiresIn=(a.stsTokenManager.expirationTime-la())/1E3;else return null;var d=new W(b,c,a);a.providerData&amp;&amp;x(a.providerData,function(a){if(a){var b={};If(b,a);ti(d,b)}});a.redirectEventId&amp;&amp;(d.bc=a.redirectEventId);</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">return d},Gi=function(a,b,c){var d=new W(a,b);c&amp;&amp;(d.Ia=c);return d.reload().then(function(){return d})};var Hi=function(a){this.D=a;this.B=Ih()},Di={name:&quot;redirectUser&quot;,Z:!1},Ei=function(a){return a.B.remove(Di,a.D)},Ii=function(a,b){return a.B.get(Di,a.D).then(function(a){a&amp;&amp;b&amp;&amp;(a.authDomain=b);return Fi(a||{})})};var Ji=function(a){this.D=a;this.B=Ih()},Ki={name:&quot;authUser&quot;,Z:!0},Li=function(a,b){return a.B.set(Ki,b.K(),a.D)},Mi=function(a){return a.B.remove(Ki,a.D)},Ni=function(a,b){return a.B.get(Ki,a.D).then(function(a){a&amp;&amp;b&amp;&amp;(a.authDomain=b);return Fi(a||{})})};var Y=function(a){this.Qa=!1;P(this,&quot;app&quot;,a);if(X(this).options&amp;&amp;X(this).options.apiKey)a=firebase.SDK_VERSION?wf(firebase.SDK_VERSION):null,this.f=new S(X(this).options&amp;&amp;X(this).options.apiKey,null,a);else throw new Q(&quot;invalid-api-key&quot;);this.Y=[];this.Oa=[];this.He=firebase.INTERNAL.createSubscribe(q(this.xe,this));Oi(this,null);this.oa=new Ji(X(this).options.apiKey+&quot;:&quot;+X(this).name);this.ab=new Hi(X(this).options.apiKey+&quot;:&quot;+X(this).name);this.Eb=this.c(Pi(this));this.va=this.c(Qi(this));this.Ec=</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">!1;this.Bc=q(this.Re,this);this.Kd=q(this.Ua,this);this.Ld=q(this.te,this);this.Jd=q(this.se,this);Ri(this);this.INTERNAL={};this.INTERNAL.delete=q(this.delete,this)};Y.prototype.toJSON=function(){return{apiKey:X(this).options.apiKey,authDomain:X(this).options.authDomain,appName:X(this).name,currentUser:Z(this)&amp;&amp;Z(this).K()}};</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">var Si=function(a){return a.ee||J(new Q(&quot;auth-domain-config-required&quot;))},Ri=function(a){var b=X(a).options.authDomain,c=X(a).options.apiKey;b&amp;&amp;zf()&amp;&amp;(a.ee=a.Eb.then(function(){if(!a.Qa)return a.o=ai(b,c,X(a).name),a.o.subscribe(a),Z(a)&amp;&amp;oi(Z(a)),a.Qc&amp;&amp;(oi(a.Qc),a.Qc=null),a.o}))};h=Y.prototype;h.bd=function(a,b){switch(a){case &quot;unknown&quot;:case &quot;signInViaRedirect&quot;:return!0;case &quot;signInViaPopup&quot;:return this.ka==b&amp;&amp;!!this.da;default:return!1}};</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">h.Ja=function(a,b,c,d){&quot;signInViaPopup&quot;==a&amp;&amp;this.ka==d&amp;&amp;(c&amp;&amp;this.Ha?this.Ha(c):b&amp;&amp;!c&amp;&amp;this.da&amp;&amp;this.da(b),this.G&amp;&amp;(this.G.cancel(),this.G=null),delete this.da,delete this.Ha)};h.pb=function(a,b){return&quot;signInViaRedirect&quot;==a||&quot;signInViaPopup&quot;==a&amp;&amp;this.ka==b&amp;&amp;this.da?q(this.he,this):null};</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">h.he=function(a,b){var c=this;a={requestUri:a,sessionId:b};this.G&amp;&amp;(this.G.cancel(),this.G=null);var d=null,e=Uf(c.f,a).then(function(a){d=gg(a);return a});a=c.Eb.then(function(){return e}).then(function(a){return Ti(c,a)}).then(function(){return{user:Z(c),credential:d}});return this.c(a)};h.Jb=function(){return yf()};</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">h.signInWithPopup=function(a){if(!zf())return J(new Q(&quot;operation-not-supported-in-this-environment&quot;));var b=this,c=Nf(a.providerId),d=this.Jb(),e=null;!Af()&amp;&amp;X(this).options.authDomain&amp;&amp;a.isOAuthProvider&amp;&amp;(e=ch(X(this).options.authDomain,X(this).options.apiKey,X(this).name,&quot;signInViaPopup&quot;,a,null,d,firebase.SDK_VERSION||null));var f=rf(e,c&amp;&amp;c.xb,c&amp;&amp;c.wb),c=Si(this).then(function(b){return Xh(b,f,&quot;signInViaPopup&quot;,a,d,!!e)}).then(function(){return new H(function(a,c){b.Ja(&quot;signInViaPopup&quot;,null,new Q(&quot;cancelled-popup-request&quot;),</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">b.ka);b.da=a;b.Ha=c;b.ka=d;b.G=Zh(b.o,b,&quot;signInViaPopup&quot;,f,d)})}).then(function(a){f&amp;&amp;qf(f);return a}).l(function(a){f&amp;&amp;qf(f);throw a;});return this.c(c)};h.signInWithRedirect=function(a){if(!zf())return J(new Q(&quot;operation-not-supported-in-this-environment&quot;));var b=this,c=Si(this).then(function(){return Yh(b.o,&quot;signInViaRedirect&quot;,a)});return this.c(c)};</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">h.getRedirectResult=function(){if(!zf())return J(new Q(&quot;operation-not-supported-in-this-environment&quot;));var a=this,b=Si(this).then(function(){return a.o.getRedirectResult()});return this.c(b)};</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">var Ti=function(a,b){var c={};c.apiKey=X(a).options.apiKey;c.authDomain=X(a).options.authDomain;c.appName=X(a).name;return a.Eb.then(function(){return Gi(c,b,a.ab)}).then(function(b){if(Z(a)&amp;&amp;b.uid==Z(a).uid)return Z(a).copy(b),a.Ua(b);Oi(a,b);oi(b);return a.Ua(b)}).then(function(){a.Fa()})},Oi=function(a,b){Z(a)&amp;&amp;(mi(Z(a),a.Kd),Ub(Z(a),&quot;tokenChanged&quot;,a.Ld),Ub(Z(a),&quot;userDeleted&quot;,a.Jd));b&amp;&amp;(b.ic.push(a.Kd),Lb(b,&quot;tokenChanged&quot;,a.Ld),Lb(b,&quot;userDeleted&quot;,a.Jd));P(a,&quot;currentUser&quot;,b)};</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">Y.prototype.signOut=function(){var a=this,b=this.va.then(function(){if(!Z(a))return I();Oi(a,null);return Mi(a.oa).then(function(){a.Fa()})});return this.c(b)};</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">var Ui=function(a){var b=Ii(a.ab,X(a).options.authDomain).then(function(b){if(a.Qc=b)b.Ia=a.ab;return Ei(a.ab)});return a.c(b)},Pi=function(a){var b=X(a).options.authDomain,c=Ui(a).then(function(){return Ni(a.oa,b)}).then(function(b){return b?(b.Ia=a.ab,b.reload().then(function(){return Li(a.oa,b).then(function(){return b})}).l(function(c){return&quot;auth/network-request-failed&quot;==c.code?b:Mi(a.oa)})):null}).then(function(b){Oi(a,b||null)});return a.c(c)},Qi=function(a){return a.Eb.then(function(){return a.getRedirectResult()}).l(function(){}).then(function(){if(!a.Qa)return a.Bc()}).l(function(){}).then(function(){if(!a.Qa){a.Ec=</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">!0;var b=a.oa;b.B.addListener(Ki,b.D,a.Bc)}})};Y.prototype.Re=function(){var a=this;return Ni(this.oa,X(this).options.authDomain).then(function(b){if(!a.Qa){var c;if(c=Z(a)&amp;&amp;b){c=Z(a).uid;var d=b.uid;c=void 0===c||null===c||&quot;&quot;===c||void 0===d||null===d||&quot;&quot;===d?!1:c==d}if(c)return Z(a).copy(b),Z(a).getToken();if(Z(a)||b)Oi(a,b),b&amp;&amp;(oi(b),b.Ia=a.ab),a.o&amp;&amp;a.o.subscribe(a),a.Fa()}})};Y.prototype.Ua=function(a){return Li(this.oa,a)};Y.prototype.te=function(){this.Fa();this.Ua(Z(this))};</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">Y.prototype.se=function(){this.signOut()};var Vi=function(a,b){return a.c(b.then(function(b){return Ti(a,b)}).then(function(){return Z(a)}))};h=Y.prototype;h.xe=function(a){var b=this;this.addAuthTokenListener(function(){a.next(Z(b))})};h.onAuthStateChanged=function(a,b,c){var d=this;this.Ec&amp;&amp;firebase.Promise.resolve().then(function(){p(a)?a(Z(d)):p(a.next)&amp;&amp;a.next(Z(d))});return this.He(a,b,c)};</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">h.getToken=function(a){var b=this,c=this.va.then(function(){return Z(b)?Z(b).getToken(a).then(function(a){return{accessToken:a}}):null});return this.c(c)};h.signInWithCustomToken=function(a){var b=this;return this.va.then(function(){return Vi(b,R(b.f,Rg,{token:a}))}).then(function(a){ui(a,&quot;isAnonymous&quot;,!1);return b.Ua(a)}).then(function(){return Z(b)})};h.signInWithEmailAndPassword=function(a,b){var c=this;return this.va.then(function(){return Vi(c,R(c.f,cg,{email:a,password:b}))})};</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">h.createUserWithEmailAndPassword=function(a,b){var c=this;return this.va.then(function(){return Vi(c,R(c.f,Og,{email:a,password:b}))})};h.signInWithCredential=function(a){var b=this;return this.va.then(function(){return Vi(b,a.Kb(b.f))})};h.signInAnonymously=function(){var a=Z(this),b=this;return a&amp;&amp;a.isAnonymous?I(a):this.va.then(function(){return Vi(b,b.f.signInAnonymously())}).then(function(a){ui(a,&quot;isAnonymous&quot;,!0);return b.Ua(a)}).then(function(){return Z(b)})};</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">var X=function(a){return a.app},Z=function(a){return a.currentUser};h=Y.prototype;h.Fa=function(){if(this.Ec)for(var a=0;a&lt;this.Oa.length;a++)if(this.Oa[a])this.Oa[a](Z(this)&amp;&amp;Z(this)._lat||null)};h.addAuthTokenListener=function(a){var b=this;this.Oa.push(a);this.c(this.va.then(function(){b.Qa||Ja(b.Oa,a)&amp;&amp;a(Z(b)&amp;&amp;Z(b)._lat||null)}))};h.removeAuthTokenListener=function(a){Ma(this.Oa,function(b){return b==a})};</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">h.delete=function(){this.Qa=!0;for(var a=0;a&lt;this.Y.length;a++)this.Y[a].cancel(&quot;app-deleted&quot;);this.Y=[];this.oa&amp;&amp;(a=this.oa,a.B.removeListener(Ki,a.D,this.Bc));this.o&amp;&amp;this.o.unsubscribe(this);return firebase.Promise.resolve()};h.c=function(a){var b=this;this.Y.push(a);zd(a,function(){La(b.Y,a)});return a};h.fetchProvidersForEmail=function(a){return this.c(vg(this.f,a))};h.verifyPasswordResetCode=function(a){return this.checkActionCode(a).then(function(a){return a.data.email})};</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">h.confirmPasswordReset=function(a,b){return this.c(this.f.confirmPasswordReset(a,b).then(function(){}))};h.checkActionCode=function(a){return this.c(this.f.checkActionCode(a).then(function(a){return{data:{email:a.email}}}))};h.applyActionCode=function(a){return this.c(this.f.applyActionCode(a).then(function(){}))};h.sendPasswordResetEmail=function(a){return this.c(this.f.sendPasswordResetEmail(a).then(function(){}))};Eh(Y.prototype,{applyActionCode:{name:&quot;applyActionCode&quot;,a:[T(&quot;code&quot;)]},checkActionCode:{name:&quot;checkActionCode&quot;,a:[T(&quot;code&quot;)]},confirmPasswordReset:{name:&quot;confirmPasswordReset&quot;,a:[T(&quot;code&quot;),T(&quot;newPassword&quot;)]},createUserWithEmailAndPassword:{name:&quot;createUserWithEmailAndPassword&quot;,a:[T(&quot;email&quot;),T(&quot;password&quot;)]},fetchProvidersForEmail:{name:&quot;fetchProvidersForEmail&quot;,a:[T(&quot;email&quot;)]},getRedirectResult:{name:&quot;getRedirectResult&quot;,a:[]},onAuthStateChanged:{name:&quot;onAuthStateChanged&quot;,a:[Ch(U(),yh(),&quot;nextOrObserver&quot;),</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">yh(&quot;opt_error&quot;,!0),yh(&quot;opt_completed&quot;,!0)]},sendPasswordResetEmail:{name:&quot;sendPasswordResetEmail&quot;,a:[T(&quot;email&quot;)]},signInAnonymously:{name:&quot;signInAnonymously&quot;,a:[]},signInWithCredential:{name:&quot;signInWithCredential&quot;,a:[Ah()]},signInWithCustomToken:{name:&quot;signInWithCustomToken&quot;,a:[T(&quot;token&quot;)]},signInWithEmailAndPassword:{name:&quot;signInWithEmailAndPassword&quot;,a:[T(&quot;email&quot;),T(&quot;password&quot;)]},signInWithPopup:{name:&quot;signInWithPopup&quot;,a:[Bh()]},signInWithRedirect:{name:&quot;signInWithRedirect&quot;,a:[Bh()]},signOut:{name:&quot;signOut&quot;,</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">a:[]},toJSON:{name:&quot;toJSON&quot;,a:[T(null,!0)]},verifyPasswordResetCode:{name:&quot;verifyPasswordResetCode&quot;,a:[T(&quot;code&quot;)]}});</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">Eh(W.prototype,{&quot;delete&quot;:{name:&quot;delete&quot;,a:[]},getToken:{name:&quot;getToken&quot;,a:[{name:&quot;opt_forceRefresh&quot;,fa:&quot;a boolean&quot;,optional:!0,ga:function(a){return&quot;boolean&quot;==typeof a}}]},link:{name:&quot;link&quot;,a:[Ah()]},linkWithPopup:{name:&quot;linkWithPopup&quot;,a:[Bh()]},linkWithRedirect:{name:&quot;linkWithRedirect&quot;,a:[Bh()]},reauthenticate:{name:&quot;reauthenticate&quot;,a:[Ah()]},reload:{name:&quot;reload&quot;,a:[]},sendEmailVerification:{name:&quot;sendEmailVerification&quot;,a:[]},toJSON:{name:&quot;toJSON&quot;,a:[T(null,!0)]},unlink:{name:&quot;unlink&quot;,a:[T(&quot;provider&quot;)]},</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">updateEmail:{name:&quot;updateEmail&quot;,a:[T(&quot;email&quot;)]},updatePassword:{name:&quot;updatePassword&quot;,a:[T(&quot;password&quot;)]},updateProfile:{name:&quot;updateProfile&quot;,a:[U(&quot;profile&quot;)]}});Eh(H.prototype,{l:{name:&quot;catch&quot;},then:{name:&quot;then&quot;}});V(eg,&quot;credential&quot;,function(a,b){return new bg(a,b)},[T(&quot;email&quot;),T(&quot;password&quot;)]);Eh(Yf.prototype,{addScope:{name:&quot;addScope&quot;,a:[T(&quot;scope&quot;)]},setCustomParameters:{name:&quot;setCustomParameters&quot;,a:[U(&quot;customOAuthParameters&quot;)]}});V(Yf,&quot;credential&quot;,Yf.credential,[Ch(T(),U(),&quot;token&quot;)]);</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">Eh(Zf.prototype,{addScope:{name:&quot;addScope&quot;,a:[T(&quot;scope&quot;)]},setCustomParameters:{name:&quot;setCustomParameters&quot;,a:[U(&quot;customOAuthParameters&quot;)]}});V(Zf,&quot;credential&quot;,Zf.credential,[Ch(T(),U(),&quot;token&quot;)]);Eh($f.prototype,{addScope:{name:&quot;addScope&quot;,a:[T(&quot;scope&quot;)]},setCustomParameters:{name:&quot;setCustomParameters&quot;,a:[U(&quot;customOAuthParameters&quot;)]}});V($f,&quot;credential&quot;,$f.credential,[Ch(T(),Ch(U(),zh()),&quot;idToken&quot;),Ch(T(),zh(),&quot;accessToken&quot;,!0)]);Eh(ag.prototype,{setCustomParameters:{name:&quot;setCustomParameters&quot;,a:[U(&quot;customOAuthParameters&quot;)]}});</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">V(ag,&quot;credential&quot;,ag.credential,[Ch(T(),U(),&quot;token&quot;),T(&quot;secret&quot;,!0)]);</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">(function(){if(&quot;undefined&quot;!==typeof firebase&amp;&amp;firebase.INTERNAL&amp;&amp;firebase.INTERNAL.registerService){var a={Auth:Y,Error:Q};V(a,&quot;EmailAuthProvider&quot;,eg,[]);V(a,&quot;FacebookAuthProvider&quot;,Yf,[]);V(a,&quot;GithubAuthProvider&quot;,Zf,[]);V(a,&quot;GoogleAuthProvider&quot;,$f,[]);V(a,&quot;TwitterAuthProvider&quot;,ag,[]);firebase.INTERNAL.registerService(&quot;auth&quot;,function(a,c){a=new Y(a);c({INTERNAL:{getToken:q(a.getToken,a),addAuthTokenListener:q(a.addAuthTokenListener,a),removeAuthTokenListener:q(a.removeAuthTokenListener,a)}});return a},</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">a,function(a,c){if(&quot;create&quot;===a)try{c.auth()}catch(d){}});firebase.INTERNAL.extendNamespace({User:W})}else throw Error(&quot;Cannot find the firebase namespace; be sure to include firebase-app.js before this library.&quot;);})();})();</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">(function() {var g,n=this;function p(a){return void 0!==a}function aa(){}function ba(a){a.Wb=function(){return a.bf?a.bf:a.bf=new a}}</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">function ca(a){var b=typeof a;if(&quot;object&quot;==b)if(a){if(a instanceof Array)return&quot;array&quot;;if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(&quot;[object Window]&quot;==c)return&quot;object&quot;;if(&quot;[object Array]&quot;==c||&quot;number&quot;==typeof a.length&amp;&amp;&quot;undefined&quot;!=typeof a.splice&amp;&amp;&quot;undefined&quot;!=typeof a.propertyIsEnumerable&amp;&amp;!a.propertyIsEnumerable(&quot;splice&quot;))return&quot;array&quot;;if(&quot;[object Function]&quot;==c||&quot;undefined&quot;!=typeof a.call&amp;&amp;&quot;undefined&quot;!=typeof a.propertyIsEnumerable&amp;&amp;!a.propertyIsEnumerable(&quot;call&quot;))return&quot;function&quot;}else return&quot;null&quot;;</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">else if(&quot;function&quot;==b&amp;&amp;&quot;undefined&quot;==typeof a.call)return&quot;object&quot;;return b}function da(a){return&quot;array&quot;==ca(a)}function ea(a){var b=ca(a);return&quot;array&quot;==b||&quot;object&quot;==b&amp;&amp;&quot;number&quot;==typeof a.length}function q(a){return&quot;string&quot;==typeof a}function fa(a){return&quot;number&quot;==typeof a}function ga(a){return&quot;function&quot;==ca(a)}function ha(a){var b=typeof a;return&quot;object&quot;==b&amp;&amp;null!=a||&quot;function&quot;==b}function ia(a,b,c){return a.call.apply(a.bind,arguments)}</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">function ja(a,b,c){if(!a)throw Error();if(2&lt;arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function r(a,b,c){r=Function.prototype.bind&amp;&amp;-1!=Function.prototype.bind.toString().indexOf(&quot;native code&quot;)?ia:ja;return r.apply(null,arguments)}</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">function ka(a,b){function c(){}c.prototype=b.prototype;a.Ig=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Eg=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k&lt;arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}};function la(){this.Ya=-1};function ma(){this.Ya=-1;this.Ya=64;this.N=[];this.Wd=[];this.Jf=[];this.zd=[];this.zd[0]=128;for(var a=1;a&lt;this.Ya;++a)this.zd[a]=0;this.Pd=this.ac=0;this.reset()}ka(ma,la);ma.prototype.reset=function(){this.N[0]=1732584193;this.N[1]=4023233417;this.N[2]=2562383102;this.N[3]=271733878;this.N[4]=3285377520;this.Pd=this.ac=0};</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">function na(a,b,c){c||(c=0);var d=a.Jf;if(q(b))for(var e=0;16&gt;e;e++)d[e]=b.charCodeAt(c)&lt;&lt;24|b.charCodeAt(c+1)&lt;&lt;16|b.charCodeAt(c+2)&lt;&lt;8|b.charCodeAt(c+3),c+=4;else for(e=0;16&gt;e;e++)d[e]=b[c]&lt;&lt;24|b[c+1]&lt;&lt;16|b[c+2]&lt;&lt;8|b[c+3],c+=4;for(e=16;80&gt;e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f&lt;&lt;1|f&gt;&gt;&gt;31)&amp;4294967295}b=a.N[0];c=a.N[1];for(var h=a.N[2],k=a.N[3],m=a.N[4],l,e=0;80&gt;e;e++)40&gt;e?20&gt;e?(f=k^c&amp;(h^k),l=1518500249):(f=c^h^k,l=1859775393):60&gt;e?(f=c&amp;h|k&amp;(c|h),l=2400959708):(f=c^h^k,l=3395469782),f=(b&lt;&lt;</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">5|b&gt;&gt;&gt;27)+f+m+l+d[e]&amp;4294967295,m=k,k=h,h=(c&lt;&lt;30|c&gt;&gt;&gt;2)&amp;4294967295,c=b,b=f;a.N[0]=a.N[0]+b&amp;4294967295;a.N[1]=a.N[1]+c&amp;4294967295;a.N[2]=a.N[2]+h&amp;4294967295;a.N[3]=a.N[3]+k&amp;4294967295;a.N[4]=a.N[4]+m&amp;4294967295}</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">ma.prototype.update=function(a,b){if(null!=a){p(b)||(b=a.length);for(var c=b-this.Ya,d=0,e=this.Wd,f=this.ac;d&lt;b;){if(0==f)for(;d&lt;=c;)na(this,a,d),d+=this.Ya;if(q(a))for(;d&lt;b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Ya){na(this,e);f=0;break}}else for(;d&lt;b;)if(e[f]=a[d],++f,++d,f==this.Ya){na(this,e);f=0;break}}this.ac=f;this.Pd+=b}};function t(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function oa(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function pa(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function qa(a){var b=0,c;for(c in a)b++;return b}function ra(a){for(var b in a)return b}function sa(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function ta(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function ua(a,b){for(var c in a)if(a[c]==b)return!0;return!1}</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">function va(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function wa(a,b){var c=va(a,b,void 0);return c&amp;&amp;a[c]}function xa(a){for(var b in a)return!1;return!0}function ya(a){var b={},c;for(c in a)b[c]=a[c];return b};function za(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\[&quot;\\\/bfnrtu]/g,&quot;@&quot;).replace(/&quot;[^&quot;\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*&quot;|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,&quot;]&quot;).replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,&quot;&quot;)))try{return eval(&quot;(&quot;+a+&quot;)&quot;)}catch(b){}throw Error(&quot;Invalid JSON string: &quot;+a);}function Aa(){this.Fd=void 0}</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">function Ba(a,b,c){switch(typeof b){case &quot;string&quot;:Ca(b,c);break;case &quot;number&quot;:c.push(isFinite(b)&amp;&amp;!isNaN(b)?b:&quot;null&quot;);break;case &quot;boolean&quot;:c.push(b);break;case &quot;undefined&quot;:c.push(&quot;null&quot;);break;case &quot;object&quot;:if(null==b){c.push(&quot;null&quot;);break}if(da(b)){var d=b.length;c.push(&quot;[&quot;);for(var e=&quot;&quot;,f=0;f&lt;d;f++)c.push(e),e=b[f],Ba(a,a.Fd?a.Fd.call(b,String(f),e):e,c),e=&quot;,&quot;;c.push(&quot;]&quot;);break}c.push(&quot;{&quot;);d=&quot;&quot;;for(f in b)Object.prototype.hasOwnProperty.call(b,f)&amp;&amp;(e=b[f],&quot;function&quot;!=typeof e&amp;&amp;(c.push(d),Ca(f,c),</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">c.push(&quot;:&quot;),Ba(a,a.Fd?a.Fd.call(b,f,e):e,c),d=&quot;,&quot;));c.push(&quot;}&quot;);break;case &quot;function&quot;:break;default:throw Error(&quot;Unknown type: &quot;+typeof b);}}var Da={&#39;&quot;&#39;:&#39;\\&quot;&#39;,&quot;\\&quot;:&quot;\\\\&quot;,&quot;/&quot;:&quot;\\/&quot;,&quot;\b&quot;:&quot;\\b&quot;,&quot;\f&quot;:&quot;\\f&quot;,&quot;\n&quot;:&quot;\\n&quot;,&quot;\r&quot;:&quot;\\r&quot;,&quot;\t&quot;:&quot;\\t&quot;,&quot;\x0B&quot;:&quot;\\u000b&quot;},Ea=/\uffff/.test(&quot;\uffff&quot;)?/[\\\&quot;\x00-\x1f\x7f-\uffff]/g:/[\\\&quot;\x00-\x1f\x7f-\xff]/g;</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">function Ca(a,b){b.push(&#39;&quot;&#39;,a.replace(Ea,function(a){if(a in Da)return Da[a];var b=a.charCodeAt(0),e=&quot;\\u&quot;;16&gt;b?e+=&quot;000&quot;:256&gt;b?e+=&quot;00&quot;:4096&gt;b&amp;&amp;(e+=&quot;0&quot;);return Da[a]=e+b.toString(16)}),&#39;&quot;&#39;)};var v;a:{var Fa=n.navigator;if(Fa){var Ga=Fa.userAgent;if(Ga){v=Ga;break a}}v=&quot;&quot;};function Ha(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ha);else{var b=Error().stack;b&amp;&amp;(this.stack=b)}a&amp;&amp;(this.message=String(a))}ka(Ha,Error);Ha.prototype.name=&quot;CustomError&quot;;var w=Array.prototype,Ia=w.indexOf?function(a,b,c){return w.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0&gt;c?Math.max(0,a.length+c):c;if(q(a))return q(b)&amp;&amp;1==b.length?a.indexOf(b,c):-1;for(;c&lt;a.length;c++)if(c in a&amp;&amp;a[c]===b)return c;return-1},Ja=w.forEach?function(a,b,c){w.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(&quot;&quot;):a,f=0;f&lt;d;f++)f in e&amp;&amp;b.call(c,e[f],f,a)},Ka=w.filter?function(a,b,c){return w.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=q(a)?</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">a.split(&quot;&quot;):a,k=0;k&lt;d;k++)if(k in h){var m=h[k];b.call(c,m,k,a)&amp;&amp;(e[f++]=m)}return e},La=w.map?function(a,b,c){return w.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=q(a)?a.split(&quot;&quot;):a,h=0;h&lt;d;h++)h in f&amp;&amp;(e[h]=b.call(c,f[h],h,a));return e},Ma=w.reduce?function(a,b,c,d){for(var e=[],f=1,h=arguments.length;f&lt;h;f++)e.push(arguments[f]);d&amp;&amp;(e[0]=r(b,d));return w.reduce.apply(a,e)}:function(a,b,c,d){var e=c;Ja(a,function(c,h){e=b.call(d,e,c,h,a)});return e},Na=w.every?function(a,b,</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">c){return w.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(&quot;&quot;):a,f=0;f&lt;d;f++)if(f in e&amp;&amp;!b.call(c,e[f],f,a))return!1;return!0};function Oa(a,b){var c=Pa(a,b,void 0);return 0&gt;c?null:q(a)?a.charAt(c):a[c]}function Pa(a,b,c){for(var d=a.length,e=q(a)?a.split(&quot;&quot;):a,f=0;f&lt;d;f++)if(f in e&amp;&amp;b.call(c,e[f],f,a))return f;return-1}function Qa(a,b){var c=Ia(a,b);0&lt;=c&amp;&amp;w.splice.call(a,c,1)}function Ra(a,b,c){return 2&gt;=arguments.length?w.slice.call(a,b):w.slice.call(a,b,c)}</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">function Sa(a,b){a.sort(b||Ta)}function Ta(a,b){return a&gt;b?1:a&lt;b?-1:0};var Ua=-1!=v.indexOf(&quot;Opera&quot;)||-1!=v.indexOf(&quot;OPR&quot;),Va=-1!=v.indexOf(&quot;Trident&quot;)||-1!=v.indexOf(&quot;MSIE&quot;),Wa=-1!=v.indexOf(&quot;Gecko&quot;)&amp;&amp;-1==v.toLowerCase().indexOf(&quot;webkit&quot;)&amp;&amp;!(-1!=v.indexOf(&quot;Trident&quot;)||-1!=v.indexOf(&quot;MSIE&quot;)),Xa=-1!=v.toLowerCase().indexOf(&quot;webkit&quot;);</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">(function(){var a=&quot;&quot;,b;if(Ua&amp;&amp;n.opera)return a=n.opera.version,ga(a)?a():a;Wa?b=/rv\:([^\);]+)(\)|;)/:Va?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Xa&amp;&amp;(b=/WebKit\/(\S+)/);b&amp;&amp;(a=(a=b.exec(v))?a[1]:&quot;&quot;);return Va&amp;&amp;(b=(b=n.document)?b.documentMode:void 0,b&gt;parseFloat(a))?String(b):a})();var Ya=null,Za=null,$a=null;function ab(a,b){if(!ea(a))throw Error(&quot;encodeByteArray takes an array as a parameter&quot;);bb();for(var c=b?Za:Ya,d=[],e=0;e&lt;a.length;e+=3){var f=a[e],h=e+1&lt;a.length,k=h?a[e+1]:0,m=e+2&lt;a.length,l=m?a[e+2]:0,u=f&gt;&gt;2,f=(f&amp;3)&lt;&lt;4|k&gt;&gt;4,k=(k&amp;15)&lt;&lt;2|l&gt;&gt;6,l=l&amp;63;m||(l=64,h||(k=64));d.push(c[u],c[f],c[k],c[l])}return d.join(&quot;&quot;)}</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">function bb(){if(!Ya){Ya={};Za={};$a={};for(var a=0;65&gt;a;a++)Ya[a]=&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=&quot;.charAt(a),Za[a]=&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.&quot;.charAt(a),$a[Za[a]]=a,62&lt;=a&amp;&amp;($a[&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=&quot;.charAt(a)]=a)}};function cb(a){n.setTimeout(function(){throw a;},0)}var db;</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">function eb(){var a=n.MessageChannel;&quot;undefined&quot;===typeof a&amp;&amp;&quot;undefined&quot;!==typeof window&amp;&amp;window.postMessage&amp;&amp;window.addEventListener&amp;&amp;-1==v.indexOf(&quot;Presto&quot;)&amp;&amp;(a=function(){var a=document.createElement(&quot;iframe&quot;);a.style.display=&quot;none&quot;;a.src=&quot;&quot;;document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write(&quot;&quot;);a.close();var c=&quot;callImmediate&quot;+Math.random(),d=&quot;file:&quot;==b.location.protocol?&quot;*&quot;:b.location.protocol+&quot;//&quot;+b.location.host,a=r(function(a){if((&quot;*&quot;==d||a.origin==</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">d)&amp;&amp;a.data==c)this.port1.onmessage()},this);b.addEventListener(&quot;message&quot;,a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if(&quot;undefined&quot;!==typeof a&amp;&amp;-1==v.indexOf(&quot;Trident&quot;)&amp;&amp;-1==v.indexOf(&quot;MSIE&quot;)){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.Le;c.Le=null;a()}};return function(a){d.next={Le:a};d=d.next;b.port2.postMessage(0)}}return&quot;undefined&quot;!==typeof document&amp;&amp;&quot;onreadystatechange&quot;in document.createElement(&quot;script&quot;)?function(a){var b=</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">document.createElement(&quot;script&quot;);b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}};function fb(a,b){gb||hb();ib||(gb(),ib=!0);jb.push(new kb(a,b))}var gb;function hb(){if(n.Promise&amp;&amp;n.Promise.resolve){var a=n.Promise.resolve();gb=function(){a.then(lb)}}else gb=function(){var a=lb;!ga(n.setImmediate)||n.Window&amp;&amp;n.Window.prototype&amp;&amp;n.Window.prototype.setImmediate==n.setImmediate?(db||(db=eb()),db(a)):n.setImmediate(a)}}var ib=!1,jb=[];[].push(function(){ib=!1;jb=[]});</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">function lb(){for(;jb.length;){var a=jb;jb=[];for(var b=0;b&lt;a.length;b++){var c=a[b];try{c.Wf.call(c.scope)}catch(d){cb(d)}}}ib=!1}function kb(a,b){this.Wf=a;this.scope=b};function mb(a,b){this.L=nb;this.uf=void 0;this.Ca=this.Ha=null;this.jd=this.be=!1;if(a==ob)pb(this,qb,b);else try{var c=this;a.call(b,function(a){pb(c,qb,a)},function(a){if(!(a instanceof rb))try{if(a instanceof Error)throw a;throw Error(&quot;Promise rejected.&quot;);}catch(b){}pb(c,sb,a)})}catch(d){pb(this,sb,d)}}var nb=0,qb=2,sb=3;function ob(){}mb.prototype.then=function(a,b,c){return tb(this,ga(a)?a:null,ga(b)?b:null,c)};mb.prototype.then=mb.prototype.then;mb.prototype.$goog_Thenable=!0;g=mb.prototype;</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">g.Ag=function(a,b){return tb(this,null,a,b)};g.cancel=function(a){this.L==nb&amp;&amp;fb(function(){var b=new rb(a);ub(this,b)},this)};function ub(a,b){if(a.L==nb)if(a.Ha){var c=a.Ha;if(c.Ca){for(var d=0,e=-1,f=0,h;h=c.Ca[f];f++)if(h=h.k)if(d++,h==a&amp;&amp;(e=f),0&lt;=e&amp;&amp;1&lt;d)break;0&lt;=e&amp;&amp;(c.L==nb&amp;&amp;1==d?ub(c,b):(d=c.Ca.splice(e,1)[0],vb(c,d,sb,b)))}a.Ha=null}else pb(a,sb,b)}function wb(a,b){a.Ca&amp;&amp;a.Ca.length||a.L!=qb&amp;&amp;a.L!=sb||xb(a);a.Ca||(a.Ca=[]);a.Ca.push(b)}</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">function tb(a,b,c,d){var e={k:null,hf:null,kf:null};e.k=new mb(function(a,h){e.hf=b?function(c){try{var e=b.call(d,c);a(e)}catch(l){h(l)}}:a;e.kf=c?function(b){try{var e=c.call(d,b);!p(e)&amp;&amp;b instanceof rb?h(b):a(e)}catch(l){h(l)}}:h});e.k.Ha=a;wb(a,e);return e.k}g.Cf=function(a){this.L=nb;pb(this,qb,a)};g.Df=function(a){this.L=nb;pb(this,sb,a)};</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">function pb(a,b,c){if(a.L==nb){if(a==c)b=sb,c=new TypeError(&quot;Promise cannot resolve to itself&quot;);else{var d;if(c)try{d=!!c.$goog_Thenable}catch(e){d=!1}else d=!1;if(d){a.L=1;c.then(a.Cf,a.Df,a);return}if(ha(c))try{var f=c.then;if(ga(f)){yb(a,c,f);return}}catch(h){b=sb,c=h}}a.uf=c;a.L=b;a.Ha=null;xb(a);b!=sb||c instanceof rb||zb(a,c)}}function yb(a,b,c){function d(b){f||(f=!0,a.Df(b))}function e(b){f||(f=!0,a.Cf(b))}a.L=1;var f=!1;try{c.call(b,e,d)}catch(h){d(h)}}</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">function xb(a){a.be||(a.be=!0,fb(a.Uf,a))}g.Uf=function(){for(;this.Ca&amp;&amp;this.Ca.length;){var a=this.Ca;this.Ca=null;for(var b=0;b&lt;a.length;b++)vb(this,a[b],this.L,this.uf)}this.be=!1};function vb(a,b,c,d){if(c==qb)b.hf(d);else{if(b.k)for(;a&amp;&amp;a.jd;a=a.Ha)a.jd=!1;b.kf(d)}}function zb(a,b){a.jd=!0;fb(function(){a.jd&amp;&amp;Ab.call(null,b)})}var Ab=cb;function rb(a){Ha.call(this,a)}ka(rb,Ha);rb.prototype.name=&quot;cancel&quot;;function Bb(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function x(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function Cb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&amp;&amp;b(c,a[c])};function y(a,b,c,d){var e;d&lt;b?e=&quot;at least &quot;+b:d&gt;c&amp;&amp;(e=0===c?&quot;none&quot;:&quot;no more than &quot;+c);if(e)throw Error(a+&quot; failed: Was called with &quot;+d+(1===d?&quot; argument.&quot;:&quot; arguments.&quot;)+&quot; Expects &quot;+e+&quot;.&quot;);}function Db(a,b,c){var d=&quot;&quot;;switch(b){case 1:d=c?&quot;first&quot;:&quot;First&quot;;break;case 2:d=c?&quot;second&quot;:&quot;Second&quot;;break;case 3:d=c?&quot;third&quot;:&quot;Third&quot;;break;case 4:d=c?&quot;fourth&quot;:&quot;Fourth&quot;;break;default:throw Error(&quot;errorPrefix called with argumentNumber &gt; 4.  Need to update it?&quot;);}return a=a+&quot; failed: &quot;+(d+&quot; argument &quot;)}</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">function A(a,b,c,d){if((!d||p(c))&amp;&amp;!ga(c))throw Error(Db(a,b,d)+&quot;must be a valid function.&quot;);}function Eb(a,b,c){if(p(c)&amp;&amp;(!ha(c)||null===c))throw Error(Db(a,b,!0)+&quot;must be a valid context object.&quot;);};function Fb(a){var b=[];Cb(a,function(a,d){da(d)?Ja(d,function(d){b.push(encodeURIComponent(a)+&quot;=&quot;+encodeURIComponent(d))}):b.push(encodeURIComponent(a)+&quot;=&quot;+encodeURIComponent(d))});return b.length?&quot;&amp;&quot;+b.join(&quot;&amp;&quot;):&quot;&quot;};var Gb=n.Promise||mb;mb.prototype[&quot;catch&quot;]=mb.prototype.Ag;function Hb(){var a=this;this.reject=this.resolve=null;this.sa=new Gb(function(b,c){a.resolve=b;a.reject=c})}function Ib(a,b){return function(c,d){c?a.reject(c):a.resolve(d);ga(b)&amp;&amp;(Jb(a.sa),1===b.length?b(c):b(c,d))}}function Jb(a){a.then(void 0,aa)};function Kb(a,b){if(!a)throw Lb(b);}function Lb(a){return Error(&quot;Firebase Database (&quot;+firebase.SDK_VERSION+&quot;) INTERNAL ASSERT FAILED: &quot;+a)};function Mb(a){for(var b=[],c=0,d=0;d&lt;a.length;d++){var e=a.charCodeAt(d);55296&lt;=e&amp;&amp;56319&gt;=e&amp;&amp;(e-=55296,d++,Kb(d&lt;a.length,&quot;Surrogate pair missing trail surrogate.&quot;),e=65536+(e&lt;&lt;10)+(a.charCodeAt(d)-56320));128&gt;e?b[c++]=e:(2048&gt;e?b[c++]=e&gt;&gt;6|192:(65536&gt;e?b[c++]=e&gt;&gt;12|224:(b[c++]=e&gt;&gt;18|240,b[c++]=e&gt;&gt;12&amp;63|128),b[c++]=e&gt;&gt;6&amp;63|128),b[c++]=e&amp;63|128)}return b}function Nb(a){for(var b=0,c=0;c&lt;a.length;c++){var d=a.charCodeAt(c);128&gt;d?b++:2048&gt;d?b+=2:55296&lt;=d&amp;&amp;56319&gt;=d?(b+=4,c++):b+=3}return b};function Ob(a){return&quot;undefined&quot;!==typeof JSON&amp;&amp;p(JSON.parse)?JSON.parse(a):za(a)}function B(a){if(&quot;undefined&quot;!==typeof JSON&amp;&amp;p(JSON.stringify))a=JSON.stringify(a);else{var b=[];Ba(new Aa,a,b);a=b.join(&quot;&quot;)}return a};function Pb(a,b){this.committed=a;this.snapshot=b};function Qb(){return&quot;undefined&quot;!==typeof window&amp;&amp;!!(window.cordova||window.phonegap||window.PhoneGap)&amp;&amp;/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(&quot;undefined&quot;!==typeof navigator&amp;&amp;&quot;string&quot;===typeof navigator.userAgent?navigator.userAgent:&quot;&quot;)};function Rb(a){this.te=a;this.Bd=[];this.Rb=0;this.Yd=-1;this.Gb=null}function Sb(a,b,c){a.Yd=b;a.Gb=c;a.Yd&lt;a.Rb&amp;&amp;(a.Gb(),a.Gb=null)}function Tb(a,b,c){for(a.Bd[b]=c;a.Bd[a.Rb];){var d=a.Bd[a.Rb];delete a.Bd[a.Rb];for(var e=0;e&lt;d.length;++e)if(d[e]){var f=a;Ub(function(){f.te(d[e])})}if(a.Rb===a.Yd){a.Gb&amp;&amp;(clearTimeout(a.Gb),a.Gb(),a.Gb=null);break}a.Rb++}};function Vb(){this.qc={}}Vb.prototype.set=function(a,b){null==b?delete this.qc[a]:this.qc[a]=b};Vb.prototype.get=function(a){return Bb(this.qc,a)?this.qc[a]:null};Vb.prototype.remove=function(a){delete this.qc[a]};Vb.prototype.cf=!0;function Wb(a){this.vc=a;this.Cd=&quot;firebase:&quot;}g=Wb.prototype;g.set=function(a,b){null==b?this.vc.removeItem(this.Cd+a):this.vc.setItem(this.Cd+a,B(b))};g.get=function(a){a=this.vc.getItem(this.Cd+a);return null==a?null:Ob(a)};g.remove=function(a){this.vc.removeItem(this.Cd+a)};g.cf=!1;g.toString=function(){return this.vc.toString()};function Xb(a){try{if(&quot;undefined&quot;!==typeof window&amp;&amp;&quot;undefined&quot;!==typeof window[a]){var b=window[a];b.setItem(&quot;firebase:sentinel&quot;,&quot;cache&quot;);b.removeItem(&quot;firebase:sentinel&quot;);return new Wb(b)}}catch(c){}return new Vb}var Yb=Xb(&quot;localStorage&quot;),Zb=Xb(&quot;sessionStorage&quot;);function $b(a,b,c){this.type=ac;this.source=a;this.path=b;this.Ja=c}$b.prototype.Nc=function(a){return this.path.e()?new $b(this.source,C,this.Ja.R(a)):new $b(this.source,D(this.path),this.Ja)};$b.prototype.toString=function(){return&quot;Operation(&quot;+this.path+&quot;: &quot;+this.source.toString()+&quot; overwrite: &quot;+this.Ja.toString()+&quot;)&quot;};function bc(a,b){this.type=cc;this.source=a;this.path=b}bc.prototype.Nc=function(){return this.path.e()?new bc(this.source,C):new bc(this.source,D(this.path))};bc.prototype.toString=function(){return&quot;Operation(&quot;+this.path+&quot;: &quot;+this.source.toString()+&quot; listen_complete)&quot;};function dc(a){this.He=a}dc.prototype.getToken=function(a){return this.He.INTERNAL.getToken(a).then(null,function(a){return a&amp;&amp;&quot;auth/token-not-initialized&quot;===a.code?(E(&quot;Got auth/token-not-initialized error.  Treating as null token.&quot;),null):Promise.reject(a)})};function ec(a,b){a.He.INTERNAL.addAuthTokenListener(b)};function fc(){this.Jd=F}fc.prototype.j=function(a){return this.Jd.Q(a)};fc.prototype.toString=function(){return this.Jd.toString()};function gc(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(&quot;.&quot;)+1);this.Sc=b;this.pe=c;this.Cg=d;this.nf=e||&quot;&quot;;this.bb=Yb.get(&quot;host:&quot;+a)||this.host}function hc(a,b){b!==a.bb&amp;&amp;(a.bb=b,&quot;s-&quot;===a.bb.substr(0,2)&amp;&amp;Yb.set(&quot;host:&quot;+a.host,a.bb))}</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">function ic(a,b,c){H(&quot;string&quot;===typeof b,&quot;typeof type must == string&quot;);H(&quot;object&quot;===typeof c,&quot;typeof params must == object&quot;);if(&quot;websocket&quot;===b)b=(a.Sc?&quot;wss://&quot;:&quot;ws://&quot;)+a.bb+&quot;/.ws?&quot;;else if(&quot;long_polling&quot;===b)b=(a.Sc?&quot;https://&quot;:&quot;http://&quot;)+a.bb+&quot;/.lp?&quot;;else throw Error(&quot;Unknown connection type: &quot;+b);a.host!==a.bb&amp;&amp;(c.ns=a.pe);var d=[];t(c,function(a,b){d.push(b+&quot;=&quot;+a)});return b+d.join(&quot;&amp;&quot;)}</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">gc.prototype.toString=function(){var a=(this.Sc?&quot;https://&quot;:&quot;http://&quot;)+this.host;this.nf&amp;&amp;(a+=&quot;&lt;&quot;+this.nf+&quot;&gt;&quot;);return a};function jc(){this.uc={}}function kc(a,b,c){p(c)||(c=1);Bb(a.uc,b)||(a.uc[b]=0);a.uc[b]+=c}jc.prototype.get=function(){return ya(this.uc)};function lc(a){this.Nf=a;this.rd=null}lc.prototype.get=function(){var a=this.Nf.get(),b=ya(a);if(this.rd)for(var c in this.rd)b[c]-=this.rd[c];this.rd=a;return b};function mc(){this.wb=[]}function nc(a,b){for(var c=null,d=0;d&lt;b.length;d++){var e=b[d],f=e.Zb();null===c||f.$(c.Zb())||(a.wb.push(c),c=null);null===c&amp;&amp;(c=new oc(f));c.add(e)}c&amp;&amp;a.wb.push(c)}function pc(a,b,c){nc(a,c);qc(a,function(a){return a.$(b)})}function rc(a,b,c){nc(a,c);qc(a,function(a){return a.contains(b)||b.contains(a)})}</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">function qc(a,b){for(var c=!0,d=0;d&lt;a.wb.length;d++){var e=a.wb[d];if(e)if(e=e.Zb(),b(e)){for(var e=a.wb[d],f=0;f&lt;e.hd.length;f++){var h=e.hd[f];if(null!==h){e.hd[f]=null;var k=h.Ub();sc&amp;&amp;E(&quot;event: &quot;+h.toString());Ub(k)}}a.wb[d]=null}else c=!1}c&amp;&amp;(a.wb=[])}function oc(a){this.ra=a;this.hd=[]}oc.prototype.add=function(a){this.hd.push(a)};oc.prototype.Zb=function(){return this.ra};function tc(a,b,c,d){this.ae=b;this.Md=c;this.Dd=d;this.gd=a}tc.prototype.Zb=function(){var a=this.Md.xb();return&quot;value&quot;===this.gd?a.path:a.getParent().path};tc.prototype.ge=function(){return this.gd};tc.prototype.Ub=function(){return this.ae.Ub(this)};tc.prototype.toString=function(){return this.Zb().toString()+&quot;:&quot;+this.gd+&quot;:&quot;+B(this.Md.Ue())};function uc(a,b,c){this.ae=a;this.error=b;this.path=c}uc.prototype.Zb=function(){return this.path};uc.prototype.ge=function(){return&quot;cancel&quot;};</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">uc.prototype.Ub=function(){return this.ae.Ub(this)};uc.prototype.toString=function(){return this.path.toString()+&quot;:cancel&quot;};function vc(){}vc.prototype.Xe=function(){return null};vc.prototype.fe=function(){return null};var wc=new vc;function xc(a,b,c){this.Gf=a;this.Na=b;this.yd=c}xc.prototype.Xe=function(a){var b=this.Na.O;if(yc(b,a))return b.j().R(a);b=null!=this.yd?new zc(this.yd,!0,!1):this.Na.w();return this.Gf.rc(a,b)};xc.prototype.fe=function(a,b,c){var d=null!=this.yd?this.yd:Ac(this.Na);a=this.Gf.Xd(d,b,1,c,a);return 0===a.length?null:a[0]};function I(a,b,c,d){this.type=a;this.Ma=b;this.Za=c;this.qe=d;this.Dd=void 0}function Bc(a){return new I(Cc,a)}var Cc=&quot;value&quot;;function zc(a,b,c){this.A=a;this.ea=b;this.Tb=c}function Dc(a){return a.ea}function Ec(a){return a.Tb}function Fc(a,b){return b.e()?a.ea&amp;&amp;!a.Tb:yc(a,J(b))}function yc(a,b){return a.ea&amp;&amp;!a.Tb||a.A.Fa(b)}zc.prototype.j=function(){return this.A};function Gc(a,b){return Hc(a.name,b.name)}function Ic(a,b){return Hc(a,b)};function K(a,b){this.name=a;this.S=b}function Jc(a,b){return new K(a,b)};function Kc(a,b){return a&amp;&amp;&quot;object&quot;===typeof a?(H(&quot;.sv&quot;in a,&quot;Unexpected leaf node or priority contents&quot;),b[a[&quot;.sv&quot;]]):a}function Lc(a,b){var c=new Mc;Nc(a,new L(&quot;&quot;),function(a,e){Oc(c,a,Pc(e,b))});return c}function Pc(a,b){var c=a.C().H(),c=Kc(c,b),d;if(a.J()){var e=Kc(a.Ea(),b);return e!==a.Ea()||c!==a.C().H()?new Qc(e,M(c)):a}d=a;c!==a.C().H()&amp;&amp;(d=d.ga(new Qc(c)));a.P(N,function(a,c){var e=Pc(c,b);e!==c&amp;&amp;(d=d.U(a,e))});return d};var Rc=function(){var a=1;return function(){return a++}}(),H=Kb,Sc=Lb;</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">function Tc(a){try{var b;bb();for(var c=$a,d=[],e=0;e&lt;a.length;){var f=c[a.charAt(e++)],h=e&lt;a.length?c[a.charAt(e)]:0;++e;var k=e&lt;a.length?c[a.charAt(e)]:64;++e;var m=e&lt;a.length?c[a.charAt(e)]:64;++e;if(null==f||null==h||null==k||null==m)throw Error();d.push(f&lt;&lt;2|h&gt;&gt;4);64!=k&amp;&amp;(d.push(h&lt;&lt;4&amp;240|k&gt;&gt;2),64!=m&amp;&amp;d.push(k&lt;&lt;6&amp;192|m))}if(8192&gt;d.length)b=String.fromCharCode.apply(null,d);else{a=&quot;&quot;;for(c=0;c&lt;d.length;c+=8192)a+=String.fromCharCode.apply(null,Ra(d,c,c+8192));b=a}return b}catch(l){E(&quot;base64Decode failed: &quot;,</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">l)}return null}function Uc(a){var b=Mb(a);a=new ma;a.update(b);var b=[],c=8*a.Pd;56&gt;a.ac?a.update(a.zd,56-a.ac):a.update(a.zd,a.Ya-(a.ac-56));for(var d=a.Ya-1;56&lt;=d;d--)a.Wd[d]=c&amp;255,c/=256;na(a,a.Wd);for(d=c=0;5&gt;d;d++)for(var e=24;0&lt;=e;e-=8)b[c]=a.N[d]&gt;&gt;e&amp;255,++c;return ab(b)}function Vc(a){for(var b=&quot;&quot;,c=0;c&lt;arguments.length;c++)b=ea(arguments[c])?b+Vc.apply(null,arguments[c]):&quot;object&quot;===typeof arguments[c]?b+B(arguments[c]):b+arguments[c],b+=&quot; &quot;;return b}var sc=null,Wc=!0;</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">function Xc(a,b){Kb(!b||!0===a||!1===a,&quot;Can&#39;t turn on custom loggers persistently.&quot;);!0===a?(&quot;undefined&quot;!==typeof console&amp;&amp;(&quot;function&quot;===typeof console.log?sc=r(console.log,console):&quot;object&quot;===typeof console.log&amp;&amp;(sc=function(a){console.log(a)})),b&amp;&amp;Zb.set(&quot;logging_enabled&quot;,!0)):ga(a)?sc=a:(sc=null,Zb.remove(&quot;logging_enabled&quot;))}function E(a){!0===Wc&amp;&amp;(Wc=!1,null===sc&amp;&amp;!0===Zb.get(&quot;logging_enabled&quot;)&amp;&amp;Xc(!0));if(sc){var b=Vc.apply(null,arguments);sc(b)}}</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">function Yc(a){return function(){E(a,arguments)}}function Zc(a){if(&quot;undefined&quot;!==typeof console){var b=&quot;FIREBASE INTERNAL ERROR: &quot;+Vc.apply(null,arguments);&quot;undefined&quot;!==typeof console.error?console.error(b):console.log(b)}}function $c(a){var b=Vc.apply(null,arguments);throw Error(&quot;FIREBASE FATAL ERROR: &quot;+b);}function O(a){if(&quot;undefined&quot;!==typeof console){var b=&quot;FIREBASE WARNING: &quot;+Vc.apply(null,arguments);&quot;undefined&quot;!==typeof console.warn?console.warn(b):console.log(b)}}</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">function ad(a){var b,c,d,e,f,h=a;f=c=a=b=&quot;&quot;;d=!0;e=&quot;https&quot;;if(q(h)){var k=h.indexOf(&quot;//&quot;);0&lt;=k&amp;&amp;(e=h.substring(0,k-1),h=h.substring(k+2));k=h.indexOf(&quot;/&quot;);-1===k&amp;&amp;(k=h.length);b=h.substring(0,k);f=&quot;&quot;;h=h.substring(k).split(&quot;/&quot;);for(k=0;k&lt;h.length;k++)if(0&lt;h[k].length){var m=h[k];try{m=decodeURIComponent(m.replace(/\+/g,&quot; &quot;))}catch(l){}f+=&quot;/&quot;+m}h=b.split(&quot;.&quot;);3===h.length?(a=h[1],c=h[0].toLowerCase()):2===h.length&amp;&amp;(a=h[0]);k=b.indexOf(&quot;:&quot;);0&lt;=k&amp;&amp;(d=&quot;https&quot;===e||&quot;wss&quot;===e)}&quot;firebase&quot;===a&amp;&amp;$c(b+&quot; is no longer supported. Please use &lt;YOUR FIREBASE&gt;.firebaseio.com instead&quot;);</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">c&amp;&amp;&quot;undefined&quot;!=c||$c(&quot;Cannot parse Firebase url. Please use https://&lt;YOUR FIREBASE&gt;.firebaseio.com&quot;);d||&quot;undefined&quot;!==typeof window&amp;&amp;window.location&amp;&amp;window.location.protocol&amp;&amp;-1!==window.location.protocol.indexOf(&quot;https:&quot;)&amp;&amp;O(&quot;Insecure Firebase access from a secure page. Please use https in calls to new Firebase().&quot;);return{kc:new gc(b,d,c,&quot;ws&quot;===e||&quot;wss&quot;===e),path:new L(f)}}function bd(a){return fa(a)&amp;&amp;(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">function cd(a){if(&quot;complete&quot;===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener(&quot;DOMContentLoaded&quot;,c,!1),window.addEventListener(&quot;load&quot;,c,!1)):document.attachEvent&amp;&amp;(document.attachEvent(&quot;onreadystatechange&quot;,function(){&quot;complete&quot;===document.readyState&amp;&amp;c()}),window.attachEvent(&quot;onload&quot;,c))}}</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">function Hc(a,b){if(a===b)return 0;if(&quot;[MIN_NAME]&quot;===a||&quot;[MAX_NAME]&quot;===b)return-1;if(&quot;[MIN_NAME]&quot;===b||&quot;[MAX_NAME]&quot;===a)return 1;var c=dd(a),d=dd(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a&lt;b?-1:1}function ed(a,b){if(b&amp;&amp;a in b)return b[a];throw Error(&quot;Missing required key (&quot;+a+&quot;) in object: &quot;+B(b));}</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">function fd(a){if(&quot;object&quot;!==typeof a||null===a)return B(a);var b=[],c;for(c in a)b.push(c);b.sort();c=&quot;{&quot;;for(var d=0;d&lt;b.length;d++)0!==d&amp;&amp;(c+=&quot;,&quot;),c+=B(b[d]),c+=&quot;:&quot;,c+=fd(a[b[d]]);return c+&quot;}&quot;}function gd(a,b){if(a.length&lt;=b)return[a];for(var c=[],d=0;d&lt;a.length;d+=b)d+b&gt;a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function hd(a,b){if(da(a))for(var c=0;c&lt;a.length;++c)b(c,a[c]);else t(a,b)}</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">function id(a){H(!bd(a),&quot;Invalid JSON number&quot;);var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0&gt;a,a=Math.abs(a),a&gt;=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;--a)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;--a)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join(&quot;&quot;);c=&quot;&quot;;for(a=0;64&gt;a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&amp;&amp;</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">(d=&quot;0&quot;+d),c+=d;return c.toLowerCase()}var jd=/^-?\d{1,10}$/;function dd(a){return jd.test(a)&amp;&amp;(a=Number(a),-2147483648&lt;=a&amp;&amp;2147483647&gt;=a)?a:null}function Ub(a){try{a()}catch(b){setTimeout(function(){O(&quot;Exception was thrown by user callback.&quot;,b.stack||&quot;&quot;);throw b;},Math.floor(0))}}function kd(a,b,c){Object.defineProperty(a,b,{get:c})}function ld(a,b){var c=setTimeout(a,b);&quot;object&quot;===typeof c&amp;&amp;c.unref&amp;&amp;c.unref();return c};function md(a){var b={},c={},d={},e=&quot;&quot;;try{var f=a.split(&quot;.&quot;),b=Ob(Tc(f[0])||&quot;&quot;),c=Ob(Tc(f[1])||&quot;&quot;),e=f[2],d=c.d||{};delete c.d}catch(h){}return{Fg:b,Me:c,data:d,xg:e}}function nd(a){a=md(a);var b=a.Me;return!!a.xg&amp;&amp;!!b&amp;&amp;&quot;object&quot;===typeof b&amp;&amp;b.hasOwnProperty(&quot;iat&quot;)}function od(a){a=md(a).Me;return&quot;object&quot;===typeof a&amp;&amp;!0===x(a,&quot;admin&quot;)};function pd(a,b,c){this.f=Yc(&quot;p:rest:&quot;);this.M=a;this.Hb=b;this.Vd=c;this.aa={}}function qd(a,b){if(p(b))return&quot;tag$&quot;+b;H(rd(a.n),&quot;should have a tag if it&#39;s not a default query.&quot;);return a.path.toString()}g=pd.prototype;</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">g.df=function(a,b,c,d){var e=a.path.toString();this.f(&quot;Listen called for &quot;+e+&quot; &quot;+a.ka());var f=qd(a,c),h={};this.aa[f]=h;a=sd(a.n);var k=this;td(this,e+&quot;.json&quot;,a,function(a,b){var u=b;404===a&amp;&amp;(a=u=null);null===a&amp;&amp;k.Hb(e,u,!1,c);x(k.aa,f)===h&amp;&amp;d(a?401==a?&quot;permission_denied&quot;:&quot;rest_error:&quot;+a:&quot;ok&quot;,null)})};g.Ef=function(a,b){var c=qd(a,b);delete this.aa[c]};g.qf=function(){};g.re=function(){};g.gf=function(){};g.xd=function(){};g.put=function(){};g.ef=function(){};g.ye=function(){};</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">function td(a,b,c,d){c=c||{};c.format=&quot;export&quot;;a.Vd.getToken(!1).then(function(e){(e=e&amp;&amp;e.accessToken)&amp;&amp;(c.auth=e);var f=(a.M.Sc?&quot;https://&quot;:&quot;http://&quot;)+a.M.host+b+&quot;?&quot;+Fb(c);a.f(&quot;Sending REST request for &quot;+f);var h=new XMLHttpRequest;h.onreadystatechange=function(){if(d&amp;&amp;4===h.readyState){a.f(&quot;REST Response for &quot;+f+&quot; received. status:&quot;,h.status,&quot;response:&quot;,h.responseText);var b=null;if(200&lt;=h.status&amp;&amp;300&gt;h.status){try{b=Ob(h.responseText)}catch(c){O(&quot;Failed to parse JSON response for &quot;+f+&quot;: &quot;+h.responseText)}d(null,</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">b)}else 401!==h.status&amp;&amp;404!==h.status&amp;&amp;O(&quot;Got unsuccessful REST response for &quot;+f+&quot; Status: &quot;+h.status),d(h.status);d=null}};h.open(&quot;GET&quot;,f,!0);h.send()})};function vd(a,b,c){this.type=wd;this.source=a;this.path=b;this.children=c}vd.prototype.Nc=function(a){if(this.path.e())return a=this.children.subtree(new L(a)),a.e()?null:a.value?new $b(this.source,C,a.value):new vd(this.source,C,a);H(J(this.path)===a,&quot;Can&#39;t get a merge for a child not on the path of the operation&quot;);return new vd(this.source,D(this.path),this.children)};vd.prototype.toString=function(){return&quot;Operation(&quot;+this.path+&quot;: &quot;+this.source.toString()+&quot; merge: &quot;+this.children.toString()+&quot;)&quot;};function xd(a,b){this.zf={};this.Vc=new lc(a);this.wa=b;var c=1E4+2E4*Math.random();ld(r(this.rf,this),Math.floor(c))}xd.prototype.rf=function(){var a=this.Vc.get(),b={},c=!1,d;for(d in a)0&lt;a[d]&amp;&amp;Bb(this.zf,d)&amp;&amp;(b[d]=a[d],c=!0);c&amp;&amp;this.wa.ye(b);ld(r(this.rf,this),Math.floor(6E5*Math.random()))};var yd={},zd={};function Ad(a){a=a.toString();yd[a]||(yd[a]=new jc);return yd[a]}function Bd(a,b){var c=a.toString();zd[c]||(zd[c]=b());return zd[c]};var Cd=null;&quot;undefined&quot;!==typeof MozWebSocket?Cd=MozWebSocket:&quot;undefined&quot;!==typeof WebSocket&amp;&amp;(Cd=WebSocket);function Dd(a,b,c,d){this.Zd=a;this.f=Yc(this.Zd);this.frames=this.Ac=null;this.qb=this.rb=this.Fe=0;this.Xa=Ad(b);a={v:&quot;5&quot;};&quot;undefined&quot;!==typeof location&amp;&amp;location.href&amp;&amp;-1!==location.href.indexOf(&quot;firebaseio.com&quot;)&amp;&amp;(a.r=&quot;f&quot;);c&amp;&amp;(a.s=c);d&amp;&amp;(a.ls=d);this.Ne=ic(b,&quot;websocket&quot;,a)}var Ed;</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">Dd.prototype.open=function(a,b){this.kb=b;this.hg=a;this.f(&quot;Websocket connecting to &quot;+this.Ne);this.xc=!1;Yb.set(&quot;previous_websocket_failure&quot;,!0);try{this.La=new Cd(this.Ne)}catch(c){this.f(&quot;Error instantiating WebSocket.&quot;);var d=c.message||c.data;d&amp;&amp;this.f(d);this.fb();return}var e=this;this.La.onopen=function(){e.f(&quot;Websocket connected.&quot;);e.xc=!0};this.La.onclose=function(){e.f(&quot;Websocket connection was disconnected.&quot;);e.La=null;e.fb()};this.La.onmessage=function(a){if(null!==e.La)if(a=a.data,e.qb+=</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">a.length,kc(e.Xa,&quot;bytes_received&quot;,a.length),Fd(e),null!==e.frames)Gd(e,a);else{a:{H(null===e.frames,&quot;We already have a frame buffer&quot;);if(6&gt;=a.length){var b=Number(a);if(!isNaN(b)){e.Fe=b;e.frames=[];a=null;break a}}e.Fe=1;e.frames=[]}null!==a&amp;&amp;Gd(e,a)}};this.La.onerror=function(a){e.f(&quot;WebSocket error.  Closing connection.&quot;);(a=a.message||a.data)&amp;&amp;e.f(a);e.fb()}};Dd.prototype.start=function(){};</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">Dd.isAvailable=function(){var a=!1;if(&quot;undefined&quot;!==typeof navigator&amp;&amp;navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&amp;&amp;1&lt;b.length&amp;&amp;4.4&gt;parseFloat(b[1])&amp;&amp;(a=!0)}return!a&amp;&amp;null!==Cd&amp;&amp;!Ed};Dd.responsesRequiredToBeHealthy=2;Dd.healthyTimeout=3E4;g=Dd.prototype;g.sd=function(){Yb.remove(&quot;previous_websocket_failure&quot;)};function Gd(a,b){a.frames.push(b);if(a.frames.length==a.Fe){var c=a.frames.join(&quot;&quot;);a.frames=null;c=Ob(c);a.hg(c)}}</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">g.send=function(a){Fd(this);a=B(a);this.rb+=a.length;kc(this.Xa,&quot;bytes_sent&quot;,a.length);a=gd(a,16384);1&lt;a.length&amp;&amp;Hd(this,String(a.length));for(var b=0;b&lt;a.length;b++)Hd(this,a[b])};g.Tc=function(){this.Bb=!0;this.Ac&amp;&amp;(clearInterval(this.Ac),this.Ac=null);this.La&amp;&amp;(this.La.close(),this.La=null)};g.fb=function(){this.Bb||(this.f(&quot;WebSocket is closing itself&quot;),this.Tc(),this.kb&amp;&amp;(this.kb(this.xc),this.kb=null))};g.close=function(){this.Bb||(this.f(&quot;WebSocket is being closed&quot;),this.Tc())};</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">function Fd(a){clearInterval(a.Ac);a.Ac=setInterval(function(){a.La&amp;&amp;Hd(a,&quot;0&quot;);Fd(a)},Math.floor(45E3))}function Hd(a,b){try{a.La.send(b)}catch(c){a.f(&quot;Exception thrown from WebSocket.send():&quot;,c.message||c.data,&quot;Closing connection.&quot;),setTimeout(r(a.fb,a),0)}};function Id(){this.hb={}}</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">function Jd(a,b){var c=b.type,d=b.Za;H(&quot;child_added&quot;==c||&quot;child_changed&quot;==c||&quot;child_removed&quot;==c,&quot;Only child changes supported for tracking&quot;);H(&quot;.priority&quot;!==d,&quot;Only non-priority child changes can be tracked.&quot;);var e=x(a.hb,d);if(e){var f=e.type;if(&quot;child_added&quot;==c&amp;&amp;&quot;child_removed&quot;==f)a.hb[d]=new I(&quot;child_changed&quot;,b.Ma,d,e.Ma);else if(&quot;child_removed&quot;==c&amp;&amp;&quot;child_added&quot;==f)delete a.hb[d];else if(&quot;child_removed&quot;==c&amp;&amp;&quot;child_changed&quot;==f)a.hb[d]=new I(&quot;child_removed&quot;,e.qe,d);else if(&quot;child_changed&quot;==c&amp;&amp;</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">&quot;child_added&quot;==f)a.hb[d]=new I(&quot;child_added&quot;,b.Ma,d);else if(&quot;child_changed&quot;==c&amp;&amp;&quot;child_changed&quot;==f)a.hb[d]=new I(&quot;child_changed&quot;,b.Ma,d,e.qe);else throw Sc(&quot;Illegal combination of changes: &quot;+b+&quot; occurred after &quot;+e);}else a.hb[d]=b};function Kd(a){this.W=a;this.g=a.n.g}function Ld(a,b,c,d){var e=[],f=[];Ja(b,function(b){&quot;child_changed&quot;===b.type&amp;&amp;a.g.nd(b.qe,b.Ma)&amp;&amp;f.push(new I(&quot;child_moved&quot;,b.Ma,b.Za))});Md(a,e,&quot;child_removed&quot;,b,d,c);Md(a,e,&quot;child_added&quot;,b,d,c);Md(a,e,&quot;child_moved&quot;,f,d,c);Md(a,e,&quot;child_changed&quot;,b,d,c);Md(a,e,Cc,b,d,c);return e}function Md(a,b,c,d,e,f){d=Ka(d,function(a){return a.type===c});Sa(d,r(a.Of,a));Ja(d,function(c){var d=Nd(a,c,f);Ja(e,function(e){e.tf(c.type)&amp;&amp;b.push(e.createEvent(d,a.W))})})}</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">function Nd(a,b,c){&quot;value&quot;!==b.type&amp;&amp;&quot;child_removed&quot;!==b.type&amp;&amp;(b.Dd=c.Ze(b.Za,b.Ma,a.g));return b}Kd.prototype.Of=function(a,b){if(null==a.Za||null==b.Za)throw Sc(&quot;Should only compare child_ events.&quot;);return this.g.compare(new K(a.Za,a.Ma),new K(b.Za,b.Ma))};function Od(a,b){this.Sd=a;this.Mf=b}function Pd(a){this.V=a}</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">Pd.prototype.gb=function(a,b,c,d){var e=new Id,f;if(b.type===ac)b.source.ee?c=Qd(this,a,b.path,b.Ja,c,d,e):(H(b.source.We,&quot;Unknown source.&quot;),f=b.source.Ee||Ec(a.w())&amp;&amp;!b.path.e(),c=Rd(this,a,b.path,b.Ja,c,d,f,e));else if(b.type===wd)b.source.ee?c=Sd(this,a,b.path,b.children,c,d,e):(H(b.source.We,&quot;Unknown source.&quot;),f=b.source.Ee||Ec(a.w()),c=Td(this,a,b.path,b.children,c,d,f,e));else if(b.type===Ud)if(b.Id)if(b=b.path,null!=c.mc(b))c=a;else{f=new xc(c,a,d);d=a.O.j();if(b.e()||&quot;.priority&quot;===J(b))Dc(a.w())?</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">b=c.Ba(Ac(a)):(b=a.w().j(),H(b instanceof P,&quot;serverChildren would be complete if leaf node&quot;),b=c.sc(b)),b=this.V.za(d,b,e);else{var h=J(b),k=c.rc(h,a.w());null==k&amp;&amp;yc(a.w(),h)&amp;&amp;(k=d.R(h));b=null!=k?this.V.F(d,h,k,D(b),f,e):a.O.j().Fa(h)?this.V.F(d,h,F,D(b),f,e):d;b.e()&amp;&amp;Dc(a.w())&amp;&amp;(d=c.Ba(Ac(a)),d.J()&amp;&amp;(b=this.V.za(b,d,e)))}d=Dc(a.w())||null!=c.mc(C);c=Vd(a,b,d,this.V.Qa())}else c=Wd(this,a,b.path,b.Pb,c,d,e);else if(b.type===cc)d=b.path,b=a.w(),f=b.j(),h=b.ea||d.e(),c=Xd(this,new Yd(a.O,new zc(f,</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">h,b.Tb)),d,c,wc,e);else throw Sc(&quot;Unknown operation type: &quot;+b.type);e=sa(e.hb);d=c;b=d.O;b.ea&amp;&amp;(f=b.j().J()||b.j().e(),h=Zd(a),(0&lt;e.length||!a.O.ea||f&amp;&amp;!b.j().$(h)||!b.j().C().$(h.C()))&amp;&amp;e.push(Bc(Zd(d))));return new Od(c,e)};</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">function Xd(a,b,c,d,e,f){var h=b.O;if(null!=d.mc(c))return b;var k;if(c.e())H(Dc(b.w()),&quot;If change path is empty, we must have complete server data&quot;),Ec(b.w())?(e=Ac(b),d=d.sc(e instanceof P?e:F)):d=d.Ba(Ac(b)),f=a.V.za(b.O.j(),d,f);else{var m=J(c);if(&quot;.priority&quot;==m)H(1==$d(c),&quot;Can&#39;t have a priority with additional path components&quot;),f=h.j(),k=b.w().j(),d=d.$c(c,f,k),f=null!=d?a.V.ga(f,d):h.j();else{var l=D(c);yc(h,m)?(k=b.w().j(),d=d.$c(c,h.j(),k),d=null!=d?h.j().R(m).F(l,d):h.j().R(m)):d=d.rc(m,</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">b.w());f=null!=d?a.V.F(h.j(),m,d,l,e,f):h.j()}}return Vd(b,f,h.ea||c.e(),a.V.Qa())}function Rd(a,b,c,d,e,f,h,k){var m=b.w();h=h?a.V:a.V.Vb();if(c.e())d=h.za(m.j(),d,null);else if(h.Qa()&amp;&amp;!m.Tb)d=m.j().F(c,d),d=h.za(m.j(),d,null);else{var l=J(c);if(!Fc(m,c)&amp;&amp;1&lt;$d(c))return b;var u=D(c);d=m.j().R(l).F(u,d);d=&quot;.priority&quot;==l?h.ga(m.j(),d):h.F(m.j(),l,d,u,wc,null)}m=m.ea||c.e();b=new Yd(b.O,new zc(d,m,h.Qa()));return Xd(a,b,c,e,new xc(e,b,f),k)}</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">function Qd(a,b,c,d,e,f,h){var k=b.O;e=new xc(e,b,f);if(c.e())h=a.V.za(b.O.j(),d,h),a=Vd(b,h,!0,a.V.Qa());else if(f=J(c),&quot;.priority&quot;===f)h=a.V.ga(b.O.j(),d),a=Vd(b,h,k.ea,k.Tb);else{c=D(c);var m=k.j().R(f);if(!c.e()){var l=e.Xe(f);d=null!=l?&quot;.priority&quot;===ae(c)&amp;&amp;l.Q(c.parent()).e()?l:l.F(c,d):F}m.$(d)?a=b:(h=a.V.F(k.j(),f,d,c,e,h),a=Vd(b,h,k.ea,a.V.Qa()))}return a}</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">function Sd(a,b,c,d,e,f,h){var k=b;be(d,function(d,l){var u=c.k(d);yc(b.O,J(u))&amp;&amp;(k=Qd(a,k,u,l,e,f,h))});be(d,function(d,l){var u=c.k(d);yc(b.O,J(u))||(k=Qd(a,k,u,l,e,f,h))});return k}function ce(a,b){be(b,function(b,d){a=a.F(b,d)});return a}</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">function Td(a,b,c,d,e,f,h,k){if(b.w().j().e()&amp;&amp;!Dc(b.w()))return b;var m=b;c=c.e()?d:de(Q,c,d);var l=b.w().j();c.children.ia(function(c,d){if(l.Fa(c)){var G=b.w().j().R(c),G=ce(G,d);m=Rd(a,m,new L(c),G,e,f,h,k)}});c.children.ia(function(c,d){var G=!yc(b.w(),c)&amp;&amp;null==d.value;l.Fa(c)||G||(G=b.w().j().R(c),G=ce(G,d),m=Rd(a,m,new L(c),G,e,f,h,k))});return m}</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">function Wd(a,b,c,d,e,f,h){if(null!=e.mc(c))return b;var k=Ec(b.w()),m=b.w();if(null!=d.value){if(c.e()&amp;&amp;m.ea||Fc(m,c))return Rd(a,b,c,m.j().Q(c),e,f,k,h);if(c.e()){var l=Q;m.j().P(ee,function(a,b){l=l.set(new L(a),b)});return Td(a,b,c,l,e,f,k,h)}return b}l=Q;be(d,function(a){var b=c.k(a);Fc(m,b)&amp;&amp;(l=l.set(a,m.j().Q(b)))});return Td(a,b,c,l,e,f,k,h)};function fe(a){this.g=a}g=fe.prototype;g.F=function(a,b,c,d,e,f){H(a.zc(this.g),&quot;A node must be indexed if only a child is updated&quot;);e=a.R(b);if(e.Q(d).$(c.Q(d))&amp;&amp;e.e()==c.e())return a;null!=f&amp;&amp;(c.e()?a.Fa(b)?Jd(f,new I(&quot;child_removed&quot;,e,b)):H(a.J(),&quot;A child remove without an old child only makes sense on a leaf node&quot;):e.e()?Jd(f,new I(&quot;child_added&quot;,c,b)):Jd(f,new I(&quot;child_changed&quot;,c,b,e)));return a.J()&amp;&amp;c.e()?a:a.U(b,c).ob(this.g)};</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">g.za=function(a,b,c){null!=c&amp;&amp;(a.J()||a.P(N,function(a,e){b.Fa(a)||Jd(c,new I(&quot;child_removed&quot;,e,a))}),b.J()||b.P(N,function(b,e){if(a.Fa(b)){var f=a.R(b);f.$(e)||Jd(c,new I(&quot;child_changed&quot;,e,b,f))}else Jd(c,new I(&quot;child_added&quot;,e,b))}));return b.ob(this.g)};g.ga=function(a,b){return a.e()?F:a.ga(b)};g.Qa=function(){return!1};g.Vb=function(){return this};function ge(a){this.he=new fe(a.g);this.g=a.g;var b;a.la?(b=he(a),b=a.g.Fc(ie(a),b)):b=a.g.Ic();this.Uc=b;a.oa?(b=je(a),a=a.g.Fc(ke(a),b)):a=a.g.Gc();this.wc=a}g=ge.prototype;g.matches=function(a){return 0&gt;=this.g.compare(this.Uc,a)&amp;&amp;0&gt;=this.g.compare(a,this.wc)};g.F=function(a,b,c,d,e,f){this.matches(new K(b,c))||(c=F);return this.he.F(a,b,c,d,e,f)};</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">g.za=function(a,b,c){b.J()&amp;&amp;(b=F);var d=b.ob(this.g),d=d.ga(F),e=this;b.P(N,function(a,b){e.matches(new K(a,b))||(d=d.U(a,F))});return this.he.za(a,d,c)};g.ga=function(a){return a};g.Qa=function(){return!0};g.Vb=function(){return this.he};function le(a){this.ta=new ge(a);this.g=a.g;H(a.ya,&quot;Only valid if limit has been set&quot;);this.pa=a.pa;this.Jb=!me(a)}g=le.prototype;g.F=function(a,b,c,d,e,f){this.ta.matches(new K(b,c))||(c=F);return a.R(b).$(c)?a:a.Fb()&lt;this.pa?this.ta.Vb().F(a,b,c,d,e,f):ne(this,a,b,c,e,f)};</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">g.za=function(a,b,c){var d;if(b.J()||b.e())d=F.ob(this.g);else if(2*this.pa&lt;b.Fb()&amp;&amp;b.zc(this.g)){d=F.ob(this.g);b=this.Jb?b.$b(this.ta.wc,this.g):b.Yb(this.ta.Uc,this.g);for(var e=0;0&lt;b.Sa.length&amp;&amp;e&lt;this.pa;){var f=R(b),h;if(h=this.Jb?0&gt;=this.g.compare(this.ta.Uc,f):0&gt;=this.g.compare(f,this.ta.wc))d=d.U(f.name,f.S),e++;else break}}else{d=b.ob(this.g);d=d.ga(F);var k,m,l;if(this.Jb){b=d.$e(this.g);k=this.ta.wc;m=this.ta.Uc;var u=oe(this.g);l=function(a,b){return u(b,a)}}else b=d.Xb(this.g),k=this.ta.Uc,</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">m=this.ta.wc,l=oe(this.g);for(var e=0,z=!1;0&lt;b.Sa.length;)f=R(b),!z&amp;&amp;0&gt;=l(k,f)&amp;&amp;(z=!0),(h=z&amp;&amp;e&lt;this.pa&amp;&amp;0&gt;=l(f,m))?e++:d=d.U(f.name,F)}return this.ta.Vb().za(a,d,c)};g.ga=function(a){return a};g.Qa=function(){return!0};g.Vb=function(){return this.ta.Vb()};</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">function ne(a,b,c,d,e,f){var h;if(a.Jb){var k=oe(a.g);h=function(a,b){return k(b,a)}}else h=oe(a.g);H(b.Fb()==a.pa,&quot;&quot;);var m=new K(c,d),l=a.Jb?pe(b,a.g):qe(b,a.g),u=a.ta.matches(m);if(b.Fa(c)){for(var z=b.R(c),l=e.fe(a.g,l,a.Jb);null!=l&amp;&amp;(l.name==c||b.Fa(l.name));)l=e.fe(a.g,l,a.Jb);e=null==l?1:h(l,m);if(u&amp;&amp;!d.e()&amp;&amp;0&lt;=e)return null!=f&amp;&amp;Jd(f,new I(&quot;child_changed&quot;,d,c,z)),b.U(c,d);null!=f&amp;&amp;Jd(f,new I(&quot;child_removed&quot;,z,c));b=b.U(c,F);return null!=l&amp;&amp;a.ta.matches(l)?(null!=f&amp;&amp;Jd(f,new I(&quot;child_added&quot;,</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">l.S,l.name)),b.U(l.name,l.S)):b}return d.e()?b:u&amp;&amp;0&lt;=h(l,m)?(null!=f&amp;&amp;(Jd(f,new I(&quot;child_removed&quot;,l.S,l.name)),Jd(f,new I(&quot;child_added&quot;,d,c))),b.U(c,d).U(l.name,F)):b};function Qc(a,b){this.B=a;H(p(this.B)&amp;&amp;null!==this.B,&quot;LeafNode shouldn&#39;t be created with null/undefined value.&quot;);this.ba=b||F;re(this.ba);this.Eb=null}var se=[&quot;object&quot;,&quot;boolean&quot;,&quot;number&quot;,&quot;string&quot;];g=Qc.prototype;g.J=function(){return!0};g.C=function(){return this.ba};g.ga=function(a){return new Qc(this.B,a)};g.R=function(a){return&quot;.priority&quot;===a?this.ba:F};g.Q=function(a){return a.e()?this:&quot;.priority&quot;===J(a)?this.ba:F};g.Fa=function(){return!1};g.Ze=function(){return null};</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">g.U=function(a,b){return&quot;.priority&quot;===a?this.ga(b):b.e()&amp;&amp;&quot;.priority&quot;!==a?this:F.U(a,b).ga(this.ba)};g.F=function(a,b){var c=J(a);if(null===c)return b;if(b.e()&amp;&amp;&quot;.priority&quot;!==c)return this;H(&quot;.priority&quot;!==c||1===$d(a),&quot;.priority must be the last token in a path&quot;);return this.U(c,F.F(D(a),b))};g.e=function(){return!1};g.Fb=function(){return 0};g.P=function(){return!1};g.H=function(a){return a&amp;&amp;!this.C().e()?{&quot;.value&quot;:this.Ea(),&quot;.priority&quot;:this.C().H()}:this.Ea()};</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">g.hash=function(){if(null===this.Eb){var a=&quot;&quot;;this.ba.e()||(a+=&quot;priority:&quot;+te(this.ba.H())+&quot;:&quot;);var b=typeof this.B,a=a+(b+&quot;:&quot;),a=&quot;number&quot;===b?a+id(this.B):a+this.B;this.Eb=Uc(a)}return this.Eb};g.Ea=function(){return this.B};g.tc=function(a){if(a===F)return 1;if(a instanceof P)return-1;H(a.J(),&quot;Unknown node type&quot;);var b=typeof a.B,c=typeof this.B,d=Ia(se,b),e=Ia(se,c);H(0&lt;=d,&quot;Unknown leaf type: &quot;+b);H(0&lt;=e,&quot;Unknown leaf type: &quot;+c);return d===e?&quot;object&quot;===c?0:this.B&lt;a.B?-1:this.B===a.B?0:1:e-d};</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">g.ob=function(){return this};g.zc=function(){return!0};g.$=function(a){return a===this?!0:a.J()?this.B===a.B&amp;&amp;this.ba.$(a.ba):!1};g.toString=function(){return B(this.H(!0))};function ue(){}var ve={};function oe(a){return r(a.compare,a)}ue.prototype.nd=function(a,b){return 0!==this.compare(new K(&quot;[MIN_NAME]&quot;,a),new K(&quot;[MIN_NAME]&quot;,b))};ue.prototype.Ic=function(){return we};function xe(a){H(!a.e()&amp;&amp;&quot;.priority&quot;!==J(a),&quot;Can&#39;t create PathIndex with empty path or .priority key&quot;);this.cc=a}ka(xe,ue);g=xe.prototype;g.yc=function(a){return!a.Q(this.cc).e()};g.compare=function(a,b){var c=a.S.Q(this.cc),d=b.S.Q(this.cc),c=c.tc(d);return 0===c?Hc(a.name,b.name):c};</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">g.Fc=function(a,b){var c=M(a),c=F.F(this.cc,c);return new K(b,c)};g.Gc=function(){var a=F.F(this.cc,ye);return new K(&quot;[MAX_NAME]&quot;,a)};g.toString=function(){return this.cc.slice().join(&quot;/&quot;)};function ze(){}ka(ze,ue);g=ze.prototype;g.compare=function(a,b){var c=a.S.C(),d=b.S.C(),c=c.tc(d);return 0===c?Hc(a.name,b.name):c};g.yc=function(a){return!a.C().e()};g.nd=function(a,b){return!a.C().$(b.C())};g.Ic=function(){return we};g.Gc=function(){return new K(&quot;[MAX_NAME]&quot;,new Qc(&quot;[PRIORITY-POST]&quot;,ye))};</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">g.Fc=function(a,b){var c=M(a);return new K(b,new Qc(&quot;[PRIORITY-POST]&quot;,c))};g.toString=function(){return&quot;.priority&quot;};var N=new ze;function Ae(){}ka(Ae,ue);g=Ae.prototype;g.compare=function(a,b){return Hc(a.name,b.name)};g.yc=function(){throw Sc(&quot;KeyIndex.isDefinedOn not expected to be called.&quot;);};g.nd=function(){return!1};g.Ic=function(){return we};g.Gc=function(){return new K(&quot;[MAX_NAME]&quot;,F)};g.Fc=function(a){H(q(a),&quot;KeyIndex indexValue must always be a string.&quot;);return new K(a,F)};g.toString=function(){return&quot;.key&quot;};</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">var ee=new Ae;function Be(){}ka(Be,ue);g=Be.prototype;g.compare=function(a,b){var c=a.S.tc(b.S);return 0===c?Hc(a.name,b.name):c};g.yc=function(){return!0};g.nd=function(a,b){return!a.$(b)};g.Ic=function(){return we};g.Gc=function(){return Ce};g.Fc=function(a,b){var c=M(a);return new K(b,c)};g.toString=function(){return&quot;.value&quot;};var De=new Be;function Ee(){this.Sb=this.oa=this.Lb=this.la=this.ya=!1;this.pa=0;this.oc=&quot;&quot;;this.ec=null;this.Ab=&quot;&quot;;this.bc=null;this.yb=&quot;&quot;;this.g=N}var Fe=new Ee;function me(a){return&quot;&quot;===a.oc?a.la:&quot;l&quot;===a.oc}function ie(a){H(a.la,&quot;Only valid if start has been set&quot;);return a.ec}function he(a){H(a.la,&quot;Only valid if start has been set&quot;);return a.Lb?a.Ab:&quot;[MIN_NAME]&quot;}function ke(a){H(a.oa,&quot;Only valid if end has been set&quot;);return a.bc}</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">function je(a){H(a.oa,&quot;Only valid if end has been set&quot;);return a.Sb?a.yb:&quot;[MAX_NAME]&quot;}function Ge(a){var b=new Ee;b.ya=a.ya;b.pa=a.pa;b.la=a.la;b.ec=a.ec;b.Lb=a.Lb;b.Ab=a.Ab;b.oa=a.oa;b.bc=a.bc;b.Sb=a.Sb;b.yb=a.yb;b.g=a.g;return b}g=Ee.prototype;g.ne=function(a){var b=Ge(this);b.ya=!0;b.pa=a;b.oc=&quot;l&quot;;return b};g.oe=function(a){var b=Ge(this);b.ya=!0;b.pa=a;b.oc=&quot;r&quot;;return b};g.Nd=function(a,b){var c=Ge(this);c.la=!0;p(a)||(a=null);c.ec=a;null!=b?(c.Lb=!0,c.Ab=b):(c.Lb=!1,c.Ab=&quot;&quot;);return c};</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">g.fd=function(a,b){var c=Ge(this);c.oa=!0;p(a)||(a=null);c.bc=a;p(b)?(c.Sb=!0,c.yb=b):(c.Hg=!1,c.yb=&quot;&quot;);return c};function He(a,b){var c=Ge(a);c.g=b;return c}function Ie(a){var b={};a.la&amp;&amp;(b.sp=a.ec,a.Lb&amp;&amp;(b.sn=a.Ab));a.oa&amp;&amp;(b.ep=a.bc,a.Sb&amp;&amp;(b.en=a.yb));if(a.ya){b.l=a.pa;var c=a.oc;&quot;&quot;===c&amp;&amp;(c=me(a)?&quot;l&quot;:&quot;r&quot;);b.vf=c}a.g!==N&amp;&amp;(b.i=a.g.toString());return b}function S(a){return!(a.la||a.oa||a.ya)}function rd(a){return S(a)&amp;&amp;a.g==N}</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">function sd(a){var b={};if(rd(a))return b;var c;a.g===N?c=&quot;$priority&quot;:a.g===De?c=&quot;$value&quot;:a.g===ee?c=&quot;$key&quot;:(H(a.g instanceof xe,&quot;Unrecognized index type!&quot;),c=a.g.toString());b.orderBy=B(c);a.la&amp;&amp;(b.startAt=B(a.ec),a.Lb&amp;&amp;(b.startAt+=&quot;,&quot;+B(a.Ab)));a.oa&amp;&amp;(b.endAt=B(a.bc),a.Sb&amp;&amp;(b.endAt+=&quot;,&quot;+B(a.yb)));a.ya&amp;&amp;(me(a)?b.limitToFirst=a.pa:b.limitToLast=a.pa);return b}g.toString=function(){return B(Ie(this))};function Je(a,b){this.od=a;this.dc=b}Je.prototype.get=function(a){var b=x(this.od,a);if(!b)throw Error(&quot;No index defined for &quot;+a);return b===ve?null:b};function Ke(a,b,c){var d=oa(a.od,function(d,f){var h=x(a.dc,f);H(h,&quot;Missing index implementation for &quot;+f);if(d===ve){if(h.yc(b.S)){for(var k=[],m=c.Xb(Jc),l=R(m);l;)l.name!=b.name&amp;&amp;k.push(l),l=R(m);k.push(b);return Le(k,oe(h))}return ve}h=c.get(b.name);k=d;h&amp;&amp;(k=k.remove(new K(b.name,h)));return k.Ra(b,b.S)});return new Je(d,a.dc)}</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">function Me(a,b,c){var d=oa(a.od,function(a){if(a===ve)return a;var d=c.get(b.name);return d?a.remove(new K(b.name,d)):a});return new Je(d,a.dc)}var Ne=new Je({&quot;.priority&quot;:ve},{&quot;.priority&quot;:N});function Oe(){this.set={}}g=Oe.prototype;g.add=function(a,b){this.set[a]=null!==b?b:!0};g.contains=function(a){return Bb(this.set,a)};g.get=function(a){return this.contains(a)?this.set[a]:void 0};g.remove=function(a){delete this.set[a]};g.clear=function(){this.set={}};g.e=function(){return xa(this.set)};g.count=function(){return qa(this.set)};function Pe(a,b){t(a.set,function(a,d){b(d,a)})}g.keys=function(){var a=[];t(this.set,function(b,c){a.push(c)});return a};function Qe(a,b,c,d){this.Zd=a;this.f=Yc(a);this.kc=b;this.qb=this.rb=0;this.Xa=Ad(b);this.Bf=c;this.xc=!1;this.Db=d;this.Yc=function(a){return ic(b,&quot;long_polling&quot;,a)}}var Re,Se;</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">Qe.prototype.open=function(a,b){this.Qe=0;this.ja=b;this.ff=new Rb(a);this.Bb=!1;var c=this;this.tb=setTimeout(function(){c.f(&quot;Timed out trying to connect.&quot;);c.fb();c.tb=null},Math.floor(3E4));cd(function(){if(!c.Bb){c.Wa=new Te(function(a,b,d,k,m){Ue(c,arguments);if(c.Wa)if(c.tb&amp;&amp;(clearTimeout(c.tb),c.tb=null),c.xc=!0,&quot;start&quot;==a)c.id=b,c.mf=d;else if(&quot;close&quot;===a)b?(c.Wa.Kd=!1,Sb(c.ff,b,function(){c.fb()})):c.fb();else throw Error(&quot;Unrecognized command received: &quot;+a);},function(a,b){Ue(c,arguments);</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">Tb(c.ff,a,b)},function(){c.fb()},c.Yc);var a={start:&quot;t&quot;};a.ser=Math.floor(1E8*Math.random());c.Wa.Qd&amp;&amp;(a.cb=c.Wa.Qd);a.v=&quot;5&quot;;c.Bf&amp;&amp;(a.s=c.Bf);c.Db&amp;&amp;(a.ls=c.Db);&quot;undefined&quot;!==typeof location&amp;&amp;location.href&amp;&amp;-1!==location.href.indexOf(&quot;firebaseio.com&quot;)&amp;&amp;(a.r=&quot;f&quot;);a=c.Yc(a);c.f(&quot;Connecting via long-poll to &quot;+a);Ve(c.Wa,a,function(){})}})};</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">Qe.prototype.start=function(){var a=this.Wa,b=this.mf;a.fg=this.id;a.gg=b;for(a.Ud=!0;We(a););a=this.id;b=this.mf;this.gc=document.createElement(&quot;iframe&quot;);var c={dframe:&quot;t&quot;};c.id=a;c.pw=b;this.gc.src=this.Yc(c);this.gc.style.display=&quot;none&quot;;document.body.appendChild(this.gc)};</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">Qe.isAvailable=function(){return Re||!Se&amp;&amp;&quot;undefined&quot;!==typeof document&amp;&amp;null!=document.createElement&amp;&amp;!(&quot;object&quot;===typeof window&amp;&amp;window.chrome&amp;&amp;window.chrome.extension&amp;&amp;!/^chrome/.test(window.location.href))&amp;&amp;!(&quot;object&quot;===typeof Windows&amp;&amp;&quot;object&quot;===typeof Windows.Dg)&amp;&amp;!0};g=Qe.prototype;g.sd=function(){};g.Tc=function(){this.Bb=!0;this.Wa&amp;&amp;(this.Wa.close(),this.Wa=null);this.gc&amp;&amp;(document.body.removeChild(this.gc),this.gc=null);this.tb&amp;&amp;(clearTimeout(this.tb),this.tb=null)};</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">g.fb=function(){this.Bb||(this.f(&quot;Longpoll is closing itself&quot;),this.Tc(),this.ja&amp;&amp;(this.ja(this.xc),this.ja=null))};g.close=function(){this.Bb||(this.f(&quot;Longpoll is being closed.&quot;),this.Tc())};g.send=function(a){a=B(a);this.rb+=a.length;kc(this.Xa,&quot;bytes_sent&quot;,a.length);a=Mb(a);a=ab(a,!0);a=gd(a,1840);for(var b=0;b&lt;a.length;b++){var c=this.Wa;c.Qc.push({ug:this.Qe,Bg:a.length,Se:a[b]});c.Ud&amp;&amp;We(c);this.Qe++}};function Ue(a,b){var c=B(b).length;a.qb+=c;kc(a.Xa,&quot;bytes_received&quot;,c)}</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">function Te(a,b,c,d){this.Yc=d;this.kb=c;this.ve=new Oe;this.Qc=[];this.$d=Math.floor(1E8*Math.random());this.Kd=!0;this.Qd=Rc();window[&quot;pLPCommand&quot;+this.Qd]=a;window[&quot;pRTLPCB&quot;+this.Qd]=b;a=document.createElement(&quot;iframe&quot;);a.style.display=&quot;none&quot;;if(document.body){document.body.appendChild(a);try{a.contentWindow.document||E(&quot;No IE domain setting required&quot;)}catch(e){a.src=&quot;javascript:void((function(){document.open();document.domain=&#39;&quot;+document.domain+&quot;&#39;;document.close();})())&quot;}}else throw&quot;Document body has not initialized. Wait to initialize Firebase until after the document is ready.&quot;;</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">a.contentDocument?a.ib=a.contentDocument:a.contentWindow?a.ib=a.contentWindow.document:a.document&amp;&amp;(a.ib=a.document);this.Ga=a;a=&quot;&quot;;this.Ga.src&amp;&amp;&quot;javascript:&quot;===this.Ga.src.substr(0,11)&amp;&amp;(a=&#39;&lt;script&gt;document.domain=&quot;&#39;+document.domain+&#39;&quot;;\x3c/script&gt;&#39;);a=&quot;&lt;html&gt;&lt;body&gt;&quot;+a+&quot;&lt;/body&gt;&lt;/html&gt;&quot;;try{this.Ga.ib.open(),this.Ga.ib.write(a),this.Ga.ib.close()}catch(f){E(&quot;frame writing exception&quot;),f.stack&amp;&amp;E(f.stack),E(f)}}</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">Te.prototype.close=function(){this.Ud=!1;if(this.Ga){this.Ga.ib.body.innerHTML=&quot;&quot;;var a=this;setTimeout(function(){null!==a.Ga&amp;&amp;(document.body.removeChild(a.Ga),a.Ga=null)},Math.floor(0))}var b=this.kb;b&amp;&amp;(this.kb=null,b())};</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">function We(a){if(a.Ud&amp;&amp;a.Kd&amp;&amp;a.ve.count()&lt;(0&lt;a.Qc.length?2:1)){a.$d++;var b={};b.id=a.fg;b.pw=a.gg;b.ser=a.$d;for(var b=a.Yc(b),c=&quot;&quot;,d=0;0&lt;a.Qc.length;)if(1870&gt;=a.Qc[0].Se.length+30+c.length){var e=a.Qc.shift(),c=c+&quot;&amp;seg&quot;+d+&quot;=&quot;+e.ug+&quot;&amp;ts&quot;+d+&quot;=&quot;+e.Bg+&quot;&amp;d&quot;+d+&quot;=&quot;+e.Se;d++}else break;Xe(a,b+c,a.$d);return!0}return!1}function Xe(a,b,c){function d(){a.ve.remove(c);We(a)}a.ve.add(c,1);var e=setTimeout(d,Math.floor(25E3));Ve(a,b,function(){clearTimeout(e);d()})}</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">function Ve(a,b,c){setTimeout(function(){try{if(a.Kd){var d=a.Ga.ib.createElement(&quot;script&quot;);d.type=&quot;text/javascript&quot;;d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&amp;&amp;&quot;loaded&quot;!==a&amp;&amp;&quot;complete&quot;!==a||(d.onload=d.onreadystatechange=null,d.parentNode&amp;&amp;d.parentNode.removeChild(d),c())};d.onerror=function(){E(&quot;Long-poll script failed to load: &quot;+b);a.Kd=!1;a.close()};a.Ga.ib.body.appendChild(d)}}catch(e){}},Math.floor(1))};function Ye(a){Ze(this,a)}var $e=[Qe,Dd];function Ze(a,b){var c=Dd&amp;&amp;Dd.isAvailable(),d=c&amp;&amp;!(Yb.cf||!0===Yb.get(&quot;previous_websocket_failure&quot;));b.Cg&amp;&amp;(c||O(&quot;wss:// URL used, but browser isn&#39;t known to support websockets.  Trying anyway.&quot;),d=!0);if(d)a.Wc=[Dd];else{var e=a.Wc=[];hd($e,function(a,b){b&amp;&amp;b.isAvailable()&amp;&amp;e.push(b)})}}function af(a){if(0&lt;a.Wc.length)return a.Wc[0];throw Error(&quot;No transports available&quot;);};function bf(a,b,c,d,e,f,h){this.id=a;this.f=Yc(&quot;c:&quot;+this.id+&quot;:&quot;);this.te=c;this.Mc=d;this.ja=e;this.se=f;this.M=b;this.Ad=[];this.Oe=0;this.Af=new Ye(b);this.L=0;this.Db=h;this.f(&quot;Connection created&quot;);cf(this)}</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">function cf(a){var b=af(a.Af);a.I=new b(&quot;c:&quot;+a.id+&quot;:&quot;+a.Oe++,a.M,void 0,a.Db);a.xe=b.responsesRequiredToBeHealthy||0;var c=df(a,a.I),d=ef(a,a.I);a.Xc=a.I;a.Rc=a.I;a.D=null;a.Cb=!1;setTimeout(function(){a.I&amp;&amp;a.I.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0&lt;b&amp;&amp;(a.md=ld(function(){a.md=null;a.Cb||(a.I&amp;&amp;102400&lt;a.I.qb?(a.f(&quot;Connection exceeded healthy timeout but has received &quot;+a.I.qb+&quot; bytes.  Marking connection healthy.&quot;),a.Cb=!0,a.I.sd()):a.I&amp;&amp;10240&lt;a.I.rb?a.f(&quot;Connection exceeded healthy timeout but has sent &quot;+</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">a.I.rb+&quot; bytes.  Leaving connection alive.&quot;):(a.f(&quot;Closing unhealthy connection after timeout.&quot;),a.close()))},Math.floor(b)))}function ef(a,b){return function(c){b===a.I?(a.I=null,c||0!==a.L?1===a.L&amp;&amp;a.f(&quot;Realtime connection lost.&quot;):(a.f(&quot;Realtime connection failed.&quot;),&quot;s-&quot;===a.M.bb.substr(0,2)&amp;&amp;(Yb.remove(&quot;host:&quot;+a.M.host),a.M.bb=a.M.host)),a.close()):b===a.D?(a.f(&quot;Secondary connection lost.&quot;),c=a.D,a.D=null,a.Xc!==c&amp;&amp;a.Rc!==c||a.close()):a.f(&quot;closing an old connection&quot;)}}</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">function df(a,b){return function(c){if(2!=a.L)if(b===a.Rc){var d=ed(&quot;t&quot;,c);c=ed(&quot;d&quot;,c);if(&quot;c&quot;==d){if(d=ed(&quot;t&quot;,c),&quot;d&quot;in c)if(c=c.d,&quot;h&quot;===d){var d=c.ts,e=c.v,f=c.h;a.yf=c.s;hc(a.M,f);0==a.L&amp;&amp;(a.I.start(),ff(a,a.I,d),&quot;5&quot;!==e&amp;&amp;O(&quot;Protocol version mismatch detected&quot;),c=a.Af,(c=1&lt;c.Wc.length?c.Wc[1]:null)&amp;&amp;gf(a,c))}else if(&quot;n&quot;===d){a.f(&quot;recvd end transmission on primary&quot;);a.Rc=a.D;for(c=0;c&lt;a.Ad.length;++c)a.wd(a.Ad[c]);a.Ad=[];hf(a)}else&quot;s&quot;===d?(a.f(&quot;Connection shutdown command received. Shutting down...&quot;),</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">a.se&amp;&amp;(a.se(c),a.se=null),a.ja=null,a.close()):&quot;r&quot;===d?(a.f(&quot;Reset packet received.  New host: &quot;+c),hc(a.M,c),1===a.L?a.close():(jf(a),cf(a))):&quot;e&quot;===d?Zc(&quot;Server Error: &quot;+c):&quot;o&quot;===d?(a.f(&quot;got pong on primary.&quot;),kf(a),lf(a)):Zc(&quot;Unknown control packet command: &quot;+d)}else&quot;d&quot;==d&amp;&amp;a.wd(c)}else if(b===a.D)if(d=ed(&quot;t&quot;,c),c=ed(&quot;d&quot;,c),&quot;c&quot;==d)&quot;t&quot;in c&amp;&amp;(c=c.t,&quot;a&quot;===c?mf(a):&quot;r&quot;===c?(a.f(&quot;Got a reset on secondary, closing it&quot;),a.D.close(),a.Xc!==a.D&amp;&amp;a.Rc!==a.D||a.close()):&quot;o&quot;===c&amp;&amp;(a.f(&quot;got pong on secondary.&quot;),</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">a.xf--,mf(a)));else if(&quot;d&quot;==d)a.Ad.push(c);else throw Error(&quot;Unknown protocol layer: &quot;+d);else a.f(&quot;message on old connection&quot;)}}bf.prototype.va=function(a){nf(this,{t:&quot;d&quot;,d:a})};function hf(a){a.Xc===a.D&amp;&amp;a.Rc===a.D&amp;&amp;(a.f(&quot;cleaning up and promoting a connection: &quot;+a.D.Zd),a.I=a.D,a.D=null)}</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">function mf(a){0&gt;=a.xf?(a.f(&quot;Secondary connection is healthy.&quot;),a.Cb=!0,a.D.sd(),a.D.start(),a.f(&quot;sending client ack on secondary&quot;),a.D.send({t:&quot;c&quot;,d:{t:&quot;a&quot;,d:{}}}),a.f(&quot;Ending transmission on primary&quot;),a.I.send({t:&quot;c&quot;,d:{t:&quot;n&quot;,d:{}}}),a.Xc=a.D,hf(a)):(a.f(&quot;sending ping on secondary.&quot;),a.D.send({t:&quot;c&quot;,d:{t:&quot;p&quot;,d:{}}}))}bf.prototype.wd=function(a){kf(this);this.te(a)};function kf(a){a.Cb||(a.xe--,0&gt;=a.xe&amp;&amp;(a.f(&quot;Primary connection is healthy.&quot;),a.Cb=!0,a.I.sd()))}</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">function gf(a,b){a.D=new b(&quot;c:&quot;+a.id+&quot;:&quot;+a.Oe++,a.M,a.yf);a.xf=b.responsesRequiredToBeHealthy||0;a.D.open(df(a,a.D),ef(a,a.D));ld(function(){a.D&amp;&amp;(a.f(&quot;Timed out trying to upgrade.&quot;),a.D.close())},Math.floor(6E4))}function ff(a,b,c){a.f(&quot;Realtime connection established.&quot;);a.I=b;a.L=1;a.Mc&amp;&amp;(a.Mc(c,a.yf),a.Mc=null);0===a.xe?(a.f(&quot;Primary connection is healthy.&quot;),a.Cb=!0):ld(function(){lf(a)},Math.floor(5E3))}</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">function lf(a){a.Cb||1!==a.L||(a.f(&quot;sending ping on primary.&quot;),nf(a,{t:&quot;c&quot;,d:{t:&quot;p&quot;,d:{}}}))}function nf(a,b){if(1!==a.L)throw&quot;Connection is not connected&quot;;a.Xc.send(b)}bf.prototype.close=function(){2!==this.L&amp;&amp;(this.f(&quot;Closing realtime connection.&quot;),this.L=2,jf(this),this.ja&amp;&amp;(this.ja(),this.ja=null))};function jf(a){a.f(&quot;Shutting down all connections&quot;);a.I&amp;&amp;(a.I.close(),a.I=null);a.D&amp;&amp;(a.D.close(),a.D=null);a.md&amp;&amp;(clearTimeout(a.md),a.md=null)};function L(a,b){if(1==arguments.length){this.o=a.split(&quot;/&quot;);for(var c=0,d=0;d&lt;this.o.length;d++)0&lt;this.o[d].length&amp;&amp;(this.o[c]=this.o[d],c++);this.o.length=c;this.Z=0}else this.o=a,this.Z=b}function T(a,b){var c=J(a);if(null===c)return b;if(c===J(b))return T(D(a),D(b));throw Error(&quot;INTERNAL ERROR: innerPath (&quot;+b+&quot;) is not within outerPath (&quot;+a+&quot;)&quot;);}</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">function of(a,b){for(var c=a.slice(),d=b.slice(),e=0;e&lt;c.length&amp;&amp;e&lt;d.length;e++){var f=Hc(c[e],d[e]);if(0!==f)return f}return c.length===d.length?0:c.length&lt;d.length?-1:1}function J(a){return a.Z&gt;=a.o.length?null:a.o[a.Z]}function $d(a){return a.o.length-a.Z}function D(a){var b=a.Z;b&lt;a.o.length&amp;&amp;b++;return new L(a.o,b)}function ae(a){return a.Z&lt;a.o.length?a.o[a.o.length-1]:null}g=L.prototype;</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">g.toString=function(){for(var a=&quot;&quot;,b=this.Z;b&lt;this.o.length;b++)&quot;&quot;!==this.o[b]&amp;&amp;(a+=&quot;/&quot;+this.o[b]);return a||&quot;/&quot;};g.slice=function(a){return this.o.slice(this.Z+(a||0))};g.parent=function(){if(this.Z&gt;=this.o.length)return null;for(var a=[],b=this.Z;b&lt;this.o.length-1;b++)a.push(this.o[b]);return new L(a,0)};</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">g.k=function(a){for(var b=[],c=this.Z;c&lt;this.o.length;c++)b.push(this.o[c]);if(a instanceof L)for(c=a.Z;c&lt;a.o.length;c++)b.push(a.o[c]);else for(a=a.split(&quot;/&quot;),c=0;c&lt;a.length;c++)0&lt;a[c].length&amp;&amp;b.push(a[c]);return new L(b,0)};g.e=function(){return this.Z&gt;=this.o.length};g.$=function(a){if($d(this)!==$d(a))return!1;for(var b=this.Z,c=a.Z;b&lt;=this.o.length;b++,c++)if(this.o[b]!==a.o[c])return!1;return!0};</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">g.contains=function(a){var b=this.Z,c=a.Z;if($d(this)&gt;$d(a))return!1;for(;b&lt;this.o.length;){if(this.o[b]!==a.o[c])return!1;++b;++c}return!0};var C=new L(&quot;&quot;);function pf(a,b){this.Ta=a.slice();this.Ka=Math.max(1,this.Ta.length);this.Te=b;for(var c=0;c&lt;this.Ta.length;c++)this.Ka+=Nb(this.Ta[c]);qf(this)}pf.prototype.push=function(a){0&lt;this.Ta.length&amp;&amp;(this.Ka+=1);this.Ta.push(a);this.Ka+=Nb(a);qf(this)};pf.prototype.pop=function(){var a=this.Ta.pop();this.Ka-=Nb(a);0&lt;this.Ta.length&amp;&amp;--this.Ka};</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">function qf(a){if(768&lt;a.Ka)throw Error(a.Te+&quot;has a key path longer than 768 bytes (&quot;+a.Ka+&quot;).&quot;);if(32&lt;a.Ta.length)throw Error(a.Te+&quot;path specified exceeds the maximum depth that can be written (32) or object contains a cycle &quot;+rf(a));}function rf(a){return 0==a.Ta.length?&quot;&quot;:&quot;in property &#39;&quot;+a.Ta.join(&quot;.&quot;)+&quot;&#39;&quot;};function sf(a){a instanceof tf||$c(&quot;Don&#39;t call new Database() directly - please use firebase.database().&quot;);this.ua=a;this.ca=new U(a,C);this.INTERNAL=new uf(this)}var vf={TIMESTAMP:{&quot;.sv&quot;:&quot;timestamp&quot;}};g=sf.prototype;g.app=null;g.pf=function(a){wf(this,&quot;ref&quot;);y(&quot;database.ref&quot;,0,1,arguments.length);return p(a)?this.ca.k(a):this.ca};</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">g.rg=function(a){wf(this,&quot;database.refFromURL&quot;);y(&quot;database.refFromURL&quot;,1,1,arguments.length);var b=ad(a);xf(&quot;database.refFromURL&quot;,b);var c=b.kc;c.host!==this.ua.M.host&amp;&amp;$c(&quot;database.refFromURL: Host name does not match the current database: (found &quot;+c.host+&quot; but expected &quot;+this.ua.M.host+&quot;)&quot;);return this.pf(b.path.toString())};function wf(a,b){null===a.ua&amp;&amp;$c(&quot;Cannot call &quot;+b+&quot; on a deleted database.&quot;)}g.$f=function(){y(&quot;database.goOffline&quot;,0,0,arguments.length);wf(this,&quot;goOffline&quot;);this.ua.eb()};</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">g.ag=function(){y(&quot;database.goOnline&quot;,0,0,arguments.length);wf(this,&quot;goOnline&quot;);this.ua.lc()};Object.defineProperty(sf.prototype,&quot;app&quot;,{get:function(){return this.ua.app}});function uf(a){this.$a=a}uf.prototype.delete=function(){wf(this.$a,&quot;delete&quot;);var a=yf.Wb(),b=this.$a.ua;x(a.nb,b.app.name)!==b&amp;&amp;$c(&quot;Database &quot;+b.app.name+&quot; has already been deleted.&quot;);b.eb();delete a.nb[b.app.name];this.$a.ua=null;this.$a.ca=null;this.$a=this.$a.INTERNAL=null;return firebase.Promise.resolve()};</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">sf.prototype.ref=sf.prototype.pf;sf.prototype.refFromURL=sf.prototype.rg;sf.prototype.goOnline=sf.prototype.ag;sf.prototype.goOffline=sf.prototype.$f;uf.prototype[&quot;delete&quot;]=uf.prototype.delete;function Mc(){this.m=this.B=null}Mc.prototype.find=function(a){if(null!=this.B)return this.B.Q(a);if(a.e()||null==this.m)return null;var b=J(a);a=D(a);return this.m.contains(b)?this.m.get(b).find(a):null};function Oc(a,b,c){if(b.e())a.B=c,a.m=null;else if(null!==a.B)a.B=a.B.F(b,c);else{null==a.m&amp;&amp;(a.m=new Oe);var d=J(b);a.m.contains(d)||a.m.add(d,new Mc);a=a.m.get(d);b=D(b);Oc(a,b,c)}}</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">function zf(a,b){if(b.e())return a.B=null,a.m=null,!0;if(null!==a.B){if(a.B.J())return!1;var c=a.B;a.B=null;c.P(N,function(b,c){Oc(a,new L(b),c)});return zf(a,b)}return null!==a.m?(c=J(b),b=D(b),a.m.contains(c)&amp;&amp;zf(a.m.get(c),b)&amp;&amp;a.m.remove(c),a.m.e()?(a.m=null,!0):!1):!0}function Nc(a,b,c){null!==a.B?c(b,a.B):a.P(function(a,e){var f=new L(b.toString()+&quot;/&quot;+a);Nc(e,f,c)})}Mc.prototype.P=function(a){null!==this.m&amp;&amp;Pe(this.m,function(b,c){a(b,c)})};var Af=/[\[\].#$\/\u0000-\u001F\u007F]/,Bf=/[\[\].#$\u0000-\u001F\u007F]/;function Cf(a){return q(a)&amp;&amp;0!==a.length&amp;&amp;!Af.test(a)}function Df(a){return null===a||q(a)||fa(a)&amp;&amp;!bd(a)||ha(a)&amp;&amp;Bb(a,&quot;.sv&quot;)}function Ef(a,b,c,d){d&amp;&amp;!p(b)||Ff(Db(a,1,d),b,c)}</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">function Ff(a,b,c){c instanceof L&amp;&amp;(c=new pf(c,a));if(!p(b))throw Error(a+&quot;contains undefined &quot;+rf(c));if(ga(b))throw Error(a+&quot;contains a function &quot;+rf(c)+&quot; with contents: &quot;+b.toString());if(bd(b))throw Error(a+&quot;contains &quot;+b.toString()+&quot; &quot;+rf(c));if(q(b)&amp;&amp;b.length&gt;10485760/3&amp;&amp;10485760&lt;Nb(b))throw Error(a+&quot;contains a string greater than 10485760 utf8 bytes &quot;+rf(c)+&quot; (&#39;&quot;+b.substring(0,50)+&quot;...&#39;)&quot;);if(ha(b)){var d=!1,e=!1;Cb(b,function(b,h){if(&quot;.value&quot;===b)d=!0;else if(&quot;.priority&quot;!==b&amp;&amp;&quot;.sv&quot;!==b&amp;&amp;(e=</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">!0,!Cf(b)))throw Error(a+&quot; contains an invalid key (&quot;+b+&quot;) &quot;+rf(c)+&#39;.  Keys must be non-empty strings and can\&#39;t contain &quot;.&quot;, &quot;#&quot;, &quot;$&quot;, &quot;/&quot;, &quot;[&quot;, or &quot;]&quot;&#39;);c.push(b);Ff(a,h,c);c.pop()});if(d&amp;&amp;e)throw Error(a+&#39; contains &quot;.value&quot; child &#39;+rf(c)+&quot; in addition to actual children.&quot;);}}</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">function Gf(a,b){var c,d;for(c=0;c&lt;b.length;c++){d=b[c];for(var e=d.slice(),f=0;f&lt;e.length;f++)if((&quot;.priority&quot;!==e[f]||f!==e.length-1)&amp;&amp;!Cf(e[f]))throw Error(a+&quot;contains an invalid key (&quot;+e[f]+&quot;) in path &quot;+d.toString()+&#39;. Keys must be non-empty strings and can\&#39;t contain &quot;.&quot;, &quot;#&quot;, &quot;$&quot;, &quot;/&quot;, &quot;[&quot;, or &quot;]&quot;&#39;);}b.sort(of);e=null;for(c=0;c&lt;b.length;c++){d=b[c];if(null!==e&amp;&amp;e.contains(d))throw Error(a+&quot;contains a path &quot;+e.toString()+&quot; that is ancestor of another path &quot;+d.toString());e=d}}</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">function Hf(a,b,c){var d=Db(a,1,!1);if(!ha(b)||da(b))throw Error(d+&quot; must be an object containing the children to replace.&quot;);var e=[];Cb(b,function(a,b){var k=new L(a);Ff(d,b,c.k(k));if(&quot;.priority&quot;===ae(k)&amp;&amp;!Df(b))throw Error(d+&quot;contains an invalid value for &#39;&quot;+k.toString()+&quot;&#39;, which must be a valid Firebase priority (a string, finite number, server value, or null).&quot;);e.push(k)});Gf(d,e)}</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">function If(a,b,c){if(bd(c))throw Error(Db(a,b,!1)+&quot;is &quot;+c.toString()+&quot;, but must be a valid Firebase priority (a string, finite number, server value, or null).&quot;);if(!Df(c))throw Error(Db(a,b,!1)+&quot;must be a valid Firebase priority (a string, finite number, server value, or null).&quot;);}</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">function Jf(a,b,c){if(!c||p(b))switch(b){case &quot;value&quot;:case &quot;child_added&quot;:case &quot;child_removed&quot;:case &quot;child_changed&quot;:case &quot;child_moved&quot;:break;default:throw Error(Db(a,1,c)+&#39;must be a valid event type: &quot;value&quot;, &quot;child_added&quot;, &quot;child_removed&quot;, &quot;child_changed&quot;, or &quot;child_moved&quot;.&#39;);}}function Kf(a,b){if(p(b)&amp;&amp;!Cf(b))throw Error(Db(a,2,!0)+&#39;was an invalid key: &quot;&#39;+b+&#39;&quot;.  Firebase keys must be non-empty strings and can\&#39;t contain &quot;.&quot;, &quot;#&quot;, &quot;$&quot;, &quot;/&quot;, &quot;[&quot;, or &quot;]&quot;).&#39;);}</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">function Lf(a,b){if(!q(b)||0===b.length||Bf.test(b))throw Error(Db(a,1,!1)+&#39;was an invalid path: &quot;&#39;+b+&#39;&quot;. Paths must be non-empty strings and can\&#39;t contain &quot;.&quot;, &quot;#&quot;, &quot;$&quot;, &quot;[&quot;, or &quot;]&quot;&#39;);}function Mf(a,b){if(&quot;.info&quot;===J(b))throw Error(a+&quot; failed: Can&#39;t modify data under /.info/&quot;);}</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">function xf(a,b){var c=b.path.toString(),d;!(d=!q(b.kc.host)||0===b.kc.host.length||!Cf(b.kc.pe))&amp;&amp;(d=0!==c.length)&amp;&amp;(c&amp;&amp;(c=c.replace(/^\/*\.info(\/|$)/,&quot;/&quot;)),d=!(q(c)&amp;&amp;0!==c.length&amp;&amp;!Bf.test(c)));if(d)throw Error(Db(a,1,!1)+&#39;must be a valid firebase URL and the path can\&#39;t contain &quot;.&quot;, &quot;#&quot;, &quot;$&quot;, &quot;[&quot;, or &quot;]&quot;.&#39;);};function V(a,b){this.ua=a;this.ra=b}V.prototype.cancel=function(a){y(&quot;Firebase.onDisconnect().cancel&quot;,0,1,arguments.length);A(&quot;Firebase.onDisconnect().cancel&quot;,1,a,!0);var b=new Hb;this.ua.xd(this.ra,Ib(b,a));return b.sa};V.prototype.cancel=V.prototype.cancel;V.prototype.remove=function(a){y(&quot;Firebase.onDisconnect().remove&quot;,0,1,arguments.length);Mf(&quot;Firebase.onDisconnect().remove&quot;,this.ra);A(&quot;Firebase.onDisconnect().remove&quot;,1,a,!0);var b=new Hb;Nf(this.ua,this.ra,null,Ib(b,a));return b.sa};</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">V.prototype.remove=V.prototype.remove;V.prototype.set=function(a,b){y(&quot;Firebase.onDisconnect().set&quot;,1,2,arguments.length);Mf(&quot;Firebase.onDisconnect().set&quot;,this.ra);Ef(&quot;Firebase.onDisconnect().set&quot;,a,this.ra,!1);A(&quot;Firebase.onDisconnect().set&quot;,2,b,!0);var c=new Hb;Nf(this.ua,this.ra,a,Ib(c,b));return c.sa};V.prototype.set=V.prototype.set;</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">V.prototype.Kb=function(a,b,c){y(&quot;Firebase.onDisconnect().setWithPriority&quot;,2,3,arguments.length);Mf(&quot;Firebase.onDisconnect().setWithPriority&quot;,this.ra);Ef(&quot;Firebase.onDisconnect().setWithPriority&quot;,a,this.ra,!1);If(&quot;Firebase.onDisconnect().setWithPriority&quot;,2,b);A(&quot;Firebase.onDisconnect().setWithPriority&quot;,3,c,!0);var d=new Hb;Of(this.ua,this.ra,a,b,Ib(d,c));return d.sa};V.prototype.setWithPriority=V.prototype.Kb;</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">V.prototype.update=function(a,b){y(&quot;Firebase.onDisconnect().update&quot;,1,2,arguments.length);Mf(&quot;Firebase.onDisconnect().update&quot;,this.ra);if(da(a)){for(var c={},d=0;d&lt;a.length;++d)c[&quot;&quot;+d]=a[d];a=c;O(&quot;Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.&quot;)}Hf(&quot;Firebase.onDisconnect().update&quot;,a,this.ra);A(&quot;Firebase.onDisconnect().update&quot;,2,b,!0);</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">c=new Hb;Pf(this.ua,this.ra,a,Ib(c,b));return c.sa};V.prototype.update=V.prototype.update;function Qf(a){H(da(a)&amp;&amp;0&lt;a.length,&quot;Requires a non-empty array&quot;);this.Kf=a;this.Ec={}}Qf.prototype.Ge=function(a,b){var c;c=this.Ec[a]||[];var d=c.length;if(0&lt;d){for(var e=Array(d),f=0;f&lt;d;f++)e[f]=c[f];c=e}else c=[];for(d=0;d&lt;c.length;d++)c[d].Ke.apply(c[d].Pa,Array.prototype.slice.call(arguments,1))};Qf.prototype.hc=function(a,b,c){Rf(this,a);this.Ec[a]=this.Ec[a]||[];this.Ec[a].push({Ke:b,Pa:c});(a=this.Ye(a))&amp;&amp;b.apply(c,a)};</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">Qf.prototype.Jc=function(a,b,c){Rf(this,a);a=this.Ec[a]||[];for(var d=0;d&lt;a.length;d++)if(a[d].Ke===b&amp;&amp;(!c||c===a[d].Pa)){a.splice(d,1);break}};function Rf(a,b){H(Oa(a.Kf,function(a){return a===b}),&quot;Unknown event: &quot;+b)};function Sf(){Qf.call(this,[&quot;online&quot;]);this.ic=!0;if(&quot;undefined&quot;!==typeof window&amp;&amp;&quot;undefined&quot;!==typeof window.addEventListener&amp;&amp;!Qb()){var a=this;window.addEventListener(&quot;online&quot;,function(){a.ic||(a.ic=!0,a.Ge(&quot;online&quot;,!0))},!1);window.addEventListener(&quot;offline&quot;,function(){a.ic&amp;&amp;(a.ic=!1,a.Ge(&quot;online&quot;,!1))},!1)}}ka(Sf,Qf);Sf.prototype.Ye=function(a){H(&quot;online&quot;===a,&quot;Unknown event type: &quot;+a);return[this.ic]};ba(Sf);function Tf(){Qf.call(this,[&quot;visible&quot;]);var a,b;&quot;undefined&quot;!==typeof document&amp;&amp;&quot;undefined&quot;!==typeof document.addEventListener&amp;&amp;(&quot;undefined&quot;!==typeof document.hidden?(b=&quot;visibilitychange&quot;,a=&quot;hidden&quot;):&quot;undefined&quot;!==typeof document.mozHidden?(b=&quot;mozvisibilitychange&quot;,a=&quot;mozHidden&quot;):&quot;undefined&quot;!==typeof document.msHidden?(b=&quot;msvisibilitychange&quot;,a=&quot;msHidden&quot;):&quot;undefined&quot;!==typeof document.webkitHidden&amp;&amp;(b=&quot;webkitvisibilitychange&quot;,a=&quot;webkitHidden&quot;));this.Nb=!0;if(b){var c=this;document.addEventListener(b,</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">function(){var b=!document[a];b!==c.Nb&amp;&amp;(c.Nb=b,c.Ge(&quot;visible&quot;,b))},!1)}}ka(Tf,Qf);Tf.prototype.Ye=function(a){H(&quot;visible&quot;===a,&quot;Unknown event type: &quot;+a);return[this.Nb]};ba(Tf);var Uf=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0&lt;=f;f--)e[f]=&quot;-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz&quot;.charAt(c%64),c=Math.floor(c/64);H(0===c,&quot;Cannot push at time == 0&quot;);c=e.join(&quot;&quot;);if(d){for(f=11;0&lt;=f&amp;&amp;63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12&gt;f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12&gt;f;f++)c+=&quot;-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz&quot;.charAt(b[f]);H(20===c.length,&quot;nextPushId: Length should be 20.&quot;);</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">return c}}();function Vf(a,b){this.Oa=a;this.ca=b?b:Wf}g=Vf.prototype;g.Ra=function(a,b){return new Vf(this.Oa,this.ca.Ra(a,b,this.Oa).Y(null,null,!1,null,null))};g.remove=function(a){return new Vf(this.Oa,this.ca.remove(a,this.Oa).Y(null,null,!1,null,null))};g.get=function(a){for(var b,c=this.ca;!c.e();){b=this.Oa(a,c.key);if(0===b)return c.value;0&gt;b?c=c.left:0&lt;b&amp;&amp;(c=c.right)}return null};</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">function Xf(a,b){for(var c,d=a.ca,e=null;!d.e();){c=a.Oa(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0&gt;c?d=d.left:0&lt;c&amp;&amp;(e=d,d=d.right)}throw Error(&quot;Attempted to find predecessor key for a nonexistent key.  What gives?&quot;);}g.e=function(){return this.ca.e()};g.count=function(){return this.ca.count()};g.Hc=function(){return this.ca.Hc()};g.fc=function(){return this.ca.fc()};g.ia=function(a){return this.ca.ia(a)};</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">g.Xb=function(a){return new Yf(this.ca,null,this.Oa,!1,a)};g.Yb=function(a,b){return new Yf(this.ca,a,this.Oa,!1,b)};g.$b=function(a,b){return new Yf(this.ca,a,this.Oa,!0,b)};g.$e=function(a){return new Yf(this.ca,null,this.Oa,!0,a)};function Yf(a,b,c,d,e){this.Hd=e||null;this.le=d;this.Sa=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&amp;&amp;(e*=-1),0&gt;e)a=this.le?a.left:a.right;else if(0===e){this.Sa.push(a);break}else this.Sa.push(a),a=this.le?a.right:a.left}</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">function R(a){if(0===a.Sa.length)return null;var b=a.Sa.pop(),c;c=a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value};if(a.le)for(b=b.left;!b.e();)a.Sa.push(b),b=b.right;else for(b=b.right;!b.e();)a.Sa.push(b),b=b.left;return c}function Zf(a){if(0===a.Sa.length)return null;var b;b=a.Sa;b=b[b.length-1];return a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value}}function $f(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:Wf;this.right=null!=e?e:Wf}g=$f.prototype;</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">g.Y=function(a,b,c,d,e){return new $f(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};g.count=function(){return this.left.count()+1+this.right.count()};g.e=function(){return!1};g.ia=function(a){return this.left.ia(a)||a(this.key,this.value)||this.right.ia(a)};function ag(a){return a.left.e()?a:ag(a.left)}g.Hc=function(){return ag(this).key};g.fc=function(){return this.right.e()?this.key:this.right.fc()};</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">g.Ra=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0&gt;d?e.Y(null,null,null,e.left.Ra(a,b,c),null):0===d?e.Y(null,b,null,null,null):e.Y(null,null,null,null,e.right.Ra(a,b,c));return bg(e)};function cg(a){if(a.left.e())return Wf;a.left.fa()||a.left.left.fa()||(a=dg(a));a=a.Y(null,null,null,cg(a.left),null);return bg(a)}</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">g.remove=function(a,b){var c,d;c=this;if(0&gt;b(a,c.key))c.left.e()||c.left.fa()||c.left.left.fa()||(c=dg(c)),c=c.Y(null,null,null,c.left.remove(a,b),null);else{c.left.fa()&amp;&amp;(c=eg(c));c.right.e()||c.right.fa()||c.right.left.fa()||(c=fg(c),c.left.left.fa()&amp;&amp;(c=eg(c),c=fg(c)));if(0===b(a,c.key)){if(c.right.e())return Wf;d=ag(c.right);c=c.Y(d.key,d.value,null,null,cg(c.right))}c=c.Y(null,null,null,null,c.right.remove(a,b))}return bg(c)};g.fa=function(){return this.color};</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">function bg(a){a.right.fa()&amp;&amp;!a.left.fa()&amp;&amp;(a=gg(a));a.left.fa()&amp;&amp;a.left.left.fa()&amp;&amp;(a=eg(a));a.left.fa()&amp;&amp;a.right.fa()&amp;&amp;(a=fg(a));return a}function dg(a){a=fg(a);a.right.left.fa()&amp;&amp;(a=a.Y(null,null,null,null,eg(a.right)),a=gg(a),a=fg(a));return a}function gg(a){return a.right.Y(null,null,a.color,a.Y(null,null,!0,null,a.right.left),null)}function eg(a){return a.left.Y(null,null,a.color,null,a.Y(null,null,!0,a.left.right,null))}</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">function fg(a){return a.Y(null,null,!a.color,a.left.Y(null,null,!a.left.color,null,null),a.right.Y(null,null,!a.right.color,null,null))}function hg(){}g=hg.prototype;g.Y=function(){return this};g.Ra=function(a,b){return new $f(a,b,null)};g.remove=function(){return this};g.count=function(){return 0};g.e=function(){return!0};g.ia=function(){return!1};g.Hc=function(){return null};g.fc=function(){return null};g.fa=function(){return!1};var Wf=new hg;function P(a,b,c){this.m=a;(this.ba=b)&amp;&amp;re(this.ba);a.e()&amp;&amp;H(!this.ba||this.ba.e(),&quot;An empty node cannot have a priority&quot;);this.zb=c;this.Eb=null}g=P.prototype;g.J=function(){return!1};g.C=function(){return this.ba||F};g.ga=function(a){return this.m.e()?this:new P(this.m,a,this.zb)};g.R=function(a){if(&quot;.priority&quot;===a)return this.C();a=this.m.get(a);return null===a?F:a};g.Q=function(a){var b=J(a);return null===b?this:this.R(b).Q(D(a))};g.Fa=function(a){return null!==this.m.get(a)};</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">g.U=function(a,b){H(b,&quot;We should always be passing snapshot nodes&quot;);if(&quot;.priority&quot;===a)return this.ga(b);var c=new K(a,b),d,e;b.e()?(d=this.m.remove(a),c=Me(this.zb,c,this.m)):(d=this.m.Ra(a,b),c=Ke(this.zb,c,this.m));e=d.e()?F:this.ba;return new P(d,e,c)};g.F=function(a,b){var c=J(a);if(null===c)return b;H(&quot;.priority&quot;!==J(a)||1===$d(a),&quot;.priority must be the last token in a path&quot;);var d=this.R(c).F(D(a),b);return this.U(c,d)};g.e=function(){return this.m.e()};g.Fb=function(){return this.m.count()};</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">var ig=/^(0|[1-9]\d*)$/;g=P.prototype;g.H=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.P(N,function(f,h){b[f]=h.H(a);c++;e&amp;&amp;ig.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&amp;&amp;e&amp;&amp;d&lt;2*c){var f=[],h;for(h in b)f[h]=b[h];return f}a&amp;&amp;!this.C().e()&amp;&amp;(b[&quot;.priority&quot;]=this.C().H());return b};g.hash=function(){if(null===this.Eb){var a=&quot;&quot;;this.C().e()||(a+=&quot;priority:&quot;+te(this.C().H())+&quot;:&quot;);this.P(N,function(b,c){var d=c.hash();&quot;&quot;!==d&amp;&amp;(a+=&quot;:&quot;+b+&quot;:&quot;+d)});this.Eb=&quot;&quot;===a?&quot;&quot;:Uc(a)}return this.Eb};</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">g.Ze=function(a,b,c){return(c=jg(this,c))?(a=Xf(c,new K(a,b)))?a.name:null:Xf(this.m,a)};function pe(a,b){var c;c=(c=jg(a,b))?(c=c.Hc())&amp;&amp;c.name:a.m.Hc();return c?new K(c,a.m.get(c)):null}function qe(a,b){var c;c=(c=jg(a,b))?(c=c.fc())&amp;&amp;c.name:a.m.fc();return c?new K(c,a.m.get(c)):null}g.P=function(a,b){var c=jg(this,a);return c?c.ia(function(a){return b(a.name,a.S)}):this.m.ia(b)};g.Xb=function(a){return this.Yb(a.Ic(),a)};</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">g.Yb=function(a,b){var c=jg(this,b);if(c)return c.Yb(a,function(a){return a});for(var c=this.m.Yb(a.name,Jc),d=Zf(c);null!=d&amp;&amp;0&gt;b.compare(d,a);)R(c),d=Zf(c);return c};g.$e=function(a){return this.$b(a.Gc(),a)};g.$b=function(a,b){var c=jg(this,b);if(c)return c.$b(a,function(a){return a});for(var c=this.m.$b(a.name,Jc),d=Zf(c);null!=d&amp;&amp;0&lt;b.compare(d,a);)R(c),d=Zf(c);return c};g.tc=function(a){return this.e()?a.e()?0:-1:a.J()||a.e()?1:a===ye?-1:0};</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">g.ob=function(a){if(a===ee||ua(this.zb.dc,a.toString()))return this;var b=this.zb,c=this.m;H(a!==ee,&quot;KeyIndex always exists and isn&#39;t meant to be added to the IndexMap.&quot;);for(var d=[],e=!1,c=c.Xb(Jc),f=R(c);f;)e=e||a.yc(f.S),d.push(f),f=R(c);d=e?Le(d,oe(a)):ve;e=a.toString();c=ya(b.dc);c[e]=a;a=ya(b.od);a[e]=d;return new P(this.m,this.ba,new Je(a,c))};g.zc=function(a){return a===ee||ua(this.zb.dc,a.toString())};</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">g.$=function(a){if(a===this)return!0;if(a.J())return!1;if(this.C().$(a.C())&amp;&amp;this.m.count()===a.m.count()){var b=this.Xb(N);a=a.Xb(N);for(var c=R(b),d=R(a);c&amp;&amp;d;){if(c.name!==d.name||!c.S.$(d.S))return!1;c=R(b);d=R(a)}return null===c&amp;&amp;null===d}return!1};function jg(a,b){return b===ee?null:a.zb.get(b.toString())}g.toString=function(){return B(this.H(!0))};function M(a,b){if(null===a)return F;var c=null;&quot;object&quot;===typeof a&amp;&amp;&quot;.priority&quot;in a?c=a[&quot;.priority&quot;]:&quot;undefined&quot;!==typeof b&amp;&amp;(c=b);H(null===c||&quot;string&quot;===typeof c||&quot;number&quot;===typeof c||&quot;object&quot;===typeof c&amp;&amp;&quot;.sv&quot;in c,&quot;Invalid priority type found: &quot;+typeof c);&quot;object&quot;===typeof a&amp;&amp;&quot;.value&quot;in a&amp;&amp;null!==a[&quot;.value&quot;]&amp;&amp;(a=a[&quot;.value&quot;]);if(&quot;object&quot;!==typeof a||&quot;.sv&quot;in a)return new Qc(a,M(c));if(a instanceof Array){var d=F,e=a;t(e,function(a,b){if(Bb(e,b)&amp;&amp;&quot;.&quot;!==b.substring(0,1)){var c=M(a);if(c.J()||!c.e())d=</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">d.U(b,c)}});return d.ga(M(c))}var f=[],h=!1,k=a;Cb(k,function(a){if(&quot;string&quot;!==typeof a||&quot;.&quot;!==a.substring(0,1)){var b=M(k[a]);b.e()||(h=h||!b.C().e(),f.push(new K(a,b)))}});if(0==f.length)return F;var m=Le(f,Gc,function(a){return a.name},Ic);if(h){var l=Le(f,oe(N));return new P(m,M(c),new Je({&quot;.priority&quot;:l},{&quot;.priority&quot;:N}))}return new P(m,M(c),Ne)}var kg=Math.log(2);</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">function lg(a){this.count=parseInt(Math.log(a+1)/kg,10);this.Re=this.count-1;this.Lf=a+1&amp;parseInt(Array(this.count+1).join(&quot;1&quot;),2)}function mg(a){var b=!(a.Lf&amp;1&lt;&lt;a.Re);a.Re--;return b}</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">function Le(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var l=a[b],u=c?c(l):l;return new $f(u,l.S,!1,null,null)}var l=parseInt(f/2,10)+b,f=e(b,l),z=e(l+1,d),l=a[l],u=c?c(l):l;return new $f(u,l.S,!1,f,z)}a.sort(b);var f=function(b){function d(b,h){var k=u-b,z=u;u-=b;var z=e(k+1,z),k=a[k],G=c?c(k):k,z=new $f(G,k.S,h,null,z);f?f.left=z:l=z;f=z}for(var f=null,l=null,u=a.length,z=0;z&lt;b.count;++z){var G=mg(b),ud=Math.pow(2,b.count-(z+1));G?d(ud,!1):(d(ud,!1),d(ud,!0))}return l}(new lg(a.length));</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">return null!==f?new Vf(d||b,f):new Vf(d||b)}function te(a){return&quot;number&quot;===typeof a?&quot;number:&quot;+id(a):&quot;string:&quot;+a}function re(a){if(a.J()){var b=a.H();H(&quot;string&quot;===typeof b||&quot;number&quot;===typeof b||&quot;object&quot;===typeof b&amp;&amp;Bb(b,&quot;.sv&quot;),&quot;Priority must be a string or number.&quot;)}else H(a===ye||a.e(),&quot;priority of unexpected type.&quot;);H(a===ye||a.C().e(),&quot;Priority nodes can&#39;t have a priority of their own.&quot;)}var F=new P(new Vf(Ic),null,Ne);function ng(){P.call(this,new Vf(Ic),F,Ne)}ka(ng,P);g=ng.prototype;</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">g.tc=function(a){return a===this?0:1};g.$=function(a){return a===this};g.C=function(){return this};g.R=function(){return F};g.e=function(){return!1};var ye=new ng,we=new K(&quot;[MIN_NAME]&quot;,F),Ce=new K(&quot;[MAX_NAME]&quot;,ye);function W(a,b,c){this.A=a;this.W=b;this.g=c}W.prototype.H=function(){y(&quot;Firebase.DataSnapshot.val&quot;,0,0,arguments.length);return this.A.H()};W.prototype.val=W.prototype.H;W.prototype.Ue=function(){y(&quot;Firebase.DataSnapshot.exportVal&quot;,0,0,arguments.length);return this.A.H(!0)};W.prototype.exportVal=W.prototype.Ue;W.prototype.Vf=function(){y(&quot;Firebase.DataSnapshot.exists&quot;,0,0,arguments.length);return!this.A.e()};W.prototype.exists=W.prototype.Vf;</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">W.prototype.k=function(a){y(&quot;Firebase.DataSnapshot.child&quot;,0,1,arguments.length);fa(a)&amp;&amp;(a=String(a));Lf(&quot;Firebase.DataSnapshot.child&quot;,a);var b=new L(a),c=this.W.k(b);return new W(this.A.Q(b),c,N)};W.prototype.child=W.prototype.k;W.prototype.Fa=function(a){y(&quot;Firebase.DataSnapshot.hasChild&quot;,1,1,arguments.length);Lf(&quot;Firebase.DataSnapshot.hasChild&quot;,a);var b=new L(a);return!this.A.Q(b).e()};W.prototype.hasChild=W.prototype.Fa;</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">W.prototype.C=function(){y(&quot;Firebase.DataSnapshot.getPriority&quot;,0,0,arguments.length);return this.A.C().H()};W.prototype.getPriority=W.prototype.C;W.prototype.forEach=function(a){y(&quot;Firebase.DataSnapshot.forEach&quot;,1,1,arguments.length);A(&quot;Firebase.DataSnapshot.forEach&quot;,1,a,!1);if(this.A.J())return!1;var b=this;return!!this.A.P(this.g,function(c,d){return a(new W(d,b.W.k(c),N))})};W.prototype.forEach=W.prototype.forEach;</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">W.prototype.kd=function(){y(&quot;Firebase.DataSnapshot.hasChildren&quot;,0,0,arguments.length);return this.A.J()?!1:!this.A.e()};W.prototype.hasChildren=W.prototype.kd;W.prototype.getKey=function(){y(&quot;Firebase.DataSnapshot.key&quot;,0,0,arguments.length);return this.W.getKey()};kd(W.prototype,&quot;key&quot;,W.prototype.getKey);W.prototype.Fb=function(){y(&quot;Firebase.DataSnapshot.numChildren&quot;,0,0,arguments.length);return this.A.Fb()};W.prototype.numChildren=W.prototype.Fb;</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">W.prototype.xb=function(){y(&quot;Firebase.DataSnapshot.ref&quot;,0,0,arguments.length);return this.W};kd(W.prototype,&quot;ref&quot;,W.prototype.xb);function Yd(a,b){this.O=a;this.Ld=b}function Vd(a,b,c,d){return new Yd(new zc(b,c,d),a.Ld)}function Zd(a){return a.O.ea?a.O.j():null}Yd.prototype.w=function(){return this.Ld};function Ac(a){return a.Ld.ea?a.Ld.j():null};function og(a,b){this.W=a;var c=a.n,d=new fe(c.g),c=S(c)?new fe(c.g):c.ya?new le(c):new ge(c);this.of=new Pd(c);var e=b.w(),f=b.O,h=d.za(F,e.j(),null),k=c.za(F,f.j(),null);this.Na=new Yd(new zc(k,f.ea,c.Qa()),new zc(h,e.ea,d.Qa()));this.ab=[];this.Sf=new Kd(a)}function pg(a){return a.W}g=og.prototype;g.w=function(){return this.Na.w().j()};g.jb=function(a){var b=Ac(this.Na);return b&amp;&amp;(S(this.W.n)||!a.e()&amp;&amp;!b.R(J(a)).e())?b.Q(a):null};g.e=function(){return 0===this.ab.length};g.Ob=function(a){this.ab.push(a)};</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">g.mb=function(a,b){var c=[];if(b){H(null==a,&quot;A cancel should cancel all event registrations.&quot;);var d=this.W.path;Ja(this.ab,function(a){(a=a.Pe(b,d))&amp;&amp;c.push(a)})}if(a){for(var e=[],f=0;f&lt;this.ab.length;++f){var h=this.ab[f];if(!h.matches(a))e.push(h);else if(a.af()){e=e.concat(this.ab.slice(f+1));break}}this.ab=e}else this.ab=[];return c};</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">g.gb=function(a,b,c){a.type===wd&amp;&amp;null!==a.source.Ib&amp;&amp;(H(Ac(this.Na),&quot;We should always have a full cache before handling merges&quot;),H(Zd(this.Na),&quot;Missing event cache, even though we have a server cache&quot;));var d=this.Na;a=this.of.gb(d,a,b,c);b=this.of;c=a.Sd;H(c.O.j().zc(b.V.g),&quot;Event snap not indexed&quot;);H(c.w().j().zc(b.V.g),&quot;Server snap not indexed&quot;);H(Dc(a.Sd.w())||!Dc(d.w()),&quot;Once a server snap is complete, it should never go back&quot;);this.Na=a.Sd;return qg(this,a.Mf,a.Sd.O.j(),null)};</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">function rg(a,b){var c=a.Na.O,d=[];c.j().J()||c.j().P(N,function(a,b){d.push(new I(&quot;child_added&quot;,b,a))});c.ea&amp;&amp;d.push(Bc(c.j()));return qg(a,d,c.j(),b)}function qg(a,b,c,d){return Ld(a.Sf,b,c,d?[d]:a.ab)};function sg(a,b,c){this.Qb=a;this.sb=b;this.ub=c||null}g=sg.prototype;g.tf=function(a){return&quot;value&quot;===a};g.createEvent=function(a,b){var c=b.n.g;return new tc(&quot;value&quot;,this,new W(a.Ma,b.xb(),c))};g.Ub=function(a){var b=this.ub;if(&quot;cancel&quot;===a.ge()){H(this.sb,&quot;Raising a cancel event on a listener with no cancel callback&quot;);var c=this.sb;return function(){c.call(b,a.error)}}var d=this.Qb;return function(){d.call(b,a.Md)}};g.Pe=function(a,b){return this.sb?new uc(this,a,b):null};</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">g.matches=function(a){return a instanceof sg?a.Qb&amp;&amp;this.Qb?a.Qb===this.Qb&amp;&amp;a.ub===this.ub:!0:!1};g.af=function(){return null!==this.Qb};function tg(a,b,c){this.ha=a;this.sb=b;this.ub=c}g=tg.prototype;g.tf=function(a){a=&quot;children_added&quot;===a?&quot;child_added&quot;:a;return(&quot;children_removed&quot;===a?&quot;child_removed&quot;:a)in this.ha};g.Pe=function(a,b){return this.sb?new uc(this,a,b):null};</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">g.createEvent=function(a,b){H(null!=a.Za,&quot;Child events should have a childName.&quot;);var c=b.xb().k(a.Za);return new tc(a.type,this,new W(a.Ma,c,b.n.g),a.Dd)};g.Ub=function(a){var b=this.ub;if(&quot;cancel&quot;===a.ge()){H(this.sb,&quot;Raising a cancel event on a listener with no cancel callback&quot;);var c=this.sb;return function(){c.call(b,a.error)}}var d=this.ha[a.gd];return function(){d.call(b,a.Md,a.Dd)}};</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">g.matches=function(a){if(a instanceof tg){if(!this.ha||!a.ha)return!0;if(this.ub===a.ub){var b=qa(a.ha);if(b===qa(this.ha)){if(1===b){var b=ra(a.ha),c=ra(this.ha);return c===b&amp;&amp;(!a.ha[b]||!this.ha[c]||a.ha[b]===this.ha[c])}return pa(this.ha,function(b,c){return a.ha[c]===b})}}}return!1};g.af=function(){return null!==this.ha};function X(a,b,c,d){this.u=a;this.path=b;this.n=c;this.Oc=d}</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">function ug(a){var b=null,c=null;a.la&amp;&amp;(b=ie(a));a.oa&amp;&amp;(c=ke(a));if(a.g===ee){if(a.la){if(&quot;[MIN_NAME]&quot;!=he(a))throw Error(&quot;Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().&quot;);if(&quot;string&quot;!==typeof b)throw Error(&quot;Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.&quot;);}if(a.oa){if(&quot;[MAX_NAME]&quot;!=je(a))throw Error(&quot;Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().&quot;);if(&quot;string&quot;!==</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">typeof c)throw Error(&quot;Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.&quot;);}}else if(a.g===N){if(null!=b&amp;&amp;!Df(b)||null!=c&amp;&amp;!Df(c))throw Error(&quot;Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).&quot;);}else if(H(a.g instanceof xe||a.g===De,&quot;unknown index type.&quot;),null!=b&amp;&amp;&quot;object&quot;===typeof b||null!=c&amp;&amp;&quot;object&quot;===typeof c)throw Error(&quot;Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.&quot;);</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">}function vg(a){if(a.la&amp;&amp;a.oa&amp;&amp;a.ya&amp;&amp;(!a.ya||&quot;&quot;===a.oc))throw Error(&quot;Query: Can&#39;t combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.&quot;);}function wg(a,b){if(!0===a.Oc)throw Error(b+&quot;: You can&#39;t combine multiple orderBy calls.&quot;);}g=X.prototype;g.xb=function(){y(&quot;Query.ref&quot;,0,0,arguments.length);return new U(this.u,this.path)};</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">g.hc=function(a,b,c,d){y(&quot;Query.on&quot;,2,4,arguments.length);Jf(&quot;Query.on&quot;,a,!1);A(&quot;Query.on&quot;,2,b,!1);var e=xg(&quot;Query.on&quot;,c,d);if(&quot;value&quot;===a)yg(this.u,this,new sg(b,e.cancel||null,e.Pa||null));else{var f={};f[a]=b;yg(this.u,this,new tg(f,e.cancel,e.Pa))}return b};</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">g.Jc=function(a,b,c){y(&quot;Query.off&quot;,0,3,arguments.length);Jf(&quot;Query.off&quot;,a,!0);A(&quot;Query.off&quot;,2,b,!0);Eb(&quot;Query.off&quot;,3,c);var d=null,e=null;&quot;value&quot;===a?d=new sg(b||null,null,c||null):a&amp;&amp;(b&amp;&amp;(e={},e[a]=b),d=new tg(e,null,c||null));e=this.u;d=&quot;.info&quot;===J(this.path)?e.pd.mb(this,d):e.K.mb(this,d);pc(e.da,this.path,d)};</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">g.kg=function(a,b){function c(k){f&amp;&amp;(f=!1,e.Jc(a,c),b&amp;&amp;b.call(d.Pa,k),h.resolve(k))}y(&quot;Query.once&quot;,1,4,arguments.length);Jf(&quot;Query.once&quot;,a,!1);A(&quot;Query.once&quot;,2,b,!0);var d=xg(&quot;Query.once&quot;,arguments[2],arguments[3]),e=this,f=!0,h=new Hb;Jb(h.sa);this.hc(a,c,function(b){e.Jc(a,c);d.cancel&amp;&amp;d.cancel.call(d.Pa,b);h.reject(b)});return h.sa};</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">g.ne=function(a){y(&quot;Query.limitToFirst&quot;,1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0&gt;=a)throw Error(&quot;Query.limitToFirst: First argument must be a positive integer.&quot;);if(this.n.ya)throw Error(&quot;Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).&quot;);return new X(this.u,this.path,this.n.ne(a),this.Oc)};</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">g.oe=function(a){y(&quot;Query.limitToLast&quot;,1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0&gt;=a)throw Error(&quot;Query.limitToLast: First argument must be a positive integer.&quot;);if(this.n.ya)throw Error(&quot;Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).&quot;);return new X(this.u,this.path,this.n.oe(a),this.Oc)};</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">g.lg=function(a){y(&quot;Query.orderByChild&quot;,1,1,arguments.length);if(&quot;$key&quot;===a)throw Error(&#39;Query.orderByChild: &quot;$key&quot; is invalid.  Use Query.orderByKey() instead.&#39;);if(&quot;$priority&quot;===a)throw Error(&#39;Query.orderByChild: &quot;$priority&quot; is invalid.  Use Query.orderByPriority() instead.&#39;);if(&quot;$value&quot;===a)throw Error(&#39;Query.orderByChild: &quot;$value&quot; is invalid.  Use Query.orderByValue() instead.&#39;);Lf(&quot;Query.orderByChild&quot;,a);wg(this,&quot;Query.orderByChild&quot;);var b=new L(a);if(b.e())throw Error(&quot;Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.&quot;);</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">b=new xe(b);b=He(this.n,b);ug(b);return new X(this.u,this.path,b,!0)};g.mg=function(){y(&quot;Query.orderByKey&quot;,0,0,arguments.length);wg(this,&quot;Query.orderByKey&quot;);var a=He(this.n,ee);ug(a);return new X(this.u,this.path,a,!0)};g.ng=function(){y(&quot;Query.orderByPriority&quot;,0,0,arguments.length);wg(this,&quot;Query.orderByPriority&quot;);var a=He(this.n,N);ug(a);return new X(this.u,this.path,a,!0)};</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">g.og=function(){y(&quot;Query.orderByValue&quot;,0,0,arguments.length);wg(this,&quot;Query.orderByValue&quot;);var a=He(this.n,De);ug(a);return new X(this.u,this.path,a,!0)};g.Nd=function(a,b){y(&quot;Query.startAt&quot;,0,2,arguments.length);Ef(&quot;Query.startAt&quot;,a,this.path,!0);Kf(&quot;Query.startAt&quot;,b);var c=this.n.Nd(a,b);vg(c);ug(c);if(this.n.la)throw Error(&quot;Query.startAt: Starting point was already set (by another call to startAt or equalTo).&quot;);p(a)||(b=a=null);return new X(this.u,this.path,c,this.Oc)};</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">g.fd=function(a,b){y(&quot;Query.endAt&quot;,0,2,arguments.length);Ef(&quot;Query.endAt&quot;,a,this.path,!0);Kf(&quot;Query.endAt&quot;,b);var c=this.n.fd(a,b);vg(c);ug(c);if(this.n.oa)throw Error(&quot;Query.endAt: Ending point was already set (by another call to endAt or equalTo).&quot;);return new X(this.u,this.path,c,this.Oc)};</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">g.Rf=function(a,b){y(&quot;Query.equalTo&quot;,1,2,arguments.length);Ef(&quot;Query.equalTo&quot;,a,this.path,!1);Kf(&quot;Query.equalTo&quot;,b);if(this.n.la)throw Error(&quot;Query.equalTo: Starting point was already set (by another call to endAt or equalTo).&quot;);if(this.n.oa)throw Error(&quot;Query.equalTo: Ending point was already set (by another call to endAt or equalTo).&quot;);return this.Nd(a,b).fd(a,b)};</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">g.toString=function(){y(&quot;Query.toString&quot;,0,0,arguments.length);for(var a=this.path,b=&quot;&quot;,c=a.Z;c&lt;a.o.length;c++)&quot;&quot;!==a.o[c]&amp;&amp;(b+=&quot;/&quot;+encodeURIComponent(String(a.o[c])));return this.u.toString()+(b||&quot;/&quot;)};g.ka=function(){var a=fd(Ie(this.n));return&quot;{}&quot;===a?&quot;default&quot;:a};</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">g.isEqual=function(a){y(&quot;Query.isEqual&quot;,1,1,arguments.length);if(!(a instanceof X))throw Error(&quot;Query.isEqual failed: First argument must be an instance of firebase.database.Query.&quot;);var b=this.u===a.u,c=this.path.$(a.path),d=this.ka()===a.ka();return b&amp;&amp;c&amp;&amp;d};</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">function xg(a,b,c){var d={cancel:null,Pa:null};if(b&amp;&amp;c)d.cancel=b,A(a,3,d.cancel,!0),d.Pa=c,Eb(a,4,d.Pa);else if(b)if(&quot;object&quot;===typeof b&amp;&amp;null!==b)d.Pa=b;else if(&quot;function&quot;===typeof b)d.cancel=b;else throw Error(Db(a,3,!0)+&quot; must either be a cancel callback or a context object.&quot;);return d}X.prototype.on=X.prototype.hc;X.prototype.off=X.prototype.Jc;X.prototype.once=X.prototype.kg;X.prototype.limitToFirst=X.prototype.ne;X.prototype.limitToLast=X.prototype.oe;X.prototype.orderByChild=X.prototype.lg;</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">X.prototype.orderByKey=X.prototype.mg;X.prototype.orderByPriority=X.prototype.ng;X.prototype.orderByValue=X.prototype.og;X.prototype.startAt=X.prototype.Nd;X.prototype.endAt=X.prototype.fd;X.prototype.equalTo=X.prototype.Rf;X.prototype.toString=X.prototype.toString;X.prototype.isEqual=X.prototype.isEqual;kd(X.prototype,&quot;ref&quot;,X.prototype.xb);function zg(a,b){this.value=a;this.children=b||Ag}var Ag=new Vf(function(a,b){return a===b?0:a&lt;b?-1:1});function Bg(a){var b=Q;t(a,function(a,d){b=b.set(new L(d),a)});return b}g=zg.prototype;g.e=function(){return null===this.value&amp;&amp;this.children.e()};function Cg(a,b,c){if(null!=a.value&amp;&amp;c(a.value))return{path:C,value:a.value};if(b.e())return null;var d=J(b);a=a.children.get(d);return null!==a?(b=Cg(a,D(b),c),null!=b?{path:(new L(d)).k(b.path),value:b.value}:null):null}</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">function Dg(a,b){return Cg(a,b,function(){return!0})}g.subtree=function(a){if(a.e())return this;var b=this.children.get(J(a));return null!==b?b.subtree(D(a)):Q};g.set=function(a,b){if(a.e())return new zg(b,this.children);var c=J(a),d=(this.children.get(c)||Q).set(D(a),b),c=this.children.Ra(c,d);return new zg(this.value,c)};</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">g.remove=function(a){if(a.e())return this.children.e()?Q:new zg(null,this.children);var b=J(a),c=this.children.get(b);return c?(a=c.remove(D(a)),b=a.e()?this.children.remove(b):this.children.Ra(b,a),null===this.value&amp;&amp;b.e()?Q:new zg(this.value,b)):this};g.get=function(a){if(a.e())return this.value;var b=this.children.get(J(a));return b?b.get(D(a)):null};</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">function de(a,b,c){if(b.e())return c;var d=J(b);b=de(a.children.get(d)||Q,D(b),c);d=b.e()?a.children.remove(d):a.children.Ra(d,b);return new zg(a.value,d)}function Eg(a,b){return Fg(a,C,b)}function Fg(a,b,c){var d={};a.children.ia(function(a,f){d[a]=Fg(f,b.k(a),c)});return c(b,a.value,d)}function Gg(a,b,c){return Hg(a,b,C,c)}function Hg(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=J(b);return(a=a.children.get(e))?Hg(a,D(b),c.k(e),d):null}</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">function Ig(a,b,c){Jg(a,b,C,c)}function Jg(a,b,c,d){if(b.e())return a;a.value&amp;&amp;d(c,a.value);var e=J(b);return(a=a.children.get(e))?Jg(a,D(b),c.k(e),d):Q}function be(a,b){Kg(a,C,b)}function Kg(a,b,c){a.children.ia(function(a,e){Kg(e,b.k(a),c)});a.value&amp;&amp;c(b,a.value)}function Lg(a,b){a.children.ia(function(a,d){d.value&amp;&amp;b(a,d.value)})}var Q=new zg(null);zg.prototype.toString=function(){var a={};be(this,function(b,c){a[b.toString()]=c.toString()});return B(a)};function Mg(a,b,c){this.type=Ud;this.source=Ng;this.path=a;this.Pb=b;this.Id=c}Mg.prototype.Nc=function(a){if(this.path.e()){if(null!=this.Pb.value)return H(this.Pb.children.e(),&quot;affectedTree should not have overlapping affected paths.&quot;),this;a=this.Pb.subtree(new L(a));return new Mg(C,a,this.Id)}H(J(this.path)===a,&quot;operationForChild called for unrelated child.&quot;);return new Mg(D(this.path),this.Pb,this.Id)};</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">Mg.prototype.toString=function(){return&quot;Operation(&quot;+this.path+&quot;: &quot;+this.source.toString()+&quot; ack write revert=&quot;+this.Id+&quot; affectedTree=&quot;+this.Pb+&quot;)&quot;};var ac=0,wd=1,Ud=2,cc=3;function Og(a,b,c,d){this.ee=a;this.We=b;this.Ib=c;this.Ee=d;H(!d||b,&quot;Tagged queries must be from server.&quot;)}var Ng=new Og(!0,!1,null,!1),Pg=new Og(!1,!0,null,!1);Og.prototype.toString=function(){return this.ee?&quot;user&quot;:this.Ee?&quot;server(queryID=&quot;+this.Ib+&quot;)&quot;:&quot;server&quot;};function Qg(a){this.X=a}var Rg=new Qg(new zg(null));function Sg(a,b,c){if(b.e())return new Qg(new zg(c));var d=Dg(a.X,b);if(null!=d){var e=d.path,d=d.value;b=T(e,b);d=d.F(b,c);return new Qg(a.X.set(e,d))}a=de(a.X,b,new zg(c));return new Qg(a)}function Tg(a,b,c){var d=a;Cb(c,function(a,c){d=Sg(d,b.k(a),c)});return d}Qg.prototype.Ed=function(a){if(a.e())return Rg;a=de(this.X,a,Q);return new Qg(a)};function Ug(a,b){var c=Dg(a.X,b);return null!=c?a.X.get(c.path).Q(T(c.path,b)):null}</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">function Vg(a){var b=[],c=a.X.value;null!=c?c.J()||c.P(N,function(a,c){b.push(new K(a,c))}):a.X.children.ia(function(a,c){null!=c.value&amp;&amp;b.push(new K(a,c.value))});return b}function Wg(a,b){if(b.e())return a;var c=Ug(a,b);return null!=c?new Qg(new zg(c)):new Qg(a.X.subtree(b))}Qg.prototype.e=function(){return this.X.e()};Qg.prototype.apply=function(a){return Xg(C,this.X,a)};</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">function Xg(a,b,c){if(null!=b.value)return c.F(a,b.value);var d=null;b.children.ia(function(b,f){&quot;.priority&quot;===b?(H(null!==f.value,&quot;Priority writes must always be leaf nodes&quot;),d=f.value):c=Xg(a.k(b),f,c)});c.Q(a).e()||null===d||(c=c.F(a.k(&quot;.priority&quot;),d));return c};function Yg(){this.Aa={}}g=Yg.prototype;g.e=function(){return xa(this.Aa)};g.gb=function(a,b,c){var d=a.source.Ib;if(null!==d)return d=x(this.Aa,d),H(null!=d,&quot;SyncTree gave us an op for an invalid query.&quot;),d.gb(a,b,c);var e=[];t(this.Aa,function(d){e=e.concat(d.gb(a,b,c))});return e};g.Ob=function(a,b,c,d,e){var f=a.ka(),h=x(this.Aa,f);if(!h){var h=c.Ba(e?d:null),k=!1;h?k=!0:(h=d instanceof P?c.sc(d):F,k=!1);h=new og(a,new Yd(new zc(h,k,!1),new zc(d,e,!1)));this.Aa[f]=h}h.Ob(b);return rg(h,b)};</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">g.mb=function(a,b,c){var d=a.ka(),e=[],f=[],h=null!=Zg(this);if(&quot;default&quot;===d){var k=this;t(this.Aa,function(a,d){f=f.concat(a.mb(b,c));a.e()&amp;&amp;(delete k.Aa[d],S(a.W.n)||e.push(a.W))})}else{var m=x(this.Aa,d);m&amp;&amp;(f=f.concat(m.mb(b,c)),m.e()&amp;&amp;(delete this.Aa[d],S(m.W.n)||e.push(m.W)))}h&amp;&amp;null==Zg(this)&amp;&amp;e.push(new U(a.u,a.path));return{sg:e,Tf:f}};function $g(a){return Ka(sa(a.Aa),function(a){return!S(a.W.n)})}g.jb=function(a){var b=null;t(this.Aa,function(c){b=b||c.jb(a)});return b};</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">function ah(a,b){if(S(b.n))return Zg(a);var c=b.ka();return x(a.Aa,c)}function Zg(a){return wa(a.Aa,function(a){return S(a.W.n)})||null};function bh(){this.T=Rg;this.ma=[];this.Cc=-1}function ch(a,b){for(var c=0;c&lt;a.ma.length;c++){var d=a.ma[c];if(d.Zc===b)return d}return null}g=bh.prototype;</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">g.Ed=function(a){var b=Pa(this.ma,function(b){return b.Zc===a});H(0&lt;=b,&quot;removeWrite called with nonexistent writeId.&quot;);var c=this.ma[b];this.ma.splice(b,1);for(var d=c.visible,e=!1,f=this.ma.length-1;d&amp;&amp;0&lt;=f;){var h=this.ma[f];h.visible&amp;&amp;(f&gt;=b&amp;&amp;dh(h,c.path)?d=!1:c.path.contains(h.path)&amp;&amp;(e=!0));f--}if(d){if(e)this.T=eh(this.ma,fh,C),this.Cc=0&lt;this.ma.length?this.ma[this.ma.length-1].Zc:-1;else if(c.Ja)this.T=this.T.Ed(c.path);else{var k=this;t(c.children,function(a,b){k.T=k.T.Ed(c.path.k(b))})}return!0}return!1};</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">g.Ba=function(a,b,c,d){if(c||d){var e=Wg(this.T,a);return!d&amp;&amp;e.e()?b:d||null!=b||null!=Ug(e,C)?(e=eh(this.ma,function(b){return(b.visible||d)&amp;&amp;(!c||!(0&lt;=Ia(c,b.Zc)))&amp;&amp;(b.path.contains(a)||a.contains(b.path))},a),b=b||F,e.apply(b)):null}e=Ug(this.T,a);if(null!=e)return e;e=Wg(this.T,a);return e.e()?b:null!=b||null!=Ug(e,C)?(b=b||F,e.apply(b)):null};</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">g.sc=function(a,b){var c=F,d=Ug(this.T,a);if(d)d.J()||d.P(N,function(a,b){c=c.U(a,b)});else if(b){var e=Wg(this.T,a);b.P(N,function(a,b){var d=Wg(e,new L(a)).apply(b);c=c.U(a,d)});Ja(Vg(e),function(a){c=c.U(a.name,a.S)})}else e=Wg(this.T,a),Ja(Vg(e),function(a){c=c.U(a.name,a.S)});return c};g.$c=function(a,b,c,d){H(c||d,&quot;Either existingEventSnap or existingServerSnap must exist&quot;);a=a.k(b);if(null!=Ug(this.T,a))return null;a=Wg(this.T,a);return a.e()?d.Q(b):a.apply(d.Q(b))};</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">g.rc=function(a,b,c){a=a.k(b);var d=Ug(this.T,a);return null!=d?d:yc(c,b)?Wg(this.T,a).apply(c.j().R(b)):null};g.mc=function(a){return Ug(this.T,a)};g.Xd=function(a,b,c,d,e,f){var h;a=Wg(this.T,a);h=Ug(a,C);if(null==h)if(null!=b)h=a.apply(b);else return[];h=h.ob(f);if(h.e()||h.J())return[];b=[];a=oe(f);e=e?h.$b(c,f):h.Yb(c,f);for(f=R(e);f&amp;&amp;b.length&lt;d;)0!==a(f,c)&amp;&amp;b.push(f),f=R(e);return b};</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">function dh(a,b){return a.Ja?a.path.contains(b):!!va(a.children,function(c,d){return a.path.k(d).contains(b)})}function fh(a){return a.visible}</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">function eh(a,b,c){for(var d=Rg,e=0;e&lt;a.length;++e){var f=a[e];if(b(f)){var h=f.path;if(f.Ja)c.contains(h)?(h=T(c,h),d=Sg(d,h,f.Ja)):h.contains(c)&amp;&amp;(h=T(h,c),d=Sg(d,C,f.Ja.Q(h)));else if(f.children)if(c.contains(h))h=T(c,h),d=Tg(d,h,f.children);else{if(h.contains(c))if(h=T(h,c),h.e())d=Tg(d,C,f.children);else if(f=x(f.children,J(h)))f=f.Q(D(h)),d=Sg(d,C,f)}else throw Sc(&quot;WriteRecord should have .snap or .children&quot;);}}return d}function gh(a,b){this.Mb=a;this.X=b}g=gh.prototype;</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">g.Ba=function(a,b,c){return this.X.Ba(this.Mb,a,b,c)};g.sc=function(a){return this.X.sc(this.Mb,a)};g.$c=function(a,b,c){return this.X.$c(this.Mb,a,b,c)};g.mc=function(a){return this.X.mc(this.Mb.k(a))};g.Xd=function(a,b,c,d,e){return this.X.Xd(this.Mb,a,b,c,d,e)};g.rc=function(a,b){return this.X.rc(this.Mb,a,b)};g.k=function(a){return new gh(this.Mb.k(a),this.X)};function hh(){this.children={};this.ad=0;this.value=null}function ih(a,b,c){this.ud=a?a:&quot;&quot;;this.Ha=b?b:null;this.A=c?c:new hh}function jh(a,b){for(var c=b instanceof L?b:new L(b),d=a,e;null!==(e=J(c));)d=new ih(e,d,x(d.A.children,e)||new hh),c=D(c);return d}g=ih.prototype;g.Ea=function(){return this.A.value};function kh(a,b){H(&quot;undefined&quot;!==typeof b,&quot;Cannot set value to undefined&quot;);a.A.value=b;lh(a)}g.clear=function(){this.A.value=null;this.A.children={};this.A.ad=0;lh(this)};</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">g.kd=function(){return 0&lt;this.A.ad};g.e=function(){return null===this.Ea()&amp;&amp;!this.kd()};g.P=function(a){var b=this;t(this.A.children,function(c,d){a(new ih(d,b,c))})};function mh(a,b,c,d){c&amp;&amp;!d&amp;&amp;b(a);a.P(function(a){mh(a,b,!0,d)});c&amp;&amp;d&amp;&amp;b(a)}function nh(a,b){for(var c=a.parent();null!==c&amp;&amp;!b(c);)c=c.parent()}g.path=function(){return new L(null===this.Ha?this.ud:this.Ha.path()+&quot;/&quot;+this.ud)};g.name=function(){return this.ud};g.parent=function(){return this.Ha};</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">function lh(a){if(null!==a.Ha){var b=a.Ha,c=a.ud,d=a.e(),e=Bb(b.A.children,c);d&amp;&amp;e?(delete b.A.children[c],b.A.ad--,lh(b)):d||e||(b.A.children[c]=a.A,b.A.ad++,lh(b))}};function oh(a,b,c,d,e,f){this.id=ph++;this.f=Yc(&quot;p:&quot;+this.id+&quot;:&quot;);this.qd={};this.aa={};this.qa=[];this.Pc=0;this.Lc=[];this.na=!1;this.Va=1E3;this.td=3E5;this.Hb=b;this.Kc=c;this.ue=d;this.M=a;this.pb=this.Ia=this.Db=this.ze=null;this.Vd=e;this.de=!1;this.ke=0;if(f)throw Error(&quot;Auth override specified in options, but not supported on non Node.js platforms&quot;);this.Je=f||null;this.vb=null;this.Nb=!1;this.Gd={};this.tg=0;this.Ve=!0;this.Bc=this.me=null;qh(this,0);Tf.Wb().hc(&quot;visible&quot;,this.jg,this);-1===</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">a.host.indexOf(&quot;fblocal&quot;)&amp;&amp;Sf.Wb().hc(&quot;online&quot;,this.ig,this)}var ph=0,rh=0;g=oh.prototype;g.va=function(a,b,c){var d=++this.tg;a={r:d,a:a,b:b};this.f(B(a));H(this.na,&quot;sendRequest call when we&#39;re not connected not allowed.&quot;);this.Ia.va(a);c&amp;&amp;(this.Gd[d]=c)};</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">g.df=function(a,b,c,d){var e=a.ka(),f=a.path.toString();this.f(&quot;Listen called for &quot;+f+&quot; &quot;+e);this.aa[f]=this.aa[f]||{};H(rd(a.n)||!S(a.n),&quot;listen() called for non-default but complete query&quot;);H(!this.aa[f][e],&quot;listen() called twice for same path/queryId.&quot;);a={G:d,ld:b,pg:a,tag:c};this.aa[f][e]=a;this.na&amp;&amp;sh(this,a)};</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">function sh(a,b){var c=b.pg,d=c.path.toString(),e=c.ka();a.f(&quot;Listen on &quot;+d+&quot; for &quot;+e);var f={p:d};b.tag&amp;&amp;(f.q=Ie(c.n),f.t=b.tag);f.h=b.ld();a.va(&quot;q&quot;,f,function(f){var k=f.d,m=f.s;if(k&amp;&amp;&quot;object&quot;===typeof k&amp;&amp;Bb(k,&quot;w&quot;)){var l=x(k,&quot;w&quot;);da(l)&amp;&amp;0&lt;=Ia(l,&quot;no_index&quot;)&amp;&amp;O(&quot;Using an unspecified index. Consider adding &quot;+(&#39;&quot;.indexOn&quot;: &quot;&#39;+c.n.g.toString()+&#39;&quot;&#39;)+&quot; at &quot;+c.path.toString()+&quot; to your security rules for better performance&quot;)}(a.aa[d]&amp;&amp;a.aa[d][e])===b&amp;&amp;(a.f(&quot;listen response&quot;,f),&quot;ok&quot;!==m&amp;&amp;th(a,d,e),b.G&amp;&amp;</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">b.G(m,k))})}g.qf=function(a){this.pb=a;this.f(&quot;Auth token refreshed&quot;);this.pb?uh(this):this.na&amp;&amp;this.va(&quot;unauth&quot;,{},function(){});if(a&amp;&amp;40===a.length||od(a))this.f(&quot;Admin auth credential detected.  Reducing max reconnect time.&quot;),this.td=3E4};function uh(a){if(a.na&amp;&amp;a.pb){var b=a.pb,c=nd(b)?&quot;auth&quot;:&quot;gauth&quot;,d={cred:b};a.Je&amp;&amp;(d.authvar=a.Je);a.va(c,d,function(c){var d=c.s;c=c.d||&quot;error&quot;;a.pb===b&amp;&amp;(&quot;ok&quot;===d?a.ke=0:vh(a,d,c))})}}</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">g.Ef=function(a,b){var c=a.path.toString(),d=a.ka();this.f(&quot;Unlisten called for &quot;+c+&quot; &quot;+d);H(rd(a.n)||!S(a.n),&quot;unlisten() called for non-default but complete query&quot;);if(th(this,c,d)&amp;&amp;this.na){var e=Ie(a.n);this.f(&quot;Unlisten on &quot;+c+&quot; for &quot;+d);c={p:c};b&amp;&amp;(c.q=e,c.t=b);this.va(&quot;n&quot;,c)}};g.re=function(a,b,c){this.na?wh(this,&quot;o&quot;,a,b,c):this.Lc.push({we:a,action:&quot;o&quot;,data:b,G:c})};g.gf=function(a,b,c){this.na?wh(this,&quot;om&quot;,a,b,c):this.Lc.push({we:a,action:&quot;om&quot;,data:b,G:c})};</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">g.xd=function(a,b){this.na?wh(this,&quot;oc&quot;,a,null,b):this.Lc.push({we:a,action:&quot;oc&quot;,data:null,G:b})};function wh(a,b,c,d,e){c={p:c,d:d};a.f(&quot;onDisconnect &quot;+b,c);a.va(b,c,function(a){e&amp;&amp;setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}g.put=function(a,b,c,d){xh(this,&quot;p&quot;,a,b,c,d)};g.ef=function(a,b,c,d){xh(this,&quot;m&quot;,a,b,c,d)};function xh(a,b,c,d,e,f){d={p:c,d:d};p(f)&amp;&amp;(d.h=f);a.qa.push({action:b,sf:d,G:e});a.Pc++;b=a.qa.length-1;a.na?yh(a,b):a.f(&quot;Buffering put: &quot;+c)}</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">function yh(a,b){var c=a.qa[b].action,d=a.qa[b].sf,e=a.qa[b].G;a.qa[b].qg=a.na;a.va(c,d,function(d){a.f(c+&quot; response&quot;,d);delete a.qa[b];a.Pc--;0===a.Pc&amp;&amp;(a.qa=[]);e&amp;&amp;e(d.s,d.d)})}g.ye=function(a){this.na&amp;&amp;(a={c:a},this.f(&quot;reportStats&quot;,a),this.va(&quot;s&quot;,a,function(a){&quot;ok&quot;!==a.s&amp;&amp;this.f(&quot;reportStats&quot;,&quot;Error sending stats: &quot;+a.d)}))};</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">g.wd=function(a){if(&quot;r&quot;in a){this.f(&quot;from server: &quot;+B(a));var b=a.r,c=this.Gd[b];c&amp;&amp;(delete this.Gd[b],c(a.b))}else{if(&quot;error&quot;in a)throw&quot;A server-side error has occurred: &quot;+a.error;&quot;a&quot;in a&amp;&amp;(b=a.a,a=a.b,this.f(&quot;handleServerMessage&quot;,b,a),&quot;d&quot;===b?this.Hb(a.p,a.d,!1,a.t):&quot;m&quot;===b?this.Hb(a.p,a.d,!0,a.t):&quot;c&quot;===b?zh(this,a.p,a.q):&quot;ac&quot;===b?vh(this,a.s,a.d):&quot;sd&quot;===b?this.ze?this.ze(a):&quot;msg&quot;in a&amp;&amp;&quot;undefined&quot;!==typeof console&amp;&amp;console.log(&quot;FIREBASE: &quot;+a.msg.replace(&quot;\n&quot;,&quot;\nFIREBASE: &quot;)):Zc(&quot;Unrecognized action received from server: &quot;+</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">B(b)+&quot;\nAre you using the latest client?&quot;))}};g.Mc=function(a,b){this.f(&quot;connection ready&quot;);this.na=!0;this.Bc=(new Date).getTime();this.ue({serverTimeOffset:a-(new Date).getTime()});this.Db=b;if(this.Ve){var c={};c[&quot;sdk.js.&quot;+firebase.SDK_VERSION.replace(/\./g,&quot;-&quot;)]=1;Qb()?c[&quot;framework.cordova&quot;]=1:&quot;object&quot;===typeof navigator&amp;&amp;&quot;ReactNative&quot;===navigator.product&amp;&amp;(c[&quot;framework.reactnative&quot;]=1);this.ye(c)}Ah(this);this.Ve=!1;this.Kc(!0)};</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">function qh(a,b){H(!a.Ia,&quot;Scheduling a connect when we&#39;re already connected/ing?&quot;);a.vb&amp;&amp;clearTimeout(a.vb);a.vb=setTimeout(function(){a.vb=null;Bh(a)},Math.floor(b))}g.jg=function(a){a&amp;&amp;!this.Nb&amp;&amp;this.Va===this.td&amp;&amp;(this.f(&quot;Window became visible.  Reducing delay.&quot;),this.Va=1E3,this.Ia||qh(this,0));this.Nb=a};g.ig=function(a){a?(this.f(&quot;Browser went online.&quot;),this.Va=1E3,this.Ia||qh(this,0)):(this.f(&quot;Browser went offline.  Killing connection.&quot;),this.Ia&amp;&amp;this.Ia.close())};</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">g.jf=function(){this.f(&quot;data client disconnected&quot;);this.na=!1;this.Ia=null;for(var a=0;a&lt;this.qa.length;a++){var b=this.qa[a];b&amp;&amp;&quot;h&quot;in b.sf&amp;&amp;b.qg&amp;&amp;(b.G&amp;&amp;b.G(&quot;disconnect&quot;),delete this.qa[a],this.Pc--)}0===this.Pc&amp;&amp;(this.qa=[]);this.Gd={};Ch(this)&amp;&amp;(this.Nb?this.Bc&amp;&amp;(3E4&lt;(new Date).getTime()-this.Bc&amp;&amp;(this.Va=1E3),this.Bc=null):(this.f(&quot;Window isn&#39;t visible.  Delaying reconnect.&quot;),this.Va=this.td,this.me=(new Date).getTime()),a=Math.max(0,this.Va-((new Date).getTime()-this.me)),a*=Math.random(),this.f(&quot;Trying to reconnect in &quot;+</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">a+&quot;ms&quot;),qh(this,a),this.Va=Math.min(this.td,1.3*this.Va));this.Kc(!1)};</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">function Bh(a){if(Ch(a)){a.f(&quot;Making a connection attempt&quot;);a.me=(new Date).getTime();a.Bc=null;var b=r(a.wd,a),c=r(a.Mc,a),d=r(a.jf,a),e=a.id+&quot;:&quot;+rh++,f=a.Db,h=!1,k=null,m=function(){k?k.close():(h=!0,d())};a.Ia={close:m,va:function(a){H(k,&quot;sendRequest call when we&#39;re not connected not allowed.&quot;);k.va(a)}};var l=a.de;a.de=!1;a.Vd.getToken(l).then(function(l){h?E(&quot;getToken() completed but was canceled&quot;):(E(&quot;getToken() completed. Creating connection.&quot;),a.pb=l&amp;&amp;l.accessToken,k=new bf(e,a.M,b,c,d,function(b){O(b+</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">&quot; (&quot;+a.M.toString()+&quot;)&quot;);a.eb(&quot;server_kill&quot;)},f))}).then(null,function(b){a.f(&quot;Failed to get token: &quot;+b);h||m()})}}g.eb=function(a){E(&quot;Interrupting connection for reason: &quot;+a);this.qd[a]=!0;this.Ia?this.Ia.close():(this.vb&amp;&amp;(clearTimeout(this.vb),this.vb=null),this.na&amp;&amp;this.jf())};g.lc=function(a){E(&quot;Resuming connection for reason: &quot;+a);delete this.qd[a];xa(this.qd)&amp;&amp;(this.Va=1E3,this.Ia||qh(this,0))};</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">function zh(a,b,c){c=c?La(c,function(a){return fd(a)}).join(&quot;$&quot;):&quot;default&quot;;(a=th(a,b,c))&amp;&amp;a.G&amp;&amp;a.G(&quot;permission_denied&quot;)}function th(a,b,c){b=(new L(b)).toString();var d;p(a.aa[b])?(d=a.aa[b][c],delete a.aa[b][c],0===qa(a.aa[b])&amp;&amp;delete a.aa[b]):d=void 0;return d}</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">function vh(a,b,c){E(&quot;Auth token revoked: &quot;+b+&quot;/&quot;+c);a.pb=null;a.de=!0;a.Ia.close();&quot;invalid_token&quot;===b&amp;&amp;(a.ke++,3&lt;=a.ke&amp;&amp;(a.Va=3E4,O(&quot;Provided authentication credentials are invalid. This usually indicates your FirebaseApp instance was not initialized correctly. Make sure your apiKey and databaseURL match the values provided for your app at https://console.firebase.google.com/, or if you&#39;re using a service account, make sure it&#39;s authorized to access the specified databaseURL and is from the correct project.&quot;)))}</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">function Ah(a){uh(a);t(a.aa,function(b){t(b,function(b){sh(a,b)})});for(var b=0;b&lt;a.qa.length;b++)a.qa[b]&amp;&amp;yh(a,b);for(;a.Lc.length;)b=a.Lc.shift(),wh(a,b.action,b.we,b.data,b.G)}function Ch(a){var b;b=Sf.Wb().ic;return xa(a.qd)&amp;&amp;b};var Y={Xf:function(){Re=Ed=!0}};Y.forceLongPolling=Y.Xf;Y.Yf=function(){Se=!0};Y.forceWebSockets=Y.Yf;Y.dg=function(){return Dd.isAvailable()};Y.isWebSocketsAvailable=Y.dg;Y.wg=function(a,b){a.u.Ua.ze=b};Y.setSecurityDebugCallback=Y.wg;Y.Be=function(a,b){a.u.Be(b)};Y.stats=Y.Be;Y.Ce=function(a,b){a.u.Ce(b)};Y.statsIncrementCounter=Y.Ce;Y.ed=function(a){return a.u.ed};Y.dataUpdateCount=Y.ed;Y.cg=function(a,b){a.u.je=b};Y.interceptServerData=Y.cg;function Dh(a){this.xa=Q;this.lb=new bh;this.De={};this.jc={};this.Dc=a}function Eh(a,b,c,d,e){var f=a.lb,h=e;H(d&gt;f.Cc,&quot;Stacking an older write on top of newer ones&quot;);p(h)||(h=!0);f.ma.push({path:b,Ja:c,Zc:d,visible:h});h&amp;&amp;(f.T=Sg(f.T,b,c));f.Cc=d;return e?Fh(a,new $b(Ng,b,c)):[]}function Gh(a,b,c,d){var e=a.lb;H(d&gt;e.Cc,&quot;Stacking an older merge on top of newer ones&quot;);e.ma.push({path:b,children:c,Zc:d,visible:!0});e.T=Tg(e.T,b,c);e.Cc=d;c=Bg(c);return Fh(a,new vd(Ng,b,c))}</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">function Hh(a,b,c){c=c||!1;var d=ch(a.lb,b);if(a.lb.Ed(b)){var e=Q;null!=d.Ja?e=e.set(C,!0):Cb(d.children,function(a,b){e=e.set(new L(a),b)});return Fh(a,new Mg(d.path,e,c))}return[]}function Ih(a,b,c){c=Bg(c);return Fh(a,new vd(Pg,b,c))}function Jh(a,b,c,d){d=Kh(a,d);if(null!=d){var e=Lh(d);d=e.path;e=e.Ib;b=T(d,b);c=new $b(new Og(!1,!0,e,!0),b,c);return Mh(a,d,c)}return[]}</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">function Nh(a,b,c,d){if(d=Kh(a,d)){var e=Lh(d);d=e.path;e=e.Ib;b=T(d,b);c=Bg(c);c=new vd(new Og(!1,!0,e,!0),b,c);return Mh(a,d,c)}return[]}</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">Dh.prototype.Ob=function(a,b){var c=a.path,d=null,e=!1;Ig(this.xa,c,function(a,b){var f=T(a,c);d=d||b.jb(f);e=e||null!=Zg(b)});var f=this.xa.get(c);f?(e=e||null!=Zg(f),d=d||f.jb(C)):(f=new Yg,this.xa=this.xa.set(c,f));var h;null!=d?h=!0:(h=!1,d=F,Lg(this.xa.subtree(c),function(a,b){var c=b.jb(C);c&amp;&amp;(d=d.U(a,c))}));var k=null!=ah(f,a);if(!k&amp;&amp;!S(a.n)){var m=Oh(a);H(!(m in this.jc),&quot;View does not exist, but we have a tag&quot;);var l=Ph++;this.jc[m]=l;this.De[&quot;_&quot;+l]=m}h=f.Ob(a,b,new gh(c,this.lb),d,h);k||</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">e||(f=ah(f,a),h=h.concat(Qh(this,a,f)));return h};</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">Dh.prototype.mb=function(a,b,c){var d=a.path,e=this.xa.get(d),f=[];if(e&amp;&amp;(&quot;default&quot;===a.ka()||null!=ah(e,a))){f=e.mb(a,b,c);e.e()&amp;&amp;(this.xa=this.xa.remove(d));e=f.sg;f=f.Tf;b=-1!==Pa(e,function(a){return S(a.n)});var h=Gg(this.xa,d,function(a,b){return null!=Zg(b)});if(b&amp;&amp;!h&amp;&amp;(d=this.xa.subtree(d),!d.e()))for(var d=Rh(d),k=0;k&lt;d.length;++k){var m=d[k],l=m.W,m=Sh(this,m);this.Dc.Ae(Th(l),Uh(this,l),m.ld,m.G)}if(!h&amp;&amp;0&lt;e.length&amp;&amp;!c)if(b)this.Dc.Od(Th(a),null);else{var u=this;Ja(e,function(a){a.ka();</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">var b=u.jc[Oh(a)];u.Dc.Od(Th(a),b)})}Vh(this,e)}return f};Dh.prototype.Ba=function(a,b){var c=this.lb,d=Gg(this.xa,a,function(b,c){var d=T(b,a);if(d=c.jb(d))return d});return c.Ba(a,d,b,!0)};function Rh(a){return Eg(a,function(a,c,d){if(c&amp;&amp;null!=Zg(c))return[Zg(c)];var e=[];c&amp;&amp;(e=$g(c));t(d,function(a){e=e.concat(a)});return e})}function Vh(a,b){for(var c=0;c&lt;b.length;++c){var d=b[c];if(!S(d.n)){var d=Oh(d),e=a.jc[d];delete a.jc[d];delete a.De[&quot;_&quot;+e]}}}</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">function Th(a){return S(a.n)&amp;&amp;!rd(a.n)?a.xb():a}function Qh(a,b,c){var d=b.path,e=Uh(a,b);c=Sh(a,c);b=a.Dc.Ae(Th(b),e,c.ld,c.G);d=a.xa.subtree(d);if(e)H(null==Zg(d.value),&quot;If we&#39;re adding a query, it shouldn&#39;t be shadowed&quot;);else for(e=Eg(d,function(a,b,c){if(!a.e()&amp;&amp;b&amp;&amp;null!=Zg(b))return[pg(Zg(b))];var d=[];b&amp;&amp;(d=d.concat(La($g(b),function(a){return a.W})));t(c,function(a){d=d.concat(a)});return d}),d=0;d&lt;e.length;++d)c=e[d],a.Dc.Od(Th(c),Uh(a,c));return b}</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">function Sh(a,b){var c=b.W,d=Uh(a,c);return{ld:function(){return(b.w()||F).hash()},G:function(b){if(&quot;ok&quot;===b){if(d){var f=c.path;if(b=Kh(a,d)){var h=Lh(b);b=h.path;h=h.Ib;f=T(b,f);f=new bc(new Og(!1,!0,h,!0),f);b=Mh(a,b,f)}else b=[]}else b=Fh(a,new bc(Pg,c.path));return b}f=&quot;Unknown Error&quot;;&quot;too_big&quot;===b?f=&quot;The data requested exceeds the maximum size that can be accessed with a single request.&quot;:&quot;permission_denied&quot;==b?f=&quot;Client doesn&#39;t have permission to access the desired data.&quot;:&quot;unavailable&quot;==b&amp;&amp;</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">(f=&quot;The service is unavailable&quot;);f=Error(b+&quot; at &quot;+c.path.toString()+&quot;: &quot;+f);f.code=b.toUpperCase();return a.mb(c,null,f)}}}function Oh(a){return a.path.toString()+&quot;$&quot;+a.ka()}function Lh(a){var b=a.indexOf(&quot;$&quot;);H(-1!==b&amp;&amp;b&lt;a.length-1,&quot;Bad queryKey.&quot;);return{Ib:a.substr(b+1),path:new L(a.substr(0,b))}}function Kh(a,b){var c=a.De,d=&quot;_&quot;+b;return d in c?c[d]:void 0}function Uh(a,b){var c=Oh(b);return x(a.jc,c)}var Ph=1;</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">function Mh(a,b,c){var d=a.xa.get(b);H(d,&quot;Missing sync point for query tag that we&#39;re tracking&quot;);return d.gb(c,new gh(b,a.lb),null)}function Fh(a,b){return Wh(a,b,a.xa,null,new gh(C,a.lb))}function Wh(a,b,c,d,e){if(b.path.e())return Xh(a,b,c,d,e);var f=c.get(C);null==d&amp;&amp;null!=f&amp;&amp;(d=f.jb(C));var h=[],k=J(b.path),m=b.Nc(k);if((c=c.children.get(k))&amp;&amp;m)var l=d?d.R(k):null,k=e.k(k),h=h.concat(Wh(a,m,c,l,k));f&amp;&amp;(h=h.concat(f.gb(b,e,d)));return h}</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">function Xh(a,b,c,d,e){var f=c.get(C);null==d&amp;&amp;null!=f&amp;&amp;(d=f.jb(C));var h=[];c.children.ia(function(c,f){var l=d?d.R(c):null,u=e.k(c),z=b.Nc(c);z&amp;&amp;(h=h.concat(Xh(a,z,f,l,u)))});f&amp;&amp;(h=h.concat(f.gb(b,e,d)));return h};function tf(a,b,c){this.app=c;var d=new dc(c);this.M=a;this.Xa=Ad(a);this.Vc=null;this.da=new mc;this.vd=1;this.Ua=null;if(b||0&lt;=(&quot;object&quot;===typeof window&amp;&amp;window.navigator&amp;&amp;window.navigator.userAgent||&quot;&quot;).search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i))this.wa=new pd(this.M,r(this.Hb,this),d),setTimeout(r(this.Kc,this,!0),0);else{b=c.options.databaseAuthVariableOverride||null;if(null!==b){if(&quot;object&quot;!==ca(b))throw Error(&quot;Only objects are supported for option databaseAuthVariableOverride&quot;);</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">try{B(b)}catch(e){throw Error(&quot;Invalid authOverride provided: &quot;+e);}}this.wa=this.Ua=new oh(this.M,r(this.Hb,this),r(this.Kc,this),r(this.ue,this),d,b)}var f=this;ec(d,function(a){f.wa.qf(a)});this.zg=Bd(a,r(function(){return new xd(this.Xa,this.wa)},this));this.nc=new ih;this.ie=new fc;this.pd=new Dh({Ae:function(a,b,c,d){b=[];c=f.ie.j(a.path);c.e()||(b=Fh(f.pd,new $b(Pg,a.path,c)),setTimeout(function(){d(&quot;ok&quot;)},0));return b},Od:aa});Yh(this,&quot;connected&quot;,!1);this.ja=new Mc;this.$a=new sf(this);this.ed=</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">0;this.je=null;this.K=new Dh({Ae:function(a,b,c,d){f.wa.df(a,c,b,function(b,c){var e=d(b,c);rc(f.da,a.path,e)});return[]},Od:function(a,b){f.wa.Ef(a,b)}})}g=tf.prototype;g.toString=function(){return(this.M.Sc?&quot;https://&quot;:&quot;http://&quot;)+this.M.host};g.name=function(){return this.M.pe};function Zh(a){a=a.ie.j(new L(&quot;.info/serverTimeOffset&quot;)).H()||0;return(new Date).getTime()+a}function $h(a){a=a={timestamp:Zh(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">g.Hb=function(a,b,c,d){this.ed++;var e=new L(a);b=this.je?this.je(a,b):b;a=[];d?c?(b=oa(b,function(a){return M(a)}),a=Nh(this.K,e,b,d)):(b=M(b),a=Jh(this.K,e,b,d)):c?(d=oa(b,function(a){return M(a)}),a=Ih(this.K,e,d)):(d=M(b),a=Fh(this.K,new $b(Pg,e,d)));d=e;0&lt;a.length&amp;&amp;(d=ai(this,e));rc(this.da,d,a)};g.Kc=function(a){Yh(this,&quot;connected&quot;,a);!1===a&amp;&amp;bi(this)};g.ue=function(a){var b=this;hd(a,function(a,d){Yh(b,d,a)})};</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">function Yh(a,b,c){b=new L(&quot;/.info/&quot;+b);c=M(c);var d=a.ie;d.Jd=d.Jd.F(b,c);c=Fh(a.pd,new $b(Pg,b,c));rc(a.da,b,c)}g.Kb=function(a,b,c,d){this.f(&quot;set&quot;,{path:a.toString(),value:b,Gg:c});var e=$h(this);b=M(b,c);var e=Pc(b,e),f=this.vd++,e=Eh(this.K,a,e,f,!0);nc(this.da,e);var h=this;this.wa.put(a.toString(),b.H(!0),function(b,c){var e=&quot;ok&quot;===b;e||O(&quot;set at &quot;+a+&quot; failed: &quot;+b);e=Hh(h.K,f,!e);rc(h.da,a,e);ci(d,b,c)});e=di(this,a);ai(this,e);rc(this.da,e,[])};</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">g.update=function(a,b,c){this.f(&quot;update&quot;,{path:a.toString(),value:b});var d=!0,e=$h(this),f={};t(b,function(a,b){d=!1;var c=M(a);f[b]=Pc(c,e)});if(d)E(&quot;update() called with empty data.  Don&#39;t do anything.&quot;),ci(c,&quot;ok&quot;);else{var h=this.vd++,k=Gh(this.K,a,f,h);nc(this.da,k);var m=this;this.wa.ef(a.toString(),b,function(b,d){var e=&quot;ok&quot;===b;e||O(&quot;update at &quot;+a+&quot; failed: &quot;+b);var e=Hh(m.K,h,!e),f=a;0&lt;e.length&amp;&amp;(f=ai(m,a));rc(m.da,f,e);ci(c,b,d)});t(b,function(b,c){var d=di(m,a.k(c));ai(m,d)});rc(this.da,</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">a,[])}};function bi(a){a.f(&quot;onDisconnectEvents&quot;);var b=$h(a),c=[];Nc(Lc(a.ja,b),C,function(b,e){c=c.concat(Fh(a.K,new $b(Pg,b,e)));var f=di(a,b);ai(a,f)});a.ja=new Mc;rc(a.da,C,c)}g.xd=function(a,b){var c=this;this.wa.xd(a.toString(),function(d,e){&quot;ok&quot;===d&amp;&amp;zf(c.ja,a);ci(b,d,e)})};function Nf(a,b,c,d){var e=M(c);a.wa.re(b.toString(),e.H(!0),function(c,h){&quot;ok&quot;===c&amp;&amp;Oc(a.ja,b,e);ci(d,c,h)})}</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">function Of(a,b,c,d,e){var f=M(c,d);a.wa.re(b.toString(),f.H(!0),function(c,d){&quot;ok&quot;===c&amp;&amp;Oc(a.ja,b,f);ci(e,c,d)})}function Pf(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(E(&quot;onDisconnect().update() called with empty data.  Don&#39;t do anything.&quot;),ci(d,&quot;ok&quot;)):a.wa.gf(b.toString(),c,function(e,f){if(&quot;ok&quot;===e)for(var m in c){var l=M(c[m]);Oc(a.ja,b.k(m),l)}ci(d,e,f)})}function yg(a,b,c){c=&quot;.info&quot;===J(b.path)?a.pd.Ob(b,c):a.K.Ob(b,c);pc(a.da,b.path,c)}g.eb=function(){this.Ua&amp;&amp;this.Ua.eb(&quot;repo_interrupt&quot;)};</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">g.lc=function(){this.Ua&amp;&amp;this.Ua.lc(&quot;repo_interrupt&quot;)};g.Be=function(a){if(&quot;undefined&quot;!==typeof console){a?(this.Vc||(this.Vc=new lc(this.Xa)),a=this.Vc.get()):a=this.Xa.get();var b=Ma(ta(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e&lt;b+2;e++)c+=&quot; &quot;;console.log(c+d)}}};g.Ce=function(a){kc(this.Xa,a);this.zg.zf[a]=!0};g.f=function(a){var b=&quot;&quot;;this.Ua&amp;&amp;(b=this.Ua.id+&quot;:&quot;);E(b,arguments)};</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">function ci(a,b,c){a&amp;&amp;Ub(function(){if(&quot;ok&quot;==b)a(null);else{var d=(b||&quot;error&quot;).toUpperCase(),e=d;c&amp;&amp;(e+=&quot;: &quot;+c);e=Error(e);e.code=d;a(e)}})};function ei(a,b,c,d,e){function f(){}a.f(&quot;transaction on &quot;+b);var h=new U(a,b);h.hc(&quot;value&quot;,f);c={path:b,update:c,G:d,status:null,lf:Rc(),Ie:e,wf:0,Rd:function(){h.Jc(&quot;value&quot;,f)},Td:null,Da:null,bd:null,cd:null,dd:null};d=a.K.Ba(b,void 0)||F;c.bd=d;d=c.update(d.H());if(p(d)){Ff(&quot;transaction failed: Data returned &quot;,d,c.path);c.status=1;e=jh(a.nc,b);var k=e.Ea()||[];k.push(c);kh(e,k);&quot;object&quot;===typeof d&amp;&amp;null!==d&amp;&amp;Bb(d,&quot;.priority&quot;)?(k=x(d,&quot;.priority&quot;),H(Df(k),&quot;Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.&quot;)):</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">k=(a.K.Ba(b)||F).C().H();e=$h(a);d=M(d,k);e=Pc(d,e);c.cd=d;c.dd=e;c.Da=a.vd++;c=Eh(a.K,b,e,c.Da,c.Ie);rc(a.da,b,c);fi(a)}else c.Rd(),c.cd=null,c.dd=null,c.G&amp;&amp;(a=new W(c.bd,new U(a,c.path),N),c.G(null,!1,a))}function fi(a,b){var c=b||a.nc;b||gi(a,c);if(null!==c.Ea()){var d=hi(a,c);H(0&lt;d.length,&quot;Sending zero length transaction queue&quot;);Na(d,function(a){return 1===a.status})&amp;&amp;ii(a,c.path(),d)}else c.kd()&amp;&amp;c.P(function(b){fi(a,b)})}</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">function ii(a,b,c){for(var d=La(c,function(a){return a.Da}),e=a.K.Ba(b,d)||F,d=e,e=e.hash(),f=0;f&lt;c.length;f++){var h=c[f];H(1===h.status,&quot;tryToSendTransactionQueue_: items in queue should all be run.&quot;);h.status=2;h.wf++;var k=T(b,h.path),d=d.F(k,h.cd)}d=d.H(!0);a.wa.put(b.toString(),d,function(d){a.f(&quot;transaction put response&quot;,{path:b.toString(),status:d});var e=[];if(&quot;ok&quot;===d){d=[];for(f=0;f&lt;c.length;f++){c[f].status=3;e=e.concat(Hh(a.K,c[f].Da));if(c[f].G){var h=c[f].dd,k=new U(a,c[f].path);d.push(r(c[f].G,</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">null,null,!0,new W(h,k,N)))}c[f].Rd()}gi(a,jh(a.nc,b));fi(a);rc(a.da,b,e);for(f=0;f&lt;d.length;f++)Ub(d[f])}else{if(&quot;datastale&quot;===d)for(f=0;f&lt;c.length;f++)c[f].status=4===c[f].status?5:1;else for(O(&quot;transaction at &quot;+b.toString()+&quot; failed: &quot;+d),f=0;f&lt;c.length;f++)c[f].status=5,c[f].Td=d;ai(a,b)}},e)}function ai(a,b){var c=ji(a,b),d=c.path(),c=hi(a,c);ki(a,c,d);return d}</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">function ki(a,b,c){if(0!==b.length){for(var d=[],e=[],f=Ka(b,function(a){return 1===a.status}),f=La(f,function(a){return a.Da}),h=0;h&lt;b.length;h++){var k=b[h],m=T(c,k.path),l=!1,u;H(null!==m,&quot;rerunTransactionsUnderNode_: relativePath should not be null.&quot;);if(5===k.status)l=!0,u=k.Td,e=e.concat(Hh(a.K,k.Da,!0));else if(1===k.status)if(25&lt;=k.wf)l=!0,u=&quot;maxretry&quot;,e=e.concat(Hh(a.K,k.Da,!0));else{var z=a.K.Ba(k.path,f)||F;k.bd=z;var G=b[h].update(z.H());p(G)?(Ff(&quot;transaction failed: Data returned &quot;,G,</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">k.path),m=M(G),&quot;object&quot;===typeof G&amp;&amp;null!=G&amp;&amp;Bb(G,&quot;.priority&quot;)||(m=m.ga(z.C())),z=k.Da,G=$h(a),G=Pc(m,G),k.cd=m,k.dd=G,k.Da=a.vd++,Qa(f,z),e=e.concat(Eh(a.K,k.path,G,k.Da,k.Ie)),e=e.concat(Hh(a.K,z,!0))):(l=!0,u=&quot;nodata&quot;,e=e.concat(Hh(a.K,k.Da,!0)))}rc(a.da,c,e);e=[];l&amp;&amp;(b[h].status=3,setTimeout(b[h].Rd,Math.floor(0)),b[h].G&amp;&amp;(&quot;nodata&quot;===u?(k=new U(a,b[h].path),d.push(r(b[h].G,null,null,!1,new W(b[h].bd,k,N)))):d.push(r(b[h].G,null,Error(u),!1,null))))}gi(a,a.nc);for(h=0;h&lt;d.length;h++)Ub(d[h]);fi(a)}}</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">function ji(a,b){for(var c,d=a.nc;null!==(c=J(b))&amp;&amp;null===d.Ea();)d=jh(d,c),b=D(b);return d}function hi(a,b){var c=[];li(a,b,c);c.sort(function(a,b){return a.lf-b.lf});return c}function li(a,b,c){var d=b.Ea();if(null!==d)for(var e=0;e&lt;d.length;e++)c.push(d[e]);b.P(function(b){li(a,b,c)})}function gi(a,b){var c=b.Ea();if(c){for(var d=0,e=0;e&lt;c.length;e++)3!==c[e].status&amp;&amp;(c[d]=c[e],d++);c.length=d;kh(b,0&lt;c.length?c:null)}b.P(function(b){gi(a,b)})}</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">function di(a,b){var c=ji(a,b).path(),d=jh(a.nc,b);nh(d,function(b){mi(a,b)});mi(a,d);mh(d,function(b){mi(a,b)});return c}</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">function mi(a,b){var c=b.Ea();if(null!==c){for(var d=[],e=[],f=-1,h=0;h&lt;c.length;h++)4!==c[h].status&amp;&amp;(2===c[h].status?(H(f===h-1,&quot;All SENT items should be at beginning of queue.&quot;),f=h,c[h].status=4,c[h].Td=&quot;set&quot;):(H(1===c[h].status,&quot;Unexpected transaction status in abort&quot;),c[h].Rd(),e=e.concat(Hh(a.K,c[h].Da,!0)),c[h].G&amp;&amp;d.push(r(c[h].G,null,Error(&quot;set&quot;),!1,null))));-1===f?kh(b,null):c.length=f+1;rc(a.da,b.path(),e);for(h=0;h&lt;d.length;h++)Ub(d[h])}};function yf(){this.nb={};this.Ff=!1}yf.prototype.eb=function(){for(var a in this.nb)this.nb[a].eb()};yf.prototype.lc=function(){for(var a in this.nb)this.nb[a].lc()};yf.prototype.ce=function(a){this.Ff=a};ba(yf);yf.prototype.interrupt=yf.prototype.eb;yf.prototype.resume=yf.prototype.lc;var Z={};Z.pc=oh;Z.DataConnection=Z.pc;oh.prototype.yg=function(a,b){this.va(&quot;q&quot;,{p:a},b)};Z.pc.prototype.simpleListen=Z.pc.prototype.yg;oh.prototype.Qf=function(a,b){this.va(&quot;echo&quot;,{d:a},b)};Z.pc.prototype.echo=Z.pc.prototype.Qf;oh.prototype.interrupt=oh.prototype.eb;Z.If=bf;Z.RealTimeConnection=Z.If;bf.prototype.sendRequest=bf.prototype.va;bf.prototype.close=bf.prototype.close;</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">Z.bg=function(a){var b=oh.prototype.put;oh.prototype.put=function(c,d,e,f){p(f)&amp;&amp;(f=a());b.call(this,c,d,e,f)};return function(){oh.prototype.put=b}};Z.hijackHash=Z.bg;Z.Hf=gc;Z.ConnectionTarget=Z.Hf;Z.ka=function(a){return a.ka()};Z.queryIdentifier=Z.ka;Z.eg=function(a){return a.u.Ua.aa};Z.listens=Z.eg;Z.ce=function(a){yf.Wb().ce(a)};Z.forceRestClient=Z.ce;Z.Context=yf;function U(a,b){if(!(a instanceof tf))throw Error(&quot;new Firebase() no longer supported - use app.database().&quot;);X.call(this,a,b,Fe,!1);this.then=void 0;this[&quot;catch&quot;]=void 0}ka(U,X);g=U.prototype;g.getKey=function(){y(&quot;Firebase.key&quot;,0,0,arguments.length);return this.path.e()?null:ae(this.path)};</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">g.k=function(a){y(&quot;Firebase.child&quot;,1,1,arguments.length);if(fa(a))a=String(a);else if(!(a instanceof L))if(null===J(this.path)){var b=a;b&amp;&amp;(b=b.replace(/^\/*\.info(\/|$)/,&quot;/&quot;));Lf(&quot;Firebase.child&quot;,b)}else Lf(&quot;Firebase.child&quot;,a);return new U(this.u,this.path.k(a))};g.getParent=function(){y(&quot;Firebase.parent&quot;,0,0,arguments.length);var a=this.path.parent();return null===a?null:new U(this.u,a)};</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">g.Zf=function(){y(&quot;Firebase.ref&quot;,0,0,arguments.length);for(var a=this;null!==a.getParent();)a=a.getParent();return a};g.Pf=function(){return this.u.$a};g.set=function(a,b){y(&quot;Firebase.set&quot;,1,2,arguments.length);Mf(&quot;Firebase.set&quot;,this.path);Ef(&quot;Firebase.set&quot;,a,this.path,!1);A(&quot;Firebase.set&quot;,2,b,!0);var c=new Hb;this.u.Kb(this.path,a,null,Ib(c,b));return c.sa};</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">g.update=function(a,b){y(&quot;Firebase.update&quot;,1,2,arguments.length);Mf(&quot;Firebase.update&quot;,this.path);if(da(a)){for(var c={},d=0;d&lt;a.length;++d)c[&quot;&quot;+d]=a[d];a=c;O(&quot;Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.&quot;)}Hf(&quot;Firebase.update&quot;,a,this.path);A(&quot;Firebase.update&quot;,2,b,!0);c=new Hb;this.u.update(this.path,a,Ib(c,b));return c.sa};</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">g.Kb=function(a,b,c){y(&quot;Firebase.setWithPriority&quot;,2,3,arguments.length);Mf(&quot;Firebase.setWithPriority&quot;,this.path);Ef(&quot;Firebase.setWithPriority&quot;,a,this.path,!1);If(&quot;Firebase.setWithPriority&quot;,2,b);A(&quot;Firebase.setWithPriority&quot;,3,c,!0);if(&quot;.length&quot;===this.getKey()||&quot;.keys&quot;===this.getKey())throw&quot;Firebase.setWithPriority failed: &quot;+this.getKey()+&quot; is a read-only object.&quot;;var d=new Hb;this.u.Kb(this.path,a,b,Ib(d,c));return d.sa};</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">g.remove=function(a){y(&quot;Firebase.remove&quot;,0,1,arguments.length);Mf(&quot;Firebase.remove&quot;,this.path);A(&quot;Firebase.remove&quot;,1,a,!0);return this.set(null,a)};</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">g.transaction=function(a,b,c){y(&quot;Firebase.transaction&quot;,1,3,arguments.length);Mf(&quot;Firebase.transaction&quot;,this.path);A(&quot;Firebase.transaction&quot;,1,a,!1);A(&quot;Firebase.transaction&quot;,2,b,!0);if(p(c)&amp;&amp;&quot;boolean&quot;!=typeof c)throw Error(Db(&quot;Firebase.transaction&quot;,3,!0)+&quot;must be a boolean.&quot;);if(&quot;.length&quot;===this.getKey()||&quot;.keys&quot;===this.getKey())throw&quot;Firebase.transaction failed: &quot;+this.getKey()+&quot; is a read-only object.&quot;;&quot;undefined&quot;===typeof c&amp;&amp;(c=!0);var d=new Hb;ga(b)&amp;&amp;Jb(d.sa);ei(this.u,this.path,a,function(a,c,</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">h){a?d.reject(a):d.resolve(new Pb(c,h));ga(b)&amp;&amp;b(a,c,h)},c);return d.sa};g.vg=function(a,b){y(&quot;Firebase.setPriority&quot;,1,2,arguments.length);Mf(&quot;Firebase.setPriority&quot;,this.path);If(&quot;Firebase.setPriority&quot;,1,a);A(&quot;Firebase.setPriority&quot;,2,b,!0);var c=new Hb;this.u.Kb(this.path.k(&quot;.priority&quot;),a,null,Ib(c,b));return c.sa};</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">g.push=function(a,b){y(&quot;Firebase.push&quot;,0,2,arguments.length);Mf(&quot;Firebase.push&quot;,this.path);Ef(&quot;Firebase.push&quot;,a,this.path,!0);A(&quot;Firebase.push&quot;,2,b,!0);var c=Zh(this.u),d=Uf(c),c=this.k(d);if(null!=a){var e=this,f=c.set(a,b).then(function(){return e.k(d)});c.then=r(f.then,f);c[&quot;catch&quot;]=r(f.then,f,void 0);ga(b)&amp;&amp;Jb(f)}return c};g.kb=function(){Mf(&quot;Firebase.onDisconnect&quot;,this.path);return new V(this.u,this.path)};U.prototype.child=U.prototype.k;U.prototype.set=U.prototype.set;U.prototype.update=U.prototype.update;</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">U.prototype.setWithPriority=U.prototype.Kb;U.prototype.remove=U.prototype.remove;U.prototype.transaction=U.prototype.transaction;U.prototype.setPriority=U.prototype.vg;U.prototype.push=U.prototype.push;U.prototype.onDisconnect=U.prototype.kb;kd(U.prototype,&quot;database&quot;,U.prototype.Pf);kd(U.prototype,&quot;key&quot;,U.prototype.getKey);kd(U.prototype,&quot;parent&quot;,U.prototype.getParent);kd(U.prototype,&quot;root&quot;,U.prototype.Zf);if(&quot;undefined&quot;===typeof firebase)throw Error(&quot;Cannot install Firebase Database - be sure to load firebase-app.js first.&quot;);</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">try{firebase.INTERNAL.registerService(&quot;database&quot;,function(a){var b=yf.Wb(),c=a.options.databaseURL;p(c)||$c(&quot;Can&#39;t determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.intializeApp().&quot;);var d=ad(c),c=d.kc;xf(&quot;Invalid Firebase Database URL&quot;,d);d.path.e()||$c(&quot;Database URL must point to the root of a Firebase Database (not including a child path).&quot;);(d=x(b.nb,a.name))&amp;&amp;$c(&quot;FIREBASE INTERNAL ERROR: Database initialized multiple times.&quot;);d=new tf(c,b.Ff,a);b.nb[a.name]=</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">d;return d.$a},{Reference:U,Query:X,Database:sf,enableLogging:Xc,INTERNAL:Y,TEST_ACCESS:Z,ServerValue:vf})}catch(ni){$c(&quot;Failed to register the Firebase Database Service (&quot;+ni+&quot;)&quot;)};})();</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">(function() {var f=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&amp;&amp;Object.defineProperty(a,d,e)}else a[d]=b[d]},h=&quot;function&quot;==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError(&quot;ES3 does not support getters and setters.&quot;);a!=Array.prototype&amp;&amp;a!=Object.prototype&amp;&amp;(a[b]=c.value)},k=&quot;undefined&quot;!=typeof window&amp;&amp;window===this?this:&quot;undefined&quot;!=typeof global&amp;&amp;</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">null!=global?global:this,l=function(a,b){if(b){var c=k;a=a.split(&quot;.&quot;);for(var d=0;d&lt;a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&amp;&amp;null!=b&amp;&amp;h(c,a,{configurable:!0,writable:!0,value:b})}},n=function(){n=function(){};k.Symbol||(k.Symbol=q)},t=0,q=function(a){return&quot;jscomp_symbol_&quot;+(a||&quot;&quot;)+t++},v=function(){n();var a=k.Symbol.iterator;a||(a=k.Symbol.iterator=k.Symbol(&quot;iterator&quot;));&quot;function&quot;!=typeof Array.prototype[a]&amp;&amp;h(Array.prototype,a,{configurable:!0,writable:!0,</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">value:function(){return u(this)}});v=function(){}},u=function(a){var b=0;return w(function(){return b&lt;a.length?{done:!1,value:a[b++]}:{done:!0}})},w=function(a){v();a={next:a};a[k.Symbol.iterator]=function(){return this};return a},x=function(a){v();var b=a[Symbol.iterator];return b?b.call(a):u(a)};</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">l(&quot;Promise&quot;,function(a){function b(){this.a=null}if(a)return a;b.prototype.b=function(a){null==this.a&amp;&amp;(this.a=[],this.f());this.a.push(a)};b.prototype.f=function(){var a=this;this.c(function(){a.h()})};var c=k.setTimeout;b.prototype.c=function(a){c(a,0)};b.prototype.h=function(){for(;this.a&amp;&amp;this.a.length;){var a=this.a;this.a=[];for(var b=0;b&lt;a.length;++b){var c=a[b];delete a[b];try{c()}catch(r){this.g(r)}}}this.a=null};b.prototype.g=function(a){this.c(function(){throw a;})};var d=function(a){this.b=</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">0;this.h=void 0;this.a=[];var b=this.f();try{a(b.resolve,b.reject)}catch(p){b.reject(p)}};d.prototype.f=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}var b=this,c=!1;return{resolve:a(this.ca),reject:a(this.g)}};d.prototype.ca=function(a){if(a===this)this.g(new TypeError(&quot;A Promise cannot resolve to itself&quot;));else if(a instanceof d)this.da(a);else{var b;a:switch(typeof a){case &quot;object&quot;:b=null!=a;break a;case &quot;function&quot;:b=!0;break a;default:b=!1}b?this.w(a):this.j(a)}};d.prototype.w=</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">function(a){var b=void 0;try{b=a.then}catch(p){this.g(p);return}&quot;function&quot;==typeof b?this.ea(b,a):this.j(a)};d.prototype.g=function(a){this.o(2,a)};d.prototype.j=function(a){this.o(1,a)};d.prototype.o=function(a,b){if(0!=this.b)throw Error(&quot;Cannot settle(&quot;+a+&quot;, &quot;+b|&quot;): Promise already settled in state&quot;+this.b);this.b=a;this.h=b;this.v()};d.prototype.v=function(){if(null!=this.a){for(var a=this.a,b=0;b&lt;a.length;++b)a[b].call(),a[b]=null;this.a=null}};var e=new b;d.prototype.da=function(a){var b=this.f();</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">a.c(b.resolve,b.reject)};d.prototype.ea=function(a,b){var c=this.f();try{a.call(b,c.resolve,c.reject)}catch(r){c.reject(r)}};d.prototype.then=function(a,b){function c(a,b){return&quot;function&quot;==typeof a?function(b){try{e(a(b))}catch(W){g(W)}}:b}var e,g,m=new d(function(a,b){e=a;g=b});this.c(c(a,e),c(b,g));return m};d.prototype.catch=function(a){return this.then(void 0,a)};d.prototype.c=function(a,b){function c(){switch(d.b){case 1:a(d.h);break;case 2:b(d.h);break;default:throw Error(&quot;Unexpected state: &quot;+</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">d.b);}}var d=this;null==this.a?e.b(c):this.a.push(function(){e.b(c)})};d.resolve=function(a){return a instanceof d?a:new d(function(b){b(a)})};d.reject=function(a){return new d(function(b,c){c(a)})};d.b=function(a){return new d(function(b,c){for(var e=x(a),g=e.next();!g.done;g=e.next())d.resolve(g.value).c(b,c)})};d.a=function(a){var b=x(a),c=b.next();return c.done?d.resolve([]):new d(function(a,e){function g(b){return function(c){m[b]=c;p--;0==p&amp;&amp;a(m)}}var m=[],p=0;do m.push(void 0),p++,d.resolve(c.value).c(g(m.length-</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">1),e),c=b.next();while(!c.done)})};d.$jscomp$new$AsyncExecutor=function(){return new b};return d});l(&quot;Array.prototype.findIndex&quot;,function(a){return a?a:function(a,c){a:{var b=this;b instanceof String&amp;&amp;(b=String(b));for(var e=b.length,g=0;g&lt;e;g++)if(a.call(c,b[g],g,b)){a=g;break a}a=-1}return a}});l(&quot;Object.assign&quot;,function(a){return a?a:function(a,c){for(var b=1;b&lt;arguments.length;b++){var e=arguments[b];if(e)for(var g in e)Object.prototype.hasOwnProperty.call(e,g)&amp;&amp;(a[g]=e[g])}return a}});</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">var y=this,z=function(a){var b=typeof a;if(&quot;object&quot;==b)if(a){if(a instanceof Array)return&quot;array&quot;;if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(&quot;[object Window]&quot;==c)return&quot;object&quot;;if(&quot;[object Array]&quot;==c||&quot;number&quot;==typeof a.length&amp;&amp;&quot;undefined&quot;!=typeof a.splice&amp;&amp;&quot;undefined&quot;!=typeof a.propertyIsEnumerable&amp;&amp;!a.propertyIsEnumerable(&quot;splice&quot;))return&quot;array&quot;;if(&quot;[object Function]&quot;==c||&quot;undefined&quot;!=typeof a.call&amp;&amp;&quot;undefined&quot;!=typeof a.propertyIsEnumerable&amp;&amp;!a.propertyIsEnumerable(&quot;call&quot;))return&quot;function&quot;}else return&quot;null&quot;;</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">else if(&quot;function&quot;==b&amp;&amp;&quot;undefined&quot;==typeof a.call)return&quot;object&quot;;return b},A=function(a,b){function c(){}c.prototype=b.prototype;a.ja=b.prototype;a.prototype=new c;a.fa=function(a,c,g){for(var d=Array(arguments.length-2),e=2;e&lt;arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var B={i:&quot;only-available-in-window&quot;,A:&quot;only-available-in-sw&quot;,U:&quot;should-be-overriden&quot;,l:&quot;bad-sender-id&quot;,I:&quot;incorrect-gcm-sender-id&quot;,S:&quot;permission-default&quot;,R:&quot;permission-blocked&quot;,Z:&quot;unsupported-browser&quot;,L:&quot;notifications-blocked&quot;,F:&quot;failed-serviceworker-registration&quot;,m:&quot;sw-registration-expected&quot;,H:&quot;get-subscription-failed&quot;,K:&quot;invalid-saved-token&quot;,s:&quot;sw-reg-redundant&quot;,V:&quot;token-subscribe-failed&quot;,X:&quot;token-subscribe-no-token&quot;,W:&quot;token-subscribe-no-push-set&quot;,$:&quot;use-sw-before-get-token&quot;,J:&quot;invalid-delete-token&quot;,</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">D:&quot;delete-token-not-found&quot;,B:&quot;bg-handler-function-expected&quot;,P:&quot;no-window-client-to-msg&quot;,Y:&quot;unable-to-resubscribe&quot;,N:&quot;no-fcm-token-for-resubscribe&quot;,G:&quot;failed-to-delete-token&quot;,O:&quot;no-sw-in-reg&quot;},C={},D=(C[B.i]=&quot;This method is available in a Window context.&quot;,C[B.A]=&quot;This method is available in a service worker context.&quot;,C[B.U]=&quot;This method should be overriden by extended classes.&quot;,C[B.l]=&quot;Please ensure that &#39;messagingSenderId&#39; is set correctly in the options passed into firebase.initializeApp().&quot;,C[B.S]=</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">&quot;The required permissions were not granted and dismissed instead.&quot;,C[B.R]=&quot;The required permissions were not granted and blocked instead.&quot;,C[B.Z]=&quot;This browser doesn&#39;t support the API&#39;s required to use the firebase SDK.&quot;,C[B.L]=&quot;Notifications have been blocked.&quot;,C[B.F]=&quot;We are unable to register the default service worker. {$browserErrorMessage}&quot;,C[B.m]=&quot;A service worker registration was the expected input.&quot;,C[B.H]=&quot;There was an error when trying to get any existing Push Subscriptions.&quot;,C[B.K]=&quot;Unable to access details of the saved token.&quot;,</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">C[B.s]=&quot;The service worker being used for push was made redundant.&quot;,C[B.V]=&quot;A problem occured while subscribing the user to FCM: {$message}&quot;,C[B.X]=&quot;FCM returned no token when subscribing the user to push.&quot;,C[B.W]=&quot;FCM returned an invalid response when getting an FCM token.&quot;,C[B.$]=&quot;You must call useServiceWorker() before calling getToken() to ensure your service worker is used.&quot;,C[B.J]=&quot;You must pass a valid token into deleteToken(), i.e. the token from getToken().&quot;,C[B.D]=&quot;The deletion attempt for token could not be performed as the token was not found.&quot;,</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">C[B.B]=&quot;The input to setBackgroundMessageHandler() must be a function.&quot;,C[B.P]=&quot;An attempt was made to message a non-existant window client.&quot;,C[B.Y]=&quot;There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$message}&quot;,C[B.N]=&quot;Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.&quot;,C[B.G]=&quot;Unable to delete the currently saved token.&quot;,C[B.O]=&quot;Even though the service worker registration was successful, there was a problem accessing the service worker itself.&quot;,</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">C[B.I]=&quot;Please change your web app manifest&#39;s &#39;gcm_sender_id&#39; value to &#39;103953800507&#39; to use Firebase messaging.&quot;,C);var E={userVisibleOnly:!0,applicationServerKey:new Uint8Array([4,51,148,247,223,161,235,177,220,3,162,94,21,113,219,72,211,46,237,237,178,52,219,183,71,58,12,143,196,204,225,111,60,140,132,223,171,182,102,62,242,12,212,139,254,227,249,118,47,20,28,99,8,106,111,45,177,26,149,176,206,55,192,156,110])};var F={u:&quot;firebase-messaging-msg-type&quot;,C:&quot;firebase-messaging-msg-data&quot;},G={T:&quot;push-msg-received&quot;,M:&quot;notification-clicked&quot;},H=function(a,b){var c={};return c[F.u]=a,c[F.C]=b,c};var I=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,I);else{var b=Error().stack;b&amp;&amp;(this.stack=b)}a&amp;&amp;(this.message=String(a))};A(I,Error);var J=function(a,b){for(var c=a.split(&quot;%s&quot;),d=&quot;&quot;,e=Array.prototype.slice.call(arguments,1);e.length&amp;&amp;1&lt;c.length;)d+=c.shift()+e.shift();return d+c.join(&quot;%s&quot;)};var K=function(a,b){b.unshift(a);I.call(this,J.apply(null,b));b.shift()};A(K,I);var aa=function(a,b,c){if(!a){var d=&quot;Assertion failed&quot;;if(b)var d=d+(&quot;: &quot;+b),e=Array.prototype.slice.call(arguments,2);throw new K(&quot;&quot;+d,e||[]);}};var L=null;var M=function(a){a=new Uint8Array(a);var b=z(a);aa(&quot;array&quot;==b||&quot;object&quot;==b&amp;&amp;&quot;number&quot;==typeof a.length,&quot;encodeByteArray takes an array as a parameter&quot;);if(!L)for(L={},b=0;65&gt;b;b++)L[b]=&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=&quot;.charAt(b);for(var b=L,c=[],d=0;d&lt;a.length;d+=3){var e=a[d],g=d+1&lt;a.length,m=g?a[d+1]:0,p=d+2&lt;a.length,r=p?a[d+2]:0,V=e&gt;&gt;2,e=(e&amp;3)&lt;&lt;4|m&gt;&gt;4,m=(m&amp;15)&lt;&lt;2|r&gt;&gt;6,r=r&amp;63;p||(r=64,g||(m=64));c.push(b[V],b[e],b[m],b[r])}return c.join(&quot;&quot;).replace(/\+/g,&quot;-&quot;).replace(/\//g,</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">&quot;_&quot;).replace(/=+$/,&quot;&quot;)};var N=new firebase.INTERNAL.ErrorFactory(&quot;messaging&quot;,&quot;Messaging&quot;,D),O=function(){this.a=null},P=function(a){if(a.a)return a.a;a.a=new Promise(function(a,c){var b=y.indexedDB.open(&quot;fcm_token_details_db&quot;,1);b.onerror=function(a){c(a.target.error)};b.onsuccess=function(b){a(b.target.result)};b.onupgradeneeded=function(a){a=a.target.result.createObjectStore(&quot;fcm_token_object_Store&quot;,{keyPath:&quot;swScope&quot;});a.createIndex(&quot;fcmSenderId&quot;,&quot;fcmSenderId&quot;,{unique:!1});a.createIndex(&quot;fcmToken&quot;,&quot;fcmToken&quot;,{unique:!0})}});</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">return a.a},ba=function(a){a.a?a.a.then(function(b){b.close();a.a=null}):Promise.resolve()},Q=function(a,b){return P(a).then(function(a){return new Promise(function(c,e){var d=a.transaction([&quot;fcm_token_object_Store&quot;]).objectStore(&quot;fcm_token_object_Store&quot;).index(&quot;fcmToken&quot;).get(b);d.onerror=function(a){e(a.target.error)};d.onsuccess=function(a){c(a.target.result)}})})},ca=function(a,b){return P(a).then(function(a){return new Promise(function(c,e){var d=[],m=a.transaction([&quot;fcm_token_object_Store&quot;]).objectStore(&quot;fcm_token_object_Store&quot;).openCursor();</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">m.onerror=function(a){e(a.target.error)};m.onsuccess=function(a){(a=a.target.result)?(a.value.fcmSenderId===b&amp;&amp;d.push(a.value),a.continue()):c(d)}})})},R=function(a,b,c){var d=M(b.getKey(&quot;p256dh&quot;)),e=M(b.getKey(&quot;auth&quot;));a=&quot;authorized_entity=&quot;+a+&quot;&amp;&quot;+(&quot;endpoint=&quot;+b.endpoint+&quot;&amp;&quot;)+(&quot;encryption_key=&quot;+d+&quot;&amp;&quot;)+(&quot;encryption_auth=&quot;+e);c&amp;&amp;(a+=&quot;&amp;pushSet=&quot;+c);c=new Headers;c.append(&quot;Content-Type&quot;,&quot;application/x-www-form-urlencoded&quot;);return fetch(&quot;https://fcm.googleapis.com/fcm/connect/subscribe&quot;,{method:&quot;POST&quot;,</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">headers:c,body:a}).then(function(a){return a.json()}).then(function(a){if(a.error)throw N.create(B.V,{message:a.error.message});if(!a.token)throw N.create(B.X);if(!a.pushSet)throw N.create(B.W);return{token:a.token,pushSet:a.pushSet}})},da=function(a,b,c,d,e,g){var m={swScope:c.scope,endpoint:d.endpoint,auth:M(d.getKey(&quot;auth&quot;)),p256dh:M(d.getKey(&quot;p256dh&quot;)),fcmToken:e,fcmPushSet:g,fcmSenderId:b};return P(a).then(function(a){return new Promise(function(b,c){var d=a.transaction([&quot;fcm_token_object_Store&quot;],</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">&quot;readwrite&quot;).objectStore(&quot;fcm_token_object_Store&quot;).put(m);d.onerror=function(a){c(a.target.error)};d.onsuccess=function(){b()}})})};</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">O.prototype.ba=function(a,b){return b instanceof ServiceWorkerRegistration?&quot;string&quot;!==typeof a||0===a.length?Promise.reject(N.create(B.l)):ca(this,a).then(function(c){if(0!==c.length){var d=c.findIndex(function(c){return b.scope===c.swScope&amp;&amp;a===c.fcmSenderId});if(-1!==d)return c[d]}}).then(function(a){if(a)return b.pushManager.getSubscription().catch(function(){throw N.create(B.H);}).then(function(b){var c;if(c=b)c=b.endpoint===a.endpoint&amp;&amp;M(b.getKey(&quot;auth&quot;))===a.auth&amp;&amp;M(b.getKey(&quot;p256dh&quot;))===a.p256dh;</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">if(c)return a.fcmToken})}):Promise.reject(N.create(B.m))};O.prototype.getSavedToken=O.prototype.ba;O.prototype.aa=function(a,b){var c=this;return&quot;string&quot;!==typeof a||0===a.length?Promise.reject(N.create(B.l)):b instanceof ServiceWorkerRegistration?b.pushManager.getSubscription().then(function(a){return a?a:b.pushManager.subscribe(E)}).then(function(d){return R(a,d).then(function(e){return da(c,a,b,d,e.token,e.pushSet).then(function(){return e.token})})}):Promise.reject(N.create(B.m))};</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">O.prototype.createToken=O.prototype.aa;O.prototype.deleteToken=function(a){var b=this;return&quot;string&quot;!==typeof a||0===a.length?Promise.reject(N.create(B.J)):Q(this,a).then(function(a){if(!a)throw N.create(B.D);return P(b).then(function(b){return new Promise(function(c,d){var e=b.transaction([&quot;fcm_token_object_Store&quot;],&quot;readwrite&quot;).objectStore(&quot;fcm_token_object_Store&quot;).delete(a.swScope);e.onerror=function(a){d(a.target.error)};e.onsuccess=function(b){0===b.target.result?d(N.create(B.G)):c(a)}})})})};var S=function(a){var b=this;this.a=new firebase.INTERNAL.ErrorFactory(&quot;messaging&quot;,&quot;Messaging&quot;,D);if(!a.options.messagingSenderId||&quot;string&quot;!==typeof a.options.messagingSenderId)throw this.a.create(B.l);this.j=a.options.messagingSenderId;this.c=new O;this.app=a;this.INTERNAL={};this.INTERNAL.delete=function(){return b.delete}};</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">S.prototype.getToken=function(){var a=this,b=Notification.permission;return&quot;granted&quot;!==b?&quot;denied&quot;===b?Promise.reject(this.a.create(B.L)):Promise.resolve(null):this.f().then(function(b){return a.c.ba(a.j,b).then(function(c){return c?c:a.c.aa(a.j,b)})})};S.prototype.getToken=S.prototype.getToken;S.prototype.deleteToken=function(a){var b=this;return this.c.deleteToken(a).then(function(){return b.f()}).then(function(a){return a?a.pushManager.getSubscription():null}).then(function(a){if(a)return a.unsubscribe()})};</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">S.prototype.deleteToken=S.prototype.deleteToken;S.prototype.f=function(){throw this.a.create(B.U);};S.prototype.requestPermission=function(){throw this.a.create(B.i);};S.prototype.useServiceWorker=function(){throw this.a.create(B.i);};S.prototype.useServiceWorker=S.prototype.useServiceWorker;S.prototype.onMessage=function(){throw this.a.create(B.i);};S.prototype.onMessage=S.prototype.onMessage;S.prototype.onTokenRefresh=function(){throw this.a.create(B.i);};S.prototype.onTokenRefresh=S.prototype.onTokenRefresh;</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">S.prototype.setBackgroundMessageHandler=function(){throw this.a.create(B.A);};S.prototype.setBackgroundMessageHandler=S.prototype.setBackgroundMessageHandler;S.prototype.delete=function(){ba(this.c)};var T=self,U=function(a){var b=this;S.call(this,a);this.a=new firebase.INTERNAL.ErrorFactory(&quot;messaging&quot;,&quot;Messaging&quot;,D);T.addEventListener(&quot;push&quot;,function(a){return ea(b,a)},!1);T.addEventListener(&quot;pushsubscriptionchange&quot;,function(a){return fa(b,a)},!1);T.addEventListener(&quot;notificationclick&quot;,function(a){return ga(b,a)},!1);this.b=null};f(U,S);</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">var ea=function(a,b){var c;try{c=b.data.json()}catch(e){return}var d=ha().then(function(b){if(b){if(c.notification||a.b)return ia(a,c)}else{if((b=c)&amp;&amp;&quot;object&quot;===typeof b.notification){var d=Object.assign({},b.notification),e={};d.data=(e.FCM_MSG=b,e);b=d}else b=void 0;if(b)return T.registration.showNotification(b.title||&quot;&quot;,b);if(a.b)return a.b(c)}});b.waitUntil(d)},fa=function(a,b){var c=a.getToken().then(function(b){if(!b)throw a.a.create(B.N);var c=a.c;return Q(c,b).then(function(b){if(!b)throw a.a.create(B.K);</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">return T.registration.pushManager.subscribe(E).then(function(a){return R(b.ha,a,b.ga)}).catch(function(d){return c.deleteToken(b.ia).then(function(){throw a.a.create(B.Y,{message:d});})})})});b.waitUntil(c)},ga=function(a,b){if(b.notification&amp;&amp;b.notification.data&amp;&amp;b.notification.data.FCM_MSG){b.stopImmediatePropagation();b.notification.close();var c=b.notification.data.FCM_MSG,d=c.notification.click_action;if(d){var e=ja(d).then(function(a){return a?a:T.clients.openWindow(d)}).then(function(b){if(b)return delete c.notification,</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">X(a,b,H(G.M,c))});b.waitUntil(e)}}};U.prototype.setBackgroundMessageHandler=function(a){if(a&amp;&amp;&quot;function&quot;!==typeof a)throw this.a.create(B.B);this.b=a};U.prototype.setBackgroundMessageHandler=U.prototype.setBackgroundMessageHandler;</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">var ja=function(a){var b=(new URL(a)).href;return T.clients.matchAll({type:&quot;window&quot;,includeUncontrolled:!0}).then(function(a){for(var c=null,e=0;e&lt;a.length;e++)if((new URL(a[e].url)).href===b){c=a[e];break}if(c)return c.focus(),c})},X=function(a,b,c){return new Promise(function(d,e){if(!b)return e(a.a.create(B.P));b.postMessage(c);d()})},ha=function(){return T.clients.matchAll({type:&quot;window&quot;,includeUncontrolled:!0}).then(function(a){return a.some(function(a){return&quot;visible&quot;===a.visibilityState})})},</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">ia=function(a,b){return T.clients.matchAll({type:&quot;window&quot;,includeUncontrolled:!0}).then(function(c){var d=H(G.T,b);return Promise.all(c.map(function(b){return X(a,b,d)}))})};U.prototype.f=function(){return Promise.resolve(T.registration)};var Y=function(a){var b=this;S.call(this,a);this.h=null;this.o=firebase.INTERNAL.createSubscribe(function(a){b.h=a});this.w=null;this.v=firebase.INTERNAL.createSubscribe(function(a){b.w=a});ka(this)};f(Y,S);</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">Y.prototype.getToken=function(){var a=this;return&quot;serviceWorker&quot;in navigator&amp;&amp;&quot;PushManager&quot;in window&amp;&amp;&quot;Notification&quot;in window&amp;&amp;ServiceWorkerRegistration.prototype.hasOwnProperty(&quot;showNotification&quot;)&amp;&amp;PushSubscription.prototype.hasOwnProperty(&quot;getKey&quot;)?la(this).then(function(){return S.prototype.getToken.call(a)}):Promise.reject(this.a.create(B.Z))};Y.prototype.getToken=Y.prototype.getToken;</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">var la=function(a){if(a.g)return a.g;var b=document.querySelector(&#39;link[rel=&quot;manifest&quot;]&#39;);b?a.g=fetch(b.href).then(function(a){return a.json()}).catch(function(){return Promise.resolve()}).then(function(b){if(b&amp;&amp;b.gcm_sender_id&amp;&amp;&quot;103953800507&quot;!==b.gcm_sender_id)throw a.a.create(B.I);}):a.g=Promise.resolve();return a.g};</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line">Y.prototype.requestPermission=function(){var a=this;return&quot;granted&quot;===Notification.permission?Promise.resolve():new Promise(function(b,c){var d=function(d){return&quot;granted&quot;===d?b():&quot;denied&quot;===d?c(a.a.create(B.R)):c(a.a.create(B.S))},e=Notification.requestPermission(function(a){e||d(a)});e&amp;&amp;e.then(d)})};Y.prototype.requestPermission=Y.prototype.requestPermission;</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">Y.prototype.useServiceWorker=function(a){if(!(a instanceof ServiceWorkerRegistration))throw this.a.create(B.m);if(&quot;undefined&quot;!==typeof this.b)throw this.a.create(B.$);this.b=a};Y.prototype.useServiceWorker=Y.prototype.useServiceWorker;Y.prototype.onMessage=function(a,b,c){return this.o(a,b,c)};Y.prototype.onMessage=Y.prototype.onMessage;Y.prototype.onTokenRefresh=function(a,b,c){return this.v(a,b,c)};Y.prototype.onTokenRefresh=Y.prototype.onTokenRefresh;</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">var Z=function(a,b){var c=b.installing||b.waiting||b.active;return new Promise(function(d,e){if(c)if(&quot;activated&quot;===c.state)d(b);else if(&quot;redundant&quot;===c.state)e(a.a.create(B.s));else{var g=function(){if(&quot;activated&quot;===c.state)d(b);else if(&quot;redundant&quot;===c.state)e(a.a.create(B.s));else return;c.removeEventListener(&quot;statechange&quot;,g)};c.addEventListener(&quot;statechange&quot;,g)}else e(a.a.create(B.O))})};</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">Y.prototype.f=function(){var a=this;if(this.b)return Z(this,this.b);this.b=null;return navigator.serviceWorker.register(&quot;/firebase-messaging-sw.js&quot;,{scope:&quot;/firebase-cloud-messaging-push-scope&quot;}).catch(function(b){throw a.a.create(B.F,{browserErrorMessage:b.message});}).then(function(b){return Z(a,b).then(function(){a.b=b;b.update();return b})})};</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">var ka=function(a){&quot;serviceWorker&quot;in navigator&amp;&amp;navigator.serviceWorker.addEventListener(&quot;message&quot;,function(b){if(b.data&amp;&amp;b.data[F.u])switch(b=b.data,b[F.u]){case G.T:case G.M:a.h.next(b[F.C])}},!1)};if(!(firebase&amp;&amp;firebase.INTERNAL&amp;&amp;firebase.INTERNAL.registerService))throw Error(&quot;Cannot install Firebase Messaging - be sure to load firebase-app.js first.&quot;);firebase.INTERNAL.registerService(&quot;messaging&quot;,function(a){return self&amp;&amp;&quot;ServiceWorkerGlobalScope&quot;in self?new U(a):new Y(a)},{Messaging:Y});})();</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">(function() {var k,aa=aa||{},l=this,n=function(a){return void 0!==a},ba=function(){},ca=function(){throw Error(&quot;unimplemented abstract method&quot;);},p=function(a){var b=typeof a;if(&quot;object&quot;==b)if(a){if(a instanceof Array)return&quot;array&quot;;if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(&quot;[object Window]&quot;==c)return&quot;object&quot;;if(&quot;[object Array]&quot;==c||&quot;number&quot;==typeof a.length&amp;&amp;&quot;undefined&quot;!=typeof a.splice&amp;&amp;&quot;undefined&quot;!=typeof a.propertyIsEnumerable&amp;&amp;!a.propertyIsEnumerable(&quot;splice&quot;))return&quot;array&quot;;</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">if(&quot;[object Function]&quot;==c||&quot;undefined&quot;!=typeof a.call&amp;&amp;&quot;undefined&quot;!=typeof a.propertyIsEnumerable&amp;&amp;!a.propertyIsEnumerable(&quot;call&quot;))return&quot;function&quot;}else return&quot;null&quot;;else if(&quot;function&quot;==b&amp;&amp;&quot;undefined&quot;==typeof a.call)return&quot;object&quot;;return b},da=function(a){var b=p(a);return&quot;array&quot;==b||&quot;object&quot;==b&amp;&amp;&quot;number&quot;==typeof a.length},r=function(a){return&quot;string&quot;==typeof a},t=function(a){return&quot;function&quot;==p(a)},ea=function(a){var b=typeof a;return&quot;object&quot;==b&amp;&amp;null!=a||&quot;function&quot;==b},fa=&quot;closure_uid_&quot;+(1E9*Math.random()&gt;&gt;&gt;</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">0),ga=0,ha=function(a,b,c){return a.call.apply(a.bind,arguments)},ia=function(a,b,c){if(!a)throw Error();if(2&lt;arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},u=function(a,b,c){u=Function.prototype.bind&amp;&amp;-1!=Function.prototype.bind.toString().indexOf(&quot;native code&quot;)?ha:ia;return u.apply(null,arguments)},ja=Date.now||function(){return+new Date},</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">v=function(a,b){function c(){}c.prototype=b.prototype;a.I=b.prototype;a.prototype=new c;a.Ka=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e&lt;arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var ka=function(a,b,c){function d(){P||(P=!0,b.apply(null,arguments))}function e(b){m=setTimeout(function(){m=null;a(f,2===Q)},b)}function f(a,b){if(!P)if(a)d.apply(null,arguments);else if(2===Q||q)d.apply(null,arguments);else{64&gt;h&amp;&amp;(h*=2);var c;1===Q?(Q=2,c=0):c=1E3*(h+Math.random());e(c)}}function g(a){jc||(jc=!0,P||(null!==m?(a||(Q=2),clearTimeout(m),e(0)):a||(Q=1)))}var h=1,m=null,q=!1,Q=0,P=!1,jc=!1;e(0);setTimeout(function(){q=!0;g(!0)},c);return g};var la=&quot;https://firebasestorage.googleapis.com&quot;;var w=function(a,b){this.code=&quot;storage/&quot;+a;this.message=&quot;Firebase Storage: &quot;+b;this.serverResponse=null;this.name=&quot;FirebaseError&quot;};v(w,Error);</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">var ma=function(){return new w(&quot;unknown&quot;,&quot;An unknown error occurred, please check the error payload for server response.&quot;)},na=function(){return new w(&quot;canceled&quot;,&quot;User canceled the upload/download.&quot;)},oa=function(){return new w(&quot;cannot-slice-blob&quot;,&quot;Cannot slice blob for upload. Please retry the upload.&quot;)},pa=function(a,b,c){return new w(&quot;invalid-argument&quot;,&quot;Invalid argument in `&quot;+b+&quot;` at index &quot;+a+&quot;: &quot;+c)},qa=function(){return new w(&quot;app-deleted&quot;,&quot;The Firebase app was deleted.&quot;)},ra=function(a,b){return new w(&quot;invalid-format&quot;,</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">&quot;String does not match format &#39;&quot;+a+&quot;&#39;: &quot;+b)};var sa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&amp;&amp;b(c,a[c])},ta=function(a){var b={};sa(a,function(a,d){b[a]=d});return b};var x=function(a,b,c,d){this.i=a;this.b={};this.method=b;this.headers={};this.body=&quot;&quot;;this.M=c;this.c=this.a=null;this.f=[200];this.h=[];this.timeout=d;this.g=!0};var ua={STATE_CHANGED:&quot;state_changed&quot;},va={RUNNING:&quot;running&quot;,PAUSED:&quot;paused&quot;,SUCCESS:&quot;success&quot;,CANCELED:&quot;canceled&quot;,ERROR:&quot;error&quot;},wa=function(a){switch(a){case &quot;running&quot;:case &quot;pausing&quot;:case &quot;canceling&quot;:return&quot;running&quot;;case &quot;paused&quot;:return&quot;paused&quot;;case &quot;success&quot;:return&quot;success&quot;;case &quot;canceled&quot;:return&quot;canceled&quot;;case &quot;error&quot;:return&quot;error&quot;;default:return&quot;error&quot;}};var y=function(a){return n(a)&amp;&amp;null!==a},xa=function(a){return&quot;string&quot;===typeof a||a instanceof String},ya=function(){return&quot;undefined&quot;!==typeof Blob};var za=function(a,b,c){this.f=c;this.c=a;this.g=b;this.b=0;this.a=null};za.prototype.get=function(){var a;0&lt;this.b?(this.b--,a=this.a,this.a=a.next,a.next=null):a=this.c();return a};var Aa=function(a,b){a.g(b);a.b&lt;a.f&amp;&amp;(a.b++,b.next=a.a,a.a=b)};var z=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,z);else{var b=Error().stack;b&amp;&amp;(this.stack=b)}a&amp;&amp;(this.message=String(a))};v(z,Error);z.prototype.name=&quot;CustomError&quot;;var Ba=function(a,b,c,d,e){this.reset(a,b,c,d,e)};Ba.prototype.a=null;var Ca=0;Ba.prototype.reset=function(a,b,c,d,e){&quot;number&quot;==typeof e||Ca++;d||ja();this.b=b;delete this.a};var Da=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},Ea=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},Fa=&quot;constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf&quot;.split(&quot; &quot;),Ga=function(a,b){for(var c,d,e=1;e&lt;arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f&lt;Fa.length;f++)c=Fa[f],Object.prototype.hasOwnProperty.call(d,c)&amp;&amp;(a[c]=d[c])}};var Ha=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},Ia=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var Ja=function(a){Ja[&quot; &quot;](a);return a};Ja[&quot; &quot;]=ba;var La=function(a,b){var c=Ka;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var Ma=function(a,b){for(var c=a.split(&quot;%s&quot;),d=&quot;&quot;,e=Array.prototype.slice.call(arguments,1);e.length&amp;&amp;1&lt;c.length;)d+=c.shift()+e.shift();return d+c.join(&quot;%s&quot;)},Na=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,&quot;&quot;)},Oa=function(a,b){return a&lt;b?-1:a&gt;b?1:0};var Pa=function(a,b){this.a=a;this.b=b};var Qa=function(a,b){this.bucket=a;this.path=b},Ra=function(a){var b=encodeURIComponent;return&quot;/b/&quot;+b(a.bucket)+&quot;/o/&quot;+b(a.path)},Sa=function(a){for(var b=null,c=[{ia:/^gs:\/\/([A-Za-z0-9.\-]+)(\/(.*))?$/i,ba:{bucket:1,path:3},ha:function(a){&quot;/&quot;===a.path.charAt(a.path.length-1)&amp;&amp;(a.path=a.path.slice(0,-1))}},{ia:/^https?:\/\/firebasestorage\.googleapis\.com\/v[A-Za-z0-9_]+\/b\/([A-Za-z0-9.\-]+)\/o(\/([^?#]*).*)?$/i,ba:{bucket:1,path:3},ha:function(a){a.path=decodeURIComponent(a.path)}}],d=0;d&lt;c.length;d++){var e=</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">c[d],f=e.ia.exec(a);if(f){b=f[e.ba.bucket];(f=f[e.ba.path])||(f=&quot;&quot;);b=new Qa(b,f);e.ha(b);break}}if(null==b)throw new w(&quot;invalid-url&quot;,&quot;Invalid URL &#39;&quot;+a+&quot;&#39;.&quot;);return b};var Ta=function(a,b,c){t(a)||y(b)||y(c)?(this.next=a,this.a=b||null,this.b=c||null):(this.next=a.next||null,this.a=a.error||null,this.b=a.complete||null)};var Ua={RAW:&quot;raw&quot;,BASE64:&quot;base64&quot;,BASE64URL:&quot;base64url&quot;,DATA_URL:&quot;data_url&quot;},Va=function(a){switch(a){case &quot;raw&quot;:case &quot;base64&quot;:case &quot;base64url&quot;:case &quot;data_url&quot;:break;default:throw&quot;Expected one of the event types: [raw, base64, base64url, data_url].&quot;;}},Wa=function(a,b){this.data=a;this.a=b||null},$a=function(a,b){switch(a){case &quot;raw&quot;:return new Wa(Xa(b));case &quot;base64&quot;:case &quot;base64url&quot;:return new Wa(Ya(a,b));case &quot;data_url&quot;:return a=new Za(b),a=a.a?Ya(&quot;base64&quot;,a.c):Xa(a.c),new Wa(a,(new Za(b)).b)}throw ma();</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">},Xa=function(a){for(var b=[],c=0;c&lt;a.length;c++){var d=a.charCodeAt(c);if(127&gt;=d)b.push(d);else if(2047&gt;=d)b.push(192|d&gt;&gt;6,128|d&amp;63);else if(55296==(d&amp;64512))if(c&lt;a.length-1&amp;&amp;56320==(a.charCodeAt(c+1)&amp;64512)){var e=a.charCodeAt(++c),d=65536|(d&amp;1023)&lt;&lt;10|e&amp;1023;b.push(240|d&gt;&gt;18,128|d&gt;&gt;12&amp;63,128|d&gt;&gt;6&amp;63,128|d&amp;63)}else b.push(239,191,189);else 56320==(d&amp;64512)?b.push(239,191,189):b.push(224|d&gt;&gt;12,128|d&gt;&gt;6&amp;63,128|d&amp;63)}return new Uint8Array(b)},Ya=function(a,b){switch(a){case &quot;base64&quot;:var c=-1!==b.indexOf(&quot;-&quot;),</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">d=-1!==b.indexOf(&quot;_&quot;);if(c||d)throw ra(a,&quot;Invalid character &#39;&quot;+(c?&quot;-&quot;:&quot;_&quot;)+&quot;&#39; found: is it base64url encoded?&quot;);break;case &quot;base64url&quot;:c=-1!==b.indexOf(&quot;+&quot;);d=-1!==b.indexOf(&quot;/&quot;);if(c||d)throw ra(a,&quot;Invalid character &#39;&quot;+(c?&quot;+&quot;:&quot;/&quot;)+&quot;&#39; found: is it base64 encoded?&quot;);b=b.replace(/-/g,&quot;+&quot;).replace(/_/g,&quot;/&quot;)}var e;try{e=atob(b)}catch(f){throw ra(a,&quot;Invalid character found&quot;);}a=new Uint8Array(e.length);for(b=0;b&lt;e.length;b++)a[b]=e.charCodeAt(b);return a},Za=function(a){var b=a.match(/^data:([^,]+)?,/);</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line">if(null===b)throw ra(&quot;data_url&quot;,&quot;Must be formatted &#39;data:[&lt;mediatype&gt;][;base64],&lt;data&gt;&quot;);b=b[1]||null;this.a=!1;this.b=null;if(null!=b){var c=b.length-7;this.b=(this.a=0&lt;=c&amp;&amp;b.indexOf(&quot;;base64&quot;,c)==c)?b.substring(0,b.length-7):b}this.c=a.substring(a.indexOf(&quot;,&quot;)+1)};var ab=function(a){var b=encodeURIComponent,c=&quot;?&quot;;sa(a,function(a,e){a=b(a)+&quot;=&quot;+b(e);c=c+a+&quot;&amp;&quot;});return c=c.slice(0,-1)};var A=function(a,b,c,d,e,f){this.b=a;this.h=b;this.f=c;this.a=d;this.g=e;this.c=f};k=A.prototype;k.na=function(){return this.b};k.Ja=function(){return this.h};k.Ga=function(){return this.f};k.Ba=function(){return this.a};k.pa=function(){if(y(this.a)){var a=this.a.downloadURLs;return y(a)&amp;&amp;y(a[0])?a[0]:null}return null};k.Ia=function(){return this.g};k.Ea=function(){return this.c};var bb=function(a,b){b.unshift(a);z.call(this,Ma.apply(null,b));b.shift()};v(bb,z);bb.prototype.name=&quot;AssertionError&quot;;</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line">var cb=function(a,b,c,d){var e=&quot;Assertion failed&quot;;if(c)var e=e+(&quot;: &quot;+c),f=d;else a&amp;&amp;(e+=&quot;: &quot;+a,f=b);throw new bb(&quot;&quot;+e,f||[]);},B=function(a,b,c){a||cb(&quot;&quot;,null,b,Array.prototype.slice.call(arguments,2))},db=function(a,b){throw new bb(&quot;Failure&quot;+(a?&quot;: &quot;+a:&quot;&quot;),Array.prototype.slice.call(arguments,1));},eb=function(a,b,c){t(a)||cb(&quot;Expected function but got %s: %s.&quot;,[p(a),a],b,Array.prototype.slice.call(arguments,2))};var fb=function(){this.g=this.g;this.o=this.o};fb.prototype.g=!1;fb.prototype.ea=function(){this.g||(this.g=!0,this.D())};fb.prototype.D=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var gb=&quot;closure_listenable_&quot;+(1E6*Math.random()|0),hb=0;var ib;a:{var jb=l.navigator;if(jb){var kb=jb.userAgent;if(kb){ib=kb;break a}}ib=&quot;&quot;}var C=function(a){return-1!=ib.indexOf(a)};var lb=function(){};lb.prototype.b=null;lb.prototype.a=ca;var mb=function(a){return a.b||(a.b=a.f())};lb.prototype.f=ca;var nb=Array.prototype.indexOf?function(a,b,c){B(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0&gt;c?Math.max(0,a.length+c):c;if(r(a))return r(b)&amp;&amp;1==b.length?a.indexOf(b,c):-1;for(;c&lt;a.length;c++)if(c in a&amp;&amp;a[c]===b)return c;return-1},ob=Array.prototype.forEach?function(a,b,c){B(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(&quot;&quot;):a,f=0;f&lt;d;f++)f in e&amp;&amp;b.call(c,e[f],f,a)},pb=Array.prototype.filter?function(a,</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line">b,c){B(null!=a.length);return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=r(a)?a.split(&quot;&quot;):a,h=0;h&lt;d;h++)if(h in g){var m=g[h];b.call(c,m,h,a)&amp;&amp;(e[f++]=m)}return e},qb=Array.prototype.map?function(a,b,c){B(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=r(a)?a.split(&quot;&quot;):a,g=0;g&lt;d;g++)g in f&amp;&amp;(e[g]=b.call(c,f[g],g,a));return e},rb=Array.prototype.some?function(a,b,c){B(null!=a.length);return Array.prototype.some.call(a,</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(&quot;&quot;):a,f=0;f&lt;d;f++)if(f in e&amp;&amp;b.call(c,e[f],f,a))return!0;return!1},tb=function(a){var b;a:{b=sb;for(var c=a.length,d=r(a)?a.split(&quot;&quot;):a,e=0;e&lt;c;e++)if(e in d&amp;&amp;b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0&gt;b?null:r(a)?a.charAt(b):a[b]},ub=function(a,b){return 0&lt;=nb(a,b)},vb=function(a){if(&quot;array&quot;!=p(a))for(var b=a.length-1;0&lt;=b;b--)delete a[b];a.length=0},wb=function(a,b){b=nb(a,b);var c;if(c=0&lt;=b)B(null!=a.length),Array.prototype.splice.call(a,</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">b,1);return c},xb=function(a){var b=a.length;if(0&lt;b){for(var c=Array(b),d=0;d&lt;b;d++)c[d]=a[d];return c}return[]};var zb=new za(function(){return new yb},function(a){a.reset()},100),Bb=function(){var a=Ab,b=null;a.a&amp;&amp;(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b},yb=function(){this.next=this.b=this.a=null};yb.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};yb.prototype.reset=function(){this.next=this.b=this.a=null};var Cb=function(a,b){this.type=a;this.a=this.target=b;this.ja=!0};Cb.prototype.b=function(){this.ja=!1};var Db=function(a,b,c,d,e){this.listener=a;this.a=null;this.src=b;this.type=c;this.U=!!d;this.M=e;++hb;this.N=this.T=!1},Eb=function(a){a.N=!0;a.listener=null;a.a=null;a.src=null;a.M=null};var Fb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var Gb=function(a,b){b=pb(b.split(&quot;/&quot;),function(a){return 0&lt;a.length}).join(&quot;/&quot;);return 0===a.length?b:a+&quot;/&quot;+b},Hb=function(a){var b=a.lastIndexOf(&quot;/&quot;,a.length-2);return-1===b?a:a.slice(b+1)};var Ib=function(a){this.src=a;this.a={};this.b=0},Kb=function(a,b,c,d,e,f){var g=b.toString();b=a.a[g];b||(b=a.a[g]=[],a.b++);var h=Jb(b,c,e,f);-1&lt;h?(a=b[h],d||(a.T=!1)):(a=new Db(c,a.src,g,!!e,f),a.T=d,b.push(a));return a},Lb=function(a,b){var c=b.type;c in a.a&amp;&amp;wb(a.a[c],b)&amp;&amp;(Eb(b),0==a.a[c].length&amp;&amp;(delete a.a[c],a.b--))},Jb=function(a,b,c,d){for(var e=0;e&lt;a.length;++e){var f=a[e];if(!f.N&amp;&amp;f.listener==b&amp;&amp;f.U==!!c&amp;&amp;f.M==d)return e}return-1};var Mb,Nb=function(){};v(Nb,lb);Nb.prototype.a=function(){var a=Ob(this);return a?new ActiveXObject(a):new XMLHttpRequest};Nb.prototype.f=function(){var a={};Ob(this)&amp;&amp;(a[0]=!0,a[1]=!0);return a};</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">var Ob=function(a){if(!a.c&amp;&amp;&quot;undefined&quot;==typeof XMLHttpRequest&amp;&amp;&quot;undefined&quot;!=typeof ActiveXObject){for(var b=[&quot;MSXML2.XMLHTTP.6.0&quot;,&quot;MSXML2.XMLHTTP.3.0&quot;,&quot;MSXML2.XMLHTTP&quot;,&quot;Microsoft.XMLHTTP&quot;],c=0;c&lt;b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.c=d}catch(e){}}throw Error(&quot;Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed&quot;);}return a.c};Mb=new Nb;var Pb=function(a){this.a=[];if(a)a:{var b;if(a instanceof Pb){if(b=a.H(),a=a.A(),0&gt;=this.b()){for(var c=this.a,d=0;d&lt;b.length;d++)c.push(new Pa(b[d],a[d]));break a}}else b=Ea(a),a=Da(a);for(d=0;d&lt;b.length;d++)Qb(this,b[d],a[d])}},Qb=function(a,b,c){var d=a.a;d.push(new Pa(b,c));b=d.length-1;a=a.a;for(c=a[b];0&lt;b;)if(d=b-1&gt;&gt;1,a[d].a&gt;c.a)a[b]=a[d],b=d;else break;a[b]=c};Pb.prototype.A=function(){for(var a=this.a,b=[],c=a.length,d=0;d&lt;c;d++)b.push(a[d].b);return b};</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">Pb.prototype.H=function(){for(var a=this.a,b=[],c=a.length,d=0;d&lt;c;d++)b.push(a[d].a);return b};Pb.prototype.b=function(){return this.a.length};var Rb=function(){this.c=[];this.a=[]},Sb=function(a){0==a.c.length&amp;&amp;(a.c=a.a,a.c.reverse(),a.a=[]);return a.c.pop()};Rb.prototype.b=function(){return this.c.length+this.a.length};Rb.prototype.A=function(){for(var a=[],b=this.c.length-1;0&lt;=b;--b)a.push(this.c[b]);for(var c=this.a.length,b=0;b&lt;c;++b)a.push(this.a[b]);return a};var Tb=function(a){if(a.A&amp;&amp;&quot;function&quot;==typeof a.A)return a.A();if(r(a))return a.split(&quot;&quot;);if(da(a)){for(var b=[],c=a.length,d=0;d&lt;c;d++)b.push(a[d]);return b}return Da(a)},Ub=function(a,b){if(a.forEach&amp;&amp;&quot;function&quot;==typeof a.forEach)a.forEach(b,void 0);else if(da(a)||r(a))ob(a,b,void 0);else{var c;if(a.H&amp;&amp;&quot;function&quot;==typeof a.H)c=a.H();else if(a.A&amp;&amp;&quot;function&quot;==typeof a.A)c=void 0;else if(da(a)||r(a)){c=[];for(var d=a.length,e=0;e&lt;d;e++)c.push(e)}else c=Ea(a);for(var d=Tb(a),e=d.length,f=0;f&lt;e;f++)b.call(void 0,</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">d[f],c&amp;&amp;c[f],a)}};var Vb=function(a){l.setTimeout(function(){throw a;},0)},Wb,Xb=function(){var a=l.MessageChannel;&quot;undefined&quot;===typeof a&amp;&amp;&quot;undefined&quot;!==typeof window&amp;&amp;window.postMessage&amp;&amp;window.addEventListener&amp;&amp;!C(&quot;Presto&quot;)&amp;&amp;(a=function(){var a=document.createElement(&quot;IFRAME&quot;);a.style.display=&quot;none&quot;;a.src=&quot;&quot;;document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write(&quot;&quot;);a.close();var c=&quot;callImmediate&quot;+Math.random(),d=&quot;file:&quot;==b.location.protocol?&quot;*&quot;:b.location.protocol+&quot;//&quot;+b.location.host,</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">a=u(function(a){if((&quot;*&quot;==d||a.origin==d)&amp;&amp;a.data==c)this.port1.onmessage()},this);b.addEventListener(&quot;message&quot;,a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if(&quot;undefined&quot;!==typeof a&amp;&amp;!C(&quot;Trident&quot;)&amp;&amp;!C(&quot;MSIE&quot;)){var b=new a,c={},d=c;b.port1.onmessage=function(){if(n(c.next)){c=c.next;var a=c.da;c.da=null;a()}};return function(a){d.next={da:a};d=d.next;b.port2.postMessage(0)}}return&quot;undefined&quot;!==typeof document&amp;&amp;&quot;onreadystatechange&quot;in document.createElement(&quot;SCRIPT&quot;)?</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">function(a){var b=document.createElement(&quot;SCRIPT&quot;);b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){l.setTimeout(a,0)}};var Yb=&quot;StopIteration&quot;in l?l.StopIteration:{message:&quot;StopIteration&quot;,stack:&quot;&quot;},Zb=function(){};Zb.prototype.next=function(){throw Yb;};Zb.prototype.h=function(){return this};var $b=function(){Pb.call(this)};v($b,Pb);var ac=C(&quot;Opera&quot;),D=C(&quot;Trident&quot;)||C(&quot;MSIE&quot;),bc=C(&quot;Edge&quot;),cc=C(&quot;Gecko&quot;)&amp;&amp;!(-1!=ib.toLowerCase().indexOf(&quot;webkit&quot;)&amp;&amp;!C(&quot;Edge&quot;))&amp;&amp;!(C(&quot;Trident&quot;)||C(&quot;MSIE&quot;))&amp;&amp;!C(&quot;Edge&quot;),dc=-1!=ib.toLowerCase().indexOf(&quot;webkit&quot;)&amp;&amp;!C(&quot;Edge&quot;),ec=function(){var a=l.document;return a?a.documentMode:void 0},fc;</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">a:{var gc=&quot;&quot;,hc=function(){var a=ib;if(cc)return/rv\:([^\);]+)(\)|;)/.exec(a);if(bc)return/Edge\/([\d\.]+)/.exec(a);if(D)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(dc)return/WebKit\/(\S+)/.exec(a);if(ac)return/(?:Version)[ \/]?(\S+)/.exec(a)}();hc&amp;&amp;(gc=hc?hc[1]:&quot;&quot;);if(D){var ic=ec();if(null!=ic&amp;&amp;ic&gt;parseFloat(gc)){fc=String(ic);break a}}fc=gc}</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">var kc=fc,Ka={},E=function(a){return La(a,function(){for(var b=0,c=Na(String(kc)).split(&quot;.&quot;),d=Na(String(a)).split(&quot;.&quot;),e=Math.max(c.length,d.length),f=0;0==b&amp;&amp;f&lt;e;f++){var g=c[f]||&quot;&quot;,h=d[f]||&quot;&quot;;do{g=/(\d*)(\D*)(.*)/.exec(g)||[&quot;&quot;,&quot;&quot;,&quot;&quot;,&quot;&quot;];h=/(\d*)(\D*)(.*)/.exec(h)||[&quot;&quot;,&quot;&quot;,&quot;&quot;,&quot;&quot;];if(0==g[0].length&amp;&amp;0==h[0].length)break;b=Oa(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||Oa(0==g[2].length,0==h[2].length)||Oa(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0&lt;=b})},lc;var mc=l.document;</td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line">lc=mc&amp;&amp;D?ec()||(&quot;CSS1Compat&quot;==mc.compatMode?parseInt(kc,10):5):void 0;var qc=function(a,b){nc||oc();pc||(nc(),pc=!0);var c=Ab,d=zb.get();d.set(a,b);c.b?c.b.next=d:(B(!c.a),c.a=d);c.b=d},nc,oc=function(){var a=l.Promise;if(-1!=String(a).indexOf(&quot;[native code]&quot;)){var b=a.resolve(void 0);nc=function(){b.then(rc)}}else nc=function(){var a=rc;!t(l.setImmediate)||l.Window&amp;&amp;l.Window.prototype&amp;&amp;!C(&quot;Edge&quot;)&amp;&amp;l.Window.prototype.setImmediate==l.setImmediate?(Wb||(Wb=Xb()),Wb(a)):l.setImmediate(a)}},pc=!1,Ab=new function(){this.b=this.a=null},rc=function(){for(var a;a=Bb();){try{a.a.call(a.b)}catch(b){Vb(b)}Aa(zb,</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line">a)}pc=!1};var sc;(sc=!D)||(sc=9&lt;=Number(lc));var tc=sc,uc=D&amp;&amp;!E(&quot;9&quot;);!dc||E(&quot;528&quot;);cc&amp;&amp;E(&quot;1.9b&quot;)||D&amp;&amp;E(&quot;8&quot;)||ac&amp;&amp;E(&quot;9.5&quot;)||dc&amp;&amp;E(&quot;528&quot;);cc&amp;&amp;!E(&quot;8&quot;)||D&amp;&amp;E(&quot;9&quot;);var F=function(a,b){this.c={};this.a=[];this.g=this.f=0;var c=arguments.length;if(1&lt;c){if(c%2)throw Error(&quot;Uneven number of arguments&quot;);for(var d=0;d&lt;c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof F?(c=a.H(),d=a.A()):(c=Ea(a),d=Da(a));for(var e=0;e&lt;c.length;e++)this.set(c[e],d[e])}};F.prototype.b=function(){return this.f};F.prototype.A=function(){vc(this);for(var a=[],b=0;b&lt;this.a.length;b++)a.push(this.c[this.a[b]]);return a};F.prototype.H=function(){vc(this);return this.a.concat()};</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line">var wc=function(a,b){return Object.prototype.hasOwnProperty.call(a.c,b)?(delete a.c[b],a.f--,a.g++,a.a.length&gt;2*a.f&amp;&amp;vc(a),!0):!1},vc=function(a){if(a.f!=a.a.length){for(var b=0,c=0;b&lt;a.a.length;){var d=a.a[b];Object.prototype.hasOwnProperty.call(a.c,d)&amp;&amp;(a.a[c++]=d);b++}a.a.length=c}if(a.f!=a.a.length){for(var e={},c=b=0;b&lt;a.a.length;)d=a.a[b],Object.prototype.hasOwnProperty.call(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}};</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line">F.prototype.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.c,a)?this.c[a]:b};F.prototype.set=function(a,b){Object.prototype.hasOwnProperty.call(this.c,a)||(this.f++,this.a.push(a),this.g++);this.c[a]=b};F.prototype.forEach=function(a,b){for(var c=this.H(),d=0;d&lt;c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line">F.prototype.h=function(a){vc(this);var b=0,c=this.g,d=this,e=new Zb;e.next=function(){if(c!=d.g)throw Error(&quot;The map has changed since the iterator was created&quot;);if(b&gt;=d.a.length)throw Yb;var e=d.a[b++];return a?e:d.c[e]};return e};var xc=function(a,b){Cb.call(this,a?a.type:&quot;&quot;);this.c=this.a=this.target=null;if(a){this.type=a.type;this.target=a.target||a.srcElement;this.a=b;if((b=a.relatedTarget)&amp;&amp;cc)try{Ja(b.nodeName)}catch(c){}this.c=a;a.defaultPrevented&amp;&amp;this.b()}};v(xc,Cb);xc.prototype.b=function(){xc.I.b.call(this);var a=this.c;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,uc)try{if(a.ctrlKey||112&lt;=a.keyCode&amp;&amp;123&gt;=a.keyCode)a.keyCode=-1}catch(b){}};var G=function(a,b){this.a=0;this.i=void 0;this.f=this.b=this.c=null;this.g=this.h=!1;if(a!=ba)try{var c=this;a.call(b,function(a){yc(c,2,a)},function(a){if(!(a instanceof zc))try{if(a instanceof Error)throw a;throw Error(&quot;Promise rejected.&quot;);}catch(e){}yc(c,3,a)})}catch(d){yc(this,3,d)}},Ac=function(){this.next=this.f=this.c=this.b=this.a=null;this.g=!1};Ac.prototype.reset=function(){this.f=this.c=this.b=this.a=null;this.g=!1};</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line">var Bc=new za(function(){return new Ac},function(a){a.reset()},100),Cc=function(a,b,c){var d=Bc.get();d.b=a;d.c=b;d.f=c;return d},Dc=function(a){if(a instanceof G)return a;var b=new G(ba);yc(b,2,a);return b},Ec=function(a){return new G(function(b,c){c(a)})};</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">G.prototype.then=function(a,b,c){null!=a&amp;&amp;eb(a,&quot;opt_onFulfilled should be a function.&quot;);null!=b&amp;&amp;eb(b,&quot;opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?&quot;);return Fc(this,t(a)?a:null,t(b)?b:null,c)};Ha(G);G.prototype.l=function(a,b){return Fc(this,null,a,b)};G.prototype.cancel=function(a){0==this.a&amp;&amp;qc(function(){var b=new zc(a);Gc(this,b)},this)};</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line">var Gc=function(a,b){if(0==a.a)if(a.c){var c=a.c;if(c.b){for(var d=0,e=null,f=null,g=c.b;g&amp;&amp;(g.g||(d++,g.a==a&amp;&amp;(e=g),!(e&amp;&amp;1&lt;d)));g=g.next)e||(f=g);e&amp;&amp;(0==c.a&amp;&amp;1==d?Gc(c,b):(f?(d=f,B(c.b),B(null!=d),d.next==c.f&amp;&amp;(c.f=d),d.next=d.next.next):Hc(c),Ic(c,e,3,b)))}a.c=null}else yc(a,3,b)},Kc=function(a,b){a.b||2!=a.a&amp;&amp;3!=a.a||Jc(a);B(null!=b.b);a.f?a.f.next=b:a.b=b;a.f=b},Fc=function(a,b,c,d){var e=Cc(null,null,null);e.a=new G(function(a,g){e.b=b?function(c){try{var e=b.call(d,c);a(e)}catch(q){g(q)}}:a;</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">e.c=c?function(b){try{var e=c.call(d,b);!n(e)&amp;&amp;b instanceof zc?g(b):a(e)}catch(q){g(q)}}:g});e.a.c=a;Kc(a,e);return e.a};G.prototype.o=function(a){B(1==this.a);this.a=0;yc(this,2,a)};G.prototype.m=function(a){B(1==this.a);this.a=0;yc(this,3,a)};</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line">var yc=function(a,b,c){if(0==a.a){a===c&amp;&amp;(b=3,c=new TypeError(&quot;Promise cannot resolve to itself&quot;));a.a=1;var d;a:{var e=c,f=a.o,g=a.m;if(e instanceof G)null!=f&amp;&amp;eb(f,&quot;opt_onFulfilled should be a function.&quot;),null!=g&amp;&amp;eb(g,&quot;opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?&quot;),Kc(e,Cc(f||ba,g||null,a)),d=!0;else if(Ia(e))e.then(f,g,a),d=!0;else{if(ea(e))try{var h=e.then;if(t(h)){Lc(e,h,f,g,a);d=!0;break a}}catch(m){g.call(a,m);d=!0;break a}d=!1}}d||</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">(a.i=c,a.a=b,a.c=null,Jc(a),3!=b||c instanceof zc||Mc(a,c))}},Lc=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},h=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,h)}catch(m){h(m)}},Jc=function(a){a.h||(a.h=!0,qc(a.j,a))},Hc=function(a){var b=null;a.b&amp;&amp;(b=a.b,a.b=b.next,b.next=null);a.b||(a.f=null);null!=b&amp;&amp;B(null!=b.b);return b};G.prototype.j=function(){for(var a;a=Hc(this);)Ic(this,a,this.a,this.i);this.h=!1};</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">var Ic=function(a,b,c,d){if(3==c&amp;&amp;b.c&amp;&amp;!b.g)for(;a&amp;&amp;a.g;a=a.c)a.g=!1;if(b.a)b.a.c=null,Nc(b,c,d);else try{b.g?b.b.call(b.f):Nc(b,c,d)}catch(e){Oc.call(null,e)}Aa(Bc,b)},Nc=function(a,b,c){2==b?a.b.call(a.f,c):a.c&amp;&amp;a.c.call(a.f,c)},Mc=function(a,b){a.g=!0;qc(function(){a.g&amp;&amp;Oc.call(null,b)})},Oc=Vb,zc=function(a){z.call(this,a)};v(zc,z);zc.prototype.name=&quot;cancel&quot;;var Qc=function(a){this.a=new F;if(a){a=Tb(a);for(var b=a.length,c=0;c&lt;b;c++){var d=a[c];this.a.set(Pc(d),d)}}},Pc=function(a){var b=typeof a;return&quot;object&quot;==b&amp;&amp;a||&quot;function&quot;==b?&quot;o&quot;+(a[fa]||(a[fa]=++ga)):b.substr(0,1)+a};Qc.prototype.b=function(){return this.a.b()};Qc.prototype.A=function(){return this.a.A()};Qc.prototype.h=function(){return this.a.h(!1)};var Rc=function(a){return function(){var b=[];Array.prototype.push.apply(b,arguments);Dc(!0).then(function(){a.apply(null,b)})}};var Sc=&quot;closure_lm_&quot;+(1E6*Math.random()|0),Tc={},Uc=0,Vc=function(a,b,c,d,e){if(&quot;array&quot;==p(b)){for(var f=0;f&lt;b.length;f++)Vc(a,b[f],c,d,e);return null}c=Wc(c);a&amp;&amp;a[gb]?(Xc(a),a=Kb(a.b,String(b),c,!1,d,e)):a=Yc(a,b,c,!1,d,e);return a},Yc=function(a,b,c,d,e,f){if(!b)throw Error(&quot;Invalid event type&quot;);var g=!!e,h=Zc(a);h||(a[Sc]=h=new Ib(a));c=Kb(h,b,c,d,e,f);if(c.a)return c;d=$c();c.a=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,g);else if(a.attachEvent)a.attachEvent(ad(b.toString()),</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line">d);else throw Error(&quot;addEventListener and attachEvent are unavailable.&quot;);Uc++;return c},$c=function(){var a=bd,b=tc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},cd=function(a,b,c,d,e){if(&quot;array&quot;==p(b))for(var f=0;f&lt;b.length;f++)cd(a,b[f],c,d,e);else c=Wc(c),a&amp;&amp;a[gb]?Kb(a.b,String(b),c,!0,d,e):Yc(a,b,c,!0,d,e)},dd=function(a,b,c,d,e){if(&quot;array&quot;==p(b))for(var f=0;f&lt;b.length;f++)dd(a,b[f],c,d,e);else(c=Wc(c),a&amp;&amp;a[gb])?(a=a.b,b=String(b).toString(),</td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">b in a.a&amp;&amp;(f=a.a[b],c=Jb(f,c,d,e),-1&lt;c&amp;&amp;(Eb(f[c]),B(null!=f.length),Array.prototype.splice.call(f,c,1),0==f.length&amp;&amp;(delete a.a[b],a.b--)))):a&amp;&amp;(a=Zc(a))&amp;&amp;(b=a.a[b.toString()],a=-1,b&amp;&amp;(a=Jb(b,c,!!d,e)),(c=-1&lt;a?b[a]:null)&amp;&amp;ed(c))},ed=function(a){if(&quot;number&quot;!=typeof a&amp;&amp;a&amp;&amp;!a.N){var b=a.src;if(b&amp;&amp;b[gb])Lb(b.b,a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.U):b.detachEvent&amp;&amp;b.detachEvent(ad(c),d);Uc--;(c=Zc(b))?(Lb(c,a),0==c.b&amp;&amp;(c.src=null,b[Sc]=null)):Eb(a)}}},ad=function(a){return a in</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">Tc?Tc[a]:Tc[a]=&quot;on&quot;+a},gd=function(a,b,c,d){var e=!0;if(a=Zc(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a&lt;b.length;a++){var f=b[a];f&amp;&amp;f.U==c&amp;&amp;!f.N&amp;&amp;(f=fd(f,d),e=e&amp;&amp;!1!==f)}return e},fd=function(a,b){var c=a.listener,d=a.M||a.src;a.T&amp;&amp;ed(a);return c.call(d,b)},bd=function(a,b){if(a.N)return!0;if(!tc){if(!b)a:{b=[&quot;window&quot;,&quot;event&quot;];for(var c=l,d;d=b.shift();)if(null!=c[d])c=c[d];else{b=null;break a}b=c}d=b;b=new xc(d,this);c=!0;if(!(0&gt;d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=</td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line">-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.a;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;0&lt;=e;e--){b.a=d[e];var f=gd(d[e],a,!0,b),c=c&amp;&amp;f}for(e=0;e&lt;d.length;e++)b.a=d[e],f=gd(d[e],a,!1,b),c=c&amp;&amp;f}return c}return fd(a,new xc(b,this))},Zc=function(a){a=a[Sc];return a instanceof Ib?a:null},hd=&quot;__closure_events_fn_&quot;+(1E9*Math.random()&gt;&gt;&gt;0),Wc=function(a){B(a,&quot;Listener can not be null.&quot;);if(t(a))return a;B(a.handleEvent,&quot;An object listener must have handleEvent method.&quot;);</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line">a[hd]||(a[hd]=function(b){return a.handleEvent(b)});return a[hd]};var H=function(a,b){fb.call(this);this.m=a||0;this.f=b||10;if(this.m&gt;this.f)throw Error(&quot;[goog.structs.Pool] Min can not be greater than max&quot;);this.a=new Rb;this.c=new Qc;this.j=null;this.S()};v(H,fb);H.prototype.W=function(){var a=ja();if(!(null!=this.j&amp;&amp;0&gt;a-this.j)){for(var b;0&lt;this.a.b()&amp;&amp;(b=Sb(this.a),!this.l(b));)this.S();!b&amp;&amp;this.b()&lt;this.f&amp;&amp;(b=this.i());b&amp;&amp;(this.j=a,this.c.a.set(Pc(b),b));return b}};var jd=function(a){var b=id;wc(b.c.a,Pc(a))&amp;&amp;b.$(a)};</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line">H.prototype.$=function(a){wc(this.c.a,Pc(a));this.l(a)&amp;&amp;this.b()&lt;this.f?this.a.a.push(a):kd(a)};H.prototype.S=function(){for(var a=this.a;this.b()&lt;this.m;){var b=this.i();a.a.push(b)}for(;this.b()&gt;this.f&amp;&amp;0&lt;this.a.b();)kd(Sb(a))};H.prototype.i=function(){return{}};var kd=function(a){if(&quot;function&quot;==typeof a.ea)a.ea();else for(var b in a)a[b]=null};H.prototype.l=function(a){return&quot;function&quot;==typeof a.oa?a.oa():!0};H.prototype.b=function(){return this.a.b()+this.c.b()};</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line">H.prototype.D=function(){H.I.D.call(this);if(0&lt;this.c.b())throw Error(&quot;[goog.structs.Pool] Objects not released&quot;);delete this.c;for(var a=this.a;0!=a.c.length||0!=a.a.length;)kd(Sb(a));delete this.a};/*</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line"> Portions of this code are from MochiKit, received by</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line"> The Closure Authors under the MIT license. All other code is Copyright</td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line"> 2005-2009 The Closure Authors. All Rights Reserved.</td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line">*/</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line">var ld=function(a,b){this.g=[];this.u=a;this.s=b||null;this.f=this.a=!1;this.b=void 0;this.l=this.o=this.i=!1;this.h=0;this.c=null;this.j=0};</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line">ld.prototype.cancel=function(a){if(this.a)this.b instanceof ld&amp;&amp;this.b.cancel();else{if(this.c){var b=this.c;delete this.c;a?b.cancel(a):(b.j--,0&gt;=b.j&amp;&amp;b.cancel())}this.u?this.u.call(this.s,this):this.l=!0;if(!this.a){a=new md;if(this.a){if(!this.l)throw new nd;this.l=!1}B(!(a instanceof ld),&quot;An execution sequence may not be initiated with a blocking Deferred.&quot;);this.a=!0;this.b=a;this.f=!0;od(this)}}};ld.prototype.m=function(a,b){this.i=!1;this.a=!0;this.b=b;this.f=!a;od(this)};</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">var pd=function(a,b,c){B(!a.o,&quot;Blocking Deferreds can not be re-used&quot;);a.g.push([b,c,void 0]);a.a&amp;&amp;od(a)};ld.prototype.then=function(a,b,c){var d,e,f=new G(function(a,b){d=a;e=b});pd(this,d,function(a){a instanceof md?f.cancel():e(a)});return f.then(a,b,c)};Ha(ld);</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">var qd=function(a){return rb(a.g,function(a){return t(a[1])})},od=function(a){if(a.h&amp;&amp;a.a&amp;&amp;qd(a)){var b=a.h,c=rd[b];c&amp;&amp;(l.clearTimeout(c.a),delete rd[b]);a.h=0}a.c&amp;&amp;(a.c.j--,delete a.c);for(var b=a.b,d=c=!1;a.g.length&amp;&amp;!a.i;){var e=a.g.shift(),f=e[0],g=e[1],e=e[2];if(f=a.f?g:f)try{var h=f.call(e||a.s,b);n(h)&amp;&amp;(a.f=a.f&amp;&amp;(h==b||h instanceof Error),a.b=b=h);if(Ia(b)||&quot;function&quot;===typeof l.Promise&amp;&amp;b instanceof l.Promise)d=!0,a.i=!0}catch(m){b=m,a.f=!0,qd(a)||(c=!0)}}a.b=b;d&amp;&amp;(h=u(a.m,a,!0),d=u(a.m,a,</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line">!1),b instanceof ld?(pd(b,h,d),b.o=!0):b.then(h,d));c&amp;&amp;(b=new sd(b),rd[b.a]=b,a.h=b.a)},nd=function(){z.call(this)};v(nd,z);nd.prototype.message=&quot;Deferred has already fired&quot;;nd.prototype.name=&quot;AlreadyCalledError&quot;;var md=function(){z.call(this)};v(md,z);md.prototype.message=&quot;Deferred was canceled&quot;;md.prototype.name=&quot;CanceledError&quot;;var sd=function(a){this.a=l.setTimeout(u(this.c,this),0);this.b=a};</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line">sd.prototype.c=function(){B(rd[this.a],&quot;Cannot throw an error that is not scheduled.&quot;);delete rd[this.a];throw this.b;};var rd={};var td=function(a){this.f=a;this.b=this.c=this.a=null},ud=function(a,b){this.name=a;this.value=b};ud.prototype.toString=function(){return this.name};var vd=new ud(&quot;SEVERE&quot;,1E3),wd=new ud(&quot;CONFIG&quot;,700),xd=new ud(&quot;FINE&quot;,500),yd=function(a){if(a.c)return a.c;if(a.a)return yd(a.a);db(&quot;Root logger has no level set.&quot;);return null};</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line">td.prototype.log=function(a,b,c){if(a.value&gt;=yd(this).value)for(t(b)&amp;&amp;(b=b()),a=new Ba(a,String(b),this.f),c&amp;&amp;(a.a=c),c=&quot;log:&quot;+a.b,l.console&amp;&amp;(l.console.timeStamp?l.console.timeStamp(c):l.console.markTimeline&amp;&amp;l.console.markTimeline(c)),l.msWriteProfilerMark&amp;&amp;l.msWriteProfilerMark(c),c=this;c;)c=c.a};</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line">var zd={},Ad=null,Bd=function(a){Ad||(Ad=new td(&quot;&quot;),zd[&quot;&quot;]=Ad,Ad.c=wd);var b;if(!(b=zd[a])){b=new td(a);var c=a.lastIndexOf(&quot;.&quot;),d=a.substr(c+1),c=Bd(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;zd[a]=b}return b};var Cd=function(){fb.call(this);this.b=new Ib(this);this.Y=this;this.G=null};v(Cd,fb);Cd.prototype[gb]=!0;Cd.prototype.removeEventListener=function(a,b,c,d){dd(this,a,b,c,d)};</td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line">var I=function(a,b){Xc(a);var c,d=a.G;if(d){c=[];for(var e=1;d;d=d.G)c.push(d),B(1E3&gt;++e,&quot;infinite loop&quot;)}a=a.Y;d=b.type||b;r(b)?b=new Cb(b,a):b instanceof Cb?b.target=b.target||a:(e=b,b=new Cb(d,a),Ga(b,e));var e=!0,f;if(c)for(var g=c.length-1;0&lt;=g;g--)f=b.a=c[g],e=Dd(f,d,!0,b)&amp;&amp;e;f=b.a=a;e=Dd(f,d,!0,b)&amp;&amp;e;e=Dd(f,d,!1,b)&amp;&amp;e;if(c)for(g=0;g&lt;c.length;g++)f=b.a=c[g],e=Dd(f,d,!1,b)&amp;&amp;e};</td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line">Cd.prototype.D=function(){Cd.I.D.call(this);if(this.b){var a=this.b,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e&lt;d.length;e++)++b,Eb(d[e]);delete a.a[c];a.b--}}this.G=null};var Dd=function(a,b,c,d){b=a.b.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f&lt;b.length;++f){var g=b[f];if(g&amp;&amp;!g.N&amp;&amp;g.U==c){var h=g.listener,m=g.M||g.src;g.T&amp;&amp;Lb(a.b,g);e=!1!==h.call(m,d)&amp;&amp;e}}return e&amp;&amp;0!=d.ja},Xc=function(a){B(a.b,&quot;Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?&quot;)};var J=function(a,b){this.h=new $b;H.call(this,a,b)};v(J,H);k=J.prototype;k.W=function(a,b){if(!a)return J.I.W.call(this);Qb(this.h,n(b)?b:100,a);this.aa()};k.aa=function(){for(var a=this.h;0&lt;a.b();){var b=this.W();if(b){var c;var d=a,e=d.a,f=e.length;c=e[0];if(0&gt;=f)c=void 0;else{if(1==f)vb(e);else{e[0]=e.pop();for(var e=0,d=d.a,f=d.length,g=d[e];e&lt;f&gt;&gt;1;){var h=2*e+1,m=2*e+2,h=m&lt;f&amp;&amp;d[m].a&lt;d[h].a?m:h;if(d[h].a&gt;g.a)break;d[e]=d[h];e=h}d[e]=g}c=c.b}c.apply(this,[b])}else break}};</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line">k.$=function(a){J.I.$.call(this,a);this.aa()};k.S=function(){J.I.S.call(this);this.aa()};k.D=function(){J.I.D.call(this);l.clearTimeout(void 0);vb(this.h.a);this.h=null};var K=function(a,b){a&amp;&amp;a.log(xd,b,void 0)};var Ed=function(a,b,c){if(t(a))c&amp;&amp;(a=u(a,c));else if(a&amp;&amp;&quot;function&quot;==typeof a.handleEvent)a=u(a.handleEvent,a);else throw Error(&quot;Invalid listener argument&quot;);return 2147483647&lt;Number(b)?-1:l.setTimeout(a,b||0)};var L=function(a){Cd.call(this);this.headers=new F;this.B=a||null;this.c=!1;this.u=this.a=null;this.L=this.l=&quot;&quot;;this.K=0;this.h=&quot;&quot;;this.f=this.C=this.j=this.F=!1;this.i=0;this.m=null;this.R=&quot;&quot;;this.s=this.ca=this.X=!1};v(L,Cd);var Fd=L.prototype,Gd=Bd(&quot;goog.net.XhrIo&quot;);Fd.w=Gd;var Hd=/^https?$/i,Id=[&quot;POST&quot;,&quot;PUT&quot;];</td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line">L.prototype.send=function(a,b,c,d){if(this.a)throw Error(&quot;[goog.net.XhrIo] Object is active with another request=&quot;+this.l+&quot;; newUri=&quot;+a);b=b?b.toUpperCase():&quot;GET&quot;;this.l=a;this.h=&quot;&quot;;this.K=0;this.L=b;this.F=!1;this.c=!0;this.a=this.B?this.B.a():Mb.a();this.u=this.B?mb(this.B):mb(Mb);this.a.onreadystatechange=u(this.P,this);this.ca&amp;&amp;&quot;onprogress&quot;in this.a&amp;&amp;(this.a.onprogress=u(function(a){this.O(a,!0)},this),this.a.upload&amp;&amp;(this.a.upload.onprogress=u(this.O,this)));try{K(this.w,M(this,&quot;Opening Xhr&quot;)),</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line">this.C=!0,this.a.open(b,String(a),!0),this.C=!1}catch(f){K(this.w,M(this,&quot;Error opening Xhr: &quot;+f.message));Jd(this,f);return}a=c||&quot;&quot;;var e=new F(this.headers);d&amp;&amp;Ub(d,function(a,b){e.set(b,a)});d=tb(e.H());c=l.FormData&amp;&amp;a instanceof l.FormData;!ub(Id,b)||d||c||e.set(&quot;Content-Type&quot;,&quot;application/x-www-form-urlencoded;charset=utf-8&quot;);e.forEach(function(a,b){this.a.setRequestHeader(b,a)},this);this.R&amp;&amp;(this.a.responseType=this.R);&quot;withCredentials&quot;in this.a&amp;&amp;this.a.withCredentials!==this.X&amp;&amp;(this.a.withCredentials=</td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line">this.X);try{Kd(this),0&lt;this.i&amp;&amp;(this.s=Ld(this.a),K(this.w,M(this,&quot;Will abort after &quot;+this.i+&quot;ms if incomplete, xhr2 &quot;+this.s)),this.s?(this.a.timeout=this.i,this.a.ontimeout=u(this.J,this)):this.m=Ed(this.J,this.i,this)),K(this.w,M(this,&quot;Sending request&quot;)),this.j=!0,this.a.send(a),this.j=!1}catch(f){K(this.w,M(this,&quot;Send error: &quot;+f.message)),Jd(this,f)}};var Ld=function(a){return D&amp;&amp;E(9)&amp;&amp;&quot;number&quot;==typeof a.timeout&amp;&amp;n(a.ontimeout)},sb=function(a){return&quot;content-type&quot;==a.toLowerCase()};</td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line">L.prototype.J=function(){&quot;undefined&quot;!=typeof aa&amp;&amp;this.a&amp;&amp;(this.h=&quot;Timed out after &quot;+this.i+&quot;ms, aborting&quot;,this.K=8,K(this.w,M(this,this.h)),I(this,&quot;timeout&quot;),this.abort(8))};var Jd=function(a,b){a.c=!1;a.a&amp;&amp;(a.f=!0,a.a.abort(),a.f=!1);a.h=b;a.K=5;Md(a);Nd(a)},Md=function(a){a.F||(a.F=!0,I(a,&quot;complete&quot;),I(a,&quot;error&quot;))};L.prototype.abort=function(a){this.a&amp;&amp;this.c&amp;&amp;(K(this.w,M(this,&quot;Aborting&quot;)),this.c=!1,this.f=!0,this.a.abort(),this.f=!1,this.K=a||7,I(this,&quot;complete&quot;),I(this,&quot;abort&quot;),Nd(this))};</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line">L.prototype.D=function(){this.a&amp;&amp;(this.c&amp;&amp;(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),Nd(this,!0));L.I.D.call(this)};L.prototype.P=function(){this.g||(this.C||this.j||this.f?Od(this):this.Z())};L.prototype.Z=function(){Od(this)};</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line">var Od=function(a){if(a.c&amp;&amp;&quot;undefined&quot;!=typeof aa)if(a.u[1]&amp;&amp;4==Pd(a)&amp;&amp;2==N(a))K(a.w,M(a,&quot;Local request error detected and ignored&quot;));else if(a.j&amp;&amp;4==Pd(a))Ed(a.P,0,a);else if(I(a,&quot;readystatechange&quot;),4==Pd(a)){K(a.w,M(a,&quot;Request complete&quot;));a.c=!1;try{if(Qd(a))I(a,&quot;complete&quot;),I(a,&quot;success&quot;);else{a.K=6;var b;try{b=2&lt;Pd(a)?a.a.statusText:&quot;&quot;}catch(c){K(a.w,&quot;Can not get status: &quot;+c.message),b=&quot;&quot;}a.h=b+&quot; [&quot;+N(a)+&quot;]&quot;;Md(a)}}finally{Nd(a)}}};</td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line">L.prototype.O=function(a,b){B(&quot;progress&quot;===a.type,&quot;goog.net.EventType.PROGRESS is of the same type as raw XHR progress.&quot;);I(this,Rd(a,&quot;progress&quot;));I(this,Rd(a,b?&quot;downloadprogress&quot;:&quot;uploadprogress&quot;))};</td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line">var Rd=function(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}},Nd=function(a,b){if(a.a){Kd(a);var c=a.a,d=a.u[0]?ba:null;a.a=null;a.u=null;b||I(a,&quot;ready&quot;);try{c.onreadystatechange=d}catch(e){(a=a.w)&amp;&amp;a.log(vd,&quot;Problem encountered resetting onreadystatechange: &quot;+e.message,void 0)}}},Kd=function(a){a.a&amp;&amp;a.s&amp;&amp;(a.a.ontimeout=null);&quot;number&quot;==typeof a.m&amp;&amp;(l.clearTimeout(a.m),a.m=null)},Qd=function(a){var b=N(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=</td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line">!0;break a;default:c=!1}if(!c){if(b=0===b)a=String(a.l).match(Fb)[1]||null,!a&amp;&amp;l.self&amp;&amp;l.self.location&amp;&amp;(a=l.self.location.protocol,a=a.substr(0,a.length-1)),b=!Hd.test(a?a.toLowerCase():&quot;&quot;);c=b}return c},Pd=function(a){return a.a?a.a.readyState:0},N=function(a){try{return 2&lt;Pd(a)?a.a.status:-1}catch(b){return-1}},Sd=function(a){try{return a.a?a.a.responseText:&quot;&quot;}catch(b){return K(a.w,&quot;Can not get responseText: &quot;+b.message),&quot;&quot;}},Td=function(a,b){if(a.a&amp;&amp;4==Pd(a))return a=a.a.getResponseHeader(b),</td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line">null===a?void 0:a},M=function(a,b){return b+&quot; [&quot;+a.L+&quot; &quot;+a.l+&quot; &quot;+N(a)+&quot;]&quot;};var Ud=function(a,b,c,d){this.s=a;this.u=!!d;J.call(this,b,c)};v(Ud,J);Ud.prototype.i=function(){var a=new L,b=this.s;b&amp;&amp;b.forEach(function(b,d){a.headers.set(d,b)});this.u&amp;&amp;(a.X=!0);return a};Ud.prototype.l=function(a){return!a.g&amp;&amp;!a.a};var id=new Ud;var Wd=function(a,b,c,d,e,f,g,h,m,q,Q){this.J=a;this.C=b;this.u=c;this.m=d;this.G=e.slice();this.o=f.slice();this.j=this.l=this.c=this.b=null;this.g=this.h=!1;this.s=g;this.i=h;this.f=q;this.L=Q;this.F=m;var P=this;this.B=new G(function(a,b){P.l=a;P.j=b;Vd(P)})},Xd=function(a,b,c){this.b=a;this.c=b;this.a=!!c},Vd=function(a){function b(a,b){b?a(!1,new Xd(!1,null,!0)):id.W(function(b){b.X=d.L;d.b=b;var c=null;null!==d.f&amp;&amp;(b.ca=!0,c=Vc(b,&quot;uploadprogress&quot;,function(a){d.f(a.loaded,a.lengthComputable?</td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line">a.total:-1)}),b.ca=null!==d.f);b.send(d.J,d.C,d.m,d.u);cd(b,&quot;complete&quot;,function(b){null!==c&amp;&amp;ed(c);d.b=null;b=b.target;var e=6===b.K&amp;&amp;100&lt;=N(b),f=Qd(b)||e,e=N(b);if(!(f=!f))var g=d,f=500&lt;=e&amp;&amp;600&gt;e,h=ub([408,429],e),g=ub(g.o,e),f=f||h||g;f?(e=7===b.K,jd(b),a(!1,new Xd(!1,null,e))):(e=ub(d.G,e),a(!0,new Xd(e,b)))})})}function c(a,b){var c=d.l;a=d.j;var e=b.c;if(b.b)try{var f=d.s(e,Sd(e));n(f)?c(f):c()}catch(q){a(q)}else null!==e?(b=ma(),f=Sd(e),b.serverResponse=f,d.i?a(d.i(e,b)):a(b)):(b=b.a?d.g?qa():</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line">na():new w(&quot;retry-limit-exceeded&quot;,&quot;Max retry time for operation exceeded, please try again.&quot;),a(b));jd(e)}var d=a;a.h?c(0,new Xd(!1,null,!0)):a.c=ka(b,c,a.F)};Wd.prototype.a=function(){return this.B};Wd.prototype.cancel=function(a){this.h=!0;this.g=a||!1;null!==this.c&amp;&amp;(0,this.c)(!1);null!==this.b&amp;&amp;this.b.abort()};</td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line">var Yd=function(a,b,c){var d=ab(a.b),d=a.i+d,e=a.headers?ta(a.headers):{};null!==b&amp;&amp;0&lt;b.length&amp;&amp;(e.Authorization=&quot;Firebase &quot;+b);e[&quot;X-Firebase-Storage-Version&quot;]=&quot;webjs/&quot;+(&quot;undefined&quot;!==typeof firebase?firebase.SDK_VERSION:&quot;AppManager&quot;);return new Wd(d,a.method,e,a.body,a.f,a.h,a.M,a.a,a.timeout,a.c,c)};var Zd=function(a){var b=l.BlobBuilder||l.WebKitBlobBuilder;if(n(b)){for(var b=new b,c=0;c&lt;arguments.length;c++)b.append(arguments[c]);return b.getBlob()}b=xb(arguments);c=l.BlobBuilder||l.WebKitBlobBuilder;if(n(c)){for(var c=new c,d=0;d&lt;b.length;d++)c.append(b[d],void 0);b=c.getBlob(void 0)}else if(n(l.Blob))b=new Blob(b,{});else throw Error(&quot;This browser doesn&#39;t seem to support creating Blobs&quot;);return b},$d=function(a,b,c){n(c)||(c=a.size);return a.webkitSlice?a.webkitSlice(b,c):a.mozSlice?a.mozSlice(b,</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line">c):a.slice?cc&amp;&amp;!E(&quot;13.0&quot;)||dc&amp;&amp;!E(&quot;537.1&quot;)?(0&gt;b&amp;&amp;(b+=a.size),0&gt;b&amp;&amp;(b=0),0&gt;c&amp;&amp;(c+=a.size),c&lt;b&amp;&amp;(c=b),a.slice(b,c-b)):a.slice(b,c):null};var O=function(a,b){ya()&amp;&amp;a instanceof Blob?(this.v=a,b=a.size,a=a.type):(a instanceof ArrayBuffer?(b?this.v=new Uint8Array(a):(this.v=new Uint8Array(a.byteLength),this.v.set(new Uint8Array(a))),b=this.v.length):(b?this.v=a:(this.v=new Uint8Array(a.length),this.v.set(a)),b=a.length),a=&quot;&quot;);this.a=b;this.b=a};O.prototype.type=function(){return this.b};</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line">O.prototype.slice=function(a,b){if(ya()&amp;&amp;this.v instanceof Blob)return a=$d(this.v,a,b),null===a?null:new O(a);a=new Uint8Array(this.v.buffer,a,b-a);return new O(a,!0)};</td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line">var ae=function(a){var b=[];Array.prototype.push.apply(b,arguments);if(ya())return b=qb(b,function(a){return a instanceof O?a.v:a}),new O(Zd.apply(null,b));var b=qb(b,function(a){return xa(a)?$a(&quot;raw&quot;,a).data.buffer:a.v.buffer}),c=0;ob(b,function(a){c+=a.byteLength});var d=new Uint8Array(c),e=0;ob(b,function(a){a=new Uint8Array(a);for(var b=0;b&lt;a.length;b++)d[e++]=a[b]});return new O(d,!0)};var be=function(a){this.b=Ec(a)};be.prototype.a=function(){return this.b};be.prototype.cancel=function(){};var ce=function(){this.a={};this.b=Number.MIN_SAFE_INTEGER},de=function(a,b){function c(){delete e.a[d]}var d=a.b;a.b++;a.a[d]=b;var e=a;b.a().then(c,c)},ee=function(a){sa(a.a,function(a,c){c&amp;&amp;c.cancel(!0)});a.a={}};var fe=function(a,b,c,d){this.a=a;this.g=null;if(null!==this.a&amp;&amp;(a=this.a.options,y(a))){a=a.storageBucket||null;if(null==a)a=null;else{var e=null;try{e=Sa(a)}catch(f){}if(null!==e){if(&quot;&quot;!==e.path)throw new w(&quot;invalid-default-bucket&quot;,&quot;Invalid default bucket &#39;&quot;+a+&quot;&#39;.&quot;);a=e.bucket}}this.g=a}this.l=b;this.j=c;this.i=d;this.c=12E4;this.b=6E4;this.h=new ce;this.f=!1},ge=function(a){return null!==a.a&amp;&amp;y(a.a.INTERNAL)&amp;&amp;y(a.a.INTERNAL.getToken)?a.a.INTERNAL.getToken().then(function(a){return y(a)?a.accessToken:</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line">null},function(){return null}):Dc(null)};fe.prototype.bucket=function(){if(this.f)throw qa();return this.g};var R=function(a,b,c){if(a.f)return new be(qa());b=a.j(b,c,null===a.a);de(a.h,b);return b};var he=function(a,b){return b},S=function(a,b,c,d){this.c=a;this.b=b||a;this.writable=!!c;this.a=d||he},ie=null,je=function(){if(ie)return ie;var a=[];a.push(new S(&quot;bucket&quot;));a.push(new S(&quot;generation&quot;));a.push(new S(&quot;metageneration&quot;));a.push(new S(&quot;name&quot;,&quot;fullPath&quot;,!0));var b=new S(&quot;name&quot;);b.a=function(a,b){return!xa(b)||2&gt;b.length?b:Hb(b)};a.push(b);b=new S(&quot;size&quot;);b.a=function(a,b){return y(b)?+b:b};a.push(b);a.push(new S(&quot;timeCreated&quot;));a.push(new S(&quot;updated&quot;));a.push(new S(&quot;md5Hash&quot;,null,!0));</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line">a.push(new S(&quot;cacheControl&quot;,null,!0));a.push(new S(&quot;contentDisposition&quot;,null,!0));a.push(new S(&quot;contentEncoding&quot;,null,!0));a.push(new S(&quot;contentLanguage&quot;,null,!0));a.push(new S(&quot;contentType&quot;,null,!0));a.push(new S(&quot;metadata&quot;,&quot;customMetadata&quot;,!0));a.push(new S(&quot;downloadTokens&quot;,&quot;downloadURLs&quot;,!1,function(a,b){if(!(xa(b)&amp;&amp;0&lt;b.length))return[];var c=encodeURIComponent;return qb(b.split(&quot;,&quot;),function(b){var d=a.fullPath,d=&quot;https://firebasestorage.googleapis.com/v0&quot;+(&quot;/b/&quot;+c(a.bucket)+&quot;/o/&quot;+c(d));b=ab({alt:&quot;media&quot;,</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line">token:b});return d+b})}));return ie=a},ke=function(a,b){Object.defineProperty(a,&quot;ref&quot;,{get:function(){return b.l(b,new Qa(a.bucket,a.fullPath))}})},le=function(a,b){for(var c={},d=b.length,e=0;e&lt;d;e++){var f=b[e];f.writable&amp;&amp;(c[f.c]=a[f.b])}return JSON.stringify(c)},me=function(a){if(!a||&quot;object&quot;!==typeof a)throw&quot;Expected Metadata object.&quot;;for(var b in a){var c=a[b];if(&quot;customMetadata&quot;===b&amp;&amp;&quot;object&quot;!==typeof c)throw&quot;Expected object for &#39;customMetadata&#39; mapping.&quot;;}};var T=function(a,b,c){for(var d=b.length,e=b.length,f=0;f&lt;b.length;f++)if(b[f].b){d=f;break}if(!(d&lt;=c.length&amp;&amp;c.length&lt;=e))throw d===e?(b=d,d=1===d?&quot;argument&quot;:&quot;arguments&quot;):(b=&quot;between &quot;+d+&quot; and &quot;+e,d=&quot;arguments&quot;),new w(&quot;invalid-argument-count&quot;,&quot;Invalid argument count in `&quot;+a+&quot;`: Expected &quot;+b+&quot; &quot;+d+&quot;, received &quot;+c.length+&quot;.&quot;);for(f=0;f&lt;c.length;f++)try{b[f].a(c[f])}catch(g){if(g instanceof Error)throw pa(f,a,g.message);throw pa(f,a,g);}},U=function(a,b){var c=this;this.a=function(b){c.b&amp;&amp;!n(b)||a(b)};</td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line">this.b=!!b},ne=function(a,b){return function(c){a(c);b(c)}},oe=function(a,b){function c(a){if(!(&quot;string&quot;===typeof a||a instanceof String))throw&quot;Expected string.&quot;;}var d;a?d=ne(c,a):d=c;return new U(d,b)},pe=function(){return new U(function(a){if(!(a instanceof Uint8Array||a instanceof ArrayBuffer||ya()&amp;&amp;a instanceof Blob))throw&quot;Expected Blob or File.&quot;;})},qe=function(){return new U(function(a){if(!((&quot;number&quot;===typeof a||a instanceof Number)&amp;&amp;0&lt;=a))throw&quot;Expected a number 0 or greater.&quot;;})},re=function(a,</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line">b){return new U(function(b){if(!(null===b||y(b)&amp;&amp;b instanceof Object))throw&quot;Expected an Object.&quot;;y(a)&amp;&amp;a(b)},b)},se=function(){return new U(function(a){if(null!==a&amp;&amp;!t(a))throw&quot;Expected a Function.&quot;;},!0)};var te=function(a){if(!a)throw ma();},ue=function(a,b){return function(c,d){a:{var e;try{e=JSON.parse(d)}catch(h){c=null;break a}c=ea(e)?e:null}if(null===c)c=null;else{d={type:&quot;file&quot;};e=b.length;for(var f=0;f&lt;e;f++){var g=b[f];d[g.b]=g.a(d,c[g.c])}ke(d,a);c=d}te(null!==c);return c}},ve=function(a){return function(b,c){b=401===N(b)?new w(&quot;unauthenticated&quot;,&quot;User is not authenticated, please authenticate using Firebase Authentication and try again.&quot;):402===N(b)?new w(&quot;quota-exceeded&quot;,&quot;Quota for bucket &#39;&quot;+</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line">a.bucket+&quot;&#39; exceeded, please view quota on https://firebase.google.com/pricing/.&quot;):403===N(b)?new w(&quot;unauthorized&quot;,&quot;User does not have permission to access &#39;&quot;+a.path+&quot;&#39;.&quot;):c;b.serverResponse=c.serverResponse;return b}},we=function(a){var b=ve(a);return function(c,d){var e=b(c,d);404===N(c)&amp;&amp;(e=new w(&quot;object-not-found&quot;,&quot;Object &#39;&quot;+a.path+&quot;&#39; does not exist.&quot;));e.serverResponse=d.serverResponse;return e}},xe=function(a,b,c){var d=Ra(b);a=new x(la+&quot;/v0&quot;+d,&quot;GET&quot;,ue(a,c),a.c);a.a=we(b);return a},ye=function(a,</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line">b){var c=Ra(b);a=new x(la+&quot;/v0&quot;+c,&quot;DELETE&quot;,function(){},a.c);a.f=[200,204];a.a=we(b);return a},ze=function(a,b,c){c=c?ta(c):{};c.fullPath=a.path;c.size=b.a;c.contentType||(a=b&amp;&amp;b.type()||&quot;application/octet-stream&quot;,c.contentType=a);return c},Ae=function(a,b,c,d,e){var f=&quot;/b/&quot;+encodeURIComponent(b.bucket)+&quot;/o&quot;,g={&quot;X-Goog-Upload-Protocol&quot;:&quot;multipart&quot;},h;h=&quot;&quot;;for(var m=0;2&gt;m;m++)h+=Math.random().toString().slice(2);g[&quot;Content-Type&quot;]=&quot;multipart/related; boundary=&quot;+h;e=ze(b,d,e);m=le(e,c);d=ae(&quot;--&quot;+h+&quot;\r\nContent-Type: application/json; charset=utf-8\r\n\r\n&quot;+</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line">m+&quot;\r\n--&quot;+h+&quot;\r\nContent-Type: &quot;+e.contentType+&quot;\r\n\r\n&quot;,d,&quot;\r\n--&quot;+h+&quot;--&quot;);if(null===d)throw oa();a=new x(la+&quot;/v0&quot;+f,&quot;POST&quot;,ue(a,c),a.b);a.b={name:e.fullPath};a.headers=g;a.body=d.v;a.a=ve(b);return a},Be=function(a,b,c,d){this.a=a;this.total=b;this.b=!!c;this.c=d||null},Ce=function(a,b){var c;try{c=Td(a,&quot;X-Goog-Upload-Status&quot;)}catch(d){te(!1)}te(ub(b||[&quot;active&quot;],c));return c},De=function(a,b,c,d,e){var f=&quot;/b/&quot;+encodeURIComponent(b.bucket)+&quot;/o&quot;,g=ze(b,d,e);e={name:g.fullPath};f=la+&quot;/v0&quot;+f;d={&quot;X-Goog-Upload-Protocol&quot;:&quot;resumable&quot;,</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line">&quot;X-Goog-Upload-Command&quot;:&quot;start&quot;,&quot;X-Goog-Upload-Header-Content-Length&quot;:d.a,&quot;X-Goog-Upload-Header-Content-Type&quot;:g.contentType,&quot;Content-Type&quot;:&quot;application/json; charset=utf-8&quot;};c=le(g,c);a=new x(f,&quot;POST&quot;,function(a){Ce(a);var b;try{b=Td(a,&quot;X-Goog-Upload-URL&quot;)}catch(q){te(!1)}te(xa(b));return b},a.b);a.b=e;a.headers=d;a.body=c;a.a=ve(b);return a},Ee=function(a,b,c,d){a=new x(c,&quot;POST&quot;,function(a){var b=Ce(a,[&quot;active&quot;,&quot;final&quot;]),c;try{c=Td(a,&quot;X-Goog-Upload-Size-Received&quot;)}catch(h){te(!1)}a=c;isFinite(a)&amp;&amp;</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line">(a=String(a));a=r(a)?/^\s*-?0x/i.test(a)?parseInt(a,16):parseInt(a,10):NaN;te(!isNaN(a));return new Be(a,d.a,&quot;final&quot;===b)},a.b);a.headers={&quot;X-Goog-Upload-Command&quot;:&quot;query&quot;};a.a=ve(b);a.g=!1;return a},Fe=function(a,b,c,d,e,f,g){var h=new Be(0,0);g?(h.a=g.a,h.total=g.total):(h.a=0,h.total=d.a);if(d.a!==h.total)throw new w(&quot;server-file-wrong-size&quot;,&quot;Server recorded incorrect upload file size, please retry the upload.&quot;);var m=g=h.total-h.a;0&lt;e&amp;&amp;(m=Math.min(m,e));var q=h.a;e={&quot;X-Goog-Upload-Command&quot;:m===</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code blob-code-inner js-file-line">g?&quot;upload, finalize&quot;:&quot;upload&quot;,&quot;X-Goog-Upload-Offset&quot;:h.a};g=d.slice(q,q+m);if(null===g)throw oa();c=new x(c,&quot;POST&quot;,function(a,c){var e=Ce(a,[&quot;active&quot;,&quot;final&quot;]),g=h.a+m,Q=d.a,q;&quot;final&quot;===e?q=ue(b,f)(a,c):q=null;return new Be(g,Q,&quot;final&quot;===e,q)},b.b);c.headers=e;c.body=g.v;c.c=null;c.a=ve(a);c.g=!1;return c};var W=function(a,b,c,d,e,f){this.L=a;this.c=b;this.j=c;this.f=e;this.h=f||null;this.m=d;this.l=0;this.J=this.s=!1;this.F=[];this.Z=262144&lt;this.f.a;this.b=&quot;running&quot;;this.a=this.u=this.g=null;this.i=1;var g=this;this.V=function(a){g.a=null;g.i=1;&quot;storage/canceled&quot;===a.code?(g.s=!0,Ge(g)):(g.g=a,V(g,&quot;error&quot;))};this.Y=function(a){g.a=null;&quot;storage/canceled&quot;===a.code?Ge(g):(g.g=a,V(g,&quot;error&quot;))};this.B=this.o=null;this.G=new G(function(a,b){g.o=a;g.B=b;He(g)});this.G.then(null,function(){})},He=function(a){&quot;running&quot;===</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code blob-code-inner js-file-line">a.b&amp;&amp;null===a.a&amp;&amp;(a.Z?null===a.u?Ie(a):a.s?Je(a):a.J?Ke(a):Le(a):Me(a))},Ne=function(a,b){ge(a.c).then(function(c){switch(a.b){case &quot;running&quot;:b(c);break;case &quot;canceling&quot;:V(a,&quot;canceled&quot;);break;case &quot;pausing&quot;:V(a,&quot;paused&quot;)}})},Ie=function(a){Ne(a,function(b){var c=De(a.c,a.j,a.m,a.f,a.h);a.a=R(a.c,c,b);a.a.a().then(function(b){a.a=null;a.u=b;a.s=!1;Ge(a)},this.V)})},Je=function(a){var b=a.u;Ne(a,function(c){var d=Ee(a.c,a.j,b,a.f);a.a=R(a.c,d,c);a.a.a().then(function(b){a.a=null;Oe(a,b.a);a.s=!1;b.b&amp;&amp;</td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code blob-code-inner js-file-line">(a.J=!0);Ge(a)},a.V)})},Le=function(a){var b=262144*a.i,c=new Be(a.l,a.f.a),d=a.u;Ne(a,function(e){var f;try{f=Fe(a.j,a.c,d,a.f,b,a.m,c)}catch(g){a.g=g;V(a,&quot;error&quot;);return}a.a=R(a.c,f,e);a.a.a().then(function(b){33554432&gt;262144*a.i&amp;&amp;(a.i*=2);a.a=null;Oe(a,b.a);b.b?(a.h=b.c,V(a,&quot;success&quot;)):Ge(a)},a.V)})},Ke=function(a){Ne(a,function(b){var c=xe(a.c,a.j,a.m);a.a=R(a.c,c,b);a.a.a().then(function(b){a.a=null;a.h=b;V(a,&quot;success&quot;)},a.Y)})},Me=function(a){Ne(a,function(b){var c=Ae(a.c,a.j,a.m,a.f,a.h);a.a=</td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code blob-code-inner js-file-line">R(a.c,c,b);a.a.a().then(function(b){a.a=null;a.h=b;Oe(a,a.f.a);V(a,&quot;success&quot;)},a.V)})},Oe=function(a,b){var c=a.l;a.l=b;a.l&gt;c&amp;&amp;Pe(a)},V=function(a,b){if(a.b!==b)switch(b){case &quot;canceling&quot;:a.b=b;null!==a.a&amp;&amp;a.a.cancel();break;case &quot;pausing&quot;:a.b=b;null!==a.a&amp;&amp;a.a.cancel();break;case &quot;running&quot;:var c=&quot;paused&quot;===a.b;a.b=b;c&amp;&amp;(Pe(a),He(a));break;case &quot;paused&quot;:a.b=b;Pe(a);break;case &quot;canceled&quot;:a.g=na();a.b=b;Pe(a);break;case &quot;error&quot;:a.b=b;Pe(a);break;case &quot;success&quot;:a.b=b,Pe(a)}},Ge=function(a){switch(a.b){case &quot;pausing&quot;:V(a,</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code blob-code-inner js-file-line">&quot;paused&quot;);break;case &quot;canceling&quot;:V(a,&quot;canceled&quot;);break;case &quot;running&quot;:He(a)}};W.prototype.C=function(){return new A(this.l,this.f.a,wa(this.b),this.h,this,this.L)};</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code blob-code-inner js-file-line">W.prototype.O=function(a,b,c,d){function e(a){try{g(a);return}catch(P){}try{if(h(a),!(n(a.next)||n(a.error)||n(a.complete)))throw&quot;&quot;;}catch(P){throw&quot;Expected a function or an Object with one of `next`, `error`, `complete` properties.&quot;;}}function f(a){return function(b,c,d){null!==a&amp;&amp;T(&quot;on&quot;,a,arguments);var e=new Ta(b,c,d);Qe(m,e);return function(){wb(m.F,e)}}}var g=se().a,h=re(null,!0).a;T(&quot;on&quot;,[oe(function(){if(&quot;state_changed&quot;!==a)throw&quot;Expected one of the event types: [state_changed].&quot;;}),re(e,!0),</td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code blob-code-inner js-file-line">se(),se()],arguments);var m=this,q=[re(function(a){if(null===a)throw&quot;Expected a function or an Object with one of `next`, `error`, `complete` properties.&quot;;e(a)}),se(),se()];return n(b)||n(c)||n(d)?f(null)(b,c,d):f(q)};W.prototype.then=function(a,b){return this.G.then(a,b)};</td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code blob-code-inner js-file-line">var Qe=function(a,b){a.F.push(b);Re(a,b)},Pe=function(a){Se(a);var b=xb(a.F);ob(b,function(b){Re(a,b)})},Se=function(a){if(null!==a.o){var b=!0;switch(wa(a.b)){case &quot;success&quot;:Rc(a.o.bind(null,a.C()))();break;case &quot;canceled&quot;:case &quot;error&quot;:Rc(a.B.bind(null,a.g))();break;default:b=!1}b&amp;&amp;(a.o=null,a.B=null)}},Re=function(a,b){switch(wa(a.b)){case &quot;running&quot;:case &quot;paused&quot;:null!==b.next&amp;&amp;Rc(b.next.bind(b,a.C()))();break;case &quot;success&quot;:null!==b.b&amp;&amp;Rc(b.b.bind(b))();break;case &quot;canceled&quot;:case &quot;error&quot;:null!==</td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code blob-code-inner js-file-line">b.a&amp;&amp;Rc(b.a.bind(b,a.g))();break;default:null!==b.a&amp;&amp;Rc(b.a.bind(b,a.g))()}};W.prototype.R=function(){T(&quot;resume&quot;,[],arguments);var a=&quot;paused&quot;===this.b||&quot;pausing&quot;===this.b;a&amp;&amp;V(this,&quot;running&quot;);return a};W.prototype.P=function(){T(&quot;pause&quot;,[],arguments);var a=&quot;running&quot;===this.b;a&amp;&amp;V(this,&quot;pausing&quot;);return a};W.prototype.cancel=function(){T(&quot;cancel&quot;,[],arguments);var a=&quot;running&quot;===this.b||&quot;pausing&quot;===this.b;a&amp;&amp;V(this,&quot;canceling&quot;);return a};var X=function(a,b){this.b=a;if(b)this.a=b instanceof Qa?b:Sa(b);else if(a=a.bucket(),null!==a)this.a=new Qa(a,&quot;&quot;);else throw new w(&quot;no-default-bucket&quot;,&quot;No default bucket found. Did you set the &#39;storageBucket&#39; property when initializing the app?&quot;);};X.prototype.toString=function(){T(&quot;toString&quot;,[],arguments);return&quot;gs://&quot;+this.a.bucket+&quot;/&quot;+this.a.path};var Te=function(a,b){return new X(a,b)};k=X.prototype;</td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code blob-code-inner js-file-line">k.fa=function(a){T(&quot;child&quot;,[oe()],arguments);var b=Gb(this.a.path,a);return Te(this.b,new Qa(this.a.bucket,b))};k.Da=function(){var a;a=this.a.path;if(0==a.length)a=null;else{var b=a.lastIndexOf(&quot;/&quot;);a=-1===b?&quot;&quot;:a.slice(0,b)}return null===a?null:Te(this.b,new Qa(this.a.bucket,a))};k.Fa=function(){return Te(this.b,new Qa(this.a.bucket,&quot;&quot;))};k.ma=function(){return this.a.bucket};k.ya=function(){return this.a.path};k.Ca=function(){return Hb(this.a.path)};k.Ha=function(){return this.b.i};</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code blob-code-inner js-file-line">k.ra=function(a,b){T(&quot;put&quot;,[pe(),new U(me,!0)],arguments);Ue(this,&quot;put&quot;);return new W(this,this.b,this.a,je(),new O(a),b)};k.sa=function(a,b,c){T(&quot;putString&quot;,[oe(),oe(Va,!0),new U(me,!0)],arguments);Ue(this,&quot;putString&quot;);var d=$a(y(b)?b:&quot;raw&quot;,a),e=c?ta(c):{};!y(e.contentType)&amp;&amp;y(d.a)&amp;&amp;(e.contentType=d.a);return new W(this,this.b,this.a,je(),new O(d.data,!0),e)};</td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code blob-code-inner js-file-line">k.delete=function(){T(&quot;delete&quot;,[],arguments);Ue(this,&quot;delete&quot;);var a=this;return ge(this.b).then(function(b){var c=ye(a.b,a.a);return R(a.b,c,b).a()})};k.ga=function(){T(&quot;getMetadata&quot;,[],arguments);Ue(this,&quot;getMetadata&quot;);var a=this;return ge(this.b).then(function(b){var c=xe(a.b,a.a,je());return R(a.b,c,b).a()})};</td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code blob-code-inner js-file-line">k.ta=function(a){T(&quot;updateMetadata&quot;,[new U(me,void 0)],arguments);Ue(this,&quot;updateMetadata&quot;);var b=this;return ge(this.b).then(function(c){var d=b.b,e=b.a,f=a,g=je(),h=Ra(e),h=la+&quot;/v0&quot;+h,f=le(f,g),d=new x(h,&quot;PATCH&quot;,ue(d,g),d.c);d.headers={&quot;Content-Type&quot;:&quot;application/json; charset=utf-8&quot;};d.body=f;d.a=we(e);return R(b.b,d,c).a()})};</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code blob-code-inner js-file-line">k.qa=function(){T(&quot;getDownloadURL&quot;,[],arguments);Ue(this,&quot;getDownloadURL&quot;);return this.ga().then(function(a){a=a.downloadURLs[0];if(y(a))return a;throw new w(&quot;no-download-url&quot;,&quot;The given file does not have any download URLs.&quot;);})};var Ue=function(a,b){if(&quot;&quot;===a.a.path)throw new w(&quot;invalid-root-operation&quot;,&quot;The operation &#39;&quot;+b+&quot;&#39; cannot be performed on a root reference, create a non-root reference using child, such as .child(&#39;file.png&#39;).&quot;);};var Y=function(a){this.a=new fe(a,function(a,c){return new X(a,c)},Yd,this);this.b=a;this.c=new Ve(this)};k=Y.prototype;k.ua=function(a){T(&quot;ref&quot;,[oe(function(a){if(/^[A-Za-z]+:\/\//.test(a))throw&quot;Expected child path but got a URL, use refFromURL instead.&quot;;},!0)],arguments);var b=new X(this.a);return n(a)?b.fa(a):b};</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code blob-code-inner js-file-line">k.va=function(a){T(&quot;refFromURL&quot;,[oe(function(a){if(!/^[A-Za-z]+:\/\//.test(a))throw&quot;Expected full URL but got a child path, use ref instead.&quot;;try{Sa(a)}catch(c){throw&quot;Expected valid full URL but got an invalid one.&quot;;}},!1)],arguments);return new X(this.a,a)};k.Aa=function(){return this.a.b};k.xa=function(a){T(&quot;setMaxUploadRetryTime&quot;,[qe()],arguments);this.a.b=a};k.za=function(){return this.a.c};k.wa=function(a){T(&quot;setMaxOperationRetryTime&quot;,[qe()],arguments);this.a.c=a};k.la=function(){return this.b};</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code blob-code-inner js-file-line">k.ka=function(){return this.c};var Ve=function(a){this.a=a};Ve.prototype.delete=function(){var a=this.a.a;a.f=!0;a.a=null;ee(a.h)};var Z=function(a,b,c){Object.defineProperty(a,b,{get:c})};X.prototype.toString=X.prototype.toString;X.prototype.child=X.prototype.fa;X.prototype.put=X.prototype.ra;X.prototype.putString=X.prototype.sa;X.prototype[&quot;delete&quot;]=X.prototype.delete;X.prototype.getMetadata=X.prototype.ga;X.prototype.updateMetadata=X.prototype.ta;X.prototype.getDownloadURL=X.prototype.qa;Z(X.prototype,&quot;parent&quot;,X.prototype.Da);Z(X.prototype,&quot;root&quot;,X.prototype.Fa);Z(X.prototype,&quot;bucket&quot;,X.prototype.ma);</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code blob-code-inner js-file-line">Z(X.prototype,&quot;fullPath&quot;,X.prototype.ya);Z(X.prototype,&quot;name&quot;,X.prototype.Ca);Z(X.prototype,&quot;storage&quot;,X.prototype.Ha);Y.prototype.ref=Y.prototype.ua;Y.prototype.refFromURL=Y.prototype.va;Z(Y.prototype,&quot;maxOperationRetryTime&quot;,Y.prototype.za);Y.prototype.setMaxOperationRetryTime=Y.prototype.wa;Z(Y.prototype,&quot;maxUploadRetryTime&quot;,Y.prototype.Aa);Y.prototype.setMaxUploadRetryTime=Y.prototype.xa;Z(Y.prototype,&quot;app&quot;,Y.prototype.la);Z(Y.prototype,&quot;INTERNAL&quot;,Y.prototype.ka);Ve.prototype[&quot;delete&quot;]=Ve.prototype.delete;</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code blob-code-inner js-file-line">Y.prototype.capi_=function(a){la=a};W.prototype.on=W.prototype.O;W.prototype.resume=W.prototype.R;W.prototype.pause=W.prototype.P;W.prototype.cancel=W.prototype.cancel;Z(W.prototype,&quot;snapshot&quot;,W.prototype.C);Z(A.prototype,&quot;bytesTransferred&quot;,A.prototype.na);Z(A.prototype,&quot;totalBytes&quot;,A.prototype.Ja);Z(A.prototype,&quot;state&quot;,A.prototype.Ga);Z(A.prototype,&quot;metadata&quot;,A.prototype.Ba);Z(A.prototype,&quot;downloadURL&quot;,A.prototype.pa);Z(A.prototype,&quot;task&quot;,A.prototype.Ia);Z(A.prototype,&quot;ref&quot;,A.prototype.Ea);</td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code blob-code-inner js-file-line">ua.STATE_CHANGED=&quot;state_changed&quot;;va.RUNNING=&quot;running&quot;;va.PAUSED=&quot;paused&quot;;va.SUCCESS=&quot;success&quot;;va.CANCELED=&quot;canceled&quot;;va.ERROR=&quot;error&quot;;Ua.RAW=&quot;raw&quot;;Ua.BASE64=&quot;base64&quot;;Ua.BASE64URL=&quot;base64url&quot;;Ua.DATA_URL=&quot;data_url&quot;;G.prototype[&quot;catch&quot;]=G.prototype.l;G.prototype.then=G.prototype.then;</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code blob-code-inner js-file-line">(function(){function a(a){return new Y(a)}var b={TaskState:va,TaskEvent:ua,StringFormat:Ua,Storage:Y,Reference:X};if(&quot;undefined&quot;!==typeof firebase)firebase.INTERNAL.registerService(&quot;storage&quot;,a,b);else throw Error(&quot;Cannot install Firebase Storage - be sure to load firebase-app.js first.&quot;);})();})();</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

  </div>

      <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.07004s from github-fe143-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  

  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha256-UGFpyy/nYlS5IejJRN1AblyrLXGeZX6s6K2phIYjFHI=" src="https://assets-cdn.github.com/assets/frameworks-506169cb2fe76254b921e8c944dd406e5cab2d719e657eace8ada98486231472.js"></script>
    <script async="async" crossorigin="anonymous" integrity="sha256-JoKHHq/cp2qoENrGskMxUOT5pYEP0pMGxRSbKe+BzDE=" src="https://assets-cdn.github.com/assets/github-2682871eafdca76aa810dac6b2433150e4f9a5810fd29306c5149b29ef81cc31.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

