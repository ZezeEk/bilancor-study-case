import { Check } from "lucide-react";

function Stepper({ steps, currentStep }) {
    return (
        <div className="flex items-center w-full">
            {steps.map((step, index) => {
                const isDone = index < currentStep;
                const isActive = index === currentStep;

                return (
                    <div key={step.label} className="flex items-center flex-1">
                        
                        {/* STEP CIRCLE */}
                        <div
                            className={`
                                w-10 h-10 rounded-full flex items-center justify-center border transition
                                ${isDone
                                    ? "bg-green-500 border-green-500 text-white"
                                    : isActive
                                        ? "bg-indigo-500 border-indigo-500 text-white"
                                        : "bg-white border-slate-300 text-slate-400"
                                }
                            `}
                        >
                            {isDone ? <Check className="w-5 h-5" /> : step.icon}
                        </div>

                        {/* LINE */}
                        {index !== steps.length - 1 && (
                            <div className="flex-1 h-[2px] mx-3 bg-slate-200 relative overflow-hidden rounded">
                                <div
                                    className={`
                                        h-full transition-all duration-300
                                        ${index < currentStep
                                            ? "w-full bg-green-500"
                                            : "w-0"
                                        }
                                    `}
                                />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default Stepper;