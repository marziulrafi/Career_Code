import React from 'react';
import { motion } from "motion/react"
import Team1 from '../../src/assets/team1.jpg'
import Team2 from '../../src/assets/team2.jpg'

const Home = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        src={Team1}
                        animate={{
                            y: [40, 80, 40]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="max-w-sm border-blue-600 border-s-8 border-b-8 rounded-t-4xl rounded-br-4xl shadow-2xl"
                    />
                    <motion.img
                        src={Team2}
                        animate={{
                            x: [100, 150, 100]
                        }}
                        transition={{ duration: 6, repeat: Infinity }}
                        className="max-w-sm border-blue-600 border-s-8 border-b-8 rounded-t-4xl rounded-br-4xl shadow-2xl"
                    />
                </div>
                <div className='flex-1'>
                    {/* <motion.h1 animate={{
                        rotate: 180,
                        x: 200,
                        y: -200,
                        transition: { duration: 4 }
                    }} className="text-5xl font-bold">Latest Jobs for you!</motion.h1> */}

                    <motion.h1
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { duration: 4 } }}
                        className="text-5xl font-bold">Remote <motion.span animate={{
                            color: ['#FF5733', '#33FF33', '#8A33FF'],
                            transition: { duration: 4, repeat: Infinity }
                        }}>Jobs</motion.span> for you!</motion.h1>
                    <p className="py-6">
                        Each month, more than 3 million job seekers turn to
                        website in their search for work, making over 140,000
                        applications every single day.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Home;