!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Stone Hill Ridge // Case File</title>
    <meta
      name="description"
      content="Restricted internal investigation portal for Stone Hill Ridge, the quarantined town and the disappearance of Detective John."
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="access-overlay" id="accessOverlay">
      <div class="access-panel">
        <div class="access-topline">INTERNAL ACCESS</div>
        <h1>STONE HILL RIDGE</h1>
        <p>
          DETECTIVE JOHN // STATUS: MISSING IN QUARANTINE ZONE. ENTER THE CONFIRMATION CODE TO ACCESS CASE FILES.
        </p>

        <form id="passwordForm" class="password-form" autocomplete="off">
          <label for="password">CONFIRMATION CODE</label>
          <input id="password" type="password" maxlength="4" inputmode="numeric" placeholder="8 4 2 1" />
          <button type="submit">ACCESS FILES</button>
        </form>

        <p id="lockdownTimer" class="lockdown-timer" aria-live="polite"></p>
        <p id="errorMessage" class="error-message">ACCESS DENIED.</p>
      </div>
    </div>

    <div class="site-shell" id="siteShell">
      <div class="scanlines"></div>

      <header class="topbar">
        <div class="container topbar-inner">
          <div class="brand">
            <div class="brand-mark">DRA</div>
            <div>
              <p class="eyebrow">Department of Red Range Alerts</p>
              <h1>STONE HILL RIDGE</h1>
            </div>
          </div>

          <nav class="main-nav" aria-label="Main navigation">
            <a href="#overview">Overview</a>
            <a href="#reports">Reports</a>
            <a href="#personnel">Personnel</a>
            <a href="#intel">Intel</a>
            <a href="#data">Data</a>
          </nav>

          <div class="status-pill">
            <span class="dot"></span>
            LOCKDOWN ZONE
          </div>
        </div>
      </header>

      <main id="overview">
        <section class="hero">
          <div class="container hero-grid">
            <div class="hero-copy">
              <p class="tag">D.R.R.A. // DEPARTMENT OF RED RANGE ALERTS // FIELD BRIEFING NO. 17</p>
              <h2>THE FREEZING HAS ENTERED STONE HILL RIDGE.</h2>
              <p>
                Stone Hill Ridge is a sealed municipal district currently operating under emergency quarantine after a rapid and unexplained outbreak of the condition classified as The Freezing. Civil movement is restricted, communications are monitored, and all active investigation remains under federal oversight due to the unresolved disappearance of Detective John Mercer.
              </p>

              <div class="hero-actions">
                <button class="btn btn-primary" id="lockdownButton" type="button">LOCKDOWN ACTIVE</button>
                <a class="btn btn-secondary" href="#intel">VIEW INTEL</a>
              </div>

              <ul class="hero-points">
                <li>Quarantine enforcement remains active across all residential sectors</li>
                <li>Field operators report severe cold-related degeneration and neurological collapse</li>
                <li>Detective John Mercer was last observed entering the archive district before signal loss</li>
              </ul>

              <div class="disclaimer">
                D.R.R.A. NOTICE: THIS FILE CONTAINS RESTRICTED INTEL. UNAUTHORIZED DISCLOSURE, REPRODUCTION, OR LEAKING OF ANY INFORMATION IS PROHIBITED UNDER FEDERAL REGULATION.
              </div>
            </div>

            <div class="hero-panel">
              <div class="panel-card">
                <p class="panel-label">CURRENT STATUS</p>
                <h3>LOCKDOWN</h3>
                <div class="readout">
                  <div>
                    <span>Population</span>
                    <strong>1,420</strong>
                  </div>
                  <div>
                    <span>Casualties</span>
                    <strong>318</strong>
                  </div>
                  <div>
                    <span>Missing</span>
                    <strong>27</strong>
                  </div>
                  <div>
                    <span>Detective John</span>
                    <strong>STATUS: MISSING</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="stats">
          <div class="container stats-grid">
            <div class="stat-box">
              <strong>318</strong>
              <span>Casualties</span>
            </div>
            <div class="stat-box">
              <strong>27</strong>
              <span>Missing</span>
            </div>
            <div class="stat-box">
              <strong>14</strong>
              <span>Quarantine Days</span>
            </div>
            <div class="stat-box">
              <strong>01</strong>
              <span>Unresolved Lead</span>
            </div>
          </div>
        </section>

        <section id="reports" class="section about">
          <div class="container split-layout">
            <div>
              <p class="section-tag">OPERATIONS SUMMARY</p>
              <h3>OFFICIAL RESPONSE TO A DEGRADING COMMUNITY EVENT.</h3>
            </div>
            <div>
              <p>
                Following repeated reports of sudden cold exposure, neurological inability, and localized collapses, Stone Hill Ridge was placed under emergency containment. Residents were confined to sector blocks, municipal transit ceased, and all access to the eastern archive corridor was suspended. A number of infection clusters align with former service tunnels and storage depots, suggesting the incident is not isolated to the public health sphere but also to internal administrative disruption.
              </p>
            </div>
          </div>
        </section>

        <section class="section services">
          <div class="container">
            <div class="section-heading">
              <p class="section-tag">CASE FILES</p>
              <h3>INCIDENT REPORTS AND FIELD DOCUMENTS.</h3>
            </div>

            <div class="card-grid">
              <article class="service-card">
                <div class="icon">01</div>
                <h4>Q-17 / Lockdown Directive</h4>
                <p>Emergency quarantine enacted after multiple concurrent failures in municipal response infrastructure and public communication.</p>
              </article>
              <article class="service-card">
                <div class="icon">02</div>
                <h4>Medical Failure Index</h4>
                <p>Symptoms show marked hypothermia, central nervous impairment, and irreversible motor collapse in advanced stages.</p>
              </article>
              <article class="service-card">
                <div class="icon">03</div>
                <h4>East Checkpoint Breach</h4>
                <p>Security records show a gap in surveillance coverage at the ridge access checkpoint preceding the disappearance.</p>
              </article>
              <article class="service-card">
                <div class="icon">04</div>
                <h4>Missing Personnel</h4>
                <p>Detective John Mercer was last seen near the archive intake wing, carrying restricted investigation notes.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="personnel" class="section updates alt-bg">
          <div class="container">
            <div class="section-heading">
              <p class="section-tag">PERSONNEL & INTERCEPTS</p>
              <h3>PRIVATE STATEMENTS AND QUARANTINE NOTES.</h3>
            </div>

            <div class="news-grid">
              <article class="news-item">
                <span class="date">BIOGRAPHY</span>
                <h4>Detective John Mercer</h4>
                <p>Senior field investigator attached to internal security. Mercer was assigned to a restricted trace operation in Stone Hill Ridge after recurring anomalies in public response logs and quarantine administration.</p>
              </article>
              <article class="news-item">
                <span class="date">FIELD NOTE</span>
                <h4>Final Transmission</h4>
                <p>"The town is not sick. It is changing." The transmission cut off approximately 02:17 local time, immediately after the archive relay was disabled.</p>
              </article>
              <article class="news-item">
                <span class="date">EYEWITNESS</span>
                <h4>Resident Statement</h4>
                <p>A civilian witness reported hearing a low mechanical vibration beneath the street before dawn and seeing a figure moving between shuttered windows in the east block.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="intel" class="section data-block">
          <div class="container">
            <div class="section-heading">
              <p class="section-tag">INTELLIGENCE // THE FREEZING</p>
              <h3>FOUNDATIONAL ANALYSIS OF THE OUTBREAK.</h3>
            </div>

            <div class="intel-grid">
              <div class="intel-panel">
                <h4>Primary Symptoms</h4>
                <ul>
                  <li>Severe shivering and rapid core temperature collapse</li>
                  <li>Blue-to-gray skin discoloration, tissue hardening, and frost-like surface damage</li>
                  <li>Progressive speech disruption, memory fragmentation, and disrupted gait</li>
                  <li>Extreme neurological distress followed by sudden loss of motor function</li>
                  <li>Respiratory strain and muscular rigidity in advanced phases</li>
                  <li>Documentation indicates erratic thermal readings even in heated interiors</li>
                </ul>
              </div>

              <div class="intel-panel">
                <h4>Transmission & Pattern Analysis</h4>
                <ul>
                  <li>Exposure patterns cluster near enclosed public spaces and old municipal corridors</li>
                  <li>Cases accelerate after direct contact, contaminated water exposure, and confined air conditions</li>
                  <li>Signal distortion repeats around archive facilities, tunnel networks, and eastern boundary routes</li>
                  <li>Residents report unexplained voices and repeated motion in the dark before symptom onset</li>
                  <li>Outbreak chronology aligns with administrative disruption and failed municipal logging</li>
                  <li>Field teams suggest the condition is responding to environmental stressors rather than conventional infection alone</li>
                </ul>
              </div>
            </div>

            <div class="timeline-grid">
              <article class="timeline-item">
                <span class="marker">00:00</span>
                <h4>Initial Disturbance</h4>
                <p>Power flickers and municipal sensors fail in the northern transit corridor.</p>
              </article>
              <article class="timeline-item">
                <span class="marker">02:17</span>
                <h4>Signal Loss</h4>
                <p>Detective John’s final transmission is intercepted before archive relay failure.</p>
              </article>
              <article class="timeline-item">
                <span class="marker">04:42</span>
                <h4>Checkpoint Breach</h4>
                <p>Security logs show an unauthorized opening at the east ridge gate.</p>
              </article>
              <article class="timeline-item">
                <span class="marker">06:03</span>
                <h4>Containment Order</h4>
                <p>Quarantine is expanded after an abrupt rise in severe cold-related collapse.</p>
              </article>
            </div>

            <div class="dossier-grid">
              <div class="dossier-card">
                <span class="label">Affected Districts</span>
                <strong>04</strong>
                <p>North corridor, west housing, archive wing, and east service tunnel.</p>
              </div>
              <div class="dossier-card">
                <span class="label">Reported Voices</span>
                <strong>19</strong>
                <p>Witness accounts of recurring calls from beneath the roads or within sealed rooms.</p>
              </div>
              <div class="dossier-card">
                <span class="label">Nocturnal Movement</span>
                <strong>13</strong>
                <p>Repeated surveillance gaps during midnight hours between building blocks.</p>
              </div>
              <div class="dossier-card">
                <span class="label">Critical Lead</span>
                <strong>01</strong>
                <p>Archive access log indicates organized alteration of local public records.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="data" class="section quick-links">
          <div class="container">
            <div class="section-heading">
              <p class="section-tag">DATA</p>
              <h3>CASUALTY FIGURES AND OPERATIONAL STATISTICS.</h3>
            </div>

            <div class="data-grid">
              <div class="data-card">
                <span>Total casualties</span>
                <strong>318</strong>
              </div>
              <div class="data-card">
                <span>Hospitalized</span>
                <strong>143</strong>
              </div>
              <div class="data-card">
                <span>Recovered</span>
                <strong>11</strong>
              </div>
              <div class="data-card">
                <span>Active cases</span>
                <strong>204</strong>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <div class="container footer-grid">
          <div>
            <h4>D.R.R.A.</h4>
            <p>Department of Red Range Alerts. Restricted quarantine assessment and strategic containment archive for The Freezing outbreak.</p>
          </div>
          <div>
            <h5>OPERATIONS</h5>
            <ul>
              <li>Case file // Active</li>
              <li>Quarantine zone // Secured</li>
              <li>Detective John // Missing</li>
            </ul>
          </div>
          <div>
            <h5>FILE STATUS</h5>
            <ul>
              <li>Reports // 64 files</li>
              <li>Intelligence // Updated</li>
              <li>Access // Restricted</li>
            </ul>
          </div>
        </div>
        <div class="container bottom-bar">
          <p>STONE HILL RIDGE // CLASSIFIED // CASE ACTIVE // D.R.R.A. CONTROL</p>
        </div>
      </footer>
    </div>

    <script src="script.js"></script>
  </body>
