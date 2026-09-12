export interface TreatmentDetail {
  slug: string;
  name: string;
  shortDesc: string;
  overview: string;
  duration: string;
  recoveryTime: string;
  procedureSteps: string[];
  benefits: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TechItem {
  name: string;
  desc: string;
}

export interface FeatureItem {
  name: string;
  desc: string;
}

export interface WhyChooseItem {
  title: string;
  desc: string;
}

export interface HealthBlogItem {
  slug?: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  imageUrl?: string;
}

export interface Specialty {
  slug: string;
  name: string;
  iconName: string;
  shortDesc: string;
  overview: string;
  whyChooseDesc: string;
  whyChoosePoints: WhyChooseItem[];
  advancedTechnologies: TechItem[];
  diagnosticScreenings: FeatureItem[];
  medicalTreatments: FeatureItem[];
  specializedProcedures: FeatureItem[];
  conditions: string[];
  symptoms: string[];
  treatments: TreatmentDetail[];
  faqs: FAQItem[];
  healthArticles: HealthBlogItem[];
  associatedDoctorSpecialty: string;
  keyFacilities?: string[];
  whyChooseUs?: string[];
}

export const SPECIALTIES_DATA: Specialty[] = [
  // 1. CARDIOLOGY
  {
    slug: 'cardiology',
    name: 'Cardiology & Cardiac Sciences',
    iconName: 'HeartPulse',
    shortDesc: 'Comprehensive interventional cardiac care, radial angioplasty, TAVI & heart failure management.',
    overview: 'Searching for the BEST CARDIOLOGY HOSPITALS IN HITECH CITY, HYDERABAD near you? MEDICARE Hospitals offers comprehensive cardiology care services across Kondapur, Madhapur, HITEC City, and Gachibowli. Our cardiology specialists provide advanced diagnosis, treatment, and emergency care with 24/7 support for better health outcomes.',
    whyChooseDesc: 'When your heart health is at risk, you deserve care that brings expertise together with compassion. Here is why patients trust MEDICARE Hospitals in Hyderabad for their cardiology needs:',
    whyChoosePoints: [
      {
        title: 'Expert Cardiologists and Cardiac Surgeons',
        desc: 'Our hospital houses some of the most experienced cardiologists, interventional cardiologists, and cardiac surgeons who bring years of clinical expertise and success in treating complex heart conditions.',
      },
      {
        title: 'Advanced Cardiac ICU and Emergency Services',
        desc: 'We offer 24/7 cardiac emergency services with a specialized ICU managed by cardiology experts to handle critical situations like heart attacks and cardiac arrest with < 35 min door-to-balloon time.',
      },
      {
        title: 'Modern Cath Lab and Diagnostic Facilities',
        desc: 'Equipped with the latest Philips Azurion 7 technology, our Cath Lab supports procedures like angioplasty, angiography, stenting, and electrophysiological tests with high accuracy and safety.',
      },
      {
        title: 'Minimally Invasive Cardiac Procedures',
        desc: 'From TAVI/TAVR valve replacements to minimally invasive beating-heart bypass surgery, patients benefit from reduced recovery time, minimal scarring, and lower surgical risk.',
      },
      {
        title: 'Focus on Heart Disease Prevention',
        desc: 'Along with treatments, we offer preventive cardiology services through screening tests, diet planning, lipid management, and lifestyle modification guidance to reduce future risks.',
      },
      {
        title: 'Personalized Cardiac Care Plans',
        desc: 'Every patient is unique. Our team provides tailored treatment strategies based on your age, condition, genetic risk factors, and personal health goals.',
      },
      {
        title: 'Technology-driven Care and Monitoring',
        desc: 'Continuous monitoring devices, IVUS intravascular ultrasound, FFR pressure wire, and AI-enabled diagnostics ensure precision, especially for arrhythmias and heart failure management.',
      },
    ],
    advancedTechnologies: [
      {
        name: 'Intravascular Ultrasound (IVUS)',
        desc: 'Provides detailed 3D images of blood vessels from inside, helping assess complex blockages and stent expansion.',
      },
      {
        name: 'Fractional Flow Reserve (FFR)',
        desc: 'Measures blood pressure inside coronary arteries to determine whether stenting is necessary.',
      },
      {
        name: '3D & 4D Echocardiography',
        desc: 'Provides real-time structural imaging of heart valves and chambers essential for valve disorders and congenital defects.',
      },
      {
        name: 'Electrophysiology 3D Mapping System',
        desc: 'Used to diagnose and pinpoint irregular heartbeats such as atrial fibrillation and ventricular tachycardia.',
      },
      {
        name: 'Transcatheter Aortic Valve Implantation (TAVI)',
        desc: 'Incisionless valve replacement procedure for high-risk surgical candidates under local anesthesia.',
      },
      {
        name: 'Hybrid Cardiac Operating Suite',
        desc: 'Combines surgical and catheter-based interventions in a single sterile room, improving safety.',
      },
    ],
    diagnosticScreenings: [
      { name: 'Electrocardiogram (ECG)', desc: '12-lead digital recording to detect electrical activity and rhythm of the heart.' },
      { name: '2D & 3D Echocardiography', desc: 'Ultrasound imaging to visualize heart structure, muscle wall motion, and valve functioning.' },
      { name: 'Cardiac Stress Test (TMT)', desc: 'Treadmill test evaluating heart blood flow and performance under physical exertion.' },
      { name: '24-Hour Holter Monitoring', desc: 'Continuous ambulatory ECG recording to capture transient arrhythmias and palpitations.' },
      { name: 'CT Coronary Angiography', desc: '64-Slice non-invasive CT scan to visualize calcified plaque and arterial stenosis.' },
    ],
    medicalTreatments: [
      { name: 'Angioplasty & Stent Placement (PTCA)', desc: 'Radial wrist access to open narrowed arteries with drug-eluting stents.' },
      { name: 'Pacemaker Implantation', desc: 'Single & dual-chamber cardiac pacemakers for bradycardia management.' },
      { name: 'ICD & CRT Device Therapy', desc: 'Defibrillator and biventricular pacing for heart failure and sudden cardiac death prevention.' },
      { name: 'Valve Repair or Replacement', desc: 'Minimally invasive and surgical repair for mitral and aortic valve stenosis.' },
      { name: 'Heart Failure Management Program', desc: 'Optimized medication therapy, cardiac rehab, and continuous hemodynamic monitoring.' },
    ],
    specializedProcedures: [
      { name: 'Electrophysiology Studies & RF Ablation', desc: 'Radiofrequency catheter ablation to permanently eliminate arrhythmia pathways.' },
      { name: 'TAVI / TAVR Valve Implantation', desc: 'No-cut transcatheter aortic valve replacement for elderly patients.' },
      { name: 'ASD / VSD / PDA Device Closure', desc: 'Incisionless cardiac hole closure using specialized occluder buttons.' },
      { name: 'Rotablation Plaque Modification', desc: 'High-speed diamond burr to drill through heavy calcified artery blockages.' },
      { name: 'Peripheral Angioplasty & Stenting', desc: 'Revascularization for blocked leg and renal blood vessels.' },
    ],
    conditions: [
      'Coronary Artery Disease (CAD)',
      'Acute Myocardial Infarction (Heart Attack)',
      'Heart Failure & Cardiomyopathy',
      'Cardiac Arrhythmias & Atrial Fibrillation',
      'Aortic & Mitral Valve Disease',
    ],
    symptoms: [
      'Chest Pain, Pressure or Squeezing Sensation',
      'Shortness of Breath on Exertion or Lying Flat',
      'Irregular or Rapid Heartbeats (Palpitations)',
      'Unexplained Dizziness or Sudden Fainting',
      'Swelling in Legs, Ankles or Feet (Edema)',
    ],
    keyFacilities: [
      '24/7 Interventional Philips Azurion 7 Cath Lab',
      '3D Echocardiography & Transesophageal Echo (TEE)',
      'Electrophysiology (EP) 3D Cardiac Mapping Suite',
      '30-Bed Dedicated Cardiac Intensive Care Unit (CCU)',
      'Rotablator & Intravascular Ultrasound (IVUS)',
    ],
    whyChooseUs: [
      '< 35 Minute Door-to-Balloon Emergency STEMI Response',
      '99.4% Angioplasty Clinical Success Rate',
      'Incisionless TAVI / TAVR Valve Replacement Leadership',
      'Dedicated 24/7 Cardiac Care Unit (CCU) Specialists',
    ],
    treatments: [
      {
        slug: 'coronary-angioplasty',
        name: 'Coronary Angioplasty & Stenting (PTCA)',
        shortDesc: 'Minimally invasive procedure to open blocked heart arteries using drug-eluting stents.',
        overview: 'Percutaneous Transluminal Coronary Angioplasty (PTCA) restores blood flow to ischemic heart muscle through a small wrist artery access.',
        duration: '45 - 90 Minutes',
        recoveryTime: '24 - 48 Hours Hospital Stay',
        procedureSteps: [
          'Radial artery access under local anesthesia',
          'Catheter guidance to coronary stenosis using fluoroscopy',
          'Balloon inflation to dilate blocked artery',
          'Precision placement of drug-eluting stent (DES)',
        ],
        benefits: [
          'Instant relief from angina chest pain',
          'Prevents irreversible heart muscle damage during STEMI',
          'Minimal recovery time compared to open heart surgery',
        ],
      },
    ],
    faqs: [
      {
        question: 'What services does the cardiology department at MEDICARE offer?',
        answer: 'Our cardiology department provides comprehensive heart care including diagnosis, treatment, and management of all heart conditions. Services include ECG, echocardiography, angioplasty, bypass surgery, cardiac rehab, and 24/7 emergency cardiac care.',
      },
      {
        question: 'Are second opinions available for cardiac conditions?',
        answer: 'Yes, our cardiac specialists at MEDICARE Hospitals welcome patients seeking second opinions to help them make informed decisions about their heart treatment options.',
      },
      {
        question: 'Do you offer preventive cardiology and heart health checkups?',
        answer: 'Yes, we provide comprehensive heart health screenings and preventive cardiology packages to detect risks early and prevent heart disease.',
      },
      {
        question: 'Does your hospital offer minimally invasive cardiac surgeries?',
        answer: 'Yes, we perform minimally invasive procedures such as radial angioplasty, TAVI valve replacement, and keyhole heart surgeries which reduce recovery time.',
      },
      {
        question: 'Do you accept cashless insurance for cardiology treatments?',
        answer: 'Yes, we accept major health insurance plans and TPAs at MEDICARE Hospitals, assisting patients with smooth cashless approval.',
      },
      {
        question: 'Are there facilities for cardiac rehabilitation post-surgery?',
        answer: 'Yes, our hospital offers a dedicated cardiac rehabilitation program including exercise guidance, diet counseling, and lifestyle support.',
      },
      {
        question: 'What diagnostic tests are available at a cardiology hospital?',
        answer: 'Cardiology hospitals offer tests such as ECG, echocardiogram, TMT stress tests, Holter monitoring, CT coronary angiography, and electrophysiology mapping.',
      },
      {
        question: 'Is preventive heart care available at a cardiology hospital?',
        answer: 'Yes, MEDICARE focuses on prevention through heart health screenings, risk assessments, lipid management, and dietary counseling.',
      },
      {
        question: 'Can children with heart problems be treated at your hospital?',
        answer: 'Yes, our specialized pediatric cardiology wing provides diagnosis and non-surgical device closure for congenital heart defects in children.',
      },
      {
        question: 'Do cardiology hospitals offer rehabilitation after heart treatment?',
        answer: 'Yes, cardiac rehab programs—including monitored exercise sessions, stress management, and dietary advice—are an integral part of holistic care.',
      },
    ],
    healthArticles: [
      {
        slug: 'warning-signs-heart-attack-women',
        title: 'Warning Signs of Heart Attack in Women You Should Never Ignore',
        category: 'CARDIOLOGY',
        readTime: '4 min read',
        date: 'Sept 04, 2026',
        imageUrl: '/images/articles/heart-attack-women-warning.jpg',
      },
      {
        slug: 'tavi-vs-surgical-valve-replacement',
        title: 'TAVI vs Surgical Valve Replacement: Which is Right for You?',
        category: 'INTERVENTIONAL CARDIOLOGY',
        readTime: '6 min read',
        date: 'Aug 28, 2026',
        imageUrl: '/images/articles/tavi-valve-replacement.jpg',
      },
      {
        slug: '10-habits-lower-blood-pressure-naturally',
        title: '10 Daily Habits to Lower High Blood Pressure Naturally',
        category: 'PREVENTIVE CARDIOLOGY',
        readTime: '5 min read',
        date: 'Aug 15, 2026',
        imageUrl: '/images/articles/blood-pressure-measurement.jpg',
      },
    ],
    associatedDoctorSpecialty: 'Cardiology',
  },

  // 2. NEUROLOGY
  {
    slug: 'neurology',
    name: 'Neurology & Neuro Sciences',
    iconName: 'Brain',
    shortDesc: '24/7 acute stroke response, 3D neuro-navigation brain tumor microsurgery & spinal reconstruction.',
    overview: 'Searching for the BEST NEUROLOGY HOSPITALS IN HITECH CITY, HYDERABAD near you? MEDICARE Neuro Institute offers comprehensive stroke care, brain tumor surgery, epilepsy management, and spinal reconstructions across Kondapur, Madhapur, and Gachibowli.',
    whyChooseDesc: 'When neurological conditions impact your life, you deserve expert care delivered with precision. Here is why patients trust MEDICARE Neuro Institute in Hyderabad:',
    whyChoosePoints: [
      {
        title: 'Expert Neurologists and Neurosurgeons',
        desc: 'Our institute houses renowned neurologists and microsurgical neurosurgeons with decades of expertise in complex brain and spine surgeries.',
      },
      {
        title: '24/7 Acute Stroke Rapid Response',
        desc: 'Equipped with a dedicated stroke emergency unit delivering clot-busting r-tPA thrombolysis within the 4.5-hour golden window.',
      },
      {
        title: '3D GPS Neuro-Navigation System',
        desc: 'Sub-millimeter brain tissue GPS mapping during microsurgery to excise brain tumors while preserving speech and motor functions.',
      },
      {
        title: 'Endoscopic Keyhole Spine Surgery',
        desc: 'Stitchless keyhole spinal disc surgery reducing post-operative pain and enabling discharge within 24 to 48 hours.',
      },
      {
        title: 'Advanced Neuro ICU & Monitoring',
        desc: 'Dedicated 20-bed Neuro Intensive Care Unit with continuous intracranial pressure monitoring and intraoperative neuromonitoring.',
      },
      {
        title: 'Comprehensive Epilepsy & Parkinson’s Care',
        desc: 'Specialized clinics for drug-resistant epilepsy, Deep Brain Stimulation (DBS) for Parkinson’s, and stroke rehabilitation.',
      },
      {
        title: 'Personalized Neuro Rehab Programs',
        desc: 'Integrated neuro-rehabilitation combining physical therapy, speech therapy, and occupational therapy for complete recovery.',
      },
    ],
    advancedTechnologies: [
      { name: '3D Intraoperative Neuro-Navigation', desc: 'Real-time GPS precision mapping of brain lesions during microsurgery.' },
      { name: 'Biplane DSA Digital Subtraction Angiography', desc: 'High-definition cerebral vascular imaging for stroke thrombectomy.' },
      { name: 'Intraoperative Neuromonitoring (IONM)', desc: 'Continuous monitoring of cranial nerves during tumor excision.' },
      { name: 'Deep Brain Stimulation (DBS) Console', desc: 'Targeted electrical stimulation for Parkinson’s and movement disorders.' },
      { name: 'Endoscopic Spine Surgery Suite', desc: 'Keyhole spinal disc herniation removal with zero muscle cutting.' },
      { name: 'Video EEG Telemetry Unit', desc: 'Continuous long-term monitoring to pinpoint seizure focus.' },
    ],
    diagnosticScreenings: [
      { name: '3T High-Definition Brain MRI & MRA', desc: 'Sub-millimeter imaging of cerebral cortex, white matter, and blood vessels.' },
      { name: 'Emergency 64-Slice Brain CT Scan', desc: 'Rapid imaging within 10 minutes to differentiate ischemic from hemorrhagic stroke.' },
      { name: 'Digital Electroencephalogram (EEG)', desc: 'Brain wave recording to diagnose epilepsy and seizure disorders.' },
      { name: 'Electromyography (EMG) & Nerve Conduction (NCV)', desc: 'Evaluates nerve damage, neuropathy, and muscle weakness.' },
      { name: 'Carotid Doppler Ultrasonography', desc: 'Measures blood flow through neck carotid arteries to assess stroke risk.' },
    ],
    medicalTreatments: [
      { name: '24/7 Acute Stroke Thrombolysis (r-tPA)', desc: 'Emergency intravenous clot-dissolving therapy administered during stroke golden hour.' },
      { name: 'Antiepileptic Drug Optimization', desc: 'Tailored anti-seizure medication regimens for pediatric and adult epilepsy.' },
      { name: 'Parkinson’s & DBS Management', desc: 'Medical therapy and programming for Deep Brain Stimulation implants.' },
      { name: 'Migraine & Headache Clinic Therapy', desc: 'Botox injections and calcitonin gene-related peptide (CGRP) inhibitors for chronic migraines.' },
      { name: 'Multiple Sclerosis Immunotherapy', desc: 'Disease-modifying monoclonal antibody infusions for MS flare-up control.' },
    ],
    specializedProcedures: [
      { name: 'Microsurgical Brain Tumor Resection', desc: '3D navigation-guided excision of meningiomas, gliomas, and skull base tumors.' },
      { name: 'Mechanical Thrombectomy for Stroke', desc: 'Catheter-based clot retrieval from blocked brain arteries.' },
      { name: 'Endoscopic Keyhole Spine Discectomy', desc: 'Keyhole removal of herniated lumbar discs with minimal tissue trauma.' },
      { name: 'Deep Brain Stimulation (DBS) Surgery', desc: 'Electrode implantation in basal ganglia for Parkinson’s tremor control.' },
      { name: 'Microvascular Decompression (MVD)', desc: 'Surgical relief for trigeminal neuralgia facial pain.' },
    ],
    conditions: [
      'Acute Ischemic & Hemorrhagic Stroke',
      'Brain Tumors & Skull Base Lesions',
      'Epilepsy & Seizure Disorders',
      'Parkinson Disease & Movement Disorders',
      'Sciatica & Herniated Disc Prolapse',
    ],
    symptoms: [
      'Sudden Facial Droop or Weakness in Arm/Leg (FAST)',
      'Severe Unexplained Sudden Thunderclap Headache',
      'Chronic Back Pain Radiating Down to Legs',
      'Memory Loss & Cognitive Confusion',
      'Frequent Seizures or Muscle Tremors',
    ],
    keyFacilities: [
      '3D Intraoperative Neuro-Navigation GPS System',
      '24/7 Acute Stroke Rapid Thrombolysis Suite',
      'Biplane DSA Digital Subtraction Angiography',
      'Intraoperative Neuromonitoring (IONM)',
      'Dedicated 20-Bed Neuro ICU',
    ],
    whyChooseUs: [
      '24/7 Acute Stroke Golden Hour Thrombolysis Response',
      '3D GPS Neuro-navigation protecting healthy brain function',
      'Comprehensive Deep Brain Stimulation (DBS) for Parkinson’s',
      'Pioneering endoscopic keyhole spine surgery',
    ],
    treatments: [
      {
        slug: 'stroke-thrombolysis',
        name: '24/7 Acute Stroke Thrombolysis & Thrombectomy',
        shortDesc: 'Emergency clot-busting IV therapy and mechanical thrombectomy for acute stroke.',
        overview: 'Re-perfusion therapy within the golden 4.5 hour window to dissolve cerebral blood clots.',
        duration: '1 Hour',
        recoveryTime: 'ICU Care for 24 Hours',
        procedureSteps: ['Emergency Brain CT Scan', 'r-tPA Clot buster injection', 'Endovascular clot retrieval'],
        benefits: ['Reverses stroke paralysis', 'Prevents long-term disability'],
      },
    ],
    faqs: [
      {
        question: 'What services does the neurology department at MEDICARE offer?',
        answer: 'Our neurology department provides stroke thrombolysis, brain tumor surgery, endoscopic spine surgery, epilepsy monitoring, Parkinson’s management, and neuro-rehabilitation.',
      },
      {
        question: 'What is the Golden Hour in stroke treatment?',
        answer: 'The first 4.5 hours after stroke onset is critical. Receiving clot-dissolving medication during this window dramatically increases the chances of complete recovery.',
      },
      {
        question: 'Are second opinions available for brain and spine surgeries?',
        answer: 'Yes, our neurosurgeons at MEDICARE Hospitals welcome patients seeking second opinions for brain tumors, spine surgery, and stroke management.',
      },
      {
        question: 'Does your hospital offer keyhole endoscopic spine surgery?',
        answer: 'Yes, we perform stitchless keyhole spine surgery for herniated discs, reducing recovery time and allowing discharge within 24 to 48 hours.',
      },
      {
        question: 'Do you accept insurance for neurosurgery treatments?',
        answer: 'Yes, we accept major health insurance plans and TPAs at MEDICARE Hospitals, assisting patients with seamless cashless hospitalization.',
      },
      {
        question: 'Are there facilities for neuro rehabilitation post-stroke?',
        answer: 'Yes, our hospital offers a dedicated neuro-rehabilitation program including speech therapy, physiotherapy, and occupational therapy.',
      },
      {
        question: 'What diagnostic tests are available for nerve and brain disorders?',
        answer: 'We offer 3T MRI, 64-Slice CT, Digital EEG, EMG/NCV nerve conduction studies, and Carotid Doppler ultrasound.',
      },
      {
        question: 'Is Deep Brain Stimulation (DBS) available for Parkinson’s?',
        answer: 'Yes, MEDICARE offers advanced Deep Brain Stimulation electrode surgery for patients with severe Parkinson’s tremors and movement disorders.',
      },
      {
        question: 'Can children with epilepsy be treated at your hospital?',
        answer: 'Yes, our pediatric neurology wing provides Video EEG telemetry and customized antiepileptic drug therapy for childhood seizures.',
      },
      {
        question: 'What causes sciatica and how is it treated?',
        answer: 'Sciatica is caused by a herniated disc compressing the spinal nerve. Treatment ranges from nerve blocks and physiotherapy to endoscopic keyhole surgery.',
      },
    ],
    healthArticles: [
      {
        title: 'Recognizing Stroke FAST: 4 Signs That Could Save a Life',
        category: 'Neurology',
        readTime: '5 Min Read',
        date: 'Sept 02, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=600&q=80',
      },
      {
        title: 'Endoscopic vs Open Spine Surgery: Recovery Time Explained',
        category: 'Neurosurgery',
        readTime: '6 Min Read',
        date: 'Aug 20, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=600&q=80',
      },
    ],
    associatedDoctorSpecialty: 'Neurology',
  },

  // 3. ORTHOPAEDICS
  {
    slug: 'orthopaedics',
    name: 'Orthopaedics & Joint Replacement',
    iconName: 'Bone',
    shortDesc: 'Mako 3D Robotic Knee & Hip Replacement, Arthroscopy & Complex Trauma Care.',
    overview: 'Searching for the BEST ORTHOPEDIC HOSPITALS IN HITECH CITY, HYDERABAD near you? MEDICARE Orthopedic Institute offers Mako 3D robotic knee replacements, keyhole ACL arthroscopy, and complex bone fracture care across Kondapur and Madhapur.',
    whyChooseDesc: 'When joint pain or bone fractures limit your mobility, you deserve world-class orthopedic care. Here is why patients trust MEDICARE Hospitals for orthopedics:',
    whyChoosePoints: [
      {
        title: 'Mako 3D Robotic Joint Replacement Leadership',
        desc: 'Haptic robotic arm guidance ensures sub-millimeter implant placement, enabling patients to walk painlessly within 24 hours of surgery.',
      },
      {
        title: 'Experienced Orthopedic & Trauma Surgeons',
        desc: 'Our team comprises renowned joint replacement experts, arthroscopy specialists, and pelvic trauma surgeons with 20+ years experience.',
      },
      {
        title: 'Zero-Infection Modular Operating Suites',
        desc: 'Operating rooms equipped with HEPA laminar air flow, ultra-sterile surgical suits, and zero-infection protocols.',
      },
      {
        title: 'Minimally Invasive Keyhole Arthroscopy',
        desc: 'Endoscopic knee and shoulder ligament repairs (ACL/PCL/Rotator Cuff) with minimal tissue incision.',
      },
      {
        title: '24/7 Complex Fracture & Trauma Emergency',
        desc: 'Round-the-clock emergency team for polytrauma, pelvic fractures, and severe dislocation management.',
      },
      {
        title: 'Advanced Hydrotherapy & Sports Rehab',
        desc: 'In-house physiotherapy lounge equipped with anti-gravity treadmills and hydrotherapy for rapid athletic rehabilitation.',
      },
      {
        title: 'Implants Built for 25+ Years Longevity',
        desc: 'High-grade ceramic and titanium implants engineered to deliver natural joint mobility lasting up to 30 years.',
      },
    ],
    advancedTechnologies: [
      { name: 'Mako 3D Robotic Arm Surgery System', desc: 'CT-guided robotic arm precision bone preparation for custom joint fit.' },
      { name: 'Computer-Assisted Navigation System (CAS)', desc: 'Real-time 3D optical tracking for precise joint alignment.' },
      { name: '4K Ultra-HD Arthroscopy Tower', desc: 'Crystal clear endoscopic visualization for keyhole ligament repair.' },
      { name: 'Zero-Infection HEPA Laminar Flow OTs', desc: 'Ultra-clean air flow system eliminating surgical site infection risks.' },
      { name: 'Digital DEXA Bone Mineral Density Scanner', desc: 'Precise osteoporotic bone weakness assessment.' },
      { name: 'Hydrotherapy & Rehabilitation Pool', desc: 'Low-impact water resistance therapy for joint recovery.' },
    ],
    diagnosticScreenings: [
      { name: 'Digital Musculoskeletal X-Rays', desc: 'High-contrast bone alignment and fracture imaging.' },
      { name: '3T Joint & Cartilage MRI', desc: 'Detailed soft tissue imaging of ACL, meniscus, and rotator cuff tears.' },
      { name: 'DEXA Scan for Osteoporosis', desc: 'Measures bone mineral density to evaluate fracture risk.' },
      { name: '3D CT Bone Reconstruction', desc: 'Pre-operative 3D modeling for complex joint replacements.' },
      { name: 'Diagnostic Joint Fluid Aspiration', desc: 'Analysis of synovial fluid to diagnose gout or joint sepsis.' },
    ],
    medicalTreatments: [
      { name: 'Non-Surgical Osteoarthritis Management', desc: 'Hyaluronic acid viscosegmentation and intra-articular PRP injections.' },
      { name: 'Osteoporosis Bone Strengthening', desc: 'Anabolic bone-building injectable therapies and calcium optimization.' },
      { name: 'Physiotherapy & Hydro Rehab', desc: 'Customized joint mobilization and muscle strengthening programs.' },
      { name: 'Rheumatoid Joint Preservation', desc: 'Biologic anti-inflammatory therapy to halt cartilage degradation.' },
      { name: 'Post-Trauma Pain Management', desc: 'Targeted nerve block injections for joint pain relief.' },
    ],
    specializedProcedures: [
      { name: 'Mako 3D Robotic Total Knee Replacement', desc: 'Pinpoint precision knee replacement with sub-millimeter balancing.' },
      { name: 'Keyhole Knee ACL & Meniscus Repair', desc: 'Arthroscopic ligament reconstruction with rapid athletic recovery.' },
      { name: 'Mako Robotic Total Hip Replacement', desc: 'Robotic-guided ceramic hip joint replacement for pain-free walking.' },
      { name: 'Complex Pelvic & Acetabular Trauma Surgery', desc: 'Surgical fixation of severe compound bone fractures.' },
      { name: 'Shoulder Arthroscopy & Rotator Cuff Repair', desc: 'Keyhole tendon repair for shoulder impingement and tears.' },
    ],
    conditions: [
      'Osteoarthritis of Knee & Hip Joints',
      'ACL & Meniscus Sports Ligament Injuries',
      'Lumbar Spondylosis & Herniated Disc Prolapse',
      'Complex Fractures & Non-union Bones',
      'Osteoporosis & Fragility Fractures',
    ],
    symptoms: [
      'Severe Chronic Knee Pain while Walking or Climbing Stairs',
      'Joint Stiffness & Reduced Range of Motion',
      'Knee Giving Way, Buckling or Locking',
      'Inability to Sit Cross-legged on Floor',
      'Visible Deformity or Swelling in Joints',
    ],
    keyFacilities: [
      'Mako 3D Robotic Joint Surgery System',
      'Zero-Infection HEPA-Filtered Laminar Flow OTs',
      'Keyhole Arthroscopy High-Definition Tower',
      'Computer-Assisted Navigation System (CAS)',
      'Hydrotherapy & Sports Rehabilitation Lounge',
    ],
    whyChooseUs: [
      'Mako 3D Robotic Precision allowing walk on Day 1',
      '25+ Year implant longevity with sub-millimeter alignment',
      'Minimally invasive keyhole arthroscopy for ACL tears',
      'Zero infection rate in laminar flow operating suites',
    ],
    treatments: [
      {
        slug: 'robotic-knee-replacement',
        name: 'Mako 3D Robotic Total Knee Replacement',
        shortDesc: 'Pinpoint precision knee replacement with 3D CT modeling and robotic guidance.',
        overview: 'Mako Robotic technology allows surgeons to preserve healthy bone and ligaments, achieving natural joint feel.',
        duration: '60 - 90 Minutes',
        recoveryTime: 'Walk on Day 1, Discharge in 3 Days',
        procedureSteps: [
          'Pre-operative 3D CT scan modeling',
          'Robotic arm boundary guidance during bone preparation',
          'Sub-millimeter implant alignment & balancing',
        ],
        benefits: [
          'Painless walking within 24 hours',
          'Maximum implant longevity (25+ years)',
          'Minimal tissue damage and quick recovery',
        ],
      },
    ],
    faqs: [
      {
        question: 'What services does the orthopedics department at MEDICARE offer?',
        answer: 'Our department provides Mako 3D robotic knee and hip replacements, keyhole arthroscopy, complex fracture trauma surgery, osteoporosis care, and sports medicine.',
      },
      {
        question: 'How long does a Mako robotic knee replacement last?',
        answer: 'Mako 3D robotic knee implants achieve sub-millimeter alignment, extending implant life up to 25 to 30 years.',
      },
      {
        question: 'When can I walk after robotic knee surgery?',
        answer: 'Patients are enabled to stand and walk with support on Day 1 (within 24 hours) after Mako robotic knee replacement.',
      },
      {
        question: 'Are keyhole surgeries available for sports injuries?',
        answer: 'Yes, we perform arthroscopic keyhole surgery for ACL, PCL, and meniscus tears with tiny incisions and fast athletic recovery.',
      },
      {
        question: 'Do you accept insurance for robotic joint replacement?',
        answer: 'Yes, MEDICARE Hospitals accepts all major health insurance plans and TPAs for robotic knee and hip replacements.',
      },
      {
        question: 'Are there facilities for physiotherapy post-surgery?',
        answer: 'Yes, we operate a state-of-the-art physiotherapy and hydrotherapy rehab lounge to ensure complete mobility restoration.',
      },
      {
        question: 'What diagnostic tests are needed before joint replacement?',
        answer: 'Pre-operative tests include Digital Weight-Bearing X-Rays, 3D CT modeling, Blood Profile, ECG, and Anesthesia fitness clearance.',
      },
      {
        question: 'Is Mako robotic surgery safer than traditional knee surgery?',
        answer: 'Yes, Mako robotic arms establish virtual safety boundaries that prevent damage to surrounding healthy ligaments, blood vessels, and soft tissue.',
      },
      {
        question: 'Can partial knee replacement be done robotically?',
        answer: 'Yes, Mako robotic systems excel at partial (unicondylar) knee replacements, preserving 75% of your natural knee joint.',
      },
      {
        question: 'What is the recovery time for ACL reconstruction?',
        answer: 'Patients walk with a brace within 48 hours, resume desk work in 2 weeks, and return to competitive sports in 6 months.',
      },
    ],
    healthArticles: [
      {
        title: 'Mako Robotic Knee Replacement: Why 10,000+ Patients Choose It',
        category: 'Orthopedics',
        readTime: '5 Min Read',
        date: 'Sept 01, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80',
      },
      {
        title: '5 Exercises to Protect Your Knees from Early Osteoarthritis',
        category: 'Joint Care',
        readTime: '4 Min Read',
        date: 'Aug 22, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80',
      },
    ],
    associatedDoctorSpecialty: 'Orthopedics',
  },

  // 4. GASTROENTEROLOGY
  {
    slug: 'gastroenterology',
    name: 'Gastroenterology & Hepatology',
    iconName: 'Stethoscope',
    shortDesc: 'Therapeutic ERCP, Endoscopic Ultrasound (EUS), Fatty Liver Clinic & Keyhole GI Surgery.',
    overview: 'Searching for the BEST GASTROENTEROLOGY HOSPITALS IN HITECH CITY, HYDERABAD near you? MEDICARE GI Institute offers cutting-edge diagnostic and therapeutic endoscopy, bile duct gallstone extraction, fatty liver reversing programs, and GI oncology care.',
    whyChooseDesc: 'Digestive disorders require precise endoscopic diagnostics and compassionate management. Here is why patients trust MEDICARE Gastroenterology Institute in Hyderabad:',
    whyChoosePoints: [
      {
        title: 'Pioneering Therapeutic Endoscopy & ERCP',
        desc: 'Incisionless bile duct gallstone removal and jaundice stenting performed using SpyGlass 3D direct cholangioscopy.',
      },
      {
        title: 'Endoscopic Ultrasound (EUS) Precision',
        desc: 'Advanced EUS guided fine needle biopsy allowing early detection of pancreatic, liver, and esophageal tumors.',
      },
      {
        title: 'Dedicated Fatty Liver & Cirrhosis Clinic',
        desc: 'Non-invasive FibroScan liver stiffness assessment and multi-disciplinary liver cirrhosis management.',
      },
      {
        title: 'Inflammatory Bowel Disease (IBD) Excellence',
        desc: 'Specialized biologic therapy and dietary optimization for Crohn’s disease and Ulcerative Colitis flare-ups.',
      },
      {
        title: '24/7 Acute GI Bleed Emergency Unit',
        desc: 'Round-the-clock emergency endoscopic band ligation and hemoclip placement for acute vomiting of blood or black stools.',
      },
      {
        title: 'Single-Port Keyhole Gallbladder Surgeries',
        desc: 'Minimal scar single-incision laparoscopic surgery for complex gallstones and GERD acid reflux repair.',
      },
      {
        title: 'Painless Colonoscopy Screening',
        desc: 'Routine screening colonoscopy with painless sedation for early polyp detection and bowel cancer prevention.',
      },
    ],
    advancedTechnologies: [
      { name: 'SpyGlass DS II Direct Cholangioscopy', desc: 'Direct 3D visualization inside bile ducts for laser stone fragmenting.' },
      { name: 'Endoscopic Ultrasound (EUS) Suite', desc: 'Sub-surface imaging and FNA biopsy of pancreatic cysts and tumors.' },
      { name: 'Transient Elastography (FibroScan)', desc: 'Non-invasive 5-minute liver fat and fibrosis scar quantification.' },
      { name: 'High-Definition Olympus EVIS X1 Endoscopy', desc: 'Narrow Band Imaging (NBI) detecting micro-lesions in stomach lining.' },
      { name: 'Capsule Endoscopy System', desc: 'Pill-sized wireless camera imaging the entire small intestine.' },
      { name: '24-Hour pH Impedance Manometry', desc: 'Gold standard testing for severe acid reflux and swallowing disorders.' },
    ],
    diagnosticScreenings: [
      { name: 'Upper GI Diagnostic Endoscopy', desc: 'Visual examination of esophagus, stomach, and duodenum for ulcers and gastritis.' },
      { name: 'Screening & Diagnostic Colonoscopy', desc: 'Complete large intestine inspection for polyps, IBD, and early cancer.' },
      { name: 'FibroScan Liver Stiffness Measurement', desc: 'Painless ultrasound evaluation of fatty liver degree and liver cirrhosis.' },
      { name: 'Endoscopic Ultrasound (EUS)', desc: 'High-frequency ultrasound imaging of pancreas and bile duct lesions.' },
      { name: 'Hydrogen Breath Test for SIBO', desc: 'Non-invasive gas measurement to diagnose Small Intestinal Bacterial Overgrowth.' },
    ],
    medicalTreatments: [
      { name: 'GERD & Reflux Medical Management', desc: 'Advanced proton pump inhibitor optimization and mucosal protective therapy.' },
      { name: 'Biologic Therapy for Crohn’s & Colitis', desc: 'Targeted monoclonal antibody infusions for severe gut inflammation.' },
      { name: 'Fatty Liver Reversal Program', desc: 'Integrated metabolic, dietary, and pharmacological liver detoxification.' },
      { name: 'Hepatitis B & C Antiviral Therapy', desc: 'Complete viral suppression and cure protocols for chronic hepatitis.' },
      { name: 'Pancreatitis Enzyme Replacement', desc: 'Nutritional support and pain management for chronic pancreatic insufficiency.' },
    ],
    specializedProcedures: [
      { name: 'Therapeutic ERCP & Bile Duct Stenting', desc: 'Incisionless removal of CBD stones and metal stent placement for jaundice.' },
      { name: 'Polypectomy & Endoscopic Mucosal Resection (EMR)', desc: 'Snare removal of precancerous intestinal polyps during colonoscopy.' },
      { name: 'Esophageal Variceal Band Ligation (EVL)', desc: 'Emergency endoscopic banding of bleeding vein ruptures in liver cirrhosis.' },
      { name: 'Laparoscopic Cholecystectomy', desc: 'Keyhole removal of inflamed gallbladder containing stones.' },
      { name: 'POEM (Peroral Endoscopic Myotomy)', desc: 'Incisionless endoscopic muscle cutting for Achalasia Cardia swallowing disorder.' },
    ],
    conditions: [
      'Gallstones & Common Bile Duct (CBD) Stones',
      'Fatty Liver Disease & Non-Alcoholic Steatohepatitis (NASH)',
      'Gastroesophageal Reflux Disease (GERD) & Acid Reflux',
      'Ulcerative Colitis & Crohn’s Disease (IBD)',
      'Acute & Chronic Pancreatitis',
    ],
    symptoms: [
      'Severe Right Upper Abdominal Pain Radiating to Back',
      'Chronic Heartburn, Acid Regurgitation & Chest Burning',
      'Persistent Bloating, Vomiting or Loss of Appetite',
      'Jaundice (Yellowing of Eyes & Skin) with Dark Urine',
      'Blood in Stool, Black Tarry Stools or Chronic Diarrhea',
    ],
    keyFacilities: [
      'Olympus EVIS X1 4K Endoscopy Suite',
      '24/7 Emergency GI Bleed Hemostasis Care',
      'SpyGlass Direct Cholangioscopy Unit',
      'FibroScan 502 Touch Liver Clinic',
      'Endoscopic Ultrasound (EUS) Operating Theater',
    ],
    whyChooseUs: [
      'Incisionless ERCP bile duct stone removal success rate > 98%',
      'Painless sedation endoscopic and colonoscopic procedures',
      'Non-invasive 5-minute FibroScan liver health testing',
      '24/7 dedicated acute GI emergency hemorrhage team',
    ],
    treatments: [
      {
        slug: 'ercp-gallstone-removal',
        name: 'Therapeutic ERCP Gallstone Extraction',
        shortDesc: 'Endoscopic removal of bile duct stones without open surgery.',
        overview: 'Endoscopic Retrograde Cholangiopancreatography (ERCP) uses a flexible camera to clear blocked bile ducts.',
        duration: '45 - 60 Minutes',
        recoveryTime: 'Day Care or 24-Hour Stay',
        procedureSteps: ['Endoscopic camera insertion', 'Bile duct cannulation', 'Balloon stone extraction'],
        benefits: ['Zero surgical abdominal cuts', 'Instant jaundice relief', 'Prevents severe pancreatitis'],
      },
    ],
    faqs: [
      {
        question: 'What services does the gastroenterology department offer?',
        answer: 'Our department provides endoscopy, colonoscopy, ERCP, FibroScan, endoscopic ultrasound, fatty liver management, and keyhole GI surgeries.',
      },
      {
        question: 'Is a colonoscopy procedure painful?',
        answer: 'No, colonoscopies at MEDICARE are performed under mild conscious sedation, ensuring complete comfort and zero pain throughout the procedure.',
      },
      {
        question: 'What is ERCP and how does it help gallstones?',
        answer: 'ERCP is a keyhole endoscopic technique that reaches the bile duct through the mouth to clear trapped stones without making any skin cuts.',
      },
      {
        question: 'How is Fatty Liver disease diagnosed accurately?',
        answer: 'We utilize FibroScan, a painless 5-minute ultrasound-based technology that quantifies exact liver fat percentage and scar tissue.',
      },
      {
        question: 'Do you accept insurance for endoscopic procedures?',
        answer: 'Yes, MEDICARE accepts all major insurance plans and TPAs for therapeutic endoscopy, colonoscopy, and GI surgeries.',
      },
      {
        question: 'What are the warning signs of stomach ulcers?',
        answer: 'Symptoms include burning stomach pain between meals, nausea, bloating, vomiting blood, or passing dark black stools.',
      },
      {
        question: 'Can GERD acid reflux be cured permanently?',
        answer: 'Yes, through lifestyle modification, optimized medication, or laparoscopic Nissen fundoplication for severe hiatal hernia.',
      },
      {
        question: 'What is the recovery time after laparoscopic gallbladder surgery?',
        answer: 'Patients walk within 6 hours of surgery, resume light home activities the next day, and return to work in 3 to 5 days.',
      },
      {
        question: 'What is EUS (Endoscopic Ultrasound)?',
        answer: 'EUS combines an endoscope with ultrasound probe to produce high-resolution images of internal organs like the pancreas and liver.',
      },
      {
        question: 'Are there specialized treatments for Crohn’s disease?',
        answer: 'Yes, our IBD clinic offers advanced biologic infusions, dietary counseling, and targeted anti-inflammatory medical protocols.',
      },
    ],
    healthArticles: [
      {
        title: 'Fatty Liver Disease: 5 Reversible Steps to Protect Your Liver',
        category: 'Hepatology',
        readTime: '4 Min Read',
        date: 'Sept 03, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Understanding Acid Reflux: When to See a Gastroenterologist',
        category: 'Gastroenterology',
        readTime: '5 Min Read',
        date: 'Aug 19, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=400&q=80',
      },
    ],
    associatedDoctorSpecialty: 'Gastroenterology',
  },

  // 5. ONCOLOGY
  {
    slug: 'oncology',
    name: 'Oncology & Cancer Care',
    iconName: 'Sparkles',
    shortDesc: 'Multi-Disciplinary Tumor Board, Varian TrueBeam Radiotherapy, Immunotherapy & Robotic Surgery.',
    overview: 'Searching for the BEST CANCER HOSPITALS IN HITECH CITY, HYDERABAD near you? MEDICARE Cancer Institute provides comprehensive oncology care spanning surgical oncology, medical chemotherapy/immunotherapy, precision radiation, and organ-preserving cancer resections.',
    whyChooseDesc: 'Beating cancer requires advanced medical technology, compassionate care, and personalized treatment plans. Here is why cancer patients choose MEDICARE Cancer Institute:',
    whyChoosePoints: [
      {
        title: '100% Multi-Disciplinary Tumor Board Reviews',
        desc: 'Every patient case is thoroughly reviewed by a panel of surgical, medical, and radiation oncologists to formulate the most effective treatment protocol.',
      },
      {
        title: 'Varian TrueBeam Precision Radiotherapy',
        desc: 'Sub-millimeter targeted radiation destroying cancer cells in minutes while completely sparing surrounding healthy tissues.',
      },
      {
        title: 'Organ-Preserving Robotic Cancer Surgeries',
        desc: 'Pioneering robotic and oncoplastic procedures that excise malignant tumors while retaining organ function and natural aesthetics.',
      },
      {
        title: 'Targeted Immunotherapy & Genomic Medicine',
        desc: 'Next-generation monoclonal antibody infusions and targeted therapies tailored to your tumor’s specific genetic profile.',
      },
      {
        title: 'Day-Care Chemotherapy Infusion Suite',
        desc: 'Ultra-comfortable day-care lounge with scalp cooling systems to minimize hair loss during chemotherapy sessions.',
      },
      {
        title: 'Full Spectrum Bone Marrow Transplant Unit',
        desc: 'HEPA-filtered positive-pressure cleanroom suites for autologous and allogeneic stem cell transplants for blood cancers.',
      },
      {
        title: 'Holistic Cancer Rehabilitation & Palliative Support',
        desc: 'Dedicated pain management experts, psycho-oncologists, and clinical dietitians supporting you throughout your recovery.',
      },
    ],
    advancedTechnologies: [
      { name: 'Varian TrueBeam Linear Accelerator', desc: 'Sub-millimeter VMAT and SBRT radiation targeting brain, lung, and prostate tumors.' },
      { name: 'PET-CT 64-Slice Molecular Scanner', desc: 'High-resolution whole-body metabolic imaging for early cancer staging and recurrence.' },
      { name: 'Scalp Cooling Hair-Preservation System', desc: 'Reduces chemotherapy-induced hair loss by cooling hair follicles during infusion.' },
      { name: 'HIPEC (Hyperthermic Intraperitoneal Chemotherapy)', desc: 'Heated chemotherapy bath inside abdominal cavity after surgical tumor debulking.' },
      { name: 'NABL Molecular Pathology & Next-Gen Sequencing', desc: 'Genomic biomarker testing (BRCA, EGFR, ALK, PD-L1) for targeted cancer drugs.' },
      { name: 'Robotic Surgical Oncology Suite', desc: 'Wristed robotic instrumentation for keyhole pelvic, thoracic, and oral cancer resections.' },
    ],
    diagnosticScreenings: [
      { name: 'Whole-Body PET-CT Scan', desc: 'Detects microscopic tumor cells and maps cancer spread across the body.' },
      { name: '3T Multiparametric Prostate & Breast MRI', desc: 'High-definition soft tissue imaging for early tumor localization.' },
      { name: 'Ultrasound-Guided Core Needle Biopsy', desc: 'Precision tissue sampling evaluated by specialized oncopathologists.' },
      { name: 'Mammography & Digital Breast Tomosynthesis', desc: '3D mammogram screening for early-stage breast lesion detection.' },
      { name: 'Liquid Biopsy & Circulating Tumor DNA Test', desc: 'Non-invasive blood test identifying cancer genetic mutations.' },
    ],
    medicalTreatments: [
      { name: 'Targeted Immunotherapy Infusions', desc: 'Checkpoint inhibitors (Pembrolizumab, Nivolumab) boosting body immune response.' },
      { name: 'Systemic & Adjuvant Chemotherapy', desc: 'Customized chemotherapy protocols for breast, lung, colon, and ovarian cancers.' },
      { name: 'Hormonal & Anti-Estrogen Therapy', desc: 'Targeted oral medications blocking hormone-driven breast and prostate cancers.' },
      { name: 'Targeted Biological Small Molecule Therapy', desc: 'Tyrosine kinase inhibitors blocking specific cancer growth signals.' },
      { name: 'Pain & Palliative Management Protocol', desc: 'Advanced analgesic pump and nerve block care for pain-free living.' },
    ],
    specializedProcedures: [
      { name: 'Oncoplastic Breast-Conserving Surgery', desc: 'Tumor excision while reconstructing natural breast shape and symmetry.' },
      { name: 'Robotic Radical Prostatectomy & Hysterectomy', desc: 'Minimal scar robotic removal of cancerous prostate or uterus.' },
      { name: 'Stereotactic Body Radiotherapy (SBRT)', desc: 'High-dose precision radiation completed in just 3 to 5 treatment sessions.' },
      { name: 'HIPEC Cytoreductive Surgery', desc: 'Surgical excision of peritoneal surface malignancies followed by heated chemo.' },
      { name: 'Bone Marrow / Stem Cell Transplantation', desc: 'High-dose therapy and stem cell rescue for leukemia and lymphoma.' },
    ],
    conditions: [
      'Breast Cancer & Gynecological Malignancies',
      'Lung, Thoracic & Head-and-Neck Cancers',
      'Colorectal, Stomach & Liver Cancers',
      'Prostate, Kidney & Bladder Cancers',
      'Leukemia, Lymphoma & Multiple Myeloma',
    ],
    symptoms: [
      'Unexplained Painless Lump in Breast, Neck, or Axilla',
      'Unintentional Rapid Weight Loss & Chronic Fatigue',
      'Changes in Bowel or Bladder Habits (Blood in Stool/Urine)',
      'Persistent Non-healing Mouth Ulcers or Hoarseness of Voice',
      'Unusual Bleeding or Discharge Between Menstrual Periods',
    ],
    keyFacilities: [
      'Varian TrueBeam Linear Accelerator Radiotherapy Vault',
      'PET-CT Whole Body Molecular Imaging Center',
      'Day-Care Chemotherapy Infusion Lounge',
      'HEPA Cleanroom Stem Cell Transplant Unit',
      'Dedicated Multi-Disciplinary Tumor Board Room',
    ],
    whyChooseUs: [
      'Multi-disciplinary tumor board customization for 100% patients',
      'Sub-millimeter Varian TrueBeam targeted radiation precision',
      'Organ-sparing robotic & oncoplastic surgical techniques',
      'Dedicated scalp cooling hair preservation chemotherapy support',
    ],
    treatments: [
      {
        slug: 'varian-truebeam-radiotherapy',
        name: 'Varian TrueBeam Precision Radiotherapy',
        shortDesc: 'Sub-millimeter targeted radiation destroying cancer tumors with high safety.',
        overview: 'Varian TrueBeam delivers high-dose radiation directly into tumors, conforming to shape in real time.',
        duration: '10 - 15 Minutes Per Session',
        recoveryTime: 'Outpatient Daily Visits',
        procedureSteps: ['3D CT Simulation mapping', 'Sub-millimeter beam targeting', 'Pain-free radiation delivery'],
        benefits: ['Zero surgical skin cuts', 'Spares healthy surrounding organs', 'Fast treatment time'],
      },
    ],
    faqs: [
      {
        question: 'What services does the oncology department at MEDICARE offer?',
        answer: 'We offer surgical oncology, chemotherapy, immunotherapy, Varian TrueBeam radiotherapy, PET-CT imaging, and stem cell transplantation.',
      },
      {
        question: 'What is a Multi-Disciplinary Tumor Board?',
        answer: 'A collaborative meeting where surgical, medical, and radiation oncologists review every patient’s diagnostic files to design a tailored cure plan.',
      },
      {
        question: 'Does chemotherapy always cause total hair loss?',
        answer: 'Not always. We offer advanced scalp cooling hair preservation technology during chemotherapy infusions to significantly reduce hair shedding.',
      },
      {
        question: 'Is radiation therapy painful?',
        answer: 'No, radiation therapy is completely painless, similar to getting a standard X-ray, and takes only a few minutes per session.',
      },
      {
        question: 'Do you accept cashless insurance for cancer treatment?',
        answer: 'Yes, MEDICARE accepts major health insurance and government health schemes (Arogyasri / PMJAY) for cancer surgeries, chemo, and radiation.',
      },
      {
        question: 'What is Immunotherapy and how does it work?',
        answer: 'Immunotherapy uses specialized medications to help your own immune system recognize and destroy cancer cells effectively.',
      },
      {
        question: 'Can breast cancer be treated without removing the entire breast?',
        answer: 'Yes, through Oncoplastic Breast-Conserving Surgery, we remove only the tumor while preserving the natural breast appearance.',
      },
      {
        question: 'What is PET-CT scan used for?',
        answer: 'A PET-CT scan maps whole-body metabolic activity, helping pinpoint exact tumor locations, stage cancer, and check treatment response.',
      },
      {
        question: 'How many sessions of radiation therapy are usually needed?',
        answer: 'Depending on the cancer type, radiation schedules range from 1 to 5 SBRT sessions or 3 to 6 weeks of daily TrueBeam therapy.',
      },
      {
        question: 'Are second opinions available for cancer diagnoses?',
        answer: 'Yes, our senior oncologists provide rapid second opinions on pathology slides, PET scans, and treatment plans within 24 hours.',
      },
    ],
    healthArticles: [
      {
        title: 'Breast Cancer Screening: Self-Exams & Mammograms Explained',
        category: 'Oncology',
        readTime: '5 Min Read',
        date: 'Sept 01, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'How Immunotherapy is Transforming Cancer Care in 2026',
        category: 'Medical Oncology',
        readTime: '6 Min Read',
        date: 'Aug 24, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80',
      },
    ],
    associatedDoctorSpecialty: 'Oncology',
  },

  // 6. PEDIATRICS
  {
    slug: 'pediatrics',
    name: 'Pediatrics & Neonatology',
    iconName: 'UserCheck',
    shortDesc: 'Level-3 NICU Giraffe Care, Pediatric Surgery, Vaccination & Child Growth Clinic.',
    overview: 'Searching for the BEST PEDIATRIC & CHILD CARE HOSPITALS IN HITECH CITY, HYDERABAD near you? MEDICARE Children’s Institute offers round-the-clock pediatric emergency, Level-3 NICU pre-term care, pediatric surgery, and child development clinics.',
    whyChooseDesc: 'Children require specialized healthcare delivered with patience, warmth, and clinical precision. Here is why parents trust MEDICARE Pediatrics:',
    whyChoosePoints: [
      {
        title: 'Level-3 Neonatal Intensive Care Unit (NICU)',
        desc: 'Advanced Giraffe incubators, neonatal ventilators, and nitric oxide therapy for pre-term infants (< 28 weeks gestation).',
      },
      {
        title: '24/7 Pediatric Emergency & ICU (PICU)',
        desc: 'Dedicated emergency bay staffed by pediatric intensivists for acute fever, seizures, respiratory distress, and accidental poisoning.',
      },
      {
        title: 'Child-Friendly Environment & Play Lounge',
        desc: 'Warm, colorful pediatric wards designed to alleviate fear and anxiety for hospitalized infants and children.',
      },
      {
        title: 'Minimally Invasive Pediatric Surgeries',
        desc: 'Specialized keyhole pediatric surgical techniques for congenital anomalies, hernia repair, and appendicitis with fast recovery.',
      },
      {
        title: 'Comprehensive Immunization & Growth Tracking',
        desc: 'Full WHO/IAP compliant vaccination schedules and milestone tracking by senior pediatricians.',
      },
      {
        title: 'Pediatric Neurology & Epilepsy Care',
        desc: 'Video EEG monitoring and developmental therapy for childhood seizures, autism, ADHD, and cerebral palsy.',
      },
      {
        title: 'Sub-Specialty Clinics under One Roof',
        desc: 'Access to pediatric cardiology, pediatric nephrology, pediatric endocrinology, and child psychology.',
      },
    ],
    advancedTechnologies: [
      { name: 'Giraffe Omnibed Carestation NICU Incubators', desc: 'Climate-controlled microenvironment preserving skin integrity in premature babies.' },
      { name: 'SLE6000 High-Frequency Oscillatory Ventilator', desc: 'Gentle lung-protective ventilation for extreme pre-term newborns.' },
      { name: 'Whole-Body Therapeutic Hypothermia System', desc: 'Cooling therapy for newborns with Birth Asphyxia to prevent brain injury.' },
      { name: 'Pediatric Video EEG & Polysomnography', desc: 'Continuous brain activity monitoring for infant seizures and sleep disorders.' },
      { name: 'Micro-Incision Laparoscopic Pediatric Instruments', desc: '3mm keyhole surgical tools customized for infants and young children.' },
      { name: 'Transcutaneous Bilirubinometer', desc: 'Painless needle-free jaundice screening for newborn babies.' },
    ],
    diagnosticScreenings: [
      { name: 'Needle-Free Newborn Jaundice Testing', desc: 'Instant optical skin measurement of bilirubin levels in newborns.' },
      { name: 'Pediatric Echocardiography', desc: 'Non-invasive 3D ultrasound scanning for congenital heart defects.' },
      { name: 'Developmental Screening & Milestones Assessment', desc: 'Standardized testing for motor, speech, and cognitive progress.' },
      { name: 'Pediatric Allergy & IgE Panel Test', desc: 'Blood testing identifying triggers for childhood asthma and eczema.' },
      { name: 'High-Resolution Pediatric Abdominal Ultrasound', desc: 'Safe zero-radiation imaging for abdominal pain and urinary tract infections.' },
    ],
    medicalTreatments: [
      { name: 'Neonatal Respiratory Distress Protocol', desc: 'Surfactant replacement therapy and bubble CPAP for premature lungs.' },
      { name: 'Childhood Asthma & Bronchitis Care', desc: 'Nebulization, inhaler technique optimization, and allergy prevention.' },
      { name: 'Pediatric Infectious Disease Management', desc: 'Targeted antibiotic therapy for severe dengue, pneumonia, and enteric fever.' },
      { name: 'Type-1 Juvenile Diabetes Clinic', desc: 'Insulin pump guidance, blood sugar tracking, and pediatric nutrition.' },
      { name: 'Growth Hormone Deficiency Therapy', desc: 'Hormonal optimization for short stature and endocrine disorders.' },
    ],
    specializedProcedures: [
      { name: 'Laparoscopic Pediatric Herniotomy', desc: 'Keyhole repair of congenital inguinal hernia in toddlers.' },
      { name: 'Pediatric Appendectomy', desc: 'Minimally invasive keyhole removal of acute inflamed appendix.' },
      { name: 'Non-Surgical Congenital Heart Hole Closure', desc: 'Catheter-based button closure of ASD / VSD in pediatric patients.' },
      { name: 'Circumcision (Laser / Plastibell)', desc: 'Painless sterile technique for phimosis in infants.' },
      { name: 'Pediatric Airway Foreign Body Removal', desc: 'Emergency rigid bronchoscopy to retrieve swallowed peanuts or small toys.' },
    ],
    conditions: [
      'Prematurity & Low Birth Weight (< 1.5 kg)',
      'Childhood Asthma, Croup & Bronchiolitis',
      'Congenital Heart Defects (ASD, VSD, PDA)',
      'Pediatric Urinary Tract Infections (UTI)',
      'Developmental Delay, ADHD & Autism Spectrum',
    ],
    symptoms: [
      'High Persistent Fever (> 101°F) with Lethargy',
      'Rapid Breathing, Chest Indrawing or Wheezing',
      'Yellowish Skin & Eyes in Newborns (Jaundice)',
      'Frequent Vomiting, Inability to Retain Fluids',
      'Sudden Unexplained Fits, Convulsions or Staring Spells',
    ],
    keyFacilities: [
      'Level-3 Neonatal ICU (NICU) with Giraffe Carestations',
      '24/7 Dedicated Pediatric ICU (PICU)',
      'Child-Friendly Immunization & Well-Baby Lounge',
      'Pediatric Emergency Resuscitation Bay',
      'Sub-Specialty Pediatric OPD Suites',
    ],
    whyChooseUs: [
      'Level-3 NICU survival rate > 98.6% for extreme pre-terms',
      '24/7 dedicated in-house consultant neonatologists',
      'Child-friendly pain-free vaccination and blood sampling',
      'Comprehensive pediatric keyhole surgical suite',
    ],
    treatments: [
      {
        slug: 'level3-nicu-care',
        name: 'Level-3 NICU Premature Newborn Care',
        shortDesc: 'Advanced climate-controlled life support for pre-term infants.',
        overview: 'Specialized intensive care combining Giraffe incubators and protective ventilation for vulnerable babies.',
        duration: 'Hospital Stay Depends on Birth Weight',
        recoveryTime: 'Monitored till 37 Weeks Gestation',
        procedureSteps: ['Giraffe Incubator admission', 'Bubble CPAP oxygen support', 'Total Parenteral Nutrition (TPN)'],
        benefits: ['High survival rate for pre-terms', 'Protects brain & lung development', '24/7 parent bonding access'],
      },
    ],
    faqs: [
      {
        question: 'What services does the pediatrics department offer?',
        answer: 'We provide Level-3 NICU, PICU, pediatric emergency, vaccination, pediatric surgery, and sub-specialty clinics.',
      },
      {
        question: 'What is a Level-3 NICU and why is it important?',
        answer: 'Level-3 NICU provides the highest level of care for micro-preterm babies, equipped with advanced incubators, ventilators, and 24/7 neonatologists.',
      },
      {
        question: 'Are emergency services available for sick children at night?',
        answer: 'Yes, our 24/7 Pediatric Emergency Department is staffed around the clock by senior pediatric doctors and intensivists.',
      },
      {
        question: 'How is newborn jaundice treated at MEDICARE?',
        answer: 'We offer painless skin bilirubin testing followed by high-intensity LED phototherapy or exchange transfusion if necessary.',
      },
      {
        question: 'Do you follow the official IAP vaccination schedule?',
        answer: 'Yes, we provide all painless vaccines as per the Indian Academy of Pediatrics (IAP) and WHO recommended guidelines.',
      },
      {
        question: 'What should I do if my child has a febrile seizure during high fever?',
        answer: 'Keep the child on their side, clear the surroundings, do not put anything in the mouth, and bring them immediately to our emergency bay.',
      },
      {
        question: 'Are laparoscopic keyhole surgeries safe for toddlers?',
        answer: 'Yes, pediatric keyhole surgery uses tiny 3mm instruments, causing minimal pain and allowing children to go home within 24 hours.',
      },
      {
        question: 'Can parents visit their baby inside the NICU?',
        answer: 'Yes, we encourage controlled parental visits and Kangaroo Mother Care (KMC) skin-to-skin bonding inside our NICU.',
      },
      {
        question: 'What diagnostic tests are safe for infants?',
        answer: 'Ultrasound, Echocardiography, EEG, and Digital X-rays with pediatric low-radiation shields are completely safe for infants.',
      },
      {
        question: 'When should a child see a pediatric neurologist?',
        answer: 'If a child experiences recurrent fits, delay in speaking/walking milestones, or severe behavioral regression.',
      },
    ],
    healthArticles: [
      {
        title: 'Newborn Care Guide: 10 Essential Tips for First-Time Parents',
        category: 'Pediatrics',
        readTime: '4 Min Read',
        date: 'Sept 02, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=600&q=80',
      },
      {
        title: 'Childhood Asthma: Recognizing Triggers & Effective Inhaler Therapy',
        category: 'Child Health',
        readTime: '5 Min Read',
        date: 'Aug 27, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1cdb?auto=format&fit=crop&w=600&q=80',
      },
    ],
    associatedDoctorSpecialty: 'Pediatrics',
  },

  // 7. GYNECOLOGY
  {
    slug: 'gynecology',
    name: 'Obstetrics & Gynecology',
    iconName: 'UserCheck',
    shortDesc: 'Painless Labor & Delivery, High-Risk Maternity, Laparoscopic Fibroid Surgery & 4D Sonography.',
    overview: 'Searching for the BEST GYNECOLOGY & MATERNITY HOSPITALS IN HITECH CITY, HYDERABAD near you? MEDICARE Women’s Institute offers luxury LDR labor suites, painless epidural delivery, high-risk pregnancy care, laparoscopic keyhole fibroid removals, and IVF guidance.',
    whyChooseDesc: 'Women’s health changes through every stage of life—from adolescence to motherhood and menopause. Here is why women trust MEDICARE Women’s Institute:',
    whyChoosePoints: [
      {
        title: 'Luxury LDR (Labor, Delivery, Recovery) Suites',
        desc: 'Single-room concept where mothers labor, deliver, and recover in the comfort of a private room surrounded by family.',
      },
      {
        title: 'Painless Epidural Delivery Expertise',
        desc: '24/7 obstetric anesthesia support enabling smooth, painless natural vaginal childbirth.',
      },
      {
        title: 'High-Risk Pregnancy & Fetal Medicine Center',
        desc: 'Specialized care for preeclampsia, gestational diabetes, twin pregnancies, and recurrent miscarriages.',
      },
      {
        title: '3D & 4D HD-Live Fetal Anomaly Scans',
        desc: 'Advanced fetal ultrasonography detecting structural anomalies early in pregnancy.',
      },
      {
        title: 'Stitchless Laparoscopic Gynae Surgeries',
        desc: 'Keyhole removal of uterine fibroids, ovarian cysts, and endometriosis with zero visible scars.',
      },
      {
        title: 'Comprehensive PCOS & Fertility Clinic',
        desc: 'Multi-disciplinary management of PCOS, hormonal imbalances, ovulation induction, and fertility enhancement.',
      },
      {
        title: 'Menopause & Uro-Gynecology Care',
        desc: 'Specialized clinic for pelvic floor prolapse, urinary incontinence, and menopausal hormone guidance.',
      },
    ],
    advancedTechnologies: [
      { name: '4D Voluson E10 HD-Live Fetal Sonography', desc: 'Crystal clear 3D/4D real-time facial and anatomical imaging of the baby.' },
      { name: 'Continuous Fetal Cardiotocography (CTG)', desc: 'Real-time wireless monitoring of fetal heart rate during active labor.' },
      { name: '3D HD Laparoscopy & Hysteroscopy Tower', desc: 'Precision keyhole surgical visualization for fibroids and uterine polyps.' },
      { name: 'Obstetric Epidural Anesthesia Pump', desc: 'Targeted pain-relief medication pump during childbirth.' },
      { name: 'Colposcopy & Cervical Cancer Screening', desc: 'High-magnification cervical visualization and HPV DNA testing.' },
      { name: 'Radiofrequency Pelvic Floor Tightening', desc: 'Non-surgical radiofrequency therapy for stress urinary incontinence.' },
    ],
    diagnosticScreenings: [
      { name: 'First Trimester NT Scan & Dual Marker', desc: 'Combined ultrasound and blood test evaluating Down syndrome risk.' },
      { name: 'Detailed 20-Week Anomaly Scan (Level-2)', desc: 'Comprehensive anatomical evaluation of fetal organs and heart.' },
      { name: 'Pap Smear & HPV DNA Cervical Screening', desc: 'Early screening for cervical cancer and dysplasia.' },
      { name: 'Transvaginal Sonography (TVS)', desc: 'High-resolution imaging of uterine lining, fibroids, and ovarian antral follicles.' },
      { name: 'Hysterosalpingography (HSG) Fallopian Test', desc: 'X-ray evaluation of fallopian tube patency for fertility.' },
    ],
    medicalTreatments: [
      { name: 'High-Risk Pregnancy Management Protocol', desc: 'Strict blood pressure, blood sugar, and Doppler monitoring for mother and baby.' },
      { name: 'PCOS Lifestyle & Ovulation Induction Therapy', desc: 'Medication protocols regulating menstrual cycles and restoring fertility.' },
      { name: 'Endometriosis Pain Suppression Therapy', desc: 'Hormonal suppression and GnRH analogue therapy for chronic pelvic pain.' },
      { name: 'Hormone Replacement Therapy (HRT)', desc: 'Customized hormonal support for severe menopausal hot flashes and osteoporosis.' },
      { name: 'Recurrent Pregnancy Loss Workup', desc: 'Thrombophilia, immunological, and genetic profiling for recurrent miscarriages.' },
    ],
    specializedProcedures: [
      { name: 'Laparoscopic Myomectomy (Fibroid Removal)', desc: 'Keyhole removal of large uterine fibroids while preserving the uterus for pregnancy.' },
      { name: 'Laparoscopic Total Hysterectomy (TLH)', desc: 'Stitchless removal of uterus for severe bleeding or prolapse.' },
      { name: 'Painless Epidural Vaginal Delivery', desc: 'Epidural catheter analgesia ensuring painless childbirth.' },
      { name: 'Operative Hysteroscopic Polyp Resection', desc: 'Incisionless removal of endometrial polyps through natural canal.' },
      { name: 'Sling Surgery for Urinary Incontinence (TOT)', desc: 'Minimal invasive mesh tape placement for urine leakage during coughing.' },
    ],
    conditions: [
      'High-Risk Pregnancy & Preeclampsia / Gestational Diabetes',
      'Uterine Fibroids & Ovarian Cysts',
      'Polycystic Ovary Syndrome (PCOS) & Infertility',
      'Endometriosis & Adenomyosis',
      'Pelvic Organ Prolapse & Urinary Incontinence',
    ],
    symptoms: [
      'Irregular, Heavy or Painful Menstrual Periods',
      'Severe Chronic Pelvic Pain Radiating to Back',
      'Inability to Conceive After 12 Months of Trying',
      'Unintentional Urine Leakage when Coughing or Laughing',
      'Sensation of Fullness or Bulge in Lower Abdomen',
    ],
    keyFacilities: [
      'Private LDR (Labor, Delivery, Recovery) Suites',
      '4D Voluson Ultrasound Fetal Scan Lounge',
      '24/7 Obstetric Emergency & OT Suite',
      'Painless Epidural Childbirth Care Team',
      'Dedicated Menopause & Well-Woman Clinic',
    ],
    whyChooseUs: [
      'Painless epidural labor available 24 hours a day',
      'High-risk pregnancy success rate > 99%',
      'Single-room LDR suite for complete maternal privacy',
      'Stitchless keyhole gynecological surgery leadership',
    ],
    treatments: [
      {
        slug: 'painless-labor-delivery',
        name: 'Painless Epidural Labor & Childbirth',
        shortDesc: 'Natural vaginal delivery enabled by 24/7 epidural pain relief.',
        overview: 'Epidural analgesia blocks labor pain signals while allowing full mother participation in pushing.',
        duration: 'Duration Varies by Labor Progress',
        recoveryTime: '24 - 48 Hours LDR Suite Stay',
        procedureSteps: ['Epidural catheter placement in lower back', 'Continuous pain relief infusion', 'Guided natural delivery'],
        benefits: ['Eliminates labor pain anxiety', 'Reduces maternal exhaustion', 'Safe for baby'],
      },
    ],
    faqs: [
      {
        question: 'What services does the gynecology department offer?',
        answer: 'We provide painless delivery, LDR suites, high-risk pregnancy care, laparoscopic gynae surgery, 4D scans, and fertility care.',
      },
      {
        question: 'What is an LDR suite in maternity care?',
        answer: 'An LDR suite allows you to stay in one single luxurious private room for labor, delivery, and post-natal recovery without being transferred.',
      },
      {
        question: 'Is epidural painless delivery safe for the baby?',
        answer: 'Yes, epidural analgesia is globally proven to be completely safe for both mother and baby, providing effective pain relief.',
      },
      {
        question: 'Can uterine fibroids be removed without removing the uterus?',
        answer: 'Yes, through Laparoscopic Myomectomy, we remove only the fibroid nodules while keeping the uterus intact for future pregnancies.',
      },
      {
        question: 'Do you accept cashless insurance for maternity and gynae surgeries?',
        answer: 'Yes, MEDICARE accepts all major insurance policies and corporate TPAs for delivery and gynecological surgeries.',
      },
      {
        question: 'How often should women get a Pap Smear test?',
        answer: 'Women aged 21 to 65 are recommended to get a Pap smear every 3 years for early cervical cancer screening.',
      },
      {
        question: 'What is the recovery time for keyhole hysterectomy?',
        answer: 'Patients walk the evening of surgery, go home in 24 to 48 hours, and return to light work within 10 days.',
      },
      {
        question: 'What is a 4D Anomaly Scan?',
        answer: 'A 4D ultrasound scan produces real-time moving 3D images of your baby, assessing heart, spine, and facial features in detail.',
      },
      {
        question: 'How is PCOS managed effectively?',
        answer: 'Through tailored low-glycemic diets, exercise plans, insulin-sensitizing medications, and hormonal regulation.',
      },
      {
        question: 'What treatments are available for urinary leakage when sneezing?',
        answer: 'Treatments range from pelvic floor Kegel exercises and radiofrequency therapy to a 15-minute keyhole TOT sling procedure.',
      },
    ],
    healthArticles: [
      {
        title: 'Painless Labor: Everything You Need to Know About Epidurals',
        category: 'Maternity',
        readTime: '5 Min Read',
        date: 'Sept 03, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80',
      },
      {
        title: 'Managing PCOS: 5 Proven Strategies for Hormonal Balance',
        category: 'Gynecology',
        readTime: '4 Min Read',
        date: 'Aug 21, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
      },
    ],
    associatedDoctorSpecialty: 'Gynecology',
  },

  // 8. NEPHROLOGY
  {
    slug: 'nephrology',
    name: 'Nephrology & Renal Care',
    iconName: 'Activity',
    shortDesc: 'High-Efficiency Hemodiafiltration (HDF), Kidney Transplant, AV Fistula & Diabetic Nephropathy.',
    overview: 'Searching for the BEST NEPHROLOGY & DIALYSIS HOSPITALS IN HITECH CITY, HYDERABAD near you? MEDICARE Renal Institute provides advanced hemodiafiltration dialysis, kidney transplantation, diabetic kidney disease reversal, and 24/7 renal emergency care.',
    whyChooseDesc: 'Kidney care requires meticulous fluid balance, toxin clearance, and compassionate clinical management. Here is why patients choose MEDICARE Nephrology:',
    whyChoosePoints: [
      {
        title: 'High-Efficiency Online Hemodiafiltration (HDF)',
        desc: 'Advanced dialysis technology removing middle-molecule uremic toxins for superior cardiovascular health and zero post-dialysis fatigue.',
      },
      {
        title: 'Renal Transplantation Center of Excellence',
        desc: 'High success rate living-donor and ABO-incompatible kidney transplants performed in HEPA-filtered cleanroom ICUs.',
      },
      {
        title: '24/7 Ultra-Pure Water Treatment Plant',
        desc: 'Double-pass Reverse Osmosis (RO) water purification plant exceeding European Pharmacopoeia standards for zero endotoxin dialysis.',
      },
      {
        title: 'Diabetic Nephropathy Early Reversal Clinic',
        desc: 'Targeted SGLT2 inhibitor and RAAS blockade regimens to halt protein leakage and prevent dialysis dependency.',
      },
      {
        title: 'AV Fistula Creation & Interventional Salvage',
        desc: 'In-house vascular surgeons creating high-flow AV fistulas and performing balloon angioplasty for blocked vascular access.',
      },
      {
        title: 'Dedicated 24/7 CRRT for Acute Kidney Injury',
        desc: 'Continuous Renal Replacement Therapy for critically ill patients in ICU experiencing acute renal failure.',
      },
      {
        title: 'Strict Infection-Free Dialysis Environment',
        desc: 'Separate dedicated hemodialysis machines for Hepatitis B & C patients to eliminate cross-contamination.',
      },
    ],
    advancedTechnologies: [
      { name: 'Fresenius 5008S Online HDF Machines', desc: 'Real-time blood temperature and kt/V clearance monitoring during dialysis.' },
      { name: 'Double-Pass RO Ultra-Pure Water Plant', desc: 'Eliminates bacteria, minerals, and endotoxins from dialysate fluid.' },
      { name: 'Continuous Renal Replacement Therapy (CRRT)', desc: '24-hour slow continuous dialysis for unstable ICU patients.' },
      { name: 'Ultrasound-Guided Automated Renal Biopsy', desc: 'Spring-loaded biopsy gun for precise kidney tissue diagnostic sampling.' },
      { name: 'AV Fistula Doppler & Angioplasty Suite', desc: 'High-resolution vascular ultrasound mapping and balloon dilatation.' },
      { name: 'Peritoneal Dialysis Automated Cycler', desc: 'Overnight home peritoneal dialysis management system.' },
    ],
    diagnosticScreenings: [
      { name: 'Kidney Function Test (KFT / RFT)', desc: 'Blood urea, serum creatinine, uric acid, and electrolyte panel.' },
      { name: 'Urine Albumin-to-Creatinine Ratio (UACR)', desc: 'Sensitive test detecting micro-protein leakage in early kidney disease.' },
      { name: '24-Hour Urinary Protein Estimation', desc: 'Quantifies exact protein loss for Nephrotic Syndrome diagnosis.' },
      { name: 'Renal Artery Color Doppler Ultrasonography', desc: 'Evaluates kidney size, cortical thickness, and renal artery stenosis.' },
      { name: 'Ultrasound-Guided Kidney Biopsy', desc: 'Diagnostic microscopic evaluation for glomerulonephritis and lupus nephritis.' },
    ],
    medicalTreatments: [
      { name: 'Online Hemodiafiltration (HDF) Sessions', desc: 'Convective toxin clearance delivering maximum physical vitality.' },
      { name: 'Diabetic Kidney Disease Protection', desc: 'Optimization of SGLT2 inhibitors and ARB medications to preserve kidney function.' },
      { name: 'Nephrotic Syndrome Immunosuppression', desc: 'Steroid and steroid-sparing immunosuppressive protocols for protein leakage.' },
      { name: 'Renal Anemia Erythropoietin Therapy', desc: 'Recombinant EPO injections and IV iron sucrose to correct low hemoglobin.' },
      { name: 'Chronic Kidney Disease Mineral Bone Therapy', desc: 'Phosphate binders and vitamin D analogues preventing bone weakness.' },
    ],
    specializedProcedures: [
      { name: 'Radiocephalic AV Fistula Creation', desc: 'Surgical connection of arm artery and vein for long-term dialysis access.' },
      { name: 'Permcath / Tunneled Catheter Insertion', desc: 'Fluoroscopy-guided long-term chest vein catheter placement.' },
      { name: 'Living Donor Kidney Transplantation', desc: 'Laparoscopic donor nephrectomy followed by recipient kidney implant.' },
      { name: 'AV Fistula Balloon Angioplasty', desc: 'Incisionless balloon dilation of narrowed or failing dialysis fistulas.' },
      { name: 'Continuous Ambulatory Peritoneal Dialysis (CAPD)', desc: 'Abdominal catheter placement for home-based peritoneal dialysis.' },
    ],
    conditions: [
      'Chronic Kidney Disease (CKD Stage 1 to 5)',
      'Diabetic Nephropathy & Hypertensive Nephrosclerosis',
      'Acute Kidney Injury (AKI) & Acute Renal Failure',
      'Nephrotic Syndrome & Glomerulonephritis',
      'Polycystic Kidney Disease (PKD) & Kidney Failure',
    ],
    symptoms: [
      'Swelling around Eyes in Morning & Leg / Ankle Edema',
      'Foamy, Frothy Urine or Blood in Urine',
      'Uncontrolled High Blood Pressure despite Medications',
      'Nausea, Loss of Appetite & Metallic Taste in Mouth',
      'Decreased Urine Output or Frequent Nighttime Urination',
    ],
    keyFacilities: [
      'Fresenius Online HDF Hemodialysis Suite',
      'Double-Pass RO Ultra-Pure Water Plant',
      '24/7 CRRT Continuous ICU Dialysis Unit',
      'HEPA-Filtered Post-Transplant ICU Cleanrooms',
      'In-House AV Fistula Surgical Operating Suite',
    ],
    whyChooseUs: [
      'Ultra-pure RO water dialysis eliminating post-dialysis fatigue',
      '100% infection-free separate dialysis zones for Hep B/C',
      'High clinical success rate in living donor kidney transplants',
      '24/7 dedicated consultant nephrologists available in hospital',
    ],
    treatments: [
      {
        slug: 'online-hdf-dialysis',
        name: 'High-Efficiency Online Hemodiafiltration (HDF)',
        shortDesc: 'Superior convective dialysis clearing middle-molecule toxins.',
        overview: 'HDF mimics natural kidney filtration by removing both small and large uremic toxins effectively.',
        duration: '4 Hours Per Session',
        recoveryTime: 'Zero Post-Dialysis Fatigue',
        procedureSteps: ['Blood line connection via AV Fistula', 'Convective filtration HDF clearance', 'Ultra-pure dialysate rinse'],
        benefits: ['Better blood pressure stability', 'Reduces cardiovascular risk', 'Prevents post-dialysis headache'],
      },
    ],
    faqs: [
      {
        question: 'What services does the nephrology department offer?',
        answer: 'We provide online HDF dialysis, kidney transplant, AV fistula surgery, diabetic nephropathy care, and 24/7 CRRT for kidney failure.',
      },
      {
        question: 'How does Online HDF differ from standard hemodialysis?',
        answer: 'Online HDF uses substitution fluid convection to remove larger toxins, resulting in better energy levels, appetite, and heart health.',
      },
      {
        question: 'Can Chronic Kidney Disease (CKD) be reversed?',
        answer: 'Early stages (Stage 1-3) can be halted or significantly slowed down using SGLT2 inhibitors and RAAS blockades. Advanced Stage 5 requires dialysis or transplant.',
      },
      {
        question: 'What is an AV Fistula and why is it needed?',
        answer: 'An AV Fistula joins an arm artery to a vein, creating a sturdy high-flow blood vessel necessary for painless hemodialysis needle access.',
      },
      {
        question: 'Do you accept insurance for kidney dialysis and transplants?',
        answer: 'Yes, MEDICARE accepts all major health insurance policies, TPAs, and government health funds for dialysis and kidney transplants.',
      },
      {
        question: 'What is the recovery time for a living kidney donor?',
        answer: 'Living donors undergo keyhole laparoscopic donor nephrectomy, allowing hospital discharge in 3 days and full recovery in 2 weeks.',
      },
      {
        question: 'Why is foamy urine a warning sign of kidney disease?',
        answer: 'Foamy or frothy urine indicates protein (albumin) leaking through damaged kidney filters, which requires immediate nephrology checkup.',
      },
      {
        question: 'How often do end-stage renal failure patients need dialysis?',
        answer: 'Typically, maintenance hemodialysis is required 3 times a week, with each session lasting 4 hours.',
      },
      {
        question: 'Is home dialysis option available?',
        answer: 'Yes, Automated Peritoneal Dialysis (APD) allows patients to perform dialysis at home overnight while sleeping.',
      },
      {
        question: 'What dietary changes are necessary for kidney patients?',
        answer: 'Restricting sodium (salt), controlling potassium, limiting phosphorus, and managing daily fluid intake based on urine output.',
      },
    ],
    healthArticles: [
      {
        title: '10 Early Warning Signs Your Kidneys May Be Struggling',
        category: 'Nephrology',
        readTime: '5 Min Read',
        date: 'Sept 04, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'HDF vs Standard Dialysis: Why Water Purity Matters',
        category: 'Dialysis',
        readTime: '4 Min Read',
        date: 'Aug 26, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=400&q=80',
      },
    ],
    associatedDoctorSpecialty: 'Nephrology',
  },

  // 9. PULMONOLOGY
  {
    slug: 'pulmonology',
    name: 'Pulmonology & Respiratory Medicine',
    iconName: 'Activity',
    shortDesc: 'EBUS Bronchoscopy, Sleep Apnea PSG Study, Severe Asthma Therapy & COPD Care.',
    overview: 'Searching for the BEST PULMONOLOGY HOSPITALS IN HITECH CITY, HYDERABAD near you? MEDICARE Chest Institute offers advanced interventional pulmonology, EBUS diagnostic bronchoscopy, overnight sleep apnea titration, and 24/7 respiratory ICU support.',
    whyChooseDesc: 'Breathing freely is fundamental to life. Here is why patients trust MEDICARE Pulmonology Institute for lung and chest disorders:',
    whyChoosePoints: [
      {
        title: 'Endobronchial Ultrasound (EBUS) Leadership',
        desc: 'Incisionless EBUS-guided transbronchial needle aspiration for accurate staging of lung cancer and tuberculosis without open chest surgery.',
      },
      {
        title: 'Advanced Sleep Apnea & PSG Lab',
        desc: 'Overnight Polysomnography (PSG) sleep studies diagnosing snoring, obstructive sleep apnea, and fitting custom CPAP machines.',
      },
      {
        title: 'Comprehensive Severe Asthma & Allergy Clinic',
        desc: 'Biologic antibody infusions (Omalizumab, Mepolizumab) and bronchial thermoplasty for drug-resistant asthma.',
      },
      {
        title: '24/7 Respiratory ICU & High-Flow Oxygen',
        desc: 'Dedicated Respiratory Intensive Care Unit equipped with High-Flow Nasal Cannula (HFNC) and non-invasive BiPAP ventilation.',
      },
      {
        title: 'COPD & Lung Rehabilitation Program',
        desc: 'Supervised breathing exercises, inspiratory muscle training, and pulmonary rehab restoring exercise tolerance.',
      },
      {
        title: 'Interventional Pleural Procedures',
        desc: 'Thoracoscopy and indwelling pleural catheter placement for recurrent fluid accumulation around the lungs.',
      },
      {
        title: 'Post-COVID & Interstitial Lung Disease (ILD) Care',
        desc: 'Antifibrotic drug therapy and high-resolution CT mapping for pulmonary fibrosis and sarcoidosis.',
      },
    ],
    advancedTechnologies: [
      { name: 'Olympus EBUS Endobronchial Ultrasound System', desc: 'Ultrasound-guided needle biopsy of mediastinal lymph nodes through airways.' },
      { name: 'High-Definition Video Bronchoscopy Suite', desc: 'Crystal-clear airway visualization, foreign body retrieval, and bronchial washing.' },
      { name: '32-Channel Polysomnography (Sleep Study) System', desc: 'Comprehensive monitoring of brain waves, oxygen drops, and snoring during sleep.' },
      { name: 'Digital Pulmonary Function Test (PFT) Spirometry', desc: 'Measures forced expiratory volume (FEV1) and lung diffusion capacity (DLCO).' },
      { name: 'Rigid Thoracoscopy Suite', desc: 'Keyhole inspection of pleural space for persistent chest fluid and lung biopsy.' },
      { name: 'Airway Cryotherapy & Laser Ablation', desc: 'Freezing and laser clearing of endobronchial tumors blocking main airways.' },
    ],
    diagnosticScreenings: [
      { name: 'Full Spirometry Pulmonary Function Test (PFT)', desc: 'Evaluates airway obstruction, lung capacity, and bronchodilator reversibility.' },
      { name: 'High-Resolution Chest CT Scan (HRCT)', desc: 'Sub-millimeter imaging pinpointing interstitial lung disease and bronchiectasis.' },
      { name: 'Diagnostic Video Bronchoscopy', desc: 'Direct inspection of vocal cords, trachea, and bronchi with BAL lavage fluid sampling.' },
      { name: 'Overnight Sleep Study (Polysomnography)', desc: 'Monitors sleep apnea hypopnea index (AHI) and nocturnal oxygen desaturation.' },
      { name: '6-Minute Walk Test (6MWT)', desc: 'Objective functional capacity measurement for pulmonary hypertension and ILD.' },
    ],
    medicalTreatments: [
      { name: 'Biologic Therapy for Severe Eosinophilic Asthma', desc: 'Targeted monoclonal antibody injections eliminating frequent asthma attacks.' },
      { name: 'COPD Triple-Inhaler Optimization', desc: 'Long-acting muscarinic and beta-agonist inhalers tailored to lung spirometry.' },
      { name: 'Antifibrotic Therapy for Pulmonary Fibrosis', desc: 'Pirfenidone and Nintedanib regimens slowing idiopathic pulmonary fibrosis.' },
      { name: 'CPAP / BiPAP Sleep Apnea Titration', desc: 'Customized mask fitting and pressure titration for obstructive sleep apnea.' },
      { name: 'Pulmonary Rehabilitation Program', desc: 'Inspiratory muscle trainer exercises, airway clearance techniques, and endurance training.' },
    ],
    specializedProcedures: [
      { name: 'EBUS-TBNA Lymph Node Biopsy', desc: 'Incisionless needle biopsy of chest lymph nodes for lung cancer staging.' },
      { name: 'Medical Thoracoscopy & Pleurodesis', desc: 'Keyhole pleurodesis sealing recurring fluid accumulation around lungs.' },
      { name: 'Airway Stenting & Tumor Debulking', desc: 'Restores airway diameter using silicone stents or laser tumor clearance.' },
      { name: 'Foreign Body Rigid Bronchoscopy', desc: 'Emergency retrieval of aspirated food, seeds, or teeth from airways.' },
      { name: 'Indwelling Pleural Catheter Insertion', desc: 'Allows home drainage of malignant pleural effusion fluid.' },
    ],
    conditions: [
      'Bronchial Asthma & Severe Eosinophilic Asthma',
      'Chronic Obstructive Pulmonary Disease (COPD) & Emphysema',
      'Obstructive Sleep Apnea (OSA) & Heavy Snoring',
      'Interstitial Lung Disease (ILD) & Pulmonary Fibrosis',
      'Pleural Effusion, Pneumonia & Pulmonary Embolism',
    ],
    symptoms: [
      'Persistent Chronic Cough Lasting More Than 3 Weeks',
      'Wheezing, Chest Tightness & Difficulty Breathing',
      'Loud Snoring, Gasping for Air during Sleep & Excessive Daytime Sleepiness',
      'Coughing Up Blood or Rust-Colored Sputum (Hemoptysis)',
      'Sharp Chest Pain during Deep Breathing or Inhalation',
    ],
    keyFacilities: [
      'Olympus EBUS Diagnostic Bronchoscopy Suite',
      '32-Channel Polysomnography Sleep Study Lab',
      'Digital PFT Spirometry & DLCO Testing Lounge',
      '24/7 Dedicated Respiratory ICU (RICU)',
      'Pulmonary Rehabilitation & Breathing Exercise Center',
    ],
    whyChooseUs: [
      'EBUS bronchoscopy allowing incisionless chest lymph node biopsy',
      'Dedicated sleep apnea lab with custom CPAP titration',
      'Advanced biologic infusions for severe drug-resistant asthma',
      '24/7 respiratory ICU with High-Flow Nasal Cannula (HFNC)',
    ],
    treatments: [
      {
        slug: 'ebus-bronchoscopy-biopsy',
        name: 'EBUS-TBNA Diagnostic Bronchoscopy',
        shortDesc: 'Incisionless ultrasound-guided needle biopsy of chest lymph nodes.',
        overview: 'Endobronchial Ultrasound provides internal imaging of chest lymph nodes, guiding needle biopsy without surgery.',
        duration: '30 - 45 Minutes',
        recoveryTime: 'Day Care Visit (2-3 Hours)',
        procedureSteps: ['Mild sedation', 'EBUS scope insertion into trachea', 'Ultrasound-guided needle sampling'],
        benefits: ['Zero chest incisions', 'Rapid 24-hour diagnosis', 'High diagnostic accuracy > 95%'],
      },
    ],
    faqs: [
      {
        question: 'What services does the pulmonology department offer?',
        answer: 'We provide EBUS bronchoscopy, sleep apnea studies, severe asthma biologics, PFT spirometry, and respiratory ICU care.',
      },
      {
        question: 'What is EBUS bronchoscopy and how does it avoid surgery?',
        answer: 'EBUS combines a bronchoscope camera with ultrasound, allowing doctors to view and sample chest lymph nodes through the windpipe without any skin cuts.',
      },
      {
        question: 'What are the main warning signs of Obstructive Sleep Apnea?',
        answer: 'Loud chronic snoring, waking up gasping for air, morning headaches, and severe unrefreshing daytime sleepiness.',
      },
      {
        question: 'How is severe asthma treated when inhalers are not enough?',
        answer: 'We administer targeted biologic injections (Omalizumab / Mepolizumab) that block specific inflammatory proteins causing asthma attacks.',
      },
      {
        question: 'Do you accept cashless insurance for chest and pulmonology care?',
        answer: 'Yes, MEDICARE accepts all major health insurance plans and TPAs for bronchoscopy, sleep studies, and respiratory hospitalizations.',
      },
      {
        question: 'What is a PFT (Pulmonary Function Test)?',
        answer: 'PFT spirometry is a simple breathing test where you blow into a tube to measure your exact lung capacity and airflow speed.',
      },
      {
        question: 'What causes fluid accumulation around the lungs (Pleural Effusion)?',
        answer: 'Common causes include chest infections, tuberculosis, heart failure, and lung or pleural malignancies.',
      },
      {
        question: 'Can COPD damage to lungs be reversed?',
        answer: 'While damaged lung sacs cannot be rebuilt, triple inhaler therapy, smoking cessation, and pulmonary rehab dramatically improve breathing.',
      },
      {
        question: 'Is CPAP machine necessary for sleep apnea?',
        answer: 'CPAP provides continuous positive airway pressure during sleep, preventing throat collapse and eliminating nocturnal heart risks.',
      },
      {
        question: 'What causes coughing up blood (Hemoptysis)?',
        answer: 'Hemoptysis requires urgent evaluation for bronchiectasis, lung infection, tuberculosis, or endobronchial lesions.',
      },
    ],
    healthArticles: [
      {
        title: 'Snoring vs Sleep Apnea: When Is It Dangerous to Your Heart?',
        category: 'Sleep Medicine',
        readTime: '5 Min Read',
        date: 'Sept 02, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80',
      },
      {
        title: 'Managing Severe Asthma: How Biologics Change Lives',
        category: 'Pulmonology',
        readTime: '4 Min Read',
        date: 'Aug 23, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
      },
    ],
    associatedDoctorSpecialty: 'Pulmonology',
  },

  // 10. UROLOGY
  {
    slug: 'urology',
    name: 'Urology & Laser Stone Care',
    iconName: 'Stethoscope',
    shortDesc: 'RIRS Laser Kidney Stone Dusting, HolLEP Prostate Surgery & Laparoscopic Uro-Oncology.',
    overview: 'Searching for the BEST UROLOGY HOSPITALS IN HITECH CITY, HYDERABAD near you? MEDICARE Urology Institute provides incisionless RIRS laser kidney stone dusting, HolLEP laser prostate surgery, laparoscopic donor nephrectomy, and male fertility care.',
    whyChooseDesc: 'Urinary and reproductive conditions require surgical precision, minimal downtime, and utmost discretion. Here is why patients choose MEDICARE Urology:',
    whyChoosePoints: [
      {
        title: 'Incisionless RIRS Laser Kidney Stone Dusting',
        desc: 'Retrograde Intrarenal Surgery (RIRS) uses flexible digital ureteroscopes and Holmium/Thulium fiber lasers to pulverize kidney stones into dust.',
      },
      {
        title: 'HolLEP / ThuLEP Laser Prostate Surgery',
        desc: 'Holmium Laser Enucleation of the Prostate for enlarged prostate (BPH), offering bloodless tissue removal and same-day catheter removal.',
      },
      {
        title: 'Laparoscopic & Robotic Uro-Oncology',
        desc: 'Keyhole surgical removal of kidney tumors (Partial Nephrectomy) and prostate cancer while preserving erectile and urinary continent function.',
      },
      {
        title: '3D Video Urodynamics Laboratory',
        desc: 'Comprehensive neurogenic bladder and urinary incontinence testing for precise surgical decision-making.',
      },
      {
        title: '24/7 Emergency Renal Colic & Urinary Care',
        desc: 'Round-the-clock emergency team for acute kidney stone pain, urinary retention, and testicular torsion.',
      },
      {
        title: 'Male Infertility & Micro-Surgeries',
        desc: 'Microscopic varicocelectomy, TESE sperm retrieval, and reconstructive urology for male fertility restoration.',
      },
      {
        title: 'Pediatric Urology & Hypospadias Care',
        desc: 'Specialized reconstructive surgical team for congenital urinary anomalies in children.',
      },
    ],
    advancedTechnologies: [
      { name: 'Thulium Fiber & Holmium 100W Lasers', desc: 'Ultra-high power laser systems for instant stone dusting and bloodless prostate enucleation.' },
      { name: 'Digital Flexible Ureteroscope (Single-Use)', desc: 'Sub-millimeter tip steering reaching all kidney calyces without cuts.' },
      { name: 'Solaris 3D Video Urodynamic System', desc: 'Real-time bladder pressure and flow mapping during voiding.' },
      { name: 'Mini-PCNL Ultrafine Nephroscope', desc: 'Pencil-thin back entry system to clear large staghorn kidney stones.' },
      { name: '4K Laparoscopic Uro-Surgical Suite', desc: 'Ultra-high definition magnification for partial kidney tumor resections.' },
      { name: 'Surgical Operating Microscope for Varicocele', desc: '20x magnification preserving delicate testicular arteries during varicocele repair.' },
    ],
    diagnosticScreenings: [
      { name: 'Low-Dose Non-Contrast CT KUB Scan', desc: 'Gold standard 3D CT imaging locating exact size, hardness, and location of kidney stones.' },
      { name: 'Multiparametric Prostate MRI (mpMRI)', desc: 'PIRADS scoring evaluating prostate nodules before biopsy.' },
      { name: 'Digital Uroflowmetry Test', desc: 'Measures urine flow rate (Qmax) and voiding curve for prostate obstruction.' },
      { name: 'Serum PSA (Prostate Specific Antigen)', desc: 'Blood biomarker screening for prostate enlargement and prostate cancer.' },
      { name: 'Diagnostic Cystoscopy', desc: 'Incisionless camera inspection of urethra and bladder lining.' },
    ],
    medicalTreatments: [
      { name: 'Medical Expulsive Therapy (MET) for Stones', desc: 'Targeted alpha-blockers facilitating natural passage of small ureteric stones.' },
      { name: 'BPH Dual Drug Therapy', desc: 'Combines alpha-blockers and 5-ARI medications to shrink enlarged prostate.' },
      { name: 'Overactive Bladder (OAB) Anticholinergics', desc: 'Bladder muscle relaxing medications eliminating urgent urination.' },
      { name: 'Urinary Tract Infection (UTI) Targeted Protocols', desc: 'Culture-guided antibiotic therapy preventing recurrent kidney infections.' },
      { name: 'Erectile Dysfunction & Andrology Therapy', desc: 'Shockwave therapy, oral PDE5 inhibitors, and penile rehab protocols.' },
    ],
    specializedProcedures: [
      { name: 'RIRS Laser Kidney Stone Dusting', desc: 'Flexible scope laser procedure clearing kidney stones into dust with zero cuts.' },
      { name: 'HolLEP Laser Prostate Enucleation', desc: 'Laser removal of obstructive prostate tissue with minimal bleeding.' },
      { name: 'Mini-PCNL Staghorn Stone Clearance', desc: 'Keyhole back entry removing massive staghorn kidney stones.' },
      { name: 'Laparoscopic Partial Nephrectomy', desc: 'Keyhole removal of kidney tumor while preserving healthy kidney organ.' },
      { name: 'Microscopic Varicocelectomy', desc: 'Magnified keyhole tie-off of swollen testicular veins for male fertility.' },
    ],
    conditions: [
      'Kidney Stones, Ureteric Stones & Bladder Calculi',
      'Benign Prostatic Hyperplasia (BPH / Enlarged Prostate)',
      'Prostate, Kidney & Bladder Cancers',
      'Urinary Incontinence & Overactive Bladder (OAB)',
      'Male Infertility, Varicocele & Erectile Dysfunction',
    ],
    symptoms: [
      'Sudden Severe Flank Pain Radiating to Groin (Renal Colic)',
      'Blood in Urine (Hematuria) or Cloudy Foul-Smelling Urine',
      'Weak Urine Stream, Straining to Urinate or Frequent Night Urination',
      'Inability to Pass Urine (Acute Urinary Retention)',
      'Pain or Burning Sensation During Urination (Dysuria)',
    ],
    keyFacilities: [
      'Holmium 100W & Thulium Fiber Laser Operating Theater',
      'Flexible Digital RIRS & Mini-PCNL Stone Suites',
      '3D Video Urodynamics & Uroflowmetry Lounge',
      '24/7 Renal Colic Emergency Care Unit',
      'Male Fertility & Micro-Surgeries Operating Suite',
    ],
    whyChooseUs: [
      'Incisionless RIRS laser stone dusting with zero abdominal cuts',
      'HolLEP laser prostate surgery enabling same-day catheter removal',
      'Low-dose non-contrast CT KUB scan accurate diagnosis',
      '24/7 emergency care for acute kidney stone pain and urinary retention',
    ],
    treatments: [
      {
        slug: 'rirs-laser-stone-dusting',
        name: 'RIRS Laser Kidney Stone Dusting',
        shortDesc: 'Incisionless laser dusting of kidney stones using flexible digital scopes.',
        overview: 'RIRS enters through natural urinary passages, using Holmium laser fiber to pulverize stones without skin cuts.',
        duration: '45 - 75 Minutes',
        recoveryTime: 'Day Care or 24-Hour Stay',
        procedureSteps: ['Flexible digital scope insertion', 'Laser fiber stone pulverization', 'Stent placement'],
        benefits: ['Zero skin incisions', 'Painless post-op recovery', 'High stone clearance rate > 97%'],
      },
    ],
    faqs: [
      {
        question: 'What services does the urology department offer?',
        answer: 'We offer RIRS laser stone dusting, HolLEP prostate surgery, Mini-PCNL, uro-oncology, and male infertility treatment.',
      },
      {
        question: 'What is RIRS laser stone surgery and how does it work?',
        answer: 'RIRS passes a flexible camera scope through natural urinary pathways up to the kidney, using a laser fiber to turn stones into fine dust without cuts.',
      },
      {
        question: 'Why is HolLEP better than traditional prostate surgery (TURP)?',
        answer: 'HolLEP uses laser energy to remove prostate tissue cleanly with minimal blood loss, making it safe for heart patients on blood thinners.',
      },
      {
        question: 'Can kidney stones be dissolved without surgery?',
        answer: 'Small stones (< 5mm) often pass naturally with high fluid intake and medication. Larger or hard stones require laser RIRS or PCNL.',
      },
      {
        question: 'Do you accept insurance for laser kidney stone procedures?',
        answer: 'Yes, MEDICARE accepts all major health insurance plans and corporate TPAs for RIRS, PCNL, and laser prostate surgeries.',
      },
      {
        question: 'What causes blood in urine (Hematuria)?',
        answer: 'Blood in urine requires evaluation for kidney stones, urinary tract infection, prostate enlargement, or urinary bladder tumors.',
      },
      {
        question: 'What is Mini-PCNL used for?',
        answer: 'Mini-PCNL uses a tiny 5mm keyhole entry in the back to clear large or hard staghorn kidney stones (> 2cm) in a single session.',
      },
      {
        question: 'How long does a DJ Stent stay inside after stone surgery?',
        answer: 'A temporary DJ stent stays for 1 to 2 weeks to ensure smooth urine flow and is retrieved easily in a 2-minute OPD procedure.',
      },
      {
        question: 'What is a Uroflowmetry test?',
        answer: 'A simple non-invasive test where you urinate into a specialized funneled container to measure exact urine speed and flow pattern.',
      },
      {
        question: 'Can varicocele cause male infertility?',
        answer: 'Yes, enlarged testicular veins raise local temperature, harming sperm quality. Microscopic varicocelectomy restores fertility.',
      },
    ],
    healthArticles: [
      {
        title: 'RIRS vs PCNL: Which Laser Stone Surgery Is Best for You?',
        category: 'Laser Urology',
        readTime: '5 Min Read',
        date: 'Sept 04, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Enlarged Prostate (BPH): Modern Laser HolLEP Treatments',
        category: 'Prostate Care',
        readTime: '4 Min Read',
        date: 'Aug 25, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80',
      },
    ],
    associatedDoctorSpecialty: 'Urology',
  },

  // 11. DERMATOLOGY
  {
    slug: 'dermatology',
    name: 'Dermatology & Cosmetic Care',
    iconName: 'Sparkles',
    shortDesc: 'Laser Skin Resurfacing, PRF Hair Restoration, Biological Psoriasis Therapy & Eczema Care.',
    overview: 'Searching for the BEST DERMATOLOGY HOSPITALS IN HITECH CITY, HYDERABAD near you? MEDICARE Skin Institute provides advanced clinical dermatology, biological psoriasis infusions, laser scar remodeling, PRF hair restoration, and anti-aging treatments.',
    whyChooseDesc: 'Healthy skin and vibrant hair boost confidence and reflect inner wellness. Here is why patients trust MEDICARE Dermatology:',
    whyChoosePoints: [
      {
        title: 'US-FDA Approved Aesthetic Lasers',
        desc: 'Gold-standard Fractional CO2 laser, Nd:YAG laser, and Q-switched lasers for acne scars, pigmentation, and tattoo removal.',
      },
      {
        title: 'Advanced PRF / PRP Hair Restoration',
        desc: 'Platelet-Rich Fibrin growth factor therapy stimulating dormant hair follicles for natural hair density regrowth.',
      },
      {
        title: 'Biological Therapy for Severe Psoriasis',
        desc: 'Targeted biologic antibody infusions (Secukinumab, Ixekizumab) delivering 90-100% skin clearance in chronic psoriasis.',
      },
      {
        title: 'Mohs Micrographic Surgery & Skin Cancer Care',
        desc: 'Precision skin tumor removal ensuring complete margin clearance while preserving healthy surrounding skin.',
      },
      {
        title: 'Customized Anti-Aging & Rejuvenation',
        desc: 'Botulinum toxin, hyaluronic acid dermal fillers, and thread lifts administered by board-certified dermatologists.',
      },
      {
        title: 'Pediatric Dermatology & Allergy Testing',
        desc: 'Gentle dermatological care for childhood eczema, birthmarks, molluscum, and patch testing for contact allergies.',
      },
      {
        title: 'Medical Vitiligo & Pigmentation Center',
        desc: 'Excimer laser phototherapy, melanocyte transfer surgery, and chemical peels for stubborn vitiligo and melasma.',
      },
    ],
    advancedTechnologies: [
      { name: 'Fractional CO2 Laser Resurfacing System', desc: 'Micro-fractional laser beams stimulating collagen remodeling for deep acne scars.' },
      { name: 'Q-Switched Nd:YAG Laser', desc: 'Targeted pigment destruction for melasma, freckles, age spots, and tattoos.' },
      { name: 'Narrowband UVB Phototherapy Unit', desc: 'Controlled UV light chamber for generalized psoriasis and vitiligo repigmentation.' },
      { name: 'Derma-Scanner Digital Trichoscopy', desc: 'High-magnification hair scalp density and follicle health analyzer.' },
      { name: 'Hydra-Dermabrasion Medical Facial Console', desc: 'Deep pore cleansing, vortex exfoliation, and antioxidant serum infusion.' },
      { name: 'Microneedling RF (Radiofrequency) System', desc: 'Combines micro-needling with RF heat energy for skin tightening and stretch marks.' },
    ],
    diagnosticScreenings: [
      { name: 'Digital Dermatoscopy Examination', desc: 'High-magnification inspection of moles and skin lesions for early melanoma detection.' },
      { name: 'Comprehensive Skin Patch Test', desc: 'Identifies specific contact chemical allergens causing chronic eczema and rashes.' },
      { name: 'Digital Trichoscopy Scalp Analysis', desc: 'Quantifies hair hair shaft thickness, follicular density, and miniaturization.' },
      { name: 'Diagnostic Skin Punch Biopsy', desc: 'Histopathological evaluation for rare autoimmune skin disorders and vasculitis.' },
      { name: 'Fungal Culture & KOH Examination', desc: 'Microscopic identification of stubborn skin, nail, and scalp fungal infections.' },
    ],
    medicalTreatments: [
      { name: 'Biologic Infusions for Chronic Psoriasis', desc: 'Targeted IL-17 and IL-23 inhibitor infusions restoring clear healthy skin.' },
      { name: 'Customized Acne Vulgaris Protocol', desc: 'Combined oral isotretinoin, topical retinoids, and blue-light therapy.' },
      { name: 'Platelet-Rich Fibrin (PRF) Hair Therapy', desc: 'Concentrated autologous growth factors injected into scalp for hair regrowth.' },
      { name: 'Melasma & Pigmentation Medical Peels', desc: 'Dermatological glycolic, salicylic, and TCA peels fading dark spots.' },
      { name: 'Chronic Urticaria Immunotherapy', desc: 'Omalizumab biologics suppressing severe hives and unexplained itching.' },
    ],
    specializedProcedures: [
      { name: 'Fractional CO2 Laser Acne Scar Remodeling', desc: 'Smoothing deep pitted acne scars with minimal thermal recovery time.' },
      { name: 'Autologous Melanocyte Transfer for Vitiligo', desc: 'Cellular grafting of healthy skin pigment cells onto stable white patches.' },
      { name: 'Botox & Dermal Filler Wrinkle Softening', desc: 'Micro-injections relaxing facial frown lines and restoring cheek volume.' },
      { name: 'Micro-Needling RF Skin Tightening', desc: 'Non-surgical collagen induction tightening sagging jawline and neck skin.' },
      { name: 'Electrocautery & Radiofrequency Mole Removal', desc: 'Instant precision removal of skin tags, moles, and warts.' },
    ],
    conditions: [
      'Psoriasis, Eczema & Atopic Dermatitis',
      'Acne Vulgaris & Pitted Acne Scars',
      'Androgenetic Alopecia & Pattern Hair Loss',
      'Melasma, Hyperpigmentation & Vitiligo',
      'Fungal Nail Infections & Chronic Urticaria (Hives)',
    ],
    symptoms: [
      'Red Scaly Patches on Skin with Silvery Flakes (Psoriasis)',
      'Excessive Hair Shedding, Receding Hairline or Thinning Crown',
      'Persistent Inflammatory Pimples, Blackheads & Cystic Acne',
      'Dark Symmetrical Patches on Cheeks & Forehead (Melasma)',
      'Severe Unexplained Itching, Hives, or Skin Redness',
    ],
    keyFacilities: [
      'US-FDA Laser Dermatology Operating Suite',
      'Digital Trichoscopy Hair Analysis Lounge',
      'Narrowband UVB Phototherapy Chamber',
      'Aesthetic Injectables & Rejuvenation Suite',
      'Cleanroom PRF / PRP Hair Preparation Lab',
    ],
    whyChooseUs: [
      'US-FDA approved fractional laser technology for scar removal',
      'Biological antibody infusions delivering 90-100% psoriasis clearance',
      'Autologous PRF hair restoration with zero chemical additives',
      'Board-certified dermatologist consultation and custom skincare',
    ],
    treatments: [
      {
        slug: 'fractional-laser-scar-removal',
        name: 'Fractional CO2 Laser Acne Scar Resurfacing',
        shortDesc: 'Micro-laser resurfacing smoothing deep pitted acne scars.',
        overview: 'Fractional CO2 lasers create micro-thermal channels in skin, boosting collagen production for smooth texture.',
        duration: '30 - 45 Minutes',
        recoveryTime: '3 - 5 Days Redness',
        procedureSteps: ['Topical numbing cream application', 'Fractional laser resurfacing', 'Post-laser healing serum'],
        benefits: ['Smooths pitted acne scars', 'Improves skin texture & pores', 'Long-lasting collagen stimulation'],
      },
    ],
    faqs: [
      {
        question: 'What services does the dermatology department offer?',
        answer: 'We provide fractional laser scar treatment, PRF hair therapy, psoriasis biologics, acne care, and cosmetic injectables.',
      },
      {
        question: 'How does PRF hair therapy differ from standard PRP?',
        answer: 'PRF (Platelet-Rich Fibrin) contains higher fibrin matrices and white blood cells, releasing growth factors slowly over 10 days for superior hair density.',
      },
      {
        question: 'Is Fractional CO2 Laser safe for Indian skin types?',
        answer: 'Yes, when performed by experienced dermatologists using tailored energy parameters, Fractional CO2 laser is completely safe and effective.',
      },
      {
        question: 'Can Psoriasis be cleared completely with Biologics?',
        answer: 'Yes, modern biological therapies (IL-17 inhibitors) achieve complete or near-complete (PASI 90-100) skin clearance in majority of severe psoriasis patients.',
      },
      {
        question: 'Do you accept insurance for dermatology treatments?',
        answer: 'Health insurance covers clinical dermatological hospitalizations (severe psoriasis, skin biopsies, Mohs surgery, vasculitis). Cosmetic procedures are self-pay.',
      },
      {
        question: 'How many sessions of laser acne scar treatment are needed?',
        answer: 'Typically, 3 to 5 sessions spaced 4 weeks apart deliver significant scar depth reduction and smooth skin texture.',
      },
      {
        question: 'What causes Melasma and how is it treated?',
        answer: 'Melasma is triggered by hormonal changes and UV exposure. Treatment includes strict broad-spectrum sunscreen, medical peels, and Q-switched lasers.',
      },
      {
        question: 'Is Botox permanent?',
        answer: 'Botox results last between 4 to 6 months, after which facial muscle motion gradually returns and touch-up sessions can be maintained.',
      },
      {
        question: 'What is melanocyte transfer surgery for vitiligo?',
        answer: 'In stable vitiligo, healthy pigment-producing cells are harvested from donor skin and transplanted onto white patches to restore natural skin color.',
      },
      {
        question: 'How is severe acne prevented from scarring?',
        answer: 'Early consultation with a dermatologist for oral isotretinoin or targeted chemical peels prevents deep cystic acne from destroying skin collagen.',
      },
    ],
    healthArticles: [
      {
        slug: 'laser-hair-removal-hitech-city',
        title: 'Laser Hair Removal Treatment in Hitech City',
        category: 'DERMATOLOGY',
        readTime: '4 Min Read',
        date: 'Sept 04, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
      },
      {
        slug: 'dermatosurgery-hitech-city-advanced-skin-care',
        title: 'Dermatosurgery in Hitech City | Advanced Skin Care',
        category: 'DERMATOLOGY',
        readTime: '5 Min Read',
        date: 'Sept 02, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80',
      },
      {
        slug: 'psoriasis-care-hitech-city-symptoms',
        title: 'Psoriasis Care in Hitech City | Symptoms and Skin Health',
        category: 'DERMATOLOGY',
        readTime: '5 Min Read',
        date: 'Aug 29, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
      },
      {
        slug: 'chemical-peel-treatment-hitech-city',
        title: 'Chemical Peel Treatment in Hitech City | Skin Rejuvenation',
        category: 'DERMATOLOGY',
        readTime: '4 Min Read',
        date: 'Aug 25, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1512290900673-70024fe74923?auto=format&fit=crop&w=600&q=80',
      },
      {
        slug: 'botox-treatment-wrinkles-hitech-city',
        title: 'Botox Treatment for Wrinkles in Hitech City | What to Expect',
        category: 'DERMATOLOGY',
        readTime: '5 Min Read',
        date: 'Aug 20, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80',
      },
    ],
    associatedDoctorSpecialty: 'Dermatology',
  },

  // 12. ENT
  {
    slug: 'ent',
    name: 'ENT & Head-Neck Surgery',
    iconName: 'Stethoscope',
    shortDesc: 'Endoscopic Sinus Surgery (FESS), Microscopic Tympanoplasty & Coblation Tonsillectomy.',
    overview: 'Searching for the BEST ENT HOSPITALS IN HITECH CITY, HYDERABAD near you? MEDICARE ENT Institute provides endoscopic sinus surgery (FESS), microscopic tympanoplasty hearing restoration, coblation tonsillectomy, and skull base surgery.',
    whyChooseDesc: 'Ear, nose, and throat disorders affect your senses, breathing, voice, and balance. Here is why patients choose MEDICARE ENT Institute:',
    whyChoosePoints: [
      {
        title: 'Functional Endoscopic Sinus Surgery (FESS)',
        desc: 'Incisionless endoscopic clearing of chronic sinus blockages, nasal polyps, and deviated nasal septum (DNS) with zero facial cuts.',
      },
      {
        title: 'Microscopic Tympanoplasty & Hearing Restoration',
        desc: 'Micro-surgical repair of perforated eardrums and ossicular chain reconstruction restoring crystal clear hearing.',
      },
      {
        title: 'Bloodless Coblation Tonsillectomy',
        desc: 'Low-temperature plasma coblation technology for painless, bloodless tonsil and adenoid removal with fast recovery.',
      },
      {
        title: 'Advanced Cochlear Implant Program',
        desc: 'Multi-disciplinary team delivering bionic cochlear implantation and auditory verbal therapy for severe hearing loss in children.',
      },
      {
        title: 'Voice & Laryngeal Microsurgery',
        desc: 'Phonosurgery and laser excision of vocal cord polyps, nodules, and papillomas restoring natural vocal pitch.',
      },
      {
        title: 'Vertigo & Balance Clinic',
        desc: 'Video Nystagmography (VNG) testing pinpointing BPPV and labyrinthitis causes, followed by instant repositioning maneuvers.',
      },
      {
        title: 'Endoscopic Skull Base Surgery',
        desc: 'Collaborative neuro-ENT keyhole excision of pituitary tumors and CSF rhinorrhea leaks through the nose.',
      },
    ],
    advancedTechnologies: [
      { name: '4K Ultra-HD Karl Storz ENT Endoscopy Tower', desc: 'Ultra-high definition visual clarity for delicate sinus and laryngeal procedures.' },
      { name: 'Low-Temperature Plasma Coblation System', desc: 'Dissolves tonsil tissue at 60°C instead of burning, minimizing post-op pain.' },
      { name: 'Zeiss Sensera ENT Operating Microscope', desc: 'High-magnification surgical visualization for eardrum and stapes micro-surgeries.' },
      { name: 'Video Nystagmography (VNG) Balance Analyzer', desc: 'Infrared eye tracking evaluating inner ear vestibular balance organs.' },
      { name: 'Nasal Powered Microdebrider & Balloon Sino-plasty', desc: 'Shaves nasal polyps precisely while preserving healthy sinus mucosa.' },
      { name: 'Auditory Steady State Response (ASSR) & BERA', desc: 'Objective brainstem hearing threshold testing for newborn infants.' },
    ],
    diagnosticScreenings: [
      { name: 'Diagnostic Nasal Endoscopy (DNE)', desc: 'Incisionless camera evaluation of nasal septum, turbinates, and sinus openings.' },
      { name: 'Pure Tone Audiometry (PTA) & Tympanometry', desc: 'Gold standard hearing threshold and middle ear pressure test.' },
      { name: 'Video Nystagmography (VNG) Vertigo Test', desc: 'Diagnoses inner ear calcium crystal displacement (BPPV).' },
      { name: 'Flexible Video Laryngoscopy (Stroboscopy)', desc: 'Slow-motion video analysis of vocal cord vibration for hoarseness.' },
      { name: 'High-Resolution CT Scan of Temporal Bone / Paranasal Sinuses', desc: '3D bone imaging mapping ear ossicles and sinus anatomy.' },
    ],
    medicalTreatments: [
      { name: 'Chronic Sinusitis Nasal Spray Protocols', desc: 'Combination steroid sprays, saline irrigation, and anti-histamine therapy.' },
      { name: 'BPPV Epley Vertigo Repositioning Maneuver', desc: 'Painless physical head positioning maneuvers clearing inner ear crystals.' },
      { name: 'Allergic Rhinitis Immunotherapy', desc: 'Sublingual allergen drops desensitizing nasal mucosa to dust and pollen.' },
      { name: 'Sudden Sensorineural Hearing Loss Steroid Rescue', desc: 'Emergency intratympanic steroid injections saving inner ear hair cells.' },
      { name: 'Reflux Laryngitis Voice Care', desc: 'Proton pump inhibitors and vocal hygiene counseling for throat clearing.' },
    ],
    specializedProcedures: [
      { name: 'Functional Endoscopic Sinus Surgery (FESS)', desc: 'Keyhole removal of nasal polyps and unblocking infected sinuses.' },
      { name: 'Microscopic Tympanoplasty', desc: 'Micro-surgical closure of perforated eardrum using autologous tissue graft.' },
      { name: 'Coblation Tonsillectomy & Adenoidectomy', desc: 'Painless plasma removal of enlarged tonsils causing sleep apnea.' },
      { name: 'Micro-Laryngeal Phonosurgery', desc: 'Precision microscopic removal of vocal cord nodules and polyps.' },
      { name: 'Septoplasty & Turbinate Reduction', desc: 'Straightening deviated nasal septum to restore effortless nasal breathing.' },
    ],
    conditions: [
      'Chronic Sinusitis & Nasal Polyps',
      'Perforated Eardrum & Chronic Otitis Media (Eardrum Hole)',
      'Enlarged Tonsils & Adenoids causing Snoring',
      'Vertigo, Dizziness & Meniere’s Disease',
      'Vocal Cord Polyps & Persistent Voice Hoarseness',
    ],
    symptoms: [
      'Nasal Congestion, Blocked Nose & Loss of Smell',
      'Persistent Ear Pain, Foul Fluid Discharge or Decreased Hearing',
      'Loud Snoring & Mouth Breathing in Children',
      'Sudden Room-Spinning Dizziness & Loss of Balance',
      'Voice Hoarseness or Change in Voice Lasting > 2 Weeks',
    ],
    keyFacilities: [
      'Karl Storz 4K HD ENT Endoscopy Suite',
      'Zeiss Micro-Ear Surgical Operating Theater',
      'Plasma Coblation Tonsillectomy Unit',
      'Soundproof Audiometry & BERA Testing Room',
      'VNG Vertigo & Balance Rehabilitation Lounge',
    ],
    whyChooseUs: [
      'Incisionless FESS sinus surgery preserving natural nasal mucosa',
      'Painless bloodless coblation tonsillectomy with quick recovery',
      'High clinical success rate in microscopic hearing restoration',
      'Dedicated VNG vertigo clinic for instant dizziness relief',
    ],
    treatments: [
      {
        slug: 'fess-sinus-surgery',
        name: 'Functional Endoscopic Sinus Surgery (FESS)',
        shortDesc: 'Incisionless endoscopic clearing of chronic sinus blockages.',
        overview: 'FESS uses 4K endoscopes through nostrils to unblock sinuses and remove polyps without facial cuts.',
        duration: '45 - 90 Minutes',
        recoveryTime: 'Day Care or 24-Hour Stay',
        procedureSteps: ['Endoscopic camera insertion via nostrils', 'Microdebrider polyp clearance', 'Sinus opening widening'],
        benefits: ['Zero skin incisions', 'Restores natural breathing & smell', 'Fast recovery'],
      },
    ],
    faqs: [
      {
        question: 'What services does the ENT department offer?',
        answer: 'We offer FESS sinus surgery, microscopic eardrum repair, coblation tonsillectomy, vertigo treatment, and cochlear implants.',
      },
      {
        question: 'What is FESS sinus surgery and is it painful?',
        answer: 'FESS is an endoscopic procedure performed inside nostrils without skin cuts. Performed under general anesthesia, post-op discomfort is minimal.',
      },
      {
        question: 'Why is Coblation better for tonsil removal in children?',
        answer: 'Coblation operates at 60°C instead of 400°C electrocautery, causing significantly less post-operative throat pain and allowing children to eat soft foods sooner.',
      },
      {
        question: 'Can a perforated eardrum heal naturally?',
        answer: 'Small traumatic tears may heal in 6 weeks. Persistent or large holes require a 45-minute Microscopic Tympanoplasty to prevent recurring ear infections and restore hearing.',
      },
      {
        question: 'Do you accept insurance for ENT procedures?',
        answer: 'Yes, MEDICARE accepts all major health insurance policies and TPAs for FESS, septoplasty, tympanoplasty, and tonsillectomy.',
      },
      {
        question: 'What causes sudden room-spinning vertigo?',
        answer: 'Commonly caused by BPPV (dislodged inner ear calcium crystals). The Epley maneuver easily repositioning these crystals provides immediate relief.',
      },
      {
        question: 'What are the warning signs of vocal cord nodules?',
        answer: 'Persistent raspy voice, voice fatigue while speaking, or loss of higher vocal pitch lasting longer than 2 weeks.',
      },
      {
        question: 'How is a Septoplasty performed for blocked nose?',
        answer: 'Septoplasty is done internally through nostrils to straighten crooked nasal septum cartilage, permanently opening nasal airways.',
      },
      {
        question: 'What is BERA hearing test for babies?',
        answer: 'Brainstem Evoked Response Audiometry (BERA) measures brain wave responses to sound clicks, testing hearing accuracy in sleeping infants.',
      },
      {
        question: 'Can snoring in children affect their brain development?',
        answer: 'Yes, obstructive sleep apnea caused by enlarged adenoids causes low night oxygen levels. Coblation adenoidectomy restores normal sleep breathing.',
      },
    ],
    healthArticles: [
      {
        title: 'Coblation vs Traditional Tonsillectomy: Pain-Free Surgery for Kids',
        category: 'Pediatric ENT',
        readTime: '4 Min Read',
        date: 'Sept 01, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80',
      },
      {
        title: 'BPPV Vertigo: How Epley Maneuver Cures Dizziness in Minutes',
        category: 'ENT Care',
        readTime: '5 Min Read',
        date: 'Aug 20, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
      },
    ],
    associatedDoctorSpecialty: 'ENT',
  },

  // 13. GENERAL MEDICINE / SURGERY
  {
    slug: 'general-medicine',
    name: 'General & Internal Medicine',
    iconName: 'Stethoscope',
    shortDesc: 'Diabetic HbA1c Control, Hypertension, Tropical Fever Management & Preventive Health.',
    overview: 'Searching for the BEST GENERAL MEDICINE HOSPITALS IN HITECH CITY, HYDERABAD near you? MEDICARE Internal Medicine Institute provides comprehensive adult primary care, HbA1c diabetes control, tropical fever management (Dengue/Typhoid), and executive preventive health checkups.',
    whyChooseDesc: 'Internal medicine formulates the foundation of accurate diagnosis and chronic disease management. Here is why patients trust MEDICARE General Medicine:',
    whyChoosePoints: [
      {
        title: 'Senior Internal Medicine Specialists',
        desc: 'Physicians with 20+ years clinical experience in diagnosing complex multi-organ medical conditions.',
      },
      {
        title: '24/7 Acute Tropical Fever & Dengue Unit',
        desc: 'Dedicated high-dependency unit for rapid platelet monitoring, dengue hemorrhagic fever management, and typhoid recovery.',
      },
      {
        title: 'Comprehensive Diabetes & Metabolic Care',
        desc: 'Personalized HbA1c reduction programs, continuous glucose monitoring (CGM), and diabetic foot ulcer prevention.',
      },
      {
        title: 'Hypertension & Lipid Optimization',
        desc: 'Advanced cardiovascular risk stratification, cholesterol management, and blood pressure stabilization.',
      },
      {
        title: 'Geriatric Comprehensive Health Care',
        desc: 'Tailored healthcare for senior citizens focusing on polypharmacy reduction, fall prevention, and memory assessment.',
      },
      {
        title: 'Preventive Health Checkup Packages',
        desc: 'Same-day full-body executive health checkups with multi-specialist consultations under one roof.',
      },
      {
        title: 'Multi-System Diagnostic Workup',
        desc: 'Rapid identification of unexplained fatigue, chronic low-grade fever, weight loss, and autoimmune conditions.',
      },
    ],
    advancedTechnologies: [
      { name: 'Continuous Glucose Monitoring (CGM) Sensors', desc: 'Wearable sensor tracking 24-hour real-time blood sugar trends without finger pricks.' },
      { name: '24-Hour Ambulatory Blood Pressure Monitor (ABPM)', desc: 'Automated wearable cuff diagnosing white-coat hypertension and nocturnal blood pressure surges.' },
      { name: 'Point-of-Care Rapid Biomarker Analyzer', desc: 'Instant 10-minute lab testing for Troponin-I, Procalcitonin, and D-Dimer.' },
      { name: 'Bio-Impedance Body Composition Analyzer', desc: 'Precise measurement of visceral fat, skeletal muscle mass, and hydration levels.' },
      { name: 'Digital ECG & Vascular Stiffness Monitor', desc: 'Evaluates arterial stiffness and early vascular aging.' },
      { name: 'NABL Certified Automated High-Throughput Pathology Lab', desc: 'Ultra-fast accurate blood sample testing with barcode tracking.' },
    ],
    diagnosticScreenings: [
      { name: 'HbA1c & Fasting / Post-Prandial Blood Sugar', desc: 'Gold standard 3-month average blood glucose control measurement.' },
      { name: 'Comprehensive Lipid Profile Panel', desc: 'Measures Total Cholesterol, HDL, LDL, VLDL, and Triglycerides.' },
      { name: 'Complete Blood Count (CBC) with Peripheral Smear', desc: 'Evaluates hemoglobin, white blood cells, and platelet count for infections/anemia.' },
      { name: 'Thyroid Function Test (T3, T4, TSH)', desc: 'Screens for hypothyroidism, hyperthyroidism, and Hashimoto’s thyroiditis.' },
      { name: 'Comprehensive Renal & Liver Function Profile', desc: 'Assesses kidney filtration rate, serum proteins, and liver enzymes.' },
    ],
    medicalTreatments: [
      { name: 'Intensive HbA1c Diabetes Optimization', desc: 'Customized oral hypoglycemic drugs, GLP-1 receptor agonists, and insulin titration.' },
      { name: 'Dengue & Platelet Management Protocol', desc: 'Judicious IV fluid hydration and platelet monitoring for acute Dengue fever.' },
      { name: 'Hypertension Multi-Drug Optimization', desc: 'Targeted ACE inhibitors, calcium channel blockers, and lifestyle counseling.' },
      { name: 'Adult Immunization & Travel Vaccines', desc: 'Flu, Pneumococcal, Hepatitis, and Typhoid vaccinations for adults.' },
      { name: 'Thyroid Hormonal Balancing Protocol', desc: 'Levothyroxine dosage titration for optimal metabolic energy.' },
    ],
    specializedProcedures: [
      { name: '24-Hour Continuous Glucose Sensor Implantation', desc: 'Painless upper-arm sensor placement for 14-day continuous glucose profiling.' },
      { name: 'Diagnostic Lumbar Puncture & CSF Analysis', desc: 'Diagnostic spinal fluid sampling for fever with altered sensorium / meningitis.' },
      { name: 'Pleural & Abdominal Fluid Aspiration (Paracentesis)', desc: 'Therapeutic and diagnostic fluid tap for abdominal ascites.' },
      { name: 'Elderly Polypharmacy Rationalization', desc: 'Clinical medication review eliminating unnecessary or conflicting medications.' },
      { name: 'Executive Preventive Health Evaluation', desc: 'Comprehensive full-body screening completed within 4 hours.' },
    ],
    conditions: [
      'Type 2 & Type 1 Diabetes Mellitus',
      'Hypertension (High Blood Pressure) & Dyslipidemia',
      'Dengue, Typhoid, Malaria & Viral Fevers',
      'Hypothyroidism & Hyperthyroidism',
      'Anemia, Vitamin Deficiencies & Unexplained Fatigue',
    ],
    symptoms: [
      'High Fever accompanied by Severe Chills, Body Ache or Headache',
      'Excessive Thirst, Frequent Urination & Unexplained Weight Loss',
      'Persistent Fatigue, Lethargy & General Muscle Weakness',
      'Dizziness, Lightheadedness or Morning Headaches',
      'Loss of Appetite, Nausea & Unexplained Joint Pains',
    ],
    keyFacilities: [
      'Continuous Glucose Monitoring (CGM) Clinic',
      '24/7 Acute Tropical Fever & Dengue High Dependency Unit',
      'NABL Accredited Automated Central Pathology Lab',
      'Executive Health Checkup Lounge',
      '24-Hour Ambulatory Blood Pressure Testing Room',
    ],
    whyChooseUs: [
      'Senior internal medicine consultants available round-the-clock',
      '24/7 emergency rapid blood biomarker lab testing',
      'Comprehensive diabetes HbA1c reduction success rate > 95%',
      'Preventive executive health checkups completed in under 4 hours',
    ],
    treatments: [
      {
        slug: 'hba1c-diabetes-control',
        name: 'Intensive HbA1c Diabetes Optimization',
        shortDesc: 'Comprehensive medical protocol bringing HbA1c below 7.0%.',
        overview: 'Combines modern GLP-1 therapy, continuous glucose tracking, and nutrition guidance to halt diabetic complications.',
        duration: 'Outpatient Consultation & Follow-up',
        recoveryTime: 'Visible HbA1c Drop in 8-12 Weeks',
        procedureSteps: ['CGM sensor installation', 'Metabolic medication tailoring', 'Diabetic nutrition planning'],
        benefits: ['Protects kidneys, eyes, and heart', 'Eliminates sugar spikes', 'Restores daily energy'],
      },
    ],
    faqs: [
      {
        question: 'What services does the general medicine department offer?',
        answer: 'We provide diabetes care, hypertension treatment, tropical fever management, adult vaccinations, and executive health checkups.',
      },
      {
        question: 'How is Dengue fever managed safely at MEDICARE?',
        answer: 'We follow strict WHO fluid management protocols, continuously monitoring hematocrit and platelet levels to prevent shock syndrome.',
      },
      {
        question: 'What is a Continuous Glucose Monitor (CGM)?',
        answer: 'A small water-resistant sensor worn on the arm that records blood sugar levels every 5 minutes for 14 days, revealing hidden sugar spikes.',
      },
      {
        question: 'Why is HbA1c test more accurate than a fasting blood sugar test?',
        answer: 'Fasting blood sugar shows sugar at one single moment, while HbA1c measures your average blood sugar control over the past 3 months.',
      },
      {
        question: 'Do you accept insurance for general medicine hospitalizations?',
        answer: 'Yes, MEDICARE accepts all major health insurance policies and TPAs for acute fever, pneumonia, dengue, and medical admissions.',
      },
      {
        question: 'What adult vaccines are recommended for seniors over 60?',
        answer: 'Annual Influenza (Flu) vaccine, Pneumococcal pneumonia vaccine, and Shingles (Herpes Zoster) vaccine.',
      },
      {
        question: 'How often should adults get a health checkup?',
        answer: 'Adults aged 30+ should get a comprehensive health checkup annually to screen for blood pressure, diabetes, lipids, and liver/kidney health.',
      },
      {
        question: 'What are the symptoms of Hypothyroidism?',
        answer: 'Unexplained weight gain, fatigue, dry skin, cold intolerance, hair loss, constipation, and depression.',
      },
      {
        question: 'What is white-coat hypertension?',
        answer: 'Temporarily elevated blood pressure caused by anxiety during a clinic visit. 24-Hour Ambulatory ABPM confirms your true normal blood pressure.',
      },
      {
        question: 'When should a fever patient be hospitalized?',
        answer: 'If fever exceeds 102°F, or is accompanied by breathlessness, low blood pressure, severe vomiting, or dropping platelet count.',
      },
    ],
    healthArticles: [
      {
        slug: 'understanding-hba1c',
        title: 'Understanding HbA1c: How to Lower Blood Sugar Naturally',
        category: 'DIABETES CARE',
        readTime: '5 min read',
        date: 'Sept 04, 2026',
        imageUrl: '/images/articles/hba1c-diabetes-test.jpg',
      },
      {
        slug: 'dengue-fever-low-platelets',
        title: 'Dengue Fever: Warning Signs of Low Platelets You Must Know',
        category: 'GENERAL HEALTH',
        readTime: '6 min read',
        date: 'Aug 27, 2026',
        imageUrl: '/images/articles/dengue-platelet-test.jpg',
      },
    ],
    associatedDoctorSpecialty: 'General Medicine',
  },

  // 14. EMERGENCY & CRITICAL CARE
  {
    slug: 'emergency-care',
    name: 'Emergency & Level-1 Trauma Care',
    iconName: 'AlertTriangle',
    shortDesc: '24/7 Golden Hour Response, Cardiac ICU Ambulances, Polytrauma & Stroke Resuscitation.',
    overview: 'Searching for the BEST EMERGENCY & TRAUMA HOSPITALS IN HITECH CITY, HYDERABAD near you? MEDICARE Emergency Department offers round-the-clock Level-1 trauma care, advanced ICU-on-wheels ambulances, < 35 min STEMI cardiac angioplasty, and acute stroke thrombolysis.',
    whyChooseDesc: 'In medical emergencies, every single second counts. Here is why MEDICARE Emergency Department is trusted across Hyderabad:',
    whyChoosePoints: [
      {
        title: '24/7 Level-1 Emergency & Polytrauma Resuscitation',
        desc: 'Advanced Triage and Resuscitation bays equipped with defibrillators, mechanical ventilators, and immediate specialist call-out.',
      },
      {
        title: 'ICU-on-Wheels Cardiac Ambulance Fleet',
        desc: 'GPS-tracked emergency ambulances staffed by trained emergency physicians, transport ventilators, and real-time ECG telemetry.',
      },
      {
        title: '< 35 Minute STEMI Heart Attack Response',
        desc: 'Direct transfer from ambulance to Cath Lab for emergency primary angioplasty, exceeding global emergency standards.',
      },
      {
        title: '24/7 Acute Stroke Thrombolysis Team',
        desc: 'Immediate 10-minute door-to-CT imaging and clot-busting IV r-tPA administration within the golden hour.',
      },
      {
        title: 'Advanced Poisoning & Venom Resuscitation Unit',
        desc: 'Specialized protocols and anti-venom stocks for snake bites, organophosphate poisoning, and acute drug overdoses.',
      },
      {
        title: 'Dedicated Pediatric & Neonatal Emergency Bay',
        desc: 'Specialized pediatric resuscitation lounge for infant respiratory distress, high fever fits, and foreign body choking.',
      },
      {
        title: 'Seamless ICU & Operating Suite Transfer',
        desc: 'Dedicated high-speed elevators directly connecting Emergency to Cath Lab, Trauma OTs, and Critical Care Units.',
      },
    ],
    advancedTechnologies: [
      { name: 'Advanced ICU Transport Ventilator Fleet', desc: 'Provides invasive and non-invasive ventilation during patient ambulance transport.' },
      { name: '12-Lead Wireless Telemetry ECG System', desc: 'Transmits patient ECG directly from ambulance to Cath Lab cardiologists.' },
      { name: 'Automated External Defibrillator & CPR System (Lucas 3)', desc: 'Delivers continuous uninterrupted CPR chest compressions during transport.' },
      { name: 'Emergency Rapid Blood Gas & Lactate Analyzer', desc: 'Instant 10-minute lab results for blood pH, oxygenation, and septic shock markers.' },
      { name: 'Sonosite Portable FAST Ultrasound', desc: 'Rapid bedside ultrasound detecting internal abdominal bleeding and cardiac tamponade in trauma.' },
      { name: 'Level-1 Emergency Trauma Operating Theater', desc: 'Ultra-sterile OT standing by 24/7 for immediate life-saving surgical intervention.' },
    ],
    diagnosticScreenings: [
      { name: 'Emergency FAST (Focused Assessment with Sonography in Trauma)', desc: 'Bedside ultrasound scan detecting fluid or blood in pericardium and abdomen.' },
      { name: 'Emergency Whole-Body Polytrauma CT Scan', desc: '15-minute 64-slice CT scan locating brain hemorrhages, spinal fractures, and organ rupture.' },
      { name: 'Rapid Cardiac Biomarker Panel (Troponin-I & CK-MB)', desc: 'Instant blood test confirming acute cardiac muscle injury.' },
      { name: 'Arterial Blood Gas (ABG) & Serum Lactate Analysis', desc: 'Evaluates respiratory failure, metabolic acidosis, and tissue perfusion.' },
      { name: 'Emergency Toxicological Screening Panel', desc: 'Identifies ingested poisons, toxins, and drug overdoses.' },
    ],
    medicalTreatments: [
      { name: 'Acute STEMI Primary Angioplasty Protocol', desc: 'Immediate catheter unblocking of coronary artery within 35 minutes.' },
      { name: 'Stroke Golden Hour Thrombolysis (r-tPA)', desc: 'Intravenous clot-dissolving medication restoring cerebral blood flow.' },
      { name: 'Severe Septic Shock Fluid & Vasopressor Resuscitation', desc: 'Targeted antibiotic infusion, central line access, and noradrenaline support.' },
      { name: 'Snake Bite & Polyvalent Anti-Venom Protocol', desc: 'Immediate administration of neutralizing anti-venom serum for neurotoxic/hemotoxic bites.' },
      { name: 'Polytrauma Hemorrhage Control & Mass Transfusion', desc: 'Rapid blood product transfusion protocol restoring circulating blood volume.' },
    ],
    specializedProcedures: [
      { name: 'Emergency Endotracheal Intubation & Airway Securing', desc: 'Advanced airway management for unconscious or non-breathing patients.' },
      { name: 'Emergency Intercostal Chest Drain (ICD) Insertion', desc: 'Chest tube placement for tension pneumothorax or hemothorax.' },
      { name: 'Emergency Damage-Control Laparotomy / Thoracotomy', desc: 'Immediate surgery stopping internal organ bleeding in severe trauma.' },
      { name: 'Central Venous Line & Arterial Line Placement', desc: 'Invasive blood pressure and central venous pressure hemodynamic monitoring.' },
      { name: 'Foreign Body Rigid Airway Retrieval', desc: 'Emergency removal of swallowed objects choking patient airways.' },
    ],
    conditions: [
      'Acute Myocardial Infarction (Heart Attack) & Cardiac Arrest',
      'Acute Ischemic / Hemorrhagic Stroke & Head Injury',
      'Polytrauma, Road Traffic Accidents & Severe Bone Fractures',
      'Septic Shock, Severe Pneumonia & Acute Respiratory Distress (ARDS)',
      'Acute Poisoning, Snake Bite & Chemical Burns',
    ],
    symptoms: [
      'Severe Sudden Crushing Chest Pain Radiating to Left Arm or Jaw',
      'Sudden Loss of Consciousness, Collapse or Unresponsiveness',
      'Sudden Facial Droop, Slurred Speech or Paralysis of One Side',
      'Severe Uncontrolled Bleeding or Compound Bone Fractures',
      'Extreme Difficulty Breathing, Blue Lips (Cyanosis) or Choking',
    ],
    keyFacilities: [
      '24/7 Dedicated Emergency & Triage Resuscitation Bays',
      'GPS-Tracked ICU-on-Wheels Cardiac Ambulance Fleet',
      'Level-1 Emergency Trauma Operating Suite',
      'Bedside FAST Ultrasound & Portable X-Ray Unit',
      'Direct High-Speed Elevator to Cath Lab & ICU',
    ],
    whyChooseUs: [
      'Average STEMI door-to-balloon time < 35 minutes',
      'Emergency physicians and trauma surgeons on-site 24/7',
      'GPS-tracked ICU ambulance dispatch within 60 seconds of call',
      '100% cashless emergency admission support for insured patients',
    ],
    treatments: [
      {
        slug: 'emergency-trauma-resuscitation',
        name: '24/7 Level-1 Trauma Resuscitation',
        shortDesc: 'Immediate emergency stabilization for severe accidents and cardiac arrest.',
        overview: 'Advanced resuscitation bay protocol securing airway, stopping hemorrhage, and stabilizing vitals.',
        duration: 'Immediate Resuscitation',
        recoveryTime: 'Transfer to ICU or Trauma OT',
        procedureSteps: ['Airway intubation', 'FAST ultrasound scan', 'Invasive hemodynamic support'],
        benefits: ['Saves lives in golden hour', 'Prevents irreversible organ damage', '24/7 specialist team'],
      },
    ],
    faqs: [
      {
        question: 'What is the MEDICARE 24/7 Emergency Helpline number?',
        answer: 'Call our 24/7 Emergency Helpline 1800-VIGHNA (844-462) or 040-68334455 for instant ICU ambulance dispatch.',
      },
      {
        question: 'How fast does an emergency ambulance arrive?',
        answer: 'Our GPS-tracked ICU ambulances are stationed strategically across Hyderabad, dispatching within 60 seconds of your call.',
      },
      {
        question: 'What is the Golden Hour in emergency trauma medicine?',
        answer: 'The first 60 minutes after a traumatic injury or heart attack. Medical care during this window dramatically increases survival rate.',
      },
      {
        question: 'Do you accept emergency cashless insurance admissions?',
        answer: 'Yes, our emergency desk initiates instant cashless authorization with all major TPAs without delaying medical treatment.',
      },
      {
        question: 'What equipment is inside a MEDICARE Cardiac Ambulance?',
        answer: 'Transport ventilator, multipara cardiac monitor, defibrillator, suction machine, emergency drugs, and wireless ECG telemetry.',
      },
      {
        question: 'What should I do while waiting for the ambulance to arrive?',
        answer: 'Keep the patient calm, lay them flat, do not give water if unconscious, apply firm pressure to any bleeding wounds, and keep doors open for paramedics.',
      },
      {
        question: 'Are trauma surgeons available at night?',
        answer: 'Yes, senior emergency physicians, trauma surgeons, cardiologists, and neurosurgeons are on standby in-hospital 24 hours a day.',
      },
      {
        question: 'How is snake bite treated in the emergency department?',
        answer: 'We evaluate snake bite puncture marks, monitor clotting time, and immediately administer polyvalent anti-venom serum with ICU support.',
      },
      {
        question: 'What is a FAST ultrasound scan in trauma?',
        answer: 'Focused Assessment with Sonography in Trauma (FAST) is a 2-minute bedside ultrasound that instantly detects internal bleeding in chest and abdomen.',
      },
      {
        question: 'Is emergency treatment provided before payment?',
        answer: 'Yes, MEDICARE prioritizing saving lives first. Resuscitation and emergency stabilization begin immediately upon arrival.',
      },
    ],
    healthArticles: [
      {
        title: 'First Aid in Emergency: 5 Life-Saving Steps Before Ambulance Arrives',
        category: 'Emergency Medicine',
        readTime: '4 Min Read',
        date: 'Sept 04, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Golden Hour in Heart Attack: Why Every Minute Counts',
        category: 'Cardiac Emergency',
        readTime: '5 Min Read',
        date: 'Aug 29, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80',
      },
    ],
    associatedDoctorSpecialty: 'Cardiology',
  },

  // 15. CARDIOTHORACIC SURGERY
  {
    slug: 'cardiothoracic',
    name: 'Cardiothoracic Surgery',
    iconName: 'Heart',
    shortDesc: 'Beating heart CABG bypass, aortic aneurysm repair, mitral valve reconstruction & lung surgeries.',
    overview: 'Searching for the BEST CARDIOTHORACIC HOSPITALS IN HITECH CITY, HYDERABAD near you? MEDICARE Cardiothoracic Surgery Department offers beating heart bypass surgery (OPCAB), minimally invasive cardiac surgery (MICS), complex aortic aneurysm repair, and lung resections with 24/7 dedicated Cardiac ICU support.',
    whyChooseDesc: 'When complex heart or lung surgery is needed, you deserve world-class surgical expertise. Here is why patients trust MEDICARE Cardiothoracic Department:',
    whyChoosePoints: [
      {
        title: 'Master Surgeons with 20+ Years Expertise',
        desc: 'Our cardiothoracic surgeons have completed over 15,000 successful open-heart, beating-heart, and thoracic surgical procedures.',
      },
      {
        title: 'Beating Heart Bypass Surgery (OPCAB)',
        desc: 'Over 95% of coronary artery bypass surgeries are performed on a beating heart without using a heart-lung machine, ensuring faster recovery and fewer complications.',
      },
      {
        title: 'Minimally Invasive Cardiac Surgery (MICS)',
        desc: 'Keyhole 2-inch incision valve replacement and hole closure surgery resulting in minimal blood loss, low infection risk, and quick return to work.',
      },
      {
        title: 'Dedicated 30-Bed Cardiac Surgical ICU',
        desc: 'Round-the-clock intensivist coverage, advanced ECMO artificial lung support, and 1:1 dedicated nursing care.',
      },
    ],
    advancedTechnologies: [
      { name: 'Off-Pump Beating Heart Stabilizer (Octopus)', desc: 'Stabilizes heart wall for suture placement without stopping the heart.' },
      { name: 'Extracorporeal Membrane Oxygenation (ECMO)', desc: 'Advanced heart-lung bypass machine support for severe cardiac failure.' },
      { name: '4K Thoracoscopic Video Tower', desc: 'Minimal invasive keyhole video-assisted thoracic surgery (VATS) for lung resections.' },
      { name: 'Intraoperative Transesophageal Echo (TEE)', desc: 'Real-time 3D valve assessment during heart surgery.' },
    ],
    diagnosticScreenings: [
      { name: '64-Slice Cardiac & Thoracic CT Angiography', desc: 'High-contrast 3D visualization of coronary arteries and aortic aneurysms.' },
      { name: 'Transesophageal Echocardiography (TEE)', desc: 'Ultrasonic evaluation of mitral valve regurgitation and atrial thrombus.' },
      { name: 'Pulmonary Function Tests (PFT)', desc: 'Assessment of lung capacity before thoracic surgery.' },
    ],
    medicalTreatments: [
      { name: 'Post-CABG Cardiac Rehabilitation', desc: 'Monitored breathing exercises, physical conditioning, and lipid control.' },
      { name: 'Thoracic Oncology Multidisciplinary Board', desc: 'Integrated chemo-radiotherapy and surgical lung cancer protocols.' },
    ],
    specializedProcedures: [
      { name: 'Beating Heart Coronary Artery Bypass (CABG)', desc: 'Off-pump multi-vessel arterial revascularization.' },
      { name: 'Mitral & Aortic Valve Replacement / Repair', desc: 'Minimally invasive keyhole heart valve repair or prosthetic replacement.' },
      { name: 'Aortic Aneurysm Repair (TEVAR / EVAR)', desc: 'Endovascular stent grafting for life-threatening aortic ruptures.' },
      { name: 'Video-Assisted Thoracoscopic Surgery (VATS)', desc: 'Keyhole lobectomy and decortication for lung conditions.' },
    ],
    conditions: [
      'Multi-vessel Coronary Artery Disease',
      'Severe Mitral & Aortic Valve Stenosis',
      'Thoracic Aortic Aneurysm & Dissection',
      'Lung Tumors & Pleural Empyema',
      'Congenital Heart Defects (ASD, VSD)',
    ],
    symptoms: [
      'Severe Angina Chest Pain Radiating to Left Arm',
      'Shortness of Breath while Walking or Lying Flat',
      'Heart Palpitations & Swelling in Feet',
      'Chronic Cough with Blood in Sputum',
    ],
    keyFacilities: [
      'Zero-Infection HEPA Cardiac Operating Theaters',
      'Off-Pump Beating Heart Stabilization Suite',
      '30-Bed Dedicated Cardiac Intensive Care Unit (CTICU)',
      'ECMO Advanced Cardiopulmonary Support Unit',
    ],
    whyChooseUs: [
      '99.2% CABG surgical success rate',
      'Pioneering beating heart off-pump bypass techniques',
      'Minimally invasive keyhole heart valve surgery (MICS)',
      '24/7 dedicated cardiac surgical intensivist team',
    ],
    treatments: [
      {
        slug: 'beating-heart-cabg',
        name: 'Beating Heart CABG Bypass Surgery',
        shortDesc: 'Off-pump coronary artery bypass surgery eliminating the need for heart-lung machine.',
        overview: 'OPCAB restores arterial blood flow to cardiac muscle while heart is actively beating.',
        duration: '3 - 4 Hours',
        recoveryTime: '5 Days Hospital Stay',
        procedureSteps: ['Minimally invasive sternotomy', 'Octopus heart stabilizer application', 'Mammary & radial artery grafting'],
        benefits: ['Faster recovery', 'Zero cognitive dysfunction from heart-lung machine', 'Low transfusion requirement'],
      },
    ],
    faqs: [
      {
        question: 'What is beating heart CABG surgery?',
        answer: 'Beating heart CABG (off-pump) allows surgeons to perform bypass grafts while your heart continues to beat naturally, lowering stroke and organ damage risks.',
      },
      {
        question: 'How long is the recovery after heart bypass surgery?',
        answer: 'Patients spend 2 days in CTICU and are discharged in 5 to 7 days, returning to normal light activities within 4 weeks.',
      },
    ],
    healthArticles: [
      {
        title: 'Beating Heart CABG vs Traditional Bypass: What You Need to Know',
        category: 'Cardiothoracic Surgery',
        readTime: '5 Min Read',
        date: 'Sept 01, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80',
      },
    ],
    associatedDoctorSpecialty: 'Cardiothoracic',
  },

  // 16. ORGAN TRANSPLANTATION
  {
    slug: 'organ-transplantation',
    name: 'Organ Transplantation Institute',
    iconName: 'Lungs',
    shortDesc: 'Living & deceased donor Kidney, Liver & Heart Transplants with ultra-sterile HEPA ICUs.',
    overview: 'Searching for the BEST ORGAN TRANSPLANT HOSPITALS IN HITECH CITY, HYDERABAD near you? MEDICARE Organ Transplant Institute provides multidisciplinary kidney, liver, and heart transplantation with world-class surgical protocols, ABO-incompatible transplant capability, and dedicated HEPA-filtered transplant ICUs.',
    whyChooseDesc: 'Organ transplantation offers a new lease on life. Here is why patients trust MEDICARE Organ Transplant Institute:',
    whyChoosePoints: [
      {
        title: 'Comprehensive Multi-Organ Surgery Team',
        desc: 'Specialized surgical transplant teams, hepatologists, nephrologists, and immunologists with 98%+ graft survival rates.',
      },
      {
        title: 'ABO-Incompatible (Cross-Match Positive) Transplants',
        desc: 'Pioneering desensitization protocols enabling living donor transplants across incompatible blood groups.',
      },
      {
        title: 'Laparoscopic Donor Nephrectomy',
        desc: 'Keyhole living kidney donor surgery ensuring minimal pain, rapid healing, and discharge within 3 days for donors.',
      },
      {
        title: 'Dedicated HEPA Positive-Pressure Isolation ICUs',
        desc: 'Ultra-clean isolation suites preventing post-transplant infection during the vulnerable recovery phase.',
      },
    ],
    advancedTechnologies: [
      { name: 'OrganOx Metra Normothermic Liver Perfusion', desc: 'Preserves donor liver outside the body for up to 24 hours.' },
      { name: 'Laparoscopic 3D 4K Donor Surgery Tower', desc: 'Keyhole precision donor organ harvesting.' },
      { name: 'Therapeutic Plasma Exchange (Plasmapheresis)', desc: 'Removes antibodies for ABO-incompatible organ transplants.' },
    ],
    diagnosticScreenings: [
      { name: 'HLA Tissue Typing & Crossmatching', desc: 'High-resolution DNA matching between donor and recipient.' },
      { name: '3D Triphasic CT Angiography & Volumetry', desc: 'Precision liver lobe volume and vessel mapping.' },
    ],
    medicalTreatments: [
      { name: 'Immunosuppressive Drug Optimization', desc: 'Customized anti-rejection protocols to ensure graft survival.' },
      { name: 'Post-Transplant Infection Surveillance', desc: 'Routine viral load monitoring (CMV, EBV, BK virus).' },
    ],
    specializedProcedures: [
      { name: 'Living Donor Liver Transplantation (LDLT)', desc: 'Precision split liver transplantation from a healthy family donor.' },
      { name: 'Laparoscopic Kidney Transplantation', desc: 'Keyhole donor nephrectomy and vascular anastomosis.' },
      { name: 'Pediatric Renal & Hepatic Transplants', desc: 'Specialized transplant care for infant kidney and liver failure.' },
    ],
    conditions: [
      'End-Stage Renal Disease (ESRD)',
      'Decompensated Liver Cirrhosis & NASH',
      'End-Stage Heart Failure',
      'Acute Liver Failure',
    ],
    symptoms: [
      'Chronic Fatigue, Nausea & Swelling in Ankles',
      'Refractory Ascites & Jaundice in Liver Cirrhosis',
      'Need for Hemodialysis 3 Times Weekly',
    ],
    keyFacilities: [
      'Positive-Pressure HEPA Isolation Transplant ICUs',
      'Laparoscopic 3D Donor Surgery Suite',
      '24/7 Organ Retrieval & Transport Ambulances',
    ],
    whyChooseUs: [
      '98.4% 1-year kidney graft survival rate',
      'Living donor laparoscopic keyhole surgery',
      'ABO-incompatible cross-match transplant protocols',
      'Dedicated transplant coordinator & counselor support',
    ],
    treatments: [
      {
        slug: 'living-donor-kidney-transplant',
        name: 'Living Donor Kidney Transplantation',
        shortDesc: 'Surgical transplantation of healthy donor kidney for end-stage renal disease.',
        overview: 'Laparoscopic donor nephrectomy followed by vascular arterial and ureteral implantation.',
        duration: '4 - 5 Hours',
        recoveryTime: '7 - 10 Days Hospital Stay',
        procedureSteps: ['Keyhole donor nephrectomy', 'Organ bench cooling & flushing', 'Iliac vessel anastomosis'],
        benefits: ['Frees patient from lifelong dialysis', 'Longer graft survival than cadaveric kidneys', 'High quality of life'],
      },
    ],
    faqs: [
      {
        question: 'Who can be a living organ donor?',
        answer: 'Immediate family members (parents, siblings, spouse, adult children) aged 18 to 55 with matching blood group and good general health can donate.',
      },
      {
        question: 'What is ABO-incompatible transplant?',
        answer: 'It is a specialized medical protocol using plasma exchange that allows kidney/liver transplant even when donor and recipient have different blood types.',
      },
    ],
    healthArticles: [
      {
        title: 'Life After Kidney Transplant: What to Expect in the First 90 Days',
        category: 'Transplant Medicine',
        readTime: '6 Min Read',
        date: 'Aug 25, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80',
      },
    ],
    associatedDoctorSpecialty: 'Nephrology',
  },

  // 17. ROBOTIC SURGERY
  {
    slug: 'robotic-surgery',
    name: 'Robotic Surgery Center of Excellence',
    iconName: 'Bot',
    shortDesc: 'Da Vinci Xi & Mako 3D Robotic precision for Gynae, Urology, Gastro & Orthopedic Surgeries.',
    overview: 'Searching for the BEST ROBOTIC SURGERY HOSPITALS IN HITECH CITY, HYDERABAD near you? MEDICARE Robotic Surgery Institute features Da Vinci Xi and Mako 3D robotic surgical platforms. Providing sub-millimeter precision, zero blood loss, and 48-hour hospital discharge across Urology, Gynecology, GI Surgery, and Joint Replacements.',
    whyChooseDesc: 'Robotic surgical technology enhances human surgeon precision. Here is why patients choose MEDICARE Robotic Surgery Center:',
    whyChoosePoints: [
      {
        title: 'Dual Da Vinci Xi & Mako Robotic Suite',
        desc: 'Multi-specialty 4th Generation robotic platforms with 360-degree wrist rotation and 10x 3D HD optical magnification.',
      },
      {
        title: 'Sub-Millimeter Surgical Precision',
        desc: 'Translates surgeon hand movements into tremor-free micro-movements, preserving vital nerves, blood vessels, and healthy tissue.',
      },
      {
        title: 'Discharge Within 24 - 48 Hours',
        desc: 'Tiny keyhole incisions result in virtually zero post-operative pain, minimal scar tissue, and rapid return to work.',
      },
      {
        title: 'Certified Robotic Master Surgeons',
        desc: 'Surgeons trained at top global robotic surgical centers with over 5,000 robotic procedures completed.',
      },
    ],
    advancedTechnologies: [
      { name: 'Da Vinci Xi 4-Arm Surgical Robot', desc: 'Advanced multi-quadrant robotic arm system with EndoWrist articulation.' },
      { name: 'Mako 3D Robotic Joint Replacement', desc: 'CT-guided haptic robotic arm for total knee and hip replacements.' },
      { name: 'Firefly Fluorescence Imaging', desc: 'Real-time tissue vascularity and bile duct visualization during robotic surgery.' },
    ],
    diagnosticScreenings: [
      { name: '3D High-Definition Pre-Operative CT Mapping', desc: 'Creates custom 3D patient anatomical model for surgical simulation.' },
    ],
    medicalTreatments: [
      { name: 'Pre-Robotic Surgical Counseling', desc: 'Detailed 3D virtual walkthrough of your surgical procedure.' },
    ],
    specializedProcedures: [
      { name: 'Robotic Radical Prostatectomy (RALP)', desc: 'Nerve-sparing prostate cancer excision maintaining urinary continence.' },
      { name: 'Robotic Myomectomy & Hysterectomy', desc: 'Uterine fibroid removal preserving fertility.' },
      { name: 'Robotic Ventral & Inguinal Hernia Mesh Repair', desc: 'Precision abdominal wall reconstruction.' },
      { name: 'Robotic Bariatric Gastric Sleeve', desc: 'Keyhole weight loss surgery with rapid recovery.' },
    ],
    conditions: [
      'Prostate & Bladder Cancer',
      'Uterine Fibroids & Severe Endometriosis',
      'Complex Abdominal Wall Hernias',
      'Severe Knee & Hip Osteoarthritis',
      'Esophageal & Stomach Cancers',
    ],
    symptoms: [
      'Difficulty Urinating or Elevated PSA in Men',
      'Heavy Menstrual Bleeding & Pelvic Pain in Women',
      'Abdominal Wall Bulge or Pain',
    ],
    keyFacilities: [
      'Da Vinci Xi 4th Gen Robotic Surgical Suite',
      'Mako 3D CT-Guided Joint Robotic Arm',
      'Dual Master Surgical Console for Training',
    ],
    whyChooseUs: [
      'Over 5,000+ successful robotic procedures',
      'Sub-millimeter nerve-sparing surgical accuracy',
      'Discharge within 24 to 48 hours for keyhole robotic cases',
      'Zero blood transfusion requirement in 95% of cases',
    ],
    treatments: [
      {
        slug: 'da-vinci-robotic-prostatectomy',
        name: 'Da Vinci Robotic Radical Prostatectomy',
        shortDesc: 'Nerve-sparing keyhole robotic removal of cancerous prostate gland.',
        overview: 'Da Vinci Xi 3D magnification preserves erectile nerves and urinary sphincter muscle control.',
        duration: '2 - 3 Hours',
        recoveryTime: '48-Hour Hospital Stay',
        procedureSteps: ['Robotic port placement', 'Nerve-sparing prostate dissection', 'Urethrovesical anastomosis'],
        benefits: ['Preserves urinary continence', 'Minimal blood loss (< 50ml)', 'Walk painless next morning'],
      },
    ],
    faqs: [
      {
        question: 'Is the robot performing the surgery independently?',
        answer: 'No, the robot never acts independently. Your senior robotic master surgeon sits at a 3D HD console and controls every movement in real time.',
      },
      {
        question: 'Are robotic surgeries covered by health insurance?',
        answer: 'Yes, major health insurance policies cover Da Vinci and Mako robotic surgeries at MEDICARE Hospitals.',
      },
    ],
    healthArticles: [
      {
        title: 'Why Robotic Surgery is Replacing Open Surgery for Hernias & Gynae',
        category: 'Robotic Surgery',
        readTime: '4 Min Read',
        date: 'Sept 03, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=400&q=80',
      },
    ],
    associatedDoctorSpecialty: 'Orthopedics',
  },

  // 18. PLASTIC SURGERY
  {
    slug: 'plastic-surgery',
    name: 'Plastic, Cosmetic & Reconstructive Surgery',
    iconName: 'Sparkles',
    shortDesc: 'Microsurgical reconstruction, burn care, rhinoplasty, liposuction & body contouring.',
    overview: 'Searching for the BEST PLASTIC SURGERY HOSPITALS IN HITECH CITY, HYDERABAD near you? MEDICARE Plastic & Reconstructive Surgery Center offers micro-vascular tissue transfer, facial trauma reconstruction, burn rehabilitation, rhinoplasty, breast reshaping, and laser scar revisions.',
    whyChooseDesc: 'Restoring form, function, and aesthetic confidence requires artistic touch combined with surgical mastery. Here is why patients trust MEDICARE Plastic Surgery Center:',
    whyChoosePoints: [
      {
        title: 'Board-Certified Reconstructive & Aesthetic Surgeons',
        desc: 'Surgeons specialized in micro-vascular free flap surgery, cosmetic enhancement, and facial bone trauma repair.',
      },
      {
        title: '24/7 Reconstructive Microsurgery & Trauma Unit',
        desc: 'Emergency replantation of severed digits/limbs and complex flap coverage for open bone fractures.',
      },
      {
        title: 'Advanced Body Contouring & Liposuction',
        desc: 'High-definition VASER ultrasound liposuction and abdominoplasty (tummy tuck) for aesthetic body transformation.',
      },
      {
        title: 'Comprehensive Burn Care & Scar Laser Suite',
        desc: 'Dedicated HEPA burn ICU and fractional CO2 laser scar reduction for contracture deformities.',
      },
    ],
    advancedTechnologies: [
      { name: 'High-Power Surgical Operating Microscope (Zeiss)', desc: 'Enables 40x magnification for 1mm micro-vascular blood vessel stitching.' },
      { name: 'VASER Ultrasonic Liposuction System', desc: 'Liquefies deep fat cells while preserving surrounding nerve fibers.' },
      { name: 'Fractional CO2 Surgical Laser Tower', desc: 'Resurfaces acne scars, burn contractures, and surgical incision lines.' },
    ],
    diagnosticScreenings: [
      { name: '3D Vectra Facial & Body Aesthetic Simulation', desc: 'Previews 3D post-surgery cosmetic results before procedure.' },
    ],
    medicalTreatments: [
      { name: 'Non-Surgical Facial Rejuvenation', desc: 'Botox, hyaluronic dermal fillers, and thread lifts.' },
    ],
    specializedProcedures: [
      { name: 'Micro-Vascular Free Flap Reconstruction', desc: 'Transfers tissue to reconstruct lower limb, head, and neck defects.' },
      { name: 'Aesthetic Rhinoplasty & Septoplasty', desc: 'Nasal reshaping to improve facial harmony and breathing.' },
      { name: 'Post-Mastectomy Breast Reconstruction', desc: 'Rebuilds natural breast contour using autologous tissue or implants.' },
      { name: 'VASER High-Def Liposuction & Abdominoplasty', desc: 'Sculpts waistline and tightens loose abdominal skin.' },
    ],
    conditions: [
      'Facial Fracture & Trauma Defects',
      'Post-Cancer Surgical Tissue Defects',
      'Severe Burn Deformities & Contractures',
      'Excess Abdominal Fat & Post-Pregnancy Loose Skin',
      'Congenital Cleft Lip & Palate',
    ],
    symptoms: [
      'Facial Bone Deformity after Accident',
      'Non-Healing Wound or exposed Bone',
      'Distressing Scar Tissue or Burn Contracture',
    ],
    keyFacilities: [
      'Micro-Vascular Surgical Microscope OT',
      'VASER Ultrasound Liposuction Suite',
      'Dedicated HEPA-Filtered Burn ICU',
    ],
    whyChooseUs: [
      '24/7 micro-vascular emergency limb replantation team',
      'High-Definition VASER ultrasonic body contouring',
      '3D Vectra aesthetic outcome simulation before surgery',
      'Natural, scar-hidden cosmetic enhancement outcomes',
    ],
    treatments: [
      {
        slug: 'vaser-ultrasonic-liposuction',
        name: 'VASER Ultrasonic High-Def Liposuction',
        shortDesc: 'Minimally invasive ultrasound fat removal and muscle contouring.',
        overview: 'VASER technology breaks down targeted stubborn fat deposits with minimal bruising.',
        duration: '2 - 3 Hours',
        recoveryTime: '2 - 3 Days',
        procedureSteps: ['Tumescent fluid infiltration', 'Ultrasound probe fat emulsification', 'Cannula micro-suction'],
        benefits: ['Smooth natural skin retraction', 'Quick recovery', 'Minimal pain & bruising'],
      },
    ],
    faqs: [
      {
        question: 'What is the difference between plastic and cosmetic surgery?',
        answer: 'Plastic surgery encompasses both reconstructive surgery (fixing trauma, burns, cleft palate) and cosmetic surgery (enhancing body aesthetics like rhinoplasty or liposuction).',
      },
    ],
    healthArticles: [
      {
        title: 'Micro-Vascular Surgery: How Microscopic Stitching Saves Trauma Limbs',
        category: 'Plastic Surgery',
        readTime: '5 Min Read',
        date: 'Aug 30, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=400&q=80',
      },
    ],
    associatedDoctorSpecialty: 'Dermatology',
  },

  // 19. RHEUMATOLOGY
  {
    slug: 'rheumatology',
    name: 'Rheumatology & Autoimmune Care',
    iconName: 'Activity',
    shortDesc: 'Rheumatoid arthritis, Lupus (SLE), Ankylosing Spondylitis & Biologic infusion therapy.',
    overview: 'Searching for the BEST RHEUMATOLOGY HOSPITALS IN HITECH CITY, HYDERABAD near you? MEDICARE Rheumatology Center offers comprehensive treatment for auto-immune arthritis, Systemic Lupus Erythematosus (SLE), Gout, Scleroderma, Vasculitis, and Osteoporosis with targeted biologic disease-modifying therapies.',
    whyChooseDesc: 'Autoimmune joint and connective tissue diseases require early, targeted intervention. Here is why patients trust MEDICARE Rheumatology Center:',
    whyChoosePoints: [
      {
        title: 'Senior Clinical Rheumatologists',
        desc: 'Specialists trained in identifying early joint erosion and halting autoimmune damage before irreversible disability occurs.',
      },
      {
        title: 'Targeted Biologic Infusion Daycare Unit',
        desc: 'State-of-the-art biologic daycare lounge for Anti-TNF, Anti-IL-6, and anti-B-cell monoclonal antibody infusions.',
      },
      {
        title: 'Musculoskeletal Ultrasound (MSK-USG)',
        desc: 'Point-of-care joint ultrasound detecting subtle synovial inflammation and cartilage thickness in real time.',
      },
      {
        title: 'Multi-System Lupus & Vasculitis Clinic',
        desc: 'Integrated rheumatology, nephrology, and pulmonology care for complex lupus nephritis and systemic vasculitis.',
      },
    ],
    advancedTechnologies: [
      { name: 'Point-of-Care Joint Musculoskeletal Ultrasound', desc: 'Visualizes sub-clinical joint effusion and erosion.' },
      { name: 'Nailfold Capillaroscopy System', desc: 'Evaluates micro-vascular changes in Raynaud’s phenomenon and Scleroderma.' },
      { name: 'DEXA Bone Mineral Density Scanner', desc: 'Evaluates glucocorticoid-induced osteoporosis.' },
    ],
    diagnosticScreenings: [
      { name: 'Auto-Antibody Serology Panel (ANA, Anti-dsDNA, Anti-CCP)', desc: 'High-precision automated immunoassay for autoimmune profiling.' },
    ],
    medicalTreatments: [
      { name: 'Targeted Biologic Therapy (Infliximab, Rituximab)', desc: 'Halts joint destruction in refractory rheumatoid arthritis.' },
      { name: 'Intra-Articular Steroid & Hyaluronic Injections', desc: 'Provides immediate relief for inflamed knee and shoulder joints.' },
    ],
    specializedProcedures: [
      { name: 'Diagnostic Synovial Fluid Aspiration & Crystal Analysis', desc: 'Polarizing microscopy to differentiate gout from pseudogout.' },
    ],
    conditions: [
      'Rheumatoid Arthritis (RA)',
      'Systemic Lupus Erythematosus (SLE / Lupus)',
      'Ankylosing Spondylitis & Spine Stiffness',
      'Gout & Uric Acid Crystal Arthritis',
      'Systemic Sclerosis (Scleroderma) & Vasculitis',
    ],
    symptoms: [
      'Morning Joint Stiffness lasting > 30 Minutes',
      'Swollen, Painful, Warm Joints in Fingers or Knees',
      'Unexplained Skin Rashes, Butterfly Facial Rash or Sun Sensitivity',
      'Severe Low Back Stiffness Worsening with Rest',
    ],
    keyFacilities: [
      'Biologic Daycare Infusion Suite',
      'Point-of-Care MSK Joint Ultrasound',
      'Immunology Auto-Antibody Laboratory',
    ],
    whyChooseUs: [
      'Early arthritis detection preventing permanent joint deformity',
      'Targeted biologic infusion daycare lounge',
      'Comprehensive Lupus multi-specialty care clinic',
      'In-house MSK joint ultrasound & DEXA bone scanning',
    ],
    treatments: [
      {
        slug: 'biologic-infusion-arthritis',
        name: 'Targeted Biologic Infusion Therapy',
        shortDesc: 'Advanced monoclonal antibody infusions for severe rheumatoid arthritis & ankylosing spondylitis.',
        overview: 'Biologic agents target specific inflammatory cytokines (TNF, IL-6) to induce long-term remission.',
        duration: '2 - 3 Hours Infusion',
        recoveryTime: 'Same Day OPD Discharge',
        procedureSteps: ['Pre-infusion screening (TB, Hepatitis)', 'IV cannula placement', 'Monitored biologic infusion'],
        benefits: ['Stops joint damage', 'Restores pain-free mobility', 'Reduces steroid dependence'],
      },
    ],
    faqs: [
      {
        question: 'What is the difference between Osteoarthritis and Rheumatoid Arthritis?',
        answer: 'Osteoarthritis is wear-and-tear of joint cartilage common with aging, while Rheumatoid Arthritis is an autoimmune disease where your body immune system mistakenly attacks joint linings.',
      },
      {
        question: 'Can Rheumatoid Arthritis be cured?',
        answer: 'While there is no permanent cure, early treatment with DMARDs and Biologics can induce complete clinical remission, allowing you to live a normal active life.',
      },
    ],
    healthArticles: [
      {
        title: 'Morning Joint Stiffness: Early Signs of Rheumatoid Arthritis You Shouldn’t Ignore',
        category: 'Rheumatology',
        readTime: '4 Min Read',
        date: 'Sept 02, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80',
      },
    ],
    associatedDoctorSpecialty: 'Orthopedics',
  },
];
