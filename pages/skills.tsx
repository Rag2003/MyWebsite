import React, { useState } from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer, Tooltip } from 'recharts';
import styled from 'styled-components';

interface CustomLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}

const SkillsContainer = styled.div`
  width: 100%;
  min-height: 500px;
  padding: 2rem;
  background: var(--bg-content);
  border-radius: 10px;
  color: var(--text);

  .chart-container {
    width: 100%;
    height: 500px;
  }

  .recharts-legend-item {
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateX(5px);
    }
  }

  .recharts-legend-item-text {
    color: var(--text) !important;
  }

  .custom-tooltip {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 12px;
    padding: 8px 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    font-weight: 600;
    font-size: 14px;
    color: #BB2CFB;
  }

  .sector-label {
    pointer-events: none;
    user-select: none;
  }
`;

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const data = [
    { name: 'AWS', value: 17, color: '#FF9900', textColor: '#FF9900' },
    { name: 'Java', value: 18, color: '#E76F00', textColor: '#E76F00' },
    { name: 'JavaScript', value: 5, color: '#F7DF1E', textColor: '#F7DF1E' },
    { name: 'Python', value: 18, color: '#3776AB', textColor: '#3776AB' },
    { name: 'SQL', value: 15, color: '#00758F', textColor: '#00758F' },
    { name: 'HTML', value: 2, color: '#E34F26', textColor: '#E34F26' },
    { name: 'ExpressJS', value: 5, color: '#000000', textColor: '#6b7280' },
    { name: 'NodeJS', value: 5, color: '#339933', textColor: '#339933' },
    { name: 'NextJS', value: 5, color: '#000000', textColor: '#6b7280' },
    { name: 'Kubernetes', value: 10, color: '#326CE5', textColor: '#326CE5' }
  ];

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: CustomLabelProps) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        className="sector-label"
        x={x}
        y={y}
        fill="var(--text)"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="14"
        style={{
          transformOrigin: 'center',
          transform: activeIndex === index ? `scale(${1/1.05})` : 'none'
        }}
      >
        {`${Math.round(percent * 100)}%`}
      </text>
    );
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          {`${payload[0].name}: ${payload[0].value}%`}
        </div>
      );
    }
    return null;
  };

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  const renderLegendContent = (props: any) => {
    const { payload } = props;
    
    return (
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {payload.map((entry: any, index: number) => (
          <li
            key={`item-${index}`}
            style={{ 
              marginBottom: 10, 
              display: 'flex', 
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <span
              style={{ 
                width: 10, 
                height: 10, 
                backgroundColor: entry.color,
                display: 'inline-block',
                marginRight: 8,
                borderRadius: '50%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                transform: activeIndex === index ? 'scale(1.2)' : 'scale(1)',
                boxShadow: activeIndex === index ? `0 0 8px ${entry.color}` : 'none'
              }}
            />
            <span
              style={{ 
                color: data[index].textColor,
                fontWeight: '600',
                fontSize: '14px',
                transition: 'all 0.3s ease',
                transform: activeIndex === index ? 'translateX(5px)' : 'translateX(0)',
                textShadow: activeIndex === index ? `0 0 10px ${data[index].textColor}` : 'none',
                filter: activeIndex === index ? 'brightness(1.2)' : 'none'
              }}
            >
              {entry.value}
            </span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <SkillsContainer>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius="60%"
              outerRadius="80%"
              dataKey="value"
              labelLine={false}
              label={renderCustomizedLabel}
              cornerRadius={8}
              paddingAngle={4}
              onMouseEnter={onPieEnter}
              onMouseLeave={onPieLeave}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color}
                  stroke="none"
                  style={{
                    transition: 'transform 0.3s ease, filter 0.3s ease',
                    filter: activeIndex === index ? `drop-shadow(0 0 8px ${entry.color})` : 'none',
                    transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)',
                    transformOrigin: 'center center'
                  }}
                />
              ))}
            </Pie>
            <Tooltip 
              content={<CustomTooltip />}
              cursor={{ fill: 'var(--bg-content)' }}
            />
            <Legend 
              content={renderLegendContent}
              layout="vertical" 
              align="right"
              verticalAlign="middle"
              wrapperStyle={{
                paddingLeft: '20px'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </SkillsContainer>
  );
};

export default Skills;