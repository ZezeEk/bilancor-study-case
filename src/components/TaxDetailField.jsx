function TaxDetailField() {
    return (
        <div >
            {/* Section title */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold">Steuerliche Eckdaten</h2>
            </div>

            {/* Fields */}
            <div className="space-y-5">
                <div>
                    <div className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 border border-indigo-100 mb-4">
                        🧾 Identifikationsdaten
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Input label="Steuernummer" />
                        <Input label="USt-IdNr." />
                        <Input label="Zuständiges Finanzamt" />
                    </div>
                </div>
                <div>
                    <div className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 border border-indigo-100 mb-4">
                        ⚙️ Buchhaltung & Setup
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-medium block mb-1.5">
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
                    <div className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 border border-indigo-100 mb-4">
                        📅 Reporting & Fristen
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Input label="USt-Voranmeldung Turnus" />
                        <Input label="Dauerfristverlängerung" />
                        <Input label="Letzte Steuererklärung (Jahr)" />
                        <Input label="Letzte USt-Voranmeldung" />
                    </div>
                </div>

                <div>
                    <div className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 border border-indigo-100 mb-4">
                        ⚠️ Steuerliche Besonderheiten
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div >
                            <label className="text-sm font-medium block mb-1.5">
                                Innergemeinschaftliche Lieferungen?
                            </label>
                            <select className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500">
                                <option>Ja regelmäßig</option>
                                <option>Ja gelegentlich</option>
                                <option>Nein</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-sm font-medium block mb-1.5">
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
                        <label className="label">Besonderheiten</label>
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

export default TaxDetailField;