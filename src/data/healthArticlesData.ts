export interface DetailedHealthArticle {
  id: number | string;
  slug: string;
  title: string;
  category: string;
  disease: string;
  image: string;
  shortDescription: string;
  author: string;
  date: string;
  readingTime: string;
  fullContent: {
    introduction: string;
    sections: {
      heading: string;
      content: string | string[];
      isWarning?: boolean;
    }[];
    keyTakeaways: string[];
  };
}

export const HEALTH_ARTICLES_LIST: DetailedHealthArticle[] = [
  {
    id: 1,
    slug: 'understanding-hba1c',
    title: 'Understanding HbA1c: How to Lower Blood Sugar Naturally',
    category: 'DIABETES CARE',
    disease: 'Diabetes and Blood Sugar Management',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'HbA1c measures your average blood sugar levels over the past 2 to 3 months. Discover evidence-based natural lifestyle approaches, dietary choices, and exercise routines to help manage glucose levels.',
    author: 'Specialist Doctor',
    date: 'Sept 04, 2026',
    readingTime: '5 min read',
    fullContent: {
      introduction: 'Hemoglobin A1c (HbA1c) is one of the most vital diagnostic markers used in modern medicine to monitor long-term blood glucose control. Unlike daily blood sugar tests that capture a single moment in time, the HbA1c test gives an accurate overall picture of your blood sugar levels over a 2 to 3 month period.',
      sections: [
        {
          heading: '1. What is HbA1c?',
          content: 'HbA1c stands for glycated hemoglobin. Hemoglobin is a protein found inside red blood cells that carries oxygen throughout your body. When glucose builds up in your bloodstream, it attaches (glycates) to the hemoglobin molecules. The HbA1c test measures the percentage of red blood cells that have sugar-coated hemoglobin.'
        },
        {
          heading: '2. What does an HbA1c test measure?',
          content: 'Because red blood cells typically live for about 120 days (around 3 months), measuring glycated hemoglobin reflects your average blood glucose concentrations over that timeframe. Higher average blood sugar levels result in a higher percentage of HbA1c in your bloodstream.'
        },
        {
          heading: '3. Understanding HbA1c levels',
          content: [
            'Normal Level: Below 5.7%',
            'Prediabetes Range: 5.7% to 6.4% (Indicates increased risk of developing type 2 diabetes)',
            'Diabetes Diagnosis: 6.5% or higher on two separate clinical tests',
            'Target for Most Adults with Diabetes: Generally under 7.0% (individual targets may vary based on physician advice)'
          ]
        },
        {
          heading: '4. How blood sugar affects HbA1c',
          content: 'Frequent spikes in blood glucose after meals, persistent fasting hyperglycemia, and insulin resistance gradually raise the overall HbA1c level. Over time, chronically elevated HbA1c increases the risk of microvascular and macrovascular complications affecting the eyes, kidneys, nerves, and cardiovascular system.'
        },
        {
          heading: '5. Natural lifestyle approaches for better blood sugar control',
          content: 'While prescription medications are essential for many individuals, incorporating natural, evidence-based lifestyle modifications plays a cornerstone role in lowering blood sugar and improving insulin sensitivity.'
        },
        {
          heading: '6. Healthy eating habits',
          content: [
            'Prioritize Low Glycemic Index (GI) Foods: Swap refined grains for whole grains like oats, quinoa, brown rice, and legumes.',
            'Increase Soluble Dietary Fiber: Fiber slows carbohydrate absorption and prevents sharp post-meal glucose spikes.',
            'Choose Lean Proteins & Healthy Fats: Include nuts, seeds, avocados, and clean protein sources to increase satiety.',
            'Portion Control: Use balanced plate methods (half vegetables, quarter lean protein, quarter complex carbohydrates).'
          ]
        },
        {
          heading: '7. Physical activity',
          content: 'Engaging in at least 150 minutes of moderate aerobic exercise (such as brisk walking, swimming, or cycling) per week enables muscles to absorb glucose directly from the bloodstream, reducing insulin resistance even without medication.'
        },
        {
          heading: '8. Sleep and stress management',
          content: 'Chronic stress triggers elevated cortisol and adrenaline levels, which stimulate the liver to release stored glucose into the blood. Prioritizing 7 to 8 hours of restorative sleep and practicing mindfulness helps maintain steady hormonal equilibrium.'
        },
        {
          heading: '9. When to consult a doctor',
          content: 'Routine HbA1c screening is recommended every 3 to 6 months for individuals diagnosed with diabetes or prediabetes. Consult your physician or endocrinologist promptly if you experience unexplained weight loss, excessive thirst (polydipsia), frequent urination (polyuria), or persistent fatigue.'
        }
      ],
      keyTakeaways: [
        'HbA1c reflects average blood sugar control over 2 to 3 months.',
        'A target level below 7.0% helps prevent long-term diabetic complications.',
        'Dietary fiber, low-GI foods, and consistent exercise improve natural insulin sensitivity.',
        'Always combine natural lifestyle strategies with regular guidance from a qualified doctor.'
      ]
    }
  },
  {
    id: 2,
    slug: 'dengue-fever-low-platelets',
    title: 'Dengue Fever: Warning Signs of Low Platelets You Must Know',
    category: 'GENERAL HEALTH',
    disease: 'Dengue Fever',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Dengue fever can cause a sudden decline in blood platelet counts (thrombocytopenia). Learn to recognize critical warning signs, the role of CBC monitoring, and when to seek urgent medical care.',
    author: 'Specialist Doctor',
    date: 'Aug 27, 2026',
    readingTime: '6 min read',
    fullContent: {
      introduction: 'Dengue fever is a mosquito-borne viral infection transmitted primarily by the Aedes aegypti mosquito. One of the most clinically significant complications of dengue infection is a rapid decline in blood platelet count (thrombocytopenia), which can lead to severe complications if not closely monitored.',
      sections: [
        {
          heading: '1. What is dengue fever?',
          content: 'Dengue is caused by one of four dengue virus serotypes (DEN-1, DEN-2, DEN-3, DEN-4). Symptoms typically manifest 4 to 10 days after a bite from an infected mosquito and include high fever, severe headache, retro-orbital (behind the eye) pain, joint aching, and muscle soreness.'
        },
        {
          heading: '2. How dengue affects the body',
          content: 'The dengue virus temporarily suppresses bone marrow function (where blood cells are produced) and causes systemic capillary leakage. This combination can result in plasma loss, transient liver inflammation, and a rapid drop in blood platelets.'
        },
        {
          heading: '3. What are platelets?',
          content: 'Platelets (thrombocytes) are specialized blood cells responsible for blood clotting. A normal blood platelet count in a healthy adult ranges from 150,000 to 450,000 platelets per microliter of blood.'
        },
        {
          heading: '4. Why platelet count can fall during dengue',
          content: 'During dengue infection, platelets decrease due to two primary factors: viral destruction of platelet precursors in the bone marrow and elevated peripheral immune clearance, where infected blood vessels consume platelets faster than the body can produce them.'
        },
        {
          heading: '5. Warning signs of low platelets / severe dengue',
          content: [
            'Petechiae: Tiny red or purple spots appearing on the skin.',
            'Bleeding gums or nosebleeds (epistaxis).',
            'Unexplained bruising or purpura.',
            'Severe, persistent abdominal pain or tenderness.',
            'Persistent vomiting (3 or more episodes in 24 hours).'
          ],
          isWarning: true
        },
        {
          heading: '6. Symptoms that require urgent medical attention',
          content: [
            'Blood in vomit (hematemesis) or dark/tarry stools (melena).',
            'Difficulty breathing or rapid respiratory rate.',
            'Extreme fatigue, restlessness, or altered consciousness.',
            'Sudden drop in body temperature accompanied by clammy skin.'
          ],
          isWarning: true
        },
        {
          heading: '7. Importance of CBC and medical monitoring',
          content: 'Daily Complete Blood Count (CBC) tests are critical during the acute and critical phases of dengue (typically days 3 to 7 of illness). Monitoring hematocrit levels alongside platelet counts allows doctors to detect plasma leakage early.'
        },
        {
          heading: '8. Hydration and supportive care',
          content: 'Adequate oral fluid intake (ORSL solutions, coconut water, clear broths, and clean water) is the single most crucial non-pharmacological treatment for mild dengue, preserving blood volume and microvascular circulation.'
        },
        {
          heading: '9. What patients should avoid',
          content: [
            'NEVER take NSAIDs like Ibuprofen, Aspirin, or Naproxen, as they thin the blood and significantly escalate internal bleeding risks.',
            'Avoid heavy physical strain or contact sports during active recovery.',
            'Do not rely solely on unverified home remedies as a substitute for clinical monitoring.'
          ]
        },
        {
          heading: '10. When to seek emergency medical care',
          content: 'If platelet counts fall precipitously below 50,000/µL or if any warning signs (vomiting blood, mucosal bleeding, severe abdominal pain) appear, immediate hospital admission to a high-dependency or ICU unit is required for IV fluid resuscitation and close monitoring.'
        }
      ],
      keyTakeaways: [
        'Platelet monitoring via daily CBC tests is essential between Days 3 and 7 of fever.',
        'Hydration with oral rehydration solutions is critical to prevent plasma leakage.',
        'Avoid Aspirin and Ibuprofen to protect against internal bleeding risks.',
        'Prompt medical evaluation at a hospital is mandatory if warning signs manifest.'
      ]
    }
  },
  {
    id: 3,
    slug: 'warning-signs-heart-attack-women',
    title: 'Warning Signs of Heart Attack in Women You Should Never Ignore',
    category: 'CARDIOLOGY',
    disease: 'Coronary Artery Disease & Heart Care',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Heart attack symptoms in women often differ from classic chest pressure. Learn to identify subtle signs like extreme fatigue, jaw tightness, and exertional breathlessness.',
    author: 'Specialist Doctor',
    date: 'Sept 04, 2026',
    readingTime: '4 min read',
    fullContent: {
      introduction: 'Cardiovascular disease remains the leading health threat for women worldwide. While chest pain is the most recognized symptom of a heart attack, women are significantly more likely to experience non-chest pain symptoms that are easily overlooked or misdiagnosed.',
      sections: [
        {
          heading: '1. Why Heart Attacks present differently in women',
          content: 'Women often suffer from microvascular coronary disease (damage to smaller arterial branches), which produces subtle, diffuse discomfort rather than sharp localized crushing chest pain.'
        },
        {
          heading: '2. Unexplained Fatigue and Exhaustion',
          content: 'Sudden, profound weakness or exhaustion—similar to flu symptoms without a fever—that occurs during simple daily routines like making a bed or walking across a room.'
        },
        {
          heading: '3. Upper Body Discomfort & Radiating Pain',
          content: 'Aching, tightness, or pressure radiating into the lower jaw, neck, upper back, or either arm (not exclusively the left arm).'
        },
        {
          heading: '4. Shortness of Breath & Nausea',
          content: 'Sudden exertional breathlessness without a cough, often accompanied by cold sweats, lightheadedness, or unexplained nausea misinterpreted as indigestion.'
        },
        {
          heading: '5. When to seek emergency cardiac care',
          content: 'If you or someone nearby experiences sudden unexplained shortness of breath, jaw or back pain, and cold perspiration, call emergency services (1800-MEDICARE) immediately.',
          isWarning: true
        }
      ],
      keyTakeaways: [
        'Women often experience non-chest symptoms during a heart attack.',
        'Jaw pain, back pressure, and unexplained fatigue require immediate evaluation.',
        'Early ECG and troponin diagnostic testing during the golden hour saves heart muscle.',
        'Regular cardiac health checkups are vital after age 40.'
      ]
    }
  },
  {
    id: 4,
    slug: 'tavi-vs-surgical-valve-replacement',
    title: 'TAVI vs Surgical Valve Replacement: Which is Right for You?',
    category: 'INTERVENTIONAL CARDIOLOGY',
    disease: 'Valvular Heart Disease',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Transcatheter Aortic Valve Implantation (TAVI) offers a minimally invasive alternative to open-heart valve surgery. Compare procedures, recovery times, and candidacy.',
    author: 'Specialist Doctor',
    date: 'Aug 28, 2026',
    readingTime: '6 min read',
    fullContent: {
      introduction: 'Aortic stenosis is a progressive narrowing of the heart’s aortic valve opening. Modern cardiology offers two primary intervention options: traditional open Surgical Aortic Valve Replacement (SAVR) and keyhole Transcatheter Aortic Valve Implantation (TAVI).',
      sections: [
        {
          heading: '1. What is TAVI?',
          content: 'TAVI is a minimally invasive catheter-based procedure where a new artificial valve is guided through a blood vessel in the groin and deployed inside the narrowed aortic valve without opening the chest.'
        },
        {
          heading: '2. What is Surgical Valve Replacement (SAVR)?',
          content: 'SAVR is a traditional open-heart operation where a cardiac surgeon opens the chest cavity, connects the patient to a heart-lung machine, removes the damaged valve, and sews a biological or mechanical replacement valve in place.'
        },
        {
          heading: '3. Comparing Recovery & Hospital Stay',
          content: [
            'TAVI Recovery: 2 to 4 days hospital stay, minimal surgical incision, rapid return to routine activities within 1 week.',
            'SAVR Recovery: 7 to 10 days hospital stay, 6 to 8 weeks chest bone healing time.'
          ]
        },
        {
          heading: '4. Multi-Disciplinary Heart Team Evaluation',
          content: 'Cardiologists and cardiac surgeons review patient age, anatomical CT Angiogram measurements, and surgical risk scores to tailor the optimal valve choice.'
        }
      ],
      keyTakeaways: [
        'TAVI allows aortic valve replacement without open-heart surgery.',
        'Minimally invasive approach results in shorter hospital stays and quicker recovery.',
        'Consult our Heart Team to determine if TAVI or SAVR is suitable for your valve health.'
      ]
    }
  },
  {
    id: 5,
    slug: '10-habits-lower-blood-pressure-naturally',
    title: '10 Daily Habits to Lower High Blood Pressure Naturally',
    category: 'PREVENTIVE CARDIOLOGY',
    disease: 'Hypertension Management',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'High blood pressure (hypertension) is a silent contributor to stroke and heart disease. Implement these 10 practical lifestyle strategies to keep BP within normal limits.',
    author: 'Specialist Doctor',
    date: 'Aug 15, 2026',
    readingTime: '5 min read',
    fullContent: {
      introduction: 'Hypertension affects over one billion adults worldwide. Because high blood pressure rarely exhibits early symptoms, consistent home BP monitoring and proactive lifestyle modifications are essential to preserve arterial vascular health.',
      sections: [
        {
          heading: '1. Reduce Sodium Intake',
          content: 'Limit dietary sodium to under 2,000 mg (less than 1 teaspoon of salt) daily by reducing packaged foods and restaurant meals.'
        },
        {
          heading: '2. Adopt the DASH Diet',
          content: 'Eat foods rich in potassium, magnesium, and calcium, such as leafy greens, bananas, avocados, legumes, and unsalted nuts.'
        },
        {
          heading: '3. Engage in Daily Aerobic Exercise',
          content: 'Walking 30 minutes daily strengthens the cardiac muscle, enabling it to pump blood with less strain on arterial walls.'
        },
        {
          heading: '4. Maintain a Healthy Waist Circumference',
          content: 'Losing even 5 to 10 pounds can significantly lower systolic and diastolic blood pressure readings.'
        },
        {
          heading: '5. Limit Alcohol & Quit Smoking',
          content: 'Nicotine and excess alcohol cause immediate temporary spikes in blood pressure and contribute to long-term arterial stiffness.'
        }
      ],
      keyTakeaways: [
        'Sodium reduction and potassium-rich DASH diet naturally lower blood pressure.',
        'Regular aerobic exercise improves blood vessel elasticity.',
        'Routine BP screening helps prevent silent hypertensive heart damage.'
      ]
    }
  },
  {
    id: 6,
    slug: 'laser-hair-removal-hitech-city',
    title: 'Laser Hair Removal Treatment in Hitech City',
    category: 'DERMATOLOGY',
    disease: 'Aesthetic Skin & Hair Care',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Discover how US-FDA approved diode and Alexandrite laser hair removal technology provides safe, pain-free, and permanent reduction of unwanted hair with zero skin damage.',
    author: 'Dermatology Specialist',
    date: 'Sept 04, 2026',
    readingTime: '4 min read',
    fullContent: {
      introduction: 'Laser hair removal is one of the most popular non-invasive cosmetic dermatological procedures worldwide. Utilizing concentrated light beams aimed at hair follicles, laser energy destroys the melanin pigment responsible for hair growth without injuring surrounding epidermal tissue.',
      sections: [
        {
          heading: '1. How Laser Hair Removal Works',
          content: 'The laser emits a light wavelength that is selectively absorbed by the dark pigment (melanin) in the hair shaft. This thermal energy damages the hair follicle and delays future hair growth cycles.'
        },
        {
          heading: '2. Key Benefits of US-FDA Approved Lasers',
          content: [
            'Precision Targeting: Coarsely pigmentated hairs are selectively destroyed while surrounding skin remains untouched.',
            'Long-Lasting Smoothness: Achieve 85% to 95% permanent hair reduction after 6 to 8 sessions.',
            'Prevents In-Grown Hairs: Eliminates painful razor bumps, folliculitis, and skin darkening caused by waxing or shaving.'
          ]
        },
        {
          heading: '3. Number of Sessions Required',
          content: 'Because hair grows in distinct phases (Anagen, Catagen, Telogen), multiple sessions spaced 4 to 6 weeks apart are required to catch all active follicles in their growth stage.'
        }
      ],
      keyTakeaways: [
        'FDA-approved diode lasers offer safe, pain-free hair reduction.',
        'Requires 6 to 8 sessions for maximum permanent reduction.',
        'Prevents painful ingrown hairs and skin pigmentation.'
      ]
    }
  },
  {
    id: 7,
    slug: 'dermatosurgery-hitech-city-advanced-skin-care',
    title: 'Dermatosurgery in Hitech City | Advanced Skin Care',
    category: 'DERMATOLOGY',
    disease: 'Minor Surgical Skin Care',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Explore modern dermatosurgical procedures including electrocautery mole removal, cyst excision, scar revision, and radiofrequency skin tag removal.',
    author: 'Dermatology Specialist',
    date: 'Sept 02, 2026',
    readingTime: '5 min read',
    fullContent: {
      introduction: 'Dermatosurgery combines clinical dermatology with minor surgical expertise to diagnose, repair, and enhance skin tissue. Performed under sterile local anesthesia, these procedures treat both benign skin growths and complex dermatological conditions.',
      sections: [
        {
          heading: '1. Common Dermatosurgical Procedures',
          content: [
            'Radiofrequency Mole & Skin Tag Removal: Instant bloodless removal of unwanted moles and skin tags.',
            'Sebaceous Cyst & Lipoma Excision: Complete removal of benign subcutaneous lumps with minimal cosmetic scarring.',
            'Scar Revision & Punch Grafting: Rebuilding depressed acne scars or traumatic scars.'
          ]
        },
        {
          heading: '2. Post-Procedure Care',
          content: 'Apply prescribed antibiotic ointments, avoid direct sunlight, and protect the healing area with sterile dressings to ensure optimal cosmetic blending.'
        }
      ],
      keyTakeaways: [
        'Dermatosurgery clears moles, cysts, and scars safely.',
        'Performed under local anesthesia with minimal recovery downtime.'
      ]
    }
  },
  {
    id: 8,
    slug: 'psoriasis-care-hitech-city-symptoms',
    title: 'Psoriasis Care in Hitech City | Symptoms and Skin Health',
    category: 'DERMATOLOGY',
    disease: 'Chronic Skin Inflammation',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Understand chronic psoriasis symptoms, narrowband UVB phototherapy, and revolutionary biological antibody infusions delivering up to 100% skin clearance.',
    author: 'Dermatology Specialist',
    date: 'Aug 29, 2026',
    readingTime: '5 min read',
    fullContent: {
      introduction: 'Psoriasis is an autoimmune skin condition where rapid skin cell multiplication leads to red, scaly patches covered with silvery scales. Modern dermatological breakthroughs now allow long-term remission and clear skin.',
      sections: [
        {
          heading: '1. Symptoms of Plaque Psoriasis',
          content: 'Thickened red skin plaques appearing on elbows, knees, scalp, and lower back, often accompanied by severe itching or joint discomfort.'
        },
        {
          heading: '2. Advanced Biological Therapies',
          content: 'Targeted IL-17 and IL-23 inhibitor biological antibody injections selectively block inflammatory pathways, providing 90% to 100% clear skin without organ toxicity.'
        }
      ],
      keyTakeaways: [
        'Biologics and UVB phototherapy achieve clear skin in severe psoriasis.',
        'Early consultation prevents joint involvement (psoriatic arthritis).'
      ]
    }
  },
  {
    id: 9,
    slug: 'chemical-peel-treatment-hitech-city',
    title: 'Chemical Peel Treatment in Hitech City | Skin Rejuvenation',
    category: 'DERMATOLOGY',
    disease: 'Facial Skin Rejuvenation',
    image: 'https://images.unsplash.com/photo-1512290900673-70024fe74923?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Rejuvenate dull skin, diminish dark spots, and smooth fine lines with customized dermatological chemical peels tailored to your skin type.',
    author: 'Dermatology Specialist',
    date: 'Aug 25, 2026',
    readingTime: '4 min read',
    fullContent: {
      introduction: 'Chemical peeling involves applying a gentle dermatological acid solution to exfoliate dead surface skin layers, revealing fresh, radiant skin underneath.',
      sections: [
        {
          heading: '1. Types of Chemical Peels',
          content: [
            'Glycolic & Lactic Peels: Brightens dull skin tone and boosts hydration.',
            'Salicylic Peels: Unclogs pores and treats active acne & blackheads.',
            'TCA & Yellow Peels: Fades stubborn melasma and hyperpigmentation.'
          ]
        }
      ],
      keyTakeaways: [
        'Chemical peels exfoliate dead cells and boost collagen.',
        'Customized formulation prevents post-inflammatory hyperpigmentation.'
      ]
    }
  },
  {
    id: 10,
    slug: 'botox-treatment-wrinkles-hitech-city',
    title: 'Botox Treatment for Wrinkles in Hitech City | What to Expect',
    category: 'DERMATOLOGY',
    disease: 'Aesthetic Anti-Aging Care',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Smooth dynamic forehead lines, crow’s feet, and frown wrinkles with precision botulinum toxin micro-injections for a naturally youthful appearance.',
    author: 'Dermatology Specialist',
    date: 'Aug 20, 2026',
    readingTime: '5 min read',
    fullContent: {
      introduction: 'Botox (botulinum toxin type A) temporarily relaxes hyperactive facial muscles that cause deep wrinkles and frown lines during facial expressions.',
      sections: [
        {
          heading: '1. Target Areas for Botox',
          content: 'Forehead horizontal worry lines, glabella frown lines between eyebrows, and crow’s feet around the outer eyes.'
        },
        {
          heading: '2. Results & Duration',
          content: 'Visible smoothing appears within 3 to 7 days, reaching peak efficacy at 14 days and lasting 4 to 6 months.'
        }
      ],
      keyTakeaways: [
        'Quick 15-minute OPD procedure with zero downtime.',
        'Smooths frown lines while maintaining natural facial expressions.'
      ]
    }
  }
];

