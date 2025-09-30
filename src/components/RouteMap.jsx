import { Image } from '@imagekit/react'; // Assuming Image component is available
import { motion } from 'framer-motion';
import { ArrowRightCircle, Globe, MapPin } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';

// Animation variants for smooth entry
const routeMapVariants = {
	hidden: { opacity: 0, y: 30 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			staggerChildren: 0.15,
			delayChildren: 0.3,
			ease: 'easeOut',
		},
	},
};

const routeCardVariants = {
	hidden: { opacity: 0, scale: 0.98 },
	show: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.5, ease: 'easeOut' },
	},
};

// --- Data Setup ---
// 🚨 IMPORTANT: Replace 'https://goo.gl/maps/...' with YOUR ACTUAL GOOGLE MAPS ROUTE URLs
const routesData = [
	{
		distance: '6KM',
		accentColor: 'text-indigo-600',
		buttonColor: 'bg-indigo-600 hover:bg-indigo-700',
		routeHighlights: [
			'Starts & ends at BGC 30th St.',
			'Scenic loop around High Street',
			'Flat and beginner-friendly course',
			'Explore the heart of BGC',
		],
		mapImagePlaceholder: 'MAP_6K.png',
		googleMapsUrl: 'https://goo.gl/maps/your-6k-route-link-here',
	},
	{
		distance: '12KM',
		accentColor: 'text-red-600',
		buttonColor: 'bg-red-600 hover:bg-red-700',
		routeHighlights: [
			'Includes Kalayaan Flyover challenge',
			'Passes through two BGC districts',
			'Moderate elevation for a good workout',
			'Water stations strategically placed',
		],
		mapImagePlaceholder: 'MAP_12K.png',
		googleMapsUrl: 'https://goo.gl/maps/your-12k-route-link-here',
	},
	{
		distance: '21KM',
		accentColor: 'text-emerald-600',
		buttonColor: 'bg-emerald-600 hover:bg-emerald-700',
		routeHighlights: [
			'The ultimate Half Marathon course',
			'Covers extensive BGC landmarks',
			'Multiple challenging sections and flats',
			'Designed for serious runners aiming for a PR',
		],
		mapImagePlaceholder: 'MAP_21K.png',
		googleMapsUrl: 'https://goo.gl/maps/your-21k-route-link-here',
	},
];

// Component for the map image (using a styled placeholder for now)
const RouteMapImageAsset = ({ filePath, altText }) => {
	if (!filePath) return null;
	return (
		<motion.div variants={routeCardVariants} className="p-4 flex-shrink-0">
			{/* Replace this div with your actual ImageKit Image component */}
			<div className="bg-gray-100 h-48 flex items-center justify-center rounded-xl border border-gray-300 shadow-inner text-gray-700 text-center font-medium p-4">
				Map Route Image Placeholder: {filePath}
			</div>
			{/* Example of how the Image component would be used:
            <Image
                src={`/endpoliorun/maps/${filePath}`}
                alt={altText}
                className="mx-auto w-full h-auto max-w-[500px] rounded-xl shadow-md"
                loading="lazy"
            /> 
            */}
		</motion.div>
	);
};

const RouteMap = () => {
	return (
		<section id="routes" className="py-24 bg-white">
			<div className="container mx-auto px-4">
				<motion.div
					initial="hidden"
					whileInView="show"
					variants={routeMapVariants}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
						🗺️ Course Maps
					</h2>
					<p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
						View the official race routes for your distance, certified and ready
						for your best run.
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
					{routesData.map((route, index) => (
						<motion.div
							key={index}
							variants={routeCardVariants}
							viewport={{ once: true, amount: 0.3 }}
							className="flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300"
						>
							{/* Route Header (White background) */}
							<div className="p-6 pb-4 flex flex-col items-center justify-center border-b border-gray-200">
								<h3
									className={`text-6xl md:text-7xl font-black italic ${route.accentColor} mb-2`}
								>
									{route.distance}
								</h3>
								<p className="text-sm font-semibold text-gray-500 flex items-center gap-1">
									<MapPin className="w-4 h-4" /> Bonifacio Global City, Taguig
								</p>
							</div>

							{/* Map Placeholder/Image */}
							<RouteMapImageAsset
								filePath={route.mapImagePlaceholder}
								altText={`Map for ${route.distance} route`}
							/>

							{/* Route Highlights */}
							<div className="p-6 flex-grow">
								<h4 className="text-lg font-bold mb-3 text-gray-800 border-b pb-2 border-gray-300">
									Course Highlights
								</h4>
								<ul className="space-y-3">
									{route.routeHighlights.map((highlight, hIndex) => (
										<li
											key={hIndex}
											className="flex items-start gap-3 text-base text-gray-700"
										>
											<ArrowRightCircle
												className={`w-5 h-5 mt-1 flex-shrink-0 ${route.accentColor}`}
											/>
											<span>{highlight}</span>
										</li>
									))}
								</ul>
							</div>

							{/* Google Maps Button */}
							<div className="p-6 pt-4 border-t border-gray-200">
								<Button
									onClick={() => window.open(route.googleMapsUrl, '_blank')}
									className={`w-full py-3 text-lg font-bold rounded-lg shadow-md text-white transition-all duration-300 
                                                ${route.buttonColor} hover:scale-[1.02] flex items-center justify-center gap-2`}
								>
									<Globe className="w-5 h-5" />
									View Route on Google Maps
								</Button>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default RouteMap;
