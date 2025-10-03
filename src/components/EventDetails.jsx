import { Image } from '@imagekit/react'; // Import ImageKit's component
import { motion } from 'framer-motion';
import {
	Calendar,
	Clock,
	Dock,
	GlassWater,
	MapPin,
	Medal,
	Shirt,
	Tag,
	Trophy,
	User,
	Wallet,
} from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';

// --- Configuration ---
const EARLY_BIRD_DEADLINE = new Date('2025-11-01T00:00:00'); // Deadline is Oct 31, so cutoff is Nov 1st
const IS_EARLY_BIRD_ACTIVE = new Date() < EARLY_BIRD_DEADLINE;
// --- End Configuration ---

// --- Animation Variants ---
const containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.5,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 10 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: 'easeOut' },
	},
};

const handleRegistrationClick = () => {
	window.open('https://forms.gle/EZMB8BxwhjbcrdU28', '_blank');
};

const distancesData = [
	{
		distance: '6KM',
		description: 'Perfect for beginners and families',
		colorClass: 'bg-gradient-oceanic',
		inclusions: {
			singlet: true,
			medal: true,
			shirt: false,
			raceBib: true,
			postRunSnack: true,
		},
		times: { assembly: '4:00 AM', start: '4:30 AM', cutoff: '2 hour' },
		images: {
			singlet: 'SINGLET6K.png',
			bib: 'BIB_6K.png',
			medal: 'MEDAL6K.png',
			finisher: '',
		},
		registrationFee: {
			earlyBird: '899',
			student: '799',
			regular: '999',
		},
	},
	{
		distance: '12KM',
		description: 'Great challenge for regular runners',
		colorClass: 'bg-gradient-sunset',
		inclusions: {
			singlet: true,
			medal: true,
			shirt: true,
			raceBib: true,
			postRunSnack: true,
		},
		times: { assembly: '3:00 AM', start: '3:30 AM', cutoff: '3 hour' },
		images: {
			singlet: 'SINGLET12K.png',
			bib: 'BIB_12K.png',
			medal: 'MEDAL12K.png',
			finisher: 'FINISHER12KM.png',
		},
		registrationFee: {
			earlyBird: '1199',
			student: '1099',
			regular: '1299',
		},
	},
	{
		distance: '21KM',
		description: 'Half marathon for serious athletes',
		colorClass: 'bg-gradient-electric',
		inclusions: {
			singlet: true,
			medal: true,
			shirt: true,
			raceBib: true,
			postRunSnack: true,
		},
		times: { assembly: '2:30 AM', start: '3:00 AM', cutoff: '4 hour' },
		images: {
			singlet: 'SINGLET21K.png',
			bib: 'BIB_21K.png',
			medal: 'MEDAL21K.png',
			finisher: 'FINISHER21KM.png',
		},
		registrationFee: {
			earlyBird: '1499',
			student: '1399',
			regular: '1599',
		},
	},
];

const getCardStyles = (colorClass) => {
	let gradientValue = '';
	const imageKitUrlEndpoint = 'https://ik.imagekit.io/zoiyj5rqq';

	if (colorClass === 'bg-gradient-oceanic') {
		gradientValue = 'linear-gradient(to bottom right, #4ade80, #3b82f6)';
	} else if (colorClass === 'bg-gradient-sunset') {
		gradientValue = 'linear-gradient(to bottom right, #f97316, #fbbf24)';
	} else if (colorClass === 'bg-gradient-electric') {
		gradientValue = 'linear-gradient(to bottom right, #f43f5e, #a855f7)';
	}

	const silhouetteFilePath = 'asset1.png';
	const fullImageKitUrl = `${imageKitUrlEndpoint}/endpoliorun/${silhouetteFilePath}`;
	const silhouetteUrl = `url('${fullImageKitUrl}?tr=q-15,e-grayscale,bl-15')`;

	return {
		backgroundImage: `${silhouetteUrl}, ${gradientValue}`,
		backgroundSize: 'cover, cover',
		backgroundPosition: 'center',
	};
};

const ItemDetail = ({ label, value, icon: Icon, isTime = false }) => {
	if (!value && !isTime) return null;

	const text = isTime ? value : label;

	return (
		<motion.div
			variants={itemVariants}
			className="flex items-center gap-2 text-shadow-lg"
		>
			{Icon && <Icon className="w-5 h-5 text-black/80" />}
			<p className="text-black">{text}</p>
		</motion.div>
	);
};

