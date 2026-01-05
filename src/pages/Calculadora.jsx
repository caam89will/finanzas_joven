import React, { useState, useEffect } from 'react';

const Calculadora = () => {
  const [principal, setPrincipal] = useState(1000);
  const [contribution, setContribution] = useState(100);
  const [rate, setRate] = useState(10);
  const [years, setYears] = useState(20);
  const [finalAmount, setFinalAmount] = useState(0);
  const [totalInvested, setTotalInvested] = useState(0);

  useEffect(() => {
    const r = rate / 100 / 12;
    const n = years * 12;
    
    // Formula: FV = P * (1 + r)^n + PMT * ((1 + r)^n - 1) / r
    const futureValue = principal * Math.pow(1 + r, n) + 
                        (contribution * (Math.pow(1 + r, n) - 1)) / r;
    
    setFinalAmount(futureValue);
    setTotalInvested(principal + (contribution * n));
  }, [principal, contribution, rate, years]);

  const formatMoney = (amount) => {
    return new Intl.NumberFormat('es-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  return (
    <div className="container">
      <header className="section-head" style={{ textAlign: 'center', marginBottom: '2rem', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Calculadora de Interés Compuesto</h1>
        <p className="sub" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Descubre el poder del tiempo y la rentabilidad. Simula cuánto crecerá tu patrimonio invirtiendo a largo plazo.
        </p>
      </header>

      <div className="grid cols-2" style={{ alignItems: 'start', gap: '2rem' }}>
        {/* Formulario */}
        <div className="card">
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="label">Inversión Inicial ($)</label>
              <input 
                type="number" 
                className="input" 
                value={principal} 
                onChange={(e) => setPrincipal(Number(e.target.value))}
              />
            </div>
            <div>
              <label className="label">Aporte Mensual ($)</label>
              <input 
                type="number" 
                className="input" 
                value={contribution} 
                onChange={(e) => setContribution(Number(e.target.value))}
              />
            </div>
            <div>
              <label className="label">Tasa de Interés Anual (%)</label>
              <input 
                type="number" 
                className="input" 
                value={rate} 
                onChange={(e) => setRate(Number(e.target.value))}
              />
              <small className="muted">El S&P 500 promedia un 10% anual histórico.</small>
            </div>
            <div>
              <label className="label">Años a Invertir</label>
              <input 
                type="range" 
                min="1" 
                max="50" 
                className="input" 
                style={{ padding: 0 }}
                value={years} 
                onChange={(e) => setYears(Number(e.target.value))}
              />
              <div className="text-right muted">{years} años</div>
            </div>
          </form>
        </div>

        {/* Resultados */}
        <div className="card" style={{ background: 'var(--brand-50)', borderColor: 'var(--brand-200)' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Proyección a {years} años</h3>
          
          <div style={{ marginBottom: '1rem' }}>
            <div className="muted" style={{ fontSize: '0.9rem' }}>Dinero Total Acumulado</div>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--brand-600)', lineHeight: 1 }}>
              {formatMoney(finalAmount)}
            </div>
          </div>

          <div className="grid cols-2" style={{ gap: '1rem', marginTop: '2rem' }}>
            <div>
              <div className="muted" style={{ fontSize: '0.8rem' }}>Tu Inversión (Capital)</div>
              <div style={{ fontWeight: '600' }}>{formatMoney(totalInvested)}</div>
            </div>
            <div>
              <div className="muted" style={{ fontSize: '0.8rem' }}>Ganancia por Interés</div>
              <div style={{ fontWeight: '600', color: 'var(--success)' }}>+{formatMoney(finalAmount - totalInvested)}</div>
            </div>
          </div>

          <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.5)', borderRadius: '0.5rem' }}>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
              <strong>Análisis:</strong> Si mantienes este ritmo, tu dinero se multiplicará por <strong>{ (finalAmount / totalInvested).toFixed(1) }x</strong> gracias al interés compuesto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculadora;