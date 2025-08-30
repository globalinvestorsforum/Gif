import React, { useState, useRef } from 'react';
import { Search, ChevronDown, ChevronRight, Brain, Bot, Zap, Settings, Eye, Users, MessageSquare, Database, Star, Target, Cpu, Shield, BookOpen, CheckCircle, Cloud, Lock, TestTube } from 'lucide-react';

const GlassArrowButton = ({ isExpanded = false, onClick = () => {} }) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: '32px',
        height: '32px',
        border: '1px solid #4ade80',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: isExpanded ? '#000' : '#4ade80',
        fontSize: '16px',
        transition: 'all 0.3s ease',
        background: isExpanded ? '#4ade80' : 'rgba(74, 222, 128, 0.1)',
        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
        cursor: 'pointer'
      }}
    >
      ▼
    </div>
  );
};
export default function UnifiedTracks() {
      const [searchTerm, setSearchTerm] = useState('');
       const [searchResults, setSearchResults] = useState([]);
     const [mainTransDropdownExpanded, setTransMainDropdownExpanded] = useState(false);
      const [expandedTransTracks, setTransExpandedTracks] = useState({});
      const [mainTechDropdownExpanded, setTechMainDropdownExpanded] = useState(false);
        const [expandedTechTracks, setTechExpandedTracks] = useState({});
        const [mainRoleDropdownExpanded, setRoleMainDropdownExpanded] = useState(false);
        const [expandedRoleTracks, setRoleExpandedTracks] = useState({});
        const [mainSocialDropdownExpanded, setSocialMainDropdownExpanded] = useState(false);
        const [expandedSocialTracks, setSocialExpandedTracks] = useState({});
        const [mainSummitDropdownExpanded, setSummitMainDropdownExpanded] = useState(false);
        const [expandedSummitTracks, setSummitExpandedTracks] = useState({});
      const transtrackRefs = useRef({});
      const techtrackRefs = useRef({});
      const roletrackRefs = useRef({});
      const socialtrackRefs = useRef({});
      const summittrackRefs=useRef({});
      const trans_tracks = [
    {
      id: 1,
      title: "Strategic AI Agents: Designing Intelligent Autonomy",
      description: "This track explores the fundamentals of AI agents, from understanding what they are to implementing strategic approaches for autonomous intelligent systems. Learn about multi-agent coordination, reasoning capabilities, and governance frameworks for enterprise deployment.",
      audience: "C-suite executives, AI strategists, and technical leaders interested in implementing AI agent strategies should attend.",
      topics: [
        "What They Are: Understanding the Basics of Intelligent, Autonomous Software Agents",
        "Beyond the Buzzword: How AI Agents Think, Learn, and Act to Get Work Done", 
        "Meet Your Digital Colleagues: Autonomous AI Agents Reshaping Industries",
        "Beyond Rules: Smarter, Adaptive AI Agents for Risk Detection",
        "From Friction to Flow: Real Stories of Seamless AI-Powered Customer Experience",
        "Goodbye Repetitive Clicks: AI-Driven Operations at Enterprise Scale",
        "Trust, Verify, Explain: Building Transparent and Fair AI Systems",
        "Multi-Agent Intelligence: Coordinating Complex Decisions in Dynamic Environments",
        "From Vision to Deployment: C-Suite Strategies for Enterprise AI Integration",
        "From Prototype to Production: Scaling AI Across Platforms and Markets",
        "People + Algorithms: Designing Hybrid Teams for the Future of Work",
        "Metrics That Matter: Measuring AI's Real-World Impact",
        "Staying Ahead: Navigating Evolving AI Regulations Globally"
      ]
    },
    {
      id: 2,
      title: "AI Agents in Action: Real-World Applications & Success Stories",
      description: "This track focuses on practical applications of AI agents across various business functions. Discover how organizations are implementing AI agents for customer support, predictive maintenance, supply chain optimization, and more, with concrete examples and ROI measurements.",
      audience: "Business leaders, product managers, and implementation teams looking for practical AI agent applications should attend.",
      topics: [
        "Always-On Service: AI-Powered Support That Delivers Fast, Friendly Help 24/7",
        "No More Downtime: Using AI to Spot and Fix Problems Before They Happen",
        "Reinventing Logistics: AI-Driven Supply Chains That Are Agile, Transparent, and Resilient",
        "Smarter Campaigns: Harnessing AI to Create Hyper-Personalized Customer Experiences",
        "Winning Minds and Markets: Strategies for Successful Company-Wide AI Rollouts",
        "Data as the New Oil: Preparing and Powering AI with High-Quality, Organized Information",
        "Cutting Costs Smartly: Real-World AI Deployments That Boost Efficiency",
        "Revenue Multipliers: How AI Opens New Markets and Business Opportunities",
        "The AI Scorecard: Tracking and Maximizing AI Agent Performance with Data",
        "Accelerating AI Innovation: Teaching New AI by Building on What It Already Knows",
        "Keeping It Clean: AI-Driven Content Moderation at Massive Scale",
        "Unlocking Data Gold: Automated Visual and Video Content Extraction",
        "Unified AI Experiences: Seamlessly Blending Text, Images, and Sound",
        "Open-Source Powerhouses: Driving AI Innovation with Transparent, Flexible Platforms",
        "Enterprise-Grade Platforms: Using Proven Solutions for Scalable, Secure AI Deployment",
        "Custom-Fit AI: Training Smart Systems to Understand Your Business Inside Out",
        "Dynamic Command: Crafting Prompts That Boost AI Responsiveness and Agility"
      ]
    },
    {
      id: 3,
      title: "Scaling AI: Building Robust Infrastructure for Growth",
      description: "This track covers the technical infrastructure needed to scale AI solutions from prototype to production. Learn about microservices architecture, fault tolerance, security considerations, and resource optimization for enterprise AI deployments.",
      audience: "Infrastructure engineers, DevOps professionals, and technical architects working on AI scalability should attend.",
      topics: [
        "Building Resilient Enterprises: Using Microservices for Flexible and Scalable AI Systems",
        "Always Reliable: Designing AI Systems That Keep Running, Even When Things Go Wrong",
        "Making Smart Choices: Understanding the Money Side of Using AI on the Cloud vs. Your Own Servers",
        "Keeping AI Safe: Comparing Ways to Protect AI in the Cloud and on Local Servers",
        "Running AI Smoothly: Using Smart Tools for Easy Management and Updates",
        "Speeding Up AI Updates: Automating How AI Gets Better, Faster, and More Dependable",
        "Using Resources Wisely: Smart Strategies to Run AI Efficiently and Save Costs",
        "Green Intelligence: Making AI Systems More Energy-Efficient for a Sustainable Future",
        "Instant Action: Using Real-Time Data Streams for Fast, Smart Decisions",
        "Instant Insights: Unlocking Business Value with Fast AI-Powered Analytics",
        "Bringing It All Together: Building Strong Connections Between AI Systems and Tools",
        "Ready for the Future: Building AI Systems That Adapt Easily as Needs Change",
        "Keeping AI on Track: Using Smart Monitoring for Top Performance and Reliability",
        "Planning for Growth: Making Sure AI Systems Can Grow Smoothly with Your Business"
      ]
    },
    {
      id: 4,
      title: "Maximizing AI ROI: Measuring Impact & Driving Continuous Improvement",
      description: "This track focuses on measuring and optimizing the return on investment from AI initiatives. Learn about key performance indicators, outcome-based goals, quality improvements, and continuous optimization strategies for AI systems.",
      audience: "Business analysts, AI project managers, and executives responsible for AI ROI should attend.",
      topics: [
        "Measuring the Payoff: Tracking Revenue, Cost Savings, and Profit from AI",
        "Beyond Money: Measuring Customer Happiness, Brand Strength, and Efficiency Gains",
        "Goal-Focused AI: Linking Projects to Clear, Measurable Results",
        "Speed as Strategy: Delivering Products and Services Faster with AI",
        "Raising Standards: Using AI to Improve Product and Service Excellence",
        "Peak Performance: Adjusting AI for Maximum Accuracy and Efficiency",
        "Staying Sharp: Spotting and Fixing AI Accuracy Loss Over Time",
        "Learning on the Go: Using Real-Time Feedback to Make AI Better Continuously",
        "Staying Current: Quickly Updating AI to Match New Business Needs",
        "Protecting Quality: Detecting and Responding to Unusual AI Behaviors"
      ]
    },
    {
      id: 5,
      title: "Data as a Strategic Asset: Powering AI Success",
      description: "This track explores how to build a data-driven culture and leverage data as a strategic asset for AI initiatives. Learn about data governance, ethics, quality management, and monetization strategies.",
      audience: "Data leaders, CDOs, and business leaders focused on data strategy should attend.",
      topics: [
        "Building Data Champions: Growing a Work Culture That Drives Smart, Insightful Decisions",
        "Key Players Unveiled: Defining Important Roles to Ensure Data Excellence Across the Organization",
        "Measuring What Counts: Tracking the Right Numbers to Get the Best Results from AI and Data",
        "Seeing the Full Picture: Connecting AI Outcomes to What Matters Most in Your Business",
        "Guarding Trust: Embedding Ethical Practices for Responsible Use of AI and Data",
        "Transparency in Action: Running Checks to Ensure Compliance and Accountability in AI and Data",
        "Scaling Smarter: Using Virtual Tech to Build Flexible and Efficient AI and Data Systems",
        "Getting More from Technology: Combining Private and Public Cloud Resources for Easy Growth and Innovation",
        "Know Your Data: Simple Techniques to Make Sure Your Information Is Accurate",
        "Quality by Design: Using Ongoing Feedback to Improve Data and AI Results Continuously",
        "Turning Data into Dollars: Finding New Revenue Opportunities through Strategic Data Use",
        "Power in Collaboration: Building Strong Networks to Boost Data and AI Impact",
        "Personal Touch with AI: Creating Experiences That Keep Customers Coming Back",
        "Future-Proofing Decisions: Using AI Insights to Stay Ahead in a Competitive Market",
        "Seeing Connections Clearly: How Special Databases Reveal Hidden Links in Data",
        "Real-Time Reactivity: Using Databases That Respond Instantly for Smarter AI Actions"
      ]
    },
    {
      id: 6,
      title: "Generative AI Fundamentals & Strategic Roadmapping",
      description: "This track provides a comprehensive foundation in generative AI, covering key concepts, model evaluation, change management, and strategic planning. Learn about bias detection, security considerations, and governance frameworks for responsible AI deployment.",
      audience: "AI strategists, technical leaders, and decision-makers planning generative AI initiatives should attend.",
      topics: [
        "Navigating the Frontier: Discovering Key Opportunities and Managing Risks in Generative AI",
        "Focus with Purpose: Choosing the Right AI Projects for Maximum Business Impact",
        "Picking Winners: How to Select the Best AI Models and Providers for Your Needs",
        "Leading Change: Guiding Your Organization to Successfully Adopt Generative AI",
        "Bias Busting: Detecting and Preventing Unfairness in AI Systems",
        "Fortifying AI: Building Strong Protections to Keep AI and Data Safe",
        "Responsible AI: Setting Up Rules and Practices to Ensure Trustworthy AI Use",
        "Laying the Groundwork: Preparing High-Quality Data for Effective and Ethical AI",
        "Learning Fast: How AI Models Can Understand New Tasks with Little or No Training Data",
        "Creative AI: Exploring How AI Can Change the Look and Feel of Images and Videos",
        "Unified Intelligence: Combining Text, Images, and Audio to Build Smarter AI Systems",
        "Smooth Connections: Using APIs to Integrate AI Seamlessly into Your Business Tools",
        "Flexible Foundations: Choosing the Best Places to Run Your AI for Security and Performance",
        "Mastering Dialogue: Techniques to Make AI Responses More Accurate and Responsive",
        "Proof That Matters: Setting Clear Goals to Validate Your AI Projects",
        "Getting Buy-In: How to Engage Teams and Leaders to Support AI Initiatives",
        "Custom-Fit AI: Adapting AI Models to Meet Your Unique Business Needs",
        "Raising the Bar: Setting Standards to Ensure Your AI Performs Well and Consistently",
        "Adaptive AI: Keeping Your AI Models Fresh and Effective with Ongoing Improvements"
      ]
    },
    {
      id: 7,
      title: "Scaling Generative AI: Enterprise Deployment Strategies",
      description: "This track focuses on the operational aspects of deploying generative AI at enterprise scale. Learn about testing, scalability, middleware integration, cost optimization, and MLOps practices for production generative AI systems.",
      audience: "MLOps engineers, technical architects, and operations teams deploying generative AI at scale should attend.",
      topics: [
        "Ensuring Readiness: Rigorous Checks to Turn AI Pilots into Reliable Solutions",
        "Growing with Confidence: How to Expand AI from Pilot to Full Production",
        "Bridging Gaps: Connecting AI Systems Smoothly with Existing Enterprise Tech",
        "Future-Proofing: Integrating New AI with Older Systems Without Disruption",
        "Efficient Management: Running Data and Compute Smoothly for Best AI Performance",
        "Smart Spending: Balancing Cost and Performance for AI Computing Resources",
        "Staying Accurate: Detecting and Fixing AI Performance Changes Over Time",
        "Quality First: Building Strong Testing to Keep AI Outputs Consistent and Reliable",
        "Sharing the Load: Distributing AI Work to Keep Services Fast and Available",
        "Built to Last: Designing Backup Systems That Keep AI Running Without Interruptions",
        "Mastering Operations: End-to-End Practices to Manage AI Deployment and Updates",
        "Quick Response: Detecting and Fixing AI Issues to Minimize Downtime",
        "Smaller and Smarter: Techniques to Make Large AI Models More Efficient",
        "Delivering Fast: Best Ways to Provide AI Services at Scale with Low Delays",
        "Streamlining Content: Automating Media Processing to Speed Up Production",
        "Stunning Results: Using AI to Create High-Quality Visual Outputs",
        "Harmonizing Inputs: Combining Text, Vision, and Audio for Smarter AI Responses",
        "Setting Standards: Defining Clear Service Agreements to Ensure AI Reliability",
        "Partnering Right: Managing AI Providers to Maximize Value and Innovation",
        "Scaling Smarts: Automating Prompt Creation to Boost AI Responsiveness",
        "Continuous Improvement: Using Real-Time Feedback to Refine AI Performance"
      ]
    },
    {
      id: 8,
      title: "Generative AI in Action: Transformative Applications Across Industries",
      description: "This track showcases real-world applications of generative AI across different industries and use cases. Learn about cross-industry success stories, regulated environment deployment, content automation, and customer experience enhancement.",
      audience: "Industry practitioners, business leaders, and application developers implementing generative AI solutions should attend.",
      topics: [
        "Trailblazing Titans: Real AI Breakthroughs Setting New Standards Across Multiple Fields",
        "Navigating Complexity: Confidently Using AI in Highly Regulated Environments",
        "Winning Hearts: Boosting Customer Experiences with Personalized AI Engagement",
        "Leading the Charge: Driving Organizational Transformation for Faster AI Adoption",
        "The AI Dream Team: Finding and Keeping Top Talent to Power AI Growth",
        "Smart Content Revolution: Automating Creation, Curation, and Delivery for Maximum Impact",
        "Decisions at the Speed of AI: Making Smarter, Faster, Data-Driven Choices",
        "Hidden Savings: Using AI to Prevent Waste and Streamline Operations",
        "Revenue Boosters: Growing Sales and Customer Value with Intelligent AI",
        "Experience Reimagined: Elevating Customer Journeys with AI",
        "Measuring Breakthroughs: Proving AI's Role in Driving Big Innovation",
        "Talk the Talk: Using AI for Natural, Scalable Conversations",
        "Insight in Seconds: Creating Quick, Actionable Summaries with AI",
        "Visual Tailoring: Delivering Customized Image and Video Experiences with AI",
        "See and Learn: Enhancing Training with Immersive AI Video Tools",
        "Beyond Words: Boosting Interaction by Combining Text, Images, and Sound",
        "Reading Between the Lines: Understanding Emotions and Intent with AI",
        "Balancing the Budget: Assessing AI Platform Costs for Scalable Deployment",
        "Building Alliances: Choosing Platform Ecosystems That Maximize Flexibility",
        "Shielding Success: Fine-Tuning AI to Meet Strong Security Standards",
        "Tailored Intelligence: Adapting AI to Excel in Specific Fields",
        "Designing Dialogue: Writing Prompts That Empower and Engage Users",
        "Ensuring Excellence: Testing Prompts to Keep AI Accurate and Effective"
      ]
    },
    {
      id: 9,
      title: "Retrieval-Augmented Generation (RAG): Unlocking Value from Proprietary Data",
      description: "This track explores RAG systems and how to leverage proprietary data for enhanced AI capabilities. Learn about data integration, context management, privacy protection, and performance optimization for knowledge-enhanced AI systems.",
      audience: "AI engineers, data scientists, and practitioners working on knowledge-enhanced AI systems should attend.",
      topics: [
        "Building the Foundation: Understanding How Retrieval-Augmented Generation Systems Work",
        "Best of Both Worlds: Combining External Knowledge with Powerful Language Generation",
        "Unlocking Goldmines: Exploring Different Kinds of Exclusive Data That Power AI",
        "Seamless Fusion: Safely and Efficiently Blending Proprietary Data with AI Models",
        "Context is King: Boosting AI Performance by Managing and Expanding Context Smarter",
        "Fine-Tuning Relevance: Using Smart Techniques to Deliver More Accurate AI Responses",
        "Revolutionizing Help: AI Agents Delivering Fast, Smart Assistance at Scale",
        "Smarter Decisions: Using AI to Gain Deeper Insights and Better Business Outcomes",
        "Guarding Privacy: Strong Anonymization Methods to Keep Data Safe",
        "Securing Access: Advanced Ways to Manage Who Sees What in AI Systems",
        "Managing Change: Best Practices to Track and Maintain AI Model Versions",
        "From Pilot to Powerhouse: Growing AI Solutions to Meet Big Enterprise Needs",
        "Beyond Text: Exploring Advanced Ways to Represent Data for Smarter AI",
        "Next Steps: Using Reinforcement Learning to Improve AI Behavior and Adaptability",
        "Benchmarking Brilliance: Comparing AI Models to Find the Best Fit",
        "Value Check: Evaluating Costs to Get the Most from AI Investments",
        "Smart Storage: Balancing Speed and Accuracy with Hybrid Data Retrieval Techniques"
      ]
    }
  ];
  const tech_tracks = [
    {
      id: 1,
      title: "Generative AI Models: From Large to Small Language Models",
      description: "This track will cover training and fine-tuning of LLMs, exploring GAN architectures and their applications, efficient design of Small Language Models, real-world applications across domains, tackling training challenges, and emerging techniques shaping the future of generative AI.",
      audience: "AI researchers, machine learning engineers, and data scientists working on or interested in generative models should attend.",
      topics: [
        "Training and Fine-Tuning: Deep Dive into Building and Customizing Powerful Language Models",
        "Adversarial Learning: Exploring GAN Architectures and Their Wide-Ranging Applications", 
        "Efficient Design: Creating Lightweight Models for Fast and Cost-Effective AI Solutions",
        "Real-World Impact: Using Generative Models Across NLP, Computer Vision, and Other Domains",
        "Tackling Complexity: Overcoming Common Obstacles in Training Generative Models",
        "What's Next: Emerging Techniques and Innovations Shaping the Future of Generative AI"
      ]
    },
    {
      id: 2,
      title: "Generative AI & Foundation Models: Architectures and Innovations",
      description: "This track will explore foundation model architectures, pre-training strategies for large-scale models, fine-tuning and adaptation methods, multi-modal foundations, scaling laws, efficient training techniques, and comprehensive evaluation metrics.",
      audience: "AI researchers, machine learning engineers, and practitioners interested in foundation models should attend.",
      topics: [
        "Understanding Core Structures: Deep Dive into Transformer and Other Foundation Model Designs",
        "Building Strong Foundations: Advanced Techniques for Large-Scale Model Pre-training",
        "Customization Excellence: Methods for Adapting Foundation Models to Specific Domains",
        "Beyond Text: Exploring Foundation Models That Handle Images, Audio, and Text Together",
        "Understanding Growth: How Model Size and Data Impact Performance and Capabilities",
        "Resource Optimization: Techniques to Train Large Models with Limited Resources",
        "Measuring Success: Comprehensive Methods for Assessing Foundation Model Performance"
      ]
    },
    {
      id: 3,
      title: "Next-Gen AI Architectures & Design",
      description: "This track will cover next-generation neural network architectures, transfer learning and meta-learning innovations, performance optimization techniques, deployment challenges, specialized architectures for NLP/Vision/RL, creative problem solving, ensemble methods, and future trends.",
      audience: "AI researchers, machine learning engineers, and data scientists working on advanced AI architectures should attend.",
      topics: [
        "Pushing Boundaries: Exploring the Latest Advances in Neural Network Designs",
        "Smart Learning: Innovations That Help AI Adapt Faster and Smarter",
        "Scaling Up: Techniques to Maximize AI Model Efficiency and Speed at Large Scale",
        "Breaking Barriers: Overcoming Technical Hurdles in Putting Models into Production",
        "Specialized Models: Cutting-Edge Designs for Language, Vision, and Decision-Making AI",
        "Thinking Differently: Novel Approaches to Solve Complex AI Engineering Challenges",
        "Combining Strengths: Using Multiple Models Together for Better Performance",
        "Looking Forward: Emerging Innovations Shaping the Future of AI Model Architecture"
      ]
    },
    {
      id: 4,
      title: "Automated Machine Learning & Model Optimization",
      description: "This track will explore AutoML fundamentals, hyperparameter optimization methods, neural architecture search, feature engineering automation, model selection techniques, performance optimization, and deployment automation.",
      audience: "Machine learning engineers, data scientists, and practitioners interested in automating ML workflows should attend.",
      topics: [
        "Automation Excellence: Core Concepts and Techniques in Automated Machine Learning",
        "Finding the Sweet Spot: Advanced Methods for Automated Parameter Tuning",
        "Discovering Architectures: Automated Techniques for Finding Optimal Model Designs",
        "Smart Features: Automated Methods for Feature Selection and Engineering",
        "Choosing Winners: Automated Techniques for Selecting the Best Models for Specific Tasks",
        "Efficiency Gains: Automated Methods for Optimizing Model Speed and Accuracy",
        "Seamless Integration: Automated Pipelines for Model Deployment and Monitoring"
      ]
    },
    {
      id: 5,
      title: "Explainable AI & Transparent Models for Trust",
      description: "This track will cover interpretability methods for black box models, LIME and SHAP techniques, global vs local explanations, visualization techniques, trust and validation methods, regulatory compliance, and human-AI interaction design.",
      audience: "AI researchers, ML engineers, and practitioners working in regulated industries or requiring model transparency should attend.",
      topics: [
        "Understanding AI: Techniques to Make Black Box Models More Transparent",
        "Feature Importance: Advanced Methods for Explaining Individual Predictions",
        "Different Perspectives: When to Use Global Model Explanations vs Local Instance Explanations",
        "Seeing AI Decisions: Visual Methods for Understanding Model Behavior and Predictions",
        "Building Confidence: Methods to Validate and Trust AI Explanations in Critical Applications",
        "Meeting Requirements: Explainability Standards for Regulated Industries",
        "Bridge Building: Designing Explanations That Humans Can Understand and Act Upon"
      ]
    },
    {
      id: 6,
      title: "Intelligent Agents: Autonomous & Multi-Agent AI",
      description: "This track will explore architectures for autonomous AI agents, multi-agent systems design, training techniques using reinforcement learning and beyond, real-world applications, ethical considerations, and future trends in AI agent technology.",
      audience: "AI researchers, machine learning engineers, and robotics practitioners interested in autonomous systems should attend.",
      topics: [
        "Building Intelligent Systems: In-depth Exploration of Agent Architectures for Autonomy and Reasoning",
        "Coordinated Intelligence: Designing Communication and Collaboration Among Multiple AI Agents",
        "Advanced Learning: Techniques in Reinforcement Learning and Beyond for Training AI Agents",
        "Practical Deployment: Applying AI Agents to Solve Complex, Real-World Problems",
        "Ethical AI: Navigating the Challenges and Responsibilities of Autonomous Agents",
        "Looking Ahead: Emerging Innovations and Next-Generation Directions in AI Agent Technology"
      ]
    },
    {
      id: 7,
      title: "Multimodal & Conversational AI: Integrating Text, Audio & Video",
      description: "This track will cover multimodal architectures, cross-modal learning techniques, conversational AI systems, speech recognition and synthesis, video understanding, real-time processing optimization, and evaluation metrics for multimodal AI.",
      audience: "AI researchers, NLP engineers, and practitioners working on multimodal AI systems should attend.",
      topics: [
        "Unified Understanding: Designing AI Systems That Process Text, Images, and Audio Together",
        "Connecting Modalities: Techniques for Learning Relationships Across Different Data Types",
        "Natural Dialogue: Building AI That Can Engage in Human-Like Conversations",
        "Voice Intelligence: Advanced Techniques for Understanding and Generating Speech",
        "Motion and Context: AI Methods for Analyzing and Understanding Video Content",
        "Instant Response: Optimizing Multimodal AI for Low-Latency Applications",
        "Measuring Quality: Methods for Assessing Multimodal and Conversational AI Performance"
      ]
    },
    {
      id: 8,
      title: "Retrieval-Augmented Generation (RAG): Architectures & Applications",
      description: "This track will explore key concepts and architectures of RAG systems, integrating retrieval systems with generative models, building and training RAG models, optimizing for real-time retrieval, applications across domains, and future trends in RAG.",
      audience: "AI researchers, NLP engineers, and practitioners working on knowledge-enhanced AI systems should attend.",
      topics: [
        "Foundations: Understanding the Core Principles and Design of RAG Systems",
        "Seamless Fusion: Connecting Retrieval Engines with Generative AI Models",
        "Hands-On Engineering: Techniques to Build and Train Effective RAG Models",
        "Speed and Accuracy: Enhancing RAG Systems for Fast, Relevant Data Access",
        "Real-World Impact: Employing RAG in Search, Knowledge Management, and Other Domains",
        "Looking Ahead: Emerging Innovations and Directions in Retrieval-Augmented Generation"
      ]
    },
    {
      id: 9,
      title: "AI-Powered Recommender Systems & Personalization",
      description: "This track will cover collaborative and content-based filtering techniques, hybrid recommender systems, scaling challenges, algorithm optimization for personalization, performance evaluation methods, and future trends in recommendation systems.",
      audience: "Machine learning engineers, data scientists, and practitioners working on recommendation systems should attend.",
      topics: [
        "Core Techniques: Exploring Collaborative and Content-Based Methods for Recommendations",
        "Best of Both Worlds: Combining Multiple Approaches to Enhance Recommendation Accuracy",
        "Big Data Ready: Tackling Engineering Challenges to Scale Recommendations Across Large Datasets",
        "Personalized Precision: Fine-Tuning Algorithms for Tailored User Experiences",
        "Measuring Success: Assessing Recommender System Effectiveness and Impact",
        "What's Next: Emerging Innovations Shaping the Future of Recommender Systems"
      ]
    },
    {
      id: 10,
      title: "Reinforcement Learning: From Fundamentals to Future",
      description: "This track will cover the latest advancements in reinforcement learning and its applications across various industries. Learn how RL models are trained, the challenges in reward engineering, and the technical details of deploying RL in real-world environments. We will discuss both on-policy and off-policy RL methods, multi-agent RL, and the growing intersection of RL with deep learning.",
      audience: "AI researchers, machine learning engineers, and data scientists working on or interested in reinforcement learning should attend.",
      topics: [
        "Fundamentals of Reinforcement Learning: On-Policy and Off-Policy Methods",
        "Multi-Agent Reinforcement Learning",
        "Reward Engineering and Policy Optimization",
        "Applications of RL in Robotics, Gaming, and Operations Research",
        "Combining RL with Deep Learning",
        "Future Trends in Reinforcement Learning",
        "Human in the Loop"
      ]
    },
    {
      id: 11,
      title: "AI in Robotics & Autonomous Systems: Advances and Applications",
      description: "This track will explore robot learning algorithms, autonomous navigation techniques, human-robot interaction design, sensor fusion methods, real-time control systems, safety and reliability considerations, and applications across manufacturing, healthcare, and service industries.",
      audience: "Robotics engineers, AI researchers, and practitioners working on autonomous systems should attend.",
      topics: [
        "Intelligent Machines: Advanced Learning Algorithms for Robotic Systems",
        "Path Planning: AI Techniques for Safe and Efficient Robot Navigation",
        "Collaborative Intelligence: Designing Robots That Work Effectively with Humans",
        "Multi-Sensor Intelligence: Combining Data from Multiple Sensors for Better Decision Making",
        "Instant Response: AI Systems for Real-Time Robotic Control and Decision Making",
        "Trustworthy Robots: Ensuring Safe and Reliable Operation of Autonomous Systems",
        "Real-World Deployment: Robotics Applications in Manufacturing, Healthcare, and Service Industries"
      ]
    },
    {
      id: 12,
      title: "Smart Data Engineering for AI Models",
      description: "This track will cover data pipeline architecture, feature engineering techniques, data quality management, real-time data processing, data versioning best practices, automated data preparation, and performance optimization for large-scale AI applications.",
      audience: "Data engineers, ML engineers, and practitioners working on data infrastructure for AI should attend.",
      topics: [
        "Robust Foundations: Designing Scalable and Reliable Data Pipelines for AI",
        "Smart Features: Advanced Techniques for Creating Meaningful Features from Raw Data",
        "Clean Data: Methods for Ensuring High-Quality Data for Model Training",
        "Instant Analysis: Stream Processing Techniques for Real-Time AI Applications",
        "Tracking Changes: Best Practices for Managing Data Versions in ML Projects",
        "Efficiency Gains: Automated Methods for Data Cleaning and Preprocessing",
        "Speed and Scale: Optimizing Data Processing for Large-Scale AI Applications"
      ]
    },
    {
      id: 13,
      title: "Synthetic Data & Smart Data Engineering for AI",
      description: "This track will explore synthetic data generation methods, privacy preservation techniques, data augmentation strategies, quality assessment metrics, domain adaptation using synthetic data, bias mitigation approaches, and cost-effective training methods.",
      audience: "Data scientists, ML engineers, and researchers interested in synthetic data generation should attend.",
      topics: [
        "Creating Data: Advanced Methods for Generating High-Quality Synthetic Datasets",
        "Protecting Information: Techniques for Creating Privacy-Safe Synthetic Data",
        "Expanding Datasets: Methods for Augmenting Training Data to Improve Model Performance",
        "Validating Synthetic Data: Metrics and Methods for Evaluating Synthetic Data Quality",
        "Cross-Domain Learning: Using Synthetic Data for Transfer Learning and Domain Adaptation",
        "Fair Data: Using Synthetic Data to Address Bias and Fairness in AI Models",
        "Efficient Learning: Reducing Training Costs Through Strategic Use of Synthetic Data"
      ]
    },
    {
      id: 14,
      title: "MLOps Excellence: Building & Scaling AI Infrastructure",
      description: "This track will cover building and managing ML pipelines, automating workflows and deployment, monitoring and scaling ML models, model versioning and experimentation, MLOps tools and platforms, and future trends in ML operations.",
      audience: "MLOps engineers, DevOps practitioners, and ML engineers interested in production AI systems should attend.",
      topics: [
        "Streamlined Workflows: Designing Robust Pipelines for Efficient Machine Learning",
        "Seamless Automation: Implementing Tools to Speed Up Model Deployment and Updates",
        "Always Ready: Keeping ML Models Reliable and Efficient as They Grow in Production",
        "Track and Improve: Best Practices for Managing Versions and Experimenting with Models",
        "Powering ML Ops: Leveraging the Latest Technologies to Manage the ML Lifecycle",
        "What's Next: Emerging Innovations Shaping the Future of ML Operations"
      ]
    },
    {
      id: 15,
      title: "AI Infrastructure & Edge Computing: Scalable & Real-Time Systems",
      description: "This track will explore edge AI architecture, real-time processing optimization, resource optimization for edge devices, distributed learning methods, security considerations, scalability strategies, and performance monitoring across distributed systems.",
      audience: "Infrastructure engineers, edge computing practitioners, and AI engineers working on distributed systems should attend.",
      topics: [
        "Distributed Intelligence: Designing AI Systems for Edge Computing Environments",
        "Instant Decisions: AI Systems Optimized for Low-Latency, Real-Time Applications",
        "Efficient Computing: Techniques for Running AI on Resource-Constrained Edge Devices",
        "Collaborative Training: Methods for Training AI Models Across Distributed Edge Networks",
        "Protecting Endpoints: Security Considerations for AI Deployed on Edge Devices",
        "Growing Infrastructure: Methods for Scaling AI Infrastructure from Edge to Cloud",
        "System Health: Monitoring and Maintaining AI Performance Across Distributed Systems"
      ]
    },
    {
      id: 16,
      title: "AI-Driven Cybersecurity: Threat Detection & Response",
      description: "This track will cover AI methods for threat detection, behavioral analysis for anomaly detection, automated response systems, adversarial security defense, incident analysis tools, predictive security methods, and integration challenges with existing security infrastructure.",
      audience: "Cybersecurity professionals, AI researchers, and practitioners working on security applications should attend.",
      topics: [
        "Intelligent Security: AI Methods for Detecting Advanced and Unknown Threats",
        "Pattern Recognition: Using AI to Identify Suspicious Behavior and Anomalies",
        "Instant Protection: AI Systems for Automated Threat Response and Mitigation",
        "Fighting AI with AI: Defending Against AI-Powered Attacks and Adversarial Examples",
        "Smart Investigation: AI Tools for Analyzing Security Incidents and Forensics",
        "Future Threats: Using AI to Predict and Prevent Security Incidents",
        "Seamless Security: Integrating AI Security Tools with Existing Security Infrastructure"
      ]
    },
    {
      id: 17,
      title: "Responsible AI Governance & Compliance",
      description: "This track will explore AI ethics frameworks, compliance standards, bias detection and mitigation methods, transparency and explainability requirements, risk assessment frameworks, governance structures, and continuous monitoring systems for AI ethics and compliance.",
      audience: "AI ethics practitioners, compliance officers, and ML engineers working in regulated industries should attend.",
      topics: [
        "Moral Foundation: Establishing Ethical Guidelines and Principles for AI Development",
        "Meeting Requirements: Understanding and Implementing AI Compliance Standards",
        "Fair AI: Methods for Identifying and Reducing Bias in AI Systems",
        "Clear AI: Making AI Decisions Transparent and Understandable",
        "Managing Risks: Frameworks for Assessing and Managing AI-Related Risks",
        "Organizational Oversight: Establishing Governance Bodies and Processes for AI",
        "Ongoing Oversight: Systems for Continuously Monitoring AI Ethics and Compliance"
      ]
    },
    {
      id: 18,
      title: "AI Model Evaluation & Rigorous Testing Methodologies",
      description: "This track will cover comprehensive evaluation metrics, systematic testing frameworks, benchmark datasets, A/B testing methods for AI, stress testing under extreme conditions, continuous evaluation systems, and advanced cross-validation techniques.",
      audience: "ML engineers, AI researchers, and QA professionals working on AI model validation should attend.",
      topics: [
        "Measuring Success: Comprehensive Metrics for Assessing AI Model Performance",
        "Systematic Validation: Structured Approaches to Testing AI Models",
        "Standard Comparisons: Using and Creating Benchmark Datasets for Model Evaluation",
        "Controlled Experiments: Methods for A/B Testing AI Models in Production",
        "Breaking Points: Testing AI Models Under Extreme Conditions and Edge Cases",
        "Ongoing Assessment: Systems for Continuously Monitoring Model Performance",
        "Robust Validation: Advanced Methods for Validating Model Generalization"
      ]
    }
  ];
  const role_tracks = [
    {
      id: 1,
      title: "AI-Powered CX & Customer Service Transformation",
      description: "This track explores how AI is revolutionizing customer experience and service delivery. Learn about automation, personalization, predictive analytics, and the future of customer interactions through intelligent systems and conversational agents.",
      audience: "Customer service leaders, CX professionals, and support managers looking to transform their customer interactions should attend.",
      topics: [
        "Transforming Support: How AI Is Reshaping Customer Service Through Automation",
        "How Can AI Deliver Hyper-Personalized Experiences at Scale?",
        "Anticipating the Next Move: Using Predictive Analytics to Stay Ahead of Customer Expectations",
        "Will AI Chatbots Ever Fully Replace Human Customer Agents?",
        "How Can Organizations Effectively Measure and Improve CX Using AI Insights?",
        "Are Conversational Agents the Future of Brand–Customer Interaction?",
        "The Road Ahead: AI Trends Redefining Customer Experience",
        "Fighting Churn: How AI Is Revolutionizing Customer Retention Strategies"
      ]
    },
    {
      id: 2,
      title: "Responsible Intelligence: Navigating AI Governance, Ethics & Risk",
      description: "This track focuses on the critical aspects of AI governance, ethics, and compliance. Explore regulatory frameworks, ethical AI implementation, data privacy, risk mitigation, and the future landscape of AI governance and safety.",
      audience: "Compliance officers, legal professionals, AI ethics practitioners, and risk management leaders should attend.",
      topics: [
        "Mastering the Maze: Navigating Global AI Regulations and Compliance Standards",
        "How Can Organizations Build and Implement Ethical AI Frameworks in Practice?",
        "Is True Data Privacy Achievable in Large-Scale AI Systems?",
        "What's the Most Effective Way to Implement AI Governance That Scales?",
        "Can We Ever Fully Eliminate Bias and Risk from AI Models?",
        "Where Should the Legal Boundaries for AI Projects Be Drawn?",
        "Shaping the Next Decade: Key Trends in AI Regulation and Governance",
        "Can Red Teaming and Prompt Injection Testing Stay Ahead of Emerging AI Threats?",
        "Is AI Safety Primarily a Technical Challenge or a Policy Challenge?",
        "How Do We Deliver AI Fairness Without Compromising Accuracy or Innovation?",
        "Ensuring Accountability: Thorough Testing and Evaluation for Trustworthy AI"
      ]
    },
    {
      id: 3,
      title: "AI-Enhanced Data Analytics & Business Intelligence",
      description: "This track covers how AI is transforming data analytics and business intelligence. Learn about automated data processes, real-time insights, AI-driven visualization, and the future of data-driven decision making.",
      audience: "Data analysts, BI professionals, and business leaders focused on data-driven insights should attend.",
      topics: [
        "Unlocking Insights: How AI Is Transforming Data Analytics from Descriptive to Predictive",
        "How Can Organizations Fully Automate Data Workflows to Boost Efficiency?",
        "Real-Time Decisions: Using AI to Gain Instant Business Intelligence",
        "Can AI-Driven Visualizations Improve Data Storytelling and Decision Support?",
        "Enhancing Business Outcomes: How AI Supports Smarter, Data-Driven Decisions",
        "What Emerging AI Technologies Will Shape the Future of Data Analytics and BI?"
      ]
    },
    {
      id: 4,
      title: "AI Leadership & Enterprise Transformation",
      description: "This track is designed for senior IT and AI leaders driving enterprise transformation. Explore strategies for leading AI initiatives, building scalable infrastructure, integrating solutions across the enterprise, and fostering innovation.",
      audience: "CAIOs, CIOs, IT leaders, and senior executives driving AI transformation should attend.",
      topics: [
        "Driving the AI Agenda: Leading Successful Organization-Wide Transformation",
        "Scaling for the Future: Building AI Infrastructure That Grows with the Enterprise",
        "How Can Enterprises Seamlessly Integrate AI Across All Business Units?",
        "Who Should Own and Control Data in AI-Driven Organizations?",
        "Can IT Become the Innovation Engine of the Enterprise Through AI?",
        "What Emerging AI Trends Will Redefine the Role of IT Leaders?"
      ]
    },
    {
      id: 5,
      title: "Cybersecurity",
      description: "This track explores how AI is revolutionizing cybersecurity practices. Learn about threat detection, security automation, anomaly identification, network protection, and the future of AI-driven security solutions.",
      audience: "Cybersecurity professionals, security analysts, and IT security leaders should attend.",
      topics: [
        "Staying Ahead: How AI Improves Threat Detection and Response in Cybersecurity",
        "How Can Organizations Fully Leverage AI to Automate Cybersecurity Operations?",
        "Can AI Truly Detect Insider Threats Before Damage Occurs?",
        "Strengthening Defenses: AI Techniques to Secure Networks and Protect Data",
        "What Are the Best Ways to Use AI to Speed Up and Improve Incident Response?",
        "What Emerging AI Innovations Will Shape the Future of Cybersecurity?"
      ]
    },
    {
      id: 6,
      title: "AI in Creator Tools",
      description: "This track focuses on how AI is transforming creative work and content creation. Explore AI-powered content generation, automated editing, music and video creation, creative optimization, and the future of AI-human creative collaboration.",
      audience: "Content creators, creative professionals, media producers, and digital artists should attend.",
      topics: [
        "Transforming Creative Output: How AI Generates Visuals, Audio, and Text at Scale",
        "How Can Creators Harness AI to Fully Automate Editing and Enhancement?",
        "Will AI-Composed Music Ever Match the Emotional Depth of Human Artists?",
        "Can AI-Produced Video Replace Traditional Filmmaking?",
        "Optimizing the Creative Process with AI-Driven Insights and Tools",
        "How Can AI Revolutionize Distribution and Targeting Without Losing Creative Integrity?",
        "Can AI Truly Collaborate with Humans to Enhance Creativity?",
        "The Road Ahead: AI Innovations Shaping the Future of Creative Work"
      ]
    },
    {
      id: 7,
      title: "AI-Powered Marketing Strategies",
      description: "This track explores how AI is transforming marketing strategies and campaigns. Learn about personalization, ad optimization, predictive analytics, content creation, social media marketing, and customer acquisition through AI.",
      audience: "Marketing leaders, digital marketers, and marketing strategists should attend.",
      topics: [
        "Delivering Hyper-Personalized Campaigns with AI-Powered Customer Segmentation",
        "How Can Marketers Maximize ROI by Optimizing Ad Spend with AI Analytics?",
        "Predicting Success: Leveraging AI to Forecast Campaign Outcomes",
        "Will AI-Generated Content Ever Rival Human Creativity in Marketing?",
        "How Can AI Transform Social Media into a High-Performance Marketing Engine?",
        "What AI Innovations Are Poised to Redefine the Future of Marketing?",
        "Winning New Audiences: How AI Is Revolutionizing Customer Acquisition"
      ]
    },
    {
      id: 8,
      title: "AI-Driven Software Engineering",
      description: "This track covers how AI is revolutionizing software development practices. Explore automated code generation, development optimization, debugging, machine learning integration, DevOps automation, and emerging coding methodologies.",
      audience: "Software engineers, developers, DevOps professionals, and engineering managers should attend.",
      topics: [
        "Accelerating Development: How AI Automates Code Generation and Testing",
        "How Can AI Tools Improve Software Development Workflows and Productivity?",
        "Can AI Effectively Detect and Resolve Software Bugs Faster Than Traditional Methods?",
        "Leveraging Machine Learning to Enhance Software Design and Development",
        "Streamlining DevOps: Using AI to Automate Continuous Integration and Deployment",
        "What Are the Unique Challenges of Managing DevOps in AI-Focused Software Projects?",
        "What Emerging AI Innovations Will Shape the Future of Software Engineering?",
        "Is Vibe Coding the Next Evolution in AI-Assisted Software Development?"
      ]
    },
    {
      id: 9,
      title: "AI for Product Managers: Strategy & Success in the AI Era",
      description: "This track is designed for product managers navigating the AI era. Learn about AI-driven product development, feature prioritization, personalization, customer research, roadmap planning, and measuring AI impact on product success.",
      audience: "Product managers, product leaders, and product strategy professionals should attend.",
      topics: [
        "Driving Success: How AI Can Help Product Teams Prioritize the Right Features",
        "How Can AI Deliver Truly Personalized Product Experiences at Scale?",
        "Will AI Replace Traditional Customer Research Methods?",
        "Building Smarter Roadmaps: Integrating AI Insights into Product Planning",
        "What Does It Take to Build World-Class AI-Powered Products?",
        "Can Product Teams Accurately Measure AI's Real Impact on Success Metrics?",
        "The Road Ahead: AI Trends Reshaping Product Management"
      ]
    },
    {
      id: 10,
      title: "AI in Sales: Driving Growth & Customer Success",
      description: "This track explores how AI is transforming sales processes and customer success. Learn about lead generation, personalized outreach, CRM optimization, predictive analytics, workflow automation, and the future of AI-powered sales strategies.",
      audience: "Sales leaders, sales professionals, and customer success managers should attend.",
      topics: [
        "Winning More Deals: How AI Transforms Lead Generation and Qualification",
        "How Can AI Deliver Truly Personalized Sales Outreach That Converts?",
        "Are AI-Powered CRMs the Key to Maximizing Sales Team Performance?",
        "From Guesswork to Accuracy: Using Predictive Analytics for Reliable Sales Forecasting",
        "How Can Sales Teams Fully Automate Workflows Without Losing the Human Touch?",
        "What AI Innovations Will Define the Future of Sales Strategies?"
      ]
    }
  ];
  const social_tracks = [
    {
      id: 1,
      title: "AI + Frontier Tech: Blockchain, Quantum & Beyond",
      description: "This track explores the convergence of AI with emerging parallel technologies like blockchain and quantum computing. Learn about security enhancements, revolutionary potential, technology intersection opportunities, and future trends in these combined fields.",
      audience: "Technology researchers, blockchain developers, quantum computing specialists, and innovation leaders should attend.",
      topics: [
        "How Can Blockchain Enhance Security and Transparency in AI Systems?",
        "Will Quantum Computing Truly Transform AI Capabilities and Applications?",
        "Exploring How Parallel Technologies Are Shaping the Future of AI Innovation",
        "What Are the Opportunities and Risks at the Intersection of AI, Blockchain, and Quantum Computing?",
        "Navigating the Challenges and Unlocking the Potential of Emerging Parallel Technologies",
        "What Emerging Trends Will Define the Future of AI and Its Parallel Technologies?"
      ]
    },
    {
      id: 2,
      title: "Sustainable AI: Building an Eco-Friendly Future",
      description: "This track focuses on creating environmentally sustainable AI systems. Explore strategies for reducing carbon footprints, designing energy-efficient models, leveraging renewable energy, building green data centers, and balancing innovation with environmental responsibility.",
      audience: "Sustainability leaders, green tech advocates, AI infrastructure engineers, and environmental policy makers should attend.",
      topics: [
        "Strategies to Minimize AI's Carbon Footprint and Environmental Impact",
        "How Can We Design AI Models That Are Both Powerful and Energy Efficient?",
        "Can Renewable Energy Make AI Infrastructure Truly Sustainable?",
        "Building and Operating Data Centers That Support Green AI Initiatives",
        "How Do We Foster AI Innovation Without Compromising Environmental Goals?",
        "What Emerging Trends Will Shape the Future of Sustainable AI?"
      ]
    },
    {
      id: 3,
      title: "AI for Society: Driving Change & Managing Risks",
      description: "This track examines AI's broader impact on society, including workforce transformation, inequality concerns, social good applications, risk mitigation, and global economic implications. Learn how AI can drive positive change while managing potential negative consequences.",
      audience: "Social scientists, policy makers, workforce development leaders, and social impact professionals should attend.",
      topics: [
        "How Will AI Reshape Jobs and the Future of Work Across Industries?",
        "Can AI Help Close Social and Economic Gaps or Will It Widen Inequality?",
        "Driving Positive Change: Leveraging AI to Transform Healthcare, Education, and More",
        "What Strategies Can Effectively Reduce AI's Harmful Impacts on Society?",
        "How Is AI Reshaping Economic Power and Global Market Dynamics?",
        "What Emerging Trends Will Define AI's Role in Society and Social Justice?"
      ]
    },
    {
      id: 4,
      title: "Responsible AI: Ethics, Safety & Human Values",
      description: "This track addresses the critical aspects of AI ethics, safety, and alignment with human values. Explore fairness, transparency, bias elimination, accountability frameworks, regulatory landscapes, and best practices for responsible AI development.",
      audience: "AI ethicists, safety researchers, policy experts, and responsible AI practitioners should attend.",
      topics: [
        "Building Trust: How Can Organizations Ensure Fairness and Transparency in AI Systems?",
        "Strategies to Eliminate Bias and Promote Ethical AI Design",
        "Can AI Systems Truly Align with Complex Human Values and Societal Goals?",
        "Who Is Accountable When AI Systems Fail or Cause Harm?",
        "Navigating the Emerging Regulatory Landscape for Ethical AI Governance",
        "What Will Shape the Future of AI Ethics, Safety, and Alignment?",
        "Ensuring Robust AI Safety: Challenges and Best Practices for Risk Mitigation"
      ]
    }
  ];
  const summit_tracks = [
    {
      id: 1,
      title: "Frontiers of AI Research",
      description: "This track showcases cutting-edge AI research across machine learning, neural networks, natural language processing, and emerging AI architectures. Explore breakthrough discoveries, novel approaches, multimodal systems, robotics applications, and future research directions.",
      audience: "AI researchers, academic professionals, R&D leaders, and technical innovators interested in cutting-edge research should attend.",
      topics: [
        "Pushing the Frontiers: Recent Breakthroughs in Machine Learning and Neural Network Research",
        "How Can NLP Overcome Current Limitations to Achieve Truly Human-Like Understanding?",
        "Are Novel AI Algorithms the Key to Unlocking Next-Gen AI Capabilities?",
        "Combining Strengths: How Effective Are Multimodal and Ensemble Models in Real-World AI?",
        "What Are the Biggest Challenges in Bringing Cutting-Edge AI Research into Autonomous Robotics?",
        "Exploring the Unknown: Which Emerging AI Research Areas Will Have the Greatest Impact?",
        "Mapping the Future: What Will Drive AI Research Innovation in the Coming Years?"
      ]
    },
    {
      id: 2,
      title: "Shaping the AI Policy Landscape",
      description: "This track examines the evolving landscape of AI policy and regulation worldwide. Learn about current frameworks, ethical governance challenges, global regulatory perspectives, data privacy considerations, government roles, and future policy trends.",
      audience: "Policy makers, government officials, legal professionals, and regulatory affairs specialists should attend.",
      topics: [
        "Navigating Today's Landscape: Understanding Current AI Policy and Regulation",
        "How Can Policymakers Balance AI Innovation with Responsible Ethical Governance?",
        "Is There a Path Toward Harmonized Global AI Regulation, or Are Divergent Approaches Here to Stay?",
        "What Are the Key Policy Challenges in Ensuring Data Privacy in an AI-Driven World?",
        "To What Extent Should Governments Drive AI Development versus Letting Markets Lead?",
        "What Emerging Trends Will Shape the Future of AI Policy and Regulation?"
      ]
    },
    {
      id: 3,
      title: "AI Innovation & Investment Forum",
      description: "This track focuses on the AI startup ecosystem, venture capital trends, and innovation showcase. Explore cutting-edge AI products, industry outlook, startup scaling challenges, investment criteria, funding opportunities, and market disruption patterns.",
      audience: "Entrepreneurs, venture capitalists, startup founders, investors, and innovation leaders should attend.",
      topics: [
        "Driving Innovation: Showcasing the Most Cutting-Edge AI Products on the Market",
        "What Does the Future Hold? Exploring the AI Industry Outlook for Investors and Founders",
        "How Is the AI Startup Ecosystem Evolving in a Rapidly Changing Market?",
        "Are Traditional Investment Criteria Adequate for Evaluating AI Startups?",
        "Overcoming Growth Challenges: How Can AI Startups Scale Successfully?",
        "Unlocking Capital: What Are the Best Funding Paths for Early-Stage AI Startups?",
        "Is AI Disrupting Every Industry Equally, or Are Some Sectors Leading the Charge?",
        "What Emerging Trends Will Shape AI Startup Success and Investment Patterns?"
      ]
    },
    {
      id: 4,
      title: "Building Inclusive AI Ecosystems",
      description: "This track addresses diversity, inclusion, and bias reduction in AI development. Learn about promoting diverse teams, reducing algorithmic bias, the role of diversity in innovation, building inclusive ecosystems, and successful case studies from leading organizations.",
      audience: "Diversity and inclusion leaders, HR professionals, AI ethics practitioners, and organizational leaders should attend.",
      topics: [
        "Driving Change: How Diverse AI Teams and Leadership Fuel Innovation",
        "Can We Effectively Reduce Bias in AI Systems to Ensure Fairness for All?",
        "Why Does Diversity Matter for Breakthroughs in AI Innovation?",
        "How Can Organizations Build and Sustain Inclusive AI Ecosystems?",
        "What Lessons Can We Learn from Companies Pioneering Diversity in AI?",
        "What Emerging Trends Will Shape the Future of Diversity and Inclusion in AI?"
      ]
    },
    {
      id: 5,
      title: "AI Foundations for Everyone",
      description: "This track provides a comprehensive introduction to AI for beginners and non-technical professionals. Learn fundamental AI concepts, responsible AI practices, common use cases, foundational models, industry applications, and strategies for overcoming adoption challenges.",
      audience: "Business professionals new to AI, executives exploring AI adoption, and anyone seeking foundational AI knowledge should attend.",
      topics: [
        "AI Demystified: Understanding the Basics of Artificial Intelligence",
        "How Can We Ensure AI Is Developed and Used Responsibly?",
        "Exploring How AI Is Already Transforming Industries and Workplaces",
        "Will Foundational Models Become the Backbone of All AI Applications?",
        "How Is AI Being Applied Across Different Sectors and What Can Beginners Learn?",
        "What Are the Biggest Barriers to AI Adoption and How Can Organizations Overcome Them?"
      ]
    }
  ];
  const toggleTransMainDropdown = () => {
    setTransMainDropdownExpanded(prev => !prev);
  };

  const toggleTransTrack = (trackId) => {
    setTransExpandedTracks(prev => ({
      ...prev,
      [trackId]: !prev[trackId]
    }));
  };

const toggleTechMainDropdown = () => {
    setTechMainDropdownExpanded(prev => !prev);
  };

  const toggleTechTrack = (trackId) => {
    setTechExpandedTracks(prev => ({
      ...prev,
      [trackId]: !prev[trackId]
    }));
  };
const toggleRoleMainDropdown = () => {
    setRoleMainDropdownExpanded(prev => !prev);
  };

  const toggleRoleTrack = (trackId) => {
    setRoleExpandedTracks(prev => ({
      ...prev,
      [trackId]: !prev[trackId]
    }));
  };

const toggleSocialMainDropdown = () => {
    setSocialMainDropdownExpanded(prev => !prev);
  };

  const toggleSocialTrack = (trackId) => {
    setSocialExpandedTracks(prev => ({
      ...prev,
      [trackId]: !prev[trackId]
    }));
  };
  const toggleSummitMainDropdown = () => {
    setSummitMainDropdownExpanded(prev => !prev);
  };

  const toggleSummitTrack = (trackId) => {
    setSummitExpandedTracks(prev => ({
      ...prev,
      [trackId]: !prev[trackId]
    }));
  };
  const allTracks = [
  ...trans_tracks.map(track => ({ ...track, type: 'transformation' })),
  ...tech_tracks.map(track => ({ ...track, type: 'technical' })),
  ...role_tracks.map(track => ({ ...track, type: 'role' })),
  ...social_tracks.map(track => ({ ...track, type: 'social' })),
  ...summit_tracks.map(track => ({ ...track, type: 'summit' }))
];

const handleSearch = () => {
  if (!searchTerm.trim()) {
    setSearchResults([]);
    return;
  }

  const results = allTracks.filter(track => 
    track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  setSearchResults(results);
  
  // Auto-open relevant dropdowns and expand first result
  if (results.length > 0) {
    const firstResult = results[0];
    
    // Open appropriate main dropdown and get correct refs
    let refs;
    if (firstResult.type === 'transformation') {
      setTransMainDropdownExpanded(true);
      setTransExpandedTracks(prev => ({ ...prev, [firstResult.id]: true }));
      refs = transtrackRefs;
    } else if (firstResult.type === 'technical') {
      setTechMainDropdownExpanded(true);
      setTechExpandedTracks(prev => ({ ...prev, [firstResult.id]: true }));
      refs = techtrackRefs;
    } else if (firstResult.type === 'role') {
      setRoleMainDropdownExpanded(true);
      setRoleExpandedTracks(prev => ({ ...prev, [firstResult.id]: true }));
      refs = roletrackRefs;
    } else if (firstResult.type === 'social') {
      setSocialMainDropdownExpanded(true);
      setSocialExpandedTracks(prev => ({ ...prev, [firstResult.id]: true }));
      refs = socialtrackRefs;
    } else {
      setSummitMainDropdownExpanded(true);
      setSummitExpandedTracks(prev => ({ ...prev, [firstResult.id]: true }));
      refs = summittrackRefs;
    }
    
    // Scroll to first result
    if (refs && refs.current[firstResult.id]) {
      setTimeout(() => {
        refs.current[firstResult.id].scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 100);
    }
  }
};

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  const displayTransTracks = searchResults.length > 0 ? 
    searchResults.filter(track => track.type === 'transformation') : 
    trans_tracks;
  
  const displayTechTracks = searchResults.length > 0 ? 
    searchResults.filter(track => track.type === 'technical') : 
    tech_tracks;
  const displayRoleTracks = searchResults.length > 0 ? 
    searchResults.filter(track => track.type === 'role') : 
    role_tracks;
    const displaySocialTracks = searchResults.length > 0 ? 
    searchResults.filter(track => track.type === 'social') : 
    social_tracks;
    const displaySummitTracks = searchResults.length > 0 ? 
    searchResults.filter(track => track.type === 'summit') : 
    summit_tracks;
    return(
        <>
        <div style={{margin: 0, padding: 0, backgroundColor: '#000000', minHeight: '100vh'}}>
         <div className="min-h-screen bg-black text-green-400" style={{margin: 0, padding: 0}}>
         <header className="px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-4">AI Conference Tracks</h1>
      <p className="text-white max-w-4xl leading-relaxed mb-8">
        Explore comprehensive AI tracks covering strategic transformations and technical innovations.
      </p>
        {/* Search Section */}
<div className="max-w-2xl mb-8">
  <div className="flex gap-3 mb-4">
    <div className="flex-1 relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search all tracks by title, description, or topics..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        className="w-full pl-10 pr-4 py-3 bg-black border border-green-500 text-green-400 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none placeholder-green-300/50"
      />
    </div>
    <button
      onClick={handleSearch}
      className="px-6 py-3 bg-green-600/20 backdrop-blur-sm border border-green-500/30 text-white rounded-lg hover:bg-green-500/30 hover:border-green-400/50 transition-all font-medium"
    >
      Search
    </button>
    {searchResults.length > 0 && (
      <button
        onClick={clearSearch}
        className="px-4 py-3 bg-gray-800/20 backdrop-blur-sm border border-green-500/30 text-green-400 rounded-lg hover:bg-gray-700/30 hover:border-green-400/50 transition-all"
      >
        Clear
      </button>
    )}
  </div>
  
  {/* ONLY show results count AFTER search is performed */}
  {searchResults.length > 0 && searchTerm && (
    <p className="text-green-300">
      Found {searchResults.length} track{searchResults.length !== 1 ? 's' : ''} matching "{searchTerm}"
    </p>
  )}
</div>

{/* ONLY show no results message when search was performed but no results found */}
{searchResults.length === 0 && searchTerm && (
  <div className="text-center py-12">
    <p className="text-green-300 text-lg">No tracks found matching "{searchTerm}"</p>
    <button
      onClick={clearSearch}
      className="mt-4 px-4 py-2 text-green-400 hover:text-green-300 font-medium"
    >
      View all tracks
    </button>
  </div>
)}
    </header>             
   {/* AI Transformations Section */}

      <header className="px-8 py-12">
  <h1 className="text-4xl font-bold text-white mb-4">AI Transformations Tracks</h1>
  <p className="text-white max-w-4xl leading-relaxed mb-8">
    Our transformation tracks focus on strategic AI implementation and business transformation. 
    Explore how AI agents, generative AI, and data strategies can drive organizational change, 
    improve efficiency, and create new opportunities for growth and innovation.
  </p>
</header>
<main className="px-8 pb-12">
  <div className="border border-green-500 bg-black shadow-lg">
  {/* Main Dropdown Header */}
  
  <div 
    className="px-6 py-4 border-b border-green-500 cursor-pointer hover:bg-gray-900/50 transition-colors"
    onClick={toggleTransMainDropdown}
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        {mainTransDropdownExpanded ? (
          <ChevronDown className="text-green-400 mr-3 w-5 h-5 flex-shrink-0" />
        ) : (
          <ChevronRight className="text-green-400 mr-3 w-5 h-5 flex-shrink-0" />
        )}
        <h2 className="text-xl font-semibold text-green-400">
          All AI Transformations Tracks 
        </h2>
      </div>
      <GlassArrowButton 
        isExpanded={mainTransDropdownExpanded} 
        onClick={(e) => {
          e.stopPropagation();
          toggleTransMainDropdown();
        }} 
      />
    </div>
  </div>

  {/* Main Dropdown Content with transition */}
  <div 
  className={`transition-all duration-300 ease-in-out ${
    mainTransDropdownExpanded ? 'opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
  }`}
>
    <div className="px-6 py-6 bg-black">
      <div className="space-y-4">
        {displayTransTracks.map((track) => (
          <div 
            key={track.id} 
            ref={el => transtrackRefs.current[track.id] = el}
            className="border border-green-600/50 bg-gray-900/20 rounded-lg"
          >
            <div 
              className="px-4 py-3 border-b border-green-600/30 cursor-pointer hover:bg-gray-800/50 transition-colors rounded-t-lg"
              onClick={() => toggleTransTrack(track.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {expandedTransTracks[track.id] ? (
                    <ChevronDown className="text-green-400 mr-2 w-4 h-4 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="text-green-400 mr-2 w-4 h-4 flex-shrink-0" />
                  )}
                  <h3 className="text-base font-medium text-green-400">{track.title}</h3>
                </div>
                <div style={{ transform: 'scale(0.8)' }}>
                  <GlassArrowButton 
                    isExpanded={expandedTransTracks[track.id]} 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleTransTrack(track.id);
                    }} 
                  />
                </div>
              </div>
            </div>
            
            {expandedTransTracks[track.id] && (
              <div className="px-4 py-4 bg-gray-900/10 space-y-3 rounded-b-lg">
                <p className="text-white text-sm leading-relaxed">{track.description}</p>
                
                <p className="text-white text-sm">
                  <span className="font-semibold">Ideal Audience:</span> {track.audience}
                </p>
                
                <div>
                  <p className="font-semibold text-white mb-2 text-sm">Topics Highlights:</p>
                  <ul className="space-y-1">
                    {track.topics.map((topic, index) => (
                      <li key={index} className="text-white text-sm flex">
                        <span className="mr-2">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
</main>

 {/* Technical Tracks Section */}

      <header className="px-8 py-12">
  <h1 className="text-4xl font-bold text-white mb-4">Technical Tracks</h1>
  <p className="text-white max-w-4xl leading-relaxed mb-8">
    Our technical tracks dive deep into the engineering and research aspects of AI. 
    From advanced model architectures and machine learning techniques to infrastructure, 
    security, and cutting-edge research, these tracks are designed for practitioners 
    who want to understand the technical foundations of AI systems.
  </p>
</header>
<main className="px-8 pb-12">
  <div className="border border-green-500 bg-black shadow-lg">


  <div 
    className="px-6 py-4 border-b border-green-500 cursor-pointer hover:bg-gray-900/50 transition-colors"
    onClick={toggleTechMainDropdown}
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        {mainTechDropdownExpanded ? (
          <ChevronDown className="text-green-400 mr-3 w-5 h-5 flex-shrink-0" />
        ) : (
          <ChevronRight className="text-green-400 mr-3 w-5 h-5 flex-shrink-0" />
        )}
        <h2 className="text-xl font-semibold text-green-400">
          All Technical Tracks 
        </h2>
      </div>
      <GlassArrowButton 
        isExpanded={mainTechDropdownExpanded} 
        onClick={(e) => {
          e.stopPropagation();
          toggleTechMainDropdown();
        }} 
      />
    </div>
  </div>
  
  {/* Main Dropdown Content with transition */}
<div 
  className={`transition-all duration-300 ease-in-out ${
    mainTechDropdownExpanded ? 'opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
  }`}
>
    <div className="px-6 py-6 bg-black">
      <div className="space-y-4">
        {displayTechTracks.map((track) => (
          <div 
            key={track.id} 
            ref={el => techtrackRefs.current[track.id] = el}
            className="border border-green-600/50 bg-gray-900/20 rounded-lg"
          >
            <div 
              className="px-4 py-3 border-b border-green-600/30 cursor-pointer hover:bg-gray-800/50 transition-colors rounded-t-lg"
              onClick={() => toggleTechTrack(track.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {expandedTechTracks[track.id] ? (
                    <ChevronDown className="text-green-400 mr-2 w-4 h-4 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="text-green-400 mr-2 w-4 h-4 flex-shrink-0" />
                  )}
                  <h3 className="text-base font-medium text-green-400">{track.title}</h3>
                </div>
                <div style={{ transform: 'scale(0.8)' }}>
                  <GlassArrowButton 
                    isExpanded={expandedTechTracks[track.id]} 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleTechTrack(track.id);
                    }} 
                  />
                </div>
              </div>
            </div>
            
            {expandedTechTracks[track.id] && (
              <div className="px-4 py-4 bg-gray-900/10 space-y-3 rounded-b-lg">
                <p className="text-white text-sm leading-relaxed">{track.description}</p>
                
                <p className="text-white text-sm">
                  <span className="font-semibold">Ideal Audience:</span> {track.audience}
                </p>
                
                <div>
                  <p className="font-semibold text-white mb-2 text-sm">Topics Highlights:</p>
                  <ul className="space-y-1">
                    {track.topics.map((topic, index) => (
                      <li key={index} className="text-white text-sm flex">
                        <span className="mr-2">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
</main>
{/* Role Based Tracks */}
 <header className="px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-4">Role-Based Tracks</h1>
        <p className="text-white max-w-4xl leading-relaxed mb-8">
          Our role-based tracks are designed for specific job functions and professional roles. 
          Explore AI applications, strategies, and best practices tailored to your specific area 
          of expertise, from customer experience and cybersecurity to marketing and software engineering.
        </p>
      </header>

      {/* Main Content */}
      <main className="px-8 pb-12">
        {/* Main Dropdown Container */}
        <div className="border border-green-500 bg-black shadow-lg">
          {/* Main Dropdown Header */}
          <div 
            className="px-6 py-4 border-b border-green-500 cursor-pointer hover:bg-gray-900/50 transition-colors"
            onClick={toggleRoleMainDropdown}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {mainRoleDropdownExpanded ? (
                  <ChevronDown className="text-green-400 mr-3 w-5 h-5 flex-shrink-0" />
                ) : (
                  <ChevronRight className="text-green-400 mr-3 w-5 h-5 flex-shrink-0" />
                )}
                <h2 className="text-xl font-semibold text-green-400">
                  All Role-Based Tracks 
                </h2>
              </div>
              <GlassArrowButton 
                isExpanded={mainRoleDropdownExpanded} 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleRoleMainDropdown();
                }} 
              />
            </div>
          </div>
          
          {/* Main Dropdown Content */}
          {mainRoleDropdownExpanded && (
            <div className="px-6 py-6 bg-black">
              <div className="space-y-4">
                {displayRoleTracks.map((track) => (
                  <div 
                    key={track.id} 
                    ref={el => roletrackRefs.current[track.id] = el}
                    className="border border-green-600/50 bg-gray-900/20 rounded-lg"
                  >
                    <div 
                      className="px-4 py-3 border-b border-green-600/30 cursor-pointer hover:bg-gray-800/50 transition-colors rounded-t-lg"
                      onClick={() => toggleRoleTrack(track.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {expandedRoleTracks[track.id] ? (
                            <ChevronDown className="text-green-400 mr-2 w-4 h-4 flex-shrink-0" />
                          ) : (
                            <ChevronRight className="text-green-400 mr-2 w-4 h-4 flex-shrink-0" />
                          )}
                          <h3 className="text-base font-medium text-green-400">{track.title}</h3>
                        </div>
                        <div style={{ transform: 'scale(0.8)' }}>
                          <GlassArrowButton 
                            isExpanded={expandedRoleTracks[track.id]} 
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleRoleTrack(track.id);
                            }} 
                          />
                        </div>
                      </div>
                    </div>
                    
                    {expandedRoleTracks[track.id] && (
                      <div className="px-4 py-4 bg-gray-900/10 space-y-3 rounded-b-lg">
                        <p className="text-white text-sm leading-relaxed">{track.description}</p>
                        
                        <p className="text-white text-sm">
                          <span className="font-semibold">Ideal Audience:</span> {track.audience}
                        </p>
                        
                        <div>
                          <p className="font-semibold text-white mb-2 text-sm">Topics Highlights:</p>
                          <ul className="space-y-1">
                            {track.topics.map((topic, index) => (
                              <li key={index} className="text-white text-sm flex">
                                <span className="mr-2">•</span>
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      {/* Social Tracks */}
       <header className="px-8 py-12">
              <h1 className="text-4xl font-bold text-white mb-4">Social Impact Tracks</h1>
              <p className="text-white max-w-4xl leading-relaxed mb-8">
                Our social impact tracks address the broader implications of AI on society, the environment, 
                and human values. Explore how AI intersects with emerging technologies, environmental 
                sustainability, social change, and ethical considerations to create a responsible and 
                beneficial AI future for all.
              </p>
            </header>
      
            {/* Main Content */}
            <main className="px-8 pb-12">
              {/* Main Dropdown Container */}
              <div className="border border-green-500 bg-black shadow-lg">
                {/* Main Dropdown Header */}
                <div 
                  className="px-6 py-4 border-b border-green-500 cursor-pointer hover:bg-gray-900/50 transition-colors"
                  onClick={toggleSocialMainDropdown}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {mainSocialDropdownExpanded ? (
                        <ChevronDown className="text-green-400 mr-3 w-5 h-5 flex-shrink-0" />
                      ) : (
                        <ChevronRight className="text-green-400 mr-3 w-5 h-5 flex-shrink-0" />
                      )}
                      <h2 className="text-xl font-semibold text-green-400">
                        All Social Impact Tracks 
                      </h2>
                    </div>
                    <GlassArrowButton 
                      isExpanded={mainSocialDropdownExpanded} 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSocialMainDropdown();
                      }} 
                    />
                  </div>
                </div>
                
                {/* Main Dropdown Content */}
                {mainSocialDropdownExpanded && (
                  <div className="px-6 py-6 bg-black">
                    <div className="space-y-4">
                      {displaySocialTracks.map((track) => (
                        <div 
                          key={track.id} 
                          ref={el => socialtrackRefs.current[track.id] = el}
                          className="border border-green-600/50 bg-gray-900/20 rounded-lg"
                        >
                          <div 
                            className="px-4 py-3 border-b border-green-600/30 cursor-pointer hover:bg-gray-800/50 transition-colors rounded-t-lg"
                            onClick={() => toggleSocialTrack(track.id)}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                {expandedSocialTracks[track.id] ? (
                                  <ChevronDown className="text-green-400 mr-2 w-4 h-4 flex-shrink-0" />
                                ) : (
                                  <ChevronRight className="text-green-400 mr-2 w-4 h-4 flex-shrink-0" />
                                )}
                                <h3 className="text-base font-medium text-green-400">{track.title}</h3>
                              </div>
                              <div style={{ transform: 'scale(0.8)' }}>
                                <GlassArrowButton 
                                  isExpanded={expandedSocialTracks[track.id]} 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleSocialTrack(track.id);
                                  }} 
                                />
                              </div>
                            </div>
                          </div>
                          
                          {expandedSocialTracks[track.id] && (
                            <div className="px-4 py-4 bg-gray-900/10 space-y-3 rounded-b-lg">
                              <p className="text-white text-sm leading-relaxed">{track.description}</p>
                              
                              <p className="text-white text-sm">
                                <span className="font-semibold">Ideal Audience:</span> {track.audience}
                              </p>
                              
                              <div>
                                <p className="font-semibold text-white mb-2 text-sm">Topics Highlights:</p>
                                <ul className="space-y-1">
                                  {track.topics.map((topic, index) => (
                                    <li key={index} className="text-white text-sm flex">
                                      <span className="mr-2">•</span>
                                      <span>{topic}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </main>
            {/* Summit Tracks */}
             <header className="px-8 py-12">
                    <h1 className="text-4xl font-bold text-white mb-4">Summit Tracks</h1>
                    <p className="text-white max-w-4xl leading-relaxed mb-8">
                      Our summit tracks bring together thought leaders, researchers, policymakers, investors, 
                      and innovators to explore the most pressing topics in AI. From cutting-edge research 
                      and policy development to startup innovation and inclusive AI ecosystems, these tracks 
                      offer deep insights into the future of artificial intelligence.
                    </p>
                  </header>
            
                  {/* Main Content */}
                  <main className="px-8 pb-12">
                    {/* Main Dropdown Container */}
                    <div className="border border-green-500 bg-black shadow-lg">
                      {/* Main Dropdown Header */}
                      <div 
                        className="px-6 py-4 border-b border-green-500 cursor-pointer hover:bg-gray-900/50 transition-colors"
                        onClick={toggleSummitMainDropdown}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {mainSummitDropdownExpanded ? (
                              <ChevronDown className="text-green-400 mr-3 w-5 h-5 flex-shrink-0" />
                            ) : (
                              <ChevronRight className="text-green-400 mr-3 w-5 h-5 flex-shrink-0" />
                            )}
                            <h2 className="text-xl font-semibold text-green-400">
                              All Summit Tracks 
                            </h2>
                          </div>
                          <GlassArrowButton 
                            isExpanded={mainSummitDropdownExpanded} 
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleSummitMainDropdown();
                            }} 
                          />
                        </div>
                      </div>
                      
                      {/* Main Dropdown Content */}
                      {mainSummitDropdownExpanded && (
                        <div className="px-6 py-6 bg-black">
                          <div className="space-y-4">
                            {displaySummitTracks.map((track) => (
                              <div 
                                key={track.id} 
                                ref={el => summittrackRefs.current[track.id] = el}
                                className="border border-green-600/50 bg-gray-900/20 rounded-lg"
                              >
                                <div 
                                  className="px-4 py-3 border-b border-green-600/30 cursor-pointer hover:bg-gray-800/50 transition-colors rounded-t-lg"
                                  onClick={() => toggleSummitTrack(track.id)}
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                      {expandedSummitTracks[track.id] ? (
                                        <ChevronDown className="text-green-400 mr-2 w-4 h-4 flex-shrink-0" />
                                      ) : (
                                        <ChevronRight className="text-green-400 mr-2 w-4 h-4 flex-shrink-0" />
                                      )}
                                      <h3 className="text-base font-medium text-green-400">{track.title}</h3>
                                    </div>
                                    <div style={{ transform: 'scale(0.8)' }}>
                                      <GlassArrowButton 
                                        isExpanded={expandedSummitTracks[track.id]} 
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          toggleSummitTrack(track.id);
                                        }} 
                                      />
                                    </div>
                                  </div>
                                </div>
                                
                                {expandedSummitTracks[track.id] && (
                                  <div className="px-4 py-4 bg-gray-900/10 space-y-3 rounded-b-lg">
                                    <p className="text-white text-sm leading-relaxed">{track.description}</p>
                                    
                                    <p className="text-white text-sm">
                                      <span className="font-semibold">Ideal Audience:</span> {track.audience}
                                    </p>
                                    
                                    <div>
                                      <p className="font-semibold text-white mb-2 text-sm">Topics Highlights:</p>
                                      <ul className="space-y-1">
                                        {track.topics.map((topic, index) => (
                                          <li key={index} className="text-white text-sm flex">
                                            <span className="mr-2">•</span>
                                            <span>{topic}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </main>
               </div>
               </div>
        </>
    )}