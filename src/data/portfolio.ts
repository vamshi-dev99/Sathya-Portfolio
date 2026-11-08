/**
 * Source of truth for portfolio content. Every fact here comes from
 * Sathya's master resume; nothing is invented.
 */

export const profile = {
  name: "Sathya Vamshi Mittakori",
  shortName: "Sathya",
  title: "Data Engineer",
  specialties: ["ETL / ELT Pipelines", "Data Warehousing", "Azure & Databricks"],
  currentRole: "Data Engineer Specialist",
  company: "Colorado Dept. of Human Services",
  location: "Denver, Colorado",
  email: "sathyavamshi.ed@gmail.com",
  linkedin: "https://www.linkedin.com/in/vamshi-m1999/",
  linkedinLabel: "linkedin.com/in/vamshi-m1999",
  github: "https://github.com/vamshi-dev99",
  githubLabel: "github.com/vamshi-dev99",
  resume: "Sathya_Mittakori_Resume.pdf",
  photo: "profile.jpg",
  years: "5+",
  openTo: "Open to Data Engineering, ETL & Analytics Engineering roles",
  tagline:
    "I build reliable data pipelines, dimensional models and data quality gates in Python and SQL, so the numbers on every dashboard can be trusted.",
  summary: [
    "Data engineer with 5+ years building ETL pipelines, dimensional models and data quality checks in Python and SQL.",
    "Today I engineer the data behind the Colorado Department of Human Services' Tier 2 RDMS dashboards, replacing manual Excel extracts with scheduled, validated pipelines into a SQL Server reporting layer. Before that, four years at GoDaddy moving CRM, billing and support data into a SQL Server and PostgreSQL warehouse.",
    "I work comfortably in the space between the business and the data: pinning down what a metric actually means before building the pipeline that feeds it. Hands-on with Azure Data Factory, Databricks and Spark.",
  ],
};

export const metrics: { value: string; label: string }[] = [
  { value: "5+ yrs", label: "Building data pipelines" },
  { value: "20+", label: "Dashboards on my star schema" },
  { value: "Every load", label: "Gated by data quality checks" },
];

export const highlights: { value: string; label: string }[] = [
  { value: "Manual → automated", label: "Tier 2 RDMS dashboard refresh moved off Excel extracts onto scheduled Python + SQL jobs" },
  { value: "280 agents", label: "Workforce data feed powering staffing and shift planning (GoDaddy)" },
  { value: "Full → incremental", label: "Largest fact tables moved to incremental loads once full reloads outgrew the overnight window" },
  { value: "GDPR · FERPA", label: "PII masking, data lineage and compliant handling of student records" },
];

export const skillGroups: { title: string; items: string[] }[] = [
  { title: "Languages", items: ["Python", "pandas", "PySpark", "SQL", "T-SQL", "PostgreSQL", "R"] },
  { title: "Data Engineering", items: ["ETL / ELT", "Incremental loads", "Dimensional modeling", "Star schema", "Data quality testing", "Apache Spark", "Airflow", "dbt", "Hadoop / MapReduce"] },
  { title: "Cloud & Warehouses", items: ["Azure Data Factory", "Azure Databricks", "Azure Synapse", "ADLS Gen2", "AWS S3 / Glue", "Amazon Redshift", "AWS Lambda", "Snowflake"] },
  { title: "Databases", items: ["SQL Server", "PostgreSQL", "MySQL"] },
  { title: "BI & Analytics", items: ["Power BI", "Tableau", "Excel", "A/B test feature tables", "Customer segmentation data"] },
  { title: "DevOps & Tools", items: ["Git", "Azure DevOps (CI/CD)", "JIRA", "Salesforce", "Dynamics 365"] },
  { title: "Governance", items: ["Source-to-target mapping", "Data dictionary", "Data lineage", "PII masking", "GDPR", "FERPA"] },
];

export type Experience = {
  company: string;
  client?: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Colorado Department of Human Services",
    role: "Data Engineer Specialist",
    period: "Nov 2025 - Present",
    location: "Denver, CO",
    highlights: [
      "Moved the Tier 2 RDMS dashboard refresh off manual Excel extracts onto scheduled Python and SQL jobs that pull from source systems, validate the data and load a SQL Server reporting layer.",
      "Wrote data quality checks (row counts, nulls, duplicate keys, sudden KPI swings) that run on every load and halt the refresh when something looks off, so bad data never reaches a published dashboard.",
      "Built source-to-target mappings for Tier 2 metrics with BITS, Community Partnerships and Disability Determination Services in a shared data dictionary.",
      "Built the Vendor Diversity dataset by joining state procurement contracts with vendor certification lists, standardizing and matching vendor names spelled several ways across systems.",
    ],
    stack: ["Python", "SQL Server", "T-SQL", "Azure DevOps", "Git"],
  },
  {
    company: "Cumberland University",
    role: "Data Analyst",
    period: "Oct 2024 - Oct 2025",
    location: "Lebanon, TN",
    highlights: [
      "Pulled enrollment and program data with SQL and built Power BI and Excel reports that department heads used each term, handling all student records under FERPA.",
      "Set up a central ticketing system for student and faculty requests and reported on volume and turnaround time from its data.",
    ],
    stack: ["SQL", "Power BI", "Excel"],
  },
  {
    company: "GoDaddy",
    role: "Data Engineer",
    period: "Aug 2019 - Jul 2023",
    location: "Hyderabad, India",
    highlights: [
      "Built and ran daily Python and SQL ETL pipelines pulling customer, billing and support data from Salesforce, Dynamics 365 and MySQL into a SQL Server and PostgreSQL warehouse.",
      "Designed the star schema behind 20+ Power BI and Tableau dashboards for finance, marketing and support, and moved the largest fact tables to incremental loads.",
      "Wrote MapReduce jobs on Hadoop to roll raw support and web activity logs into daily summary tables analysts could query directly.",
      "Built the workforce data feed for a 280-agent support org; prepared feature tables for A/B tests and segmentation models; masked PII and documented lineage for GDPR audits.",
    ],
    stack: ["Python", "SQL Server", "PostgreSQL", "Hadoop", "Power BI", "Tableau"],
  },
];

