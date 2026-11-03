export const profile = {
  name: 'Shravya Tagilapalli',
  roles: [
    'Aspiring Data Analyst',
    'Oracle Retail Functional Consultant',
    'Business Intelligence Enthusiast',
  ],
  subtitle: 'Aspiring Data Analyst | SQL & Reporting Professional',
  intro:
    "I'm an IT professional with approximately 6.5 years of experience in Production Support, Functional Consulting, and Oracle Retail applications. With a foundation in SQL, reporting, and enterprise business processes, I'm now transitioning into Data Analytics, developing skills in Power BI, Tableau, Python, and Excel.",
  about:
    "Hi, I'm Shravya Tagilapalli, an IT professional with approximately 6.5 years of experience in enterprise application support and functional consulting, primarily working with Oracle Retail applications.\n\nThroughout my career, I have developed strong analytical problem-solving skills through SQL-based troubleshooting, production incident investigation, reporting, data validation, and collaboration with business and technical stakeholders. My experience with SQL, Unix shell scripting, SAP Crystal Reports, and Oracle BI Publisher has given me a solid foundation in working with enterprise data and understanding business processes.\n\nI'm now transitioning into Data Analytics and expanding my skills in Python, Power BI, Tableau, and Excel. My goal is to combine my technical and functional background with analytical skills to deliver meaningful business insights.\n\nI'm actively seeking opportunities to grow and contribute as a Data Analyst.",
  email: 'tshravya05@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shravya-tagilapalli-26234bb1/',
  resumeAvailable: true,
  resumeUrl: `${import.meta.env.BASE_URL}Shravya_Tagilapalli_Resume.docx`,
};

export const highlights = [
  { value: '6.5 Years', label: 'Professional Experience' },
  { value: '3 Companies', label: 'Career Journey' },
  { value: 'Data Analytics', label: 'Current Focus' },
];

export const aboutJourney = [
  { label: 'IT Experience', icon: 'Server' },
  { label: 'SQL & Reporting', icon: 'Database' },
  { label: 'Business Intelligence', icon: 'BarChart3' },
  { label: 'Data Analytics', icon: 'LineChart' },
];

