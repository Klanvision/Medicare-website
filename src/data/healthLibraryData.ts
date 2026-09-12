export type ContentType = 'Article' | 'Video' | 'Health News' | 'Disease Guide' | 'Wellness Tip';

export interface HealthArticle {
  id: string;
  title: string;
  slug: string;
  type: ContentType;
  category: string;
  summary: string;
  content: string;
  author: {
    name: string;
    title: string;
    photo: string;
  };
  publishDate: string;
  readTime: string;
  coverImage: string;
  videoUrl?: string;
  tags: string[];
  isFeatured?: boolean;
}

export const HEALTH_ARTICLES_DATA: HealthArticle[] = [
  {
    id: 'art-1',
    title: 'Understanding Modern Mako 3D Robotic Knee Replacement Surgery',
    slug: 'mako-robotic-knee-replacement',
    type: 'Article',
    category: 'Orthopedics',
    summary: 'Discover how 3D CT-guided robotic precision minimizes tissue trauma, accelerates walking recovery within 24 hours, and extends implant life to 30 years.',
    content: `Robotic knee replacement represents a quantum leap in orthopedic surgery. Utilizing the Mako 3D Robotic Arm system, surgeons create a customized 3D virtual model of your specific knee anatomy prior to surgery.

### Key Benefits of Robotic Joint Replacement:
1. **Sub-Millimeter Surgical Precision**: Eliminates human alignment error and preserves healthy bone stock.
2. **Accelerated Recovery**: Most patients begin walking with minimal aid within 24 hours of surgery.
3. **Longer Implant Lifespan**: Perfect mechanical axis alignment extends implant durability up to 30 years.

### Who is a Candidate?
Patients suffering from severe osteoarthritis, chronic joint pain unresponsive to medication, or deformity can benefit from Mako robotic joint resurfacing.`,
    author: {
      name: 'Dr. Rajesh Verma',
      title: 'Head of Robotic Joint Surgery',
      photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
    },
    publishDate: 'Aug 18, 2026',
    readTime: '5 Min Read',
    coverImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    tags: ['RoboticSurgery', 'JointCare', 'Orthopedics', 'KneePain'],
    isFeatured: true,
  },

  {
    id: 'art-2',
    title: '5 Warning Signs of Silent Heart Blockage You Should Never Ignore',
    slug: 'warning-signs-silent-heart-blockage',
    type: 'Disease Guide',
    category: 'Cardiology',
    summary: 'Learn to recognize early indicators of coronary artery disease, including unexplained fatigue, jaw pressure, breathlessness, and silent angina.',
    content: `Coronary artery disease often develops silently over decades. Many patients experience subtle warning signals long before an acute cardiac event occurs.

### 5 Critical Warning Signals:
1. **Unexplained Exertional Breathlessness**: Feeling abnormally out of breath during routine walking or climbing stairs.
2. **Jaw, Neck, or Arm Radiating Pressure**: Dull aching radiating to the left shoulder, jaw, or upper back.
3. **Chronic Cold Sweats & Dizziness**: Sudden cold perspiration accompanied by lightheadedness.
4. **Post-Meal Chest Fullness**: Misinterpreting cardiac tightness as acidity or indigestion.
5. **Profound Chronic Fatigue**: Feeling exhausted despite adequate sleep.

If you experience two or more of these symptoms, schedule a 128-Slice Coronary CT Angiography immediately.`,
    author: {
      name: 'Dr. Ananya Deshmukh',
      title: 'Senior Interventional Cardiologist',
      photo: 'https://images.unsplash.com/photo-1594824813566-88855ce78961?auto=format&fit=crop&w=400&q=80',
    },
    publishDate: 'Aug 14, 2026',
    readTime: '6 Min Read',
    coverImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
    tags: ['Cardiology', 'HeartHealth', 'DiseaseGuide', 'PreventiveHealth'],
    isFeatured: true,
  },

  {
    id: 'vid-3',
    title: 'Surgeon Explainer: How 3T Silent MRI Works Without Scanner Noise',
    slug: '3t-silent-mri-explainer-video',
    type: 'Video',
    category: 'Radiology',
    summary: 'Watch Chief Radiologist Dr. Suresh Kulkarni explain how 3 Tesla Silent MRI technology achieves HD brain scans with 99% noise reduction.',
    content: `In this 3-minute video guide, Dr. Suresh Kulkarni demonstrates our state-of-the-art Philips 3T Silent MRI suite designed for claustrophobic and noise-sensitive patients.

### Video Highlights:
- Acoustic noise reduction technology (reduced from 110 dB down to ambient room sound 3 dB).
- 3D brain fiber tractography and angiography mapping.
- Pediatric & geriatric friendly scanning without anesthesia.`,
    author: {
      name: 'Dr. Suresh Kulkarni',
      title: 'Director of Diagnostic Imaging',
      photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80',
    },
    publishDate: 'Aug 10, 2026',
    readTime: '3 Min Watch',
    coverImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tags: ['MRI', 'Radiology', 'BrainHealth', 'MedicalTech'],
    isFeatured: false,
  },

  {
    id: 'news-4',
    title: 'MEDICARE Performs Region’s First 100% Cashless Robotic Organ Transplant',
    slug: 'first-cashless-robotic-organ-transplant',
    type: 'Health News',
    category: 'Organ Transplant',
    summary: 'Our multi-organ transplant team successfully completes a landmark robotic kidney transplant with zero out-of-pocket expense under Star Health TPA.',
    content: `PUNE — MEDICARE’s Organ Transplant Institute has achieved a major milestone by successfully performing a 100% cashless robotic kidney transplantation.

The patient, a 44-year-old software engineer, received a living donor kidney using precision 3D robotic laparoscopy, reducing hospital stay to just 4 days. The entire procedure was covered seamlessly under Star Health Cashless Pre-Authorisation.`,
    author: {
      name: 'Medical News Desk',
      title: 'MEDICARE Editorial Team',
      photo: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80',
    },
    publishDate: 'Aug 05, 2026',
    readTime: '4 Min Read',
    coverImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    tags: ['HealthNews', 'Transplant', 'RoboticSurgery', 'CashlessCare'],
    isFeatured: false,
  },

  {
    id: 'tip-5',
    title: '10 Proven Dietary Habits to Reverse Fatty Liver & Lower Triglycerides',
    slug: 'reverse-fatty-liver-diet-tips',
    type: 'Wellness Tip',
    category: 'Gastroenterology',
    summary: 'Actionable nutrition recommendations from senior hepatologists to combat Non-Alcoholic Fatty Liver Disease (NAFLD) naturally.',
    content: `Non-Alcoholic Fatty Liver Disease (NAFLD) affects over 30% of adults. The good news is that early-stage hepatic steatosis is completely reversible with dietary discipline.

### Top 5 Nutrition Tips:
1. **Incorporate Mediterranean Fats**: Replace refined oils with cold-pressed extra virgin olive oil and avocado.
2. **Increase Soluble Fiber**: Eat 30g daily of oats, chia seeds, and legumes to bind bile acids.
3. **Eliminate Liquid Fructose**: Cut out aerated sodas, packaged fruit juices, and high-fructose corn syrups.
4. **Intermittent Fasting (14/10)**: Allow a 14-hour overnight fast to stimulate hepatic autophagy.
5. **Daily Green Tea**: Rich in EGCG catechins that accelerate liver lipid oxidation.`,
    author: {
      name: 'Clinical Nutrition Desk',
      title: 'Department of Gastroenterology',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
    },
    publishDate: 'Jul 28, 2026',
    readTime: '4 Min Read',
    coverImage: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
    tags: ['WellnessTip', 'LiverHealth', 'Nutrition', 'PreventiveHealth'],
    isFeatured: false,
  },
];
