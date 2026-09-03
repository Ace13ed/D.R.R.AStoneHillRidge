const overlay = document.getElementById('accessOverlay');
const siteShell = document.getElementById('siteShell');
const form = document.getElementById('passwordForm');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');
const lockdownButton = document.getElementById('lockdownButton');
const statusPill = document.querySelector('.status-pill');
const lockdownTimer = document.getElementById('lockdownTimer');
const archiveList = document.getElementById('archiveList');
const archiveSearch = document.getElementById('archiveSearch');
const archiveCount = document.getElementById('archiveCount');
const reportModal = document.getElementById('reportModal');
const reportMeta = document.getElementById('reportMeta');
const reportTitle = document.getElementById('reportTitle');
const reportBody = document.getElementById('reportBody');
const civilianList = document.getElementById('civilianList');
const civilianSearch = document.getElementById('civilianSearch');
const civilianCount = document.getElementById('civilianCount');

const correctPassword = 'FR33Z1NG';
const lockdownDurationMs = 10 * 60 * 1000;
const archiveRecordCount = 1000000;
const archiveVisibleRecords = 20;
const archiveRowHeight = 116;
const civilianRecordCount = 547;
const civilianVisibleRecords = 20;
const civilianRowHeight = 142;
let archiveRenderToken = 0;
let archiveMatches = null;
let civilianMatches = null;
let civilianRenderToken = 0;
let lockdownLockedUntil = 0;
let lockdownTimerInterval = null;

const archiveSubjects = [
  'Detective John Mercer', 'the east checkpoint', 'the archive relay',
  'the service tunnels', 'Sector North', 'the frozen reservoir',
  'the municipal clock network', 'the quarantine medical ward',
  'the shuttered schoolhouse', 'the unregistered basement'
];
const archiveFindings = [
  'appears in three contradictory access logs', 'was recorded seven minutes before the official outage',
  'carries the same low vibration heard beneath the east block', 'contains a temperature reading impossible for the room',
  'is mentioned by witnesses who were never listed as residents', 'shows a deliberate gap where a name should be',
  'repeats a phrase from Mercer’s final transmission', 'changes position between consecutive photographs',
  'was sealed, reopened, and resealed without a matching badge scan', 'shares a timestamp with a reported disappearance'
];
const archiveImplicationsList = [
  'This supports the theory that the outbreak was mapped before the quarantine began.',
  'The discrepancy places the archive relay at the center of the containment failure.',
  'Investigators should treat the record as an active lead rather than historical evidence.',
  'The pattern suggests that the Freezing follows infrastructure, not ordinary human contact.',
  'Mercer may have known about this connection and concealed it from the response teams.',
  'No conventional equipment currently explains the result without falsifying the chain of custody.',
  'The detail links an administrative alteration to a physical event in the town.',
  'This may explain why unaffected residents report identical sounds after midnight.'
];
const archiveSources = [
  'thermal reel', 'transit ledger', 'intercept transcript', 'witness statement',
  'medical intake form', 'badge telemetry', 'drainage map', 'Mercer notebook'
];
const archiveActions = [
  'Cross-reference against Mercer’s missing notebook pages.',
  'Hold for review by a two-person evidence team.',
  'Compare with the next confirmed temperature drop.',
  'Do not circulate outside the quarantine command desk.',
  'Recheck after the east relay is powered down.',
  'Mark as unresolved until the witness can be located.'
];
const reportSections = [
  ['Situation brief', 'The record was opened after a routine quarantine review detected a conflict between physical conditions and the official town ledger. The location remained under restricted observation while responders reconstructed the minutes surrounding the event.'],
  ['Observed sequence', 'At the beginning of the observation window, the subject was stable and the surrounding infrastructure was functioning within expected limits. A brief power fluctuation was followed by a temperature change, a break in communications, and movement that could not be matched to any registered resident.'],
  ['Evidence chain', 'The source was transferred through the east command desk, insulated storage, and the archive relay. Two timestamps remain reliable. The remaining entries are marked provisional because the municipal clock network drifted during the same seventeen-minute interval connected to Mercer’s final transmission.'],
  ['Plot relevance', 'This entry links the apparent medical outbreak to the administrative sabotage surrounding Stone Hill Ridge. It strengthens the possibility that the Freezing is using the town’s buried infrastructure as a pathway, while also suggesting that Mercer was investigating the pattern before he disappeared.'],
  ['Analyst assessment', 'Confidence is moderate. The physical detail is corroborated, but the motive and originating source remain unresolved. The record should not be treated as proof of a conventional infection, a supernatural event, or a deliberate attack until the missing archive material is recovered.'],
  ['Required follow-up', 'Compare this file with the next matching thermal reading, interview the original witness under controlled conditions, and preserve the untouched copy of the relevant relay log. Do not send a lone operative into the east service corridor.']
];
const civilianFirstNames = ['Mara', 'Elias', 'June', 'Thomas', 'Nadia', 'Caleb', 'Irene', 'Victor', 'Lena', 'Samuel', 'Ruth', 'Owen', 'Clara', 'Jonah', 'Miriam', 'Peter', 'Elise', 'Gideon', 'Naomi', 'Arthur', 'Hazel', 'Leon', 'Ada', 'Miles', 'Esther', 'Simon', 'Grace', 'Micah', 'Rose', 'Daniel', 'Eva', 'Felix', 'Lydia', 'Noah', 'Sofia', 'Hugh', 'Amara', 'Isaac', 'Vera', 'Julian'];
const civilianLastNames = ['Bennett', 'Holloway', 'Mercer', 'Vale', 'Donovan', 'Cross', 'Wren', 'Hastings', 'Ellis', 'Rowan', 'Parker', 'Sloan', 'Fletcher', 'Morrow', 'Kessler', 'Hart', 'Bishop', 'Dawson', 'Reed', 'Whitaker', 'Caldwell', 'Marsh', 'Rivers', 'Keane', 'Lowe', 'Norris', 'Abbott', 'West', 'Finch', 'Byrne', 'Carver', 'Mills', 'Dyer', 'Hale', 'Quinn', 'Baker', 'Forrest', 'Stone', 'Graves', 'Raine'];
const civilianOccupations = ['school custodian', 'paramedic', 'bus mechanic', 'teacher', 'shopkeeper', 'water technician', 'student', 'archivist', 'night nurse', 'radio operator'];
const civilianOpinions = [
  'believes the quarantine order arrived after the town had already been compromised',
  'insists the voices use private memories that were never spoken aloud',
  'thinks Mercer was trying to protect civilians rather than flee',
  'reports that the east corridor was always colder than the rest of town',
  'believes the official casualty count is missing an entire night shift',
  'claims the clocks stopped only when someone mentioned the archive',
  'does not believe the Freezing is contagious, but fears the tunnels',
  'says the briefing made sense until the final warning was removed'
];
const civilianObservations = [
  'heard a familiar voice beneath the floor after the briefing',
  'saw condensation form on the inside of a sealed window',
  'found a sector map folded into a shape not shown during the briefing',
  'noticed a missing name on the attendance ledger',
  'reported a seventeen-minute gap in their personal watch',
  'saw a figure wearing a response coat near the east relay',
  'experienced no symptoms but repeated the warning in an unknown voice',
  'heard the municipal siren answer from underground'
];