export const experience = [
  {
    company: 'Wipro',
    title: 'Senior Software Engineer',
    period: 'June 2022 – February 2023',
    contextLabel: undefined,
    context: undefined,
    responsibilities: [
      {
        heading: 'Business Requirements & Stakeholder Collaboration',
        detail:
          'Collaborated with business stakeholders to gather, analyse, and translate complex reporting requirements into functional specifications for a data migration project in Oracle Retail Merchandising System (RMS) v19.',
      },
      {
        heading: 'SQL Development & Data Modelling',
        detail:
          'Designed and developed SQL queries and data models to enable efficient data extraction and support scalable, reliable reporting solutions.',
      },
      {
        heading: 'Reporting Solution Design',
        detail:
          'Analyzed business needs and proposed optimized report structures and layouts to improve data presentation, usability, and alignment with business objectives.',
      },
      {
        heading: 'Data Mapping & Technical Documentation',
        detail:
          'Developed comprehensive report specifications, technical design documents, and detailed query mappings to support accurate data extraction, data consistency, and traceability.',
      },
      {
        heading: 'Functional & Technical Analysis',
        detail:
          'Bridged business requirements and technical implementation by converting reporting needs into well-defined solution designs and development specifications.',
      },
    ],
    skills: [
      'SQL Development',
      'Data Modelling',
      'Data Mapping',
      'Reporting Solutions',
      'Business Analysis',
      'Requirements Gathering',
      'Technical Documentation',
    ],
  },
  {
    company: 'Tata Consultancy Services (TCS)',
    title: 'Senior Process Associate',
    period: 'June 2018 – June 2022',
    contextLabel: 'Client' as const,
    context: "Sainsbury's",
    responsibilities: [
      {
        heading: 'Oracle Retail Production Support',
        detail:
          'Provided production support for Oracle Retail Merchandising System (RMS v10) and Retail Data Warehouse (RDW), maintaining application stability and minimizing business disruption.',
      },
      {
        heading: 'Incident Management & Root Cause Analysis',
        detail:
          'Managed production incidents and service requests within defined SLAs, performing root cause analysis, troubleshooting, and timely issue resolution.',
      },
      {
        heading: 'SQL Troubleshooting & Data Validation',
        detail:
          'Used SQL queries to investigate application issues, validate data, identify discrepancies, and support issue resolution.',
      },
      {
        heading: 'Batch Monitoring & Production Operations',
        detail:
          'Monitored production applications and scheduled batch jobs, investigated failures, and supported corrective actions to maintain operational continuity.',
      },
      {
        heading: 'Change Requests & Application Enhancements',
        detail:
          'Gathered and analyzed business requirements for change requests and service improvements, translating requirements into functional and technical enhancements.',
      },
      {
        heading: 'Code Customization & Testing',
        detail:
          'Customized application code based on business requirements and performed unit and integration testing to validate functionality.',
      },
      {
        heading: 'Production Deployment & Release Support',
        detail:
          'Managed production code deployments in accordance with release procedures to minimize downtime and deployment risks.',
      },
      {
        heading: 'Stakeholder Communication & Ticket Management',
        detail:
          'Maintained incident and service request tickets, provided regular status updates, and coordinated with technical teams and business stakeholders.',
      },
      {
        heading: 'Proactive Monitoring & Knowledge Management',
        detail:
          'Performed proactive production monitoring and maintained support documentation, troubleshooting procedures, and knowledge-transfer materials.',
      },
    ],
    skills: [
      'Oracle RMS v10',
      'Oracle RDW',
      'SQL',
      'Production Support',
      'Root Cause Analysis',
      'Incident Management',
      'SLA Management',
      'Batch Monitoring',
      'Change Requests',
      'Testing',
      'Production Deployment',
    ],
  },
  {
    company: 'E2open',
    title: 'Implementation Engineer',
    period: 'December 2014 – February 2017',
    contextLabel: 'Project' as const,
    context: 'Fitbit — Demand Planning Solution',
    responsibilities: [
      {
        heading: 'Demand Planning Solution Implementation',
        detail:
          'Delivered a Demand Planning solution for Fitbit, supporting improved forecasting accuracy and data-driven supply chain decision-making.',
      },
      {
        heading: 'End-to-End Project Implementation',
        detail:
          'Played a key role in the end-to-end design and implementation of the Fitbit project, serving as the single point of contact for system configuration and database management.',
      },
      {
        heading: 'ETL & Data Integration',
        detail:
          'Applied ETL techniques using Adeptia to support data integration, transformation, and analysis.',
      },
      {
        heading: 'System Testing & Quality Assurance',
        detail:
          'Conducted smoke testing and unit testing to validate system functionality and stability before production deployment.',
      },
      {
        heading: 'Change Order Implementation',
        detail:
          'Implemented multiple Change Orders (COs), ensuring smooth integration and alignment with evolving business requirements.',
      },
    ],
    skills: [
      'Adeptia',
      'ETL',
      'Data Integration',
      'Demand Planning',
      'Database Management',
      'Data Analysis',
      'System Configuration',
      'Smoke Testing',
      'Unit Testing',
    ],
  },
];

export type SkillCategory = {
  name: string;
  status: 'established' | 'developing';
  skills: { name: string; icon: string }[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: 'Data Analytics',
    status: 'developing',
    skills: [
      { name: 'Power BI', icon: 'LayoutDashboard' },
      { name: 'Tableau', icon: 'PieChart' },
      { name: 'Python', icon: 'Code2' },
      { name: 'Microsoft Excel', icon: 'Sheet' },
    ],
  },
  {
    name: 'Database',
    status: 'established',
    skills: [{ name: 'SQL', icon: 'Database' }],
  },
  {
    name: 'Enterprise Technology',
    status: 'established',
    skills: [{ name: 'Oracle Retail Applications', icon: 'Building2' }],
  },
  {
    name: 'Reporting',
    status: 'established',
    skills: [
      { name: 'SAP Crystal Reports', icon: 'FileText' },
      { name: 'Oracle BI Publisher', icon: 'Printer' },
    ],
  },
  {
    name: 'Scripting',
    status: 'established',
    skills: [{ name: 'Basic Unix Shell Scripting', icon: 'Terminal' }],
  },
  {
    name: 'Professional Expertise',
    status: 'established',
    skills: [
      { name: 'Production Support', icon: 'LifeBuoy' },
      { name: 'Functional Consulting', icon: 'Briefcase' },
      { name: 'Application Troubleshooting', icon: 'Wrench' },
      { name: 'Business Process Understanding', icon: 'Workflow' },
    ],
  },
];

