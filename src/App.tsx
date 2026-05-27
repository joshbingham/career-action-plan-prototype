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

      <p className="section-intro">
        Select an action plan template to begin.
      </p>

      <div className="template-grid">
        <TemplateCard
          title="Elev8 CAP"
          description="Career action planning focused on pathways, future goals and next steps."
          selected={selectedTemplate === 'Elev8 CAP'}
          onSelect={setSelectedTemplate}
        />

        <TemplateCard
          title="Manifest CAP"
          description="Structured guidance planning with reflection, barriers and SMART actions."
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

      {selectedTemplate && !isComplete && (
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
