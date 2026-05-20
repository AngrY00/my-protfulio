import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import AbstractSystemBackground from './AbstractSystemBackground';

const Contact = () => {
    const form = useRef();
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setSending(true);

        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                setSending(false);
                setSuccess(true);
                form.current.reset();
                setTimeout(() => setSuccess(false), 5000);
            }, (error) => {
                console.log(error.text);
                setSending(false);
                alert("Failed to send message. Please check your network.");
            });
    };

    return (
        <div className="min-h-screen text-white font-['Inter'] relative selection:bg-orange-500/30 selection:text-orange-100 flex items-center justify-center overflow-hidden">

            <div className="absolute inset-0 z-0 pointer-events-none">
                <AbstractSystemBackground />
            </div>

            <div className="relative z-10 w-full max-w-4xl px-6 md:px-12 flex flex-col md:flex-row gap-12 items-center pt-24 md:pt-0">

                {/* Left: Heading & Info */}
                <div className="flex-1 text-center md:text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-xs font-mono uppercase tracking-[0.3em] text-orange-500/80 mb-4 block"
                    >
                        Get in Touch
                    </motion.h2>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter text-white/90 mb-6"
                    >
                        Let's Build <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-500/80">Something Real.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white/50 text-lg font-light leading-relaxed mb-8 max-w-sm mx-auto md:mx-0"
                    >
                        Open for AI automation projects, business consulting, IT solutions, and collaborations.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col gap-6 text-sm font-mono items-center md:items-start"
                    >
                        <a href="mailto:abdulla.chandidwar@gmail.com" className="text-orange-200 hover:text-orange-100 transition-colors">
                            abdulla.chandidwar@gmail.com
                        </a>

                        <div className="flex gap-6 text-2xl text-white/60 mt-2">
                            <SocialLink href="https://www.linkedin.com/in/md-abdulla-674662176/" icon={<FaLinkedin />} label="LinkedIn" />
                            <SocialLink href="https://github.com/AngrY00" icon={<FaGithub />} label="GitHub" />
                            <SocialLink href="mailto:abdulla.chandidwar@gmail.com" icon={<FaEnvelope />} label="Email" />
                        </div>
                    </motion.div>
                </div>

                {/* Right: Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex-1 w-full max-w-md bg-white/[0.02] border border-white/5 p-8 rounded-2xl backdrop-blur-md shadow-2xl"
                >
                    <h3 className="text-white text-lg font-medium mb-6">Send a Message</h3>

                    {success ? (
                        <div className="bg-green-500/10 border border-green-500/20 text-green-200 p-4 rounded-lg text-center animate-pulse">
                            <p className="font-mono text-sm">Message Sent Successfully! <br /> I'll get back to you soon.</p>
                        </div>
                    ) : (
                        <form ref={form} onSubmit={sendEmail} className="space-y-4">
                            <div>
                                <label className="block text-xs font-mono text-white/40 mb-2 uppercase tracking-wider">Name</label>
                                <input type="text" name="name" required className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-orange-500/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/20" placeholder="Enter your name" />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-white/40 mb-2 uppercase tracking-wider">Email</label>
                                <input type="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-orange-500/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/20" placeholder="Enter your email" />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-white/40 mb-2 uppercase tracking-wider">Message</label>
                                <textarea name="message" required rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-orange-500/50 focus:bg-white/10 outline-none transition-all placeholder:text-white/20" placeholder="Tell me about your project..."></textarea>
                            </div>
                            <button disabled={sending} className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-medium py-3 rounded-lg transition-all border border-orange-500/50 shadow-[0_0_20px_rgba(234,88,12,0.2)] disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2">
                                {sending ? (
                                    <>
                                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : "Send Message"}
                            </button>
                        </form>
                    )}
                </motion.div>

            </div>
        </div>
    );
};

const SocialLink = ({ href, icon, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-orange-400 transition-colors transform hover:scale-110"
        aria-label={label}
    >
        {icon}
    </a>
);

export default Contact;
