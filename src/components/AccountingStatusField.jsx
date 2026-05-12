import { Calendar, Monitor, Car, BookOpen } from "lucide-react";

function AccountingStatusField() {
    return (
        <div >
            {/* Section title */}
            <div className="mb-8 border-b border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-slate-900">
                            Buchhaltungsstatus
                        </h2>
                    </div>
                </div>
            </div>

            {/* Fields */}
            <div className="space-y-5">
                <div>
                    <div className="flex items-center gap-2 mb-5 border-l-2 border-indigo-500 pl-3">
                        <Calendar className="w-4 h-4 text-slate-500" />
                        <h3 className="text-sm font-semibold text-slate-700">
                            Status & Zeitraum
                        </h3>
                    </div>
                    <Input
                        label="BuHa aktuell bis"
                        type="date"
                    />
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-5 border-l-2 border-indigo-500 pl-3">
                        <Monitor className="w-4 h-4 text-slate-500" />
                        <h3 className="text-sm font-semibold text-slate-700">
                            Systeme & Prozesse
                        </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Input
                            label="Bisherige Software"
                            placeholder="z. B. DATEV, Lexoffice, SevDesk"
                        />
                        <Input
                            label="Lohnbuchhaltung durch"
                            placeholder="Bilancor / intern / Steuerberater"
                        />
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-5 border-l-2 border-indigo-500 pl-3">
                        <Car className="w-4 h-4 text-slate-500" />
                        <h3 className="text-sm font-semibold text-slate-700">
                            Assets & Verträge
                        </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
                                Firmenwagen vorhanden?
                            </label>
                            <select className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500">
                                <option>Nein</option>
                                <option>Ja – 1%-Regelung</option>
                                <option>Ja – Fahrtenbuch</option>
                                <option>Ja – nicht sicher</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
                                Offene Darlehen / Leasingverträge?
                            </label>
                            <select className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500">
                                <option>Nein</option>
                                <option>Ja</option>
                                <option>Nicht sicher</option>
                            </select>
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

export default AccountingStatusField;