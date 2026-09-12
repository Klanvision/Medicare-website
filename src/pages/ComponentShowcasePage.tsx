import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, User, Phone, Search, Bell, AlertCircle, Info, Sparkles, CheckCircle2, RefreshCw } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Select } from '@/components/common/Select';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/common/Card';
import { Modal } from '@/components/common/Modal';
import { Badge } from '@/components/common/Badge';
import { Spinner, Skeleton, PageLoader } from '@/components/common/Loading';
import { ErrorState } from '@/components/common/ErrorState';
import { EmptyState } from '@/components/common/EmptyState';
import { Logo } from '@/components/common/Logo';
import { useToast } from '@/hooks/useToast';

interface FormDemoValues {
  patientName: string;
  email: string;
  department: string;
}

export const ComponentShowcasePage: React.FC = () => {
  const toast = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFullPageLoader, setShowFullPageLoader] = useState(false);
  const [shouldTriggerError, setShouldTriggerError] = useState(false);

  // React Hook Form test
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDemoValues>();

  const onSubmitForm = (data: FormDemoValues) => {
    toast.success(`Form submitted for ${data.patientName} (${data.department})!`, 'OPD Registration Test');
    reset();
  };

  if (shouldTriggerError) {
    throw new Error('Test Runtime Error triggered to verify Error Boundary component!');
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header Info */}
      <div className="border-b border-gray-200 pb-8 space-y-3">
        <div className="flex items-center gap-3">
          <Badge variant="gold" size="md">Phase 1 Foundation</Badge>
          <Badge variant="teal" size="md">UI Design System</Badge>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900">
          MEDICARE UI System & Component Showcase
        </h1>
        <p className="text-gray-600 text-sm sm:text-base max-w-3xl">
          Interactive verification suite for all 24 foundation deliverables. Test buttons, inputs, cards, modals, toast alerts, error states, and responsive layout primitives.
        </p>
      </div>

      {/* Section 1: Logo & Brand Assets */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-navy-900 flex items-center gap-2 border-b pb-2">
          <Sparkles className="w-5 h-5 text-gold-600" />
          1. Brand Logo System
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Light Theme Logos</h4>
            <div className="flex flex-col gap-4">
              <Logo variant="dark" size="sm" showTagline={false} />
              <Logo variant="dark" size="md" showTagline={true} />
              <Logo variant="dark" size="lg" showTagline={true} />
            </div>
          </Card>

          <Card variant="navy" className="p-6 space-y-4">
            <h4 className="text-xs font-bold text-gold-400 uppercase tracking-wider">Dark Theme Logos</h4>
            <div className="flex flex-col gap-4">
              <Logo variant="light" size="sm" showTagline={false} />
              <Logo variant="light" size="md" showTagline={true} />
              <Logo variant="light" size="lg" showTagline={true} />
            </div>
          </Card>
        </div>
      </section>

      {/* Section 2: Reusable Buttons */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-navy-900 border-b pb-2">
          2. Reusable Button Components (Variants & Sizes)
        </h2>
        <Card className="p-6 space-y-6">
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-500 uppercase">Button Variants</h4>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary Navy</Button>
              <Button variant="teal">Healthcare Teal</Button>
              <Button variant="gold">Premium Gold</Button>
              <Button variant="secondary">Secondary Gray</Button>
              <Button variant="outline">Outline Navy</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="danger">Danger Red</Button>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t">
            <h4 className="text-xs font-bold text-gray-500 uppercase">Sizes & Icons</h4>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="teal" size="sm" leftIcon={<Bell className="w-3.5 h-3.5" />}>
                Small Button
              </Button>
              <Button variant="teal" size="md" leftIcon={<Mail className="w-4 h-4" />}>
                Medium Button
              </Button>
              <Button variant="teal" size="lg" rightIcon={<Sparkles className="w-5 h-5" />}>
                Large Button
              </Button>
              <Button variant="gold" isLoading>
                Loading State
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Section 3: Inputs & Select Forms */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-navy-900 border-b pb-2">
          3. Form Controls (Input, Select, React Hook Form)
        </h2>
        <Card className="p-6">
          <form onSubmit={handleSubmit(onSubmitForm)} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Input
              label="Full Patient Name"
              placeholder="e.g. Rahul Sharma"
              startIcon={<User className="w-4 h-4" />}
              error={errors.patientName?.message}
              {...register('patientName', { required: 'Patient name is required' })}
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="e.g. rahul@example.com"
              startIcon={<Mail className="w-4 h-4" />}
              error={errors.email?.message}
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
              })}
            />

            <Select
              label="Select Medical Department"
              error={errors.department?.message}
              {...register('department', { required: 'Please select a department' })}
              options={[
                { value: '', label: '-- Choose Specialty --' },
                { value: 'Cardiology', label: 'Cardiology & Heart Care' },
                { value: 'Neurology', label: 'Neurology & Brain Sciences' },
                { value: 'Orthopedics', label: 'Orthopedics & Joint Surgery' },
                { value: 'Oncology', label: 'Oncology (Cancer Care)' },
                { value: 'Pediatrics', label: 'Pediatric Medicine' },
              ]}
            />

            <div className="md:col-span-3 flex items-center gap-3 pt-2">
              <Button type="submit" variant="gold" leftIcon={<CheckCircle2 className="w-4 h-4" />}>
                Test Form Validation & Submit
              </Button>
              <Button variant="ghost" onClick={() => reset()}>
                Reset Form
              </Button>
            </div>
          </form>
        </Card>
      </section>

      {/* Section 4: Toast System */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-navy-900 border-b pb-2">
          4. Global Toast Notification System
        </h2>
        <Card className="p-6 space-y-4">
          <p className="text-xs text-gray-500">
            Click any button to dispatch floating toast alerts with auto-dismiss timers and exit animations:
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="teal"
              size="sm"
              onClick={() => toast.success('Appointment booking slot confirmed for 10:30 AM.', 'Success Alert')}
            >
              Trigger Success Toast
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={() => toast.error('Unable to connect to server. Retrying...', 'Network Failure')}
            >
              Trigger Error Toast
            </Button>
            <Button
              variant="gold"
              size="sm"
              onClick={() => toast.warning('OPD registration hours end at 8:00 PM.', 'Timings Notice')}
            >
              Trigger Warning Toast
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => toast.info('New diagnostic report ready in patient portal.', 'Info Update')}
            >
              Trigger Info Toast
            </Button>
          </div>
        </Card>
      </section>

      {/* Section 5: Cards & Badges */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-navy-900 border-b pb-2">
          5. Badges & Card System
        </h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-bold text-gray-500 mr-2">Badges:</span>
            <Badge variant="teal">Teal Badge</Badge>
            <Badge variant="gold" dot>Gold Badge</Badge>
            <Badge variant="navy">Navy Badge</Badge>
            <Badge variant="success" dot>Success Dot</Badge>
            <Badge variant="warning">Warning Badge</Badge>
            <Badge variant="danger" dot>Danger Dot</Badge>
            <Badge variant="outline">Outline Badge</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <Card hoverEffect accentGoldTop>
              <CardHeader>
                <Badge variant="teal" size="sm">Hover Card</Badge>
                <CardTitle>Accent Top Gold Card</CardTitle>
                <CardDescription>Hover over this card to view smooth lift and teal shadow glow.</CardDescription>
              </CardHeader>
              <CardContent>
                Card components support modular composition with CardHeader, CardTitle, CardContent, and CardFooter.
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">Action</Button>
              </CardFooter>
            </Card>

            <Card variant="glass">
              <CardHeader>
                <Badge variant="gold" size="sm">Glassmorphism</Badge>
                <CardTitle>Glass Card Styling</CardTitle>
                <CardDescription>Backdrop blur and subtle frosted border styling.</CardDescription>
              </CardHeader>
              <CardContent>
                Ideal for overlay panels and high-emphasis visual elements.
              </CardContent>
            </Card>

            <Card variant="navy" accentGoldTop>
              <CardHeader>
                <Badge variant="gold" size="sm">Deep Navy</Badge>
                <CardTitle className="text-white">Dark Navy Card</CardTitle>
                <CardDescription className="text-gray-400">High contrast for emergency alerts.</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                Matches the MEDICARE Health Systems dark palette tokens.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 6: Modal, Loading, Error State, Empty State */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-navy-900 border-b pb-2">
          6. Modal Dialogs, Loaders, Error & Empty States
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Modal & Full Page Loader Controls */}
          <Card className="p-6 space-y-4">
            <h3 className="text-lg font-bold text-navy-900">Modal & Loader Controls</h3>
            <p className="text-xs text-gray-500">
              Test Framer Motion modal overlay with ESC key closing, body scroll locks, and page loader overlay.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="gold" onClick={() => setIsModalOpen(true)}>
                Open Accessible Modal
              </Button>
              <Button
                variant="teal"
                onClick={() => {
                  setShowFullPageLoader(true);
                  setTimeout(() => setShowFullPageLoader(false), 2500);
                }}
              >
                Test 2.5s Page Loader Overlay
              </Button>
            </div>

            <div className="pt-4 space-y-2 border-t">
              <h4 className="text-xs font-bold text-gray-500">Skeleton Loaders:</h4>
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-10 w-full" />
            </div>
          </Card>

          {/* Interactive Error Boundary Trigger */}
          <Card className="p-6 space-y-4 border-red-200 bg-red-50/30">
            <h3 className="text-lg font-bold text-navy-900 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              Error Boundary Testing
            </h3>
            <p className="text-xs text-gray-600">
              Clicking below will intentionally throw an unhandled JavaScript error to test the React Error Boundary fallback screen and recovery.
            </p>
            <Button variant="danger" size="sm" onClick={() => setShouldTriggerError(true)}>
              Trigger Controlled Runtime Error
            </Button>
          </Card>
        </div>

        {/* Inline Error State Demonstration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div>
            <h4 className="text-sm font-bold text-navy-900 mb-3">Inline Error State Component:</h4>
            <ErrorState
              title="Diagnostic Report Service Unavailable"
              message="The server did not respond within the allocated timeout window. Click retry to attempt re-fetching."
              onRetry={() => toast.info('Retry request initiated...', 'Retrying')}
            />
          </div>

          <div>
            <h4 className="text-sm font-bold text-navy-900 mb-3">Empty State Component:</h4>
            <EmptyState
              title="No Upcoming OPD Appointments"
              description="You currently have no scheduled OPD appointments for the selected date range."
              actionLabel="Book New Appointment"
              onAction={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </section>

      {/* Demo Modal Dialog Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Interactive Modal Component"
        description="Framer Motion animated dialog window with accessible overlay."
      >
        <div className="space-y-4">
          <p className="text-sm text-navy-800">
            This modal supports custom sizes (<code className="bg-gray-100 px-1 py-0.5 rounded text-teal-700">sm, md, lg, xl</code>), ESC key escape listener, body scroll lock, and Framer Motion backdrop transitions.
          </p>
          <Input label="Modal Input Test" placeholder="Type inside modal..." />
          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="teal" onClick={() => setIsModalOpen(false)}>
              Confirm Action
            </Button>
          </div>
        </div>
      </Modal>

      {/* Full Page Loader Test Overlay */}
      {showFullPageLoader && <PageLoader message="Testing MEDICARE Health Systems Full Page Loader..." />}
    </div>
  );
};