</html>
:root {
  --bg: #03070b;
  --bg-2: #0a1016;
  --panel: #101820;
  --panel-alt: #151f2a;
  --panel-strong: #182330;
  --line: rgba(255, 255, 255, 0.08);
  --line-strong: rgba(213, 192, 138, 0.26);
  --text: #f3f6fa;
  --muted: #b5c0cc;
  --soft: #8898a7;
  --gold: #d9c68d;
  --gold-soft: rgba(217, 198, 141, 0.1);
  --red: #d63b3b;
  --red-soft: rgba(214, 59, 59, 0.12);
  --shadow: 0 18px 45px rgba(0, 0, 0, 0.56);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "IBM Plex Mono", "SFMono-Regular", "Consolas", "Liberation Mono", "Courier New", monospace;
  color: var(--text);
  background:
    radial-gradient(circle at top, rgba(255,255,255,0.04), transparent 28%),
    linear-gradient(180deg, #02060a 0%, #0a1017 100%);
  line-height: 1.7;
  letter-spacing: 0.02em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
  background-size: 30px 30px;
  pointer-events: none;
}

.scanlines {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background: repeating-linear-gradient(
    to bottom,
    rgba(255,255,255,0.02),
    rgba(255,255,255,0.02) 1px,
    transparent 2px,
    transparent 4px
  );
  opacity: 0.7;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.access-overlay {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgba(4, 7, 11, 0.96);
  z-index: 999;
}

.access-panel {
  width: min(560px, calc(100% - 32px));
  max-height: calc(100vh - 32px);
  overflow-y: auto;
  background: rgba(17, 22, 29, 0.9);
  border: 1px solid var(--line);
  padding: 32px 28px 26px;
  box-shadow: var(--shadow);
}

.access-topline {
  color: var(--gold);
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.access-panel h1 {
  margin: 0 0 12px;
  font-size: clamp(1.8rem, 2.5vw, 2.8rem);
  color: var(--text);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.access-panel p {
  margin: 0 0 20px;
  color: var(--muted);
}

.password-form {
  display: grid;
  gap: 12px;
}

.password-form label {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--gold);
}

.password-form input {
  width: 100%;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.03);
  color: #fff;
  padding: 14px 16px;
  font-size: 1.3rem;
  letter-spacing: 0.5em;
  outline: none;
}

.password-form button {
  border: 1px solid var(--red);
  background: var(--red);
  color: #f3f6fa;
  padding: 14px 18px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  cursor: pointer;
}

.error-message {
  min-height: 24px;
  margin-top: 12px;
  color: #ffb0b0;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.error-message.visible {
  opacity: 1;
}

.lockdown-timer {
  min-height: 20px;
  margin: 12px 0 0;
  color: var(--gold);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.lockdown-timer.visible {
  opacity: 1;
}

.site-shell {
  display: none;
}

.site-shell.visible {
  display: block;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(8, 12, 17, 0.96);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(8px);
}

.topbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  min-height: 84px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text);
}

.brand > div:last-child {
  min-width: 0;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border: 1px solid var(--gold);
  background: rgba(215, 195, 141, 0.08);
  color: var(--gold);
  font-weight: 700;
  letter-spacing: 0.08em;
}

.eyebrow {
  margin: 0;
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  color: var(--muted);
  text-transform: uppercase;
}

.brand h1 {
  margin: 0;
  font-size: 0.9rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 24px;
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.main-nav a:hover {
  color: var(--text);
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.55rem 0.8rem;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.02);
  color: var(--text);
  font-size: 0.68rem;
  letter-spacing: 0.17em;
  text-transform: uppercase;
}

.status-pill.locked {
  background: var(--red-soft);
  border-color: rgba(214, 59, 59, 0.4);
}

.disclaimer {
  margin-top: 26px;
  padding: 18px 20px;
  border: 1px solid var(--line-strong);
  background: rgba(186, 73, 73, 0.04);
  color: var(--muted);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--red);
  box-shadow: 0 0 8px rgba(180, 62, 62, 0.9);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  padding: 0.9rem 1.5rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: 0.2s ease;
}

