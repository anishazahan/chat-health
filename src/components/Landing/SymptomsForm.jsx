import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Checkbox from "../Checkbox";
import Input from "../Input";

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

  // State for the form fields
  const [leaveDate, setLeaveDate] = useState("");
  const [isUnwell, setIsUnwell] = useState(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [symptomsDate, setSymptomsDate] = useState("");
  const [canManageAtHome, setCanManageAtHome] = useState(null);
  const [affectsWork, setAffectsWork] = useState(null);

  // Handle checkbox change for symptoms
  const handleSymptomChange = (symptom, isChecked) => {
    if (isChecked) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    } else {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom));
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
          //   <Checkbox
          //     key={index}
          //     label={symptom}
          //     checked={selectedSymptoms.includes(symptom)}
          //     onChange={(checked) => handleSymptomChange(symptom, checked)}
          //   />
          <div
            key={index}
            onClick={(checked) => handleSymptomChange(symptom, checked)}
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
    </div>
  );
};

export default SymptomsForm;
