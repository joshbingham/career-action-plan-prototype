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

  return (
    <main>
      <h1>Session Setup</h1>

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
        <SessionForm
          studentName={studentName}
          organisation={organisation}
          date={date}
          onStudentNameChange={setStudentName}
          onOrganisationChange={setOrganisation}
          onDateChange={setDate}
        />
      )}
    </main>
  );
}

export default App;
