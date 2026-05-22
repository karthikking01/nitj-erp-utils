(function () {
  "use strict";

  if (location.pathname.startsWith("/erp/library_seating")) return;

  const CSS = `
    html { background: #08111F !important; }
    body {
      background-color: #08111F !important;
      color: #E2EAF4 !important;
      visibility: visible !important;
      opacity: 1 !important;
    }

    /*  CSS Variables  */
    :root {
      --bg-base:        #08111F;
      --bg-surface:     #0D1B2E;
      --bg-panel:       #111E30;
      --bg-raised:      #162436;
      --bg-hover:       #1C2E44;
      --bg-input:       #0F1E30;
      --border:         #1F3352;
      --border-strong:  #2A4570;
      --text-primary:   #E2EAF4;
      --text-secondary: #94A8C0;
      --text-muted:     #5A7A99;
      --accent-blue:    #3B82F6;
      --accent-blue-2:  #1D4ED8;
      --accent-glow:    rgba(59,130,246,0.18);
      --success:        #10B981;
      --warning:        #F59E0B;
      --danger:         #EF4444;
      color-scheme: dark;
    }

    /*  Scrollbar  */
    ::-webkit-scrollbar { width: 7px; height: 7px; }
    ::-webkit-scrollbar-track { background: var(--bg-base); }
    ::-webkit-scrollbar-thumb { background: var(--border-strong); border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: var(--accent-blue); }

    /*  Base  */
    html, body {
      background-color: var(--bg-base) !important;
      color: var(--text-primary) !important;
    }

    .container, .container-fluid, .row, [class*="col-"] {
      background-color: transparent !important;
    }

    /*  Login Page  */
    body[style*="background-color:#e9ecef"],
    body[style*="background-color: #e9ecef"] {
      background-color: var(--bg-base) !important;
    }

    .login-card {
      background: var(--bg-panel) !important;
      border: 1px solid var(--border-strong) !important;
      box-shadow: 0 20px 60px rgba(0,0,0,0.7) !important;
      border-radius: 14px !important;
    }

    .login-heading, h1.login-heading {
      color: #93C5FD !important;
    }

    /*  Top Header  */
    div[style*="background-color:#003A6A"],
    div[style*="background-color: #003A6A"],
    .container-fluid[style*="background-color:#003A6A"] {
      background: linear-gradient(135deg, #071527 0%, #0B1E38 100%) !important;
      border-bottom: 1px solid var(--border) !important;
    }

    .row[style*="background-color:#FECD0B"],
    div[style*="background-color:#FECD0B"] {
      background-color: #F59E0B !important;
    }

    .logo2 p, .logo2 span, .logo2 a { color: #C8DCF4 !important; }

    /*  Navbar  */
    .navbar, .navbar-inverse {
      background: linear-gradient(90deg, #071527 0%, #0B2040 100%) !important;
      border-bottom: 1px solid var(--border) !important;
      box-shadow: 0 2px 12px rgba(0,0,0,0.5) !important;
    }

    .navbar-inverse .navbar-brand,
    .navbar-inverse .navbar-nav > li > a,
    .navbar-inverse .navbar-text { color: var(--text-secondary) !important; }

    .navbar-inverse .navbar-nav > li > a:hover,
    .navbar-inverse .navbar-nav > li > a:focus {
      color: #60A5FA !important;
      background-color: var(--bg-hover) !important;
    }

    .navbar-inverse .navbar-nav > li.open > a {
      background-color: var(--bg-hover) !important;
      color: #93C5FD !important;
    }

    font[color="#F7DC6F"] { color: #FDE68A !important; }

    /*  Dropdown  */
    .dropdown-menu {
      background: var(--bg-raised) !important;
      border: 1px solid var(--border-strong) !important;
      box-shadow: 0 8px 32px rgba(0,0,0,0.7) !important;
      border-radius: 6px !important;
    }

    .dropdown-menu > li > a { color: var(--text-secondary) !important; }
    .dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {
      background-color: var(--bg-hover) !important;
      color: #93C5FD !important;
    }

    .dropdown-menu > .active > a {
      background-color: var(--accent-blue-2) !important;
      color: white !important;
    }

    /*  Panels  */
    .panel, .card {
      background: var(--bg-panel) !important;
      border: 1px solid var(--border) !important;
      box-shadow: 0 4px 20px rgba(0,0,0,0.4) !important;
      border-radius: 8px !important;
    }

    .panel-body, .card-body, .tab-content > .tab-pane {
      background-color: var(--bg-panel) !important;
    }

    .panel-heading, .panel-head, .panel-title {
      background: linear-gradient(90deg, #0F2D5E 0%, #163566 100%) !important;
      color: #E0EFFF !important;
      border-bottom: 1px solid var(--border-strong) !important;
      font-weight: 600 !important;
      letter-spacing: 0.3px !important;
    }

    /*  Tables  */
    .table-responsive {
      overflow-x: auto !important;
      -webkit-overflow-scrolling: touch !important;
    }

    .table, table {
      background-color: transparent !important;
      color: var(--text-primary) !important;
    }

    .table > thead > tr > th, table th {
      background-color: #0F2447 !important;
      color: #93C5FD !important;
      border-color: var(--border-strong) !important;
      font-size: 0.82em !important;
      text-transform: uppercase !important;
      letter-spacing: 0.4px !important;
      padding: 9px 10px !important;
    }

    .table > tbody > tr > td, .table > tfoot > tr > td, table td {
      background-color: var(--bg-panel) !important;
      color: var(--text-primary) !important;
      border-color: var(--border) !important;
      vertical-align: middle !important;
    }

    .table-striped > tbody > tr:nth-of-type(odd) > td {
      background-color: var(--bg-raised) !important;
    }

    .table > tbody > tr:hover > td {
      background-color: var(--bg-hover) !important;
    }

    [style*="background-color: white"],
    [style*="background-color:white"],
    [style*="background-color:#fff"],
    [style*="background-color: #fff"],
    [style*="background-color:#FFF"],
    [style*="background-color:#ffffff"],
    [style*="background-color: #ffffff"],
    [style*="background-color:#FFFFFF"],
    [style*="background-color: #FFFFFF"],
    [style*="background:#fff"],
    [style*="background:white"],
    [style*="background: white"] {
      background-color: var(--bg-panel) !important;
      color: var(--text-primary) !important;
    }

    [style*="color:#000000"], [style*="color: #000000"],
    [style*="color:black"], [style*="color: black"],
    font[color="#000000"] {
      color: var(--text-primary) !important;
    }

    /*  Sidebar Menu (Academic)  */
    .panel .nav > li > a {
      color: var(--text-secondary) !important;
      border-bottom: 1px solid var(--border) !important;
    }

    .panel .nav > li > a:hover {
      color: #93C5FD !important;
      background: var(--bg-hover) !important;
    }

    /*  Guest House: Custom Classes  */
    .menu-container {
      background: var(--bg-panel) !important;
      border: 1px solid var(--border) !important;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3) !important;
    }

    .menu-header {
      background: linear-gradient(90deg, #0F2D5E, #163566) !important;
      color: #93C5FD !important;
      border-bottom: 1px solid var(--border-strong) !important;
    }

    .menu-item {
      color: var(--text-secondary) !important;
      border-bottom: 1px solid var(--border) !important;
    }

    .menu-item i { color: #60A5FA !important; }

    .menu-item:hover {
      background: var(--bg-hover) !important;
      color: #93C5FD !important;
    }

    .menu-item.active {
      background: linear-gradient(90deg, var(--accent-blue-2), var(--accent-blue)) !important;
      color: white !important;
    }

    .menu-item.active i { color: white !important; }

    .gh-card, .gh-card2 {
      background: var(--bg-raised) !important;
      border: 1px solid var(--border) !important;
      color: var(--text-primary) !important;
    }

    .gh-card2:hover {
      border-color: var(--accent-blue) !important;
      box-shadow: 0 8px 24px rgba(59,130,246,0.2) !important;
    }

    .gh-title { color: #93C5FD !important; }
    .gh-sub { color: var(--text-secondary) !important; }
    .gh-price, [style*="color:#003a6a"], [style*="color: #003a6a"],
    [style*="color:#3371b7"], [style*="color: #3371b7"] {
      color: #60A5FA !important;
    }

    .facilities li { color: var(--text-secondary) !important; }

    .custom-form2 {
      background: var(--bg-panel) !important;
      border: 1px solid var(--border) !important;
      box-shadow: 0 3px 10px rgba(0,0,0,0.3) !important;
    }

    .section-title2 {
      background: linear-gradient(90deg, #0F2D5E, #163566) !important;
      color: #93C5FD !important;
      border-left-color: var(--accent-blue) !important;
      border-right-color: var(--accent-blue) !important;
      border-top-color: var(--border-strong) !important;
      border-bottom-color: var(--border-strong) !important;
      box-shadow: 1px 1px 5px 1px rgba(59,130,246,0.3) !important;
    }

    .gh-card, .gh-card2, .custom-form2, .menu-container {
      --card: var(--bg-raised);
      --border: #1F3352;
    }

    /*  Tabs  */
    .nav-tabs { border-bottom: 2px solid var(--border-strong) !important; }

    .nav-tabs > li > a {
      color: var(--text-secondary) !important;
      background: transparent !important;
      border: 1px solid transparent !important;
    }

    .nav-tabs > li > a:hover {
      color: #93C5FD !important;
      border-color: var(--border) !important;
      background: var(--bg-raised) !important;
    }

    .nav-tabs > li.active > a,
    .nav-tabs > li.active > a:hover {
      background: linear-gradient(180deg, #0F2D5E 0%, #0B2447 100%) !important;
      color: white !important;
      border-color: var(--border-strong) !important;
      border-bottom-color: transparent !important;
    }

    /*  Buttons  */
    .btn-default {
      background-color: var(--bg-raised) !important;
      color: var(--text-secondary) !important;
      border-color: var(--border-strong) !important;
    }

    .btn-default:hover {
      background-color: var(--bg-hover) !important;
      color: var(--text-primary) !important;
      border-color: var(--accent-blue) !important;
    }

    .btn-primary {
      background: linear-gradient(135deg, #1D4ED8, #2563EB) !important;
      border-color: #1D4ED8 !important;
      color: white !important;
    }

    .btn-primary:hover {
      background: linear-gradient(135deg, #2563EB, #3B82F6) !important;
      box-shadow: 0 4px 12px rgba(59,130,246,0.35) !important;
    }

    .btn-success {
      background: linear-gradient(135deg, #059669, #10B981) !important;
      border-color: #059669 !important;
      color: white !important;
    }

    .btn-danger {
      background: linear-gradient(135deg, #B91C1C, #EF4444) !important;
      border-color: #B91C1C !important;
      color: white !important;
    }

    .btn-info {
      background: linear-gradient(135deg, #0369A1, #0EA5E9) !important;
      border-color: #0369A1 !important;
      color: white !important;
    }

    button[style*="background-color:red"],
    button[style*="background-color: red"],
    input[type="button"][style*="background-color:red"] {
      background: linear-gradient(135deg, #B91C1C, #EF4444) !important;
      border-color: #B91C1C !important;
      color: white !important;
    }

    /*  Forms  */
    .form-control, input, select, textarea {
      background-color: var(--bg-input) !important;
      color: var(--text-primary) !important;
      border: 1px solid var(--border-strong) !important;
      border-radius: 5px !important;
    }

    .form-control:focus, input:focus, select:focus, textarea:focus {
      background-color: var(--bg-raised) !important;
      border-color: var(--accent-blue) !important;
      box-shadow: 0 0 0 3px var(--accent-glow) !important;
      outline: none !important;
    }

    select option {
      background-color: var(--bg-raised) !important;
      color: var(--text-primary) !important;
    }

    #captchaImage {
      border-color: var(--border-strong) !important;
      border-radius: 8px !important;
      filter: contrast(1.1) brightness(0.95) !important;
    }

    /*  Labels & Badges  */
    .label-success {
      background: linear-gradient(135deg, #059669, #10B981) !important;
      color: white !important;
    }

    .label-primary {
      background: linear-gradient(135deg, #1D4ED8, #3B82F6) !important;
      color: white !important;
    }

    .label-danger {
      background: linear-gradient(135deg, #B91C1C, #EF4444) !important;
      color: white !important;
    }

    .label-warning {
      background: linear-gradient(135deg, #B45309, #F59E0B) !important;
      color: white !important;
    }

    .label-info {
      background: linear-gradient(135deg, #0369A1, #06B6D4) !important;
      color: white !important;
    }

    .label-default {
      background-color: var(--bg-hover) !important;
      color: var(--text-secondary) !important;
    }

    /*  Links  */
    a { color: #60A5FA !important; }
    a:hover { color: #93C5FD !important; text-decoration: none !important; }

    /*  Text  */
    label { color: var(--text-secondary) !important; }
    .text-danger { color: #F87171 !important; }
    .text-success { color: #34D399 !important; }
    .text-muted { color: var(--text-muted) !important; }
    h1,h2,h3,h4,h5,h6 { color: var(--text-primary) !important; }

    /*  Well / Alert  */
    .well {
      background-color: var(--bg-raised) !important;
      border-color: var(--border) !important;
    }

    .alert-info {
      background-color: #0C2340 !important;
      border-color: #1D4ED8 !important;
      color: #93C5FD !important;
    }

    .alert-success {
      background-color: #052E1C !important;
      border-color: #059669 !important;
      color: #6EE7B7 !important;
    }

    .alert-danger {
      background-color: #2D0A0A !important;
      border-color: #B91C1C !important;
      color: #FCA5A5 !important;
    }

    .alert-warning {
      background-color: #2D1A00 !important;
      border-color: #B45309 !important;
      color: #FDE68A !important;
    }

    /*  Modal  */
    .modal-content {
      background-color: var(--bg-panel) !important;
      border: 1px solid var(--border-strong) !important;
      box-shadow: 0 20px 60px rgba(0,0,0,0.8) !important;
      border-radius: 10px !important;
    }

    .modal-header {
      background: linear-gradient(90deg, #0F2D5E, #163566) !important;
      border-bottom: 1px solid var(--border-strong) !important;
      color: white !important;
    }

    .modal-footer {
      background-color: var(--bg-surface) !important;
      border-top: 1px solid var(--border) !important;
    }

    /*  Misc  */
    hr { border-color: var(--border) !important; }

    .pagination > li > a, .pagination > li > span {
      background-color: var(--bg-raised) !important;
      border-color: var(--border) !important;
      color: var(--text-secondary) !important;
    }

    .pagination > li > a:hover {
      background-color: var(--bg-hover) !important;
      color: #93C5FD !important;
    }

    .pagination > .active > a {
      background-color: var(--accent-blue-2) !important;
      border-color: var(--accent-blue) !important;
      color: white !important;
    }

    .footer, footer {
      background: var(--bg-surface) !important;
      color: var(--text-secondary) !important;
      border-top: 1px solid var(--border) !important;
    }

    /* Homepage: Tiles & Marquee */
    .tiles .link-tiles {
      background: var(--bg-raised) !important;
      border: 1px solid var(--border) !important;
    }

    .tiles .link-tiles a {
      color: var(--text-secondary) !important;
    }

    .tiles .link-tiles:hover {
      background: var(--bg-hover) !important;
      border-color: var(--accent-blue) !important;
    }

    .tiles .link-tiles:hover a {
      color: #93C5FD !important;
    }

    .counselling-marquee {
      background: var(--bg-surface) !important;
      border-bottom-color: var(--border-strong) !important;
      animation: none !important;
    }

    .counselling-marquee:hover {
      background: var(--bg-hover) !important;
    }

    .marquee-text {
      color: #60A5FA !important;
    }

    .counselling-marquee:hover .marquee-text {
      color: #93C5FD !important;
    }

    @media print {
      :root { color-scheme: light; }
      body { background: white !important; color: black !important; }
    }
  `;

  function inject() {
    const el = document.createElement("style");
    el.id = "nitj-dark-v3";
    el.textContent = CSS;
    (document.head || document.documentElement).appendChild(el);
  }

  inject();

  document.addEventListener("DOMContentLoaded", () => {
    if (!document.getElementById("nitj-dark-v3")) inject();
  });

  const observer = new MutationObserver(() => {
    if (!document.getElementById("nitj-dark-v3")) inject();
  });

  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: false });
  } else {
    document.addEventListener("DOMContentLoaded", () => {
      observer.observe(document.body, { childList: true, subtree: false });
    });
  }
})();
