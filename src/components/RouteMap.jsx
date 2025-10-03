// import { Image } from '@imagekit/react'; // Assuming Image component is available
// import { motion } from 'framer-motion';
// import { ArrowRightCircle, Globe, MapPin } from 'lucide-react';
// import React from 'react';
// import { Button } from './ui/button';

// // Animation variants for smooth entry
// const routeMapVariants = {
// 	hidden: { opacity: 0, y: 30 },
// 	show: {
// 		opacity: 1,
// 		y: 0,
// 		transition: {
// 			duration: 0.6,
// 			staggerChildren: 0.15,
// 			delayChildren: 0.3,
// 			ease: 'easeOut',
// 		},
// 	},
// };

// const routeCardVariants = {
// 	hidden: { opacity: 0, scale: 0.98 },
// 	show: {
// 		opacity: 1,
// 		scale: 1,
// 		transition: { duration: 0.5, ease: 'easeOut' },
// 	},
// };

// // --- Data Setup ---
// // 🚨 IMPORTANT: Replace 'https://goo.gl/maps/...' with YOUR ACTUAL GOOGLE MAPS ROUTE URLs
// const routesData = [
// 	{
// 		distance: '6KM',
// 		accentColor: 'text-indigo-600',
// 		buttonColor: 'bg-indigo-600 hover:bg-indigo-700',
// 		routeHighlights: [
// 			'Starts & ends at BGC 30th St.',
// 			'Scenic loop around High Street',
// 			'Flat and beginner-friendly course',
// 			'Explore the heart of BGC',
// 		],
// 		mapImagePlaceholder: 'MAP_6K.png',
// 		googleMapsUrl: 'https://goo.gl/maps/your-6k-route-link-here',
// 	},
// 	{
// 		distance: '12KM',
// 		accentColor: 'text-red-600',
// 		buttonColor: 'bg-red-600 hover:bg-red-700',
// 		routeHighlights: [
// 			'Includes Kalayaan Flyover challenge',
// 			'Passes through two BGC districts',
// 			'Moderate elevation for a good workout',
// 			'Water stations strategically placed',
// 		],
// 		mapImagePlaceholder: 'MAP_12K.png',
// 		googleMapsUrl: 'https://goo.gl/maps/your-12k-route-link-here',
// 	},
// 	{
// 		distance: '21KM',
// 		accentColor: 'text-emerald-600',
// 		buttonColor: 'bg-emerald-600 hover:bg-emerald-700',
// 		routeHighlights: [
// 			'The ultimate Half Marathon course',
// 			'Covers extensive BGC landmarks',
// 			'Multiple challenging sections and flats',
// 			'Designed for serious runners aiming for a PR',
// 		],
// 		mapImagePlaceholder: 'MAP_21K.png',
// 		googleMapsUrl: 'https://goo.gl/maps/your-21k-route-link-here',
// 	},
// ];

// // Component for the map image (using a styled placeholder for now)
// const RouteMapImageAsset = ({ filePath, altText }) => {
// 	if (!filePath) return null;
// 	return (
// 		<motion.div variants={routeCardVariants} className="p-4 flex-shrink-0">
// 			{/* Replace this div with your actual ImageKit Image component */}
// 			<div className="bg-gray-100 h-48 flex items-center justify-center rounded-xl border border-gray-300 shadow-inner text-gray-700 text-center font-medium p-4">
// 				Map Route Image Placeholder: {filePath}
// 			</div>
// 			{/* Example of how the Image component would be used:
//             <Image
//                 src={`/endpoliorun/maps/${filePath}`}
//                 alt={altText}
//                 className="mx-auto w-full h-auto max-w-[500px] rounded-xl shadow-md"
//                 loading="lazy"
//             />
//             */}
// 		</motion.div>
// 	);
// };

// const RouteMap = () => {
// 	return (
// 		<section id="routes" className="py-24 bg-white">
// 			<div className="container mx-auto px-4">
// 				<motion.div
// 					initial="hidden"
// 					whileInView="show"
// 					variants={routeMapVariants}
// 					viewport={{ once: true }}
// 					className="text-center mb-16"
// 				>
// 					<h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
// 						🗺️ Course Maps
// 					</h2>
// 					<p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
// 						View the official race routes for your distance, certified and ready
// 						for your best run.
// 					</p>
// 				</motion.div>

