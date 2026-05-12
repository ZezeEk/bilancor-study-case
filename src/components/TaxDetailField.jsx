import { AlertTriangle, Shield, Settings, Clock, FileText } from "lucide-react";

function TaxDetailField() {
    return (
        <div >
            {/* Section title */}
            <div className="mb-8 border-b border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-slate-900">
                            Steuerliche Eckdaten
                        </h2>
                    </div>
                </div>
            </div>

            {/* Fields */}
            <div className="space-y-5">
                <div>
                    <div className="flex items-center gap-2 mb-5 border-l-2 border-indigo-500 pl-3">
                        <Shield className="w-4 h-4 text-slate-500" />
                        <h3 className="text-sm font-semibold text-slate-700">
                            Identifikationsdaten
                        </h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Input label="Steuernummer" />
                        <Input label="USt-IdNr." />
                        <Input label="Zuständiges Finanzamt" />
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-5 border-l-2 border-indigo-500 pl-3">
                        <Settings className="w-4 h-4 text-slate-500" />
                        <h3 className="text-sm font-semibold text-slate-700">
                            Buchhaltung & Setup
                        </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
                                Kontenrahmen
                            </label>
                            <select className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500">
                                <option>SKR03</option>
                                <option>SKR04</option>
                            </select>
                        </div>
                        <Input label="Versteuerungsart" />
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-5 border-l-2 border-indigo-500 pl-3">
                        <Clock className="w-4 h-4 text-slate-500" />
                        <h3 className="text-sm font-semibold text-slate-700">
                            Reporting & Fristen
                        </h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Input label="USt-Voranmeldung Turnus" />
                        <Input label="Dauerfristverlängerung" />
                        <Input label="Letzte Steuererklärung (Jahr)" />
                        <Input label="Letzte USt-Voranmeldung" />
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-2 mb-5 border-l-2 border-indigo-500 pl-3">
                        <AlertTriangle className="w-4 h-4 text-slate-500" />
                        <h3 className="text-sm font-semibold text-slate-700">
                            Steuerliche Besonderheiten
                        </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div >
                            <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
                                Innergemeinschaftliche Lieferungen?
                            </label>
                            <select className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500">
                                <option>Ja regelmäßig</option>
                                <option>Ja gelegentlich</option>
                                <option>Nein</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
                                §13b Reverse-Charge?
                            </label>
                            <select className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500">
                                <option>Ja regelmäßig</option>
                                <option>Ja gelegentlich</option>
                                <option>Nein</option>
                                <option>Nicht sicher</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">Besonderheiten</label>
                        <div className="relative">
                            <textarea
                                placeholder="z. B. Steuerliche Sonderregelungen, Besonderheiten in der Buchhaltung..."
                                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm
                       min-h-[110px] resize-none
                       focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500
                       placeholder:text-slate-400"
                            />

                            {/* subtle helper hint */}
                            <div className="mt-1 text-xs text-slate-400">
                                Hier kannst du spezielle steuerliche oder organisatorische Hinweise erfassen
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Input({ label, ...props }) {
    return (
        <div>
            <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
                {label}
            </label>
            <input
                {...props}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm
        focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500"
            />
        </div>
    );
}

export default TaxDetailField;