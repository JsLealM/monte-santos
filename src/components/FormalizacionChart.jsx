import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

const data = [
  { year: '2018', formales: 310, informales: 480, brecha: 170 },
  { year: '2019', formales: 342, informales: 470, brecha: 128 },
  { year: '2020', formales: 298, informales: 510, brecha: 212 },
  { year: '2021', formales: 370, informales: 480, brecha: 110 },
  { year: '2022', formales: 430, informales: 460, brecha: 30 },
  { year: '2023', formales: 501, informales: 440, brecha: -61 },
  { year: '2024', formales: 507, informales: 435, brecha: -72 },
  { year: '2025', formales: 519, informales: 432, brecha: -87 },
  { year: '2026*', formales: 530, informales: 450, brecha: -80 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    // Assuming both formales and informales are in payload
    // You could also get it directly from the original data object
    const dataPoint = payload[0].payload;
    const brecha = dataPoint.brecha;
    const prefix = brecha > 0 ? '+' : '';
    
    return (
      <div className="chart-tooltip">
        <p className="chart-tooltip-title">{`Año: ${label}`}</p>
        <p className="chart-tooltip-item" style={{ color: '#3a9e72' }}>
          {`Formales: ${dataPoint.formales}`}
        </p>
        <p className="chart-tooltip-item" style={{ color: '#c0392b' }}>
          {`Informales: ${dataPoint.informales}`}
        </p>
        <p className="chart-tooltip-item" style={{ color: 'var(--color-text)', marginTop: '8px', borderTop: '1px solid var(--color-rule)', paddingTop: '4px' }}>
          {`Brecha de informalidad: ${prefix}${brecha}`}
        </p>
      </div>
    );
  }

  return null;
};

export default function FormalizacionChart() {
  return (
    <div className="chart-container">
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="var(--color-rule)" />
            <XAxis type="number" stroke="var(--color-text)" tick={{ fill: 'var(--color-text-secondary)' }} />
            <YAxis dataKey="year" type="category" stroke="var(--color-text)" tick={{ fill: 'var(--color-text-secondary)' }} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--color-surface-inset)', opacity: 0.5 }} />
            <Legend wrapperStyle={{ color: 'var(--color-text)' }} verticalAlign="top" height={36} />
            <Bar dataKey="formales" name="Negocios Formales" fill="#3a9e72">
              <LabelList dataKey="formales" position="insideRight" fill="#fff" fontSize={11} />
            </Bar>
            <Bar dataKey="informales" name="Negocios Informales" fill="#c0392b">
              <LabelList dataKey="informales" position="insideRight" fill="#fff" fontSize={11} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-footnote">
        <p>Fuentes: CCB Dinámica Empresarial 2023-2025. DANE-EMICRON 2024. Proyecciones ANIF 2025.</p>
      </div>
    </div>
  );
}
