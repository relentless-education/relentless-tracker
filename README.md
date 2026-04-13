<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Relentless Education — Results Tracker</title>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;background:#e8e5df;color:#1a1a1a;min-height:100vh;overflow-x:hidden}
.nav{display:flex;align-items:center;background:#fff;border-bottom:1px solid #e8e6e0;position:sticky;top:0;z-index:100;flex-wrap:wrap;box-shadow:0 1px 4px rgba(0,0,0,0.06)}
.nav-brand{display:flex;align-items:center;gap:12px;padding:12px 22px;border-right:1px solid #e8e6e0;flex-shrink:0}
.brand-icon{width:38px;height:38px;background:#F5E500;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;color:#111;flex-shrink:0;box-shadow:0 2px 6px rgba(245,229,0,0.35)}
.brand-name{font-size:14px;font-weight:800;color:#111;letter-spacing:-0.02em;display:block;line-height:1.1}
.brand-sub{font-size:9px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#aaa;display:block;margin-top:1px}
.nav-tabs{display:flex;overflow-x:auto;flex:1}
.nav-tabs::-webkit-scrollbar{height:2px}
.nav-tabs::-webkit-scrollbar-thumb{background:#ddd}
.nav-sep{width:1px;background:#e8e6e0;margin:8px 0;flex-shrink:0}
.nav-label{font-size:9px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#bbb;padding:0 8px;align-self:center;white-space:nowrap}
.nav-tab{padding:14px 16px;font-size:12px;font-weight:600;color:#999;cursor:pointer;border-bottom:2px solid transparent;white-space:nowrap;transition:color 0.15s,border-color 0.15s;background:none;border-top:none;border-left:none;border-right:none;font-family:inherit;letter-spacing:0.01em}
.nav-tab:hover{color:#333}
.nav-tab.active{color:#111;border-bottom-color:#F5E500}
.page{display:none;padding:28px 22px;max-width:1120px;margin:0 auto}
.page.active{display:block}
.page-header{margin-bottom:28px}
.page-header h1{font-size:24px;font-weight:800;color:#111;letter-spacing:-0.025em}
.page-header h1 span{color:#c8a800}
.page-header p{font-size:13px;color:#888;margin-top:6px;line-height:1.6}
.slabel{font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#c8a800;margin-bottom:12px;margin-top:28px;display:block}
.card{background:#fff;border:1px solid #e8e6e0;border-radius:14px;padding:20px 22px;margin-bottom:14px;box-shadow:0 1px 3px rgba(0,0,0,0.04)}
.card-title{font-size:13px;font-weight:700;color:#333;margin-bottom:16px;letter-spacing:-0.01em}
.mc{background:#fff;border:1px solid #e8e6e0;border-radius:14px;padding:18px;box-shadow:0 1px 3px rgba(0,0,0,0.04)}
.mc.y{background:#fffbeb;border-color:#f0d800;box-shadow:0 1px 4px rgba(245,229,0,0.2)}
.mc.gr{background:#f0faf0;border-color:#86efac}
.mc.re{background:#fff5f5;border-color:#fca5a5}
.mlabel{font-size:10px;font-weight:700;letter-spacing:0.07em;text-transform:uppercase;color:#aaa;margin-bottom:6px}
.mc.y .mlabel{color:#a87e00}
.mc.gr .mlabel{color:#16a34a}
.mc.re .mlabel{color:#dc2626}
.mval{font-size:26px;font-weight:800;letter-spacing:-0.025em;color:#666}
.mc.y .mval{color:#92680a}
.mc.gr .mval{color:#16a34a}
.mc.re .mval{color:#dc2626}
.msub{font-size:11px;color:#bbb;margin-top:4px}
.mc.y .msub{color:#a87e00}
.mc.gr .msub{color:#16a34a}
.g2{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px}
.g4{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.gauto{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:12px;margin-bottom:20px}
@media(max-width:700px){.g2,.g3,.g4{grid-template-columns:1fr}}
.fi{width:100%;background:#fafaf8;border:1.5px solid #e8e6e0;border-radius:9px;padding:10px 13px;font-size:14px;font-weight:600;color:#111;font-family:inherit;outline:none;transition:border-color 0.15s,box-shadow 0.15s}
.fi:focus{border-color:#F5E500;box-shadow:0 0 0 3px rgba(245,229,0,0.15);background:#fff}
.fi::placeholder{color:#ccc;font-weight:400}
.fi[type=number]::-webkit-inner-spin-button{-webkit-appearance:none}
select.fi{cursor:pointer}
.frow{display:flex;align-items:center;gap:7px}
.fpfx{font-size:14px;font-weight:600;color:#bbb;flex-shrink:0}
.fg{margin-bottom:16px}
.flabel{font-size:12px;font-weight:600;color:#555;margin-bottom:6px;display:block}
.tip{font-size:12px;color:#bbb;margin-top:4px;line-height:1.5}
.tw{overflow-x:auto;border-radius:12px;border:1px solid #e8e6e0;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,0.04)}
table{width:100%;border-collapse:collapse;font-size:12px}
thead th{background:#fafaf8;color:#999;font-weight:700;padding:11px 13px;text-align:left;white-space:nowrap;border-bottom:1px solid #e8e6e0;font-size:10px;letter-spacing:0.05em;text-transform:uppercase}
tbody td{padding:9px 12px;border-bottom:1px solid #f0ede8;color:#333;vertical-align:middle;background:#fff}
tfoot td{padding:10px 13px;border-top:1.5px solid #e8e6e0;background:#fafaf8;color:#555;font-size:12px;font-weight:700}
tbody tr:last-child td{border-bottom:none}
tbody tr:hover td{background:#fafaf8!important}
.ti{background:transparent;border:none;outline:none;color:#111;font-family:inherit;font-size:13px;font-weight:600;width:100%;min-width:45px;caret-color:#c8a800}
.ti::placeholder{color:#ccc;font-weight:400}
.ti:focus{background:rgba(245,229,0,0.12);border-radius:5px;padding:2px 5px;margin:-2px -5px}
.ti[type=number]::-webkit-inner-spin-button{-webkit-appearance:none}
.wtr td{background:#fffbeb!important;font-weight:700;color:#92680a!important;border-top:1.5px solid #f0d800!important}
.pr td{background:#f0faf0!important;color:#16a34a!important}
.cbw{display:flex;align-items:center;gap:8px;cursor:pointer}
.cbb{width:18px;height:18px;border:1.5px solid #d0cdc8;border-radius:4px;background:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all 0.15s}
.cbb.on{background:#16a34a;border-color:#16a34a}
.cbk{width:10px;height:8px;display:none}
.cbb.on .cbk{display:block}
.btn{display:inline-flex;align-items:center;gap:6px;padding:9px 16px;border-radius:9px;font-size:13px;font-weight:600;font-family:inherit;cursor:pointer;transition:all 0.15s;border:1.5px solid #e0ddd8;background:#fff;color:#555;box-shadow:0 1px 2px rgba(0,0,0,0.04)}
.btn:hover{border-color:#c8a800;color:#92680a;background:#fffbeb}
.btnp{background:#F5E500;color:#111;border-color:#e8d800;box-shadow:0 2px 6px rgba(245,229,0,0.3)}
.btnp:hover{background:#e8d800;border-color:#d4c400;color:#111}
.btns{padding:7px 13px;font-size:12px}
.btn:active{transform:scale(0.98)}
.wh{display:flex;align-items:center;gap:10px;margin:22px 0 12px;padding-bottom:10px;border-bottom:2px solid #f0ede8}
.wh h3{font-size:12px;font-weight:800;color:#c8a800;letter-spacing:0.08em;text-transform:uppercase}
.mtabs{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:22px}
.mtab{padding:7px 14px;font-size:12px;font-weight:600;border-radius:8px;border:1.5px solid #e0ddd8;background:#fff;color:#999;cursor:pointer;font-family:inherit;transition:all 0.15s;box-shadow:0 1px 2px rgba(0,0,0,0.03)}
.mtab:hover{border-color:#c8a800;color:#92680a;background:#fffbeb}
.mtab.active{background:#F5E500;border-color:#e8d800;color:#111;font-weight:700;box-shadow:0 2px 6px rgba(245,229,0,0.25)}
.ibox{background:#fffbeb;border:1.5px solid #f0d800;border-left:4px solid #F5E500;border-radius:10px;padding:14px 18px;margin-bottom:18px}
.ibox p{font-size:13px;color:#92680a;line-height:1.6}
.ibox strong{color:#7a5500;font-weight:700}
hr.dv{border:none;border-top:1.5px solid #f0ede8;margin:20px 0}
.stat-row{display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid #f0ede8}
.stat-row:last-child{border-bottom:none}
.stat-row span:first-child{font-size:12px;color:#888}
.stat-row span:last-child{font-size:13px;font-weight:700;color:#333}
</style>
</head>
<body>

<nav class="nav">
  <div class="nav-brand">
    <div class="brand-icon">RE</div>
    <div>
      <span class="brand-name">Relentless Education</span>
      <span class="brand-sub">Results Tracker</span>
    </div>
  </div>
  <div class="nav-tabs">
    <span class="nav-label">Setup</span>
    <button class="nav-tab active" onclick="gp('setup',this)">Company</button>
    <button class="nav-tab" onclick="gp('targets',this)">Targets</button>
    <button class="nav-tab" onclick="gp('ppc',this)">PPC Calc</button>
    <div class="nav-sep"></div>
    <span class="nav-label">Monthly</span>
    <button class="nav-tab" onclick="gp('leads',this)">Leads</button>
    <button class="nav-tab" onclick="gp('sales',this)">Sales</button>
    <div class="nav-sep"></div>
    <span class="nav-label">Overview</span>
    <button class="nav-tab" onclick="gp('payments',this)">Payments</button>
    <button class="nav-tab" onclick="gp('summary',this)">Summary</button>
  </div>
</nav>

<!-- COMPANY -->
<div class="page active" id="page-setup">
  <div class="page-header"><h1>Company <span>Setup</span></h1><p>Configure your company details once — they'll populate throughout the tracker.</p></div>
  <div class="g2">
    <div class="card">
      <div class="card-title">Company Details</div>
      <div class="fg"><label class="flabel">Company Name</label><input class="fi" id="cname" placeholder="e.g. Relentless Education" oninput="S.company=this.value;save()"/></div>
      <div class="fg"><label class="flabel">Owner / Full Name</label><input class="fi" id="oname" placeholder="Your full name" oninput="S.owner=this.value;save()"/></div>
    </div>
    <div class="card">
      <div class="card-title">Working Days</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px" id="wd-grid"></div>
    </div>
  </div>
  <div class="g2" style="margin-top:14px">
    <div class="card">
      <div class="card-title">Product Options</div>
      <p class="tip" style="margin-bottom:12px">List your coaching products / programs</p>
      <div id="prod-list"></div>
      <button class="btn btns" style="margin-top:10px" onclick="addProd()">+ Add Product</button>
    </div>
    <div class="card">
      <div class="card-title">Monthly Expenses</div>
      <p class="tip" style="margin-bottom:12px">Recurring monthly costs</p>
      <div id="exp-list"></div>
      <button class="btn btns" style="margin-top:10px" onclick="addExp()">+ Add Expense</button>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:18px;padding-top:14px;border-top:1.5px solid #f0ede8">
        <span style="font-size:13px;font-weight:600;color:#555">Total Monthly</span>
        <span style="font-size:20px;font-weight:800;color:#92680a" id="tot-exp">$0</span>
      </div>
    </div>
  </div>
</div>

<!-- TARGETS -->
<div class="page" id="page-targets">
  <div class="page-header"><h1>Targets <span>Calculator</span></h1><p>Set your conversion rates and sales goals to calculate exactly what you need each day and month.</p></div>
  <div class="g2">
    <div class="card">
      <div class="card-title">Conversion Rates</div>
      <div class="fg"><label class="flabel">Contact Rate (%)</label><div class="frow"><input class="fi" id="tc" type="number" value="5" oninput="cT()"/><span class="fpfx">%</span></div><p class="tip">% of DMs/calls that start a conversation</p></div>
      <div class="fg"><label class="flabel">Booking Rate (%)</label><div class="frow"><input class="fi" id="tb" type="number" value="30" oninput="cT()"/><span class="fpfx">%</span></div><p class="tip">% of contacts that book a sales call</p></div>
      <div class="fg"><label class="flabel">Show Rate (%)</label><div class="frow"><input class="fi" id="ts" type="number" value="50" oninput="cT()"/><span class="fpfx">%</span></div><p class="tip">% of bookings that actually show up</p></div>
      <div class="fg"><label class="flabel">Close Rate (%)</label><div class="frow"><input class="fi" id="tcl" type="number" value="30" oninput="cT()"/><span class="fpfx">%</span></div><p class="tip">% of shows that convert to sales</p></div>
    </div>
    <div class="card">
      <div class="card-title">Goals</div>
      <div class="fg"><label class="flabel">Sales Target This Month</label><input class="fi" id="tsg" type="number" value="3" oninput="cT()"/></div>
      <div class="fg"><label class="flabel">Working Days This Month</label><input class="fi" id="twd" type="number" value="23" oninput="cT()"/></div>
      <div class="fg"><label class="flabel">Program Cost ($)</label><div class="frow"><span class="fpfx">$</span><input class="fi" id="tpc" type="number" value="7000" oninput="cT()"/></div></div>
      <hr class="dv"/>
      <div style="display:flex;justify-content:space-between;align-items:center">
        <span style="font-size:13px;font-weight:600;color:#555">Revenue Target</span>
        <span style="font-size:20px;font-weight:800;color:#92680a" id="trev">$21,000</span>
      </div>
    </div>
  </div>
  <span class="slabel" style="margin-top:28px">Monthly Targets</span>
  <div class="gauto">
    <div class="mc y"><div class="mlabel">DMs / Calls</div><div class="mval" id="tr-dm">1,333</div><div class="msub">needed this month</div></div>
    <div class="mc"><div class="mlabel">Contacts</div><div class="mval" id="tr-co">67</div><div class="msub">conversations</div></div>
    <div class="mc"><div class="mlabel">Bookings</div><div class="mval" id="tr-bk">20</div><div class="msub">calls to book</div></div>
    <div class="mc"><div class="mlabel">Shows</div><div class="mval" id="tr-sh">10</div><div class="msub">need to show up</div></div>
    <div class="mc gr"><div class="mlabel">Sales</div><div class="mval" id="tr-sl">3</div><div class="msub">closings needed</div></div>
  </div>
  <span class="slabel">Daily Breakdown</span>
  <div class="gauto">
    <div class="mc"><div class="mlabel">DMs / Day</div><div class="mval" id="td-dm">58</div></div>
    <div class="mc"><div class="mlabel">Contacts / Day</div><div class="mval" id="td-co">2.9</div></div>
    <div class="mc"><div class="mlabel">Bookings / Day</div><div class="mval" id="td-bk">0.87</div></div>
    <div class="mc"><div class="mlabel">Shows / Day</div><div class="mval" id="td-sh">0.43</div></div>
  </div>
</div>

<!-- PPC -->
<div class="page" id="page-ppc">
  <div class="page-header"><h1>PPC <span>ROI Calculator</span></h1><p>Calculate your advertising return on investment before you spend.</p></div>
  <div class="g2">
    <div>
      <span class="slabel" style="margin-top:0">Sales & Conversion</span>
      <div class="card">
        <div class="fg"><label class="flabel">Sales Target (per month)</label><div class="frow"><input class="fi" id="ps" type="number" placeholder="0" oninput="cP()"/><span class="fpfx">sales</span></div></div>
        <div class="fg"><label class="flabel">Lead to Conversion Rate (%)</label><div class="frow"><input class="fi" id="pc" type="number" placeholder="0" oninput="cP()"/><span class="fpfx">%</span></div></div>
        <div class="fg"><label class="flabel">Expected Leads Needed (calculated)</label><div style="font-size:22px;font-weight:800;color:#bbb;padding:8px 0" id="pl">—</div></div>
        <div class="fg"><label class="flabel">Cost Per Lead ($)</label><div class="frow"><span class="fpfx">$</span><input class="fi" id="pcpl" type="number" placeholder="0" oninput="cP()"/></div></div>
      </div>
      <span class="slabel">Advertising Spend</span>
      <div class="card">
        <div class="fg"><label class="flabel">Advertising Cost — ex. GST (calculated)</label><div style="font-size:22px;font-weight:800;color:#bbb;padding:8px 0" id="pac">—</div></div>
        <div class="fg"><label class="flabel">Monthly Fixed Management Fee ($)</label><div class="frow"><span class="fpfx">$</span><input class="fi" id="pm" type="number" placeholder="0" oninput="cP()"/></div></div>
        <div class="fg"><label class="flabel">Total Advertising Spend — ex. GST (calculated)</label><div style="font-size:22px;font-weight:800;color:#bbb;padding:8px 0" id="pts">—</div></div>
        <div class="fg"><label class="flabel">Avg. Upfront Program Sale — ex. GST ($)</label><div class="frow"><span class="fpfx">$</span><input class="fi" id="pas" type="number" placeholder="0" oninput="cP()"/></div></div>
      </div>
    </div>
    <div>
      <span class="slabel" style="margin-top:0">Results</span>
      <div class="mc" id="pcard-rev" style="margin-bottom:12px"><div class="mlabel">Sales Generated</div><div class="mval" id="prev">$—</div><div class="msub">ex. GST</div></div>
      <div class="mc" id="pcard-pct" style="margin-bottom:12px"><div class="mlabel">ROI %</div><div class="mval" id="ppct">—</div><div class="msub" id="ppct-sub">return on spend</div></div>
      <div class="mc" id="pcard-d" style="margin-bottom:12px"><div class="mlabel">ROI $</div><div class="mval" id="pdol">$—</div><div class="msub" id="pdol-sub">profit after ad spend</div></div>
      <div class="ibox" id="ptip" style="display:none"><p id="ptip-t"></p></div>
    </div>
  </div>
</div>

<!-- LEADS -->
<div class="page" id="page-leads">
  <div class="page-header"><h1>Monthly <span>Leads</span></h1><p>Track daily outbound, organic and PPC activity week by week. Rates calculate automatically.</p></div>
  <div class="mtabs" id="lm-tabs"></div>
  <div class="g2" style="margin-bottom:22px">
    <div class="card">
      <div class="card-title">Monthly Benchmarks (from Targets)</div>
      <div class="gauto" style="margin-bottom:0">
        <div><div class="mlabel">DMs</div><div style="font-size:18px;font-weight:800;color:#92680a" id="bm-dm">—</div></div>
        <div><div class="mlabel">Contacts</div><div style="font-size:18px;font-weight:800;color:#333" id="bm-co">—</div></div>
        <div><div class="mlabel">Bookings</div><div style="font-size:18px;font-weight:800;color:#333" id="bm-bk">—</div></div>
        <div><div class="mlabel">Shows</div><div style="font-size:18px;font-weight:800;color:#333" id="bm-sh">—</div></div>
        <div><div class="mlabel">Sales</div><div style="font-size:18px;font-weight:800;color:#333" id="bm-sl">—</div></div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">Current Month Metrics</div>
      <div class="gauto" style="margin-bottom:0">
        <div><div class="mlabel">Contact Rate</div><div style="font-size:18px;font-weight:800;color:#333" id="cm-cr">—</div></div>
        <div><div class="mlabel">Booking Rate</div><div style="font-size:18px;font-weight:800;color:#333" id="cm-br">—</div></div>
        <div><div class="mlabel">Show Rate</div><div style="font-size:18px;font-weight:800;color:#333" id="cm-sr">—</div></div>
        <div><div class="mlabel">Close Rate</div><div style="font-size:18px;font-weight:800;color:#333" id="cm-clr">—</div></div>
        <div><div class="mlabel">Sales</div><div style="font-size:18px;font-weight:800;color:#16a34a" id="cm-sl">0</div></div>
      </div>
    </div>
  </div>
  <div id="lweeks"></div>
  <span class="slabel">Monthly Totals by Source</span>
  <div class="g3">
    <div class="card"><div class="card-title">🌱 Organic</div><div id="st-org"></div></div>
    <div class="card"><div class="card-title">📢 PPC</div><div id="st-ppc"></div></div>
    <div class="card"><div class="card-title">📞 Outbound</div><div id="st-out"></div></div>
  </div>
</div>

<!-- SALES -->
<div class="page" id="page-sales">
  <div class="page-header"><h1>Monthly <span>Sales</span></h1><p>Log every sale, track contract values, expenses and monthly profit.</p></div>
  <div class="mtabs" id="sm-tabs"></div>
  <div class="g2" style="margin-bottom:18px">
    <div class="mc y"><div class="mlabel">Contract Value</div><div class="mval" id="s-cv">$0</div><div class="msub">total contracts this month</div></div>
    <div class="mc gr" id="s-profit-card"><div class="mlabel">Monthly Profit</div><div class="mval" id="s-profit">$0</div><div class="msub">after all expenses</div></div>
    <div class="mc"><div class="mlabel">Cash Collected</div><div class="mval" id="s-cash">$0</div></div>
    <div class="mc"><div class="mlabel">Total Expenses</div><div class="mval" id="s-exp">$0</div></div>
  </div>
  <div class="card" style="margin-bottom:18px">
    <div class="card-title">Expenses</div>
    <div class="g2">
      <div><label class="flabel">Recurring Monthly Expenses</label><div style="font-size:20px;font-weight:800;color:#555" id="s-rec-exp">$0</div><p class="tip">From Company Setup</p></div>
      <div><label class="flabel">Misc / One-off Expenses ($)</label><div class="frow"><span class="fpfx">$</span><input class="fi" id="s-misc" type="number" placeholder="0" oninput="cSales()"/></div></div>
    </div>
  </div>
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
    <span class="slabel" style="margin:0">Sales Log</span>
    <button class="btn btnp btns" onclick="addSale()">+ Add Sale</button>
  </div>
  <div class="tw">
    <table>
      <thead><tr><th>Date</th><th>Client Name</th><th>Lead Source</th><th>Product</th><th>Contract Value</th><th>Paid</th><th></th></tr></thead>
      <tbody id="s-tbody"></tbody>
    </table>
  </div>
  <div class="fg" style="margin-top:22px;max-width:320px">
    <label class="flabel">Total Cash Collected This Month ($)</label>
    <div class="frow"><span class="fpfx">$</span><input class="fi" id="s-cashin" type="number" placeholder="0" oninput="cSales()"/></div>
    <p class="tip">Enter total actual payments received</p>
  </div>
</div>

<!-- PAYMENTS -->
<div class="page" id="page-payments">
  <div class="page-header"><h1>Client <span>Payment Tracker</span></h1><p>Track individual payment schedules for each client. Tick Paid In Full once all payments are received.</p></div>
  <div class="mtabs" id="pm-tabs"></div>
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
    <span class="slabel" style="margin:0">Payment Schedule</span>
    <button class="btn btnp btns" onclick="addPayment()">+ Add Client</button>
  </div>
  <div class="tw">
    <table>
      <thead><tr><th>Date</th><th>Client Name</th><th>Contract $</th><th>Pmt 1</th><th>Pmt 2</th><th>Pmt 3</th><th>Pmt 4</th><th>Pmt 5</th><th>Pmt 6</th><th>Total Paid</th><th>Paid In Full</th></tr></thead>
      <tbody id="p-tbody"></tbody>
    </table>
  </div>
</div>

<!-- SUMMARY -->
<div class="page" id="page-summary">
  <div class="page-header"><h1>Yearly <span>Summary</span></h1><p>Review your full year performance across all channels and months.</p></div>
  <span class="slabel" style="margin-top:0">Yearly Totals by Channel</span>
  <div class="g3">
    <div class="card"><div class="card-title">📞 Outbound</div><div id="ys-out"></div></div>
    <div class="card"><div class="card-title">🌱 Organic</div><div id="ys-org"></div></div>
    <div class="card"><div class="card-title">📢 PPC</div><div id="ys-ppc"></div></div>
  </div>
  <span class="slabel">Sales & Revenue by Month</span>
  <div class="tw" style="margin-bottom:22px">
    <table>
      <thead><tr><th>Month</th><th>Sales</th><th>Contract Value</th><th>Cash Collected</th><th>Expenses</th><th>Profit</th><th>Close Rate</th></tr></thead>
      <tbody id="sy-tbody"></tbody>
      <tfoot><tr><td style="font-weight:800;color:#92680a">TOTAL</td><td id="sy-ts"></td><td id="sy-tc"></td><td id="sy-tcc"></td><td id="sy-te"></td><td id="sy-tp"></td><td id="sy-tcr"></td></tr></tfoot>
    </table>
  </div>
  <span class="slabel">Monthly Activity Breakdown</span>
  <div class="tw">
    <table>
      <thead>
        <tr><th rowspan="2">Month</th><th colspan="3">DMs/Calls</th><th colspan="3">Contacts</th><th colspan="3">Bookings</th><th colspan="3">Shows</th><th colspan="3">Sales</th></tr>
        <tr><th>Out</th><th>Org</th><th>PPC</th><th>Out</th><th>Org</th><th>PPC</th><th>Out</th><th>Org</th><th>PPC</th><th>Out</th><th>Org</th><th>PPC</th><th>Out</th><th>Org</th><th>PPC</th></tr>
      </thead>
      <tbody id="sa-tbody"></tbody>
    </table>
  </div>
</div>

<script>
const MONTHS=['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const WD_KEYS=['mon','tue','wed','thu','fri','sat','sun'];
let S={company:'',owner:'',workDays:{mon:true,tue:true,wed:true,thu:true,fri:true,sat:false,sun:false},products:['1on1 Coaching','Group Program'],expenses:[{name:'Internet',amount:0},{name:'Advertising',amount:0}],leads:{},sales:{},salesMisc:{},salesCash:{},payments:{},clm:0,csm:0,cpm:0};
function save(){localStorage.setItem('rrt-light',JSON.stringify(S));}
function load(){try{const d=localStorage.getItem('rrt-light')||localStorage.getItem('rrt2');if(d)S=JSON.parse(d);}catch(e){}}
function gp(id,btn){document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.querySelectorAll('.nav-tab').forEach(t=>t.classList.remove('active'));document.getElementById('page-'+id).classList.add('active');btn.classList.add('active');if(id==='summary')rSummary();}
function fN(n,dec){if(!isFinite(n))return '0';if(dec!==undefined)return parseFloat(n).toFixed(dec);return Math.round(n).toLocaleString('en-AU');}
function fD(n){const a=Math.abs(n);return (n<0?'-$':'$')+fN(a);}
function init(){
  load();
  const wg=document.getElementById('wd-grid');
  wg.innerHTML=DAYS.map((d,i)=>{const k=WD_KEYS[i];return `<div class="cbw" onclick="tDay('${k}')"><div class="cbb ${S.workDays[k]?'on':''}" id="cb-${k}"><svg class="cbk" viewBox="0 0 9 7" fill="none"><path d="M1 3.5L3.5 6L8 1" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span style="font-size:13px;color:#444">${d}</span></div>`;}).join('');
  document.getElementById('cname').value=S.company||'';
  document.getElementById('oname').value=S.owner||'';
  rProds();rExps();buildMTabs();cT();rLeads();rSales();rPayments();
}
function tDay(k){S.workDays[k]=!S.workDays[k];document.getElementById('cb-'+k).classList.toggle('on',S.workDays[k]);save();}
function rProds(){document.getElementById('prod-list').innerHTML=S.products.map((p,i)=>`<div style="display:flex;gap:8px;margin-bottom:10px"><input class="fi" value="${p}" oninput="S.products[${i}]=this.value;save()" style="flex:1"/><button class="btn btns" onclick="S.products.splice(${i},1);rProds();save()" style="color:#dc2626;border-color:#fca5a5">✕</button></div>`).join('');}
function addProd(){S.products.push('');rProds();save();}
function rExps(){document.getElementById('exp-list').innerHTML=S.expenses.map((e,i)=>`<div style="display:flex;gap:8px;margin-bottom:10px;align-items:center"><input class="fi" value="${e.name}" oninput="S.expenses[${i}].name=this.value;save()" style="flex:2" placeholder="Expense name"/><div class="frow" style="flex:1"><span class="fpfx">$</span><input class="fi" type="number" value="${e.amount||''}" oninput="S.expenses[${i}].amount=parseFloat(this.value)||0;uTE();save()" placeholder="0"/></div><button class="btn btns" onclick="S.expenses.splice(${i},1);rExps();save()" style="color:#dc2626;border-color:#fca5a5">✕</button></div>`).join('');uTE();}
function addExp(){S.expenses.push({name:'',amount:0});rExps();save();}
function uTE(){const t=S.expenses.reduce((s,e)=>s+(e.amount||0),0);document.getElementById('tot-exp').textContent='$'+fN(t);}
function getTotExp(){return S.expenses.reduce((s,e)=>s+(e.amount||0),0);}
function cT(){
  const cr=parseFloat(document.getElementById('tc').value)/100||0.05;
  const br=parseFloat(document.getElementById('tb').value)/100||0.3;
  const sr=parseFloat(document.getElementById('ts').value)/100||0.5;
  const cl=parseFloat(document.getElementById('tcl').value)/100||0.3;
  const sg=parseFloat(document.getElementById('tsg').value)||3;
  const wd=parseFloat(document.getElementById('twd').value)||23;
  const pc=parseFloat(document.getElementById('tpc').value)||7000;
  const sh=sg/cl,bk=sh/sr,co=bk/br,dm=co/cr,rev=sg*pc;
  document.getElementById('trev').textContent='$'+fN(rev);
  document.getElementById('tr-dm').textContent=fN(dm);document.getElementById('tr-co').textContent=fN(co);document.getElementById('tr-bk').textContent=fN(bk);document.getElementById('tr-sh').textContent=fN(sh);document.getElementById('tr-sl').textContent=fN(sg);
  document.getElementById('td-dm').textContent=(dm/wd).toFixed(1);document.getElementById('td-co').textContent=(co/wd).toFixed(1);document.getElementById('td-bk').textContent=(bk/wd).toFixed(2);document.getElementById('td-sh').textContent=(sh/wd).toFixed(2);
  document.getElementById('bm-dm').textContent=fN(dm);document.getElementById('bm-co').textContent=fN(co);document.getElementById('bm-bk').textContent=fN(bk);document.getElementById('bm-sh').textContent=fN(sh);document.getElementById('bm-sl').textContent=fN(sg);
}
function cP(){
  const s=parseFloat(document.getElementById('ps').value)||0,c=parseFloat(document.getElementById('pc').value)||0,cpl=parseFloat(document.getElementById('pcpl').value)||0,m=parseFloat(document.getElementById('pm').value)||0,a=parseFloat(document.getElementById('pas').value)||0;
  const ld=c>0?s/(c/100):0,ac=ld*cpl,ts=ac+m,rev=s*a,rp=ts>0?((rev-ts)/ts)*100:0,rd=rev-ts,has=s>0&&c>0&&cpl>0&&a>0;
  document.getElementById('pl').textContent=ld>0?Math.ceil(ld).toLocaleString():'—';
  document.getElementById('pac').textContent=ac>0?'$'+ac.toFixed(2):'—';
  document.getElementById('pts').textContent=ts>0?'$'+ts.toFixed(2):'—';
  document.getElementById('prev').textContent=has?'$'+fN(rev):'$—';
  document.getElementById('ppct').textContent=has?rp.toFixed(1)+'%':'—';
  document.getElementById('pdol').textContent=has?fD(rd):'$—';
  const pc2=document.getElementById('pcard-pct'),dc=document.getElementById('pcard-d');
  if(has){
    if(rp>100){pc2.className='mc y';dc.className='mc y';document.getElementById('ppct-sub').textContent='strong return';document.getElementById('pdol-sub').textContent='profit after spend';}
    else if(rp>0){pc2.className='mc';dc.className='mc';document.getElementById('ppct-sub').textContent='positive but slim';document.getElementById('pdol-sub').textContent='profit after spend';}
    else{pc2.className='mc re';dc.className='mc re';document.getElementById('ppct-sub').textContent='running at a loss';document.getElementById('pdol-sub').textContent='loss after spend';}
    const tip=document.getElementById('ptip'),tt=document.getElementById('ptip-t');tip.style.display='block';
    if(rp>=300)tt.innerHTML='<strong>Exceptional ROI.</strong> At '+rp.toFixed(1)+'% return — consider scaling your budget.';
    else if(rp>=100)tt.innerHTML='<strong>Solid ROI.</strong> Making '+fD(rd)+' profit after '+fD(ts)+' spend. Every $1 returns $'+(rev/ts).toFixed(2)+'.';
    else if(rp>0)tt.innerHTML='<strong>Marginal return.</strong> Profitable but slim — raise avg. sale price or reduce cost per lead to improve.';
    else{const sn=Math.ceil(ts/a);tt.innerHTML='<strong>Currently loss-making.</strong> Need <strong>'+sn+' sales</strong> (vs target of '+s+') to break even.';}
  } else {document.getElementById('ptip').style.display='none';}
}
function buildMTabs(){['lm','sm','pm'].forEach(prefix=>{const el=document.getElementById(prefix+'-tabs');el.innerHTML=MONTHS.map((m,i)=>`<button class="mtab ${i===0?'active':''}" onclick="swM('${prefix}',${i},this)">${m.slice(0,3)}</button>`).join('');});}
function swM(p,i,btn){btn.closest('.mtabs').querySelectorAll('.mtab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');if(p==='lm'){S.clm=i;rLeads();}if(p==='sm'){S.csm=i;rSales();}if(p==='pm'){S.cpm=i;rPayments();}}
const LFIELDS=['out_dms','org_dms','ppc_dms','out_con','org_con','ppc_con','out_bk','org_bk','ppc_bk','out_sh','org_sh','ppc_sh','out_no','org_no','ppc_no','out_sl','org_sl','ppc_sl'];
function gLW(mi,wi){if(!S.leads[mi])S.leads[mi]={};if(!S.leads[mi][wi]){S.leads[mi][wi]={};DAYS.forEach((_,di)=>{S.leads[mi][wi][di]={};LFIELDS.forEach(f=>S.leads[mi][wi][di][f]=0);});}return S.leads[mi][wi];}
function gMT(mi){const t={};LFIELDS.forEach(f=>t[f]=0);for(let wi=0;wi<5;wi++){const w=gLW(mi,wi);DAYS.forEach((_,di)=>LFIELDS.forEach(f=>t[f]+=(w[di][f]||0)));}return t;}
function rLeads(){
  const mi=S.clm;const con=document.getElementById('lweeks');con.innerHTML='';
  for(let wi=0;wi<5;wi++){
    const w=gLW(mi,wi);const d=document.createElement('div');
    d.innerHTML=`<div class="wh"><h3>WEEK ${wi+1}</h3></div><div class="tw" style="margin-bottom:18px"><table>
      <thead><tr><th rowspan="2" style="min-width:65px">Day</th><th colspan="3">DMs/Calls</th><th colspan="3">Contacts</th><th colspan="3">Bookings</th><th colspan="3">Shows</th><th colspan="3">No Shows</th><th colspan="3">Sales</th></tr>
      <tr>${['Out','Org','PPC','Out','Org','PPC','Out','Org','PPC','Out','Org','PPC','Out','Org','PPC','Out','Org','PPC'].map(s=>`<th style="font-size:9px">${s}</th>`).join('')}</tr></thead>
      <tbody>${DAYS.map((day,di)=>`<tr><td style="font-size:12px;font-weight:700;color:#555;white-space:nowrap;background:#fafaf8">${day.slice(0,3)}</td>${LFIELDS.map(f=>`<td style="padding:7px 10px"><input class="ti" type="number" value="${w[di][f]||''}" placeholder="0" oninput="sLV(${mi},${wi},${di},'${f}',this.value)" min="0"/></td>`).join('')}</tr>`).join('')}</tbody>
      <tfoot><tr class="wtr"><td style="font-size:10px;font-weight:800;color:#92680a;letter-spacing:0.05em">TOTALS</td>${LFIELDS.map((_,i)=>`<td id="wt-${mi}-${wi}-${i}">0</td>`).join('')}</tr></tfoot>
    </table></div>`;
    con.appendChild(d);uWT(mi,wi);
  }
  uLM(mi);uST(mi);
}
function sLV(mi,wi,di,f,v){const w=gLW(mi,wi);w[di][f]=parseFloat(v)||0;save();uWT(mi,wi);uLM(mi);uST(mi);}
function uWT(mi,wi){const w=gLW(mi,wi);LFIELDS.forEach((f,i)=>{const tot=DAYS.reduce((_,__,di)=>_+(w[di][f]||0),0);const el=document.getElementById(`wt-${mi}-${wi}-${i}`);if(el)el.textContent=tot||0;});}
function uLM(mi){const t=gMT(mi);const tdm=t.out_dms+t.org_dms+t.ppc_dms,tco=t.out_con+t.org_con+t.ppc_con,tbk=t.out_bk+t.org_bk+t.ppc_bk,tsh=t.out_sh+t.org_sh+t.ppc_sh,tsl=t.out_sl+t.org_sl+t.ppc_sl;document.getElementById('cm-cr').textContent=tdm>0?(tco/tdm*100).toFixed(1)+'%':'—';document.getElementById('cm-br').textContent=tco>0?(tbk/tco*100).toFixed(1)+'%':'—';document.getElementById('cm-sr').textContent=tbk>0?(tsh/tbk*100).toFixed(1)+'%':'—';document.getElementById('cm-clr').textContent=tsh>0?(tsl/tsh*100).toFixed(1)+'%':'—';document.getElementById('cm-sl').textContent=tsl;}
function uST(mi){const t=gMT(mi);const metrics=[{l:'DMs/Calls',out:'out_dms',org:'org_dms',ppc:'ppc_dms'},{l:'Contacts',out:'out_con',org:'org_con',ppc:'ppc_con'},{l:'Bookings',out:'out_bk',org:'org_bk',ppc:'ppc_bk'},{l:'Shows',out:'out_sh',org:'org_sh',ppc:'ppc_sh'},{l:'No Shows',out:'out_no',org:'org_no',ppc:'ppc_no'},{l:'Sales',out:'out_sl',org:'org_sl',ppc:'ppc_sl'}];['org','ppc','out'].forEach(src=>{document.getElementById('st-'+src).innerHTML=metrics.map(m=>`<div class="stat-row"><span>${m.l}</span><span>${t[m[src]]||0}</span></div>`).join('');});}
function gSM(mi){if(!S.sales[mi])S.sales[mi]=[];return S.sales[mi];}
function rSales(){
  const mi=S.csm;const sales=gSM(mi);const tbody=document.getElementById('s-tbody');tbody.innerHTML='';
  sales.forEach((sale,i)=>{
    const tr=document.createElement('tr');if(sale.paid)tr.classList.add('pr');
    tr.innerHTML=`<td><input class="ti" type="date" value="${sale.date||''}" oninput="sSale(${mi},${i},'date',this.value)"/></td><td><input class="ti" value="${sale.name||''}" placeholder="Client name" oninput="sSale(${mi},${i},'name',this.value)"/></td><td><select class="ti" oninput="sSale(${mi},${i},'source',this.value)">${['Organic','Outbound','PPC'].map(s=>`<option ${sale.source===s?'selected':''}>${s}</option>`).join('')}</select></td><td><select class="ti" oninput="sSale(${mi},${i},'product',this.value)">${S.products.map(p=>`<option ${sale.product===p?'selected':''}>${p}</option>`).join('')}</select></td><td><div class="frow"><span style="color:#bbb;font-size:12px">$</span><input class="ti" type="number" value="${sale.value||''}" placeholder="0" oninput="sSale(${mi},${i},'value',parseFloat(this.value)||0)"/></div></td><td><div class="cbw" onclick="tSP(${mi},${i})"><div class="cbb ${sale.paid?'on':''}" id="scb-${mi}-${i}"><svg class="cbk" viewBox="0 0 9 7" fill="none"><path d="M1 3.5L3.5 6L8 1" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span style="font-size:12px;color:${sale.paid?'#16a34a':'#aaa'}">${sale.paid?'Paid':'Unpaid'}</span></div></td><td><button class="btn btns" onclick="rmSale(${mi},${i})" style="color:#dc2626;border-color:#fca5a5;font-size:11px">Remove</button></td>`;
    tbody.appendChild(tr);
  });
  cSales();
}
function sSale(mi,i,f,v){gSM(mi)[i][f]=v;save();cSales();}
function tSP(mi,i){S.sales[mi][i].paid=!S.sales[mi][i].paid;save();rSales();}
function addSale(){const mi=S.csm;gSM(mi).push({date:'',name:'',source:'Organic',product:S.products[0]||'',value:0,paid:false});save();rSales();}
function rmSale(mi,i){S.sales[mi].splice(i,1);save();rSales();}
function cSales(){
  const mi=S.csm;const sales=gSM(mi);const cv=sales.reduce((s,r)=>s+(r.value||0),0);
  const misc=parseFloat(document.getElementById('s-misc').value)||S.salesMisc[mi]||0;const cash=parseFloat(document.getElementById('s-cashin').value)||S.salesCash[mi]||0;
  S.salesMisc[mi]=misc;S.salesCash[mi]=cash;
  if(!document.getElementById('s-misc').matches(':focus'))document.getElementById('s-misc').value=misc||'';
  if(!document.getElementById('s-cashin').matches(':focus'))document.getElementById('s-cashin').value=cash||'';
  const re=getTotExp(),te=re+misc,profit=cv-te;
  document.getElementById('s-cv').textContent='$'+fN(cv);document.getElementById('s-rec-exp').textContent='$'+fN(re);document.getElementById('s-exp').textContent='$'+fN(te);document.getElementById('s-cash').textContent='$'+fN(cash);document.getElementById('s-profit').textContent=fD(profit);document.getElementById('s-profit-card').className='mc '+(profit>=0?'gr':'re');save();
}
function gPM(mi){if(!S.payments[mi])S.payments[mi]=[];return S.payments[mi];}
function rPayments(){
  const mi=S.cpm;const pmts=gPM(mi);const tbody=document.getElementById('p-tbody');tbody.innerHTML='';
  pmts.forEach((row,i)=>{
    if(!row.pmts)row.pmts=Array(6).fill(0).map(()=>({amount:''}));while(row.pmts.length<6)row.pmts.push({amount:''});
    const tot=row.pmts.reduce((s,p)=>s+(parseFloat(p.amount)||0),0);const tr=document.createElement('tr');if(row.paidFull)tr.classList.add('pr');
    tr.innerHTML=`<td><input class="ti" type="date" value="${row.date||''}" oninput="sP(${mi},${i},'date',this.value)"/></td><td><input class="ti" value="${row.name||''}" placeholder="Client name" oninput="sP(${mi},${i},'name',this.value)" style="min-width:110px"/></td><td><div class="frow"><span style="color:#bbb;font-size:11px">$</span><input class="ti" type="number" value="${row.contract||''}" placeholder="0" oninput="sP(${mi},${i},'contract',parseFloat(this.value)||0)"/></div></td>${row.pmts.slice(0,6).map((p,pi)=>`<td><div class="frow"><span style="color:#bbb;font-size:11px">$</span><input class="ti" type="number" value="${p.amount||''}" placeholder="0" style="min-width:50px" oninput="sPa(${mi},${i},${pi},this.value)"/></div></td>`).join('')}<td style="font-weight:800;color:#92680a">$${fN(tot)}</td><td><div class="cbw" onclick="tPF(${mi},${i})"><div class="cbb ${row.paidFull?'on':''}" id="pcb-${mi}-${i}"><svg class="cbk" viewBox="0 0 9 7" fill="none"><path d="M1 3.5L3.5 6L8 1" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span style="font-size:12px;color:${row.paidFull?'#16a34a':'#aaa'}">${row.paidFull?'Paid':'Pending'}</span></div></td>`;
    tbody.appendChild(tr);
  });
}
function sP(mi,i,f,v){gPM(mi)[i][f]=v;save();}
function sPa(mi,i,pi,v){gPM(mi)[i].pmts[pi].amount=v;save();rPayments();}
function tPF(mi,i){gPM(mi)[i].paidFull=!gPM(mi)[i].paidFull;save();rPayments();}
function addPayment(){const mi=S.cpm;gPM(mi).push({date:'',name:'',contract:0,pmts:Array(6).fill(0).map(()=>({amount:''})),paidFull:false});save();rPayments();}
function rSummary(){
  const yt={out:{dm:0,co:0,bk:0,sh:0,sl:0},org:{dm:0,co:0,bk:0,sh:0,sl:0},ppc:{dm:0,co:0,bk:0,sh:0,sl:0}};
  for(let mi=0;mi<12;mi++){const t=gMT(mi);yt.out.dm+=t.out_dms;yt.out.co+=t.out_con;yt.out.bk+=t.out_bk;yt.out.sh+=t.out_sh;yt.out.sl+=t.out_sl;yt.org.dm+=t.org_dms;yt.org.co+=t.org_con;yt.org.bk+=t.org_bk;yt.org.sh+=t.org_sh;yt.org.sl+=t.org_sl;yt.ppc.dm+=t.ppc_dms;yt.ppc.co+=t.ppc_con;yt.ppc.bk+=t.ppc_bk;yt.ppc.sh+=t.ppc_sh;yt.ppc.sl+=t.ppc_sl;}
  ['out','org','ppc'].forEach(src=>{const d=yt[src];const cr=d.dm>0?(d.co/d.dm*100).toFixed(1)+'%':'—';const br=d.co>0?(d.bk/d.co*100).toFixed(1)+'%':'—';const sr=d.bk>0?(d.sh/d.bk*100).toFixed(1)+'%':'—';const clr=d.sh>0?(d.sl/d.sh*100).toFixed(1)+'%':'—';document.getElementById('ys-'+src).innerHTML=[['DMs/Calls',d.dm],['Contacts',d.co],['Bookings',d.bk],['Shows',d.sh],['Sales',d.sl,true],['Contact Rate',cr],['Booking Rate',br],['Show Rate',sr],['Close Rate',clr]].map(([l,v,hi])=>`<div class="stat-row"><span>${l}</span><span style="color:${hi?'#92680a':'#333'}">${v}</span></div>`).join('');});
  const sy=document.getElementById('sy-tbody');sy.innerHTML='';let ts=0,tc=0,tcc=0,te=0,tp=0,tSh=0,tSl=0;
  MONTHS.forEach((m,mi)=>{const t=gMT(mi);const sales=gSM(mi);const sl=t.out_sl+t.org_sl+t.ppc_sl,sh=t.out_sh+t.org_sh+t.ppc_sh;const cv=sales.reduce((s,r)=>s+(r.value||0),0);const misc=S.salesMisc[mi]||0,cash=S.salesCash[mi]||0;const exp=getTotExp()+misc,profit=cv-exp;ts+=sl;tc+=cv;tcc+=cash;te+=exp;tp+=profit;tSh+=sh;tSl+=sl;const pc=profit>=0?'#16a34a':'#dc2626';sy.innerHTML+=`<tr><td style="font-weight:600;color:#333">${m}</td><td>${sl||'—'}</td><td>$${fN(cv)}</td><td>$${fN(cash)}</td><td>$${fN(exp)}</td><td style="color:${pc};font-weight:700">${fD(profit)}</td><td>${sh>0?(sl/sh*100).toFixed(1)+'%':'—'}</td></tr>`;});
  document.getElementById('sy-ts').textContent=ts;document.getElementById('sy-tc').textContent='$'+fN(tc);document.getElementById('sy-tcc').textContent='$'+fN(tcc);document.getElementById('sy-te').textContent='$'+fN(te);const tpEl=document.getElementById('sy-tp');tpEl.textContent=fD(tp);tpEl.style.color=tp>=0?'#16a34a':'#dc2626';document.getElementById('sy-tcr').textContent=tSh>0?(tSl/tSh*100).toFixed(1)+'%':'—';
  const sa=document.getElementById('sa-tbody');sa.innerHTML='';MONTHS.forEach((m,mi)=>{const t=gMT(mi);sa.innerHTML+=`<tr><td style="font-weight:600;color:#333;white-space:nowrap">${m}</td><td>${t.out_dms||0}</td><td>${t.org_dms||0}</td><td>${t.ppc_dms||0}</td><td>${t.out_con||0}</td><td>${t.org_con||0}</td><td>${t.ppc_con||0}</td><td>${t.out_bk||0}</td><td>${t.org_bk||0}</td><td>${t.ppc_bk||0}</td><td>${t.out_sh||0}</td><td>${t.org_sh||0}</td><td>${t.ppc_sh||0}</td><td>${t.out_sl||0}</td><td>${t.org_sl||0}</td><td>${t.ppc_sl||0}</td></tr>`;});
}
init();
</script>
</body>
</html>

