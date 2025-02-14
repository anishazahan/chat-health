import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Checkbox from "../Checkbox";
import Input from "../Input";
import PaymentInfoForm from "./PaymentInfoForm";

const SymptomsForm = () => {
  const symptoms = [
    "Common Cold or flu",
    "Headache or migraine",
    "Low back pain (due to muscle strain)",
    "Period pain",
    "Dental pain",
    "Cough",
    "Sneezing or runny nose",
    "Food poisoning or stomach upset",
    "Hay fever or allergies",
    "Other",
    "Minor injury",
  ];

  const urgentSymptoms = [
    "Difficulty breathing",
    "Shortness of breath",
    "Fever over 39C",
    "Extreme pain",
    "Visual disturbances",
    "A sudden onset severe headache worse than any previous headache",
    "Sudden changes in your vision, dizziness or confusion",
    "Severe, unrelenting vomiting and are unable to keep any fluids down",
  ];

  // State for the form fields
  const [leaveDate, setLeaveDate] = useState("");
  const [isUnwell, setIsUnwell] = useState(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [symptomsDate, setSymptomsDate] = useState("");
  const [canManageAtHome, setCanManageAtHome] = useState(null);
  const [affectsWork, setAffectsWork] = useState(null);
  const [requiresUrgentAttention, setRequiresUrgentAttention] = useState(null);
  const [willSeeDoctor, setWillSeeDoctor] = useState(null);
  const [selectedUrgentSymptoms, setSelectedUrgentSymptoms] = useState([]);
  const [relatesToLegalMatter, setRelatesToLegalMatter] = useState(null);

  // Handle checkbox change for symptoms
  const handleSymptomChange = (symptom, isChecked) => {
    if (isChecked) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    } else {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom));
    }
  };

  // Handle checkbox change for urgent symptoms
  const handleUrgentSymptomChange = (symptom, isChecked) => {
    if (isChecked) {
      setSelectedUrgentSymptoms([...selectedUrgentSymptoms, symptom]);
    } else {
      setSelectedUrgentSymptoms(selectedUrgentSymptoms.filter((s) => s !== symptom));
    }
  };

  return (
    <div className="mt-6 w-full">
      <h2 className="mb-4 font-inter font-medium">Leave Date</h2>
      <Input
        icon={<FaCalendarAlt />}
        placeholder="DD/MM/YYYY"
        type="date"
        value={leaveDate}
        onChange={(e) => setLeaveDate(e.target.value)}
      />

      <h2 className="mt-6 mb-4 font-inter font-medium">
        Are you feeling unwell/unfit for work today due to a minor ailment/illness or injury?
      </h2>
      <div className="flex space-x-4">
        <Checkbox label="Yes" checked={isUnwell === true} onChange={(checked) => setIsUnwell(checked)} />
        <Checkbox label="No" checked={isUnwell === false} onChange={(checked) => setIsUnwell(!checked)} />
      </div>

      <h2 className="mt-6 mb-4 font-inter font-medium">Please choose from one of the following symptoms?</h2>
      <div className="flex w-full flex-wrap gap-x-4 gap-y-3">
        {symptoms.map((symptom, index) => (
          <div
            key={index}
            onClick={() => handleSymptomChange(symptom, !selectedSymptoms.includes(symptom))}
            className={`border rounded-full hover:cursor-pointer hover:bg-primary-light px-4 py-2 text-gra-600 text-sm ${
              selectedSymptoms.includes(symptom) && "bg-primary-light border-teal-500"
            }`}
          >
            <p>{symptom}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-6 mb-4 font-inter font-medium">When did these symptoms first arise?</h2>
      <Input
        icon={<FaCalendarAlt />}
        placeholder="DD/MM/YYYY"
        type="date"
        value={symptomsDate}
        onChange={(e) => setSymptomsDate(e.target.value)}
      />

      <h2 className="mt-6 mb-4 font-inter font-medium">
        Are your symptoms mild and can you manage them at home by yourself?
      </h2>
      <div className="flex space-x-4">
        <Checkbox label="Yes" checked={canManageAtHome === true} onChange={(checked) => setCanManageAtHome(checked)} />
        <Checkbox label="No" checked={canManageAtHome === false} onChange={(checked) => setCanManageAtHome(!checked)} />
      </div>

      <h2 className="mt-6 mb-4 font-inter font-medium">Will your symptoms affect your work duties?</h2>
      <div className="flex space-x-4">
        <Checkbox label="Yes" checked={affectsWork === true} onChange={(checked) => setAffectsWork(checked)} />
        <Checkbox label="No" checked={affectsWork === false} onChange={(checked) => setAffectsWork(!checked)} />
      </div>

      <h2 className="mt-6 mb-4 font-inter font-medium">Do your symptoms require urgent medical attention?</h2>
      <div className="flex space-x-4">
        <Checkbox
          label="Yes"
          checked={requiresUrgentAttention === true}
          onChange={(checked) => setRequiresUrgentAttention(checked)}
        />
        <Checkbox
          label="No"
          checked={requiresUrgentAttention === false}
          onChange={(checked) => setRequiresUrgentAttention(!checked)}
        />
      </div>

      <h2 className="mt-6 mb-4 font-inter font-medium">
        Will you see a doctor or seek medical attention if your symptoms do not improve or get worse within 24 hours?
      </h2>
      <div className="flex space-x-4">
        <Checkbox label="Yes" checked={willSeeDoctor === true} onChange={(checked) => setWillSeeDoctor(checked)} />
        <Checkbox label="No" checked={willSeeDoctor === false} onChange={(checked) => setWillSeeDoctor(!checked)} />
      </div>

      <h2 className="mt-6 mb-4 font-inter font-medium">Do you have ANY of the following symptoms?</h2>
      <ul className="space-y-3 list-disc pl-6">
        {urgentSymptoms.map((symptom, index) => (
          <li key={index} className="text-sm text-gray-700 ">
            {symptom}
          </li>
        ))}
      </ul>

      <div className="flex space-x-4 mt-6">
        <Checkbox
          label="Yes"
          checked={relatesToLegalMatter === true}
          onChange={(checked) => setRelatesToLegalMatter(checked)}
        />
        <Checkbox
          label="No"
          checked={relatesToLegalMatter === false}
          onChange={(checked) => setRelatesToLegalMatter(!checked)}
        />
      </div>

      <h2 className="mt-6 mb-4 font-inter font-medium">
        Does your current health issue (reason for requesting this certificate) relate to a legal matter?
      </h2>
      <div className="flex space-x-4">
        <Checkbox
          label="Yes"
          checked={relatesToLegalMatter === true}
          onChange={(checked) => setRelatesToLegalMatter(checked)}
        />
        <Checkbox
          label="No"
          checked={relatesToLegalMatter === false}
          onChange={(checked) => setRelatesToLegalMatter(!checked)}
        />
      </div>

      <h2 className="mt-6 mb-4 font-inter font-medium">Are you currently located in Australia?</h2>
      <div className="flex space-x-4">
        <Checkbox
          label="Yes"
          checked={relatesToLegalMatter === true}
          onChange={(checked) => setRelatesToLegalMatter(checked)}
        />
        <Checkbox
          label="No"
          checked={relatesToLegalMatter === false}
          onChange={(checked) => setRelatesToLegalMatter(!checked)}
        />
      </div>
      <h2 className="mt-6 mb-4 font-inter font-medium">
        Have you understood and answered all of these questions accurately?
      </h2>
      <div className="flex space-x-4">
        <Checkbox
          label="Yes"
          checked={relatesToLegalMatter === true}
          onChange={(checked) => setRelatesToLegalMatter(checked)}
        />
        <Checkbox
          label="No"
          checked={relatesToLegalMatter === false}
          onChange={(checked) => setRelatesToLegalMatter(!checked)}
        />
      </div>

      {/*-------- consent--------- */}

      <div className="mt-6 w-full">
        <h2 className="mb-4 font-inter font-semibold">Consent</h2>
        <div className=" ">
          <p className="text-sm text-gray-700 mb-4 leading-6">
            <b>YOUR AGREEMENT</b> By agreeing to this release form, you agree to be bound by and comply with the
            <span className="font-semibold"> Terms and Conditions</span>. If you do not agree to these Terms and
            Conditions, please do not tick the box. By using our service you agree to the certificate dated for today’s
            date.
          </p>

          <h3 className="font-inter font-semibold text-gray-800 mb-4">PLEASE NOTE</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-3 mb-4 pl-3">
            <li className="leading-6">
              Certificates are issued by Pharmacists, not as a medical practitioner/doctor and issued from the date that
              the consultation took place.
            </li>
            <li className="leading-6">
              The consultation is not intended to replace medical treatment, opinion or diagnosis.
            </li>
            <li className="leading-6">
              You agree that if your illness/injury persists or worsens, you will seek medical attention/see a doctor.
            </li>
            <li className="leading-6">
              Pharmacists can only issue a certificate (Fair Work Act 2009) if in his/her professional opinion you are
              required to be absent from work/university due to personal minor illness/injury OR the need to care for a
              member of your family/household who is ill/injured.
            </li>
            <li className="leading-6">
              Pharmacists can only issue certificates in relation to illness/injury that they are professionally
              qualified to assess.
            </li>
            <li>Certificates cannot be backdated.</li>
          </ul>

          <p className="text-sm  font-medium mb-6">
            Ask your employer FIRST if a certificate issued by a pharmacist will be satisfactory.
          </p>

          <div className="flex items-center space-x-2">
            <Checkbox
              label={
                <span className="text-sm text-gray-700">
                  By checking this box, you confirm that you have read and agree to the information in the section above
                  and accept our{" "}
                  <a href="" className=" text-blue-500">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="" className="text-blue-500">
                    Privacy Policy
                  </a>
                  . You can access the full terms and conditions and privacy policy{" "}
                  <a href="#" className="text-primary-dark underline">
                    here
                  </a>
                  .
                </span>
              }
              checked={false}
              onChange={(checked) => console.log("Consent agreed:", checked)}
            />
          </div>
        </div>
      </div>

      {/* payment info */}

      <PaymentInfoForm />
    </div>
  );
};

export default SymptomsForm;
