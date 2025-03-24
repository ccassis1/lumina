import React, { useState } from 'react';
import { LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

// Inline styles approach for simpler integration
const styles = {
  container: {
    backgroundColor: '#f0f2f5',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    color: '#333'
  },
  header: {
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    marginBottom: '30px'
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  logo: {
    display: 'flex',
    alignItems: 'center'
  },
  logoText: {
    marginLeft: '10px'
  },
  brand: {
    fontSize: '24px',
    fontWeight: 'bold'
  },
  subBrand: {
    fontSize: '14px',
    color: '#3b82f6'
  },
  nav: {
    display: 'flex',
    gap: '10px'
  },
  navButton: {
    padding: '8px 16px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer'
  },
  navActive: {
    backgroundColor: '#3b82f6',
    color: 'white'
  },
  navInactive: {
    backgroundColor: '#e5e7eb',
    color: '#374151'
  },
  hero: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto 60px',
    padding: '0 20px'
  },
  heroTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '16px'
  },
  heroSubtitle: {
    fontSize: '24px',
    color: '#4b5563',
    marginBottom: '20px'
  },
  heroText: {
    fontSize: '18px',
    color: '#6b7280',
    marginBottom: '30px'
  },
  searchContainer: {
    position: 'relative',
    maxWidth: '500px',
    margin: '0 auto'
  },
  searchInput: {
    width: '100%',
    padding: '15px 20px',
    paddingRight: '50px',
    borderRadius: '50px',
    border: '1px solid #d1d5db',
    fontSize: '16px',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
  },
  searchButton: {
    position: 'absolute',
    right: '8px',
    top: '8px',
    backgroundColor: '#3b82f6',
    color: 'white',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  exampleQueries: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '20px'
  },
  queryButton: {
    padding: '8px 16px',
    borderRadius: '50px',
    border: '1px solid #d1d5db',
    backgroundColor: 'white',
    fontSize: '14px',
    color: '#4b5563',
    cursor: 'pointer'
  },
  carouselSection: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  carouselTitle: {
    fontSize: '30px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '40px'
  },
  carouselContainer: {
    position: 'relative',
    marginBottom: '40px'
  },
  carouselNav: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'white',
    border: 'none',
    boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 10
  },
  prevButton: {
    left: '-20px'
  },
  nextButton: {
    right: '-20px'
  },
  slideContainer: {
    overflow: 'hidden'
  },
  slidesWrapper: {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out'
  },
  slide: {
    width: '100%',
    flexShrink: 0
  },
  dashboardWrapper: {
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    padding: '20px'
  },
  dashboard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  },
  dashboardHeader: {
    padding: '16px 20px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '20px'
  },
  dashboardBlue: {
    backgroundColor: '#1e3a8a'
  },
  dashboardGreen: {
    backgroundColor: '#065f46'
  },
  dashboardPurple: {
    backgroundColor: '#581c87'
  },
  dashboardContent: {
    padding: '20px'
  },
  metricsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
    marginBottom: '20px'
  },
  metricCard: {
    padding: '16px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    backgroundColor: 'white'
  },
  metricValue: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '4px'
  },
  metricBlue: {
    color: '#1e3a8a'
  },
  metricLightBlue: {
    color: '#3b82f6'
  },
  metricGreen: {
    color: '#059669'
  },
  metricPurple: {
    color: '#7e22ce'
  },
  metricLabel: {
    fontSize: '14px',
    color: '#6b7280'
  },
  chartsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px'
  },
  chartCard: {
    padding: '16px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    backgroundColor: 'white'
  },
  chartTitle: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#4b5563',
    marginBottom: '8px'
  },
  chartContainer: {
    height: '160px'
  },
  indicators: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    marginTop: '20px'
  },
  indicator: {
    width: '32px',
    height: '8px',
    borderRadius: '4px',
    backgroundColor: '#d1d5db',
    cursor: 'pointer'
  },
  activeIndicator: {
    backgroundColor: '#3b82f6'
  }
};