function getCivilianRecord(index) {
  const briefed = index < 358;
  return {
    id: `CIV-${String(index + 1).padStart(3, '0')}`,
    name: `${civilianFirstNames[index % civilianFirstNames.length]} ${civilianLastNames[(index + (Math.floor(index / civilianFirstNames.length) * 7)) % civilianLastNames.length]}`,
    age: 19 + ((index * 7) % 58),
    occupation: civilianOccupations[(index * 3) % civilianOccupations.length],
    sector: String((index % 4) + 1).padStart(2, '0'),
    status: briefed ? 'BRIEFED' : 'UNBRIEFED / UNVERIFIED',
    opinion: civilianOpinions[(index * 5) % civilianOpinions.length],
    observation: civilianObservations[(index * 11) % civilianObservations.length]
  };
}

function renderCivilianWindow(startIndex, renderToken) {
  if (renderToken !== civilianRenderToken) return;
  const total = civilianMatches ? civilianMatches.length : civilianRecordCount;
  const safeStart = Math.max(0, Math.min(startIndex, Math.max(0, total - civilianVisibleRecords)));
  civilianList.replaceChildren();
  const fragment = document.createDocumentFragment();
  const endIndex = Math.min(safeStart + civilianVisibleRecords, total);
  for (let displayIndex = safeStart; displayIndex < endIndex; displayIndex += 1) {
    const recordIndex = civilianMatches ? civilianMatches[displayIndex] : displayIndex;
    const record = getCivilianRecord(recordIndex);
    const article = document.createElement('article');
    article.className = 'archive-record civilian-record';
    article.tabIndex = 0;
    article.setAttribute('role', 'button');
    article.dataset.civilianId = record.id;
    article.style.top = `${displayIndex * civilianRowHeight}px`;
    article.innerHTML = `<div class="archive-record-meta">${record.id} // SECTOR ${record.sector} // ${record.status}</div><p><strong>${record.name}</strong> // AGE ${record.age} // ${record.occupation}<br>${record.opinion}. ${record.observation}.</p>`;
    fragment.appendChild(article);
  }
  civilianList.appendChild(fragment);
  civilianCount.textContent = `${safeStart.toLocaleString()}-${endIndex.toLocaleString()} OF ${total.toLocaleString()} CIVILIAN DOSSIERS`;
}

