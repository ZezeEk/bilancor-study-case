import { User, FileText, Phone } from "lucide-react";

function ContactSupportField() {
    return (
        <div >
            {/* Section title */}
            <div className="mb-8 border-b border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-slate-900">
                            Kontakte & Betreuung
                        </h2>
                    </div>
                </div>
            </div>

            {/* Fields */}
            <div className="space-y-5">
                <div>
                    <div className="flex items-center gap-2 mb-5 border-l-2 border-indigo-500 pl-3">
                        <User className="w-4 h-4 text-slate-500" />
                        <h3 className="text-sm font-semibold text-slate-700">
                            Kontaktperson
                        </h3>
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
                    <div className="flex items-center gap-2 mb-5 border-l-2 border-indigo-500 pl-3">
                        <FileText className="w-4 h-4 text-slate-500" />
                        <h3 className="text-sm font-semibold text-slate-700">
                            Vorheriger Steuerberater
                        </h3>
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

export default ContactSupportField;