function ContactSupportField() {
    return (
        <div >
            {/* Section title */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold">
                    👥 Kontakte & Betreuung
                </h2>
            </div>

            {/* Fields */}
            <div className="space-y-5">
                <div>
                    <div className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 border border-indigo-100 mb-4">
                        👤 Kontaktperson
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Input
                            label="Name"
                            placeholder="Vor- und Nachname"
                        />
                        <Input
                            label="Telefon"
                            placeholder="+49 170 1234567"
                        />
                    </div>
                    <div className="mt-4">
                        <Input
                            label="E-Mail"
                            placeholder="name@firma.de"
                            type="email"
                        />
                    </div>
                </div>
                <div>
                    <div className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 border border-indigo-100 mb-4">
                        🧾 Vorheriger Steuerberater
                    </div>
                    <div className="mt-4">
                        <Input label="Name" />
                    </div>
                    <div className="mt-4">
                        <Input label="Kanzlei" />
                    </div>
                    <div className="mt-4">
                        <Input
                            label="E-Mail"
                            placeholder="name@firma.de"
                            type="email"
                        />
                    </div>
                    <div className="mt-4">
                        <Input
                            label="Telefon"
                            placeholder="+49 170 1234567"
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

export default ContactSupportField;