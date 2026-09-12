import React, { useState } from 'react';
import { UploadCloud, FileText, CheckCircle2, Trash2, ShieldCheck, AlertCircle } from 'lucide-react';
import { UploadedFileMeta } from '@/data/secondOpinionData';
import { useToast } from '@/hooks/useToast';
import { validateMedicalFileUpload, sanitizeString } from '@/utils/security';

interface ReportUploaderProps {
  files: UploadedFileMeta[];
  onFilesChange: (files: UploadedFileMeta[]) => void;
}

export const ReportUploader: React.FC<ReportUploaderProps> = ({ files, onFilesChange }) => {
  const toast = useToast();
  const [isDragging, setIsDragging] = useState(false);

  const validateAndAddFiles = (rawFiles: FileList | File[]) => {
    const newMetas: UploadedFileMeta[] = [];

    Array.from(rawFiles).forEach((file) => {
      const validation = validateMedicalFileUpload(file);
      if (!validation.isValid) {
        toast.error(validation.error || 'Invalid file uploaded.', 'Security Validation Error');
        return;
      }

      const sanitizedFilename = sanitizeString(file.name);
      const ext = file.name.split('.').pop()?.toLowerCase();

      newMetas.push({
        id: `file-${Date.now()}-${Math.random()}`,
        name: sanitizedFilename,
        sizeMb: parseFloat((file.size / (1024 * 1024)).toFixed(2)),
        type: ext?.toUpperCase() || 'DOCUMENT',
        uploadTimestamp: 'Just Now',
      });
    });

    if (newMetas.length > 0) {
      onFilesChange([...files, ...newMetas]);
      toast.success(`${newMetas.length} medical document(s) uploaded to secure vault.`, 'Files Uploaded');
    }
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      validateAndAddFiles(e.dataTransfer.files);
    }
  };

  const handleRemoveFile = (id: string) => {
    onFilesChange(files.filter((f) => f.id !== id));
  };

  return (
    <div className="space-y-4">
      {/* Drag & Drop Box */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleFileDrop}
        className={`border-2 border-dashed rounded-2xl p-6 sm:p-8 text-center transition-all cursor-pointer ${
          isDragging
            ? 'border-teal-500 bg-teal-50/80 scale-[1.01]'
            : 'border-gray-300 hover:border-teal-500 bg-gray-50/60 hover:bg-white'
        }`}
      >
        <input
          type="file"
          id="report-file-input"
          multiple
          accept=".pdf,.dcm,.dicom,.jpg,.jpeg,.png"
          onChange={(e) => e.target.files && validateAndAddFiles(e.target.files)}
          className="hidden"
        />

        <label htmlFor="report-file-input" className="cursor-pointer space-y-3 block">
          <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 mx-auto flex items-center justify-center shadow-2xs">
            <UploadCloud className="w-6 h-6" />
          </div>

          <div className="space-y-1">
            <p className="text-sm font-extrabold text-navy-900">
              Drag & Drop MRI, CT Scans (DICOM), Pathology PDFs or Discharge Summaries
            </p>
            <p className="text-xs text-gray-500">
              Supported Formats: <strong className="text-teal-700">PDF, DICOM (.dcm), JPG, PNG</strong> (Max 15 MB per file)
            </p>
          </div>

          <span className="inline-block px-4 py-2 bg-navy-900 text-white rounded-xl text-xs font-bold shadow-2xs hover:bg-navy-800 transition-colors">
            Browse Files from Computer
          </span>
        </label>
      </div>

      {/* Encryption & HIPAA Notice */}
      <div className="p-3 bg-teal-50/70 rounded-xl border border-teal-100 text-xs text-teal-950 flex items-center justify-between">
        <span className="flex items-center gap-1.5 font-bold">
          <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
          <span>256-Bit Encrypted Vault: Patient privacy guaranteed. Zero unencrypted file storage.</span>
        </span>
      </div>

      {/* Uploaded File List */}
      {files.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-bold text-navy-900 uppercase tracking-wider">
            Uploaded Reports ({files.length}):
          </p>
          <div className="space-y-2">
            {files.map((file) => (
              <div
                key={file.id}
                className="p-3 bg-white border border-gray-200 rounded-xl flex items-center justify-between text-xs shadow-2xs"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <FileText className="w-4 h-4 text-teal-600 shrink-0" />
                  <span className="font-bold text-navy-900 truncate">{file.name}</span>
                  <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-mono font-bold">
                    {file.sizeMb} MB • {file.type}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemoveFile(file.id)}
                  className="text-red-500 hover:text-red-700 p-1 transition-colors"
                  title="Remove File"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
