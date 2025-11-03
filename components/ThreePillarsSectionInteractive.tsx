'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Download, Zap, MessageSquare, X, Shield, Heart } from 'lucide-react';

const pillars = [
	{
		id: 'cuidado',
		title: 'Nunca presión, siempre respeto',
		subtitle: 'Ethics of Care en acción',
		color: '#3ECF21',
		icon: Heart,
		emoji: '�',
		shortDesc: 'Quiet hours 20:30–08:00. Máx. 1 mensaje cada 24h. Tú decides cuándo y cómo.',
		theory: 'Atención + Responsabilidad + Competencia + Receptividad + No-dominación',
		features: [
			{
				icon: Clock,
				title: 'Tu descanso es sagrado',
				description: 'Desde las 20:30 hasta las 08:00, tu teléfono está en paz. No importa qué tan "urgente" parezca algo.',
				proof: 'Verificable en cada mensaje',
				technical: 'Sistema automatizado GMT-5. 0 excepciones desde lanzamiento.',
				care: 'Atención: reconocemos tus ritmos naturales de descanso',
			},
			{
				icon: MessageSquare,
				title: 'Tu silencio también habla',
				description: 'Si no respondes, entendemos. Máximo 1 mensaje al día, y si sigues sin responder, solo 2 toques por semana.',
				proof: 'Métrica pública mensual: Oct 2025 = 1.2 toques/semana promedio',
				technical: 'Rate limiter: 86400s cooldown. Weekly cap: 2 msgs.',
				care: 'Responsabilidad: tu silencio es una respuesta que respetamos',
			},
		],
		commitment: 'Tu tiempo es sagrado. Lo respetamos siempre. Nunca presión comercial.',
		principle: 'No-dominación: nunca usamos urgencia artificial o FOMO',
	},
	{
		id: 'agencia',
		title: 'Tú mandas siempre',
		subtitle: 'Self-Determination Theory aplicada',
		color: '#3EC2F1',
		icon: Zap,
		emoji: '⚡',
		shortDesc: 'BAJA instantánea. Pausar cuando quieras. AGENTE humano disponible. Sin dark patterns.',
		theory: 'Autonomía + Competencia + Relación',
		features: [
			{
				icon: Zap,
				title: 'Salir es súper fácil',
				description: 'Escribe "BAJA" y listo. No te preguntamos por qué, no te hacemos sentir culpable, no te retenemos.',
				proof: 'Opt-out rate: 0.3% (Oct 2025) – señal de baja presión',
				technical: 'Trigger: "BAJA" → immediate deactivation. No retention flows.',
				care: 'Autonomía: tu decisión de irte es tan válida como la de quedarte',
			},
			{
				icon: MessageSquare,
				title: 'Tú tienes el control remoto',
				description: '¿Necesitas una pausa? 7 días, 30 días, o hablar con un humano. Los botones están siempre ahí.',
				proof: 'UI persistente en toda interacción. 76% vuelven después de pausar',
				technical: 'Persistent UI controls. State: active|paused|snoozed|opted_out',
				care: 'Competencia: entiendes exactamente qué está pasando y por qué',
			},
		],
		commitment: 'Tu autonomía no es negociable. Tú decides el ritmo, el canal, la salida.',
		principle: 'Relación: construimos confianza a través de control real, no ilusorio',
	},
	{
		id: 'privacidad',
		title: 'Tus datos, tus reglas',
		subtitle: 'Privacy by Design + GDPR',
		color: '#6366F1',
		icon: Shield,
		emoji: '�️',
		shortDesc: 'Export/Delete en menos de 6h. Data expira automáticamente. Sin letra chiquita.',
		theory: 'Minimización + Propósito + Transparencia + Control',
		features: [
			{
				icon: Clock,
				title: 'Tus datos se auto-destruyen',
				description: 'No somos acumuladores. Tu perfil se borra solo a los 30 días sin actividad. Los eventos a los 90 días. Tu email solo si nos lo pides.',
				proof: 'Proceso automatizado. No requiere acción manual.',
				technical: 'Cron job diario. TTL en DB schema. Cascade delete configurado.',
				care: 'Minimización: solo guardamos lo necesario, el tiempo necesario',
			},
			{
				icon: Download,
				title: 'Transparencia total, sin trucos',
				description: 'Quieres ver todo lo que tenemos de ti? Te lo mandamos en JSON. Quieres borrarlo todo? Te mandamos un código y listo.',
				proof: 'SLA público: <24h (promedio Oct 2025: 4.2h). Cero incidentes PII.',
				technical: 'API endpoints: /export, /delete. OTP: 6 digits, 10min expiry.',
				care: 'Transparencia: puedes ver exactamente qué tenemos y borrarlo todo',
			},
		],
		commitment: 'Privacidad por diseño, no por configuración. GDPR/CCPA compliant.',
		principle: 'Control: tus datos te pertenecen siempre, no los "prestamos"',
	},
];

