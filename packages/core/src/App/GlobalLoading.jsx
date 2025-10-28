"use client";

import React, { useEffect, useState } from 'react';
import LOGO from './LOGO/DELTA.png';
import './GlobalLoading.scss';

const GlobalLoading = () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        let start = null;
        let raf = 0;
        const duration = 10000; // 10s
        const step = (ts) => {
            if (start === null) start = ts;
            const elapsed = ts - start;
            const pct = Math.min(100, (elapsed / duration) * 100);
            setProgress(pct);
            if (pct < 100) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, []);

    const columns = 28;
    const digits = Array.from({ length: columns });

    return (
      <>
        {/* Background image */}
        <img
          src={typeof LOGO === 'string' ? LOGO : (LOGO && LOGO.src)}
          alt="DELTA"
          className="gl-bg"
        />

        {/* Centered 10s progress bar + branding */}
        <div className="gl-center">
          <div className="gl-panel">
            <div className="gl-header">
              <span>Loading</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="gl-bar">
              <div className="gl-bar__fill" style={{ width: `${progress}%` }} />
              <div className="gl-bar__shine" style={{ opacity: progress > 2 ? 1 : 0 }} />
            </div>

            {/* Branding badges below the bar */}
            <div className="gl-badges">
              <div className="gl-badge gl-badge--primary">
                <span className="gl-badge__label">Powered by</span>
                <span className="gl-badge__brand gl-badge__brand--cyan">Deriv</span>
              </div>
              <div className="gl-badge gl-badge--secondary">
                <span className="gl-badge__label">In partnership with</span>
                <span className="gl-badge__brand gl-badge__brand--green">Deriv</span>
              </div>
            </div>
          </div>
        </div>

        {/* Effects overlay */}
        <div className="fx-overlay">
          {/* Grid glow */}
          <div className="fx-grid" />
          {/* Scanning line */}
          <div className="scan-line" />
          {/* Matrix rain */}
          <div className="fx-rain">
            {digits.map((_, i) => (
              <div
                key={i}
                className="rain-col"
                style={{
                  left: `${(i / columns) * 100}%`,
                  animation: `rain-fall ${5 + (i % 7) * 0.5}s linear infinite`,
                  animationDelay: `${(i % 10) * 0.3}s`,
                }}
              >
                {Array.from({ length: 24 }).map((__, j) => (
                  <span
                    key={j}
                    className="digit"
                    style={{ transform: `translateY(${j * 18}px)` }}
                  >
                    {Math.random() > 0.5 ? '1' : '0'}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

      </>
    );
};

export default GlobalLoading;