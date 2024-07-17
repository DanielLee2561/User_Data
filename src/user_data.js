const Type = {
  Student:    "Student",
  Researcher: "Researcher"
}

function Attempt(inProgress) {
  // General
  this.description      = "description";
	this.notes            = "note";
  this.inProgress       = inProgress;
  this.startTime        = null;
  this.endTime          = null;
  this.duration         = null;
  this.generatedCode    = null;
	this.failingTestCases = null;
  this.testCorrect      = null;
  this.testTotal        = null;

  // Specific
  if (!inProgress) {
    this.startTime        = new Date("2024-07-01T00:00:00");
    this.endTime          = new Date("2024-07-01T00:10:00");
    this.duration         = (this.endTime - this.startTime) / 1000;
    this.generatedCode    = "LLM"
    this.failingTestCases = "testsFailed"
    this.testCorrect      = 1;
    this.testTotal        = 2;
  }
}

function Question_Attempts(id, sampleData) {
  // ID
  this.questionId = id;

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
  this.username = username;
  this.password = password;
  this.type = type;
  this.statusLogin = false;

  // Questions
  let questions = [];

  QA_1 = new Question_Attempts(1, [false, false, false, true]); questions.push(QA_1);
  QA_2 = new Question_Attempts(2, [false]);                     questions.push(QA_2);
  QA_3 = new Question_Attempts(3, [false]);                     questions.push(QA_3);
  QA_4 = new Question_Attempts(4, [false]);                     questions.push(QA_4);
  QA_5 = new Question_Attempts(5, [false]);                     questions.push(QA_5);
  QA_6 = new Question_Attempts(6, [false]);                     questions.push(QA_6);
  QA_7 = new Question_Attempts(7, [false]);                     questions.push(QA_7);
  QA_8 = new Question_Attempts(8, [false]);                     questions.push(QA_8);
  QA_9 = new Question_Attempts(9, [true]);                      questions.push(QA_9);
  QA_10 = new Question_Attempts(10, []);                        questions.push(QA_10);

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