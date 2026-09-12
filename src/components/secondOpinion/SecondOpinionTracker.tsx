import React, { useState } from 'react';
import { Search, ShieldCheck, CheckCircle2, Clock, Video, FileText, Download, User } from 'lucide-react';
import { secondOpinionService } from '@/services/secondOpinionService';
import { SecondOpinionRequest } from '@/data/secondOpinionData';
import { Card } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { useToast } from '@/hooks/useToast';

export const SecondOpinionTracker: React.FC = () => {
  const toast = useToast();
  const [trackingId, setTrackingId] = useState('');
  const [request, setRequest] = useState<SecondOpinionRequest | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleTrack = async (idToSearch?: string) => {
    const queryId = idToSearch || trackingId;
    if (!queryId.trim()) return;

    setIsSearching(true);
    setHasSearched(true);
    try {
      const res = await secondOpinionService.trackSecondOpinion(queryId);
      setRequest(res);
      if (!res) {
        toast.error(`No second opinion request found for tracking ID "${queryId}".`, 'Not Found');
      } else {
        toast.success(`Found request for ${res.patientName} (${res.status})`, 'Status Retrived');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSearching(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Opinion Ready':
        return <Badge variant="gold" size="sm">Opinion Ready</Badge>;
      case 'Under Review':
        return <Badge variant="teal" size="sm">Under Medical Review</Badge>;
      case 'Consultation Scheduled':
        return <Badge variant="gold" size="sm">Video Call Scheduled</Badge>;
      default:
        return <Badge variant="teal" size="sm">Request Submitted</Badge>;
    }
  };

  return (
    <Card accentGoldTop className="p-6 sm:p-8 bg-white space-y-6 shadow-md border border-gray-200">
      <div className="space-y-1 border-b pb-4">
        <h3 className="text-xl font-extrabold text-navy-900 flex items-center gap-2">
          <Clock className="w-6 h-6 text-teal-600" />
          Track Second Opinion Request Status
        </h3>
        <p className="text-xs text-gray-500">
          Enter your unique tracking ID (e.g. <strong className="text-teal-700">SO-2026-8891</strong>) to view review progress & doctor notes.
        </p>
      </div>

      {/* Input & Track Button */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <Input
            placeholder="Enter SO-2026-XXXX tracking number..."
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            startIcon={<Search className="w-4 h-4 text-teal-600" />}
          />
        </div>
        <Button
          variant="gold"
          onClick={() => handleTrack()}
          disabled={isSearching || !trackingId.trim()}
          leftIcon={<Search className="w-4 h-4" />}
        >
          Track Status
        </Button>
      </div>

      {/* Quick Sample Tracking ID Chips */}
      <div className="flex items-center gap-2 text-xs">
        <span className="text-gray-400 font-bold text-[11px] uppercase tracking-wider">Try Demo IDs:</span>
        <button
          type="button"
          onClick={() => {
            setTrackingId('SO-2026-8891');
            handleTrack('SO-2026-8891');
          }}
          className="px-2.5 py-1 bg-gold-50 text-navy-950 rounded-lg font-bold border border-gold-200 hover:bg-gold-100 transition-colors"
        >
          SO-2026-8891 (Opinion Ready)
        </button>
        <button
          type="button"
          onClick={() => {
            setTrackingId('SO-2026-7412');
            handleTrack('SO-2026-7412');
          }}
          className="px-2.5 py-1 bg-teal-50 text-teal-900 rounded-lg font-bold border border-teal-200 hover:bg-teal-100 transition-colors"
        >
          SO-2026-7412 (Under Review)
        </button>
      </div>

      {/* Result Display */}
      {hasSearched && request && (
        <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200 space-y-4 pt-4 text-xs">
          <div className="flex items-center justify-between border-b pb-3">
            <div>
              <span className="text-gray-400 font-semibold block">Tracking Number</span>
              <span className="font-extrabold text-navy-900 text-sm">{request.trackingId}</span>
            </div>
            {getStatusBadge(request.status)}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-gray-400 block font-semibold">Patient Name:</span>
              <strong className="text-navy-900">{request.patientName}</strong>
            </div>
            <div>
              <span className="text-gray-400 block font-semibold">Specialty:</span>
              <strong className="text-teal-700">{request.specialty}</strong>
            </div>
          </div>

          {/* Assigned Doctor Card */}
          {request.assignedDoctor && (
            <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 shadow-2xs">
              <img
                src={request.assignedDoctor.photo}
                alt={request.assignedDoctor.name}
                className="w-12 h-12 rounded-xl object-cover object-top shrink-0 border"
              />
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase">Reviewing Specialist</span>
                <h4 className="text-sm font-bold text-navy-900">{request.assignedDoctor.name}</h4>
                <p className="text-[11px] text-gray-500">{request.assignedDoctor.title}</p>
              </div>
            </div>
          )}

          {/* Opinion Summary */}
          {request.opinionSummary && (
            <div className="p-4 bg-teal-50 rounded-xl border border-teal-100 space-y-2">
              <h5 className="font-bold text-teal-950 text-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                Second Opinion Clinical Summary:
              </h5>
              <p className="text-navy-900 leading-relaxed font-normal">{request.opinionSummary}</p>
              <div className="pt-2 flex items-center justify-between">
                <span className="text-teal-800 font-semibold">Recommended Plan: {request.recommendedTreatment}</span>
                <Button
                  variant="gold"
                  size="sm"
                  onClick={() => toast.success('Second Opinion Report (PDF) downloaded.', 'Report Downloaded')}
                  leftIcon={<Download className="w-3.5 h-3.5" />}
                >
                  Download PDF
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </Card>
  );
};
