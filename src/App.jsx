
import { useState } from "react";
import CompanyField from "../src/components/CompanyField";
import VolumeBusinessField from "../src/components/VolumeBusinessField";
import TaxDetailField from "../src/components/TaxDetailField";
import AccountingStatusField from "../src/components/AccountingStatusField";
import ContactSupportField from "../src/components/ContactSupportField";
import Stepper from "../src/components/stepper/Stepper";
import { Building2, BarChart3, FileText, BookOpen, Phone } from "lucide-react";

export default function App() {

  const [step, setStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const steps = [
    {
      label: "Unternehmen",
      icon: <Building2 className="w-5 h-5" />,
    },
    {
      label: "Volumen",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      label: "Steuern",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      label: "Buchhaltung",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      label: "Kontakt",
      icon: <Phone className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-indigo-600">Bilancor</p>
            <h2 className="text-lg font-semibold">Mandanten-Steckbrief</h2>
          </div>

          <div className="text-xs text-slate-500">
            Secure onboarding form
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-3xl px-4 py-10">
        {/* Stepper */}
        <div className="mb-8">
          <Stepper steps={steps} currentStep={step - 1} />
          {/* <div className="flex justify-between mb-3">
            {steps.map((item, index) => (
              <div
                key={item}
                className={`text-xs font-medium transition-colors
        ${step === index + 1
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-slate-400"
                  }`}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-600 rounded-full" style={{
              width: `${(step / steps.length) * 100}%`,
            }}></div>
          </div> */}
        </div>

        {/* Card */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6">
          {step === 1 && <CompanyField />}
          {step === 2 && <VolumeBusinessField />}
          {step === 3 && <TaxDetailField />}
          {step === 4 && <AccountingStatusField />}
          {step === 5 && !isCompleted && <ContactSupportField />}
          {isCompleted && (
            <div className="flex items-center justify-center py-20">
              <div className="text-center bg-green-50 border border-green-200 p-10 rounded-xl">
                <div className="text-5xl mb-4">🎉</div>
                <h1 className="text-xl font-semibold text-green-700">
                  Alles erledigt!
                </h1>
                <p className="text-sm text-green-600 mt-2">
                  Der Mandanten-Steckbrief wurde gespeichert.
                </p>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-between mt-8 pt-5 border-t border-slate-200">
            <button
              onClick={() => setStep(step - 1)}
              disabled={step === 1}
              hidden = {isCompleted}
              className="px-4 py-2.5 rounded-lg border border-slate-300 text-[13px] font-medium hover:bg-indigo-700 transition-colors
  disabled:opacity-40 disabled:cursor-not-allowed">
              Zurück
            </button>

            <button
              onClick={() => {
                if (step === 5) setIsCompleted(true);
                setStep(step + 1);
              }}
              hidden = {isCompleted}
              // disabled={step === steps.length}
              className="px-4 py-2.5 rounded-lg bg-indigo-600 text-white text-[13px] font-medium hover:bg-indigo-700 transition-colors
  disabled:opacity-40 disabled:cursor-not-allowed">
              {step === 5 ? "Absenden" : "Weiter →"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}