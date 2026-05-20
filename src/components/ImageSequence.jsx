import { useEffect, useRef, useState, useCallback } from 'react';

const TOTAL_FRAMES = 240;
const INITIAL_FRAMES = 30; // Load first 30 frames immediately
const isMobile = () => window.innerWidth <= 768;

// Mobile uses every 3rd frame (80 frames), desktop uses all 240
const getFrameStep = () => isMobile() ? 3 : 1;

const ImageSequence = ({ progress }) => {
    const canvasRef = useRef(null);
    const imagesRef = useRef({}); // key: frameIndex, value: HTMLImageElement
    const [isReady, setIsReady] = useState(false);
    const [loadPercent, setLoadPercent] = useState(0);
    const frameStep = useRef(getFrameStep());
    const loadedCountRef = useRef(0);
    const totalNeeded = useRef(Math.ceil(TOTAL_FRAMES / frameStep.current));

    const loadFrame = useCallback((frameNum) => {
        return new Promise((resolve) => {
            if (imagesRef.current[frameNum]) {
                resolve();
                return;
            }
            const img = new Image();
            const padded = frameNum.toString().padStart(3, '0');
            img.src = `/video_seq/ezgif-frame-${padded}.jpg`;
            img.onload = () => {
                imagesRef.current[frameNum] = img;
                loadedCountRef.current++;
                setLoadPercent(Math.round((loadedCountRef.current / totalNeeded.current) * 100));
                resolve();
            };
            img.onerror = () => resolve(); // skip missing
        });
    }, []);

    useEffect(() => {
        const step = frameStep.current;
        const total = totalNeeded.current;

        // Phase 1: Load first INITIAL_FRAMES quickly
        const initialFrames = [];
        for (let i = 1; i <= Math.min(INITIAL_FRAMES, TOTAL_FRAMES); i += step) {
            initialFrames.push(i);
        }

        Promise.all(initialFrames.map(loadFrame)).then(() => {
            setIsReady(true); // Show canvas immediately after initial frames

            // Phase 2: Load rest in background, batched
            const remaining = [];
            for (let i = INITIAL_FRAMES + 1; i <= TOTAL_FRAMES; i += step) {
                remaining.push(i);
            }

            const BATCH = 10;
            let idx = 0;
            const loadBatch = () => {
                if (idx >= remaining.length) return;
                const batch = remaining.slice(idx, idx + BATCH);
                idx += BATCH;
                Promise.all(batch.map(loadFrame)).then(() => {
                    setTimeout(loadBatch, 50); // Small delay between batches
                });
            };
            loadBatch();
        });
    }, [loadFrame]);

    // Draw current frame on canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !isReady) return;

        const step = frameStep.current;
        // Map progress (0-1) to frame number
        let frameIndex = Math.round(progress * (TOTAL_FRAMES - 1)) + 1;
        // Snap to nearest loaded frame
        frameIndex = Math.round(frameIndex / step) * step;
        frameIndex = Math.max(1, Math.min(TOTAL_FRAMES, frameIndex));

        const img = imagesRef.current[frameIndex];
        if (!img) return;

        const ctx = canvas.getContext('2d');
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        let dw, dh, ox, oy;

        if (canvasRatio > imgRatio) {
            dw = canvas.width;
            dh = canvas.width / imgRatio;
            ox = 0;
            oy = (canvas.height - dh) / 2;
        } else {
            dw = canvas.height * imgRatio;
            dh = canvas.height;
            ox = (canvas.width - dw) / 2;
            oy = 0;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, ox, oy, dw, dh);
    }, [progress, isReady]);

    // Canvas resize
    useEffect(() => {
        const resize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
        };
        window.addEventListener('resize', resize);
        resize();
        return () => window.removeEventListener('resize', resize);
    }, []);

    if (!isReady) {
        return (
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white gap-4">
                <div className="text-xl font-light tracking-widest">
                    LOADING {loadPercent}%
                </div>
                <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-orange-300 transition-all duration-300"
                        style={{ width: `${loadPercent}%` }}
                    />
                </div>
            </div>
        );
    }

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
            style={{ display: 'block' }}
        />
    );
};

export default ImageSequence;
