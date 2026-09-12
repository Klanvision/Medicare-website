import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Navigation, ArrowRight, Building2, Phone, ExternalLink } from 'lucide-react';
import vignaharataHospitalImg from '../../../Images/vignaharata_hospital.png';

export const HospitalsNearYouMedicover: React.FC = () => {
  const [activeState, setActiveState] = useState<'telangana' | 'andhra' | 'maharashtra' | 'karnataka' | 'clinics'>('telangana');

  const hospitalsData = {
    telangana: [
      {
        name: 'MEDICARE Hospitals — Hitech City',
        city: 'Hyderabad',
        type: 'Quaternary Multi-Speciality',
        address: 'HUDA Techno Enclave, Hitech City, Hyderabad, Telangana 500081',
        mapUrl: 'https://maps.google.com/?q=MEDICARE+Hospitals+Hitech+City+Hyderabad',
        image: '/images/hospitals/medicare-hospitals-hitech-city.jpg',
      },
      {
        name: 'MEDICARE Cancer Institute — Hitech City',
        city: 'Hyderabad',
        type: 'Super-Specialty Cancer Center',
        address: 'Opp. Cyber Towers, Hitech City, Hyderabad, Telangana 500081',
        mapUrl: 'https://maps.google.com/?q=MEDICARE+Cancer+Institute+Hyderabad',
        image: '/images/hospitals/cancer-institute-hitech-city.jpg',
      },
      {
        name: 'MEDICARE Hospitals — Financial District',
        city: 'Kokapet, Hyderabad',
        type: '24-Floor Quaternary Hospital',
        address: 'Nanakramguda Road, Financial District, Gachibowli, Hyderabad 500032',
        mapUrl: 'https://maps.google.com/?q=MEDICARE+Hospitals+Financial+District+Hyderabad',
        image: '/images/hospitals/financial-district-hospital.jpg',
      },
      {
        name: 'MEDICARE Women & Child Hospital — Shilparamam',
        city: 'Hyderabad',
        type: 'Mother & Child Care Institute',
        address: 'Next to Shilparamam, Hitech City Main Rd, Madhapur, Hyderabad 500081',
        mapUrl: 'https://maps.google.com/?q=MEDICARE+Women+and+Child+Hospital+Hyderabad',
        image: '/images/hospitals/women-child-hospital-shilparamam.jpg',
      },
      {
        name: 'MEDICARE Hospitals — Secunderabad',
        city: 'Secunderabad',
        type: 'Multi-Speciality Hospital',
        address: 'Opp. Railway Station, SD Road, Secunderabad 500003',
        mapUrl: 'https://maps.google.com/?q=MEDICARE+Hospitals+Secunderabad',
        image: '/images/hospitals/medicare-hospitals-hitech-city.jpg',
      },
      {
        name: 'MEDICARE Hospitals — Chandanagar',
        city: 'Chandanagar',
        type: 'Multi-Speciality Hospital',
        address: 'NH-65, Near Gangaram, Chandanagar, Hyderabad 500050',
        mapUrl: 'https://maps.google.com/?q=MEDICARE+Hospitals+Chandanagar',
        image: '/images/hospitals/hospital-chandanagar.jpg',
      },
      {
        name: 'MEDICARE Hospitals — Nizamabad',
        city: 'Nizamabad',
        type: 'Multi-Speciality Hospital',
        address: 'Yellammagutta Road, Nizamabad, Telangana 503001',
        mapUrl: 'https://maps.google.com/?q=MEDICARE+Hospitals+Nizamabad',
        image: '/images/hospitals/financial-district-hospital.jpg',
      },
      {
        name: 'MEDICARE Hospitals — Warangal',
        city: 'Warangal',
        type: 'Multi-Speciality Hospital',
        address: 'Hunter Road, Subedari, Warangal, Telangana 506001',
        mapUrl: 'https://maps.google.com/?q=MEDICARE+Hospitals+Warangal',
        image: '/images/hospitals/hospital-warangal.jpg',
      },
    ],
    andhra: [
      {
        name: 'MEDICARE Hospitals — MVP Colony',
        city: 'Visakhapatnam',
        type: 'Multi-Speciality (50+ Specialties)',
        address: 'Sector 5, MVP Colony, Visakhapatnam, Andhra Pradesh 530017',
        mapUrl: 'https://maps.google.com/?q=MEDICARE+Hospitals+MVP+Visakhapatnam',
        image: '/images/hospitals/medicare-hospitals-hitech-city.jpg',
      },
      {
        name: 'MEDICARE Cancer Institute — Arilova',
        city: 'Visakhapatnam',
        type: 'Super-Specialty Cancer Center',
        address: 'Health City, Arilova, Visakhapatnam, Andhra Pradesh 530040',
        mapUrl: 'https://maps.google.com/?q=MEDICARE+Cancer+Institute+Visakhapatnam',
        image: '/images/hospitals/cancer-institute-hitech-city.jpg',
      },
      {
        name: 'MEDICARE Hospitals — Kurnool',
        city: 'Kurnool',
        type: 'Multi-Speciality Hospital',
        address: 'Sampath Nagar, Kurnool, Andhra Pradesh 518003',
        mapUrl: 'https://maps.google.com/?q=MEDICARE+Hospitals+Kurnool',
        image: '/images/hospitals/hospital-chandanagar.jpg',
      },
      {
        name: 'MEDICARE Hospitals — Nellore',
        city: 'Nellore',
        type: 'Multi-Speciality & Cancer Institute',
        address: 'Pogathota, Nellore, Andhra Pradesh 524001',
        mapUrl: 'https://maps.google.com/?q=MEDICARE+Hospitals+Nellore',
        image: '/images/hospitals/hospital-warangal.jpg',
      },
    ],
    maharashtra: [
      {
        name: 'MEDICARE Hospitals — Pune',
        city: 'Pimpri-Chinchwad',
        type: 'Multi-Speciality Hospital',
        address: 'Old Mumbai-Pune Highway, Chinchwad, Pune, Maharashtra 411019',
        mapUrl: 'https://maps.google.com/?q=MEDICARE+Hospitals+Pune',
        image: '/images/hospitals/financial-district-hospital.jpg',
      },
      {
        name: 'MEDICARE Hospitals — Navi Mumbai',
        city: 'Kharghar',
        type: 'Quaternary Multi-Speciality',
        address: 'Sector 23, Kharghar, Navi Mumbai, Maharashtra 410210',
        mapUrl: 'https://maps.google.com/?q=MEDICARE+Hospitals+Navi+Mumbai',
        image: '/images/hospitals/medicare-hospitals-hitech-city.jpg',
      },
      {
        name: 'MEDICARE Hospitals — Nashik',
        city: 'Parab Nagar',
        type: 'Multi-Speciality Hospital',
        address: 'Ashoka Marg, Parab Nagar, Nashik, Maharashtra 422006',
        mapUrl: 'https://maps.google.com/?q=MEDICARE+Hospitals+Nashik',
        image: '/images/hospitals/women-child-hospital-shilparamam.jpg',
      },
      {
        name: 'MEDICARE Hospitals — Chh. Sambhajinagar',
        city: 'CIDCO',
        type: 'Multi-Speciality Hospital',
        address: 'Jalna Road, CIDCO, Chhatrapati Sambhajinagar, Maharashtra 431003',
        mapUrl: 'https://maps.google.com/?q=MEDICARE+Hospitals+Chhatrapati+Sambhajinagar',
        image: '/images/hospitals/hospital-chandanagar.jpg',
      },
    ],
    karnataka: [
      {
        name: 'MEDICARE Hospitals — Bengaluru',
        city: 'Whitefield',
        type: 'Best Hospital in Whitefield',
        address: '351 ITPL Main Road, Whitefield Road, Hoodi Village, Bengaluru 560048',
        mapUrl: 'https://maps.google.com/?q=MEDICARE+Hospitals+Whitefield+Bengaluru',
        image: '/images/hospitals/medicare-hospitals-hitech-city.jpg',
      },
      {
        name: 'MEDICARE Women & Child Hospital',
        city: 'Bengaluru',
        type: 'Mother & Child Care Unit',
        address: 'ITPL Main Rd, Whitefield, Bengaluru, Karnataka 560066',
        mapUrl: 'https://maps.google.com/?q=MEDICARE+Women+and+Child+Hospital+Bengaluru',
        image: '/images/hospitals/women-child-hospital-shilparamam.jpg',
      },
    ],
    clinics: [
      {
        name: 'Medicare Outpatient Clinic — Gachibowli',
        city: 'Hyderabad',
        type: 'OPD & Diagnostics',
        address: 'Gachibowli X Roads, Hyderabad, Telangana 500032',
        mapUrl: 'https://maps.google.com/?q=Medicare+Clinic+Gachibowli',
        image: '/images/hospitals/financial-district-hospital.jpg',
      },
      {
        name: 'Medicare Day Care & Diagnostic Center',
        city: 'Pune',
        type: 'Advanced Pathology & Imaging',
        address: 'Aundh, Pune, Maharashtra 411007',
        mapUrl: 'https://maps.google.com/?q=Medicare+Diagnostic+Center+Pune',
        image: '/images/hospitals/hospital-chandanagar.jpg',
      },
    ],
  };

  const currentHospitals = hospitalsData[activeState];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
        <div className="space-y-1">
          <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-extrabold uppercase tracking-wider">
            Pan-India Network
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Find a MEDICARE Hospital Near You
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            26+ Hospital Campuses across Telangana, Andhra Pradesh, Maharashtra, and Karnataka.
          </p>
        </div>

        {/* State Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 bg-slate-100 p-1.5 rounded-2xl scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveState('telangana')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
              activeState === 'telangana' ? 'bg-sky-600 text-white shadow-md' : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            Telangana
          </button>
          <button
            type="button"
            onClick={() => setActiveState('andhra')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
              activeState === 'andhra' ? 'bg-sky-600 text-white shadow-md' : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            Andhra Pradesh
          </button>
          <button
            type="button"
            onClick={() => setActiveState('maharashtra')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
              activeState === 'maharashtra' ? 'bg-sky-600 text-white shadow-md' : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            Maharashtra
          </button>
          <button
            type="button"
            onClick={() => setActiveState('karnataka')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
              activeState === 'karnataka' ? 'bg-sky-600 text-white shadow-md' : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            Karnataka
          </button>
          <button
            type="button"
            onClick={() => setActiveState('clinics')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
              activeState === 'clinics' ? 'bg-sky-600 text-white shadow-md' : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            Clinics
          </button>
        </div>
      </div>

      {/* Grid of Hospital Locations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentHospitals.map((hsp) => (
          <div
            key={hsp.name}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="relative h-44 overflow-hidden">
                <img
                  src={hsp.image}
                  alt={hsp.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-extrabold uppercase">
                  {hsp.city}
                </span>
              </div>

              <div className="p-5 space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-600 block">
                  {hsp.type}
                </span>
                <h3 className="text-sm font-extrabold text-slate-900 leading-snug group-hover:text-sky-600 transition-colors">
                  {hsp.name}
                </h3>
                <p className="text-[11px] text-slate-500 font-normal leading-relaxed line-clamp-2">
                  {hsp.address}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0 space-y-2">
              <a
                href={hsp.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 font-extrabold text-xs flex items-center justify-center gap-1.5 transition-colors border border-sky-200"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3 text-sky-400" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-2">
        <Link
          to="/hospitals"
          className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-xs flex items-center gap-2 shadow-md transition-all"
        >
          <span>Explore All 26 Hospital Campuses</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};