export const getArticleBySlug = (slug: string): DetailedHealthArticle | undefined => {
  const found = HEALTH_ARTICLES_LIST.find(
    (art) => art.slug === slug || String(art.id) === slug
  );
  if (found) return found;

  // Fallback for dynamically generated slug matching
  const formattedTitle = slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  return {
    id: slug,
    slug: slug,
    title: formattedTitle,
    category: 'MEDICAL INSIGHTS',
    disease: 'Specialty Healthcare Guide',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    shortDescription: `Comprehensive medical insights and specialist recommendations regarding ${formattedTitle}.`,
    author: 'Specialist Doctor',
    date: 'Recent Update',
    readingTime: '5 min read',
    fullContent: {
      introduction: `Understanding ${formattedTitle} is crucial for maintaining optimal personal health. Our specialist medical team provides evidence-based guidelines and clinical expertise.`,
      sections: [
        {
          heading: `1. Overview of ${formattedTitle}`,
          content: 'Early diagnostic evaluation and personalized treatment protocols ensure the highest quality of clinical care and long-term recovery outcomes.'
        },
        {
          heading: '2. Key Clinical Considerations',
          content: 'Consulting with senior medical consultants allows accurate disease mapping, precise diagnostic testing, and targeted therapeutic interventions.'
        },
        {
          heading: '3. Preventive & Lifestyle Measures',
          content: 'Incorporate balanced nutrition, regular physical activity, and routine health checkups to maintain optimal well-being.'
        }
      ],
      keyTakeaways: [
        'Early consultation leads to superior treatment outcomes.',
        'Evidence-based care protocols protect long-term health.',
        'Always consult your physician for personalized medical advice.'
      ]
    }
  };
};

export const getAllHealthArticles = (): DetailedHealthArticle[] => {
  return HEALTH_ARTICLES_LIST;
};
