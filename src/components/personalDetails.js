export const jobsData = [
    {
      frontmatter: {
        title: "Bioengineering",
        degree: "B.Tech",
        school: "Indian Institute of Technology (BHU) Varanasi",
        location: "Varanasi, India",
        range: "July 2017 - July 2022"
      },
      html: "<ul><li>GPA 3.91</li><li>IIT BHU Academic Merit Award for Dept rank 1</li></ul>"
    },
    {
      frontmatter: {
        title: "Biomedical Technology",
        degree: "M.Tech",
        school: "Indian Institute of Technology (BHU) Varanasi",
        location: "Varanasi, India",
        range: "July 2017 - July 2022"
      },
      html: "<ul><li>GPA 3.91</li><li>IIT BHU Academic Merit Award for Dept rank 1</li></ul>"
    },
    {
      frontmatter: {
        title: "Bioinformatics",
        degree: "MS",
        school: "Georgia Institute of Technology",
        location: "Atlanta, United States",
        range: "August 2023 - August 2024"
      },
      html: "<ul><li>GPA 3.91</li><li>Computational Biology GRA Faculty Award (x2)</li></ul>"
    },
];

export const skillCategories = [
    {
      title: "Languages",
      skills: ["Bash", "Python", "R", "SQL"]
    },
    {
      title: "Data Science",
      skills: ["Matplotlib", "Numpy", "Pandas", "Pytorch", "Scikit-learn"]
    },
    {
      title: "DevOps",
      skills: ["AWS", "Docker", "Git", "Linux", "Nextflow"]
    },
    {
      title: "Bioinformatics",
      skills: ["Bedtools", "BLAST", "Biopython", "DESeq2", "Seurat"]
    }
]

export const workexperiences = [
  {
    frontmatter: {
    title: "Bioinformatics Intern",
    company: "Ionis Pharmaceuticals",
    duration: "Jun 2024 - Aug 2024",
    description: [
      "Implemented large language foundation model on scRNA seq data for drug-target discovery resulting in 234 targets",
      "Optimized model for efficient fine-tuning using QLora, allowing easy integration into company's data discovery pipeline",
      "Performed comprehensive validation of disease-associated regulatory networks through functional enrichment analysis"
    ]}
  },
  {
    frontmatter: {
    title: "Senior Associate Data Scientist",
    company: "Publicis Sapient",
    duration: "Jul 2022 - Jul 2023",
    description: [
      "Led a cross-functional team to create an AI-driven solution, securing a major client and increasing revenue by 15%",
      "Engineered a self-attention transformer-based recommendation system, boosting prediction accuracy by 25%",
      "Developed customer segmentation models using advanced clustering algorithms, enhancing targeted marketing strategies",
      "Optimized machine learning workflows by implementing end-to-end CI/CD pipeline on AWS, improving agile development"
    ]}
  }
];