.btn-primary {
  background: var(--red);
  color: #f5f5f5;
  border: 1px solid var(--red);
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 0 18px rgba(214, 59, 59, 0.2);
}

.btn-secondary {
  background: transparent;
  color: var(--text);
  border: 1px solid var(--line);
}

.hero {
  padding: 90px 0 70px;
  background:
    linear-gradient(180deg, rgba(10, 13, 18, 0.95) 0%, rgba(14, 18, 24, 0.98) 100%),
    linear-gradient(120deg, rgba(217, 198, 141, 0.04), transparent 45%);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.9fr;
  gap: 42px;
  align-items: center;
}

.tag,
.section-tag {
  margin: 0 0 16px;
  color: var(--red);
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-size: 0.68rem;
}

.hero-copy h2 {
  margin: 0;
  font-size: clamp(2.2rem, 3.5vw, 3.8rem);
  line-height: 1.12;
  letter-spacing: 0.04em;
  color: var(--text);
  text-transform: uppercase;
}

.hero-copy p {
  margin-top: 18px;
  max-width: 640px;
  color: var(--muted);
  font-size: 1.04rem;
  text-shadow: 0 0 16px rgba(255,255,255,0.03);
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin-top: 30px;
  flex-wrap: wrap;
}

.hero-points {
  list-style: none;
  padding: 0;
  margin: 30px 0 0;
  display: grid;
  gap: 12px;
  color: var(--text);
  font-weight: 600;
}

