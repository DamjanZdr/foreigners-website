'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footstep from './Footstep';
import { theme } from '@/lib/theme';

interface Waypoint {
  id: number;
  sectionId: string;
  position: 'top-right' | 'bottom-left' | 'center-left' | 'left' | 'bottom-right';
  offsetX?: number;
  offsetY?: number;
  side: 'left' | 'right';
  message: string;
}

const waypoints: Waypoint[] = [
  {
    id: 1,
    sectionId: 'services',
    position: 'top-right',
    offsetX: -350, // More to the left (was -250)
    offsetY: 160, // Lower (was 120)
    side: 'left',
    message: 'Spend several weeks online trying to figure out the process'
  },
  {
    id: 2,
    sectionId: 'services',
    position: 'bottom-left',
    offsetX: 100,
    offsetY: -550,
    side: 'right',
    message: 'Collect all the needed documents, find translators and notaries'
  },
  {
    id: 3,
    sectionId: 'mid-cta-section',
    position: 'center-left',
    offsetX: -150,
    offsetY: 100,
    side: 'right',
    message: 'Fill out hundreds of documents, applications and forms correctly'
  },
  {
    id: 4,
    sectionId: 'offices',
    position: 'bottom-right',
    offsetX: -350,
    offsetY: -150,
    side: 'right',
    message: 'Wait hours in line with a friend who speaks Polish on several occasions'
  },
  {
    id: 5,
    sectionId: 'consultation',
    position: 'top-right',
    offsetX: -250,
    offsetY: 20,
    side: 'left',
    message: 'And even if you do everything correctly, which rarely happens, you still have to wait up to 2 years'
  }
];

interface JourneyPathProps {
  isActive: boolean;
  currentWaypoint: number;
  onWaypointClick: (id: number) => void;
}