export const researchexperiences = [
  {
    frontmatter: {
    title: "Bioinformatics Research Assistant",
    company: "Emory University",
    duration: "Aug 2023 - Dec 2024",
    project: ["Project 1: Comprehensive Single Cell Characterization of Plasma cells across gestational ages","Project 2: Reconstruction of B-lymphocyte lineage based on mitochondrial mutations"],
    description: [
      ["Integrated scRNA-seq, ADT surface markers, B-Cell Receptors sequencing data from 20 donor samples across 3 tissues",
      "Analysing multi-modal data in Seurat, applying normalization, feature selection, clustering, visualization and differential gene expression to uncover celltype-specific transcriptional profiles",
      "Performing in-depth B-cell receptor repertoire analysis using Immcantation framework, characterizing clonal expansion, somatic hypermutation rates, and isotype usage across developmental ages"
      ],
      ["Developed a comprehensive bioinformatics pipeline for mitochondrial DNA variant calling using scRNA-seq data",
      "Applied statistical models to reconstruct lineage based on mutational patterns, employing techniques such as Gaussian Mixture Model and Subspace Cross-Entropy Model",
      "Implemented unsupervised clustering machine learning approaches, including k-means and hierarchical clustering algorithms, to reveal distinct lineage trajectories across donors",
    ]],
    professor: "Prof. Eliver Ghosn"},
    url: ""
  },
  {
    frontmatter: {
    title: "Masters Thesis",
    company: "ETH Zurich",
    duration: "Sep 2021 - Apr 2022",
    project:["Clinical Solution for Diagnosis of Coronary Microvascular Dysfunction (CMD)"],
    description: [[
      "Designed a CFD model to simulate micro-artery dynamics, incorporating perfusion information as boundary conditions",
      "Employed 3D printing and soft lithography to develop a bio-compatible microfluidic device for studying microcirculation",
      "Conducted adherent cell culture, testing cyto-compatibility and validating the microfluidic device’s biocompatibility"
    ]],
    professor: "Prof. Andrew deMello"},
    url: ""
  },
  {
    frontmatter: {
    title: "Bachelors Thesis",
    company: "IIT (BHU) Varanasi",
    duration: "Sep 2019 - Apr 2020",
    project: ["Undergraduate Thesis: Automated Brain Tumor Segmentation using Deep Learning"],
    description: [[
      "Collaborated with Institute Hospital to curate and pre-process raw T1 MRI scan data from patients for brain tumor analysis",
      "Implemented a U-Net deep learning architecture to automatically segment and identify areas of damaged brain tissues",
      "Achieved a dice score of 0.76, demonstrating superior performance compared to other methods on benchmark datasets"
    ]],
    professor: "Prof. Neeraj Sharma"},
    url: ""
  }
];

export const researchpapers = [
  {frontmatter: {
    year: "2023",
    title: "Colombo M, Chaudhry P, Oberholzer Y, deMello AJ. Integrative modeling of hemodynamic changes and perfusion impairment in coronary microvascular disease. Front Bioeng Biotechnol. 2023 Jul 26;11:1204178. doi: 10.3389/fbioe.2023.1204178. PMID: 37564992; PMCID: PMC10410158.",
    url: "https://pubmed.ncbi.nlm.nih.gov/37564992/"}
  }
];

export const projects = [
  {
    frontmatter: {
      title: "Drug Target Affinity Prediction",
      tech: ["Pytorch", "RDKit", "ESMFold"],
      github: "https://github.com/Palak-Chaudhry/Drug-Target-Affinity-Prediction",
      external: "https://github.com/Palak-Chaudhry/Drug-Target-Affinity-Prediction",
      description: "DTA prediction using attnetion based GNN"
    },
    html: "<p>This project aims to enhance drug-target binding affinity prediction by developing a more precise computational approach, utilizing advanced graph representation techniques for molecular interactions, and leveraging Evolutionary Scale Modeling 3 (ESM3) to generate 3D protein graph representations.</p>"
  },
  {
    frontmatter: {
      title: "Genome Assembler and Annotator",
      tech: ["Bash", "NextFlow", "HPC"],
      github: "https://github.com/Palak-Chaudhry/Bacterial-Genome-Assembler-and-Annotator",
      external: "https://github.com/Palak-Chaudhry/Denovo_Assembly_Nextflow",
      description: "Bacterial Genome Assembly and Annotation"
    },
    html: "<p>This pipeline streamlines genome assembly and annotation from Illumina paired-end reads. It performs quality control, compares multiple assemblers to offer the best solution, and provides flexible gene prediction and annotation options. The user-friendly interface requires minimal input, allowing researchers to easily generate high-quality genome assemblies and annotations for their projects.</p>"
  },
  {
    frontmatter: {
      title: "Malar-AI",
      tech: ["Tensorflow", "Keras", "OpenCV"],
      github: "https://github.com/Palak-Chaudhry/Malaria-detection-using-ResNet-50/tree/main",
      external: "https://github.com/Palak-Chaudhry/Malaria-detection-using-ResNet-50/tree/main",
      description: "Malaria detection using blood smear slides"
    },
    html: "<p>Malar-ai is a handy device(based on smartphones) used to detect probable malaria infection using blood smear slides. Powered by ResNet-50, cell-phone microscope and a staining kit, this setup is capable of performing at an accuracy of >95%, hence highly useful in remote and inaccessible areas.</p>"
  }
  // ... add more projects as needed
];
