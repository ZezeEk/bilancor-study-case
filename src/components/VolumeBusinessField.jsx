function VolumeBusinessField() {
    return (
        <div >
            {/* Section title */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold">Volumen & Geschäft</h2>
            </div>

            {/* Fields */}
            <div className="space-y-5">
                {/* Finanzdaten */}
                <div>
                    {/* <h3 className="text-sm font-semibold text-slate-800 mb-4">
                        💰 Finanzdaten
                    </h3> */}
                    <div className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 border border-indigo-100 mb-4">
                        💰 Finanzdaten
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
                    {/* <h3 className="text-sm font-semibold text-slate-800 mb-4">
                        🏦 Banking
                    </h3> */}
                     <div className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 border border-indigo-100 mb-4">
                        🏦 Banking
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
                    {/* <h3 className="text-sm font-semibold text-slate-800 mb-4">
                        💳 Zahlungsverkehr
                    </h3> */}
                     <div className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 border border-indigo-100 mb-4">
                        💳 Zahlungsverkehr
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div>
                            <label className="text-sm font-medium block mb-1.5">
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
                            <label className="text-sm font-medium block mb-1.5">
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

export default VolumeBusinessField;