// Minimal, friendly vector face with unique gradients
const Face = ({ name, color }: { name: string; color: string }) => (
	<svg viewBox="0 0 64 64" className="w-10 h-10" aria-label={`Avatar de ${name}`} role="img">
		<defs>
			<linearGradient id={`skin-${name}`} x1="0" x2="1">
				<stop offset="0%" stopColor="#F7D0B6" />
				<stop offset="100%" stopColor="#F0BFA3" />
			</linearGradient>
		</defs>
		<circle cx="32" cy="32" r="30" fill="#fff" />
		<circle cx="32" cy="32" r="20" fill={`url(#skin-${name})`} />
		<path d="M22 26 q10 -10 20 0" fill={color} opacity="0.25" />
		<circle cx="26" cy="30" r="2" fill="#333" />
		<circle cx="38" cy="30" r="2" fill="#333" />
		<path d="M26 40 q6 4 12 0" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
	</svg>
);

// Circular stat badge component

const CircleStat = ({
	icon: Icon,
	number,
	label,
	rotation = 0,
	isWhite = false,
	size = 'large',
}: {
  
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	number: string | React.ReactNode;
	label: string;
	rotation?: number;
	isWhite?: boolean;
	size?: 'small' | 'large';
}) => (
	<div className="flex flex-col items-center gap-1">
		<motion.div
			className={`${
				size === 'large' ? 'w-24 h-24 md:w-28 md:h-28' : 'w-20 h-20 md:w-24 md:h-24'
			} rounded-full flex flex-col items-center justify-center shadow-sm overflow-hidden border-4`}
			style={{
				transform: `rotate(${rotation}deg)`,
				backgroundColor: isWhite ? 'rgba(255, 255, 255, 0.25)' : 'rgba(99, 102, 241, 0.12)',
				borderColor: isWhite ? 'rgba(255, 255, 255, 0.6)' : 'rgba(99, 102, 241, 0.25)',
				aspectRatio: '1 / 1',
			}}
			whileHover={{ scale: 1.08, rotate: rotation + 8 }}
			transition={{ type: 'spring', stiffness: 400, damping: 15 }}
		>
			<Icon
				className={`${
					size === 'large' ? 'w-6 h-6 md:w-7 md:h-7' : 'w-5 h-5 md:w-6 md:h-6'
				} mb-1 flex-shrink-0 ${isWhite ? 'text-white' : ''}`}
				style={isWhite ? {} : { color: '#6366F1' }}
				strokeWidth={2.5}
			/>
			<div
				className={`text-center px-1 ${isWhite ? 'text-white' : ''}`}
				style={{
					fontFamily: 'Montserrat, sans-serif',
					fontWeight: 900,
					fontSize:
						size === 'large'
							? typeof number === 'string' && (number.includes('\n') || number.includes('–'))
								? '0.8rem'
								: '1.3rem'
							: typeof number === 'string' && (number.includes('\n') || number.includes('–'))
							? '0.6rem'
							: '1rem',
					lineHeight: 0.9,
					color: isWhite ? undefined : '#6366F1',
					maxWidth: '100%',
					overflow: 'hidden',
				}}
			>
				{number}
			</div>
		</motion.div>
		<p
			className={`text-xs text-center max-w-[65px] leading-tight ${
				isWhite ? 'text-white/75' : 'text-slate-500'
			}`}
			style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
		>
			{label}
		</p>
	</div>
);

