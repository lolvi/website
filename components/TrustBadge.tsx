import { ReactNode } from 'react';
import { ExternalLink, CheckCircle2, Shield, Activity } from 'lucide-react';


interface TrustBadgeProps {
  type: 'commitment' | 'control' | 'proof' | 'live';
  label: string;
  value?: string | ReactNode;
  proofLink?: string;
  onClick?: () => void;
  status?: 'active' | 'verified' | 'live';
}

export function TrustBadge({ type, label, value, proofLink, onClick, status = 'verified' }: TrustBadgeProps) {
  const typeConfig = {
    commitment: {
      bgColor: 'bg-compa-green-light',
      borderColor: 'border-compa-green/30',
      textColor: 'text-compa-green-dark',
      icon: CheckCircle2,
      iconColor: 'text-compa-green',
    },
    control: {
      bgColor: 'bg-compa-blue-light',
      borderColor: 'border-compa-blue/30',
      textColor: 'text-compa-blue-dark',
      icon: Shield,
      iconColor: 'text-compa-blue',
    },
    proof: {
      bgColor: 'bg-white',
      borderColor: 'border-compa-neutral-light',
      textColor: 'text-compa-neutral-dark',
      icon: ExternalLink,
      iconColor: 'text-compa-neutral-mid',
    },
    live: {
      bgColor: 'bg-white',
      borderColor: 'border-compa-green/30',
      textColor: 'text-compa-neutral-dark',
      icon: Activity,
      iconColor: 'text-compa-green',
    },
  };

  const config = typeConfig[type];
  const Icon = config.icon;
  const isClickable = onClick || proofLink;

  const content = (
    <div
      className={`
        inline-flex items-center gap-2 px-3 py-2 rounded-lg border transition-all
        ${config.bgColor} ${config.borderColor}
        ${isClickable ? 'hover:shadow-sm cursor-pointer hover:scale-[1.02]' : ''}
      `}
      onClick={onClick}
    >
      <Icon className={`w-4 h-4 ${config.iconColor} flex-shrink-0`} />
      <div className="flex flex-col gap-0.5">
        <span className={`text-xs ${config.textColor} opacity-80`}>{label}</span>
        {value && (
          <span className={`text-sm font-mono ${config.textColor}`}>{value}</span>
        )}
      </div>
      {proofLink && <ExternalLink className="w-3 h-3 text-compa-neutral-mid ml-1" />}
      {status === 'live' && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-compa-green opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-compa-green"></span>
        </span>
      )}
    </div>
  );

  if (proofLink) {
    return (
      <a href={proofLink} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}

interface CommitmentTextProps {
  children: ReactNode;
  verified?: boolean;
}

export function CommitmentText({ children, verified = false }: CommitmentTextProps) {
  return (
    <p className="flex items-start gap-2 text-compa-neutral-dark">
      {verified && <CheckCircle2 className="w-4 h-4 text-compa-green mt-1 flex-shrink-0" />}
      <span className="font-semibold">{children}</span>
    </p>
  );
}

interface ControlTextProps {
  children: ReactNode;
}

export function ControlText({ children }: ControlTextProps) {
  return (
    <p className="flex items-start gap-2 text-compa-blue-dark">
      <Shield className="w-4 h-4 text-compa-blue mt-1 flex-shrink-0" />
      <span className="font-medium">{children}</span>
    </p>
  );
}

interface ExplanationTextProps {
  children: ReactNode;
}

export function ExplanationText({ children }: ExplanationTextProps) {
  return (
    <p className="text-compa-neutral-mid leading-relaxed">{children}</p>
  );
}

interface TrustMetricProps {
  label: string;
  value: string;
  unit?: string;
  context?: string;
  type?: 'commitment' | 'control';
}

export function TrustMetric({ label, value, unit, context, type = 'commitment' }: TrustMetricProps) {
  const color = type === 'commitment' ? 'text-compa-green' : 'text-compa-blue';
  const bgColor = type === 'commitment' ? 'bg-compa-green-light' : 'bg-compa-blue-light';
  const borderColor = type === 'commitment' ? 'border-compa-green/20' : 'border-compa-blue/20';

  return (
    <div className={`inline-flex items-baseline gap-2 px-3 py-1.5 rounded border ${bgColor} ${borderColor}`}>
      <span className={`font-mono text-sm font-semibold ${color}`}>{value}</span>
      {unit && <span className="text-xs text-compa-neutral-mid">{unit}</span>}
      <span className="text-xs text-compa-neutral-mid">· {label}</span>
      {context && <span className="text-xs text-compa-neutral-mid opacity-70">({context})</span>}
    </div>
  );
}
