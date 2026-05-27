import { useState } from 'react';
import TemplateCard from './components/TemplateCard';
import SessionForm from './components/SessionForm';
import type { TemplateType } from './types';

function App() {
  const [selectedTemplate, setSelectedTemplate] =
    useState<TemplateType | null>(null);
  const [studentName, setStudentName] = useState('');
  const [organisation, setOrganisation] = useState('');
  const today = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState(today);
  const [isComplete, setIsComplete] = useState(false);

  const isFormValid =
    selectedTemplate &&
    studentName.trim() !== '' &&
    organisation.trim() !== '' &&
    date.trim() !== '';

  function handleContinue() {
    if (!isFormValid) return;

    setIsComplete(true);
  }



  return (
    <main>
      <h1>Career Action Plan Session Setup</h1>

      <div className="template-grid">
        <TemplateCard
          title="Elev8 CAP"
          description="Structured action planning for student guidance sessions."
          selected={selectedTemplate === 'Elev8 CAP'}
          onSelect={setSelectedTemplate}
        />

        <TemplateCard
          title="Manifest CAP"
          description="Flexible career action planning and progression tracking."
          selected={selectedTemplate === 'Manifest CAP'}
          onSelect={setSelectedTemplate}
        />
      </div>

      {selectedTemplate && (
        <p className="selected-template">
          Selected template: <strong>{selectedTemplate}</strong>
        </p>
      )}

      {selectedTemplate && (
        <SessionForm
          studentName={studentName}
          organisation={organisation}
          date={date}
          onStudentNameChange={setStudentName}
          onOrganisationChange={setOrganisation}
          onDateChange={setDate}
        />
      )}

      {selectedTemplate && (
        <button
          className="continue-button"
          disabled={!isFormValid}
          onClick={handleContinue}
        >
          Continue
        </button>
      )}

      {isComplete && (
        <div className="confirmation-message">
          Session setup complete
        </div>
      )}
    </main>
  );
}

export default App;
