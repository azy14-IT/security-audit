const domains = {
    "Physical Security": [
        "Is office access controlled via biometric/card?",
        "Are visitors logged and escorted?",
        "Is CCTV installed and monitored?",
        "Is server room access restricted?",
        "Are fire safety systems tested?",
        "Are emergency exits marked?",
        "Is asset tagging implemented?",
        "Is physical access reviewed?",
        "Is tailgating prevented?",
        "Is physical security policy documented?",
        "Are guards deployed?",
        "Is access revoked for exited staff?",
        "Is power backup tested?",
        "Is UPS installed?",
        "Are keys controlled?",
        "Is badge return enforced?",
        "Is equipment secured after hours?",
        "Is visitor badge issued?",
        "Is physical incident logged?",
        "Is physical audit conducted?"
    ],
    "Network Security": [
        "Is firewall configured?",
        "Are unused ports blocked?",
        "Is IDS/IPS enabled?",
        "Is network segmented?",
        "Is secure Wi-Fi used?",
        "Is guest Wi-Fi isolated?",
        "Is VPN used?",
        "Is MFA enabled on VPN?",
        "Are firewall rules reviewed?",
        "Is monitoring enabled?",
        "Is DDoS protection active?",
        "Is DNS secured?",
        "Are admin ports restricted?",
        "Is router firmware updated?",
        "Is NAC implemented?",
        "Is IP whitelisting used?",
        "Is network diagram updated?",
        "Is vulnerability scan done?",
        "Is pen-test conducted?",
        "Is log retention defined?"
    ],
    "Access Management": [
        "Are unique user IDs assigned?",
        "Are shared accounts prohibited?",
        "Is MFA enabled for users?",
        "Is MFA enabled for admins?",
        "Is RBAC implemented?",
        "Is least privilege enforced?",
        "Is joiner process defined?",
        "Is leaver access removed timely?",
        "Is mover access reviewed?",
        "Is PAM used?",
        "Are admin actions logged?",
        "Are access reviews periodic?",
        "Are default passwords changed?",
        "Is password policy enforced?",
        "Is SSO implemented?",
        "Is conditional access used?",
        "Are service accounts reviewed?",
        "Is privileged access approved?",
        "Is IAM policy documented?",
        "Is IAM audit conducted?"
    ],
    "Endpoint Security": [
        "Is antivirus installed?",
        "Is EDR enabled?",
        "Is disk encryption enabled?",
        "Are USB devices controlled?",
        "Is patching automated?",
        "Is device inventory maintained?",
        "Are admin rights restricted?",
        "Is screen lock enforced?",
        "Is OS hardened?",
        "Is unauthorized software blocked?",
        "Is device compliance checked?",
        "Is endpoint logging enabled?",
        "Is endpoint monitored centrally?",
        "Are lost devices handled?",
        "Is BYOD policy defined?",
        "Is endpoint backup enabled?",
        "Is firewall enabled?",
        "Is malware scan scheduled?",
        "Is endpoint policy documented?",
        "Is endpoint audit done?"
    ],
    "Server & Cloud Security": [
        "Are secure baselines applied?",
        "Are default credentials removed?",
        "Is cloud IAM enforced?",
        "Is least privilege applied?",
        "Is public access restricted?",
        "Is logging enabled?",
        "Are backups configured?",
        "Are backups tested?",
        "Is encryption enabled?",
        "Is key management secure?",
        "Is patching automated?",
        "Is vulnerability scanning done?",
        "Is monitoring enabled?",
        "Is DR plan available?",
        "Is admin access restricted?",
        "Is cloud posture reviewed?",
        "Is tagging implemented?",
        "Is cost anomaly monitored?",
        "Is change management followed?",
        "Is cloud audit conducted?"
    ],
    "Data Protection": [
        "Is data classified?",
        "Is sensitive data identified?",
        "Is encryption at rest enabled?",
        "Is encryption in transit enabled?",
        "Is DLP implemented?",
        "Is backup retention defined?",
        "Is data disposal secure?",
        "Is access restricted?",
        "Is data loss monitored?",
        "Is secure sharing enforced?",
        "Is cloud data protected?",
        "Is endpoint data protected?",
        "Is data owner assigned?",
        "Is privacy policy defined?",
        "Is compliance followed?",
        "Is breach response defined?",
        "Is data inventory maintained?",
        "Is data masking used?",
        "Is audit logging enabled?",
        "Is data audit conducted?"
    ],
    "Logging & Monitoring": [
        "Is centralized logging enabled?",
        "Is SIEM implemented?",
        "Are alerts configured?",
        "Are logs reviewed daily?",
        "Is retention defined?",
        "Are admin actions logged?",
        "Is time sync enabled?",
        "Is escalation defined?",
        "Is monitoring 24x7?",
        "Is threat intel used?",
        "Is UEBA implemented?",
        "Is SOC process defined?",
        "Is dashboard available?",
        "Is log integrity ensured?",
        "Is incident alert automated?",
        "Is audit trail maintained?",
        "Is monitoring tested?",
        "Is alert tuning done?",
        "Is log audit conducted?",
        "Is SIEM health checked?"
    ],
    "Incident Response": [
        "Is IR policy documented?",
        "Is IR team defined?",
        "Is reporting process known?",
        "Are incidents classified?",
        "Is response timeline defined?",
        "Are roles assigned?",
        "Is communication plan defined?",
        "Are incidents logged?",
        "Is RCA conducted?",
        "Are lessons learned captured?",
        "Is forensic readiness ensured?",
        "Are drills conducted?",
        "Is ransomware plan available?",
        "Is BCP integrated?",
        "Is IR reviewed yearly?",
        "Is legal notification defined?",
        "Is customer notification defined?",
        "Is containment defined?",
        "Is recovery tested?",
        "Is IR audit conducted?"
    ],
    "Vendor & Third Party": [
        "Are vendors risk assessed?",
        "Is NDA signed?",
        "Are security clauses included?",
        "Is vendor access restricted?",
        "Is access time-bound?",
        "Is vendor monitored?",
        "Is data sharing controlled?",
        "Is vendor audit conducted?",
        "Is exit process defined?",
        "Is subcontractor reviewed?",
        "Is SLA defined?",
        "Is compliance verified?",
        "Is vendor inventory maintained?",
        "Is risk rating assigned?",
        "Is IR aligned?",
        "Is breach notification defined?",
        "Is MFA enforced?",
        "Is review periodic?",
        "Is vendor policy defined?",
        "Is third-party audit done?"
    ],
    "GRC": [
        "Is ISMS policy defined?",
        "Is risk register maintained?",
        "Is risk assessment periodic?",
        "Is management review done?",
        "Is internal audit conducted?",
        "Is compliance tracked?",
        "Is training conducted?",
        "Is awareness program active?",
        "Is policy approval documented?",
        "Is exception handling defined?",
        "Is KPI tracked?",
        "Is evidence stored?",
        "Is regulatory compliance ensured?",
        "Is document control applied?",
        "Is corrective action tracked?",
        "Is preventive action tracked?",
        "Is audit closure monitored?",
        "Is compliance reporting done?",
        "Is ISMS scope defined?",
        "Is GRC audit conducted?"
    ]
};

