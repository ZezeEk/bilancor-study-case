import { useEffect, useState } from "react";
import { Users, Building2, MapPin, Landmark, Calendar, BriefcaseBusiness } from "lucide-react";

function CompanyField() {
    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [form, setForm] = useState({
        firmenname: "",
        rechtsform: "",
        handelsregister: "",
        registergericht: "",
    });

    const legalForms = [
        "GmbH",
        "UG (haftungsbeschränkt)",
        "GbR",
        "Einzelunternehmen",
        "OHG",
        "KG",
        "GmbH & Co. KG",
        "AG",
        "eG",
        "Freiberufler",
        "Sonstige",
    ];

    const normalizeLegalForm = (value) => {
        const map = {
            gmbh: "GmbH",
            ug: "UG (haftungsbeschränkt)",
            ag: "AG",
            gbr: "GbR",
            einzelunternehmen: "Einzelunternehmen",
            kg: "KG",
            ohg: "OHG",
            ev: "Sonstige",
        };

        return map[value?.toLowerCase()] || "Sonstige";
    };

    useEffect(() => {
        if (query.length < 3) {
            setResult([]);
            setOpen(false);
            return;
        };

        if (!open) return;

        const timeout = setTimeout(() => {
            fetchResult(query);
        }, 400);

        return () => clearTimeout(timeout);
    }, [query]);

    useEffect(() => {
        const handler = () => setOpen(false);
        document.addEventListener("click", handler);
        return () => document.removeEventListener("click", handler);
    }, []);

    async function fetchResult(value) {
        setLoading(true);
        const response = await fetch(`/api/company?query=${value}`);


        const data = await response.json();

        setResult(data.results || []);

        // await new Promise((resolve) => setTimeout(resolve, 3000));

        // const mockCompanies = [
        //     {
        //         active: true,
        //         company_id: "DE-HRB-123456",
        //         country: "DE",
        //         legal_form: "gmbh",
        //         name: "Mustermann GmbH",
        //         register_court: "Berlin",
        //         register_number: "123456",
        //         register_type: "HRB",
        //     },
        //     {
        //         active: true,
        //         company_id: "DE-HRA-987654",
        //         country: "DE",
        //         legal_form: "kg",
        //         name: "Müller & Partner KG",
        //         register_court: "Hamburg",
        //         register_number: "987654",
        //         register_type: "HRA",
        //     },
        //     {
        //         active: false,
        //         company_id: "DE-HRB-555555",
        //         country: "DE",
        //         legal_form: "ug",
        //         name: "Startup Vision UG",
        //         register_court: "München",
        //         register_number: "555555",
        //         register_type: "HRB",
        //     },
        //     {
        //         active: true,
        //         company_id: "DE-VR-83669",
        //         country: "DE",
        //         legal_form: "ev",
        //         name: "Kulturverein Mus Hasköy e.V.",
        //         register_court: "Darmstadt",
        //         register_number: "83669",
        //         register_type: "VR",
        //     },
        //     {
        //         active: false,
        //         company_id: "DE-HRB-777777",
        //         country: "DE",
        //         legal_form: "ag",
        //         name: "Future Energy AG",
        //         register_court: "Frankfurt am Main",
        //         register_number: "777777",
        //         register_type: "HRB",
        //     },
        // ];

        // setResult(mockCompanies || []);

        setOpen(true);
        setLoading(false);
    }

    function handleSelect(item) {
        if (!item.active) return;
        setQuery(item.name);
        setOpen(false);

        const newForm = {
            firmenname: item.name,
            rechtsform: normalizeLegalForm(item.legal_form),
            handelsregister: item.register_number,
            registergericht: item.register_court,
        };

        setSelectedCompany(item);

        setForm(newForm);
    }

    return (
        <div >
            {/* Section title */}
            <div className="mb-8 border-b border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-slate-900">
                            Unternehmen
                        </h2>
                    </div>
                </div>
            </div>

            {/* Fields */}
            <div className="space-y-5">
                {/* Firmenname */}
                <div>
                    <div className="flex items-center gap-2 mb-5 border-l-2 border-indigo-500 pl-3">
                        <BriefcaseBusiness className="w-4 h-4 text-slate-500" />
                        <h3 className="text-sm font-semibold text-slate-700">
                            Basisdaten
                        </h3>
                    </div>
                    <div>
                        <Input
                            label='Firmenname'
                            value={query}
                            onChange={(e) => { setQuery(e.target.value), setOpen(true) }}
                            placeholder="z. B. Mustermann GmbH"
                        />
                    </div>
                    <div className="relative">
                        {loading && (
                            <div className="absolute z-10 w-full mt-2 bg-white border rounded-lg shadow-lg">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="px-4 py-3 animate-pulse">
                                        <div className="h-3 w-2/3 bg-slate-200 rounded"></div>
                                        <div className="h-2 w-1/3 bg-slate-100 rounded mt-2"></div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {!loading && open && result.length === 0 && (
                            <div className="absolute z-10 w-full mt-2 bg-white border rounded-lg shadow-lg p-3 text-sm text-slate-500">
                                Kein Registereintrag gefunden. Bitte manuell eingeben.
                            </div>
                        )}
                        {!loading && open && result?.length > 0 && (
                            <div className="absolute z-10 w-full mt-2 bg-white border rounded-lg shadow-lg">
                                {
                                    result.map((item) => (
                                        <div
                                            key={item.company_id}
                                            onClick={() => handleSelect(item)}
                                            className={`px-4 py-2 text-sm ${item.active
                                                ? "hover:bg-slate-100 cursor-pointer"
                                                : "opacity-40 cursor-not-allowed"
                                                }`}
                                        >
                                            <div className="font-medium">{item.name}</div>
                                            <span className={item.active ? "text-green-600 text-xs" : "text-red-600 text-xs"}>
                                                {item.active ? "Aktiv" : "Inaktiv"}
                                            </span>
                                        </div>
                                    ))
                                }
                            </div>
                        )}
                        {selectedCompany && !selectedCompany.active && (
                            <div className="mt-3 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                                ⚠️ Dieses Unternehmen ist laut Handelsregister inaktiv oder aufgelöst.
                            </div>
                        )}
                    </div>


                    {/* Grid row */}
                    <div className="grid md:grid-cols-3 gap-4">
                        <div>
                            <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
                                Rechtsform
                            </label>
                            <select
                                value={form.rechtsform}
                                onChange={(e) => setForm({ ...form, rechtsform: e.target.value })}
                                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500">
                                {legalForms.map((item) => (
                                    <option key={item} value={item}>{item}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
                                Branche
                            </label>
                            <select className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500">
                                <option>Software</option>
                                <option>E-Commerce</option>
                                <option>Beratung</option>
                                <option>Handel</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-5 border-l-2 border-indigo-500 pl-3">
                        <Users className="w-4 h-4 text-slate-500" />
                        <h3 className="text-sm font-semibold text-slate-700">
                            Team & Größe
                        </h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="md:col-span-2">
                            <Input label='Geschäftsführer / Inhaber' />
                        </div>
                        <div>
                            <Input label='Mitarbeiter' type="number" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-5 border-l-2 border-indigo-500 pl-3">
                        <Landmark className="w-4 h-4 text-slate-500" />
                        <h3 className="text-sm font-semibold text-slate-700">
                            Registerdaten
                        </h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Input
                            label="handelsregister"
                            onChange={(e) => setForm({ ...form, handelsregister: e.target.value })}
                            value={form.handelsregister}

                        />
                        <Input
                            value={form.registergericht}
                            onChange={(e) => setForm({ ...form, registergericht: e.target.value })}
                            label="HR-Gericht" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Input label="Land" />
                        <Input label="Website" />
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-5 border-l-2 border-indigo-500 pl-3">
                        <Calendar className="w-4 h-4 text-slate-500" />
                        <h3 className="text-sm font-semibold text-slate-700">
                            Gründung
                        </h3>
                    </div>
                    <div >
                        <Input label="Gründungsdatum" type="date" placeholder='TT.MM.JJJJ' className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-[13px]" />
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-5 border-l-2 border-indigo-500 pl-3">
                        <MapPin className="w-4 h-4 text-slate-500" />
                        <h3 className="text-sm font-semibold text-slate-700">
                            Adresse
                        </h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="md:col-span-2">
                            <Input label='Straße' />
                        </div>
                        <div>
                            <Input label='Hausnr.' />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div>
                            <Input label='PLZ' />
                        </div>
                        <div className="md:col-span-2">
                            <Input label='Ort' />
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

export default CompanyField;