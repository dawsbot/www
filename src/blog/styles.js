// Shared "zebra" brutalist styles for the blog index and individual posts.
// Mirrors the design language of the homepage (src/components/Index/IndexIndex.js).
export const blogCss = `
.zb, .zb *, .zb *::before, .zb *::after { box-sizing: border-box; }
.zb {
  --ink:#0e0e0e; --paper:#ffffff; --lime:#c4f000; --gray:#6b6b6b; --line:#e6e6e6;
  --hf:'Archivo','Helvetica Neue',Arial,sans-serif;
  --bf:'Hanken Grotesk','Helvetica Neue',Arial,sans-serif;
  --stripe:repeating-linear-gradient(135deg,#0e0e0e 0,#0e0e0e 14px,#ffffff 14px,#ffffff 28px);
  overflow-x:clip;
  color:var(--ink);
}
.zb .wrap { max-width:1140px; margin:0 auto; padding:0 24px; }
.zb .wrap-narrow { max-width:760px; margin:0 auto; padding:0 24px; }

/* striped divider */
.zb .divider {
  height:30px; background:var(--stripe);
  border-top:2px solid var(--ink); border-bottom:2px solid var(--ink);
  animation:zb-slide 6s linear infinite;
}
@keyframes zb-slide { from { background-position:0 0; } to { background-position:396px 0; } }

/* bands */
.zb .band-dark { background:var(--ink); color:var(--paper); padding:88px 0; }
.zb .band-light { background:var(--paper); color:var(--ink); padding:88px 0; }

/* headers */
.zb .eyebrow {
  display:inline-flex; align-items:center; gap:12px;
  font-family:var(--hf); font-weight:700; font-size:12px;
  letter-spacing:2.6px; text-transform:uppercase;
}
.zb .eyebrow::before {
  content:""; width:14px; height:14px; flex:none;
  background:var(--lime); border:2px solid var(--ink);
}
.zb .band-dark .eyebrow::before { border-color:var(--lime); }
.zb .page-title {
  font-family:var(--hf); font-weight:900;
  font-size:clamp(52px,8.5vw,110px); line-height:0.9;
  letter-spacing:-0.022em; text-transform:uppercase; margin:22px 0 0;
}
.zb .page-intro { max-width:560px; margin:20px 0 0; font-size:16px; line-height:1.6; color:var(--gray); }

/* index list */
.zb .post-grid {
  display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
  gap:2px; background:var(--ink); border:2px solid var(--ink); margin-top:44px;
}
.zb .post-card {
  position:relative; display:flex; flex-direction:column; overflow:hidden;
  background:var(--paper); color:var(--ink); text-decoration:none;
  padding:34px 26px 28px;
  transition:background .18s ease, color .18s ease;
}
.zb .post-num {
  position:absolute; top:4px; right:16px;
  font-family:var(--hf); font-weight:900; font-size:74px; line-height:1;
  color:var(--line); user-select:none; transition:color .18s ease;
}
.zb .post-date {
  position:relative; font-family:var(--hf); font-weight:700; font-size:11.5px;
  letter-spacing:1.6px; text-transform:uppercase; color:var(--gray);
  margin:0 0 12px; transition:color .18s ease;
}
.zb .post-card-title {
  position:relative; font-family:var(--hf); font-weight:800;
  font-size:23px; line-height:1.15; letter-spacing:0.3px;
  text-transform:uppercase; margin:0 0 12px;
}
.zb .post-card-desc {
  position:relative; font-size:14px; line-height:1.62;
  color:var(--gray); margin:0 0 20px; transition:color .18s ease;
}
.zb .post-read {
  position:relative; margin-top:auto; display:inline-flex; align-items:center; gap:6px;
  font-family:var(--hf); font-weight:700; font-size:12px; letter-spacing:1.6px;
  text-transform:uppercase; background:var(--ink); color:var(--paper); padding:6px 12px;
  align-self:flex-start; transition:background .18s ease, color .18s ease;
}
.zb .post-card::after {
  content:""; position:absolute; right:0; bottom:0; width:46px; height:46px;
  background:var(--stripe); clip-path:polygon(100% 0,100% 100%,0 100%);
  opacity:0; transition:opacity .18s ease;
}
.zb .post-card:hover { background:var(--ink); color:var(--paper); }
.zb .post-card:hover .post-card-desc { color:#c4c4c4; }
.zb .post-card:hover .post-date { color:var(--lime); }
.zb .post-card:hover .post-num { color:var(--lime); }
.zb .post-card:hover .post-read { background:var(--lime); color:var(--ink); }
.zb .post-card:hover::after { opacity:1; }

.zb .empty {
  margin-top:44px; border:2px dashed var(--line); padding:40px;
  font-size:16px; color:var(--gray);
}

/* post header */
.zb .post-head { padding:72px 0 64px; }
.zb .post-meta {
  display:flex; flex-wrap:wrap; align-items:center; gap:10px;
  margin-top:26px; font-family:var(--hf); font-weight:700; font-size:11.5px;
  letter-spacing:1.6px; text-transform:uppercase; color:#bdbdbd;
}
.zb .post-meta .sep { color:var(--lime); }
.zb .post-title {
  font-family:var(--hf); font-weight:900;
  font-size:clamp(38px,6.2vw,78px); line-height:0.94;
  letter-spacing:-0.02em; text-transform:uppercase; margin:22px 0 0;
}
.zb .post-standfirst {
  max-width:640px; margin:24px 0 0; font-size:18px; line-height:1.62; color:#d6d6d6;
}

/* article body */
.zb .article { padding:76px 0 88px; }
.zb .article p { font-size:17.5px; line-height:1.75; margin:0 0 24px; }
.zb .article p a { color:var(--ink); font-weight:600; box-shadow:inset 0 -8px 0 var(--lime); text-decoration:none; }
.zb .article p a:hover { box-shadow:inset 0 -20px 0 var(--lime); }
/* model names linked to their announcement posts */
.zb .article a.model { font-weight:700; }
.zb .article a.model::after {
  content:"\\2197"; margin-left:2px; font-size:0.68em;
  vertical-align:super; opacity:0.5; font-weight:700;
}
.zb .article a.model:hover::after { opacity:1; }
.zb .article h2 {
  font-family:var(--hf); font-weight:900; font-size:clamp(26px,4vw,38px);
  line-height:1.05; letter-spacing:-0.01em; text-transform:uppercase;
  margin:56px 0 20px; padding-top:22px; border-top:2px solid var(--ink);
}
.zb .article h2:first-child { margin-top:0; }
.zb .article strong { font-weight:700; box-shadow:inset 0 -8px 0 var(--lime); }
.zb .article ul { margin:0 0 24px; padding:0; list-style:none; }
.zb .article ul li {
  position:relative; padding-left:26px; margin-bottom:12px;
  font-size:17px; line-height:1.65;
}
.zb .article ul li::before {
  content:""; position:absolute; left:0; top:9px;
  width:11px; height:11px; background:var(--lime); border:2px solid var(--ink);
}
.zb .pull {
  margin:44px 0; padding:28px 30px; background:var(--ink); color:var(--paper);
  box-shadow:10px 10px 0 var(--lime);
  font-family:var(--hf); font-weight:800; font-size:clamp(19px,2.6vw,25px);
  line-height:1.3; letter-spacing:-0.01em;
}

/* model table */
.zb .table-scroll { overflow-x:auto; margin:0 0 28px; border:2px solid var(--ink); }
.zb table { width:100%; border-collapse:collapse; font-size:15px; min-width:460px; }
.zb thead th {
  background:var(--ink); color:var(--paper); text-align:left;
  font-family:var(--hf); font-weight:800; font-size:11.5px;
  letter-spacing:1.6px; text-transform:uppercase; padding:12px 16px;
}
.zb tbody td { padding:13px 16px; border-top:2px solid var(--line); }
.zb tbody tr:first-child td { border-top:none; }
.zb tbody td:first-child { font-family:'SFMono-Regular',Menlo,Consolas,monospace; font-size:13.5px; }
.zb tbody td a {
  color:var(--ink); text-decoration:none;
  box-shadow:inset 0 -6px 0 var(--lime);
  transition:box-shadow .15s ease;
}
.zb tbody td a:hover { box-shadow:inset 0 -16px 0 var(--lime); }
.zb tbody td.num { font-family:var(--hf); font-weight:700; white-space:nowrap; }

/* footer nav */
.zb .post-foot { border-top:2px solid var(--ink); padding:34px 0 64px; }
.zb .btn-ghost {
  display:inline-flex; align-items:center; gap:8px;
  font-family:var(--hf); font-weight:700; font-size:12.5px;
  letter-spacing:1.8px; text-transform:uppercase;
  color:var(--ink); text-decoration:none;
  border-bottom:3px solid var(--ink); padding-bottom:3px;
  transition:color .15s ease, border-color .15s ease;
}
.zb .btn-ghost:hover { color:var(--gray); border-color:var(--lime); }

/* entrance */
.zb .reveal { opacity:0; transform:translateY(20px); animation:zb-reveal .7s cubic-bezier(.2,.7,.2,1) forwards; }
@keyframes zb-reveal { to { opacity:1; transform:translateY(0); } }

@media (max-width:560px) {
  .zb .band-dark, .zb .band-light { padding:60px 0; }
  .zb .post-head { padding:48px 0 44px; }
  .zb .article { padding:52px 0 60px; }
  .zb .post-grid { grid-template-columns:1fr; }
  .zb .pull { box-shadow:6px 6px 0 var(--lime); padding:22px; }
}
@media (prefers-reduced-motion:reduce) {
  .zb .reveal { animation:none; opacity:1; transform:none; }
  .zb .divider { animation:none; }
}
`;