.hero-points li::before {
  content: "▣";
  color: var(--gold);
  margin-right: 10px;
}

.hero-panel {
  display: flex;
  justify-content: center;
}

.panel-card {
  width: min(100%, 430px);
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 0;
  padding: 28px 24px 22px;
  box-shadow: var(--shadow);
}

.panel-label {
  margin: 0;
  font-size: 0.66rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--soft);
}

.panel-card h3 {
  margin: 12px 0 18px;
  font-size: 1.7rem;
  letter-spacing: 0.12em;
  color: var(--gold);
}

.readout {
  display: grid;
  gap: 16px;
}

.readout div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.02);
}

.readout span {
  color: var(--soft);
  font-size: 0.76rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.readout strong {
  color: var(--text);
  font-size: 1.06rem;
  overflow-wrap: anywhere;
  text-align: right;
}

.section {
  padding: 88px 0;
}

.stats {
  background: var(--panel-alt);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 18px 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.stat-box {
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--line);
  padding: 22px 18px;
  text-align: center;
}

.stat-box strong {
  display: block;
  margin-bottom: 8px;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  color: var(--gold);
  letter-spacing: 0.08em;
}

.stat-box span {
  color: var(--muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.72rem;
}

.split-layout {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 32px;
  align-items: center;
}

.about h3,
.section-heading h3 {
  margin: 0;
  font-size: clamp(1.7rem, 2.8vw, 2.5rem);
  line-height: 1.35;
  color: var(--text);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.about p {
  margin: 0;
  font-size: 1.04rem;
  color: var(--muted);
}

.card-grid,
.news-grid,
.links-grid,
.intel-grid,
.data-grid,
.timeline-grid,
.dossier-grid {
  display: grid;
  gap: 22px;
}

.card-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 34px;
}

.service-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 0;
  padding: 26px 22px;
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: "";
  position: absolute;
  inset: 0 auto auto 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--gold), transparent);
}

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: rgba(215, 195, 141, 0.08);
  border: 1px solid rgba(215, 195, 141, 0.35);
  color: var(--gold);
  font-weight: 700;
  margin-bottom: 16px;
}

