import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  maxWidth = 'lg',
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = React.useId();
  const descId = React.useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  // Handle outside click dismissal properly according to modern web guidance
  const handlePointerDown = (e: React.PointerEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const rect = dialog.getBoundingClientRect();
    const isOutside =
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom;

    if (isOutside) {
      onClose();
    }
  };

  const handleCancel = (e: React.SyntheticEvent<HTMLDialogElement, Event>) => {
    e.preventDefault();
    onClose();
  };

  const maxWidthClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-3xl',
    '2xl': 'max-w-4xl',
  };

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      onPointerDown={handlePointerDown}
      onCancel={handleCancel}
      aria-labelledby={titleId}
      aria-describedby={description ? descId : undefined}
      className={cn(
        'w-full m-auto rounded-3xl p-0 bg-white dark:bg-brand-midnight text-slate-800 dark:text-slate-100 shadow-2xl border border-slate-200 dark:border-white/10 backdrop:bg-brand-midnight/70 backdrop:backdrop-blur-md outline-none overflow-hidden transition-all',
        maxWidthClasses[maxWidth]
      )}
    >
      <div className="p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-white/10">
          <div>
            <h2 id={titleId} className="text-xl sm:text-2xl font-heading font-bold text-brand-navy dark:text-white">
              {title}
            </h2>
            {description && (
              <p id={descId} className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {description}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="pt-6">{children}</div>
      </div>
    </dialog>
  );
};
