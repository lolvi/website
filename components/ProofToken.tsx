import { ReactNode } from 'react';

interface ProofTokenProps {
  value: string | number;
  label: string;
  context?: string;
  variant?: 'default' | 'success' | 'warning';
}

export function ProofToken({ value, label, context, variant = 'default' }: ProofTokenProps) {
  const variantStyles = {
    default: 'bg-[#F7FBF9] border-[#0FA36B]/20 text-[#0FA36B]',
    success: 'bg-[#E6F7EF] border-[#12805C]/20 text-[#12805C]',
    warning: 'bg-[#FFF4E6] border-[#9E6C00]/20 text-[#9E6C00]',
  };

  return (
    <div className={`inline-flex items-baseline gap-2 px-3 py-1.5 rounded border ${variantStyles[variant]}`}>
      <span className="font-mono text-sm">{value}</span>
      <span className="text-xs text-[#51646A]">{label}</span>
      {context && <span className="text-xs text-[#51646A]">· {context}</span>}
    </div>
  );
}

interface ProofStatProps {
  label: string;
  value: string | number;
  target?: string | number;
  status?: 'ok' | 'warning' | 'critical';
  detail?: ReactNode;
}

export function ProofStat({ label, value, target, status = 'ok', detail }: ProofStatProps) {
  const statusColors = {
    ok: 'text-[#12805C] bg-[#E6F7EF] border-[#12805C]/20',
    warning: 'text-[#9E6C00] bg-[#FFF4E6] border-[#9E6C00]/20',
    critical: 'text-[#B00020] bg-[#FEF3F2] border-[#B00020]/20',
  };

  return (
    <div className="flex items-start justify-between py-3 border-b border-[#E5EFEA] last:border-0">
      <div className="flex-1">
        <p className="text-sm mb-1">{label}</p>
        {detail && <div className="text-xs text-[#51646A]">{detail}</div>}
      </div>
      <div className="flex flex-col items-end gap-1 ml-4">
        <span className={`px-2 py-1 rounded text-sm font-mono border ${statusColors[status]}`}>
          {value}
        </span>
        {target && (
          <span className="text-xs text-[#51646A]">Target: {target}</span>
        )}
      </div>
    </div>
  );
}

interface OperationalProofProps {
  title: string;
  description: string;
  metrics: Array<{
    label: string;
    value: string | number;
    unit?: string;
  }>;
  verificationLink?: string;
}

export function OperationalProof({ title, description, metrics, verificationLink }: OperationalProofProps) {
  return (
    <div className="bg-white border-l-4 border-[#0FA36B] p-4 rounded-r shadow-sm">
      <h4 className="mb-2">{title}</h4>
      <p className="text-sm text-[#51646A] mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {metrics.map((metric, idx) => (
          <div key={idx} className="inline-flex items-baseline gap-1 px-3 py-1 bg-[#F7FBF9] rounded border border-[#E5EFEA]">
            <span className="font-mono text-[#0FA36B]">{metric.value}</span>
            {metric.unit && <span className="text-xs text-[#51646A]">{metric.unit}</span>}
            <span className="text-xs text-[#51646A]">· {metric.label}</span>
          </div>
        ))}
      </div>
      {verificationLink && (
        <a href={verificationLink} className="text-sm text-[#0FA36B] hover:underline">
          Ver verificación →
        </a>
      )}
    </div>
  );
}