// Flip card component for theory icons
const TheoryPill = ({ theory, color }: { theory: string; color: string }) => (
	<div
		className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-white mb-4"
		style={{ backgroundColor: `${color}80` }}
	>
		{theory}
	</div>
);

export function ThreePillarsSectionInteractive() {
	const [selectedPillar, setSelectedPillar] = useState<string | null>(null);

	const selected = pillars.find((p) => p.id === selectedPillar);

	return (
		<section className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50" id="pilares">
			<div className="max-w-7xl mx-auto px-6 md:px-12">
				{/* Section Header */}
				<motion.div
					className="text-center mb-20"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className="flex flex-wrap items-center justify-center gap-4 mb-6">
						<TheoryPill theory="Respeto real" color="#3ECF21" />
						<TheoryPill theory="Tú decides" color="#3EC2F1" />
						<TheoryPill theory="Privacidad total" color="#6366F1" />
					</div>
					<h2
						className="mb-6"
						style={{
							fontFamily: 'Montserrat, sans-serif',
							fontWeight: 900,
							fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
							lineHeight: 0.95,
							letterSpacing: '-0.04em',
							color: '#0D1B1E',
						}}
					>
						Tres pilares.
						<br />
						<span className="bg-gradient-to-r from-[#3ECF21] to-[#6366F1] bg-clip-text text-transparent">
							Una promesa.
						</span>
					</h2>
					<p
						className="text-xl text-[#51646A] max-w-4xl mx-auto"
						style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
					>
						No son features. Es cómo hacemos las cosas, con pruebas reales y métricas verificables.
					</p>
				</motion.div>

				{/* Creative Bento Grid with Circular Stats */}
				<div className="grid md:grid-cols-2 gap-8 mb-16">
					{/* Large card - Cuidado */}
					<motion.div
						className="relative md:row-span-2 rounded-3xl p-6 md:p-8 flex flex-col border-4 border-[#3ECF21] overflow-hidden"
						style={{
							background: 'linear-gradient(135deg, #3ECF21 0%, #2AB118 100%)',
							minHeight: '400px',
						}}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1, duration: 0.6 }}
						whileHover={{ y: -2, scale: 1.005 }}
					>
						<div className="flex items-start mb-2">
							{/* Pillar Icon top-left, larger */}
							<Heart className="w-16 h-16 text-white" />
						</div>
						{/* Pattern */}
						<div className="absolute inset-0 opacity-5">
							<div
								className="absolute inset-0"
								style={{
									backgroundImage: 'radial-gradient(circle at 20% 30%, #ffffff 2px, transparent 2px)',
									backgroundSize: '40px 40px',
								}}
							/>
						</div>
						<div className="relative z-10 flex flex-col h-full">
							{/* TOP SECTION: Pillar Name */}
							<div className="mb-6">
								<h3
									className="text-white mb-0"
									style={{
										fontFamily: 'Montserrat, sans-serif',
										fontWeight: 900,
										fontSize: 'clamp(1.75rem, 4.5vw, 3rem)',
										lineHeight: 1.05,
										letterSpacing: '-0.02em',
										textShadow: '0 2px 4px rgba(0,0,0,0.1)',
									}}
								>
									Nunca presión,
									<br />siempre respeto
								</h3>
							</div>

							{/* MIDDLE SECTION: Pillar Features (Circular Stats) - Care pillar larger */}
							<div className="flex-1 mb-6">
								<div className="flex flex-wrap gap-6 justify-start">
									<CircleStat
										icon={Clock}
										number={
											<div style={{ fontSize: '0.7rem', lineHeight: 1.1 }}>
												20:30
												<br />–08:00
											</div>
										}
										label="Quiet"
										rotation={-2}
										isWhite={true}
									/>
									<CircleStat
										icon={MessageSquare}
										number="1.2"
										label="x semana"
										rotation={1}
										isWhite={true}
									/>
									<CircleStat
										icon={Heart}
										number="0.3%"
										label="opt-out"
										rotation={-1}
										isWhite={true}
									/>
								</div>
							</div>

							{/* Story with CTA */}
							<div className="flex items-center gap-4 p-3 bg-white/5 rounded-2xl">
								<div className="rounded-full p-2 bg-white/20 backdrop-blur-sm">
									<Face name="María" color="#3ECF21" />
								</div>
								<div className="flex-1 min-w-0">
									<p
										className="text-white/70 text-sm mb-1"
										style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
									>
										María, 21:00
									</p>
									<p
										className="text-white truncate"
										style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.1rem' }}
									>
										&quot;Por fin, mi tiempo&quot;
									</p>
								</div>
								<button
									onClick={() => setSelectedPillar('cuidado')}
									className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-xl text-white text-sm font-semibold transition-all hover:scale-105 whitespace-nowrap"
									style={{ fontFamily: 'Montserrat, sans-serif' }}
								>
									Ver historia
								</button>
							</div>
						</div>
					</motion.div>

					{/* Medium card - Agencia */}
					<motion.div
						className="relative rounded-3xl p-6 md:p-8 min-h-[200px] flex flex-col border-4 border-[#3EC2F1] overflow-hidden"
						style={{ background: 'linear-gradient(135deg, #3EC2F1 0%, #2BA5D1 100%)' }}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2, duration: 0.6 }}
						whileHover={{ y: -2, scale: 1.01 }}
					>
						<div className="flex items-start mb-2">
							{/* Pillar Icon top-left, larger */}
							<Zap className="w-10 h-10 text-white" />
						</div>
						<div className="relative z-10 flex flex-col h-full">
							{/* TOP SECTION: Name + Features */}
							<div className="mb-4">
								<h3
									className="text-white mb-4"
									style={{
										fontFamily: 'Montserrat, sans-serif',
										fontWeight: 900,
										fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
										lineHeight: 1.05,
										letterSpacing: '-0.02em',
										textShadow: '0 2px 4px rgba(0,0,0,0.1)',
									}}
								>
									Tú mandas. Siempre.
								</h3>
								{/* Pillar Features */}
								<div className="flex flex-wrap gap-6 justify-start">
									<CircleStat
										icon={Zap}
										number="1 clic"
										label="salir"
										rotation={1}
										isWhite={true}
										size="small"
									/>
									<CircleStat
										icon={Heart}
										number="76%"
										label="vuelven"
										rotation={-1}
										isWhite={true}
										size="small"
									/>
								</div>
							</div>

							{/* Story with CTA */}
							<div className="flex items-center gap-4 p-3 bg-white/5 rounded-2xl">
								<div className="rounded-full p-2 bg-white/20 backdrop-blur-sm">
									<Face name="Carlos" color="#3EC2F1" />
								</div>
								<div className="flex-1 min-w-0">
									<p
										className="text-white/70 text-sm mb-1"
										style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
									>
										Carlos: &quot;BAJA&quot;
									</p>
									<p
										className="text-white truncate"
										style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.1rem' }}
									>
										&quot;1 seg. Sin culpa&quot;
									</p>
								</div>
								<button
									onClick={() => setSelectedPillar('agencia')}
									className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-xl text-white text-sm font-semibold transition-all hover:scale-105 whitespace-nowrap"
									style={{ fontFamily: 'Montserrat, sans-serif' }}
								>
									Ver historia
								</button>
							</div>
						</div>
					</motion.div>

					{/* Medium card - Privacidad */}
					<motion.div
						className="relative rounded-3xl p-6 md:p-8 min-h-[200px] flex flex-col border-4 border-[#6366F1] overflow-hidden"
						style={{ background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)' }}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3, duration: 0.6 }}
						whileHover={{ y: -2, scale: 1.01 }}
					>
						<div className="flex items-start mb-2">
							{/* Pillar Icon top-left, larger */}
							<Shield className="w-10 h-10 text-white" />
						</div>
						{/* Pattern */}
						<div className="absolute inset-0 opacity-5">
							<div
								className="absolute inset-0"
								style={{
									backgroundImage: 'radial-gradient(circle at 20% 30%, #ffffff 2px, transparent 2px)',
									backgroundSize: '40px 40px',
								}}
							/>
						</div>
						<div className="relative z-10 flex flex-col h-full">
							{/* TOP SECTION: Name + Features */}
							<div className="mb-4">
								<h3
									className="text-white mb-4"
									style={{
										fontFamily: 'Montserrat, sans-serif',
										fontWeight: 900,
										fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
										lineHeight: 1.05,
										letterSpacing: '-0.02em',
										textShadow: '0 2px 4px rgba(0,0,0,0.1)',
									}}
								>
									Tus datos, tus reglas.
								</h3>
								{/* Pillar Features */}
								<div className="flex flex-wrap gap-6 justify-start">
									<CircleStat
										icon={Download}
										number="<6h"
										label="export"
										rotation={-1}
										isWhite={true}
										size="small"
									/>
									<CircleStat
										icon={Shield}
										number="0"
										label="errores"
										rotation={1}
										isWhite={true}
										size="small"
									/>
								</div>
							</div>

							{/* Story with CTA */}
							<div className="flex items-center gap-4 p-3 bg-white/5 rounded-2xl">
								<div className="rounded-full p-2 bg-white/20 backdrop-blur-sm">
									<Face name="Ana" color="#6366F1" />
								</div>
								<div className="flex-1 min-w-0">
									<p
										className="text-white/70 text-sm mb-1"
										style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
									>
										Ana pide datos
									</p>
									<p
										className="text-white truncate"
										style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.1rem' }}
									>
										&quot;4.2h: listo&quot;
									</p>
								</div>
								<button
									onClick={() => setSelectedPillar('privacidad')}
									className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-xl text-white text-sm font-semibold transition-all hover:scale-105 whitespace-nowrap"
									style={{ fontFamily: 'Montserrat, sans-serif' }}
								>
									Ver historia
								</button>
							</div>
						</div>
					</motion.div>
				</div>

				{/* Convergence Explanation (customer-friendly) */}
				{/* Bottom - Ultra Compact */}
        <motion.div
          className="bg-black rounded-3xl p-6 md:p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p
            className="text-white text-xl md:text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, lineHeight: 1.5 }}
          >
            Sin <span className="text-[#3ECF21]">Cuidado</span>, la privacidad es fría. 
            Sin <span className="text-[#3EC2F1]">Agencia</span>, ambos son paternalistas. 
            Juntos, crean <span className="text-[#3ECF21]">calma real</span>.
          </p>
        </motion.div>

				{/* Story Modal */}
				<AnimatePresence>
					{selected && (
						<motion.div
							className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-lg"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setSelectedPillar(null)}
						>
							<motion.div
								className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
								style={{ border: `4px solid ${selected.color}` }}
								initial={{ scale: 0.9, y: 20 }}
								animate={{ scale: 1, y: 0 }}
								exit={{ scale: 0.9, y: 20 }}
								onClick={(e) => e.stopPropagation()}
							>
								{/* Header */}
								<div
									className="sticky top-0 p-8 rounded-t-3xl flex items-start justify-between"
									style={{ backgroundColor: selected.color }}
								>
									<div className="flex-1">
										<div className="flex items-center gap-4 mb-4">
											<selected.icon className="w-10 h-10 text-white" />
											<span className="text-5xl">{selected.emoji}</span>
										</div>
										<h3
											className="text-white mb-2"
											style={{
												fontFamily: 'Montserrat, sans-serif',
												fontWeight: 900,
												fontSize: 'clamp(2rem, 4vw, 3rem)',
												lineHeight: 0.95,
												letterSpacing: '-0.03em',
											}}
										>
											{selected.title}
										</h3>
										<p className="text-white/90 text-lg">{selected.subtitle}</p>
									</div>
									<button
										onClick={() => setSelectedPillar(null)}
										className="ml-4 p-3 bg-white/20 rounded-2xl hover:bg-white/30 transition-colors"
									>
										<X className="w-6 h-6 text-white" />
									</button>
								</div>

								{/* Content */}
								<div className="p-8 space-y-8">
									{/* Personal Story */}
									<div className="bg-slate-50 bg-black rounded-2xl p-8 text-center">
										<div className="flex justify-center mb-6">
											<Face
												name={
													selected.id === 'cuidado'
														? 'María'
														: selected.id === 'agencia'
														? 'Carlos'
														: 'Ana'
												}
												color={selected.color}
											/>
										</div>
										<h4
											className="text-2xl font-bold mb-4"
											style={{ color: selected.color }}
										>
											Historia de{' '}
											{selected.id === 'cuidado'
												? 'María'
												: selected.id === 'agencia'
												? 'Carlos'
												: 'Ana'}
										</h4>
										<div className="text-lg text-slate-700 leading-relaxed space-y-4">
											{selected.id === 'cuidado' && (
												<>
													<p>
														<strong>&quot;Son las 21:00. Por fin termino mi día.&quot;</strong>
													</p>
													<p>
														María trabaja como enfermera. Sus turnos son agotadores y
														necesita desconectar completamente al llegar a casa.
													</p>
													<p>
														Con Compa, <strong>nunca</strong> recibe mensajes después de
														las 20:30. Su tiempo de descanso es respetado sin excepciones.
													</p>
													<p
														className="font-semibold"
														style={{ color: selected.color }}
													>
														&quot;Por fin, un servicio que entiende que mi tiempo es sagrado.&quot;
													</p>
												</>
											)}
											{selected.id === 'agencia' && (
												<>
													<p>
														<strong>&quot;Escribe BAJA y listo.&quot;</strong>
													</p>
													<p>
														Carlos probó Compa por 2 semanas pero decidió que no era para
														él en este momento.
													</p>
													<p>
														No hubo &quot;¿Estás seguro?&quot;, no hubo llamadas de retención, no
														hubo emails preguntando por qué se iba.
													</p>
													<p
														className="font-semibold"
														style={{ color: selected.color }}
													>
														&quot;1 segundo. Sin culpa. Así debería ser siempre.&quot;
													</p>
												</>
											)}
											{selected.id === 'privacidad' && (
												<>
													<p>
														<strong>&quot;Quiero ver exactamente qué tienen de mí.&quot;</strong>
													</p>
													<p>
														Ana es desarrolladora y valora la transparencia. Pidió una
														copia de todos sus datos para verificar nuestras promesas.
													</p>
													<p>
														4.2 horas después recibió un JSON completo con todo:
														consentimientos, preferencias, eventos, fechas de
														expiración.
													</p>
													<p
														className="font-semibold"
														style={{ color: selected.color }}
													>
														&quot;Prometieron transparencia y la cumplieron. Así se construye
														confianza.&quot;
													</p>
												</>
											)}
										</div>
									</div>

									{/* Technical Implementation */}
									<div className="grid md:grid-cols-2 gap-6">
										{selected.features.map((feature, idx) => {
											const Icon = feature.icon;
											return (
												<motion.div
													key={idx}
													className="bg-white rounded-2xl p-6 shadow-lg border-2"
													style={{ borderColor: `${selected.color}20` }}
													initial={{ opacity: 0, y: 20 }}
													animate={{ opacity: 1, y: 0 }}
													transition={{ delay: idx * 0.1 }}
												>
													<div className="flex items-center gap-3 mb-4">
														<div
															className="p-3 rounded-xl"
															style={{ backgroundColor: `${selected.color}15` }}
														>
															<Icon className="w-5 h-5" style={{ color: selected.color }} />
														</div>
														<h4 className="text-lg font-bold text-slate-800">
															{feature.title}
														</h4>
													</div>
													<p className="text-slate-600 mb-4 leading-relaxed">
														{feature.description}
													</p>
													<div className="bg-slate-900 rounded-xl p-3 mb-3">
														<code className="text-green-400 font-mono text-xs">
															{feature.technical}
														</code>
													</div>
													<div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3">
														<p className="text-emerald-800 font-semibold text-sm">
															✓ {feature.proof}
														</p>
													</div>
												</motion.div>
											);
										})}
									</div>

									{/* Commitment */}
									<div className="bg-[#0D1B1E] rounded-2xl p-8 text-center">
										<p
											className="text-white text-xl leading-relaxed"
											style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
										>
											{selected.commitment}
										</p>
									</div>
								</div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
}
