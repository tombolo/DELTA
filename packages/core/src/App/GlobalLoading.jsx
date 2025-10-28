"use client";

import React from 'react';
import './GlobalLoading.scss';

const GlobalLoading = () => {
  return (
    <div className="global-loading">
      <div className="logo-background" />
      <div className="background-overlay" />

      <div className="grid-background">
        <div className="grid-lines" />
        <div className="grid-overlay" />
      </div>

      <div className="content-wrapper">
        <div className="trading-terminal">
          <div className="terminal-header">
            <div className="terminal-title">Loading</div>
            <div className="terminal-status">
              <span className="status-indicator" />
              Initializing...
            </div>
          </div>

          <div className="chart-container">
            <div className="chart-grid">
              <div className="grid-line" />
              <div className="grid-line" />
              <div className="grid-line" />
              <div className="grid-line" />
              <div className="grid-line" />
            </div>
            <svg className="chart-svg" width="100%" height="100%" />
            <div className="candlestick-animation">
              <div className="candlestick">
                <div className="wick" />
                <div className="body" />
              </div>
              <div className="candlestick">
                <div className="wick" />
                <div className="body" />
              </div>
              <div className="candlestick">
                <div className="wick" />
                <div className="body" />
              </div>
              <div className="candlestick">
                <div className="wick" />
                <div className="body" />
              </div>
              <div className="candlestick">
                <div className="wick" />
                <div className="body" />
              </div>
            </div>
          </div>

          <div className="market-ticker">
            <div className="ticker-scroll">
              <div className="ticker-item">
                <span className="ticker-label">System</span>
                <span className="ticker-value">Starting</span>
                <span className="ticker-change">...</span>
              </div>
              <div className="ticker-item">
                <span className="ticker-label">Modules</span>
                <span className="ticker-value">Loading</span>
                <span className="ticker-change">...</span>
              </div>
              <div className="ticker-item">
                <span className="ticker-label">UI</span>
                <span className="ticker-value">Preparing</span>
                <span className="ticker-change">...</span>
              </div>
            </div>
          </div>
        </div>

        <div className="progress-section">
          <div className="progress-container">
            <div className="progress-labels">
              <div className="progress-text">Preparing environment</div>
              <div className="progress-message">Please wait while we set things up</div>
            </div>
            <div className="progress-track">
              <div className="progress-bar">
                <div className="progress-glow" />
                <div className="progress-pulse" />
              </div>
            </div>
            <div className="progress-markers">
              <div className="marker" />
              <div className="marker" />
              <div className="marker" />
              <div className="marker" />
              <div className="marker" />
              <div className="marker" />
              <div className="marker" />
              <div className="marker" />
              <div className="marker" />
              <div className="marker" />
            </div>
          </div>
        </div>
      </div>

      <div className="deriv-branding">
        <div className="powered-by">
          <span className="brand-text">Powered by</span>
          <span className="deriv-name">Deriv</span>
          <div className="brand-glow" />
        </div>
        <div className="partnership">
          <span className="brand-text">In partnership with</span>
          <span className="deriv-name">Deriv</span>
          <div className="brand-glow" />
        </div>
      </div>

      <div className="connection-nodes">
        <div className="node"><div className="node-pulse" /></div>
        <div className="node"><div className="node-pulse" /></div>
        <div className="node"><div className="node-pulse" /></div>
        <div className="node"><div className="node-pulse" /></div>
        <div className="node"><div className="node-pulse" /></div>
        <div className="node"><div className="node-pulse" /></div>
        <div className="node"><div className="node-pulse" /></div>
        <div className="node"><div className="node-pulse" /></div>
      </div>
    </div>
  );
};

export default GlobalLoading;