.service-card h4,
.news-item h4,
.intel-panel h4 {
  margin: 0 0 10px;
  color: var(--text);
  font-size: 1.3rem;
}

.service-card p,
.news-item p,
.site-footer p,
.site-footer li,
.intel-panel li {
  margin: 0;
  color: var(--muted);
}

.intel-panel ul {
  font-size: 0.96rem;
}

.alt-bg {
  background: rgba(255,255,255,0.02);
}

.news-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 34px;
}

.news-item {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 0;
  padding: 26px 22px;
}

.date {
  display: inline-block;
  margin-bottom: 12px;
  color: var(--gold);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 700;
}

.intel-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 30px;
}

.intel-panel {
  background: var(--panel);
  border: 1px solid var(--line);
  padding: 26px 24px;
}

.intel-panel ul {
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 10px;
}

.timeline-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 30px;
}

.timeline-item {
  background: var(--panel);
  border: 1px solid var(--line);
  padding: 22px 18px;
}

.timeline-item .marker {
  display: inline-block;
  margin-bottom: 10px;
  color: var(--gold);
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.timeline-item h4 {
  margin: 0 0 10px;
  font-size: 1.05rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text);
}

.dossier-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 30px;
}

.dossier-card {
  background: linear-gradient(180deg, rgba(16, 24, 32, 0.95), rgba(10, 15, 20, 0.95));
  border: 1px solid var(--line);
  padding: 20px 18px;
}

