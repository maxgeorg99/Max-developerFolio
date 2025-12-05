import React, {useState, useRef, useEffect} from "react";
import "./DatabaseTimeline.scss";

const milestones = [
  {
    year: 1970,
    title: "Relational Model",
    icon: "\uD83D\uDCCA",
    facts: [
      "Edgar F. Codd published the relational model paper",
      "Introduced SQL as a query language",
      "Foundation for modern databases"
    ]
  },
  {
    year: 1979,
    title: "Oracle DB",
    icon: "\uD83C\uDFDB\uFE0F",
    facts: [
      "First commercial relational database",
      "Larry Ellison founded Oracle Corporation",
      "Dominated enterprise market"
    ]
  },
  {
    year: 1985,
    title: "Client-Server Era",
    icon: "\uD83D\uDCBB",
    facts: [
      "Databases moved from mainframes to servers",
      "SQL became the standard",
      "Rise of data warehousing"
    ]
  },
  {
    year: 1995,
    title: "MySQL & PostgreSQL",
    icon: "\uD83D\uDC2C",
    facts: [
      "Open-source databases gained traction",
      "MySQL focused on web applications",
      "PostgreSQL emphasized standards compliance"
    ]
  },
  {
    year: 2005,
    title: "NoSQL Movement",
    icon: "\uD83D\uDCE6",
    facts: [
      "Google's BigTable and Amazon's Dynamo papers",
      "Focus on scalability and flexibility",
      "Document, key-value, and graph databases emerged"
    ]
  },
  {
    year: 2009,
    title: "MongoDB & Cassandra",
    icon: "\uD83C\uDF43",
    facts: [
      "Document and wide-column stores went mainstream",
      "Schema-less flexibility for rapid development",
      "Horizontal scaling capabilities"
    ]
  },
  {
    year: 2012,
    title: "NewSQL Arrives",
    icon: "\u26A1",
    facts: [
      "Google Spanner introduced globally distributed SQL",
      "Combined ACID guarantees with horizontal scaling",
      "Best of both SQL and NoSQL worlds"
    ]
  },
  {
    year: 2015,
    title: "Cloud-Native DBs",
    icon: "\u2601\uFE0F",
    facts: [
      "AWS Aurora, Azure Cosmos DB launched",
      "Databases designed for the cloud from scratch",
      "Serverless and multi-region by default"
    ]
  },
  {
    year: 2020,
    title: "AI & Vector DBs",
    icon: "\uD83E\uDD16",
    facts: [
      "Vector databases for ML embeddings",
      "Pinecone, Weaviate, Milvus emerged",
      "Databases optimized for AI workloads"
    ]
  }
];

export default function DatabaseTimeline() {
  const [activeIndex, setActiveIndex] = useState(4);
  const [isDragging, setIsDragging] = useState(false);
  const [animationState, setAnimationState] = useState("out"); // "out", "in", "hidden"
  const [previousIndex, setPreviousIndex] = useState(4);
  const sliderRef = useRef(null);
  const timelineRef = useRef(null);
  const wheelTimeoutRef = useRef(null);

  useEffect(() => {
    // Center the active milestone on mount
    if (timelineRef.current && activeIndex !== null) {
      const milestoneElements = timelineRef.current.querySelectorAll(
        ".timeline-milestone"
      );
      if (milestoneElements[activeIndex]) {
        milestoneElements[activeIndex].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center"
        });
      }
    }
  }, [activeIndex]);

  useEffect(() => {
    // Add mouse wheel event listener
    const handleWheel = (e) => {
      e.preventDefault();

      // Throttle wheel events to prevent too rapid changes
      if (wheelTimeoutRef.current) {
        return;
      }

      if (e.deltaY > 0) {
        // Scrolling down - go to next milestone
        if (activeIndex < milestones.length - 1) {
          handleIndexChange(activeIndex + 1);
          wheelTimeoutRef.current = setTimeout(() => {
            wheelTimeoutRef.current = null;
          }, 1200); // Prevent rapid scrolling (matches full animation cycle)
        }
      } else if (e.deltaY < 0) {
        // Scrolling up - go to previous milestone
        if (activeIndex > 0) {
          handleIndexChange(activeIndex - 1);
          wheelTimeoutRef.current = setTimeout(() => {
            wheelTimeoutRef.current = null;
          }, 1200); // Prevent rapid scrolling (matches full animation cycle)
        }
      }
    };

    const container = document.querySelector('.database-timeline-container');
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }
    };
  }, [activeIndex]);

  const handleIndexChange = newIndex => {
    if (newIndex !== activeIndex) {
      // First animate the current card going IN
      setAnimationState("in");

      // After animation completes, switch to new index and animate OUT
      setTimeout(() => {
        setPreviousIndex(activeIndex);
        setActiveIndex(newIndex);
        setAnimationState("out");
      }, 600); // Duration of "in" animation
    }
  };

  const handleSliderChange = e => {
    const index = parseInt(e.target.value);
    handleIndexChange(index);
  };

  const handleMilestoneClick = index => {
    handleIndexChange(index);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="database-timeline-container">
      <div className="timeline-header">
        <h3>40 Years of Database Evolution</h3>
        <p>Explore the key milestones in database technology</p>
      </div>

      <div className="timeline-content">
        <div className="milestone-details">
          {activeIndex !== null && animationState !== "hidden" && (
            <div
              className={`details-card floppy-disk ${animationState}`}
              key={activeIndex}
            >
              <div className="floppy-label">
                <div className="floppy-metal-shutter"></div>
                <div className="floppy-content">
                  <div className="details-header">
                    <span className="details-icon">
                      {milestones[activeIndex].icon}
                    </span>
                    <h4>{milestones[activeIndex].title}</h4>
                    <span className="details-year">
                      {milestones[activeIndex].year}
                    </span>
                  </div>
                  <ul className="details-facts">
                    {milestones[activeIndex].facts.map((fact, idx) => (
                      <li key={idx}>{fact}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="timeline-wrapper" ref={timelineRef}>
          <div className="timeline-line" />
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`timeline-milestone ${
                index === activeIndex ? "active" : ""
              } ${index < activeIndex ? "passed" : ""}`}
              onClick={() => handleMilestoneClick(index)}
            >
              <div className="milestone-dot">
                <div className="milestone-icon">{milestone.icon}</div>
              </div>
              <div className="milestone-year">{milestone.year}</div>
            </div>
          ))}
        </div>

        <div className="timeline-slider">
          <input
            ref={sliderRef}
            type="range"
            min="0"
            max={milestones.length - 1}
            value={activeIndex}
            onChange={handleSliderChange}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className={isDragging ? "dragging" : ""}
          />
          <div className="slider-ticks">
            {milestones.map((_, index) => (
              <div
                key={index}
                className={`tick ${index <= activeIndex ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
