import { Image } from '@imagekit/react';
import { motion } from 'framer-motion';
import {
	Calendar,
	Clock,
	Dock,
	GlassWater,
	MapPin,
	Medal,
	Shirt,
	Trophy,
} from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';

const containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			// SLOWER: Stagger items a little more (0.1 -> 0.2)
			staggerChildren: 0.2,
			// SLOWER: Slight delay before staggered items begin (0.3 -> 0.5)
			delayChildren: 0.5,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 10 },
	show: {
		opacity: 1,
		y: 0,
		// SLOWER: Individual item movement duration (default -> 0.8)
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
	},
];

const getCardStyles = (colorClass) => {
	let gradientValue = '';

	if (colorClass === 'bg-gradient-oceanic') {
		gradientValue = 'linear-gradient(to bottom right, #4ade80, #3b82f6)';
	} else if (colorClass === 'bg-gradient-sunset') {
		gradientValue = 'linear-gradient(to bottom right, #f97316, #fbbf24)';
	} else if (colorClass === 'bg-gradient-electric') {
		gradientValue = 'linear-gradient(to bottom right, #f43f5e, #a855f7)';
	}

	const silhouetteFilePath = 'asset1.png';

	const fullImageKitUrl = `https://ik.imagekit.io/zoiyj5rqq/endpoliorun/${silhouetteFilePath}`;

	const silhouetteUrl = `url('${fullImageKitUrl}?tr=q-15,e-grayscale,bl-15')`;

	return {
		backgroundImage: `${silhouetteUrl}, ${gradientValue}`,
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
			{Icon && <Icon className="w-5 h-5 text-white/80" />}
			<p className="">{text}</p>
		</motion.div>
	);
};

// Component to handle ImageKit rendering and animation for a single image asset
const ImageAsset = ({ filePath, altText, isFinisher = false, type }) => {
	if (!filePath) return null;
	let maxSize = 'max-w-[500px]';
	const containerClass = isFinisher
		? 'flex flex-col items-center p-4'
		: 'p-4 flex-shrink-0';
	if (type === 'bib') {
		maxSize = 'max-w-[250px]';
	} else if (type === 'medal') {
		maxSize = 'max-w-[500px]';
	} else {
		maxSize = 'max-w-[500px]';
	}
	return (
		<motion.div variants={itemVariants} className={containerClass}>
			<Image
				src={`/endpoliorun/${filePath}`}
				alt={altText}
				className={`mx-auto w-full h-auto ${maxSize}`}
				transformation={[
					{
						quality: '80',
						height: 'auto',
					},
				]}
				srcSet={[{ width: 300 }, { width: 500 }, { width: 700 }]}
				loading="lazy"
				lqip={{ active: true }}
			/>
		</motion.div>
	);
};

const EventDetails = () => {
	return (
		<section id="details" className="py-20 bg-white">
			<div className="container mx-auto px-4 ">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
						Event Details
					</h2>
					<p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
						Choose your distance and join the fight to end polio
					</p>
				</motion.div>

				<div className="grid sm:grid-cols-3 grid-cols-1 md:gap-4 gap-1   overflow-hidden rounded-xl md:p-5 p-2 bg-white">
					{distancesData.map((category, index) => (
						// <motion.div
						// 	key={index}
						// 	initial={{ opacity: 0, scale: 0.95 }}
						// 	whileInView={{ opacity: 1, scale: 1 }}
						// 	// SLOWER: Card appearance duration (0.5 -> 0.7)
						// 	transition={{ duration: 0.7, delay: index * 0.15 }}
						// 	viewport={{ once: true, amount: 0.5 }}
						// 	className={`flex flex-col ${category.colorClass} text-white shadow-lg rounded-xl`}
						// >
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.7, delay: index * 0.15 }}
							viewport={{ once: true, amount: 0.5 }}
							className={` flex flex-col text-white shadow-lg rounded-xl bg-cover bg-center bg-blend-overlay `}
							style={getCardStyles(category.colorClass)}
						>
							<motion.div
								variants={containerVariants}
								initial="hidden"
								whileInView="show"
								viewport={{ once: true, amount: 0.2 }}
								className="flex-grow flex flex-col"
							>
								{/* Distance Display */}
								<motion.div
									variants={itemVariants}
									className="p-6 text-center flex-shrink-0"
								>
									<div
										className="flex justify-center items-center font-extrabold italic text-shadow-lg 
                                    text-6xl sm:text-7xl lg:text-8xl mb-2"
									>
										{category.distance}
									</div>
								</motion.div>

								{/* 🚀 CONSOLIDATED IMAGE RENDERING */}
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
								/>
							</motion.div>

							<div
								className="m-8 p-6 pt-4 bg-white/10 backdrop-blur-sm rounded-xl border-t shadow-xl border-white/20 "
								id="details"
							>
								<motion.h3
									variants={itemVariants}
									className="text-sm sm:text-md font-bold mb-3 border-b pb-1 border-white/30 text-shadow-lg"
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

								<motion.h3
									variants={itemVariants}
									className="text-sm sm:text-md text-shadow-lg font-bold mb-3 border-b pb-1 border-white/30"
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
							{/* REGISTER BUTTON */}
							<div className="flex flex-col items-center justify-center w-full py-4 mb-4">
								<Button
									onClick={handleRegistrationClick}
									size="xl"
									className={`text-xl px-12 py-4 rounded-full bg-white hover:bg-gradient-sunset font-black  hover:scale-[1.05] transition-all duration-300 cursor-pointer ${
										category.colorClass === 'bg-gradient-oceanic'
											? 'text-blue-600 shadow-blue-500/50 hover:shadow-blue-400/80'
											: category.colorClass === 'bg-gradient-sunset'
											? 'text-orange-600 shadow-orange-500/50 hover:shadow-orange-400/80'
											: 'text-fuchsia-600 shadow-fuchsia-500/50 hover:shadow-fuchsia-400/80'
									} `}
								>
									Register Now
								</Button>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default EventDetails;
