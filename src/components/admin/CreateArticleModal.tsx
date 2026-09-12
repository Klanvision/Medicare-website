import React, { useState } from 'react';
import { FileText, Tag, User, AlignLeft, CheckCircle, Plus, AlertCircle, Sparkles } from 'lucide-react';
import { Modal } from '@/components/common/Modal';
import { Button } from '@/components/common/Button';
import { useToast } from '@/hooks/useToast';
import { AdminContentItem } from '@/data/adminData';

interface CreateArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddArticle: (newArticle: AdminContentItem) => void;
}

const CONTENT_TYPES: ('Health Library Article' | 'Banner Announcement' | 'FAQ' | 'Press Release')[] = [
  'Health Library Article',
  'Banner Announcement',
  'FAQ',
  'Press Release',
];

const CATEGORIES = [
  'Cardiology',
  'Orthopedics',
  'Oncology',
  'Neurology',
  'Gynaecology',
  'Emergency Care',
  'Diabetology',
  'General Wellness',
  'Press Release',
];

export const CreateArticleModal: React.FC<CreateArticleModalProps> = ({
  isOpen,
  onClose,
  onAddArticle,
}) => {
  const { success, error } = useToast();

  const [title, setTitle] = useState('');
  const [type, setType] = useState<'Health Library Article' | 'Banner Announcement' | 'FAQ' | 'Press Release'>('Health Library Article');
  const [category, setCategory] = useState('Cardiology');
  const [author, setAuthor] = useState('');
  const [summary, setSummary] = useState('');
  const [status, setStatus] = useState<'Published' | 'Draft' | 'Archived'>('Published');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (!title.trim()) {
      setValidationError('Please enter article title.');
      return;
    }
    if (!author.trim()) {
      setValidationError('Please enter author or publishing department name.');
      return;
    }
    if (!summary.trim()) {
      setValidationError('Please enter article summary/content.');
      return;
    }

    setIsSubmitting(true);

    try {
      const today = new Date().toISOString().split('T')[0];

      const newArticle: AdminContentItem = {
        id: `cnt-${Date.now()}`,
        title: title.trim(),
        type,
        category,
        author: author.trim(),
        publishedDate: today,
        views: 0,
        status,
      };

      onAddArticle(newArticle);
      success(`Content article "${title.trim()}" published successfully!`);

      // Reset form
      setTitle('');
      setType('Health Library Article');
      setCategory('Cardiology');
      setAuthor('');
      setSummary('');
      setStatus('Published');
      setIsSubmitting(false);
      onClose();
    } catch (err) {
      setIsSubmitting(false);
      error('Failed to create article. Please try again.');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      title={
        <div className="flex items-center gap-2 text-navy-950">
          <div className="p-2 rounded-xl bg-teal-500/10 text-teal-600">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-black text-navy-950">Create New Health Article</h3>
            <p className="text-xs text-gray-500 font-normal">Publish articles, announcements, patient FAQs, and press releases</p>
          </div>
        </div>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4 text-xs">
        {validationError && (
          <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 flex items-center gap-2 font-bold animate-in fade-in">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
            <span>{validationError}</span>
          </div>
        )}

        {/* Title */}
        <div className="space-y-1.5">
          <label className="font-bold text-navy-900 flex items-center gap-1">
            <FileText className="w-3.5 h-3.5 text-teal-600" />
            Article Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Preventing Seasonal Dengue: Key Symptoms & Early Care"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50"
          />
        </div>

        {/* Content Type & Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Content Type <span className="text-red-500">*</span>
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as any)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50 font-bold text-navy-950"
            >
              {CONTENT_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-teal-600" />
              Category <span className="text-red-500">*</span>
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50 font-bold text-navy-950"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Author & Status */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-teal-600" />
              Author / Publishing Department <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Dr. Vikramaditya Joshi or HealthNova Editorial"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-navy-900 flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
              Publication Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as any)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50 font-bold text-navy-950"
            >
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
              <option value="Archived">Archived</option>
            </select>
          </div>
        </div>

        {/* Article Summary / Content */}
        <div className="space-y-1.5">
          <label className="font-bold text-navy-900 flex items-center gap-1">
            <AlignLeft className="w-3.5 h-3.5 text-teal-600" />
            Article Summary & Excerpt <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={4}
            placeholder="Write a concise overview of the article, key health takeaways, and diagnostic guidelines for patients..."
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50/50"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onClose}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="teal"
            size="md"
            isLoading={isSubmitting}
            leftIcon={<Plus className="w-4 h-4" />}
          >
            Create Article
          </Button>
        </div>
      </form>
    </Modal>
  );
};