// Simple icon components
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const SimpleInitialScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSlide, setActiveSlide] = useState(0);
  
  const totalSlides = 3;
  
  const nextSlide = () => {
    setActiveSlide((activeSlide + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setActiveSlide((activeSlide - 1 + totalSlides) % totalSlides);
  };

  // Sample data for charts
  const admissionsData = [
    { month: 'Jan', value: 100 },
    { month: 'Feb', value: 140 },
    { month: 'Mar', value: 120 },
    { month: 'Apr', value: 160 },
    { month: 'May', value: 180 },
    { month: 'Jun', value: 160 }
  ];
  
  const departmentData = [
    { name: 'Cardiology', value: 40, fill: '#1e3a8a' },
    { name: 'Oncology', value: 30, fill: '#60a5fa' },
    { name: 'Emergency', value: 20, fill: '#bfdbfe' },
    { name: 'Other', value: 10, fill: '#dbeafe' }
  ];

  const trendData = [
    { month: 'Jan', actual: 420, target: 400 },
    { month: 'Feb', actual: 460, target: 420 },
    { month: 'Mar', actual: 510, target: 440 },
    { month: 'Apr', actual: 570, target: 460 },
    { month: 'May', actual: 620, target: 480 },
    { month: 'Jun', actual: 680, target: 500 }
  ];
  
  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>
            <div style={{ backgroundColor: '#dbeafe', borderRadius: '50%', padding: '10px' }}>
              <svg width="24" height="24" viewBox="0 0 40 40" style={{ color: '#1e3a8a' }}>
                <g stroke="currentColor" strokeWidth="1.5" fill="none">
                  <circle cx="20" cy="20" r="18" />
                  <line x1="20" y1="8" x2="20" y2="32" />
                  <line x1="8" y1="20" x2="32" y2="20" />
                  <line x1="10" y1="10" x2="30" y2="30" />
                  <line x1="10" y1="30" x2="30" y2="10" />
                </g>
              </svg>
            </div>
            <div style={styles.logoText}>
              <div style={styles.brand}>FUTURE ERA AI</div>
              <div style={styles.subBrand}>LUMINA PRO</div>
            </div>
          </div>
          
          <div style={styles.nav}>
            <button style={{...styles.navButton, ...styles.navActive}}>Home</button>
            <button style={{...styles.navButton, ...styles.navInactive}}>Data</button>
            <button style={{...styles.navButton, ...styles.navInactive}}>History</button>
            <button style={{...styles.navButton, ...styles.navInactive}}>Docs</button>
            <button style={{...styles.navButton, ...styles.navInactive}}>Settings</button>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <div style={styles.hero}>
          <h1 style={styles.heroTitle}>Welcome to Lumina Pro</h1>
          <p style={styles.heroSubtitle}>How can I help you today?</p>
          <p style={styles.heroText}>Ask anything about your data</p>
          
          {/* Search Input */}
          <div style={styles.searchContainer}>
            <input
              type="text"
              placeholder="Ask Lumina Pro a question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={styles.searchInput}
            />
            <button style={styles.searchButton}>
              <SearchIcon />
            </button>
          </div>
          
          {/* Example Queries */}
          <div style={styles.exampleQueries}>
            <button style={styles.queryButton}>What was our Q1 revenue growth?</button>
            <button style={styles.queryButton}>Show patient satisfaction trends</button>
            <button style={styles.queryButton}>Compare department performance</button>
          </div>
        </div>
        
        {/* Dashboard Carousel */}
        <div style={styles.carouselSection}>
          <h2 style={styles.carouselTitle}>Explore Your Data</h2>
          
          <div style={styles.carouselContainer}>
            <button
              onClick={prevSlide}
              style={{...styles.carouselNav, ...styles.prevButton}}
            >
              <ChevronLeft />
            </button>
            
            <button
              onClick={nextSlide}
              style={{...styles.carouselNav, ...styles.nextButton}}
            >
              <ChevronRight />
            </button>
            
            <div style={styles.slideContainer}>
              <div
                style={{
                  ...styles.slidesWrapper,
                  transform: `translateX(-${activeSlide * 100}%)`,
                }}
              >
                {/* Dashboard 1 */}
                <div style={styles.slide}>
                  <div style={styles.dashboardWrapper}>
                    <div style={styles.dashboard}>
                      <div style={{...styles.dashboardHeader, ...styles.dashboardBlue}}>
                        Healthcare Performance Data
                      </div>
                      <div style={styles.dashboardContent}>
                        <div style={styles.metricsGrid}>
                          <div style={styles.metricCard}>
                            <div style={{...styles.metricValue, ...styles.metricBlue}}>94%</div>
                            <div style={styles.metricLabel}>Patient Satisfaction</div>
                          </div>
                          <div style={styles.metricCard}>
                            <div style={{...styles.metricValue, ...styles.metricBlue}}>$4.2M</div>
                            <div style={styles.metricLabel}>Revenue (Q1)</div>
                          </div>
                          <div style={styles.metricCard}>
                            <div style={{...styles.metricValue, ...styles.metricLightBlue}}>21%</div>
                            <div style={styles.metricLabel}>YoY Growth</div>
                          </div>
                          <div style={styles.metricCard}>
                            <div style={{...styles.metricValue, ...styles.metricBlue}}>3.2 days</div>
                            <div style={styles.metricLabel}>Avg. Stay</div>
                          </div>
                        </div>
                        
                        <div style={styles.chartsGrid}>
                          <div style={styles.chartCard}>
                            <div style={styles.chartTitle}>Monthly Patient Admissions</div>
                            <div style={styles.chartContainer}>
                              <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={admissionsData}>
                                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                                  <YAxis hide={true} />
                                  <Tooltip />
                                  <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#3b82f6"
                                    strokeWidth={2}
                                    dot={{ r: 4, strokeWidth: 2, stroke: "#3b82f6", fill: "white" }}
                                  />
                                </LineChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
                          
                          <div style={styles.chartCard}>
                            <div style={styles.chartTitle}>Department Revenue</div>
                            <div style={styles.chartContainer}>
                              <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                  <Pie
                                    data={departmentData}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={60}
                                    dataKey="value"
                                    stroke="#fff"
                                    strokeWidth={2}
                                  />
                                  <Tooltip />
                                </PieChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Dashboard 2 */}
                <div style={styles.slide}>
                  <div style={styles.dashboardWrapper}>
                    <div style={styles.dashboard}>
                      <div style={{...styles.dashboardHeader, ...styles.dashboardGreen}}>
                        Financial Analytics Dashboard
                      </div>
                      <div style={styles.dashboardContent}>
                        <div style={styles.metricsGrid}>
                          <div style={styles.metricCard}>
                            <div style={{...styles.metricValue, ...styles.metricGreen}}>$11.2M</div>
                            <div style={styles.metricLabel}>Total Revenue</div>
                          </div>
                          <div style={styles.metricCard}>
                            <div style={{...styles.metricValue, ...styles.metricGreen}}>$6.8M</div>
                            <div style={styles.metricLabel}>Operating Costs</div>
                          </div>
                          <div style={styles.metricCard}>
                            <div style={{...styles.metricValue, ...styles.metricGreen}}>$4.4M</div>
                            <div style={styles.metricLabel}>Net Profit</div>
                          </div>
                          <div style={styles.metricCard}>
                            <div style={{...styles.metricValue, ...styles.metricGreen}}>39.3%</div>
                            <div style={styles.metricLabel}>Profit Margin</div>
                          </div>
                        </div>
                        
                        <div style={styles.chartsGrid}>
                          <div style={styles.chartCard}>
                            <div style={styles.chartTitle}>Revenue vs Target</div>
                            <div style={styles.chartContainer}>
                              <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={trendData}>
                                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                                  <YAxis hide={true} />
                                  <Tooltip />
                                  <Line
                                    type="monotone"
                                    dataKey="actual"
                                    name="Actual Revenue"
                                    stroke="#059669"
                                    strokeWidth={2}
                                    dot={{ r: 4, strokeWidth: 2, stroke: "#059669", fill: "white" }}
                                  />
                                  <Line
                                    type="monotone"
                                    dataKey="target"
                                    name="Target"
                                    stroke="#94a3b8"
                                    strokeWidth={2}
                                    strokeDasharray="5 5"
                                    dot={false}
                                  />
                                </LineChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
                          
                          <div style={styles.chartCard}>
                            <div style={styles.chartTitle}>Revenue by Service Line</div>
                            <div style={styles.chartContainer}>
                              <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                  data={[
                                    { name: 'Inpatient', value: 4.8 },
                                    { name: 'Outpatient', value: 3.2 },
                                    { name: 'Emergency', value: 2.1 },
                                    { name: 'Other', value: 1.1 }
                                  ]}
                                >
                                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                  <YAxis hide={true} />
                                  <Tooltip formatter={(value) => [`$${value}M`, 'Revenue']} />
                                  <Bar dataKey="value" fill="#10b981" radius={[4, 4, 0, 0]} />
                                </BarChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Dashboard 3 */}
                <div style={styles.slide}>
                  <div style={styles.dashboardWrapper}>
                    <div style={styles.dashboard}>
                      <div style={{...styles.dashboardHeader, ...styles.dashboardPurple}}>
                        Operational Metrics Data
                      </div>
                      <div style={styles.dashboardContent}>
                        <div style={styles.metricsGrid}>
                          <div style={styles.metricCard}>
                            <div style={{...styles.metricValue, ...styles.metricPurple}}>92%</div>
                            <div style={styles.metricLabel}>Bed Utilization</div>
                          </div>
                          <div style={styles.metricCard}>
                            <div style={{...styles.metricValue, ...styles.metricPurple}}>43 min</div>
                            <div style={styles.metricLabel}>Avg. Wait Time</div>
                          </div>
                          <div style={styles.metricCard}>
                            <div style={{...styles.metricValue, ...styles.metricPurple}}>13.4%</div>
                            <div style={styles.metricLabel}>Readmission Rate</div>
                          </div>
                          <div style={styles.metricCard}>
                            <div style={{...styles.metricValue, ...styles.metricPurple}}>98.6%</div>
                            <div style={styles.metricLabel}>Staff Utilization</div>
                          </div>
                        </div>
                        
                        <div style={styles.chartsGrid}>
                          <div style={styles.chartCard}>
                            <div style={styles.chartTitle}>Patient Throughput</div>
                            <div style={styles.chartContainer}>
                              <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                  data={[
                                    { day: 'Mon', value: 84 },
                                    { day: 'Tue', value: 96 },
                                    { day: 'Wed', value: 103 },
                                    { day: 'Thu', value: 94 },
                                    { day: 'Fri', value: 82 },
                                    { day: 'Sat', value: 73 },
                                    { day: 'Sun', value: 65 }
                                  ]}
                                >
                                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                  <XAxis dataKey="day" axisLine={false} tickLine={false} />
                                  <YAxis hide={true} />
                                  <Tooltip />
                                  <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#8b5cf6"
                                    strokeWidth={2}
                                    dot={{ r: 4, strokeWidth: 2, stroke: "#8b5cf6", fill: "white" }}
                                  />
                                </LineChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
                          
                          <div style={styles.chartCard}>
                            <div style={styles.chartTitle}>Patient Type Distribution</div>
                            <div style={styles.chartContainer}>
                              <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                  <Pie
                                    data={[
                                      { name: 'Emergency', value: 35, fill: '#8b5cf6' },
                                      { name: 'Scheduled', value: 45, fill: '#a78bfa' },
                                      { name: 'Referral', value: 20, fill: '#ddd6fe' }
                                    ]}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={60}
                                    dataKey="value"
                                    stroke="#fff"
                                    strokeWidth={2}
                                  />
                                  <Tooltip />
                                </PieChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Carousel Indicators */}
            <div style={styles.indicators}>
              {[...Array(totalSlides)].map((_, index) => (
                <div
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  style={{
                    ...styles.indicator,
                    ...(index === activeSlide ? styles.activeIndicator : {}),
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SimpleInitialScreen;