.dossier-card .label {
  display: block;
  margin-bottom: 8px;
  color: var(--gold);
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.dossier-card strong {
  display: block;
  color: var(--text);
  font-size: 1.7rem;
  margin-bottom: 8px;
}

.dossier-card p {
  margin: 0;
  color: var(--muted);
}

.data-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 30px;
}

.data-card {
  background: var(--panel);
  border: 1px solid var(--line);
  padding: 24px 20px;
  text-align: center;
}

.data-card span {
  display: block;
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.data-card strong {
  color: var(--text);
  font-size: clamp(1.9rem, 3vw, 2.5rem);
}

.links-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 30px;
}

.links-grid a {
  display: flex;
  align-items: center;
  min-height: 72px;
  padding: 20px 22px;
  background: var(--panel);
  border: 1px solid var(--line);
  color: var(--text);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.site-footer {
  background: rgba(8, 12, 17, 0.96);
  border-top: 1px solid var(--line);
  color: var(--text);
  padding-top: 62px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 28px;
}

.site-footer h4,
.site-footer h5 {
  margin: 0 0 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.site-footer ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 8px;
}

.bottom-bar {
  border-top: 1px solid rgba(255,255,255,0.08);
  margin-top: 34px;
  padding: 18px 0 28px;
}

.bottom-bar p {
  color: var(--gold);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-size: 0.7rem;
}

@media (max-width: 900px) {
  .hero-grid,
  .split-layout,
  .card-grid,
  .news-grid,
  .links-grid,
  .intel-grid,
  .data-grid,
  .timeline-grid,
  .dossier-grid,
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }

  .main-nav {
    display: flex;
    flex: 1 0 100%;
    order: 3;
    gap: 18px;
    overflow-x: auto;
    padding: 2px 0 4px;
    scrollbar-width: thin;
  }

  .main-nav a {
    flex: 0 0 auto;
    white-space: nowrap;
  }
}