// New Component for Price Detail
const PricingDetail = ({ label, price, icon: Icon, isPromo = false }) => {
	const isAvailable = isPromo ? IS_EARLY_BIRD_ACTIVE : true;
	const priceColor = isAvailable
		? 'text-yellow-300'
		: 'text-gray-500 line-through';

	return (
		<motion.div
			variants={itemVariants}
			className="flex items-center justify-between text-shadow-lg"
		>
			<div className="flex items-center gap-2">
				<Icon className="w-5 h-5 text-black/80" />
				<p
					className={`font-semibold ${
						isAvailable ? 'text-black' : 'text-gray-500'
					}`}
				>
					{label}
				</p>
			</div>
			<p className={`text-lg font-extrabold ${priceColor} flex-shrink-0`}>
				{isAvailable ? `₱ ${price}` : 'Expired'}
			</p>
		</motion.div>
	);
};

const ImageAsset = ({ filePath, altText, isFinisher = false, type }) => {
	if (!filePath) return null;

	let ikTransformations = [{ quality: '80', height: 'auto' }];
	let maxSizeClass = 'max-w-[500px]';

	if (type === 'bib') {
		ikTransformations.push({ width: 500 });
		maxSizeClass = 'max-w-[250px]';
	} else if (type === 'medal') {
		ikTransformations.push({ width: 800 });
		maxSizeClass = 'max-w-[600px]';
	} else if (type === '6KM') {
		ikTransformations.push({ width: 500 });
	}

	const containerClass = isFinisher
		? 'flex flex-col items-center p-4'
		: 'p-4 flex-shrink-0';

	return (
		<motion.div variants={itemVariants} className={containerClass}>
			<Image
				src={`/endpoliorun/${filePath}`}
				alt={altText}
				className={`mx-auto w-full h-auto ${maxSizeClass}`}
				transformation={ikTransformations}
				loading="lazy"
				lqip={{ active: true }}
			/>
		</motion.div>
	);
};

