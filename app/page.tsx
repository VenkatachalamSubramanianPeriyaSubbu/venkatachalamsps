"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, ExternalLink, ArrowUp, BookOpen, Briefcase, GraduationCap, User, FolderOpen, Home, MessageSquare } from 'lucide-react';

// Company and University Logos
const CompanyLogo = ({ name }) => {
  const logos = {
    'ArangoDB': '/arango-logo.webp',
    'USF': '/usf-logo.png',
    'USF Law': '/usf-law-logo.png',
    'EDF': '/edf-logo.png',
    'IIM Bangalore': '/iimb-logo.png',
    'CHRIST': '/christ-logo.webp'
  };
  
  return (
    <div className="inline-flex items-center justify-center px-2 py-2 bg-[#00d2be]/10 border border-[#00d2be]/30 rounded-xl">
      <img 
        src={logos[name]} 
        alt={`${name} logo`}
        className="h-8 w-auto object-contain"
      />
    </div>
  );
};

// Navigation Tabs
const Navigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'blog', label: 'Blog', icon: BookOpen },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-lg border-b border-[#00d2be]/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-[#00d2be] font-bold text-xl cursor-pointer"
            onClick={() => setActiveTab('home')}
          >
            VS
          </motion.div>

          <div className="hidden md:flex gap-1">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl transition-all text-sm ${
                  activeTab === tab.id
                    ? 'bg-[#00d2be] text-[#0d0d0d]'
                    : 'text-[#f5f5f5] hover:text-[#00d2be]'
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          <div className="md:hidden flex gap-2 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`p-2 rounded-xl transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#00d2be] text-[#0d0d0d]'
                      : 'text-[#f5f5f5]'
                  }`}
                >
                  <Icon size={20} />
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

// Home Page
const HomePage = ({ setActiveTab }) => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00d2be]/10 via-transparent to-[#00d2be]/5 animate-pulse" />
      
      <div className="max-w-6xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-[#f5f5f5] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Venkatachalam
            <br />
            <span className="text-[#00d2be]">Subramanian Periya Subbu</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-[#f5f5f5]/80 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Data Scientist • AI Engineer • Mathematician • Statistician
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-[#f5f5f5]/60 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I design intelligent systems that bridge data, mathematics, and real world decision making.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 210, 190, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('projects')}
              className="px-8 py-4 bg-[#00d2be] text-[#0d0d0d] font-semibold rounded-2xl"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('contact')}
              className="px-8 py-4 border-2 border-[#00d2be] text-[#00d2be] font-semibold rounded-2xl"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// About Page
const AboutPage = () => {
  return (
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-16">
            About <span className="text-[#00d2be]">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <img 
                src="/headshot.jpg" 
                alt="Venkatachalam Subramanian" 
                className="w-full h-[500px] object-cover rounded-3xl border-2 border-[#00d2be]/20"
                />

            </motion.div>

            <div className="space-y-6">
              <p className="text-lg text-[#f5f5f5]/80 leading-relaxed">
                I am an AI Engineer with experience in Generative AI, Large Language Models, graph databases, and RAG systems. My expertise spans LLM integration, computer vision, deep learning, and applied research.
              </p>
              <p className="text-lg text-[#f5f5f5]/80 leading-relaxed">
                My work bridges the gap between theory and real world applications, from fine tuning large language models to optimizing data driven decision pipelines. I am passionate about building scalable, explainable AI systems that solve complex problems.
              </p>
              <p className="text-lg text-[#f5f5f5]/80 leading-relaxed">
                Currently pursuing my M.S. in Data Science at the University of San Francisco with a perfect 4.0 GPA, I combine rigorous mathematical foundations with cutting edge AI techniques.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Education Page
const EducationPage = () => {
  const education = [
    {
      institution: 'University of San Francisco',
      shortName: 'USF',
      degree: 'M.S. in Data Science',
      duration: 'July 2024 to June 2025',
      gpa: '4.0/4.0',
      location: 'San Francisco, CA'
    },
    {
      institution: 'CHRIST University',
      shortName: 'CHRIST',
      degree: 'BSc in Economics, Mathematics, Statistics',
      duration: 'August 2021 to June 2024',
      gpa: '3.76/4.0',
      location: 'Bengaluru, India'
    }
  ];

  return (
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-16"
        >
          <span className="text-[#00d2be]">Education</span>
        </motion.h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02, boxShadow: '0 10px 40px rgba(0, 210, 190, 0.2)' }}
              className="bg-[#1a1a1a] p-8 rounded-3xl border border-[#00d2be]/20"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  {/* <div className="flex items-center gap-3 mb-3">
                    <CompanyLogo name={edu.shortName} />
                  </div> */}
                  <h3 className="text-2xl font-bold text-[#f5f5f5] mb-2">{edu.institution}</h3>
                  <p className="text-[#00d2be] text-lg mb-2">{edu.degree}</p>
                  <p className="text-[#f5f5f5]/60">{edu.location}</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-[#f5f5f5]/80 mb-2">{edu.duration}</p>
                  <p className="text-[#00d2be] font-semibold text-xl">GPA: {edu.gpa}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Experience Page
const ExperiencePage = () => {
  const experiences = [
    {
      title: 'AI Engineer',
      company: 'ArangoDB',
      shortName: 'ArangoDB',
      location: 'San Francisco, CA',
      duration: 'Aug 2025 to Present',
      bullets: [
        'Contributed to the open source LangChain ArangoDB package by extending the schema with index metadata, enabling optimized AQL queries and LLM powered retrieval that improved accuracy and reduced average query latency by 25% as an intern',
        'Implemented advanced similarity search strategies including Jaccard, Dot Product, and Max Inner Product in ArangoVector, improving top k retrieval accuracy by 18% on benchmark datasets compared to cosine similarity',
        'Enhanced SmartGraphs data partitioning to distribute data across user specified servers, enabling horizontal scaling to 5+ nodes and supporting fine grained RBAC for graphs with 100K+ nodes'
      ]
    },
    {
      title: 'Research Data Scientist',
      company: 'University of San Francisco - Center for Law, Tech and Social Good',
      shortName: 'USF Law',
      location: 'San Francisco, CA',
      duration: 'Aug 2025 to Present',
      bullets: [
        'Collected and analyzed 100+ state blockchain and AI statutes, 50+ legislative histories, and 20+ working group reports into a structured legal dataset',
        'Performed NLP analysis on 150K+ words of statutes, supporting research on technology legislation',
        'Built semantic tagging pipeline using LLMs and vector similarity to cluster legal provisions for better retrieval'
      ]
    },
    {
      title: 'Data Scientist',
      company: 'Environmental Defense Fund',
      shortName: 'EDF',
      location: 'San Francisco, CA',
      duration: 'October 2024 to June 2025',
      bullets: [
        'Built Python ETL pipeline to process 100+ scientific documents, reducing processing time by 90%',
        'Built a sequential NLP agent pipeline with LLaMA to classify papers at 92% accuracy, reducing review time by 85%',
        'Fine tuned VGG16 CNN in PyTorch for methane graph classification, reaching 92% accuracy on 4,000+ images',
        'Built a CV pipeline using YOLO, K Means, DBSCAN and ChartOCR to digitize emissions with 93% precision and 94% recall'
      ]
    },
    {
      title: 'Data Scientist Researcher Intern',
      company: 'Indian Institute of Management, Bangalore',
      shortName: 'IIM Bangalore',
      location: 'Bengaluru, India',
      duration: 'May 2023 to June 2023',
      bullets: [
        'Reviewed 50+ papers on GenAI and Large Language Models, summarizing architectures, theory, and applications',
        'Benchmarked foundational models including GPT, BERT, and PaLM, comparing performance and use cases',
        'Analyzed emerging GenAI trends across 10+ industries to identify opportunities and guide R&D strategy'
      ]
    }
  ];

  return (
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-16"
        >
          <span className="text-[#00d2be]">Experience</span>
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="bg-[#1a1a1a] p-8 rounded-3xl border border-[#00d2be]/20"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  {/* <div className="flex items-center gap-3 mb-3">
                    <CompanyLogo name={exp.shortName} />
                  </div> */}
                  <h3 className="text-2xl font-bold text-[#f5f5f5] mb-1">{exp.title}</h3>
                  <p className="text-[#00d2be] text-lg">{exp.company}</p>
                </div>
                <div className="text-left md:text-right mt-2 md:mt-0">
                  <p className="text-[#f5f5f5]/60">{exp.duration}</p>
                  <p className="text-[#f5f5f5]/60">{exp.location}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="text-[#f5f5f5]/80 flex">
                    <span className="text-[#00d2be] mr-3">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Projects Page
const ProjectsPage = () => {
  const projects = [
    {
      title: 'Chess Vision Model',
      description: 'Built a hackathon winning Chess Vision model with Attention and SE blocks, trained on 350K Grand Master games. Achieved 5× speedup and a perfect score versus Stockfish using PyTorch and TensorFlow on 48 GPUs.',
      tech: ['PyTorch', 'TensorFlow', 'Computer Vision', 'Deep Learning'],
      github: 'https://github.com/VenkatachalamSubramanianPeriyaSubbu/Chess-Vision-Hackathon',
      blog: 'https://words.strongcompute.com/p/maybe-attention-is-all-you-actually?utm_source=post-email-title&publication_id=3069270&post_id=152843053&utm_campaign=email-post-title&isFreemail=true&r=4binv6&triedRedirect=true'
    },
    {
      title: 'Speech Diarization Pipeline',
      description: 'Built EEND TA model using Transformer Attractors for speaker diarization on 6+ hours of VoxConverse audio. Trained and evaluated diarization pipeline with PyTorch, achieving 0.1314 BCE loss, surpassing typical baseline of 0.15.',
      tech: ['PyTorch', 'Transformers', 'Audio Processing', 'Deep Learning'],
      github: 'https://github.com/VenkatachalamSubramanianPeriyaSubbu/Speech_Diarization',
      blog: null
    },
    {
      title: 'Job Recommendation System',
      description: 'Built an end-to-end job recommendation system using GCP Composer, Apache Airflow, MongoDB, Spark SQL, PySpark, and BERT to automate data retrieval, preprocessing, and job matching. Improved recommendation quality with cosine similarity and neural networks for personalized job suggestions.',
      tech: ['GCP', 'Apache Airflow', 'MongoDB', 'PySpark', 'BERT'],
      github: 'https://github.com/VenkatachalamSubramanianPeriyaSubbu#:~:text=Job%2DRecommendation%2DSystem',
      blog: null
    },
    {
      title: 'TubeQuiz - YouTube Quiz Generator',
      description: 'Built a Streamlit web app that auto-generates quizzes from YouTube videos using AWS Transcribe for transcript extraction and Claude 3.5 via AWS Bedrock for AI-powered quiz creation. Implemented MCQ and short-answer generation with automated answer evaluation.',
      tech: ['Streamlit', 'AWS Bedrock', 'AWS Transcribe', 'Claude 3.5', 'Python'],
      github: 'https://github.com/VenkatachalamSubramanianPeriyaSubbu/TubeQuiz',
      blog: null
    },
    {
      title: 'InfraMeth Dashboard',
      description: 'Built an interactive dashboard to visualize methane emissions and infrastructure using GeoPandas, Folium, and Flask. Integrated EDF, EPA, and OpenStreetMap data to support spatial analysis and policy insights.',
      tech: ['Python', 'GeoPandas', 'Folium', 'Flask'],
      github: 'https://github.com/VenkatachalamSubramanianPeriyaSubbu/InfraMeth-Dashboard',
      blog: null
    },
  ];

  return (
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-16"
        >
          Featured <span className="text-[#00d2be]">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 60px rgba(0, 210, 190, 0.3)' }}
              className="bg-[#1a1a1a] p-8 rounded-3xl border border-[#00d2be]/20 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-[#f5f5f5] mb-4">{project.title}</h3>
              <p className="text-[#f5f5f5]/70 mb-6 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#00d2be]/20 text-[#00d2be] rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={project.github}
                    className="text-[#f5f5f5] hover:text-[#00d2be]"
                  >
                    <Github size={20} />
                  </motion.a>
                )}
                {project.blog && (
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={project.blog}
                    className="text-[#f5f5f5] hover:text-[#00d2be]"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Blog Page with Medium RSS Feed
const BlogPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMediumArticles = async () => {
      try {
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@venkatachalam.sps'
        );
        const data = await response.json();
        if (data.items) {
          setArticles(data.items);
        }
      } catch (error) {
        console.error('Error fetching Medium articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMediumArticles();
  }, []);

  const extractImageFromContent = (content) => {
    const imgRegex = /<img[^>]+src="([^">]+)"/;
    const match = content.match(imgRegex);
    return match ? match[1] : null;
  };

  const stripHtml = (html) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  return (
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-16"
        >
          <span className="text-[#00d2be]">Blog</span>
        </motion.h2>

        {loading ? (
          <div className="text-center text-[#f5f5f5]/60">Loading articles...</div>
        ) : articles.length === 0 ? (
          <div className="text-center">
            <p className="text-[#f5f5f5]/60 mb-6">No articles found. Visit my Medium profile to read my latest posts.</p>
            <motion.a
              href="https://medium.com/@venkatachalam.sps"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-block px-8 py-4 bg-[#00d2be] text-[#0d0d0d] font-semibold rounded-2xl"
            >
              Visit Medium Profile
            </motion.a>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => {
                const thumbnail = article.thumbnail || extractImageFromContent(article.content);
                const excerpt = stripHtml(article.description || article.content).slice(0, 150);
                
                return (
                  <motion.a
                    key={index}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10, boxShadow: '0 20px 60px rgba(0, 210, 190, 0.3)' }}
                    className="bg-[#1a1a1a] rounded-3xl border border-[#00d2be]/20 overflow-hidden flex flex-col"
                  >
                    {thumbnail && (
                      <div className="w-full h-48 overflow-hidden">
                        <img 
                          src={thumbnail} 
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-[#f5f5f5] mb-3">{article.title}</h3>
                      <p className="text-[#f5f5f5]/70 mb-4 flex-grow text-sm">{excerpt}...</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[#00d2be]">{new Date(article.pubDate).toLocaleDateString()}</span>
                        <span className="text-[#f5f5f5]/60">Read on Medium →</span>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-center"
            >
              <motion.a
                href="https://medium.com/@venkatachalam.sps"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-block px-8 py-4 border-2 border-[#00d2be] text-[#00d2be] font-semibold rounded-2xl"
              >
                View All Articles on Medium
              </motion.a>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

// Testimonials Page
const TestimonialsPage = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Professor, University of San Francisco',
      company: 'USF',
      text: 'Venkatachalam demonstrates exceptional mastery in AI and machine learning. His ability to bridge theoretical concepts with practical applications is remarkable, and his research contributions have been outstanding.',
      image: '👩‍🏫'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Engineer, ArangoDB',
      company: 'ArangoDB',
      text: 'Working with Venkatachalam has been a pleasure. His contributions to our LangChain integration significantly improved query performance and his deep understanding of graph databases is impressive.',
      image: '👨‍💼'
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Research Director, Environmental Defense Fund',
      company: 'EDF',
      text: 'Venkatachalam brought exceptional technical skills and creativity to our methane detection project. His computer vision pipeline exceeded our expectations and is now a core part of our research infrastructure.',
      image: '👩‍🔬'
    }
  ];

  return (
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-16 text-center"
        >
          <span className="text-[#00d2be]">Testimonials</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02, boxShadow: '0 10px 40px rgba(0, 210, 190, 0.2)' }}
              className="bg-[#1a1a1a] p-8 rounded-3xl border border-[#00d2be]/20"
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="text-6xl mb-4">{testimonial.image}</div>
                <h3 className="text-xl font-bold text-[#f5f5f5] mb-1">{testimonial.name}</h3>
                <p className="text-[#00d2be] text-sm mb-2">{testimonial.role}</p>
                {/* <CompanyLogo name={testimonial.company} /> */}
              </div>
              <p className="text-[#f5f5f5]/70 italic leading-relaxed">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Contact Page
const ContactPage = () => {
  return (
    <div className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-8">
            Let's <span className="text-[#00d2be]">Connect</span>
          </h2>
          <p className="text-xl text-[#f5f5f5]/70 mb-12">
          Let's turn your data into intelligent solutions using AI
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="mailto:venkatachalam.sps@gmail.com"
              className="flex flex-col items-center gap-3 text-[#f5f5f5] hover:text-[#00d2be]"
            >
              <Mail size={40} />
              <span className="text-sm">Email</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/in/venkatachalam-subramanian-periya-subbu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 text-[#f5f5f5] hover:text-[#00d2be]"
            >
              <Linkedin size={40} />
              <span className="text-sm">LinkedIn</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/VenkatachalamSubramanianPeriyaSubbu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 text-[#f5f5f5] hover:text-[#00d2be]"
            >
              <Github size={40} />
              <span className="text-sm">GitHub</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://medium.com/@venkatachalam.sps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 text-[#f5f5f5] hover:text-[#b08d87]"
            >
              <BookOpen size={40} />
              <span className="text-sm">Medium</span>
            </motion.a>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:venkatachalam.sps@gmail.com"
            className="inline-block px-8 py-4 bg-[#00d2be] text-[#0d0d0d] font-semibold rounded-2xl"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

// Footer
const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-[#00d2be]/20">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-[#f5f5f5]/60">
          © 2025 Venkatachalam Subramanian. All Rights Reserved.
        </p>
      </div>

      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-[#00d2be] text-[#0d0d0d] rounded-full shadow-lg"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

// Main App with Tab Navigation
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('home');

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage setActiveTab={setActiveTab} />;
      case 'about':
        return <AboutPage />;
      case 'education':
        return <EducationPage />;
      case 'experience':
        return <ExperiencePage />;
      case 'projects':
        return <ProjectsPage />;
      case 'blog':
        return <BlogPage />;
      case 'testimonials':
        return <TestimonialsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="bg-[#0d0d0d] text-[#f5f5f5] min-h-screen font-sans">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}