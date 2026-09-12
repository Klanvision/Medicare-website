import React, { useState } from 'react';
import { Ambulance, PhoneCall, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Modal } from '@/components/common/Modal';
import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { emergencyService, AmbulanceDispatchResponse } from '@/services/emergencyService';
import { EmergencyCentreItem } from '@/data/emergencyData';

interface EmergencyDispatchModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCentre?: EmergencyCentreItem | null;
}

export const EmergencyDispatchModal: React.FC<EmergencyDispatchModalProps> = ({
  isOpen,
  onClose,
  selectedCentre,
}) => {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [emergencyType, setEmergencyType] = useState('Cardiac / Chest Pain');
  const [city, setCity] = useState(selectedCentre?.city || 'Pune');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dispatchResult, setDispatchResult] = useState<AmbulanceDispatchResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !phone || !pickupLocation) return;

    setIsSubmitting(true);
    try {
      const res = await emergencyService.requestAmbulanceDispatch({
        patientName,
        phone,
        pickupLocation,
        emergencyType,
        city,
      });
      setDispatchResult(res);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setDispatchResult(null);
    setPatientName('');
    setPhone('');
    setPickupLocation('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title="Request 24/7 ICU Ambulance Dispatch"
      description="Direct telemetry connection with mobile intensive care unit dispatch desk."
    >
      {!dispatchResult ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="p-3 bg-red-50 rounded-xl flex items-center gap-2 text-xs text-red-900 border border-red-200">
            <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
            <span>For life-threatening cardiac arrest or severe trauma, call central hotline directly: <strong>1800-VIGHNA</strong></span>
          </div>

          <Input
            label="Patient Full Name"
            placeholder="e.g., Rajesh Sharma"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />

          <Input
            label="Emergency Contact Phone"
            placeholder="e.g., +91 98234 56789"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <Input
            label="Exact Pickup Address / Landmark"
            placeholder="e.g., House 14, Lotus Park, Sector 15 Road, Pune"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            required
          />

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-navy-900 mb-1">Emergency Condition</label>
              <select
                value={emergencyType}
                onChange={(e) => setEmergencyType(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-xs font-semibold focus:ring-2 focus:ring-teal-600 focus:outline-none"
              >
                <option value="Cardiac / Chest Pain">Cardiac / Chest Pain</option>
                <option value="Stroke / Paralysis">Stroke / Brain Seizure</option>
                <option value="Polytrauma / Fracture">Polytrauma / Fracture</option>
                <option value="Respiratory Distress">Severe Breathing Difficulty</option>
                <option value="Pediatric Emergency">Pediatric / High Fever</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-navy-900 mb-1">City Location</label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-xs font-semibold focus:ring-2 focus:ring-teal-600 focus:outline-none"
              >
                <option value="Pune">Pune Sector 15</option>
                <option value="Mumbai">Mumbai Bandra East</option>
              </select>
            </div>
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="danger"
              fullWidth
              isLoading={isSubmitting}
              leftIcon={<Ambulance className="w-4 h-4" />}
            >
              DISPATCH AMBULANCE NOW
            </Button>
          </div>
        </form>
      ) : (
        <div className="space-y-4 py-2">
          <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl space-y-2 text-center">
            <CheckCircle2 className="w-10 h-10 text-teal-600 mx-auto animate-bounce" />
            <Badge variant="teal" size="sm">DISPATCH CONFIRMED</Badge>
            <h3 className="text-xl font-black text-navy-900">Ambulance En Route</h3>
            <p className="text-xs text-gray-600">{dispatchResult.message}</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-xl space-y-2 text-xs text-navy-900">
            <div className="flex justify-between border-b pb-1">
              <span className="text-gray-500 font-medium">Tracking Ticket ID:</span>
              <strong className="font-mono text-teal-700">{dispatchResult.ticketId}</strong>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="text-gray-500 font-medium">Assigned Unit:</span>
              <strong>{dispatchResult.assignedAmbulance}</strong>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="text-gray-500 font-medium">Estimated Arrival:</span>
              <strong className="text-red-600 font-bold">{dispatchResult.estimatedArrivalMinutes} Minutes</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 font-medium">Onboard Paramedic:</span>
              <strong>{dispatchResult.paramedicContact}</strong>
            </div>
          </div>

          <Button variant="gold" fullWidth onClick={handleReset}>
            Done & Track Status
          </Button>
        </div>
      )}
    </Modal>
  );
};