@media (max-width: 640px) {
  .hero-grid,
  .split-layout,
  .card-grid,
  .news-grid,
  .links-grid,
  .intel-grid,
  .data-grid,
  .timeline-grid,
  .dossier-grid,
  .footer-grid,
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .topbar-inner {
    flex-wrap: wrap;
    padding: 12px 0;
  }

  .brand {
    min-width: 0;
    flex: 1;
  }

  .eyebrow {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .status-pill {
    flex: 0 0 auto;
    max-width: 48%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .hero {
    padding-top: 70px;
  }

  .brand h1 {
    font-size: 0.7rem;
    letter-spacing: 0.08em;
  }

  .hero-copy h2 {
    font-size: 2.1rem;
  }

  .btn {
    width: 100%;
  }

  .hero-actions {
    flex-direction: column;
  }

  .readout div {
    align-items: flex-start;
  }
}
const overlay = document.getElementById('accessOverlay');
const siteShell = document.getElementById('siteShell');
const form = document.getElementById('passwordForm');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');
const lockdownButton = document.getElementById('lockdownButton');
const statusPill = document.querySelector('.status-pill');
const lockdownTimer = document.getElementById('lockdownTimer');

const correctPassword = '7709';
const lockdownDurationMs = 10 * 60 * 1000;
let lockdownLockedUntil = 0;
let lockdownTimerInterval = null;

function randomizeFieldValue() {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let randomCode = '';

  for (let i = 0; i < 4; i += 1) {
    randomCode += digits[Math.floor(Math.random() * digits.length)];
  }

  passwordInput.value = randomCode;
}

function formatTime(ms) {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

function applyLockedState() {
  const remainingMs = Math.max(0, lockdownLockedUntil - Date.now());
  const remainingText = formatTime(remainingMs);

  passwordInput.disabled = true;
  form.querySelector('button').disabled = true;
  errorMessage.textContent = 'LOCKDOWN ACTIVE. ACCESS RESTRICTED.';
  errorMessage.classList.add('visible');
  lockdownTimer.textContent = `LOCKDOWN WINDOW: ${remainingText}`;
  lockdownTimer.classList.add('visible');

  overlay.style.display = 'grid';
  siteShell.classList.remove('visible');
  statusPill.classList.add('locked');
  statusPill.innerHTML = '<span class="dot"></span>LOCKDOWN // ACTIVE';

  if (lockdownButton) {
    lockdownButton.disabled = true;
    lockdownButton.textContent = `LOCKDOWN // ${remainingText}`;
    lockdownButton.style.opacity = '0.6';
    lockdownButton.style.cursor = 'not-allowed';
  }
}

function clearLockedState() {
  passwordInput.disabled = false;
  form.querySelector('button').disabled = false;
  errorMessage.textContent = 'ACCESS DENIED.';
  errorMessage.classList.remove('visible');
  lockdownTimer.textContent = '';
  lockdownTimer.classList.remove('visible');
  statusPill.classList.remove('locked');
  statusPill.innerHTML = '<span class="dot"></span>LOCKDOWN ZONE';

  if (lockdownButton) {
    lockdownButton.disabled = false;
    lockdownButton.textContent = 'LOCKDOWN ACTIVE';
    lockdownButton.style.opacity = '1';
    lockdownButton.style.cursor = 'pointer';
  }
}

function updateLockdownStatus() {
  if (Date.now() < lockdownLockedUntil) {
    applyLockedState();
    return;
  }

  clearLockedState();
}

lockdownButton.addEventListener('click', function () {
  if (Date.now() < lockdownLockedUntil) {
    updateLockdownStatus();
    return;
  }

  lockdownLockedUntil = Date.now() + lockdownDurationMs;
  overlay.style.display = 'grid';
  siteShell.classList.remove('visible');
  updateLockdownStatus();

  if (lockdownTimerInterval) {
    clearInterval(lockdownTimerInterval);
  }

  lockdownTimerInterval = setInterval(function () {
    if (Date.now() >= lockdownLockedUntil) {
      clearInterval(lockdownTimerInterval);
      lockdownTimerInterval = null;
      clearLockedState();
      return;
    }

    updateLockdownStatus();
  }, 1000);
});

passwordInput.addEventListener('focus', function () {
  if (!passwordInput.value) {
    randomizeFieldValue();
  }
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (Date.now() < lockdownLockedUntil) {
    updateLockdownStatus();
    return;
  }

  const entered = passwordInput.value.trim();

  if (entered === correctPassword) {
    overlay.style.display = 'none';
    siteShell.classList.add('visible');
    clearLockedState();
  } else {
    errorMessage.textContent = 'ACCESS DENIED. INVALID AUTHORIZATION CODE.';
    errorMessage.classList.add('visible');
    randomizeFieldValue();
    passwordInput.focus();
  }
});

updateLockdownStatus();