// 				<div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
// 					{routesData.map((route, index) => (
// 						<motion.div
// 							key={index}
// 							variants={routeCardVariants}
// 							viewport={{ once: true, amount: 0.3 }}
// 							className="flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300"
// 						>
// 							{/* Route Header (White background) */}
// 							<div className="p-6 pb-4 flex flex-col items-center justify-center border-b border-gray-200">
// 								<h3
// 									className={`text-6xl md:text-7xl font-black italic ${route.accentColor} mb-2`}
// 								>
// 									{route.distance}
// 								</h3>
// 								<p className="text-sm font-semibold text-gray-500 flex items-center gap-1">
// 									<MapPin className="w-4 h-4" /> Bonifacio Global City, Taguig
// 								</p>
// 							</div>

// 							{/* Map Placeholder/Image */}
// 							<RouteMapImageAsset
// 								filePath={route.mapImagePlaceholder}
// 								altText={`Map for ${route.distance} route`}
// 							/>

// 							{/* Route Highlights */}
// 							<div className="p-6 flex-grow">
// 								<h4 className="text-lg font-bold mb-3 text-gray-800 border-b pb-2 border-gray-300">
// 									Course Highlights
// 								</h4>
// 								<ul className="space-y-3">
// 									{route.routeHighlights.map((highlight, hIndex) => (
// 										<li
// 											key={hIndex}
// 											className="flex items-start gap-3 text-base text-gray-700"
// 										>
// 											<ArrowRightCircle
// 												className={`w-5 h-5 mt-1 flex-shrink-0 ${route.accentColor}`}
// 											/>
// 											<span>{highlight}</span>
// 										</li>
// 									))}
// 								</ul>
// 							</div>

// 							{/* Google Maps Button */}
// 							<div className="p-6 pt-4 border-t border-gray-200">
// 								<Button
// 									onClick={() => window.open(route.googleMapsUrl, '_blank')}
// 									className={`w-full py-3 text-lg font-bold rounded-lg shadow-md text-white transition-all duration-300
//                                                 ${route.buttonColor} hover:scale-[1.02] flex items-center justify-center gap-2`}
// 								>
// 									<Globe className="w-5 h-5" />
// 									View Route on Google Maps
// 								</Button>
// 							</div>
// 						</motion.div>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default RouteMap;
import { Image } from '@imagekit/react';
import { motion } from 'framer-motion';
import { ArrowRightCircle, Globe, MapPin } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';

// --- Data Setup (Retaining Custom Colors and Image Paths) ---
const routes = [
	{
		distance: '6KM',
		gradientClass: 'bg-gradient-oceanic',
		textColor: 'text-blue-600',
		mapBgColor: 'bg-[#3a86ff]',
		highlights: [
			'Starts & ends at BGC 30th St.',
			'Scenic loop around High Street',
			'Flat and beginner-friendly',
			'Explore the heart of BGC',
		],
		mapImage: '/routes/6k.jpg',
		googleUrl: 'https://goo.gl/maps/your-6k-route-link-here',
	},
	{
		distance: '12KM',
		gradientClass: 'bg-gradient-sunset',
		textColor: 'text-orange-600',
		mapBgColor: 'bg-[#fb5607]',
		highlights: [
			'Includes Kalayaan Flyover challenge',
			'Passes through two BGC districts',
			'Moderate elevation for a good workout',
			'Water stations strategically placed',
		],
		mapImage: '/routes/12k.jpg',
		googleUrl: 'https://goo.gl/maps/your-12k-route-link-here',
	},
	{
		distance: '21KM',
		gradientClass: 'bg-gradient-electric',
		textColor: 'text-pink-600',
		mapBgColor: 'bg-[#ff006e]',
		highlights: [
			'The ultimate Half Marathon course',
			'Covers extensive BGC landmarks',
			'Multiple challenging sections and flats',
			'Designed for serious runners aiming for a PR',
		],
		mapImage: '/routes/21k.jpg',
		googleUrl: 'https://goo.gl/maps/your-21k-route-link-here',
	},
];

// --- Map Visual Component (Now occupies md:col-span-2) ---
const MapVisual = ({ route, index }) => {
	const isEven = index % 2 === 0;

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.7 }}
			viewport={{ once: true, amount: 0.3 }}
			className={`relative w-full h-[350px] md:h-[600px] overflow-hidden 
                        ${isEven ? 'md:rounded-l-2xl' : 'md:rounded-r-2xl'}
                        rounded-t-2xl md:rounded-t-none`}
		>
			{/* Map Container with ImageKit */}
			<Image
				src={`/endpoliorun/${route.mapImage}`}
				alt={`${route.distance} route map`}
				className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.05]"
				loading="lazy"
				// Optimized transformation for the larger 2/3 container
				transformation={[{ width: 1200, height: 900, quality: 90 }]}
			/>

			{/* Floating Distance Badge for Map Visual */}
			<div
				className={`absolute bottom-4 ${
					isEven ? 'right-4' : 'left-4'
				} text-white p-2 px-4 rounded-full font-extrabold text-2xl shadow-lg 
                    bg-gradient-to-r ${route.gradientClass}`}
			>
				{route.distance}
			</div>
		</motion.div>
	);
};

