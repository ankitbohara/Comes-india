import type { Service, ProcessStep, FaqItem } from '../types';

export const SERVICES: Service[] = [
  { id:'s1', num:'01', title:'Professional On-Site Installation',
    description:'Safe, precise machine setup across India. COMES-certified technicians handle full alignment, calibration, and performance testing.',
    image:'https://comesindia.com/wp-content/uploads/2025/07/istockphoto-2162099414-612x612-1.jpg',
    bullets:['COMES-Certified Technicians','New Installations & Retrofits','Full Operational Testing'] },
  { id:'s2', num:'02', title:'Original Spare Parts',
    description:'100% genuine COMES Italy parts — gears, holders, rings, bearings, seals — stocked in India for 24–48 hr dispatch.',
    image:'https://comesindia.com/wp-content/uploads/2025/07/images-4.jpeg',
    bullets:['Ready-to-Ship Inventory','Verified Fitment Support','Gears, Holders, Rings, Seals'] },
  { id:'s3', num:'03', title:'Emergency Breakdown Repairs',
    description:'24×7 rapid response. Mobile repair teams with parts and tools to minimise costly downtime.',
    image:'https://comesindia.com/wp-content/uploads/2025/07/inspection-reporting-system-scal-1-1024x683.jpg',
    bullets:['24/7 Technical Hotline','Mobile Repair Vans','Quick Fault Diagnosis'] },
  { id:'s4', num:'04', title:'Expert Troubleshooting',
    description:'Deep mechanical and electrical issue mapping, load-pressure-rotation testing, and detailed diagnostic reporting.',
    image:'https://comesindia.com/wp-content/uploads/2025/07/images-5.jpeg',
    bullets:['Mechanical & Electrical Mapping','Load & Pressure Testing','Detailed Diagnostic Reports'] },
  { id:'s5', num:'05', title:'Calibration & Testing',
    description:'On-site calibration for head pressure, speed, alignment, and vibration — optimised per stone type and machine model.',
    image:'https://comesindia.com/wp-content/uploads/2025/07/images-7.jpeg',
    bullets:['Pressure & Torque Adjustments','Performance Benchmarking','Post-Calibration Certification'] },
  { id:'s6', num:'06', title:'Remote Video Assistance',
    description:'Instant live visual guidance in Hindi or English. Our team walks operators through repairs step-by-step, remotely.',
    image:'https://comesindia.com/wp-content/uploads/2025/07/images-6.jpeg',
    bullets:['Step-by-Step Visual Support','Hindi/English Available','Works with Mobile or CCTV'] },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { num:'01', title:'Requirement Analysis', items:['On-site condition check','Technical documentation','Spare / upgrade suggestions'] },
  { num:'02', title:'Installation & Setup',  items:['Head installation','Seal & ring assembly','Retrofit to existing lines'] },
  { num:'03', title:'Spare Part Replacement',items:['Fast from Indian warehouse','On-site / guided fitting','Alignment check'] },
  { num:'04', title:'Preventive Maintenance',items:['Greasing & cleaning','Motor & pressure tuning','Wear & tear control'] },
  { num:'05', title:'Calibration & Testing', items:['Digital calibration tools','Polishing output validation','Performance certification'] },
];

export const FAQS: FaqItem[] = [
  { q:'How do I know which COMES spare part is right for my machine?',
    a:"Share your machine model (e.g., HTS6-V12, STORM5) and the issue. Our technical team will identify the exact part using our compatibility database and service history." },
  { q:'Do you offer installation support across all of India?',
    a:'Yes. We provide on-site installation services PAN India through our certified engineers, including setup, alignment, and complete performance testing.' },
  { q:'How fast can I get a spare part delivered?',
    a:'We stock most critical parts — seals, gears, holders — in India. Orders are dispatched within 24–48 hours depending on your location.' },
  { q:"What if I need urgent support but can't get an engineer on-site?",
    a:'We offer Remote Video Assistance where our technicians guide your staff through live video troubleshooting until the issue is resolved or a visit is scheduled.' },
  { q:'Are all spare parts original COMES Italy certified?',
    a:'Yes. Every part we supply is 100% original COMES Italy — tested for compatibility, durability, and long life. We never use third-party substitutes.' },
];