const EventDetails = () => {
	const cardTransition = { duration: 0.7 };
	const cardViewport = { once: true, amount: 0.2 };

	return (
		<section id="details" className="py-20 w-full bg-white">
			<div className="max-w-7xl mx-auto px-4 mb-16">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
						Event Details
					</h2>
					<p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
						Choose your distance and join the fight to end polio
					</p>
				</motion.div>
			</div>
			{/* Content Wrapper - Full width on mobile/tablet, max-width on desktop */}
			<div className="w-full max-w-7xl_ container mx-auto">
				<div
					// Fixed: Uses gap-1 for mobile/tablet, gap-4 for desktop (lg screen size)
					className="grid sm:grid-cols-3 grid-cols-1 gap-0 sm:gap-1 lg:gap-4 py-8 overflow-hidden"
				>
					{distancesData.map((category, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ ...cardTransition, delay: index * 0.15 }}
							viewport={cardViewport}
							className={`flex flex-col text-white shadow-lg rounded-none sm:rounded-xl bg-cover bg-center bg-blend-overlay`}
							style={getCardStyles(category.colorClass)}
						>
							<motion.div
								variants={containerVariants}
								initial="hidden"
								whileInView="show"
								viewport={{ once: true, amount: 0 }}
								className="flex-grow flex flex-col"
							>
								<motion.div
									variants={itemVariants}
									className="p-6 text-center flex-shrink-0"
								>
									<div
										className="flex justify-center items-center font-extrabold italic text-shadow-lg 
                                    text-8xl sm:text-7xl lg:text-8xl mb-2"
									>
										{category.distance}
									</div>
									<p className="text-sm font-semibold">
										{category.description}
									</p>
								</motion.div>

								{/* Image Assets */}
								<ImageAsset
									filePath={category.images.singlet}
									altText={`Race Singlet for ${category.distance}`}
									type={category.distance}
								/>
								<ImageAsset
									filePath={category.images.bib}
									altText={`Race Bib for ${category.distance}`}
									type="bib"
								/>
								<ImageAsset
									filePath={category.images.medal}
									altText={`Medal for ${category.distance}`}
									type="medal"
								/>
								<ImageAsset
									filePath={category.images.finisher}
									altText={`Finisher shirt for ${category.distance}`}
									isFinisher
									type="finisher"
								/>
							</motion.div>

							<div
								className=" sm:p-2 sm:m-2 p-6 m-8 lg:p-8 lg:m-8  bg-white/50 backdrop-blur-sm rounded-xl border-t shadow-xl border-white/20"
								// className="xs:m-8 sm:m-2 md:m-8 md:p-6 xs:p-6 pt-4 bg-white/10 backdrop-blur-sm rounded-xl border-t shadow-xl border-white/20 "
								id="details"
							>
								{/* --- REGISTRATION FEE SECTION --- */}
								<motion.h3
									variants={itemVariants}
									className="text-sm sm:text-md font-bold mb-3 pb-1 border-b border-black/30 text-shadow-lg text-black"
								>
									REGISTRATION FEE
								</motion.h3>
								<motion.div
									variants={containerVariants}
									initial="hidden"
									animate="show"
									className="space-y-3 mb-6 text-sm sm:text-md"
								>
									<PricingDetail
										label={`Early Bird (until Oct 31, 2025)`}
										price={category.registrationFee.earlyBird}
										icon={Tag}
										isPromo={true}
									/>
									<PricingDetail
										label="Regular Price"
										price={category.registrationFee.regular}
										icon={Wallet}
										isPromo={false}
									/>
									<PricingDetail
										label="Student Discount (with ID)"
										price={category.registrationFee.student}
										icon={User}
										isPromo={false}
									/>
								</motion.div>
								{/* --- RACE TIMES SECTION --- */}
								<motion.h3
									variants={itemVariants}
									className="text-sm sm:text-md font-bold mb-3 border-b pb-1 border-black/30 text-shadow-lg text-black"
								>
									RACE TIMES
								</motion.h3>
								<motion.div
									variants={containerVariants}
									initial="hidden"
									animate="show"
									className="space-y-2 mb-6 text-shadow-md text-sm sm:text-md"
								>
									<ItemDetail
										label="Assembly"
										value={category.times.assembly}
										icon={Clock}
										isTime
									/>
									<ItemDetail
										label="Gun Start"
										value={category.times.start}
										icon={Trophy}
										isTime
									/>
									<ItemDetail
										label="Cut-Off"
										value={category.times.cutoff}
										icon={Calendar}
										isTime
									/>
								</motion.div>

								{/* --- INCLUSIONS SECTION --- */}
								<motion.h3
									variants={itemVariants}
									className="text-sm sm:text-md text-shadow-lg font-bold mb-3 border-b pb-1 text-black border-black/30"
								>
									INCLUSIONS
								</motion.h3>
								<motion.div
									variants={containerVariants}
									initial="hidden"
									animate="show"
									className="space-y-2 text-sm sm:text-md"
								>
									{category.inclusions.singlet && (
										<ItemDetail
											label="Race Singlet"
											icon={Shirt}
											value={true}
										/>
									)}
									{category.inclusions.medal && (
										<ItemDetail
											label="Finisher Medal (Metal)"
											icon={Medal}
											value={true}
										/>
									)}
									{category.inclusions.shirt && (
										<ItemDetail
											label="Finisher Shirt"
											icon={Shirt}
											value={true}
										/>
									)}
									{category.inclusions.raceBib && (
										<ItemDetail label="Race Bib" value={true} icon={Dock} />
									)}
									{category.inclusions.postRunSnack && (
										<ItemDetail
											label="Post Run Snack"
											value={true}
											icon={GlassWater}
										/>
									)}
								</motion.div>
							</div>

							<div className="flex flex-col items-center justify-center w-full py-4 mb-4">
								<Button
									onClick={handleRegistrationClick}
									size="xl"
									className={`text-xl px-12 py-4 rounded-full bg-white font-black hover:scale-[1.05] transition-all duration-300 cursor-pointer ${
										category.colorClass === 'bg-gradient-oceanic'
											? 'text-blue-600 shadow-blue-500/50 hover:shadow-blue-400/80 hover:bg-gray-100'
											: category.colorClass === 'bg-gradient-sunset'
											? 'text-orange-600 shadow-orange-500/50 hover:shadow-orange-400/80 hover:bg-gray-100'
											: 'text-fuchsia-600 shadow-fuchsia-500/50 hover:shadow-fuchsia-400/80 hover:bg-gray-100'
									} `}
								>
									{IS_EARLY_BIRD_ACTIVE
										? 'Grab Early Bird Rate!'
										: 'Register Now'}
								</Button>
								{!IS_EARLY_BIRD_ACTIVE && (
									<p className="text-sm mt-2 font-semibold text-white/90 text-shadow-md">
										*Registration is now at Regular Price.
									</p>
								)}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default EventDetails;
