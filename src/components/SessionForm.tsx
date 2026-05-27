type SessionFormProps = {
  studentName: string;
  organisation: string;
  date: string;
  onStudentNameChange: (value: string) => void;
  onOrganisationChange: (value: string) => void;
  onDateChange: (value: string) => void;
};

function SessionForm({
  studentName,
  organisation,
  date,
  onStudentNameChange,
  onOrganisationChange,
  onDateChange,
}: SessionFormProps) {
  return (
    <section className="session-form">
      <h2>Session Details</h2>

      <div className="form-group">
        <label htmlFor="studentName">
          Student / Client Name *
        </label>

        <input
          id="studentName"
          type="text"
          value={studentName}
          onChange={(e) => onStudentNameChange(e.target.value)}
          placeholder="Enter student or client name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="organisation">
          Organisation *
        </label>

        <input
          id="organisation"
          type="text"
          value={organisation}
          onChange={(e) => onOrganisationChange(e.target.value)}
          placeholder="Enter organisation name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="date">
          Date *
        </label>

        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
        />
      </div>
    </section>
  );
}

export default SessionForm;