'use client';

import React, { useState, useId } from 'react';

export default function IntegrationRoiCalculator() {
  const [teamSize, setTeamSize] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(65);
  const [hoursPerWeek, setHoursPerWeek] = useState(8);

  // Radio selection for typical manual workflow bottleneck
  const [workflowType, setWorkflowType] = useState('legal_crm');

  const baseCalculationsId = useId();

  // Workflow efficiency multiplier & descriptions
  const workflows = {
    legal_crm: {
      label: 'Legal CRM & Intake (Clio, SmartAdvocate, MyCase)',
      efficiency: 0.75, // 75% efficiency gain
      description: 'Automates client intake, lead routing, and case creation across platforms.',
    },
    ai_voice: {
      label: 'AI Voice & Lead Follow-Up (Retell AI, Vapi, Call Transfers)',
      efficiency: 0.85, // 85% efficiency gain
      description: 'Instant lead qualification, automated call logging, and live calendar booking.',
    },
    custom_api: {
      label: 'Custom Webhooks & Billing (LawPay, Zoho, Monday.com)',
      efficiency: 0.70, // 70% efficiency gain
      description: 'Eliminates double data entry, payment reconciliation errors, and manual status updates.',
    },
  };

  // Calculations
  const currentMonthlyHours = Math.round(teamSize * hoursPerWeek * 4.33);
  const currentMonthlyCost = Math.round(currentMonthlyHours * hourlyRate);

  const selectedWorkflow = workflows[workflowType];
  const savedMonthlyHours = Math.round(currentMonthlyHours * selectedWorkflow.efficiency);
  const savedMonthlyDollars = Math.round(currentMonthlyCost * selectedWorkflow.efficiency);
  const annualSavings = Math.round(savedMonthlyDollars * 12);

  return (
    <section className="w-full max-w-4xl mx-auto my-12 p-6 sm:p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl text-slate-100">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 rounded-full mb-3">
          Interactive Estimator
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Calculate Your Automation ROI
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-400">
          Estimate how much manual intake, data entry, and CRM syncing cost your team each month and what custom integrations save back.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Input Controls */}
        <div className="lg:col-span-7 space-y-6 bg-slate-950/50 p-6 rounded-xl border border-slate-800/80">
          {/* Preset Workflow Selection */}
          <div>
            <label className="block text-sm font-semibold text-slate-200 mb-2">
              Primary Bottleneck / Integration Focus
            </label>
            <div className="space-y-2">
              {Object.entries(workflows).map(([key, item]) => (
                <label
                  key={key}
                  className={`flex items-start p-3 rounded-lg border text-xs sm:text-sm cursor-pointer transition-all ${
                    workflowType === key
                      ? 'bg-slate-800/90 border-emerald-500 text-white'
                      : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <input
                    type="radio"
                    name="workflow"
                    value={key}
                    checked={workflowType === key}
                    onChange={(e) => setWorkflowType(e.target.value)}
                    className="mt-0.5 text-emerald-500 focus:ring-emerald-500 bg-slate-950 border-slate-700"
                  />
                  <span className="ml-3">
                    <span className="block font-medium text-slate-200">{item.label}</span>
                    <span className="block text-xs text-slate-400 mt-0.5">{item.description}</span>
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Slider 1: Team Size */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor={`${baseCalculationsId}-team-size`} className="text-sm font-medium text-slate-300">
                Team Size (Intake / Staff)
              </label>
              <span className="text-sm font-bold text-emerald-400 font-mono">
                {teamSize} {teamSize === 1 ? 'person' : 'people'}
              </span>
            </div>
            <input
              id={`${baseCalculationsId}-team-size`}
              type="range"
              min="1"
              max="50"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          {/* Slider 2: Hours per Week per Person */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor={`${baseCalculationsId}-hours`} className="text-sm font-medium text-slate-300">
                Manual Hours / Person / Week
              </label>
              <span className="text-sm font-bold text-emerald-400 font-mono">
                {hoursPerWeek} hrs/wk
              </span>
            </div>
            <input
              id={`${baseCalculationsId}-hours`}
              type="range"
              min="1"
              max="25"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <p className="mt-1 text-xs text-slate-500">
              Covers manual copy-pasting, lead follow-ups, payment checks, and data entry.
            </p>
          </div>

          {/* Slider 3: Average Hourly Cost */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor={`${baseCalculationsId}-hourly-rate`} className="text-sm font-medium text-slate-300">
                Blended Hourly Cost ($)
              </label>
              <span className="text-sm font-bold text-emerald-400 font-mono">
                ${hourlyRate}/hr
              </span>
            </div>
            <input
              id={`${baseCalculationsId}-hourly-rate`}
              type="range"
              min="20"
              max="200"
              step="5"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>
        </div>

        {/* Right Column: Output Summary */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full bg-gradient-to-b from-slate-800/90 to-slate-900 border border-slate-700/60 p-6 rounded-xl shadow-inner">
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-slate-400 uppercase mb-4">
              Estimated Savings Breakdown
            </h3>

            {/* Main Highlighted Number */}
            <div className="p-4 rounded-lg bg-emerald-950/40 border border-emerald-800/40 mb-6 text-center sm:text-left">
              <span className="block text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                Projected Annual ROI
              </span>
              <span className="block text-3xl sm:text-4xl font-extrabold text-emerald-300 mt-1 font-mono">
                ${annualSavings.toLocaleString()}
              </span>
              <span className="block text-xs text-slate-400 mt-1">
                Saved back per year in operational efficiency
              </span>
            </div>

            {/* Itemized Stats */}
            <div className="space-y-4 divide-y divide-slate-800/80">
              <div className="flex justify-between items-center pt-2 text-sm">
                <span className="text-slate-400">Monthly Hours Saved:</span>
                <span className="font-semibold text-white font-mono">{savedMonthlyHours} hrs</span>
              </div>
              <div className="flex justify-between items-center pt-3 text-sm">
                <span className="text-slate-400">Monthly Dollars Saved:</span>
                <span className="font-semibold text-emerald-400 font-mono">${savedMonthlyDollars.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pt-3 text-sm">
                <span className="text-slate-400">Current Manual Waste:</span>
                <span className="font-semibold text-slate-300 font-mono">${currentMonthlyCost.toLocaleString()}/mo</span>
              </div>
            </div>
          </div>

          {/* High-Converting CTA Button */}
          <div className="mt-8 pt-4 border-t border-slate-800">
            <a
              href="/contact"
              className="block w-full text-center py-3.5 px-4 rounded-xl font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:scale-[0.98] transition-all shadow-lg shadow-emerald-500/20"
            >
              Book a 30-Min Technical Consultation &rarr;
            </a>
            <p className="text-center text-xs text-slate-500 mt-2">
              Free architecture audit • Zero long-term lock-in
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}