function renderCivilians(query) {
  const normalizedQuery = query.trim().toLowerCase();
  civilianRenderToken += 1;
  civilianMatches = normalizedQuery ? [] : null;
  if (normalizedQuery) {
    for (let index = 0; index < civilianRecordCount; index += 1) {
      const record = getCivilianRecord(index);
      if (`${record.id} ${record.name} ${record.age} ${record.occupation} sector ${record.sector} ${record.status} ${record.opinion} ${record.observation}`.toLowerCase().includes(normalizedQuery)) civilianMatches.push(index);
    }
  }
  civilianList.style.height = `${(civilianMatches ? civilianMatches.length : civilianRecordCount) * civilianRowHeight}px`;
  civilianList.scrollTop = 0;
  renderCivilianWindow(0, civilianRenderToken);
}

function buildArchive() {
  if (!archiveList) return;
  renderArchive('');
}

function getArchiveRecord(index) {
  const subject = archiveSubjects[index % archiveSubjects.length];
  const finding = archiveFindings[(index * 7) % archiveFindings.length];
  const implication = archiveImplicationsList[(index * 11) % archiveImplicationsList.length];
  const source = archiveSources[(index * 5) % archiveSources.length];
  const action = archiveActions[(index * 13) % archiveActions.length];
  const sector = String((index % 4) + 1).padStart(2, '0');
  return {
    id: `SHR-${String(index + 1).padStart(7, '0')}`,
    text: `${subject} ${finding}. ${implication} ${action}`,
    source,
    sector
  };
}

function renderArchive(query) {
  const normalizedQuery = query.trim().toLowerCase();
  const renderToken = archiveRenderToken + 1;
  archiveRenderToken = renderToken;
  archiveMatches = normalizedQuery ? [] : null;

  if (normalizedQuery) {
    for (let index = 0; index < archiveRecordCount; index += 1) {
      const record = getArchiveRecord(index);
      if (`${record.id} ${record.text} ${record.source} sector ${record.sector}`.toLowerCase().includes(normalizedQuery)) archiveMatches.push(index);
    }
  }

  archiveList.replaceChildren();
  archiveList.scrollTop = 0;
  archiveList.style.height = `${(archiveMatches ? archiveMatches.length : archiveRecordCount) * archiveRowHeight}px`;
  renderArchiveWindow(0, renderToken);
}

function renderArchiveWindow(startIndex, renderToken) {
  if (renderToken !== archiveRenderToken) return;
  const total = archiveMatches ? archiveMatches.length : archiveRecordCount;
  const safeStart = Math.max(0, Math.min(startIndex, Math.max(0, total - archiveVisibleRecords)));
  const fragment = document.createDocumentFragment();
  const endIndex = Math.min(safeStart + archiveVisibleRecords, total);
  archiveList.replaceChildren();

  for (let displayIndex = safeStart; displayIndex < endIndex; displayIndex += 1) {
    const recordIndex = archiveMatches ? archiveMatches[displayIndex] : displayIndex;
    const record = getArchiveRecord(recordIndex);
    const article = document.createElement('article');
    article.className = 'archive-record';
    article.tabIndex = 0;
    article.setAttribute('role', 'button');
    article.dataset.recordId = record.id;
    article.style.top = `${displayIndex * archiveRowHeight}px`;
    article.innerHTML = `<div class="archive-record-meta">${record.id} // SECTOR ${record.sector} // ${record.source}</div><p>${record.text}</p>`;
    fragment.appendChild(article);
  }
  archiveList.appendChild(fragment);
  archiveCount.textContent = `${safeStart.toLocaleString()}-${endIndex.toLocaleString()} OF ${total.toLocaleString()} RECORDS IN VIEW // ${archiveRecordCount.toLocaleString()} INDEXED`;
}

function openReport(record) {
  reportMeta.textContent = `${record.id} // SECTOR ${record.sector} // ${record.source}`;
  reportTitle.textContent = `FULL REPORT // ${record.id}`;
  reportBody.innerHTML = `
    <p class="report-lead">${record.text}</p>
    ${reportSections.map(([heading, text], index) => `
      <section>
        <h4>${String(index + 1).padStart(2, '0')} // ${heading}</h4>
        <p>${text} ${record.text}</p>
      </section>
    `).join('')}
    <div class="report-signoff">FILE STATUS: ACTIVE // REVIEW CLASS: RESTRICTED // CROSS-LINKS: MERCER / EAST RELAY / THE FREEZING</div>
  `;
  reportModal.hidden = false;
  document.body.classList.add('report-open');
  reportModal.querySelector('.report-close').focus();
}

