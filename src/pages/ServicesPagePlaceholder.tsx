import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Activity, Brain, Bone, ShieldCheck, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';

export const ServicesPagePlaceholder: React.FC = () => {
  const specialties = [
    {
      id: 'emergency',
      name: '24/7 Emergency & Critical Care',
      desc: 'Level-1 Emergency Trauma suite, instant ambulance dispatch, and round-the-clock intensive care physicians.',
      icon: <ShieldCheck className="w-6 h-6 text-red-500" />,
      badge: '24/7 Level-1',
    },
    {
      id: 'cardiology',
      name: 'Cardiology & Vascular Surgery',
      desc: 'Advanced Cath Lab, angioplasty, electrophysiology, and open-heart surgical procedures.',
      icon: <HeartPulse className="w-6 h-6 text-teal-600" />,
      badge: 'Excellence Center',
    },
    {
      id: 'neurology',
      name: 'Neurology & Brain Sciences',
      desc: 'Comprehensive stroke management, neuro-intervention, brain tumor surgery, and spine care.',
      icon: <Brain className="w-6 h-6 text-navy-900" />,
      badge: 'Advanced Neuro',
    },
    {
      id: 'orthopedics',
      name: 'Orthopedics & Joint Replacement',
      desc: 'Robotic knee & hip replacement, sports medicine rehabilitation, and complex fracture surgery.',
      icon: <Bone className="w-6 h-6 text-gold-600" />,
      badge: 'Robotic Surgery',
    },
    {
      id: 'oncology',
      name: 'Comprehensive Cancer Care',
      desc: 'Multidisciplinary tumor board, medical oncology, targeted chemotherapy, and precision radiotherapy.',
      icon: <Activity className="w-6 h-6 text-emerald-600" />,
      badge: 'Integrated Board',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="teal" size="md">Medical Specialties</Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900">
          Centers of Excellence & Clinical Departments
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          MEDICARE Hospitals provides world-class multi-specialty clinical care powered by state-of-the-art diagnostic technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {specialties.map((spec) => (
          <Card key={spec.id} id={spec.id} hoverEffect accentGoldTop>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="p-3 bg-gray-50 rounded-xl">{spec.icon}</div>
                <Badge variant="gold" size="sm">{spec.badge}</Badge>
              </div>
              <CardTitle>{spec.name}</CardTitle>
              <CardDescription>{spec.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/appointments">
                <Button variant="ghost" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Book OPD Appointment
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