export const expertise = [
  {
    title: 'Data Analysis & Visualization',
    description:
      'Developing analytical and visualization skills to uncover actionable insights.',
    icon: 'LineChart',
  },
  {
    title: 'Power BI & Tableau',
    description:
      'Building capabilities in interactive dashboards and business reporting.',
    icon: 'LayoutDashboard',
  },
  {
    title: 'SQL & Reporting',
    description: 'Applying SQL knowledge to retrieve, analyze, and organize data.',
    icon: 'Database',
  },
  {
    title: 'Business Intelligence',
    description:
      'Combining enterprise reporting experience with modern analytics tools.',
    icon: 'BarChart3',
  },
  {
    title: 'Oracle Retail Consulting',
    description:
      'Experience with enterprise retail applications and functional processes.',
    icon: 'Building2',
  },
  {
    title: 'Production Support',
    description:
      'Experience investigating application issues and supporting enterprise operations.',
    icon: 'LifeBuoy',
  },
];

export const education = {
  degree: 'Bachelor of Technology — Information Technology',
  institution: 'Vignan Institute of Technology for Women',
  university: 'Jawaharlal Nehru Technological University Hyderabad (JNTUH)',
  graduated: '2014',
};

export const certification = {
  title: 'Certified Data Analyst',
  institute: 'The Data Analytics Institute (TDAI)',
  duration: 'October 2026 – March 2027',
  status: 'In Progress',
  field: 'Data Analytics',
};

export const transitionSteps = [
  { label: 'Oracle Retail', icon: 'Building2' },
  { label: 'SQL & Reporting', icon: 'Database' },
  { label: 'Python & BI Tools', icon: 'Code2' },
  { label: 'Data Analytics', icon: 'LineChart' },
];

export type CaseStudySql = {
  label: string;
  description: string;
  query: string;
};