// --- Details Panel Component (Now occupies md:col-span-1) ---
const DetailsPanel = ({ route, isEven }) => (
	<motion.div
		initial={{ opacity: 0, x: isEven ? 40 : -40 }}
		whileInView={{ opacity: 1, x: 0 }}
		transition={{ duration: 0.8, delay: 0.2 }}
		viewport={{ once: true, amount: 0.4 }}
		className="p-8 md:p-8 lg:p-12 flex flex-col justify-between h-full relative bg-white"
	>
		{/* Accent Line Separator (Vertical on Desktop, Horizontal on Mobile) */}
		<div
			className={`hidden md:block absolute top-0 w-1 h-full 
                        ${isEven ? 'left-0' : 'right-0'} bg-gradient-to-b ${
				route.gradientClass
			}`}
		></div>
		<div
			className={`md:hidden absolute top-0 w-full h-1 left-0 bg-gradient-to-r ${route.gradientClass}`}
		></div>

		<div>
			{/* Distance Header - Clean Text */}
			<h2
				className={`text-5xl md:text-5xl font-extrabold italic mb-4 bg-clip-text text-transparent bg-gradient-to-r ${route.gradientClass}`}
			>
				{route.distance}
			</h2>

			<p className="flex items-center gap-2 text-gray-500 mb-6 border-b border-gray-200 pb-4">
				<MapPin className="w-5 h-5 text-red-500" /> Bonifacio Global City,
				Taguig
			</p>

			{/* Highlights */}
			<ul className="space-y-4 mb-10">
				{route.highlights.map((h, i) => (
					<li
						key={i}
						className="flex items-start gap-3 text-base text-gray-700"
					>
						<ArrowRightCircle
							className={`w-5 h-5 flex-shrink-0 ${route.textColor}`}
						/>
						<span>{h}</span>
					</li>
				))}
			</ul>
		</div>

		{/* Button */}
		<div className="mt-8 pt-4 border-t border-gray-100">
			<Button
				size="xl"
				onClick={() => window.open(route.googleUrl, '_blank')}
				className={`w-full py-3 font-bold text-lg rounded-full bg-gradient-to-r ${route.gradientClass} text-white flex items-center justify-center gap-2 shadow-xl transition-all duration-300 hover:scale-[1.02]`}
			>
				<Globe className="w-5 h-5" />
				View Full Route on Maps
			</Button>
		</div>
	</motion.div>
);

// --- Route Section Container ---
const RouteSection = ({ route, index }) => {
	const isEven = index % 2 === 0;

	// Desktop layout (md and up) is now grid-cols-3
	// Even index (6K, 21K): [ Map (col-span-2) | Details (col-span-1) ]
	// Odd index (12K):      [ Details (col-span-1) | Map (col-span-2) ]
	const mapOrderClass = isEven
		? 'md:order-1 md:col-span-2 '
		: 'md:order-2 md:col-span-2';
	const detailsOrderClass = isEven
		? 'md:order-2 md:col-span-1'
		: 'md:order-1 md:col-span-1';

	return (
		<section className="container mx-auto py-8 md:py-12 px-4">
			<div
				// Changed from grid-cols-2 to grid-cols-3 for the 2/3 map split
				className={`grid grid-cols-1 md:grid-cols-3 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl`}
			>
				{/* Map Visual (Always top on mobile) */}
				<div className={`order-1 ${mapOrderClass}`}>
					<MapVisual route={route} index={index} />
				</div>

				{/* Details Panel (Always bottom on mobile) */}
				<div className={`order-2 ${detailsOrderClass}`}>
					<DetailsPanel route={route} isEven={isEven} />
				</div>
			</div>
		</section>
	);
};

// --- Main Component ---
const RouteMap = () => {
	return (
		<>
			<div className="w-full bg-gray-100_ min-h-screen flex_ items-center justify-center gradient-bg relative overflow-hidden bg-cover bg-center">
				<header className="py-16 text-center  z-50">
					<h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-white ">
						Official Race Routes
					</h1>
					<p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
						Choose your challenge! See the full route map and key features for
						your run.
					</p>
				</header>

				<div className="absolute inset-0 hero-pattern-two"></div>
				{/* <div className="absolute inset-0 gradient-black-bg_ bg-black  opacity-20"></div> */}

				<div className="space-y-4 md:space-y-8 ">
					{routes.map((route, i) => (
						<RouteSection key={i} route={route} index={i} />
					))}
				</div>
			</div>
		</>
	);
};

export default RouteMap;