export const certifications: { name: string; issuer: string; code?: string; status?: string }[] = [
  { name: "Power BI Data Analyst Associate", issuer: "Microsoft", code: "PL-300 · 2025" },
  { name: "Data Analytics and Visualization", issuer: "Accenture" },
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  url: string;
};

/** Add public GitHub projects here as they are published. */
export const projects: Project[] = [];

/**
 * Work case studies. Described generically on purpose: no employer code, data or
 * internal system details. Only the problem, the approach and the outcome.
 */
export type CaseStudy = {
  title: string;
  tag: string;
  context: string;
  did: string[];
  results: string[];
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "From manual Excel extracts to automated, validated dashboard refreshes",
    tag: "Pipeline automation",
    context:
      "A state human-services agency refreshed its Tier 2 RDMS dashboards from hand-built Excel extracts: slow, error-prone and hard for anyone else to rerun.",
    did: [
      "Replaced the extracts with scheduled Python and SQL jobs that pull from the source systems, validate the data and load a SQL Server reporting layer.",
      "Kept all SQL and Python in Git on Azure DevOps and wrote run notes for every job so anyone on the team can rerun or troubleshoot a failed load.",
    ],
    results: ["Manual refresh eliminated", "Reproducible, version-controlled jobs", "Any teammate can rerun a load"],
    stack: ["Python", "SQL Server", "Azure DevOps", "Git"],
  },
  {
    title: "Data quality gates that stop bad data before it is published",
    tag: "Data quality",
    context: "Published dashboards drive decisions; a silent bad load is worse than a late one.",
    did: [
      "Wrote checks for row counts, nulls, duplicate keys and sudden KPI swings that run on every load.",
      "Made the refresh halt automatically when a check fails, so stakeholders never see broken numbers.",
    ],
    results: ["Checks on every load", "Bad data never reaches a published dashboard"],
    stack: ["Python", "SQL", "Data quality testing"],
  },
  {
    title: "One shared definition for every metric",
    tag: "Data governance",
    context: "Tier 2 metrics came from several divisions, each with its own tables and business rules.",
    did: [
      "Built source-to-target mappings with BITS, Community Partnerships and Disability Determination Services covering source tables, business rules and targets.",
      "Published them in a shared data dictionary so every metric has one agreed meaning.",
    ],
    results: ["3 partner divisions aligned", "Single data dictionary"],
    stack: ["Source-to-target mapping", "Data dictionary", "SQL"],
  },
  {
    title: "Matching vendors spelled several different ways",
    tag: "Data integration",
    context: "Measuring vendor diversity meant joining procurement contracts to vendor certification lists that never used the same vendor names.",
    did: [
      "Standardized and matched vendor names across systems, then joined contracts to certification lists.",
      "Delivered the Vendor Diversity dataset as a clean, reusable source for reporting.",
    ],
    results: ["Vendor Diversity dataset delivered", "Names reconciled across systems"],
    stack: ["Python", "pandas", "SQL"],
  },
  {
    title: "A star-schema warehouse for finance, marketing and support",
    tag: "Data warehousing",
    context: "Customer, billing and support data lived in Salesforce, Dynamics 365 and internal MySQL databases.",
    did: [
      "Built daily Python and SQL ETL into a SQL Server and PostgreSQL warehouse and designed the star schema on top.",
      "Moved the largest fact tables to incremental loads once full reloads outgrew the overnight window.",
      "Masked PII in reporting tables and documented data lineage for GDPR audits.",
    ],
    results: ["20+ Power BI & Tableau dashboards", "Incremental loads fit the overnight window", "GDPR-ready lineage"],
    stack: ["Python", "SQL Server", "PostgreSQL", "Salesforce", "Dynamics 365", "Power BI", "Tableau"],
  },
  {
    title: "Workforce data for a 280-agent support organization",
    tag: "Analytics engineering",
    context: "Staffing and shift planning needed one daily view of scheduling, tickets and productivity.",
    did: [
      "Joined scheduling, ticket and productivity data into daily tables used for staffing and shift planning.",
      "Rolled raw support and web activity logs into daily summary tables with MapReduce on Hadoop.",
    ],
    results: ["280-agent org planned from one feed", "Analysts query summaries directly"],
    stack: ["Hadoop", "MapReduce", "SQL", "Python"],
  },
];

export const focusAreas: { title: string; description: string }[] = [
  { title: "ETL / ELT pipelines", description: "Scheduled Python and SQL pipelines from CRM, billing and operational systems into the warehouse, with incremental loads." },
  { title: "Dimensional modeling", description: "Star schemas that make Power BI and Tableau dashboards fast, consistent and easy to extend." },
  { title: "Data quality & governance", description: "Validation gates on every load, source-to-target mappings, data dictionaries, lineage and PII masking." },
  { title: "Azure data platform", description: "Azure Data Factory, Databricks, Spark, Synapse and ADLS Gen2, with code in Git and CI/CD on Azure DevOps." },
];

export const education = {
  school: "Cumberland University",
  degree: "M.S. Information Technology (GPA 3.54)",
};

export const languages = ["English"];
