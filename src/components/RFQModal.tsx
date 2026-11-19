import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { X, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { FACTORY_INFO } from '../data/factoryData';

interface RFQModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const RFQModal: React.FC<RFQModalProps> = ({
  isOpen,
  onClose,
  initialProduct = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    styleInterest: initialProduct,
    quantity: '1,000 - 3,000 Pcs (Initial Run)',
    message: '',
    requestSwatches: true
  });

  const [submitted, setSubmitted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef(false);

  useLayoutEffect(() => {
    if (!isOpen || !panelRef.current) return;

    const panel = panelRef.current;
    const source = document.activeElement instanceof HTMLElement
      ? document.activeElement.getBoundingClientRect()
      : null;
    const panelBox = panel.getBoundingClientRect();
    const originX = source ? source.left + source.width / 2 - panelBox.left : panelBox.width / 2;
    const originY = source ? source.top + source.height / 2 - panelBox.top : panelBox.height / 2;
    panel.style.transformOrigin = `${originX}px ${originY}px`;

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      panel.animate(
        [
          { transform: 'scale(0.08)', opacity: 0.68, filter: 'blur(2px)' },
          { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
        ],
        { duration: 560, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }
      );
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const modal = panelRef.current;
    const scroller = modal?.querySelector<HTMLElement>('.rfq-modal-scroll') ?? null;
    const groups = modal?.querySelectorAll<HTMLElement>('.rfq-reveal');
    if (!groups?.length || !scroller) return;

    let observer: IntersectionObserver | undefined;
    const beginRevealOnScroll = () => {
      scroller.removeEventListener('scroll', beginRevealOnScroll);
      const scrollerTop = scroller.getBoundingClientRect().top;
      const revealTargets: HTMLElement[] = [];

      groups.forEach((group, index) => {
        if (group.getBoundingClientRect().top <= scrollerTop + scroller.clientHeight * 0.88) return;
        group.classList.add('rfq-reveal-pending');
        group.style.setProperty('--rfq-reveal-delay', `${(index % 3) * 55}ms`);
        revealTargets.push(group);
      });

      if (!revealTargets.length) return;
      if (!('IntersectionObserver' in window)) {
        revealTargets.forEach(group => group.classList.add('rfq-reveal-visible'));
        return;
      }

      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('rfq-reveal-visible');
          observer?.unobserve(entry.target);
        });
      }, { root: scroller, threshold: 0.12, rootMargin: '0px 0px -24px 0px' });

      revealTargets.forEach(group => observer?.observe(group));
    };

    scroller.addEventListener('scroll', beginRevealOnScroll, { passive: true });
    return () => {
      scroller.removeEventListener('scroll', beginRevealOnScroll);
      observer?.disconnect();
    };
  }, [isOpen, submitted]);

  useEffect(() => {
    if (initialProduct) {
      setFormData(prev => ({ ...prev, styleInterest: initialProduct }));
    }
  }, [initialProduct]);

  const getMailtoHref = () => {
    const subject = `Garment manufacturing enquiry — ${formData.company || formData.name}`;
    const body = [
      'New garment manufacturing enquiry',
      '',
      `Name: ${formData.name}`,
      `Company: ${formData.company}`,
      `Business email: ${formData.email}`,
      `Phone / WhatsApp: ${formData.phone}`,
      `Style / focus: ${formData.styleInterest || 'Garment manufacturing'}`,
      `Estimated order volume: ${formData.quantity}`,
      `Physical swatch booklet: ${formData.requestSwatches ? 'Requested' : 'Not requested'}`,
      '',
      `Tech-pack and material notes: ${formData.message || 'None provided'}`,
    ].join('\n');

    return `mailto:${FACTORY_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = getMailtoHref();
    setSubmitted(true);
  };

  const handleClose = async () => {
    if (closingRef.current) return;
    closingRef.current = true;
    const panel = panelRef.current;
    if (panel && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      try {
        await panel.animate(
          [
            { transform: 'scale(1)', opacity: 1, filter: 'blur(0px)' },
            { transform: 'scale(0.08)', opacity: 0, filter: 'blur(2px)' },
          ],
          { duration: 260, easing: 'cubic-bezier(0.4, 0, 1, 1)' }
        ).finished;
      } catch {
        // The modal may be unmounted externally while the close motion is running.
      }
    }
    setSubmitted(false);
    closingRef.current = false;
    onClose();
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Mr. Makhesh Kumar,\n\nI would like to inquire about: ${formData.styleInterest || 'Garment Manufacturing'}\n` +
      `Name: ${formData.name}\n` +
      `Company: ${formData.company}\n` +
      `Estimated Volume: ${formData.quantity}\n` +
      `Notes: ${formData.message || 'Please send counter-sampling details and swatches.'}`
    );
    window.open(`https://wa.me/919994202064?text=${text}`, '_blank');
  };

  return (
    <div className="rfq-modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#24160f]/65 backdrop-blur-[5px] overflow-y-auto animate-in fade-in duration-200">
      <div ref={panelRef} className="rfq-cloth-surface border border-[#e6d7c4]/70 max-w-xl w-full max-h-[92dvh] flex flex-col rounded-[1.35rem] shadow-[0_28px_90px_rgba(35,20,12,0.34)] relative my-8 overflow-hidden text-[#30251e]">
        
        {/* Header */}
        <div className="rfq-cloth-header shrink-0 px-6 sm:px-8 py-5 border-b border-white/15 flex items-center justify-between text-white">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/75 font-bold block">
              Direct Factory Merchandising
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight mt-1 text-white">
              {formData.styleInterest ? `Inquire: ${formData.styleInterest}` : 'Request Sampling & Quotation'}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-full bg-[#3c1718]/35 hover:bg-[#3c1718]/55 text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="rfq-cloth-content rfq-modal-scroll min-h-0 flex-1 p-6 sm:p-8 text-center space-y-5 overflow-y-auto animate-in fade-in duration-300">
            <div className="w-14 h-14 bg-[#f3e6d8] text-[#93452E] border border-[#e8d3bf] rounded-full flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="rfq-reveal space-y-1">
              <h4 className="text-2xl font-extrabold text-[#1A1614]">
                Your email draft is ready
              </h4>
              <p className="text-xs sm:text-sm leading-6 text-[#38322B] font-medium max-w-md mx-auto">
                Your mail app should open with the enquiry addressed to <strong>{FACTORY_INFO.email}</strong>. Review the details and press Send to deliver it.
              </p>
            </div>

            <div className="rfq-reveal p-4 rounded-xl bg-[#f4eee5] border border-[#e8ddcf] text-left text-xs font-mono space-y-1.5 text-[#51443a]">
              <div><span className="text-stone-400">Style / Focus:</span> {formData.styleInterest || 'Knitted Apparel'}</div>
              <div><span className="text-stone-400">Estimated Volume:</span> {formData.quantity}</div>
              <div><span className="text-stone-400">Contact:</span> {formData.email} • {formData.phone}</div>
            </div>

            <div className="rfq-reveal flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={getMailtoHref()}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#93452E] hover:bg-[#793b27] text-white font-semibold text-xs tracking-wide uppercase flex items-center justify-center space-x-2 transition-colors cursor-pointer shadow-[0_4px_12px_rgba(106,52,34,0.18)]"
              >
                <Send className="w-4 h-4" />
                <span>Open email draft</span>
              </a>

              <button
                onClick={handleWhatsApp}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#e7eee5] hover:bg-[#dce8d9] text-[#385742] font-semibold text-xs tracking-wide uppercase flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </button>
              
              <button
                onClick={handleClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#e9e1d6] hover:bg-[#ded3c4] text-[#51443a] font-semibold text-xs transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rfq-cloth-content rfq-modal-scroll min-h-0 flex-1 p-6 sm:p-8 space-y-4 text-xs sm:text-sm overflow-y-auto">
            
            {/* Style Interest (if pre-selected) */}
            {formData.styleInterest && (
              <div className="rfq-reveal p-3 bg-[#f5e9dd] border border-[#e8d4c1] rounded-xl text-xs text-[#93452E] flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase font-bold block text-[#aa7459]">Selected Product Style</span>
                  <span className="font-bold text-sm text-[#93452E]">{formData.styleInterest}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, styleInterest: '' })}
                  className="text-xs text-[#93452E] hover:underline"
                >
                  Change
                </button>
              </div>
            )}

            {/* Name & Company */}
            <div className="rfq-reveal grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-[#51443a] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rachel Green"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#f5f0e8] border border-[#dfd2c1] rounded-lg px-3.5 py-3 text-sm text-[#30251e] placeholder:text-[#aa9b8c] focus:bg-white focus:border-[#a35a3d] focus:ring-2 focus:ring-[#a35a3d]/15 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#51443a] mb-1.5">
                  Brand / Buying House *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aurora Retail"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-[#f5f0e8] border border-[#dfd2c1] rounded-lg px-3.5 py-3 text-sm text-[#30251e] placeholder:text-[#aa9b8c] focus:bg-white focus:border-[#a35a3d] focus:ring-2 focus:ring-[#a35a3d]/15 focus:outline-none transition"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="rfq-reveal grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-[#51443a] mb-1.5">
                  Business Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="merchandising@aurora.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#f5f0e8] border border-[#dfd2c1] rounded-lg px-3.5 py-3 text-sm text-[#30251e] placeholder:text-[#aa9b8c] focus:bg-white focus:border-[#a35a3d] focus:ring-2 focus:ring-[#a35a3d]/15 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#51443a] mb-1.5">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+44 7911 123456"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#f5f0e8] border border-[#dfd2c1] rounded-lg px-3.5 py-3 text-sm text-[#30251e] placeholder:text-[#aa9b8c] focus:bg-white focus:border-[#a35a3d] focus:ring-2 focus:ring-[#a35a3d]/15 focus:outline-none transition"
                />
              </div>
            </div>

            {/* Quantity */}
            <div className="rfq-reveal">
              <label className="block text-xs font-semibold text-[#51443a] mb-1.5">
                Target Order Volume
              </label>
              <select
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full bg-[#f5f0e8] border border-[#dfd2c1] rounded-lg px-3.5 py-3 text-sm text-[#30251e] focus:bg-white focus:border-[#a35a3d] focus:ring-2 focus:ring-[#a35a3d]/15 focus:outline-none transition"
              >
                <option value="1,000 - 3,000 Pcs (Initial Run)">1,000 - 3,000 Pcs (Initial Run)</option>
                <option value="3,000 - 10,000 Pcs">3,000 - 10,000 Pcs</option>
                <option value="10,000 - 25,000 Pcs">10,000 - 25,000 Pcs</option>
                <option value="25,000+ Pcs (Bulk Container)">25,000+ Pcs (Bulk Container)</option>
                <option value="Rapid Counter-Sampling Only (7-10 Days)">Rapid Counter-Sampling Only (7-10 Days)</option>
              </select>
            </div>

            {/* Message */}
            <div className="rfq-reveal">
              <label className="block text-xs font-semibold text-[#51443a] mb-1.5">
                Tech-Pack & Material Notes
              </label>
              <textarea
                rows={3}
                placeholder="Mention required GSM, yarn blend, target delivery window, or any custom placement print / embroidery requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#f5f0e8] border border-[#dfd2c1] rounded-lg p-3 text-sm text-[#30251e] placeholder:text-[#aa9b8c] focus:bg-white focus:border-[#a35a3d] focus:ring-2 focus:ring-[#a35a3d]/15 focus:outline-none transition resize-y"
              />
            </div>

            {/* Swatch Checkbox */}
            <div className="rfq-reveal flex items-center space-x-2 pt-1">
              <input
                type="checkbox"
                id="rfqSwatches"
                checked={formData.requestSwatches}
                onChange={(e) => setFormData({ ...formData, requestSwatches: e.target.checked })}
                className="w-4 h-4 rounded text-[#93452E] focus:ring-[#93452E] border-[#cdbba7] cursor-pointer accent-[#93452E]"
              />
              <label htmlFor="rfqSwatches" className="text-xs text-[#65564a] cursor-pointer">
                Include physical swatch booklet (Single Jersey, Interlock, French Terry)
              </label>
            </div>

            {/* Actions */}
            <div className="rfq-reveal pt-3">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-lg bg-[#93452E] hover:bg-[#793b27] text-white font-semibold text-xs tracking-[0.12em] uppercase transition-all shadow-[0_5px_14px_rgba(106,52,34,0.2)] flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Prepare Email Inquiry</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
