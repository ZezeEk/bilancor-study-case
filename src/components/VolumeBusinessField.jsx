import { CreditCard, Wallet, Banknote, BarChart3 } from "lucide-react";

function VolumeBusinessField() {
    return (
        <div >
            {/* Section title */}
            <div className="mb-8 border-b border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-slate-900">
                            Volumen & Geschäft
                        </h2>
                    </div>
                </div>
            </div>
            {/* Fields */}
            <div className="space-y-5">
                <div>
                    <div className="flex items-center gap-2 mb-5 border-l-2 border-indigo-500 pl-3">
                        <Wallet className="w-4 h-4 text-slate-500" />
                        <h3 className="text-sm font-semibold text-slate-700">
                            Finanzdaten
                        </h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Input
                            label="Jahresumsatz"
                            placeholder="z.B. 250.000 €"
                            type="number"
                        />
                        <Input
                            label="Bankkonten (Anzahl)"
                            placeholder=""
                            type="number"
                        />
                    </div>
                    {/* Grid row */}
                    <div className="grid md:grid-cols-3 gap-4">
                        <div>
                            <Input
                                label="Eingangsbelege / Monat"
                                type="number"
                            />
                        </div>
                        <div>
                            <Input
                                label="Ausgangsbelege / Monat"
                                type="number"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-5 border-l-2 border-indigo-500 pl-3">
                        <Banknote className="w-4 h-4 text-slate-500" />
                        <h3 className="text-sm font-semibold text-slate-700">
                            Banking
                        </h3>
                    </div>
                    {/* Grid row */}
                    <div className="grid md:grid-cols-3 gap-4">
                        <Input
                            label="Hauptbank"
                            type="text"
                        />
                        <Input
                            label="BIC"
                        />
                    </div>
                    <div className="mt-4">
                        <Input
                            label=" IBAN (Hauptkonto)"
                        />
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-5 border-l-2 border-indigo-500 pl-3">
                        <CreditCard className="w-4 h-4 text-slate-500" />
                        <h3 className="text-sm font-semibold text-slate-700">
                            Zahlungsverkehr
                        </h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div>
                            <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
                                Kassensystem / TSE
                            </label>
                            <select className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500">
                                <option>Nein</option>
                                <option>Ja mit TSE</option>
                                <option>Ja ohne TSE</option>
                                <option>Nicht sicher</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
                                Bargeldverkehr
                            </label>
                            <select className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500">
                                <option>Kein Bargeld</option>
                                <option>Gering</option>
                                <option>Mittel</option>
                                <option>Hoch</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-4">
                        <Input
                            label="Zahlungsdienstleister"
                            placeholder=""
                        />
                    </div>
                    <div className="mt-4">
                        <Input
                            label="Kreditkarten im Unternehmen"
                            placeholder=""
                        />
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

export default VolumeBusinessField;