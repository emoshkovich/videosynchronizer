


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>videojs-youtube/vjs.youtube.js at master · eXon/videojs-youtube · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe118-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 2.1.0p0-github-tcmalloc (60139581e1) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="BC8F4DA2:6F86:CECC2B6:52CF170B" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="Nd9Mtji+zDxfaYxoAnoew58+iGSFEoeAXKLS5vLCJu8=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-b3a27e9833f77e2c72017a2a2641bb8deaa50710.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-37aa22487d178bc723ee26dfdcef73d00c7e7d88.css" media="all" rel="stylesheet" type="text/css" />
    

    

      <script src="https://github.global.ssl.fastly.net/assets/frameworks-f864e0f9990e40f4ed2c1c489df6fcb87cdd550c.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-c6b1cfc0feb5d17fc72e38875020d018d3cafd44.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="82cfee9d161281c0215192e243b10e47">

        <link data-pjax-transient rel='permalink' href='/eXon/videojs-youtube/blob/f08e245ae0fd4f87d1d598e57f083c7bc6987666/vjs.youtube.js'>
  <meta property="og:title" content="videojs-youtube"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/eXon/videojs-youtube"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="videojs-youtube - Support YouTube source for Video.js"/>

  <meta name="description" content="videojs-youtube - Support YouTube source for Video.js" />

  <meta content="280982" name="octolytics-dimension-user_id" /><meta content="eXon" name="octolytics-dimension-user_login" /><meta content="9238613" name="octolytics-dimension-repository_id" /><meta content="eXon/videojs-youtube" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="9238613" name="octolytics-dimension-repository_network_root_id" /><meta content="eXon/videojs-youtube" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/eXon/videojs-youtube/commits/master.atom" rel="alternate" title="Recent Commits to videojs-youtube:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production linux vis-public page-blob">
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2FeXon%2Fvideojs-youtube%2Fblob%2Fmaster%2Fvjs.youtube.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey=" s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="eXon/videojs-youtube"
      data-branch="master"
      data-sha="8067f05e2b75d71934f5afa0b5617e3f8b67fce5"
  >

    <input type="hidden" name="nwo" value="eXon/videojs-youtube" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>


      


          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
    <a href="/login?return_to=%2FeXon%2Fvideojs-youtube"
    class="minibutton with-count js-toggler-target star-button tooltipped upwards"
    title="You must be signed in to use this feature" rel="nofollow">
    <span class="octicon octicon-star"></span>Star
  </a>

    <a class="social-count js-social-count" href="/eXon/videojs-youtube/stargazers">
      84
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2FeXon%2Fvideojs-youtube"
        class="minibutton with-count js-toggler-target fork-button tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/eXon/videojs-youtube/network" class="social-count">
        56
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/eXon" class="url fn" itemprop="url" rel="author"><span itemprop="title">eXon</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/eXon/videojs-youtube" class="js-current-repository js-repo-home-link">videojs-youtube</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      

      <div class="repository-with-sidebar repo-container  ">

        <div class="repository-sidebar">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped leftwards" title="Code">
        <a href="/eXon/videojs-youtube" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /eXon/videojs-youtube">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/eXon/videojs-youtube/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /eXon/videojs-youtube/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>4</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests">
        <a href="/eXon/videojs-youtube/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /eXon/videojs-youtube/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/eXon/videojs-youtube/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /eXon/videojs-youtube/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/eXon/videojs-youtube/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /eXon/videojs-youtube/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/eXon/videojs-youtube/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /eXon/videojs-youtube/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/eXon/videojs-youtube.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/eXon/videojs-youtube.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/eXon/videojs-youtube" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/eXon/videojs-youtube" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>



              <a href="/eXon/videojs-youtube/archive/master.zip"
                 class="minibutton sidebar-button"
                 title="Download this repository as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:8c313a2bb659728d4a5c0e795e9053f5 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/eXon/videojs-youtube/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eXon/videojs-youtube/blob/master/vjs.youtube.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eXon/videojs-youtube/blob/old-vjs3/vjs.youtube.js"
                 data-name="old-vjs3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="old-vjs3">old-vjs3</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/eXon/videojs-youtube/tree/v1.0.0/vjs.youtube.js"
                 data-name="v1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.0">v1.0.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/eXon/videojs-youtube" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">videojs-youtube</span></a></span></span><span class="separator"> / </span><strong class="final-path">vjs.youtube.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="vjs.youtube.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>



  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://2.gravatar.com/avatar/678c4d24215553c1c5ba0f6a09c37e0c?d=https%3A%2F%2Fidenticons.github.com%2F9589203d857780bc28de632977db6fe2.png&amp;r=x&amp;s=140" width="24" />
    <span class="author"><a href="/eXon" rel="author">eXon</a></span>
    <time class="js-relative-date" datetime="2013-12-09T21:50:14-08:00" title="2013-12-09 21:50:14">December 09, 2013</time>
    <div class="commit-title">
        <a href="/eXon/videojs-youtube/commit/a3f00f131fdcdd17aa3079cbd9b027cdaf9b3849" class="message" data-pjax="true" title="Fix #45">Fix</a> <a href="https://github.com/eXon/videojs-youtube/issues/45" class="issue-link" title="Getting multiple iframes when switching from HTML5 tech to YouTube tech and back again">#45</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>4</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="eXon" href="/eXon/videojs-youtube/commits/master/vjs.youtube.js?author=eXon"><img height="20" src="https://2.gravatar.com/avatar/678c4d24215553c1c5ba0f6a09c37e0c?d=https%3A%2F%2Fidenticons.github.com%2F9589203d857780bc28de632977db6fe2.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="dominic-p" href="/eXon/videojs-youtube/commits/master/vjs.youtube.js?author=dominic-p"><img height="20" src="https://1.gravatar.com/avatar/636bec3398ab7aa3d5c6eeaee1a1350a?d=https%3A%2F%2Fidenticons.github.com%2Fae217379e22b2864cc4615ad4e22bf8c.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="martindale" href="/eXon/videojs-youtube/commits/master/vjs.youtube.js?author=martindale"><img height="20" src="https://1.gravatar.com/avatar/11d80bdaa5ee2259d5af4eb50be37fcb?d=https%3A%2F%2Fidenticons.github.com%2Fe5d123ee9e9d9070cfc7a1eef37c73a7.png&amp;r=x&amp;s=140" width="20" /></a>
    <a class="avatar tooltipped downwards" title="danielcebrian" href="/eXon/videojs-youtube/commits/master/vjs.youtube.js?author=danielcebrian"><img height="20" src="https://2.gravatar.com/avatar/1921f5837b38b617cd7801ac696e8217?d=https%3A%2F%2Fidenticons.github.com%2Fcae461309207706e14cb794f637ae90e.png&amp;r=x&amp;s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/678c4d24215553c1c5ba0f6a09c37e0c?d=https%3A%2F%2Fidenticons.github.com%2F9589203d857780bc28de632977db6fe2.png&amp;r=x&amp;s=140" width="24" />
            <a href="/eXon">eXon</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/636bec3398ab7aa3d5c6eeaee1a1350a?d=https%3A%2F%2Fidenticons.github.com%2Fae217379e22b2864cc4615ad4e22bf8c.png&amp;r=x&amp;s=140" width="24" />
            <a href="/dominic-p">dominic-p</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://1.gravatar.com/avatar/11d80bdaa5ee2259d5af4eb50be37fcb?d=https%3A%2F%2Fidenticons.github.com%2Fe5d123ee9e9d9070cfc7a1eef37c73a7.png&amp;r=x&amp;s=140" width="24" />
            <a href="/martindale">martindale</a>
          </li>
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/1921f5837b38b617cd7801ac696e8217?d=https%3A%2F%2Fidenticons.github.com%2Fcae461309207706e14cb794f637ae90e.png&amp;r=x&amp;s=140" width="24" />
            <a href="/danielcebrian">danielcebrian</a>
          </li>
      </ul>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>25 lines (25 sloc)</span>
        <span>11.145 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
              <a class="minibutton disabled tooltipped leftwards" href="#"
                 title="You must be signed in to make or propose changes">Edit</a>
          <a href="/eXon/videojs-youtube/raw/master/vjs.youtube.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/eXon/videojs-youtube/blame/master/vjs.youtube.js" class="button minibutton ">Blame</a>
          <a href="/eXon/videojs-youtube/commits/master/vjs.youtube.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped leftwards" href="#"
             title="You must be signed in to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>

            </td>
            <td class="blob-line-code">
                    <div class="code-body highlight"><pre><div class='line' id='LC1'><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="o">=</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">MediaTechController</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span><span class="nx">init</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">d</span><span class="p">){</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">MediaTechController</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">d</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">features</span><span class="p">.</span><span class="nx">progressEvents</span><span class="o">=!</span><span class="mi">1</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">features</span><span class="p">.</span><span class="nx">timeupdateEvents</span><span class="o">=!</span><span class="mi">1</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="s2">&quot;undefined&quot;</span><span class="o">!=</span><span class="k">typeof</span> <span class="nx">b</span><span class="p">.</span><span class="nx">source</span><span class="p">)</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">e</span> <span class="k">in</span> <span class="nx">b</span><span class="p">.</span><span class="nx">source</span><span class="p">)</span><span class="nx">a</span><span class="p">.</span><span class="nx">options</span><span class="p">()[</span><span class="nx">e</span><span class="p">]</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">source</span><span class="p">[</span><span class="nx">e</span><span class="p">];</span><span class="k">this</span><span class="p">.</span><span class="nx">userQuality</span><span class="o">=</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">convertQualityName</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">options</span><span class="p">().</span><span class="nx">quality</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="o">=</span><span class="nx">a</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">player_el_</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">id</span><span class="p">());</span><span class="k">this</span><span class="p">.</span><span class="nx">player_el_</span><span class="p">.</span><span class="nx">className</span><span class="o">+=</span><span class="s2">&quot; vjs-youtube&quot;</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/iPhone/i</span><span class="p">)</span><span class="o">||</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/iPad/i</span><span class="p">)</span><span class="o">||</span></div><div class='line' id='LC2'><span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/iPod/i</span><span class="p">)</span><span class="o">||</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/Android.*AppleWebKit/i</span><span class="p">))</span><span class="nx">a</span><span class="p">.</span><span class="nx">options</span><span class="p">().</span><span class="nx">ytcontrols</span><span class="o">=!</span><span class="mi">0</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">qualityButton</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">qualityButton</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;class&quot;</span><span class="p">,</span><span class="s2">&quot;vjs-quality-button vjs-menu-button vjs-control&quot;</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">qualityButton</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;tabindex&quot;</span><span class="p">,</span><span class="mi">0</span><span class="p">);</span><span class="nx">b</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">qualityButton</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">b</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">qualityTitle</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;span&quot;</span><span class="p">);</span><span class="nx">b</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">qualityTitle</span><span class="p">);</span><span class="nx">b</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">);</span><span class="nx">b</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;class&quot;</span><span class="p">,</span></div><div class='line' id='LC3'><span class="s2">&quot;vjs-menu&quot;</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">qualityButton</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">b</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">qualityMenuContent</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;ul&quot;</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">qualityMenuContent</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;class&quot;</span><span class="p">,</span><span class="s2">&quot;vjs-menu-content&quot;</span><span class="p">);</span><span class="nx">b</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">qualityMenuContent</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">id_</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">id</span><span class="p">()</span><span class="o">+</span><span class="s2">&quot;_youtube_api&quot;</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">el_</span><span class="o">=</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Component</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">createEl</span><span class="p">(</span><span class="s2">&quot;iframe&quot;</span><span class="p">,{</span><span class="nx">id</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">id_</span><span class="p">,</span><span class="nx">className</span><span class="o">:</span><span class="s2">&quot;vjs-tech&quot;</span><span class="p">,</span><span class="nx">scrolling</span><span class="o">:</span><span class="s2">&quot;no&quot;</span><span class="p">,</span><span class="nx">marginWidth</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">marginHeight</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">frameBorder</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">webkitAllowFullScreen</span><span class="o">:</span><span class="s2">&quot;true&quot;</span><span class="p">,</span><span class="nx">mozallowfullscreen</span><span class="o">:</span><span class="s2">&quot;true&quot;</span><span class="p">,</span><span class="nx">allowFullScreen</span><span class="o">:</span><span class="s2">&quot;true&quot;</span><span class="p">});</span><span class="k">this</span><span class="p">.</span><span class="nx">iframeblocker</span><span class="o">=</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Component</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">createEl</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">,</span></div><div class='line' id='LC4'><span class="p">{</span><span class="nx">className</span><span class="o">:</span><span class="s2">&quot;iframeblocker&quot;</span><span class="p">});</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="k">this</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">iframeblocker</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;click&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">(){</span><span class="nx">c</span><span class="p">.</span><span class="nx">paused</span><span class="p">()</span><span class="o">?</span><span class="nx">c</span><span class="p">.</span><span class="nx">play</span><span class="p">()</span><span class="o">:</span><span class="nx">c</span><span class="p">.</span><span class="nx">pause</span><span class="p">()});</span><span class="k">this</span><span class="p">.</span><span class="nx">iframeblocker</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;mousemove&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">c</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">userActive</span><span class="p">()</span><span class="o">||</span><span class="nx">c</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">userActive</span><span class="p">(</span><span class="o">!</span><span class="mi">0</span><span class="p">);</span><span class="nx">a</span><span class="p">.</span><span class="nx">stopPropagation</span><span class="p">();</span><span class="nx">a</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">()});</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">options</span><span class="p">().</span><span class="nx">ytcontrols</span><span class="o">||</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">iframeblocker</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span><span class="o">=</span><span class="s2">&quot;block&quot;</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">player_el_</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">iframeblocker</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">player_el_</span><span class="p">.</span><span class="nx">firstChild</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">player_el_</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">el_</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">iframeblocker</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">parseSrc</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">options</span><span class="p">().</span><span class="nx">src</span><span class="p">);</span></div><div class='line' id='LC5'><span class="k">this</span><span class="p">.</span><span class="nx">playOnReady</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">options</span><span class="p">().</span><span class="nx">autoplay</span><span class="o">||!</span><span class="mi">1</span><span class="p">;</span><span class="nx">b</span><span class="o">=</span><span class="p">{</span><span class="nx">enablejsapi</span><span class="o">:</span><span class="mi">1</span><span class="p">,</span><span class="nx">iv_load_policy</span><span class="o">:</span><span class="mi">3</span><span class="p">,</span><span class="nx">playerapiid</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">id</span><span class="p">(),</span><span class="nx">disablekb</span><span class="o">:</span><span class="mi">1</span><span class="p">,</span><span class="nx">wmode</span><span class="o">:</span><span class="s2">&quot;transparent&quot;</span><span class="p">,</span><span class="nx">controls</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">options</span><span class="p">().</span><span class="nx">ytcontrols</span><span class="o">?</span><span class="mi">1</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">showinfo</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">modestbranding</span><span class="o">:</span><span class="mi">1</span><span class="p">,</span><span class="nx">rel</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">autoplay</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">playOnReady</span><span class="o">?</span><span class="mi">1</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">loop</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">options</span><span class="p">().</span><span class="nx">loop</span><span class="o">?</span><span class="mi">1</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">list</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">playlistId</span><span class="p">,</span><span class="nx">vq</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">userQuality</span><span class="p">};</span><span class="s2">&quot;undefined&quot;</span><span class="o">==</span><span class="k">typeof</span> <span class="nx">b</span><span class="p">.</span><span class="nx">list</span><span class="o">&amp;&amp;</span><span class="k">delete</span> <span class="nx">b</span><span class="p">.</span><span class="nx">list</span><span class="p">;</span><span class="s2">&quot;file:&quot;</span><span class="o">!=</span><span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">protocol</span><span class="o">?</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">origin</span><span class="o">=</span><span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">protocol</span><span class="o">+</span><span class="s2">&quot;//&quot;</span><span class="o">+</span><span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">host</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">el_</span><span class="p">.</span><span class="nx">src</span><span class="o">=</span><span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">protocol</span><span class="o">+</span></div><div class='line' id='LC6'><span class="s2">&quot;//www.youtube.com/embed/&quot;</span><span class="o">+</span><span class="k">this</span><span class="p">.</span><span class="nx">videoId</span><span class="o">+</span><span class="s2">&quot;?&quot;</span><span class="o">+</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">makeQueryString</span><span class="p">(</span><span class="nx">b</span><span class="p">))</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">el_</span><span class="p">.</span><span class="nx">src</span><span class="o">=</span><span class="s2">&quot;https://www.youtube.com/embed/&quot;</span><span class="o">+</span><span class="k">this</span><span class="p">.</span><span class="nx">videoId</span><span class="o">+</span><span class="s2">&quot;?&quot;</span><span class="o">+</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">makeQueryString</span><span class="p">(</span><span class="nx">b</span><span class="p">);</span><span class="nx">c</span><span class="o">=</span><span class="k">this</span><span class="p">;</span><span class="nx">a</span><span class="p">.</span><span class="nx">ready</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="nx">c</span><span class="p">.</span><span class="nx">player_el_</span><span class="p">.</span><span class="nx">getElementsByClassName</span><span class="p">(</span><span class="s2">&quot;vjs-control-bar&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">].</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">qualityButton</span><span class="p">);</span><span class="nx">c</span><span class="p">.</span><span class="nx">playOnReady</span><span class="o">&amp;&amp;!</span><span class="nx">c</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">options</span><span class="p">().</span><span class="nx">ytcontrols</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">loadingSpinner</span><span class="p">.</span><span class="nx">show</span><span class="p">(),</span><span class="nx">c</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">bigPlayButton</span><span class="p">.</span><span class="nx">hide</span><span class="p">())});</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">options</span><span class="p">().</span><span class="nx">ytcontrols</span><span class="o">?</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">controls</span><span class="p">(</span><span class="o">!</span><span class="mi">1</span><span class="p">)</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">poster</span><span class="p">()</span><span class="o">||</span><span class="p">(</span><span class="kc">null</span><span class="o">==</span><span class="k">this</span><span class="p">.</span><span class="nx">videoId</span><span class="o">?</span></div><div class='line' id='LC7'><span class="k">this</span><span class="p">.</span><span class="nx">iframeblocker</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">backgroundColor</span><span class="o">=</span><span class="s2">&quot;black&quot;</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">poster</span><span class="p">(</span><span class="s2">&quot;https://img.youtube.com/vi/&quot;</span><span class="o">+</span><span class="k">this</span><span class="p">.</span><span class="nx">videoId</span><span class="o">+</span><span class="s2">&quot;/0.jpg&quot;</span><span class="p">));</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">apiReady</span><span class="o">?</span><span class="k">this</span><span class="p">.</span><span class="nx">loadYoutube</span><span class="p">()</span><span class="o">:</span><span class="p">(</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">loadingQueue</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="k">this</span><span class="p">),</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">apiLoading</span><span class="o">||</span><span class="p">(</span><span class="nx">a</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;script&quot;</span><span class="p">),</span><span class="nx">a</span><span class="p">.</span><span class="nx">src</span><span class="o">=</span><span class="s2">&quot;//www.youtube.com/iframe_api&quot;</span><span class="p">,</span><span class="nx">b</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;script&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">],</span><span class="nx">b</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">),</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">apiLoading</span><span class="o">=!</span><span class="mi">0</span><span class="p">));</span><span class="k">this</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;dispose&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">(){</span><span class="nx">c</span><span class="p">.</span><span class="nx">el_</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">el_</span><span class="p">);</span><span class="nx">c</span><span class="p">.</span><span class="nx">iframeblocker</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">iframeblocker</span><span class="p">);</span></div><div class='line' id='LC8'><span class="nx">c</span><span class="p">.</span><span class="nx">qualityButton</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">qualityButton</span><span class="p">);</span><span class="nx">c</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">loadingSpinner</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span><span class="nx">c</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">bigPlayButton</span><span class="p">.</span><span class="nx">hide</span><span class="p">()})}});</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">parseSrc</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">srcVal</span><span class="o">=</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&amp;v=)([^#\&amp;\?]*).*/</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">videoId</span><span class="o">=</span><span class="nx">b</span><span class="o">&amp;&amp;</span><span class="mi">11</span><span class="o">==</span><span class="nx">b</span><span class="p">[</span><span class="mi">2</span><span class="p">].</span><span class="nx">length</span><span class="o">?</span><span class="nx">b</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span><span class="o">:</span><span class="kc">null</span><span class="p">;</span><span class="nx">b</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/[?&amp;]list=([^#\&amp;\?]+)/</span><span class="p">);</span><span class="kc">null</span><span class="o">!=</span><span class="nx">b</span><span class="o">&amp;&amp;</span><span class="mi">1</span><span class="o">&lt;</span><span class="nx">b</span><span class="p">.</span><span class="nx">length</span><span class="o">?</span><span class="k">this</span><span class="p">.</span><span class="nx">playlistId</span><span class="o">=</span><span class="nx">b</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">playlistId</span><span class="o">&amp;&amp;</span><span class="k">delete</span> <span class="k">this</span><span class="p">.</span><span class="nx">playlistId</span><span class="p">;</span><span class="nx">b</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/[?&amp;]vq=([^#\&amp;\?]+)/</span><span class="p">);</span><span class="kc">null</span><span class="o">!=</span><span class="nx">b</span><span class="o">&amp;&amp;</span><span class="mi">1</span><span class="o">&lt;</span><span class="nx">b</span><span class="p">.</span><span class="nx">length</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">userQuality</span><span class="o">=</span><span class="nx">b</span><span class="p">[</span><span class="mi">1</span><span class="p">])}};</span></div><div class='line' id='LC9'><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">src</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">a</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">parseSrc</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="kc">null</span><span class="o">==</span><span class="k">this</span><span class="p">.</span><span class="nx">videoId</span><span class="o">?</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">iframeblocker</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">backgroundColor</span><span class="o">=</span><span class="s2">&quot;black&quot;</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">iframeblocker</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span><span class="o">=</span><span class="s2">&quot;block&quot;</span><span class="p">)</span><span class="o">:</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">ytplayer</span><span class="p">.</span><span class="nx">loadVideoById</span><span class="p">({</span><span class="nx">videoId</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">videoId</span><span class="p">,</span><span class="nx">suggestedQuality</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">userQuality</span><span class="p">}),</span><span class="k">this</span><span class="p">.</span><span class="nx">player_el_</span><span class="p">.</span><span class="nx">getElementsByClassName</span><span class="p">(</span><span class="s2">&quot;vjs-poster&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">].</span><span class="nx">style</span><span class="p">.</span><span class="nx">backgroundImage</span><span class="o">=</span><span class="s2">&quot;url(https://img.youtube.com/vi/&quot;</span><span class="o">+</span><span class="k">this</span><span class="p">.</span><span class="nx">videoId</span><span class="o">+</span><span class="s2">&quot;/0.jpg)&quot;</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">iframeblocker</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">backgroundColor</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">iframeblocker</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">poster</span><span class="p">(</span><span class="s2">&quot;https://img.youtube.com/vi/&quot;</span><span class="o">+</span></div><div class='line' id='LC10'><span class="k">this</span><span class="p">.</span><span class="nx">videoId</span><span class="o">+</span><span class="s2">&quot;/0.jpg&quot;</span><span class="p">)));</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">srcVal</span><span class="p">};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">load</span><span class="o">=</span><span class="kd">function</span><span class="p">(){};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">play</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="kc">null</span><span class="o">!=</span><span class="k">this</span><span class="p">.</span><span class="nx">videoId</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">options</span><span class="p">().</span><span class="nx">ytcontrols</span><span class="o">||</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;waiting&quot;</span><span class="p">),</span><span class="k">this</span><span class="p">.</span><span class="nx">isReady_</span><span class="o">?</span><span class="k">this</span><span class="p">.</span><span class="nx">ytplayer</span><span class="p">.</span><span class="nx">playVideo</span><span class="p">()</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">playOnReady</span><span class="o">=!</span><span class="mi">0</span><span class="p">)};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">pause</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">this</span><span class="p">.</span><span class="nx">ytplayer</span><span class="p">.</span><span class="nx">pauseVideo</span><span class="p">()};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">paused</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">ytplayer</span><span class="o">?</span><span class="k">this</span><span class="p">.</span><span class="nx">lastState</span><span class="o">!==</span><span class="nx">YT</span><span class="p">.</span><span class="nx">PlayerState</span><span class="p">.</span><span class="nx">PLAYING</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">.</span><span class="nx">lastState</span><span class="o">!==</span><span class="nx">YT</span><span class="p">.</span><span class="nx">PlayerState</span><span class="p">.</span><span class="nx">BUFFERING</span><span class="o">:!</span><span class="mi">0</span><span class="p">};</span></div><div class='line' id='LC11'><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">currentTime</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">ytplayer</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">.</span><span class="nx">ytplayer</span><span class="p">.</span><span class="nx">getCurrentTime</span><span class="o">?</span><span class="k">this</span><span class="p">.</span><span class="nx">ytplayer</span><span class="p">.</span><span class="nx">getCurrentTime</span><span class="p">()</span><span class="o">:</span><span class="mi">0</span><span class="p">};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">setCurrentTime</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">ytplayer</span><span class="p">.</span><span class="nx">seekTo</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="o">!</span><span class="mi">0</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;timeupdate&quot;</span><span class="p">)};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">duration</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">ytplayer</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">.</span><span class="nx">ytplayer</span><span class="p">.</span><span class="nx">getDuration</span><span class="o">?</span><span class="k">this</span><span class="p">.</span><span class="nx">ytplayer</span><span class="p">.</span><span class="nx">getDuration</span><span class="p">()</span><span class="o">:</span><span class="mi">0</span><span class="p">};</span></div><div class='line' id='LC12'><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">volume</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">this</span><span class="p">.</span><span class="nx">ytplayer</span><span class="o">&amp;&amp;</span><span class="nb">isNaN</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">volumeVal</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">volumeVal</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">ytplayer</span><span class="p">.</span><span class="nx">getVolume</span><span class="p">()</span><span class="o">/</span><span class="mi">100</span><span class="p">);</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">volumeVal</span><span class="p">};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">setVolume</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">a</span><span class="o">&amp;&amp;</span><span class="nx">a</span><span class="o">!=</span><span class="k">this</span><span class="p">.</span><span class="nx">volumeVal</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">ytplayer</span><span class="p">.</span><span class="nx">setVolume</span><span class="p">(</span><span class="mi">100</span><span class="o">*</span><span class="nx">a</span><span class="p">),</span><span class="k">this</span><span class="p">.</span><span class="nx">volumeVal</span><span class="o">=</span><span class="nx">a</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;volumechange&quot;</span><span class="p">))};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">muted</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">mutedVal</span><span class="p">};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">setMuted</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">a</span><span class="o">?</span><span class="k">this</span><span class="p">.</span><span class="nx">ytplayer</span><span class="p">.</span><span class="nx">mute</span><span class="p">()</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">ytplayer</span><span class="p">.</span><span class="nx">unMute</span><span class="p">();</span><span class="k">this</span><span class="p">.</span><span class="nx">mutedVal</span><span class="o">=</span><span class="nx">a</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;volumechange&quot;</span><span class="p">)};</span></div><div class='line' id='LC13'><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">buffered</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">ytplayer</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">.</span><span class="nx">ytplayer</span><span class="p">.</span><span class="nx">getVideoBytesLoaded</span><span class="p">){</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">ytplayer</span><span class="p">.</span><span class="nx">getVideoBytesLoaded</span><span class="p">(),</span><span class="nx">b</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">ytplayer</span><span class="p">.</span><span class="nx">getVideoBytesTotal</span><span class="p">();</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">a</span><span class="o">||!</span><span class="nx">b</span><span class="p">)</span><span class="k">return</span> <span class="mi">0</span><span class="p">;</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">ytplayer</span><span class="p">.</span><span class="nx">getDuration</span><span class="p">(),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="o">/</span><span class="nx">b</span><span class="o">*</span><span class="nx">d</span><span class="p">,</span><span class="nx">b</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">ytplayer</span><span class="p">.</span><span class="nx">getVideoStartBytes</span><span class="p">()</span><span class="o">/</span><span class="nx">b</span><span class="o">*</span><span class="nx">d</span><span class="p">;</span><span class="k">return</span> <span class="nx">videojs</span><span class="p">.</span><span class="nx">createTimeRange</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">b</span><span class="o">+</span><span class="nx">a</span><span class="p">)}</span><span class="k">return</span> <span class="nx">videojs</span><span class="p">.</span><span class="nx">createTimeRange</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="mi">0</span><span class="p">)};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">supportsFullScreen</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span><span class="o">!</span><span class="mi">0</span><span class="p">};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">isSupported</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span><span class="o">!</span><span class="mi">0</span><span class="p">};</span></div><div class='line' id='LC14'><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">canPlaySource</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span><span class="s2">&quot;video/youtube&quot;</span><span class="o">==</span><span class="nx">a</span><span class="p">.</span><span class="nx">type</span><span class="p">};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">canControlVolume</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span><span class="o">!</span><span class="mi">0</span><span class="p">};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">loadingQueue</span><span class="o">=</span><span class="p">[];</span></div><div class='line' id='LC15'><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">loadYoutube</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">this</span><span class="p">.</span><span class="nx">ytplayer</span><span class="o">=</span><span class="k">new</span> <span class="nx">YT</span><span class="p">.</span><span class="nx">Player</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">id_</span><span class="p">,{</span><span class="nx">events</span><span class="o">:</span><span class="p">{</span><span class="nx">onReady</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">a</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">vjsTech</span><span class="p">.</span><span class="nx">onReady</span><span class="p">()},</span><span class="nx">onStateChange</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">a</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">vjsTech</span><span class="p">.</span><span class="nx">onStateChange</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">data</span><span class="p">)},</span><span class="nx">onPlaybackQualityChange</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">a</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">vjsTech</span><span class="p">.</span><span class="nx">onPlaybackQualityChange</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">data</span><span class="p">)},</span><span class="nx">onError</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">a</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">vjsTech</span><span class="p">.</span><span class="nx">onError</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">data</span><span class="p">)}}});</span><span class="k">this</span><span class="p">.</span><span class="nx">ytplayer</span><span class="p">.</span><span class="nx">vjsTech</span><span class="o">=</span><span class="k">this</span><span class="p">};</span></div><div class='line' id='LC16'><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">makeQueryString</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="p">[],</span><span class="nx">d</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="nx">d</span> <span class="k">in</span> <span class="nx">a</span><span class="p">)</span><span class="nx">a</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nx">b</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;=&quot;</span><span class="o">+</span><span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="nx">d</span><span class="p">]));</span><span class="k">return</span> <span class="nx">b</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;&amp;&quot;</span><span class="p">)};</span><span class="nb">window</span><span class="p">.</span><span class="nx">onYouTubeIframeAPIReady</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">a</span><span class="p">;</span><span class="nx">a</span><span class="o">=</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">loadingQueue</span><span class="p">.</span><span class="nx">shift</span><span class="p">();)</span><span class="nx">a</span><span class="p">.</span><span class="nx">loadYoutube</span><span class="p">();</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">loadingQueue</span><span class="o">=</span><span class="p">[];</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">apiReady</span><span class="o">=!</span><span class="mi">0</span><span class="p">};</span></div><div class='line' id='LC17'><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onReady</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">this</span><span class="p">.</span><span class="nx">isReady_</span><span class="o">=!</span><span class="mi">0</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">triggerReady</span><span class="p">();</span><span class="k">this</span><span class="p">.</span><span class="nx">iframeblocker</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">loadingSpinner</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">options</span><span class="p">().</span><span class="nx">muted</span><span class="o">&amp;&amp;</span><span class="k">this</span><span class="p">.</span><span class="nx">setMuted</span><span class="p">(</span><span class="o">!</span><span class="mi">0</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">playOnReady</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">playOnReady</span><span class="o">=!</span><span class="mi">1</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">play</span><span class="p">())};</span></div><div class='line' id='LC18'><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">updateQualities</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">ytplayer</span><span class="p">.</span><span class="nx">getAvailableQualityLevels</span><span class="p">();</span><span class="k">if</span><span class="p">(</span><span class="mi">0</span><span class="o">==</span><span class="nx">a</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span><span class="k">this</span><span class="p">.</span><span class="nx">qualityButton</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span><span class="o">=</span><span class="s2">&quot;none&quot;</span><span class="p">;</span><span class="k">else</span><span class="p">{</span><span class="k">for</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">qualityButton</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">qualityMenuContent</span><span class="p">.</span><span class="nx">hasChildNodes</span><span class="p">();)</span><span class="k">this</span><span class="p">.</span><span class="nx">qualityMenuContent</span><span class="p">.</span><span class="nx">removeChild</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">qualityMenuContent</span><span class="p">.</span><span class="nx">lastChild</span><span class="p">);</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">b</span><span class="o">&lt;</span><span class="nx">a</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="o">++</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;li&quot;</span><span class="p">);</span><span class="nx">d</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;class&quot;</span><span class="p">,</span><span class="s2">&quot;vjs-menu-item&quot;</span><span class="p">);</span><span class="nx">d</span><span class="p">.</span><span class="nx">innerText</span><span class="o">=</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">parseQualityName</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="nx">b</span><span class="p">]);</span><span class="nx">d</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;data-val&quot;</span><span class="p">,</span><span class="nx">a</span><span class="p">[</span><span class="nx">b</span><span class="p">]);</span><span class="nx">a</span><span class="p">[</span><span class="nx">b</span><span class="p">]</span><span class="o">==</span></div><div class='line' id='LC19'><span class="k">this</span><span class="p">.</span><span class="nx">quality</span><span class="o">&amp;&amp;</span><span class="nx">d</span><span class="p">.</span><span class="nx">classList</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="s2">&quot;vjs-selected&quot;</span><span class="p">);</span><span class="kd">var</span> <span class="nx">e</span><span class="o">=</span><span class="k">this</span><span class="p">;</span><span class="nx">d</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;click&quot;</span><span class="p">,</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="k">this</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;data-val&quot;</span><span class="p">);</span><span class="nx">e</span><span class="p">.</span><span class="nx">ytplayer</span><span class="p">.</span><span class="nx">setPlaybackQuality</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="nx">e</span><span class="p">.</span><span class="nx">qualityTitle</span><span class="p">.</span><span class="nx">innerText</span><span class="o">=</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">parseQualityName</span><span class="p">(</span><span class="nx">a</span><span class="p">);(</span><span class="nx">a</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">qualityMenuContent</span><span class="p">.</span><span class="nx">querySelector</span><span class="p">(</span><span class="s2">&quot;.vjs-selected&quot;</span><span class="p">))</span><span class="o">&amp;&amp;</span><span class="nx">a</span><span class="p">.</span><span class="nx">classList</span><span class="p">.</span><span class="nx">remove</span><span class="p">(</span><span class="s2">&quot;vjs-selected&quot;</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">classList</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="s2">&quot;vjs-selected&quot;</span><span class="p">)});</span><span class="k">this</span><span class="p">.</span><span class="nx">qualityMenuContent</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">d</span><span class="p">)}}};</span></div><div class='line' id='LC20'><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onStateChange</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="o">!=</span><span class="k">this</span><span class="p">.</span><span class="nx">lastState</span><span class="p">){</span><span class="k">switch</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">case</span> <span class="o">-</span><span class="mi">1</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;durationchange&quot;</span><span class="p">);</span><span class="k">break</span><span class="p">;</span><span class="k">case</span> <span class="nx">YT</span><span class="p">.</span><span class="nx">PlayerState</span><span class="p">.</span><span class="nx">ENDED</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">options</span><span class="p">().</span><span class="nx">ytcontrols</span><span class="o">||</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">player_el_</span><span class="p">.</span><span class="nx">getElementsByClassName</span><span class="p">(</span><span class="s2">&quot;vjs-poster&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">].</span><span class="nx">style</span><span class="p">.</span><span class="nx">display</span><span class="o">=</span><span class="s2">&quot;block&quot;</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">bigPlayButton</span><span class="p">.</span><span class="nx">show</span><span class="p">());</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;ended&quot;</span><span class="p">);</span><span class="k">break</span><span class="p">;</span><span class="k">case</span> <span class="nx">YT</span><span class="p">.</span><span class="nx">PlayerState</span><span class="p">.</span><span class="nx">PLAYING</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">bigPlayButton</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span><span class="k">this</span><span class="p">.</span><span class="nx">updateQualities</span><span class="p">();</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;timeupdate&quot;</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;durationchange&quot;</span><span class="p">);</span></div><div class='line' id='LC21'><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;playing&quot;</span><span class="p">);</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;play&quot;</span><span class="p">);</span><span class="k">break</span><span class="p">;</span><span class="k">case</span> <span class="nx">YT</span><span class="p">.</span><span class="nx">PlayerState</span><span class="p">.</span><span class="nx">PAUSED</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;pause&quot;</span><span class="p">);</span><span class="k">break</span><span class="p">;</span><span class="k">case</span> <span class="nx">YT</span><span class="p">.</span><span class="nx">PlayerState</span><span class="p">.</span><span class="nx">BUFFERING</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;timeupdate&quot;</span><span class="p">),</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">options</span><span class="p">().</span><span class="nx">ytcontrols</span><span class="o">||</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;waiting&quot;</span><span class="p">)}</span><span class="k">this</span><span class="p">.</span><span class="nx">lastState</span><span class="o">=</span><span class="nx">a</span><span class="p">}};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">convertQualityName</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">switch</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">case</span> <span class="s2">&quot;144p&quot;</span><span class="o">:</span><span class="k">return</span><span class="s2">&quot;tiny&quot;</span><span class="p">;</span><span class="k">case</span> <span class="s2">&quot;240p&quot;</span><span class="o">:</span><span class="k">return</span><span class="s2">&quot;small&quot;</span><span class="p">;</span><span class="k">case</span> <span class="s2">&quot;360p&quot;</span><span class="o">:</span><span class="k">return</span><span class="s2">&quot;medium&quot;</span><span class="p">;</span><span class="k">case</span> <span class="s2">&quot;480p&quot;</span><span class="o">:</span><span class="k">return</span><span class="s2">&quot;large&quot;</span><span class="p">;</span><span class="k">case</span> <span class="s2">&quot;720p&quot;</span><span class="o">:</span><span class="k">return</span><span class="s2">&quot;hd720&quot;</span><span class="p">;</span><span class="k">case</span> <span class="s2">&quot;1080p&quot;</span><span class="o">:</span><span class="k">return</span><span class="s2">&quot;hd1080&quot;</span><span class="p">}</span><span class="k">return</span> <span class="nx">a</span><span class="p">};</span></div><div class='line' id='LC22'><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">parseQualityName</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">switch</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">case</span> <span class="s2">&quot;tiny&quot;</span><span class="o">:</span><span class="k">return</span><span class="s2">&quot;144p&quot;</span><span class="p">;</span><span class="k">case</span> <span class="s2">&quot;small&quot;</span><span class="o">:</span><span class="k">return</span><span class="s2">&quot;240p&quot;</span><span class="p">;</span><span class="k">case</span> <span class="s2">&quot;medium&quot;</span><span class="o">:</span><span class="k">return</span><span class="s2">&quot;360p&quot;</span><span class="p">;</span><span class="k">case</span> <span class="s2">&quot;large&quot;</span><span class="o">:</span><span class="k">return</span><span class="s2">&quot;480p&quot;</span><span class="p">;</span><span class="k">case</span> <span class="s2">&quot;hd720&quot;</span><span class="o">:</span><span class="k">return</span><span class="s2">&quot;720p&quot;</span><span class="p">;</span><span class="k">case</span> <span class="s2">&quot;hd1080&quot;</span><span class="o">:</span><span class="k">return</span><span class="s2">&quot;1080p&quot;</span><span class="p">}</span><span class="k">return</span> <span class="nx">a</span><span class="p">};</span></div><div class='line' id='LC23'><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onPlaybackQualityChange</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">quality</span><span class="o">=</span><span class="nx">a</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">qualityTitle</span><span class="p">.</span><span class="nx">innerText</span><span class="o">=</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">parseQualityName</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="k">switch</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">case</span> <span class="s2">&quot;medium&quot;</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">videoWidth</span><span class="o">=</span><span class="mi">480</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">videoHeight</span><span class="o">=</span><span class="mi">360</span><span class="p">;</span><span class="k">break</span><span class="p">;</span><span class="k">case</span> <span class="s2">&quot;large&quot;</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">videoWidth</span><span class="o">=</span><span class="mi">640</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">videoHeight</span><span class="o">=</span><span class="mi">480</span><span class="p">;</span><span class="k">break</span><span class="p">;</span><span class="k">case</span> <span class="s2">&quot;hd720&quot;</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">videoWidth</span><span class="o">=</span><span class="mi">960</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">videoHeight</span><span class="o">=</span><span class="mi">720</span><span class="p">;</span><span class="k">break</span><span class="p">;</span><span class="k">case</span> <span class="s2">&quot;hd1080&quot;</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">videoWidth</span><span class="o">=</span><span class="mi">1440</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">videoHeight</span><span class="o">=</span><span class="mi">1080</span><span class="p">;</span><span class="k">break</span><span class="p">;</span><span class="k">case</span> <span class="s2">&quot;highres&quot;</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">videoWidth</span><span class="o">=</span><span class="mi">1920</span><span class="p">;</span></div><div class='line' id='LC24'><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">videoHeight</span><span class="o">=</span><span class="mi">1080</span><span class="p">;</span><span class="k">break</span><span class="p">;</span><span class="k">case</span> <span class="s2">&quot;small&quot;</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">videoWidth</span><span class="o">=</span><span class="mi">320</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">videoHeight</span><span class="o">=</span><span class="mi">240</span><span class="p">;</span><span class="k">break</span><span class="p">;</span><span class="k">case</span> <span class="s2">&quot;tiny&quot;</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">videoWidth</span><span class="o">=</span><span class="mi">144</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">videoHeight</span><span class="o">=</span><span class="mi">108</span><span class="p">;</span><span class="k">break</span><span class="p">;</span><span class="k">default</span><span class="o">:</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">videoWidth</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">videoHeight</span><span class="o">=</span><span class="mi">0</span><span class="p">}</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;ratechange&quot;</span><span class="p">)};</span><span class="nx">videojs</span><span class="p">.</span><span class="nx">Youtube</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">onError</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">error</span><span class="o">=</span><span class="nx">a</span><span class="p">;</span><span class="k">this</span><span class="p">.</span><span class="nx">player_</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;error&quot;</span><span class="p">)};</span></div><div class='line' id='LC25'><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;style&quot;</span><span class="p">);</span><span class="nx">a</span><span class="p">.</span><span class="nx">innerText</span><span class="o">=</span><span class="s2">&quot; .vjs-youtube .vjs-poster { background-size: cover; }.iframeblocker { display:none;position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer;z-index:2; }.vjs-youtube.vjs-user-inactive .iframeblocker { display:block; } .vjs-quality-button &gt; div:first-child &gt; span:first-child { position:relative;top:7px }&quot;</span><span class="p">;</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;head&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">].</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">a</span><span class="p">)})();</span></div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.02090s from github-fe118-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/eXon/videojs-youtube/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

