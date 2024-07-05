const Type = {
  Student:    "Student",
  Researcher: "Researcher"
}

function Profile(username, password, type) {
  this.username = username;
  this.password = password;
  this.type = type;
  this.statusLogin = false;
}

function Attempt(inProgress) {
  // General
  this.description    = "description";
	this.note           = "note";
  this.inProgress     = inProgress;
  this.timeStart      = null;
  this.timeEnd        = null;
  this.LLM            = null;
	this.testsFailed    = null;
  this.testsCorrect   = null;
  this.testsTotal     = null;

  // Specific
  if (!inProgress) {
    this.timeStart      = new Date("2024-07-01T00:00:00");
    this.timeEnd        = new Date("2024-07-01T00:10:00");
    this.LLM            = "LLM"
    this.testsFailed    = "testsFailed"
    this.testsCorrect   = 1;
    this.testsTotal     = 2;
  }
}

function Question_Attempts(id, sampleData) {
  // ID
  this.id = id;

  // Attempts
  let attempts = [];

  for (let i = 0; i < sampleData.length; i++) {
    attempts.push(new Attempt(sampleData[i]));
  }

  this.attempts = attempts;
}

function User(username, password, type)
{
  // Profile
  this.profile = new Profile(username, password, type);

  // Questions
  let questions = [];

  QA_1 = new Question_Attempts(1, [false, false, true]);  questions.push(QA_1);
  QA_2 = new Question_Attempts(2, [false]);               questions.push(QA_2);
  QA_3 = new Question_Attempts(3, [true]);                questions.push(QA_3);
  QA_4 = new Question_Attempts(4, []);                    questions.push(QA_4);
  QA_5 = new Question_Attempts(5, []);                    questions.push(QA_5);
  QA_6 = new Question_Attempts(6, []);                    questions.push(QA_6);
  QA_7 = new Question_Attempts(7, []);                    questions.push(QA_7);
  QA_8 = new Question_Attempts(8, []);                    questions.push(QA_8);

  this.questions = questions;
}

function user_data()
{
  // Variable
  let users = [];

  // User
  users.push(new User("Student_A", "pStudent_A", Type.Student));
  users.push(new User("Student_B", "pStudent_B", Type.Student));
  users.push(new User("Student_C", "pStudent_C", Type.Student));
  users.push(new User("Researcher_A", "pResearcher_A", Type.Researcher));

  // Return
  return { users: users };
}