export default function JourneyPath({ isActive, currentWaypoint, onWaypointClick }: JourneyPathProps) {
  const [waypointPositions, setWaypointPositions] = useState<{ x: number; y: number }[]>([]);
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  const [curveSeeds, setCurveSeeds] = useState<number[]>([]);
  const [visibleWaypoints, setVisibleWaypoints] = useState<number>(1);

  // Update visible waypoints when currentWaypoint changes
  useEffect(() => {
    if (currentWaypoint > visibleWaypoints) {
      // Calculate the number of steps for the current segment to determine delay
      // Each step takes 0.03s delay + 0.4s animation, use average 0.2s per step
      const stepsPerSegment = 8; // approximate average
      const delayBeforeShow = stepsPerSegment * 0.2;
      setTimeout(() => {
        setVisibleWaypoints(currentWaypoint);
      }, delayBeforeShow * 1000);
    } else {
      setVisibleWaypoints(currentWaypoint);
    }
  }, [currentWaypoint, visibleWaypoints]);

  // Generate stable curve seeds once on mount
  useEffect(() => {
    if (curveSeeds.length === 0) {
      // Generate random seeds for each segment that won't change
      const seeds = waypoints.map((_, index) => Math.random());
      setCurveSeeds(seeds);
    }
  }, []);

  useEffect(() => {
    if (!isActive) return;

    const calculatePositions = () => {
      const positions = waypoints.map((waypoint) => {
        const section = document.getElementById(waypoint.sectionId);
        if (!section) {
          console.log(`Section not found: ${waypoint.sectionId}`);
          return { x: 0, y: 0 };
        }

        const rect = section.getBoundingClientRect();
        const scrollY = window.scrollY;
        
        let x = 0;
        let y = 0;

        switch (waypoint.position) {
          case 'top-right':
            x = rect.right + (waypoint.offsetX || 0);
            y = rect.top + scrollY + (waypoint.offsetY || 0);
            break;
          case 'bottom-left':
            x = rect.left + (waypoint.offsetX || 0);
            y = rect.bottom + scrollY + (waypoint.offsetY || 0);
            break;
          case 'center-left':
            x = rect.left + rect.width / 2 + (waypoint.offsetX || 0);
            y = rect.top + scrollY + rect.height / 2 + (waypoint.offsetY || 0);
            break;
          case 'left':
            x = rect.left + (waypoint.offsetX || 0);
            y = rect.top + scrollY + rect.height / 2 + (waypoint.offsetY || 0);
            break;
          case 'bottom-right':
            x = rect.right + (waypoint.offsetX || 0);
            y = rect.bottom + scrollY + (waypoint.offsetY || 0);
            break;
        }

        console.log(`Waypoint ${waypoint.id} at section ${waypoint.sectionId}:`, { x, y, rect });
        return { x, y };
      });

      setWaypointPositions(positions);
    };

    // Calculate immediately and on events
    setTimeout(calculatePositions, 100); // Small delay to ensure DOM is ready
    calculatePositions();
    window.addEventListener('resize', calculatePositions);
    window.addEventListener('scroll', calculatePositions);

    return () => {
      window.removeEventListener('resize', calculatePositions);
      window.removeEventListener('scroll', calculatePositions);
    };
  }, [isActive, currentWaypoint]);

  const generateFootsteps = () => {
    if (currentWaypoint < 1 || curveSeeds.length === 0) {
      return [];
    }
    
    const steps = [];
    let totalStepCount = 0;
    
    // Helper function to create footsteps between two points with curved path
    const createFootstepsBetween = (startX: number, startY: number, endX: number, endY: number, startingStepCount: number, segmentIndex: number) => {
      const deltaX = endX - startX;
      const deltaY = endY - startY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const numSteps = Math.floor(distance / 100); // One footstep every 100 pixels
      
      // For first segment (card to point 1), use straight line. For others, use curve
      const useStraightLine = segmentIndex === 0;
      
      // Create control points for bezier curve to add natural curvature
      // Offset control points perpendicular to the line between start and end
      const midX = (startX + endX) / 2;
      const midY = (startY + endY) / 2;
      
      // Calculate perpendicular offset (random curve)
      const perpX = -(deltaY) / distance;
      const perpY = deltaX / distance;
      
      // Use stable seed for this segment
      const seed = curveSeeds[segmentIndex] || 0.5;
      const curveAmount = useStraightLine ? 0 : (200 + seed * 300);
      const direction = seed > 0.5 ? 1 : -1;
      
      const controlX = midX + perpX * curveAmount * direction;
      const controlY = midY + perpY * curveAmount * direction;
      
      const pathSteps = [];
      for (let i = 1; i < numSteps; i++) { // Skip i=0 (first) and i=numSteps (last)
        const t = i / (numSteps || 1);
        
        // Quadratic bezier curve: B(t) = (1-t)^2*P0 + 2(1-t)t*P1 + t^2*P2
        const x = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * controlX + t * t * endX;
        const y = (1 - t) * (1 - t) * startY + 2 * (1 - t) * t * controlY + t * t * endY;
        
        // Calculate tangent angle for rotation
        const tx = 2 * (1 - t) * (controlX - startX) + 2 * t * (endX - controlX);
        const ty = 2 * (1 - t) * (controlY - startY) + 2 * t * (endY - controlY);
        const angle = Math.atan2(ty, tx) * (180 / Math.PI);
        
        const isRightFoot = (startingStepCount + i) % 2 === 0;
        const offset = isRightFoot ? 12 : -12;
        const flipTransform = isRightFoot ? 'scale(-1, 1)' : '';
        
        // Calculate animation delay
        const stepIndex = startingStepCount + i;
        const animationDelay = stepIndex * 0.03;
        
        pathSteps.push(
          <g 
            key={`step-${stepIndex}`}
            transform={`translate(${x}, ${y}) rotate(${angle + 90})`}
            opacity="0"
            style={{
              animation: `fadeInFootstep 0.4s ease-out ${animationDelay}s forwards`
            }}
          >
            <g transform={`translate(${offset}, 0) ${flipTransform} scale(0.15)`}>
              <image 
                href="/shoeprint.png" 
                x="-100" 
                y="-200" 
                width="200" 
                height="400"
              />
            </g>
          </g>
        );
      }
      
      return { pathSteps, stepCount: numSteps + 1 };
    };
    
    // Footsteps from card to point 1
    const card = document.querySelector('[data-journey-card="true"]');
    let startX = window.innerWidth / 2;
    let startY = 450;
    
    if (card) {
      const rect = card.getBoundingClientRect();
      startX = rect.left + rect.width / 2;
      startY = rect.bottom + window.scrollY + 30;
    }
    
    const point1 = waypointPositions[0];
    if (!point1?.x || !point1?.y) return [];
    
    const segment1 = createFootstepsBetween(startX, startY, point1.x, point1.y, totalStepCount, 0);
    steps.push(...segment1.pathSteps);
    totalStepCount += segment1.stepCount;
    
    // Footsteps from point 1 to point 2 (if waypoint 2 is reached)
    if (currentWaypoint >= 2) {
      const point2 = waypointPositions[1];
      if (point2?.x && point2?.y) {
        const segment2 = createFootstepsBetween(point1.x, point1.y, point2.x, point2.y, totalStepCount, 1);
        steps.push(...segment2.pathSteps);
        totalStepCount += segment2.stepCount;
      }
    }
    
    // Footsteps from point 2 to point 3 (if waypoint 3 is reached)
    if (currentWaypoint >= 3) {
      const point2 = waypointPositions[1];
      const point3 = waypointPositions[2];
      if (point2?.x && point2?.y && point3?.x && point3?.y) {
        const segment3 = createFootstepsBetween(point2.x, point2.y, point3.x, point3.y, totalStepCount, 2);
        steps.push(...segment3.pathSteps);
        totalStepCount += segment3.stepCount;
      }
    }
    
    // Footsteps from point 3 to point 4 (if waypoint 4 is reached)
    if (currentWaypoint >= 4) {
      const point3 = waypointPositions[2];
      const point4 = waypointPositions[3];
      if (point3?.x && point3?.y && point4?.x && point4?.y) {
        const segment4 = createFootstepsBetween(point3.x, point3.y, point4.x, point4.y, totalStepCount, 3);
        steps.push(...segment4.pathSteps);
        totalStepCount += segment4.stepCount;
      }
    }
    
    // Footsteps from point 4 to point 5 (if waypoint 5 is reached)
    if (currentWaypoint >= 5) {
      const point4 = waypointPositions[3];
      const point5 = waypointPositions[4];
      if (point4?.x && point4?.y && point5?.x && point5?.y) {
        const segment5 = createFootstepsBetween(point4.x, point4.y, point5.x, point5.y, totalStepCount, 4);
        steps.push(...segment5.pathSteps);
        totalStepCount += segment5.stepCount;
      }
    }
    
    return steps;
  };

  if (!isActive) return null;

  const footsteps = generateFootsteps();
  console.log('Generated footsteps:', footsteps.length, 'Current waypoint:', currentWaypoint);
  console.log('Waypoint positions:', waypointPositions);

  // Calculate the height needed for the SVG to cover all waypoints
  const maxY = Math.max(...waypointPositions.map(p => p.y || 0), 0);
  const svgHeight = Math.max(maxY + 500, document.body.scrollHeight);

  return (
    <>
      {/* Footsteps SVG overlay */}
      <div 
        className="absolute top-0 left-0 w-full pointer-events-none z-[10] hidden md:block" 
        style={{ height: `${svgHeight}px` }}
      >
        <svg
          className="absolute top-0 left-0"
          width="100%"
          height={svgHeight}
          style={{ display: 'block' }}
        >
          {footsteps}
        </svg>
      </div>

      {/* Waypoint markers */}
      {waypoints.map((waypoint, index) => {
        const position = waypointPositions[index];
        if (!position) return null;

        const isVisible = index < visibleWaypoints;
        const isLast = index === waypoints.length - 1;
        const isClickable = index === currentWaypoint - 1; // Allow clicking waypoint 5 too
        
        return (
          <motion.div
            key={waypoint.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: index * 0.3, duration: 0.4 }}
            className={`hidden md:block absolute z-[100] ${isClickable ? 'pointer-events-auto cursor-pointer' : 'pointer-events-none'}`}
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
              transform: 'translate(-50%, -50%)'
            }}
            onClick={() => {
              console.log('Waypoint clicked:', waypoint.id, 'isClickable:', isClickable);
              if (isClickable) {
                setActiveTooltip(waypoint.id); // Show tooltip on click
                onWaypointClick(waypoint.id);
              }
            }}
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: activeTooltip === waypoint.id ? 1.2 : 1,
                }}
                className={`w-12 h-12 ${theme.radius.full} ${
                  isLast ? 'bg-primary' : 'bg-gray-700'
                } shadow-lg flex items-center justify-center ${
                  isClickable ? 'cursor-pointer' : ''
                } relative`}
              >
                {isLast ? (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <div className="w-3 h-3 bg-white rounded-full" />
                )}
                
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className={`absolute inset-0 ${theme.radius.full} ${
                    isLast ? 'bg-primary' : 'bg-gray-700'
                  }`}
                />
              </motion.div>

              <AnimatePresence>
                {isVisible && activeTooltip === waypoint.id && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-64 z-50 pointer-events-none"
                  >
                    <div className={`bg-white ${theme.shadow.xl} ${theme.radius.lg} p-4 border border-gray-200`}>
                      <p className={`${theme.fontSize.sm} text-gray-700 leading-relaxed text-center`}>
                        {waypoint.message}
                      </p>
                      {isLast && (
                        <div className="mt-3 flex items-center gap-2">
                          <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                          </svg>
                          <span className="text-primary font-semibold">Let us help!</span>
                        </div>
                      )}
                    </div>
                    {/* Arrow pointer pointing up */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[-8px]">
                      <div className="w-4 h-4 bg-white border-gray-200 transform rotate-45 border-l border-t" />
                    </div>
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 ${
                        waypoint.side === 'right' ? '-left-2' : '-right-2'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white border-gray-200 transform rotate-45 ${
                        waypoint.side === 'right' 
                          ? 'border-l border-b' 
                          : 'border-r border-t'
                      }`} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}