export const rmsCaseStudy = {
  title: 'Oracle Retail RMS — Inventory Discrepancy & Batch Failure Investigation',
  type: 'Simulated Production Support Case Study',
  overview:
    'A simulated production support case study investigating an inventory discrepancy caused by an unsuccessful purchase-order receiving batch in Oracle Retail RMS.',
  technologies: [
    'Oracle Retail RMS concepts',
    'SQL',
    'Inventory Management',
    'Batch Processing',
    'Root Cause Analysis',
    'Incident Management',
  ],
  modules: [
    'Purchase Orders & Receiving',
    'Inventory / Stock on Hand',
    'Item-Location Master',
    'Batch Processing',
  ],
  scenario:
    'A store reports 120 units of physical inventory for SKU1001, while its RMS stock-on-hand balance is only 95 units. Investigation reveals a pending 25-unit purchase-order receipt. The shared simulated batch failed because another item, SKU2002, had an inactive item-location record. Under this simulation\'s all-or-nothing batch processing assumption, the failure prevented SKU1001\'s valid receipt from being posted.',
  problem: {
    kpis: [
      { label: 'RMS Stock', value: '95', unit: 'units' },
      { label: 'Physical Stock', value: '120', unit: 'units' },
      { label: 'Discrepancy', value: '25', unit: 'units' },
    ],
    description:
      'Stock discrepancies can affect replenishment, inventory visibility, and operational decisions. When RMS balances do not match physical counts, buyers and store systems may act on inaccurate stock data, leading to over- or under-ordering and reduced confidence in system records.',
  },
  investigation: [
    'Identify the stock discrepancy through SQL.',
    'Check purchase-order and receipt records.',
    'Examine scheduled batch execution status.',
    'Review failure logs.',
    'Validate item-location master data.',
    'Identify the underlying processing failure.',
  ],
  sql: [
    {
      label: 'Query A — Stock Mismatch',
      description:
        'Find mismatches between physical counts and recorded RMS stock in the simplified inventory table.',
      query: `-- Simplified demonstration table; not an Oracle RMS v10 base table.
SELECT
  i.sku,
  i.store,
  i.rms_stock_on_hand,
  i.physical_count,
  (i.physical_count - i.rms_stock_on_hand) AS variance
FROM inventory i
WHERE i.physical_count <> i.rms_stock_on_hand
ORDER BY ABS(i.physical_count - i.rms_stock_on_hand) DESC;`,
    },
    {
      label: 'Query B — Pending Purchase-Order Receipts',
      description: 'Identify pending purchase-order receipts for the affected SKU and store.',
      query: `-- Simplified demonstration table; not an Oracle RMS v10 base table.
SELECT
  po.po_number,
  po.sku,
  po.store,
  po.ordered_qty,
  po.received_qty,
  (po.ordered_qty - po.received_qty) AS pending_qty
FROM purchase_orders po
WHERE po.sku = 'SKU1001'
  AND po.store = 'STORE_001'
  AND po.received_qty < po.ordered_qty;`,
    },
    {
      label: 'Query C — Failed Batches & Item-Location Status',
      description:
        'Investigate failed batches and their associated item-location statuses to locate the blocking record.',
      query: `-- Simplified demonstration tables; not Oracle RMS v10 base tables.
SELECT
  b.batch_id,
  b.status,
  b.failure_reason,
  r.po_number,
  r.sku,
  il.item_location_status
FROM batch_runs b
JOIN receipts r ON b.batch_id = r.batch_id
LEFT JOIN item_locations il
  ON r.sku = il.sku AND r.store = il.store
WHERE b.status = 'FAILED'
ORDER BY b.batch_id DESC;`,
    },
  ] as CaseStudySql[],
  rootCause: [
    { label: 'Inactive Item-Location Record', detail: 'SKU2002 in the batch had an inactive item-location record.' },
    { label: 'Receipt Batch Validation Failure', detail: 'The shared simulated batch failed validation before posting.' },
    { label: 'Pending Purchase-Order Receipt', detail: "SKU1001's valid 25-unit receipt was not posted." },
    { label: '25-Unit Stock Discrepancy', detail: 'RMS stock stayed at 95 while physical stock was 120.' },
  ],
  rootCauseNote:
    'The all-or-nothing batch posting behavior is a specific assumption of this simulated case, not a claim about how every Oracle Retail batch works in production.',
  resolution: [
    'Validate receiving and inventory records.',
    'Coordinate with functional and master-data teams.',
    'Obtain approval for correcting the invalid item-location or handling the affected receipt.',
    'Recover the batch using approved procedures with duplicate-posting safeguards.',
    'Reconcile purchase-order receipts and stock quantities.',
    'Record the incident RCA and preventive actions.',
  ],
  outcome: {
    note: 'Illustrative projected recovery, not an actual client incident outcome.',
    before: [
      { label: 'RMS Stock', value: '95' },
      { label: 'Physical Stock', value: '120' },
      { label: 'Variance', value: '25' },
    ],
    after: [
      { label: 'RMS Stock', value: '120' },
      { label: 'Physical Stock', value: '120' },
      { label: 'Variance', value: '0' },
    ],
  },
  skills: [
    'SQL Troubleshooting',
    'Inventory Reconciliation',
    'Oracle Retail Functional Knowledge',
    'Batch Monitoring',
    'RCA',
    'Incident Management',
    'Data Validation',
    'Business Communication',
  ],
  disclaimer:
    'This is a personal learning and demonstration project. The scenario, data, and outcomes are synthetic and do not represent an actual client incident.',
  assets: [],
} as const;

export type ChartPoint = { label: string; value: number };
export type ChartSeries = { label: string; color: string; points: ChartPoint[] };