function openCivilianReport(record) {
  reportMeta.textContent = `${record.id} // SECTOR ${record.sector} // ${record.status}`;
  reportTitle.textContent = `CIVILIAN BRIEFING REPORT // ${record.name}`;
  reportBody.innerHTML = `
    <p class="report-lead">CIVILIAN PROFILE: ${record.name}, AGE ${record.age}, ${record.occupation}. This is a fictionalized quarantine record prepared from the Stone Hill Ridge civilian briefing ledger.</p>
    <section><h4>01 // Briefing record</h4><p>Status: ${record.status}. The subject was logged against the sector map and warned not to answer voices beneath the floor, follow unverified evacuation calls, or touch walls during a synchronized clock failure.</p></section>
    <section><h4>02 // Personal account</h4><p>${record.opinion}. The subject gave this opinion during a controlled debriefing and connected it to the disappearance of Detective John Mercer.</p></section>
    <section><h4>03 // Observation</h4><p>${record.observation}. No claim is treated as proof until it is matched against thermal reels, relay telemetry, or a second civilian statement.</p></section>
    <section><h4>04 // Analyst notes</h4><p>The profile is relevant because civilian testimony is the only surviving record of several events erased from municipal logs. Differences between accounts may indicate stress, deliberate misinformation, or a repeating influence moving through the town infrastructure.</p></section>
    <div class="report-signoff">FILE STATUS: ${record.status} // IDENTITY MASKED // CROSS-LINKS: CIVILIAN BRIEFING / MERCER / EAST RELAY</div>
  `;
  reportModal.hidden = false;
  document.body.classList.add('report-open');
  reportModal.querySelector('.report-close').focus();
}

function closeReport() {
  reportModal.hidden = true;
  document.body.classList.remove('report-open');
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

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (Date.now() < lockdownLockedUntil) {
    updateLockdownStatus();
    return;
  }

  const entered = passwordInput.value.trim().toUpperCase();

  if (entered === correctPassword) {
    overlay.style.display = 'none';
    siteShell.classList.add('visible');
    buildArchive();
    clearLockedState();
  } else {
    errorMessage.textContent = 'ACCESS DENIED. INVALID AUTHORIZATION CODE.';
    errorMessage.classList.add('visible');
    passwordInput.focus();
  }
});

updateLockdownStatus();

if (archiveSearch) {
  archiveSearch.addEventListener('input', function () {
    renderArchive(archiveSearch.value);
  });
}

if (archiveList) {
  archiveList.addEventListener('scroll', function () {
    const startIndex = Math.floor(archiveList.scrollTop / archiveRowHeight);
    window.requestAnimationFrame(function () {
      renderArchiveWindow(startIndex, archiveRenderToken);
    });
  });
}

if (civilianList) {
  renderCivilians('');
  civilianList.addEventListener('scroll', function () {
    const startIndex = Math.floor(civilianList.scrollTop / civilianRowHeight);
    window.requestAnimationFrame(function () {
      renderCivilianWindow(startIndex, civilianRenderToken);
    });
  });
  civilianList.addEventListener('click', function (event) {
    const element = event.target.closest('[data-civilian-id]');
    if (!element) return;
    const record = getCivilianRecord(Number(element.dataset.civilianId.replace('CIV-', '')) - 1);
    openCivilianReport(record);
  });
  civilianList.addEventListener('keydown', function (event) {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const element = event.target.closest('[data-civilian-id]');
    if (!element) return;
    event.preventDefault();
    const record = getCivilianRecord(Number(element.dataset.civilianId.replace('CIV-', '')) - 1);
    openCivilianReport(record);
  });
}

if (civilianSearch) {
  civilianSearch.addEventListener('input', function () {
    renderCivilians(civilianSearch.value);
  });
}

if (archiveList) {
  archiveList.addEventListener('click', function (event) {
    const recordElement = event.target.closest('[data-record-id]');
    if (!recordElement) return;
    const record = getArchiveRecord(Number(recordElement.dataset.recordId.replace('SHR-', '')) - 1);
    openReport(record);
  });
  archiveList.addEventListener('keydown', function (event) {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const recordElement = event.target.closest('[data-record-id]');
    if (!recordElement) return;
    event.preventDefault();
    const record = getArchiveRecord(Number(recordElement.dataset.recordId.replace('SHR-', '')) - 1);
    openReport(record);
  });
}

document.querySelectorAll('[data-close-report]').forEach((element) => {
  element.addEventListener('click', closeReport);
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !reportModal.hidden) closeReport();
});
