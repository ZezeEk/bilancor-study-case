function AccountingStatusField() {
    return (
        <div >
            {/* Section title */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold">📊 Buchhaltungsstatus</h2>
            </div>

            {/* Fields */}
            <div className="space-y-5">
                <div>
                    <div className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 border border-indigo-100 mb-4">
                        📅 Status & Zeitraum
                    </div>
                    <Input
                        label="BuHa aktuell bis"
                        type="date"
                    />
                </div>
                <div>
                    <div className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 border border-indigo-100 mb-4">
                        💻 Systeme & Prozesse
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
                    <div className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 border border-indigo-100 mb-4">
                        🚗 Assets & Verträge
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-medium block mb-1.5">
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
                            <label className="text-sm font-medium block mb-1.5">
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
            <label className="text-sm font-medium block mb-1.5 text-slate-700">
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