const domainSelect = document.getElementById("domainSelect");

Object.keys(domains).forEach(d => {
    const opt = document.createElement("option");
    opt.value = d;
    opt.text = d;
    domainSelect.appendChild(opt);
});

function riskFromStatus(status) {
    if (status === "No") return "High";
    if (status === "Partial") return "Medium";
    return "Low";
}

function loadChecklist() {
    const domain = domainSelect.value;
    const tbody = document.querySelector("#checklistTable tbody");
    tbody.innerHTML = "";

    const saved = JSON.parse(localStorage.getItem(domain)) || [];

    domains[domain].forEach((q, i) => {
        const row = document.createElement("tr");
        const savedRow = saved[i] || {};
        const risk = riskFromStatus(savedRow.status || "Yes");

        row.innerHTML = `
            <td>${i + 1}</td>
            <td>${q}</td>
            <td>
                <select onchange="saveData()">
                    <option ${savedRow.status==="Yes"?"selected":""}>Yes</option>
                    <option ${savedRow.status==="No"?"selected":""}>No</option>
                    <option ${savedRow.status==="Partial"?"selected":""}>Partial</option>
                </select>
            </td>
            <td class="risk-${risk}">${risk}</td>
            <td><input value="${savedRow.note || ""}" oninput="saveData()"></td>
        `;
        tbody.appendChild(row);
    });
}

function saveData() {
    const domain = domainSelect.value;
    const rows = document.querySelectorAll("#checklistTable tbody tr");
    const data = [];

    rows.forEach(r => {
        data.push({
            status: r.children[2].children[0].value,
            note: r.children[4].children[0].value
        });
    });

    localStorage.setItem(domain, JSON.stringify(data));
    loadChecklist();
}

function exportExcel() {
    let csv = "Domain,Question,Status,Risk,Notes\n";

    Object.keys(domains).forEach(domain => {
        const saved = JSON.parse(localStorage.getItem(domain)) || [];
        domains[domain].forEach((q, i) => {
            const s = saved[i] || {};
            const status = s.status || "";
            const risk = riskFromStatus(status);
            csv += `"${domain}","${q}","${status}","${risk}","${s.note || ""}"\n`;
        });
    });

    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Security_Audit_Report.csv";
    link.click();
}

loadChecklist();