export const ipmCaseStudy = {
  title: 'Oracle Retail RMS — Incident & Problem Management',
  subtitle: 'Production Support, Root Cause Analysis & Permanent Corrective Actions',
  cardSubtitle: 'Production Support & Operational Analytics',
  type: 'Simulated Case Study Based on Enterprise Oracle Retail Production Support Workflows',
  description:
    'An end-to-end production support case study demonstrating incident resolution, SLA tracking, SQL troubleshooting, recurring problem investigation, root cause analysis, permanent code fixes, UAT, and production deployment through planned maintenance releases.',
  overview:
    'This project demonstrates the end-to-end Oracle Retail production support lifecycle, covering incident investigation, service restoration, SLA monitoring, recurring problem identification, code analysis, permanent corrective actions, testing, UAT, and controlled production deployment through maintenance releases. The case study also demonstrates how SQL and operational analytics can be used to monitor incident trends, identify recurring issues, and support application stability.',
  technologies: [
    'Oracle Retail RMS v10',
    'ReSA',
    'SQL',
    'Production Support',
    'Incident Management',
    'Problem Management',
    'Root Cause Analysis',
    'Batch Monitoring',
    'Code Analysis',
    'UAT',
    'Change Management',
    'Maintenance Releases',
  ],
  keyMetrics: [
    { label: 'Incidents', value: '500' },
    { label: 'Resolution Rate', value: '95%' },
    { label: 'SLA Compliance', value: '98%' },
    { label: 'Problem Logs', value: '4' },
    { label: 'Production Fixes', value: '3' },
  ],
  incidentKpis: [
    { label: 'Total Incidents Received', value: '500', tone: 'primary' },
    { label: 'Incidents Resolved', value: '475', tone: 'accent' },
    { label: 'Unresolved Incidents', value: '25', tone: 'muted' },
    { label: 'Resolution Rate', value: '95%', tone: 'primary' },
    { label: 'Resolved Within SLA', value: '466', tone: 'accent' },
    { label: 'SLA Breaches (Resolved)', value: '9', tone: 'muted' },
    { label: 'SLA Compliance', value: '98.11%', tone: 'primary' },
  ],
  incidentKpiNote: 'SLA Compliance = 466 / 475 × 100 = 98.11%.',
  problemKpis: [
    { label: 'Problem Logs (PB Logs) Created', value: '4', tone: 'primary' },
    { label: 'Recurring Incidents Linked', value: '10', tone: 'accent' },
    { label: 'Root Cause Analyses Completed', value: '3', tone: 'primary' },
    { label: 'Permanent Code Fixes Deployed', value: '3', tone: 'accent' },
    { label: 'Problems Under Investigation', value: '1', tone: 'muted' },
  ],
  incidentActivities: [
    'Provided production support for Oracle Retail RMS and ReSA applications, investigating incidents affecting business operations.',
    'Managed incidents and service requests, prioritizing issues based on severity, business impact, and SLA requirements.',
    'Performed SQL-based investigation and data validation to identify transactional discrepancies, incorrect records, and processing failures.',
    'Monitored scheduled batch jobs and production interfaces, investigated job failures, and coordinated corrective actions.',
    'Investigated production issues involving purchase orders, receiving, inventory/stock on hand, stock transfers, item-location master data, and sales processing.',
    'Collaborated with functional, technical, and business teams to resolve application issues and restore normal business operations.',
    'Documented incident analysis, troubleshooting steps, and resolution details in the ticketing process.',
  ],
  incidentWorkflow: [
    'Incident Logged',
    'Priority Assessment',
    'SQL & Log Investigation',
    'Root Cause Identification',
    'Resolution / Workaround',
    'Validation',
    'Incident Closure',
  ],
  charts: {
    moduleComparison: {
      title: 'Incidents Received vs Resolved by Oracle Retail Module',
      series: [
        {
          label: 'Received',
          color: 'from-primary/70 to-primary/40',
          points: [
            { label: 'Receiving', value: 110 },
            { label: 'Inventory', value: 95 },
            { label: 'Item Master', value: 80 },
            { label: 'Sales (ReSA)', value: 70 },
            { label: 'Stock Transfers', value: 55 },
            { label: 'Batch Jobs', value: 90 },
          ],
        },
        {
          label: 'Resolved',
          color: 'from-accent/70 to-accent/40',
          points: [
            { label: 'Receiving', value: 104 },
            { label: 'Inventory', value: 90 },
            { label: 'Item Master', value: 76 },
            { label: 'Sales (ReSA)', value: 67 },
            { label: 'Stock Transfers', value: 52 },
            { label: 'Batch Jobs', value: 86 },
          ],
        },
      ],
    },
    priorityDistribution: {
      title: 'Incident Priority Distribution',
      points: [
        { label: 'P1', value: 45 },
        { label: 'P2', value: 130 },
        { label: 'P3', value: 220 },
        { label: 'P4', value: 105 },
      ],
    },
    rootCauseCategory: {
      title: 'Incidents by Root Cause Category',
      points: [
        { label: 'Data Issue', value: 140 },
        { label: 'Batch Failure', value: 110 },
        { label: 'Master Data', value: 95 },
        { label: 'Config', value: 80 },
        { label: 'Interface', value: 45 },
        { label: 'Other', value: 30 },
      ],
    },
    slaCompliance: {
      title: 'SLA Compliance',
      withinSla: 466,
      breaches: 9,
    },
    avgResolutionTime: {
      title: 'Average Incident Resolution Time (hours) by Priority',
      points: [
        { label: 'P1', value: 2.4 },
        { label: 'P2', value: 5.8 },
        { label: 'P3', value: 11.2 },
        { label: 'P4', value: 18.6 },
      ],
    },
    openVsResolved: {
      title: 'Open vs Resolved Incidents',
      resolved: 475,
      open: 25,
    },
    incidentTrend: {
      title: 'Incident Trends Across the Reporting Period',
      points: [
        { label: 'W1', value: 42 },
        { label: 'W2', value: 48 },
        { label: 'W3', value: 55 },
        { label: 'W4', value: 60 },
        { label: 'W5', value: 58 },
        { label: 'W6', value: 52 },
        { label: 'W7', value: 47 },
        { label: 'W8', value: 40 },
        { label: 'W9', value: 38 },
        { label: 'W10', value: 34 },
      ],
    },
  },
  problemSummary:
    'Initiated 4 Problem Logs to investigate underlying issues associated with 10 recurring production incidents. Completed detailed root cause analysis for 3 problems, investigated application code and processing logic, and developed permanent corrective changes. Following successful unit testing, integration testing, and business User Acceptance Testing (UAT), the approved fixes were deployed into the production environment as part of planned maintenance releases. The remaining Problem Log continued under investigation for a permanent solution.',
  problemActivities: [
    {
      heading: 'Problem Identification & Logging',
      details: [
        'Analyzed recurring incidents to identify common error patterns and underlying application defects.',
        'Created and maintained 4 Problem Logs for issues requiring permanent corrective actions.',
        'Linked 10 recurring incident records to the relevant Problem Logs for investigation and traceability.',
      ],
    },
    {
      heading: 'Root Cause Analysis',
      details: [
        'Performed detailed root cause analysis using incident histories, SQL queries, batch logs, application error messages, and functional process reviews.',
        'Identified underlying technical and functional causes associated with recurring failures.',
        'Documented investigation findings and proposed corrective actions.',
      ],
    },
    {
      heading: 'Application Code Investigation',
      details: [
        'Reviewed application code and processing logic to identify defects contributing to recurring issues.',
        'Analyzed SQL queries, data validation logic, and batch processing behavior where applicable.',
        'Coordinated with technical teams to determine permanent remediation approaches.',
      ],
    },
    {
      heading: 'Permanent Code Fixes',
      details: [
        'Developed and implemented approved application code changes addressing identified root causes.',
        'Ensured the corrective changes aligned with documented business and technical requirements.',
        'Prepared supporting technical documentation and change records.',
      ],
    },
    {
      heading: 'Testing & Validation',
      details: [
        'Conducted unit testing to validate individual code changes.',
        'Supported integration testing to confirm affected application processes continued to function correctly.',
        'Coordinated business User Acceptance Testing (UAT) to verify that fixes met expected business requirements.',
        'Obtained the required approvals before scheduling production deployment.',
      ],
    },
    {
      heading: 'Maintenance Release Deployment',
      details: [
        'Included 3 validated permanent fixes in planned maintenance releases.',
        'Followed established change management and deployment procedures.',
        'Coordinated production deployment of approved fixes during the maintenance release window.',
        'Performed post-deployment smoke testing and application validation.',
        'Monitored affected processes to assess whether the recurring issues had been addressed.',
      ],
    },
    {
      heading: 'Preventive Monitoring',
      details: [
        'Reviewed subsequent application behavior, batch execution logs, and related incident records.',
        'Monitored for recurrence of previously identified defects.',
        'Maintained Problem Log documentation and closure evidence in accordance with support procedures.',
      ],
    },
  ],
  problemWorkflow: [
    'Recurring Incidents',
    'Problem Log Created',
    'Root Cause Analysis',
    'Application Code Investigation',
    'Permanent Code Fix',
    'Unit & Integration Testing',
    'Business UAT',
    'Change Approval',
    'Maintenance Release Deployment',
    'Post-Deployment Validation',
    'Preventive Monitoring',
  ],
  problemPerformance: [
    {
      label: '4 Problem Logs Created',
      detail: 'Four Problem Records were initiated to investigate underlying issues associated with recurring incidents.',
    },
    {
      label: '10 Recurring Incidents Linked',
      detail: 'Ten incident records were linked to the relevant Problem Logs to support pattern analysis and root cause investigation.',
    },
    {
      label: '3 Root Causes Identified',
      detail: 'Three investigations reached a documented root cause and progressed to permanent corrective action.',
    },
    {
      label: '3 Permanent Fixes Deployed',
      detail: 'Three approved fixes successfully completed technical testing and business UAT before being deployed through planned maintenance releases.',
    },
    {
      label: '1 Problem Under Investigation',
      detail: 'One Problem Record remained open for further investigation and identification of a permanent solution.',
    },
  ],
  sql: [
    {
      label: 'Total Incidents Received',
      description: 'Count all incidents received during the reporting period.',
      query: `-- Simplified demonstration table; not an Oracle RMS v10 application table.
SELECT COUNT(*) AS total_incidents_received
FROM incidents
WHERE received_at >= DATE '2024-01-01' AND received_at < DATE '2024-02-01';`,
    },
    {
      label: 'Resolved vs Unresolved Incidents',
      description: 'Compare resolved and unresolved incident counts.',
      query: `-- Simplified demonstration table; not an Oracle RMS v10 application table.
SELECT
  status,
  COUNT(*) AS incident_count
FROM incidents
GROUP BY status;`,
    },
    {
      label: 'Resolution Rate',
      description: 'Calculate the percentage of resolved incidents.',
      query: `-- Simplified demonstration table; not an Oracle RMS v10 application table.
SELECT
  COUNT(*) AS total_incidents,
  SUM(CASE WHEN status = 'RESOLVED' THEN 1 ELSE 0 END) AS resolved_incidents,
  ROUND(
    100.0 * SUM(CASE WHEN status = 'RESOLVED' THEN 1 ELSE 0 END) / COUNT(*),
    2
  ) AS resolution_rate_pct
FROM incidents;`,
    },
    {
      label: 'SLA Compliance',
      description: 'Measure SLA compliance among resolved incidents.',
      query: `-- Simplified demonstration table; not an Oracle RMS v10 application table.
SELECT
  SUM(CASE WHEN status = 'RESOLVED' AND sla_met = 'Y' THEN 1 ELSE 0 END) AS resolved_within_sla,
  SUM(CASE WHEN status = 'RESOLVED' AND sla_met = 'N' THEN 1 ELSE 0 END) AS sla_breaches,
  ROUND(
    100.0 * SUM(CASE WHEN status = 'RESOLVED' AND sla_met = 'Y' THEN 1 ELSE 0 END)
    / NULLIF(SUM(CASE WHEN status = 'RESOLVED' THEN 1 ELSE 0 END), 0),
    2
  ) AS sla_compliance_pct
FROM incidents;`,
    },
    {
      label: 'Incidents by Oracle Retail Module',
      description: 'Group incidents by affected Oracle Retail module.',
      query: `-- Simplified demonstration table; not an Oracle RMS v10 application table.
SELECT
  module,
  COUNT(*) AS incident_count
FROM incidents
GROUP BY module
ORDER BY incident_count DESC;`,
    },
    {
      label: 'Recurring Incident Identification',
      description: 'Identify recurring incidents by error pattern.',
      query: `-- Simplified demonstration table; not an Oracle RMS v10 application table.
SELECT
  error_code,
  module,
  COUNT(*) AS occurrences
FROM incidents
GROUP BY error_code, module
HAVING COUNT(*) > 1
ORDER BY occurrences DESC;`,
    },
    {
      label: 'Incidents Linked to Problem Logs',
      description: 'List incidents linked to Problem Logs.',
      query: `-- Simplified demonstration tables; not Oracle RMS v10 application tables.
SELECT
  p.problem_id,
  p.title,
  COUNT(i.incident_id) AS linked_incidents
FROM problem_logs p
JOIN incidents i ON i.problem_id = p.problem_id
GROUP BY p.problem_id, p.title
ORDER BY linked_incidents DESC;`,
    },
    {
      label: 'Problem Status Tracking',
      description: 'Show Problem Log status counts.',
      query: `-- Simplified demonstration table; not an Oracle RMS v10 application table.
SELECT
  status,
  COUNT(*) AS problem_count
FROM problem_log
GROUP BY status;`,
    },
    {
      label: 'RCA Completion',
      description: 'Count completed root cause analyses.',
      query: `-- Simplified demonstration table; not an Oracle RMS v10 application table.
SELECT
  COUNT(*) AS total_problems,
  SUM(CASE WHEN rca_completed = 'Y' THEN 1 ELSE 0 END) AS rca_completed
FROM problem_log;`,
    },
    {
      label: 'Maintenance Release Deployment Status',
      description: 'Track permanent fixes deployed through maintenance releases.',
      query: `-- Simplified demonstration tables; not Oracle RMS v10 application tables.
SELECT
  mr.release_id,
  mr.status,
  COUNT(f.fix_id) AS fixes_deployed
FROM maintenance_release mr
LEFT JOIN permanent_fix f ON f.release_id = mr.release_id
GROUP BY mr.release_id, mr.status
ORDER BY mr.release_id;`,
    },
  ] as CaseStudySql[],
  incidentProblemRelationship: [
    'Several recurring batch-processing incidents are investigated individually to restore service.',
    'Further analysis identifies a common underlying processing defect.',
    'A Problem Log is created, linking the recurring incidents.',
    'The code defect is investigated and corrected.',
    'The fix progresses through testing, UAT, change approval, and a planned maintenance release.',
    'Post-deployment monitoring assesses whether the defect recurs.',
  ],
  businessValue: [
    'Timely production incident resolution.',
    'SLA-focused application support.',
    'Improved visibility into recurring incident patterns.',
    'Structured Problem Management and root cause investigation.',
    'Permanent corrective changes for recurring defects.',
    'Controlled production deployments through maintenance releases.',
    'Proactive monitoring and improved operational reliability.',
  ],
  skills: [
    'Oracle Retail RMS',
    'ReSA',
    'SQL',
    'Production Support',
    'Incident Management',
    'Problem Management',
    'SLA Monitoring',
    'Root Cause Analysis',
    'Application Troubleshooting',
    'Batch Monitoring',
    'Code Analysis',
    'Unit Testing',
    'Integration Testing',
    'UAT',
    'Change Management',
    'Maintenance Release Deployment',
    'Reporting & Analytics',
  ],
  disclaimer:
    'This is a simulated case study based on professional experience with Oracle Retail production support. The 500 incidents, SLA results, Problem Log counts, and deployment counts are synthetic demonstration figures and are not presented as actual Sainsbury\'s or TCS performance metrics. No confidential production screenshots, code, client records, or internal business data are included.',
} as const;

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
