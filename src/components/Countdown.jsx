// Countdown.js
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const Countdown = () => {
	// Set the target date: February 8, 2026, 2:30 AM PST
	// Note: Date is parsed as local time unless timezone is specified.
	// '2026-02-08T02:30:00' should default to Philippine Standard Time (PST is UTC+8)
	// if the user's browser is in the Philippines or an equivalent timezone.
	// To be precise for the specified time (UTC+8):
	const targetDate = new Date('2026-02-08T02:30:00+08:00').getTime();

	const [timeRemaining, setTimeRemaining] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const calculateTimeRemaining = () => {
			const now = new Date().getTime();
			const distance = targetDate - now;

			if (distance < 0) {
				// Event has passed
				setTimeRemaining({
					days: 0,
					hours: 0,
					minutes: 0,
					seconds: 0,
				});
				return;
			}

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			setTimeRemaining({
				days,
				hours,
				minutes,
				seconds,
			});
		};

		// Initial calculation
		calculateTimeRemaining();

		// Update the countdown every second
		const intervalId = setInterval(calculateTimeRemaining, 1000);

		// Cleanup interval on component unmount
		return () => clearInterval(intervalId);
	}, [targetDate]); // Recalculate if targetDate changes (though it's a constant here)

	const countdownItems = [
		{ label: 'DAYS', value: timeRemaining.days, delay: 0 },
		{ label: 'HRS', value: timeRemaining.hours, delay: 0.1 },
		{ label: 'MINS', value: timeRemaining.minutes, delay: 0.2 },
		{ label: 'SECS', value: timeRemaining.seconds, delay: 0.3 },
	];

	// Simple formatting function to ensure two digits (e.g., 09 instead of 9)
	const formatNumber = (num) => String(num).padStart(2, '0');

	return (
		<div className="grid grid-cols-4 gap-4 md:gap-8 text-white max-w-xl mx-auto mb-12">
			{countdownItems.map((item, index) => (
				<motion.div
					key={item.label}
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.2 + item.delay, duration: 0.6 }}
					className="flex flex-col items-center p-3 sm:p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-white/20"
				>
					<span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-orange-400 ">
						{formatNumber(item.value)}
					</span>
					<span className="text-xs sm:text-sm md:text-base font-semibold mt-1 tracking-wider opacity-90">
						{item.label}
					</span>
				</motion.div>
			))}
		</div>
	);
};

export default Countdown;
