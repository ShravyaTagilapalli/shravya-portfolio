export const rejectShopCaseStudy = {
  title: 'The Reject Shop — Retail Sales Analytics Dashboard',
  cardTitle: 'The Reject Shop — Retail Sales Analytics Dashboard',
  cardSubtitle: 'Excel | EDA | PivotTables | Interactive Dashboard',
  cardDescription:
    'Developed as part of my Certified Data Analyst course at The Data Analytics Institute (TDAI), this assignment demonstrates an end-to-end Excel analytics workflow involving data preparation, exploratory data analysis (EDA), PivotTable analysis, and interactive dashboard development using native Excel charts and slicers.',
  academicNote: 'Academic project | Synthetic dataset | Microsoft Excel',
  workbookPath: '/assets/files/projects/data-analytics/The_Reject_Shop_Sales_Dashboard_Output.xlsx',
  workbookFileName: 'The_Reject_Shop_Sales_Dashboard_Output.xlsx',
  cardBadges: ['Excel', 'EDA', 'Pivot Analysis', 'Slicers', 'Dashboard'],
  category: 'TDAI Course Assignment',
  institute: 'The Data Analytics Institute (TDAI)',
  course: 'Certified Data Analyst — In Progress',
  projectType: 'Excel Data Analytics Course Assignment',
  status: 'Completed Course Assignment',
  overview:
    'As part of my Certified Data Analyst course at The Data Analytics Institute (TDAI), I completed a retail sales analytics assignment using Microsoft Excel. The objective was to transform raw retail sales data into a structured, interactive dashboard through data preparation, Exploratory Data Analysis (EDA), PivotTable analysis, and dynamic data visualization.',
  disclaimer:
    'This is an academic learning assignment completed during my TDAI Certified Data Analyst course, using a dataset associated with The Reject Shop. It is not an official client engagement, paid employment, or a project commissioned by The Reject Shop, and it was not deployed into any business system. The workbook contains synthetic data created for this assignment and is available to download for review.',
  problemStatement:
    'Raw retail sales data is difficult to act on in its original form. The assignment asked how the data could be prepared, explored, and summarized so that sales performance across time, channels, states, product categories, managers, and buyers could be investigated quickly and clearly.',
  tools: ['Microsoft Excel', 'PivotTables', 'PivotCharts', 'Slicers', 'Excel Formulas', 'Native Excel Charts'],
  workflow: [
    'Raw Excel Data',
    'Data Preparation',
    'Exploratory Data Analysis',
    'PivotTable Analysis',
    'Interactive Excel Dashboard',
    'Business Insights',
  ],
  stages: [
    {
      title: 'Data Preparation',
      points: [
        'Reviewed the original retail sales dataset.',
        'Organized source data into a structured, analysis-ready Excel worksheet.',
        'Prepared date and month fields for time-based reporting.',
        'Standardized and organized sales channel and reporting fields for analytical use.',
        'Prepared the data for PivotTables and dashboard development.',
      ],
    },
    {
      title: 'Exploratory Data Analysis',
      points: [
        'Explored sales performance over time.',
        'Compared online sales with physical store sales.',
        'Examined sales distribution across Australian states.',
        'Investigated performance by product category.',
        'Analyzed sales attributed to managers and buyers.',
        'Used exploratory findings to determine useful dashboard KPIs and visualizations.',
      ],
    },
    {
      title: 'Pivot Analysis',
      points: [
        'Created PivotTables to summarize and aggregate sales data.',
        'Developed sales comparisons across multiple business dimensions.',
        'Prepared supporting chart-data calculations.',
        'Used PivotTable-based analysis to support dynamic Excel reporting.',
      ],
    },
    {
      title: 'Interactive Dashboard',
      points: [
        'Built an interactive Microsoft Excel sales dashboard using native Excel charts and PivotTable-connected slicers, allowing users to dynamically filter and explore sales performance without relying on static dashboard images.',
      ],
    },
  ],
  pivotTableCount: 10,
  kpis: [
    { label: 'Total Sales', value: 'A$1,829,681' },
    { label: 'Avg Sale per Data Record', value: 'A$406.14' },
    { label: 'Dataset Records', value: '4,505' },
    { label: 'Native Excel Charts', value: '7' },
  ],
  kpiNote:
    'Unfiltered baseline values from the completed course-assignment workbook. The average is per data record, not average order value.',
  charts: [
    { title: 'Total Sales Over Time', description: 'Shows changes in sales across the reporting period.' },
    { title: 'Average Sales Over Time', description: 'Displays the trend in average sales values over time.' },
    { title: 'Online vs Store Sales', description: 'Compares the sales contribution of physical retail stores and online channels.' },
    { title: 'Sales by Product Category', description: 'Displays performance across retail product categories.' },
    { title: 'Category Sales Proportions', description: 'Shows the percentage contribution of categories to overall sales.' },
    { title: 'Sales by Manager', description: 'Compares sales attributed to different managers.' },
    { title: 'Online Sales by Buyer', description: 'Analyzes buyer-level online sales performance.' },
  ],
  supportingViews: [
    'State-level sales summary with monthly trend view.',
  ],
  slicers: [
    { label: 'Financial Year', description: 'Filter all connected views to a specific financial year.' },
    { label: 'Sales Channel (Online / Store)', description: 'Compare online and physical store performance.' },
    { label: 'State', description: 'Investigate sales within individual Australian states.' },
    { label: 'Product Category', description: 'Focus on specific retail product categories.' },
  ],
  businessQuestions: [
    'How do retail sales change over time?',
    'How does online sales performance compare with physical stores?',
    'Which product categories contribute most to sales?',
    'How does sales performance differ across Australian states?',
    'How can managers and buyers compare their sales performance?',
    'How can interactive filters simplify retail performance analysis?',
  ],
  learningOutcomes: [
    'Preparing retail sales datasets for analysis.',
    'Applying EDA to understand business performance.',
    'Building PivotTables to summarize large datasets.',
    'Creating dynamic Excel charts linked to analytical data.',
    'Using slicers to enable interactive exploration.',
    'Structuring dashboards with clear KPIs and visual hierarchy.',
    'Translating raw sales data into business-focused reporting.',
  ],
  skillBadges: [
    'Microsoft Excel',
    'Data Preparation',
    'Exploratory Data Analysis',
    'PivotTables',
    'PivotCharts',
    'Slicers',
    'Data Aggregation',
    'Sales Trend Analysis',
    'Data Visualization',
    'Dashboard Development',
    'Business Reporting',
  ],
} as const;

export const rejectShopDashboardImage = {
  src: '/assets/images/projects/data-analytics/Capture.PNG',
  alt: 'Screenshot of The Reject Shop Excel sales dashboard with PivotTables, slicers, and native charts',
} as const;
